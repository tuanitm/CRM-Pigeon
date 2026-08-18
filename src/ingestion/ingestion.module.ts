import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bullmq';
import { EventsController } from './events.controller';
import { EventsService } from './events.service';
import { IdentifyController } from './identify.controller';
import { WooCommerceWebhookController } from './webhooks/woocommerce.controller';

@Module({
  imports: [
    BullModule.registerQueue({ name: 'events' }),
    BullModule.registerQueue({ name: 'webhooks' }),
  ],
  controllers: [
    EventsController,
    IdentifyController,
    WooCommerceWebhookController,
  ],
  providers: [EventsService],
  exports: [EventsService],
})
export class IngestionModule {}
