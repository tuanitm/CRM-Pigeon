"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JourneyModule = void 0;
const common_1 = require("@nestjs/common");
const bullmq_1 = require("@nestjs/bullmq");
const journey_engine_service_1 = require("./journey-engine.service");
const journey_run_service_1 = require("./journey-run.service");
const channel_router_module_1 = require("../../channel-router/channel-router.module");
const journey_controller_1 = require("./journey.controller");
let JourneyModule = class JourneyModule {
};
exports.JourneyModule = JourneyModule;
exports.JourneyModule = JourneyModule = __decorate([
    (0, common_1.Module)({
        imports: [
            bullmq_1.BullModule.registerQueue({ name: 'journey' }),
            channel_router_module_1.ChannelRouterModule,
        ],
        controllers: [journey_controller_1.JourneyController],
        providers: [journey_engine_service_1.JourneyEngineService, journey_run_service_1.JourneyRunService],
        exports: [journey_engine_service_1.JourneyEngineService, journey_run_service_1.JourneyRunService],
    })
], JourneyModule);
//# sourceMappingURL=journey.module.js.map