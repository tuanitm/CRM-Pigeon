"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerApiModule = void 0;
const common_1 = require("@nestjs/common");
const profile_controller_1 = require("./profile.controller");
const baby_controller_1 = require("./baby.controller");
const loyalty_controller_1 = require("./loyalty.controller");
const serial_controller_1 = require("./serial.controller");
const loyalty_module_1 = require("../engines/loyalty/loyalty.module");
let CustomerApiModule = class CustomerApiModule {
};
exports.CustomerApiModule = CustomerApiModule;
exports.CustomerApiModule = CustomerApiModule = __decorate([
    (0, common_1.Module)({
        imports: [loyalty_module_1.LoyaltyModule],
        controllers: [profile_controller_1.ProfileController, baby_controller_1.BabyController, loyalty_controller_1.LoyaltyController, serial_controller_1.SerialController],
    })
], CustomerApiModule);
//# sourceMappingURL=customer-api.module.js.map