import { IdentifyDto } from './dto/identify.dto';
import { PrismaService } from '../shared/prisma/prisma.service';
import { RedisService } from '../shared/redis/redis.service';
export declare class IdentifyController {
    private prisma;
    private redis;
    private readonly logger;
    constructor(prisma: PrismaService, redis: RedisService);
    identify(dto: IdentifyDto): Promise<{
        status: string;
        customerId?: undefined;
        isNew?: undefined;
    } | {
        status: string;
        customerId: string | null;
        isNew: boolean;
    }>;
    private normalizePhone;
}
