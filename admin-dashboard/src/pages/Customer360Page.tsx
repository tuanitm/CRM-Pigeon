import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Card, Typography, Row, Col, Statistic, Tag, Space, Table, Avatar,
  Input, Button, Badge, Descriptions, Tabs, Empty, Timeline, Select,
  Tooltip, Progress, Modal, Form, DatePicker, message, Divider,
} from 'antd';
import {
  UserOutlined, SearchOutlined, EyeOutlined, PhoneOutlined,
  GiftOutlined, ReloadOutlined, ArrowUpOutlined, ArrowDownOutlined,
  MailOutlined, ShoppingCartOutlined, HeartOutlined, LineChartOutlined, PlusOutlined, DeleteOutlined, ShopOutlined,
} from '@ant-design/icons';
import { customerApi } from '../services/api';
import dayjs from 'dayjs';

const { Title, Text } = Typography;


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
  const customerType = Form.useWatch('customerType', form);
  const isEndUser = !customerType || customerType === 'End user';
  const [customers, setCustomers] = useState<any[]>(demoCustomers);
  const [loading, setLoading] = useState(false);
  const [metrics, setMetrics] = useState<any>(null);
  const [period, setPeriod] = useState<string>('30d');

  const fetchMetrics = useCallback(async (selectedPeriod?: string) => {
    try {
      const data = await customerApi.getMetrics(selectedPeriod || period);
      setMetrics(data);
    } catch (err) {
      console.error('Failed to fetch metrics:', err);
    }
  }, [period]);

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
      fetchMetrics(period);
    }
  }, [activeTab, period, fetchCustomers, fetchMetrics]);

  const handleOpenCreate = () => {
    setModalMode('create');
    form.resetFields();
    form.setFieldsValue({ customerType: 'End user' });
    setModalOpen(true);
  };

  const handleOpenEdit = () => {
    setModalMode('edit');
    if (selectedCustomer) {
      form.setFieldsValue({
        ...selectedCustomer,
        dateOfBirth: selectedCustomer.dateOfBirth ? dayjs(selectedCustomer.dateOfBirth) : undefined,
        address: selectedCustomer.addresses?.[0]?.addressLine1 || '',
        babies: selectedCustomer.babies?.map((b: any) => ({
          ...b,
          dateOfBirth: b.dateOfBirth ? dayjs(b.dateOfBirth) : undefined,
        })),
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
        babies: values.babies?.map((b: any) => ({
          ...b,
          dateOfBirth: b.dateOfBirth ? b.dateOfBirth.format('YYYY-MM-DD') : undefined,
        })),
      };
      // Strip personal fields for Outlet/Keyshop
      if (payload.customerType && payload.customerType !== 'End user') {
        delete payload.gender;
        delete payload.dateOfBirth;
        delete payload.babies;
      }
      if (modalMode === 'create') {
        await customerApi.create(payload);
        message.success('Customer created successfully!');
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
        const isShop = r.customerType === 'Outlet' || r.customerType === 'Keyshop';
        return (
          <Space>
            <Avatar style={{ background: color }} icon={isShop ? <ShopOutlined /> : <UserOutlined />} />
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
      title: 'Customer Type',
      key: 'customerType',
      render: (_: any, r: any) => {
        const type = r.customerType || 'End user';
        return <Tag color={type === 'End user' ? 'blue' : 'purple'}>{type}</Tag>;
      },
    },
    {
      title: 'Status',
      key: 'status',
      render: (_: any, r: any) => {
        return <Tag color={r.isActive !== false ? 'success' : 'error'}>{r.isActive !== false ? 'Active' : 'Inactive'}</Tag>;
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
              <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 8 }}>
                <Text type="secondary" style={{ fontSize: 12, fontWeight: 500 }}>Period:</Text>
                <Select
                  value={period}
                  onChange={(val) => setPeriod(val)}
                  style={{ width: 140, borderRadius: 8 }}
                  options={[
                    { value: 'today', label: 'Today' },
                    { value: '7d', label: '7 days' },
                    { value: '30d', label: '30 days' },
                    { value: 'this_month', label: 'This month' },
                    { value: 'this_year', label: 'This year' },
                  ]}
                />
              </div>
            </div>

            {/* ── ROW 1: Core KPIs ── */}
            <div style={{ marginBottom: 8 }}>
              <Text type="secondary" style={{ fontSize: 12, fontWeight: 600, letterSpacing: 0.5 }}>— CUSTOMER METRICS</Text>
            </div>
            <Row gutter={[12, 12]}>
              {[
                { label: 'COUNT', type: 'quantity', title: 'Total Customers', value: metrics?.totalCustomers?.toLocaleString() ?? '...' },
                { label: 'COUNT', type: 'quantity', title: `New (${period === 'today' ? 'Today' : period === '7d' ? '7 days' : period === '30d' ? '30 days' : period === 'this_month' ? 'This month' : 'This year'})`, value: metrics?.newCustomers30d?.toLocaleString() ?? '...' },
                { label: 'COUNT', type: 'quantity', title: 'Active', value: metrics?.activeCustomers?.toLocaleString() ?? '...' },
                { label: 'COUNT', type: 'quantity', title: 'Returning', value: metrics?.returningCustomers?.toLocaleString() ?? '...' },
              ].map((item, i) => (
                <Col xs={24} sm={12} xl={6} key={i}>
                  <Card variant="outlined" style={{ borderRadius: 10, borderColor: '#e5e7eb' }} styles={{ body: { padding: '14px 18px' } }}>
                    <div className={`kpi-label kpi-label--${item.type}`}>{item.label}</div>
                    <div style={{ fontSize: 11, color: '#6b7280', fontWeight: 500 }}>{item.title}</div>
                    <div style={{ fontSize: 26, fontWeight: 800, color: '#1f2937', margin: '2px 0' }}>{item.value}</div>
                  </Card>
                </Col>
              ))}
            </Row>

            {/* ── ROW 2: Value KPIs ── */}
            <Row gutter={[12, 12]} style={{ marginTop: 12 }}>
              {[
                { label: 'RATE', type: 'value', title: 'Churn Rate', value: metrics ? `${metrics.churnRate}%` : '...' },
                { label: 'RATE', type: 'value', title: 'Complete Profiles', value: metrics ? `${metrics.completeProfilesPct}%` : '...' },
                { label: 'VALUE', type: 'value', title: 'Average CLV', value: metrics ? `${(metrics.averageCLV > 0 ? metrics.averageCLV / 1000000 : 0).toFixed(1)}M ₫` : '...' },
                { label: 'COUNT', type: 'quantity', title: 'Baby Profiles', value: metrics?.babyProfiles?.toLocaleString() ?? '...' },
              ].map((item, i) => (
                <Col xs={24} sm={12} xl={6} key={i}>
                  <Card variant="outlined" style={{ borderRadius: 10, borderColor: '#e5e7eb' }} styles={{ body: { padding: '14px 18px' } }}>
                    <div className={`kpi-label kpi-label--${item.type}`}>{item.label}</div>
                    <div style={{ fontSize: 11, color: '#6b7280', fontWeight: 500 }}>{item.title}</div>
                    <div style={{ fontSize: 26, fontWeight: 800, color: '#1f2937', margin: '2px 0' }}>{item.value}</div>
                  </Card>
                </Col>
              ))}
            </Row>

            {/* ── ROW 3: Orders & Tickets KPIs ── */}
            <Row gutter={[12, 12]} style={{ marginTop: 12 }}>
              {[
                { label: 'COUNT', type: 'quantity', title: 'Total Orders', value: metrics?.totalOrders?.toLocaleString() ?? '...' },
                { label: 'VALUE', type: 'value', title: 'Total Revenue', value: metrics ? `${(metrics.totalRevenue > 0 ? metrics.totalRevenue / 1000000 : 0).toFixed(1)}M ₫` : '...' },
                { label: 'COUNT', type: 'quantity', title: 'Support Tickets', value: metrics?.totalTickets?.toLocaleString() ?? '...' },
                { label: 'STATUS', type: 'value', title: 'Open Tickets', value: metrics?.openTickets?.toLocaleString() ?? '...' },
              ].map((item, i) => (
                <Col xs={24} sm={12} xl={6} key={i}>
                  <Card variant="outlined" style={{ borderRadius: 10, borderColor: '#e5e7eb' }} styles={{ body: { padding: '14px 18px' } }}>
                    <div className={`kpi-label kpi-label--${item.type}`}>{item.label}</div>
                    <div style={{ fontSize: 11, color: '#6b7280', fontWeight: 500 }}>{item.title}</div>
                    <div style={{ fontSize: 26, fontWeight: 800, color: '#1f2937', margin: '2px 0' }}>{item.value}</div>
                  </Card>
                </Col>
              ))}
            </Row>

            {/* ── ROW 4: Breakdowns ── */}
            <Row gutter={[12, 12]} style={{ marginTop: 20 }}>
              {/* Customer Type Breakdown */}
              <Col xs={24} md={8}>
                <Card variant="outlined" style={{ borderRadius: 10, borderColor: '#e5e7eb', height: '100%' }} styles={{ body: { padding: '16px 20px' } }}>
                  <Title level={5} style={{ margin: 0, fontWeight: 700, marginBottom: 16 }}>Customer Types</Title>
                  {metrics?.customerTypeBreakdown ? (() => {
                    const { endUser, outlet, keyshop } = metrics.customerTypeBreakdown;
                    const total = endUser + outlet + keyshop || 1;
                    const items = [
                      { label: 'End User', count: endUser, color: '#3b82f6' },
                      { label: 'Outlet', count: outlet, color: '#8b5cf6' },
                      { label: 'Keyshop', count: keyshop, color: '#f59e0b' },
                    ];
                    return items.map(it => (
                      <div key={it.label} style={{ marginBottom: 12 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                          <Text style={{ fontSize: 12 }}>{it.label}</Text>
                          <Text strong style={{ fontSize: 12 }}>{it.count} ({Math.round((it.count / total) * 100)}%)</Text>
                        </div>
                        <Progress percent={Math.round((it.count / total) * 100)} showInfo={false} strokeColor={it.color} size="small" />
                      </div>
                    ));
                  })() : <Empty description="Loading..." />}
                </Card>
              </Col>

              {/* Tier Distribution */}
              <Col xs={24} md={8}>
                <Card variant="outlined" style={{ borderRadius: 10, borderColor: '#e5e7eb', height: '100%' }} styles={{ body: { padding: '16px 20px' } }}>
                  <Title level={5} style={{ margin: 0, fontWeight: 700, marginBottom: 16 }}>Loyalty Tiers</Title>
                  {metrics?.tierCounts && metrics.tierCounts.length > 0 ? (() => {
                    const total = metrics.tierCounts.reduce((s: number, t: any) => s + t.count, 0) || 1;
                    const tierColors: Record<string, string> = { GOLD: '#f59e0b', SILVER: '#94a3b8', MEMBER: '#3b82f6', PLATINUM: '#8b5cf6' };
                    return metrics.tierCounts.map((t: any) => (
                      <div key={t.tier} style={{ marginBottom: 12 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                          <Tag color={tierColors[t.tier] || '#6b7280'} style={{ margin: 0 }}>{t.tier}</Tag>
                          <Text strong style={{ fontSize: 12 }}>{t.count} ({Math.round((t.count / total) * 100)}%)</Text>
                        </div>
                        <Progress percent={Math.round((t.count / total) * 100)} showInfo={false} strokeColor={tierColors[t.tier] || '#6b7280'} size="small" />
                      </div>
                    ));
                  })() : <Empty description="No tier data" />}
                </Card>
              </Col>

              {/* Registration Sources */}
              <Col xs={24} md={8}>
                <Card variant="outlined" style={{ borderRadius: 10, borderColor: '#e5e7eb', height: '100%' }} styles={{ body: { padding: '16px 20px' } }}>
                  <Title level={5} style={{ margin: 0, fontWeight: 700, marginBottom: 16 }}>Registration Sources</Title>
                  {metrics?.sourceCounts && metrics.sourceCounts.length > 0 ? (() => {
                    const total = metrics.sourceCounts.reduce((s: number, src: any) => s + src.count, 0) || 1;
                    const sourceColors = ['#3b82f6', '#8b5cf6', '#10b981', '#f59e0b', '#ef4444', '#6b7280'];
                    return metrics.sourceCounts.slice(0, 6).map((src: any, i: number) => (
                      <div key={src.source} style={{ marginBottom: 12 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                          <Text style={{ fontSize: 12 }}>{src.source}</Text>
                          <Text strong style={{ fontSize: 12 }}>{src.count}</Text>
                        </div>
                        <Progress percent={Math.round((src.count / total) * 100)} showInfo={false} strokeColor={sourceColors[i % sourceColors.length]} size="small" />
                      </div>
                    ));
                  })() : <Empty description="No source data" />}
                </Card>
              </Col>
            </Row>

            {/* ── ROW 5: Recent Activity ── */}
            <Row gutter={[12, 12]} style={{ marginTop: 20 }}>
              <Col xs={24} md={12}>
                <Card variant="outlined" style={{ borderRadius: 10, borderColor: '#e5e7eb' }} styles={{ body: { padding: '16px 20px' } }}>
                  <Title level={5} style={{ margin: 0, fontWeight: 700, marginBottom: 12 }}>Recent Customers</Title>
                  {metrics?.recentCustomers && metrics.recentCustomers.length > 0 ? (
                    <Table
                      dataSource={metrics.recentCustomers}
                      rowKey="id"
                      size="small"
                      pagination={false}
                      onRow={(r: any) => ({ onClick: () => navigate(`/customer360/${r.id}`), style: { cursor: 'pointer' } })}
                      columns={[
                        { title: 'Name', key: 'name', render: (_: any, r: any) => (
                          <Space>
                            <Avatar size={28} style={{ background: '#3b82f6' }} icon={r.customerType === 'Outlet' || r.customerType === 'Keyshop' ? <ShopOutlined /> : <UserOutlined />} />
                            <Text strong style={{ fontSize: 12 }}>{r.fullName || '—'}</Text>
                          </Space>
                        )},
                        { title: 'Type', key: 'type', render: (_: any, r: any) => <Tag>{r.customerType || 'End user'}</Tag> },
                        { title: 'Added', key: 'date', render: (_: any, r: any) => <Text type="secondary" style={{ fontSize: 11 }}>{new Date(r.createdAt).toLocaleDateString('vi-VN')}</Text> },
                      ]}
                    />
                  ) : <Empty description="No customers yet" />}
                </Card>
              </Col>

              <Col xs={24} md={12}>
                <Card variant="outlined" style={{ borderRadius: 10, borderColor: '#e5e7eb' }} styles={{ body: { padding: '16px 20px' } }}>
                  <Title level={5} style={{ margin: 0, fontWeight: 700, marginBottom: 12 }}>Top Customers (Lifetime Points)</Title>
                  {metrics?.topCustomers && metrics.topCustomers.length > 0 ? (
                    <Table
                      dataSource={metrics.topCustomers}
                      rowKey="id"
                      size="small"
                      pagination={false}
                      onRow={(r: any) => ({ onClick: () => navigate(`/customer360/${r.customer?.id}`), style: { cursor: 'pointer' } })}
                      columns={[
                        { title: 'Customer', key: 'name', render: (_: any, r: any) => (
                          <Space>
                            <Avatar size={28} style={{ background: r.tier?.tierCode === 'GOLD' ? '#f59e0b' : '#3b82f6' }} icon={<UserOutlined />} />
                            <Text strong style={{ fontSize: 12 }}>{r.customer?.fullName || '—'}</Text>
                          </Space>
                        )},
                        { title: 'Tier', key: 'tier', render: (_: any, r: any) => <Tag color={r.tier?.tierCode === 'GOLD' ? 'gold' : r.tier?.tierCode === 'SILVER' ? 'default' : 'blue'}>{r.tier?.tierCode || '—'}</Tag> },
                        { title: 'Points', key: 'points', render: (_: any, r: any) => <Text strong>{(r.pointsLifetime || 0).toLocaleString()}</Text> },
                      ]}
                    />
                  ) : <Empty description="No loyalty data" />}
                </Card>
              </Col>
            </Row>

            {/* ── ROW 6: Recent Orders & Tickets ── */}
            <Row gutter={[12, 12]} style={{ marginTop: 12 }}>
              <Col xs={24} md={12}>
                <Card variant="outlined" style={{ borderRadius: 10, borderColor: '#e5e7eb' }} styles={{ body: { padding: '16px 20px' } }}>
                  <Title level={5} style={{ margin: 0, fontWeight: 700, marginBottom: 12 }}>Recent Orders</Title>
                  {metrics?.recentOrders && metrics.recentOrders.length > 0 ? (
                    <Table
                      dataSource={metrics.recentOrders}
                      rowKey="id"
                      size="small"
                      pagination={false}
                      columns={[
                        { title: 'Order #', key: 'num', render: (_: any, r: any) => <Text code style={{ fontSize: 11 }}>{r.orderNumber || r.id?.substring(0, 8)}</Text> },
                        { title: 'Customer', key: 'cust', render: (_: any, r: any) => <Text style={{ fontSize: 12 }}>{r.customer?.fullName || '—'}</Text> },
                        { title: 'Amount', key: 'amt', render: (_: any, r: any) => <Text strong style={{ fontSize: 12 }}>{r.totalAmount ? `${Number(r.totalAmount).toLocaleString()} ₫` : '—'}</Text> },
                        { title: 'Status', key: 'status', render: (_: any, r: any) => <Tag color={r.status === 'completed' ? 'success' : r.status === 'processing' ? 'processing' : 'default'}>{r.status || '—'}</Tag> },
                      ]}
                    />
                  ) : <Empty description="No orders yet" />}
                </Card>
              </Col>

              <Col xs={24} md={12}>
                <Card variant="outlined" style={{ borderRadius: 10, borderColor: '#e5e7eb' }} styles={{ body: { padding: '16px 20px' } }}>
                  <Title level={5} style={{ margin: 0, fontWeight: 700, marginBottom: 12 }}>Recent Support Tickets</Title>
                  {metrics?.recentTickets && metrics.recentTickets.length > 0 ? (
                    <Table
                      dataSource={metrics.recentTickets}
                      rowKey="id"
                      size="small"
                      pagination={false}
                      columns={[
                        { title: 'Subject', key: 'subj', render: (_: any, r: any) => <Text style={{ fontSize: 12 }}>{r.subject}</Text> },
                        { title: 'Customer', key: 'cust', render: (_: any, r: any) => <Text style={{ fontSize: 12 }}>{r.customer?.fullName || '—'}</Text> },
                        { title: 'Status', key: 'status', render: (_: any, r: any) => <Tag color={r.status === 'Open' ? 'error' : r.status === 'In Progress' ? 'processing' : 'success'}>{r.status}</Tag> },
                      ]}
                    />
                  ) : <Empty description="No tickets yet" />}
                </Card>
              </Col>
            </Row>
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
          initialValues={{ customerType: 'End user' }}
          onFinish={handleSubmitCustomer}
        >
          <Form.Item name="customerType" label="Customer Type" rules={[{ required: true, message: 'Please select customer type' }]}>
            <Select placeholder="Select customer type" disabled={modalMode === 'edit'}>
              <Select.Option value="End user">End user</Select.Option>
              <Select.Option value="Outlet">Outlet</Select.Option>
              <Select.Option value="Keyshop">Keyshop</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="fullName"
            label="Full Name"
            rules={[{ required: true, message: 'Please enter full name' }]}
          >
            <Input placeholder="Enter full name" />
          </Form.Item>
          {isEndUser && (
            <>
              <Form.Item name="gender" label="Gender" rules={[{ required: true, message: 'Please select gender' }]}>
                <Select placeholder="Select gender">
                  <Select.Option value="male">Male</Select.Option>
                  <Select.Option value="female">Female</Select.Option>
                  <Select.Option value="other">Other</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item name="dateOfBirth" label="Date of Birth" rules={[{ required: true, message: 'Please select date of birth' }]}>
                <DatePicker style={{ width: '100%' }} format="DD/MM/YYYY" />
              </Form.Item>
            </>
          )}
          <Form.Item
            name="phone"
            label="Phone Number"
            rules={[{ required: true, message: 'Please enter phone number' }]}
          >
            <Input placeholder="Enter phone number" disabled={modalMode === 'edit'} />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[{ type: 'email', message: 'Invalid email' }]}
          >
            <Input placeholder="Enter email (optional)" disabled={modalMode === 'edit'} />
          </Form.Item>
          <Form.Item name="address" label="Address">
            <Input placeholder="Enter address" />
          </Form.Item>
          
          {!isEndUser && (
            <Form.Item name="dmsCode" label="DMS Code">
              <Input placeholder="Enter DMS Code" />
            </Form.Item>
          )}

          <Form.Item name="notes" label="Notes">
            <Input.TextArea placeholder="Enter notes" rows={3} />
          </Form.Item>

          {isEndUser && (
            <>
              <Divider style={{ margin: '12px 0' }} orientation="left">Children Information</Divider>
              <Form.List name="babies">
                {(fields, { add, remove }) => (
                  <>
                    {fields.map(({ key, name, ...restField }) => (
                      <Card size="small" key={key} style={{ marginBottom: 12, background: '#f9fafb' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                          <Text strong>Child #{name + 1}</Text>
                          <Button type="text" danger icon={<DeleteOutlined />} onClick={() => remove(name)} />
                        </div>
                        <Row gutter={12}>
                          <Col span={12}>
                            <Form.Item {...restField} name={[name, 'name']} label="Child Name" rules={[{ required: true, message: 'Missing name' }]}>
                              <Input placeholder="Name" />
                            </Form.Item>
                          </Col>
                          <Col span={12}>
                            <Form.Item {...restField} name={[name, 'dateOfBirth']} label="Date of Birth" rules={[{ required: true, message: 'Missing date of birth' }]}>
                              <DatePicker style={{ width: '100%' }} format="DD/MM/YYYY" />
                            </Form.Item>
                          </Col>
                          <Col span={12}>
                            <Form.Item {...restField} name={[name, 'gender']} label="Gender" rules={[{ required: true, message: 'Missing gender' }]}>
                              <Select placeholder="Gender" allowClear>
                                <Select.Option value="male">Male</Select.Option>
                                <Select.Option value="female">Female</Select.Option>
                              </Select>
                            </Form.Item>
                          </Col>
                          <Col span={12}>
                            <Form.Item {...restField} name={[name, 'stageCode']} label="Stage" rules={[{ required: true, message: 'Missing stage' }]}>
                              <Select placeholder="Stage" allowClear>
                                <Select.Option value="NEWBORN">Newborn</Select.Option>
                                <Select.Option value="INFANT">Infant</Select.Option>
                                <Select.Option value="TODDLER">Toddler</Select.Option>
                              </Select>
                            </Form.Item>
                          </Col>
                        </Row>
                      </Card>
                    ))}
                    <Form.Item>
                      <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                        Add Child
                      </Button>
                    </Form.Item>
                  </>
                )}
              </Form.List>
            </>
          )}
        </Form>
      </Modal>
    </>
  );
}
