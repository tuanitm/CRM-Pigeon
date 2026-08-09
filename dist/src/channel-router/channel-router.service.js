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
var ChannelRouterService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelRouterService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../shared/prisma/prisma.service");
const consent_checker_service_1 = require("./consent-checker.service");
const frequency_limiter_service_1 = require("./frequency-limiter.service");
const quiet_hours_service_1 = require("./quiet-hours.service");
const zns_provider_service_1 = require("../providers/zns-provider.service");
const email_provider_service_1 = require("../providers/email-provider.service");
const sms_provider_service_1 = require("../providers/sms-provider.service");
let ChannelRouterService = ChannelRouterService_1 = class ChannelRouterService {
    prisma;
    consentChecker;
    frequencyLimiter;
    quietHours;
    znsProvider;
    emailProvider;
    smsProvider;
    logger = new common_1.Logger(ChannelRouterService_1.name);
    constructor(prisma, consentChecker, frequencyLimiter, quietHours, znsProvider, emailProvider, smsProvider) {
        this.prisma = prisma;
        this.consentChecker = consentChecker;
        this.frequencyLimiter = frequencyLimiter;
        this.quietHours = quietHours;
        this.znsProvider = znsProvider;
        this.emailProvider = emailProvider;
        this.smsProvider = smsProvider;
    }
    async send(params) {
        const { customerId, channel, templateCode } = params;
        const hasConsent = await this.consentChecker.hasConsent(customerId, channel);
        if (!hasConsent) {
            await this.logMessage(params, 'suppressed', 'no_consent');
            return { sent: false, reason: 'no_consent' };
        }
        const freq = await this.frequencyLimiter.isAllowed(customerId, channel);
        if (!freq.allowed) {
            await this.logMessage(params, 'suppressed', `frequency_cap_exceeded (${freq.count}/${freq.limit})`);
            return { sent: false, reason: 'frequency_cap_exceeded' };
        }
        if (this.quietHours.isQuietHours()) {
            const nextSend = this.quietHours.getNextSendTime();
            await this.logMessage(params, 'deferred', `quiet_hours (deferred to ${nextSend.toISOString()})`);
            return { sent: false, reason: 'quiet_hours_deferred' };
        }
        const template = await this.prisma.messageTemplate.findUnique({
            where: { code: templateCode },
        });
        if (!template) {
            await this.logMessage(params, 'failed', 'template_not_found');
            return { sent: false, reason: 'template_not_found' };
        }
        const customer = await this.prisma.customer.findUnique({
            where: { id: customerId },
            include: { loyaltyAccount: { include: { tier: true } } },
        });
        if (!customer) {
            return { sent: false, reason: 'customer_not_found' };
        }
        const variables = {
            customer_name: customer.fullName || 'Quý khách',
            customer_phone: customer.phone || '',
            customer_email: customer.email || '',
            points_balance: String(customer.loyaltyAccount?.pointsBalance || 0),
            tier_name: customer.loyaltyAccount?.tier?.tierName || 'Member',
            ...(params.variables || {}),
        };
        const renderedBody = this.renderTemplate(template.body, variables);
        const renderedSubject = template.subject ? this.renderTemplate(template.subject, variables) : '';
        try {
            let providerResult;
            switch (channel) {
                case 'zns':
                    providerResult = await this.znsProvider.send({
                        phone: customer.phone || '',
                        templateId: template.providerTemplateId || '',
                        templateData: variables,
                    });
                    break;
                case 'email':
                    providerResult = await this.emailProvider.send({
                        to: customer.email || '',
                        subject: renderedSubject,
                        templateId: template.providerTemplateId || undefined,
                        templateData: variables,
                        htmlBody: renderedBody,
                    });
                    break;
                case 'sms':
                    providerResult = await this.smsProvider.send({
                        phone: customer.phone || '',
                        message: renderedBody,
                        brandName: 'PIGEON',
                    });
                    break;
                default:
                    providerResult = { success: false, error: `Unknown channel: ${channel}` };
            }
            if (providerResult.success) {
                await this.logMessage(params, 'sent', undefined, providerResult.messageId, template.id);
                return { sent: true, messageId: providerResult.messageId };
            }
            await this.logMessage(params, 'failed', providerResult.error, undefined, template.id);
            return { sent: false, reason: providerResult.error };
        }
        catch (error) {
            await this.logMessage(params, 'failed', error.message, undefined, template.id);
            return { sent: false, reason: 'provider_error' };
        }
    }
    renderTemplate(template, variables) {
        return template.replace(/\{\{(\w+)\}\}/g, (_, key) => variables[key] || `{{${key}}}`);
    }
    async logMessage(params, status, suppressionReason, providerMessageId, templateId) {
        await this.prisma.$executeRaw `
      INSERT INTO message_log (id, customer_id, template_id, channel, status, suppression_reason, provider_message_id, journey_run_id, sent_at, created_at)
      VALUES (
        uuid_generate_v4(),
        ${params.customerId}::uuid,
        ${templateId || null}::uuid,
        ${params.channel},
        ${status},
        ${suppressionReason || null},
        ${providerMessageId || null},
        ${params.journeyRunId || null}::uuid,
        ${status === 'sent' ? new Date() : null},
        NOW()
      )
    `;
    }
};
exports.ChannelRouterService = ChannelRouterService;
exports.ChannelRouterService = ChannelRouterService = ChannelRouterService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        consent_checker_service_1.ConsentCheckerService,
        frequency_limiter_service_1.FrequencyLimiterService,
        quiet_hours_service_1.QuietHoursService,
        zns_provider_service_1.ZnsProviderService,
        email_provider_service_1.EmailProviderService,
        sms_provider_service_1.SmsProviderService])
], ChannelRouterService);
//# sourceMappingURL=channel-router.service.js.map