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
var ReferralService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReferralService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../shared/prisma/prisma.service");
const points_service_1 = require("./points.service");
const uuid_1 = require("uuid");
let ReferralService = ReferralService_1 = class ReferralService {
    prisma;
    pointsService;
    logger = new common_1.Logger(ReferralService_1.name);
    constructor(prisma, pointsService) {
        this.prisma = prisma;
        this.pointsService = pointsService;
    }
    async generateCode(customerId) {
        const existing = await this.prisma.referral_code.findFirst({
            where: { customer_id: customerId, is_active: true },
        });
        if (existing)
            return existing.code;
        const code = `PGN${(0, uuid_1.v4)().slice(0, 6).toUpperCase()}`;
        await this.prisma.referral_code.create({
            data: { customer_id: customerId, code, max_uses: 10 },
        });
        return code;
    }
    async processReferral(referralCode, referredCustomerId) {
        const codeRecord = await this.prisma.referral_code.findUnique({ where: { code: referralCode } });
        if (!codeRecord || !codeRecord.is_active)
            return { success: false, error: 'Invalid referral code' };
        if (codeRecord.max_uses && codeRecord.current_uses >= codeRecord.max_uses) {
            return { success: false, error: 'Referral code has reached max uses' };
        }
        if (codeRecord.customer_id === referredCustomerId) {
            return { success: false, error: 'Cannot refer yourself' };
        }
        const referrerAddresses = await this.prisma.customerAddress.findMany({
            where: { customerId: codeRecord.customer_id },
            select: { addressLine1: true, district: true, province: true },
        });
        const referredAddresses = await this.prisma.customerAddress.findMany({
            where: { customerId: referredCustomerId },
            select: { addressLine1: true, district: true, province: true },
        });
        for (const ra of referrerAddresses) {
            for (const rd of referredAddresses) {
                if (ra.addressLine1 && ra.addressLine1 === rd.addressLine1 &&
                    ra.district === rd.district && ra.province === rd.province) {
                    this.logger.warn(`Referral fraud suspected: same address for ${codeRecord.customer_id} and ${referredCustomerId}`);
                    return { success: false, error: 'Referral rejected: address match detected' };
                }
            }
        }
        const existingConversion = await this.prisma.referral_conversion.findFirst({
            where: { referral_code_id: codeRecord.id, referred_id: referredCustomerId },
        });
        if (existingConversion)
            return { success: false, error: 'Already referred' };
        const referrerPoints = 200;
        const referredPoints = 100;
        await this.prisma.referral_conversion.create({
            data: {
                referral_code_id: codeRecord.id,
                referrer_id: codeRecord.customer_id,
                referred_id: referredCustomerId,
                status: 'converted',
                referrer_points: referrerPoints,
                referred_points: referredPoints,
                converted_at: new Date(),
            },
        });
        await this.prisma.referral_code.update({
            where: { id: codeRecord.id },
            data: { current_uses: codeRecord.current_uses + 1 },
        });
        await this.pointsService.earnPoints({
            customerId: codeRecord.customer_id,
            source: 'referral',
            points: referrerPoints,
            referenceType: 'referral_conversion',
            description: 'Referral bonus: friend signed up',
            idempotencyKey: `referral:referrer:${codeRecord.id}:${referredCustomerId}`,
        });
        await this.pointsService.earnPoints({
            customerId: referredCustomerId,
            source: 'referral',
            points: referredPoints,
            referenceType: 'referral_conversion',
            description: 'Welcome bonus: referred by friend',
            idempotencyKey: `referral:referred:${codeRecord.id}:${referredCustomerId}`,
        });
        this.logger.log(`Referral converted: ${codeRecord.customer_id} → ${referredCustomerId}`);
        return { success: true };
    }
};
exports.ReferralService = ReferralService;
exports.ReferralService = ReferralService = ReferralService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        points_service_1.PointsService])
], ReferralService);
//# sourceMappingURL=referral.service.js.map