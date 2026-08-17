import React, { useState } from 'react';
import { Card, Typography, Table, Tag, Space, Row, Col, Statistic, Progress, Tabs, Button, Modal, Form, Input, Select, message, Popconfirm, Badge, Drawer } from 'antd';
import { MailOutlined, CheckCircleOutlined, CloseCircleOutlined, StopOutlined, PlusOutlined, DeleteOutlined, SettingOutlined, HistoryOutlined, AppstoreOutlined } from '@ant-design/icons';

const { Title } = Typography;

const messageLogData = [
  { id: '1', customer: 'Nguyen Thi Mai', channel: 'zns', template: 'WELCOME_BABY_01', status: 'delivered', sentAt: '2026-07-29 20:15' },
  { id: '2', customer: 'Tran Van Duc', channel: 'email', template: 'SECOND_ORDER_REC_01', status: 'sent', sentAt: '2026-07-29 20:12' },
  { id: '3', customer: 'Le Thi Hoa', channel: 'zns', template: 'CART_RESCUE_01', status: 'delivered', sentAt: '2026-07-29 19:58' },
  { id: '4', customer: 'Pham Minh Tuan', channel: 'email', template: 'REPLENISH_REMIND_01', status: 'suppressed', sentAt: '2026-07-29 19:45', reason: 'no_consent' },
  { id: '5', customer: 'Vo Thi Lan', channel: 'sms', template: 'REACTIVATION_FINAL_01', status: 'delivered', sentAt: '2026-07-29 19:30' },
  { id: '6', customer: 'Hoang Van Nam', channel: 'zns', template: 'CHURN_ALERT_01', status: 'failed', sentAt: '2026-07-29 19:15', reason: 'invalid_phone' },
  { id: '7', customer: 'Dang Thi Thao', channel: 'zns', template: 'TIER_NUDGE_01', status: 'deferred', sentAt: '2026-07-29 21:05', reason: 'quiet_hours' },
  { id: '8', customer: 'Bui Quoc Viet', channel: 'email', template: 'BABY_STAGE_TIPS_01', status: 'delivered', sentAt: '2026-07-29 18:50' },
];

const initialTemplates = [
  { 
    id: '1', 
    code: 'MSG_WELCOME_ONBOARDING', 
    name: 'Zalo OA: Welcome & Congrats', 
    channel: 'zns', 
    status: 'active',
    content: 'Hi {{customer.name}}! Welcome to Pigeon Vietnam! To celebrate your registration, we have added {{points.amount}} points and a Free Tote Bag to your account!'
  },
  { id: '2', code: 'MSG_BIRTHDAY', name: 'Zalo OA: Happy Birthday', channel: 'zns', status: 'active', content: 'Happy Birthday {{customer.name}}! Enjoy 15% off today!' },
  { id: '3', code: 'MSG_PROMO', name: 'SMS: Promotional Broadcast', channel: 'sms', status: 'draft', content: '' },
  { id: '4', code: 'MSG_ORDER_CONFIRM', name: 'Email: Order Confirmation', channel: 'email', status: 'active', content: 'Thank you for your order.' },
];

const logColumns = [
  {
    title: 'Customer',
    dataIndex: 'customer',
    key: 'customer',
    render: (text: string) => <span style={{ fontWeight: 500 }}>{text}</span>,
  },
  {
    title: 'Channel',
    dataIndex: 'channel',
    key: 'channel',
    render: (ch: string) => {
      const colors: Record<string, string> = { zns: 'blue', email: 'green', sms: 'orange' };
      return <Tag color={colors[ch]}>{ch.toUpperCase()}</Tag>;
    },
  },
  {
    title: 'Template',
    dataIndex: 'template',
    key: 'template',
    render: (t: string) => <Tag>{t}</Tag>,
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (s: string) => {
      const config: Record<string, { color: string; icon: React.ReactNode }> = {
        delivered: { color: 'success', icon: <CheckCircleOutlined /> },
        sent: { color: 'processing', icon: <MailOutlined /> },
        suppressed: { color: 'warning', icon: <StopOutlined /> },
        failed: { color: 'error', icon: <CloseCircleOutlined /> },
        deferred: { color: 'default', icon: <MailOutlined /> },
      };
      const c = config[s] || config.sent;
      return <Tag color={c.color} icon={c.icon}>{s.toUpperCase()}</Tag>;
    },
  },
  {
    title: 'Reason',
    dataIndex: 'reason',
    key: 'reason',
    render: (r: string) => r ? <Tag color="volcano">{r}</Tag> : '—',
  },
  { title: 'Sent At', dataIndex: 'sentAt', key: 'sentAt' },
];

export default function MessagesPage() {
  // Use localStorage to persist state across tab changes and reloads
  const [templates, setTemplates] = useState(() => {
    const saved = localStorage.getItem('demo_message_templates');
    return saved ? JSON.parse(saved) : initialTemplates;
  });

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [editingTemplate, setEditingTemplate] = useState<any | null>(null);
  const [form] = Form.useForm();
  const [drawerForm] = Form.useForm();

  // Save to localStorage whenever templates change
  React.useEffect(() => {
    localStorage.setItem('demo_message_templates', JSON.stringify(templates));
  }, [templates]);

  const handleAddTemplate = (values: any) => {
    const newTemplate = {
      id: Date.now().toString(),
      code: values.code,
      name: values.name,
      channel: values.channel,
      status: 'draft',
    };
    setTemplates([...templates, newTemplate]);
    setIsModalVisible(false);
    form.resetFields();
    message.success('Message Template created successfully');
  };

  const handleDeleteTemplate = (id: string) => {
    setTemplates(templates.filter(t => t.id !== id));
    message.success('Template deleted');
  };

  const handleSaveConfig = (values: any) => {
    setTemplates(templates.map(t => t.id === editingTemplate.id ? { ...t, ...values, status: 'active' } : t));
    setDrawerVisible(false);
    message.success('Message Template configuration saved successfully!');
  };

  const templateColumns = [
    {
      title: 'Template Name',
      key: 'name',
      render: (_: any, r: any) => (
        <Space orientation="vertical" size={0}>
          <span style={{ fontWeight: 600 }}>{r.name}</span>
          <Tag style={{ fontSize: 11 }}>{r.code}</Tag>
        </Space>
      ),
    },
    {
      title: 'Channel',
      dataIndex: 'channel',
      key: 'channel',
      render: (ch: string) => {
        const colors: Record<string, string> = { zns: 'blue', email: 'green', sms: 'orange' };
        return <Tag color={colors[ch]}>{ch.toUpperCase()}</Tag>;
      },
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
      title: 'Actions',
      key: 'actions',
      render: (_: any, r: any) => (
        <Space size="small">
          <Button 
            type="text" 
            icon={<SettingOutlined />} 
            onClick={() => {
              setEditingTemplate(r);
              drawerForm.setFieldsValue({
                name: r.name,
                content: r.content || ''
              });
              setDrawerVisible(true);
            }} 
          />
          <Popconfirm title="Delete this template?" onConfirm={() => handleDeleteTemplate(r.id)}>
            <Button type="text" danger icon={<DeleteOutlined />} />
          </Popconfirm>
        </Space>
      ),
    }
  ];

  return (
    <div>
      <Tabs defaultActiveKey="templates">
        
        {/* TEMPLATES TAB */}
        <Tabs.TabPane tab={<span><AppstoreOutlined /> Message Templates</span>} key="templates">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
            <div>
              <Title level={3} style={{ margin: 0, fontWeight: 700 }}>Message Templates</Title>
              <Typography.Text type="secondary">Define reusable message templates to use in your Automation Journeys.</Typography.Text>
            </div>
            <Button type="primary" icon={<PlusOutlined />} onClick={() => setIsModalVisible(true)}>Add Template</Button>
          </div>

          <Card variant="outlined" style={{ borderRadius: 10, borderColor: '#e5e7eb' }}>
            <Table columns={templateColumns} dataSource={templates} rowKey="id" pagination={false} />
          </Card>
        </Tabs.TabPane>

        {/* LOGS TAB */}
        <Tabs.TabPane tab={<span><HistoryOutlined /> Delivery Logs</span>} key="logs">
          <Title level={3} style={{ margin: '0 0 20px', fontWeight: 700 }}>Delivery Logs</Title>

          <Row gutter={[12, 12]} style={{ marginBottom: 16 }}>
            <Col span={6}>
              <Card variant="outlined" style={{ borderRadius: 10, borderColor: '#e5e7eb' }}>
                <Statistic title="Sent Today" value={1280} prefix={<MailOutlined />} />
              </Card>
            </Col>
            <Col span={6}>
              <Card variant="outlined" style={{ borderRadius: 10, borderColor: '#e5e7eb' }}>
                <Statistic title="Delivered" value={1205} prefix={<CheckCircleOutlined />} styles={{ content: { color: '#10b981' } }} />
                <Progress percent={94.1} size="small" strokeColor="#10b981" style={{ marginTop: 4 }} />
              </Card>
            </Col>
            <Col span={6}>
              <Card variant="outlined" style={{ borderRadius: 10, borderColor: '#e5e7eb' }}>
                <Statistic title="Suppressed" value={52} prefix={<StopOutlined />} styles={{ content: { color: '#f59e0b' } }} />
              </Card>
            </Col>
            <Col span={6}>
              <Card variant="outlined" style={{ borderRadius: 10, borderColor: '#e5e7eb' }}>
                <Statistic title="Failed" value={23} prefix={<CloseCircleOutlined />} styles={{ content: { color: '#ef4444' } }} />
              </Card>
            </Col>
          </Row>

          <Card variant="outlined" style={{ borderRadius: 10, borderColor: '#e5e7eb' }}>
            <Table columns={logColumns} dataSource={messageLogData} rowKey="id" pagination={{ pageSize: 15 }} />
          </Card>
        </Tabs.TabPane>

      </Tabs>

      {/* CREATE MODAL */}
      <Modal
        title="Create Message Template"
        open={isModalVisible}
        onCancel={() => { setIsModalVisible(false); form.resetFields(); }}
        onOk={() => form.submit()}
        okText="Create"
      >
        <Form form={form} layout="vertical" onFinish={handleAddTemplate}>
          <Form.Item name="name" label="Template Name" rules={[{ required: true }]}>
            <Input placeholder="e.g. Zalo OA: Welcome Message" />
          </Form.Item>
          <Form.Item name="code" label="Template Code" rules={[{ required: true }]}>
            <Input placeholder="e.g. MSG_WELCOME_ZALO" />
          </Form.Item>
          <Form.Item name="channel" label="Channel" rules={[{ required: true }]}>
            <Select placeholder="Select Channel">
              <Select.Option value="zns">Zalo ZNS</Select.Option>
              <Select.Option value="email">Email</Select.Option>
              <Select.Option value="sms">SMS</Select.Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>

      {/* CONFIG DRAWER */}
      <Drawer
        title="Message Configuration"
        width={500}
        onClose={() => setDrawerVisible(false)}
        open={drawerVisible}
        destroyOnClose
        extra={
          <Space>
            <Button onClick={() => setDrawerVisible(false)}>Cancel</Button>
            <Button type="primary" onClick={() => drawerForm.submit()}>Save Config</Button>
          </Space>
        }
      >
        {editingTemplate && (
          <Form form={drawerForm} layout="vertical" onFinish={handleSaveConfig}>
            <div style={{ marginBottom: 24, padding: 16, background: '#f8fafc', borderRadius: 8, border: '1px solid #e5e7eb' }}>
              <Typography.Text type="secondary" style={{ display: 'block', marginBottom: 4 }}>Template Code</Typography.Text>
              <Typography.Text strong>{editingTemplate.code}</Typography.Text>
              <div style={{ marginTop: 8 }}>
                <Tag color={editingTemplate.channel === 'email' ? 'green' : editingTemplate.channel === 'zns' ? 'blue' : 'orange'}>
                  {editingTemplate.channel.toUpperCase()}
                </Tag>
              </div>
            </div>

            <Form.Item name="name" label="Template Name" rules={[{ required: true }]}>
              <Input />
            </Form.Item>

            <Form.Item 
              name="content" 
              label="Message Body" 
              rules={[{ required: true, message: 'Message content cannot be empty' }]}
              extra="You can use dynamic variables like {{customer.name}}, {{points.balance}}, or {{reward.name}} which will be automatically replaced when the message is sent."
            >
              <Input.TextArea rows={8} placeholder={`Hi {{customer.name}},\n\nYour order is confirmed!`} />
            </Form.Item>
          </Form>
        )}
      </Drawer>
    </div>
  );
}
