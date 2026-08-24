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
var IdentifyController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdentifyController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const identify_dto_1 = require("./dto/identify.dto");
const prisma_service_1 = require("../shared/prisma/prisma.service");
const redis_service_1 = require("../shared/redis/redis.service");
const ua_parser_js_1 = require("ua-parser-js");
const bcrypt = __importStar(require("bcrypt"));
let IdentifyController = IdentifyController_1 = class IdentifyController {
    prisma;
    redis;
    logger = new common_1.Logger(IdentifyController_1.name);
    constructor(prisma, redis) {
        this.prisma = prisma;
        this.redis = redis;
    }
    async identify(dto) {
        if (dto.idempotencyKey) {
            const isDup = await this.redis.checkIdempotency(dto.idempotencyKey);
            if (isDup)
                return { status: 'duplicate' };
        }
        let customer = null;
        let isNew = false;
        if (dto.phone) {
            const normalizedPhone = this.normalizePhone(dto.phone);
            customer = await this.prisma.customer.findUnique({
                where: { phone: normalizedPhone },
            });
            if (!customer) {
                if (dto.source === 'Portal' || dto.source === 'ZaloMiniApp') {
                    return { status: 'needs_registration', isNew: true, customerId: null };
                }
                customer = await this.prisma.customer.create({
                    data: {
                        phone: normalizedPhone,
                        email: dto.email,
                        fullName: dto.fullName,
                        customerCode: Math.floor(10000000 + Math.random() * 90000000).toString(),
                        registrationSource: dto.source || 'api',
                    },
                });
                isNew = true;
                const loyaltyAccount = await this.prisma.loyaltyAccount.create({
                    data: { customerId: customer.id },
                });
            }
        }
        else if (dto.email) {
            customer = await this.prisma.customer.findFirst({
                where: { email: dto.email },
            });
        }
        if (customer && customer.isActive === false) {
            throw new common_1.HttpException('Your account has been deactivated. Please contact support.', common_1.HttpStatus.FORBIDDEN);
        }
        if (customer && !customer.pinCode && dto.source === 'ZaloMiniApp') {
            return { status: 'needs_registration', isNew: true, customerId: customer.id };
        }
        if (customer && dto.source !== 'ZaloMiniApp' && !isNew) {
            if (customer.pinCode) {
                if (!dto.pinCode) {
                    throw new common_1.HttpException('PIN is required', common_1.HttpStatus.UNAUTHORIZED);
                }
                const isMatch = await bcrypt.compare(dto.pinCode, customer.pinCode);
                if (!isMatch) {
                    throw new common_1.HttpException('Invalid PIN', common_1.HttpStatus.UNAUTHORIZED);
                }
            }
        }
        if (customer && dto.anonymousId) {
            await this.prisma.customerIdentity.upsert({
                where: {
                    identityType_identityValue: {
                        identityType: 'anonymous_id',
                        identityValue: dto.anonymousId,
                    },
                },
                update: { customerId: customer.id },
                create: {
                    customerId: customer.id,
                    identityType: 'anonymous_id',
                    identityValue: dto.anonymousId,
                    priority: 8,
                },
            });
        }
        if (customer && dto.zaloId) {
            await this.prisma.customerIdentity.upsert({
                where: {
                    identityType_identityValue: {
                        identityType: 'zalo_id',
                        identityValue: dto.zaloId,
                    },
                },
                update: { customerId: customer.id },
                create: {
                    customerId: customer.id,
                    identityType: 'zalo_id',
                    identityValue: dto.zaloId,
                    priority: 3,
                },
            });
        }
        if (customer && dto.babies && Array.isArray(dto.babies)) {
            for (const baby of dto.babies) {
                if (!baby.name || !baby.dateOfBirth || !baby.gender) {
                    this.logger.warn(`Skipping baby record for customer ${customer.id} due to missing required fields`);
                    continue;
                }
                await this.prisma.baby.create({
                    data: {
                        customerId: customer.id,
                        name: baby.name,
                        gender: baby.gender,
                        dateOfBirth: new Date(baby.dateOfBirth),
                        stageCode: baby.stageCode,
                    },
                });
            }
        }
        if (customer && dto.userAgent) {
            try {
                const parser = new ua_parser_js_1.UAParser(dto.userAgent);
                const browser = parser.getBrowser().name || 'Unknown Browser';
                const os = parser.getOS().name || 'Unknown OS';
                let deviceType = parser.getDevice().type || 'Desktop';
                if (dto.userAgent.toLowerCase().includes('zalo')) {
                    deviceType = 'Zalo MiniApp';
                }
                const existingDevice = await this.prisma.customerDevice.findFirst({
                    where: {
                        customerId: customer.id,
                        userAgent: dto.userAgent,
                    },
                });
                if (existingDevice) {
                    await this.prisma.customerDevice.update({
                        where: { id: existingDevice.id },
                        data: { lastLogin: new Date() },
                    });
                }
                else {
                    await this.prisma.customerDevice.create({
                        data: {
                            customerId: customer.id,
                            deviceType,
                            browser,
                            os,
                            userAgent: dto.userAgent,
                        },
                    });
                }
            }
            catch (err) {
                this.logger.error('Failed to process device info', err);
            }
        }
        return { status: 'identified', customerId: customer?.id || null, isNew };
    }
    normalizePhone(phone) {
        let cleaned = phone.replace(/\D/g, '');
        if (cleaned.startsWith('0')) {
            cleaned = '84' + cleaned.substring(1);
        }
        if (!cleaned.startsWith('+')) {
            cleaned = '+' + cleaned;
        }
        return cleaned;
    }
};
exports.IdentifyController = IdentifyController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({
        summary: 'Identify / upsert customer by phone or anonymous ID',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [identify_dto_1.IdentifyDto]),
    __metadata("design:returntype", Promise)
], IdentifyController.prototype, "identify", null);
exports.IdentifyController = IdentifyController = IdentifyController_1 = __decorate([
    (0, swagger_1.ApiTags)('Ingestion'),
    (0, common_1.Controller)('identify'),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        redis_service_1.RedisService])
], IdentifyController);
//# sourceMappingURL=identify.controller.js.map