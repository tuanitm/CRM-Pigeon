import { OnModuleDestroy } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Redis from 'ioredis';
export declare class RedisService implements OnModuleDestroy {
    private config;
    readonly client: Redis;
    constructor(config: ConfigService);
    onModuleDestroy(): Promise<void>;
    acquireLock(key: string, ttlSeconds?: number): Promise<boolean>;
    releaseLock(key: string): Promise<void>;
    checkIdempotency(key: string, ttlSeconds?: number): Promise<boolean>;
    incrementFrequency(customerId: string, channel: string, limit: number, windowSeconds: number): Promise<{
        count: number;
        allowed: boolean;
    }>;
}
