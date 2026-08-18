import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { PrismaService } from '../../shared/prisma/prisma.service';

/**
 * RFM Calculator — Nightly job.
 *
 * Computes Recency, Frequency, Monetary scores as quintiles (1-5)
 * on the CLEANED data layer only (excludes cancelled, refunded, GWP, internal, flagged).
 *
 * Maps to 9 action segments. The rfm_discount_hunter segment is evaluated
 * first and overrides other classifications.
 *
 * Must keep 24+ periods of history in rfm_snapshot.
 */

// 9 RFM action segments as defined in the SRS
const RFM_SEGMENT_MAP: Record<
  string,
  { r: number[]; f: number[]; m: number[]; label: string }
> = {
  champions: { r: [4, 5], f: [4, 5], m: [4, 5], label: 'Champions' },
  loyal_customers: {
    r: [3, 4, 5],
    f: [3, 4, 5],
    m: [3, 4, 5],
    label: 'Loyal Customers',
  },
  potential_loyal: {
    r: [3, 4, 5],
    f: [1, 2, 3],
    m: [1, 2, 3],
    label: 'Potential Loyalists',
  },
  new_customers: { r: [4, 5], f: [1], m: [1, 2], label: 'New Customers' },
  promising: { r: [3, 4], f: [1], m: [1], label: 'Promising' },
  need_attention: { r: [2, 3], f: [2, 3], m: [2, 3], label: 'Need Attention' },
  about_to_sleep: { r: [2], f: [1, 2], m: [1, 2], label: 'About to Sleep' },
  at_risk: { r: [1, 2], f: [3, 4, 5], m: [3, 4, 5], label: 'At Risk' },
  hibernating: { r: [1], f: [1, 2], m: [1, 2], label: 'Hibernating' },
};

@Injectable()
export class RfmCalculatorService {
  private readonly logger = new Logger(RfmCalculatorService.name);

  constructor(private prisma: PrismaService) {}

  /**
   * Nightly RFM calculation job — runs at 2:00 AM VN time (UTC+7 = 19:00 UTC previous day).
   */
  @Cron('0 19 * * *', { name: 'rfm-nightly', timeZone: 'UTC' })
  async calculateRfm(): Promise<void> {
    const startTime = Date.now();
    this.logger.log('Starting nightly RFM calculation...');

    const period = this.getCurrentPeriod();

    try {
      // Step 1: Compute raw RFM values from CLEANED data layer
      const rawScores = await this.computeRawScores();

      if (rawScores.length === 0) {
        this.logger.warn('No customers with orders found for RFM calculation');
        return;
      }

      // Step 2: Calculate quintile boundaries
      const recencyValues = rawScores
        .map((s) => s.recency_days)
        .sort((a, b) => a - b);
      const frequencyValues = rawScores
        .map((s) => s.frequency)
        .sort((a, b) => a - b);
      const monetaryValues = rawScores
        .map((s) => s.monetary)
        .sort((a, b) => a - b);

      const rBounds = this.quintileBoundaries(recencyValues);
      const fBounds = this.quintileBoundaries(frequencyValues);
      const mBounds = this.quintileBoundaries(monetaryValues);

      // Step 3: Assign quintile scores and map to segments
      let insertCount = 0;
      for (const score of rawScores) {
        // Recency: lower days = higher score (more recent = better)
        const rScore = 6 - this.assignQuintile(score.recency_days, rBounds);
        const fScore = this.assignQuintile(score.frequency, fBounds);
        const mScore = this.assignQuintile(score.monetary, mBounds);

        // Step 4: Check discount hunter FIRST (overrides other segments per SRS)
        const isDiscountHunter = await this.isDiscountHunter(score.customer_id);
        const rfmSegment = isDiscountHunter
          ? 'rfm_discount_hunter'
          : this.mapToSegment(rScore, fScore, mScore);

        // Step 5: Upsert to rfm_snapshot
        await this.prisma.$executeRaw`
          INSERT INTO rfm_snapshot (id, customer_id, period, recency_score, frequency_score, monetary_score, rfm_segment, is_discount_hunter, calculated_at)
          VALUES (uuid_generate_v4(), ${score.customer_id}::uuid, ${period}, ${rScore}, ${fScore}, ${mScore}, ${rfmSegment}, ${isDiscountHunter}, NOW())
          ON CONFLICT (customer_id, period)
          DO UPDATE SET recency_score = ${rScore}, frequency_score = ${fScore}, monetary_score = ${mScore},
                        rfm_segment = ${rfmSegment}, is_discount_hunter = ${isDiscountHunter}, calculated_at = NOW()
        `;
        insertCount++;
      }

      const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
      this.logger.log(
        `RFM calculation complete: ${insertCount} customers scored in ${elapsed}s for period ${period}`,
      );
    } catch (err) {
      this.logger.error(
        `RFM calculation failed: ${(err as Error).message}`,
        (err as Error).stack,
      );
    }
  }

  /**
   * Compute raw Recency, Frequency, Monetary values using the CLEANED data layer.
   */
  private async computeRawScores(): Promise<
    {
      customer_id: string;
      recency_days: number;
      frequency: number;
      monetary: number;
    }[]
  > {
    return this.prisma.$queryRaw`
      SELECT
        o.customer_id,
        EXTRACT(DAY FROM NOW() - MAX(o.ordered_at))::int AS recency_days,
        COUNT(DISTINCT o.id)::int AS frequency,
        COALESCE(SUM(o.net_amount), 0)::float AS monetary
      FROM "order" o
      JOIN customer c ON c.id = o.customer_id
      WHERE o.status NOT IN ('cancelled', 'refunded')
        AND o.is_gwp = false
        AND o.is_internal = false
        AND c.data_quality_flag IS NULL
        AND c.is_merged = false
      GROUP BY o.customer_id
      HAVING COUNT(DISTINCT o.id) >= 1
    ` as unknown as any[];
  }

  /**
   * Discount hunter detection: customers whose discount_amount / total_amount > 40%
   * across their order history. Evaluated FIRST per SRS.
   */
  private async isDiscountHunter(customerId: string): Promise<boolean> {
    const result = await this.prisma.$queryRaw`
      SELECT
        COALESCE(SUM(discount_amount), 0) AS total_discount,
        COALESCE(SUM(total_amount), 0) AS total_spend
      FROM "order"
      WHERE customer_id = ${customerId}::uuid
        AND status NOT IN ('cancelled', 'refunded')
        AND is_gwp = false
    `;

    if (!result.length || result[0].total_spend === 0) return false;
    const discountRatio = result[0].total_discount / result[0].total_spend;
    return discountRatio > 0.4;
  }

  /**
   * Map R, F, M scores to one of the 9 action segments.
   */
  private mapToSegment(r: number, f: number, m: number): string {
    for (const [code, def] of Object.entries(RFM_SEGMENT_MAP)) {
      if (def.r.includes(r) && def.f.includes(f) && def.m.includes(m)) {
        return code;
      }
    }
    // Fallback for edge cases not covered by the map
    return 'need_attention';
  }

  /**
   * Calculate quintile boundaries from a sorted array of values.
   * Returns 4 boundary values dividing data into 5 equal groups.
   */
  private quintileBoundaries(sorted: number[]): number[] {
    const n = sorted.length;
    if (n < 5)
      return [sorted[0] || 0, sorted[0] || 0, sorted[0] || 0, sorted[0] || 0];
    return [
      sorted[Math.floor(n * 0.2)],
      sorted[Math.floor(n * 0.4)],
      sorted[Math.floor(n * 0.6)],
      sorted[Math.floor(n * 0.8)],
    ];
  }

  /**
   * Assign a value to a quintile (1-5) based on boundaries.
   */
  private assignQuintile(value: number, bounds: number[]): number {
    if (value <= bounds[0]) return 1;
    if (value <= bounds[1]) return 2;
    if (value <= bounds[2]) return 3;
    if (value <= bounds[3]) return 4;
    return 5;
  }

  /**
   * Get the current period label (e.g., "2026-W31").
   */
  private getCurrentPeriod(): string {
    const now = new Date();
    const year = now.getFullYear();
    const weekNum = this.getWeekNumber(now);
    return `${year}-W${weekNum.toString().padStart(2, '0')}`;
  }

  private getWeekNumber(date: Date): number {
    const d = new Date(
      Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()),
    );
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
    const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    return Math.ceil(((d.getTime() - yearStart.getTime()) / 86400000 + 1) / 7);
  }
}
