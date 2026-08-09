import { PrismaService } from '../../shared/prisma/prisma.service';
export interface RuleGroup {
    operator: 'AND' | 'OR';
    conditions: (RuleGroup | RuleCondition)[];
}
export interface RuleCondition {
    type: 'attribute' | 'event' | 'segment' | 'relative_date';
    field?: string;
    event_type?: string;
    segment_code?: string;
    op: string;
    value?: any;
    timeframe_days?: number;
}
export declare class RuleEvaluatorService {
    private prisma;
    private readonly logger;
    constructor(prisma: PrismaService);
    evaluateForCustomer(customerId: string, rules: RuleGroup): Promise<boolean>;
    evaluateForAllCustomers(rules: RuleGroup): Promise<string[]>;
    previewSegment(rules: RuleGroup, sampleSize?: number): Promise<{
        count: number;
        sample: string[];
    }>;
    private evaluateGroup;
    private evaluateCondition;
    private evaluateAttribute;
    private evaluateEvent;
    private evaluateSegment;
    private evaluateRelativeDate;
    private resolveField;
    private getNestedValue;
    private compareValues;
    private buildContext;
}
