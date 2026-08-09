"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JourneyController = void 0;
const common_1 = require("@nestjs/common");
const journey_engine_service_1 = require("./journey-engine.service");
const journey_run_service_1 = require("./journey-run.service");
const prisma_service_1 = require("../../shared/prisma/prisma.service");
const swagger_1 = require("@nestjs/swagger");
class EnterJourneyDto {
    customerId;
    context;
}
let JourneyController = class JourneyController {
    journeyEngine;
    journeyRunService;
    prisma;
    constructor(journeyEngine, journeyRunService, prisma) {
        this.journeyEngine = journeyEngine;
        this.journeyRunService = journeyRunService;
        this.prisma = prisma;
    }
    async listJourneys() {
        return this.prisma.journey.findMany({
            orderBy: { createdAt: 'desc' },
        });
    }
    async enterJourney(journeyId, dto) {
        const runId = await this.journeyEngine.enterJourney(journeyId, dto.customerId, dto.context);
        return { success: true, runId };
    }
    async getPerformance(journeyId) {
        return this.journeyRunService.getJourneyPerformance(journeyId);
    }
};
exports.JourneyController = JourneyController;
__decorate([
    (0, common_1.Get)('list'),
    (0, swagger_1.ApiOperation)({ summary: 'List all journeys' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], JourneyController.prototype, "listJourneys", null);
__decorate([
    (0, common_1.Post)(':journeyId/enter'),
    (0, swagger_1.ApiOperation)({ summary: 'Manually enter a customer into a journey' }),
    __param(0, (0, common_1.Param)('journeyId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, EnterJourneyDto]),
    __metadata("design:returntype", Promise)
], JourneyController.prototype, "enterJourney", null);
__decorate([
    (0, common_1.Get)(':journeyId/performance'),
    (0, swagger_1.ApiOperation)({ summary: 'Get journey performance stats' }),
    __param(0, (0, common_1.Param)('journeyId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], JourneyController.prototype, "getPerformance", null);
exports.JourneyController = JourneyController = __decorate([
    (0, swagger_1.ApiTags)('Journey'),
    (0, common_1.Controller)('journey'),
    __metadata("design:paramtypes", [journey_engine_service_1.JourneyEngineService,
        journey_run_service_1.JourneyRunService,
        prisma_service_1.PrismaService])
], JourneyController);
//# sourceMappingURL=journey.controller.js.map