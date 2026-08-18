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
var ZnsProviderService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZnsProviderService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
let ZnsProviderService = ZnsProviderService_1 = class ZnsProviderService {
    config;
    logger = new common_1.Logger(ZnsProviderService_1.name);
    apiUrl;
    accessToken;
    refreshToken;
    constructor(config) {
        this.config = config;
        this.apiUrl = this.config.get('ZNS_API_URL', 'https://business.zalo.me/openapi');
        this.accessToken = this.config.get('ZNS_ACCESS_TOKEN', '');
        this.refreshToken = this.config.get('ZNS_REFRESH_TOKEN', '');
    }
    async send(params) {
        if (!this.accessToken) {
            this.logger.warn('ZNS access token not configured — message will be logged only');
            return this.mockSend(params);
        }
        try {
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
                this.logger.log(`ZNS sent: ${phone} template=${params.templateId} msgId=${data.data?.msg_id}`);
                return { success: true, messageId: data.data?.msg_id };
            }
            if (data.error === -124 || data.error === -216) {
                this.logger.warn('ZNS token expired — attempting refresh...');
                const refreshed = await this.refreshAccessToken();
                if (refreshed) {
                    return this.send(params);
                }
            }
            this.logger.error(`ZNS error: ${data.error} — ${data.message}`);
            return { success: false, error: data.message, errorCode: data.error };
        }
        catch (err) {
            this.logger.error(`ZNS send failed: ${err.message}`);
            return { success: false, error: err.message };
        }
    }
    async refreshAccessToken() {
        if (!this.refreshToken)
            return false;
        try {
            const response = await fetch('https://oauth.zaloapp.com/v4/oa/access_token', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams({
                    refresh_token: this.refreshToken,
                    app_id: this.config.get('ZNS_APP_ID', ''),
                    grant_type: 'refresh_token',
                }),
            });
            const data = await response.json();
            if (data.access_token) {
                this.accessToken = data.access_token;
                if (data.refresh_token)
                    this.refreshToken = data.refresh_token;
                this.logger.log('ZNS access token refreshed successfully');
                return true;
            }
            return false;
        }
        catch (err) {
            this.logger.error(`ZNS token refresh failed: ${err.message}`);
            return false;
        }
    }
    normalizePhone(phone) {
        let p = phone.replace(/[\s\-\(\)]/g, '');
        if (p.startsWith('+84'))
            p = p.slice(1);
        else if (p.startsWith('0'))
            p = '84' + p.slice(1);
        return p;
    }
    mockSend(params) {
        const mockId = `mock_zns_${Date.now()}`;
        this.logger.log(`[MOCK ZNS] phone=${params.phone} template=${params.templateId} data=${JSON.stringify(params.templateData)} id=${mockId}`);
        return { success: true, messageId: mockId };
    }
};
exports.ZnsProviderService = ZnsProviderService;
exports.ZnsProviderService = ZnsProviderService = ZnsProviderService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], ZnsProviderService);
//# sourceMappingURL=zns-provider.service.js.map