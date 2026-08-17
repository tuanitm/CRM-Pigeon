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
exports.ProfileController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const prisma_service_1 = require("../shared/prisma/prisma.service");
let ProfileController = class ProfileController {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getProfile(id) {
        return this.prisma.customer.findUnique({
            where: { id },
            include: {
                babies: true,
                addresses: true,
                tags: true,
                event: {
                    orderBy: { occurred_at: 'desc' },
                    take: 100
                },
                loyaltyAccount: {
                    include: {
                        tier: true,
                        transactions: {
                            orderBy: { createdAt: 'desc' },
                            take: 50
                        }
                    }
                },
                consents: true,
                reward_redemption: {
                    include: { reward_catalog: true },
                    orderBy: { createdAt: 'desc' }
                },
                journey_run: {
                    include: { journey: true },
                    orderBy: { entered_at: 'desc' }
                },
                orders: {
                    where: { isInternal: true },
                    include: { items: { include: { product: true } } },
                    orderBy: { createdAt: 'desc' }
                },
                devices: {
                    orderBy: { lastLogin: 'desc' }
                }
            },
        });
    }
    async updateProfile(id, data) {
        if (data.phone) {
            const existing = await this.prisma.customer.findFirst({
                where: { phone: data.phone, id: { not: id } }
            });
            if (existing)
                throw new Error('Phone number already in use');
        }
        const oldCustomer = await this.prisma.customer.findUnique({
            where: { id },
            include: { addresses: true }
        });
        const oldEmail = oldCustomer?.email;
        const oldAddress = oldCustomer?.addresses?.[0]?.addressLine1;
        let eventsToLog = [];
        if (data.babies) {
            const existingBabies = await this.prisma.baby.findMany({ where: { customerId: id } });
            const incomingIds = data.babies.filter((b) => b.id).map((b) => b.id);
            const toDelete = existingBabies.filter(b => !incomingIds.includes(b.id));
            for (const b of toDelete) {
                await this.prisma.baby.delete({ where: { id: b.id } });
            }
            for (const b of data.babies) {
                const babyData = {
                    name: b.name,
                    gender: b.gender,
                    dateOfBirth: b.dateOfBirth ? new Date(b.dateOfBirth) : null,
                    dueDate: b.dueDate ? new Date(b.dueDate) : null,
                    isBorn: b.isBorn !== undefined ? b.isBorn : true,
                    stageCode: b.stageCode,
                };
                if (b.id) {
                    await this.prisma.baby.update({ where: { id: b.id }, data: babyData });
                    eventsToLog.push({ type: 'CHILD_MODIFIED', props: { babyId: b.id, name: b.name } });
                }
                else {
                    const newBaby = await this.prisma.baby.create({ data: { ...babyData, customerId: id } });
                    eventsToLog.push({ type: 'CHILD_ADDED', props: { babyId: newBaby.id, name: b.name } });
                }
            }
        }
        const updatedCustomer = await this.prisma.customer.update({
            where: { id },
            data: {
                fullName: data.fullName,
                phone: data.phone,
                email: data.email,
                gender: data.gender,
                customerType: data.customerType,
                dmsCode: data.dmsCode,
                notes: data.notes,
                dateOfBirth: data.dateOfBirth ? new Date(data.dateOfBirth) : undefined,
                avatarUrl: data.avatarUrl,
                addresses: data.address !== undefined ? {
                    deleteMany: {},
                    create: data.address ? [{ addressLine1: data.address }] : [],
                } : undefined,
            },
        });
        if (data.email && data.email !== oldEmail) {
            eventsToLog.push({ type: 'EMAIL_UPDATED', props: { oldEmail, newEmail: data.email } });
        }
        if (data.address !== undefined && data.address !== oldAddress) {
            eventsToLog.push({ type: 'ADDRESS_UPDATED', props: { oldAddress, newAddress: data.address } });
        }
        if (data.fullName && data.fullName !== oldCustomer?.fullName) {
            eventsToLog.push({ type: 'PROFILE_UPDATED', props: { updatedFields: ['fullName'] } });
        }
        for (const evt of eventsToLog) {
            await this.prisma.event.create({
                data: {
                    customer_id: id,
                    event_type: evt.type,
                    properties: evt.props,
                    source: 'customer-api'
                }
            });
        }
        if (data.isOnboardingCompletion) {
            await this.evaluateWelcomeBonus(id);
        }
        return updatedCustomer;
    }
    async evaluateWelcomeBonus(customerId) {
        const customer = await this.prisma.customer.findUnique({ where: { id: customerId }, select: { customerType: true } });
        if (customer?.customerType && customer.customerType !== 'End user')
            return;
        const welcomeRule = await this.prisma.loyaltyEarnRule.findFirst({
            where: { source: 'welcome_bonus', ruleName: 'Welcome Onboarding', isActive: true },
        });
        if (!welcomeRule)
            return;
        const now = new Date();
        if ((welcomeRule.validFrom && welcomeRule.validFrom > now) ||
            (welcomeRule.validUntil && welcomeRule.validUntil < now)) {
            return;
        }
        let loyaltyAccount = await this.prisma.loyaltyAccount.findUnique({ where: { customerId } });
        if (!loyaltyAccount) {
            loyaltyAccount = await this.prisma.loyaltyAccount.create({ data: { customerId } });
        }
        const formula = welcomeRule.pointsFormula;
        let rewards = [];
        if (formula?.rewards && Array.isArray(formula.rewards)) {
            rewards = formula.rewards;
        }
        else if (formula?.rewardType) {
            rewards = [formula];
        }
        else if (formula?.type === 'fixed') {
            rewards = [{ type: 'points', value: formula.value }];
        }
        let rewardContexts = [];
        const babyCount = await this.prisma.baby.count({ where: { customerId } });
        const hasChild = babyCount > 0;
        for (const r of rewards) {
            if (r.condition === 'has_child' && !hasChild)
                continue;
            const rType = r.type || r.rewardType || 'points';
            if (rType === 'points') {
                const pts = r.value || 0;
                if (pts > 0) {
                    await this.prisma.loyaltyAccount.update({
                        where: { id: loyaltyAccount.id },
                        data: {
                            pointsBalance: { increment: pts },
                            pointsLifetime: { increment: pts },
                            transactions: {
                                create: {
                                    customerId,
                                    type: 'earn',
                                    source: 'welcome_bonus',
                                    points: pts,
                                    balanceAfter: pts,
                                    description: r.condition ? 'Welcome Onboarding Bonus (Extra)' : 'Welcome Onboarding Bonus',
                                    idempotencyKey: `welcome-${customerId}-${r.condition || 'base'}-${Date.now()}`,
                                }
                            }
                        }
                    });
                    rewardContexts.push({ type: 'points', pointsEarned: pts, condition: r.condition });
                }
            }
            else if (rType === 'free_gift' && r.rewardId) {
                await this.prisma.rewardRedemption.create({
                    data: {
                        loyaltyAccountId: loyaltyAccount.id,
                        customerId,
                        rewardId: r.rewardId,
                        pointsSpent: 0,
                        status: 'pending',
                        idempotencyKey: `welcome-gift-${customerId}-${r.rewardId}-${Date.now()}`
                    }
                });
                rewardContexts.push({ type: 'free_gift', rewardId: r.rewardId });
            }
            else if (rType === 'voucher' && r.rewardId) {
                await this.prisma.rewardRedemption.create({
                    data: {
                        loyaltyAccountId: loyaltyAccount.id,
                        customerId,
                        rewardId: r.rewardId,
                        pointsSpent: 0,
                        status: 'pending',
                        idempotencyKey: `welcome-voucher-${customerId}-${r.rewardId}-${Date.now()}`
                    }
                });
                rewardContexts.push({ type: 'voucher', rewardId: r.rewardId });
            }
            else if (rType === 'product' && r.productId) {
                const orderNum = `INT-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
                await this.prisma.order.create({
                    data: {
                        customerId,
                        orderNumber: orderNum,
                        status: 'pending',
                        totalAmount: 0,
                        isInternal: true,
                        isGwp: false,
                        orderedAt: new Date(),
                        items: {
                            create: {
                                productId: r.productId,
                                quantity: 1,
                                unitPrice: 0,
                                totalPrice: 0,
                            }
                        }
                    }
                });
                rewardContexts.push({ type: 'product', productId: r.productId });
            }
        }
        const journey = await this.prisma.journey.upsert({
            where: { code: 'JRN_WELCOME_ONBOARDING' },
            update: {},
            create: {
                code: 'JRN_WELCOME_ONBOARDING',
                name: 'Welcome Onboarding',
                status: 'active',
                triggerEvent: 'customer.profile_completed'
            }
        });
        await this.prisma.journey_run.create({
            data: {
                journey_id: journey.id,
                customer_id: customerId,
                status: 'completed',
                context: { rewards: rewardContexts },
                entered_at: now,
                exited_at: now,
            }
        });
    }
    async updateRewardRedemptionStatus(id, redemptionId, data) {
        return this.prisma.rewardRedemption.update({
            where: { id: redemptionId, customerId: id },
            data: {
                status: data.status,
                fulfilledAt: data.status === 'fulfilled' ? new Date() : null,
                shipmentNo: data.shipmentNo,
                trackingLink: data.trackingLink
            }
        });
    }
    async updateOrderStatus(id, orderId, data) {
        return this.prisma.order.update({
            where: { id: orderId, customerId: id },
            data: {
                status: data.status,
                shipmentNo: data.shipmentNo,
                trackingLink: data.trackingLink
            }
        });
    }
};
exports.ProfileController = ProfileController;
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get customer profile (360 view)' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProfileController.prototype, "getProfile", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update customer profile' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ProfileController.prototype, "updateProfile", null);
__decorate([
    (0, common_1.Patch)(':id/reward-redemptions/:redemptionId/status'),
    (0, swagger_1.ApiOperation)({ summary: 'Update GWP fulfillment status' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('redemptionId')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], ProfileController.prototype, "updateRewardRedemptionStatus", null);
__decorate([
    (0, common_1.Patch)(':id/orders/:orderId/status'),
    (0, swagger_1.ApiOperation)({ summary: 'Update internal order status' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('orderId')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], ProfileController.prototype, "updateOrderStatus", null);
exports.ProfileController = ProfileController = __decorate([
    (0, swagger_1.ApiTags)('Customer Profile'),
    (0, common_1.Controller)('customers'),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProfileController);
//# sourceMappingURL=profile.controller.js.map