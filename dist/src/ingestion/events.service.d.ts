import { Queue } from 'bullmq';
import { PrismaService } from '../shared/prisma/prisma.service';
import { RedisService } from '../shared/redis/redis.service';
import { EventDto } from './dto/events.dto';
export declare class EventsService {
    private prisma;
    private redis;
    private eventsQueue;
    private readonly logger;
    constructor(prisma: PrismaService, redis: RedisService, eventsQueue: Queue);
    ingestBatch(events: EventDto[], source?: string): Promise<{
        accepted: number;
        duplicates: number;
    }>;
}
