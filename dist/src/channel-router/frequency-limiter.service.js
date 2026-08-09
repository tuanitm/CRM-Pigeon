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
exports.FrequencyLimiterService = void 0;
const common_1 = require("@nestjs/common");
const redis_service_1 = require("../shared/redis/redis.service");
let FrequencyLimiterService = class FrequencyLimiterService {
    redis;
    LIMITS = {
        zns: 3,
        email: 2,
        sms: 1,
    };
    WINDOW_SECONDS = 7 * 24 * 60 * 60;
    constructor(redis) {
        this.redis = redis;
    }
    async isAllowed(customerId, channel) {
        const limit = this.LIMITS[channel] || 5;
        const { count, allowed } = await this.redis.incrementFrequency(customerId, channel, limit, this.WINDOW_SECONDS);
        return { allowed, count, limit };
    }
};
exports.FrequencyLimiterService = FrequencyLimiterService;
exports.FrequencyLimiterService = FrequencyLimiterService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [redis_service_1.RedisService])
], FrequencyLimiterService);
//# sourceMappingURL=frequency-limiter.service.js.map