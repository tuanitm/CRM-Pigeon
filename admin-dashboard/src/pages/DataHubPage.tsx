import React, { useState } from 'react';
import {
  Card, Typography, Table, Tag, Space, Button, Input, Avatar, Tabs,
  Badge, Select, Tooltip, Modal, Row, Col,
} from 'antd';
import {
  PlusOutlined, SearchOutlined, FilterOutlined, DeleteOutlined,
  CopyOutlined, EditOutlined, DatabaseOutlined, ThunderboltOutlined,
  UserOutlined, DownloadOutlined,
} from '@ant-design/icons';

const { Title, Text } = Typography;

const dataHubEntries = [
  { id: 20162, name: '[GP] - Đơn hàng đầu tiên của KH (MGP 1892)', source: 'Thủ công', owner: 'Admin', ownerColor: '#ef4444', created: '14:03, 28/07/2026', updated: '14:03, 28/07/2026' },
  { id: 19554, name: '[GP] - Referral (MGP 2162)', source: 'Thủ công', owner: 'Ms Trang', ownerColor: '#3b82f6', created: '08:34, 01/07/2026', updated: '08:34, 01/07/2026' },
  { id: 19553, name: '[GP] Chia sẻ bạn bè (MGP 2162)', source: 'Dynamic Action', owner: 'Ms Trang', ownerColor: '#3b82f6', created: '08:34, 01/07/2026', updated: '08:34, 01/07/2026' },
  { id: 19251, name: 'Khách hàng tiềm năng Q3', source: 'Thủ công', owner: 'Admin', ownerColor: '#ef4444', created: '10:26, 18/06/2026', updated: '10:26, 18/06/2026' },
  { id: 18884, name: 'QR Scan Campaign July', source: 'Thủ công', owner: 'Admin', ownerColor: '#ef4444', created: '13:39, 02/06/2026', updated: '13:39, 02/06/2026' },
  { id: 18847, name: 'Đăng ký thành viên Ofu', source: 'Dynamic Action', owner: 'Văn Tiến', ownerColor: '#10b981', created: '00:04, 01/06/2026', updated: '00:04, 01/06/2026' },
  { id: 18280, name: 'Loyalty Re-engagement List', source: 'Dynamic Action', owner: 'Admin', ownerColor: '#ef4444', created: '21:09, 07/05/2026', updated: '21:09, 07/05/2026' },
  { id: 17630, name: 'Đăng ký thành viên', source: 'Dynamic Action', owner: 'Admin', ownerColor: '#ef4444', created: '11:12, 08/04/2026', updated: '11:12, 08/04/2026' },
  { id: 17570, name: 'Toppion Campaign Data', source: 'Thủ công', owner: 'Admin', ownerColor: '#ef4444', created: '17:51, 06/04/2026', updated: '17:51, 06/04/2026' },
  { id: 17477, name: 'Kích hoạt thành viên (MGP 655)', source: 'Dynamic Action', owner: 'Admin', ownerColor: '#ef4444', created: '10:17, 03/04/2026', updated: '10:17, 03/04/2026' },
  { id: 17353, name: 'Birthday Reward Batch', source: 'Thủ công', owner: 'Admin', ownerColor: '#ef4444', created: '12:21, 31/03/2026', updated: '12:21, 31/03/2026' },
  { id: 17081, name: 'New Product Launch Leads', source: 'Thủ công', owner: 'Admin', ownerColor: '#ef4444', created: '14:01, 23/03/2026', updated: '14:01, 23/03/2026' },
];

const columns = [
  {
    title: '',
    key: 'check',
    width: 40,
    render: () => <input type="checkbox" style={{ cursor: 'pointer' }} />,
  },
  {
    title: 'MÃ ↕',
    dataIndex: 'id',
    key: 'id',
    width: 80,
    render: (id: number) => <Text type="secondary">{id}</Text>,
    sorter: (a: any, b: any) => a.id - b.id,
  },
  {
    title: 'TÊN ↕',
    dataIndex: 'name',
    key: 'name',
    render: (name: string) => <Text strong style={{ color: '#3b82f6', cursor: 'pointer', fontSize: 13 }}>{name}</Text>,
  },
  {
    title: 'LOẠI NGUỒN ↕',
    dataIndex: 'source',
    key: 'source',
    render: (source: string) => (
      <Space>
        {source === 'Dynamic Action' ? <ThunderboltOutlined style={{ color: '#f59e0b' }} /> : <DatabaseOutlined style={{ color: '#6b7280' }} />}
        {source}
      </Space>
    ),
  },
  {
    title: 'SỞ HỮU',
    key: 'owner',
    render: (_: any, r: any) => (
      <Space>
        <Avatar size={24} style={{ background: r.ownerColor, fontSize: 10 }}>
          {r.owner.split(' ').map((w: string) => w[0]).join('').slice(0, 2)}
        </Avatar>
        <Text style={{ fontSize: 13 }}>{r.owner}</Text>
      </Space>
    ),
  },
  {
    title: 'NGÀY TẠO ↕',
    dataIndex: 'created',
    key: 'created',
    render: (d: string) => <Text type="secondary" style={{ fontSize: 12 }}>{d}</Text>,
  },
  {
    title: 'NGÀY CẬP NHẬT ↕',
    dataIndex: 'updated',
    key: 'updated',
    render: (d: string) => <Text type="secondary" style={{ fontSize: 12 }}>{d}</Text>,
  },
  {
    title: 'HÀNH ĐỘNG',
    key: 'actions',
    width: 100,
    render: () => (
      <Space>
        <Tooltip title="Chỉnh sửa"><Button type="text" size="small" icon={<CopyOutlined />} /></Tooltip>
        <Tooltip title="Xóa"><Button type="text" size="small" danger icon={<DeleteOutlined />} /></Tooltip>
      </Space>
    ),
  },
];

export default function DataHubPage() {
  const [activeTab, setActiveTab] = useState<'all' | 'export'>('all');

  return (
    <div style={{ display: 'flex', gap: 0 }}>
      {/* Sub-sidebar */}
      <div className="page-sub-sidebar" style={{ marginLeft: -20, marginTop: -20, marginBottom: -20 }}>
        <div
          className={`sub-sidebar-item ${activeTab === 'all' ? 'sub-sidebar-item--active' : ''}`}
          onClick={() => setActiveTab('all')}
        >
          <DatabaseOutlined /> All Data
        </div>
        <div
          className={`sub-sidebar-item ${activeTab === 'export' ? 'sub-sidebar-item--active' : ''}`}
          onClick={() => setActiveTab('export')}
        >
          <DownloadOutlined /> Export Management
        </div>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: '0 0 0 24px' }}>
        {activeTab === 'all' ? (
          <>
            {/* Tabs */}
            <Tabs
              defaultActiveKey="all"
              items={[
                { key: 'all', label: 'Tất cả' },
                { key: 'dynamic', label: 'Data Dynamic Action' },
                { key: 'add', label: '+' },
              ]}
              tabBarExtraContent={
                <Space>
                  <Input placeholder="Tìm theo tên DataHub..." prefix={<SearchOutlined />} style={{ width: 240, borderRadius: 8 }} />
                  <Button icon={<SettingsIcon />} />
                  <Button type="primary" icon={<PlusOutlined />}>Tạo mới</Button>
                </Space>
              }
              style={{ marginBottom: 0 }}
            />

            {/* Filters */}
            <Space style={{ marginBottom: 16 }}>
              <Button icon={<FilterOutlined />} style={{ borderRadius: 8 }}>Bộ lọc</Button>
              <Select defaultValue="all" style={{ width: 140 }} options={[
                { value: 'all', label: 'Loại nguồn' },
                { value: 'manual', label: 'Thủ công' },
                { value: 'dynamic', label: 'Dynamic Action' },
              ]} />
              <Select defaultValue="all" style={{ width: 120 }} options={[
                { value: 'all', label: 'Sở hữu' },
                { value: 'admin', label: 'Admin' },
                { value: 'trang', label: 'Ms Trang' },
              ]} />
            </Space>

            {/* Table */}
            <Card variant="outlined" style={{ borderRadius: 10, borderColor: '#e5e7eb' }} styles={{ body: { padding: 0 } }}>
              <Table
                columns={columns}
                dataSource={dataHubEntries}
                rowKey="id"
                pagination={{ pageSize: 12, showTotal: (total) => `${total} mục` }}
              />
            </Card>
          </>
        ) : (
          <div>
            <Title level={4} style={{ margin: '0 0 16px', fontWeight: 700 }}>Export Management</Title>
            <Card variant="outlined" style={{ borderRadius: 10, borderColor: '#e5e7eb' }}>
              <Text type="secondary">Quản lý các bản xuất dữ liệu. Tính năng đang được phát triển.</Text>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}

function SettingsIcon() {
  return <SettingsSvg />;
}

function SettingsSvg() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}
