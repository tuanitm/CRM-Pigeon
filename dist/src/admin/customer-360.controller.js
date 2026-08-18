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
const notification_service_1 = require("./notification.service");
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
    dmsCode;
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
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCustomerDto.prototype, "dmsCode", void 0);
let Customer360Controller = class Customer360Controller {
    prisma;
    notifications;
    constructor(prisma, notifications) {
        this.prisma = prisma;
        this.notifications = notifications;
    }
    async getMetrics(period = '30d') {
        const now = new Date();
        let startDate;
        if (period === 'today') {
            startDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        }
        else if (period === '7d') {
            startDate = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
        }
        else if (period === '30d') {
            startDate = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
        }
        else if (period === 'this_month') {
            startDate = new Date(now.getFullYear(), now.getMonth(), 1);
        }
        else if (period === 'this_year') {
            startDate = new Date(now.getFullYear(), 0, 1);
        }
        else {
            startDate = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
        }
        const [totalCustomers, newCustomersPeriod, activeCustomers, completeProfiles, babyProfiles, totalOrders, totalTickets, openTickets, inactiveCustomers,] = await Promise.all([
            this.prisma.customer.count(),
            this.prisma.customer.count({ where: { createdAt: { gte: startDate } } }),
            this.prisma.customer.count({ where: { isActive: true } }),
            this.prisma.customer.count({
                where: { email: { not: null }, phone: { not: null } },
            }),
            this.prisma.baby.count(),
            this.prisma.order.count({ where: { createdAt: { gte: startDate } } }),
            this.prisma.supportTicket.count({
                where: { createdAt: { gte: startDate } },
            }),
            this.prisma.supportTicket.count({
                where: {
                    createdAt: { gte: startDate },
                    status: { in: ['Open', 'In Progress'] },
                },
            }),
            this.prisma.customer.count({ where: { isActive: false } }),
        ]);
        const completeProfilesPct = totalCustomers > 0
            ? Math.round((completeProfiles / totalCustomers) * 100)
            : 0;
        const churnRate = totalCustomers > 0
            ? parseFloat(((inactiveCustomers / totalCustomers) * 100).toFixed(1))
            : 0;
        const agg = await this.prisma.order.aggregate({
            where: { createdAt: { gte: startDate } },
            _sum: { totalAmount: true },
        });
        const totalRevenue = Number(agg._sum.totalAmount || 0);
        const overallAgg = await this.prisma.order.aggregate({
            _sum: { totalAmount: true },
        });
        const overallRevenue = Number(overallAgg._sum.totalAmount || 0);
        const averageCLV = totalCustomers > 0 ? overallRevenue / totalCustomers : 0;
        const customersWithOrders = await this.prisma.order.groupBy({
            by: ['customerId'],
            having: { customerId: { _count: { gt: 1 } } },
        });
        const returningCustomers = customersWithOrders.length;
        let endUserCount = await this.prisma.customer.count({
            where: {
                createdAt: { gte: startDate },
                OR: [{ customerType: 'End user' }, { customerType: null }],
            },
        });
        let outletCount = await this.prisma.customer.count({
            where: { createdAt: { gte: startDate }, customerType: 'Outlet' },
        });
        let keyshopCount = await this.prisma.customer.count({
            where: { createdAt: { gte: startDate }, customerType: 'Keyshop' },
        });
        if (endUserCount + outletCount + keyshopCount === 0) {
            endUserCount = await this.prisma.customer.count({
                where: { OR: [{ customerType: 'End user' }, { customerType: null }] },
            });
            outletCount = await this.prisma.customer.count({
                where: { customerType: 'Outlet' },
            });
            keyshopCount = await this.prisma.customer.count({
                where: { customerType: 'Keyshop' },
            });
        }
        const tierGroups = await this.prisma.loyaltyAccount.groupBy({
            by: ['tierId'],
        });
        const tierIds = tierGroups.map((t) => t.tierId).filter(Boolean);
        const tierConfigs = tierIds.length > 0
            ? await this.prisma.loyaltyTierConfig.findMany({
                where: { id: { in: tierIds } },
            })
            : [];
        const tierCountPromises = tierConfigs.map(async (cfg) => ({
            tier: cfg.tierCode,
            count: await this.prisma.loyaltyAccount.count({
                where: { tierId: cfg.id },
            }),
        }));
        const tierCounts = await Promise.all(tierCountPromises);
        const sourceGroups = await this.prisma.customer.groupBy({
            by: ['registrationSource'],
        });
        const sourceCountPromises = sourceGroups.map(async (g) => ({
            source: g.registrationSource || 'Manual',
            count: await this.prisma.customer.count({
                where: { registrationSource: g.registrationSource },
            }),
        }));
        const sourceCounts = await Promise.all(sourceCountPromises);
        let recentCustomers = await this.prisma.customer.findMany({
            where: { createdAt: { gte: startDate } },
            orderBy: { createdAt: 'desc' },
            take: 5,
            select: {
                id: true,
                fullName: true,
                customerType: true,
                phone: true,
                createdAt: true,
            },
        });
        if (recentCustomers.length === 0) {
            recentCustomers = await this.prisma.customer.findMany({
                orderBy: { createdAt: 'desc' },
                take: 5,
                select: {
                    id: true,
                    fullName: true,
                    customerType: true,
                    phone: true,
                    createdAt: true,
                },
            });
        }
        let recentOrders = await this.prisma.order.findMany({
            where: { createdAt: { gte: startDate } },
            orderBy: { createdAt: 'desc' },
            take: 5,
            include: { customer: { select: { fullName: true } } },
        });
        if (recentOrders.length === 0) {
            recentOrders = await this.prisma.order.findMany({
                orderBy: { createdAt: 'desc' },
                take: 5,
                include: { customer: { select: { fullName: true } } },
            });
        }
        let recentTickets = await this.prisma.supportTicket.findMany({
            where: { createdAt: { gte: startDate } },
            orderBy: { createdAt: 'desc' },
            take: 5,
            include: { customer: { select: { fullName: true } } },
        });
        if (recentTickets.length === 0) {
            recentTickets = await this.prisma.supportTicket.findMany({
                orderBy: { createdAt: 'desc' },
                take: 5,
                include: { customer: { select: { fullName: true } } },
            });
        }
        const topCustomers = await this.prisma.loyaltyAccount.findMany({
            orderBy: { pointsLifetime: 'desc' },
            take: 5,
            include: {
                customer: {
                    select: { id: true, fullName: true, phone: true, customerType: true },
                },
                tier: { select: { tierCode: true } },
            },
        });
        return {
            totalCustomers,
            newCustomers30d: newCustomersPeriod,
            activeCustomers,
            returningCustomers,
            completeProfilesPct,
            babyProfiles,
            averageCLV,
            churnRate,
            totalOrders,
            totalRevenue,
            totalTickets,
            openTickets,
            inactiveCustomers,
            customerTypeBreakdown: {
                endUser: endUserCount,
                outlet: outletCount,
                keyshop: keyshopCount,
            },
            tierCounts,
            sourceCounts,
            recentCustomers,
            recentOrders,
            recentTickets,
            topCustomers,
        };
    }
    async fixDb() {
        const res = await this.prisma.customer.updateMany({
            where: { customerType: null },
            data: { customerType: 'End user' },
        });
        await this.prisma.journey_run.deleteMany({
            where: {
                customer_id: 'c5a8ae8d-625e-4a0c-9c5e-171370171657',
                journey_id: '7e107cec-6e0b-4893-a39c-74523ee3ff46',
            },
        });
        return { success: true, updated: res.count };
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
                where: { phone: dto.phone },
            });
            if (existingCustomer) {
                throw new common_1.HttpException('Phone number already in use', common_1.HttpStatus.BAD_REQUEST);
            }
            const defaultTier = await this.prisma.loyaltyTierConfig.findFirst({
                where: { isDefault: true },
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
                    dmsCode: dto.dmsCode,
                    notes: dto.notes,
                    addresses: dto.address
                        ? {
                            create: {
                                addressLine1: dto.address,
                            },
                        }
                        : undefined,
                    loyaltyAccount: {
                        create: {
                            tierId: defaultTier?.id,
                            pointsBalance: 0,
                            pointsLifetime: 0,
                            pointsRedeemed: 0,
                            pointsExpired: 0,
                        },
                    },
                },
                include: {
                    loyaltyAccount: true,
                },
            });
            this.notifications.emit('CUSTOMER', `New customer added: ${newCustomer.fullName}`, `${dto.customerType || 'End user'} • ${dto.phone}`, `/customer360/${newCustomer.id}`);
            return newCustomer;
        }
        catch (error) {
            if (error instanceof common_1.HttpException)
                throw error;
            throw new common_1.HttpException('Failed to create customer', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async updateStatus(id, dto) {
        try {
            const updated = await this.prisma.customer.update({
                where: { id },
                data: { isActive: dto.isActive },
            });
            await this.prisma.event.create({
                data: {
                    customer_id: id,
                    event_type: 'CUSTOMER_STATUS_CHANGED',
                    properties: { isActive: dto.isActive },
                    source: 'admin-dashboard',
                },
            });
            return updated;
        }
        catch (error) {
            throw new common_1.HttpException('Failed to update status', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getCustomerDetails(id) {
        const customer = await this.prisma.customer.findUnique({
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
                    include: { items: { include: { product: true } } },
                    orderBy: { createdAt: 'desc' },
                },
                devices: {
                    orderBy: { lastLogin: 'desc' },
                },
            },
        });
        if (!customer) {
            throw new common_1.HttpException('Customer not found', common_1.HttpStatus.NOT_FOUND);
        }
        return customer;
    }
};
exports.Customer360Controller = Customer360Controller;
__decorate([
    (0, common_1.Get)('metrics'),
    (0, swagger_1.ApiOperation)({ summary: 'Get Customer 360 KPIs' }),
    __param(0, (0, common_1.Query)('period')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], Customer360Controller.prototype, "getMetrics", null);
__decorate([
    (0, common_1.Get)('fix-db'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Customer360Controller.prototype, "fixDb", null);
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
__decorate([
    (0, common_1.Put)(':id/status'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], Customer360Controller.prototype, "updateStatus", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get full customer details for Admin 360 view' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], Customer360Controller.prototype, "getCustomerDetails", null);
exports.Customer360Controller = Customer360Controller = __decorate([
    (0, swagger_1.ApiTags)('Admin - Customer'),
    (0, common_1.Controller)('admin/customers'),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        notification_service_1.NotificationService])
], Customer360Controller);
//# sourceMappingURL=customer-360.controller.js.map