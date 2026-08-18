import React, { useState, useEffect } from 'react';
import {
  Card, Typography, Table, Tag, Space, Button, Input, Badge,
  Select, Tooltip, Row, Col, Statistic, Avatar, Modal, Form, DatePicker, message,
} from 'antd';
import {
  ThunderboltOutlined, PlusOutlined, SearchOutlined,
  PlayCircleOutlined, PauseCircleOutlined, CopyOutlined, DeleteOutlined,
} from '@ant-design/icons';
import { dynamicActionApi } from '../services/api';

const { Text } = Typography;

export default function DynamicActionPage() {
  const [statusFilter, setStatusFilter] = useState<'all' | 'running' | 'stopped' | 'draft'>('all');
  const [actions, setActions] = useState<any[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [form] = Form.useForm();

  const loadData = async () => {
    try {
      const actionsData = await dynamicActionApi.list();
      setActions(actionsData);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => { loadData(); }, []);

  const handleCreate = async (values: any) => {
    try {
      await dynamicActionApi.create({
        ...values,
        startDate: values.startDate?.toISOString(),
        endDate: values.endDate?.toISOString(),
      });
      message.success('Dynamic Action created successfully');
      setIsModalVisible(false);
      form.resetFields();
      loadData();
    } catch (err) {
      message.error('Failed to create Dynamic Action');
    }
  };

  const handleStatusToggle = async (id: string, currentStatus: string) => {
    const newStatus = currentStatus === 'running' ? 'stopped' : 'running';
    try {
      await dynamicActionApi.updateStatus(id, newStatus);
      message.success(`Status changed to ${newStatus}`);
      loadData();
    } catch (err) {
      message.error('Failed to update status');
    }
  };

  const handleDelete = async (id: string) => {
    Modal.confirm({
      title: 'Delete Dynamic Action',
      content: 'Are you sure you want to delete this action? This cannot be undone.',
      okText: 'Delete',
      okType: 'danger',
      onOk: async () => {
        try {
          await dynamicActionApi.delete(id);
          message.success('Dynamic Action deleted');
          loadData();
        } catch (err) {
          message.error('Failed to delete');
        }
      },
    });
  };

  const running = actions.filter(a => a.status === 'running');
  const stopped = actions.filter(a => a.status === 'stopped');
  const draft = actions.filter(a => a.status === 'draft');

  let filtered = actions;
  if (statusFilter === 'running') filtered = running;
  else if (statusFilter === 'stopped') filtered = stopped;
  else if (statusFilter === 'draft') filtered = draft;

  if (searchText) {
    filtered = filtered.filter(a =>
      a.name.toLowerCase().includes(searchText.toLowerCase()) ||
      a.actionCode?.toLowerCase().includes(searchText.toLowerCase())
    );
  }

  const columns = [
    {
      title: 'ID',
      dataIndex: 'actionCode',
      key: 'actionCode',
      width: 90,
      render: (code: string, r: any) => <Text type="secondary" style={{ fontSize: 12 }}>{code || r.id.slice(0, 8)}</Text>,
    },
    {
      title: 'ACTION NAME',
      dataIndex: 'name',
      key: 'name',
      render: (name: string) => (
        <Text strong style={{ fontSize: 13 }}>{name}</Text>
      ),
    },
    {
      title: 'TRIGGER',
      dataIndex: 'trigger',
      key: 'trigger',
      render: (t: string) => <Tag color="geekblue" style={{ fontSize: 11 }}>{t}</Tag>,
    },
    {
      title: 'TARGET',
      dataIndex: 'target',
      key: 'target',
      render: (t: string) => <Space>{t}</Space>,
    },
    {
      title: 'OWNER',
      key: 'owner',
      render: (_: any, r: any) => {
        const name = r.adminUser?.fullName || 'Admin';
        return (
          <Space>
            <Avatar size={22} style={{ background: '#ef4444', fontSize: 9 }}>
              {name.split(' ').map((w: string) => w[0]).join('').slice(0, 2)}
            </Avatar>
            <Text style={{ fontSize: 12 }}>{name}</Text>
          </Space>
        );
      },
    },
    {
      title: 'START DATE',
      dataIndex: 'startDate',
      key: 'startDate',
      render: (d: string) => <Text type="secondary" style={{ fontSize: 12 }}>{d ? new Date(d).toLocaleDateString() : '—'}</Text>,
    },
    {
      title: 'CREATED',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (d: string) => <Text type="secondary" style={{ fontSize: 12 }}>{new Date(d).toLocaleString('vi-VN')}</Text>,
    },
    {
      title: 'STATUS',
      key: 'status',
      render: (_: any, r: any) => (
        <Tag
          color={r.status === 'running' ? 'blue' : r.status === 'draft' ? 'orange' : 'default'}
          icon={r.status === 'running' ? <PlayCircleOutlined /> : <PauseCircleOutlined />}
          style={{ borderRadius: 6, cursor: 'pointer' }}
          onClick={() => handleStatusToggle(r.id, r.status)}
        >
          {r.status === 'running' ? 'Running' : r.status === 'draft' ? 'Draft' : 'Stopped'}
        </Tag>
      ),
    },
    {
      title: 'ACTIONS',
      key: 'actions',
      width: 100,
      render: (_: any, r: any) => (
        <Space>
          <Tooltip title="Duplicate"><Button type="text" size="small" icon={<CopyOutlined />} /></Tooltip>
          <Tooltip title="Delete"><Button type="text" size="small" danger icon={<DeleteOutlined />} onClick={() => handleDelete(r.id)} /></Tooltip>
        </Space>
      ),
    },
  ];

  return (
    <div>
      {/* KPI Summary */}
      <Row gutter={[12, 12]} style={{ marginBottom: 20 }}>
        <Col xs={24} sm={6}>
          <Card variant="outlined" style={{ borderRadius: 10, borderColor: '#e5e7eb' }} styles={{ body: { padding: '14px 18px' } }}>
            <Statistic title="Total Actions" value={actions.length} prefix={<ThunderboltOutlined style={{ color: '#3b82f6' }} />} />
          </Card>
        </Col>
        <Col xs={24} sm={6}>
          <Card variant="outlined" style={{ borderRadius: 10, borderColor: '#e5e7eb' }} styles={{ body: { padding: '14px 18px' } }}>
            <Statistic title="Running" value={running.length} prefix={<PlayCircleOutlined style={{ color: '#10b981' }} />} styles={{ content: { color: '#10b981' } }} />
          </Card>
        </Col>
        <Col xs={24} sm={6}>
          <Card variant="outlined" style={{ borderRadius: 10, borderColor: '#e5e7eb' }} styles={{ body: { padding: '14px 18px' } }}>
            <Statistic title="Draft" value={draft.length} prefix={<PauseCircleOutlined style={{ color: '#f59e0b' }} />} styles={{ content: { color: '#f59e0b' } }} />
          </Card>
        </Col>
        <Col xs={24} sm={6}>
          <Card variant="outlined" style={{ borderRadius: 10, borderColor: '#e5e7eb' }} styles={{ body: { padding: '14px 18px' } }}>
            <Statistic title="Stopped" value={stopped.length} prefix={<PauseCircleOutlined style={{ color: '#6b7280' }} />} />
          </Card>
        </Col>
      </Row>

      {/* Filters */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
        <Space>
          {[
            { key: 'all', label: 'All', count: actions.length, color: '#3b82f6' },
            { key: 'running', label: 'Running', count: running.length, color: '#10b981' },
            { key: 'draft', label: 'Draft', count: draft.length, color: '#f59e0b' },
            { key: 'stopped', label: 'Stopped', count: stopped.length, color: '#6b7280' },
          ].map(f => (
            <Button
              key={f.key}
              type={statusFilter === f.key ? 'primary' : 'default'}
              onClick={() => setStatusFilter(f.key as any)}
              style={{ borderRadius: 8 }}
            >
              {f.label} <Badge count={f.count} style={{ marginLeft: 6, background: f.color }} />
            </Button>
          ))}
        </Space>
        <Space>
          <Input
            placeholder="Search by name, code..."
            prefix={<SearchOutlined />}
            style={{ width: 240, borderRadius: 8 }}
            value={searchText}
            onChange={e => setSearchText(e.target.value)}
          />
          <Button type="primary" icon={<PlusOutlined />} onClick={() => setIsModalVisible(true)}>Create New</Button>
        </Space>
      </div>

      {/* Table */}
      <Card variant="outlined" style={{ borderRadius: 10, borderColor: '#e5e7eb' }} styles={{ body: { padding: 0 } }}>
        <Table
          columns={columns}
          dataSource={filtered}
          rowKey="id"
          pagination={{ pageSize: 10, showTotal: (total) => `${total} actions` }}
        />
      </Card>

      {/* Create Modal */}
      <Modal
        title="Create Dynamic Action"
        open={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        onOk={() => form.submit()}
        width={520}
      >
        <Form form={form} layout="vertical" onFinish={handleCreate}>
          <Form.Item name="name" label="Action Name" rules={[{ required: true }]}>
            <Input placeholder="e.g. Product Review Survey" />
          </Form.Item>
          <Form.Item name="description" label="Description">
            <Input.TextArea rows={2} placeholder="Optional description" />
          </Form.Item>
          <Row gutter={12}>
            <Col span={12}>
              <Form.Item name="trigger" label="Trigger" rules={[{ required: true }]} initialValue="form.submitted">
                <Select options={[
                  { value: 'form.submitted', label: 'Form Submitted' },
                  { value: 'qr.scanned', label: 'QR Scanned' },
                  { value: 'link.clicked', label: 'Link Clicked' },
                  { value: 'schedule.daily', label: 'Daily Schedule' },
                  { value: 'schedule.monthly', label: 'Monthly Schedule' },
                  { value: 'order.completed', label: 'Order Completed' },
                  { value: 'order.cancelled', label: 'Order Cancelled' },
                ]} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="target" label="Target" rules={[{ required: true }]} initialValue="Customer">
                <Select options={[
                  { value: 'Customer', label: 'Customer' },
                  { value: 'Order', label: 'Order' },
                  { value: 'Lead', label: 'Lead' },
                ]} />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={12}>
            <Col span={12}>
              <Form.Item name="startDate" label="Start Date">
                <DatePicker style={{ width: '100%' }} showTime />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="endDate" label="End Date">
                <DatePicker style={{ width: '100%' }} showTime />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
    </div>
  );
}
