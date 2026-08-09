import { RedisService } from '../shared/redis/redis.service';
export declare class FrequencyLimiterService {
    private redis;
    private readonly LIMITS;
    private readonly WINDOW_SECONDS;
    constructor(redis: RedisService);
    isAllowed(customerId: string, channel: string): Promise<{
        allowed: boolean;
        count: number;
        limit: number;
    }>;
}
