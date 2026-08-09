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
var PointsService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PointsService = void 0;
const common_1 = require("@nestjs/common");
const schedule_1 = require("@nestjs/schedule");
const prisma_service_1 = require("../../shared/prisma/prisma.service");
const redis_service_1 = require("../../shared/redis/redis.service");
let PointsService = PointsService_1 = class PointsService {
    prisma;
    redis;
    logger = new common_1.Logger(PointsService_1.name);
    constructor(prisma, redis) {
        this.prisma = prisma;
        this.redis = redis;
    }
    async earnPoints(params) {
        const { customerId, source, points, referenceType, referenceId, description, idempotencyKey } = params;
        if (points <= 0)
            return { success: false, error: 'Points must be positive' };
        const lockKey = `loyalty:${customerId}`;
        const locked = await this.redis.acquireLock(lockKey, 15);
        if (!locked)
            return { success: false, error: 'Concurrent operation in progress' };
        try {
            const isDup = await this.redis.checkIdempotency(idempotencyKey);
            if (isDup)
                return { success: false, error: 'Duplicate transaction' };
            let account = await this.prisma.loyaltyAccount.findUnique({ where: { customerId } });
            if (!account) {
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
            const tier = account.tierId
                ? await this.prisma.loyaltyTierConfig.findUnique({ where: { id: account.tierId } })
                : null;
            const multiplier = tier ? Number(tier.pointsMultiplier) : 1.0;
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
            const finalPoints = (earnRule?.tierMultiplierApplies !== false)
                ? Math.floor(points * multiplier)
                : points;
            const newBalance = account.pointsBalance + finalPoints;
            const expiryConfig = await this.prisma.systemConfig.findUnique({ where: { key: 'points_expiry_months' } });
            const expiryMonths = expiryConfig && !isNaN(parseInt(expiryConfig.value, 10)) ? parseInt(expiryConfig.value, 10) : 12;
            const expiresAt = new Date();
            expiresAt.setMonth(expiresAt.getMonth() + expiryMonths);
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
            await this.prisma.loyaltyAccount.update({
                where: { customerId },
                data: {
                    pointsBalance: newBalance,
                    pointsLifetime: account.pointsLifetime + finalPoints,
                },
            });
            this.logger.log(`Points earned: ${customerId} +${finalPoints} from ${source} (×${multiplier})`);
            return { success: true, newBalance };
        }
        finally {
            await this.redis.releaseLock(lockKey);
        }
    }
    async redeemPoints(params) {
        const lockKey = `loyalty:${params.customerId}`;
        const locked = await this.redis.acquireLock(lockKey, 15);
        if (!locked)
            return { success: false, error: 'Concurrent operation in progress' };
        try {
            const isDup = await this.redis.checkIdempotency(params.idempotencyKey);
            if (isDup)
                return { success: false, error: 'Duplicate transaction' };
            const account = await this.prisma.loyaltyAccount.findUnique({
                where: { customerId: params.customerId },
            });
            if (!account)
                return { success: false, error: 'No loyalty account' };
            if (account.pointsBalance < params.points)
                return { success: false, error: 'Insufficient points' };
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
        }
        finally {
            await this.redis.releaseLock(lockKey);
        }
    }
    async processExpiredPoints() {
        this.logger.log('Starting FIFO points expiry...');
        const expiredTxns = await this.prisma.loyaltyTransaction.findMany({
            where: {
                type: 'earn',
                expiresAt: { lte: new Date() },
                points: { gt: 0 },
            },
            orderBy: { createdAt: 'asc' },
            take: 1000,
        });
        let totalExpired = 0;
        for (const txn of expiredTxns) {
            const lockKey = `loyalty:${txn.customerId}`;
            const locked = await this.redis.acquireLock(lockKey, 10);
            if (!locked)
                continue;
            try {
                const account = await this.prisma.loyaltyAccount.findUnique({
                    where: { customerId: txn.customerId },
                });
                if (!account)
                    continue;
                const expireAmount = Math.min(txn.points, account.pointsBalance);
                if (expireAmount <= 0)
                    continue;
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
            }
            finally {
                await this.redis.releaseLock(lockKey);
            }
        }
        this.logger.log(`Points expiry complete: ${totalExpired} points expired across ${expiredTxns.length} transactions`);
    }
    async capturePointsLiability() {
        this.logger.log('Capturing points liability snapshot...');
        const result = await this.prisma.$queryRaw `
      SELECT
        COALESCE(SUM(points_balance), 0)::bigint AS total_outstanding,
        COALESCE(SUM(CASE WHEN lt.expires_at <= NOW() + INTERVAL '30 days' THEN lt.points ELSE 0 END), 0)::int AS expiring_30d,
        COALESCE(SUM(CASE WHEN lt.expires_at <= NOW() + INTERVAL '90 days' THEN lt.points ELSE 0 END), 0)::int AS expiring_90d
      FROM loyalty_account la
      LEFT JOIN loyalty_transaction lt ON lt.loyalty_account_id = la.id AND lt.type = 'earn' AND lt.points > 0
    `;
        const data = result[0] || { total_outstanding: 0, expiring_30d: 0, expiring_90d: 0 };
        const rateConfig = await this.prisma.systemConfig.findUnique({ where: { key: 'points_to_currency_rate' } });
        const conversionRate = rateConfig && !isNaN(parseFloat(rateConfig.value)) ? parseFloat(rateConfig.value) : 100;
        await this.prisma.points_liability_snapshot.create({
            data: {
                snapshot_date: new Date(),
                total_outstanding_points: BigInt(data.total_outstanding || 0),
                estimated_liability_vnd: Number(data.total_outstanding || 0) * conversionRate,
                points_expiring_30d: data.expiring_30d || 0,
                points_expiring_90d: data.expiring_90d || 0,
            },
        });
        this.logger.log(`Liability snapshot: ${data.total_outstanding} outstanding points`);
    }
};
exports.PointsService = PointsService;
__decorate([
    (0, schedule_1.Cron)('0 20 * * *', { name: 'points-expiry', timeZone: 'UTC' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PointsService.prototype, "processExpiredPoints", null);
__decorate([
    (0, schedule_1.Cron)('0 21 1 * *', { name: 'liability-snapshot', timeZone: 'UTC' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PointsService.prototype, "capturePointsLiability", null);
exports.PointsService = PointsService = PointsService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        redis_service_1.RedisService])
], PointsService);
//# sourceMappingURL=points.service.js.map