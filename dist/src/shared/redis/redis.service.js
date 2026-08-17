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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedisService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const ioredis_1 = __importDefault(require("ioredis"));
let RedisService = class RedisService {
    config;
    client;
    constructor(config) {
        this.config = config;
        this.client = new ioredis_1.default({
            host: this.config.get('REDIS_HOST', 'localhost'),
            port: this.config.get('REDIS_PORT', 6379),
            password: this.config.get('REDIS_PASSWORD') || undefined,
            maxRetriesPerRequest: null,
            enableOfflineQueue: false,
        });
        this.client.on('error', (err) => {
        });
    }
    async onModuleDestroy() {
        await this.client.quit();
    }
    async acquireLock(key, ttlSeconds = 10) {
        try {
            const result = await this.client.set(`lock:${key}`, '1', 'EX', ttlSeconds, 'NX');
            return result === 'OK';
        }
        catch (e) {
            return true;
        }
    }
    async releaseLock(key) {
        try {
            await this.client.del(`lock:${key}`);
        }
        catch (e) { }
    }
    async checkIdempotency(key, ttlSeconds = 86400) {
        try {
            const exists = await this.client.exists(`idem:${key}`);
            if (exists)
                return true;
            await this.client.set(`idem:${key}`, '1', 'EX', ttlSeconds);
            return false;
        }
        catch (e) {
            return false;
        }
    }
    async incrementFrequency(customerId, channel, limit, windowSeconds) {
        try {
            const key = `freq:${customerId}:${channel}`;
            const count = await this.client.incr(key);
            if (count === 1) {
                await this.client.expire(key, windowSeconds);
            }
            return { count, allowed: count <= limit };
        }
        catch (e) {
            return { count: 1, allowed: true };
        }
    }
};
exports.RedisService = RedisService;
exports.RedisService = RedisService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], RedisService);
//# sourceMappingURL=redis.service.js.map