import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { PrismaService } from '../../shared/prisma/prisma.service';

/**
 * Replenishment Calculator — 3-level priority cycle estimation.
 *
 * Priority 1: Customer's own purchase cycle (EWMA smoothed)
 * Priority 2: Product lifecycle rule (replace_days + baby stage)
 * Priority 3: Global average (product_purchase_cycle.median_days)
 *
 * Triggers replenishment.due event at 80% of estimated cycle.
 */
@Injectable()
export class ReplenishmentService {
  private readonly logger = new Logger(ReplenishmentService.name);
  private readonly TRIGGER_PERCENTAGE = 0.8;
  private readonly EWMA_ALPHA = 0.3;

  constructor(private prisma: PrismaService) {}

  /**
   * Nightly replenishment check — 4:00 AM VN time (21:00 UTC).
   */
  @Cron('0 21 * * *', { name: 'replenishment-check', timeZone: 'UTC' })
  async checkDueReplenishments(): Promise<void> {
    this.logger.log('Starting replenishment due check...');

    const now = new Date();
    const dueSchedules = await this.prisma.replenishment_schedule.findMany({
      where: {
        is_active: true,
        next_reminder_at: { lte: now },
      },
      include: {
        product: { select: { id: true, name: true, sku: true } },
      },
    });

    let firedCount = 0;
    for (const schedule of dueSchedules) {
      await this.prisma.$executeRaw`
        INSERT INTO event (id, customer_id, event_type, properties, source, occurred_at, received_at)
        VALUES (uuid_generate_v4(), ${schedule.customer_id}::uuid, 'replenishment.due',
          ${JSON.stringify({
            product_id: schedule.product_id,
            product_name: schedule.product?.name,
            product_sku: schedule.product?.sku,
            cycle_days: schedule.cycle_days,
            cycle_source: schedule.cycle_source,
          })}::jsonb,
          'system', NOW(), NOW())
      `;

      // Increment reminder count
      await this.prisma.replenishment_schedule.update({
        where: { id: schedule.id },
        data: { reminder_count: schedule.reminder_count + 1 },
      });

      firedCount++;
    }

    this.logger.log(
      `Replenishment check complete: ${firedCount} reminders fired`,
    );
  }

  /**
   * Update replenishment cycle after a new purchase.
   */
  async onProductPurchased(
    customerId: string,
    productId: string,
    orderedAt: Date,
  ): Promise<void> {
    // Priority 1: Personal cycle
    const personalCycle = await this.calculatePersonalCycle(
      customerId,
      productId,
    );

    // Priority 2: Product lifecycle rule
    const productRule = await this.getProductLifecycleRule(
      productId,
      customerId,
    );

    // Priority 3: Global average
    const globalAvg = await this.getGlobalAverageCycle(productId);

    let cycleDays: number;
    let cycleSource: string;

    if (personalCycle !== null && personalCycle > 0) {
      cycleDays = personalCycle;
      cycleSource = 'personal_cycle';
    } else if (productRule !== null) {
      cycleDays = productRule;
      cycleSource = 'product_rule';
    } else if (globalAvg !== null && globalAvg > 0) {
      cycleDays = globalAvg;
      cycleSource = 'global_average';
    } else {
      cycleDays = 30;
      cycleSource = 'default';
    }

    // 80% trigger date
    const triggerDays = Math.floor(cycleDays * this.TRIGGER_PERCENTAGE);
    const nextReminderAt = new Date(orderedAt);
    nextReminderAt.setDate(nextReminderAt.getDate() + triggerDays);

    // Upsert schedule
    const existing = await this.prisma.replenishment_schedule.findFirst({
      where: { customer_id: customerId, product_id: productId },
    });

    if (existing) {
      // EWMA smoothing
      const smoothedDays = Math.round(
        this.EWMA_ALPHA * cycleDays +
          (1 - this.EWMA_ALPHA) * existing.cycle_days,
      );

      await this.prisma.replenishment_schedule.update({
        where: { id: existing.id },
        data: {
          cycle_days: smoothedDays,
          cycle_source: cycleSource,
          last_purchase_at: orderedAt,
          next_reminder_at: nextReminderAt,
          is_active: true,
          reminder_count: 0, // Reset on new purchase
        },
      });
    } else {
      await this.prisma.replenishment_schedule.create({
        data: {
          customer_id: customerId,
          product_id: productId,
          cycle_days: cycleDays,
          cycle_source: cycleSource,
          last_purchase_at: orderedAt,
          next_reminder_at: nextReminderAt,
          is_active: true,
        },
      });
    }

    this.logger.log(
      `Replenishment: ${customerId} / ${productId} — ${cycleDays}d (${cycleSource})`,
    );
  }

  private async calculatePersonalCycle(
    customerId: string,
    productId: string,
  ): Promise<number | null> {
    const purchases = await this.prisma.$queryRaw`
      SELECT o.ordered_at
      FROM "order" o
      JOIN order_item oi ON oi.order_id = o.id
      WHERE o.customer_id = ${customerId}::uuid
        AND oi.product_id = ${productId}::uuid
        AND o.status NOT IN ('cancelled', 'refunded')
      ORDER BY o.ordered_at ASC
    `;

    if (purchases.length < 2) return null;

    const intervals: number[] = [];
    for (let i = 1; i < purchases.length; i++) {
      const diffMs =
        new Date(purchases[i].ordered_at).getTime() -
        new Date(purchases[i - 1].ordered_at).getTime();
      intervals.push(diffMs / (1000 * 60 * 60 * 24));
    }

    let ewma = intervals[0];
    for (let i = 1; i < intervals.length; i++) {
      ewma = this.EWMA_ALPHA * intervals[i] + (1 - this.EWMA_ALPHA) * ewma;
    }

    return Math.round(ewma);
  }

  private async getProductLifecycleRule(
    productId: string,
    customerId: string,
  ): Promise<number | null> {
    const baby = await this.prisma.baby.findFirst({
      where: { customerId, isBorn: true },
      orderBy: { dateOfBirth: 'desc' },
      select: { stageCode: true },
    });

    if (baby?.stageCode) {
      const stageRule = await this.prisma.productLifecycleRule.findFirst({
        where: { productId, stageCode: baby.stageCode },
      });
      if (stageRule) return stageRule.replaceDays;
    }

    const genericRule = await this.prisma.productLifecycleRule.findFirst({
      where: { productId, stageCode: null },
    });
    return genericRule?.replaceDays || null;
  }

  private async getGlobalAverageCycle(
    productId: string,
  ): Promise<number | null> {
    const result = await this.prisma.product_purchase_cycle.findFirst({
      where: { product_id: productId },
    });
    return result?.median_days || null;
  }
}
