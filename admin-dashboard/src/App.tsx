import React, { useState } from 'react';
import { Layout, Menu, Typography, theme, ConfigProvider, Button, Avatar, Space, Badge, Dropdown, Tooltip } from 'antd';
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
} from '@ant-design/icons';
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';

import DashboardPage from './pages/DashboardPage';
import Customer360Page from './pages/Customer360Page';
import CustomerDetail360Page from './pages/CustomerDetail360Page';
import CustomersPage from './pages/CustomersPage';
import SegmentsPage from './pages/SegmentsPage';
import AutomationPage from './pages/AutomationPage';
import LoyaltyPage from './pages/LoyaltyPage';
import DataHubPage from './pages/DataHubPage';
import IntegrationDataPage from './pages/IntegrationDataPage';
import GamificationPage from './pages/GamificationPage';
import DataHubDetailPage from './pages/DataHubDetailPage';
import DynamicActionPage from './pages/DynamicActionPage';
import DynamicActionDetailPage from './pages/DynamicActionDetailPage';
import StoragePage from './pages/StoragePage';
import ZaloOAPage from './pages/ZaloOAPage';
import ZaloMiniAppPage from './pages/ZaloMiniAppPage';

const { Header, Sider, Content } = Layout;
const { Text } = Typography;

const menuItems = [
  { key: '/', icon: <DashboardOutlined />, label: 'Dashboard' },
  { key: '/automation', icon: <RobotOutlined />, label: 'Automation' },
  { key: '/customer360', icon: <UserOutlined />, label: 'Customer 360' },
  { key: '/data-hub', icon: <DatabaseOutlined />, label: 'Data Hub' },
  { key: '/dynamic-action', icon: <ThunderboltOutlined />, label: 'Dynamic Action' },
  { key: '/segments', icon: <TeamOutlined />, label: 'Segment' },
  { key: '/integration', icon: <ApiOutlined />, label: 'Integration Data' },
  { key: '/zalo-mini-app', icon: <AppstoreOutlined />, label: 'Zalo Mini App' },
  { key: '/zalo-oa', icon: <MessageOutlined />, label: 'Zalo OA' },
  { key: '/gamification', icon: <TrophyOutlined />, label: 'Gamification' },
  { key: '/storage', icon: <CloudOutlined />, label: 'Storage' },
  { key: '/loyalty', icon: <GiftOutlined />, label: 'Loyalty' },
  { key: '/settings', icon: <SettingOutlined />, label: 'Cài đặt' },
];

function AppLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const getSelectedKeys = () => {
    const path = location.pathname;
    if (path.startsWith('/automation')) return ['/automation'];
    return [path];
  };

  const getOpenKeys = () => {
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
            {/* Credit/Token Counters (CNV CDP style) */}
            <div style={{
              display: 'flex',
              border: '1px solid #e5e7eb',
              borderRadius: 8,
              overflow: 'hidden',
              marginRight: 8,
            }}>
              <Tooltip title="Số Credit còn lại">
                <div style={{
                  padding: '4px 14px',
                  borderRight: '1px solid #e5e7eb',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  lineHeight: 1.2,
                }}>
                  <span style={{ fontSize: 9, color: '#6b7280', fontWeight: 500 }}>Credits</span>
                  <span style={{ fontSize: 13, color: '#1f2937', fontWeight: 700 }}>5g</span>
                </div>
              </Tooltip>
              <Tooltip title="Số Token còn lại">
                <div style={{
                  padding: '4px 14px',
                  borderRight: '1px solid #e5e7eb',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  lineHeight: 1.2,
                }}>
                  <span style={{ fontSize: 9, color: '#6b7280', fontWeight: 500 }}>Tokens</span>
                  <span style={{ fontSize: 13, color: '#1f2937', fontWeight: 700 }}>20.4M</span>
                </div>
              </Tooltip>
              <Tooltip title="AI Credit còn lại">
                <div style={{
                  padding: '4px 14px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  lineHeight: 1.2,
                }}>
                  <span style={{ fontSize: 9, color: '#6b7280', fontWeight: 500 }}>AI</span>
                  <span style={{ fontSize: 13, color: '#1f2937', fontWeight: 700 }}>50</span>
                </div>
              </Tooltip>
            </div>

            <Tooltip title="Help">
              <Button type="text" icon={<QuestionCircleOutlined />} style={{ color: '#6b7280' }} />
            </Tooltip>
            <Badge count={3} size="small" offset={[-4, 4]}>
              <Button type="text" icon={<BellOutlined />} style={{ color: '#6b7280' }} />
            </Badge>

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
            <Route path="/data-hub" element={<DataHubPage />} />
            <Route path="/data-hub/:id" element={<DataHubDetailPage />} />
            <Route path="/integration" element={<IntegrationDataPage />} />
            <Route path="/zalo-mini-app" element={<ZaloMiniAppPage />} />
            <Route path="/zalo-oa" element={<ZaloOAPage />} />
            <Route path="/gamification" element={<GamificationPage />} />
            <Route path="/dynamic-action" element={<DynamicActionPage />} />
            <Route path="/dynamic-action/:id" element={<DynamicActionDetailPage />} />
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
