import {
  Controller,
  Post,
  Body,
  HttpCode,
  HttpStatus,
  Headers,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiHeader } from '@nestjs/swagger';
import { EventsService } from './events.service';
import { BatchEventsDto } from './dto/events.dto';

@ApiTags('Ingestion')
@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Post()
  @HttpCode(HttpStatus.ACCEPTED)
  @ApiOperation({ summary: 'Ingest batch of events (max 100)' })
  @ApiHeader({ name: 'Idempotency-Key', required: false })
  @ApiResponse({ status: 202, description: 'Events accepted for processing' })
  async ingestEvents(
    @Body() dto: BatchEventsDto,
    @Headers('idempotency-key') _idempotencyKey?: string,
  ) {
    if (dto.events.length > 100) {
      return { error: 'Maximum 100 events per batch' };
    }
    const result = await this.eventsService.ingestBatch(dto.events, dto.source);
    return { status: 'accepted', ...result };
  }
}
