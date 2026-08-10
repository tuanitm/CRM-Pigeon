"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminModule = void 0;
const common_1 = require("@nestjs/common");
const customer_360_controller_1 = require("./customer-360.controller");
const data_hub_controller_1 = require("./data-hub.controller");
const data_hub_service_1 = require("./data-hub.service");
const dynamic_action_controller_1 = require("./dynamic-action.controller");
const dynamic_action_service_1 = require("./dynamic-action.service");
const zalo_oa_controller_1 = require("./zalo-oa.controller");
const zalo_oa_service_1 = require("./zalo-oa.service");
const zalo_mini_app_controller_1 = require("./zalo-mini-app.controller");
const zalo_mini_app_service_1 = require("./zalo-mini-app.service");
let AdminModule = class AdminModule {
};
exports.AdminModule = AdminModule;
exports.AdminModule = AdminModule = __decorate([
    (0, common_1.Module)({
        controllers: [
            customer_360_controller_1.Customer360Controller,
            data_hub_controller_1.DataHubController,
            dynamic_action_controller_1.DynamicActionController,
            zalo_oa_controller_1.ZaloOAController,
            zalo_mini_app_controller_1.ZaloMiniAppController,
        ],
        providers: [
            data_hub_service_1.DataHubService,
            dynamic_action_service_1.DynamicActionService,
            zalo_oa_service_1.ZaloOAService,
            zalo_mini_app_service_1.ZaloMiniAppService,
        ],
    })
], AdminModule);
//# sourceMappingURL=admin.module.js.map