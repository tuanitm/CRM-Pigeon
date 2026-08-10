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
exports.Customer360Controller = exports.CreateCustomerDto = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const prisma_service_1 = require("../shared/prisma/prisma.service");
const class_validator_1 = require("class-validator");
class CreateCustomerDto {
    fullName;
    phone;
    email;
    gender;
    dateOfBirth;
    customerType;
    address;
    notes;
}
exports.CreateCustomerDto = CreateCustomerDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCustomerDto.prototype, "fullName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCustomerDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CreateCustomerDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, enum: ['male', 'female', 'other'] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCustomerDto.prototype, "gender", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, type: String, format: 'date' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreateCustomerDto.prototype, "dateOfBirth", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, enum: ['End user', 'Outlet', 'Keyshop'] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCustomerDto.prototype, "customerType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCustomerDto.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCustomerDto.prototype, "notes", void 0);
let Customer360Controller = class Customer360Controller {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getMetrics() {
        const totalCustomers = await this.prisma.customer.count();
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
        const newCustomers30d = await this.prisma.customer.count({
            where: { createdAt: { gte: thirtyDaysAgo } }
        });
        const activeCustomers = await this.prisma.customer.count({
            where: { updatedAt: { gte: thirtyDaysAgo } }
        });
        const completeProfiles = await this.prisma.customer.count({
            where: { email: { not: null }, phone: { not: null } }
        });
        const completeProfilesPct = totalCustomers > 0 ? Math.round((completeProfiles / totalCustomers) * 100) : 0;
        const babyProfiles = await this.prisma.baby.count();
        const agg = await this.prisma.order.aggregate({
            _sum: { totalAmount: true }
        });
        const totalRevenue = Number(agg._sum.totalAmount || 0);
        const averageCLV = totalCustomers > 0 ? totalRevenue / totalCustomers : 0;
        const customersWithOrders = await this.prisma.order.groupBy({
            by: ['customerId'],
            having: { customerId: { _count: { gt: 1 } } }
        });
        const returningCustomers = customersWithOrders.length;
        return {
            totalCustomers,
            newCustomers30d,
            activeCustomers,
            returningCustomers,
            completeProfilesPct,
            babyProfiles,
            averageCLV,
            churnRate: 4.8
        };
    }
    async listCustomers(cursor, take = 20, search) {
        const where = search
            ? {
                OR: [
                    { phone: { contains: search } },
                    { email: { contains: search } },
                    { fullName: { contains: search, mode: 'insensitive' } },
                ],
            }
            : {};
        const customers = await this.prisma.customer.findMany({
            where,
            take: take + 1,
            ...(cursor ? { cursor: { id: cursor }, skip: 1 } : {}),
            orderBy: { createdAt: 'desc' },
            include: {
                loyaltyAccount: { select: { pointsBalance: true, tierId: true } },
                babies: { select: { id: true, name: true, stageCode: true } },
                _count: { select: { orders: true } },
            },
        });
        const hasMore = customers.length > take;
        const data = hasMore ? customers.slice(0, take) : customers;
        const nextCursor = hasMore ? data[data.length - 1].id : null;
        return { data, nextCursor, hasMore };
    }
    async createCustomer(dto) {
        try {
            const existingCustomer = await this.prisma.customer.findFirst({
                where: { phone: dto.phone }
            });
            if (existingCustomer) {
                throw new common_1.HttpException('Phone number already in use', common_1.HttpStatus.BAD_REQUEST);
            }
            const defaultTier = await this.prisma.loyaltyTierConfig.findFirst({
                where: { isDefault: true }
            });
            const newCustomer = await this.prisma.customer.create({
                data: {
                    customerCode: Math.floor(10000000 + Math.random() * 90000000).toString(),
                    fullName: dto.fullName,
                    phone: dto.phone,
                    email: dto.email,
                    gender: dto.gender,
                    dateOfBirth: dto.dateOfBirth ? new Date(dto.dateOfBirth) : undefined,
                    customerType: dto.customerType,
                    notes: dto.notes,
                    addresses: dto.address ? {
                        create: {
                            addressLine1: dto.address,
                        }
                    } : undefined,
                    loyaltyAccount: {
                        create: {
                            tierId: defaultTier?.id,
                            pointsBalance: 0,
                            pointsLifetime: 0,
                            pointsRedeemed: 0,
                            pointsExpired: 0,
                        }
                    }
                },
                include: {
                    loyaltyAccount: true,
                }
            });
            return newCustomer;
        }
        catch (error) {
            if (error instanceof common_1.HttpException)
                throw error;
            throw new common_1.HttpException('Failed to create customer', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.Customer360Controller = Customer360Controller;
__decorate([
    (0, common_1.Get)('metrics'),
    (0, swagger_1.ApiOperation)({ summary: 'Get Customer 360 KPIs' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Customer360Controller.prototype, "getMetrics", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'List customers with cursor pagination' }),
    (0, swagger_1.ApiQuery)({ name: 'cursor', required: false }),
    (0, swagger_1.ApiQuery)({ name: 'take', required: false, type: Number }),
    (0, swagger_1.ApiQuery)({ name: 'search', required: false }),
    __param(0, (0, common_1.Query)('cursor')),
    __param(1, (0, common_1.Query)('take')),
    __param(2, (0, common_1.Query)('search')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, String]),
    __metadata("design:returntype", Promise)
], Customer360Controller.prototype, "listCustomers", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new customer' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateCustomerDto]),
    __metadata("design:returntype", Promise)
], Customer360Controller.prototype, "createCustomer", null);
exports.Customer360Controller = Customer360Controller = __decorate([
    (0, swagger_1.ApiTags)('Admin - Customer'),
    (0, common_1.Controller)('admin/customers'),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], Customer360Controller);
//# sourceMappingURL=customer-360.controller.js.map