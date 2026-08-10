import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Card, Typography, Row, Col, Statistic, Tag, Space, Table, Avatar,
  Input, Button, Badge, Descriptions, Tabs, Empty, Timeline, Select,
  Tooltip, Progress, Modal, Form, DatePicker, message,
} from 'antd';
import {
  UserOutlined, SearchOutlined, EyeOutlined, PhoneOutlined,
  GiftOutlined, ReloadOutlined, ArrowUpOutlined, ArrowDownOutlined,
  MailOutlined, ShoppingCartOutlined, HeartOutlined, LineChartOutlined, PlusOutlined,
} from '@ant-design/icons';
import { customerApi } from '../services/api';
import dayjs from 'dayjs';

const { Title, Text } = Typography;

// ─── Funnel stages ───
const funnelStages = [
  { name: 'Awareness', sub: 'Awareness', pct: 42, color: '#ef4444' },
  { name: 'Interest', sub: 'Interest', pct: 31, color: '#f97316' },
  { name: 'Consideration · Lead', sub: 'Consideration', pct: 18, color: '#eab308' },
  { name: 'Decision · Buy', sub: 'Decision', pct: 12, color: '#22c55e' },
  { name: 'Service', sub: 'Service', pct: 8, color: '#06b6d4' },
  { name: 'Loyalty', sub: 'Loyalty', pct: 5, color: '#8b5cf6' },
];

// ─── Demo customers ───
const demoCustomers = [
  { id: 'a1b2c3d4', fullName: 'Nguyen Thi Mai', phone: '+84901234567', email: 'mai@example.com', gender: 'Female', source: 'Zalo OA', tier: 'GOLD', points: 2_450, orderCount: 12, totalSpend: 15_800_000, lastOrder: '28/07/2026', babies: [{ id: '1', name: 'Bé An', stageCode: 'INFANT' }], flag: null },
  { id: 'b2c3d4e5', fullName: 'Tran Van Duc', phone: '+84912345678', email: 'duc@example.com', gender: 'Male', source: 'Website', tier: 'SILVER', points: 890, orderCount: 5, totalSpend: 6_200_000, lastOrder: '25/07/2026', babies: [], flag: null },
  { id: 'c3d4e5f6', fullName: 'Le Thi Hoa', phone: '+84923456789', email: null, gender: 'Female', source: 'QR Scan', tier: 'MEMBER', points: 120, orderCount: 1, totalSpend: 450_000, lastOrder: '20/07/2026', babies: [{ id: '2', name: 'Bé Bình', stageCode: 'NEWBORN' }, { id: '3', name: 'Bé Châu', stageCode: 'TODDLER' }], flag: 'missing_email' },
  { id: 'd4e5f6a7', fullName: 'Pham Minh Tuan', phone: '+84934567890', email: 'tuan@example.com', gender: 'Male', source: 'Referral', tier: 'MEMBER', points: 50, orderCount: 0, totalSpend: 0, lastOrder: null, babies: [], flag: 'no_purchase' },
  { id: 'e5f6a7b8', fullName: 'Vo Thi Lan', phone: '+84945678901', email: 'lan@example.com', gender: 'Female', source: 'Zalo Mini App', tier: 'SILVER', points: 1_580, orderCount: 8, totalSpend: 10_400_000, lastOrder: '27/07/2026', babies: [{ id: '4', name: 'Bé Dũng', stageCode: 'INFANT' }], flag: null },
  { id: 'f6a7b8c9', fullName: 'Hoang Van Nam', phone: '+84956789012', email: 'nam@example.com', gender: 'Male', source: 'Email Campaign', tier: 'GOLD', points: 3_200, orderCount: 15, totalSpend: 22_000_000, lastOrder: '29/07/2026', babies: [], flag: null },
  { id: 'g7b8c9d0', fullName: 'Bui Thi Thuy', phone: '+84967890123', email: null, gender: 'Female', source: 'Walk-in', tier: 'MEMBER', points: 0, orderCount: 0, totalSpend: 0, lastOrder: null, babies: [], flag: 'no_email_no_purchase' },
];

export default function Customer360Page() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'overview' | 'customers'>('overview');
  const [search, setSearch] = useState('');
  const [selectedCustomer, setSelectedCustomer] = useState<any>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<'create' | 'edit'>('create');
  const [creating, setCreating] = useState(false);
  const [form] = Form.useForm();
  const [customers, setCustomers] = useState<any[]>(demoCustomers);
  const [loading, setLoading] = useState(false);
  const [metrics, setMetrics] = useState<any>(null);

  const fetchMetrics = useCallback(async () => {
    try {
      const data = await customerApi.getMetrics();
      setMetrics(data);
    } catch (err) {
      console.error('Failed to fetch metrics:', err);
    }
  }, []);

  const fetchCustomers = useCallback(async () => {
    setLoading(true);
    try {
      const result = await customerApi.list({ take: 20, search: search || undefined });
      setCustomers(result.data.length > 0 ? result.data : demoCustomers);
    } catch (err) {
      setCustomers(demoCustomers);
    } finally {
      setLoading(false);
    }
  }, [search]);

  useEffect(() => {
    if (activeTab === 'customers') {
      fetchCustomers();
    } else if (activeTab === 'overview') {
      fetchMetrics();
    }
  }, [activeTab, fetchCustomers, fetchMetrics]);

  const handleOpenCreate = () => {
    setModalMode('create');
    form.resetFields();
    setModalOpen(true);
  };

  const handleOpenEdit = () => {
    setModalMode('edit');
    if (selectedCustomer) {
      form.setFieldsValue({
        ...selectedCustomer,
        dateOfBirth: selectedCustomer.dateOfBirth ? dayjs(selectedCustomer.dateOfBirth) : undefined,
        address: selectedCustomer.addresses?.[0]?.addressLine1 || '',
      });
    }
    setModalOpen(true);
  };

  const handleSubmitCustomer = async (values: any) => {
    setCreating(true);
    try {
      const payload = {
        ...values,
        dateOfBirth: values.dateOfBirth ? values.dateOfBirth.format('YYYY-MM-DD') : undefined,
      };
      if (modalMode === 'create') {
        await customerApi.create(payload);
        message.success('Customer được tạo thành công!');
      } else {
        await customerApi.update(selectedCustomer.id, payload);
        message.success('Customer updated successfully!');
        // Refresh selected customer in drawer
        const updated = await customerApi.get(selectedCustomer.id);
        setSelectedCustomer(updated);
      }
      setModalOpen(false);
      form.resetFields();
      fetchCustomers();
    } catch (err: any) {
      message.error(err.message || 'Error saving customer');
    } finally {
      setCreating(false);
    }
  };

  const filteredCustomers = customers === demoCustomers 
    ? customers.filter(c =>
        !search || c.fullName?.toLowerCase().includes(search.toLowerCase()) ||
        c.phone?.includes(search) || (c.email && c.email.includes(search))
      )
    : customers;

  const columns = [
    {
      title: 'Customer',
      key: 'name',
      render: (_: any, r: any) => {
        const tier = r.tier || r.loyaltyAccount?.tierId || 'MEMBER';
        const color = tier === 'GOLD' ? '#f59e0b' : tier === 'SILVER' ? '#94a3b8' : '#3b82f6';
        return (
          <Space>
            <Avatar style={{ background: color }} icon={<UserOutlined />} />
            <div>
              <Text strong style={{ fontSize: 13 }}>{r.fullName || r.full_name || 'Customer'}</Text>
              <br />
              <Text type="secondary" style={{ fontSize: 11 }}>{r.customerCode ? `#${r.customerCode} · ` : ''}{r.phone}</Text>
            </div>
          </Space>
        );
      },
    },
    {
      title: 'Source',
      key: 'source',
      render: (_: any, r: any) => <Tag>{r.source || r.registrationSource || 'Manual'}</Tag>,
    },
    {
      title: 'Tier',
      key: 'tier',
      render: (_: any, r: any) => {
        const tier = r.tier || r.loyaltyAccount?.tierId || 'MEMBER';
        const colors: Record<string, string> = { GOLD: 'gold', SILVER: 'default', MEMBER: 'blue' };
        return <Tag color={colors[tier] || 'blue'}>{tier}</Tag>;
      },
    },
    {
      title: 'Points',
      key: 'points',
      render: (_: any, r: any) => <Text strong>{(r.points ?? r.loyaltyAccount?.pointsBalance ?? 0).toLocaleString()}</Text>,
    },
    {
      title: 'Orders',
      key: 'orders',
      render: (_: any, r: any) => r.orderCount ?? r._count?.orders ?? 0,
    },
    {
      title: 'Total Spend',
      key: 'spend',
      render: (_: any, r: any) => r.totalSpend > 0 ? `${(r.totalSpend / 1_000_000).toFixed(1)}M ₫` : '—',
    },
    {
      title: 'Data Quality',
      key: 'flag',
      render: (_: any, r: any) => {
        const flag = r.flag || r.dataQualityFlag;
        return flag
          ? <Badge status="warning" text={<Text type="warning" style={{ fontSize: 12 }}>{flag}</Text>} />
          : <Badge status="success" text={<Text type="success" style={{ fontSize: 12 }}>Clean</Text>} />;
      },
    },
  ];

  return (
    <>
      <div style={{ display: 'flex', gap: 0 }}>
        {/* Sub-sidebar */}
        <div className="page-sub-sidebar" style={{ marginLeft: -20, marginTop: -20, marginBottom: -20 }}>
          <div
            className={`sub-sidebar-item ${activeTab === 'overview' ? 'sub-sidebar-item--active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            <LineChartOutlined /> Overview
          </div>
          <div
            className={`sub-sidebar-item ${activeTab === 'customers' ? 'sub-sidebar-item--active' : ''}`}
            onClick={() => setActiveTab('customers')}
          >
            <UserOutlined /> Customer
          </div>
        </div>

        {/* Main Content */}
        <div style={{ flex: 1, padding: '0 0 0 24px' }}>
          {activeTab === 'overview' ? (
          <div>
            {/* Page Header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
              <div style={{
                width: 36, height: 36, borderRadius: 8,
                background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#fff', fontWeight: 800, fontSize: 14,
              }}>360</div>
              <div>
                <Title level={4} style={{ margin: 0, fontWeight: 700 }}>Customer 360 Overview</Title>
              </div>
              <div style={{ marginLeft: 'auto' }}>
                <Select defaultValue="30d" style={{ width: 160 }} options={[
                  { value: '7d', label: 'Last 7 days' },
                  { value: '30d', label: 'Last 30 days' },
                  { value: '90d', label: 'Last 90 days' },
                ]} />
              </div>
            </div>

            {/* CUSTOMER-CENTRIC KPIs — distinct from Dashboard's business KPIs */}
            <div style={{ marginBottom: 8 }}>
              <Text type="secondary" style={{ fontSize: 12, fontWeight: 600, letterSpacing: 0.5 }}>— CUSTOMER METRICS <span style={{ opacity: 0.4 }}>ⓘ</span></Text>
            </div>
            <Row gutter={[12, 12]}>
              {[
                { label: 'SỐ LƯỢNG', type: 'quantity', title: 'Total Customers', value: metrics ? metrics.totalCustomers.toLocaleString() : '...' },
                { label: 'SỐ LƯỢNG', type: 'quantity', title: 'New Customers (30d)', value: metrics ? metrics.newCustomers30d.toLocaleString() : '...' },
                { label: 'SỐ LƯỢNG', type: 'quantity', title: 'Active Customers', value: metrics ? metrics.activeCustomers.toLocaleString() : '...' },
                { label: 'SỐ LƯỢNG', type: 'quantity', title: 'Returning Customers', value: metrics ? metrics.returningCustomers.toLocaleString() : '...' },
              ].map((item, i) => (
                <Col xs={24} sm={12} xl={6} key={i}>
                  <Card variant="outlined" style={{ borderRadius: 10, borderColor: '#e5e7eb' }} styles={{ body: { padding: '14px 18px' } }}>
                    <div className={`kpi-label kpi-label--${item.type}`}>{item.label}</div>
                    <div style={{ fontSize: 11, color: '#6b7280', fontWeight: 500 }}>{item.title} <span style={{ opacity: 0.4 }}>ⓘ</span></div>
                    <div style={{ fontSize: 26, fontWeight: 800, color: '#1f2937', margin: '2px 0' }}>{item.value}</div>
                    {item.change !== undefined && (
                      <div className={`change-indicator ${item.change >= 0 ? 'change-indicator--up' : 'change-indicator--down'}`}>
                        {item.change >= 0 ? '▲' : '▼'} {Math.abs(item.change)}% vs last period
                      </div>
                    )}
                  </Card>
                </Col>
              ))}
            </Row>
            <Row gutter={[12, 12]} style={{ marginTop: 12 }}>
              {[
                { label: 'TỶ LỆ', type: 'value', title: 'Churn Rate', value: metrics ? `${metrics.churnRate}%` : '...' },
                { label: 'TỶ LỆ', type: 'value', title: 'Complete Profiles', value: metrics ? `${metrics.completeProfilesPct}%` : '...' },
                { label: 'GIÁ TRỊ', type: 'value', title: 'Average CLV', value: metrics ? `${(metrics.averageCLV > 0 ? metrics.averageCLV / 1000000 : 0).toFixed(1)}M ₫` : '...' },
                { label: 'SỐ LƯỢNG', type: 'quantity', title: 'Baby Profiles', value: metrics ? metrics.babyProfiles.toLocaleString() : '...' },
              ].map((item, i) => (
                <Col xs={24} sm={12} xl={6} key={i}>
                  <Card variant="outlined" style={{ borderRadius: 10, borderColor: '#e5e7eb' }} styles={{ body: { padding: '14px 18px' } }}>
                    <div className={`kpi-label kpi-label--${item.type}`}>{item.label}</div>
                    <div style={{ fontSize: 11, color: '#6b7280', fontWeight: 500 }}>{item.title} <span style={{ opacity: 0.4 }}>ⓘ</span></div>
                    <div style={{ fontSize: 26, fontWeight: 800, color: '#1f2937', margin: '2px 0' }}>{item.value}</div>
                    {item.change !== undefined && (
                      <div className={`change-indicator ${item.change >= 0 ? 'change-indicator--up' : 'change-indicator--down'}`}>
                        {item.change >= 0 ? '▲' : '▼'} {Math.abs(item.change)}% vs last period
                      </div>
                    )}
                  </Card>
                </Col>
              ))}
            </Row>

            {/* Journey Funnel */}
            <Card variant="outlined" style={{ borderRadius: 10, borderColor: '#e5e7eb', marginTop: 20 }} styles={{ body: { padding: '20px 24px' } }}>
              <Title level={5} style={{ margin: 0, fontWeight: 700, marginBottom: 4 }}>Customer Journey & Conversion</Title>
              <Text type="secondary" style={{ fontSize: 12, display: 'block', marginBottom: 16 }}>6 stages · % conversion & sentiment journey</Text>

              <Row gutter={16} style={{ marginBottom: 20 }}>
                {[
                  { title: 'Total Reach', value: '4,250', change: -8.2, sub: 'entered journey' },
                  { title: 'Total Conversion', value: '18%', change: 5.4, sub: 'Awareness → Purchase' },
                  { title: 'Customers Purchased', value: '765', change: -3.1, sub: 'completed orders' },
                  { title: 'Avg Conversion Time', value: '14', sub: 'days on average' },
                  { title: 'Repeat Purchase', value: '32%', sub: '398 loyal customers' },
                ].map((m, i) => (
                  <Col key={i} flex={1}>
                    <div style={{ background: i === 4 ? '#fef2f2' : '#f9fafb', borderRadius: 8, padding: '12px 14px' }}>
                      <div style={{ fontSize: 12, color: '#6b7280', marginBottom: 2 }}>{m.title} <span style={{ opacity: 0.4 }}>ⓘ</span></div>
                      <div style={{ fontSize: 22, fontWeight: 800 }}>{m.value}</div>
                      {m.change !== undefined && (
                        <div className={`change-indicator ${m.change >= 0 ? 'change-indicator--up' : 'change-indicator--down'}`} style={{ marginTop: 2 }}>
                          {m.change >= 0 ? '▲' : '▼'} {Math.abs(m.change)}% vs last period
                        </div>
                      )}
                      {m.sub && <div style={{ fontSize: 10, color: '#9ca3af', marginTop: 2 }}>{m.sub}</div>}
                    </div>
                  </Col>
                ))}
              </Row>

              <Text type="secondary" style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 0.5, display: 'block', marginBottom: 8 }}>
                FUNNEL CONVERSION
              </Text>
              <div className="funnel-chevron" style={{ marginBottom: 24 }}>
                {funnelStages.map((stage) => (
                  <div key={stage.name} className="funnel-stage" style={{ background: stage.color }}>
                    <div>
                      <div className="funnel-stage-name">{stage.name}</div>
                      <div className="funnel-stage-sub">{stage.sub}</div>
                    </div>
                    <div className="funnel-stage-pct">{stage.pct}%</div>
                  </div>
                ))}
              </div>

              <Text type="secondary" style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 0.5, display: 'block', marginBottom: 8 }}>
                CUSTOMER SENTIMENT JOURNEY <span style={{ opacity: 0.4 }}>ⓘ</span>
              </Text>
              {(['Positive', 'Neutral', 'Negative'] as const).map((level, li) => {
                // Realistic sentiment: negative at start, neutral in middle, positive at end
                const sentimentMap = [
                  { positive: false, neutral: false, negative: true },
                  { positive: false, neutral: true,  negative: false },
                  { positive: false, neutral: true,  negative: false },
                  { positive: true,  neutral: false, negative: false },
                  { positive: true,  neutral: false, negative: false },
                  { positive: true,  neutral: false, negative: false },
                ];
                return (
                  <div key={level} className="sentiment-row">
                    <div className="sentiment-label" style={{
                      color: li === 0 ? '#10b981' : li === 1 ? '#6b7280' : '#ef4444',
                    }}>{level}</div>
                    <div className="sentiment-dots">
                      {sentimentMap.map((stage, si) => {
                        const isActive = li === 0 ? stage.positive : li === 1 ? stage.neutral : stage.negative;
                        const activeColor = li === 0 ? '#10b981' : li === 1 ? '#6b7280' : '#ef4444';
                        return (
                          <div key={si} className="sentiment-dot" style={{
                            background: isActive ? activeColor : 'transparent',
                            border: `2px solid ${isActive ? activeColor : '#e5e7eb'}`,
                          }} />
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </Card>
          </div>
        ) : (
          /* ─── Customers List ─── */
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
              <Title level={4} style={{ margin: 0, fontWeight: 700 }}>Customers List</Title>
              <Space>
                <Input
                  placeholder="Search by name, phone, email..."
                  prefix={<SearchOutlined />}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  style={{ width: 280, borderRadius: 8 }}
                  allowClear
                />
                <Button icon={<ReloadOutlined />} onClick={fetchCustomers}>Refresh</Button>
                <Button type="primary" icon={<PlusOutlined />} onClick={handleOpenCreate}>
                  Add Customer
                </Button>
              </Space>
            </div>
            <Card variant="outlined" style={{ borderRadius: 10, borderColor: '#e5e7eb' }}>
              <Table 
                columns={columns} 
                dataSource={filteredCustomers} 
                rowKey="id" 
                pagination={{ pageSize: 10 }} 
                loading={loading}
                onRow={(record) => ({
                  onClick: () => navigate(`/customer360/${record.id}`),
                  style: { cursor: 'pointer' }
                })}
              />
            </Card>
          </div>
        )}
        </div>
      </div>

      {/* Add/Edit Customer Modal */}
      <Modal
        title={modalMode === 'create' ? "Add New Customer" : "Edit Customer"}
        open={modalOpen}
        onCancel={() => setModalOpen(false)}
        onOk={() => form.submit()}
        confirmLoading={creating}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmitCustomer}
        >
          <Form.Item
            name="fullName"
            label="Họ và Name"
            rules={[{ required: true, message: 'Please enter full name' }]}
          >
            <Input placeholder="Enter full name" />
          </Form.Item>
          <Form.Item
            name="phone"
            label="Phone Number"
            rules={[{ required: true, message: 'Please enter phone number' }]}
          >
            <Input placeholder="Enter phone number" />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[{ type: 'email', message: 'Invalid email' }]}
          >
            <Input placeholder="Enter email (optional)" />
          </Form.Item>
          <Form.Item name="gender" label="Gender">
            <Select placeholder="Select gender" allowClear>
              <Select.Option value="male">Male</Select.Option>
              <Select.Option value="female">Female</Select.Option>
              <Select.Option value="other">Other</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item name="dateOfBirth" label="Date of Birth">
            <DatePicker style={{ width: '100%' }} format="DD/MM/YYYY" />
          </Form.Item>
          <Form.Item name="customerType" label="Customer Type">
            <Select placeholder="Select customer type" allowClear>
              <Select.Option value="End user">End user</Select.Option>
              <Select.Option value="Outlet">Outlet</Select.Option>
              <Select.Option value="Keyshop">Keyshop</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item name="address" label="Address">
            <Input placeholder="Enter address" />
          </Form.Item>
          <Form.Item name="notes" label="Notes">
            <Input.TextArea placeholder="Enter notes" rows={3} />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
