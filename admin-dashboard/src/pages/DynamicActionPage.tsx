import React, { useState } from 'react';
import {
  Card, Typography, Table, Tag, Space, Button, Input, Badge, Tabs,
  Select, Tooltip, Row, Col, Statistic, Avatar,
} from 'antd';
import {
  ThunderboltOutlined, PlusOutlined, SearchOutlined, FilterOutlined,
  PlayCircleOutlined, PauseCircleOutlined, CopyOutlined, DeleteOutlined,
  EditOutlined, DatabaseOutlined, ClockCircleOutlined,
} from '@ant-design/icons';

const { Title, Text } = Typography;

const actionsData = [
  { id: 'DA-001', name: 'Cộng điểm khi mua hàng lần đầu', trigger: 'order.completed', target: 'Khách hàng mới', owner: 'Admin', ownerColor: '#ef4444', startDate: '10/11/2025', created: '14:03, 28/07/2026', status: 'running' },
  { id: 'DA-002', name: 'Trừ điểm đơn hủy sau mua hàng', trigger: 'order.cancelled', target: 'Đơn hàng', owner: 'Admin', ownerColor: '#ef4444', startDate: '11/11/2025', created: '14:03, 28/07/2026', status: 'running' },
  { id: 'DA-003', name: 'Gửi tin chào mừng khi quan tâm OA', trigger: 'zalo_oa.followed', target: 'Lead', owner: 'Admin', ownerColor: '#ef4444', startDate: '18/11/2025', created: '14:00, 28/07/2026', status: 'running' },
  { id: 'DA-004', name: 'Gửi thông báo đổi điểm 1 lần 1 tháng', trigger: 'schedule.monthly', target: 'Khách hàng', owner: 'Ms Trang', ownerColor: '#3b82f6', startDate: '21/11/2025', created: '11:42, 28/07/2026', status: 'running' },
  { id: 'DA-005', name: 'Ghi nhận referral khi giới thiệu đăng ký', trigger: 'referral.completed', target: 'Data Hub', owner: 'Ms Trang', ownerColor: '#3b82f6', startDate: '08/12/2025', created: '08:34, 01/07/2026', status: 'running' },
  { id: 'DA-006', name: 'Referral - Gửi voucher khi F2 mua', trigger: 'referral.f2_purchased', target: 'Đơn hàng', owner: 'Ms Trang', ownerColor: '#3b82f6', startDate: '08/12/2025', created: '08:34, 01/07/2026', status: 'running' },
  { id: 'DA-007', name: 'Auto tag VIP khi chi tiêu > 5M', trigger: 'loyalty.spend_threshold', target: 'Khách hàng', owner: 'Admin', ownerColor: '#ef4444', startDate: '01/01/2026', created: '10:00, 01/01/2026', status: 'stopped' },
  { id: 'DA-008', name: 'Gửi survey sau 7 ngày mua hàng', trigger: 'order.delivered + 7d', target: 'Khách hàng', owner: 'Admin', ownerColor: '#ef4444', startDate: '15/02/2026', created: '09:30, 15/02/2026', status: 'stopped' },
];

const columns = [
  {
    title: 'MÃ',
    dataIndex: 'id',
    key: 'id',
    width: 90,
    render: (id: string) => <Text type="secondary" style={{ fontSize: 12 }}>{id}</Text>,
  },
  {
    title: 'TÊN HÀNH ĐỘNG',
    dataIndex: 'name',
    key: 'name',
    render: (name: string) => <Text strong style={{ color: '#3b82f6', fontSize: 13 }}>{name}</Text>,
  },
  {
    title: 'TRIGGER',
    dataIndex: 'trigger',
    key: 'trigger',
    render: (t: string) => <Tag color="geekblue" style={{ fontSize: 11 }}>{t}</Tag>,
  },
  {
    title: 'ĐỐI TƯỢNG',
    dataIndex: 'target',
    key: 'target',
    render: (t: string) => {
      const icons: Record<string, React.ReactNode> = {
        'Khách hàng': <span>👤</span>,
        'Khách hàng mới': <span>🆕</span>,
        'Đơn hàng': <span>🛒</span>,
        'Lead': <span>🎯</span>,
        'Data Hub': <span>📊</span>,
      };
      return <Space>{icons[t] || '📋'} {t}</Space>;
    },
  },
  {
    title: 'SỞ HỮU',
    key: 'owner',
    render: (_: any, r: any) => (
      <Space>
        <Avatar size={22} style={{ background: r.ownerColor, fontSize: 9 }}>
          {r.owner.split(' ').map((w: string) => w[0]).join('').slice(0, 2)}
        </Avatar>
        <Text style={{ fontSize: 12 }}>{r.owner}</Text>
      </Space>
    ),
  },
  {
    title: 'NGÀY BẮT ĐẦU',
    dataIndex: 'startDate',
    key: 'startDate',
    render: (d: string) => <Text type="secondary" style={{ fontSize: 12 }}>{d}</Text>,
  },
  {
    title: 'NGÀY TẠO',
    dataIndex: 'created',
    key: 'created',
    render: (d: string) => <Text type="secondary" style={{ fontSize: 12 }}>{d}</Text>,
  },
  {
    title: 'TRẠNG THÁI',
    key: 'status',
    render: (_: any, r: any) => (
      <Tag
        color={r.status === 'running' ? 'blue' : 'default'}
        icon={r.status === 'running' ? <PlayCircleOutlined /> : <PauseCircleOutlined />}
        style={{ borderRadius: 6 }}
      >
        {r.status === 'running' ? 'Đang chạy' : 'Bản nháp'}
      </Tag>
    ),
  },
  {
    title: 'HÀNH ĐỘNG',
    key: 'actions',
    width: 120,
    render: () => (
      <Space>
        <Tooltip title="Sửa"><Button type="text" size="small" icon={<EditOutlined />} /></Tooltip>
        <Tooltip title="Nhân bản"><Button type="text" size="small" icon={<CopyOutlined />} /></Tooltip>
        <Tooltip title="Xóa"><Button type="text" size="small" danger icon={<DeleteOutlined />} /></Tooltip>
      </Space>
    ),
  },
];

export default function DynamicActionPage() {
  const [activeTab, setActiveTab] = useState<'all' | 'datasource'>('all');
  const [statusFilter, setStatusFilter] = useState<'all' | 'running' | 'stopped'>('all');

  const running = actionsData.filter(a => a.status === 'running');
  const stopped = actionsData.filter(a => a.status === 'stopped');
  const filtered = statusFilter === 'all' ? actionsData : statusFilter === 'running' ? running : stopped;

  return (
    <div style={{ display: 'flex', gap: 0 }}>
      {/* Sub-sidebar */}
      <div className="page-sub-sidebar" style={{ marginLeft: -20, marginTop: -20, marginBottom: -20 }}>
        <div
          className={`sub-sidebar-item ${activeTab === 'all' ? 'sub-sidebar-item--active' : ''}`}
          onClick={() => setActiveTab('all')}
        >
          <ThunderboltOutlined /> All Actions
        </div>
        <div
          className={`sub-sidebar-item ${activeTab === 'datasource' ? 'sub-sidebar-item--active' : ''}`}
          onClick={() => setActiveTab('datasource')}
        >
          <DatabaseOutlined /> Data Source
        </div>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: '0 0 0 24px' }}>
        {activeTab === 'all' ? (
          <>
            {/* KPI Summary */}
            <Row gutter={[12, 12]} style={{ marginBottom: 20 }}>
              <Col xs={24} sm={8}>
                <Card variant="outlined" style={{ borderRadius: 10, borderColor: '#e5e7eb' }} styles={{ body: { padding: '14px 18px' } }}>
                  <Statistic title="Tổng Dynamic Action" value={actionsData.length} prefix={<ThunderboltOutlined style={{ color: '#3b82f6' }} />} />
                </Card>
              </Col>
              <Col xs={24} sm={8}>
                <Card variant="outlined" style={{ borderRadius: 10, borderColor: '#e5e7eb' }} styles={{ body: { padding: '14px 18px' } }}>
                  <Statistic title="Đang chạy" value={running.length} prefix={<PlayCircleOutlined style={{ color: '#10b981' }} />} styles={{ content: { color: '#10b981' } }} />
                </Card>
              </Col>
              <Col xs={24} sm={8}>
                <Card variant="outlined" style={{ borderRadius: 10, borderColor: '#e5e7eb' }} styles={{ body: { padding: '14px 18px' } }}>
                  <Statistic title="Đã dừng" value={stopped.length} prefix={<PauseCircleOutlined style={{ color: '#6b7280' }} />} />
                </Card>
              </Col>
            </Row>

            {/* Tabs + Filters */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
              <Space>
                <Button
                  type={statusFilter === 'all' ? 'primary' : 'default'}
                  onClick={() => setStatusFilter('all')}
                  style={{ borderRadius: 8 }}
                >
                  Tất cả <Badge count={actionsData.length} style={{ marginLeft: 6, background: statusFilter === 'all' ? '#fff' : '#3b82f6', color: statusFilter === 'all' ? '#3b82f6' : '#fff' }} />
                </Button>
                <Button
                  type={statusFilter === 'running' ? 'primary' : 'default'}
                  onClick={() => setStatusFilter('running')}
                  style={{ borderRadius: 8 }}
                >
                  Đang chạy <Badge count={running.length} style={{ marginLeft: 6, background: '#10b981' }} />
                </Button>
                <Button
                  type={statusFilter === 'stopped' ? 'primary' : 'default'}
                  onClick={() => setStatusFilter('stopped')}
                  style={{ borderRadius: 8 }}
                >
                  Đã dừng <Badge count={stopped.length} style={{ marginLeft: 6, background: '#6b7280' }} />
                </Button>
              </Space>
              <Space>
                <Input placeholder="Tìm theo tên, mã..." prefix={<SearchOutlined />} style={{ width: 240, borderRadius: 8 }} />
                <Button type="primary" icon={<PlusOutlined />}>Tạo mới</Button>
              </Space>
            </div>

            {/* Table */}
            <Card variant="outlined" style={{ borderRadius: 10, borderColor: '#e5e7eb' }} styles={{ body: { padding: 0 } }}>
              <Table
                columns={columns}
                dataSource={filtered}
                rowKey="id"
                pagination={{ pageSize: 10, showTotal: (total) => `${total} hành động` }}
              />
            </Card>
          </>
        ) : (
          <div>
            <Title level={4} style={{ margin: '0 0 16px', fontWeight: 700 }}>Data Source</Title>
            <Card variant="outlined" style={{ borderRadius: 10, borderColor: '#e5e7eb' }}>
              <Text type="secondary">Quản lý nguồn dữ liệu cho Dynamic Action. Tính năng đang được phát triển.</Text>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
