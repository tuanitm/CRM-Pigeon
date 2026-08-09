import { PrismaService } from '../shared/prisma/prisma.service';
export declare class IdentityResolverService {
    private prisma;
    private readonly logger;
    private readonly PRIORITY_MAP;
    constructor(prisma: PrismaService);
    resolve(identities: {
        type: string;
        value: string;
    }[]): Promise<string | null>;
    linkIdentity(customerId: string, type: string, value: string): Promise<void>;
}
