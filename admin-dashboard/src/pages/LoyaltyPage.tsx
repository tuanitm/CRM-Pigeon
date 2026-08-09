import React from 'react';
import { Card, Typography, Table, Tag, Space, Row, Col, Statistic, Descriptions, Divider, Progress } from 'antd';
import { GiftOutlined, TrophyOutlined, StarOutlined, CrownOutlined, FireOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const tierConfig = [
  { code: 'MEMBER', name: 'Member', order: 1, minSpend: 0, minMonths: 0, multiplier: 1.0, members: 9_200, color: '#8c8c8c', benefits: ['Earn 1 pt / 10,000₫', 'Birthday reward'] },
  { code: 'SILVER', name: 'Silver', order: 2, minSpend: 2_000_000, minMonths: 2, multiplier: 1.5, members: 2_450, color: '#c0c0c0', benefits: ['1.5x point multiplier', 'Exclusive offers', 'Free shipping on orders > 500k'] },
  { code: 'GOLD', name: 'Gold', order: 3, minSpend: 5_000_000, minMonths: 4, multiplier: 2.0, members: 800, color: '#FFD700', benefits: ['2x point multiplier', 'VIP exclusive access', 'Free shipping always', 'Expert consultations'] },
];

const earnRules = [
  { source: 'purchase', name: 'Purchase', formula: '1 pt / 10,000 VND', multiplier: true, active: true },
  { source: 'qr_scan', name: 'QR Scan', formula: '50 pts fixed', multiplier: true, active: true },
  { source: 'profile_completion', name: 'Profile Complete', formula: '100 pts once', multiplier: false, active: true },
  { source: 'review', name: 'Product Review', formula: '20-50 pts', multiplier: true, active: true },
  { source: 'milestone', name: 'Milestone', formula: 'per milestone config', multiplier: false, active: true },
  { source: 'referral', name: 'Referral', formula: '200 pts referrer / 100 pts referred', multiplier: false, active: true },
  { source: 'quiz', name: 'Quiz', formula: '30 pts default', multiplier: true, active: true },
  { source: 'warranty', name: 'Warranty Reg', formula: '50 pts', multiplier: true, active: true },
];

const rewardsData = [
  { code: 'DISC_10', name: '10% Discount Coupon', points: 500, stock: 100, active: true },
  { code: 'DISC_20', name: '20% Discount Coupon', points: 1000, stock: 50, active: true },
  { code: 'FREE_SHIP', name: 'Free Shipping', points: 200, stock: null, active: true },
  { code: 'GWP_BOTTLE', name: 'Gift: PIGEON Bottle', points: 2000, stock: 25, active: true },
  { code: 'GWP_SET', name: 'Gift: Newborn Care Set', points: 5000, stock: 10, active: true },
];

export default function LoyaltyPage() {
  return (
    <div>
      <Title level={3} style={{ margin: '0 0 20px', fontWeight: 700 }}>Loyalty Program</Title>

      {/* Tier Cards */}
      <Row gutter={[12, 12]} style={{ marginBottom: 24 }}>
        {tierConfig.map((tier) => (
          <Col span={8} key={tier.code}>
            <Card
              variant="outlined"
              style={{
                borderRadius: 10,
                borderColor: '#e5e7eb',
                borderTop: `4px solid ${tier.color}`,
              }}
            >
              <Space align="center" style={{ marginBottom: 16 }}>
                <CrownOutlined style={{ fontSize: 24, color: tier.color }} />
                <Title level={4} style={{ margin: 0 }}>{tier.name}</Title>
              </Space>
              <Descriptions column={1} size="small">
                <Descriptions.Item label="Min Spend">{tier.minSpend > 0 ? `${(tier.minSpend / 1_000_000).toFixed(0)}M ₫` : 'None'}</Descriptions.Item>
                <Descriptions.Item label="Min Months">{tier.minMonths || 'None'}</Descriptions.Item>
                <Descriptions.Item label="Multiplier">{tier.multiplier}×</Descriptions.Item>
                <Descriptions.Item label="Members">
                  <Text strong style={{ fontSize: 16 }}>{tier.members.toLocaleString()}</Text>
                </Descriptions.Item>
              </Descriptions>
              <Divider style={{ margin: '12px 0' }} />
              <Space orientation="vertical" size={4}>
                {tier.benefits.map((b, i) => (
                  <Tag key={i} color="blue" style={{ margin: 0 }}>✓ {b}</Tag>
                ))}
              </Space>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Earn Rules + Rewards */}
      <Row gutter={[12, 12]}>
        <Col span={12}>
          <Card title={<Space><FireOutlined /> 8 Earning Sources</Space>} variant="outlined" style={{ borderRadius: 10, borderColor: '#e5e7eb' }}>
            <Table
              columns={[
                { title: 'Source', dataIndex: 'name', key: 'name', render: (t: string) => <Text strong>{t}</Text> },
                { title: 'Formula', dataIndex: 'formula', key: 'formula' },
                { title: 'Tier ×', dataIndex: 'multiplier', key: 'mult', render: (v: boolean) => v ? <Tag color="blue">Yes</Tag> : <Tag>No</Tag> },
                { title: 'Active', dataIndex: 'active', key: 'active', render: (v: boolean) => v ? <Tag color="success">Active</Tag> : <Tag>Inactive</Tag> },
              ]}
              dataSource={earnRules}
              rowKey="source"
              pagination={false}
              size="small"
            />
          </Card>
        </Col>
        <Col span={12}>
          <Card title={<Space><GiftOutlined /> Reward Catalog</Space>} variant="outlined" style={{ borderRadius: 10, borderColor: '#e5e7eb' }}>
            <Table
              columns={[
                { title: 'Reward', dataIndex: 'name', key: 'name', render: (t: string) => <Text strong>{t}</Text> },
                { title: 'Points', dataIndex: 'points', key: 'points', render: (p: number) => <Tag color="gold">{p.toLocaleString()} pts</Tag> },
                { title: 'Stock', dataIndex: 'stock', key: 'stock', render: (s: number | null) => s !== null ? s : '∞' },
                { title: 'Active', dataIndex: 'active', key: 'active', render: (v: boolean) => <Tag color={v ? 'success' : 'default'}>{v ? 'Active' : 'Inactive'}</Tag> },
              ]}
              dataSource={rewardsData}
              rowKey="code"
              pagination={false}
              size="small"
            />
          </Card>
        </Col>
      </Row>

      {/* Points Liability */}
      <Card
        title="Points Liability"
        variant="outlined"
        style={{ borderRadius: 10, borderColor: '#e5e7eb', marginTop: 16 }}
      >
        <Row gutter={24}>
          <Col span={6}>
            <Statistic title="Điểm lưu hành" value={1_245_000} prefix={<StarOutlined />} />
          </Col>
          <Col span={6}>
            <Statistic title="Giá trị ước tính" value={124_500_000} suffix="₫" />
          </Col>
          <Col span={6}>
            <Statistic title="Sắp hết hạn (30d)" value={45_200} styles={{ content: { color: '#f59e0b' } }} />
          </Col>
          <Col span={6}>
            <Statistic title="Sắp hết hạn (90d)" value={128_000} styles={{ content: { color: '#ef4444' } }} />
          </Col>
        </Row>
      </Card>
    </div>
  );
}
