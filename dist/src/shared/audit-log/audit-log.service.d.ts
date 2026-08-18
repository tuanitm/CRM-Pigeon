import { PrismaService } from '../prisma/prisma.service';
export declare class AuditLogService {
    private prisma;
    constructor(prisma: PrismaService);
    log(params: {
        adminUserId?: string;
        action: string;
        entityType?: string;
        entityId?: string;
        oldValues?: Record<string, any>;
        newValues?: Record<string, any>;
        ipAddress?: string;
    }): Promise<{
        id: string;
        action: string;
        entityType: string | null;
        entityId: string | null;
        oldValues: import("@prisma/client/runtime/client").JsonValue | null;
        newValues: import("@prisma/client/runtime/client").JsonValue | null;
        ipAddress: string | null;
        createdAt: Date;
        adminUserId: string | null;
    }>;
}
