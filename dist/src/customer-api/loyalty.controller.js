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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoyaltyController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const prisma_service_1 = require("../shared/prisma/prisma.service");
const redis_service_1 = require("../shared/redis/redis.service");
let LoyaltyController = class LoyaltyController {
    prisma;
    redis;
    constructor(prisma, redis) {
        this.prisma = prisma;
        this.redis = redis;
    }
    async getLoyalty(customerId) {
        return this.prisma.loyaltyAccount.findUnique({
            where: { customerId },
            include: {
                tier: true,
                transactions: { orderBy: { createdAt: 'desc' }, take: 20 },
            },
        });
    }
    async getRewards(customerId) {
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
    async redeemReward(customerId, data) {
        const lockAcquired = await this.redis.acquireLock(`loyalty:${customerId}`, 10);
        if (!lockAcquired) {
            return { error: 'Another transaction is in progress. Please try again.' };
        }
        try {
            const isDup = await this.redis.checkIdempotency(data.idempotencyKey);
            if (isDup)
                return { status: 'duplicate' };
            const reward = await this.prisma.rewardCatalog.findUnique({
                where: { code: data.rewardCode },
            });
            if (!reward || !reward.isActive)
                return { error: 'Reward not found or inactive' };
            const account = await this.prisma.loyaltyAccount.findUnique({
                where: { customerId },
            });
            if (!account)
                return { error: 'No loyalty account found' };
            if (account.pointsBalance < reward.pointsCost)
                return { error: 'Insufficient points' };
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
            }
            else {
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
        }
        finally {
            await this.redis.releaseLock(`loyalty:${customerId}`);
        }
    }
};
exports.LoyaltyController = LoyaltyController;
__decorate([
    (0, common_1.Get)(':customerId'),
    (0, swagger_1.ApiOperation)({ summary: 'Get loyalty account with tier info' }),
    __param(0, (0, common_1.Param)('customerId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LoyaltyController.prototype, "getLoyalty", null);
__decorate([
    (0, common_1.Get)(':customerId/rewards'),
    (0, swagger_1.ApiOperation)({ summary: 'Get available rewards catalog' }),
    __param(0, (0, common_1.Param)('customerId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LoyaltyController.prototype, "getRewards", null);
__decorate([
    (0, common_1.Post)(':customerId/redeem'),
    (0, swagger_1.ApiOperation)({ summary: 'Redeem a reward (atomic with distributed lock)' }),
    __param(0, (0, common_1.Param)('customerId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], LoyaltyController.prototype, "redeemReward", null);
exports.LoyaltyController = LoyaltyController = __decorate([
    (0, swagger_1.ApiTags)('Loyalty'),
    (0, common_1.Controller)('loyalty'),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        redis_service_1.RedisService])
], LoyaltyController);
//# sourceMappingURL=loyalty.controller.js.map