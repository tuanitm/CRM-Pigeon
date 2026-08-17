import { Module } from '@nestjs/common';
import { ProfileController } from './profile.controller';
import { BabyController } from './baby.controller';
import { LoyaltyController } from './loyalty.controller';
import { SerialController } from './serial.controller';
import { CustomerSupportController } from './support.controller';
import { LoyaltyModule } from '../engines/loyalty/loyalty.module';
import { AdminModule } from '../admin/admin.module';

@Module({
  imports: [LoyaltyModule, AdminModule],
  controllers: [ProfileController, BabyController, LoyaltyController, SerialController, CustomerSupportController],
})
export class CustomerApiModule {}
