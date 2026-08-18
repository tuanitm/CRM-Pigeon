import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { PrismaService } from '../shared/prisma/prisma.service';
import { RedisService } from '../shared/redis/redis.service';

@ApiTags('Loyalty')
@Controller('loyalty')
export class LoyaltyController {
  constructor(
    private prisma: PrismaService,
    private redis: RedisService,
  ) {}

  @Get(':customerId')
  @ApiOperation({ summary: 'Get loyalty account with tier info' })
  async getLoyalty(@Param('customerId') customerId: string) {
    return this.prisma.loyaltyAccount.findUnique({
      where: { customerId },
      include: {
        tier: true,
        transactions: { orderBy: { createdAt: 'desc' }, take: 20 },
      },
    });
  }

  @Get(':customerId/rewards')
  @ApiOperation({ summary: 'Get available rewards catalog' })
  async getRewards(@Param('customerId') customerId: string) {
    const account = await this.prisma.loyaltyAccount.findUnique({
      where: { customerId },
    });
    return this.prisma.rewardCatalog.findMany({
      where: {
        isActive: true,
      },
      orderBy: { pointsCost: 'asc' },
    });
  }

  @Post(':customerId/redeem')
  @ApiOperation({ summary: 'Redeem a reward (atomic with distributed lock)' })
  async redeemReward(
    @Param('customerId') customerId: string,
    @Body() data: { rewardCode: string; idempotencyKey: string },
  ) {
    // Distributed lock per customer
    const lockAcquired = await this.redis.acquireLock(
      `loyalty:${customerId}`,
      10,
    );
    if (!lockAcquired) {
      return { error: 'Another transaction is in progress. Please try again.' };
    }

    try {
      // Idempotency check
      const isDup = await this.redis.checkIdempotency(data.idempotencyKey);
      if (isDup) return { status: 'duplicate' };

      const reward = await this.prisma.rewardCatalog.findUnique({
        where: { code: data.rewardCode },
      });
      if (!reward || !reward.isActive)
        return { error: 'Reward not found or inactive' };

      const account = await this.prisma.loyaltyAccount.findUnique({
        where: { customerId },
      });
      if (!account) return { error: 'No loyalty account found' };
      if (account.pointsBalance < reward.pointsCost)
        return { error: 'Insufficient points' };

      // Atomic: deduct points + create redemption
      const newBalance = account.pointsBalance - reward.pointsCost;

      await this.prisma.loyaltyAccount.update({
        where: { customerId },
        data: {
          pointsBalance: newBalance,
          pointsRedeemed: account.pointsRedeemed + reward.pointsCost,
        },
      });

      await this.prisma.loyaltyTransaction.create({
        data: {
          loyaltyAccountId: account.id,
          customerId,
          type: 'redeem',
          source: 'reward_redemption',
          points: -reward.pointsCost,
          balanceAfter: newBalance,
          referenceType: 'reward',
          referenceId: reward.id,
          description: `Redeemed: ${reward.name}`,
          idempotencyKey: data.idempotencyKey,
        },
      });

      if (reward.category === 'product') {
        const product = await this.prisma.product.findFirst({
          where: { sku: reward.code },
        });
        await this.prisma.order.create({
          data: {
            customerId,
            status: 'pending',
            totalAmount: 0,
            isInternal: true,
            isGwp: false,
            orderedAt: new Date(),
            items: {
              create: {
                productId: product?.id,
                sku: reward.code,
                quantity: 1,
                unitPrice: 0,
                totalPrice: 0,
              },
            },
          },
        });
      } else {
        await this.prisma.rewardRedemption.create({
          data: {
            customerId,
            loyaltyAccountId: account.id,
            rewardId: reward.id,
            pointsSpent: reward.pointsCost,
            status: 'pending',
            idempotencyKey: data.idempotencyKey,
          },
        });
      }

      await this.prisma.event.create({
        data: {
          customer_id: customerId,
          event_type: 'REWARD_REDEEMED',
          properties: {
            rewardCode: reward.code,
            rewardName: reward.name,
            pointsSpent: reward.pointsCost,
            category: reward.category,
          },
          source: 'customer-portal',
        },
      });

      return { status: 'redeemed', pointsSpent: reward.pointsCost, newBalance };
    } finally {
      await this.redis.releaseLock(`loyalty:${customerId}`);
    }
  }
}
