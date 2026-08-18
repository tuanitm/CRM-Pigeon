import { Controller, Get, Post, Body, Param, Patch } from '@nestjs/common';
import { JourneyEngineService } from './journey-engine.service';
import { JourneyRunService } from './journey-run.service';
import { PrismaService } from '../../shared/prisma/prisma.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

class EnterJourneyDto {
  customerId: string;
  context?: Record<string, any>;
}

@ApiTags('Journey')
@Controller('journey')
export class JourneyController {
  constructor(
    private readonly journeyEngine: JourneyEngineService,
    private readonly journeyRunService: JourneyRunService,
    private readonly prisma: PrismaService,
  ) {}

  @Get('list')
  @ApiOperation({ summary: 'List all journeys' })
  async listJourneys() {
    return this.prisma.journey.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  @Post()
  @ApiOperation({ summary: 'Create a new journey (upserts by code if exists)' })
  async createJourney(@Body() data: any) {
    // Use upsert so creating with an existing code returns the existing journey
    return this.prisma.journey.upsert({
      where: { code: data.code },
      update: {}, // Don't overwrite existing data on conflict
      create: {
        code: data.code,
        name: data.name || data.code,
        triggerEvent: data.trigger || data.triggerEvent,
        status: data.status || 'draft',
      },
    });
  }

  @Post(':journeyId/enter')
  @ApiOperation({ summary: 'Manually enter a customer into a journey' })
  async enterJourney(
    @Param('journeyId') journeyId: string,
    @Body() dto: EnterJourneyDto,
  ) {
    const runId = await this.journeyEngine.enterJourney(
      journeyId,
      dto.customerId,
      dto.context,
    );
    return { success: true, runId };
  }

  @Get(':journeyId/performance')
  @ApiOperation({ summary: 'Get journey performance stats' })
  async getPerformance(@Param('journeyId') journeyId: string) {
    return this.journeyRunService.getJourneyPerformance(journeyId);
  }

  @Patch(':journeyId')
  @ApiOperation({ summary: 'Update a journey configuration' })
  async updateJourney(
    @Param('journeyId') journeyId: string,
    @Body() data: any,
  ) {
    const updateData: any = {};
    if (data.graph !== undefined) updateData.graph = data.graph;
    if (data.triggerEvent !== undefined)
      updateData.triggerEvent = data.triggerEvent;
    if (data.exitConditions !== undefined)
      updateData.exitConditions = data.exitConditions;
    if (data.status !== undefined) updateData.status = data.status;
    if (data.name !== undefined) updateData.name = data.name;
    if (data.description !== undefined)
      updateData.description = data.description;
    // Bump version so seed logic won't overwrite customized journeys
    if (data.graph !== undefined) {
      updateData.version = { increment: 1 };
    }

    return this.prisma.journey.update({
      where: { id: journeyId },
      data: updateData,
    });
  }
}
