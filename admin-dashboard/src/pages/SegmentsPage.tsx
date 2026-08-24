import React, { useState, useEffect } from 'react';
import { Card, Typography, Table, Tag, Space, Badge, Row, Col, Statistic, Button, Modal, Form, Input, Select, message } from 'antd';
import { TeamOutlined, ThunderboltOutlined, ClockCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { segmentApi } from '../services/api';

const { Title, Text } = Typography;

const columns = [
  {
    title: 'Segment',
    key: 'name',
    render: (_: any, r: any) => (
      <Space orientation="vertical" size={0}>
        <span style={{ fontWeight: 600 }}>{r.name}</span>
        <Tag style={{ fontSize: 11 }}>{r.code}</Tag>
      </Space>
    ),
  },
  {
    title: 'Members',
    key: 'memberCount',
    sorter: (a: any, b: any) => a.memberCount - b.memberCount,
    render: (_: any, r: any) => <span style={{ fontWeight: 600, fontSize: 16 }}>{r.memberCount?.toLocaleString()}</span>,
  },
  {
    title: 'Refresh',
    key: 'refreshMode',
    render: (_: any, r: any) => (
      <Tag icon={r.refreshMode === 'realtime' ? <ThunderboltOutlined /> : <ClockCircleOutlined />}
        color={r.refreshMode === 'realtime' ? 'green' : 'blue'}>
        {r.refreshMode === 'realtime' ? 'Realtime' : 'Scheduled'}
      </Tag>
    ),
  },
  {
    title: 'Type',
    key: 'isSystem',
    render: (_: any, r: any) => r.isSystem ? <Tag color="purple">System</Tag> : <Tag>Custom</Tag>,
  },
  {
    title: 'Status',
    key: 'isActive',
    render: (_: any, r: any) => <Badge status={r.isActive ? 'success' : 'default'} text={r.isActive ? 'Active' : 'Draft'} />,
  },
  {
    title: 'Action',
    key: 'action',
    render: (_: any, r: any, index: number, __?: any) => (
      <Button type="link" size="small" onClick={() => (window as any).handleEditSegment?.(r)}>Edit</Button>
    ),
  },
];

export default function SegmentsPage() {
  const [activeTab, setActiveTab] = useState<'list' | 'events' | 'pending'>('list');
  const [segments, setSegments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingCode, setEditingCode] = useState<string | null>(null);
  const [form] = Form.useForm();

  const loadData = () => {
    setLoading(true);
    segmentApi.list()
      .then(setSegments)
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleSeed = async () => {
    const hide = message.loading('Seeding default segments...', 0);
    try {
      await segmentApi.seed();
      message.success('Default segments loaded successfully!');
      loadData();
    } catch (err: any) {
      message.error(err.message || 'Failed to seed segments');
    } finally {
      hide();
    }
  };

  const handleSubmit = async (values: any) => {
    try {
      const parsedRules = JSON.parse(values.rules);
      if (editingCode) {
        await segmentApi.update(editingCode, { ...values, rules: parsedRules });
        message.success('Segment updated successfully!');
      } else {
        await segmentApi.create({ ...values, rules: parsedRules });
        message.success('Segment created successfully!');
      }
      setIsModalVisible(false);
      form.resetFields();
      setEditingCode(null);
      loadData();
    } catch (err: any) {
      if (err instanceof SyntaxError) {
        message.error('Invalid JSON syntax in rules');
      } else {
        message.error(err.message || 'Failed to save segment');
      }
    }
  };

  const handleEdit = (segment: any) => {
    setEditingCode(segment.code);
    form.setFieldsValue({
      name: segment.name,
      code: segment.code,
      refreshMode: segment.refreshMode,
      rules: JSON.stringify(segment.rules, null, 2),
    });
    setIsModalVisible(true);
  };
  
  // Attach handleEdit to window for the columns render to access it easily
  (window as any).handleEditSegment = handleEdit;

  const totalMembers = segments.reduce((sum, s) => sum + (s.memberCount || 0), 0);

  return (
    <div style={{ display: 'flex', gap: 0 }}>
      {/* Sub-sidebar */}
      <div className="page-sub-sidebar" style={{ marginLeft: -20, marginTop: -20, marginBottom: -20 }}>

        <div
          className={`sub-sidebar-item ${activeTab === 'list' ? 'sub-sidebar-item--active' : ''}`}
          onClick={() => setActiveTab('list')}
        >
          <TeamOutlined /> Segment List
        </div>
        <div
          className={`sub-sidebar-item ${activeTab === 'events' ? 'sub-sidebar-item--active' : ''}`}
          onClick={() => setActiveTab('events')}
        >
          <ThunderboltOutlined /> Event Stream
        </div>
        <div
          className={`sub-sidebar-item ${activeTab === 'pending' ? 'sub-sidebar-item--active' : ''}`}
          onClick={() => setActiveTab('pending')}
        >
          <ClockCircleOutlined /> Pending Events
        </div>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: '0 0 0 24px' }}>
        {activeTab === 'list' ? (
          <>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
              <Title level={3} style={{ margin: 0, fontWeight: 700 }}>Segment List</Title>
              <Space>
                {segments.length === 0 && (
                  <Button onClick={handleSeed}>Load Default Segments</Button>
                )}
                <Button type="primary" icon={<PlusOutlined />} onClick={() => { setEditingCode(null); form.resetFields(); setIsModalVisible(true); }}>Create New</Button>
              </Space>
            </div>

            <Row gutter={[12, 12]} style={{ marginBottom: 16 }}>
              <Col span={6}>
                <Card variant="outlined" style={{ borderRadius: 10, borderColor: '#e5e7eb' }}>
                  <Statistic title="Total Segments" value={segments.length} prefix={<TeamOutlined />} />
                </Card>
              </Col>
              <Col span={6}>
                <Card variant="outlined" style={{ borderRadius: 10, borderColor: '#e5e7eb' }}>
                  <Statistic title="Total Members" value={totalMembers} />
                </Card>
              </Col>
              <Col span={6}>
                <Card variant="outlined" style={{ borderRadius: 10, borderColor: '#e5e7eb' }}>
                  <Statistic title="Realtime Segment" value={segments.filter((s) => s.refreshMode === 'realtime').length} prefix={<ThunderboltOutlined />} />
                </Card>
              </Col>
              <Col span={6}>
                <Card variant="outlined" style={{ borderRadius: 10, borderColor: '#e5e7eb' }}>
                  <Statistic title="System Segment" value={segments.filter((s) => s.isSystem).length} />
                </Card>
              </Col>
            </Row>

            <Card variant="outlined" style={{ borderRadius: 10, borderColor: '#e5e7eb' }}>
              <Table columns={columns} dataSource={segments} rowKey="code" pagination={false} loading={loading} />
            </Card>
          </>
        ) : (
          <div>
            <Title level={4} style={{ margin: '0 0 16px', fontWeight: 700 }}>
              {activeTab === 'events' ? 'Event Stream' : 'Pending Events'}
            </Title>
            <Card variant="outlined" style={{ borderRadius: 10, borderColor: '#e5e7eb' }}>
              <Text type="secondary">Feature under development.</Text>
            </Card>
          </div>
        )}
      </div>

      <Modal
        title={editingCode ? "Edit Custom Segment" : "Create Custom Segment"}
        open={isModalVisible}
        onCancel={() => { setIsModalVisible(false); setEditingCode(null); form.resetFields(); }}
        onOk={() => form.submit()}
        width={700}
      >
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item name="name" label="Segment Name" rules={[{ required: true }]}>
                <Input placeholder="e.g. VIP Customers" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="code" label="Segment Code" rules={[{ required: true }]}>
                <Input placeholder="e.g. vip_customers" disabled={!!editingCode} />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item name="refreshMode" label="Evaluation Mode" initialValue="scheduled">
            <Select>
              <Select.Option value="scheduled">Scheduled (Every 30 minutes)</Select.Option>
              <Select.Option value="realtime">Realtime (On every event)</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item 
            name="rules" 
            label="Rules Definition (JSON)" 
            rules={[{ required: true }]}
            extra="Input valid JSON Rule DSL here. E.g. { 'operator': 'AND', 'conditions': [ ... ] }"
          >
            <Input.TextArea rows={8} style={{ fontFamily: 'monospace' }} placeholder={`{\n  "operator": "AND",\n  "conditions": []\n}`} />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
