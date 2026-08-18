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
var EmailProviderService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailProviderService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
let EmailProviderService = EmailProviderService_1 = class EmailProviderService {
    config;
    logger = new common_1.Logger(EmailProviderService_1.name);
    apiKey;
    fromEmail;
    constructor(config) {
        this.config = config;
        this.apiKey = this.config.get('SENDGRID_API_KEY', '');
        this.fromEmail = this.config.get('EMAIL_FROM', 'noreply@pigeonvietnam.com');
    }
    async send(params) {
        if (!this.apiKey) {
            this.logger.warn('SendGrid API key not configured — email will be logged only');
            return this.mockSend(params);
        }
        try {
            const payload = {
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
            }
            else {
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
                const messageId = response.headers.get('x-message-id') || `sg_${Date.now()}`;
                this.logger.log(`Email sent: to=${params.to} subject="${params.subject}" id=${messageId}`);
                return { success: true, messageId };
            }
            const errorBody = await response.text();
            this.logger.error(`SendGrid error ${response.status}: ${errorBody}`);
            return {
                success: false,
                error: `SendGrid ${response.status}: ${errorBody}`,
            };
        }
        catch (err) {
            this.logger.error(`Email send failed: ${err.message}`);
            return { success: false, error: err.message };
        }
    }
    mockSend(params) {
        const mockId = `mock_email_${Date.now()}`;
        this.logger.log(`[MOCK EMAIL] to=${params.to} subject="${params.subject}" template=${params.templateId || 'html'} id=${mockId}`);
        return { success: true, messageId: mockId };
    }
};
exports.EmailProviderService = EmailProviderService;
exports.EmailProviderService = EmailProviderService = EmailProviderService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], EmailProviderService);
//# sourceMappingURL=email-provider.service.js.map