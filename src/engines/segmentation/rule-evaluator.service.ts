import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../shared/prisma/prisma.service';

/**
 * JSON Rule DSL Interpreter for the Segmentation Engine.
 *
 * Supports 4 condition types as specified in the SRS:
 *   - attribute:      Match on customer/baby profile fields
 *   - event:          Match on event history (count, last occurrence, etc.)
 *   - segment:        Check membership in another segment
 *   - relative_date:  Date-based conditions relative to now
 *
 * Supports AND/OR nesting up to 4 levels deep.
 *
 * Rule DSL example:
 * {
 *   "operator": "AND",
 *   "conditions": [
 *     { "type": "attribute", "field": "customer.registration_source", "op": "eq", "value": "website" },
 *     { "type": "event", "event_type": "order.completed", "op": "gte", "value": 2, "timeframe_days": 90 },
 *     { "type": "relative_date", "field": "baby.date_of_birth", "op": "within_days", "value": 180 },
 *     {
 *       "operator": "OR",
 *       "conditions": [
 *         { "type": "segment", "segment_code": "high_value_customers", "op": "member_of" },
 *         { "type": "attribute", "field": "loyalty_account.tier_code", "op": "in", "value": ["SILVER", "GOLD"] }
 *       ]
 *     }
 *   ]
 * }
 */

// ---------- Type definitions for the rule DSL ----------

export interface RuleGroup {
  operator: 'AND' | 'OR';
  conditions: (RuleGroup | RuleCondition)[];
}

export interface RuleCondition {
  type: 'attribute' | 'event' | 'segment' | 'relative_date';
  field?: string;
  event_type?: string;
  segment_code?: string;
  op: string; // eq, neq, gt, gte, lt, lte, in, not_in, contains, is_null, is_not_null, member_of, not_member_of, within_days, before_days
  value?: any;
  timeframe_days?: number;
}

interface EvaluationContext {
  customer: Record<string, any>;
  babies: Record<string, any>[];
  loyaltyAccount: Record<string, any> | null;
  eventCounts: Map<string, number>;
  segmentMemberships: Set<string>;
}

@Injectable()
export class RuleEvaluatorService {
  private readonly logger = new Logger(RuleEvaluatorService.name);

  constructor(private prisma: PrismaService) {}

  /**
   * Evaluate a rule DSL against a single customer.
   * Returns true if the customer matches the rule.
   */
  async evaluateForCustomer(
    customerId: string,
    rules: RuleGroup,
  ): Promise<boolean> {
    const context = await this.buildContext(customerId);
    return this.evaluateGroup(rules, context, 0);
  }

  /**
   * Evaluate a rule DSL against ALL customers.
   * Returns an array of matching customer IDs.
   * Used for scheduled segment refresh.
   */
  async evaluateForAllCustomers(rules: RuleGroup): Promise<string[]> {
    const customers = await this.prisma.customer.findMany({
      where: { isMerged: false },
      select: { id: true },
    });

    const matchingIds: string[] = [];

    for (const customer of customers) {
      try {
        const matches = await this.evaluateForCustomer(customer.id, rules);
        if (matches) {
          matchingIds.push(customer.id);
        }
      } catch (err) {
        this.logger.warn(
          `Rule evaluation failed for customer ${customer.id}: ${(err as Error).message}`,
        );
      }
    }

    return matchingIds;
  }

  /**
   * Preview mode: evaluate rules and return count + sample without persisting.
   */
  async previewSegment(
    rules: RuleGroup,
    sampleSize: number = 10,
  ): Promise<{ count: number; sample: string[] }> {
    const matchingIds = await this.evaluateForAllCustomers(rules);
    return {
      count: matchingIds.length,
      sample: matchingIds.slice(0, sampleSize),
    };
  }

  // ---------- Internal evaluation logic ----------

  private evaluateGroup(
    group: RuleGroup,
    ctx: EvaluationContext,
    depth: number,
  ): boolean {
    if (depth > 4) {
      this.logger.warn('Rule nesting exceeds 4 levels — truncating');
      return false;
    }

    const results = group.conditions.map((cond) => {
      if ('operator' in cond) {
        return this.evaluateGroup(cond, ctx, depth + 1);
      }
      return this.evaluateCondition(cond, ctx);
    });

    if (group.operator === 'AND') {
      return results.every(Boolean);
    }
    return results.some(Boolean);
  }

  private evaluateCondition(
    cond: RuleCondition,
    ctx: EvaluationContext,
  ): boolean {
    switch (cond.type) {
      case 'attribute':
        return this.evaluateAttribute(cond, ctx);
      case 'event':
        return this.evaluateEvent(cond, ctx);
      case 'segment':
        return this.evaluateSegment(cond, ctx);
      case 'relative_date':
        return this.evaluateRelativeDate(cond, ctx);
      default:
        this.logger.warn(`Unknown condition type: ${cond.type}`);
        return false;
    }
  }

  private evaluateAttribute(
    cond: RuleCondition,
    ctx: EvaluationContext,
  ): boolean {
    const fieldValue = this.resolveField(cond.field!, ctx);
    return this.compareValues(fieldValue, cond.op, cond.value);
  }

  private evaluateEvent(cond: RuleCondition, ctx: EvaluationContext): boolean {
    const count = ctx.eventCounts.get(cond.event_type!) || 0;
    return this.compareValues(count, cond.op, cond.value);
  }

  private evaluateSegment(
    cond: RuleCondition,
    ctx: EvaluationContext,
  ): boolean {
    const isMember = ctx.segmentMemberships.has(cond.segment_code!);
    if (cond.op === 'member_of') return isMember;
    if (cond.op === 'not_member_of') return !isMember;
    return false;
  }

  private evaluateRelativeDate(
    cond: RuleCondition,
    ctx: EvaluationContext,
  ): boolean {
    const dateValue = this.resolveField(cond.field!, ctx);
    if (!dateValue) return false;

    const date = new Date(dateValue);
    const now = new Date();
    const diffDays = Math.floor(
      (now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24),
    );

    if (cond.op === 'within_days') return diffDays <= cond.value;
    if (cond.op === 'before_days') return diffDays > cond.value;
    return this.compareValues(diffDays, cond.op, cond.value);
  }

  // ---------- Helpers ----------

  private resolveField(fieldPath: string, ctx: EvaluationContext): any {
    const parts = fieldPath.split('.');
    const root = parts[0];
    const field = parts.slice(1).join('.');

    switch (root) {
      case 'customer':
        return this.getNestedValue(ctx.customer, field);
      case 'baby':
        // Evaluate against first baby (or any baby matching)
        for (const baby of ctx.babies) {
          const val = this.getNestedValue(baby, field);
          if (val !== undefined && val !== null) return val;
        }
        return null;
      case 'loyalty_account':
        return ctx.loyaltyAccount
          ? this.getNestedValue(ctx.loyaltyAccount, field)
          : null;
      default:
        return this.getNestedValue(ctx.customer, fieldPath);
    }
  }

  private getNestedValue(obj: Record<string, any>, path: string): any {
    return path.split('.').reduce((o, key) => o?.[key], obj);
  }

  private compareValues(actual: any, op: string, expected: any): boolean {
    switch (op) {
      case 'eq':
        return actual === expected;
      case 'neq':
        return actual !== expected;
      case 'gt':
        return actual > expected;
      case 'gte':
        return actual >= expected;
      case 'lt':
        return actual < expected;
      case 'lte':
        return actual <= expected;
      case 'in':
        return Array.isArray(expected) && expected.includes(actual);
      case 'not_in':
        return Array.isArray(expected) && !expected.includes(actual);
      case 'contains':
        return typeof actual === 'string' && actual.includes(expected);
      case 'is_null':
        return actual === null || actual === undefined;
      case 'is_not_null':
        return actual !== null && actual !== undefined;
      default:
        this.logger.warn(`Unknown operator: ${op}`);
        return false;
    }
  }

  /**
   * Build the evaluation context for a customer by loading all relevant data.
   */
  private async buildContext(customerId: string): Promise<EvaluationContext> {
    // Load customer with related data
    const customer = await this.prisma.customer.findUnique({
      where: { id: customerId },
      include: {
        babies: true,
        loyaltyAccount: { include: { tier: true } },
      },
    });

    if (!customer) {
      throw new Error(`Customer ${customerId} not found`);
    }

    // Load event counts for the last 365 days
    const eventCounts = new Map<string, number>();
    const eventAggregates = await this.prisma.$queryRaw`
      SELECT event_type, COUNT(*)::int as count
      FROM event
      WHERE customer_id = ${customerId}::uuid
        AND occurred_at >= NOW() - INTERVAL '365 days'
      GROUP BY event_type
    `;

    for (const row of eventAggregates) {
      eventCounts.set(row.event_type, row.count);
    }

    // Load current segment memberships
    const memberships = await this.prisma.segment_membership.findMany({
      where: { customer_id: customerId, exited_at: null },
      include: { segment: { select: { code: true } } },
    });
    const segmentMemberships = new Set(memberships.map((m) => m.segment.code));

    return {
      customer: customer as any,
      babies: (customer as any).babies || [],
      loyaltyAccount: (customer as any).loyaltyAccount || null,
      eventCounts,
      segmentMemberships,
    };
  }
}
