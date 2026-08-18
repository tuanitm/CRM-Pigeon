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
const points_service_1 = require("./points.service");
const tier_service_1 = require("./tier.service");
const prisma_service_1 = require("../../shared/prisma/prisma.service");
const uuid_1 = require("uuid");
const swagger_1 = require("@nestjs/swagger");
class EarnPointsDto {
    source;
    points;
    referenceType;
    referenceId;
    description;
}
class RedeemPointsDto {
    points;
    referenceType;
    referenceId;
    description;
}
let LoyaltyController = class LoyaltyController {
    pointsService;
    tierService;
    prisma;
    constructor(pointsService, tierService, prisma) {
        this.pointsService = pointsService;
        this.tierService = tierService;
        this.prisma = prisma;
    }
    async getAccount(customerId) {
        const account = await this.prisma.loyaltyAccount.findUnique({
            where: { customerId },
            include: { tier: true },
        });
        if (!account) {
            const defaultTier = await this.prisma.loyaltyTierConfig.findFirst({
                where: { isDefault: true },
            });
            return {
                customerId,
                pointsBalance: 0,
                pointsLifetime: 0,
                tier: { tierCode: defaultTier?.tierCode || 'NONE' },
            };
        }
        return account;
    }
    async earnPoints(customerId, dto) {
        return this.pointsService.earnPoints({
            customerId,
            source: dto.source,
            points: dto.points,
            referenceType: dto.referenceType,
            referenceId: dto.referenceId,
            description: dto.description,
            idempotencyKey: (0, uuid_1.v4)(),
        });
    }
    async redeemPoints(customerId, dto) {
        return this.pointsService.redeemPoints({
            customerId,
            points: dto.points,
            referenceType: dto.referenceType,
            referenceId: dto.referenceId,
            description: dto.description,
            idempotencyKey: (0, uuid_1.v4)(),
        });
    }
    async evaluateTier(customerId) {
        return this.tierService.evaluateCustomerTier(customerId);
    }
};
exports.LoyaltyController = LoyaltyController;
__decorate([
    (0, common_1.Get)('accounts/:customerId'),
    (0, swagger_1.ApiOperation)({ summary: 'Get loyalty account details for a customer' }),
    __param(0, (0, common_1.Param)('customerId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LoyaltyController.prototype, "getAccount", null);
__decorate([
    (0, common_1.Post)('points/:customerId/earn'),
    (0, swagger_1.ApiOperation)({ summary: 'Manually award points to a customer' }),
    __param(0, (0, common_1.Param)('customerId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, EarnPointsDto]),
    __metadata("design:returntype", Promise)
], LoyaltyController.prototype, "earnPoints", null);
__decorate([
    (0, common_1.Post)('points/:customerId/redeem'),
    (0, swagger_1.ApiOperation)({ summary: 'Redeem points for a customer' }),
    __param(0, (0, common_1.Param)('customerId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, RedeemPointsDto]),
    __metadata("design:returntype", Promise)
], LoyaltyController.prototype, "redeemPoints", null);
__decorate([
    (0, common_1.Get)('tiers/:customerId/evaluate'),
    (0, swagger_1.ApiOperation)({ summary: 'Evaluate and return tier metrics for a customer' }),
    __param(0, (0, common_1.Param)('customerId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LoyaltyController.prototype, "evaluateTier", null);
exports.LoyaltyController = LoyaltyController = __decorate([
    (0, swagger_1.ApiTags)('Loyalty'),
    (0, common_1.Controller)('loyalty'),
    __metadata("design:paramtypes", [points_service_1.PointsService,
        tier_service_1.TierService,
        prisma_service_1.PrismaService])
], LoyaltyController);
//# sourceMappingURL=loyalty.controller.js.map