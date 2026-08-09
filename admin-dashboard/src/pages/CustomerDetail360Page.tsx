import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  Typography, Card, Avatar, Tag, Row, Col, Space, Tabs, 
  Descriptions, Button, Statistic, Spin, Divider, Empty, Timeline,
  Modal, Form, Input, Select, DatePicker, message
} from 'antd';
import { 
  UserOutlined, ArrowLeftOutlined, MailOutlined, PhoneOutlined, 
  EnvironmentOutlined, CalendarOutlined, HeartOutlined, ShoppingCartOutlined, EditOutlined
} from '@ant-design/icons';
import { customerApi } from '../services/api';
import dayjs from 'dayjs';

const { Title, Text } = Typography;

export default function CustomerDetail360Page() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [customer, setCustomer] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    if (id) {
      loadCustomer();
    }
  }, [id]);

  const loadCustomer = async () => {
    setLoading(true);
    try {
      const data = await customerApi.get(id!);
      setCustomer(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleOpenEdit = () => {
    form.setFieldsValue({
      ...customer,
      dateOfBirth: customer.dateOfBirth ? dayjs(customer.dateOfBirth) : undefined,
      address: customer.addresses?.[0]?.addressLine1 || '',
    });
    setIsModalOpen(true);
  };

  const handleUpdate = async (values: any) => {
    setSubmitting(true);
    try {
      const payload = {
        ...values,
        dateOfBirth: values.dateOfBirth ? values.dateOfBirth.format('YYYY-MM-DD') : undefined,
      };
      await customerApi.update(id!, payload);
      message.success('Customer updated successfully!');
      setIsModalOpen(false);
      loadCustomer();
    } catch (err: any) {
      message.error(err.message || 'Error updating customer');
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return <div style={{ padding: 40, textAlign: 'center' }}><Spin size="large" /></div>;
  }

  if (!customer) {
    return <Empty description="Customer not found" style={{ marginTop: 60 }} />;
  }

  const tier = customer.tier || customer.loyaltyAccount?.tier?.tierCode || 'MEMBER';
  const tierColor = tier === 'GOLD' ? '#f59e0b' : tier === 'SILVER' ? '#94a3b8' : '#3b82f6';

  return (
    <div style={{ padding: '0 24px', maxWidth: 1200, margin: '0 auto' }}>
      <div style={{ marginBottom: 24, display: 'flex', alignItems: 'center', gap: 12 }}>
        <Button icon={<ArrowLeftOutlined />} onClick={() => navigate('/customer360')} type="text" />
        <Title level={4} style={{ margin: 0, fontWeight: 700, flex: 1 }}>Customer 360° Portrait</Title>
        <Button type="primary" icon={<EditOutlined />} onClick={handleOpenEdit}>Modify</Button>
      </div>

      <Row gutter={24}>
        {/* Left Profile Card */}
        <Col xs={24} md={8} lg={7}>
          <div className="profile-card" style={{ position: 'sticky', top: 24 }}>
            <div className="profile-avatar-wrapper">
              <Avatar size={96} style={{ background: tierColor }} icon={<UserOutlined />} />
            </div>
            
            <div style={{ textAlign: 'center', marginBottom: 24 }}>
              <Title level={4} style={{ margin: 0, fontWeight: 700 }}>{customer.fullName || 'Customer'}</Title>
              <Text type="secondary" style={{ fontSize: 13, display: 'block', marginTop: 4 }}>
                {customer.customerCode ? `#${customer.customerCode}` : `#${customer.id.substring(0, 8)}`}
              </Text>
              <div style={{ marginTop: 12 }}>
                <Tag color={tier === 'GOLD' ? 'gold' : tier === 'SILVER' ? 'default' : 'blue'} style={{ padding: '4px 12px', borderRadius: 16, fontWeight: 600 }}>
                  {tier}
                </Tag>
              </div>
            </div>

            <Divider style={{ margin: '16px 0' }} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <Space align="start">
                <PhoneOutlined style={{ color: '#9ca3af', marginTop: 4 }} />
                <div>
                  <Text type="secondary" style={{ fontSize: 11, display: 'block' }}>Phone</Text>
                  <Text strong>{customer.phone || '—'}</Text>
                </div>
              </Space>
              <Space align="start">
                <MailOutlined style={{ color: '#9ca3af', marginTop: 4 }} />
                <div>
                  <Text type="secondary" style={{ fontSize: 11, display: 'block' }}>Email</Text>
                  <Text>{customer.email || '—'}</Text>
                </div>
              </Space>
              <Space align="start">
                <EnvironmentOutlined style={{ color: '#9ca3af', marginTop: 4 }} />
                <div>
                  <Text type="secondary" style={{ fontSize: 11, display: 'block' }}>Address</Text>
                  <Text>{customer.addresses?.[0]?.addressLine1 || '—'}</Text>
                </div>
              </Space>
              <Space align="start">
                <CalendarOutlined style={{ color: '#9ca3af', marginTop: 4 }} />
                <div>
                  <Text type="secondary" style={{ fontSize: 11, display: 'block' }}>Date of Birth</Text>
                  <Text>{customer.dateOfBirth ? dayjs(customer.dateOfBirth).format('DD/MM/YYYY') : '—'}</Text>
                </div>
              </Space>
            </div>

            <Divider style={{ margin: '16px 0' }} />

            <Row gutter={8}>
              <Col span={12}>
                <div className="profile-stat-box">
                  <div className="profile-stat-box-value">{customer.orderCount || 0}</div>
                  <div className="profile-stat-box-label">Orders</div>
                </div>
              </Col>
              <Col span={12}>
                <div className="profile-stat-box">
                  <div className="profile-stat-box-value">
                    {customer.totalSpend > 0 ? `${(customer.totalSpend / 1000000).toFixed(1)}M` : '0'}
                  </div>
                  <div className="profile-stat-box-label">Spend</div>
                </div>
              </Col>
            </Row>

            <Row gutter={8} style={{ marginTop: 8 }}>
              <Col span={12}>
                <div className="profile-stat-box">
                  <div className="profile-stat-box-value" style={{ fontSize: 13 }}>
                    {dayjs(customer.createdAt).format('DD/MM/YYYY')}
                  </div>
                  <div className="profile-stat-box-label">First Join</div>
                </div>
              </Col>
              <Col span={12}>
                <div className="profile-stat-box">
                  <div className="profile-stat-box-value" style={{ fontSize: 13 }}>
                    {dayjs(customer.updatedAt).format('DD/MM/YYYY')}
                  </div>
                  <div className="profile-stat-box-label">Latest Activity</div>
                </div>
              </Col>
            </Row>
          </div>
        </Col>

        {/* Main Content Area */}
        <Col xs={24} md={16} lg={17}>
          <Card variant="outlined" style={{ borderRadius: 12, borderColor: '#e5e7eb', minHeight: 600 }}>
            <Tabs className="detail-tabs" defaultActiveKey="overview" items={[
              {
                key: 'overview',
                label: 'Overview',
                children: (
                  <div style={{ paddingTop: 16 }}>
                    <Title level={5} style={{ marginBottom: 24, fontWeight: 700 }}>Activity Timeline</Title>
                    <Timeline
                      items={[
                        {
                          color: 'green',
                          children: (
                            <>
                              <Text strong>Account Created</Text>
                              <br />
                              <Text type="secondary" style={{ fontSize: 12 }}>{dayjs(customer.createdAt).format('DD/MM/YYYY HH:mm')} - Source: {customer.registrationSource || 'Manual'}</Text>
                            </>
                          ),
                        },
                        {
                          color: 'blue',
                          children: (
                            <>
                              <Text strong>Last Interaction</Text>
                              <br />
                              <Text type="secondary" style={{ fontSize: 12 }}>{dayjs(customer.updatedAt).format('DD/MM/YYYY HH:mm')}</Text>
                            </>
                          ),
                        },
                      ]}
                    />
                    
                    <Divider />
                    
                    <Title level={5} style={{ marginBottom: 16, fontWeight: 700 }}>Loyalty Details</Title>
                    <Row gutter={16}>
                      <Col span={8}>
                        <Statistic title="Current Points" value={customer.points || customer.loyaltyAccount?.pointsBalance || 0} prefix={<HeartOutlined style={{ color: '#ec4899' }}/>} />
                      </Col>
                      <Col span={8}>
                        <Statistic title="Lifetime Points" value={customer.loyaltyAccount?.pointsLifetime || 0} />
                      </Col>
                      <Col span={8}>
                        <Statistic title="Customer Type" value={customer.customerType || 'End user'} />
                      </Col>
                    </Row>
                  </div>
                )
              },
              {
                key: 'orders',
                label: 'Purchase History',
                children: (
                  <div style={{ paddingTop: 16 }}>
                    <Empty 
                      image={<ShoppingCartOutlined style={{ fontSize: 48, color: '#d1d5db' }}/>} 
                      description="No recent orders found." 
                      style={{ marginTop: 40 }}
                    />
                  </div>
                )
              },
              {
                key: 'babies',
                label: 'Family & Babies',
                children: (
                  <div style={{ paddingTop: 16 }}>
                    {customer.babies && customer.babies.length > 0 ? (
                      <Row gutter={[16, 16]}>
                        {customer.babies.map((b: any) => (
                          <Col span={12} key={b.id}>
                            <Card size="small" style={{ borderRadius: 8, background: '#f8fafc', border: '1px solid #e2e8f0' }}>
                              <Space align="start">
                                <Avatar style={{ background: '#f472b6' }}>{b.name.charAt(0)}</Avatar>
                                <div>
                                  <Text strong style={{ display: 'block' }}>{b.name}</Text>
                                  <Text type="secondary" style={{ fontSize: 12 }}>Stage: {b.stageCode}</Text>
                                </div>
                              </Space>
                            </Card>
                          </Col>
                        ))}
                      </Row>
                    ) : (
                      <Empty description="No baby profiles found." style={{ marginTop: 40 }} />
                    )}
                  </div>
                )
              },
              {
                key: 'devices',
                label: 'Devices',
                children: (
                  <div style={{ paddingTop: 16 }}>
                    <Empty description="No device information found." style={{ marginTop: 40 }} />
                  </div>
                )
              },
              {
                key: 'goals',
                label: 'Goals',
                children: (
                  <div style={{ paddingTop: 16 }}>
                    <Empty description="No active goals." style={{ marginTop: 40 }} />
                  </div>
                )
              },
              {
                key: 'segment',
                label: 'Segment',
                children: (
                  <div style={{ paddingTop: 16 }}>
                    <Empty description="Customer does not belong to any segments yet." style={{ marginTop: 40 }} />
                  </div>
                )
              }
            ]} />
          </Card>
        </Col>
      </Row>

      <Modal
        title="Modify Customer"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        onOk={() => form.submit()}
        confirmLoading={submitting}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={handleUpdate}
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
    </div>
  );
}
