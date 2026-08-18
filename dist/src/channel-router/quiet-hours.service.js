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
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuietHoursService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
let QuietHoursService = class QuietHoursService {
    quietStart;
    quietEnd;
    timezone;
    constructor(config) {
        this.quietStart = config.get('QUIET_HOUR_START', 21);
        this.quietEnd = config.get('QUIET_HOUR_END', 7);
        this.timezone = config.get('TIMEZONE', 'Asia/Ho_Chi_Minh');
    }
    isQuietHours() {
        const now = new Date();
        const vnHour = parseInt(now.toLocaleString('en-US', {
            timeZone: this.timezone,
            hour: 'numeric',
            hour12: false,
        }));
        return vnHour >= this.quietStart || vnHour < this.quietEnd;
    }
    getNextSendTime() {
        const now = new Date();
        const tomorrow = new Date(now);
        tomorrow.setDate(tomorrow.getDate() + 1);
        tomorrow.setUTCHours(0, 5, 0, 0);
        return tomorrow;
    }
};
exports.QuietHoursService = QuietHoursService;
exports.QuietHoursService = QuietHoursService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], QuietHoursService);
//# sourceMappingURL=quiet-hours.service.js.map