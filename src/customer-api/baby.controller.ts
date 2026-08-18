import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
  Logger,
} from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { PrismaService } from '../shared/prisma/prisma.service';
import { JourneyRunService } from '../engines/journey/journey-run.service';

@ApiTags('Baby Profile')
@Controller('babies')
export class BabyController {
  private readonly logger = new Logger(BabyController.name);

  constructor(
    private prisma: PrismaService,
    private journeyRunService: JourneyRunService,
  ) {}

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
    const baby = await this.prisma.baby.create({
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

    // Fire baby.profile_created event → triggers JRN_WELCOME_BABY journey
    try {
      await this.journeyRunService.handleEventTrigger(
        'baby.profile_created',
        data.customerId,
        { babyId: baby.id, babyName: baby.name },
      );
      this.logger.log(
        `Fired baby.profile_created event for customer ${data.customerId}`,
      );
    } catch (err) {
      this.logger.error(
        `Failed to fire baby.profile_created: ${(err as Error).message}`,
      );
    }

    return baby;
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
