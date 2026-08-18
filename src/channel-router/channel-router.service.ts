import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../shared/prisma/prisma.service';
import { ConsentCheckerService } from './consent-checker.service';
import { FrequencyLimiterService } from './frequency-limiter.service';
import { QuietHoursService } from './quiet-hours.service';
import { ZnsProviderService } from '../providers/zns-provider.service';
import { EmailProviderService } from '../providers/email-provider.service';
import { SmsProviderService } from '../providers/sms-provider.service';

export interface SendMessageParams {
  customerId: string;
  channel: 'zns' | 'email' | 'sms';
  templateCode: string;
  variables?: Record<string, any>;
  journeyRunId?: string;
}

/**
 * Channel Router — the gatekeeper before any message is sent.
 * Pipeline: 1) Consent → 2) Frequency → 3) Quiet hours → 4) Render → 5) Send → 6) Log
 */
@Injectable()
export class ChannelRouterService {
  private readonly logger = new Logger(ChannelRouterService.name);

  constructor(
    private prisma: PrismaService,
    private consentChecker: ConsentCheckerService,
    private frequencyLimiter: FrequencyLimiterService,
    private quietHours: QuietHoursService,
    private znsProvider: ZnsProviderService,
    private emailProvider: EmailProviderService,
    private smsProvider: SmsProviderService,
  ) {}

  async send(
    params: SendMessageParams,
  ): Promise<{ sent: boolean; reason?: string; messageId?: string }> {
    const { customerId, channel, templateCode } = params;

    // 1. Consent check
    const hasConsent = await this.consentChecker.hasConsent(
      customerId,
      channel,
    );
    if (!hasConsent) {
      await this.logMessage(params, 'suppressed', 'no_consent');
      return { sent: false, reason: 'no_consent' };
    }

    // 2. Frequency cap
    const freq = await this.frequencyLimiter.isAllowed(customerId, channel);
    if (!freq.allowed) {
      await this.logMessage(
        params,
        'suppressed',
        `frequency_cap_exceeded (${freq.count}/${freq.limit})`,
      );
      return { sent: false, reason: 'frequency_cap_exceeded' };
    }

    // 3. Quiet hours
    if (this.quietHours.isQuietHours()) {
      const nextSend = this.quietHours.getNextSendTime();
      await this.logMessage(
        params,
        'deferred',
        `quiet_hours (deferred to ${nextSend.toISOString()})`,
      );
      return { sent: false, reason: 'quiet_hours_deferred' };
    }

    // 4. Load template and render
    const template = await this.prisma.messageTemplate.findUnique({
      where: { code: templateCode },
    });

    if (!template) {
      await this.logMessage(params, 'failed', 'template_not_found');
      return { sent: false, reason: 'template_not_found' };
    }

    // Load customer for variable interpolation
    const customer = await this.prisma.customer.findUnique({
      where: { id: customerId },
      include: { loyaltyAccount: { include: { tier: true } } },
    });

    if (!customer) {
      return { sent: false, reason: 'customer_not_found' };
    }

    // Merge template variables
    const variables = {
      customer_name: customer.fullName || 'Quý khách',
      customer_phone: customer.phone || '',
      customer_email: customer.email || '',
      points_balance: String(
        (customer as any).loyaltyAccount?.pointsBalance || 0,
      ),
      tier_name: (customer as any).loyaltyAccount?.tier?.tierName || 'Bronze',
      ...(params.variables || {}),
    };

    // Render body with variable substitution
    const renderedBody = this.renderTemplate(template.body, variables);
    const renderedSubject = template.subject
      ? this.renderTemplate(template.subject, variables)
      : '';

    // 5. Send via appropriate provider
    try {
      let providerResult: {
        success: boolean;
        messageId?: string;
        error?: string;
      };

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
          providerResult = {
            success: false,
            error: `Unknown channel: ${channel}`,
          };
      }

      if (providerResult.success) {
        await this.logMessage(
          params,
          'sent',
          undefined,
          providerResult.messageId,
          template.id,
        );
        return { sent: true, messageId: providerResult.messageId };
      }

      await this.logMessage(
        params,
        'failed',
        providerResult.error,
        undefined,
        template.id,
      );
      return { sent: false, reason: providerResult.error };
    } catch (error) {
      await this.logMessage(
        params,
        'failed',
        (error as Error).message,
        undefined,
        template.id,
      );
      return { sent: false, reason: 'provider_error' };
    }
  }

  /**
   * Simple variable interpolation: {{var_name}} → value
   */
  private renderTemplate(
    template: string,
    variables: Record<string, string>,
  ): string {
    return template.replace(
      /\{\{(\w+)\}\}/g,
      (_, key) => variables[key] || `{{${key}}}`,
    );
  }

  private async logMessage(
    params: SendMessageParams,
    status: string,
    suppressionReason?: string,
    providerMessageId?: string,
    templateId?: string,
  ) {
    await this.prisma.$executeRaw`
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
}
