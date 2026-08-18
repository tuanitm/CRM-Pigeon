import { Module } from '@nestjs/common';
import { ChannelRouterService } from './channel-router.service';
import { ConsentCheckerService } from './consent-checker.service';
import { FrequencyLimiterService } from './frequency-limiter.service';
import { QuietHoursService } from './quiet-hours.service';
import { ProvidersModule } from '../providers/providers.module';

@Module({
  imports: [ProvidersModule],
  providers: [
    ChannelRouterService,
    ConsentCheckerService,
    FrequencyLimiterService,
    QuietHoursService,
  ],
  exports: [ChannelRouterService],
})
export class ChannelRouterModule {}
