import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bullmq';
import { RuleEvaluatorService } from './rule-evaluator.service';
import { RfmCalculatorService } from './rfm-calculator.service';
import { SegmentService } from './segment.service';

@Module({
  imports: [
    BullModule.registerQueue({ name: 'segmentation' }),
  ],
  providers: [RuleEvaluatorService, RfmCalculatorService, SegmentService],
  exports: [RuleEvaluatorService, RfmCalculatorService, SegmentService],
})
export class SegmentationModule {}
