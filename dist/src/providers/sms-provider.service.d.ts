import { ConfigService } from '@nestjs/config';
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
export declare class SmsProviderService {
    private config;
    private readonly logger;
    private readonly provider;
    private readonly apiKey;
    constructor(config: ConfigService);
    send(params: SmsSendParams): Promise<SmsSendResult>;
    private sendViaEsms;
    private sendViaSpeedSms;
    private mockSend;
}
