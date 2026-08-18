import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../shared/prisma/prisma.service';
import { ChannelRouterService } from '../../channel-router/channel-router.service';

/**
 * Journey Engine — Graph-based state machine.
 *
 * Each journey is a JSON graph of nodes:
 *   - action:           Send a message via Channel Router
 *   - wait:             Wait for a fixed duration
 *   - condition:        Evaluate a condition and branch
 *   - wait_until_event: Wait until a specific event occurs
 *   - split:            A/B split with percentage allocation
 *   - exit:             End the journey
 *
 * Exit conditions are checked BEFORE every action node (SRS requirement).
 *
 * Graph format:
 * {
 *   "start_node": "node_1",
 *   "nodes": {
 *     "node_1": {
 *       "type": "action",
 *       "config": { "channel": "zns", "template_code": "WELCOME_01" },
 *       "next": "node_2"
 *     },
 *     "node_2": {
 *       "type": "wait",
 *       "config": { "duration_hours": 24 },
 *       "next": "node_3"
 *     },
 *     "node_3": {
 *       "type": "condition",
 *       "config": { "field": "event_count.order.completed", "op": "gte", "value": 1 },
 *       "next_true": "node_4",
 *       "next_false": "node_5"
 *     }
 *   }
 * }
 */

interface JourneyGraph {
  start_node: string;
  nodes: Record<string, JourneyNode>;
}

interface JourneyNode {
  type:
    | 'action'
    | 'action_reward'
    | 'wait'
    | 'condition'
    | 'wait_until_event'
    | 'split'
    | 'exit';
  config: Record<string, any>;
  next?: string;
  next_true?: string;
  next_false?: string;
  branches?: { percentage: number; next: string }[];
}

@Injectable()
export class JourneyEngineService {
  private readonly logger = new Logger(JourneyEngineService.name);

  constructor(
    private prisma: PrismaService,
    private channelRouter: ChannelRouterService,
  ) {}

  /**
   * Enter a customer into a journey. Creates a journey_run.
   */
  async enterJourney(
    journeyId: string,
    customerId: string,
    context?: Record<string, any>,
  ): Promise<string | null> {
    const journey = await this.prisma.journey.findUnique({
      where: { id: journeyId },
    });
    if (!journey || journey.status !== 'active') {
      this.logger.warn(`Journey ${journeyId} not found or not active`);
      return null;
    }

    // Check if customer is already in this journey
    const existingRun = await this.prisma.journey_run.findFirst({
      where: {
        journey_id: journeyId,
        customer_id: customerId,
        status: 'active',
      },
    });
    if (existingRun) {
      this.logger.debug(
        `Customer ${customerId} already in journey ${journey.code}`,
      );
      return existingRun.id;
    }

    // Handle control group
    if (journey.hasControlGroup) {
      const isControl =
        Math.random() * 100 < Number(journey.controlGroupPct || 0);
      if (isControl) {
        await this.prisma.campaign_control_group.create({
          data: {
            customer_id: customerId,
            journey_id: journeyId,
            group: 'control',
          },
        });
        this.logger.log(
          `Customer ${customerId} assigned to control group for ${journey.code}`,
        );
        return null;
      }
    }

    const graph = journey.graph as unknown as JourneyGraph;

    // Create journey run
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

    // Start processing from the first node
    await this.processNode(
      run.id,
      customerId,
      graph,
      graph.start_node,
      journey.exitConditions as any,
    );

    return run.id;
  }

  /**
   * Process a single node in the journey graph.
   * This is the core graph walker.
   */
  async processNode(
    runId: string,
    customerId: string,
    graph: JourneyGraph,
    nodeId: string,
    exitConditions: Record<string, any> | null,
  ): Promise<void> {
    const node = graph.nodes[nodeId];
    if (!node) {
      this.logger.warn(`Node ${nodeId} not found in journey graph`);
      await this.exitRun(runId, 'node_not_found');
      return;
    }

    // EXIT CONDITIONS MUST BE CHECKED BEFORE EVERY ACTION NODE (SRS requirement)
    if (node.type === 'action') {
      const shouldExit = await this.checkExitConditions(
        customerId,
        exitConditions,
      );
      if (shouldExit) {
        await this.exitRun(runId, 'exit_condition_met');
        return;
      }
    }

    // Log step
    await this.prisma.journey_step_log.create({
      data: {
        journey_run_id: runId,
        node_id: nodeId,
        node_type: node.type,
        action: node.config?.template_code || node.config?.event_type || null,
        result: {},
      },
    });

    // Process based on node type
    switch (node.type) {
      case 'action':
        await this.handleAction(runId, customerId, node, graph, exitConditions);
        break;
      case 'action_reward':
        await this.handleActionReward(
          runId,
          customerId,
          node,
          graph,
          exitConditions,
        );
        break;
      case 'wait':
        await this.handleWait(runId, nodeId, node);
        break;
      case 'wait_until_event':
        await this.handleWaitUntilEvent(runId, nodeId, node);
        break;
      case 'condition':
        await this.handleCondition(
          runId,
          customerId,
          node,
          graph,
          exitConditions,
        );
        break;
      case 'split':
        await this.handleSplit(runId, customerId, node, graph, exitConditions);
        break;
      case 'exit':
        await this.exitRun(runId, node.config?.reason || 'journey_complete');
        break;
    }
  }

  /**
   * Resume a journey run after a wait period.
   * Called by the journey queue worker when a delayed job fires.
   */
  async resumeRun(runId: string): Promise<void> {
    const run = await this.prisma.journey_run.findUnique({
      where: { id: runId },
      include: { journey: true },
    });

    if (!run || run.status !== 'active') return;

    const graph = run.journey.graph as unknown as JourneyGraph;
    const currentNode = graph.nodes[run.current_node_id!];

    if (!currentNode) {
      await this.exitRun(runId, 'node_not_found');
      return;
    }

    // Move to the next node
    const nextNodeId = currentNode.next;
    if (!nextNodeId) {
      await this.exitRun(runId, 'no_next_node');
      return;
    }

    await this.prisma.journey_run.update({
      where: { id: runId },
      data: { current_node_id: nextNodeId },
    });

    await this.processNode(
      runId,
      run.customer_id,
      graph,
      nextNodeId,
      run.journey.exitConditions as any,
    );
  }

  // ---------- Node handlers ----------

  private async handleAction(
    runId: string,
    customerId: string,
    node: JourneyNode,
    graph: JourneyGraph,
    exitConditions: Record<string, any> | null,
  ): Promise<void> {
    const { channel, template_code } = node.config;

    // Send via Channel Router (the gatekeeper)
    const result = await this.channelRouter.send({
      customerId,
      channel,
      templateCode: template_code,
      journeyRunId: runId,
    });

    // Update step log with result
    this.logger.log(
      `Journey action: sent ${channel}/${template_code} to ${customerId} — ${result.sent ? 'sent' : result.reason}`,
    );

    // Continue to next node
    if (node.next) {
      await this.prisma.journey_run.update({
        where: { id: runId },
        data: { current_node_id: node.next },
      });
      await this.processNode(
        runId,
        customerId,
        graph,
        node.next,
        exitConditions,
      );
    } else {
      await this.exitRun(runId, 'journey_complete');
    }
  }

  private async handleActionReward(
    runId: string,
    customerId: string,
    node: JourneyNode,
    graph: JourneyGraph,
    exitConditions: Record<string, any> | null,
  ): Promise<void> {
    const rewards = node.config.rewards || [];
    this.logger.log(
      `Journey action_reward: evaluating ${rewards.length} rewards for ${customerId}`,
    );

    // Ensure loyalty account exists
    let loyaltyAccount = await this.prisma.loyaltyAccount.findUnique({
      where: { customerId },
    });
    if (!loyaltyAccount) {
      loyaltyAccount = await this.prisma.loyaltyAccount.create({
        data: { customerId },
      });
    }

    // Load customer context for condition evaluation
    const customerProfile = await this.prisma.customer.findUnique({
      where: { id: customerId },
    });
    const babyCount = await this.prisma.baby.count({ where: { customerId } });

    const rewardContexts: any[] = [];

    for (const r of rewards) {
      // --- Evaluate conditions ---
      if (r.condition) {
        const conditionPassed = await this.evaluateRewardCondition(
          r.condition,
          customerId,
          customerProfile,
          loyaltyAccount,
          babyCount,
        );
        if (!conditionPassed) continue;
      }

      const rType = r.type || r.rewardType || 'points';
      let finalAmount = Number(r.value) || 0;
      if (r.valueType === 'formula' && r.formulaValue) {
        finalAmount = this.evaluateSimpleFormula(
          r.formulaValue,
          customerProfile,
          loyaltyAccount,
          babyCount,
        );
      }

      // --- Grant reward by type ---
      if (rType === 'points' && finalAmount > 0) {
        await this.prisma.loyaltyAccount.update({
          where: { id: loyaltyAccount!.id },
          data: {
            pointsBalance: { increment: finalAmount },
            pointsLifetime: { increment: finalAmount },
            transactions: {
              create: {
                customerId,
                type: 'earn',
                source: 'journey_reward',
                points: finalAmount,
                balanceAfter:
                  Number(loyaltyAccount!.pointsBalance) + finalAmount,
                description: `Journey Reward`,
                idempotencyKey: `jrn-reward-${runId}-points-${Date.now()}`,
              },
            },
          },
        });
        // Refresh balance for subsequent rewards
        loyaltyAccount = await this.prisma.loyaltyAccount.findUnique({
          where: { id: loyaltyAccount!.id },
        });
        rewardContexts.push({
          type: 'points',
          pointsEarned: finalAmount,
          condition: r.condition,
        });
      } else if (rType === 'free_gift' && r.rewardId) {
        const qty = Math.max(1, finalAmount);
        for (let i = 0; i < qty; i++) {
          await this.prisma.rewardRedemption.create({
            data: {
              loyaltyAccountId: loyaltyAccount!.id,
              customerId,
              rewardId: r.rewardId,
              pointsSpent: 0,
              status: 'pending',
              idempotencyKey: `jrn-gift-${runId}-${r.rewardId}-${Date.now()}-${i}`,
            },
          });
        }
        rewardContexts.push({
          type: 'free_gift',
          rewardId: r.rewardId,
          quantity: qty,
          condition: r.condition,
        });
      } else if (rType === 'voucher' && r.rewardId) {
        const qty = Math.max(1, finalAmount);
        for (let i = 0; i < qty; i++) {
          await this.prisma.rewardRedemption.create({
            data: {
              loyaltyAccountId: loyaltyAccount!.id,
              customerId,
              rewardId: r.rewardId,
              pointsSpent: 0,
              status: 'issued',
              idempotencyKey: `jrn-voucher-${runId}-${r.rewardId}-${Date.now()}-${i}`,
            },
          });
        }
        rewardContexts.push({
          type: 'voucher',
          rewardId: r.rewardId,
          quantity: qty,
          condition: r.condition,
        });
      } else if (rType === 'product' && r.productId) {
        const qty = Math.max(1, finalAmount);
        const orderNum = `JRN-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
        await this.prisma.order.create({
          data: {
            customerId,
            orderNumber: orderNum,
            status: 'pending',
            totalAmount: 0,
            isInternal: true,
            isGwp: false,
            orderedAt: new Date(),
            items: {
              create: {
                productId: r.productId,
                quantity: qty,
                unitPrice: 0,
                totalPrice: 0,
              },
            },
          },
        });
        rewardContexts.push({
          type: 'product',
          productId: r.productId,
          quantity: qty,
          condition: r.condition,
        });
      }
    }

    // Store reward results in the run context
    if (rewardContexts.length > 0) {
      const run = await this.prisma.journey_run.findUnique({
        where: { id: runId },
      });
      const existingCtx = (run?.context as any) || {};
      await this.prisma.journey_run.update({
        where: { id: runId },
        data: { context: { ...existingCtx, rewards: rewardContexts } },
      });
    }

    if (node.next) {
      await this.prisma.journey_run.update({
        where: { id: runId },
        data: { current_node_id: node.next },
      });
      await this.processNode(
        runId,
        customerId,
        graph,
        node.next,
        exitConditions,
      );
    } else {
      await this.exitRun(runId, 'journey_complete');
    }
  }

  /**
   * Evaluate a reward condition (supports single rule, multi-rule with AND/OR).
   */
  private async evaluateRewardCondition(
    condition: any,
    customerId: string,
    customerProfile: any,
    loyaltyAccount: any,
    babyCount: number,
  ): Promise<boolean> {
    if (typeof condition === 'string') {
      if (condition === 'has_child') return babyCount > 0;
      return true;
    }

    if (typeof condition === 'object') {
      let rules: any[] = [];
      let logicalOperator = 'AND';

      if (condition.rules) {
        rules = condition.rules;
        logicalOperator = condition.logicalOperator || 'AND';
      } else if (condition.field) {
        rules = [condition];
      }

      if (rules.length === 0) return true;

      let passedAll = true;
      let passedAny = false;

      for (const rule of rules) {
        let targetValue: any = null;

        const def = await this.prisma.conditionDefinition.findUnique({
          where: { code: rule.field },
        });
        if (!def) {
          targetValue = customerProfile ? customerProfile[rule.field] : null;
          if (rule.field === 'customerType' && !targetValue)
            targetValue = 'End user';
          if (rule.field === 'babyCount') targetValue = babyCount;
          if (rule.field === 'pointsBalance')
            targetValue = Number(loyaltyAccount.pointsBalance);
        } else {
          if (def.source === 'customer') {
            targetValue = customerProfile ? customerProfile[def.code] : null;
            if (def.code === 'customer_type' && !targetValue)
              targetValue = 'End user';
          } else if (def.source === 'loyalty_account') {
            if (def.code === 'pointsBalance')
              targetValue = Number(loyaltyAccount.pointsBalance);
            else if (def.code === 'total_purchase_amount') {
              const ordersAgg = await this.prisma.order.aggregate({
                where: { customerId, status: 'completed' },
                _sum: { totalAmount: true },
              });
              targetValue = Number(ordersAgg._sum.totalAmount || 0);
            } else {
              targetValue = loyaltyAccount[def.code];
            }
          } else if (def.source === 'database_query') {
            if (def.code === 'babyCount') targetValue = babyCount;
          }
        }

        const { operator, value } = rule;
        const strTarget = String(targetValue).toLowerCase();
        const strVal = String(value).toLowerCase();
        let conditionMet = false;

        switch (operator) {
          case 'equals':
            conditionMet = strTarget === strVal;
            break;
          case 'not_equals':
            conditionMet = strTarget !== strVal;
            break;
          case 'greater_than':
            conditionMet = Number(targetValue) > Number(value);
            break;
          case 'greater_than_or_equal':
            conditionMet = Number(targetValue) >= Number(value);
            break;
          case 'less_than':
            conditionMet = Number(targetValue) < Number(value);
            break;
          case 'less_than_or_equal':
            conditionMet = Number(targetValue) <= Number(value);
            break;
          case 'contains':
            conditionMet = strTarget.includes(strVal);
            break;
          default:
            conditionMet = false;
        }

        if (!conditionMet) passedAll = false;
        if (conditionMet) passedAny = true;
      }

      return logicalOperator === 'OR' ? passedAny : passedAll;
    }

    return true;
  }

  /**
   * Simple formula evaluator for reward quantities.
   */
  private evaluateSimpleFormula(
    formula: string,
    customerProfile: any,
    loyaltyAccount: any,
    babyCount: number,
  ): number {
    try {
      let expression = formula;
      const vars = formula.match(/[a-zA-Z_]\w*/g) || [];
      for (const v of [...new Set(vars)]) {
        let val = 0;
        if (v === 'babyCount') val = babyCount;
        else if (v === 'pointsBalance')
          val = Number(loyaltyAccount?.pointsBalance || 0);
        else if (customerProfile && customerProfile[v] !== undefined)
          val = Number(customerProfile[v]) || 0;
        expression = expression.replace(
          new RegExp(`\\b${v}\\b`, 'g'),
          String(val),
        );
      }
      const result = Function(`"use strict"; return (${expression})`)();
      return Math.round(Number(result) || 0);
    } catch {
      this.logger.warn(`Formula evaluation failed: ${formula}`);
      return 0;
    }
  }

  private async handleWait(
    runId: string,
    nodeId: string,
    node: JourneyNode,
  ): Promise<void> {
    const durationMs = (node.config.duration_hours || 1) * 60 * 60 * 1000;

    // Update current node and pause — a BullMQ delayed job will resume this
    await this.prisma.journey_run.update({
      where: { id: runId },
      data: { current_node_id: nodeId },
    });

    this.logger.log(
      `Journey wait: run ${runId} paused for ${node.config.duration_hours}h`,
    );
    // The queue worker will add a delayed job to resume this run
  }

  private async handleWaitUntilEvent(
    runId: string,
    nodeId: string,
    node: JourneyNode,
  ): Promise<void> {
    // Park the journey run — it will be resumed when the target event arrives
    await this.prisma.journey_run.update({
      where: { id: runId },
      data: { current_node_id: nodeId },
    });

    this.logger.log(
      `Journey wait_until_event: run ${runId} waiting for event ${node.config.event_type}`,
    );
  }

  private async handleCondition(
    runId: string,
    customerId: string,
    node: JourneyNode,
    graph: JourneyGraph,
    exitConditions: Record<string, any> | null,
  ): Promise<void> {
    const conditionMet = await this.evaluateSimpleCondition(
      customerId,
      node.config,
    );
    const nextNodeId = conditionMet ? node.next_true : node.next_false;

    if (!nextNodeId) {
      await this.exitRun(runId, 'no_branch_target');
      return;
    }

    await this.prisma.journey_run.update({
      where: { id: runId },
      data: { current_node_id: nextNodeId },
    });

    await this.processNode(
      runId,
      customerId,
      graph,
      nextNodeId,
      exitConditions,
    );
  }

  private async handleSplit(
    runId: string,
    customerId: string,
    node: JourneyNode,
    graph: JourneyGraph,
    exitConditions: Record<string, any> | null,
  ): Promise<void> {
    if (!node.branches?.length) {
      await this.exitRun(runId, 'no_split_branches');
      return;
    }

    // Random assignment based on percentages
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

    await this.processNode(
      runId,
      customerId,
      graph,
      selectedBranch,
      exitConditions,
    );
  }

  // ---------- Helpers ----------

  private async checkExitConditions(
    customerId: string,
    exitConditions: Record<string, any> | null,
  ): Promise<boolean> {
    if (!exitConditions || Object.keys(exitConditions).length === 0)
      return false;

    // Check common exit conditions
    if (exitConditions.event_type) {
      const eventCount = await this.prisma.$queryRaw`
        SELECT COUNT(*)::int as count FROM event
        WHERE customer_id = ${customerId}::uuid
          AND event_type = ${exitConditions.event_type}
          AND occurred_at >= NOW() - INTERVAL '30 days'
      `;
      if (eventCount[0]?.count > 0) return true;
    }

    return false;
  }

  private async evaluateSimpleCondition(
    customerId: string,
    config: Record<string, any>,
  ): Promise<boolean> {
    const { field, op, value } = config;

    // Handle event count conditions
    if (field?.startsWith('event_count.')) {
      const eventType = field.replace('event_count.', '');
      const result = await this.prisma.$queryRaw`
        SELECT COUNT(*)::int as count FROM event
        WHERE customer_id = ${customerId}::uuid AND event_type = ${eventType}
      `;
      const count = result[0]?.count || 0;

      switch (op) {
        case 'gte':
          return count >= value;
        case 'gt':
          return count > value;
        case 'eq':
          return count === value;
        case 'lt':
          return count < value;
        default:
          return false;
      }
    }

    return false;
  }

  private async exitRun(runId: string, reason: string): Promise<void> {
    await this.prisma.journey_run.update({
      where: { id: runId },
      data: { status: 'completed', exited_at: new Date(), exit_reason: reason },
    });
    this.logger.log(`Journey run ${runId} exited: ${reason}`);
  }
}
