import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { PrismaService } from '../shared/prisma/prisma.service';

@ApiTags('Baby Profile')
@Controller('babies')
export class BabyController {
  constructor(private prisma: PrismaService) {}

  @Get('customer/:customerId')
  @ApiOperation({ summary: 'List all babies for a customer' })
  async listBabies(@Param('customerId') customerId: string) {
    return this.prisma.baby.findMany({
      where: { customerId },
      include: { growthLogs: { orderBy: { recordedAt: 'desc' }, take: 5 } },
    });
  }

  @Post()
  @ApiOperation({ summary: 'Create baby profile' })
  async createBaby(@Body() data: any) {
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

  @Patch(':id')
  @ApiOperation({ summary: 'Update baby profile' })
  async updateBaby(@Param('id') id: string, @Body() data: any) {
    return this.prisma.baby.update({ where: { id }, data });
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete baby profile' })
  async deleteBaby(@Param('id') id: string) {
    return this.prisma.baby.delete({ where: { id } });
  }
}
