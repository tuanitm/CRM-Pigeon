import React, { useState } from 'react';
import { NodeIndexOutlined, MessageOutlined } from '@ant-design/icons';
import JourneysPage from './JourneysPage';
import MessagesPage from './MessagesPage';

export default function AutomationPage() {
  const [activeTab, setActiveTab] = useState<'journeys' | 'messages'>('journeys');

  return (
    <div style={{ display: 'flex', gap: 0 }}>
      {/* Sub-sidebar */}
      <div className="page-sub-sidebar" style={{ marginLeft: -20, marginTop: -20, marginBottom: -20 }}>
        <div
          className={`sub-sidebar-item ${activeTab === 'journeys' ? 'sub-sidebar-item--active' : ''}`}
          onClick={() => setActiveTab('journeys')}
        >
          <NodeIndexOutlined /> Journeys
        </div>
        <div
          className={`sub-sidebar-item ${activeTab === 'messages' ? 'sub-sidebar-item--active' : ''}`}
          onClick={() => setActiveTab('messages')}
        >
          <MessageOutlined /> Messages
        </div>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: '0 0 0 24px' }}>
        {activeTab === 'journeys' ? <JourneysPage /> : <MessagesPage />}
      </div>
    </div>
  );
}
