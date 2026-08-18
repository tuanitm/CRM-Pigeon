"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var EventsService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventsService = void 0;
const common_1 = require("@nestjs/common");
const bullmq_1 = require("@nestjs/bullmq");
const bullmq_2 = require("bullmq");
const prisma_service_1 = require("../shared/prisma/prisma.service");
const redis_service_1 = require("../shared/redis/redis.service");
const uuid_1 = require("uuid");
let EventsService = EventsService_1 = class EventsService {
    prisma;
    redis;
    eventsQueue;
    logger = new common_1.Logger(EventsService_1.name);
    constructor(prisma, redis, eventsQueue) {
        this.prisma = prisma;
        this.redis = redis;
        this.eventsQueue = eventsQueue;
    }
    async ingestBatch(events, source) {
        let accepted = 0;
        let duplicates = 0;
        for (const event of events) {
            const idemKey = event.idempotencyKey || (0, uuid_1.v4)();
            const isDuplicate = await this.redis.checkIdempotency(idemKey);
            if (isDuplicate) {
                duplicates++;
                continue;
            }
            const eventId = (0, uuid_1.v4)();
            const occurredAt = event.occurredAt
                ? new Date(event.occurredAt)
                : new Date();
            await this.prisma.$executeRaw `
        INSERT INTO "event" ("id", "customer_id", "anonymous_id", "event_type", "properties", "context", "idempotency_key", "source", "occurred_at", "received_at")
        VALUES (${eventId}::uuid, ${event.customerId}::uuid, ${event.anonymousId}, ${event.eventType}, ${JSON.stringify(event.properties || {})}::jsonb, ${JSON.stringify(event.context || {})}::jsonb, ${idemKey}, ${source || 'api'}, ${occurredAt}, NOW())
      `;
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
};
exports.EventsService = EventsService;
exports.EventsService = EventsService = EventsService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(2, (0, bullmq_1.InjectQueue)('events')),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        redis_service_1.RedisService,
        bullmq_2.Queue])
], EventsService);
//# sourceMappingURL=events.service.js.map