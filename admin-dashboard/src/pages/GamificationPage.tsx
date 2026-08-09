import React, { useState } from 'react';
import {
  Card, Typography, Row, Col, Button, Space, Tag, Badge, Table,
  Progress, Avatar, Tabs,
} from 'antd';
import {
  TrophyOutlined, EyeOutlined, SettingOutlined, PlayCircleOutlined,
  TeamOutlined, ShareAltOutlined, HistoryOutlined, UnorderedListOutlined,
  AppstoreOutlined, CrownOutlined, GiftOutlined,
} from '@ant-design/icons';

const { Title, Text } = Typography;

const games = [
  {
    id: 1, name: 'Quà bay', desc: 'Quà Bay là minigame tương tác...',
    color: 'linear-gradient(135deg, #1e40af, #3b82f6)',
    emoji: '🎁', status: 'installed', plays: 12_450, badge: 'Mới ra mắt',
  },
  {
    id: 2, name: 'Mở quà', desc: 'Game Mở Quà cho phép người...',
    color: 'linear-gradient(135deg, #7c3aed, #a78bfa)',
    emoji: '🎊', status: 'installed', plays: 8_920, badge: 'Mới ra mắt',
  },
  {
    id: 3, name: 'Cắt bánh', desc: 'Cắt Bánh: Người chơi cắt lát...',
    color: 'linear-gradient(135deg, #0369a1, #38bdf8)',
    emoji: '🎂', status: 'available', plays: 0, badge: 'Mới ra mắt',
  },
  {
    id: 4, name: 'Lật thẻ', desc: 'Game Lật thẻ là sản phẩm ga...',
    color: 'linear-gradient(135deg, #b91c1c, #f87171)',
    emoji: '🃏', status: 'installed', plays: 5_340, badge: 'Mới ra mắt',
  },
  {
    id: 5, name: 'Lắc quà', desc: 'Lắc Quà (Shake Gift) là game...',
    color: 'linear-gradient(135deg, #a16207, #fbbf24)',
    emoji: '🎰', status: 'available', plays: 0, badge: 'Mới ra mắt',
  },
  {
    id: 6, name: 'Vòng quay', desc: 'Vòng quay may mắn cho khách...',
    color: 'linear-gradient(135deg, #15803d, #4ade80)',
    emoji: '🎡', status: 'installed', plays: 15_680, badge: 'Phổ biến',
  },
  {
    id: 7, name: 'Đua xe', desc: 'Game đua xe tương tác cho...',
    color: 'linear-gradient(135deg, #c2410c, #fb923c)',
    emoji: '🏎️', status: 'available', plays: 0, badge: 'Mới ra mắt',
  },
  {
    id: 8, name: 'Bắn bóng', desc: 'Bắn bóng nhận điểm thưởng...',
    color: 'linear-gradient(135deg, #0e7490, #22d3ee)',
    emoji: '🎯', status: 'available', plays: 0, badge: 'Mới ra mắt',
  },
];

const myGames = games.filter(g => g.status === 'installed');

const playerData = [
  { id: 1, name: 'Nguyen Thi Mai', phone: '+84901234567', game: 'Vòng quay', plays: 45, points: 2_250, lastPlay: '29/07/2026' },
  { id: 2, name: 'Tran Van Duc', phone: '+84912345678', game: 'Quà bay', plays: 23, points: 1_150, lastPlay: '28/07/2026' },
  { id: 3, name: 'Le Thi Hoa', phone: '+84923456789', game: 'Lật thẻ', plays: 18, points: 900, lastPlay: '27/07/2026' },
  { id: 4, name: 'Hoang Van Nam', phone: '+84956789012', game: 'Mở quà', plays: 12, points: 600, lastPlay: '26/07/2026' },
  { id: 5, name: 'Vo Thi Lan', phone: '+84945678901', game: 'Vòng quay', plays: 56, points: 2_800, lastPlay: '29/07/2026' },
];

const playerColumns = [
  {
    title: 'Người chơi',
    key: 'name',
    render: (_: any, r: any) => (
      <Space>
        <Avatar style={{ background: '#3b82f6' }} size={28}>{r.name[0]}</Avatar>
        <div>
          <Text strong style={{ fontSize: 13 }}>{r.name}</Text>
          <br />
          <Text type="secondary" style={{ fontSize: 11 }}>{r.phone}</Text>
        </div>
      </Space>
    ),
  },
  { title: 'Game', dataIndex: 'game', key: 'game', render: (g: string) => <Tag>{g}</Tag> },
  { title: 'Lượt chơi', dataIndex: 'plays', key: 'plays', sorter: (a: any, b: any) => a.plays - b.plays },
  { title: 'Điểm', dataIndex: 'points', key: 'points', render: (p: number) => <Text strong>{p.toLocaleString()}</Text>, sorter: (a: any, b: any) => a.points - b.points },
  { title: 'Lần chơi cuối', dataIndex: 'lastPlay', key: 'lastPlay' },
];

export default function GamificationPage() {
  const [activeSection, setActiveSection] = useState<string>('all');

  return (
    <div style={{ display: 'flex', gap: 0 }}>
      {/* Sub-sidebar */}
      <div className="page-sub-sidebar" style={{ marginLeft: -20, marginTop: -20, marginBottom: -20 }}>
        <div style={{ padding: '8px 16px 4px', display: 'flex', alignItems: 'center', gap: 6 }}>
          <AppstoreOutlined style={{ color: '#6b7280' }} />
          <Text type="secondary" style={{ fontSize: 12, fontWeight: 600 }}>Game marketplace</Text>
        </div>
        {[
          { key: 'all', icon: <AppstoreOutlined />, label: 'All games' },
          { key: 'mine', icon: <CrownOutlined />, label: 'My games' },
        ].map((item) => (
          <div
            key={item.key}
            className={`sub-sidebar-item ${activeSection === item.key ? 'sub-sidebar-item--active' : ''}`}
            onClick={() => setActiveSection(item.key)}
            style={{ paddingLeft: 28 }}
          >
            {item.icon} {item.label}
          </div>
        ))}

        <div style={{ padding: '16px 16px 4px', display: 'flex', alignItems: 'center', gap: 6 }}>
          <TrophyOutlined style={{ color: '#6b7280' }} />
          <Text type="secondary" style={{ fontSize: 12, fontWeight: 600 }}>Gamification</Text>
        </div>
        {[
          { key: 'list', icon: <UnorderedListOutlined />, label: 'Game list' },
          { key: 'players', icon: <TeamOutlined />, label: 'Players' },
          { key: 'sharing', icon: <ShareAltOutlined />, label: 'Top sharing' },
          { key: 'logs', icon: <HistoryOutlined />, label: 'Logs' },
          { key: 'plays', icon: <PlayCircleOutlined />, label: 'Plays' },
        ].map((item) => (
          <div
            key={item.key}
            className={`sub-sidebar-item ${activeSection === item.key ? 'sub-sidebar-item--active' : ''}`}
            onClick={() => setActiveSection(item.key)}
            style={{ paddingLeft: 28 }}
          >
            {item.icon} {item.label}
          </div>
        ))}

        {/* Plan Info */}
        <div style={{ padding: '24px 16px', marginTop: 'auto' }}>
          <div style={{
            background: '#f0f9ff',
            borderRadius: 10,
            padding: '12px 14px',
          }}>
            <Space align="center" style={{ marginBottom: 8 }}>
              <div style={{
                width: 28, height: 28, borderRadius: 6,
                background: '#3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#fff', fontWeight: 800, fontSize: 12,
              }}>10</div>
              <div>
                <Text strong style={{ fontSize: 12 }}>Gói Advance</Text>
                <br />
                <Tag color="green" style={{ fontSize: 10 }}>Đang sử dụng</Tag>
              </div>
            </Space>
            <div style={{ fontSize: 12, color: '#6b7280', marginBottom: 4 }}>
              Số game sở hữu: <strong>{myGames.length} / 10</strong>
            </div>
            <Progress percent={(myGames.length / 10) * 100} size="small" showInfo={false} strokeColor="#3b82f6" />
            <div style={{ fontSize: 12, color: '#6b7280', marginTop: 8 }}>
              Lượt chơi: <strong>{myGames.reduce((s, g) => s + g.plays, 0).toLocaleString()} / 490,000</strong>
            </div>
            <Progress percent={(myGames.reduce((s, g) => s + g.plays, 0) / 490000) * 100} size="small" showInfo={false} strokeColor="#10b981" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: '0 0 0 24px' }}>
        {(activeSection === 'all' || activeSection === 'mine') && (
          <>
            {/* Header */}
            <div style={{
              background: 'linear-gradient(135deg, #fdf2f8, #fce7f3, #ede9fe)',
              borderRadius: 16,
              padding: '24px 32px',
              marginBottom: 24,
              position: 'relative',
              overflow: 'hidden',
            }}>
              <Title level={3} style={{ margin: 0, color: '#be185d', fontWeight: 800 }}>
                {activeSection === 'all' ? 'Kho Game có sẵn' : 'Game của tôi'}
              </Title>
              <Text style={{ color: '#9d174d', fontSize: 14 }}>
                {activeSection === 'all'
                  ? 'Hệ thống mẫu Game được thiết kế sẵn, giúp bạn dễ dàng lựa chọn theo mục tiêu chiến dịch.'
                  : `${myGames.length} game đã cài đặt`
                }
              </Text>
              {activeSection === 'all' && (
                <div style={{ marginTop: 4 }}>
                  <Text style={{ color: '#9d174d', fontSize: 13 }}>
                    Quy trình triển khai tinh gọn: <strong>Chọn mẫu – Tùy chỉnh – Vận hành</strong>
                  </Text>
                </div>
              )}
            </div>

            {/* Game Grid */}
            <Row gutter={[16, 16]}>
              {(activeSection === 'all' ? games : myGames).map((game) => (
                <Col xs={24} sm={12} lg={8} xl={6} key={game.id}>
                  <Card
                    className="game-card"
                    variant="outlined"
                    style={{ borderRadius: 16, borderColor: '#e5e7eb', overflow: 'hidden' }}
                    styles={{ body: { padding: '14px 16px' } }}
                    cover={
                      <div style={{
                        background: game.color,
                        height: 200,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                      }}>
                        <div style={{ fontSize: 64 }}>{game.emoji}</div>
                        <div className="game-card-badge">{game.badge}</div>
                        {game.status === 'installed' && (
                          <div style={{
                            position: 'absolute', top: 12, right: 12,
                            background: '#10b981', color: '#fff',
                            padding: '3px 10px', borderRadius: 6,
                            fontSize: 10, fontWeight: 700,
                          }}>
                            Đã cài
                          </div>
                        )}
                      </div>
                    }
                  >
                    <Space align="center" style={{ marginBottom: 8 }}>
                      <div style={{
                        width: 32, height: 32, borderRadius: 8,
                        background: game.color,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 16,
                      }}>
                        {game.emoji}
                      </div>
                      <div>
                        <Text strong style={{ fontSize: 14 }}>{game.name}</Text>
                        <br />
                        <Text type="secondary" style={{ fontSize: 11 }}>{game.desc.slice(0, 30)}...</Text>
                      </div>
                    </Space>
                    <Space style={{ width: '100%', justifyContent: 'flex-end' }}>
                      <Button size="small" style={{ borderRadius: 6 }} icon={<EyeOutlined />}>
                        Xem trước
                      </Button>
                      <Button
                        size="small"
                        type={game.status === 'installed' ? 'default' : 'primary'}
                        style={{ borderRadius: 6 }}
                        icon={game.status === 'installed' ? <SettingOutlined /> : <GiftOutlined />}
                      >
                        {game.status === 'installed' ? 'Cài đặt' : 'Thiết lập'}
                      </Button>
                    </Space>
                  </Card>
                </Col>
              ))}
            </Row>
          </>
        )}

        {activeSection === 'players' && (
          <div>
            <Title level={4} style={{ margin: '0 0 16px', fontWeight: 700 }}>Người chơi</Title>
            <Card variant="outlined" style={{ borderRadius: 10, borderColor: '#e5e7eb' }}>
              <Table columns={playerColumns} dataSource={playerData} rowKey="id" pagination={{ pageSize: 10 }} />
            </Card>
          </div>
        )}

        {['list', 'sharing', 'logs', 'plays'].includes(activeSection) && (
          <div>
            <Title level={4} style={{ margin: '0 0 16px', fontWeight: 700 }}>
              {activeSection === 'list' && 'Danh sách game'}
              {activeSection === 'sharing' && 'Top chia sẻ'}
              {activeSection === 'logs' && 'Logs'}
              {activeSection === 'plays' && 'Lượt chơi'}
            </Title>
            <Card variant="outlined" style={{ borderRadius: 10, borderColor: '#e5e7eb', padding: '40px', textAlign: 'center' }}>
              <TrophyOutlined style={{ fontSize: 48, color: '#d1d5db', marginBottom: 16 }} />
              <div style={{ color: '#6b7280' }}>Module đang phát triển</div>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
