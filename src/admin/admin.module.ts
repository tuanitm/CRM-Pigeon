import { Module } from '@nestjs/common';
import { Customer360Controller } from './customer-360.controller';
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
import { ConditionDefinitionController } from './condition-definition.controller';
import { ConditionDefinitionService } from './condition-definition.service';
import { DashboardController } from './dashboard.controller';
import { DashboardService } from './dashboard.service';
import { SegmentController } from './segment.controller';
import { SegmentService } from './segment.service';
import { SegmentationModule } from '../engines/segmentation/segmentation.module';

@Module({
  imports: [SegmentationModule],
  controllers: [
    Customer360Controller,
    DynamicActionController,
    ZaloOAController,
    ZaloMiniAppController,
    LoyaltyController,
    ProductController,
    AdminSupportController,
    NotificationController,
    ConditionDefinitionController,
    DashboardController,
    SegmentController,
  ],
  providers: [
    DynamicActionService,
    ZaloOAService,
    ZaloMiniAppService,
    LoyaltyService,
    ProductService,
    NotificationService,
    ConditionDefinitionService,
    DashboardService,
    SegmentService,
  ],
  exports: [NotificationService],
})
export class AdminModule {}
