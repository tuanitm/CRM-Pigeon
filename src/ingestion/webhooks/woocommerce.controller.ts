import { Controller, Post, Body, HttpCode, HttpStatus, Headers, Logger, RawBodyRequest, Req } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import { InjectQueue } from '@nestjs/bullmq';
import { Queue } from 'bullmq';
import { PrismaService } from '../../shared/prisma/prisma.service';
import * as crypto from 'crypto';
import { Request } from 'express';

@ApiTags('Webhooks')
@Controller('webhooks/woocommerce')
export class WooCommerceWebhookController {
  private readonly logger = new Logger(WooCommerceWebhookController.name);

  constructor(
    private config: ConfigService,
    private prisma: PrismaService,
    @InjectQueue('webhooks') private webhookQueue: Queue,
  ) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Receive WooCommerce webhook (HMAC verified)' })
  async handleWebhook(
    @Headers('x-wc-webhook-signature') signature: string,
    @Headers('x-wc-webhook-topic') topic: string,
    @Body() payload: any,
  ) {
    // Store raw webhook
    const inbox = await this.prisma.$queryRaw`
      INSERT INTO webhook_inbox (id, source, event_type, payload, signature_valid, received_at)
      VALUES (uuid_generate_v4(), 'woocommerce', ${topic}, ${JSON.stringify(payload)}::jsonb, ${!!signature}, NOW())
      RETURNING id
    ` as any[];

    // Enqueue for async processing (must respond within 2 seconds)
    await this.webhookQueue.add('woo-webhook', {
      inboxId: inbox[0]?.id,
      topic,
      payload,
    });

    this.logger.log(`WooCommerce webhook received: ${topic}`);
    return { status: 'received' };
  }
}
