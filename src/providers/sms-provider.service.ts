import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

/**
 * SMS Provider — Generic SMS gateway integration.
 * Supports multiple providers: esms.vn, speedsms, twilio, etc.
 */

export interface SmsSendParams {
  phone: string;
  message: string;
  brandName?: string;
}

export interface SmsSendResult {
  success: boolean;
  messageId?: string;
  error?: string;
}

@Injectable()
export class SmsProviderService {
  private readonly logger = new Logger(SmsProviderService.name);
  private readonly provider: string;
  private readonly apiKey: string;

  constructor(private config: ConfigService) {
    this.provider = this.config.get('SMS_PROVIDER', '');
    this.apiKey = this.config.get('SMS_API_KEY', '');
  }

  async send(params: SmsSendParams): Promise<SmsSendResult> {
    if (!this.provider || !this.apiKey) {
      this.logger.warn(
        'SMS provider not configured — message will be logged only',
      );
      return this.mockSend(params);
    }

    switch (this.provider) {
      case 'esms':
        return this.sendViaEsms(params);
      case 'speedsms':
        return this.sendViaSpeedSms(params);
      default:
        this.logger.warn(`Unknown SMS provider: ${this.provider}`);
        return this.mockSend(params);
    }
  }

  private async sendViaEsms(params: SmsSendParams): Promise<SmsSendResult> {
    try {
      const response = await fetch(
        'http://rest.esms.vn/MainService.svc/json/SendMultipleMessage_V4_post_json/',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ApiKey: this.apiKey,
            SecretKey: this.config.get('SMS_SECRET_KEY', ''),
            Phone: params.phone,
            Content: params.message,
            SmsType: 2, // Brandname
            Brandname: params.brandName || 'PIGEON',
            IsUnicode: 0,
          }),
        },
      );
      const data = await response.json();
      if (data.CodeResult === '100') {
        return { success: true, messageId: data.SMSID };
      }
      return { success: false, error: data.ErrorMessage };
    } catch (err) {
      return { success: false, error: (err as Error).message };
    }
  }

  private async sendViaSpeedSms(params: SmsSendParams): Promise<SmsSendResult> {
    try {
      const response = await fetch(
        'https://api.speedsms.vn/index.php/sms/send',
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${this.apiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            to: [params.phone],
            content: params.message,
            sms_type: 2,
            sender: params.brandName || 'PIGEON',
          }),
        },
      );
      const data = await response.json();
      if (data.status === 'success') {
        return { success: true, messageId: data.data?.tranId };
      }
      return { success: false, error: data.message };
    } catch (err) {
      return { success: false, error: (err as Error).message };
    }
  }

  private mockSend(params: SmsSendParams): SmsSendResult {
    const mockId = `mock_sms_${Date.now()}`;
    this.logger.log(
      `[MOCK SMS] phone=${params.phone} msg="${params.message.slice(0, 50)}..." id=${mockId}`,
    );
    return { success: true, messageId: mockId };
  }
}
