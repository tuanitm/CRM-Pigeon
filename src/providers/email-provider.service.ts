import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

/**
 * Email Provider — SendGrid integration for transactional emails.
 * Supports dynamic templates and plain HTML fallback.
 */

export interface EmailSendParams {
  to: string;
  subject: string;
  templateId?: string; // SendGrid dynamic template ID
  templateData?: Record<string, any>;
  htmlBody?: string; // Fallback if no template
  from?: string;
}

export interface EmailSendResult {
  success: boolean;
  messageId?: string;
  error?: string;
}

@Injectable()
export class EmailProviderService {
  private readonly logger = new Logger(EmailProviderService.name);
  private readonly apiKey: string;
  private readonly fromEmail: string;

  constructor(private config: ConfigService) {
    this.apiKey = this.config.get('SENDGRID_API_KEY', '');
    this.fromEmail = this.config.get('EMAIL_FROM', 'noreply@pigeonvietnam.com');
  }

  async send(params: EmailSendParams): Promise<EmailSendResult> {
    if (!this.apiKey) {
      this.logger.warn(
        'SendGrid API key not configured — email will be logged only',
      );
      return this.mockSend(params);
    }

    try {
      const payload: Record<string, any> = {
        personalizations: [
          {
            to: [{ email: params.to }],
            ...(params.templateData
              ? { dynamic_template_data: params.templateData }
              : {}),
          },
        ],
        from: { email: params.from || this.fromEmail, name: 'PIGEON Vietnam' },
      };

      if (params.templateId) {
        payload.template_id = params.templateId;
      } else {
        payload.subject = params.subject;
        payload.content = [{ type: 'text/html', value: params.htmlBody || '' }];
      }

      const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok || response.status === 202) {
        const messageId =
          response.headers.get('x-message-id') || `sg_${Date.now()}`;
        this.logger.log(
          `Email sent: to=${params.to} subject="${params.subject}" id=${messageId}`,
        );
        return { success: true, messageId };
      }

      const errorBody = await response.text();
      this.logger.error(`SendGrid error ${response.status}: ${errorBody}`);
      return {
        success: false,
        error: `SendGrid ${response.status}: ${errorBody}`,
      };
    } catch (err) {
      this.logger.error(`Email send failed: ${(err as Error).message}`);
      return { success: false, error: (err as Error).message };
    }
  }

  private mockSend(params: EmailSendParams): EmailSendResult {
    const mockId = `mock_email_${Date.now()}`;
    this.logger.log(
      `[MOCK EMAIL] to=${params.to} subject="${params.subject}" template=${params.templateId || 'html'} id=${mockId}`,
    );
    return { success: true, messageId: mockId };
  }
}
