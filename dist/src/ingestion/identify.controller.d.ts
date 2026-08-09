import { IdentifyDto } from './dto/identify.dto';
import { PrismaService } from '../shared/prisma/prisma.service';
import { RedisService } from '../shared/redis/redis.service';
export declare class IdentifyController {
    private prisma;
    private redis;
    constructor(prisma: PrismaService, redis: RedisService);
    identify(dto: IdentifyDto): Promise<{
        status: string;
        customerId?: undefined;
    } | {
        status: string;
        customerId: string | null;
    }>;
    private normalizePhone;
}
