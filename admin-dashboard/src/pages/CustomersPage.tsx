import React, { useState, useEffect, useCallback } from 'react';
import {
  Table, Input, Card, Typography, Tag, Space, Button, Avatar, Drawer,
  Descriptions, Tabs, Timeline, Statistic, Row, Col, Badge, Empty, Modal, Form, Select, DatePicker, message
} from 'antd';
import {
  SearchOutlined, UserOutlined, PhoneOutlined, MailOutlined,
  GiftOutlined, ReloadOutlined, EyeOutlined, PlusOutlined
} from '@ant-design/icons';
import dayjs from 'dayjs';
import { customerApi, loyaltyApi, babyApi } from '../services/api';

const { Title, Text } = Typography;

export default function CustomersPage() {
  const [customers, setCustomers] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [selectedCustomer, setSelectedCustomer] = useState<any>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [creating, setCreating] = useState(false);
  const [form] = Form.useForm();

  const fetchCustomers = useCallback(async () => {
    setLoading(true);
    try {
      const result = await customerApi.list({ take: 20, search: search || undefined });
      setCustomers(result.data);
    } catch (err) {
      // Use demo data if API not available
      setCustomers(demoCustomers);
    } finally {
      setLoading(false);
    }
  }, [search]);

  useEffect(() => {
    fetchCustomers();
  }, [fetchCustomers]);

  const handleCreateCustomer = async (values: any) => {
    setCreating(true);
    try {
      const payload = {
        ...values,
        dateOfBirth: values.dateOfBirth ? values.dateOfBirth.format('YYYY-MM-DD') : undefined,
      };
      await customerApi.create(payload);
      message.success('Customer created successfully');
      setCreateModalOpen(false);
      form.resetFields();
      fetchCustomers();
    } catch (err: any) {
      message.error(err.message || 'Failed to create customer');
    } finally {
      setCreating(false);
    }
  };

  const openCustomer360 = async (customer: any) => {
    setSelectedCustomer(customer);
    setDrawerOpen(true);
  };

  const columns = [
    {
      title: 'Customer',
      key: 'name',
      render: (_: any, record: any) => (
        <Space>
          <Avatar style={{ backgroundColor: '#0066CC' }} icon={<UserOutlined />} />
          <div>
            <Text strong>{record.fullName || record.full_name || 'Unknown'}</Text>
            <br />
            <Text type="secondary" style={{ fontSize: 12 }}>{record.id?.slice(0, 8)}...</Text>
          </div>
        </Space>
      ),
    },
    {
      title: 'Phone',
      key: 'phone',
      render: (_: any, r: any) => r.phone ? <Tag icon={<PhoneOutlined />}>{r.phone}</Tag> : <Text type="secondary">—</Text>,
    },
    {
      title: 'Email',
      key: 'email',
      render: (_: any, r: any) => r.email || <Text type="secondary">—</Text>,
    },
    {
      title: 'Tier',
      key: 'tier',
      render: (_: any, r: any) => {
        const tier = r.loyaltyAccount?.tierId || r.tier || 'BRONZE';
        const colors: Record<string, string> = { GOLD: 'gold', SILVER: 'default', BRONZE: 'blue' };
        return <Tag color={colors[tier] || 'blue'}>{tier}</Tag>;
      },
    },
    {
      title: 'Points',
      key: 'points',
      render: (_: any, r: any) => (
        <Space>
          <GiftOutlined style={{ color: '#faad14' }} />
          <Text strong>{(r.loyaltyAccount?.pointsBalance || r.points || 0).toLocaleString()}</Text>
        </Space>
      ),
    },
    {
      title: 'Orders',
      key: 'orders',
      render: (_: any, r: any) => r._count?.orders ?? r.orderCount ?? 0,
    },
    {
      title: 'Babies',
      key: 'babies',
      render: (_: any, r: any) => {
        const babies = r.babies || [];
        return babies.length > 0
          ? babies.map((b: any) => <Tag key={b.id} color="cyan">{b.name || b.stageCode || 'Baby'}</Tag>)
          : <Text type="secondary">—</Text>;
      },
    },
    {
      title: 'Action',
      key: 'action',
      render: (_: any, r: any) => (
        <Button type="link" icon={<EyeOutlined />} onClick={() => openCustomer360(r)}>
          360°
        </Button>
      ),
    },
  ];

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
        <Title level={3} style={{ margin: 0 }}>Customers</Title>
        <Space>
          <Input
            placeholder="Search by name, phone, email..."
            prefix={<SearchOutlined />}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onPressEnter={fetchCustomers}
            style={{ width: 300, borderRadius: 8 }}
            allowClear
          />
          <Button icon={<ReloadOutlined />} onClick={fetchCustomers}>Refresh</Button>
          <Button type="primary" icon={<PlusOutlined />} onClick={() => setCreateModalOpen(true)}>
            Add New Customer
          </Button>
        </Space>
      </div>

      <Card variant="outlined" style={{ borderRadius: 10, borderColor: '#e5e7eb' }}>
        <Table
          columns={columns}
          dataSource={customers}
          rowKey="id"
          loading={loading}
          pagination={{ pageSize: 15, showSizeChanger: false }}
        />
      </Card>

      {/* Customer 360 Drawer */}
      <Drawer
        title={
          <Space>
            <Avatar size={40} style={{ backgroundColor: '#0066CC' }} icon={<UserOutlined />} />
            <div>
              <Title level={5} style={{ margin: 0 }}>
                {selectedCustomer?.fullName || selectedCustomer?.full_name || 'Customer'}
              </Title>
              <Text type="secondary">{selectedCustomer?.phone}</Text>
            </div>
          </Space>
        }
        placement="right"
        size="large"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        {selectedCustomer && (
          <Tabs items={[
            {
              key: 'profile',
              label: 'Profile',
              children: (
                <Descriptions column={2} bordered size="small">
                  <Descriptions.Item label="Phone">{selectedCustomer.phone || '—'}</Descriptions.Item>
                  <Descriptions.Item label="Email">{selectedCustomer.email || '—'}</Descriptions.Item>
                  <Descriptions.Item label="Gender">{selectedCustomer.gender || '—'}</Descriptions.Item>
                  <Descriptions.Item label="DOB">{selectedCustomer.dateOfBirth || selectedCustomer.date_of_birth || '—'}</Descriptions.Item>
                  <Descriptions.Item label="Source">{selectedCustomer.registrationSource || selectedCustomer.registration_source || '—'}</Descriptions.Item>
                  <Descriptions.Item label="Quality Flag">
                    <Badge status={selectedCustomer.dataQualityFlag ? 'warning' : 'success'} text={selectedCustomer.dataQualityFlag || 'Clean'} />
                  </Descriptions.Item>
                </Descriptions>
              ),
            },
            {
              key: 'loyalty',
              label: 'Loyalty',
              children: (
                <Row gutter={16}>
                  <Col span={8}>
                    <Statistic
                      title="Points Balance"
                      value={selectedCustomer.loyaltyAccount?.pointsBalance || 0}
                      prefix={<GiftOutlined />}
                    />
                  </Col>
                  <Col span={8}>
                    <Statistic title="Lifetime Points" value={selectedCustomer.loyaltyAccount?.pointsLifetime || 0} />
                  </Col>
                  <Col span={8}>
                    <Statistic title="Redeemed" value={selectedCustomer.loyaltyAccount?.pointsRedeemed || 0} />
                  </Col>
                </Row>
              ),
            },
            {
              key: 'babies',
              label: 'Babies',
              children: selectedCustomer.babies?.length > 0
                ? selectedCustomer.babies.map((b: any) => (
                    <Card key={b.id} size="small" style={{ marginBottom: 8, borderRadius: 8 }}>
                      <Descriptions size="small" column={2}>
                        <Descriptions.Item label="Name">{b.name || '—'}</Descriptions.Item>
                        <Descriptions.Item label="Stage">{b.stageCode || b.stage_code || '—'}</Descriptions.Item>
                        <Descriptions.Item label="DOB">{b.dateOfBirth || b.date_of_birth || '—'}</Descriptions.Item>
                        <Descriptions.Item label="Born">{b.isBorn || b.is_born ? 'Yes' : 'Expecting'}</Descriptions.Item>
                      </Descriptions>
                    </Card>
                  ))
                : <Empty description="No baby profiles" />,
            },
          ]} />
        )}
      </Drawer>

      {/* Add New Customer Modal */}
      <Modal
        title="Add New Customer"
        open={createModalOpen}
        onCancel={() => setCreateModalOpen(false)}
        onOk={() => form.submit()}
        confirmLoading={creating}
        destroyOnClose
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={handleCreateCustomer}
          preserve={false}
        >
          <Form.Item
            name="fullName"
            label="Full Name"
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
            rules={[{ type: 'email', message: 'Please enter a valid email' }]}
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
            <DatePicker style={{ width: '100%' }} />
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
          <Form.Item noStyle dependencies={['customerType']}>
            {({ getFieldValue }) => {
              const type = getFieldValue('customerType');
              if (type === 'Outlet' || type === 'Keyshop') {
                return (
                  <Form.Item name="dmsCode" label="DMS Code">
                    <Input placeholder="Enter DMS Code" />
                  </Form.Item>
                );
              }
              return null;
            }}
          </Form.Item>
          <Form.Item name="notes" label="Notes">
            <Input.TextArea placeholder="Enter notes" rows={3} />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

// Demo data for when API is not connected
const demoCustomers = [
  { id: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890', fullName: 'Nguyen Thi Mai', phone: '+84901234567', email: 'mai@example.com', gender: 'female', tier: 'GOLD', points: 2450, orderCount: 12, babies: [{ id: '1', name: 'Bé An', stageCode: 'INFANT' }], loyaltyAccount: { pointsBalance: 2450, pointsLifetime: 5200, pointsRedeemed: 2750 } },
  { id: 'b2c3d4e5-f6a7-8901-bcde-f12345678901', fullName: 'Tran Van Duc', phone: '+84912345678', email: 'duc@example.com', gender: 'male', tier: 'SILVER', points: 890, orderCount: 5, babies: [], loyaltyAccount: { pointsBalance: 890, pointsLifetime: 1200, pointsRedeemed: 310 } },
  { id: 'c3d4e5f6-a7b8-9012-cdef-123456789012', fullName: 'Le Thi Hoa', phone: '+84923456789', email: null, gender: 'female', tier: 'BRONZE', points: 120, orderCount: 1, babies: [{ id: '2', name: 'Bé Bình', stageCode: 'NEWBORN' }, { id: '3', name: 'Bé Châu', stageCode: 'TODDLER' }], loyaltyAccount: { pointsBalance: 120, pointsLifetime: 120, pointsRedeemed: 0 } },
  { id: 'd4e5f6a7-b8c9-0123-defa-234567890123', fullName: 'Pham Minh Tuan', phone: '+84934567890', email: 'tuan@example.com', gender: 'male', tier: 'BRONZE', points: 50, orderCount: 0, babies: [], loyaltyAccount: { pointsBalance: 50, pointsLifetime: 50, pointsRedeemed: 0 } },
  { id: 'e5f6a7b8-c9d0-1234-efab-345678901234', fullName: 'Vo Thi Lan', phone: '+84945678901', email: 'lan@example.com', gender: 'female', tier: 'SILVER', points: 1580, orderCount: 8, babies: [{ id: '4', name: 'Bé Dũng', stageCode: 'INFANT' }], loyaltyAccount: { pointsBalance: 1580, pointsLifetime: 3200, pointsRedeemed: 1620 } },
];
