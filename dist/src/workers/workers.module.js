"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkersModule = void 0;
const common_1 = require("@nestjs/common");
const bullmq_1 = require("@nestjs/bullmq");
const event_processor_1 = require("./event.processor");
const segmentation_module_1 = require("../engines/segmentation/segmentation.module");
const journey_module_1 = require("../engines/journey/journey.module");
const loyalty_module_1 = require("../engines/loyalty/loyalty.module");
const replenishment_module_1 = require("../engines/replenishment/replenishment.module");
let WorkersModule = class WorkersModule {
};
exports.WorkersModule = WorkersModule;
exports.WorkersModule = WorkersModule = __decorate([
    (0, common_1.Module)({
        imports: [
            bullmq_1.BullModule.registerQueue({ name: 'events' }),
            bullmq_1.BullModule.registerQueue({ name: 'webhooks' }),
            segmentation_module_1.SegmentationModule,
            journey_module_1.JourneyModule,
            loyalty_module_1.LoyaltyModule,
            replenishment_module_1.ReplenishmentModule,
        ],
        providers: [event_processor_1.EventProcessor],
    })
], WorkersModule);
//# sourceMappingURL=workers.module.js.map