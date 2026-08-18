import React, { useState } from 'react';
import { NodeIndexOutlined, MessageOutlined, CalendarOutlined, UnorderedListOutlined } from '@ant-design/icons';
import JourneysPage from './JourneysPage';
import MessagesPage from './MessagesPage';
import SchedulesPage from './SchedulesPage';
import ConditionDictionaryPage from './ConditionDictionaryPage';

export default function AutomationPage() {
  const [activeTab, setActiveTab] = useState<'journeys' | 'messages' | 'schedules'>('journeys');

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
        <div
          className={`sub-sidebar-item ${activeTab === 'schedules' ? 'sub-sidebar-item--active' : ''}`}
          onClick={() => setActiveTab('schedules')}
        >
          <CalendarOutlined /> Schedules
        </div>
        <div
          className={`sub-sidebar-item ${activeTab === 'conditions' ? 'sub-sidebar-item--active' : ''}`}
          onClick={() => setActiveTab('conditions')}
        >
          <UnorderedListOutlined /> Conditions
        </div>
      </div>

      <div style={{ flex: 1, padding: '0 0 0 24px' }}>
        {activeTab === 'journeys' && <JourneysPage />}
        {activeTab === 'messages' && <MessagesPage />}
        {activeTab === 'schedules' && <SchedulesPage />}
        {activeTab === 'conditions' && <ConditionDictionaryPage />}
      </div>
    </div>
  );
}
