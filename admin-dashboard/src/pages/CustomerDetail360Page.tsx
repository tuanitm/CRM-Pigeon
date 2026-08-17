import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  Typography, Card, Avatar, Tag, Row, Col, Space, Tabs, 
  Descriptions, Button, Statistic, Spin, Divider, Empty, Timeline,
  Modal, Form, Input, Select, DatePicker, message, Radio
} from 'antd';
import { 
  UserOutlined, ArrowLeftOutlined, MailOutlined, PhoneOutlined, 
  EnvironmentOutlined, CalendarOutlined, HeartOutlined, ShoppingCartOutlined, EditOutlined, DeleteOutlined, PlusOutlined, NodeIndexOutlined, GiftOutlined
} from '@ant-design/icons';
import { customerApi, productApi } from '../services/api';
import dayjs from 'dayjs';

const { Title, Text } = Typography;

export default function CustomerDetail360Page() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [customer, setCustomer] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBabyModalOpen, setIsBabyModalOpen] = useState(false);
  const [editingBaby, setEditingBaby] = useState<any>(null);
  const [submitting, setSubmitting] = useState(false);
  const [form] = Form.useForm();
  const [babyForm] = Form.useForm();

  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    if (id) {
      loadCustomer();
    }
    loadProducts();
  }, [id]);

  const loadProducts = async () => {
    try {
      const data = await productApi.list();
      setProducts(data);
    } catch (e) {
      console.error(e);
    }
  };

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
      babies: customer.babies?.map((b: any) => ({
        ...b,
        dateOfBirth: b.dateOfBirth ? dayjs(b.dateOfBirth) : undefined,
        dueDate: b.dueDate ? dayjs(b.dueDate) : undefined,
        isBorn: b.isBorn !== false,
      })),
    });
    setIsModalOpen(true);
  };

  const handleUpdate = async (values: any) => {
    setSubmitting(true);
    try {
      const payload = {
        ...values,
        dateOfBirth: values.dateOfBirth ? values.dateOfBirth.format('YYYY-MM-DD') : undefined,
        babies: values.babies?.map((b: any) => ({
          ...b,
          dateOfBirth: b.dateOfBirth ? b.dateOfBirth.format('YYYY-MM-DD') : undefined,
          dueDate: b.dueDate ? b.dueDate.format('YYYY-MM-DD') : undefined,
          isBorn: b.isBorn !== false,
        })),
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

  const handleEditBaby = (baby: any) => {
    setEditingBaby(baby);
    babyForm.setFieldsValue({
      ...baby,
      dateOfBirth: baby.dateOfBirth ? dayjs(baby.dateOfBirth) : undefined,
      dueDate: baby.dueDate ? dayjs(baby.dueDate) : undefined,
      isBorn: baby.isBorn !== false,
    });
    setIsBabyModalOpen(true);
  };

  const handleUpdateBaby = async (values: any) => {
    setSubmitting(true);
    try {
      const updatedBabies = customer.babies.map((b: any) => {
        if (b.id === editingBaby.id) {
          return {
            ...b,
            ...values,
            dateOfBirth: values.dateOfBirth ? values.dateOfBirth.format('YYYY-MM-DD') : undefined,
            dueDate: values.dueDate ? values.dueDate.format('YYYY-MM-DD') : undefined,
            isBorn: values.isBorn !== false,
          };
        }
        return b;
      });
      await customerApi.update(id!, { babies: updatedBabies });
      message.success('Child info updated successfully!');
      setIsBabyModalOpen(false);
      loadCustomer();
    } catch (err: any) {
      message.error(err.message || 'Error updating child');
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
                    <Row gutter={[16, 16]}>
                      <Col span={8}>
                        <Statistic title="Current Points" value={customer.points || customer.loyaltyAccount?.pointsBalance || 0} prefix={<HeartOutlined style={{ color: '#ec4899' }}/>} />
                      </Col>
                      <Col span={8}>
                        <Statistic title="Lifetime Points" value={customer.loyaltyAccount?.pointsLifetime || 0} />
                      </Col>
                      <Col span={8}>
                        <Statistic title="Customer Type" value={customer.customerType || 'End user'} />
                      </Col>
                      <Col span={8}>
                        <Statistic title="Free Gifts (GWP)" value={customer.reward_redemption?.length || 0} prefix={<GiftOutlined style={{ color: '#db2777' }} />} />
                      </Col>
                      <Col span={8}>
                        <Statistic title="Brand Products" value={(() => {
                          let count = 0;
                          if (customer.journey_run) {
                            customer.journey_run.forEach((run: any) => {
                              const context = run.context as any;
                              if (context?.rewards && Array.isArray(context.rewards)) {
                                count += context.rewards.filter((r: any) => r.type === 'product').length;
                              } else if (context?.rewardType === 'product') {
                                count += 1;
                              }
                            });
                          }
                          return count;
                        })()} prefix={<ShoppingCartOutlined style={{ color: '#4f46e5' }} />} />
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
                            <Card 
                              size="small" 
                              style={{ borderRadius: 8, background: '#f8fafc', border: '1px solid #e2e8f0' }}
                              extra={<Button type="text" size="small" icon={<EditOutlined />} onClick={() => handleEditBaby(b)} />}
                            >
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
                      <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="No family info found" style={{ marginTop: 40 }} />
                    )}
                  </div>
                )
              },
              {
                key: 'journeys',
                label: 'Journeys',
                children: (
                  <div style={{ paddingTop: 16 }}>
                    {customer.journey_run && customer.journey_run.length > 0 ? (
                      <Timeline
                        mode="left"
                        items={customer.journey_run.map((run: any) => {
                          const context = run.context as any;
                          let descriptions: string[] = [];

                          if (context?.rewards && Array.isArray(context.rewards)) {
                            context.rewards.forEach((r: any) => {
                              if (r.type === 'points') descriptions.push(`Awarded ${r.pointsEarned} Bonus Points`);
                              else if (r.type === 'product') descriptions.push(`Awarded Company Brand Product (ID: ${r.productId})`);
                              else if (r.type === 'free_gift') descriptions.push(`Awarded Free Gift (ID: ${r.rewardId})`);
                            });
                          } else if (context?.rewardType) {
                            if (context.rewardType === 'points') descriptions.push(`Awarded ${context.pointsEarned} Bonus Points`);
                            else if (context.rewardType === 'product') descriptions.push(`Awarded Company Brand Product (ID: ${context.productId})`);
                            else if (context.rewardType === 'free_gift') descriptions.push(`Awarded Free Gift (ID: ${context.rewardId})`);
                          }

                          return {
                            dot: <NodeIndexOutlined style={{ fontSize: '16px' }} />,
                            color: run.status === 'completed' ? 'green' : 'blue',
                            children: (
                              <>
                                <Text strong>{run.journey?.name || run.journey_id}</Text>
                                <br />
                                <Text type="secondary" style={{ fontSize: 12 }}>
                                  Entered: {dayjs(run.entered_at).format('DD/MM/YYYY HH:mm')}
                                </Text>
                                {descriptions.length > 0 && (
                                  <div style={{ marginTop: 8, display: 'flex', flexDirection: 'column', gap: 4 }}>
                                    {descriptions.map((desc, idx) => (
                                      <Tag color="purple" key={idx} style={{ width: 'fit-content' }}>{desc}</Tag>
                                    ))}
                                  </div>
                                )}
                              </>
                            ),
                          };
                        })}
                      />
                    ) : (
                      <Empty image={<NodeIndexOutlined style={{ fontSize: 48, color: '#d1d5db' }}/>} description="No journeys enrolled." style={{ marginTop: 40 }} />
                    )}
                  </div>
                )
              },
              {
                key: 'rewards',
                label: 'Rewards & Gifts',
                children: (
                  <div style={{ paddingTop: 16 }}>
                    <Title level={5} style={{ marginBottom: 16 }}>Points History</Title>
                    {customer.loyaltyAccount?.transactions && customer.loyaltyAccount.transactions.length > 0 ? (
                      <Timeline
                        mode="left"
                        items={customer.loyaltyAccount.transactions.map((t: any) => ({
                          color: t.type === 'earn' ? 'green' : 'red',
                          children: (
                            <>
                              <Text strong>{t.type === 'earn' ? '+' : '-'}{t.points} Points</Text>
                              <br />
                              <Text type="secondary" style={{ fontSize: 12 }}>
                                {dayjs(t.createdAt).format('DD/MM/YYYY HH:mm')} - {t.description || t.source}
                              </Text>
                            </>
                          ),
                        }))}
                      />
                    ) : (
                      <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="No point transactions" />
                    )}

                    <Divider />

                    <Title level={5} style={{ marginBottom: 16 }}>Free Gifts (GWP)</Title>
                    {customer.reward_redemption && customer.reward_redemption.length > 0 ? (
                      <Row gutter={[16, 16]}>
                        {customer.reward_redemption.map((rr: any) => (
                          <Col span={12} key={rr.id}>
                            <Card size="small" variant="outlined">
                              <Space align="start">
                                <Avatar shape="square" size={48} icon={<GiftOutlined />} style={{ background: '#fbcfe8', color: '#db2777' }} />
                                <div>
                                  <Text strong>{rr.reward_catalog?.name || 'Unknown Gift'}</Text>
                                  <div style={{ marginTop: 4 }}>
                                    <Select
                                      size="small"
                                      value={rr.status}
                                      onChange={async (val) => {
                                        try {
                                          await customerApi.updateRewardStatus(customer.id, rr.id, val);
                                          message.success('Status updated');
                                          loadCustomer();
                                        } catch(e: any) {
                                          message.error(e.message || 'Update failed');
                                        }
                                      }}
                                      style={{ width: 120 }}
                                      options={[
                                        { value: 'pending', label: 'Claimed' },
                                        { value: 'shipped', label: 'Shipped' },
                                        { value: 'delivered', label: 'Delivered' },
                                        { value: 'fulfilled', label: 'Fulfilled' }
                                      ]}
                                    />
                                  </div>
                                  <Text type="secondary" style={{ fontSize: 12, display: 'block', marginTop: 4 }}>
                                    Redeemed: {dayjs(rr.createdAt).format('DD/MM/YYYY')}
                                  </Text>
                                </div>
                              </Space>
                            </Card>
                          </Col>
                        ))}
                      </Row>
                    ) : (
                      <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="No free gifts redeemed" />
                    )}

                    <Divider />

                    <Title level={5} style={{ marginBottom: 16 }}>Brand Products Awarded</Title>
                    {(() => {
                      if (customer.orders && customer.orders.length > 0) {
                        return (
                          <Row gutter={[16, 16]}>
                            {customer.orders.map((order: any) => {
                              const product = products.find(p => p.id === order.items[0]?.productId);
                              return (
                                <Col span={12} key={order.id}>
                                  <Card size="small" variant="outlined">
                                    <Space align="start">
                                      <Avatar shape="square" size={48} icon={<ShoppingCartOutlined />} style={{ background: '#e0e7ff', color: '#4f46e5' }} />
                                      <div>
                                        <Text strong>{product?.name || `Product ID: ${order.items[0]?.productId}`}</Text>
                                        <div style={{ marginTop: 4 }}>
                                          <Select
                                            size="small"
                                            value={order.status}
                                            onChange={async (val) => {
                                              try {
                                                await customerApi.updateOrderStatus(customer.id, order.id, val);
                                                message.success('Status updated');
                                                loadCustomer();
                                              } catch(e: any) {
                                                message.error(e.message || 'Update failed');
                                              }
                                            }}
                                            style={{ width: 120 }}
                                            options={[
                                              { value: 'pending', label: 'Claimed' },
                                              { value: 'shipped', label: 'Shipped' },
                                              { value: 'delivered', label: 'Delivered' }
                                            ]}
                                          />
                                        </div>
                                        <Text type="secondary" style={{ fontSize: 12, display: 'block', marginTop: 4 }}>
                                          Awarded: {dayjs(order.createdAt).format('DD/MM/YYYY HH:mm')}
                                        </Text>
                                      </div>
                                    </Space>
                                  </Card>
                                </Col>
                              );
                            })}
                          </Row>
                        );
                      }
                      return <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="No brand products awarded" />;
                    })()}
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
                      <Col span={24}>
                        <Form.Item {...restField} name={[name, 'isBorn']} label="Date Type" initialValue={true}>
                          <Radio.Group>
                            <Radio value={true}>Date of Birth</Radio>
                            <Radio value={false}>Due Date</Radio>
                          </Radio.Group>
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Form.Item
                          noStyle
                          shouldUpdate={(prevValues, currentValues) => prevValues.babies?.[name]?.isBorn !== currentValues.babies?.[name]?.isBorn}
                        >
                          {({ getFieldValue }) => {
                            const isBorn = getFieldValue(['babies', name, 'isBorn']) !== false;
                            return isBorn ? (
                              <Form.Item {...restField} name={[name, 'dateOfBirth']} label="Date of Birth" rules={[{ required: true, message: 'Missing date' }]}>
                                <DatePicker style={{ width: '100%' }} format="DD/MM/YYYY" disabledDate={d => d && d.isAfter(dayjs())} />
                              </Form.Item>
                            ) : (
                              <Form.Item {...restField} name={[name, 'dueDate']} label="Due Date" rules={[{ required: true, message: 'Missing date' }]}>
                                <DatePicker style={{ width: '100%' }} format="DD/MM/YYYY" disabledDate={d => d && d.isSameOrBefore(dayjs())} />
                              </Form.Item>
                            );
                          }}
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
                        <Form.Item {...restField} name={[name, 'stageCode']} label="Stage">
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
        </Form>
      </Modal>

      <Modal
        title="Edit Child Information"
        open={isBabyModalOpen}
        onCancel={() => setIsBabyModalOpen(false)}
        onOk={() => babyForm.submit()}
        confirmLoading={submitting}
      >
        <Form
          form={babyForm}
          layout="vertical"
          onFinish={handleUpdateBaby}
        >
          <Form.Item name="name" label="Child Name" rules={[{ required: true, message: 'Missing name' }]}>
            <Input placeholder="Name" />
          </Form.Item>
          <Form.Item name="isBorn" label="Date Type" initialValue={true}>
            <Radio.Group>
              <Radio value={true}>Date of Birth</Radio>
              <Radio value={false}>Due Date</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            noStyle
            shouldUpdate={(prevValues, currentValues) => prevValues.isBorn !== currentValues.isBorn}
          >
            {({ getFieldValue }) => {
              const isBorn = getFieldValue('isBorn') !== false;
              return isBorn ? (
                <Form.Item name="dateOfBirth" label="Date of Birth" rules={[{ required: true, message: 'Missing date' }]}>
                  <DatePicker style={{ width: '100%' }} format="DD/MM/YYYY" disabledDate={d => d && d.isAfter(dayjs())} />
                </Form.Item>
              ) : (
                <Form.Item name="dueDate" label="Due Date" rules={[{ required: true, message: 'Missing date' }]}>
                  <DatePicker style={{ width: '100%' }} format="DD/MM/YYYY" disabledDate={d => d && d.isSameOrBefore(dayjs())} />
                </Form.Item>
              );
            }}
          </Form.Item>
          <Form.Item name="gender" label="Gender">
            <Select placeholder="Gender" allowClear>
              <Select.Option value="male">Male</Select.Option>
              <Select.Option value="female">Female</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item name="stageCode" label="Stage">
            <Select placeholder="Stage" allowClear>
              <Select.Option value="NEWBORN">Newborn</Select.Option>
              <Select.Option value="INFANT">Infant</Select.Option>
              <Select.Option value="TODDLER">Toddler</Select.Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
