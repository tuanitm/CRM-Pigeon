import React from 'react';
import { Card, Typography, Table, Tag, Space, Row, Col, Statistic, Progress } from 'antd';
import { MailOutlined, CheckCircleOutlined, CloseCircleOutlined, StopOutlined } from '@ant-design/icons';

const { Title } = Typography;

const messageData = [
  { id: '1', customer: 'Nguyen Thi Mai', channel: 'zns', template: 'WELCOME_BABY_01', status: 'delivered', sentAt: '2026-07-29 20:15' },
  { id: '2', customer: 'Tran Van Duc', channel: 'email', template: 'SECOND_ORDER_REC_01', status: 'sent', sentAt: '2026-07-29 20:12' },
  { id: '3', customer: 'Le Thi Hoa', channel: 'zns', template: 'CART_RESCUE_01', status: 'delivered', sentAt: '2026-07-29 19:58' },
  { id: '4', customer: 'Pham Minh Tuan', channel: 'email', template: 'REPLENISH_REMIND_01', status: 'suppressed', sentAt: '2026-07-29 19:45', reason: 'no_consent' },
  { id: '5', customer: 'Vo Thi Lan', channel: 'sms', template: 'REACTIVATION_FINAL_01', status: 'delivered', sentAt: '2026-07-29 19:30' },
  { id: '6', customer: 'Hoang Van Nam', channel: 'zns', template: 'CHURN_ALERT_01', status: 'failed', sentAt: '2026-07-29 19:15', reason: 'invalid_phone' },
  { id: '7', customer: 'Dang Thi Thao', channel: 'zns', template: 'TIER_NUDGE_01', status: 'deferred', sentAt: '2026-07-29 21:05', reason: 'quiet_hours' },
  { id: '8', customer: 'Bui Quoc Viet', channel: 'email', template: 'BABY_STAGE_TIPS_01', status: 'delivered', sentAt: '2026-07-29 18:50' },
];

const columns = [
  {
    title: 'Khách hàng',
    dataIndex: 'customer',
    key: 'customer',
    render: (text: string) => <span style={{ fontWeight: 500 }}>{text}</span>,
  },
  {
    title: 'Kênh',
    dataIndex: 'channel',
    key: 'channel',
    render: (ch: string) => {
      const colors: Record<string, string> = { zns: 'blue', email: 'green', sms: 'orange' };
      return <Tag color={colors[ch]}>{ch.toUpperCase()}</Tag>;
    },
  },
  {
    title: 'Template',
    dataIndex: 'template',
    key: 'template',
    render: (t: string) => <Tag>{t}</Tag>,
  },
  {
    title: 'Trạng thái',
    dataIndex: 'status',
    key: 'status',
    render: (s: string) => {
      const config: Record<string, { color: string; icon: React.ReactNode }> = {
        delivered: { color: 'success', icon: <CheckCircleOutlined /> },
        sent: { color: 'processing', icon: <MailOutlined /> },
        suppressed: { color: 'warning', icon: <StopOutlined /> },
        failed: { color: 'error', icon: <CloseCircleOutlined /> },
        deferred: { color: 'default', icon: <MailOutlined /> },
      };
      const c = config[s] || config.sent;
      return <Tag color={c.color} icon={c.icon}>{s}</Tag>;
    },
  },
  {
    title: 'Lý do',
    dataIndex: 'reason',
    key: 'reason',
    render: (r: string) => r ? <Tag color="volcano">{r}</Tag> : '—',
  },
  { title: 'Thời gian', dataIndex: 'sentAt', key: 'sentAt' },
];

export default function MessagesPage() {
  return (
    <div>
      <Title level={3} style={{ margin: '0 0 20px', fontWeight: 700 }}>Nhật ký tin nhắn</Title>

      <Row gutter={[12, 12]} style={{ marginBottom: 16 }}>
        <Col span={6}>
          <Card variant="outlined" style={{ borderRadius: 10, borderColor: '#e5e7eb' }}>
            <Statistic title="Gửi hôm nay" value={1_280} prefix={<MailOutlined />} />
          </Card>
        </Col>
        <Col span={6}>
          <Card variant="outlined" style={{ borderRadius: 10, borderColor: '#e5e7eb' }}>
            <Statistic title="Đã gửi tới" value={1_205} prefix={<CheckCircleOutlined />} styles={{ content: { color: '#10b981' } }} />
            <Progress percent={94.1} size="small" strokeColor="#10b981" style={{ marginTop: 4 }} />
          </Card>
        </Col>
        <Col span={6}>
          <Card variant="outlined" style={{ borderRadius: 10, borderColor: '#e5e7eb' }}>
            <Statistic title="Bị chặn" value={52} prefix={<StopOutlined />} styles={{ content: { color: '#f59e0b' } }} />
          </Card>
        </Col>
        <Col span={6}>
          <Card variant="outlined" style={{ borderRadius: 10, borderColor: '#e5e7eb' }}>
            <Statistic title="Thất bại" value={23} prefix={<CloseCircleOutlined />} styles={{ content: { color: '#ef4444' } }} />
          </Card>
        </Col>
      </Row>

      <Card variant="outlined" style={{ borderRadius: 10, borderColor: '#e5e7eb' }}>
        <Table columns={columns} dataSource={messageData} rowKey="id" pagination={{ pageSize: 15 }} />
      </Card>
    </div>
  );
}
