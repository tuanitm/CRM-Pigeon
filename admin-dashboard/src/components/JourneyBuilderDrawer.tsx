import React, { useState, useEffect } from 'react';
import { Drawer, Tabs, Form, Button, Space, Card, Select, InputNumber, Row, Col, Typography, message, Timeline, Input, Divider } from 'antd';
import { PlusOutlined, DeleteOutlined, SaveOutlined, GiftOutlined, NodeIndexOutlined } from '@ant-design/icons';
import { productApi, loyaltyApi, dynamicActionApi } from '../services/api';

const { Title, Text } = Typography;

export default function JourneyBuilderDrawer({ journeyCode, onClose }: { journeyCode: string; onClose: () => void }) {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  
  // Data for dropdowns
  const [products, setProducts] = useState<any[]>([]);
  const [rewards, setRewards] = useState<any[]>([]);
  const [dynamicActions, setDynamicActions] = useState<any[]>([]);

  const fetchOptions = async () => {
    setLoading(true);
    try {
      const [prodRes, rewRes, daRes] = await Promise.all([
        productApi.list().catch(() => []),
        loyaltyApi.listRewards().catch(() => []),
        dynamicActionApi.list().catch(() => [])
      ]);
      setProducts(prodRes || []);
      setRewards(rewRes || []);
      setDynamicActions(daRes || []);
      
      // Try to load existing config if it's the welcome onboarding (for backwards compat demo)
      if (journeyCode === 'JRN_WELCOME_ONBOARDING') {
        const rule = await loyaltyApi.getWelcomeRule().catch(() => null);
        const mappedRewards: any[] = [];
        if (rule && rule.pointsFormula) {
          const formula = rule.pointsFormula;
          if (formula.rewards && Array.isArray(formula.rewards)) {
            formula.rewards.forEach((r: any) => {
              if (r.type === 'points') mappedRewards.push({ type: 'points', amount: r.value, condition: r.condition });
              if (r.type === 'product') mappedRewards.push({ type: 'product', itemId: r.productId, condition: r.condition });
              if (r.type === 'free_gift') mappedRewards.push({ type: 'gwp', itemId: r.rewardId, condition: r.condition });
              if (r.type === 'voucher') mappedRewards.push({ type: 'voucher', itemId: r.rewardId, condition: r.condition });
            });
          }
        }
          
        form.setFieldsValue({
          rewards: mappedRewards.length > 0 ? mappedRewards : [{ type: 'points', amount: 500 }],
          steps: [
            { type: 'trigger', actionId: 'action.welcome_registration' },
            { type: 'action_reward', messageTemplate: null },
            { type: 'action_message', messageTemplate: 'MSG_WELCOME_ONBOARDING' },
          ]
        });
      } else {
        // Default empty state for new journeys
        form.setFieldsValue({
          rewards: [],
          steps: [
            { type: 'trigger', actionId: null },
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
      // In a real implementation, this would save the full Flow JSON to the Journey backend model.
      // For the demo, we will persist the Welcome Onboarding rewards to loyaltyApi to keep backwards compatibility.
      if (journeyCode === 'JRN_WELCOME_ONBOARDING') {
        const formattedRewards = (values.rewards || []).map((r: any) => {
          if (r.type === 'points') return { type: 'points', value: r.amount, condition: r.condition || null };
          if (r.type === 'product') return { type: 'product', productId: r.itemId, condition: r.condition || null };
          if (r.type === 'gwp') return { type: 'free_gift', rewardId: r.itemId, condition: r.condition || null };
          if (r.type === 'voucher') return { type: 'voucher', rewardId: r.itemId, condition: r.condition || null };
          return null;
        }).filter(Boolean);

        await loyaltyApi.upsertWelcomeRule({
          isActive: true,
          points: { rewards: formattedRewards }
        });
      }
      
      message.success(`Journey ${journeyCode} configuration saved successfully!`);
      onClose();
    } catch (err: any) {
      message.error('Failed to save configuration: ' + err.message);
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
            {type === 'points' && (
              <Form.Item {...field} name={[field.name, 'amount']} rules={[{ required: true, message: 'Amount required' }]} style={{ marginBottom: 0 }}>
                <InputNumber min={1} placeholder="Points Amount" style={{ width: '100%' }} />
              </Form.Item>
            )}
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
            {!type && <Text type="secondary">Select a type first</Text>}
          </Col>
          <Col span={6}>
            <Form.Item {...field} name={[field.name, 'condition']} style={{ marginBottom: 0 }}>
              <Select placeholder="Condition (Optional)" allowClear>
                <Select.Option value="has_child">Has Child</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={1} style={{ textAlign: 'right' }}>
            <Button type="text" danger icon={<DeleteOutlined />} onClick={() => remove(field.name)} />
          </Col>
        </Row>
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
            <Select.Option value="customer.registered">System: Customer Registered</Select.Option>
            <Select.Option value="order.completed">System: Order Completed</Select.Option>
            {dynamicActions.map(da => (
              <Select.Option key={da.trigger} value={da.trigger}>Dynamic Action: {da.name}</Select.Option>
            ))}
          </Select>
        </Form.Item>
      );
    } else if (type === 'action_reward') {
      content = <Text type="secondary">Automatically awards the items configured in the "Rewards Pool" tab.</Text>;
    } else if (type === 'action_message') {
      content = (
        <Form.Item {...field} name={[field.name, 'messageTemplate']} rules={[{ required: true }]} style={{ marginBottom: 0 }}>
          <Select placeholder="Select Message Template">
            <Select.Option value="MSG_WELCOME_ONBOARDING">Zalo OA: Welcome & Congrats</Select.Option>
            <Select.Option value="MSG_BIRTHDAY">Zalo OA: Happy Birthday</Select.Option>
            <Select.Option value="MSG_PROMO">SMS: Promotional Broadcast</Select.Option>
            <Select.Option value="MSG_ORDER_CONFIRM">Email: Order Confirmation</Select.Option>
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
