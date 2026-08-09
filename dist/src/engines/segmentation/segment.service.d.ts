import { PrismaService } from '../../shared/prisma/prisma.service';
import { RuleEvaluatorService, RuleGroup } from './rule-evaluator.service';
export declare const MANDATORY_SEGMENTS: {
    code: string;
    name: string;
    rules: RuleGroup;
}[];
export declare class SegmentService {
    private prisma;
    private ruleEvaluator;
    private readonly logger;
    constructor(prisma: PrismaService, ruleEvaluator: RuleEvaluatorService);
    seedMandatorySegments(): Promise<void>;
    refreshAllScheduledSegments(): Promise<void>;
    refreshSegment(segmentId: string, segmentCode: string, rules: RuleGroup): Promise<{
        entered: number;
        exited: number;
    }>;
    evaluateRealtimeForCustomer(customerId: string): Promise<void>;
}
