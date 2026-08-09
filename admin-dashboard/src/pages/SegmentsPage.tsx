import React, { useState } from 'react';
import { Card, Typography, Table, Tag, Space, Badge, Row, Col, Statistic, Button } from 'antd';
import { TeamOutlined, ThunderboltOutlined, ClockCircleOutlined, PlusOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const segmentsData = [
  { code: 'new_registered_no_order', name: 'Đăng ký, chưa mua hàng', members: 1_840, refresh: 'scheduled', system: true, status: 'active' },
  { code: 'first_order_no_second', name: 'Mua lần đầu, chưa mua lần 2', members: 2_120, refresh: 'scheduled', system: true, status: 'active' },
  { code: 'repeat_buyer', name: 'Mua lại (2+ đơn)', members: 4_680, refresh: 'scheduled', system: true, status: 'active' },
  { code: 'expecting_mother', name: 'Mẹ bầu', members: 320, refresh: 'realtime', system: true, status: 'active' },
  { code: 'newborn_0_6m', name: 'Trẻ sơ sinh (0-6 tháng)', members: 890, refresh: 'realtime', system: true, status: 'active' },
  { code: 'scanned_qr_never_bought_web', name: 'Quét QR, chưa mua online', members: 560, refresh: 'scheduled', system: true, status: 'active' },
  { code: 'high_value_at_risk', name: 'Khách VIP có nguy cơ rời', members: 145, refresh: 'scheduled', system: true, status: 'active' },
  { code: 'cart_abandoner', name: 'Bỏ giỏ hàng (7 ngày)', members: 78, refresh: 'realtime', system: true, status: 'active' },
  { code: 'tier_upgrade_candidate', name: 'Ứng viên nâng hạng', members: 420, refresh: 'scheduled', system: true, status: 'active' },
  { code: 'profile_incomplete', name: 'Hồ sơ thiếu thông tin', members: 3_200, refresh: 'scheduled', system: true, status: 'active' },
];

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
    title: 'Thành viên',
    key: 'members',
    sorter: (a: any, b: any) => a.members - b.members,
    render: (_: any, r: any) => <span style={{ fontWeight: 600, fontSize: 16 }}>{r.members.toLocaleString()}</span>,
  },
  {
    title: 'Làm mới',
    key: 'refresh',
    render: (_: any, r: any) => (
      <Tag icon={r.refresh === 'realtime' ? <ThunderboltOutlined /> : <ClockCircleOutlined />}
        color={r.refresh === 'realtime' ? 'green' : 'blue'}>
        {r.refresh === 'realtime' ? 'Realtime' : 'Định kỳ'}
      </Tag>
    ),
  },
  {
    title: 'Loại',
    key: 'system',
    render: (_: any, r: any) => r.system ? <Tag color="purple">System</Tag> : <Tag>Custom</Tag>,
  },
  {
    title: 'Trạng thái',
    key: 'status',
    render: (_: any, r: any) => <Badge status={r.status === 'active' ? 'success' : 'default'} text={r.status === 'active' ? 'Hoạt động' : 'Bản nháp'} />,
  },
];

export default function SegmentsPage() {
  const [activeTab, setActiveTab] = useState<'intro' | 'list' | 'events' | 'pending'>('list');
  const totalMembers = segmentsData.reduce((sum, s) => sum + s.members, 0);

  return (
    <div style={{ display: 'flex', gap: 0 }}>
      {/* Sub-sidebar */}
      <div className="page-sub-sidebar" style={{ marginLeft: -20, marginTop: -20, marginBottom: -20 }}>
        <div
          className={`sub-sidebar-item ${activeTab === 'intro' ? 'sub-sidebar-item--active' : ''}`}
          onClick={() => setActiveTab('intro')}
        >
          <TeamOutlined /> Introduction
        </div>
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
              <Button type="primary" icon={<PlusOutlined />}>Tạo mới</Button>
            </div>

            <Row gutter={[12, 12]} style={{ marginBottom: 16 }}>
              <Col span={6}>
                <Card variant="outlined" style={{ borderRadius: 10, borderColor: '#e5e7eb' }}>
                  <Statistic title="Tổng Segment" value={segmentsData.length} prefix={<TeamOutlined />} />
                </Card>
              </Col>
              <Col span={6}>
                <Card variant="outlined" style={{ borderRadius: 10, borderColor: '#e5e7eb' }}>
                  <Statistic title="Tổng thành viên" value={totalMembers} />
                </Card>
              </Col>
              <Col span={6}>
                <Card variant="outlined" style={{ borderRadius: 10, borderColor: '#e5e7eb' }}>
                  <Statistic title="Realtime Segment" value={segmentsData.filter((s) => s.refresh === 'realtime').length} prefix={<ThunderboltOutlined />} />
                </Card>
              </Col>
              <Col span={6}>
                <Card variant="outlined" style={{ borderRadius: 10, borderColor: '#e5e7eb' }}>
                  <Statistic title="System Segment" value={segmentsData.filter((s) => s.system).length} />
                </Card>
              </Col>
            </Row>

            <Card variant="outlined" style={{ borderRadius: 10, borderColor: '#e5e7eb' }}>
              <Table columns={columns} dataSource={segmentsData} rowKey="code" pagination={false} />
            </Card>
          </>
        ) : (
          <div>
            <Title level={4} style={{ margin: '0 0 16px', fontWeight: 700 }}>
              {activeTab === 'intro' ? 'Introduction' : activeTab === 'events' ? 'Event Stream' : 'Pending Events'}
            </Title>
            <Card variant="outlined" style={{ borderRadius: 10, borderColor: '#e5e7eb' }}>
              <Text type="secondary">Tính năng đang được phát triển.</Text>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
