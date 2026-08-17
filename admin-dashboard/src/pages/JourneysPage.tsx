import React, { useState } from 'react';
import { Card, Typography, Table, Tag, Space, Badge, Row, Col, Statistic, Button, Drawer, Popconfirm, message, Modal, Form, Input, Select } from 'antd';
import { NodeIndexOutlined, PlayCircleOutlined, CheckCircleOutlined, PauseCircleOutlined, PlusOutlined, SettingOutlined, DeleteOutlined } from '@ant-design/icons';
import JourneyBuilderDrawer from '../components/JourneyBuilderDrawer';
import { dynamicActionApi } from '../services/api';

const { Title } = Typography;

export const initialJourneysData = [
  { code: 'JRN_WELCOME_ONBOARDING', name: 'Welcome Onboarding', trigger: 'customer.registered', status: 'active', activeRuns: 0, completed: 0, controlGroup: false },
  { code: 'JRN_WELCOME_BABY', name: 'Welcome Baby Onboarding', trigger: 'baby.profile_created', status: 'active', activeRuns: 124, completed: 892, controlGroup: false },
  { code: 'JRN_SECOND_ORDER', name: 'Convert to Second Order', trigger: 'order.completed', status: 'active', activeRuns: 67, completed: 445, controlGroup: false },
  { code: 'JRN_REPLENISH', name: 'Replenishment Reminder', trigger: 'replenishment.due', status: 'active', activeRuns: 89, completed: 1_204, controlGroup: false },
  { code: 'JRN_CHURN_ALERT', name: 'Early Churn Warning', trigger: 'churn.risk_detected', status: 'active', activeRuns: 33, completed: 156, controlGroup: true },
  { code: 'JRN_CART_RESCUE', name: 'Abandoned Cart Recovery', trigger: 'cart.abandoned', status: 'active', activeRuns: 45, completed: 312, controlGroup: false },
  { code: 'JRN_TIER_NUDGE', name: 'Tier Upgrade Motivation', trigger: 'segment_entered', status: 'draft', activeRuns: 0, completed: 0, controlGroup: false },
  { code: 'JRN_REACTIVATION', name: 'Win-back Reactivation', trigger: 'segment_entered', status: 'active', activeRuns: 28, completed: 92, controlGroup: true },
];

export default function JourneysPage() {
  // Use localStorage to persist state across tab changes and reloads
  const [journeys, setJourneys] = useState(() => {
    const saved = localStorage.getItem('demo_journeys');
    return saved ? JSON.parse(saved) : initialJourneysData;
  });

  const [editingJourney, setEditingJourney] = useState<string | null>(null);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [addModalVisible, setAddModalVisible] = useState(false);
  const [dynamicActions, setDynamicActions] = useState<any[]>([]);
  const [form] = Form.useForm();

  // Save to localStorage whenever journeys change
  React.useEffect(() => {
    localStorage.setItem('demo_journeys', JSON.stringify(journeys));
  }, [journeys]);

  React.useEffect(() => {
    // Fetch dynamic actions to link as potential triggers
    dynamicActionApi.list()
      .then(data => setDynamicActions(data || []))
      .catch(console.error);
  }, []);

  const triggerOptions = [
    { value: 'customer.registered', label: 'Customer Registered' },
    { value: 'order.completed', label: 'Order Completed' },
    { value: 'cart.abandoned', label: 'Cart Abandoned' },
    { value: 'baby.profile_created', label: 'Baby Profile Created' },
    { value: 'segment_entered', label: 'Segment Entered' },
    ...dynamicActions.map(da => ({
      value: da.trigger,
      label: `Dynamic Action: ${da.name} (${da.trigger})`
    }))
  ];

  const handleAdd = (values: any) => {
    const newJourney = {
      code: values.code || `JRN_${Date.now()}`,
      name: values.name,
      trigger: values.trigger,
      status: 'draft',
      activeRuns: 0,
      completed: 0,
      controlGroup: false,
    };
    setJourneys([...journeys, newJourney]);
    setAddModalVisible(false);
    form.resetFields();
    message.success('Journey created successfully');
  };

  const handleDelete = (code: string) => {
    setJourneys(journeys.filter(j => j.code !== code));
    message.success('Journey deleted successfully');
  };

  const totalActive = journeys.reduce((sum, j) => sum + j.activeRuns, 0);
  const totalCompleted = journeys.reduce((sum, j) => sum + j.completed, 0);

  const columns = [
    {
      title: 'Journey',
      key: 'name',
      render: (_: any, r: any) => (
        <Space orientation="vertical" size={0}>
          <span style={{ fontWeight: 600 }}>{r.name}</span>
          <Tag style={{ fontSize: 11 }}>{r.code}</Tag>
        </Space>
      ),
    },
    {
      title: 'Trigger',
      dataIndex: 'trigger',
      key: 'trigger',
      render: (t: string) => <Tag color="blue">{t}</Tag>,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (s: string) => (
        <Badge status={s === 'active' ? 'success' : 'default'} text={s.toUpperCase()} />
      ),
    },
    {
      title: 'Active Runs',
      dataIndex: 'activeRuns',
      key: 'activeRuns',
      align: 'right' as const,
      render: (v: number) => <strong>{v.toLocaleString()}</strong>,
    },
    {
      title: 'Completed',
      dataIndex: 'completed',
      key: 'completed',
      align: 'right' as const,
      render: (v: number) => <span style={{ color: '#6b7280' }}>{v.toLocaleString()}</span>,
    },
    {
      title: 'Action',
      key: 'action',
      render: (_: any, r: any) => (
        <Space size="small">
          <Button 
            type="text" 
            icon={<SettingOutlined />} 
            onClick={() => {
              setEditingJourney(r.code);
              setDrawerVisible(true);
            }}
          />
          <Popconfirm title="Delete this journey?" onConfirm={() => handleDelete(r.code)}>
            <Button type="text" danger icon={<DeleteOutlined />} />
          </Popconfirm>
        </Space>
      ),
    }
  ];

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
        <Title level={3} style={{ margin: 0, fontWeight: 700 }}>Journeys</Title>
        <Button type="primary" icon={<PlusOutlined />} onClick={() => setAddModalVisible(true)}>Add New</Button>
      </div>

      <Row gutter={[12, 12]} style={{ marginBottom: 16 }}>
        <Col span={6}>
          <Card variant="outlined" style={{ borderRadius: 10, borderColor: '#e5e7eb' }}>
            <Statistic title="Total Journeys" value={journeys.length} prefix={<NodeIndexOutlined />} />
          </Card>
        </Col>
        <Col span={6}>
          <Card variant="outlined" style={{ borderRadius: 10, borderColor: '#e5e7eb' }}>
            <Statistic title="Active" value={totalActive} prefix={<PlayCircleOutlined />} styles={{ content: { color: '#3b82f6' } }} />
          </Card>
        </Col>
        <Col span={6}>
          <Card variant="outlined" style={{ borderRadius: 10, borderColor: '#e5e7eb' }}>
            <Statistic title="Completed" value={totalCompleted} prefix={<CheckCircleOutlined />} styles={{ content: { color: '#10b981' } }} />
          </Card>
        </Col>
        <Col span={6}>
          <Card variant="outlined" style={{ borderRadius: 10, borderColor: '#e5e7eb' }}>
            <Statistic title="Drafts" value={journeys.filter((j) => j.status === 'draft').length} prefix={<PauseCircleOutlined />} />
          </Card>
        </Col>
      </Row>

      <Card variant="outlined" style={{ borderRadius: 10, borderColor: '#e5e7eb' }}>
        <Table 
          dataSource={journeys} 
          columns={columns} 
          pagination={false} />
      </Card>

      <Drawer
        title={editingJourney === 'JRN_WELCOME_ONBOARDING' ? "Welcome Onboarding Pipeline" : "Journey Configuration"}
        width={700}
        onClose={() => setDrawerVisible(false)}
        open={drawerVisible}
        destroyOnClose
        styles={{ body: { padding: 0 } }}
      >
        {editingJourney && <JourneyBuilderDrawer journeyCode={editingJourney} onClose={() => setDrawerVisible(false)} />}
      </Drawer>

      <Modal
        title="Create New Journey"
        open={addModalVisible}
        onCancel={() => { setAddModalVisible(false); form.resetFields(); }}
        onOk={() => form.submit()}
        okText="Create"
      >
        <Form form={form} layout="vertical" onFinish={handleAdd}>
          <Form.Item name="name" label="Journey Name" rules={[{ required: true }]}>
            <Input placeholder="e.g. Birthday Campaign" />
          </Form.Item>
          <Form.Item name="code" label="Journey Code" rules={[{ required: true }]}>
            <Input placeholder="e.g. JRN_BIRTHDAY" />
          </Form.Item>
          <Form.Item name="trigger" label="Trigger Event" rules={[{ required: true }]}>
            <Select 
              showSearch
              placeholder="e.g. customer.birthday or select a Dynamic Action" 
              options={triggerOptions}
              allowClear
            />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
