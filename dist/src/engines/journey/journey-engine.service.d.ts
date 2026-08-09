import { PrismaService } from '../../shared/prisma/prisma.service';
import { ChannelRouterService } from '../../channel-router/channel-router.service';
interface JourneyGraph {
    start_node: string;
    nodes: Record<string, JourneyNode>;
}
interface JourneyNode {
    type: 'action' | 'wait' | 'condition' | 'wait_until_event' | 'split' | 'exit';
    config: Record<string, any>;
    next?: string;
    next_true?: string;
    next_false?: string;
    branches?: {
        percentage: number;
        next: string;
    }[];
}
export declare class JourneyEngineService {
    private prisma;
    private channelRouter;
    private readonly logger;
    constructor(prisma: PrismaService, channelRouter: ChannelRouterService);
    enterJourney(journeyId: string, customerId: string, context?: Record<string, any>): Promise<string | null>;
    processNode(runId: string, customerId: string, graph: JourneyGraph, nodeId: string, exitConditions: Record<string, any> | null): Promise<void>;
    resumeRun(runId: string): Promise<void>;
    private handleAction;
    private handleWait;
    private handleWaitUntilEvent;
    private handleCondition;
    private handleSplit;
    private checkExitConditions;
    private evaluateSimpleCondition;
    private exitRun;
}
export {};
