import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { PrismaService } from '../../shared/prisma/prisma.service';
import { RedisService } from '../../shared/redis/redis.service';

/**
 * Points Service — Core loyalty points engine.
 *
 * 8 earning sources: purchase, QR scan, profile completion, review,
 * milestone, referral, quiz, warranty.
 *
 * 12-month FIFO expiry. Distributed lock per customer for concurrent safety.
 */

interface EarnPointsParams {
  customerId: string;
  source: string;
  points: number;
  referenceType?: string;
  referenceId?: string;
  description?: string;
  idempotencyKey: string;
}

@Injectable()
export class PointsService {
  private readonly logger = new Logger(PointsService.name);
  constructor(
    private prisma: PrismaService,
    private redis: RedisService,
  ) {}

  /**
   * Award points to a customer. Uses distributed lock for concurrent safety.
   */
  async earnPoints(params: EarnPointsParams): Promise<{ success: boolean; newBalance?: number; error?: string }> {
    const { customerId, source, points, referenceType, referenceId, description, idempotencyKey } = params;

    if (points <= 0) return { success: false, error: 'Points must be positive' };

    // Distributed lock per customer
    const lockKey = `loyalty:${customerId}`;
    const locked = await this.redis.acquireLock(lockKey, 15);
    if (!locked) return { success: false, error: 'Concurrent operation in progress' };

    try {
      // Idempotency check
      const isDup = await this.redis.checkIdempotency(idempotencyKey);
      if (isDup) return { success: false, error: 'Duplicate transaction' };

      // Get or create loyalty account
      let account = await this.prisma.loyaltyAccount.findUnique({ where: { customerId } });
      if (!account) {
        // Auto-create with default tier
        const defaultTier = await this.prisma.loyaltyTierConfig.findFirst({ where: { isDefault: true } });
        account = await this.prisma.loyaltyAccount.create({
          data: {
            customerId,
            tierId: defaultTier?.id,
            pointsBalance: 0,
            pointsLifetime: 0,
            pointsRedeemed: 0,
            pointsExpired: 0,
          },
        });
      }

      // Apply tier multiplier
      const tier = account.tierId
        ? await this.prisma.loyaltyTierConfig.findUnique({ where: { id: account.tierId } })
        : null;
      const multiplier = tier ? Number(tier.pointsMultiplier) : 1.0;

      // Check earn rule for this source
      const earnRule = await this.prisma.loyaltyEarnRule.findFirst({
        where: {
          source,
          isActive: true,
          OR: [
            { validFrom: null },
            { validFrom: { lte: new Date() } },
          ],
        },
      });

      // If earn rule requires tier multiplier, apply it
      const finalPoints = (earnRule?.tierMultiplierApplies !== false)
        ? Math.floor(points * multiplier)
        : points;

      const newBalance = account.pointsBalance + finalPoints;
      
      const expiryConfig = await this.prisma.systemConfig.findUnique({ where: { key: 'points_expiry_months' } });
      const expiryMonths = expiryConfig && !isNaN(parseInt(expiryConfig.value, 10)) ? parseInt(expiryConfig.value, 10) : 12;

      const expiresAt = new Date();
      expiresAt.setMonth(expiresAt.getMonth() + expiryMonths);

      // Create transaction
      await this.prisma.loyaltyTransaction.create({
        data: {
          loyaltyAccountId: account.id,
          customerId,
          type: 'earn',
          source,
          points: finalPoints,
          balanceAfter: newBalance,
          referenceType,
          referenceId,
          description: description || `Earned ${finalPoints} points from ${source}`,
          expiresAt,
          idempotencyKey,
        },
      });

      // Update account balance
      await this.prisma.loyaltyAccount.update({
        where: { customerId },
        data: {
          pointsBalance: newBalance,
          pointsLifetime: account.pointsLifetime + finalPoints,
        },
      });

      this.logger.log(`Points earned: ${customerId} +${finalPoints} from ${source} (×${multiplier})`);
      return { success: true, newBalance };
    } finally {
      await this.redis.releaseLock(lockKey);
    }
  }

  /**
   * Redeem points (deduct from balance). Uses distributed lock.
   */
  async redeemPoints(params: {
    customerId: string;
    points: number;
    referenceType: string;
    referenceId: string;
    description: string;
    idempotencyKey: string;
  }): Promise<{ success: boolean; newBalance?: number; error?: string }> {
    const lockKey = `loyalty:${params.customerId}`;
    const locked = await this.redis.acquireLock(lockKey, 15);
    if (!locked) return { success: false, error: 'Concurrent operation in progress' };

    try {
      const isDup = await this.redis.checkIdempotency(params.idempotencyKey);
      if (isDup) return { success: false, error: 'Duplicate transaction' };

      const account = await this.prisma.loyaltyAccount.findUnique({
        where: { customerId: params.customerId },
      });
      if (!account) return { success: false, error: 'No loyalty account' };
      if (account.pointsBalance < params.points) return { success: false, error: 'Insufficient points' };

      const newBalance = account.pointsBalance - params.points;

      await this.prisma.loyaltyTransaction.create({
        data: {
          loyaltyAccountId: account.id,
          customerId: params.customerId,
          type: 'redeem',
          source: 'redemption',
          points: -params.points,
          balanceAfter: newBalance,
          referenceType: params.referenceType,
          referenceId: params.referenceId,
          description: params.description,
          idempotencyKey: params.idempotencyKey,
        },
      });

      await this.prisma.loyaltyAccount.update({
        where: { customerId: params.customerId },
        data: {
          pointsBalance: newBalance,
          pointsRedeemed: account.pointsRedeemed + params.points,
        },
      });

      return { success: true, newBalance };
    } finally {
      await this.redis.releaseLock(lockKey);
    }
  }

  /**
   * FIFO Expiry — runs nightly at 3:00 AM VN time.
   * Expires points older than 12 months in FIFO order.
   */
  @Cron('0 20 * * *', { name: 'points-expiry', timeZone: 'UTC' })
  async processExpiredPoints(): Promise<void> {
    this.logger.log('Starting FIFO points expiry...');

    const expiredTxns = await this.prisma.loyaltyTransaction.findMany({
      where: {
        type: 'earn',
        expiresAt: { lte: new Date() },
        points: { gt: 0 },
      },
      orderBy: { createdAt: 'asc' }, // FIFO
      take: 1000,
    });

    let totalExpired = 0;

    for (const txn of expiredTxns) {
      const lockKey = `loyalty:${txn.customerId}`;
      const locked = await this.redis.acquireLock(lockKey, 10);
      if (!locked) continue;

      try {
        const account = await this.prisma.loyaltyAccount.findUnique({
          where: { customerId: txn.customerId },
        });
        if (!account) continue;

        // Mark as expired (set points to 0 on the original transaction)
        const expireAmount = Math.min(txn.points, account.pointsBalance);
        if (expireAmount <= 0) continue;

        const newBalance = account.pointsBalance - expireAmount;

        await this.prisma.loyaltyTransaction.create({
          data: {
            loyaltyAccountId: account.id,
            customerId: txn.customerId,
            type: 'expire',
            source: 'fifo_expiry',
            points: -expireAmount,
            balanceAfter: newBalance,
            referenceType: 'loyalty_transaction',
            referenceId: txn.id,
            description: `FIFO expiry of ${expireAmount} points`,
          },
        });

        // Zero out expired transaction
        await this.prisma.loyaltyTransaction.update({
          where: { id: txn.id },
          data: { points: 0 },
        });

        await this.prisma.loyaltyAccount.update({
          where: { customerId: txn.customerId },
          data: {
            pointsBalance: newBalance,
            pointsExpired: account.pointsExpired + expireAmount,
          },
        });

        totalExpired += expireAmount;
      } finally {
        await this.redis.releaseLock(lockKey);
      }
    }

    this.logger.log(`Points expiry complete: ${totalExpired} points expired across ${expiredTxns.length} transactions`);
  }

  /**
   * Points liability snapshot — runs monthly for finance reporting.
   */
  @Cron('0 21 1 * *', { name: 'liability-snapshot', timeZone: 'UTC' })
  async capturePointsLiability(): Promise<void> {
    this.logger.log('Capturing points liability snapshot...');

    const result = await this.prisma.$queryRaw`
      SELECT
        COALESCE(SUM(points_balance), 0)::bigint AS total_outstanding,
        COALESCE(SUM(CASE WHEN lt.expires_at <= NOW() + INTERVAL '30 days' THEN lt.points ELSE 0 END), 0)::int AS expiring_30d,
        COALESCE(SUM(CASE WHEN lt.expires_at <= NOW() + INTERVAL '90 days' THEN lt.points ELSE 0 END), 0)::int AS expiring_90d
      FROM loyalty_account la
      LEFT JOIN loyalty_transaction lt ON lt.loyalty_account_id = la.id AND lt.type = 'earn' AND lt.points > 0
    ` as unknown as any[];

    const data = result[0] || { total_outstanding: 0, expiring_30d: 0, expiring_90d: 0 };

    const rateConfig = await this.prisma.systemConfig.findUnique({ where: { key: 'points_to_currency_rate' } });
    const conversionRate = rateConfig && !isNaN(parseFloat(rateConfig.value)) ? parseFloat(rateConfig.value) : 100;

    await this.prisma.points_liability_snapshot.create({
      data: {
        snapshot_date: new Date(),
        total_outstanding_points: BigInt(data.total_outstanding || 0),
        estimated_liability_vnd: Number(data.total_outstanding || 0) * conversionRate, // Dynamic conversion rate
        points_expiring_30d: data.expiring_30d || 0,
        points_expiring_90d: data.expiring_90d || 0,
      },
    });

    this.logger.log(`Liability snapshot: ${data.total_outstanding} outstanding points`);
  }
}
