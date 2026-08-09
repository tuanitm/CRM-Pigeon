import { PrismaService } from '../shared/prisma/prisma.service';
export declare class ConsentCheckerService {
    private prisma;
    constructor(prisma: PrismaService);
    hasConsent(customerId: string, channel: string): Promise<boolean>;
}
