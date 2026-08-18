import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

/**
 * Zalo ZNS Provider — sends transactional ZNS messages via Zalo Business API.
 *
 * ZNS templates are pre-approved in the Zalo Business Console.
 * Each template has a provider_template_id that maps to Zalo's template ID.
 *
 * Rate limits: 500 msg/min per OA (official account).
 * Cost: varies per template type (transaction < promotion < post-transaction).
 */

export interface ZnsSendParams {
  phone: string; // E.164 format → strip +84 prefix for Zalo (use 84XXXXXXXXX)
  templateId: string; // Zalo ZNS template ID
  templateData: Record<string, string>; // Key-value pairs matching template variables
}

export interface ZnsSendResult {
  success: boolean;
  messageId?: string;
  error?: string;
  errorCode?: number;
}

@Injectable()
export class ZnsProviderService {
  private readonly logger = new Logger(ZnsProviderService.name);
  private readonly apiUrl: string;
  private accessToken: string;
  private refreshToken: string;

  constructor(private config: ConfigService) {
    this.apiUrl = this.config.get(
      'ZNS_API_URL',
      'https://business.zalo.me/openapi',
    );
    this.accessToken = this.config.get('ZNS_ACCESS_TOKEN', '');
    this.refreshToken = this.config.get('ZNS_REFRESH_TOKEN', '');
  }

  async send(params: ZnsSendParams): Promise<ZnsSendResult> {
    if (!this.accessToken) {
      this.logger.warn(
        'ZNS access token not configured — message will be logged only',
      );
      return this.mockSend(params);
    }

    try {
      // Normalize phone: +84 → 84, 0 → 84
      const phone = this.normalizePhone(params.phone);

      const response = await fetch(`${this.apiUrl}/message/template`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          access_token: this.accessToken,
        },
        body: JSON.stringify({
          phone,
          template_id: params.templateId,
          template_data: params.templateData,
        }),
      });

      const data = await response.json();

      if (data.error === 0) {
        this.logger.log(
          `ZNS sent: ${phone} template=${params.templateId} msgId=${data.data?.msg_id}`,
        );
        return { success: true, messageId: data.data?.msg_id };
      }

      // Handle token refresh
      if (data.error === -124 || data.error === -216) {
        this.logger.warn('ZNS token expired — attempting refresh...');
        const refreshed = await this.refreshAccessToken();
        if (refreshed) {
          return this.send(params); // Retry once
        }
      }

      this.logger.error(`ZNS error: ${data.error} — ${data.message}`);
      return { success: false, error: data.message, errorCode: data.error };
    } catch (err) {
      this.logger.error(`ZNS send failed: ${(err as Error).message}`);
      return { success: false, error: (err as Error).message };
    }
  }

  /**
   * Refresh the ZNS access token using the refresh token.
   */
  private async refreshAccessToken(): Promise<boolean> {
    if (!this.refreshToken) return false;

    try {
      const response = await fetch(
        'https://oauth.zaloapp.com/v4/oa/access_token',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams({
            refresh_token: this.refreshToken,
            app_id: this.config.get('ZNS_APP_ID', ''),
            grant_type: 'refresh_token',
          }),
        },
      );

      const data = await response.json();
      if (data.access_token) {
        this.accessToken = data.access_token;
        if (data.refresh_token) this.refreshToken = data.refresh_token;
        this.logger.log('ZNS access token refreshed successfully');
        return true;
      }
      return false;
    } catch (err) {
      this.logger.error(`ZNS token refresh failed: ${(err as Error).message}`);
      return false;
    }
  }

  private normalizePhone(phone: string): string {
    let p = phone.replace(/[\s\-\(\)]/g, '');
    if (p.startsWith('+84')) p = p.slice(1);
    else if (p.startsWith('0')) p = '84' + p.slice(1);
    return p;
  }

  /**
   * Mock send for development — logs the message without calling Zalo API.
   */
  private mockSend(params: ZnsSendParams): ZnsSendResult {
    const mockId = `mock_zns_${Date.now()}`;
    this.logger.log(
      `[MOCK ZNS] phone=${params.phone} template=${params.templateId} data=${JSON.stringify(params.templateData)} id=${mockId}`,
    );
    return { success: true, messageId: mockId };
  }
}
