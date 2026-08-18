import React, { useState, useEffect, useCallback } from 'react';
import { Layout, Menu, Typography, theme, ConfigProvider, Button, Avatar, Space, Badge, Dropdown, Tooltip, Popover, List, Empty, Tag, Divider } from 'antd';
import {
  DashboardOutlined,
  UserOutlined,
  RobotOutlined,
  DatabaseOutlined,
  TeamOutlined,
  ApiOutlined,
  AppstoreOutlined,
  ThunderboltOutlined,
  CloudOutlined,
  SettingOutlined,
  GiftOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  BellOutlined,
  CrownOutlined,
  NodeIndexOutlined,
  MailOutlined,
  TrophyOutlined,
  QuestionCircleOutlined,
  MessageOutlined,
  CheckOutlined,
  ShoppingCartOutlined,
  CustomerServiceOutlined,
  UserAddOutlined,
  ThunderboltOutlined as JourneyIcon,
} from '@ant-design/icons';
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';

import DashboardPage from './pages/DashboardPage';
import Customer360Page from './pages/Customer360Page';
import CustomerDetail360Page from './pages/CustomerDetail360Page';
import CustomersPage from './pages/CustomersPage';
import SegmentsPage from './pages/SegmentsPage';
import AutomationPage from './pages/AutomationPage';
import LoyaltyPage from './pages/LoyaltyPage';
import IntegrationDataPage from './pages/IntegrationDataPage';
import GamificationPage from './pages/GamificationPage';
import DynamicActionPage from './pages/DynamicActionPage';
import StoragePage from './pages/StoragePage';
import ZaloOAPage from './pages/ZaloOAPage';
import ZaloMiniAppPage from './pages/ZaloMiniAppPage';
import { notificationApi } from './services/api';

const { Header, Sider, Content } = Layout;
const { Text } = Typography;

const menuItems = [
  { key: '/', icon: <DashboardOutlined />, label: 'Dashboard' },
  {
    key: 'grp_audience',
    icon: <TeamOutlined />,
    label: 'Audience',
    children: [
      { key: '/customer360', label: 'Customer 360' },
      { key: '/segments', label: 'Segments' },
    ],
  },
  {
    key: 'grp_engagement',
    icon: <RobotOutlined />,
    label: 'Engagement',
    children: [
      { key: '/automation', label: 'Automation Journeys' },
      { key: '/dynamic-action', label: 'Dynamic Actions' },
    ],
  },
  {
    key: 'grp_loyalty',
    icon: <GiftOutlined />,
    label: 'Loyalty & Rewards',
    children: [
      { key: '/loyalty', label: 'Loyalty Program' },
      { key: '/gamification', label: 'Gamification' },
    ],
  },
  {
    key: 'grp_channels',
    icon: <MessageOutlined />,
    label: 'Channels',
    children: [
      { key: '/zalo-oa', label: 'Zalo OA' },
      { key: '/zalo-mini-app', label: 'Zalo Mini App' },
    ],
  },
  {
    key: 'grp_settings',
    icon: <SettingOutlined />,
    label: 'Settings',
    children: [
      { key: '/integration', label: 'Integrations' },
      { key: '/storage', label: 'Storage' },
    ],
  },
];

function AppLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const [notifications, setNotifications] = useState<any[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  const fetchNotifications = useCallback(async () => {
    try {
      const res = await notificationApi.list(30);
      setNotifications(res.items);
      setUnreadCount(res.unreadCount);
    } catch { /* API not ready yet */ }
  }, []);

  useEffect(() => {
    fetchNotifications();
    const interval = setInterval(fetchNotifications, 30_000);
    return () => clearInterval(interval);
  }, [fetchNotifications]);

  const handleMarkAllRead = async () => {
    await notificationApi.markAllRead();
    fetchNotifications();
  };

  const handleNotifClick = async (item: any) => {
    if (!item.isRead) {
      await notificationApi.markRead(item.id);
    }
    setNotifOpen(false);
    if (item.link) navigate(item.link);
    fetchNotifications();
  };

  const categoryConfig: Record<string, { icon: React.ReactNode; color: string }> = {
    CUSTOMER: { icon: <UserAddOutlined />, color: '#3b82f6' },
    TICKET:   { icon: <CustomerServiceOutlined />, color: '#f59e0b' },
    ORDER:    { icon: <ShoppingCartOutlined />, color: '#10b981' },
    JOURNEY:  { icon: <JourneyIcon />, color: '#8b5cf6' },
    SYSTEM:   { icon: <SettingOutlined />, color: '#6b7280' },
  };

  const getSelectedKeys = () => {
    const path = location.pathname;
    if (path.startsWith('/automation')) return ['/automation'];
    if (path.startsWith('/data-hub')) return ['/data-hub'];
    if (path.startsWith('/dynamic-action')) return ['/dynamic-action'];
    if (path.startsWith('/customer360')) return ['/customer360'];
    return [path];
  };

  const getOpenKeys = () => {
    const path = location.pathname;
    if (path.startsWith('/customer360') || path.startsWith('/segments')) return ['grp_audience'];
    if (path.startsWith('/automation') || path.startsWith('/dynamic-action')) return ['grp_engagement'];
    if (path.startsWith('/loyalty') || path.startsWith('/gamification')) return ['grp_loyalty'];
    if (path.startsWith('/zalo')) return ['grp_channels'];
    if (path.startsWith('/data-hub')) return ['grp_data'];
    if (path.startsWith('/integration') || path.startsWith('/storage') || path.startsWith('/settings')) return ['grp_settings'];
    return [];
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        width={240}
        collapsedWidth={72}
        style={{
          background: 'linear-gradient(180deg, #1a1f36 0%, #0f1324 100%)',
          boxShadow: '2px 0 12px rgba(0,0,0,0.2)',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
          zIndex: 100,
          overflow: 'auto',
        }}
      >
        {/* Logo Area */}
        <div style={{
          height: 56,
          display: 'flex',
          alignItems: 'center',
          justifyContent: collapsed ? 'center' : 'flex-start',
          padding: collapsed ? '0 16px' : '0 20px',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          gap: 10,
          flexShrink: 0,
        }}>
          <div style={{
            width: 32,
            height: 32,
            borderRadius: 8,
            background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}>
            <span style={{ fontSize: 16, color: '#fff', fontWeight: 800 }}>P</span>
          </div>
          {!collapsed && (
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.2, overflow: 'hidden' }}>
              <span style={{
                color: '#ffffff',
                fontSize: 15,
                fontWeight: 700,
                letterSpacing: '0.5px',
                whiteSpace: 'nowrap',
              }}>
                PIGEON
              </span>
              <span style={{
                color: 'rgba(255,255,255,0.4)',
                fontSize: 10,
                fontWeight: 500,
                letterSpacing: '1.5px',
                whiteSpace: 'nowrap',
              }}>
                CRM PLATFORM
              </span>
            </div>
          )}
        </div>

        {/* Store Selector */}
        {!collapsed && (
          <div style={{
            padding: '12px 16px',
            borderBottom: '1px solid rgba(255,255,255,0.06)',
          }}>
            <div style={{
              background: 'rgba(255,255,255,0.06)',
              borderRadius: 8,
              padding: '8px 12px',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              cursor: 'pointer',
            }}>
              <CrownOutlined style={{ color: '#f59e0b', fontSize: 14 }} />
              <span style={{ color: '#fff', fontSize: 12, fontWeight: 500, flex: 1 }}>Pigeon Vietnam</span>
              <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: 10 }}>Enterprise</span>
            </div>
          </div>
        )}

        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={getSelectedKeys()}
          defaultOpenKeys={getOpenKeys()}
          items={menuItems}
          onClick={({ key }) => navigate(key)}
          style={{ background: 'transparent', borderRight: 0, marginTop: 4, padding: '0 4px' }}
        />
      </Sider>

      <Layout style={{ marginLeft: collapsed ? 72 : 240, transition: 'margin-left 0.2s ease' }}>
        {/* Header */}
        <Header style={{
          padding: '0 24px',
          background: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
          zIndex: 10,
          height: 56,
          lineHeight: '56px',
          position: 'sticky',
          top: 0,
        }}>
          <Space size={16}>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{ fontSize: 16, width: 36, height: 36 }}
            />
          </Space>

          <Space size={4}>
            <Tooltip title="Help">
              <Button type="text" icon={<QuestionCircleOutlined />} style={{ color: '#6b7280' }} />
            </Tooltip>
            <Popover
              open={notifOpen}
              onOpenChange={setNotifOpen}
              trigger="click"
              placement="bottomRight"
              arrow={false}
              overlayInnerStyle={{ padding: 0, borderRadius: 12, overflow: 'hidden', width: 380 }}
              content={
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 16px 10px' }}>
                    <span style={{ fontWeight: 700, fontSize: 15 }}>Notifications</span>
                    {unreadCount > 0 && (
                      <Button type="link" size="small" icon={<CheckOutlined />} onClick={handleMarkAllRead}>
                        Mark all read
                      </Button>
                    )}
                  </div>
                  <Divider style={{ margin: 0 }} />
                  {notifications.length === 0 ? (
                    <Empty description="No notifications yet" style={{ padding: '32px 0' }} />
                  ) : (
                    <div style={{ maxHeight: 420, overflowY: 'auto' }}>
                      {notifications.map((n) => {
                        const cfg = categoryConfig[n.category] || categoryConfig.SYSTEM;
                        return (
                          <div
                            key={n.id}
                            onClick={() => handleNotifClick(n)}
                            style={{
                              display: 'flex', gap: 10, padding: '10px 16px',
                              cursor: n.link ? 'pointer' : 'default',
                              background: n.isRead ? 'transparent' : '#f0f5ff',
                              borderBottom: '1px solid #f3f4f6',
                              transition: 'background 0.15s',
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.background = '#f9fafb')}
                            onMouseLeave={(e) => (e.currentTarget.style.background = n.isRead ? 'transparent' : '#f0f5ff')}
                          >
                            <div style={{
                              width: 32, height: 32, borderRadius: 8,
                              background: `${cfg.color}15`, color: cfg.color,
                              display: 'flex', alignItems: 'center', justifyContent: 'center',
                              fontSize: 15, flexShrink: 0, marginTop: 2,
                            }}>
                              {cfg.icon}
                            </div>
                            <div style={{ flex: 1, minWidth: 0 }}>
                              <div style={{ fontSize: 13, fontWeight: n.isRead ? 400 : 600, color: '#1f2937', lineHeight: 1.3 }}>
                                {n.title}
                              </div>
                              {n.body && (
                                <div style={{ fontSize: 11, color: '#6b7280', marginTop: 2, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                  {n.body}
                                </div>
                              )}
                              <div style={{ fontSize: 10, color: '#9ca3af', marginTop: 3 }}>
                                {new Date(n.createdAt).toLocaleString('vi-VN', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' })}
                              </div>
                            </div>
                            {!n.isRead && (
                              <div style={{ width: 8, height: 8, borderRadius: 4, background: '#3b82f6', marginTop: 6, flexShrink: 0 }} />
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              }
            >
              <Badge count={unreadCount} size="small" offset={[-4, 4]}>
                <Button type="text" icon={<BellOutlined />} style={{ color: '#6b7280' }} />
              </Badge>
            </Popover>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              marginLeft: 8,
              padding: '4px 8px',
              borderRadius: 8,
              cursor: 'pointer',
              transition: 'background 0.15s',
            }}>
              <div style={{ textAlign: 'right', lineHeight: 1.2 }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: '#1f2937' }}>Admin</div>
                <div style={{ fontSize: 10, color: '#6b7280' }}>Pigeon VN</div>
              </div>
              <Avatar
                size={34}
                style={{
                  background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                  fontWeight: 700,
                  fontSize: 14,
                }}
              >
                AD
              </Avatar>
            </div>
          </Space>
        </Header>

        <Content style={{ margin: 20, minHeight: 280 }}>
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/customer360" element={<Customer360Page />} />
            <Route path="/customer360/:id" element={<CustomerDetail360Page />} />
            <Route path="/segments" element={<SegmentsPage />} />
            <Route path="/automation" element={<AutomationPage />} />
            <Route path="/loyalty" element={<LoyaltyPage />} />
            <Route path="/integration" element={<IntegrationDataPage />} />
            <Route path="/zalo-mini-app" element={<ZaloMiniAppPage />} />
            <Route path="/zalo-oa" element={<ZaloOAPage />} />
            <Route path="/gamification" element={<GamificationPage />} />
            <Route path="/dynamic-action" element={<DynamicActionPage />} />
            <Route path="/storage" element={<StoragePage />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
}

const pigeonTheme = {
  token: {
    colorPrimary: '#3b82f6',
    colorSuccess: '#10b981',
    colorWarning: '#f59e0b',
    colorError: '#ef4444',
    borderRadius: 8,
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    colorBgLayout: '#f0f2f5',
  },
  components: {
    Layout: { headerBg: '#ffffff', siderBg: '#1a1f36' },
    Menu: { darkItemBg: 'transparent', darkSubMenuItemBg: 'transparent' },
    Card: { borderRadiusLG: 10 },
  },
};

export default function App() {
  return (
    <ConfigProvider theme={pigeonTheme}>
      <BrowserRouter>
        <AppLayout />
      </BrowserRouter>
    </ConfigProvider>
  );
}
