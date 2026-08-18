import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { PrismaService } from '../../shared/prisma/prisma.service';
import { RuleEvaluatorService, RuleGroup } from './rule-evaluator.service';
import { EventsService } from '../../ingestion/events.service';

/**
 * Segment Service — manages segments, evaluates membership, generates
 * segment_entered / segment_exited events.
 *
 * 10 mandatory segments must be pre-configured at delivery per SRS.
 */

// 10 mandatory segments from the SRS
export const MANDATORY_SEGMENTS: {
  code: string;
  name: string;
  rules: RuleGroup;
}[] = [
  {
    code: 'new_registered_no_order',
    name: 'Registered but never ordered',
    rules: {
      operator: 'AND',
      conditions: [
        { type: 'attribute', field: 'customer.phone', op: 'is_not_null' },
        { type: 'event', event_type: 'order.completed', op: 'eq', value: 0 },
      ],
    },
  },
  {
    code: 'first_order_no_second',
    name: 'Completed first order, no second',
    rules: {
      operator: 'AND',
      conditions: [
        { type: 'event', event_type: 'order.completed', op: 'eq', value: 1 },
      ],
    },
  },
  {
    code: 'repeat_buyer',
    name: 'Has 2+ orders',
    rules: {
      operator: 'AND',
      conditions: [
        { type: 'event', event_type: 'order.completed', op: 'gte', value: 2 },
      ],
    },
  },
  {
    code: 'expecting_mother',
    name: 'Has baby profile with due_date but not yet born',
    rules: {
      operator: 'AND',
      conditions: [
        { type: 'attribute', field: 'baby.due_date', op: 'is_not_null' },
        { type: 'attribute', field: 'baby.is_born', op: 'eq', value: false },
      ],
    },
  },
  {
    code: 'newborn_0_6m',
    name: 'Baby aged 0-6 months',
    rules: {
      operator: 'AND',
      conditions: [
        { type: 'attribute', field: 'baby.is_born', op: 'eq', value: true },
        {
          type: 'relative_date',
          field: 'baby.date_of_birth',
          op: 'within_days',
          value: 180,
        },
      ],
    },
  },
  {
    code: 'scanned_qr_never_bought_web',
    name: 'Scanned QR (bought offline) but never bought on website',
    rules: {
      operator: 'AND',
      conditions: [
        { type: 'event', event_type: 'serial.scanned', op: 'gte', value: 1 },
        { type: 'event', event_type: 'order.completed', op: 'eq', value: 0 },
      ],
    },
  },
  {
    code: 'high_value_at_risk',
    name: 'Was Champion/Loyal but now At Risk RFM segment',
    rules: {
      operator: 'AND',
      conditions: [
        { type: 'segment', segment_code: 'rfm_at_risk', op: 'member_of' },
        { type: 'event', event_type: 'order.completed', op: 'gte', value: 3 },
      ],
    },
  },
  {
    code: 'cart_abandoner',
    name: 'Abandoned cart in last 7 days',
    rules: {
      operator: 'AND',
      conditions: [
        {
          type: 'event',
          event_type: 'cart.abandoned',
          op: 'gte',
          value: 1,
          timeframe_days: 7,
        },
      ],
    },
  },
  {
    code: 'tier_upgrade_candidate',
    name: 'Within 70-85% of next tier threshold',
    rules: {
      operator: 'AND',
      conditions: [
        {
          type: 'attribute',
          field: 'loyalty_account.net_spend',
          op: 'gte',
          value: 1400000,
        },
        {
          type: 'attribute',
          field: 'loyalty_account.net_spend',
          op: 'lt',
          value: 1700000,
        },
      ],
    },
  },
  {
    code: 'profile_incomplete',
    name: 'Missing key profile fields',
    rules: {
      operator: 'OR',
      conditions: [
        { type: 'attribute', field: 'customer.full_name', op: 'is_null' },
        { type: 'attribute', field: 'customer.date_of_birth', op: 'is_null' },
        { type: 'attribute', field: 'customer.email', op: 'is_null' },
      ],
    },
  },
];

@Injectable()
export class SegmentService {
  private readonly logger = new Logger(SegmentService.name);

  constructor(
    private prisma: PrismaService,
    private ruleEvaluator: RuleEvaluatorService,
  ) {}

  /**
   * Seed the 10 mandatory segments on application startup.
   */
  async seedMandatorySegments(): Promise<void> {
    for (const seg of MANDATORY_SEGMENTS) {
      const existing = await this.prisma.segment.findUnique({
        where: { code: seg.code },
      });
      if (!existing) {
        await this.prisma.segment.create({
          data: {
            code: seg.code,
            name: seg.name,
            rules: seg.rules as any,
            refreshMode: 'scheduled',
            isSystem: true,
            isActive: true,
          },
        });
        this.logger.log(`Seeded mandatory segment: ${seg.code}`);
      }
    }
  }

  /**
   * Scheduled segment refresh — runs every 30 minutes.
   * Re-evaluates all scheduled segments and generates enter/exit events.
   */
  @Cron('*/30 * * * *', { name: 'segment-refresh' })
  async refreshAllScheduledSegments(): Promise<void> {
    const segments = await this.prisma.segment.findMany({
      where: { isActive: true, refreshMode: 'scheduled' },
    });

    for (const segment of segments) {
      try {
        await this.refreshSegment(
          segment.id,
          segment.code,
          segment.rules as unknown as RuleGroup,
        );
      } catch (err) {
        this.logger.error(
          `Failed to refresh segment ${segment.code}: ${(err as Error).message}`,
        );
      }
    }
  }

  /**
   * Refresh a single segment: evaluate rules, update memberships, generate events.
   */
  async refreshSegment(
    segmentId: string,
    segmentCode: string,
    rules: RuleGroup,
  ): Promise<{ entered: number; exited: number }> {
    this.logger.log(`Refreshing segment: ${segmentCode}`);

    // Get current matching customers
    const matchingIds = new Set(
      await this.ruleEvaluator.evaluateForAllCustomers(rules),
    );

    // Get current members
    const currentMembers = await this.prisma.segment_membership.findMany({
      where: { segment_id: segmentId, exited_at: null },
      select: { id: true, customer_id: true },
    });
    const currentMemberIds = new Set(currentMembers.map((m) => m.customer_id));

    let entered = 0;
    let exited = 0;

    // New entries: in matching but not in current members
    for (const customerId of matchingIds) {
      if (!currentMemberIds.has(customerId)) {
        await this.prisma.segment_membership.create({
          data: { segment_id: segmentId, customer_id: customerId },
        });

        // Generate segment_entered event
        await this.prisma.$executeRaw`
          INSERT INTO event (id, customer_id, event_type, properties, source, occurred_at, received_at)
          VALUES (uuid_generate_v4(), ${customerId}::uuid, 'segment_entered',
            ${JSON.stringify({ segment_code: segmentCode })}::jsonb, 'system', NOW(), NOW())
        `;
        entered++;
      }
    }

    // Exits: in current members but not in matching
    for (const member of currentMembers) {
      if (!matchingIds.has(member.customer_id)) {
        await this.prisma.segment_membership.update({
          where: { id: member.id },
          data: { exited_at: new Date() },
        });

        // Generate segment_exited event
        await this.prisma.$executeRaw`
          INSERT INTO event (id, customer_id, event_type, properties, source, occurred_at, received_at)
          VALUES (uuid_generate_v4(), ${member.customer_id}::uuid, 'segment_exited',
            ${JSON.stringify({ segment_code: segmentCode })}::jsonb, 'system', NOW(), NOW())
        `;
        exited++;
      }
    }

    // Update member count
    await this.prisma.segment.update({
      where: { id: segmentId },
      data: { memberCount: matchingIds.size, lastEvaluatedAt: new Date() },
    });

    this.logger.log(
      `Segment ${segmentCode}: ${entered} entered, ${exited} exited, ${matchingIds.size} total`,
    );
    return { entered, exited };
  }

  /**
   * Realtime segment evaluation — called when a new event is ingested.
   * Only evaluates segments with refreshMode = 'realtime'.
   */
  async evaluateRealtimeForCustomer(customerId: string): Promise<void> {
    const realtimeSegments = await this.prisma.segment.findMany({
      where: { isActive: true, refreshMode: 'realtime' },
    });

    for (const segment of realtimeSegments) {
      const matches = await this.ruleEvaluator.evaluateForCustomer(
        customerId,
        segment.rules as unknown as RuleGroup,
      );

      const currentMembership = await this.prisma.segment_membership.findFirst({
        where: {
          segment_id: segment.id,
          customer_id: customerId,
          exited_at: null,
        },
      });

      if (matches && !currentMembership) {
        // Enter segment
        await this.prisma.segment_membership.create({
          data: { segment_id: segment.id, customer_id: customerId },
        });
        await this.prisma.$executeRaw`
          INSERT INTO event (id, customer_id, event_type, properties, source, occurred_at, received_at)
          VALUES (uuid_generate_v4(), ${customerId}::uuid, 'segment_entered',
            ${JSON.stringify({ segment_code: segment.code })}::jsonb, 'system', NOW(), NOW())
        `;
      } else if (!matches && currentMembership) {
        // Exit segment
        await this.prisma.segment_membership.update({
          where: { id: currentMembership.id },
          data: { exited_at: new Date() },
        });
        await this.prisma.$executeRaw`
          INSERT INTO event (id, customer_id, event_type, properties, source, occurred_at, received_at)
          VALUES (uuid_generate_v4(), ${customerId}::uuid, 'segment_exited',
            ${JSON.stringify({ segment_code: segment.code })}::jsonb, 'system', NOW(), NOW())
        `;
      }
    }
  }
}
