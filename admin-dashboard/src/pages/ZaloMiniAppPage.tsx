import React, { useState, useEffect } from 'react';
import {
  Card, Typography, Button, Space, Tag, Table, Empty, Badge, Tabs,
  Row, Col, Statistic, Tooltip, Avatar, Modal, Form, Input, Select,
  Checkbox, message, Popconfirm, Divider, Descriptions,
} from 'antd';
import {
  PlusOutlined, CheckCircleOutlined, SettingOutlined,
  DeleteOutlined, InfoCircleOutlined, EyeOutlined,
  EditOutlined, QrcodeOutlined, LinkOutlined,
  AppstoreOutlined, UserOutlined, ShopOutlined,
  GiftOutlined, TrophyOutlined, FormOutlined,
  MobileOutlined, CopyOutlined, SyncOutlined,
} from '@ant-design/icons';
import { zaloMiniAppApi, zaloOAApi } from '../services/api';

const { Title, Text, Paragraph } = Typography;

const MINI_APP_FEATURES = [
  { key: 'membership', label: 'Membership Card', icon: <UserOutlined /> },
  { key: 'loyalty', label: 'Loyalty / Points', icon: <GiftOutlined /> },
  { key: 'voucher', label: 'Voucher', icon: <ShopOutlined /> },
  { key: 'minigame', label: 'Minigame', icon: <TrophyOutlined /> },
  { key: 'survey', label: 'Survey / Form', icon: <FormOutlined /> },
  { key: 'order', label: 'Order', icon: <ShopOutlined /> },
];

export default function ZaloMiniAppPage() {
  const [apps, setApps] = useState<any[]>([]);
  const [oaList, setOaList] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState('apps');
  const [modalVisible, setModalVisible] = useState(false);
  const [editingApp, setEditingApp] = useState<any>(null);
  const [form] = Form.useForm();

  const loadData = async () => {
    try {
      const [appsData, oasData] = await Promise.all([zaloMiniAppApi.list(), zaloOAApi.list()]);
      setApps(appsData);
      setOaList(oasData);
    } catch (err) { console.error(err); }
  };

  useEffect(() => { loadData(); }, []);

  const openCreate = () => {
    setEditingApp(null);
    form.resetFields();
    setModalVisible(true);
  };

  const openEdit = (app: any) => {
    setEditingApp(app);
    form.setFieldsValue({
      name: app.name,
      description: app.description,
      themeColor: app.themeColor,
      status: app.status,
      features: app.features || [],
      zaloOAId: app.zaloOAId,
    });
    setModalVisible(true);
  };

  const handleSave = async (values: any) => {
    try {
      if (editingApp) {
        await zaloMiniAppApi.update(editingApp.id, values);
        message.success('Mini App updated');
      } else {
        await zaloMiniAppApi.create(values);
        message.success('Mini App created');
      }
      setModalVisible(false);
      form.resetFields();
      setEditingApp(null);
      loadData();
    } catch (err) {
      message.error(editingApp ? 'Failed to update' : 'Failed to create');
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await zaloMiniAppApi.delete(id);
      message.success('Mini App deleted');
      loadData();
    } catch { message.error('Failed to delete'); }
  };

  const columns = [
    {
      title: '',
      key: 'icon',
      width: 56,
      render: (_: any, r: any) => (
        <Avatar
          shape="square" size={44}
          style={{ borderRadius: 10, background: r.themeColor || '#00c853' }}
          icon={<MobileOutlined />}
          src={r.iconUrl}
        />
      ),
    },
    {
      title: 'Mini App',
      dataIndex: 'name',
      key: 'name',
      render: (name: string, r: any) => (
        <div>
          <Text strong style={{ fontSize: 13 }}>{name}</Text>
          <br />
          <Text type="secondary" style={{ fontSize: 11 }}>App ID: {r.appId || r.id?.slice(0, 8)}</Text>
        </div>
      ),
    },
    {
      title: 'Linked OA',
      key: 'linkedOA',
      width: 180,
      render: (_: any, r: any) => (
        r.zaloOA ? (
          <Space>
            <Avatar size={20} style={{ background: '#0068ff', fontSize: 10 }}>Z</Avatar>
            <Text style={{ fontSize: 12 }}>{r.zaloOA.name}</Text>
          </Space>
        ) : (
          <Tag style={{ borderRadius: 6 }}>Not linked</Tag>
        )
      ),
    },
    {
      title: 'Status',
      key: 'status',
      width: 120,
      render: (_: any, r: any) => {
        const map: Record<string, { color: string; icon: React.ReactNode; text: string }> = {
          active: { color: 'success', icon: <CheckCircleOutlined />, text: 'Active' },
          review: { color: 'processing', icon: <SyncOutlined spin />, text: 'In Review' },
          draft: { color: 'default', icon: undefined, text: 'Draft' },
          suspended: { color: 'error', icon: undefined, text: 'Suspended' },
        };
        const s = map[r.status] || map.draft;
        return <Tag icon={s.icon} color={s.color} style={{ borderRadius: 6 }}>{s.text}</Tag>;
      },
    },
    {
      title: 'Features',
      key: 'features',
      width: 220,
      render: (_: any, r: any) => {
        const feats: string[] = Array.isArray(r.features) ? r.features : [];
        if (feats.length === 0) return <Text type="secondary" style={{ fontSize: 11 }}>—</Text>;
        return (
          <Space size={4} wrap>
            {feats.map((f: string) => {
              const feat = MINI_APP_FEATURES.find(m => m.key === f);
              return feat ? <Tag key={f} style={{ borderRadius: 4, fontSize: 11 }}>{feat.label}</Tag> : null;
            })}
          </Space>
        );
      },
    },
    {
      title: 'Users',
      dataIndex: 'totalUsers',
      key: 'totalUsers',
      width: 80,
      render: (u: number) => <Text strong>{u?.toLocaleString() || '0'}</Text>,
    },
    {
      title: 'Created',
      dataIndex: 'createdAt',
      key: 'createdAt',
      width: 110,
      render: (d: string) => <Text type="secondary" style={{ fontSize: 11 }}>{d ? new Date(d).toLocaleDateString('vi-VN') : '—'}</Text>,
    },
    {
      title: 'Actions',
      key: 'actions',
      width: 120,
      render: (_: any, r: any) => (
        <Space>
          <Tooltip title="Edit"><Button type="text" size="small" icon={<EditOutlined />} onClick={() => openEdit(r)} /></Tooltip>
          <Popconfirm title="Delete this Mini App?" onConfirm={() => handleDelete(r.id)} okText="Delete" okType="danger">
            <Tooltip title="Delete"><Button type="text" size="small" danger icon={<DeleteOutlined />} /></Tooltip>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div style={{ maxWidth: 1200, margin: '0 auto' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <Space align="center">
          <div style={{ width: 36, height: 36, borderRadius: 10, background: 'linear-gradient(135deg, #00c853, #69f0ae)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <MobileOutlined style={{ color: '#fff', fontSize: 18 }} />
          </div>
          <div>
            <Title level={3} style={{ margin: 0 }}>Zalo Mini App</Title>
            <Text type="secondary" style={{ fontSize: 12 }}>Manage Zalo Mini Apps — membership, loyalty, vouchers, minigames & more</Text>
          </div>
        </Space>
        <Button type="primary" icon={<PlusOutlined />} size="large" style={{ borderRadius: 8, background: 'linear-gradient(135deg, #00c853, #00e676)', border: 'none' }} onClick={openCreate}>
          Create Mini App
        </Button>
      </div>

      {/* Stats */}
      <Row gutter={16} style={{ marginBottom: 24 }}>
        <Col span={6}>
          <Card variant="outlined" style={{ borderRadius: 12, borderColor: '#e5e7eb' }}>
            <Statistic title={<Text type="secondary" style={{ fontSize: 12 }}>Total Apps</Text>} value={apps.length} prefix={<AppstoreOutlined style={{ color: '#22c55e' }} />} valueStyle={{ color: '#22c55e', fontWeight: 700 }} />
          </Card>
        </Col>
        <Col span={6}>
          <Card variant="outlined" style={{ borderRadius: 12, borderColor: '#e5e7eb' }}>
            <Statistic title={<Text type="secondary" style={{ fontSize: 12 }}>Active</Text>} value={apps.filter(a => a.status === 'active').length} prefix={<CheckCircleOutlined style={{ color: '#3b82f6' }} />} valueStyle={{ color: '#3b82f6', fontWeight: 700 }} />
          </Card>
        </Col>
        <Col span={6}>
          <Card variant="outlined" style={{ borderRadius: 12, borderColor: '#e5e7eb' }}>
            <Statistic title={<Text type="secondary" style={{ fontSize: 12 }}>Total Users</Text>} value={apps.reduce((s: number, a: any) => s + (a.totalUsers || 0), 0)} prefix={<UserOutlined style={{ color: '#8b5cf6' }} />} valueStyle={{ color: '#8b5cf6', fontWeight: 700 }} />
          </Card>
        </Col>
        <Col span={6}>
          <Card variant="outlined" style={{ borderRadius: 12, borderColor: '#e5e7eb' }}>
            <Statistic title={<Text type="secondary" style={{ fontSize: 12 }}>Linked OA</Text>} value={apps.filter(a => a.zaloOAId).length} prefix={<LinkOutlined style={{ color: '#f59e0b' }} />} valueStyle={{ color: '#f59e0b', fontWeight: 700 }} />
          </Card>
        </Col>
      </Row>

      {/* Main */}
      <Card variant="outlined" style={{ borderRadius: 12, borderColor: '#e5e7eb' }} styles={{ body: { padding: 0 } }}>
        <div style={{ padding: '0 16px' }}>
          <Tabs activeKey={activeTab} onChange={setActiveTab} items={[
            { key: 'apps', label: <Space><AppstoreOutlined />Mini Apps<Badge count={apps.length} style={{ background: '#6b7280', fontSize: 10 }} size="small" /></Space> },
            { key: 'intro', label: <Space><InfoCircleOutlined />Introduction</Space> },
          ]} />
        </div>

        {activeTab === 'apps' && (
          <Table columns={columns} dataSource={apps} rowKey="id" size="small"
            pagination={{ pageSize: 10, showTotal: (t) => `${t} apps`, size: 'small' }}
            scroll={{ x: 'max-content' }}
            locale={{
              emptyText: (
                <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} style={{ padding: '40px 0' }}
                  description={<div><Text type="secondary">No Mini Apps created yet</Text><br /><Text type="secondary" style={{ fontSize: 11 }}>Create a Zalo Mini App to enable membership, loyalty, and minigames</Text></div>}>
                  <Button type="primary" icon={<PlusOutlined />} style={{ background: 'linear-gradient(135deg, #00c853, #00e676)', border: 'none' }} onClick={openCreate}>Create First Mini App</Button>
                </Empty>
              ),
            }}
          />
        )}

        {activeTab === 'intro' && (
          <div style={{ padding: '32px 40px', maxWidth: 800 }}>
            <Title level={4}>Zalo Mini App Overview</Title>
            <Paragraph>
              Zalo Mini App is a lightweight app running on the Zalo platform, helping businesses build a direct interaction channel
              with customers without requiring a separate app installation.
            </Paragraph>
            <ul style={{ lineHeight: 2.2, color: '#374151' }}>
              <li><strong>Membership Card</strong> — Manage member info, tiers, and accumulated points</li>
              <li><strong>Loyalty / Points</strong> — Points accumulation and reward redemption program</li>
              <li><strong>Voucher</strong> — Issue and manage vouchers and discount coupons</li>
              <li><strong>Minigame</strong> — Lucky spin, quiz, scratch card</li>
              <li><strong>Survey / Form</strong> — Collect customer data</li>
              <li><strong>Order</strong> — Direct ordering on the Mini App</li>
            </ul>
            <Divider />
            <Title level={5}>Requirements</Title>
            <Descriptions column={1} bordered size="small">
              <Descriptions.Item label="Zalo OA">Requires at least 1 verified and connected OA</Descriptions.Item>
              <Descriptions.Item label="Access Rights">Shop owner or app admin account</Descriptions.Item>
              <Descriptions.Item label="Service Package">Available features depend on your service package</Descriptions.Item>
            </Descriptions>
          </div>
        )}
      </Card>

      {/* Create/Edit Modal */}
      <Modal
        title={editingApp ? 'Edit Mini App' : 'Create Mini App'}
        open={modalVisible}
        onCancel={() => { setModalVisible(false); setEditingApp(null); form.resetFields(); }}
        onOk={() => form.submit()}
        okText={editingApp ? 'Save Changes' : 'Create'}
        width={520}
      >
        <Form form={form} layout="vertical" onFinish={handleSave}>
          <Form.Item name="name" label="App Name" rules={[{ required: true }]}>
            <Input placeholder="Enter mini app name" />
          </Form.Item>
          <Form.Item name="description" label="Description">
            <Input.TextArea rows={2} placeholder="Description (optional)" />
          </Form.Item>
          <Row gutter={12}>
            <Col span={12}>
              <Form.Item name="zaloOAId" label="Link to OA">
                <Select placeholder="Select Zalo OA" allowClear
                  options={oaList.map(oa => ({ value: oa.id, label: oa.name }))}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="themeColor" label="Theme Color" initialValue="#00c853">
                <Input type="color" style={{ width: '100%', height: 32 }} />
              </Form.Item>
            </Col>
          </Row>
          {editingApp && (
            <Form.Item name="status" label="Status">
              <Select options={[
                { value: 'draft', label: 'Draft' },
                { value: 'active', label: 'Active' },
                { value: 'review', label: 'In Review' },
                { value: 'suspended', label: 'Suspended' },
              ]} />
            </Form.Item>
          )}
          <Form.Item name="features" label="Features">
            <Checkbox.Group
              options={MINI_APP_FEATURES.map(f => ({ label: f.label, value: f.key }))}
              style={{ display: 'flex', flexDirection: 'column', gap: 8 }}
            />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
