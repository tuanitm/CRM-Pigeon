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

@Module({
  controllers: [
    Customer360Controller,
    DataHubController,
    DynamicActionController,
    ZaloOAController,
    ZaloMiniAppController,
  ],
  providers: [
    DataHubService,
    DynamicActionService,
    ZaloOAService,
    ZaloMiniAppService,
  ],
})
export class AdminModule {}
