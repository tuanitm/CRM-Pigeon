import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Redis from 'ioredis';

@Injectable()
export class RedisService implements OnModuleDestroy {
  public readonly client: Redis;

  constructor(private config: ConfigService) {
    this.client = new Redis({
      host: this.config.get('REDIS_HOST', 'localhost'),
      port: this.config.get<number>('REDIS_PORT', 6379),
      password: this.config.get('REDIS_PASSWORD') || undefined,
      maxRetriesPerRequest: null,
    });
  }

  async onModuleDestroy() {
    await this.client.quit();
  }

  /** Distributed lock using SET NX EX */
  async acquireLock(key: string, ttlSeconds: number = 10): Promise<boolean> {
    const result = await this.client.set(`lock:${key}`, '1', 'EX', ttlSeconds, 'NX');
    return result === 'OK';
  }

  async releaseLock(key: string): Promise<void> {
    await this.client.del(`lock:${key}`);
  }

  /** Idempotency check: returns true if key already exists */
  async checkIdempotency(key: string, ttlSeconds: number = 86400): Promise<boolean> {
    const exists = await this.client.exists(`idem:${key}`);
    if (exists) return true;
    await this.client.set(`idem:${key}`, '1', 'EX', ttlSeconds);
    return false;
  }

  /** Frequency counter: increment and check limit */
  async incrementFrequency(customerId: string, channel: string, limit: number, windowSeconds: number): Promise<{ count: number; allowed: boolean }> {
    const key = `freq:${customerId}:${channel}`;
    const count = await this.client.incr(key);
    if (count === 1) {
      await this.client.expire(key, windowSeconds);
    }
    return { count, allowed: count <= limit };
  }
}
