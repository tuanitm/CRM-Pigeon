import React, { useState, useEffect } from 'react';
import {
  Card, Typography, Button, Space, Tag, Descriptions, Divider, Empty,
  Modal, Form, Input, Select, Switch, message, Collapse, Badge, Tooltip,
  Row, Col, Popconfirm, DatePicker,
} from 'antd';
import {
  ArrowLeftOutlined, PlusOutlined, DeleteOutlined, EditOutlined,
  PlayCircleOutlined, PauseCircleOutlined, FileTextOutlined,
  OrderedListOutlined, CheckSquareOutlined, StarOutlined,
  CalendarOutlined, PictureOutlined, FontSizeOutlined,
  CaretUpOutlined, CaretDownOutlined,
} from '@ant-design/icons';
import { useParams, useNavigate } from 'react-router-dom';
import { dynamicActionApi, dataHubApi } from '../services/api';
import dayjs from 'dayjs';

const { Title, Text } = Typography;

const COMPONENT_TYPES = [
  { value: 'text_input', label: 'Text Input', icon: <EditOutlined /> },
  { value: 'textarea', label: 'Text Area', icon: <FileTextOutlined /> },
  { value: 'number', label: 'Number', icon: <OrderedListOutlined /> },
  { value: 'phone_number', label: 'Phone Number', icon: <EditOutlined /> },
  { value: 'select', label: 'Dropdown', icon: <OrderedListOutlined /> },
  { value: 'checkbox', label: 'Checkbox', icon: <CheckSquareOutlined /> },
  { value: 'radio', label: 'Radio', icon: <CheckSquareOutlined /> },
  { value: 'date_picker', label: 'Date Picker', icon: <CalendarOutlined /> },
  { value: 'rating', label: 'Rating', icon: <StarOutlined /> },
  { value: 'image', label: 'Image', icon: <PictureOutlined /> },
  { value: 'label', label: 'Static Label', icon: <FontSizeOutlined /> },
];

function getTypeIcon(type: string) {
  return COMPONENT_TYPES.find(t => t.value === type)?.icon || <EditOutlined />;
}

function getTypeLabel(type: string) {
  return COMPONENT_TYPES.find(t => t.value === type)?.label || type;
}

export default function DynamicActionDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [action, setAction] = useState<any>(null);
  const [dataHubs, setDataHubs] = useState<any[]>([]);
  const [pageModalVisible, setPageModalVisible] = useState(false);
  const [compModalVisible, setCompModalVisible] = useState(false);
  const [editInfoVisible, setEditInfoVisible] = useState(false);
  const [editingPageId, setEditingPageId] = useState<string | null>(null);
  const [editingComponent, setEditingComponent] = useState<any>(null);
  const [pageForm] = Form.useForm();
  const [compForm] = Form.useForm();
  const [editInfoForm] = Form.useForm();

  const loadData = async () => {
    if (!id) return;
    try {
      const [data, hubs] = await Promise.all([
        dynamicActionApi.get(id),
        dataHubApi.list(),
      ]);
      setAction(data);
      setDataHubs(hubs);
    } catch (err) {
      message.error('Failed to load Dynamic Action');
    }
  };

  useEffect(() => { loadData(); }, [id]);

  const handleAddPage = async (values: any) => {
    if (!id) return;
    try {
      await dynamicActionApi.addPage(id, values);
      message.success('Page added');
      setPageModalVisible(false);
      pageForm.resetFields();
      loadData();
    } catch (err) {
      message.error('Failed to add page');
    }
  };

  const handleDeletePage = async (pageId: string) => {
    try {
      await dynamicActionApi.deletePage(pageId);
      message.success('Page deleted');
      loadData();
    } catch (err) {
      message.error('Failed to delete page');
    }
  };

  const handleSaveComponent = async (values: any) => {
    try {
      // Parse options from comma-separated string to JSON array
      let options: any = [];
      if (values.optionsText && (values.type === 'select' || values.type === 'radio' || values.type === 'checkbox')) {
        options = values.optionsText.split(',').map((o: string) => o.trim()).filter(Boolean);
      }
      const payload = {
        type: values.type,
        label: values.label,
        placeholder: values.placeholder || null,
        required: values.required || false,
        options,
      };

      if (editingComponent) {
        // Update existing
        await dynamicActionApi.updateComponent(editingComponent.id, payload);
        message.success('Component updated');
      } else {
        // Create new
        if (!editingPageId) return;
        await dynamicActionApi.addComponent(editingPageId, payload);
        message.success('Component added');
      }
      setCompModalVisible(false);
      setEditingComponent(null);
      compForm.resetFields();
      loadData();
    } catch (err) {
      message.error(editingComponent ? 'Failed to update component' : 'Failed to add component');
    }
  };

  const openEditComponent = (comp: any) => {
    setEditingComponent(comp);
    compForm.setFieldsValue({
      type: comp.type,
      label: comp.label,
      placeholder: comp.placeholder || '',
      required: comp.required,
      optionsText: Array.isArray(comp.options) && comp.options.length > 0 ? comp.options.join(', ') : '',
    });
    setCompModalVisible(true);
  };

  const handleDeleteComponent = async (compId: string) => {
    try {
      await dynamicActionApi.deleteComponent(compId);
      message.success('Component deleted');
      loadData();
    } catch (err) {
      message.error('Failed to delete component');
    }
  };

  const handleStatusToggle = async () => {
    if (!action) return;
    const newStatus = action.status === 'running' ? 'stopped' : 'running';
    try {
      await dynamicActionApi.updateStatus(action.id, newStatus);
      message.success(`Status changed to ${newStatus}`);
      loadData();
    } catch (err) {
      message.error('Failed to update status');
    }
  };

  const openEditInfo = () => {
    editInfoForm.setFieldsValue({
      name: action.name,
      description: action.description || '',
      trigger: action.trigger,
      target: action.target,
      dataHubId: action.dataHubId || undefined,
      startDate: action.startDate ? dayjs(action.startDate) : null,
      endDate: action.endDate ? dayjs(action.endDate) : null,
    });
    setEditInfoVisible(true);
  };

  const handleEditInfo = async (values: any) => {
    try {
      await dynamicActionApi.update(action.id, {
        ...values,
        startDate: values.startDate?.toISOString() || null,
        endDate: values.endDate?.toISOString() || null,
      });
      message.success('Action info updated');
      setEditInfoVisible(false);
      loadData();
    } catch (err) {
      message.error('Failed to update action info');
    }
  };

  if (!action) {
    return (
      <div style={{ padding: 40, textAlign: 'center' }}>
        <Text type="secondary">Loading...</Text>
      </div>
    );
  }

  const statusColor = action.status === 'running' ? 'blue' : action.status === 'draft' ? 'orange' : 'default';

  return (
    <div style={{ maxWidth: 1000, margin: '0 auto' }}>
      {/* Header */}
      <Space style={{ marginBottom: 20 }}>
        <Button icon={<ArrowLeftOutlined />} onClick={() => navigate('/dynamic-action')}>Back</Button>
      </Space>

      {/* Action Info Card */}
      <Card
        variant="outlined"
        style={{ borderRadius: 12, marginBottom: 24, borderColor: '#e5e7eb' }}
        title={
          <Space>
            <Title level={4} style={{ margin: 0 }}>{action.name}</Title>
            <Tag
              color={statusColor}
              icon={action.status === 'running' ? <PlayCircleOutlined /> : <PauseCircleOutlined />}
              style={{ borderRadius: 6, cursor: 'pointer' }}
              onClick={handleStatusToggle}
            >
              {action.status === 'running' ? 'Running' : action.status === 'draft' ? 'Draft' : 'Stopped'}
            </Tag>
          </Space>
        }
        extra={
          <Space>
            <Button icon={<EditOutlined />} onClick={openEditInfo}>Edit Info</Button>
            <Button
              type={action.status === 'running' ? 'default' : 'primary'}
              icon={action.status === 'running' ? <PauseCircleOutlined /> : <PlayCircleOutlined />}
              onClick={handleStatusToggle}
            >
              {action.status === 'running' ? 'Stop' : 'Activate'}
            </Button>
          </Space>
        }
      >
        <Descriptions column={2} size="small">
          <Descriptions.Item label="Description">{action.description || '—'}</Descriptions.Item>
          <Descriptions.Item label="Trigger"><Tag color="geekblue">{action.trigger}</Tag></Descriptions.Item>
          <Descriptions.Item label="Target">{action.target}</Descriptions.Item>
          <Descriptions.Item label="Linked Data Hub">{action.dataHub?.name || '—'}</Descriptions.Item>
          <Descriptions.Item label="Start Date">{action.startDate ? new Date(action.startDate).toLocaleDateString() : '—'}</Descriptions.Item>
          <Descriptions.Item label="End Date">{action.endDate ? new Date(action.endDate).toLocaleDateString() : 'Never'}</Descriptions.Item>
          <Descriptions.Item label="Created">{new Date(action.createdAt).toLocaleString('vi-VN')}</Descriptions.Item>
          <Descriptions.Item label="Pages">{action.pages?.length || 0}</Descriptions.Item>
        </Descriptions>
      </Card>

      {/* Pages Section */}
      <Card
        variant="outlined"
        style={{ borderRadius: 12, borderColor: '#e5e7eb' }}
        title={
          <Space>
            <Title level={5} style={{ margin: 0 }}>📄 Pages & Form Components</Title>
            <Badge count={action.pages?.length || 0} style={{ background: '#3b82f6' }} />
          </Space>
        }
        extra={
          <Button type="primary" icon={<PlusOutlined />} onClick={() => setPageModalVisible(true)}>
            Add Page
          </Button>
        }
      >
        {(!action.pages || action.pages.length === 0) ? (
          <Empty description="No pages yet. Click 'Add Page' to create the first form page." />
        ) : (
          <Collapse
            defaultActiveKey={action.pages.map((p: any) => p.id)}
            items={action.pages.map((page: any, idx: number) => ({
              key: page.id,
              label: (
                <Space>
                  <Badge count={idx + 1} style={{ background: '#3b82f6' }} />
                  <Text strong>{page.title}</Text>
                  <Text type="secondary" style={{ fontSize: 12 }}>
                    ({page.components?.length || 0} components)
                  </Text>
                </Space>
              ),
              extra: (
                <Space onClick={e => e.stopPropagation()}>
                  <Tooltip title="Add Component">
                    <Button
                      type="text"
                      size="small"
                      icon={<PlusOutlined />}
                      onClick={() => { setEditingPageId(page.id); setEditingComponent(null); compForm.resetFields(); setCompModalVisible(true); }}
                    />
                  </Tooltip>
                  <Popconfirm title="Delete this page?" onConfirm={() => handleDeletePage(page.id)} okText="Delete" okType="danger">
                    <Button type="text" size="small" danger icon={<DeleteOutlined />} />
                  </Popconfirm>
                </Space>
              ),
              children: (
                <div>
                  {(!page.components || page.components.length === 0) ? (
                    <Empty
                      description="No components yet"
                      image={Empty.PRESENTED_IMAGE_SIMPLE}
                    >
                      <Button
                        type="dashed"
                        icon={<PlusOutlined />}
                        onClick={() => { setEditingPageId(page.id); setEditingComponent(null); compForm.resetFields(); setCompModalVisible(true); }}
                      >
                        Add First Component
                      </Button>
                    </Empty>
                  ) : (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                      {page.components.map((comp: any, cIdx: number) => (
                        <Card
                          key={comp.id}
                          size="small"
                          style={{
                            borderRadius: 8,
                            borderColor: '#e5e7eb',
                            background: '#fafbfc',
                          }}
                        >
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Space>
                              <Text type="secondary" style={{ width: 24, textAlign: 'center' }}>{cIdx + 1}.</Text>
                              <span style={{ color: '#3b82f6' }}>{getTypeIcon(comp.type)}</span>
                              <Text strong>{comp.label}</Text>
                              <Tag style={{ fontSize: 10 }}>{getTypeLabel(comp.type)}</Tag>
                              {comp.required && <Tag color="red" style={{ fontSize: 10 }}>Required</Tag>}
                              {comp.placeholder && <Text type="secondary" style={{ fontSize: 11 }}>"{comp.placeholder}"</Text>}
                              {comp.options && Array.isArray(comp.options) && comp.options.length > 0 && (
                                <Text type="secondary" style={{ fontSize: 11 }}>Options: {comp.options.join(', ')}</Text>
                              )}
                            </Space>
                            <Space>
                              <Tooltip title="Edit">
                                <Button type="text" size="small" icon={<EditOutlined />} onClick={() => openEditComponent(comp)} />
                              </Tooltip>
                              <Popconfirm title="Delete this component?" onConfirm={() => handleDeleteComponent(comp.id)} okText="Delete" okType="danger">
                                <Button type="text" size="small" danger icon={<DeleteOutlined />} />
                              </Popconfirm>
                            </Space>
                          </div>
                        </Card>
                      ))}
                      <Button
                        type="dashed"
                        icon={<PlusOutlined />}
                        style={{ marginTop: 4 }}
                        onClick={() => { setEditingPageId(page.id); setEditingComponent(null); compForm.resetFields(); setCompModalVisible(true); }}
                      >
                        Add Component
                      </Button>
                    </div>
                  )}
                </div>
              ),
            }))}
          />
        )}
      </Card>

      {/* Add Page Modal */}
      <Modal
        title="Add Page"
        open={pageModalVisible}
        onCancel={() => setPageModalVisible(false)}
        onOk={() => pageForm.submit()}
      >
        <Form form={pageForm} layout="vertical" onFinish={handleAddPage}>
          <Form.Item name="title" label="Page Title" rules={[{ required: true }]}>
            <Input placeholder="e.g. Customer Information, Product Review" />
          </Form.Item>
        </Form>
      </Modal>

      {/* Add/Edit Component Modal */}
      <Modal
        title={editingComponent ? 'Edit Form Component' : 'Add Form Component'}
        open={compModalVisible}
        onCancel={() => { setCompModalVisible(false); setEditingComponent(null); compForm.resetFields(); }}
        onOk={() => compForm.submit()}
        okText={editingComponent ? 'Save Changes' : 'Add'}
        width={480}
      >
        <Form form={compForm} layout="vertical" onFinish={handleSaveComponent}>
          <Form.Item name="type" label="Component Type" rules={[{ required: true }]}>
            <Select
              options={COMPONENT_TYPES.map(t => ({ value: t.value, label: t.label }))}
              placeholder="Select type..."
            />
          </Form.Item>
          <Form.Item name="label" label="Label" rules={[{ required: true }]}>
            <Input placeholder="e.g. Full Name, Email, Rating" />
          </Form.Item>
          <Form.Item name="placeholder" label="Placeholder">
            <Input placeholder="e.g. Enter your name..." />
          </Form.Item>
          <Form.Item name="required" label="Required" valuePropName="checked">
            <Switch />
          </Form.Item>
          <Form.Item
            noStyle
            shouldUpdate={(prev, cur) => prev.type !== cur.type}
          >
            {({ getFieldValue }) => {
              const type = getFieldValue('type');
              if (type === 'select' || type === 'radio' || type === 'checkbox') {
                return (
                  <Form.Item name="optionsText" label="Options (comma-separated)">
                    <Input placeholder="e.g. Option A, Option B, Option C" />
                  </Form.Item>
                );
              }
              return null;
            }}
          </Form.Item>
        </Form>
      </Modal>

      {/* Edit Action Info Modal */}
      <Modal
        title="Edit Action Info"
        open={editInfoVisible}
        onCancel={() => setEditInfoVisible(false)}
        onOk={() => editInfoForm.submit()}
        okText="Save Changes"
        width={560}
      >
        <Form form={editInfoForm} layout="vertical" onFinish={handleEditInfo}>
          <Form.Item name="name" label="Action Name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="description" label="Description">
            <Input.TextArea rows={2} />
          </Form.Item>
          <Row gutter={12}>
            <Col span={12}>
              <Form.Item name="trigger" label="Trigger" rules={[{ required: true }]}>
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
              <Form.Item name="target" label="Target" rules={[{ required: true }]}>
                <Select options={[
                  { value: 'Customer', label: 'Customer' },
                  { value: 'Order', label: 'Order' },
                  { value: 'Lead', label: 'Lead' },
                  { value: 'Data Hub', label: 'Data Hub' },
                ]} />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item name="dataHubId" label="Linked Data Hub">
            <Select
              allowClear
              placeholder="Select a Data Hub..."
              options={dataHubs.map((h: any) => ({ value: h.id, label: h.name }))}
            />
          </Form.Item>
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
