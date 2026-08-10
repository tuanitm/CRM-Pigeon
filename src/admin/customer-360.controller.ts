import { Controller, Get, Post, Body, Query, HttpException, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiQuery, ApiProperty } from '@nestjs/swagger';
import { PrismaService } from '../shared/prisma/prisma.service';
import { IsString, IsOptional, IsEmail, IsPhoneNumber, IsDateString, IsEnum } from 'class-validator';

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
}

@ApiTags('Admin - Customer')
@Controller('admin/customers')
export class Customer360Controller {
  constructor(private prisma: PrismaService) {}

  @Get('metrics')
  @ApiOperation({ summary: 'Get Customer 360 KPIs' })
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
      churnRate: 4.8 // Mocked for now
    };
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
        where: { phone: dto.phone }
      });
      if (existingCustomer) {
        throw new HttpException('Phone number already in use', HttpStatus.BAD_REQUEST);
      }

      // Find default tier
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
    } catch (error) {
      if (error instanceof HttpException) throw error;
      throw new HttpException('Failed to create customer', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
