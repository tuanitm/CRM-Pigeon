"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
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
const bcrypt = __importStar(require("bcrypt"));
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
    async registerCustomer(data) {
        let cleaned = (data.phone || '').replace(/\D/g, '');
        if (cleaned.startsWith('0'))
            cleaned = '84' + cleaned.substring(1);
        if (!cleaned.startsWith('+') && cleaned)
            cleaned = '+' + cleaned;
        const existing = await this.prisma.customer.findFirst({
            where: { phone: cleaned },
        });
        if (existing) {
            throw new common_1.HttpException('Phone number already in use', common_1.HttpStatus.BAD_REQUEST);
        }
        let hashedPinCode = undefined;
        if (data.pinCode) {
            hashedPinCode = await bcrypt.hash(data.pinCode, 10);
        }
        const newCustomer = await this.prisma.customer.create({
            data: {
                phone: cleaned,
                email: data.email,
                fullName: data.fullName,
                customerCode: Math.floor(10000000 + Math.random() * 90000000).toString(),
                registrationSource: data.source || 'Portal',
                gender: data.gender,
                dateOfBirth: data.dateOfBirth ? new Date(data.dateOfBirth) : undefined,
                pinCode: hashedPinCode,
                addresses: data.address ? {
                    create: [{ addressLine1: data.address }]
                } : undefined,
                identities: data.zaloId ? {
                    create: [{ identityType: 'zalo_id', identityValue: data.zaloId, priority: 3 }]
                } : undefined,
                loyaltyAccount: {
                    create: {
                        pointsBalance: 0,
                        pointsLifetime: 0,
                        pointsRedeemed: 0,
                        pointsExpired: 0,
                    },
                },
            },
        });
        if (data.babies && Array.isArray(data.babies)) {
            for (const b of data.babies) {
                if (!b.name || !(b.dateOfBirth || b.dueDate))
                    continue;
                const babyData = {
                    name: b.name,
                    gender: b.gender,
                    dateOfBirth: b.dateOfBirth ? new Date(b.dateOfBirth) : null,
                    dueDate: b.dueDate ? new Date(b.dueDate) : null,
                    isBorn: b.isBorn !== undefined ? b.isBorn : true,
                    stageCode: b.stageCode,
                    customerId: newCustomer.id
                };
                const newBaby = await this.prisma.baby.create({ data: babyData });
                try {
                    await this.journeyRunService.handleEventTrigger('baby.profile_created', newCustomer.id, { babyId: newBaby.id, babyName: b.name });
                }
                catch (err) {
                    this.logger.error(`Failed to fire baby.profile_created: ${err.message}`);
                }
            }
        }
        if (data.isOnboardingCompletion) {
            try {
                await this.journeyRunService.handleEventTrigger('customer.profile_completed', newCustomer.id);
                this.logger.log(`Fired customer.profile_completed for customer ${newCustomer.id}`);
            }
            catch (err) {
                this.logger.error(`Failed to fire customer.profile_completed: ${err.message}`);
            }
        }
        return newCustomer;
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
        let cleanedPhone = data.phone;
        if (cleanedPhone) {
            cleanedPhone = cleanedPhone.replace(/\D/g, '');
            if (cleanedPhone.startsWith('0'))
                cleanedPhone = '84' + cleanedPhone.substring(1);
            if (!cleanedPhone.startsWith('+') && cleanedPhone)
                cleanedPhone = '+' + cleanedPhone;
            const existing = await this.prisma.customer.findFirst({
                where: { phone: cleanedPhone, id: { not: id } },
            });
            if (existing)
                throw new common_1.HttpException('Phone number already in use', common_1.HttpStatus.BAD_REQUEST);
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
        if (data.zaloId) {
            await this.prisma.customerIdentity.upsert({
                where: {
                    identityType_identityValue: {
                        identityType: 'zalo_id',
                        identityValue: data.zaloId,
                    },
                },
                update: { customerId: id },
                create: {
                    customerId: id,
                    identityType: 'zalo_id',
                    identityValue: data.zaloId,
                    priority: 3,
                },
            });
        }
        let hashedPinCode = undefined;
        if (data.pinCode) {
            hashedPinCode = await bcrypt.hash(data.pinCode, 10);
        }
        const updatedCustomer = await this.prisma.customer.update({
            where: { id },
            data: {
                fullName: data.fullName,
                phone: cleanedPhone,
                email: data.email,
                gender: data.gender,
                customerType: data.customerType,
                dmsCode: data.dmsCode,
                notes: data.notes,
                dateOfBirth: data.dateOfBirth ? new Date(data.dateOfBirth) : undefined,
                avatarUrl: data.avatarUrl,
                pinCode: hashedPinCode,
                addresses: data.address !== undefined
                    ? {
                        deleteMany: {},
                        create: data.address ? [{ addressLine1: data.address }] : [],
                    }
                    : undefined,
            },
        });
        const normalizedOldEmail = oldEmail || '';
        const normalizedNewEmail = data.email || '';
        if (data.email !== undefined && normalizedOldEmail !== normalizedNewEmail) {
            eventsToLog.push({
                type: 'EMAIL_UPDATED',
                props: { oldEmail: normalizedOldEmail || 'none', newEmail: normalizedNewEmail || 'none' },
            });
        }
        const normalizedOldAddress = oldAddress || '';
        const normalizedNewAddress = data.address || '';
        if (data.address !== undefined && normalizedOldAddress !== normalizedNewAddress) {
            eventsToLog.push({
                type: 'ADDRESS_UPDATED',
                props: { oldAddress: normalizedOldAddress || 'none', newAddress: normalizedNewAddress || 'none' },
            });
        }
        const normalizedOldName = oldCustomer?.fullName || '';
        const normalizedNewName = data.fullName || '';
        if (data.fullName !== undefined && normalizedOldName !== normalizedNewName) {
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
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Register a new customer from onboarding' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProfileController.prototype, "registerCustomer", null);
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