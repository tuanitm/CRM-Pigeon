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
var ProfileController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const prisma_service_1 = require("../shared/prisma/prisma.service");
const journey_engine_service_1 = require("../engines/journey/journey-engine.service");
const journey_run_service_1 = require("../engines/journey/journey-run.service");
let ProfileController = ProfileController_1 = class ProfileController {
    prisma;
    journeyEngine;
    journeyRunService;
    logger = new common_1.Logger(ProfileController_1.name);
    constructor(prisma, journeyEngine, journeyRunService) {
        this.prisma = prisma;
        this.journeyEngine = journeyEngine;
        this.journeyRunService = journeyRunService;
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
                    take: 100,
                },
                loyaltyAccount: {
                    include: {
                        tier: true,
                        transactions: {
                            orderBy: { createdAt: 'desc' },
                            take: 50,
                        },
                    },
                },
                consents: true,
                reward_redemption: {
                    include: { reward_catalog: true },
                    orderBy: { createdAt: 'desc' },
                },
                journey_run: {
                    include: { journey: true },
                    orderBy: { entered_at: 'desc' },
                },
                orders: {
                    where: { isInternal: true },
                    include: { items: { include: { product: true } } },
                    orderBy: { createdAt: 'desc' },
                },
                devices: {
                    orderBy: { lastLogin: 'desc' },
                },
            },
        });
    }
    async debugBabyJourney(id) {
        this.logger.log(`Debugging baby.profile_created for ${id}`);
        await this.journeyRunService.handleEventTrigger('baby.profile_created', id, { debug: true });
        return { success: true };
    }
    async updateProfile(id, data) {
        if (data.phone) {
            const existing = await this.prisma.customer.findFirst({
                where: { phone: data.phone, id: { not: id } },
            });
            if (existing)
                throw new Error('Phone number already in use');
        }
        const oldCustomer = await this.prisma.customer.findUnique({
            where: { id },
            include: { addresses: true },
        });
        const oldEmail = oldCustomer?.email;
        const oldAddress = oldCustomer?.addresses?.[0]?.addressLine1;
        const eventsToLog = [];
        if (data.babies) {
            const existingBabies = await this.prisma.baby.findMany({
                where: { customerId: id },
            });
            const incomingIds = data.babies
                .filter((b) => b.id)
                .map((b) => b.id);
            const toDelete = existingBabies.filter((b) => !incomingIds.includes(b.id));
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
                    await this.prisma.baby.update({
                        where: { id: b.id },
                        data: babyData,
                    });
                    eventsToLog.push({
                        type: 'CHILD_MODIFIED',
                        props: { babyId: b.id, name: b.name },
                    });
                }
                else {
                    const newBaby = await this.prisma.baby.create({
                        data: { ...babyData, customerId: id },
                    });
                    eventsToLog.push({
                        type: 'CHILD_ADDED',
                        props: { babyId: newBaby.id, name: b.name },
                    });
                    try {
                        await this.journeyRunService.handleEventTrigger('baby.profile_created', id, { babyId: newBaby.id, babyName: b.name });
                    }
                    catch (err) {
                        this.logger.error(`Failed to fire baby.profile_created: ${err.message}`);
                    }
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
                addresses: data.address !== undefined
                    ? {
                        deleteMany: {},
                        create: data.address ? [{ addressLine1: data.address }] : [],
                    }
                    : undefined,
            },
        });
        if (data.email && data.email !== oldEmail) {
            eventsToLog.push({
                type: 'EMAIL_UPDATED',
                props: { oldEmail, newEmail: data.email },
            });
        }
        if (data.address !== undefined && data.address !== oldAddress) {
            eventsToLog.push({
                type: 'ADDRESS_UPDATED',
                props: { oldAddress, newAddress: data.address },
            });
        }
        if (data.fullName && data.fullName !== oldCustomer?.fullName) {
            eventsToLog.push({
                type: 'PROFILE_UPDATED',
                props: { updatedFields: ['fullName'] },
            });
        }
        for (const evt of eventsToLog) {
            await this.prisma.event.create({
                data: {
                    customer_id: id,
                    event_type: evt.type,
                    properties: evt.props,
                    source: 'customer-api',
                },
            });
        }
        if (data.isOnboardingCompletion) {
            try {
                await this.journeyRunService.handleEventTrigger('customer.profile_completed', id);
                this.logger.log(`Fired customer.profile_completed for customer ${id}`);
            }
            catch (err) {
                this.logger.error(`Failed to fire customer.profile_completed: ${err.message}`);
            }
        }
        return updatedCustomer;
    }
    async updateRewardRedemptionStatus(id, redemptionId, data) {
        return this.prisma.rewardRedemption.update({
            where: { id: redemptionId, customerId: id },
            data: {
                status: data.status,
                fulfilledAt: data.status === 'fulfilled' ? new Date() : null,
                shipmentNo: data.shipmentNo,
                trackingLink: data.trackingLink,
            },
        });
    }
    async updateOrderStatus(id, orderId, data) {
        return this.prisma.order.update({
            where: { id: orderId, customerId: id },
            data: {
                status: data.status,
                shipmentNo: data.shipmentNo,
                trackingLink: data.trackingLink,
            },
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
    (0, common_1.Get)(':id/debug-baby-journey'),
    (0, swagger_1.ApiOperation)({ summary: 'Debug journey trigger' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProfileController.prototype, "debugBabyJourney", null);
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
exports.ProfileController = ProfileController = ProfileController_1 = __decorate([
    (0, swagger_1.ApiTags)('Customer Profile'),
    (0, common_1.Controller)('customers'),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        journey_engine_service_1.JourneyEngineService,
        journey_run_service_1.JourneyRunService])
], ProfileController);
//# sourceMappingURL=profile.controller.js.map