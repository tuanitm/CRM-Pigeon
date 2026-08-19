import { JourneyEngineService } from './journey-engine.service';
import { JourneyRunService } from './journey-run.service';
import { PrismaService } from '../../shared/prisma/prisma.service';
declare class EnterJourneyDto {
    customerId: string;
    context?: Record<string, any>;
}
export declare class JourneyController {
    private readonly journeyEngine;
    private readonly journeyRunService;
    private readonly prisma;
    constructor(journeyEngine: JourneyEngineService, journeyRunService: JourneyRunService, prisma: PrismaService);
    listJourneys(): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: string;
        name: string;
        version: number;
        description: string | null;
        code: string;
        graph: import("@prisma/client/runtime/client").JsonValue;
        triggerEvent: string | null;
        triggerSegmentId: string | null;
        entryConditions: import("@prisma/client/runtime/client").JsonValue | null;
        exitConditions: import("@prisma/client/runtime/client").JsonValue | null;
        hasControlGroup: boolean;
        controlGroupPct: import("@prisma/client-runtime-utils").Decimal | null;
    }[]>;
    createJourney(data: any): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: string;
        name: string;
        version: number;
        description: string | null;
        code: string;
        graph: import("@prisma/client/runtime/client").JsonValue;
        triggerEvent: string | null;
        triggerSegmentId: string | null;
        entryConditions: import("@prisma/client/runtime/client").JsonValue | null;
        exitConditions: import("@prisma/client/runtime/client").JsonValue | null;
        hasControlGroup: boolean;
        controlGroupPct: import("@prisma/client-runtime-utils").Decimal | null;
    }>;
    enterJourney(journeyId: string, dto: EnterJourneyDto): Promise<{
        success: boolean;
        runId: string | null;
    }>;
    getPerformance(journeyId: string): Promise<Record<string, any>>;
    updateJourney(journeyId: string, data: any): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: string;
        name: string;
        version: number;
        description: string | null;
        code: string;
        graph: import("@prisma/client/runtime/client").JsonValue;
        triggerEvent: string | null;
        triggerSegmentId: string | null;
        entryConditions: import("@prisma/client/runtime/client").JsonValue | null;
        exitConditions: import("@prisma/client/runtime/client").JsonValue | null;
        hasControlGroup: boolean;
        controlGroupPct: import("@prisma/client-runtime-utils").Decimal | null;
    }>;
}
export {};
