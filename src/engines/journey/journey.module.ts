import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bullmq';
import { JourneyEngineService } from './journey-engine.service';
import { JourneyRunService } from './journey-run.service';
import { ChannelRouterModule } from '../../channel-router/channel-router.module';
import { JourneyController } from './journey.controller';

@Module({
  imports: [BullModule.registerQueue({ name: 'journey' }), ChannelRouterModule],
  controllers: [JourneyController],
  providers: [JourneyEngineService, JourneyRunService],
  exports: [JourneyEngineService, JourneyRunService],
})
export class JourneyModule {}
