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
exports.BabyController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const prisma_service_1 = require("../shared/prisma/prisma.service");
let BabyController = class BabyController {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async listBabies(customerId) {
        return this.prisma.baby.findMany({
            where: { customerId },
            include: { growthLogs: { orderBy: { recordedAt: 'desc' }, take: 5 } },
        });
    }
    async createBaby(data) {
        return this.prisma.baby.create({
            data: {
                customerId: data.customerId,
                name: data.name,
                gender: data.gender,
                dateOfBirth: data.dateOfBirth ? new Date(data.dateOfBirth) : undefined,
                dueDate: data.dueDate ? new Date(data.dueDate) : undefined,
                isBorn: data.isBorn ?? false,
                feedingType: data.feedingType,
            },
        });
    }
    async updateBaby(id, data) {
        return this.prisma.baby.update({ where: { id }, data });
    }
    async deleteBaby(id) {
        return this.prisma.baby.delete({ where: { id } });
    }
};
exports.BabyController = BabyController;
__decorate([
    (0, common_1.Get)('customer/:customerId'),
    (0, swagger_1.ApiOperation)({ summary: 'List all babies for a customer' }),
    __param(0, (0, common_1.Param)('customerId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BabyController.prototype, "listBabies", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create baby profile' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BabyController.prototype, "createBaby", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update baby profile' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], BabyController.prototype, "updateBaby", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete baby profile' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BabyController.prototype, "deleteBaby", null);
exports.BabyController = BabyController = __decorate([
    (0, swagger_1.ApiTags)('Baby Profile'),
    (0, common_1.Controller)('babies'),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], BabyController);
//# sourceMappingURL=baby.controller.js.map