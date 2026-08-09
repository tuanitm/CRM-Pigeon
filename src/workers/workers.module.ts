import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bullmq';
import { EventProcessor } from './event.processor';
import { SegmentationModule } from '../engines/segmentation/segmentation.module';
import { JourneyModule } from '../engines/journey/journey.module';
import { LoyaltyModule } from '../engines/loyalty/loyalty.module';
import { ReplenishmentModule } from '../engines/replenishment/replenishment.module';

@Module({
  imports: [
    BullModule.registerQueue({ name: 'events' }),
    BullModule.registerQueue({ name: 'webhooks' }),
    SegmentationModule,
    JourneyModule,
    LoyaltyModule,
    ReplenishmentModule,
  ],
  providers: [EventProcessor],
})
export class WorkersModule {}
