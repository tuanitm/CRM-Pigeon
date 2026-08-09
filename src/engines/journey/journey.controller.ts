import { Controller, Get, Post, Body, Param } from '@nestjs/common';
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
}
