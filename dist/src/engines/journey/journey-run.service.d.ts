import { OnModuleInit } from '@nestjs/common';
import { PrismaService } from '../../shared/prisma/prisma.service';
import { JourneyEngineService } from './journey-engine.service';
export declare class JourneyRunService implements OnModuleInit {
    private prisma;
    private journeyEngine;
    private readonly logger;
    constructor(prisma: PrismaService, journeyEngine: JourneyEngineService);
    onModuleInit(): Promise<void>;
    seedMandatoryJourneys(): Promise<void>;
    handleEventTrigger(eventType: string, customerId: string, properties?: Record<string, any>): Promise<void>;
    getJourneyPerformance(journeyId: string): Promise<Record<string, any>>;
}
