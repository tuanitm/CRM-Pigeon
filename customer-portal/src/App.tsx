import { useState, useEffect } from 'react';
import { api } from './api';
import './index.css';

// Icons (using simple SVG paths for zero dependencies)
const HomeIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>;
const GiftIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path></svg>;
const UserIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>;

export default function App() {
  const [customerId, setCustomerId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'home' | 'rewards' | 'profile'>('home');
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const [isOnboarding, setIsOnboarding] = useState(false);
  const [onboardData, setOnboardData] = useState({ dateOfBirth: '', address: '', email: '' });

  const [phone, setPhone] = useState('');
  const [fullName, setFullName] = useState('');

  const [profile, setProfile] = useState<any>(null);
  const [loyalty, setLoyalty] = useState<any>(null);
  const [rewards, setRewards] = useState<any[]>([]);

  const [babies, setBabies] = useState<any[]>([]);

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await api.identify(phone, fullName);
      if (res.customerId) {
        setCustomerId(res.customerId);
        if (res.isNew) {
          setIsOnboarding(true);
        } else {
          showToast('Welcome back to the Loyalty Circle!');
          loadDashboard(res.customerId);
        }
      }
    } catch (err: any) {
      showToast('Login failed: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleOnboardSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerId) return;
    setLoading(true);
    try {
      await api.updateProfile(customerId, {
        fullName: fullName,
        dateOfBirth: onboardData.dateOfBirth,
        address: onboardData.address,
        email: onboardData.email || undefined,
        babies: babies.filter(b => b.name && (b.dateOfBirth || b.dueDate)),
        isOnboardingCompletion: true // Flag to trigger Welcome Bonus in backend
      });
      showToast('Profile completed successfully!');
      setIsOnboarding(false);
      loadDashboard(customerId);
    } catch (err: any) {
      showToast('Failed to save profile: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    setCustomerId(null);
    setProfile(null);
    setLoyalty(null);
    setRewards([]);
    setBabies([]);
    setPhone('');
    setFullName('');
    setOnboardData({ dateOfBirth: '', address: '', email: '' });
    setActiveTab('home');
    showToast('Logged out successfully');
  };

  const handleSavePersonalInfo = async () => {
    if (!customerId) return;
    setLoading(true);
    try {
      await api.updateProfile(customerId, {
        dateOfBirth: onboardData.dateOfBirth,
        address: onboardData.address,
        email: onboardData.email || undefined,
      });
      showToast('Personal info updated successfully!');
      loadDashboard(customerId);
    } catch (err: any) {
      showToast('Failed to save info');
    } finally {
      setLoading(false);
    }
  };

  const loadDashboard = async (id: string) => {
    try {
      const [profData, loyData, rwData] = await Promise.all([
        api.getProfile(id),
        api.getLoyalty(id),
        api.getRewards(id)
      ]);
      setProfile(profData);
      setOnboardData({
        dateOfBirth: profData.dateOfBirth ? profData.dateOfBirth.split('T')[0] : '',
        address: profData.addresses?.[0]?.addressLine1 || '',
        email: profData.email || '',
      });
      setLoyalty(loyData);
      setRewards(rwData);
      setBabies(profData.babies || []);
    } catch (err: any) {
      console.error(err);
    }
  };

  const handleRedeem = async (reward: any) => {
    if (!customerId) return;
    setLoading(true);
    try {
      await api.redeemReward(customerId, reward.code);
      showToast(`Successfully redeemed ${reward.name}!`);
      loadDashboard(customerId);
    } catch (err: any) {
      showToast(err.message || 'Redemption failed');
    } finally {
      setLoading(false);
    }
  };

  const handleSaveChildren = async () => {
    if (!customerId) return;
    setLoading(true);
    try {
      await api.updateProfile(customerId, { babies });
      showToast('Children information updated!');
      loadDashboard(customerId);
    } catch (err: any) {
      showToast('Failed to save child info');
    } finally {
      setLoading(false);
    }
  };

  const addChild = () => {
    setBabies([...babies, { name: '', dateOfBirth: '', gender: '' }]);
  };

  if (!customerId) {
    return (
      <div className="screen fade-in" style={{ justifyContent: 'center' }}>
        {toast && <div className="toast">{toast}</div>}
        <div className="glass-card" style={{ textAlign: 'center' }}>
          <div style={{ width: 64, height: 64, background: 'var(--primary)', borderRadius: '50%', margin: '0 auto 16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: 24 }}>✨</div>
          <h2 style={{ marginBottom: 8 }}>Welcome to Loyalty Circle</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: 24, fontSize: 14 }}>Enter your phone number to access your points and rewards instantly.</p>
          
          <form onSubmit={handleLogin}>
            <div className="input-group">
              <label>Phone Number</label>
              <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder="+84 90 123 4567" required />
            </div>
            <button type="submit" className="btn btn-primary" disabled={loading} style={{ marginTop: 8 }}>
              {loading ? 'Entering...' : 'Continue'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  if (isOnboarding) {
    return (
      <div className="screen fade-in" style={{ justifyContent: 'center' }}>
        {toast && <div className="toast">{toast}</div>}
        <div className="glass-card">
          <h2 style={{ marginBottom: 8 }}>Complete Your Profile</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: 24, fontSize: 14 }}>Please provide a few details to unlock your Loyalty Dashboard.</p>
          
          <form onSubmit={handleOnboardSubmit}>
            <div className="input-group">
              <label>Phone Number</label>
              <input type="text" value={phone} disabled style={{ background: '#f1f5f9' }} />
            </div>
            <div className="input-group">
              <label>Full Name *</label>
              <input type="text" value={fullName} onChange={e => setFullName(e.target.value)} placeholder="Jane Doe" required />
            </div>
            <div className="input-group">
              <label>Date of Birth *</label>
              <input type="date" value={onboardData.dateOfBirth} onChange={e => setOnboardData({...onboardData, dateOfBirth: e.target.value})} required />
            </div>
            <div className="input-group">
              <label>Address *</label>
              <input type="text" value={onboardData.address} onChange={e => setOnboardData({...onboardData, address: e.target.value})} placeholder="123 Main St" required />
            </div>
            <div className="input-group">
              <label>Email (Optional)</label>
              <input type="email" value={onboardData.email} onChange={e => setOnboardData({...onboardData, email: e.target.value})} placeholder="jane@example.com" />
            </div>

            <h3 style={{ marginTop: 24, marginBottom: 8, fontSize: 16 }}>Family & Kids (Optional)</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: 16, fontSize: 13 }}>Add your child to unlock special milestones and rewards.</p>
            
            {babies.map((baby, idx) => (
              <div key={idx} className="glass-card" style={{ padding: 12, marginBottom: 12, position: 'relative' }}>
                <button type="button" onClick={() => setBabies(babies.filter((_, i) => i !== idx))} style={{ position: 'absolute', right: 12, top: 12, background: 'none', border: 'none', color: 'var(--danger)' }}>✕</button>
                <div className="input-group">
                  <label>Child's Name</label>
                  <input type="text" value={baby.name} onChange={e => {
                    const newBabies = [...babies];
                    newBabies[idx].name = e.target.value;
                    setBabies(newBabies);
                  }} placeholder="Baby Name" />
                </div>
                <div style={{ display: 'flex', gap: 12 }}>
                  <div className="input-group" style={{ flex: 1 }}>
                    <label>Gender</label>
                    <select value={baby.gender} onChange={e => {
                      const newBabies = [...babies];
                      newBabies[idx].gender = e.target.value;
                      setBabies(newBabies);
                    }}>
                      <option value="">Select</option>
                      <option value="male">Boy</option>
                      <option value="female">Girl</option>
                    </select>
                  </div>
                </div>
                <div style={{ marginTop: 12 }}>
                  <div style={{ display: 'flex', gap: 16, marginBottom: 8 }}>
                    <label style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 13, cursor: 'pointer' }}>
                      <input 
                        type="radio" 
                        name={`dateType-${idx}`}
                        checked={baby.isBorn !== false}
                        onChange={() => {
                          const newBabies = [...babies];
                          newBabies[idx].isBorn = true;
                          newBabies[idx].dueDate = '';
                          setBabies(newBabies);
                        }}
                      /> Date of Birth
                    </label>
                    <label style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 13, cursor: 'pointer' }}>
                      <input 
                        type="radio" 
                        name={`dateType-${idx}`}
                        checked={baby.isBorn === false}
                        onChange={() => {
                          const newBabies = [...babies];
                          newBabies[idx].isBorn = false;
                          newBabies[idx].dateOfBirth = '';
                          setBabies(newBabies);
                        }}
                      /> Due Date
                    </label>
                  </div>
                  <div className="input-group" style={{ marginBottom: 0 }}>
                    {baby.isBorn !== false ? (
                      <input 
                        type="date" 
                        value={baby.dateOfBirth?.split('T')[0] || ''} 
                        max={new Date().toISOString().split('T')[0]}
                        onChange={e => {
                          const newBabies = [...babies];
                          newBabies[idx].dateOfBirth = e.target.value;
                          setBabies(newBabies);
                        }} 
                      />
                    ) : (
                      <input 
                        type="date" 
                        value={baby.dueDate?.split('T')[0] || ''} 
                        min={new Date(new Date().setDate(new Date().getDate() + 1)).toISOString().split('T')[0]}
                        onChange={e => {
                          const newBabies = [...babies];
                          newBabies[idx].dueDate = e.target.value;
                          setBabies(newBabies);
                        }} 
                      />
                    )}
                  </div>
                </div>
              </div>
            ))}
            
            <button type="button" onClick={addChild} className="btn" style={{ background: 'rgba(59, 130, 246, 0.1)', color: 'var(--primary)', marginBottom: 24 }}>
              + Add Child
            </button>

            <button type="submit" className="btn btn-primary" disabled={loading} style={{ marginTop: 8 }}>
              {loading ? 'Saving...' : 'Finish Onboarding'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <>
      {toast && <div className="toast">{toast}</div>}
      
      {activeTab === 'home' && (
        <div className="screen fade-in">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h4 style={{ color: 'var(--text-muted)', fontSize: 13 }}>Good morning,</h4>
              <h2>{profile?.fullName || 'Valued Member'}</h2>
            </div>
            <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'linear-gradient(135deg, var(--secondary), var(--primary))' }} />
          </div>

          <div className="tier-card">
            <h4 style={{ color: 'rgba(255,255,255,0.7)', fontSize: 12, textTransform: 'uppercase', letterSpacing: 1 }}>Current Tier</h4>
            <h1 style={{ fontSize: 32, margin: '4px 0 16px' }}>{loyalty?.tier?.name || 'Member'}</h1>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
              <div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.7)' }}>Points Balance</div>
                <div style={{ fontSize: 28, fontWeight: 800 }}>{(loyalty?.pointsBalance || 0).toLocaleString()}</div>
              </div>
              <div style={{ fontSize: 12, textAlign: 'right' }}>
                <div>240 pts to Silver</div>
              </div>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: '65%' }}></div>
            </div>
          </div>

          <h3 style={{ marginTop: 8 }}>Recent Activity</h3>
          <div className="glass-card" style={{ padding: 16 }}>
            {loyalty?.transactions?.length > 0 ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {loyalty.transactions.slice(0, 3).map((tx: any) => (
                  <div key={tx.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: 14 }}>{tx.description || tx.type}</div>
                      <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{new Date(tx.createdAt).toLocaleDateString()}</div>
                    </div>
                    <div style={{ fontWeight: 700, color: tx.points > 0 ? '#10b981' : '#ef4444' }}>
                      {tx.points > 0 ? '+' : ''}{tx.points}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p style={{ color: 'var(--text-muted)', fontSize: 13, textAlign: 'center' }}>No recent activity.</p>
            )}
          </div>
        </div>
      )}

      {activeTab === 'rewards' && (
        <div className="screen fade-in">
          <h2>Rewards Catalog</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: 14, marginTop: -16 }}>You have {loyalty?.pointsBalance || 0} points to spend.</p>
          
          <div className="rewards-grid">
            {rewards.map(reward => (
              <div key={reward.id} className="reward-card">
                <div className="reward-image">{reward.code.includes('MUG') ? '☕' : reward.code.includes('TOTE') ? '🛍️' : '🎁'}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600, fontSize: 14, lineHeight: 1.2 }}>{reward.name}</div>
                  <div style={{ color: 'var(--primary)', fontWeight: 700, fontSize: 13, marginTop: 4 }}>{reward.pointsCost} pts</div>
                </div>
                <button 
                  className={`btn ${loyalty?.pointsBalance >= reward.pointsCost ? 'btn-primary' : 'btn-secondary'}`}
                  style={{ padding: '8px', fontSize: 13, borderRadius: 8 }}
                  disabled={loading || loyalty?.pointsBalance < reward.pointsCost}
                  onClick={() => handleRedeem(reward)}
                >
                  Redeem
                </button>
              </div>
            ))}
            {rewards.length === 0 && (
              <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: 40, color: 'var(--text-muted)' }}>
                No rewards available right now.
              </div>
            )}
          </div>

          <h2 style={{ marginTop: 32 }}>My Redeemed Items & Gifts</h2>
          <div className="glass-card" style={{ padding: 16 }}>
            {profile?.reward_redemption?.length > 0 || profile?.orders?.length > 0 ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {profile?.reward_redemption?.map((rr: any) => (
                  <div key={rr.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px', background: '#f8fafc', borderRadius: '8px' }}>
                    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                      <div style={{ fontSize: 24 }}>🎁</div>
                      <div>
                        <div style={{ fontWeight: 600, fontSize: 14 }}>{rr.reward_catalog?.name || 'Gift'}</div>
                        <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{new Date(rr.createdAt).toLocaleDateString()}</div>
                      </div>
                    </div>
                    <div>
                      <span style={{ fontSize: 11, fontWeight: 700, padding: '4px 8px', borderRadius: 12, backgroundColor: rr.status === 'fulfilled' ? '#dcfce7' : '#fef9c3', color: rr.status === 'fulfilled' ? '#166534' : '#854d0e', textTransform: 'uppercase' }}>
                        {rr.status === 'pending' ? 'claimed' : rr.status}
                      </span>
                    </div>
                  </div>
                ))}
                {profile?.orders?.map((order: any) => (
                  <div key={order.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px', background: '#f8fafc', borderRadius: '8px' }}>
                    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                      <div style={{ fontSize: 24 }}>🛍️</div>
                      <div>
                        <div style={{ fontWeight: 600, fontSize: 14 }}>{order.items?.[0]?.product?.name || `Product #${order.items?.[0]?.productId?.slice(0,6)}`}</div>
                        <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{new Date(order.createdAt).toLocaleDateString()}</div>
                      </div>
                    </div>
                    <div>
                      <span style={{ fontSize: 11, fontWeight: 700, padding: '4px 8px', borderRadius: 12, backgroundColor: order.status === 'delivered' ? '#dcfce7' : order.status === 'shipped' ? '#dbeafe' : '#fef9c3', color: order.status === 'delivered' ? '#166534' : order.status === 'shipped' ? '#1e40af' : '#854d0e', textTransform: 'uppercase' }}>
                        {order.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p style={{ color: 'var(--text-muted)', fontSize: 13, textAlign: 'center' }}>No items redeemed yet.</p>
            )}
          </div>
        </div>
      )}

      {activeTab === 'profile' && (
        <div className="screen fade-in">
          <h2>My Profile</h2>
          
          <div className="glass-card">
            <h3>Personal Info</h3>
            <div style={{ marginTop: 16 }}>
              <div className="input-group">
                <label>Full Name</label>
                <input type="text" value={profile?.fullName || ''} readOnly style={{ background: '#f1f5f9' }} />
              </div>
              <div className="input-group">
                <label>Phone Number</label>
                <input type="text" value={profile?.phone || ''} readOnly style={{ background: '#f1f5f9' }} />
              </div>
              <div className="input-group">
                <label>Date of Birth</label>
                <input type="date" value={onboardData.dateOfBirth} onChange={e => setOnboardData({...onboardData, dateOfBirth: e.target.value})} />
              </div>
              <div className="input-group">
                <label>Address</label>
                <input type="text" value={onboardData.address} onChange={e => setOnboardData({...onboardData, address: e.target.value})} />
              </div>
              <div className="input-group">
                <label>Email</label>
                <input type="email" value={onboardData.email} onChange={e => setOnboardData({...onboardData, email: e.target.value})} />
              </div>
              <button className="btn btn-primary" onClick={handleSavePersonalInfo} disabled={loading} style={{ marginTop: 8 }}>Save Personal Info</button>
            </div>
          </div>

          <div className="glass-card">
            <h3 style={{ color: 'var(--primary)', marginBottom: 8 }}>Family & Kids ✨</h3>
            <p style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 16 }}>Add your children's info to receive special birthday gifts and personalized rewards!</p>
            
            {babies.map((b, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.8)', padding: 16, borderRadius: 12, marginBottom: 16, border: '1px solid #e2e8f0' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
                  <span style={{ fontWeight: 600, fontSize: 14 }}>Child #{i + 1}</span>
                </div>
                <div className="input-group">
                  <label>Name</label>
                  <input type="text" value={b.name} onChange={e => { const newB = [...babies]; newB[i].name = e.target.value; setBabies(newB); }} placeholder="Child's name" />
                </div>
                <div className="input-group" style={{ marginBottom: 12 }}>
                  <label style={{ marginBottom: 8 }}>Date Type</label>
                  <div style={{ display: 'flex', gap: 16 }}>
                    <label style={{ display: 'flex', alignItems: 'center', gap: 6, fontWeight: 'normal', margin: 0 }}>
                      <input type="radio" name={`type-${i}`} checked={b.isBorn !== false} onChange={() => { const newB = [...babies]; newB[i].isBorn = true; setBabies(newB); }} /> Date of Birth
                    </label>
                    <label style={{ display: 'flex', alignItems: 'center', gap: 6, fontWeight: 'normal', margin: 0 }}>
                      <input type="radio" name={`type-${i}`} checked={b.isBorn === false} onChange={() => { const newB = [...babies]; newB[i].isBorn = false; setBabies(newB); }} /> Due Date
                    </label>
                  </div>
                </div>
                {b.isBorn !== false ? (
                  <div className="input-group">
                    <label>Date of Birth</label>
                    <input type="date" max={new Date().toISOString().split('T')[0]} value={b.dateOfBirth ? b.dateOfBirth.split('T')[0] : ''} onChange={e => { const newB = [...babies]; newB[i].dateOfBirth = e.target.value; setBabies(newB); }} />
                  </div>
                ) : (
                  <div className="input-group">
                    <label>Due Date</label>
                    <input type="date" min={new Date(Date.now() + 86400000).toISOString().split('T')[0]} value={b.dueDate ? b.dueDate.split('T')[0] : ''} onChange={e => { const newB = [...babies]; newB[i].dueDate = e.target.value; setBabies(newB); }} />
                  </div>
                )}
                <div className="input-group">
                  <label>Gender</label>
                  <select style={{ width: '100%', padding: 14, borderRadius: 12, border: '1px solid #cbd5e1', background: 'white' }} value={b.gender || ''} onChange={e => { const newB = [...babies]; newB[i].gender = e.target.value; setBabies(newB); }}>
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
                <div className="input-group">
                  <label>Stage</label>
                  <select style={{ width: '100%', padding: 14, borderRadius: 12, border: '1px solid #cbd5e1', background: 'white' }} value={b.stageCode || ''} onChange={e => { const newB = [...babies]; newB[i].stageCode = e.target.value; setBabies(newB); }}>
                    <option value="">Select stage</option>
                    <option value="NEWBORN">Newborn</option>
                    <option value="INFANT">Infant</option>
                    <option value="TODDLER">Toddler</option>
                  </select>
                </div>
              </div>
            ))}
            
            <button className="btn btn-secondary" onClick={addChild} style={{ marginBottom: 12 }}>+ Add Child</button>
            <button className="btn btn-primary" onClick={handleSaveChildren} disabled={loading}>Save Family Info</button>
          </div>

          <div style={{ marginTop: 24, marginBottom: 24, textAlign: 'center' }}>
            <button className="btn" style={{ color: '#ef4444', background: 'rgba(239, 68, 68, 0.1)' }} onClick={handleLogout}>Log Out</button>
          </div>
        </div>
      )}

      {/* Bottom Navigation */}
      <div className="bottom-nav">
        <div className={`nav-item ${activeTab === 'home' ? 'active' : ''}`} onClick={() => setActiveTab('home')}>
          <div className="nav-icon"><HomeIcon /></div>
          <span>Home</span>
        </div>
        <div className={`nav-item ${activeTab === 'rewards' ? 'active' : ''}`} onClick={() => setActiveTab('rewards')}>
          <div className="nav-icon"><GiftIcon /></div>
          <span>Rewards</span>
        </div>
        <div className={`nav-item ${activeTab === 'profile' ? 'active' : ''}`} onClick={() => setActiveTab('profile')}>
          <div className="nav-icon"><UserIcon /></div>
          <span>Profile</span>
        </div>
      </div>
    </>
  );
}
