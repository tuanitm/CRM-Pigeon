import { Module } from '@nestjs/common';
import { Customer360Controller } from './customer-360.controller';
import { DataHubController } from './data-hub.controller';
import { DataHubService } from './data-hub.service';
import { DynamicActionController } from './dynamic-action.controller';
import { DynamicActionService } from './dynamic-action.service';
import { ZaloOAController } from './zalo-oa.controller';
import { ZaloOAService } from './zalo-oa.service';
import { ZaloMiniAppController } from './zalo-mini-app.controller';
import { ZaloMiniAppService } from './zalo-mini-app.service';
import { LoyaltyController } from './loyalty.controller';
import { LoyaltyService } from './loyalty.service';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { AdminSupportController } from './support.controller';
import { NotificationController } from './notification.controller';
import { NotificationService } from './notification.service';

@Module({
  controllers: [
    Customer360Controller,
    DataHubController,
    DynamicActionController,
    ZaloOAController,
    ZaloMiniAppController,
    LoyaltyController,
    ProductController,
    AdminSupportController,
    NotificationController,
  ],
  providers: [
    DataHubService,
    DynamicActionService,
    ZaloOAService,
    ZaloMiniAppService,
    LoyaltyService,
    ProductService,
    NotificationService,
  ],
  exports: [NotificationService],
})
export class AdminModule {}
