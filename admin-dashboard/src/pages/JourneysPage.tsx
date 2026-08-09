import React from 'react';
import { Card, Typography, Table, Tag, Space, Badge, Row, Col, Statistic, Button } from 'antd';
import { NodeIndexOutlined, PlayCircleOutlined, CheckCircleOutlined, PauseCircleOutlined, PlusOutlined } from '@ant-design/icons';

const { Title } = Typography;

const journeysData = [
  { code: 'JRN_WELCOME_BABY', name: 'Welcome Baby Onboarding', trigger: 'baby.profile_created', status: 'active', activeRuns: 124, completed: 892, controlGroup: false },
  { code: 'JRN_SECOND_ORDER', name: 'Convert to Second Order', trigger: 'order.completed', status: 'active', activeRuns: 67, completed: 445, controlGroup: false },
  { code: 'JRN_REPLENISH', name: 'Replenishment Reminder', trigger: 'replenishment.due', status: 'active', activeRuns: 89, completed: 1_204, controlGroup: false },
  { code: 'JRN_CHURN_ALERT', name: 'Early Churn Warning', trigger: 'churn.risk_detected', status: 'active', activeRuns: 33, completed: 156, controlGroup: true },
  { code: 'JRN_CART_RESCUE', name: 'Abandoned Cart Recovery', trigger: 'cart.abandoned', status: 'active', activeRuns: 45, completed: 312, controlGroup: false },
  { code: 'JRN_TIER_NUDGE', name: 'Tier Upgrade Motivation', trigger: 'segment_entered', status: 'draft', activeRuns: 0, completed: 0, controlGroup: false },
  { code: 'JRN_REACTIVATION', name: 'Win-back Reactivation', trigger: 'segment_entered', status: 'active', activeRuns: 28, completed: 92, controlGroup: true },
];

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
    key: 'trigger',
    render: (_: any, r: any) => <Tag color="geekblue">{r.trigger}</Tag>,
  },
  {
    title: 'Trạng thái',
    key: 'status',
    render: (_: any, r: any) => (
      <Badge
        status={r.status === 'active' ? 'processing' : r.status === 'draft' ? 'default' : 'error'}
        text={r.status === 'active' ? 'Hoạt động' : 'Bản nháp'}
      />
    ),
  },
  { title: 'Đang chạy', dataIndex: 'activeRuns', key: 'active', sorter: (a: any, b: any) => a.activeRuns - b.activeRuns },
  { title: 'Hoàn thành', dataIndex: 'completed', key: 'completed', sorter: (a: any, b: any) => a.completed - b.completed },
  {
    title: 'Control Group',
    key: 'control',
    render: (_: any, r: any) => r.controlGroup ? <Tag color="orange">Có</Tag> : <Tag>Không</Tag>,
  },
];

export default function JourneysPage() {
  const totalActive = journeysData.reduce((sum, j) => sum + j.activeRuns, 0);
  const totalCompleted = journeysData.reduce((sum, j) => sum + j.completed, 0);

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
        <Title level={3} style={{ margin: 0, fontWeight: 700 }}>Journeys</Title>
        <Button type="primary" icon={<PlusOutlined />}>Tạo mới</Button>
      </div>

      <Row gutter={[12, 12]} style={{ marginBottom: 16 }}>
        <Col span={6}>
          <Card variant="outlined" style={{ borderRadius: 10, borderColor: '#e5e7eb' }}>
            <Statistic title="Tổng Journeys" value={journeysData.length} prefix={<NodeIndexOutlined />} />
          </Card>
        </Col>
        <Col span={6}>
          <Card variant="outlined" style={{ borderRadius: 10, borderColor: '#e5e7eb' }}>
            <Statistic title="Đang chạy" value={totalActive} prefix={<PlayCircleOutlined />} styles={{ content: { color: '#3b82f6' } }} />
          </Card>
        </Col>
        <Col span={6}>
          <Card variant="outlined" style={{ borderRadius: 10, borderColor: '#e5e7eb' }}>
            <Statistic title="Hoàn thành" value={totalCompleted} prefix={<CheckCircleOutlined />} styles={{ content: { color: '#10b981' } }} />
          </Card>
        </Col>
        <Col span={6}>
          <Card variant="outlined" style={{ borderRadius: 10, borderColor: '#e5e7eb' }}>
            <Statistic title="Bản nháp" value={journeysData.filter((j) => j.status === 'draft').length} prefix={<PauseCircleOutlined />} />
          </Card>
        </Col>
      </Row>

      <Card variant="outlined" style={{ borderRadius: 10, borderColor: '#e5e7eb' }}>
        <Table columns={columns} dataSource={journeysData} rowKey="code" pagination={false} />
      </Card>
    </div>
  );
}
