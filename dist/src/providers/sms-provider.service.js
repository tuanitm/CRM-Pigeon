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
var SmsProviderService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmsProviderService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
let SmsProviderService = SmsProviderService_1 = class SmsProviderService {
    config;
    logger = new common_1.Logger(SmsProviderService_1.name);
    provider;
    apiKey;
    constructor(config) {
        this.config = config;
        this.provider = this.config.get('SMS_PROVIDER', '');
        this.apiKey = this.config.get('SMS_API_KEY', '');
    }
    async send(params) {
        if (!this.provider || !this.apiKey) {
            this.logger.warn('SMS provider not configured — message will be logged only');
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
    async sendViaEsms(params) {
        try {
            const response = await fetch('http://rest.esms.vn/MainService.svc/json/SendMultipleMessage_V4_post_json/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ApiKey: this.apiKey,
                    SecretKey: this.config.get('SMS_SECRET_KEY', ''),
                    Phone: params.phone,
                    Content: params.message,
                    SmsType: 2,
                    Brandname: params.brandName || 'PIGEON',
                    IsUnicode: 0,
                }),
            });
            const data = await response.json();
            if (data.CodeResult === '100') {
                return { success: true, messageId: data.SMSID };
            }
            return { success: false, error: data.ErrorMessage };
        }
        catch (err) {
            return { success: false, error: err.message };
        }
    }
    async sendViaSpeedSms(params) {
        try {
            const response = await fetch('https://api.speedsms.vn/index.php/sms/send', {
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
            });
            const data = await response.json();
            if (data.status === 'success') {
                return { success: true, messageId: data.data?.tranId };
            }
            return { success: false, error: data.message };
        }
        catch (err) {
            return { success: false, error: err.message };
        }
    }
    mockSend(params) {
        const mockId = `mock_sms_${Date.now()}`;
        this.logger.log(`[MOCK SMS] phone=${params.phone} msg="${params.message.slice(0, 50)}..." id=${mockId}`);
        return { success: true, messageId: mockId };
    }
};
exports.SmsProviderService = SmsProviderService;
exports.SmsProviderService = SmsProviderService = SmsProviderService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], SmsProviderService);
//# sourceMappingURL=sms-provider.service.js.map