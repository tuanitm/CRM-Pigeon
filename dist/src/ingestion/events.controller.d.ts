import { EventsService } from './events.service';
import { BatchEventsDto } from './dto/events.dto';
export declare class EventsController {
    private readonly eventsService;
    constructor(eventsService: EventsService);
    ingestEvents(dto: BatchEventsDto, _idempotencyKey?: string): Promise<{
        error: string;
    } | {
        accepted: number;
        duplicates: number;
        status: string;
        error?: undefined;
    }>;
}
