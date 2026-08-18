"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoyaltyModule = void 0;
const common_1 = require("@nestjs/common");
const bullmq_1 = require("@nestjs/bullmq");
const points_service_1 = require("./points.service");
const tier_service_1 = require("./tier.service");
const milestone_service_1 = require("./milestone.service");
const referral_service_1 = require("./referral.service");
const loyalty_controller_1 = require("./loyalty.controller");
let LoyaltyModule = class LoyaltyModule {
};
exports.LoyaltyModule = LoyaltyModule;
exports.LoyaltyModule = LoyaltyModule = __decorate([
    (0, common_1.Module)({
        imports: [bullmq_1.BullModule.registerQueue({ name: 'loyalty' })],
        controllers: [loyalty_controller_1.LoyaltyController],
        providers: [points_service_1.PointsService, tier_service_1.TierService, milestone_service_1.MilestoneService, referral_service_1.ReferralService],
        exports: [points_service_1.PointsService, tier_service_1.TierService, milestone_service_1.MilestoneService, referral_service_1.ReferralService],
    })
], LoyaltyModule);
//# sourceMappingURL=loyalty.module.js.map