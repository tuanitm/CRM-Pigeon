import React, { useState, useEffect } from 'react';
import { Drawer, Tabs, Form, Button, Space, Card, Select, InputNumber, Row, Col, Typography, message, Timeline, Input, Divider } from 'antd';
import { PlusOutlined, DeleteOutlined, SaveOutlined, GiftOutlined, NodeIndexOutlined } from '@ant-design/icons';
import { productApi, loyaltyApi, dynamicActionApi, conditionDefinitionApi, journeyApi } from '../services/api';
import { initialJourneysData } from '../pages/JourneysPage';

const { Title, Text } = Typography;

export default function JourneyBuilderDrawer({ journeyCode, onClose }: { journeyCode: string; onClose: () => void }) {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [journeyId, setJourneyId] = useState<string | null>(null);
  
  // Data for dropdowns
  const [products, setProducts] = useState<any[]>([]);
  const [rewards, setRewards] = useState<any[]>([]);
  const [dynamicActions, setDynamicActions] = useState<any[]>([]);
  const [dictionaryConditions, setDictionaryConditions] = useState<any[]>([]);

  const fetchOptions = async () => {
    setLoading(true);
    try {
      const [prodRes, rewRes, daRes, condRes, jrnRes] = await Promise.all([
        productApi.list().catch(() => []),
        loyaltyApi.listRewards().catch(() => []),
        dynamicActionApi.list().catch(() => []),
        conditionDefinitionApi.list().catch(() => []),
        journeyApi.list().catch(() => []),
      ]);
      setProducts(prodRes || []);
      setRewards(rewRes || []);
      setDynamicActions(daRes || []);
      setDictionaryConditions(condRes || []);
      
      const journey = (jrnRes || []).find((j: any) => j.code === journeyCode);
      if (journey) {
        setJourneyId(journey.id);
      }
      
      
      // Load Journey config from DB graph
      if (journey && journey.graph && Object.keys(journey.graph).length > 0) {
        // Re-build simple form structure from graph
        let steps: any[] = [];
        const startNode = journey.graph.start_node;
        let curr = startNode;
        
        if (journey.triggerEvent) {
          steps.push({ type: 'trigger', actionId: journey.triggerEvent });
        }
        
        let hasRewardStep = false;
        while (curr && journey.graph.nodes[curr]) {
          const node = journey.graph.nodes[curr];
          if (node.type === 'action') {
            steps.push({ type: 'action_message', messageTemplate: node.config?.template_code });
          } else if (node.type === 'action_reward') {
            steps.push({ type: 'action_reward', messageTemplate: null });
            hasRewardStep = true;
          } else if (node.type === 'wait') {
            steps.push({ type: 'delay', delayHours: node.config?.duration_hours });
          }
          curr = node.next;
        }
        
        // Auto-inject Grant Rewards step if the graph doesn't have one
        if (!hasRewardStep) {
          const triggerIdx = steps.findIndex(s => s.type === 'trigger');
          steps.splice(triggerIdx + 1, 0, { type: 'action_reward', messageTemplate: null });
        }
        
        let storedRewards: any[] = [];
        Object.values(journey.graph.nodes).forEach((n: any) => {
          if (n.type === 'action_reward' && n.config?.rewards) {
            storedRewards = n.config.rewards;
          }
        });
        
        const mappedRewards = storedRewards.map((r: any) => {
          if (r.type === 'points') return { type: 'points', valueType: r.valueType || 'fixed', amount: r.value, formulaValue: r.formulaValue, condition: r.condition };
          if (r.type === 'product') return { type: 'product', valueType: r.valueType || 'fixed', itemId: r.productId, amount: r.value, formulaValue: r.formulaValue, condition: r.condition };
          if (r.type === 'free_gift') return { type: 'gwp', valueType: r.valueType || 'fixed', itemId: r.rewardId, amount: r.value, formulaValue: r.formulaValue, condition: r.condition };
          if (r.type === 'voucher') return { type: 'voucher', valueType: r.valueType || 'fixed', itemId: r.rewardId, amount: r.value, formulaValue: r.formulaValue, condition: r.condition };
          return null;
        }).filter(Boolean);
        
        form.setFieldsValue({
          rewards: mappedRewards,
          steps: steps.length > 0 ? steps : [{ type: 'trigger', actionId: null }, { type: 'action_reward', messageTemplate: null }]
        });
      } else {
        // Default state for new journeys — always includes a Grant Rewards step
        form.setFieldsValue({
          rewards: [],
          steps: [
            { type: 'trigger', actionId: null },
            { type: 'action_reward', messageTemplate: null },
          ]
        });
      }
    } catch (err) {
      console.error(err);
      message.error('Failed to load configuration options');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (journeyCode) {
      form.resetFields();
      fetchOptions();
    }
  }, [journeyCode]);

  const handleSave = async (values: any) => {
    setSaving(true);
    try {
      const formattedRewards = (values.rewards || []).map((r: any) => {
        if (r.type === 'points') return { type: 'points', valueType: r.valueType || 'fixed', value: r.amount, formulaValue: r.formulaValue, condition: r.condition || null };
        if (r.type === 'product') return { type: 'product', valueType: r.valueType || 'fixed', value: r.amount, formulaValue: r.formulaValue, productId: r.itemId, condition: r.condition || null };
        if (r.type === 'gwp') return { type: 'free_gift', valueType: r.valueType || 'fixed', value: r.amount, formulaValue: r.formulaValue, rewardId: r.itemId, condition: r.condition || null };
        if (r.type === 'voucher') return { type: 'voucher', valueType: r.valueType || 'fixed', value: r.amount, formulaValue: r.formulaValue, rewardId: r.itemId, condition: r.condition || null };
        return null;
      }).filter(Boolean);

      // Ensure journey exists in DB — find by ID or create by code
      let currentJourneyId = journeyId;
      if (!currentJourneyId) {
        // Journey not yet in DB — create it
        try {
          // Derive friendly name from code or initialJourneysData
          const knownJourney = initialJourneysData.find(j => j.code === journeyCode);
          const friendlyName = knownJourney?.name || journeyCode.replace(/^JRN_/, '').replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
          const newJourney = await journeyApi.create({
            code: journeyCode,
            name: friendlyName,
            trigger: 'manual',
            status: 'draft',
          });
          currentJourneyId = newJourney.id;
          setJourneyId(newJourney.id);
        } catch (err: any) {
          // If creation failed (e.g. code already exists), try to find it from the list
          const allJourneys = await journeyApi.list();
          const existing = allJourneys.find((j: any) => j.code === journeyCode);
          if (existing) {
            currentJourneyId = existing.id;
            setJourneyId(existing.id);
          } else {
            throw new Error('Could not create or find journey: ' + err.message);
          }
        }
      }

      // Build Graph Structure from sequential steps
      const nodes: Record<string, any> = {};
      let startNode = 'node_1';
      let triggerEvent: string | null = null;
      
      let nodeCounter = 1;
      let prevNodeId: string | null = null;
      
      (values.steps || []).forEach((step: any) => {
        if (step.type === 'trigger') {
          triggerEvent = step.actionId;
          return; // Triggers dictate entry, not nodes
        }
        
        const nodeId = `node_${nodeCounter++}`;
        
        if (prevNodeId && nodes[prevNodeId]) {
          nodes[prevNodeId].next = nodeId;
        } else {
          startNode = nodeId;
        }
        
        if (step.type === 'action_message') {
          nodes[nodeId] = { type: 'action', config: { channel: 'zns', template_code: step.messageTemplate } };
        } else if (step.type === 'action_reward') {
          nodes[nodeId] = { type: 'action_reward', config: { rewards: formattedRewards } };
        } else if (step.type === 'delay') {
          nodes[nodeId] = { type: 'wait', config: { duration_hours: step.delayHours || 24 } };
        } else if (step.type === 'condition') {
          nodes[nodeId] = { type: 'condition', config: { field: step.conditionField || 'tier', op: 'eq', value: step.conditionValue } };
        }
        
        prevNodeId = nodeId;
      });
      
      // Add exit node at the end
      if (prevNodeId && nodes[prevNodeId]) {
        nodes[prevNodeId].next = 'node_exit';
      }
      nodes['node_exit'] = { type: 'exit', config: { reason: 'journey_complete' } };

      const graph = { start_node: startNode, nodes };

      await journeyApi.update(currentJourneyId, {
        graph,
        triggerEvent,
      });
      
      message.success(`Journey ${journeyCode} configuration saved successfully!`);
      onClose();
    } catch (err: any) {
      console.error('Save error:', err);
      message.error('Failed to save configuration: ' + (err.message || 'Unknown error'));
    } finally {
      setSaving(false);
    }
  };

  // --- Render Helpers ---

  const renderRewardItem = (field: any, remove: (name: number) => void) => {
    const type = form.getFieldValue(['rewards', field.name, 'type']);
    return (
      <Card size="small" style={{ marginBottom: 16, borderColor: '#e5e7eb' }} key={field.key}>
        <Row gutter={16} align="middle">
          <Col span={7}>
            <Form.Item {...field} name={[field.name, 'type']} rules={[{ required: true, message: 'Type required' }]} style={{ marginBottom: 0 }}>
              <Select placeholder="Reward Type" onChange={() => form.setFieldValue(['rewards', field.name, 'itemId'], undefined)}>
                <Select.Option value="points">Bonus Points</Select.Option>
                <Select.Option value="product">Brand Product</Select.Option>
                <Select.Option value="gwp">Free Gift (GWP)</Select.Option>
                <Select.Option value="voucher">Discount Voucher</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={14}>
            <Row gutter={8}>
              {type !== 'points' && (
                <Col span={12}>
                  {type === 'product' && (
                    <Form.Item {...field} name={[field.name, 'itemId']} rules={[{ required: true, message: 'Product required' }]} style={{ marginBottom: 0 }}>
                      <Select placeholder="Select Product" showSearch optionFilterProp="children">
                        {products.map(p => <Select.Option key={p.id} value={p.id}>{p.name}</Select.Option>)}
                      </Select>
                    </Form.Item>
                  )}
                  {type === 'gwp' && (
                    <Form.Item {...field} name={[field.name, 'itemId']} rules={[{ required: true, message: 'Gift required' }]} style={{ marginBottom: 0 }}>
                      <Select placeholder="Select Gift" showSearch optionFilterProp="children">
                        {rewards.filter(r => r.category === 'gwp' || r.category === 'gift').map(r => <Select.Option key={r.id} value={r.id}>{r.name}</Select.Option>)}
                      </Select>
                    </Form.Item>
                  )}
                  {type === 'voucher' && (
                    <Form.Item {...field} name={[field.name, 'itemId']} rules={[{ required: true, message: 'Voucher required' }]} style={{ marginBottom: 0 }}>
                      <Select placeholder="Select Voucher" showSearch optionFilterProp="children">
                        {rewards.filter(r => r.category === 'voucher' || r.category === 'discount').map(r => <Select.Option key={r.id} value={r.id}>{r.name}</Select.Option>)}
                      </Select>
                    </Form.Item>
                  )}
                </Col>
              )}
              <Col span={type === 'points' ? 24 : 12}>
                <Input.Group compact>
                  <Form.Item {...field} name={[field.name, 'valueType']} style={{ marginBottom: 0, width: '40%' }} initialValue="fixed">
                    <Select placeholder="Type" onChange={() => {
                      form.setFieldValue(['rewards', field.name, 'amount'], undefined);
                      form.setFieldValue(['rewards', field.name, 'formulaValue'], undefined);
                    }}>
                      <Select.Option value="fixed">Fixed Value</Select.Option>
                      <Select.Option value="formula">Formula</Select.Option>
                    </Select>
                  </Form.Item>
                  
                  <Form.Item noStyle shouldUpdate={(prev, curr) => prev.rewards?.[field.name]?.valueType !== curr.rewards?.[field.name]?.valueType}>
                    {() => {
                      const vType = form.getFieldValue(['rewards', field.name, 'valueType']) || 'fixed';
                      if (vType === 'fixed') {
                        return (
                          <Form.Item {...field} name={[field.name, 'amount']} rules={[{ required: true, message: 'Required' }]} style={{ marginBottom: 0, width: '60%' }}>
                            <InputNumber min={1} placeholder={type === 'points' ? "Amount" : "Qty"} style={{ width: '100%' }} />
                          </Form.Item>
                        );
                      }
                      return (
                        <Form.Item {...field} name={[field.name, 'formulaValue']} rules={[{ required: true, message: 'Required' }]} style={{ marginBottom: 0, width: '60%' }}>
                          <Input placeholder="e.g. total_purchase_amount / 100" />
                        </Form.Item>
                      );
                    }}
                  </Form.Item>
                </Input.Group>
                <Form.Item noStyle shouldUpdate={(prev, curr) => prev.rewards?.[field.name]?.valueType !== curr.rewards?.[field.name]?.valueType}>
                  {() => {
                    if (form.getFieldValue(['rewards', field.name, 'valueType']) === 'formula') {
                      return <div style={{ fontSize: 11, color: '#6b7280', marginTop: 4 }}>Available variables: {dictionaryConditions.filter(c => c.isActive).map(c => c.code).join(', ')}</div>;
                    }
                    return null;
                  }}
                </Form.Item>
              </Col>
            </Row>
          </Col>
          <Col span={2} style={{ textAlign: 'right' }}>
            <Button type="text" danger icon={<DeleteOutlined />} onClick={() => remove(field.name)} />
          </Col>
        </Row>
        <div style={{ marginTop: 12, padding: 12, background: '#f8fafc', borderRadius: 6, border: '1px solid #e2e8f0' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8, alignItems: 'center' }}>
            <Space>
              <Text strong style={{ fontSize: 13 }}>Dynamic Condition (Optional)</Text>
              <Form.Item {...field} name={[field.name, 'condition', 'logicalOperator']} style={{ marginBottom: 0, width: 80 }} initialValue="AND">
                <Select size="small">
                  <Select.Option value="AND">AND</Select.Option>
                  <Select.Option value="OR">OR</Select.Option>
                </Select>
              </Form.Item>
            </Space>
            <Button 
              type="text" 
              size="small" 
              danger 
              onClick={() => {
                form.setFieldValue(['rewards', field.name, 'condition'], null);
              }}
            >
              Clear Condition
            </Button>
          </div>
          
          <Form.List name={[field.name, 'condition', 'rules']}>
            {(ruleFields, { add: addRule, remove: removeRule }) => (
              <>
                {ruleFields.map((ruleField) => (
                  <Row gutter={8} key={ruleField.key} style={{ marginBottom: 8 }}>
                    <Col span={8}>
                      <Form.Item {...ruleField} name={[ruleField.name, 'field']} style={{ marginBottom: 0 }}>
                        <Select placeholder="Select Field" allowClear>
                          <Select.Option value="babyCount">Total Children</Select.Option>
                          <Select.Option value="tier">Customer Tier</Select.Option>
                          <Select.Option value="customerType">Customer Type</Select.Option>
                          <Select.Option value="pointsBalance">Points Balance</Select.Option>
                          {dictionaryConditions.filter(c => c.isActive && !['babyCount', 'tier', 'customerType', 'pointsBalance'].includes(c.code)).map(c => (
                            <Select.Option key={c.code} value={c.code}>{c.name}</Select.Option>
                          ))}
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col span={7}>
                      <Form.Item {...ruleField} name={[ruleField.name, 'operator']} style={{ marginBottom: 0 }}>
                        <Select placeholder="Operator" allowClear>
                          <Select.Option value="equals">Equals (==)</Select.Option>
                          <Select.Option value="not_equals">Not Equals (!=)</Select.Option>
                          <Select.Option value="greater_than">Greater Than (&gt;)</Select.Option>
                          <Select.Option value="greater_than_or_equal">Greater Than or Equal (&gt;=)</Select.Option>
                          <Select.Option value="less_than">Less Than (&lt;)</Select.Option>
                          <Select.Option value="less_than_or_equal">Less Than or Equal (&lt;=)</Select.Option>
                          <Select.Option value="contains">Contains</Select.Option>
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col span={7}>
                      <Form.Item {...ruleField} name={[ruleField.name, 'value']} style={{ marginBottom: 0 }}>
                        <Input placeholder="Value" />
                      </Form.Item>
                    </Col>
                    <Col span={2} style={{ textAlign: 'right' }}>
                      <Button type="text" danger icon={<DeleteOutlined />} onClick={() => removeRule(ruleField.name)} />
                    </Col>
                  </Row>
                ))}
                <Button type="dashed" size="small" onClick={() => addRule()} block icon={<PlusOutlined />}>Add Rule</Button>
              </>
            )}
          </Form.List>
        </div>
      </Card>
    );
  };

  const renderStepItem = (field: any, remove: (name: number) => void, index: number) => {
    const type = form.getFieldValue(['steps', field.name, 'type']);
    
    let content = null;
    if (type === 'trigger') {
      content = (
        <Form.Item {...field} name={[field.name, 'actionId']} rules={[{ required: true }]} style={{ marginBottom: 0 }}>
          <Select placeholder="Select Trigger Event" showSearch>
            <Select.OptGroup label="System Events">
              <Select.Option value="customer.registered">Customer Registered</Select.Option>
              <Select.Option value="customer.profile_completed">Customer Profile Completed</Select.Option>
              <Select.Option value="customer.birthday_today">Customer Birthday Today</Select.Option>
              <Select.Option value="order.completed">Order Completed</Select.Option>
              <Select.Option value="order.cancelled">Order Cancelled</Select.Option>
              <Select.Option value="baby.profile_created">Baby Profile Created</Select.Option>
              <Select.Option value="cart.abandoned">Cart Abandoned</Select.Option>
              <Select.Option value="replenishment.due">Replenishment Due</Select.Option>
              <Select.Option value="churn.risk_detected">Churn Risk Detected</Select.Option>
              <Select.Option value="segment_entered">Segment Entered</Select.Option>
            </Select.OptGroup>
            <Select.OptGroup label="Dynamic Actions">
              {dynamicActions.map(da => (
                <Select.Option key={da.id} value={`dynamic_action.${da.actionCode || da.id.slice(0,8)}`}>
                  {da.name} ({da.trigger})
                </Select.Option>
              ))}
            </Select.OptGroup>
          </Select>
        </Form.Item>
      );
    } else if (type === 'action_reward') {
      content = <Text type="secondary">Automatically awards the items configured in the "Rewards Pool" tab.</Text>;
    } else if (type === 'action_message') {
      content = (
        <Form.Item {...field} name={[field.name, 'messageTemplate']} rules={[{ required: true, message: 'Select a template' }]} style={{ marginBottom: 0 }}>
          <Select placeholder="Select Message Template" showSearch allowClear>
            <Select.OptGroup label="Zalo OA">
              <Select.Option value="WELCOME_ONBOARDING_01">Welcome & Congrats</Select.Option>
              <Select.Option value="WELCOME_BABY_01">Welcome Baby</Select.Option>
              <Select.Option value="BIRTHDAY_WISH_01">Happy Birthday</Select.Option>
              <Select.Option value="SECOND_ORDER_REC_01">Second Order Recommendation</Select.Option>
              <Select.Option value="REPLENISH_REMIND_01">Replenishment Reminder</Select.Option>
              <Select.Option value="CHURN_ALERT_01">Churn Alert</Select.Option>
              <Select.Option value="CART_RESCUE_01">Cart Rescue</Select.Option>
              <Select.Option value="TIER_NUDGE_01">Tier Upgrade Nudge</Select.Option>
              <Select.Option value="REACTIVATION_01">Win-back Reactivation</Select.Option>
              <Select.Option value="QUIZ_INVITE_01">Quiz Invite</Select.Option>
            </Select.OptGroup>
            <Select.OptGroup label="Email">
              <Select.Option value="BABY_STAGE_TIPS_01">Baby Stage Tips</Select.Option>
              <Select.Option value="SECOND_ORDER_REMIND_01">Second Order Reminder</Select.Option>
              <Select.Option value="REPLENISH_FOLLOWUP_01">Replenishment Follow-up</Select.Option>
              <Select.Option value="CHURN_INCENTIVE_01">Churn Incentive Offer</Select.Option>
              <Select.Option value="CART_RESCUE_EMAIL_01">Cart Rescue Email</Select.Option>
              <Select.Option value="TIER_PROGRESS_01">Tier Progress Update</Select.Option>
              <Select.Option value="REACTIVATION_OFFER_01">Reactivation Offer</Select.Option>
            </Select.OptGroup>
            <Select.OptGroup label="SMS">
              <Select.Option value="REACTIVATION_FINAL_01">Reactivation Final SMS</Select.Option>
            </Select.OptGroup>
          </Select>
        </Form.Item>
      );
    }

    return (
      <Timeline.Item key={field.key} color={type === 'trigger' ? 'green' : 'blue'}>
        <Card size="small" style={{ marginBottom: 16, borderColor: '#e5e7eb' }} title={
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Form.Item {...field} name={[field.name, 'type']} style={{ marginBottom: 0, width: 200 }}>
              <Select placeholder="Step Type" bordered={false} style={{ fontWeight: 600 }}>
                <Select.Option value="trigger">Trigger Event</Select.Option>
                <Select.Option value="action_reward">Action: Grant Rewards</Select.Option>
                <Select.Option value="action_message">Action: Send Message</Select.Option>
                <Select.Option value="condition">Condition: If/Else</Select.Option>
              </Select>
            </Form.Item>
            {index > 0 && <Button type="text" danger icon={<DeleteOutlined />} onClick={() => remove(field.name)} size="small" />}
          </div>
        }>
          {content}
        </Card>
      </Timeline.Item>
    );
  };

  return (
    <Form form={form} layout="vertical" onFinish={handleSave}>
      <Tabs defaultActiveKey="flow">
        {/* TAB 1: FLOW BUILDER */}
        <Tabs.TabPane tab={<span><NodeIndexOutlined /> Flow Builder</span>} key="flow">
          <div style={{ padding: '16px 8px' }}>
            <Form.List name="steps">
              {(fields, { add, remove }) => (
                <>
                  <Timeline style={{ marginTop: 16 }}>
                    {fields.map((field, index) => renderStepItem(field, remove, index))}
                    <Timeline.Item color="gray">
                      <Button type="dashed" onClick={() => add({ type: 'action_message' })} icon={<PlusOutlined />}>
                        Add Action Step
                      </Button>
                    </Timeline.Item>
                  </Timeline>
                </>
              )}
            </Form.List>
          </div>
        </Tabs.TabPane>

        {/* TAB 2: REWARD CONFIG */}
        <Tabs.TabPane tab={<span><GiftOutlined /> Rewards Pool</span>} key="rewards">
          <div style={{ padding: '16px 8px' }}>
            <Typography.Paragraph type="secondary">
              Configure the dynamic items that will be awarded to the customer during the "Grant Rewards" action step.
            </Typography.Paragraph>
            <Form.List name="rewards">
              {(fields, { add, remove }) => (
                <>
                  {fields.map(field => renderRewardItem(field, remove))}
                  <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                    Add Reward
                  </Button>
                </>
              )}
            </Form.List>
          </div>
        </Tabs.TabPane>
      </Tabs>

      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '16px 24px', background: '#fff', borderTop: '1px solid #f0f0f0', textAlign: 'right', zIndex: 10 }}>
        <Space>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="primary" htmlType="submit" icon={<SaveOutlined />} loading={saving}>
            Save Journey Configuration
          </Button>
        </Space>
      </div>
    </Form>
  );
}
