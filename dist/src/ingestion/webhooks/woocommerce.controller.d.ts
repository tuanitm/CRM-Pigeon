import { ConfigService } from '@nestjs/config';
import { Queue } from 'bullmq';
import { PrismaService } from '../../shared/prisma/prisma.service';
export declare class WooCommerceWebhookController {
    private config;
    private prisma;
    private webhookQueue;
    private readonly logger;
    constructor(config: ConfigService, prisma: PrismaService, webhookQueue: Queue);
    handleWebhook(signature: string, topic: string, payload: any): Promise<{
        status: string;
    }>;
}
