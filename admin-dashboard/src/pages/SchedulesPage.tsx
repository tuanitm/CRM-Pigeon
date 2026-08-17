import React, { useState, useEffect } from 'react';
import { Card, Typography, Table, Tag, Space, Button, Modal, Form, Input, Select, message, Popconfirm, Badge, TimePicker, Row, Col } from 'antd';
import { PlusOutlined, DeleteOutlined, PauseCircleOutlined, PlayCircleOutlined, FieldTimeOutlined, EditOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import { initialJourneysData } from './JourneysPage';

const { Title } = Typography;

const initialSchedules = [
  { id: '1', name: 'Daily Birthday Check', targetJourney: 'JRN_BIRTHDAY', frequency: 'daily', time: '09:00', status: 'active', nextRun: 'Tomorrow 09:00 AM' },
  { id: '2', name: 'Monthly Churn Sweep', targetJourney: 'JRN_CHURN_RISK', frequency: 'monthly', time: '00:00', status: 'paused', nextRun: 'Paused' },
];

export default function SchedulesPage() {
  const [schedules, setSchedules] = useState(() => {
    const saved = localStorage.getItem('demo_schedules');
    return saved ? JSON.parse(saved) : initialSchedules;
  });
  
  const [availableJourneys, setAvailableJourneys] = useState<any[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingSchedule, setEditingSchedule] = useState<any | null>(null);
  const [form] = Form.useForm();

  useEffect(() => {
    // Load journeys from local storage to populate the dropdown
    const savedJourneys = localStorage.getItem('demo_journeys');
    if (savedJourneys) {
      setAvailableJourneys(JSON.parse(savedJourneys));
    } else {
      setAvailableJourneys(initialJourneysData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('demo_schedules', JSON.stringify(schedules));
  }, [schedules]);

  const handleAddSchedule = (values: any) => {
    const timeStr = values.time && values.time.format ? values.time.format('HH:mm') : 'Manual';
    
    // Simple demo logic for Next Run text
    let nextRunText = 'Manual Run Only';
    if (values.frequency === 'daily') nextRunText = `Tomorrow at ${timeStr}`;
    if (values.frequency === 'weekly') nextRunText = `Next Monday at ${timeStr}`;
    if (values.frequency === 'monthly') nextRunText = `1st of Next Month at ${timeStr}`;

    if (editingSchedule) {
      setSchedules(schedules.map((s: any) => {
        if (s.id === editingSchedule.id) {
          return {
            ...s,
            name: values.name,
            targetJourney: values.targetJourney,
            frequency: values.frequency,
            time: timeStr,
            nextRun: s.status === 'paused' ? 'Paused' : nextRunText,
          };
        }
        return s;
      }));
      message.success('Schedule updated successfully');
    } else {
      const newSchedule = {
        id: Date.now().toString(),
        name: values.name,
        targetJourney: values.targetJourney,
        frequency: values.frequency,
        time: timeStr,
        status: 'active',
        nextRun: nextRunText,
      };
      setSchedules([...schedules, newSchedule]);
      message.success('Schedule created successfully');
    }

    setIsModalVisible(false);
    setEditingSchedule(null);
    form.resetFields();
  };

  const openEdit = (schedule: any) => {
    setEditingSchedule(schedule);
    form.setFieldsValue({
      name: schedule.name,
      targetJourney: schedule.targetJourney,
      frequency: schedule.frequency,
      time: schedule.time !== 'Manual' ? dayjs(schedule.time, 'HH:mm') : undefined,
    });
    setIsModalVisible(true);
  };

  const handleDelete = (id: string) => {
    setSchedules(schedules.filter((s: any) => s.id !== id));
    message.success('Schedule deleted');
  };

  const toggleStatus = (id: string) => {
    setSchedules(schedules.map((s: any) => {
      if (s.id === id) {
        const newStatus = s.status === 'active' ? 'paused' : 'active';
        return { ...s, status: newStatus, nextRun: newStatus === 'paused' ? 'Paused' : 'Pending Calculation...' };
      }
      return s;
    }));
  };

  const runNow = (name: string) => {
    message.success(`Manually triggered schedule: ${name}`);
  };

  const columns = [
    {
      title: 'Schedule Name',
      dataIndex: 'name',
      key: 'name',
      render: (text: string) => <span style={{ fontWeight: 600 }}>{text}</span>,
    },
    {
      title: 'Target Journey',
      dataIndex: 'targetJourney',
      key: 'targetJourney',
      render: (code: string) => {
        const j = availableJourneys.find(x => x.code === code);
        return <Tag color="blue">{j ? j.name : code}</Tag>;
      },
    },
    {
      title: 'Frequency',
      dataIndex: 'frequency',
      key: 'frequency',
      render: (f: string) => <Tag color={f === 'manual' ? 'default' : 'purple'}>{f.toUpperCase()}</Tag>,
    },
    {
      title: 'Time',
      dataIndex: 'time',
      key: 'time',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (s: string) => (
        <Badge status={s === 'active' ? 'success' : 'default'} text={s.toUpperCase()} />
      ),
    },
    {
      title: 'Next Run',
      dataIndex: 'nextRun',
      key: 'nextRun',
      render: (text: string) => <span style={{ color: '#6b7280' }}>{text}</span>,
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_: any, r: any) => (
        <Space size="small">
          <Button 
            type="text" 
            icon={<EditOutlined />} 
            onClick={() => openEdit(r)}
            title="Edit"
          />
          <Button 
            type="text" 
            icon={<PlayCircleOutlined />} 
            onClick={() => runNow(r.name)}
            title="Run Now"
          />
          <Button 
            type="text" 
            icon={r.status === 'active' ? <PauseCircleOutlined /> : <FieldTimeOutlined />} 
            onClick={() => toggleStatus(r.id)}
            title={r.status === 'active' ? 'Pause Schedule' : 'Resume Schedule'}
          />
          <Popconfirm title="Delete this schedule?" onConfirm={() => handleDelete(r.id)}>
            <Button type="text" danger icon={<DeleteOutlined />} title="Delete" />
          </Popconfirm>
        </Space>
      ),
    }
  ];

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
        <div>
          <Title level={3} style={{ margin: 0, fontWeight: 700 }}>Automation Schedules</Title>
          <Typography.Text type="secondary">Define CRON schedules to automatically execute specific Journeys over time.</Typography.Text>
        </div>
        <Button type="primary" icon={<PlusOutlined />} onClick={() => setIsModalVisible(true)}>Add Schedule</Button>
      </div>

      <Card variant="outlined" style={{ borderRadius: 10, borderColor: '#e5e7eb' }}>
        <Table columns={columns} dataSource={schedules} rowKey="id" pagination={false} />
      </Card>

      <Modal
        title={editingSchedule ? "Edit Schedule" : "Create New Schedule"}
        open={isModalVisible}
        onCancel={() => { setIsModalVisible(false); setEditingSchedule(null); form.resetFields(); }}
        onOk={() => form.submit()}
        okText={editingSchedule ? "Save Changes" : "Create"}
      >
        <Form form={form} layout="vertical" onFinish={handleAddSchedule}>
          <Form.Item name="name" label="Schedule Name" rules={[{ required: true }]}>
            <Input placeholder="e.g. Daily VIP Evaluation" />
          </Form.Item>
          
          <Form.Item name="targetJourney" label="Target Journey" rules={[{ required: true }]}>
            <Select placeholder="Select the Journey to run" showSearch>
              {availableJourneys.map(j => (
                <Select.Option key={j.code} value={j.code}>{j.name} ({j.code})</Select.Option>
              ))}
            </Select>
          </Form.Item>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item name="frequency" label="Frequency" rules={[{ required: true }]}>
                <Select placeholder="Select Frequency">
                  <Select.Option value="daily">Daily</Select.Option>
                  <Select.Option value="weekly">Weekly</Select.Option>
                  <Select.Option value="monthly">Monthly</Select.Option>
                  <Select.Option value="manual">Manual Only</Select.Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="time" label="Execution Time">
                <TimePicker format="HH:mm" style={{ width: '100%' }} />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
    </div>
  );
}
