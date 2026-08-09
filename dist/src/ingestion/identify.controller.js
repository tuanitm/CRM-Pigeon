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
exports.IdentifyController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const identify_dto_1 = require("./dto/identify.dto");
const prisma_service_1 = require("../shared/prisma/prisma.service");
const redis_service_1 = require("../shared/redis/redis.service");
let IdentifyController = class IdentifyController {
    prisma;
    redis;
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
        if (dto.phone) {
            const normalizedPhone = this.normalizePhone(dto.phone);
            customer = await this.prisma.customer.findUnique({
                where: { phone: normalizedPhone },
            });
            if (!customer) {
                customer = await this.prisma.customer.create({
                    data: {
                        phone: normalizedPhone,
                        email: dto.email,
                        fullName: dto.fullName,
                        registrationSource: 'api',
                    },
                });
            }
        }
        else if (dto.email) {
            customer = await this.prisma.customer.findFirst({
                where: { email: dto.email },
            });
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
        return { status: 'identified', customerId: customer?.id || null };
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
    (0, swagger_1.ApiOperation)({ summary: 'Identify / upsert customer by phone or anonymous ID' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [identify_dto_1.IdentifyDto]),
    __metadata("design:returntype", Promise)
], IdentifyController.prototype, "identify", null);
exports.IdentifyController = IdentifyController = __decorate([
    (0, swagger_1.ApiTags)('Ingestion'),
    (0, common_1.Controller)('identify'),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        redis_service_1.RedisService])
], IdentifyController);
//# sourceMappingURL=identify.controller.js.map