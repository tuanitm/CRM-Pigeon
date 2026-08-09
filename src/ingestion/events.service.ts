import { Injectable, Logger } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bullmq';
import { Queue } from 'bullmq';
import { PrismaService } from '../shared/prisma/prisma.service';
import { RedisService } from '../shared/redis/redis.service';
import { EventDto } from './dto/events.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class EventsService {
  private readonly logger = new Logger(EventsService.name);

  constructor(
    private prisma: PrismaService,
    private redis: RedisService,
    @InjectQueue('events') private eventsQueue: Queue,
  ) {}

  async ingestBatch(events: EventDto[], source?: string): Promise<{ accepted: number; duplicates: number }> {
    let accepted = 0;
    let duplicates = 0;

    for (const event of events) {
      // Idempotency check
      const idemKey = event.idempotencyKey || uuidv4();
      const isDuplicate = await this.redis.checkIdempotency(idemKey);
      if (isDuplicate) {
        duplicates++;
        continue;
      }

      // Write to event store via raw SQL (partitioned table — Prisma can't handle this directly)
      const eventId = uuidv4();
      const occurredAt = event.occurredAt ? new Date(event.occurredAt) : new Date();

      await this.prisma.$executeRaw`
        INSERT INTO "event" ("id", "customer_id", "anonymous_id", "event_type", "properties", "context", "idempotency_key", "source", "occurred_at", "received_at")
        VALUES (${eventId}::uuid, ${event.customerId}::uuid, ${event.anonymousId}, ${event.eventType}, ${JSON.stringify(event.properties || {})}::jsonb, ${JSON.stringify(event.context || {})}::jsonb, ${idemKey}, ${source || 'api'}, ${occurredAt}, NOW())
      `;

      // Enqueue for async processing (segmentation, journey triggers, etc.)
      await this.eventsQueue.add('process-event', {
        eventId,
        eventType: event.eventType,
        customerId: event.customerId,
        properties: event.properties,
      });

      accepted++;
    }

    this.logger.log(`Ingested batch: ${accepted} accepted, ${duplicates} duplicates`);
    return { accepted, duplicates };
  }
}
