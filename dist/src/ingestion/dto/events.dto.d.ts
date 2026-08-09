export declare class EventDto {
    eventType: string;
    customerId?: string;
    anonymousId?: string;
    properties?: Record<string, any>;
    context?: Record<string, any>;
    idempotencyKey?: string;
    occurredAt?: string;
}
export declare class BatchEventsDto {
    events: EventDto[];
    source?: string;
}
