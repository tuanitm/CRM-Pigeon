import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, Form, Input, Select, Tag, Space, Popconfirm, message, Typography } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { conditionDefinitionApi } from '../services/api';

const { Title } = Typography;

export default function ConditionDictionaryPage() {
  const [conditions, setConditions] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form] = Form.useForm();

  const fetchConditions = async () => {
    setLoading(true);
    try {
      const data = await conditionDefinitionApi.list();
      setConditions(data || []);
    } catch (err) {
      console.error(err);
      message.error('Failed to load condition dictionary');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchConditions();
  }, []);

  const handleSave = async (values: any) => {
    try {
      if (editingId) {
        await conditionDefinitionApi.update(editingId, values);
        message.success('Condition updated');
      } else {
        await conditionDefinitionApi.create(values);
        message.success('Condition created');
      }
      setModalVisible(false);
      form.resetFields();
      fetchConditions();
    } catch (err: any) {
      message.error(err.response?.data?.message || err.message || 'Error saving condition');
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await conditionDefinitionApi.delete(id);
      message.success('Condition deleted');
      fetchConditions();
    } catch (err: any) {
      message.error(err.message || 'Error deleting condition');
    }
  };

  const columns = [
    {
      title: 'Code',
      dataIndex: 'code',
      key: 'code',
      render: (v: string) => <Tag color="blue">{v}</Tag>,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (v: string) => <span style={{ fontWeight: 600 }}>{v}</span>,
    },
    {
      title: 'Data Type',
      dataIndex: 'type',
      key: 'type',
      render: (v: string) => <Tag>{v}</Tag>,
    },
    {
      title: 'Source',
      dataIndex: 'source',
      key: 'source',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_: any, r: any) => (
        <Space size="small">
          <Button
            type="text"
            icon={<EditOutlined />}
            onClick={() => {
              setEditingId(r.id);
              form.setFieldsValue(r);
              setModalVisible(true);
            }}
          />
          <Popconfirm title="Delete condition?" onConfirm={() => handleDelete(r.id)}>
            <Button type="text" danger icon={<DeleteOutlined />} />
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
        <Title level={3} style={{ margin: 0, fontWeight: 700 }}>Conditions</Title>
        <Button 
          type="primary" 
          icon={<PlusOutlined />} 
          onClick={() => {
            setEditingId(null);
            form.resetFields();
            setModalVisible(true);
          }}
        >
          Add Condition
        </Button>
      </div>

      <Table
        dataSource={conditions}
        columns={columns}
        rowKey="id"
        loading={loading}
        pagination={{ pageSize: 20 }}
      />

      <Modal
        title={editingId ? "Edit Condition" : "New Condition"}
        open={modalVisible}
        onCancel={() => setModalVisible(false)}
        onOk={() => form.submit()}
      >
        <Form form={form} layout="vertical" onFinish={handleSave}>
          <Form.Item name="code" label="Condition Code" rules={[{ required: true }]}>
            <Input placeholder="e.g. customer_tier" disabled={!!editingId} />
          </Form.Item>
          <Form.Item name="name" label="Display Name" rules={[{ required: true }]}>
            <Input placeholder="e.g. Customer Tier" />
          </Form.Item>
          <Form.Item name="type" label="Data Type" rules={[{ required: true }]}>
            <Select>
              <Select.Option value="string">String</Select.Option>
              <Select.Option value="number">Number</Select.Option>
              <Select.Option value="boolean">Boolean</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item name="source" label="Data Source" rules={[{ required: true }]}>
            <Select>
              <Select.Option value="customer">Customer Profile</Select.Option>
              <Select.Option value="loyalty_account">Loyalty Account</Select.Option>
              <Select.Option value="database_query">Custom DB Query</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item name="description" label="Description">
            <Input.TextArea rows={2} />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
