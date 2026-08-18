import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bullmq';
import { PointsService } from './points.service';
import { TierService } from './tier.service';
import { MilestoneService } from './milestone.service';
import { ReferralService } from './referral.service';
import { LoyaltyController } from './loyalty.controller';

@Module({
  imports: [BullModule.registerQueue({ name: 'loyalty' })],
  controllers: [LoyaltyController],
  providers: [PointsService, TierService, MilestoneService, ReferralService],
  exports: [PointsService, TierService, MilestoneService, ReferralService],
})
export class LoyaltyModule {}
