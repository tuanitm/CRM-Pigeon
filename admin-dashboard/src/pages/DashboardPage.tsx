import React from 'react';
import { Row, Col, Card, Statistic, Typography, Tag, Space, Progress, Avatar, Tooltip } from 'antd';
import {
  UserOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
  TrophyOutlined,
  ThunderboltOutlined,
  LineChartOutlined,
  ShoppingCartOutlined,
  DollarOutlined,
  RiseOutlined,
  BarChartOutlined,
  MailOutlined,
  MessageOutlined,
  MobileOutlined,
  CalendarOutlined,
} from '@ant-design/icons';

const { Title, Text } = Typography;

/* ═══════════════════════════════════════════════
   DASHBOARD: Executive Overview — Business KPIs
   Focus: Revenue, Orders, Profit, Channels, Journeys
   NOT customer-level analytics (that's Customer 360)
   ═══════════════════════════════════════════════ */

const sparklineData = [4, 7, 5, 9, 12, 8, 14, 11, 16, 13, 18, 15, 20];

function MiniSparkline({ data, color = '#3b82f6' }: { data: number[]; color?: string }) {
  const max = Math.max(...data);
  return (
    <div className="sparkline-container">
      {data.map((val, i) => (
        <div
          key={i}
          className="sparkline-bar"
          style={{
            height: `${(val / max) * 100}%`,
            background: color,
            opacity: i === data.length - 1 ? 1 : 0.15 + (i / data.length) * 0.5,
          }}
        />
      ))}
    </div>
  );
}

function KpiCard({
  label, labelType, title, value, pctChange, sparkline, sparkColor, icon,
}: {
  label: string;
  labelType: 'quantity' | 'value' | 'rate';
  title: string;
  value: string;
  pctChange?: number;
  sparkline?: number[];
  sparkColor?: string;
  icon?: React.ReactNode;
}) {
  return (
    <Card variant="outlined" style={{ borderRadius: 10, borderColor: '#e5e7eb' }} styles={{ body: { padding: '16px 20px' } }}>
      <div className={`kpi-label kpi-label--${labelType}`}>{label}</div>
      <div style={{ fontSize: 12, color: '#6b7280', marginBottom: 4, fontWeight: 500, display: 'flex', alignItems: 'center', gap: 4 }}>
        {icon} {title}
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div>
          <div style={{ fontSize: 28, fontWeight: 800, color: '#1f2937', lineHeight: 1.1 }}>
            {value}
          </div>
          {pctChange !== undefined && (
            <div className={`change-indicator ${pctChange >= 0 ? 'change-indicator--up' : 'change-indicator--down'}`}
              style={{ marginTop: 6 }}
            >
              {pctChange >= 0 ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
              {Math.abs(pctChange)}% so kỳ trước
            </div>
          )}
        </div>
        {sparkline && <MiniSparkline data={sparkline} color={sparkColor} />}
      </div>
    </Card>
  );
}

// ─── Revenue chart bars (simulated 30-day) ───
const revenueBars = Array.from({ length: 30 }, (_, i) => 20 + Math.sin(i * 0.5) * 15 + Math.random() * 30);

export default function DashboardPage() {
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
        <Title level={3} style={{ margin: 0, fontWeight: 700 }}>Dashboard</Title>
        <Tag color="blue" style={{ borderRadius: 6, padding: '2px 12px' }}>
          <CalendarOutlined /> Khoảng thời gian: <strong>30 ngày qua</strong>
        </Tag>
      </div>

      {/* ─── Row 1: Business KPIs ─── */}
      <Row gutter={[12, 12]}>
        <Col xs={24} sm={12} xl={6}>
          <KpiCard label="GIÁ TRỊ" labelType="value" title="Tổng doanh thu" value="1,258M ₫"
            pctChange={18.4}
            sparkline={sparklineData} sparkColor="#10b981"
            icon={<DollarOutlined style={{ color: '#10b981' }} />} />
        </Col>
        <Col xs={24} sm={12} xl={6}>
          <KpiCard label="SỐ LƯỢNG" labelType="quantity" title="Tổng đơn hàng" value="3,842"
            pctChange={12.1}
            sparkline={[12, 15, 9, 18, 14, 22, 16, 25, 19, 28, 21, 30, 24]}
            sparkColor="#3b82f6"
            icon={<ShoppingCartOutlined style={{ color: '#3b82f6' }} />} />
        </Col>
        <Col xs={24} sm={12} xl={6}>
          <KpiCard label="GIÁ TRỊ" labelType="value" title="Lợi nhuận" value="428M ₫"
            pctChange={8.7}
            icon={<RiseOutlined style={{ color: '#8b5cf6' }} />} />
        </Col>
        <Col xs={24} sm={12} xl={6}>
          <KpiCard label="GIÁ TRỊ" labelType="value" title="AOV — Giá trị đơn TB" value="327,500 ₫"
            pctChange={-2.3}
            icon={<BarChartOutlined style={{ color: '#f59e0b' }} />} />
        </Col>
      </Row>

      <Row gutter={[12, 12]} style={{ marginTop: 12 }}>
        <Col xs={24} sm={12} xl={6}>
          <KpiCard label="SỐ LƯỢNG" labelType="quantity" title="Tổng sản phẩm bán" value="8,520"
            icon={<ShoppingCartOutlined style={{ color: '#06b6d4' }} />} />
        </Col>
        <Col xs={24} sm={12} xl={6}>
          <KpiCard label="TỶ LỆ" labelType="rate" title="Tỷ lệ chuyển đổi" value="18%"
            pctChange={5.4}
            icon={<RiseOutlined style={{ color: '#10b981' }} />} />
        </Col>
        <Col xs={24} sm={12} xl={6}>
          <KpiCard label="TỶ LỆ" labelType="rate" title="Tỷ lệ mua lại" value="32%"
            pctChange={3.2}
            icon={<TrophyOutlined style={{ color: '#f59e0b' }} />} />
        </Col>
        <Col xs={24} sm={12} xl={6}>
          <KpiCard label="SỐ LƯỢNG" labelType="quantity" title="Tin nhắn gửi hôm nay" value="1,280"
            icon={<MessageOutlined style={{ color: '#ec4899' }} />} />
        </Col>
      </Row>

      {/* ─── Row 2: Revenue Chart ─── */}
      <Card variant="outlined" style={{ borderRadius: 10, marginTop: 20, borderColor: '#e5e7eb' }}
        styles={{ body: { padding: '20px 24px' } }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
          <div>
            <Title level={5} style={{ margin: 0, fontWeight: 700 }}>Doanh thu theo ngày</Title>
            <Text type="secondary" style={{ fontSize: 12 }}>30 ngày gần nhất · Đơn vị: triệu VND</Text>
          </div>
          <Space>
            <Tag color="blue">Tổng: 1,258M ₫</Tag>
            <Tag color="green">TB/ngày: 42M ₫</Tag>
          </Space>
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 3, height: 140, padding: '0 4px' }}>
          {revenueBars.map((h, i) => (
            <Tooltip key={i} title={`Ngày ${i + 1}/07: ${Math.round(h)}M ₫`}>
              <div
                style={{
                  flex: 1,
                  height: `${h}%`,
                  background: `linear-gradient(180deg, #3b82f6 0%, #60a5fa 100%)`,
                  borderRadius: '3px 3px 0 0',
                  opacity: 0.4 + (i / 30) * 0.6,
                  transition: 'opacity 0.2s',
                  cursor: 'pointer',
                }}
              />
            </Tooltip>
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 4px 0', color: '#9ca3af', fontSize: 11 }}>
          <span>01/07</span><span>05/07</span><span>10/07</span><span>15/07</span><span>20/07</span><span>25/07</span><span>30/07</span>
        </div>
      </Card>

      {/* ─── Row 3: Active Journeys + Activity Feed ─── */}
      <Row gutter={[12, 12]} style={{ marginTop: 12 }}>
        <Col xs={24} lg={14}>
          <Card
            variant="outlined"
            title={<Space><ThunderboltOutlined style={{ color: '#3b82f6' }} /> Hành trình đang chạy</Space>}
            style={{ borderRadius: 10, borderColor: '#e5e7eb', height: '100%' }}
          >
            {[
              { name: 'Welcome Baby', active: 124, completed: 892, rate: 78 },
              { name: 'Cart Rescue', active: 45, completed: 312, rate: 42 },
              { name: 'Replenishment', active: 89, completed: 1_204, rate: 65 },
              { name: 'Churn Alert', active: 33, completed: 156, rate: 31 },
            ].map((j) => (
              <div key={j.name} style={{ marginBottom: 16 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                  <Text strong>{j.name}</Text>
                  <Space>
                    <Tag color="processing">{j.active} đang chạy</Tag>
                    <Tag color="success">{j.completed} hoàn thành</Tag>
                  </Space>
                </div>
                <Progress percent={j.rate} strokeColor={{ '0%': '#3b82f6', '100%': '#10b981' }} size="small" format={(pct) => `${pct}%`} />
              </div>
            ))}
          </Card>
        </Col>

        <Col xs={24} lg={10}>
          <Card
            variant="outlined"
            title={<Space><TrophyOutlined style={{ color: '#f59e0b' }} /> Hoạt động gần đây</Space>}
            style={{ borderRadius: 10, borderColor: '#e5e7eb', height: '100%' }}
          >
            {[
              { title: 'Nguyen Thi Mai', desc: 'Nâng hạng lên GOLD', time: '2 phút trước', color: '#FFD700' },
              { title: 'Tran Van Duc', desc: 'Hoàn thành Journey Welcome Baby', time: '8 phút trước', color: '#10b981' },
              { title: 'Le Thi Hoa', desc: 'Đổi 500 điểm lấy voucher', time: '15 phút trước', color: '#3b82f6' },
              { title: 'Pham Minh Tuan', desc: 'Quét QR xác thực — +50 điểm', time: '22 phút trước', color: '#8b5cf6' },
              { title: 'Vo Thi Lan', desc: 'Gửi ZNS giỏ hàng bị bỏ', time: '35 phút trước', color: '#ec4899' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, padding: '10px 0', borderBottom: i < 4 ? '1px solid #f3f4f6' : 'none' }}>
                <Avatar style={{ backgroundColor: item.color, flexShrink: 0 }} icon={<UserOutlined />} size={36} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <Text strong style={{ fontSize: 13 }}>{item.title}</Text>
                  <div style={{ fontSize: 12, color: '#4b5563' }}>{item.desc}</div>
                  <div style={{ fontSize: 11, color: '#9ca3af' }}>{item.time}</div>
                </div>
              </div>
            ))}
          </Card>
        </Col>
      </Row>

      {/* ─── Row 4: Tier + RFM + Channel ─── */}
      <Row gutter={[12, 12]} style={{ marginTop: 12 }}>
        <Col xs={24} lg={8}>
          <Card variant="outlined" title="Phân bổ hạng thành viên" style={{ borderRadius: 10, borderColor: '#e5e7eb' }}>
            {[
              { tier: 'BRONZE', count: 9_200, color: '#94a3b8', pct: 74 },
              { tier: 'SILVER', count: 2_450, color: '#a8a29e', pct: 20 },
              { tier: 'GOLD', count: 800, color: '#f59e0b', pct: 6 },
            ].map((t) => (
              <div key={t.tier} style={{ marginBottom: 12 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                  <Tag color={t.tier === 'GOLD' ? 'gold' : t.tier === 'SILVER' ? 'default' : 'blue'}>{t.tier}</Tag>
                  <Text>{t.count.toLocaleString()} ({t.pct}%)</Text>
                </div>
                <Progress percent={t.pct} showInfo={false} strokeColor={t.color} size="small" />
              </div>
            ))}
          </Card>
        </Col>
        <Col xs={24} lg={8}>
          <Card variant="outlined" title="Phân khúc RFM" style={{ borderRadius: 10, borderColor: '#e5e7eb' }}>
            <Space orientation="vertical" style={{ width: '100%' }} size={10}>
              {[
                { seg: 'Champions', count: 320, color: '#10b981' },
                { seg: 'Loyal', count: 1_180, color: '#3b82f6' },
                { seg: 'At Risk', count: 450, color: '#f59e0b' },
                { seg: 'Hibernating', count: 890, color: '#ef4444' },
                { seg: 'New Customers', count: 680, color: '#8b5cf6' },
              ].map((s) => (
                <div key={s.seg} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Space>
                    <div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: s.color }} />
                    <Text>{s.seg}</Text>
                  </Space>
                  <Text strong>{s.count.toLocaleString()}</Text>
                </div>
              ))}
            </Space>
          </Card>
        </Col>
        <Col xs={24} lg={8}>
          <Card variant="outlined" title="Hiệu suất kênh gửi" style={{ borderRadius: 10, borderColor: '#e5e7eb' }}>
            <Space orientation="vertical" style={{ width: '100%' }} size={12}>
              {[
                { ch: 'ZNS', sent: 820, delivered: 792, rate: 96.6, color: '#3b82f6', icon: <MobileOutlined /> },
                { ch: 'Email', sent: 380, delivered: 342, rate: 90.0, color: '#10b981', icon: <MailOutlined /> },
                { ch: 'SMS', sent: 80, delivered: 78, rate: 97.5, color: '#f59e0b', icon: <MessageOutlined /> },
              ].map((c) => (
                <div key={c.ch}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                    <Space size={4}>{c.icon} <Text strong>{c.ch}</Text></Space>
                    <Text type="secondary" style={{ fontSize: 12 }}>{c.sent} gửi / {c.delivered} nhận</Text>
                  </div>
                  <Progress percent={c.rate} strokeColor={c.color} size="small" />
                </div>
              ))}
            </Space>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
