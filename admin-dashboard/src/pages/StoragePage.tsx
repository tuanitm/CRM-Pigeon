import React, { useState } from 'react';
import {
  Card, Typography, Row, Col, Space, Button, Input, Tag, Progress,
  Tooltip, Select, Upload,
} from 'antd';
import {
  UploadOutlined, FolderOutlined, SearchOutlined, FilterOutlined,
  FileImageOutlined, SoundOutlined, FileOutlined, StarOutlined,
  ClockCircleOutlined, DeleteOutlined, CloudOutlined,
  AppstoreOutlined, UnorderedListOutlined, SortAscendingOutlined,
} from '@ant-design/icons';

const { Title, Text } = Typography;

const files = [
  { id: 1, name: 'claim.mp3', type: 'MP3', size: '299.75 KB', color: '#3b82f6', emoji: '🎵' },
  { id: 2, name: 'bingo.mp3', type: 'MP3', size: '6.11 KB', color: '#3b82f6', emoji: '🎵' },
  { id: 3, name: 'swoot.mp3', type: 'MP3', size: '33.75 KB', color: '#3b82f6', emoji: '🎵' },
  { id: 4, name: 'banner_campaign_july.png', type: 'PNG', size: '8.77 KB', color: '#10b981', emoji: '🖼️' },
  { id: 5, name: 'product_photo_01.png', type: 'PNG', size: '28.24 KB', color: '#10b981', emoji: '🖼️' },
  { id: 6, name: 'loyalty_badge_gold.png', type: 'PNG', size: '70.02 KB', color: '#10b981', emoji: '🖼️' },
  { id: 7, name: 'promo_20_off.png', type: 'PNG', size: '25.62 KB', color: '#10b981', emoji: '🖼️' },
  { id: 8, name: 'popup_welcome.png', type: 'PNG', size: '1.63 MB', color: '#10b981', emoji: '🖼️' },
  { id: 9, name: 'qr_template.png', type: 'PNG', size: '4.19 MB', color: '#10b981', emoji: '🖼️' },
  { id: 10, name: 'baby_stage_infographic.png', type: 'PNG', size: '5.21 MB', color: '#10b981', emoji: '🖼️' },
  { id: 11, name: 'salad_recipe.jpeg', type: 'JPG', size: '15.97 KB', color: '#f59e0b', emoji: '🖼️' },
  { id: 12, name: 'pigeon_bottle_hero.jpg', type: 'JPG', size: '130.08 KB', color: '#f59e0b', emoji: '🖼️' },
  { id: 13, name: 'newborn_care_set.jpg', type: 'JPG', size: '25.50 KB', color: '#f59e0b', emoji: '🖼️' },
  { id: 14, name: 'game_background_01.png', type: 'PNG', size: '3.19 MB', color: '#10b981', emoji: '🖼️' },
  { id: 15, name: 'game_background_02.png', type: 'PNG', size: '285.55 KB', color: '#10b981', emoji: '🖼️' },
  { id: 16, name: 'zalo_oa_template.png', type: 'PNG', size: '1.74 MB', color: '#10b981', emoji: '🖼️' },
  { id: 17, name: 'bao_li_xi_design.jpg', type: 'JPG', size: '165.34 KB', color: '#f59e0b', emoji: '🖼️' },
  { id: 18, name: 'referral_banner.jpg', type: 'JPG', size: '109.95 KB', color: '#f59e0b', emoji: '🖼️' },
  { id: 19, name: 'popup_xanh.png', type: 'PNG', size: '45.47 KB', color: '#10b981', emoji: '🖼️' },
  { id: 20, name: 'mixkit_magic_festive.mp3', type: 'MP3', size: '127.62 KB', color: '#3b82f6', emoji: '🎵' },
];

const storageUsed = 41.41;
const storageTotal = 30_000; // 30 GB in MB
const imageCount = files.filter(f => ['PNG', 'JPG'].includes(f.type)).length;
const audioCount = files.filter(f => f.type === 'MP3').length;

export default function StoragePage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [activeFilter, setActiveFilter] = useState<'all' | 'recent' | 'starred' | 'cleanup' | 'trash'>('all');
  const [search, setSearch] = useState('');

  const filtered = files.filter(f => !search || f.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div style={{ display: 'flex', gap: 0 }}>
      {/* Sub-sidebar */}
      <div className="page-sub-sidebar" style={{ marginLeft: -20, marginTop: -20, marginBottom: -20 }}>
        <div style={{ padding: '16px 16px 12px' }}>
          <Title level={5} style={{ margin: 0, fontWeight: 700 }}>Storage</Title>
          <Text type="secondary" style={{ fontSize: 11 }}>File & capacity management</Text>
        </div>

        <div style={{ padding: '0 16px 12px' }}>
          <Upload>
            <Button type="primary" block icon={<UploadOutlined />} style={{ borderRadius: 8 }}>
              Upload file
            </Button>
          </Upload>
        </div>
        <div style={{ padding: '0 16px 12px', display: 'flex', gap: 8 }}>
          <Button block style={{ borderRadius: 8, fontSize: 12 }} icon={<FileOutlined />}>File</Button>
          <Button block style={{ borderRadius: 8, fontSize: 12 }} icon={<FolderOutlined />}>Folder</Button>
        </div>

        <div style={{ padding: '12px 16px 4px' }}>
          <Text type="secondary" style={{ fontSize: 11, fontWeight: 600 }}>LIBRARY</Text>
        </div>
        {[
          { key: 'all', icon: <FileOutlined />, label: 'All files' },
          { key: 'recent', icon: <ClockCircleOutlined />, label: 'Recent' },
          { key: 'starred', icon: <StarOutlined />, label: 'Starred' },
        ].map((item) => (
          <div
            key={item.key}
            className={`sub-sidebar-item ${activeFilter === item.key ? 'sub-sidebar-item--active' : ''}`}
            onClick={() => setActiveFilter(item.key as any)}
          >
            {item.icon} {item.label}
          </div>
        ))}

        <div style={{ padding: '16px 16px 4px' }}>
          <Text type="secondary" style={{ fontSize: 11, fontWeight: 600 }}>FOLDERS</Text>
        </div>
        <div className="sub-sidebar-item" style={{ color: '#9ca3af', fontStyle: 'italic', fontSize: 12 }}>
          No folders yet
        </div>

        <div style={{ padding: '16px 16px 4px' }}>
          <Text type="secondary" style={{ fontSize: 11, fontWeight: 600 }}>OTHERS</Text>
        </div>
        {[
          { key: 'cleanup', icon: <DeleteOutlined />, label: 'Cleanup' },
          { key: 'trash', icon: <DeleteOutlined />, label: 'Trash' },
        ].map((item) => (
          <div
            key={item.key}
            className={`sub-sidebar-item ${activeFilter === item.key ? 'sub-sidebar-item--active' : ''}`}
            onClick={() => setActiveFilter(item.key as any)}
          >
            {item.icon} {item.label}
          </div>
        ))}

        {/* Storage Usage */}
        <div style={{ padding: '24px 16px', marginTop: 'auto' }}>
          <div style={{
            background: '#f9fafb',
            borderRadius: 10,
            padding: '14px',
          }}>
            <Text type="secondary" style={{ fontSize: 11 }}>Used</Text>
            <div style={{ fontSize: 14, fontWeight: 700, margin: '2px 0 8px' }}>
              {storageUsed} MB / 30.00 GB
            </div>
            <Progress percent={(storageUsed / storageTotal) * 100} size="small" showInfo={false} strokeColor="#3b82f6" />
            <div style={{ display: 'flex', gap: 12, marginTop: 10 }}>
              <Space size={4}>
                <div style={{ width: 8, height: 8, borderRadius: 2, background: '#3b82f6' }} />
                <Text style={{ fontSize: 10 }}>Images</Text>
              </Space>
              <Space size={4}>
                <div style={{ width: 8, height: 8, borderRadius: 2, background: '#f59e0b' }} />
                <Text style={{ fontSize: 10 }}>Audio</Text>
              </Space>
              <Space size={4}>
                <div style={{ width: 8, height: 8, borderRadius: 2, background: '#10b981' }} />
                <Text style={{ fontSize: 10 }}>Documents</Text>
              </Space>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: '0 0 0 24px' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
          <Space>
            <CloudOutlined style={{ color: '#3b82f6' }} />
            <Text strong>Tất cả file</Text>
          </Space>
          <Space>
            <Input
              placeholder="Tìm theo tên file, nhãn, người tải lên..."
              prefix={<SearchOutlined />}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ width: 320, borderRadius: 8 }}
              allowClear
            />
            <Select defaultValue="folder" style={{ width: 100 }} options={[
              { value: 'folder', label: 'Thư mục' },
              { value: 'type', label: 'Loại' },
            ]} />
            <Button icon={<FilterOutlined />}>Bộ lọc</Button>
            <Button icon={<SortAscendingOutlined />}>Mới nhất trước</Button>
            <Button
              type={viewMode === 'grid' ? 'primary' : 'default'}
              icon={<AppstoreOutlined />}
              onClick={() => setViewMode('grid')}
              size="small"
            />
            <Button
              type={viewMode === 'list' ? 'primary' : 'default'}
              icon={<UnorderedListOutlined />}
              onClick={() => setViewMode('list')}
              size="small"
            />
          </Space>
        </div>

        <div style={{ marginBottom: 12 }}>
          <Space>
            <input type="checkbox" />
            <Text type="secondary" style={{ fontSize: 12 }}>FILE · {filtered.length}</Text>
          </Space>
        </div>

        {/* File Grid */}
        {viewMode === 'grid' ? (
          <Row gutter={[12, 12]}>
            {filtered.map((file) => (
              <Col xs={12} sm={8} md={6} lg={4} xl={3} key={file.id}>
                <Card
                  variant="outlined"
                  style={{
                    borderRadius: 10,
                    borderColor: '#e5e7eb',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                  styles={{ body: { padding: 0 } }}
                  hoverable
                >
                  <div style={{
                    height: 100,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: '#f9fafb',
                    borderRadius: '10px 10px 0 0',
                    position: 'relative',
                    fontSize: 36,
                  }}>
                    {file.emoji}
                    <div style={{
                      position: 'absolute',
                      bottom: 6,
                      right: 6,
                      background: file.color,
                      color: '#fff',
                      padding: '2px 8px',
                      borderRadius: 4,
                      fontSize: 9,
                      fontWeight: 700,
                    }}>
                      {file.type}
                    </div>
                  </div>
                  <div style={{ padding: '8px 10px' }}>
                    <Tooltip title={file.name}>
                      <Text style={{ fontSize: 11, fontWeight: 500, display: 'block', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        {file.name}
                      </Text>
                    </Tooltip>
                    <Text type="secondary" style={{ fontSize: 10 }}>{file.size}</Text>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        ) : (
          <Card variant="outlined" style={{ borderRadius: 10, borderColor: '#e5e7eb' }} styles={{ body: { padding: 0 } }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                  <th style={{ textAlign: 'left', padding: '10px 16px', fontSize: 12, color: '#6b7280', fontWeight: 600 }}>Tên file</th>
                  <th style={{ textAlign: 'left', padding: '10px 16px', fontSize: 12, color: '#6b7280', fontWeight: 600 }}>Loại</th>
                  <th style={{ textAlign: 'left', padding: '10px 16px', fontSize: 12, color: '#6b7280', fontWeight: 600 }}>Dung lượng</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((file) => (
                  <tr key={file.id} style={{ borderBottom: '1px solid #f3f4f6', cursor: 'pointer' }}>
                    <td style={{ padding: '8px 16px' }}>
                      <Space>
                        <span style={{ fontSize: 18 }}>{file.emoji}</span>
                        <Text style={{ fontSize: 13 }}>{file.name}</Text>
                      </Space>
                    </td>
                    <td style={{ padding: '8px 16px' }}>
                      <Tag color={file.color} style={{ borderRadius: 4 }}>{file.type}</Tag>
                    </td>
                    <td style={{ padding: '8px 16px' }}>
                      <Text type="secondary" style={{ fontSize: 12 }}>{file.size}</Text>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        )}

        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 12 }}>
          <Text type="secondary" style={{ fontSize: 12 }}>Trang 1/1 · {filtered.length} mục</Text>
        </div>
      </div>
    </div>
  );
}
