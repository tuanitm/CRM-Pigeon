import { Controller, Get, Patch, Param, Body } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { PrismaService } from '../shared/prisma/prisma.service';

@ApiTags('Customer Profile')
@Controller('customers')
export class ProfileController {
  constructor(private prisma: PrismaService) {}

  @Get(':id')
  @ApiOperation({ summary: 'Get customer profile (360 view)' })
  async getProfile(@Param('id') id: string) {
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

  @Patch(':id')
  @ApiOperation({ summary: 'Update customer profile' })
  async updateProfile(@Param('id') id: string, @Body() data: any) {
    // Optionally check if phone is already used by another customer
    if (data.phone) {
      const existing = await this.prisma.customer.findFirst({
        where: { phone: data.phone, id: { not: id } }
      });
      if (existing) throw new Error('Phone number already in use');
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
}
