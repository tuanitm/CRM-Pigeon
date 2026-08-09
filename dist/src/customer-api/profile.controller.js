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
                loyaltyAccount: { include: { tier: true } },
                consents: true,
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
        return this.prisma.customer.update({
            where: { id },
            data: {
                fullName: data.fullName,
                phone: data.phone,
                email: data.email,
                gender: data.gender,
                customerType: data.customerType,
                notes: data.notes,
                dateOfBirth: data.dateOfBirth ? new Date(data.dateOfBirth) : undefined,
                avatarUrl: data.avatarUrl,
                addresses: data.address !== undefined ? {
                    deleteMany: {},
                    create: data.address ? [{ addressLine1: data.address }] : [],
                } : undefined,
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
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update customer profile' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ProfileController.prototype, "updateProfile", null);
exports.ProfileController = ProfileController = __decorate([
    (0, swagger_1.ApiTags)('Customer Profile'),
    (0, common_1.Controller)('customers'),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProfileController);
//# sourceMappingURL=profile.controller.js.map