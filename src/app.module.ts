import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ThrottlerModule } from '@nestjs/throttler';
import { ScheduleModule } from '@nestjs/schedule';
import { BullModule } from '@nestjs/bullmq';

// Shared modules
import { PrismaModule } from './shared/prisma/prisma.module';
import { RedisModule } from './shared/redis/redis.module';
import { AuditLogModule } from './shared/audit-log/audit-log.module';

// Engine modules (Phase 2)
import { SegmentationModule } from './engines/segmentation/segmentation.module';
import { JourneyModule } from './engines/journey/journey.module';

// Engine modules (Phase 3)
import { LoyaltyModule } from './engines/loyalty/loyalty.module';
import { ReplenishmentModule } from './engines/replenishment/replenishment.module';

// Feature modules
import { IngestionModule } from './ingestion/ingestion.module';
import { IdentityModule } from './identity/identity.module';
import { CustomerApiModule } from './customer-api/customer-api.module';
import { ChannelRouterModule } from './channel-router/channel-router.module';
import { AdminModule } from './admin/admin.module';
import { WorkersModule } from './workers/workers.module';
import { DataQualityModule } from './data-quality/data-quality.module';

@Module({
  imports: [
    // Config
    ConfigModule.forRoot({ isGlobal: true }),

    // Rate limiting
    ThrottlerModule.forRoot([{
      ttl: parseInt(process.env.THROTTLE_TTL || '60') * 1000,
      limit: parseInt(process.env.THROTTLE_LIMIT || '60'),
    }]),

    // Scheduled tasks
    ScheduleModule.forRoot(),

    // BullMQ queues
    BullModule.forRoot({
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

    // Shared
    PrismaModule,
    RedisModule,
    AuditLogModule,

    // Engines (Phase 2)
    SegmentationModule,
    JourneyModule,

    // Engines (Phase 3)
    LoyaltyModule,
    ReplenishmentModule,

    // Features
    IngestionModule,
    IdentityModule,
    CustomerApiModule,
    ChannelRouterModule,
    AdminModule,
    WorkersModule,
    DataQualityModule,
  ],
})
export class AppModule {}
