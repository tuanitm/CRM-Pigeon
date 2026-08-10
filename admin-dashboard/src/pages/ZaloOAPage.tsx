import React, { useState, useEffect } from 'react';
import {
  Card, Typography, Button, Space, Tag, Table, Empty, Badge,
  Descriptions, Tooltip, Row, Col, Statistic, Modal, Form, Input, Select, message, Popconfirm,
} from 'antd';
import {
  PlusOutlined, LinkOutlined, DisconnectOutlined,
  CheckCircleOutlined, SyncOutlined, DeleteOutlined,
  ReloadOutlined, InfoCircleOutlined, EditOutlined,
} from '@ant-design/icons';
import { zaloOAApi } from '../services/api';

const { Title, Text, Paragraph } = Typography;

export default function ZaloOAPage() {
  const [oaList, setOaList] = useState<any[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [editingOA, setEditingOA] = useState<any>(null);
  const [form] = Form.useForm();

  const loadData = async () => {
    try {
      const data = await zaloOAApi.list();
      setOaList(data);
    } catch (err) { console.error(err); }
  };

  useEffect(() => { loadData(); }, []);

  const openCreate = () => {
    setEditingOA(null);
    form.resetFields();
    setModalVisible(true);
  };

  const openEdit = (oa: any) => {
    setEditingOA(oa);
    form.setFieldsValue({
      oaId: oa.oaId,
      name: oa.name,
      description: oa.description,
      packageName: oa.packageName,
      followers: oa.followers,
      status: oa.status,
    });
    setModalVisible(true);
  };

  const handleSave = async (values: any) => {
    try {
      if (editingOA) {
        await zaloOAApi.update(editingOA.id, values);
        message.success('OA updated');
      } else {
        await zaloOAApi.create(values);
        message.success('OA created');
      }
      setModalVisible(false);
      form.resetFields();
      setEditingOA(null);
      loadData();
    } catch (err) {
      message.error(editingOA ? 'Failed to update' : 'Failed to create');
    }
  };

  const handleToggleStatus = async (oa: any) => {
    const newStatus = oa.status === 'connected' ? 'disconnected' : 'connected';
    try {
      await zaloOAApi.updateStatus(oa.id, newStatus);
      message.success(`OA ${newStatus}`);
      loadData();
    } catch (err) { message.error('Failed to update status'); }
  };

  const handleDelete = async (id: string) => {
    try {
      await zaloOAApi.delete(id);
      message.success('OA deleted');
      loadData();
    } catch (err: any) {
      let errorMsg = 'Failed to delete';
      try { const parsed = JSON.parse(err.message?.split(': ').slice(1).join(': ')); errorMsg = parsed.message || errorMsg; } catch {}
      message.error(errorMsg);
    }
  };

  const columns = [
    {
      title: '',
      key: 'avatar',
      width: 56,
      render: (_: any, r: any) => (
        <div style={{
          width: 40, height: 40, borderRadius: 10,
          background: 'linear-gradient(135deg, #0068ff, #00a5ff)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#fff', fontWeight: 700, fontSize: 16,
        }}>
          {r.name?.[0] || 'Z'}
        </div>
      ),
    },
    {
      title: 'OA Name',
      dataIndex: 'name',
      key: 'name',
      render: (name: string, r: any) => (
        <div>
          <Text strong style={{ fontSize: 13 }}>{name}</Text>
          <br />
          <Text type="secondary" style={{ fontSize: 11 }}>OA ID: {r.oaId}</Text>
        </div>
      ),
    },
    {
      title: 'Status',
      key: 'status',
      width: 140,
      render: (_: any, r: any) => (
        <Tag
          icon={r.status === 'connected' ? <CheckCircleOutlined /> : <DisconnectOutlined />}
          color={r.status === 'connected' ? 'success' : 'default'}
          style={{ borderRadius: 6, cursor: 'pointer' }}
          onClick={() => handleToggleStatus(r)}
        >
          {r.status === 'connected' ? 'Connected' : 'Disconnected'}
        </Tag>
      ),
    },
    {
      title: 'Package',
      dataIndex: 'packageName',
      key: 'packageName',
      render: (pkg: string) => <Tag color="blue">{pkg || 'Standard'}</Tag>,
    },
    {
      title: 'Followers',
      dataIndex: 'followers',
      key: 'followers',
      render: (f: number) => <Text>{f?.toLocaleString() || '0'}</Text>,
    },
    {
      title: 'Mini Apps',
      key: 'miniApps',
      width: 90,
      render: (_: any, r: any) => <Badge count={r.miniApps?.length || 0} style={{ background: '#6b7280' }} />,
    },
    {
      title: 'Created',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (d: string) => (
        <Text type="secondary" style={{ fontSize: 12 }}>
          {d ? new Date(d).toLocaleDateString('vi-VN') : '—'}
        </Text>
      ),
    },
    {
      title: 'Actions',
      key: 'actions',
      width: 130,
      render: (_: any, r: any) => (
        <Space>
          <Tooltip title="Edit">
            <Button type="text" size="small" icon={<EditOutlined />} onClick={() => openEdit(r)} />
          </Tooltip>
          <Tooltip title={r.status === 'connected' ? 'Disconnect' : 'Connect'}>
            <Button
              type="text" size="small"
              icon={r.status === 'connected' ? <DisconnectOutlined /> : <LinkOutlined />}
              style={{ color: r.status === 'connected' ? '#f5222d' : '#52c41a' }}
              onClick={() => handleToggleStatus(r)}
            />
          </Tooltip>
          <Popconfirm title="Delete this OA?" onConfirm={() => handleDelete(r.id)} okText="Delete" okType="danger">
            <Tooltip title="Delete">
              <Button type="text" size="small" danger icon={<DeleteOutlined />} />
            </Tooltip>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div style={{ maxWidth: 1200, margin: '0 auto' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <div>
          <Title level={3} style={{ margin: 0 }}>Zalo OA Management</Title>
          <Text type="secondary">Connect and manage your Zalo Official Accounts</Text>
        </div>
        <Button type="primary" icon={<PlusOutlined />} size="large" style={{ borderRadius: 8 }} onClick={openCreate}>
          Connect New OA
        </Button>
      </div>

      {/* Stats */}
      <Row gutter={16} style={{ marginBottom: 24 }}>
        <Col span={6}>
          <Card variant="outlined" style={{ borderRadius: 12, borderColor: '#e5e7eb' }}>
            <Statistic title={<Text type="secondary" style={{ fontSize: 12 }}>Total OA</Text>} value={oaList.length} valueStyle={{ color: '#3b82f6', fontWeight: 700 }} />
          </Card>
        </Col>
        <Col span={6}>
          <Card variant="outlined" style={{ borderRadius: 12, borderColor: '#e5e7eb' }}>
            <Statistic title={<Text type="secondary" style={{ fontSize: 12 }}>Connected</Text>} value={oaList.filter(o => o.status === 'connected').length} valueStyle={{ color: '#22c55e', fontWeight: 700 }} />
          </Card>
        </Col>
        <Col span={6}>
          <Card variant="outlined" style={{ borderRadius: 12, borderColor: '#e5e7eb' }}>
            <Statistic title={<Text type="secondary" style={{ fontSize: 12 }}>Total Followers</Text>} value={oaList.reduce((s: number, o: any) => s + (o.followers || 0), 0)} valueStyle={{ color: '#8b5cf6', fontWeight: 700 }} />
          </Card>
        </Col>
        <Col span={6}>
          <Card variant="outlined" style={{ borderRadius: 12, borderColor: '#e5e7eb' }}>
            <Statistic title={<Text type="secondary" style={{ fontSize: 12 }}>Mini Apps</Text>} value={oaList.reduce((s: number, o: any) => s + (o.miniApps?.length || 0), 0)} valueStyle={{ color: '#f59e0b', fontWeight: 700 }} />
          </Card>
        </Col>
      </Row>

      {/* Info */}
      <Card variant="outlined" style={{ borderRadius: 12, marginBottom: 24, borderColor: '#dbeafe', background: '#eff6ff' }} styles={{ body: { padding: '16px 20px' } }}>
        <Space>
          <InfoCircleOutlined style={{ color: '#3b82f6', fontSize: 18 }} />
          <div>
            <Text strong style={{ color: '#1e40af' }}>Getting Started</Text>
            <Paragraph style={{ margin: 0, color: '#1e40af', fontSize: 12, opacity: 0.8 }}>
              Connect your Zalo OA to enable ZNS messaging, customer follow notifications, and marketing campaigns.
              You must be an OA admin and the account must be verified.
            </Paragraph>
          </div>
        </Space>
      </Card>

      {/* Table */}
      <Card variant="outlined" style={{ borderRadius: 12, borderColor: '#e5e7eb' }}
        title={<Space><div style={{ width: 28, height: 28, borderRadius: 8, background: 'linear-gradient(135deg, #0068ff, #00a5ff)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><span style={{ color: '#fff', fontWeight: 800, fontSize: 13 }}>Z</span></div><Text strong>Connected OA Accounts</Text></Space>}
      >
        <Table
          columns={columns} dataSource={oaList} rowKey="id"
          pagination={{ pageSize: 10, showTotal: (t) => `${t} OA accounts`, size: 'small' }}
          size="small"
          locale={{
            emptyText: (
              <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={<div><Text type="secondary">No Zalo OA connected yet</Text><br /><Text type="secondary" style={{ fontSize: 11 }}>Click "Connect New OA" to link your Zalo Official Account</Text></div>}>
                <Button type="primary" icon={<PlusOutlined />} onClick={openCreate}>Connect Now</Button>
              </Empty>
            ),
          }}
        />
      </Card>

      {/* Create/Edit Modal */}
      <Modal
        title={editingOA ? 'Edit OA' : 'Connect New OA'}
        open={modalVisible}
        onCancel={() => { setModalVisible(false); setEditingOA(null); form.resetFields(); }}
        onOk={() => form.submit()}
        okText={editingOA ? 'Save Changes' : 'Connect'}
        width={480}
      >
        <Form form={form} layout="vertical" onFinish={handleSave}>
          <Form.Item name="oaId" label="OA ID" rules={[{ required: true }]}>
            <Input placeholder="Enter Zalo OA ID" disabled={!!editingOA} />
          </Form.Item>
          <Form.Item name="name" label="OA Name" rules={[{ required: true }]}>
            <Input placeholder="Enter OA name" />
          </Form.Item>
          <Form.Item name="description" label="Description">
            <Input.TextArea rows={2} placeholder="Description (optional)" />
          </Form.Item>
          <Row gutter={12}>
            <Col span={12}>
              <Form.Item name="packageName" label="Package" initialValue="Standard">
                <Select options={[
                  { value: 'Standard', label: 'Standard' },
                  { value: 'Advanced', label: 'Advanced' },
                  { value: 'Premium', label: 'Premium' },
                ]} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="followers" label="Followers" initialValue={0}>
                <Input type="number" />
              </Form.Item>
            </Col>
          </Row>
          {editingOA && (
            <Form.Item name="status" label="Status">
              <Select options={[
                { value: 'connected', label: 'Connected' },
                { value: 'disconnected', label: 'Disconnected' },
              ]} />
            </Form.Item>
          )}
        </Form>
      </Modal>
    </div>
  );
}
