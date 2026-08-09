"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var WooCommerceWebhookController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.WooCommerceWebhookController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const config_1 = require("@nestjs/config");
const bullmq_1 = require("@nestjs/bullmq");
const bullmq_2 = require("bullmq");
const prisma_service_1 = require("../../shared/prisma/prisma.service");
let WooCommerceWebhookController = WooCommerceWebhookController_1 = class WooCommerceWebhookController {
    config;
    prisma;
    webhookQueue;
    logger = new common_1.Logger(WooCommerceWebhookController_1.name);
    constructor(config, prisma, webhookQueue) {
        this.config = config;
        this.prisma = prisma;
        this.webhookQueue = webhookQueue;
    }
    async handleWebhook(signature, topic, payload) {
        const inbox = await this.prisma.$queryRaw `
      INSERT INTO webhook_inbox (id, source, event_type, payload, signature_valid, received_at)
      VALUES (uuid_generate_v4(), 'woocommerce', ${topic}, ${JSON.stringify(payload)}::jsonb, ${!!signature}, NOW())
      RETURNING id
    `;
        await this.webhookQueue.add('woo-webhook', {
            inboxId: inbox[0]?.id,
            topic,
            payload,
        });
        this.logger.log(`WooCommerce webhook received: ${topic}`);
        return { status: 'received' };
    }
};
exports.WooCommerceWebhookController = WooCommerceWebhookController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Receive WooCommerce webhook (HMAC verified)' }),
    __param(0, (0, common_1.Headers)('x-wc-webhook-signature')),
    __param(1, (0, common_1.Headers)('x-wc-webhook-topic')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], WooCommerceWebhookController.prototype, "handleWebhook", null);
exports.WooCommerceWebhookController = WooCommerceWebhookController = WooCommerceWebhookController_1 = __decorate([
    (0, swagger_1.ApiTags)('Webhooks'),
    (0, common_1.Controller)('webhooks/woocommerce'),
    __param(2, (0, bullmq_1.InjectQueue)('webhooks')),
    __metadata("design:paramtypes", [config_1.ConfigService,
        prisma_service_1.PrismaService,
        bullmq_2.Queue])
], WooCommerceWebhookController);
//# sourceMappingURL=woocommerce.controller.js.map