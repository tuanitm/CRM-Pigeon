"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelRouterModule = void 0;
const common_1 = require("@nestjs/common");
const channel_router_service_1 = require("./channel-router.service");
const consent_checker_service_1 = require("./consent-checker.service");
const frequency_limiter_service_1 = require("./frequency-limiter.service");
const quiet_hours_service_1 = require("./quiet-hours.service");
const providers_module_1 = require("../providers/providers.module");
let ChannelRouterModule = class ChannelRouterModule {
};
exports.ChannelRouterModule = ChannelRouterModule;
exports.ChannelRouterModule = ChannelRouterModule = __decorate([
    (0, common_1.Module)({
        imports: [providers_module_1.ProvidersModule],
        providers: [channel_router_service_1.ChannelRouterService, consent_checker_service_1.ConsentCheckerService, frequency_limiter_service_1.FrequencyLimiterService, quiet_hours_service_1.QuietHoursService],
        exports: [channel_router_service_1.ChannelRouterService],
    })
], ChannelRouterModule);
//# sourceMappingURL=channel-router.module.js.map