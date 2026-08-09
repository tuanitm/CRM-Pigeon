import { ConfigService } from '@nestjs/config';
export interface EmailSendParams {
    to: string;
    subject: string;
    templateId?: string;
    templateData?: Record<string, any>;
    htmlBody?: string;
    from?: string;
}
export interface EmailSendResult {
    success: boolean;
    messageId?: string;
    error?: string;
}
export declare class EmailProviderService {
    private config;
    private readonly logger;
    private readonly apiKey;
    private readonly fromEmail;
    constructor(config: ConfigService);
    send(params: EmailSendParams): Promise<EmailSendResult>;
    private mockSend;
}
