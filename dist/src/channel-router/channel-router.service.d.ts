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
export declare class ChannelRouterService {
    private prisma;
    private consentChecker;
    private frequencyLimiter;
    private quietHours;
    private znsProvider;
    private emailProvider;
    private smsProvider;
    private readonly logger;
    constructor(prisma: PrismaService, consentChecker: ConsentCheckerService, frequencyLimiter: FrequencyLimiterService, quietHours: QuietHoursService, znsProvider: ZnsProviderService, emailProvider: EmailProviderService, smsProvider: SmsProviderService);
    send(params: SendMessageParams): Promise<{
        sent: boolean;
        reason?: string;
        messageId?: string;
    }>;
    private renderTemplate;
    private logMessage;
}
