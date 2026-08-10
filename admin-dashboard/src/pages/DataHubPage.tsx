import React, { useState, useEffect } from 'react';
import {
  Card, Typography, Table, Tag, Space, Button, Input, Avatar, Tabs,
  Badge, Select, Tooltip, Modal, Row, Col, Form, message, Popconfirm,
} from 'antd';
import { dataHubApi } from '../services/api';
import {
  PlusOutlined, SearchOutlined, FilterOutlined, DeleteOutlined,
  CopyOutlined, EditOutlined, DatabaseOutlined, ThunderboltOutlined,
  UserOutlined, DownloadOutlined, EyeOutlined, TableOutlined,
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { Title, Text } = Typography;

export default function DataHubPage() {
  const [activeTab, setActiveTab] = useState<'all' | 'export'>('all');
  const [innerTab, setInnerTab] = useState('all');
  const [hubs, setHubs] = useState<any[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingHub, setEditingHub] = useState<any>(null);
  const navigate = useNavigate();
  const [form] = Form.useForm();
  
  const loadData = async () => {
    try {
      const data = await dataHubApi.list();
      setHubs(data);
    } catch (err) {
      console.error(err);
      message.error('Failed to load Data Hubs');
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleSave = async (values: any) => {
    try {
      if (editingHub) {
        await dataHubApi.update(editingHub.id, values);
        message.success('Data Hub updated successfully');
      } else {
        await dataHubApi.create({ ...values, ownerId: undefined });
        message.success('Data Hub created successfully');
      }
      setIsModalVisible(false);
      setEditingHub(null);
      form.resetFields();
      loadData();
    } catch (err) {
      message.error(editingHub ? 'Failed to update Data Hub' : 'Failed to create Data Hub');
    }
  };

  const openEdit = (hub: any) => {
    setEditingHub(hub);
    form.setFieldsValue({ name: hub.name, source: hub.source });
    setIsModalVisible(true);
  };

  const openCreate = () => {
    setEditingHub(null);
    form.resetFields();
    setIsModalVisible(true);
  };

  const handleDelete = async (id: string) => {
    try {
      await dataHubApi.delete(id);
      message.success('Data Hub deleted');
      loadData();
    } catch (err: any) {
      // Parse NestJS error response: "API 400: {\"message\":\"...\"}"
      let errorMsg = 'Failed to delete Data Hub';
      try {
        const jsonPart = err.message?.split(': ').slice(1).join(': ');
        const parsed = JSON.parse(jsonPart);
        errorMsg = parsed.message || errorMsg;
      } catch {}
      message.error(errorMsg);
    }
  };

  const displayedHubs = hubs.filter(hub => {
    if (innerTab === 'dynamic') return hub.source === 'Dynamic Action';
    return true;
  });

  const columns = [
    {
      title: '',
      key: 'check',
      width: 40,
      render: () => <input type="checkbox" style={{ cursor: 'pointer' }} />,
    },
    {
      title: 'ID ↕',
      dataIndex: 'id',
      key: 'id',
      width: 100,
      render: (id: string) => <Text type="secondary" style={{ fontSize: 12 }}>{id?.slice(0, 8)}</Text>,
    },
    {
      title: 'NAME ↕',
      dataIndex: 'name',
      key: 'name',
      render: (name: string, r: any) => (
        <Text
          strong
          style={{ color: '#3b82f6', cursor: 'pointer', fontSize: 13 }}
          onClick={() => navigate(`/data-hub/${r.id}`)}
        >
          {name}
        </Text>
      ),
    },
    {
      title: 'SOURCE TYPE ↕',
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
      title: 'OWNER',
      key: 'owner',
      render: (_: any, r: any) => {
        const ownerName = r.adminUser?.fullName || 'Admin';
        return (
          <Space>
            <Avatar size={24} style={{ background: '#ef4444', fontSize: 10 }}>
              {ownerName.split(' ').map((w: string) => w[0]).join('').slice(0, 2)}
            </Avatar>
            <Text style={{ fontSize: 13 }}>{ownerName}</Text>
          </Space>
        );
      },
    },
    {
      title: 'CREATED DATE ↕',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (d: string) => <Text type="secondary" style={{ fontSize: 12 }}>{d ? new Date(d).toLocaleString('vi-VN') : '—'}</Text>,
    },
    {
      title: 'UPDATED DATE ↕',
      dataIndex: 'updatedAt',
      key: 'updatedAt',
      render: (d: string) => <Text type="secondary" style={{ fontSize: 12 }}>{d ? new Date(d).toLocaleString('vi-VN') : '—'}</Text>,
    },
    {
      title: 'TABLES',
      key: 'tables',
      width: 80,
      render: (_: any, r: any) => (
        <Badge count={r.tables?.length || 0} style={{ background: '#6b7280' }} />
      ),
    },
    {
      title: 'ACTIONS',
      key: 'actions',
      width: 130,
      render: (_: any, r: any) => (
        <Space>
          <Tooltip title="View Data">
            <Button type="text" size="small" icon={<EyeOutlined />} onClick={() => navigate(`/data-hub/${r.id}`)} />
          </Tooltip>
          <Tooltip title="Edit">
            <Button type="text" size="small" icon={<EditOutlined />} onClick={() => openEdit(r)} />
          </Tooltip>
          <Popconfirm title="Delete this Data Hub?" onConfirm={() => handleDelete(r.id)} okText="Delete" okType="danger">
            <Tooltip title="Delete">
              <Button type="text" size="small" danger icon={<DeleteOutlined />} />
            </Tooltip>
          </Popconfirm>
        </Space>
      ),
    },
  ];

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
            <Tabs
              activeKey={innerTab}
              onChange={setInnerTab}
              items={[
                { key: 'all', label: 'All' },
                { key: 'dynamic', label: 'Data Dynamic Action' },
              ]}
              tabBarExtraContent={
                <Space>
                  <Input placeholder="Search Data Hub by name..." prefix={<SearchOutlined />} style={{ width: 240, borderRadius: 8 }} />
                  <Button icon={<SettingsIcon />} />
                  <Button type="primary" icon={<PlusOutlined />} onClick={openCreate}>Create New</Button>
                </Space>
              }
              style={{ marginBottom: 0 }}
            />

            {/* Filters */}
            <Space style={{ marginBottom: 16 }}>
              <Button icon={<FilterOutlined />} style={{ borderRadius: 8 }}>Filter</Button>
              <Select defaultValue="all" style={{ width: 140 }} options={[
                { value: 'all', label: 'Source Type' },
                { value: 'manual', label: 'Manual' },
                { value: 'dynamic', label: 'Dynamic Action' },
              ]} />
            </Space>

            {/* Table */}
            <Card variant="outlined" style={{ borderRadius: 10, borderColor: '#e5e7eb' }} styles={{ body: { padding: 0 } }}>
              <Table
                columns={columns}
                dataSource={displayedHubs}
                rowKey="id"
                pagination={{ pageSize: 12, showTotal: (total) => `${total} items` }}
                locale={{ emptyText: 'No Data Hubs yet. Click "Create New" to add one.' }}
              />
            </Card>

            {/* Create / Edit Modal */}
            <Modal
              title={editingHub ? 'Edit Data Hub' : 'Create Data Hub'}
              open={isModalVisible}
              onCancel={() => { setIsModalVisible(false); setEditingHub(null); form.resetFields(); }}
              onOk={() => form.submit()}
              okText={editingHub ? 'Save Changes' : 'Create'}
            >
              <Form form={form} layout="vertical" onFinish={handleSave}>
                <Form.Item name="name" label="Hub Name" rules={[{ required: true }]}>
                  <Input placeholder="e.g. Q3 Potential Customers" />
                </Form.Item>
                <Form.Item name="source" label="Source Type" rules={[{ required: true }]} initialValue="Manual">
                  <Select options={[
                    { value: 'Manual', label: 'Manual' },
                    { value: 'Dynamic Action', label: 'Dynamic Action' }
                  ]} />
                </Form.Item>
              </Form>
            </Modal>
          </>
        ) : (
          <div>
            <Title level={4} style={{ margin: '0 0 16px', fontWeight: 700 }}>Export Management</Title>
            <Card variant="outlined" style={{ borderRadius: 10, borderColor: '#e5e7eb' }}>
              <Text type="secondary">Manage data exports. Feature under development.</Text>
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
