"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SegmentationModule = void 0;
const common_1 = require("@nestjs/common");
const bullmq_1 = require("@nestjs/bullmq");
const rule_evaluator_service_1 = require("./rule-evaluator.service");
const rfm_calculator_service_1 = require("./rfm-calculator.service");
const segment_service_1 = require("./segment.service");
let SegmentationModule = class SegmentationModule {
};
exports.SegmentationModule = SegmentationModule;
exports.SegmentationModule = SegmentationModule = __decorate([
    (0, common_1.Module)({
        imports: [bullmq_1.BullModule.registerQueue({ name: 'segmentation' })],
        providers: [rule_evaluator_service_1.RuleEvaluatorService, rfm_calculator_service_1.RfmCalculatorService, segment_service_1.SegmentService],
        exports: [rule_evaluator_service_1.RuleEvaluatorService, rfm_calculator_service_1.RfmCalculatorService, segment_service_1.SegmentService],
    })
], SegmentationModule);
//# sourceMappingURL=segmentation.module.js.map