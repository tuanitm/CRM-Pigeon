import { ConfigService } from '@nestjs/config';
export interface ZnsSendParams {
    phone: string;
    templateId: string;
    templateData: Record<string, string>;
}
export interface ZnsSendResult {
    success: boolean;
    messageId?: string;
    error?: string;
    errorCode?: number;
}
export declare class ZnsProviderService {
    private config;
    private readonly logger;
    private readonly apiUrl;
    private accessToken;
    private refreshToken;
    constructor(config: ConfigService);
    send(params: ZnsSendParams): Promise<ZnsSendResult>;
    private refreshAccessToken;
    private normalizePhone;
    private mockSend;
}
