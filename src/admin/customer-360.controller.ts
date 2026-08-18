import {
  Controller,
  Get,
  Post,
  Put,
  Param,
  Body,
  Query,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiQuery, ApiProperty } from '@nestjs/swagger';
import { PrismaService } from '../shared/prisma/prisma.service';
import { NotificationService } from './notification.service';
import {
  IsString,
  IsOptional,
  IsEmail,
  IsPhoneNumber,
  IsDateString,
  IsEnum,
} from 'class-validator';

export class CreateCustomerDto {
  @ApiProperty()
  @IsString()
  fullName: string;

  @ApiProperty()
  @IsString()
  phone: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsEmail()
  email?: string;

  @ApiProperty({ required: false, enum: ['male', 'female', 'other'] })
  @IsOptional()
  @IsString()
  gender?: string;

  @ApiProperty({ required: false, type: String, format: 'date' })
  @IsOptional()
  @IsDateString()
  dateOfBirth?: string;

  @ApiProperty({ required: false, enum: ['End user', 'Outlet', 'Keyshop'] })
  @IsOptional()
  @IsString()
  customerType?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  address?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  notes?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  dmsCode?: string;
}

@ApiTags('Admin - Customer')
@Controller('admin/customers')
export class Customer360Controller {
  constructor(
    private prisma: PrismaService,
    private notifications: NotificationService,
  ) {}

  @Get('metrics')
  @ApiOperation({ summary: 'Get Customer 360 KPIs' })
  async getMetrics(@Query('period') period: string = '30d') {
    const now = new Date();
    let startDate: Date;

    if (period === 'today') {
      startDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    } else if (period === '7d') {
      startDate = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    } else if (period === '30d') {
      startDate = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
    } else if (period === 'this_month') {
      startDate = new Date(now.getFullYear(), now.getMonth(), 1);
    } else if (period === 'this_year') {
      startDate = new Date(now.getFullYear(), 0, 1);
    } else {
      startDate = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
    }

    // ── Core counts ──
    const [
      totalCustomers,
      newCustomersPeriod,
      activeCustomers,
      completeProfiles,
      babyProfiles,
      totalOrders,
      totalTickets,
      openTickets,
      inactiveCustomers,
    ] = await Promise.all([
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

    const completeProfilesPct =
      totalCustomers > 0
        ? Math.round((completeProfiles / totalCustomers) * 100)
        : 0;
    const churnRate =
      totalCustomers > 0
        ? parseFloat(((inactiveCustomers / totalCustomers) * 100).toFixed(1))
        : 0;

    // ── Revenue & CLV ──
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

    // ── Returning customers (>1 order) ──
    const customersWithOrders = await this.prisma.order.groupBy({
      by: ['customerId'],
      having: { customerId: { _count: { gt: 1 } } },
    });
    const returningCustomers = customersWithOrders.length;

    // ── Customer type breakdown (period or overall fallback) ──
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

    // ── Tier distribution ──
    const tierGroups = await this.prisma.loyaltyAccount.groupBy({
      by: ['tierId'],
    });
    const tierIds = tierGroups.map((t) => t.tierId).filter(Boolean);
    const tierConfigs =
      tierIds.length > 0
        ? await this.prisma.loyaltyTierConfig.findMany({
            where: { id: { in: tierIds as string[] } },
          })
        : [];

    const tierCountPromises = tierConfigs.map(async (cfg) => ({
      tier: cfg.tierCode,
      count: await this.prisma.loyaltyAccount.count({
        where: { tierId: cfg.id },
      }),
    }));
    const tierCounts = await Promise.all(tierCountPromises);

    // ── Registration source distribution ──
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

    // ── Recent customers (period or overall fallback) ──
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

    // ── Recent orders (period or overall fallback) ──
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

    // ── Recent tickets (period or overall fallback) ──
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

    // ── Top customers by points ──
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

  @Get('fix-db')
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

  @Get()
  @ApiOperation({ summary: 'List customers with cursor pagination' })
  @ApiQuery({ name: 'cursor', required: false })
  @ApiQuery({ name: 'take', required: false, type: Number })
  @ApiQuery({ name: 'search', required: false })
  async listCustomers(
    @Query('cursor') cursor?: string,
    @Query('take') take: number = 20,
    @Query('search') search?: string,
  ) {
    const where = search
      ? {
          OR: [
            { phone: { contains: search } },
            { email: { contains: search } },
            { fullName: { contains: search, mode: 'insensitive' as const } },
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

  @Post()
  @ApiOperation({ summary: 'Create a new customer' })
  async createCustomer(@Body() dto: CreateCustomerDto) {
    try {
      // Check for existing phone
      const existingCustomer = await this.prisma.customer.findFirst({
        where: { phone: dto.phone },
      });
      if (existingCustomer) {
        throw new HttpException(
          'Phone number already in use',
          HttpStatus.BAD_REQUEST,
        );
      }

      // Find default tier
      const defaultTier = await this.prisma.loyaltyTierConfig.findFirst({
        where: { isDefault: true },
      });

      const newCustomer = await this.prisma.customer.create({
        data: {
          customerCode: Math.floor(
            10000000 + Math.random() * 90000000,
          ).toString(),
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

      // Emit notification
      this.notifications.emit(
        'CUSTOMER',
        `New customer added: ${newCustomer.fullName}`,
        `${dto.customerType || 'End user'} • ${dto.phone}`,
        `/customer360/${newCustomer.id}`,
      );

      return newCustomer;
    } catch (error) {
      if (error instanceof HttpException) throw error;
      throw new HttpException(
        'Failed to create customer',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Put(':id/status')
  async updateStatus(
    @Param('id') id: string,
    @Body() dto: { isActive: boolean },
  ) {
    try {
      const updated = await this.prisma.customer.update({
        where: { id },
        data: { isActive: dto.isActive },
      });

      // Log status change
      await this.prisma.event.create({
        data: {
          customer_id: id,
          event_type: 'CUSTOMER_STATUS_CHANGED',
          properties: { isActive: dto.isActive },
          source: 'admin-dashboard',
        },
      });

      return updated;
    } catch (error) {
      throw new HttpException(
        'Failed to update status',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
  @Get(':id')
  @ApiOperation({ summary: 'Get full customer details for Admin 360 view' })
  async getCustomerDetails(@Param('id') id: string) {
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
      throw new HttpException('Customer not found', HttpStatus.NOT_FOUND);
    }
    return customer;
  }
}
