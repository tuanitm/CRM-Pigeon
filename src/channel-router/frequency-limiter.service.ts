import { Injectable } from '@nestjs/common';
import { RedisService } from '../shared/redis/redis.service';

/** SRS: 3 ZNS + 2 email per 7 days per customer */
@Injectable()
export class FrequencyLimiterService {
  private readonly LIMITS: Record<string, number> = {
    zns: 3,
    email: 2,
    sms: 1,
  };
  private readonly WINDOW_SECONDS = 7 * 24 * 60 * 60; // 7 days

  constructor(private redis: RedisService) {}

  async isAllowed(
    customerId: string,
    channel: string,
  ): Promise<{ allowed: boolean; count: number; limit: number }> {
    const limit = this.LIMITS[channel] || 5;
    const { count, allowed } = await this.redis.incrementFrequency(
      customerId,
      channel,
      limit,
      this.WINDOW_SECONDS,
    );
    return { allowed, count, limit };
  }
}
