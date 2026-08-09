"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const throttler_1 = require("@nestjs/throttler");
const schedule_1 = require("@nestjs/schedule");
const bullmq_1 = require("@nestjs/bullmq");
const prisma_module_1 = require("./shared/prisma/prisma.module");
const redis_module_1 = require("./shared/redis/redis.module");
const audit_log_module_1 = require("./shared/audit-log/audit-log.module");
const segmentation_module_1 = require("./engines/segmentation/segmentation.module");
const journey_module_1 = require("./engines/journey/journey.module");
const loyalty_module_1 = require("./engines/loyalty/loyalty.module");
const replenishment_module_1 = require("./engines/replenishment/replenishment.module");
const ingestion_module_1 = require("./ingestion/ingestion.module");
const identity_module_1 = require("./identity/identity.module");
const customer_api_module_1 = require("./customer-api/customer-api.module");
const channel_router_module_1 = require("./channel-router/channel-router.module");
const admin_module_1 = require("./admin/admin.module");
const workers_module_1 = require("./workers/workers.module");
const data_quality_module_1 = require("./data-quality/data-quality.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            throttler_1.ThrottlerModule.forRoot([{
                    ttl: parseInt(process.env.THROTTLE_TTL || '60') * 1000,
                    limit: parseInt(process.env.THROTTLE_LIMIT || '60'),
                }]),
            schedule_1.ScheduleModule.forRoot(),
            bullmq_1.BullModule.forRoot({
                connection: {
                    host: process.env.REDIS_HOST || 'localhost',
                    port: parseInt(process.env.REDIS_PORT || '6379'),
                    password: process.env.REDIS_PASSWORD || undefined,
                },
                defaultJobOptions: {
                    removeOnComplete: 1000,
                    removeOnFail: 5000,
                    attempts: 3,
                    backoff: { type: 'exponential', delay: 2000 },
                },
            }),
            prisma_module_1.PrismaModule,
            redis_module_1.RedisModule,
            audit_log_module_1.AuditLogModule,
            segmentation_module_1.SegmentationModule,
            journey_module_1.JourneyModule,
            loyalty_module_1.LoyaltyModule,
            replenishment_module_1.ReplenishmentModule,
            ingestion_module_1.IngestionModule,
            identity_module_1.IdentityModule,
            customer_api_module_1.CustomerApiModule,
            channel_router_module_1.ChannelRouterModule,
            admin_module_1.AdminModule,
            workers_module_1.WorkersModule,
            data_quality_module_1.DataQualityModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map