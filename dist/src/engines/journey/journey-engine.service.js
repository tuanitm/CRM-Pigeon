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
var JourneyEngineService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.JourneyEngineService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../shared/prisma/prisma.service");
const channel_router_service_1 = require("../../channel-router/channel-router.service");
let JourneyEngineService = JourneyEngineService_1 = class JourneyEngineService {
    prisma;
    channelRouter;
    logger = new common_1.Logger(JourneyEngineService_1.name);
    constructor(prisma, channelRouter) {
        this.prisma = prisma;
        this.channelRouter = channelRouter;
    }
    async enterJourney(journeyId, customerId, context) {
        const journey = await this.prisma.journey.findUnique({ where: { id: journeyId } });
        if (!journey || journey.status !== 'active') {
            this.logger.warn(`Journey ${journeyId} not found or not active`);
            return null;
        }
        const existingRun = await this.prisma.journey_run.findFirst({
            where: { journey_id: journeyId, customer_id: customerId, status: 'active' },
        });
        if (existingRun) {
            this.logger.debug(`Customer ${customerId} already in journey ${journey.code}`);
            return existingRun.id;
        }
        if (journey.hasControlGroup) {
            const isControl = Math.random() * 100 < Number(journey.controlGroupPct || 0);
            if (isControl) {
                await this.prisma.campaign_control_group.create({
                    data: {
                        customer_id: customerId,
                        journey_id: journeyId,
                        group: 'control',
                    },
                });
                this.logger.log(`Customer ${customerId} assigned to control group for ${journey.code}`);
                return null;
            }
        }
        const graph = journey.graph;
        const run = await this.prisma.journey_run.create({
            data: {
                journey_id: journeyId,
                customer_id: customerId,
                current_node_id: graph.start_node,
                status: 'active',
                journey_version: journey.version,
                context: context || {},
            },
        });
        await this.processNode(run.id, customerId, graph, graph.start_node, journey.exitConditions);
        return run.id;
    }
    async processNode(runId, customerId, graph, nodeId, exitConditions) {
        const node = graph.nodes[nodeId];
        if (!node) {
            this.logger.warn(`Node ${nodeId} not found in journey graph`);
            await this.exitRun(runId, 'node_not_found');
            return;
        }
        if (node.type === 'action') {
            const shouldExit = await this.checkExitConditions(customerId, exitConditions);
            if (shouldExit) {
                await this.exitRun(runId, 'exit_condition_met');
                return;
            }
        }
        await this.prisma.journey_step_log.create({
            data: {
                journey_run_id: runId,
                node_id: nodeId,
                node_type: node.type,
                action: node.config?.template_code || node.config?.event_type || null,
                result: {},
            },
        });
        switch (node.type) {
            case 'action':
                await this.handleAction(runId, customerId, node, graph, exitConditions);
                break;
            case 'wait':
                await this.handleWait(runId, nodeId, node);
                break;
            case 'wait_until_event':
                await this.handleWaitUntilEvent(runId, nodeId, node);
                break;
            case 'condition':
                await this.handleCondition(runId, customerId, node, graph, exitConditions);
                break;
            case 'split':
                await this.handleSplit(runId, customerId, node, graph, exitConditions);
                break;
            case 'exit':
                await this.exitRun(runId, node.config?.reason || 'journey_complete');
                break;
        }
    }
    async resumeRun(runId) {
        const run = await this.prisma.journey_run.findUnique({
            where: { id: runId },
            include: { journey: true },
        });
        if (!run || run.status !== 'active')
            return;
        const graph = run.journey.graph;
        const currentNode = graph.nodes[run.current_node_id];
        if (!currentNode) {
            await this.exitRun(runId, 'node_not_found');
            return;
        }
        const nextNodeId = currentNode.next;
        if (!nextNodeId) {
            await this.exitRun(runId, 'no_next_node');
            return;
        }
        await this.prisma.journey_run.update({
            where: { id: runId },
            data: { current_node_id: nextNodeId },
        });
        await this.processNode(runId, run.customer_id, graph, nextNodeId, run.journey.exitConditions);
    }
    async handleAction(runId, customerId, node, graph, exitConditions) {
        const { channel, template_code } = node.config;
        const result = await this.channelRouter.send({
            customerId,
            channel,
            templateCode: template_code,
            journeyRunId: runId,
        });
        this.logger.log(`Journey action: sent ${channel}/${template_code} to ${customerId} — ${result.sent ? 'sent' : result.reason}`);
        if (node.next) {
            await this.prisma.journey_run.update({
                where: { id: runId },
                data: { current_node_id: node.next },
            });
            await this.processNode(runId, customerId, graph, node.next, exitConditions);
        }
        else {
            await this.exitRun(runId, 'journey_complete');
        }
    }
    async handleWait(runId, nodeId, node) {
        const durationMs = (node.config.duration_hours || 1) * 60 * 60 * 1000;
        await this.prisma.journey_run.update({
            where: { id: runId },
            data: { current_node_id: nodeId },
        });
        this.logger.log(`Journey wait: run ${runId} paused for ${node.config.duration_hours}h`);
    }
    async handleWaitUntilEvent(runId, nodeId, node) {
        await this.prisma.journey_run.update({
            where: { id: runId },
            data: { current_node_id: nodeId },
        });
        this.logger.log(`Journey wait_until_event: run ${runId} waiting for event ${node.config.event_type}`);
    }
    async handleCondition(runId, customerId, node, graph, exitConditions) {
        const conditionMet = await this.evaluateSimpleCondition(customerId, node.config);
        const nextNodeId = conditionMet ? node.next_true : node.next_false;
        if (!nextNodeId) {
            await this.exitRun(runId, 'no_branch_target');
            return;
        }
        await this.prisma.journey_run.update({
            where: { id: runId },
            data: { current_node_id: nextNodeId },
        });
        await this.processNode(runId, customerId, graph, nextNodeId, exitConditions);
    }
    async handleSplit(runId, customerId, node, graph, exitConditions) {
        if (!node.branches?.length) {
            await this.exitRun(runId, 'no_split_branches');
            return;
        }
        const rand = Math.random() * 100;
        let cumulative = 0;
        let selectedBranch = node.branches[0].next;
        for (const branch of node.branches) {
            cumulative += branch.percentage;
            if (rand <= cumulative) {
                selectedBranch = branch.next;
                break;
            }
        }
        await this.prisma.journey_run.update({
            where: { id: runId },
            data: { current_node_id: selectedBranch },
        });
        await this.processNode(runId, customerId, graph, selectedBranch, exitConditions);
    }
    async checkExitConditions(customerId, exitConditions) {
        if (!exitConditions || Object.keys(exitConditions).length === 0)
            return false;
        if (exitConditions.event_type) {
            const eventCount = await this.prisma.$queryRaw `
        SELECT COUNT(*)::int as count FROM event
        WHERE customer_id = ${customerId}::uuid
          AND event_type = ${exitConditions.event_type}
          AND occurred_at >= NOW() - INTERVAL '30 days'
      `;
            if (eventCount[0]?.count > 0)
                return true;
        }
        return false;
    }
    async evaluateSimpleCondition(customerId, config) {
        const { field, op, value } = config;
        if (field?.startsWith('event_count.')) {
            const eventType = field.replace('event_count.', '');
            const result = await this.prisma.$queryRaw `
        SELECT COUNT(*)::int as count FROM event
        WHERE customer_id = ${customerId}::uuid AND event_type = ${eventType}
      `;
            const count = result[0]?.count || 0;
            switch (op) {
                case 'gte': return count >= value;
                case 'gt': return count > value;
                case 'eq': return count === value;
                case 'lt': return count < value;
                default: return false;
            }
        }
        return false;
    }
    async exitRun(runId, reason) {
        await this.prisma.journey_run.update({
            where: { id: runId },
            data: { status: 'completed', exited_at: new Date(), exit_reason: reason },
        });
        this.logger.log(`Journey run ${runId} exited: ${reason}`);
    }
};
exports.JourneyEngineService = JourneyEngineService;
exports.JourneyEngineService = JourneyEngineService = JourneyEngineService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        channel_router_service_1.ChannelRouterService])
], JourneyEngineService);
//# sourceMappingURL=journey-engine.service.js.map