import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { PrismaService } from '../../shared/prisma/prisma.service';

/**
 * Tier Service — Dual criteria tier evaluation.
 *
 * SRS: Tier evaluation uses TWO criteria:
 *   1. net_spend (total cleaned order value)
 *   2. distinct_order_months (number of unique months with at least one order)
 *
 * Customer must meet BOTH criteria to qualify for a tier.
 * Tiers: MEMBER → SILVER → GOLD (configurable via loyalty_tier_config).
 */
@Injectable()
export class TierService {
  private readonly logger = new Logger(TierService.name);

  constructor(private prisma: PrismaService) {}

  /**
   * Nightly tier evaluation — runs at 3:30 AM VN time.
   */
  @Cron('30 20 * * *', { name: 'tier-evaluation', timeZone: 'UTC' })
  async evaluateAllTiers(): Promise<void> {
    this.logger.log('Starting nightly tier evaluation...');

    const tiers = await this.prisma.loyaltyTierConfig.findMany({
      orderBy: { tierOrder: 'desc' }, // Start from highest tier
    });

    const accounts = await this.prisma.loyaltyAccount.findMany({
      include: { tier: true },
    });

    let upgraded = 0;
    let downgraded = 0;

    for (const account of accounts) {
      // Recalculate metrics from cleaned data
      const metrics = await this.calculateTierMetrics(account.customerId);

      // Find the highest qualifying tier (dual criteria: BOTH must be met)
      let newTierId: string | null = null;
      for (const tier of tiers) {
        if (
          metrics.netSpend >= Number(tier.minNetSpend) &&
          metrics.distinctMonths >= tier.minDistinctMonths
        ) {
          newTierId = tier.id;
          break;
        }
      }

      // Fallback to default tier
      if (!newTierId && tiers.length > 0) {
        const defaultTier = tiers.find(t => t.isDefault);
        newTierId = defaultTier?.id || tiers[tiers.length - 1].id;
      }

      if (newTierId && newTierId !== account.tierId) {
        const oldTier = account.tier?.tierCode || 'NONE';
        const newTier = tiers.find((t) => t.id === newTierId);

        await this.prisma.loyaltyAccount.update({
          where: { id: account.id },
          data: {
            tierId: newTierId,
            netSpend: metrics.netSpend,
            distinctOrderMonths: metrics.distinctMonths,
            tierEvaluatedAt: new Date(),
          },
        });

        // Generate tier change event
        const isUpgrade = (newTier?.tierOrder || 0) > (account.tier?.tierOrder || 0);
        await this.prisma.$executeRaw`
          INSERT INTO event (id, customer_id, event_type, properties, source, occurred_at, received_at)
          VALUES (uuid_generate_v4(), ${account.customerId}::uuid,
            ${isUpgrade ? 'tier.upgraded' : 'tier.downgraded'},
            ${JSON.stringify({ old_tier: oldTier, new_tier: newTier?.tierCode })}::jsonb,
            'system', NOW(), NOW())
        `;

        if (isUpgrade) upgraded++;
        else downgraded++;

        this.logger.log(`Tier change: ${account.customerId} ${oldTier} → ${newTier?.tierCode}`);
      } else {
        // Just update metrics even if tier didn't change
        await this.prisma.loyaltyAccount.update({
          where: { id: account.id },
          data: {
            netSpend: metrics.netSpend,
            distinctOrderMonths: metrics.distinctMonths,
            tierEvaluatedAt: new Date(),
          },
        });
      }
    }

    this.logger.log(`Tier evaluation complete: ${upgraded} upgraded, ${downgraded} downgraded, ${accounts.length} total`);
  }

  /**
   * Evaluate a single customer's tier (on-demand).
   */
  async evaluateCustomerTier(customerId: string): Promise<{ tierCode: string; netSpend: number; distinctMonths: number }> {
    const metrics = await this.calculateTierMetrics(customerId);

    const tiers = await this.prisma.loyaltyTierConfig.findMany({
      orderBy: { tierOrder: 'desc' },
    });

    let qualifiedTier = tiers.find(t => t.isDefault) || tiers[tiers.length - 1]; // Default to designated default tier or lowest
    for (const tier of tiers) {
      if (metrics.netSpend >= Number(tier.minNetSpend) && metrics.distinctMonths >= tier.minDistinctMonths) {
        qualifiedTier = tier;
        break;
      }
    }

    return {
      tierCode: qualifiedTier.tierCode,
      netSpend: metrics.netSpend,
      distinctMonths: metrics.distinctMonths,
    };
  }

  /**
   * Calculate tier metrics from the cleaned data layer.
   * net_spend: sum of net_amount from non-cancelled, non-refunded, non-GWP orders
   * distinct_months: count of unique YYYY-MM with at least one order
   */
  private async calculateTierMetrics(customerId: string): Promise<{ netSpend: number; distinctMonths: number }> {
    const result = await this.prisma.$queryRaw`
      SELECT
        COALESCE(SUM(o.net_amount), 0)::float AS net_spend,
        COUNT(DISTINCT TO_CHAR(o.ordered_at, 'YYYY-MM'))::int AS distinct_months
      FROM "order" o
      JOIN customer c ON c.id = o.customer_id
      WHERE o.customer_id = ${customerId}::uuid
        AND o.status NOT IN ('cancelled', 'refunded')
        AND o.is_gwp = false
        AND o.is_internal = false
        AND c.data_quality_flag IS NULL
    ` as unknown as { net_spend: number; distinct_months: number }[];

    return {
      netSpend: result[0]?.net_spend || 0,
      distinctMonths: result[0]?.distinct_months || 0,
    };
  }
}
