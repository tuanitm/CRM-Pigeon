"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var RuleEvaluatorService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RuleEvaluatorService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../shared/prisma/prisma.service");
let RuleEvaluatorService = RuleEvaluatorService_1 = class RuleEvaluatorService {
    prisma;
    logger = new common_1.Logger(RuleEvaluatorService_1.name);
    constructor(prisma) {
        this.prisma = prisma;
    }
    async evaluateForCustomer(customerId, rules) {
        const context = await this.buildContext(customerId);
        return this.evaluateGroup(rules, context, 0);
    }
    async evaluateForAllCustomers(rules) {
        const customers = await this.prisma.customer.findMany({
            where: { isMerged: false },
            select: { id: true },
        });
        const matchingIds = [];
        for (const customer of customers) {
            try {
                const matches = await this.evaluateForCustomer(customer.id, rules);
                if (matches) {
                    matchingIds.push(customer.id);
                }
            }
            catch (err) {
                this.logger.warn(`Rule evaluation failed for customer ${customer.id}: ${err.message}`);
            }
        }
        return matchingIds;
    }
    async previewSegment(rules, sampleSize = 10) {
        const matchingIds = await this.evaluateForAllCustomers(rules);
        return {
            count: matchingIds.length,
            sample: matchingIds.slice(0, sampleSize),
        };
    }
    evaluateGroup(group, ctx, depth) {
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
    evaluateCondition(cond, ctx) {
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
    evaluateAttribute(cond, ctx) {
        const fieldValue = this.resolveField(cond.field, ctx);
        return this.compareValues(fieldValue, cond.op, cond.value);
    }
    evaluateEvent(cond, ctx) {
        const count = ctx.eventCounts.get(cond.event_type) || 0;
        return this.compareValues(count, cond.op, cond.value);
    }
    evaluateSegment(cond, ctx) {
        const isMember = ctx.segmentMemberships.has(cond.segment_code);
        if (cond.op === 'member_of')
            return isMember;
        if (cond.op === 'not_member_of')
            return !isMember;
        return false;
    }
    evaluateRelativeDate(cond, ctx) {
        const dateValue = this.resolveField(cond.field, ctx);
        if (!dateValue)
            return false;
        const date = new Date(dateValue);
        const now = new Date();
        const diffDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
        if (cond.op === 'within_days')
            return diffDays <= cond.value;
        if (cond.op === 'before_days')
            return diffDays > cond.value;
        return this.compareValues(diffDays, cond.op, cond.value);
    }
    resolveField(fieldPath, ctx) {
        const parts = fieldPath.split('.');
        const root = parts[0];
        const field = parts.slice(1).join('.');
        switch (root) {
            case 'customer':
                return this.getNestedValue(ctx.customer, field);
            case 'baby':
                for (const baby of ctx.babies) {
                    const val = this.getNestedValue(baby, field);
                    if (val !== undefined && val !== null)
                        return val;
                }
                return null;
            case 'loyalty_account':
                return ctx.loyaltyAccount ? this.getNestedValue(ctx.loyaltyAccount, field) : null;
            default:
                return this.getNestedValue(ctx.customer, fieldPath);
        }
    }
    getNestedValue(obj, path) {
        return path.split('.').reduce((o, key) => o?.[key], obj);
    }
    compareValues(actual, op, expected) {
        switch (op) {
            case 'eq': return actual === expected;
            case 'neq': return actual !== expected;
            case 'gt': return actual > expected;
            case 'gte': return actual >= expected;
            case 'lt': return actual < expected;
            case 'lte': return actual <= expected;
            case 'in': return Array.isArray(expected) && expected.includes(actual);
            case 'not_in': return Array.isArray(expected) && !expected.includes(actual);
            case 'contains': return typeof actual === 'string' && actual.includes(expected);
            case 'is_null': return actual === null || actual === undefined;
            case 'is_not_null': return actual !== null && actual !== undefined;
            default:
                this.logger.warn(`Unknown operator: ${op}`);
                return false;
        }
    }
    async buildContext(customerId) {
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
        const eventCounts = new Map();
        const eventAggregates = await this.prisma.$queryRaw `
      SELECT event_type, COUNT(*)::int as count
      FROM event
      WHERE customer_id = ${customerId}::uuid
        AND occurred_at >= NOW() - INTERVAL '365 days'
      GROUP BY event_type
    `;
        for (const row of eventAggregates) {
            eventCounts.set(row.event_type, row.count);
        }
        const memberships = await this.prisma.segment_membership.findMany({
            where: { customer_id: customerId, exited_at: null },
            include: { segment: { select: { code: true } } },
        });
        const segmentMemberships = new Set(memberships.map((m) => m.segment.code));
        return {
            customer: customer,
            babies: customer.babies || [],
            loyaltyAccount: customer.loyaltyAccount || null,
            eventCounts,
            segmentMemberships,
        };
    }
};
exports.RuleEvaluatorService = RuleEvaluatorService;
exports.RuleEvaluatorService = RuleEvaluatorService = RuleEvaluatorService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], RuleEvaluatorService);
//# sourceMappingURL=rule-evaluator.service.js.map