import React, { useState, useEffect } from 'react';
import {
  Card, Typography, Button, Space, Tag, Tabs, Table, Empty,
  Modal, Form, Input, Select, message, Tooltip, Popconfirm,
  Descriptions, Badge, Row, Col,
} from 'antd';
import {
  ArrowLeftOutlined, PlusOutlined, DeleteOutlined, EditOutlined,
  DatabaseOutlined, TableOutlined, ColumnWidthOutlined, SaveOutlined,
} from '@ant-design/icons';
import { useParams, useNavigate } from 'react-router-dom';
import { dataHubApi } from '../services/api';

const { Title, Text } = Typography;

const DATA_TYPES = [
  { value: 'text', label: 'Text' },
  { value: 'number', label: 'Number' },
  { value: 'date', label: 'Date' },
  { value: 'boolean', label: 'Boolean' },
  { value: 'email', label: 'Email' },
  { value: 'phone', label: 'Phone' },
  { value: 'url', label: 'URL' },
];

export default function DataHubDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [hub, setHub] = useState<any>(null);
  const [activeTableId, setActiveTableId] = useState<string | null>(null);
  const [records, setRecords] = useState<any[]>([]);
  const [loadingRecords, setLoadingRecords] = useState(false);

  // Modals
  const [tableModalVisible, setTableModalVisible] = useState(false);
  const [columnModalVisible, setColumnModalVisible] = useState(false);
  const [recordModalVisible, setRecordModalVisible] = useState(false);
  const [editingRecord, setEditingRecord] = useState<any>(null);

  const [tableForm] = Form.useForm();
  const [columnForm] = Form.useForm();
  const [recordForm] = Form.useForm();

  const loadHub = async () => {
    if (!id) return;
    try {
      const data = await dataHubApi.get(id);
      setHub(data);
      // Auto-select first table if none selected
      if (!activeTableId && data.tables?.length > 0) {
        setActiveTableId(data.tables[0].id);
      }
    } catch (err) {
      message.error('Failed to load Data Hub');
    }
  };

  const loadRecords = async (tableId: string) => {
    setLoadingRecords(true);
    try {
      const data = await dataHubApi.getRecords(tableId);
      setRecords(data);
    } catch (err) {
      message.error('Failed to load records');
      setRecords([]);
    } finally {
      setLoadingRecords(false);
    }
  };

  useEffect(() => { loadHub(); }, [id]);

  useEffect(() => {
    if (activeTableId) loadRecords(activeTableId);
    else setRecords([]);
  }, [activeTableId]);

  // ─── Handlers ────────────────────────────────────────

  const handleAddTable = async (values: any) => {
    if (!id) return;
    try {
      const newTable = await dataHubApi.addTable(id, values.name);
      message.success('Table created');
      setTableModalVisible(false);
      tableForm.resetFields();
      await loadHub();
      setActiveTableId(newTable.id);
    } catch (err) {
      message.error('Failed to create table');
    }
  };

  const handleDeleteTable = async (tableId: string) => {
    try {
      await dataHubApi.deleteTable(tableId);
      message.success('Table deleted');
      if (activeTableId === tableId) setActiveTableId(null);
      await loadHub();
    } catch (err) {
      message.error('Failed to delete table');
    }
  };

  const handleAddColumn = async (values: any) => {
    if (!activeTableId) return;
    try {
      await dataHubApi.addColumn(activeTableId, values.name, values.dataType);
      message.success('Column added');
      setColumnModalVisible(false);
      columnForm.resetFields();
      loadHub();
      loadRecords(activeTableId);
    } catch (err) {
      message.error('Failed to add column');
    }
  };

  const handleDeleteColumn = async (colId: string) => {
    try {
      await dataHubApi.deleteColumn(colId);
      message.success('Column deleted');
      loadHub();
      if (activeTableId) loadRecords(activeTableId);
    } catch (err) {
      message.error('Failed to delete column');
    }
  };

  const handleSaveRecord = async (values: any) => {
    if (!activeTableId) return;
    try {
      if (editingRecord) {
        await dataHubApi.updateRecord(editingRecord.id, values);
        message.success('Record updated');
      } else {
        await dataHubApi.addRecord(activeTableId, values);
        message.success('Record added');
      }
      setRecordModalVisible(false);
      setEditingRecord(null);
      recordForm.resetFields();
      loadRecords(activeTableId);
    } catch (err) {
      message.error(editingRecord ? 'Failed to update record' : 'Failed to add record');
    }
  };

  const openEditRecord = (record: any) => {
    setEditingRecord(record);
    recordForm.setFieldsValue(record.data || {});
    setRecordModalVisible(true);
  };

  const openAddRecord = () => {
    setEditingRecord(null);
    recordForm.resetFields();
    setRecordModalVisible(true);
  };

  const handleDeleteRecord = async (recordId: string) => {
    try {
      await dataHubApi.deleteRecord(recordId);
      message.success('Record deleted');
      if (activeTableId) loadRecords(activeTableId);
    } catch (err) {
      message.error('Failed to delete record');
    }
  };

  // ─── Derived ─────────────────────────────────────────

  if (!hub) {
    return <div style={{ padding: 40, textAlign: 'center' }}><Text type="secondary">Loading...</Text></div>;
  }

  const activeTable = hub.tables?.find((t: any) => t.id === activeTableId);
  const columns = activeTable?.columns || [];

  // Build Ant Table columns dynamically from DataHub columns
  const tableColumns: any[] = [
    {
      title: '#',
      key: 'index',
      width: 50,
      render: (_: any, __: any, idx: number) => <Text type="secondary">{idx + 1}</Text>,
    },
    ...columns.map((col: any) => ({
      title: (
        <Space>
          <span>{col.name}</span>
          <Tag style={{ fontSize: 9, lineHeight: '14px' }}>{col.dataType}</Tag>
          <Popconfirm title={`Delete column "${col.name}"?`} onConfirm={() => handleDeleteColumn(col.id)} okText="Delete" okType="danger">
            <DeleteOutlined style={{ color: '#d1d5db', cursor: 'pointer', fontSize: 11 }} />
          </Popconfirm>
        </Space>
      ),
      dataIndex: ['data', col.name],
      key: col.id,
      render: (val: any) => <span>{val !== undefined && val !== null ? String(val) : <Text type="secondary">—</Text>}</span>,
    })),
    {
      title: 'Created',
      dataIndex: 'createdAt',
      key: 'createdAt',
      width: 160,
      render: (d: string) => <Text type="secondary" style={{ fontSize: 12 }}>{new Date(d).toLocaleString('vi-VN')}</Text>,
    },
    {
      title: 'Actions',
      key: 'actions',
      width: 90,
      render: (_: any, r: any) => (
        <Space>
          <Tooltip title="Edit"><Button type="text" size="small" icon={<EditOutlined />} onClick={() => openEditRecord(r)} /></Tooltip>
          <Popconfirm title="Delete record?" onConfirm={() => handleDeleteRecord(r.id)} okText="Delete" okType="danger">
            <Button type="text" size="small" danger icon={<DeleteOutlined />} />
          </Popconfirm>
        </Space>
      ),
    },
  ];

  const tabItems = (hub.tables || []).map((t: any) => ({
    key: t.id,
    label: (
      <Space>
        <TableOutlined />
        {t.name}
        <Badge count={t._count?.records || 0} style={{ background: '#6b7280', fontSize: 10 }} size="small" />
      </Space>
    ),
  }));

  return (
    <div style={{ maxWidth: 1200, margin: '0 auto' }}>
      {/* Header */}
      <Space style={{ marginBottom: 16 }}>
        <Button icon={<ArrowLeftOutlined />} onClick={() => navigate('/data-hub')}>Back</Button>
      </Space>

      {/* Hub Info */}
      <Card
        variant="outlined"
        style={{ borderRadius: 12, marginBottom: 20, borderColor: '#e5e7eb' }}
        title={
          <Space>
            <DatabaseOutlined style={{ color: '#3b82f6' }} />
            <Title level={4} style={{ margin: 0 }}>{hub.name}</Title>
            <Tag>{hub.source}</Tag>
          </Space>
        }
        extra={
          <Space>
            <Text type="secondary">{hub.tables?.length || 0} tables</Text>
          </Space>
        }
        styles={{ body: { padding: '12px 24px' } }}
      >
        <Descriptions size="small" column={3}>
          <Descriptions.Item label="Owner">{hub.adminUser?.fullName || 'Admin'}</Descriptions.Item>
          <Descriptions.Item label="Created">{new Date(hub.createdAt).toLocaleString('vi-VN')}</Descriptions.Item>
          <Descriptions.Item label="Source">{hub.source}</Descriptions.Item>
        </Descriptions>
      </Card>

      {/* Tables Tabs + Content */}
      <Card
        variant="outlined"
        style={{ borderRadius: 12, borderColor: '#e5e7eb' }}
        styles={{ body: { padding: 0 } }}
      >
        <div style={{ padding: '0 16px' }}>
          <Tabs
            activeKey={activeTableId || ''}
            onChange={(key) => setActiveTableId(key)}
            items={tabItems}
            tabBarExtraContent={
              <Space style={{ marginBottom: -1 }}>
                <Button size="small" type="dashed" icon={<PlusOutlined />} onClick={() => setTableModalVisible(true)}>
                  New Table
                </Button>
              </Space>
            }
          />
        </div>

        {!activeTable ? (
          <div style={{ padding: '60px 24px' }}>
            <Empty description="No tables yet. Click 'New Table' to create one.">
              <Button type="primary" icon={<PlusOutlined />} onClick={() => setTableModalVisible(true)}>Create First Table</Button>
            </Empty>
          </div>
        ) : (
          <div>
            {/* Table toolbar */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 16px', borderBottom: '1px solid #f0f0f0', background: '#fafbfc' }}>
              <Space>
                <Text strong>{activeTable.name}</Text>
                <Text type="secondary">·</Text>
                <Text type="secondary">{columns.length} columns</Text>
                <Text type="secondary">·</Text>
                <Text type="secondary">{records.length} records</Text>
              </Space>
              <Space>
                <Button size="small" icon={<ColumnWidthOutlined />} onClick={() => setColumnModalVisible(true)}>Add Column</Button>
                <Button size="small" type="primary" icon={<PlusOutlined />} onClick={openAddRecord}>Add Record</Button>
                <Popconfirm title={`Delete table "${activeTable.name}"? All data will be lost.`} onConfirm={() => handleDeleteTable(activeTable.id)} okText="Delete" okType="danger">
                  <Button size="small" danger icon={<DeleteOutlined />}>Delete Table</Button>
                </Popconfirm>
              </Space>
            </div>

            {/* Data Table */}
            {columns.length === 0 ? (
              <div style={{ padding: '40px 24px' }}>
                <Empty description="No columns defined. Add columns to start storing data." image={Empty.PRESENTED_IMAGE_SIMPLE}>
                  <Button type="dashed" icon={<PlusOutlined />} onClick={() => setColumnModalVisible(true)}>Add First Column</Button>
                </Empty>
              </div>
            ) : (
              <Table
                columns={tableColumns}
                dataSource={records}
                rowKey="id"
                loading={loadingRecords}
                pagination={{ pageSize: 20, showTotal: (t) => `${t} records`, size: 'small' }}
                size="small"
                scroll={{ x: 'max-content' }}
                locale={{ emptyText: 'No records yet. Click "Add Record" to create one.' }}
              />
            )}
          </div>
        )}
      </Card>

      {/* Add Table Modal */}
      <Modal title="Create New Table" open={tableModalVisible} onCancel={() => setTableModalVisible(false)} onOk={() => tableForm.submit()}>
        <Form form={tableForm} layout="vertical" onFinish={handleAddTable}>
          <Form.Item name="name" label="Table Name" rules={[{ required: true }]}>
            <Input placeholder="e.g. Customer Responses, Order Data" />
          </Form.Item>
        </Form>
      </Modal>

      {/* Add Column Modal */}
      <Modal title="Add Column" open={columnModalVisible} onCancel={() => setColumnModalVisible(false)} onOk={() => columnForm.submit()}>
        <Form form={columnForm} layout="vertical" onFinish={handleAddColumn}>
          <Form.Item name="name" label="Column Name" rules={[{ required: true }]}>
            <Input placeholder="e.g. Full Name, Email, Phone" />
          </Form.Item>
          <Form.Item name="dataType" label="Data Type" rules={[{ required: true }]} initialValue="text">
            <Select options={DATA_TYPES} />
          </Form.Item>
        </Form>
      </Modal>

      {/* Add/Edit Record Modal */}
      <Modal
        title={editingRecord ? 'Edit Record' : 'Add Record'}
        open={recordModalVisible}
        onCancel={() => { setRecordModalVisible(false); setEditingRecord(null); recordForm.resetFields(); }}
        onOk={() => recordForm.submit()}
        okText={editingRecord ? 'Save Changes' : 'Add'}
        width={520}
      >
        <Form form={recordForm} layout="vertical" onFinish={handleSaveRecord}>
          {columns.length === 0 ? (
            <Text type="secondary">No columns defined. Add columns first.</Text>
          ) : (
            columns.map((col: any) => (
              <Form.Item key={col.id} name={col.name} label={<Space>{col.name} <Tag style={{ fontSize: 10 }}>{col.dataType}</Tag></Space>}>
                {col.dataType === 'boolean' ? (
                  <Select options={[{ value: 'true', label: 'True' }, { value: 'false', label: 'False' }]} allowClear />
                ) : col.dataType === 'number' ? (
                  <Input type="number" placeholder={`Enter ${col.name}...`} />
                ) : col.dataType === 'date' ? (
                  <Input type="date" />
                ) : (
                  <Input placeholder={`Enter ${col.name}...`} />
                )}
              </Form.Item>
            ))
          )}
        </Form>
      </Modal>
    </div>
  );
}
