import { Module } from '@nestjs/common';
import { ProfileController } from './profile.controller';
import { BabyController } from './baby.controller';
import { LoyaltyController } from './loyalty.controller';
import { SerialController } from './serial.controller';
import { LoyaltyModule } from '../engines/loyalty/loyalty.module';

@Module({
  imports: [LoyaltyModule],
  controllers: [ProfileController, BabyController, LoyaltyController, SerialController],
})
export class CustomerApiModule {}
