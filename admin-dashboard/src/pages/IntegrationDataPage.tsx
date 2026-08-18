import React, { useState } from 'react';
import {
  Card, Typography, Row, Col, Statistic, Space, Select, Tag, Empty,
  Table, Badge, Button,
} from 'antd';
import {
  ApiOutlined, CheckCircleOutlined, CloseCircleOutlined,
  ClockCircleOutlined, ThunderboltOutlined, LineChartOutlined,
  LinkOutlined, SwapOutlined, DollarOutlined,
} from '@ant-design/icons';

const { Title, Text } = Typography;

// Connection traffic data
const trafficData = [
  { id: 1, connection: 'WooCommerce → Pigeon CRM', direction: 'inbound', requests: 1_245, success: 1_198, failed: 47, avgResponse: 342, status: 'active' },
  { id: 2, connection: 'Pigeon CRM → Zalo OA', direction: 'outbound', requests: 892, success: 878, failed: 14, avgResponse: 215, status: 'active' },
  { id: 3, connection: 'SAP B1 → Pigeon CRM', direction: 'inbound', requests: 456, success: 449, failed: 7, avgResponse: 580, status: 'active' },
  { id: 4, connection: 'Pigeon CRM → SendGrid', direction: 'outbound', requests: 380, success: 342, failed: 38, avgResponse: 198, status: 'active' },
  { id: 5, connection: 'BASE.VN HRM → Pigeon CRM', direction: 'inbound', requests: 124, success: 124, failed: 0, avgResponse: 420, status: 'paused' },
];

const topApiCalls = [
  { endpoint: '/v1/events', calls: 4_520, pct: 35 },
  { endpoint: '/v1/customers', calls: 2_340, pct: 18 },
  { endpoint: '/v1/orders/sync', calls: 1_890, pct: 15 },
  { endpoint: '/v1/loyalty/award', calls: 1_245, pct: 10 },
  { endpoint: '/v1/messages/send', calls: 892, pct: 7 },
];

const errorByType = [
  { type: 'Validation Error', count: 42, color: '#ef4444' },
  { type: 'Timeout', count: 28, color: '#f59e0b' },
  { type: 'Auth Expired', count: 15, color: '#8b5cf6' },
  { type: 'Rate Limit', count: 8, color: '#06b6d4' },
  { type: 'Server Error', count: 13, color: '#ef4444' },
];

const columns = [
  {
    title: 'Connection',
    key: 'connection',
    render: (_: any, r: any) => (
      <Space>
        <LinkOutlined style={{ color: '#3b82f6' }} />
        <Text strong style={{ fontSize: 13 }}>{r.connection}</Text>
      </Space>
    ),
  },
  {
    title: 'Direction',
    dataIndex: 'direction',
    key: 'direction',
    render: (d: string) => (
      <Tag color={d === 'inbound' ? 'blue' : 'green'} icon={<SwapOutlined />}>
        {d === 'inbound' ? 'Inbound' : 'Outbound'}
      </Tag>
    ),
  },
  {
    title: 'Total Requests',
    dataIndex: 'requests',
    key: 'requests',
    render: (v: number) => <Text strong>{v.toLocaleString()}</Text>,
    sorter: (a: any, b: any) => a.requests - b.requests,
  },
  {
    title: 'Success',
    key: 'success',
    render: (_: any, r: any) => (
      <Space>
        <CheckCircleOutlined style={{ color: '#10b981' }} />
        <Text>{r.success.toLocaleString()}</Text>
        <Text type="secondary">({((r.success / r.requests) * 100).toFixed(1)}%)</Text>
      </Space>
    ),
  },
  {
    title: 'Failed',
    key: 'failed',
    render: (_: any, r: any) => (
      r.failed > 0
        ? <Tag color="red">{r.failed}</Tag>
        : <Tag color="green">0</Tag>
    ),
  },
  {
    title: 'Avg Response',
    key: 'avgResponse',
    render: (_: any, r: any) => (
      <Space>
        <ClockCircleOutlined style={{ color: r.avgResponse > 500 ? '#f59e0b' : '#10b981' }} />
        <Text>{r.avgResponse}ms</Text>
      </Space>
    ),
  },
  {
    title: 'Status',
    key: 'status',
    render: (_: any, r: any) => (
      <Badge status={r.status === 'active' ? 'success' : 'warning'} text={r.status === 'active' ? 'Active' : 'Paused'} />
    ),
  },
];

export default function IntegrationDataPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'traffic' | 'cost' | 'webhook' | 'connections'>('overview');

  const totalRequests = trafficData.reduce((s, t) => s + t.requests, 0);
  const totalSuccess = trafficData.reduce((s, t) => s + t.success, 0);
  const totalFailed = trafficData.reduce((s, t) => s + t.failed, 0);
  const avgResponse = Math.round(trafficData.reduce((s, t) => s + t.avgResponse, 0) / trafficData.length);

  return (
    <div style={{ display: 'flex', gap: 0 }}>
      {/* Sub-sidebar */}
      <div className="page-sub-sidebar" style={{ marginLeft: -20, marginTop: -20, marginBottom: -20 }}>
        {[
          { key: 'overview', icon: <LineChartOutlined />, label: 'Overview' },
          { key: 'traffic', icon: <SwapOutlined />, label: 'Traffic' },
          { key: 'cost', icon: <DollarOutlined />, label: 'Expense' },
          { key: 'webhook', icon: <ThunderboltOutlined />, label: 'Campain & Webhook' },
          { key: 'connections', icon: <LinkOutlined />, label: 'Connection' },
        ].map((item) => (
          <div
            key={item.key}
            className={`sub-sidebar-item ${activeTab === item.key ? 'sub-sidebar-item--active' : ''}`}
            onClick={() => setActiveTab(item.key as any)}
          >
            {item.icon} {item.label}
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: '0 0 0 24px' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
          <div>
            <Title level={4} style={{ margin: 0, fontWeight: 700 }}>Overview</Title>
            <Text type="secondary" style={{ fontSize: 12 }}>Traffic, performance and sync error reports</Text>
          </div>
          <Space>
            <Select defaultValue="all" style={{ width: 160 }} options={[
              { value: 'all', label: 'All Connections' },
              { value: 'woo', label: 'WooCommerce' },
              { value: 'zalo', label: 'Zalo OA' },
              { value: 'sap', label: 'SAP B1' },
            ]} />
            <Select defaultValue="both" style={{ width: 120 }} options={[
              { value: 'both', label: 'Both' },
              { value: 'in', label: 'Inbound' },
              { value: 'out', label: 'Outbound' },
            ]} />
            <Select defaultValue="daily" style={{ width: 120 }} options={[
              { value: 'daily', label: 'Daily' },
              { value: 'weekly', label: 'Weekly' },
              { value: 'monthly', label: 'Monthly' },
            ]} />
            <Button type="primary">1 Month</Button>
          </Space>
        </div>

        {/* KPI Cards */}
        <Row gutter={[12, 12]} style={{ marginBottom: 20 }}>
          <Col xs={24} sm={12} xl={6}>
            <Card variant="outlined" style={{ borderRadius: 10, borderColor: '#e5e7eb' }} styles={{ body: { padding: '16px 20px' } }}>
              <Space align="center" style={{ marginBottom: 4 }}>
                <ApiOutlined style={{ color: '#3b82f6', fontSize: 16 }} />
                <Text type="secondary" style={{ fontSize: 12, fontWeight: 500 }}>Total Requests <span style={{ opacity: 0.4 }}>ⓘ</span></Text>
              </Space>
              <div style={{ fontSize: 32, fontWeight: 800, color: '#1f2937' }}>{totalRequests.toLocaleString()}</div>
            </Card>
          </Col>
          <Col xs={24} sm={12} xl={6}>
            <Card variant="outlined" style={{ borderRadius: 10, borderColor: '#e5e7eb' }} styles={{ body: { padding: '16px 20px' } }}>
              <Space align="center" style={{ marginBottom: 4 }}>
                <CheckCircleOutlined style={{ color: '#10b981', fontSize: 16 }} />
                <Text type="secondary" style={{ fontSize: 12, fontWeight: 500 }}>Success Rate <span style={{ opacity: 0.4 }}>ⓘ</span></Text>
              </Space>
              <div style={{ fontSize: 32, fontWeight: 800, color: '#10b981' }}>{((totalSuccess / totalRequests) * 100).toFixed(1)}%</div>
            </Card>
          </Col>
          <Col xs={24} sm={12} xl={6}>
            <Card variant="outlined" style={{ borderRadius: 10, borderColor: '#e5e7eb' }} styles={{ body: { padding: '16px 20px' } }}>
              <Space align="center" style={{ marginBottom: 4 }}>
                <CloseCircleOutlined style={{ color: '#ef4444', fontSize: 16 }} />
                <Text type="secondary" style={{ fontSize: 12, fontWeight: 500 }}>Error Rate <span style={{ opacity: 0.4 }}>ⓘ</span></Text>
              </Space>
              <div style={{ fontSize: 32, fontWeight: 800, color: '#ef4444' }}>{((totalFailed / totalRequests) * 100).toFixed(1)}%</div>
            </Card>
          </Col>
          <Col xs={24} sm={12} xl={6}>
            <Card variant="outlined" style={{ borderRadius: 10, borderColor: '#e5e7eb' }} styles={{ body: { padding: '16px 20px' } }}>
              <Space align="center" style={{ marginBottom: 4 }}>
                <ClockCircleOutlined style={{ color: '#f59e0b', fontSize: 16 }} />
                <Text type="secondary" style={{ fontSize: 12, fontWeight: 500 }}>Avg Response <span style={{ opacity: 0.4 }}>ⓘ</span></Text>
              </Space>
              <div style={{ fontSize: 32, fontWeight: 800, color: '#1f2937' }}>{avgResponse} <span style={{ fontSize: 14, fontWeight: 400 }}>ms</span></div>
            </Card>
          </Col>
        </Row>

        {/* Traffic Chart Placeholder + Top API + Errors */}
        <Row gutter={[12, 12]} style={{ marginBottom: 20 }}>
          <Col span={24}>
            <Card variant="outlined" title={<Space><LineChartOutlined style={{ color: '#3b82f6' }} /> Traffic over time <span style={{ opacity: 0.4 }}>ⓘ</span></Space>} style={{ borderRadius: 10, borderColor: '#e5e7eb' }}>
              {/* Simple bar chart visualization */}
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: 4, height: 120, padding: '0 20px' }}>
                {Array.from({ length: 30 }, (_, i) => {
                  const h = 20 + Math.random() * 80;
                  return (
                    <div
                      key={i}
                      style={{
                        flex: 1,
                        height: `${h}%`,
                        background: `linear-gradient(180deg, #3b82f6 0%, #60a5fa 100%)`,
                        borderRadius: '3px 3px 0 0',
                        opacity: 0.4 + (i / 30) * 0.6,
                        transition: 'opacity 0.2s',
                      }}
                    />
                  );
                })}
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 20px 0', color: '#9ca3af', fontSize: 11 }}>
                <span>01/07</span>
                <span>10/07</span>
                <span>20/07</span>
                <span>30/07</span>
              </div>
            </Card>
          </Col>
        </Row>

        <Row gutter={[12, 12]} style={{ marginBottom: 20 }}>
          <Col xs={24} lg={12}>
            <Card variant="outlined" title={<Space><ApiOutlined style={{ color: '#3b82f6' }} /> Top APIs called <span style={{ opacity: 0.4 }}>ⓘ</span></Space>} style={{ borderRadius: 10, borderColor: '#e5e7eb' }}>
              <Space orientation="vertical" style={{ width: '100%' }} size={12}>
                {topApiCalls.map((api) => (
                  <div key={api.endpoint}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                      <Text code style={{ fontSize: 12 }}>{api.endpoint}</Text>
                      <Text strong>{api.calls.toLocaleString()} calls</Text>
                    </div>
                    <div style={{ height: 6, background: '#f3f4f6', borderRadius: 3, overflow: 'hidden' }}>
                      <div style={{ width: `${api.pct}%`, height: '100%', background: 'linear-gradient(90deg, #3b82f6, #60a5fa)', borderRadius: 3, transition: 'width 0.5s ease' }} />
                    </div>
                  </div>
                ))}
              </Space>
            </Card>
          </Col>
          <Col xs={24} lg={12}>
            <Card variant="outlined" title={<Space><CloseCircleOutlined style={{ color: '#ef4444' }} /> Failed requests by error type <span style={{ opacity: 0.4 }}>ⓘ</span></Space>} style={{ borderRadius: 10, borderColor: '#e5e7eb' }}>
              <Space orientation="vertical" style={{ width: '100%' }} size={12}>
                {errorByType.map((err) => (
                  <div key={err.type} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Space>
                      <div style={{ width: 10, height: 10, borderRadius: '50%', background: err.color }} />
                      <Text>{err.type}</Text>
                    </Space>
                    <Tag color={err.count > 30 ? 'red' : err.count > 15 ? 'orange' : 'default'}>{err.count} errors</Tag>
                  </div>
                ))}
              </Space>
            </Card>
          </Col>
        </Row>

        {/* Connection Table */}
        <Row gutter={[12, 12]}>
          <Col xs={24} lg={12}>
            <Card variant="outlined" title={<Space><SwapOutlined style={{ color: '#3b82f6' }} /> Requests by direction <span style={{ opacity: 0.4 }}>ⓘ</span></Space>} style={{ borderRadius: 10, borderColor: '#e5e7eb' }}>
              <Table columns={columns} dataSource={trafficData} rowKey="id" pagination={false} size="small" />
            </Card>
          </Col>
          <Col xs={24} lg={12}>
            <Card variant="outlined" title={<Space><LinkOutlined style={{ color: '#3b82f6' }} /> Requests by connection <span style={{ opacity: 0.4 }}>ⓘ</span></Space>} style={{ borderRadius: 10, borderColor: '#e5e7eb' }}>
              <Space orientation="vertical" style={{ width: '100%' }} size={16}>
                {trafficData.map((t) => (
                  <div key={t.id}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                      <Space>
                        <Badge status={t.status === 'active' ? 'success' : 'warning'} />
                        <Text strong style={{ fontSize: 13 }}>{t.connection}</Text>
                      </Space>
                      <Text type="secondary">{t.requests.toLocaleString()} requests</Text>
                    </div>
                    <div style={{ height: 6, background: '#f3f4f6', borderRadius: 3, overflow: 'hidden' }}>
                      <div style={{
                        width: `${(t.success / t.requests) * 100}%`,
                        height: '100%',
                        background: t.failed > 30 ? '#ef4444' : '#10b981',
                        borderRadius: 3,
                      }} />
                    </div>
                  </div>
                ))}
              </Space>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}
