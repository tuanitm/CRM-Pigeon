import React, { useState, useEffect } from 'react';
import {
  Card, Typography, Table, Tag, Space, Row, Col, Statistic, Descriptions,
  Divider, Button, Modal, Form, Input, InputNumber, Switch, Select,
  Tabs, Tooltip, Popconfirm, message, Badge, Empty, Avatar,
} from 'antd';
import {
  GiftOutlined, TrophyOutlined, StarOutlined, CrownOutlined,
  FireOutlined, PlusOutlined, EditOutlined, DeleteOutlined,
  HistoryOutlined, ShoppingOutlined, ReloadOutlined, UndoOutlined, SettingOutlined
} from '@ant-design/icons';
import { loyaltyApi, customerApi, journeyApi } from '../services/api';
import { initialJourneysData } from './JourneysPage';

const { Title, Text } = Typography;

const TIER_COLORS: Record<string, string> = {
  BRONZE: '#8c8c8c', SILVER: '#c0c0c0', GOLD: '#FFD700',
  PLATINUM: '#e5e4e2', DIAMOND: '#b9f2ff', VIP: '#ff4d4f',
};

export default function LoyaltyPage() {
  const [tiers, setTiers] = useState<any[]>([]);
  const [earnRules, setEarnRules] = useState<any[]>([]);
  const [rewards, setRewards] = useState<any[]>([]);
  const [stats, setStats] = useState<any>({});
  const [transactions, setTransactions] = useState<any[]>([]);
  const [redemptions, setRedemptions] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [trackingModal, setTrackingModal] = useState(false);
  const [trackingItem, setTrackingItem] = useState<any>(null);
  const [trackingForm] = Form.useForm();

  const handleStatusUpdate = async (item: any, newStatus: string, trackingData?: { shipmentNo?: string; trackingLink?: string }) => {
    try {
      const payload = { status: newStatus, ...trackingData };
      if (item.type === 'order') {
        await customerApi.updateOrderStatus(item.customerId, item.id, payload);
      } else {
        await customerApi.updateRewardStatus(item.customerId, item.id, payload);
      }
      message.success(`Item marked as ${newStatus}`);
      loadAll();
    } catch (e: any) {
      message.error(`Failed to mark as ${newStatus}`);
    }
  };

  const handleBatchStatusUpdate = async (newStatus: string) => {
    if (selectedRowKeys.length === 0) return;
    try {
      const itemsToUpdate = redemptions.filter((r: any) => selectedRowKeys.includes(r.id));
      await Promise.all(itemsToUpdate.map((item: any) => {
        if (item.type === 'order') {
          return customerApi.updateOrderStatus(item.customerId, item.id, { status: newStatus });
        }
        return customerApi.updateRewardStatus(item.customerId, item.id, { status: newStatus });
      }));
      message.success(`Batch updated ${itemsToUpdate.length} items to ${newStatus} successfully`);
      setSelectedRowKeys([]);
      loadAll();
    } catch (e: any) {
      message.error(e.message || 'Failed to update some items');
    }
  };

  // Modal states
  const [tierModal, setTierModal] = useState(false);
  const [editingTier, setEditingTier] = useState<any>(null);
  const [ruleModal, setRuleModal] = useState(false);
  const [editingRule, setEditingRule] = useState<any>(null);
  const [rewardModal, setRewardModal] = useState(false);
  const [editingReward, setEditingReward] = useState<any>(null);

  const [tierForm] = Form.useForm();
  const [ruleForm] = Form.useForm();
  const [rewardForm] = Form.useForm();

  const loadAll = async () => {
    try {
      const [t, r, rw, s, tx, rd, journeys] = await Promise.all([
        loyaltyApi.listTiers(),
        loyaltyApi.listEarnRules(),
        loyaltyApi.listRewards(),
        loyaltyApi.getStats(),
        loyaltyApi.listTransactions(30),
        loyaltyApi.listRedemptions(30),
        journeyApi.list().catch(() => []),
      ]);
      
      const mappedJourneys = (journeys || []).filter((j: any) => j.graph && j.graph.nodes).map((j: any) => {
        let storedRewards: any[] = [];
        Object.values(j.graph.nodes).forEach((n: any) => {
          if (n.type === 'action_reward' && n.config?.rewards) {
            storedRewards = n.config.rewards;
          }
        });
        // Use friendly name: prefer localStorage journey name, then initialJourneysData, then clean up code
        const savedJourneys = JSON.parse(localStorage.getItem('demo_journeys') || '[]');
        const localJourney = savedJourneys.find((lj: any) => lj.code === j.code);
        const knownJourney = initialJourneysData.find(ij => ij.code === j.code);
        const friendlyName = localJourney?.name || knownJourney?.name 
          || (j.name?.startsWith('JRN_') ? j.name.replace(/^JRN_/, '').replace(/_/g, ' ').replace(/\b\w/g, (c: string) => c.toUpperCase()) : j.name);
        return {
          id: `jrn_${j.id}`,
          source: 'journey',
          ruleName: friendlyName,
          pointsFormula: storedRewards,
          tierMultiplierApplies: false,
          isActive: j.status === 'active',
          isJourney: true,
        };
      });

      setTiers(t); setEarnRules([...r, ...mappedJourneys]); setRewards(rw);
      setStats(s); setTransactions(tx); setRedemptions(rd);
    } catch (err) { console.error(err); }
  };

  useEffect(() => { loadAll(); }, []);

  // ─── Tier CRUD ────────────────────────────────────────
  const openTierModal = (tier?: any) => {
    setEditingTier(tier || null);
    if (tier) {
      tierForm.setFieldsValue({
        tierCode: tier.tierCode, tierName: tier.tierName, tierOrder: tier.tierOrder,
        minNetSpend: Number(tier.minNetSpend), minDistinctMonths: tier.minDistinctMonths,
        pointsMultiplier: Number(tier.pointsMultiplier), isDefault: tier.isDefault,
      });
    } else { tierForm.resetFields(); }
    setTierModal(true);
  };

  const saveTier = async (v: any) => {
    try {
      if (editingTier) { await loyaltyApi.updateTier(editingTier.id, v); message.success('Tier updated'); }
      else { await loyaltyApi.createTier(v); message.success('Tier created'); }
      setTierModal(false); tierForm.resetFields(); loadAll();
    } catch { message.error('Failed to save tier'); }
  };

  const deleteTier = async (id: string) => {
    try { await loyaltyApi.deleteTier(id); message.success('Tier deleted'); loadAll(); }
    catch (err: any) {
      let m = 'Failed to delete';
      try { m = JSON.parse(err.message?.split(': ').slice(1).join(': ')).message || m; } catch {}
      message.error(m);
    }
  };

  // ─── Earn Rule CRUD ───────────────────────────────────
  const openRuleModal = (rule?: any) => {
    setEditingRule(rule || null);
    if (rule) {
      ruleForm.setFieldsValue({
        source: rule.source, ruleName: rule.ruleName,
        pointsFormulaStr: JSON.stringify(rule.pointsFormula),
        tierMultiplierApplies: rule.tierMultiplierApplies, isActive: rule.isActive,
      });
    } else { ruleForm.resetFields(); }
    setRuleModal(true);
  };

  const saveRule = async (v: any) => {
    try {
      const data = { ...v, pointsFormula: JSON.parse(v.pointsFormulaStr || '{}') };
      delete data.pointsFormulaStr;
      if (editingRule) { await loyaltyApi.updateEarnRule(editingRule.id, data); message.success('Rule updated'); }
      else { await loyaltyApi.createEarnRule(data); message.success('Rule created'); }
      setRuleModal(false); ruleForm.resetFields(); loadAll();
    } catch { message.error('Failed to save rule'); }
  };

  const deleteRule = async (id: string) => {
    try { await loyaltyApi.deleteEarnRule(id); message.success('Rule deleted'); loadAll(); }
    catch { message.error('Failed to delete'); }
  };

  // ─── Reward CRUD ──────────────────────────────────────
  const openRewardModal = (reward?: any) => {
    setEditingReward(reward || null);
    if (reward) {
      rewardForm.setFieldsValue({
        code: reward.code, name: reward.name, description: reward.description,
        category: reward.category, pointsCost: reward.pointsCost,
        stock: reward.stock, isActive: reward.isActive, imageUrl: reward.imageUrl,
      });
    } else { rewardForm.resetFields(); }
    setRewardModal(true);
  };

  const saveReward = async (v: any) => {
    try {
      if (editingReward) { await loyaltyApi.updateReward(editingReward.id, v); message.success('Reward updated'); }
      else { await loyaltyApi.createReward(v); message.success('Reward created'); }
      setRewardModal(false); rewardForm.resetFields(); loadAll();
    } catch { message.error('Failed to save reward'); }
  };

  const deleteReward = async (id: string) => {
    try { await loyaltyApi.deleteReward(id); message.success('Reward deleted'); loadAll(); }
    catch (err: any) {
      let m = 'Failed to delete';
      try { m = JSON.parse(err.message?.split(': ').slice(1).join(': ')).message || m; } catch {}
      message.error(m);
    }
  };

  // ─── Table columns ────────────────────────────────────
  const earnRuleCols = [
    { title: 'Source', dataIndex: 'source', key: 'source', render: (t: string) => <Tag>{t}</Tag> },
    { title: 'Rule Name', dataIndex: 'ruleName', key: 'ruleName', render: (t: string) => <Text strong>{t}</Text> },
    { title: 'Formula', dataIndex: 'pointsFormula', key: 'pf', render: (f: any) => <Text type="secondary" style={{ fontSize: 11 }}>{JSON.stringify(f)}</Text> },
    { title: 'Tier ×', dataIndex: 'tierMultiplierApplies', key: 'tm', width: 70, render: (v: boolean) => v ? <Tag color="blue">Yes</Tag> : <Tag>No</Tag> },
    { title: 'Active', dataIndex: 'isActive', key: 'act', width: 80, render: (v: boolean) => <Tag color={v ? 'success' : 'default'}>{v ? 'Active' : 'Off'}</Tag> },
    {
      title: '', key: 'actions', width: 80,
      render: (_: any, r: any) => (
        <Space>
          {!r.isJourney && (
            <>
              <Tooltip title="Edit"><Button type="text" size="small" icon={<EditOutlined />} onClick={() => openRuleModal(r)} /></Tooltip>
              <Popconfirm title="Delete?" onConfirm={() => deleteRule(r.id)} okType="danger" okText="Delete">
                <Button type="text" size="small" danger icon={<DeleteOutlined />} />
              </Popconfirm>
            </>
          )}
          {r.isJourney && (
            <Tooltip title="Managed via Journeys Tab"><Button type="text" size="small" icon={<SettingOutlined />} disabled /></Tooltip>
          )}
        </Space>
      ),
    },
  ];

  const rewardCols = [
    { title: 'Code', dataIndex: 'code', key: 'code', render: (c: string) => <Tag>{c}</Tag> },
    { title: 'Image', key: 'img', width: 60, render: (_: any, r: any) => r.imageUrl ? <img src={r.imageUrl} alt="reward" style={{ width: 32, height: 32, objectFit: 'cover', borderRadius: 4 }} /> : <Avatar icon={<GiftOutlined />} size={32} /> },
    { title: 'Reward', dataIndex: 'name', key: 'name', render: (t: string) => <Text strong>{t}</Text> },
    { title: 'Category', dataIndex: 'category', key: 'cat', render: (c: string) => c ? <Tag color="blue">{c}</Tag> : '—' },
    { title: 'Cost', dataIndex: 'pointsCost', key: 'pts', render: (p: number) => <Tag color="gold">{p?.toLocaleString()} pts</Tag> },
    { title: 'Stock', dataIndex: 'stock', key: 'stock', render: (s: number | null) => s !== null && s !== undefined ? s : '∞' },
    { title: 'Redeemed', key: 'rd', render: (_: any, r: any) => <Badge count={r._count?.reward_redemption || 0} style={{ background: '#6b7280' }} /> },
    { title: 'Active', dataIndex: 'isActive', key: 'act', width: 80, render: (v: boolean) => <Tag color={v ? 'success' : 'default'}>{v ? 'Active' : 'Off'}</Tag> },
    {
      title: '', key: 'actions', width: 80,
      render: (_: any, r: any) => (
        <Space>
          <Tooltip title="Edit"><Button type="text" size="small" icon={<EditOutlined />} onClick={() => openRewardModal(r)} /></Tooltip>
          <Popconfirm title="Delete?" onConfirm={() => deleteReward(r.id)} okType="danger" okText="Delete">
            <Button type="text" size="small" danger icon={<DeleteOutlined />} />
          </Popconfirm>
        </Space>
      ),
    },
  ];

  const txCols = [
    { title: 'Customer', key: 'cust', render: (_: any, r: any) => <Text>{r.customer?.fullName || r.customerId?.slice(0, 8)}</Text> },
    { title: 'Type', dataIndex: 'type', key: 'type', render: (t: string) => <Tag color={t === 'earn' ? 'green' : t === 'redeem' ? 'orange' : 'default'}>{t}</Tag> },
    { title: 'Source', dataIndex: 'source', key: 'source', render: (s: string) => <Tag>{s}</Tag> },
    { title: 'Points', dataIndex: 'points', key: 'pts', render: (p: number) => <Text strong style={{ color: p > 0 ? '#22c55e' : '#ef4444' }}>{p > 0 ? '+' : ''}{p?.toLocaleString()}</Text> },
    { title: 'Balance After', dataIndex: 'balanceAfter', key: 'ba', render: (b: number) => b?.toLocaleString() },
    { title: 'Date', dataIndex: 'createdAt', key: 'date', render: (d: string) => <Text type="secondary" style={{ fontSize: 11 }}>{d ? new Date(d).toLocaleString('vi-VN') : '—'}</Text> },
  ];

  const rdCols = [
    { title: 'Customer', key: 'cust', render: (_: any, r: any) => <Text>{r.customer?.fullName || '—'}</Text> },
    { title: 'Reward', key: 'reward', render: (_: any, r: any) => <Text strong>{r.reward_catalog?.name || '—'}</Text> },
    { title: 'Points', dataIndex: 'pointsSpent', key: 'pts', render: (p: number) => <Tag color="gold">{p?.toLocaleString()} pts</Tag> },
    { title: 'Status', dataIndex: 'status', key: 'st', render: (s: string) => <Tag color={s === 'fulfilled' ? 'success' : s === 'pending' ? 'processing' : 'default'}>{s === 'pending' ? 'claimed' : s}</Tag> },
    { title: 'Date', dataIndex: 'createdAt', key: 'date', render: (d: string) => <Text type="secondary" style={{ fontSize: 11 }}>{d ? new Date(d).toLocaleString('vi-VN') : '—'}</Text> },
  ];

  return (
    <div style={{ maxWidth: 1200, margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <div>
          <Title level={3} style={{ margin: 0 }}>Loyalty Program</Title>
          <Text type="secondary">Manage tiers, earning rules, reward catalog, and track activity</Text>
        </div>
        <Button icon={<ReloadOutlined />} onClick={loadAll}>Refresh</Button>
      </div>

      {/* Stats Cards */}
      <Row gutter={16} style={{ marginBottom: 24 }}>
        <Col span={6}>
          <Card variant="outlined" style={{ borderRadius: 12, borderColor: '#e5e7eb' }}>
            <Statistic title={<Text type="secondary" style={{ fontSize: 12 }}>Total Accounts</Text>}
              value={stats.totalAccounts || 0} prefix={<StarOutlined style={{ color: '#3b82f6' }} />}
              valueStyle={{ color: '#3b82f6', fontWeight: 700 }} />
          </Card>
        </Col>
        <Col span={6}>
          <Card variant="outlined" style={{ borderRadius: 12, borderColor: '#e5e7eb' }}>
            <Statistic title={<Text type="secondary" style={{ fontSize: 12 }}>Points Circulating</Text>}
              value={stats.totalPointsCirculating || 0} prefix={<FireOutlined style={{ color: '#f59e0b' }} />}
              valueStyle={{ color: '#f59e0b', fontWeight: 700 }} />
          </Card>
        </Col>
        <Col span={6}>
          <Card variant="outlined" style={{ borderRadius: 12, borderColor: '#e5e7eb' }}>
            <Statistic title={<Text type="secondary" style={{ fontSize: 12 }}>Points Redeemed</Text>}
              value={stats.totalPointsRedeemed || 0} prefix={<GiftOutlined style={{ color: '#22c55e' }} />}
              valueStyle={{ color: '#22c55e', fontWeight: 700 }} />
          </Card>
        </Col>
        <Col span={6}>
          <Card variant="outlined" style={{ borderRadius: 12, borderColor: '#e5e7eb' }}>
            <Statistic title={<Text type="secondary" style={{ fontSize: 12 }}>Points Expired</Text>}
              value={stats.totalPointsExpired || 0} prefix={<HistoryOutlined style={{ color: '#ef4444' }} />}
              valueStyle={{ color: '#ef4444', fontWeight: 700 }} />
          </Card>
        </Col>
      </Row>

      {/* Main Tabs */}
      <Card variant="outlined" style={{ borderRadius: 12, borderColor: '#e5e7eb' }} styles={{ body: { padding: 0 } }}>
        <div style={{ padding: '0 16px' }}>
          <Tabs activeKey={activeTab} onChange={setActiveTab} items={[
            { key: 'overview', label: <Space><CrownOutlined />Tiers</Space> },
            { key: 'rules', label: <Space><FireOutlined />Earn Rules<Badge count={earnRules.length} style={{ background: '#6b7280', fontSize: 10 }} size="small" /></Space> },
            { key: 'rewards', label: <Space><GiftOutlined />Rewards<Badge count={rewards.length} style={{ background: '#6b7280', fontSize: 10 }} size="small" /></Space> },
            { key: 'transactions', label: <Space><HistoryOutlined />Transactions</Space> },
            { key: 'redemptions', label: <Space><ShoppingOutlined />Redemptions</Space> },
            { key: 'fulfillment', label: <Space><GiftOutlined />Warehouse Fulfillment</Space> },
          ]} />
        </div>

        {/* ─── Tiers Tab ──────────────────────────────── */}
        {activeTab === 'overview' && (
          <div style={{ padding: 16 }}>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 16 }}>
              <Button type="primary" icon={<PlusOutlined />} onClick={() => openTierModal()}>Add Tier</Button>
            </div>
            {tiers.length === 0 ? (
              <Empty description="No tiers configured"><Button type="primary" icon={<PlusOutlined />} onClick={() => openTierModal()}>Create First Tier</Button></Empty>
            ) : (
              <Row gutter={[12, 12]}>
                {tiers.map((tier) => {
                  const color = TIER_COLORS[tier.tierCode] || '#8c8c8c';
                  return (
                    <Col span={8} key={tier.id}>
                      <Card variant="outlined" style={{ borderRadius: 10, borderColor: '#e5e7eb', borderTop: `4px solid ${color}` }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                          <Space align="center"><CrownOutlined style={{ fontSize: 22, color }} /><Title level={4} style={{ margin: 0 }}>{tier.tierName}</Title></Space>
                          <Space>
                            <Button type="text" size="small" icon={<EditOutlined />} onClick={() => openTierModal(tier)} />
                            <Popconfirm title="Delete this tier?" onConfirm={() => deleteTier(tier.id)} okType="danger" okText="Delete">
                              <Button type="text" size="small" danger icon={<DeleteOutlined />} />
                            </Popconfirm>
                          </Space>
                        </div>
                        <Descriptions column={1} size="small" style={{ marginTop: 12 }}>
                          <Descriptions.Item label="Code"><Tag>{tier.tierCode}</Tag></Descriptions.Item>
                          <Descriptions.Item label="Min Spend">{Number(tier.minNetSpend) > 0 ? `${(Number(tier.minNetSpend) / 1_000_000).toFixed(1)}M ₫` : 'None'}</Descriptions.Item>
                          <Descriptions.Item label="Min Months">{tier.minDistinctMonths || 'None'}</Descriptions.Item>
                          <Descriptions.Item label="Multiplier"><Tag color="blue">{Number(tier.pointsMultiplier)}×</Tag></Descriptions.Item>
                          <Descriptions.Item label="Members"><Text strong style={{ fontSize: 16 }}>{tier._count?.accounts?.toLocaleString() || 0}</Text></Descriptions.Item>
                        </Descriptions>
                        {tier.isDefault && <Tag color="green" style={{ marginTop: 8 }}>Default Tier</Tag>}
                      </Card>
                    </Col>
                  );
                })}
              </Row>
            )}
          </div>
        )}

        {/* ─── Earn Rules Tab ─────────────────────────── */}
        {activeTab === 'rules' && (
          <div style={{ padding: '0' }}>
            <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '12px 16px' }}>
              <Button type="primary" icon={<PlusOutlined />} onClick={() => openRuleModal()}>Add Rule</Button>
            </div>
            <Table columns={earnRuleCols} dataSource={earnRules} rowKey="id" size="small"
              pagination={false}
              locale={{ emptyText: <Empty description="No earn rules"><Button type="primary" icon={<PlusOutlined />} onClick={() => openRuleModal()}>Create First Rule</Button></Empty> }}
            />
          </div>
        )}

        {/* ─── Rewards Tab ────────────────────────────── */}
        {activeTab === 'rewards' && (
          <div style={{ padding: '0' }}>
            <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '12px 16px' }}>
              <Button type="primary" icon={<PlusOutlined />} onClick={() => openRewardModal()}>Add Reward</Button>
            </div>
            <Table columns={rewardCols} dataSource={rewards} rowKey="id" size="small"
              pagination={{ pageSize: 10, showTotal: (t) => `${t} rewards`, size: 'small' }}
              locale={{ emptyText: <Empty description="No rewards"><Button type="primary" icon={<PlusOutlined />} onClick={() => openRewardModal()}>Create First Reward</Button></Empty> }}
            />
          </div>
        )}

        {/* ─── Transactions Tab ───────────────────────── */}
        {activeTab === 'transactions' && (
          <Table columns={txCols} dataSource={transactions} rowKey="id" size="small"
            pagination={{ pageSize: 15, showTotal: (t) => `${t} transactions`, size: 'small' }}
            locale={{ emptyText: <Empty description="No transactions yet" /> }}
          />
        )}

        {/* ─── Redemptions Tab ────────────────────────── */}
        {activeTab === 'redemptions' && (
          <div style={{ padding: 16 }}>
            <Table columns={rdCols} dataSource={redemptions} rowKey="id" pagination={{ pageSize: 15 }} />
          </div>
        )}

        {/* ─── Fulfillment Tab ────────────────────────────── */}
        {activeTab === 'fulfillment' && (
          <div style={{ padding: 16 }}>
            {(() => {
              const columns = [
                {
                  title: 'Customer',
                  key: 'customer',
                  render: (_: any, r: any) => (
                    <div>
                      <Text strong>{r.customer?.fullName || 'Unknown'}</Text><br/>
                      <Text type="secondary" style={{ fontSize: 12 }}>{r.customer?.phone || 'No phone'}</Text>
                    </div>
                  )
                },
                {
                  title: 'Date Earned',
                  dataIndex: 'createdAt',
                  key: 'date',
                  sorter: (a: any, b: any) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
                  render: (d: string) => new Date(d).toLocaleDateString()
                },
                {
                  title: 'Product/GWP/Voucher',
                  key: 'item',
                  render: (_: any, r: any) => (
                    <Space direction="vertical" size={0}>
                      <Text strong>{r.reward_catalog?.name || 'Unknown Item'}</Text>
                      {r.reward_catalog?.category && (
                        <Tag style={{ fontSize: 10, marginTop: 4 }} color="blue">{r.reward_catalog.category.toUpperCase()}</Tag>
                      )}
                    </Space>
                  )
                },
                {
                  title: 'Qty',
                  key: 'qty',
                  render: () => <Text>1</Text>
                },
                {
                  title: 'Tracking Info',
                  key: 'tracking',
                  render: (_: any, r: any) => (
                    <Space direction="vertical" size={0}>
                      {r.shipmentNo && <Text type="secondary" style={{ fontSize: 11 }}># {r.shipmentNo}</Text>}
                      {r.trackingLink && <a href={r.trackingLink} target="_blank" rel="noopener noreferrer" style={{ fontSize: 11 }}>Track Order</a>}
                      {!r.shipmentNo && !r.trackingLink && <Text type="secondary" style={{ fontSize: 11 }}>—</Text>}
                    </Space>
                  )
                },
                {
                  title: 'Status',
                  dataIndex: 'status',
                  key: 'status',
                  filters: [
                    { text: 'Pending', value: 'pending' },
                    { text: 'Processing', value: 'processing' },
                    { text: 'Packed', value: 'packed' },
                    { text: 'Shipped', value: 'shipped' },
                  ],
                  onFilter: (value: any, record: any) => record.status === value,
                  render: (s: string, r: any) => {
                    const color = s === 'pending' ? 'warning' : s === 'processing' ? 'processing' : s === 'packed' ? 'geekblue' : 'success';
                    let displayStatus = s;
                    if (s === 'pending') {
                      if (r.type === 'order') {
                        displayStatus = r.isGwp ? 'earned' : 'redeemed';
                      } else {
                        displayStatus = (r.pointsSpent && r.pointsSpent > 0) ? 'redeemed' : 'earned';
                      }
                    }
                    return <Tag color={color}>{displayStatus.toUpperCase()}</Tag>;
                  }
                },
                {
                  title: 'Action',
                  key: 'action',
                  render: (_: any, r: any) => {
                    const getPrev = (s: string) => s === 'shipped' ? 'packed' : s === 'packed' ? 'processing' : 'pending';
                    return (
                      <Space>
                        {r.status === 'pending' && <Button size="small" type="primary" onClick={() => handleStatusUpdate(r, 'processing')}>Mark Processing</Button>}
                        {r.status === 'processing' && <Button size="small" type="primary" onClick={() => handleStatusUpdate(r, 'packed')}>Mark Packed</Button>}
                        {r.status === 'packed' && <Button size="small" type="primary" onClick={() => {
                          setTrackingItem(r);
                          trackingForm.resetFields();
                          setTrackingModal(true);
                        }}>Mark Shipped</Button>}
                        {r.status !== 'pending' && (
                          <Tooltip title={`Revert to ${getPrev(r.status).toUpperCase()}`}>
                            <Button size="small" type="default" danger icon={<UndoOutlined />} onClick={() => handleStatusUpdate(r, getPrev(r.status))} />
                          </Tooltip>
                        )}
                      </Space>
                    );
                  }
                }
              ];

              return (
                <Card 
                  title="Warehouse Fulfillment" 
                  size="small"
                  extra={
                    <Space>
                      <Button onClick={() => handleBatchStatusUpdate('processing')} disabled={selectedRowKeys.length === 0}>
                        Batch Processing
                      </Button>
                      <Button onClick={() => handleBatchStatusUpdate('packed')} disabled={selectedRowKeys.length === 0}>
                        Batch Packed
                      </Button>
                      <Button type="primary" onClick={() => handleBatchStatusUpdate('shipped')} disabled={selectedRowKeys.length === 0}>
                        Batch Shipped
                      </Button>
                    </Space>
                  }
                  style={{ background: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: 8 }}
                >
                  <Table
                    rowSelection={{
                      selectedRowKeys,
                      onChange: setSelectedRowKeys,
                      getCheckboxProps: (record: any) => ({
                        disabled: record.status !== 'pending',
                        name: record.name,
                      }),
                    }}
                    dataSource={redemptions.map((r: any) => ({ ...r, key: r.id }))}
                    columns={columns}
                    pagination={{ pageSize: 20 }}
                    size="small"
                  />
                </Card>
              );
            })()}
          </div>
        )}
      </Card>

      {/* ─── Tier Modal ──────────────────────────────── */}
      <Modal title={editingTier ? 'Edit Tier' : 'Add Tier'} open={tierModal}
        onCancel={() => { setTierModal(false); tierForm.resetFields(); }}
        onOk={() => tierForm.submit()} okText={editingTier ? 'Save' : 'Create'} width={480}>
        <Form form={tierForm} layout="vertical" onFinish={saveTier}>
          <Row gutter={12}>
            <Col span={12}>
              <Form.Item name="tierCode" label="Tier Code" rules={[{ required: true }]}>
                <Input placeholder="e.g. GOLD" disabled={!!editingTier} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="tierName" label="Tier Name" rules={[{ required: true }]}>
                <Input placeholder="e.g. Gold" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={12}>
            <Col span={8}>
              <Form.Item name="tierOrder" label="Order" rules={[{ required: true }]} initialValue={1}>
                <InputNumber style={{ width: '100%' }} min={1} />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item name="minNetSpend" label="Min Spend (₫)" initialValue={0}>
                <InputNumber style={{ width: '100%' }} min={0} step={100000} />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item name="minDistinctMonths" label="Min Months" initialValue={0}>
                <InputNumber style={{ width: '100%' }} min={0} />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={12}>
            <Col span={12}>
              <Form.Item name="pointsMultiplier" label="Points Multiplier" initialValue={1.0}>
                <InputNumber style={{ width: '100%' }} min={0.1} step={0.1} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="isDefault" label="Default Tier" valuePropName="checked" initialValue={false}>
                <Switch />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>

      {/* ─── Earn Rule Modal ─────────────────────────── */}
      <Modal title={editingRule ? 'Edit Earn Rule' : 'Add Earn Rule'} open={ruleModal}
        onCancel={() => { setRuleModal(false); ruleForm.resetFields(); }}
        onOk={() => ruleForm.submit()} okText={editingRule ? 'Save' : 'Create'} width={480}>
        <Form form={ruleForm} layout="vertical" onFinish={saveRule}>
          <Form.Item name="source" label="Source" rules={[{ required: true }]}>
            <Select placeholder="Select source" options={[
              { value: 'purchase', label: 'Purchase' },
              { value: 'qr_scan', label: 'QR Scan' },
              { value: 'profile_completion', label: 'Profile Completion' },
              { value: 'review', label: 'Product Review' },
              { value: 'milestone', label: 'Milestone' },
              { value: 'referral', label: 'Referral' },
              { value: 'quiz', label: 'Quiz' },
              { value: 'warranty', label: 'Warranty Registration' },
              { value: 'checkin', label: 'Check-in' },
              { value: 'manual', label: 'Manual' },
            ]} />
          </Form.Item>
          <Form.Item name="ruleName" label="Rule Name" rules={[{ required: true }]}>
            <Input placeholder="e.g. Purchase Earn Rule" />
          </Form.Item>
          <Form.Item name="pointsFormulaStr" label="Points Formula (JSON)" rules={[{ required: true }]} initialValue='{"type":"fixed","points":10}'>
            <Input.TextArea rows={2} placeholder='{"type":"per_amount","per":10000,"points":1}' />
          </Form.Item>
          <Row gutter={12}>
            <Col span={12}>
              <Form.Item name="tierMultiplierApplies" label="Tier Multiplier" valuePropName="checked" initialValue={true}>
                <Switch />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="isActive" label="Active" valuePropName="checked" initialValue={true}>
                <Switch />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>

      {/* ─── Reward Modal ────────────────────────────── */}
      <Modal title={editingReward ? 'Edit Reward' : 'Add Reward'} open={rewardModal}
        onCancel={() => { setRewardModal(false); rewardForm.resetFields(); }}
        onOk={() => rewardForm.submit()} okText={editingReward ? 'Save' : 'Create'} width={480}>
        <Form form={rewardForm} layout="vertical" onFinish={saveReward}>
          <Row gutter={12}>
            <Col span={12}>
              <Form.Item name="code" label="Code" rules={[{ required: true }]}>
                <Input placeholder="e.g. DISC_10" disabled={!!editingReward} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="name" label="Reward Name" rules={[{ required: true }]}>
                <Input placeholder="e.g. 10% Discount Coupon" />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item name="description" label="Description">
            <Input.TextArea rows={2} placeholder="Description (optional)" />
          </Form.Item>
          <Row gutter={12}>
            <Col span={8}>
              <Form.Item name="category" label="Category">
                <Select allowClear placeholder="Category" options={[
                  { value: 'product', label: 'Brand Product' },
                  { value: 'gwp', label: 'Gift with Purchase (GWP)' },
                  { value: 'voucher', label: 'Voucher' },
                  { value: 'discount', label: 'Discount' },
                  { value: 'shipping', label: 'Free Shipping' },
                ]} />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item name="pointsCost" label="Points Cost" rules={[{ required: true }]}>
                <InputNumber style={{ width: '100%' }} min={1} />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item name="stock" label="Stock (empty=∞)">
                <InputNumber style={{ width: '100%' }} min={0} />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item name="imageUrl" label="Image URL">
            <Input placeholder="https://example.com/image.png" />
          </Form.Item>
          <Form.Item name="isActive" label="Active" valuePropName="checked" initialValue={true}>
            <Switch />
          </Form.Item>
        </Form>
      </Modal>
      <Modal title="Add Tracking Information" open={trackingModal}
        onCancel={() => setTrackingModal(false)}
        onOk={() => trackingForm.submit()} okText="Mark as Shipped">
        <Form form={trackingForm} layout="vertical" onFinish={(v) => {
          handleStatusUpdate(trackingItem, 'shipped', v);
          setTrackingModal(false);
        }}>
          <Form.Item name="shipmentNo" label="Shipment No. (Optional)">
            <Input placeholder="e.g. VNPOST-123456" />
          </Form.Item>
          <Form.Item name="trackingLink" label="Delivery Tracking Link (Optional)">
            <Input placeholder="https://tracking.example.com/..." />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
