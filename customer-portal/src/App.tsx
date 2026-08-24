import { useState } from 'react';
import { api } from './api';
import './index.css';

// Icons (using simple SVG paths for zero dependencies)
const HomeIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>;
const GiftIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path></svg>;
const UserIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>;
const LogoutIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>;
const SupportIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>;

export default function App() {
  const [customerId, setCustomerId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'home' | 'rewards' | 'profile' | 'support'>('home');
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const [isOnboarding, setIsOnboarding] = useState(false);
  const [onboardData, setOnboardData] = useState({ dateOfBirth: '', address: '', email: '', gender: '' });

  const [phone, setPhone] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [showPinInput, setShowPinInput] = useState(false);
  const [fullName, setFullName] = useState('');

  const [profile, setProfile] = useState<any>(null);
  const [loyalty, setLoyalty] = useState<any>(null);
  const [rewards, setRewards] = useState<any[]>([]);
  const [tickets, setTickets] = useState<any[]>([]);

  const [babies, setBabies] = useState<any[]>([]);
  const [showFamilySection, setShowFamilySection] = useState<boolean>(true);
  const [confirmReward, setConfirmReward] = useState<any>(null);

  const [showNewTicket, setShowNewTicket] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState<any>(null);
  const [newTicketForm, setNewTicketForm] = useState({ subject: '', category: 'General', message: '' });
  const [ticketReply, setTicketReply] = useState('');

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await api.identify(phone, pinCode, fullName, navigator.userAgent);
      if (res.isNew) {
        if (res.customerId) setCustomerId(res.customerId);
        setIsOnboarding(true);
      } else if (res.customerId) {
        setCustomerId(res.customerId);
        showToast('Welcome back to the Loyalty Circle!');
        loadDashboard(res.customerId);
      }
    } catch (err: any) {
      if (err.message === 'PIN is required') {
        setShowPinInput(true);
        showToast('Please enter your 6-digit PIN');
      } else {
        showToast('Login failed: ' + err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const validateBabies = (): boolean => {
    if (!showFamilySection) return true;
    for (let i = 0; i < babies.length; i++) {
      const b = babies[i];
      // Be lenient with legacy data that might not have isBorn explicitly set
      const hasDate = (b.isBorn !== false && !!b.dateOfBirth) || (b.isBorn === false && !!b.dueDate) || !!b.dateOfBirth || !!b.dueDate;
      if (!b.name?.trim() || !b.gender || !hasDate || !b.stageCode) {
        const msg = `Child #${i + 1}: Name, Gender, Date of Birth/Due Date, and Stage are all compulsory. Please fill in all fields before saving.`;
        showToast(msg);
        alert(msg); // Hard alert so user cannot miss it
        return false;
      }
    }
    return true;
  };

  const handleOnboardSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (showFamilySection && !validateBabies()) return;
    setLoading(true);
    try {
      let currentId = customerId;
      if (!currentId) {
        const newCust = await api.registerProfile({
          phone: phone,
          fullName: fullName,
          pinCode: pinCode,
          dateOfBirth: onboardData.dateOfBirth,
          gender: onboardData.gender,
          address: onboardData.address,
          email: onboardData.email || undefined,
          babies: showFamilySection ? babies.filter(b => b.name && (b.dateOfBirth || b.dueDate)) : [],
          isOnboardingCompletion: true
        });
        currentId = newCust.id;
        setCustomerId(currentId);
      } else {
        await api.updateProfile(currentId, {
          fullName: fullName,
          pinCode: pinCode,
          dateOfBirth: onboardData.dateOfBirth,
          gender: onboardData.gender,
          address: onboardData.address,
          email: onboardData.email || undefined,
          babies: showFamilySection ? babies.filter(b => b.name && (b.dateOfBirth || b.dueDate)) : [],
          isOnboardingCompletion: true
        });
      }
      showToast('Profile completed successfully!');
      setIsOnboarding(false);
      loadDashboard(currentId);
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
    setTickets([]);
    setBabies([]);
    setPhone('');
    setPinCode('');
    setShowPinInput(false);
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
        pinCode: pinCode || undefined,
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
      const [profData, loyData, rwData, ticketsData] = await Promise.all([
        api.getProfile(id),
        api.getLoyalty(id),
        api.getRewards(id),
        api.getTickets(id)
      ]);
      setProfile(profData);
      setOnboardData({
        dateOfBirth: profData.dateOfBirth ? profData.dateOfBirth.split('T')[0] : '',
        address: profData.addresses?.[0]?.addressLine1 || '',
        email: profData.email || '',
        gender: profData.gender || '',
      });
      setLoyalty(loyData);
      setRewards(rwData);
      setTickets(ticketsData);
      setBabies(profData.babies || []);
      setShowFamilySection(true);
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
      setConfirmReward(null);
      loadDashboard(customerId);
    } catch (err: any) {
      showToast(err.message || 'Redemption failed');
    } finally {
      setLoading(false);
    }
  };

  const handleCreateTicket = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerId) return;
    setLoading(true);
    try {
      await api.createTicket(customerId, newTicketForm.subject, newTicketForm.category, newTicketForm.message);
      showToast('Support ticket submitted successfully!');
      setShowNewTicket(false);
      setNewTicketForm({ subject: '', category: 'General', message: '' });
      loadDashboard(customerId);
    } catch (err: any) {
      showToast(err.message || 'Failed to submit ticket');
    } finally {
      setLoading(false);
    }
  };

  const handleResolveTicket = async () => {
    if (!selectedTicket) return;
    setLoading(true);
    try {
      await api.resolveTicket(selectedTicket.id);
      showToast('Ticket marked as resolved!');
      
      const refreshedTickets = await api.getTickets(customerId!);
      setTickets(refreshedTickets);
      setSelectedTicket(refreshedTickets.find((t: any) => t.id === selectedTicket.id));
    } catch (err: any) {
      showToast(err.message || 'Failed to resolve ticket');
    } finally {
      setLoading(false);
    }
  };

  const handleReplyTicket = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedTicket || !ticketReply.trim()) return;
    setLoading(true);
    try {
      await api.replyTicket(selectedTicket.id, ticketReply);
      setTicketReply('');
      showToast('Reply sent!');
      
      // Reload specific ticket temporarily
      const refreshedTickets = await api.getTickets(customerId!);
      setTickets(refreshedTickets);
      setSelectedTicket(refreshedTickets.find((t: any) => t.id === selectedTicket.id));
    } catch (err: any) {
      showToast(err.message || 'Failed to send reply');
    } finally {
      setLoading(false);
    }
  };

  const handleSaveChildren = async () => {
    if (!customerId) return;
    if (showFamilySection && !validateBabies()) return;
    setLoading(true);
    try {
      await api.updateProfile(customerId, { babies: showFamilySection ? babies : [] });
      showToast(showFamilySection ? 'Children information updated!' : 'Kids section hidden.');
      await loadDashboard(customerId);
    } catch (err: any) {
      const msg = 'Failed to save child info: ' + (err.message || 'Unknown error');
      showToast(msg);
      alert(msg);
    } finally {
      setLoading(false);
    }
  };

  const addChild = () => {
    setBabies([...babies, { name: '', dateOfBirth: '', gender: '', stageCode: '', isBorn: true }]);
  };

  if (!customerId && !isOnboarding) {
    return (
      <div className="screen fade-in" style={{ justifyContent: 'center' }}>
        {toast && <div className="toast">{toast}</div>}
        <div className="glass-card" style={{ textAlign: 'center' }}>
          <img src={`${import.meta.env.BASE_URL}pigeonlogo.jpg`} alt="Pigeon Logo" style={{ width: 64, height: 64, borderRadius: '50%', margin: '0 auto 16px', display: 'block', objectFit: 'contain', background: 'white' }} />
          <h2 style={{ marginBottom: 8 }}>Welcome to Loyalty Circle</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: 24, fontSize: 14 }}>Enter your phone number to access your points and rewards instantly.</p>
          
          <form onSubmit={handleLogin}>
            <div className="input-group">
              <label>Phone Number</label>
              <input 
                type="tel" 
                value={phone} 
                onChange={e => {
                  setPhone(e.target.value);
                  if (showPinInput) setShowPinInput(false);
                }} 
                placeholder="+84 90 123 4567" 
                required 
              />
            </div>
            {showPinInput && (
              <div className="input-group fade-in">
                <label>6-Digit PIN</label>
                <input 
                  type="password" 
                  value={pinCode} 
                  onChange={e => setPinCode(e.target.value)} 
                  placeholder="123456" 
                  maxLength={6} 
                  pattern="\d{6}" 
                  required 
                  autoFocus
                />
              </div>
            )}
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
              <input type="text" value={fullName} onChange={e => setFullName(e.target.value)} placeholder="Jane Doe" required autoComplete="name" />
            </div>
            <div className="input-group">
              <label>Set 6-Digit PIN *</label>
              <input type="password" value={pinCode} onChange={e => setPinCode(e.target.value)} placeholder="123456" maxLength={6} pattern="\d{6}" required />
            </div>
            <div className="input-group">
              <label>Date of Birth *</label>
              <input type="date" value={onboardData.dateOfBirth} onChange={e => setOnboardData({...onboardData, dateOfBirth: e.target.value})} required />
            </div>
            <div className="input-group">
              <label>Gender *</label>
              <select value={onboardData.gender} onChange={e => setOnboardData({...onboardData, gender: e.target.value})} required>
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="input-group">
              <label>Address *</label>
              <input type="text" value={onboardData.address} onChange={e => setOnboardData({...onboardData, address: e.target.value})} placeholder="123 Main St" required />
            </div>
            <div className="input-group">
              <label>Email (Optional)</label>
              <input type="email" value={onboardData.email} onChange={e => setOnboardData({...onboardData, email: e.target.value})} placeholder="jane@example.com" />
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 24, marginBottom: 8 }}>
              <h3 style={{ margin: 0, fontSize: 16 }}>Kids (Optional)</h3>
              <label style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, cursor: 'pointer', color: 'var(--primary)', fontWeight: 600 }}>
                <input 
                  type="checkbox" 
                  checked={showFamilySection} 
                  onChange={e => {
                    const checked = e.target.checked;
                    setShowFamilySection(checked);
                    if (checked && babies.length === 0) addChild();
                  }} 
                />
                {showFamilySection ? 'Hide' : 'Show'}
              </label>
            </div>
            {showFamilySection && (
              <>
                <p style={{ color: 'var(--text-muted)', marginBottom: 16, fontSize: 13 }}>Add your child to unlock special milestones and rewards.</p>
                
                {babies.map((baby, idx) => (
              <div key={idx} className="glass-card" style={{ padding: 12, marginBottom: 12, position: 'relative' }}>
                <button type="button" onClick={() => setBabies(babies.filter((_, i) => i !== idx))} style={{ position: 'absolute', right: 12, top: 12, background: 'none', border: 'none', color: 'var(--danger)' }}>✕</button>
                <div className="input-group">
                  <label>Child #{idx + 1}'s Name *</label>
                  <input type="text" value={baby.name} onChange={e => {
                    const newBabies = [...babies];
                    newBabies[idx].name = e.target.value;
                    setBabies(newBabies);
                  }} placeholder="Baby Name" required />
                </div>
                <div style={{ display: 'flex', gap: 12 }}>
                  <div className="input-group" style={{ flex: 1 }}>
                    <label>Gender *</label>
                    <select value={baby.gender} onChange={e => {
                      const newBabies = [...babies];
                      newBabies[idx].gender = e.target.value;
                      setBabies(newBabies);
                    }} required>
                      <option value="">Select gender</option>
                      <option value="male">Boy</option>
                      <option value="female">Girl</option>
                    </select>
                  </div>
                  <div className="input-group" style={{ flex: 1 }}>
                    <label>Stage *</label>
                    <select value={baby.stageCode || ''} onChange={e => {
                      const newBabies = [...babies];
                      newBabies[idx].stageCode = e.target.value;
                      setBabies(newBabies);
                    }} required>
                      <option value="">Select stage</option>
                      <option value="NEWBORN">Newborn</option>
                      <option value="INFANT">Infant</option>
                      <option value="TODDLER">Toddler</option>
                    </select>
                  </div>
                </div>
                <div style={{ marginTop: 12 }}>
                  <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                    <label style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 13, cursor: 'pointer', margin: 0 }}>
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
                      /> DoB
                    </label>
                    <label style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 13, cursor: 'pointer', margin: 0 }}>
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
                      /> DD
                    </label>
                    <div style={{ flex: 1 }}>
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
                          required
                          style={{ padding: '8px 12px', width: '100%' }}
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
                          required
                          style={{ padding: '8px 12px', width: '100%' }}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            <button type="button" onClick={addChild} className="btn" style={{ background: 'rgba(59, 130, 246, 0.1)', color: 'var(--primary)', marginBottom: 24 }}>
              + Add Child
            </button>
          </>
        )}

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
          {!profile?.pinCode && (
            <div style={{ background: '#fffbeb', border: '1px solid #fef08a', color: '#b45309', padding: '12px 16px', borderRadius: 12, marginBottom: 24, fontSize: 14, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <strong>Security Warning:</strong> You haven't set a PIN code yet. Please set one to secure your account.
              </div>
              <button onClick={() => setActiveTab('profile')} style={{ background: 'transparent', border: '1px solid #b45309', color: '#b45309', borderRadius: 8, padding: '6px 12px', fontSize: 12, cursor: 'pointer', fontWeight: 600 }}>Set PIN</button>
            </div>
          )}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h4 style={{ color: 'var(--text-muted)', fontSize: 13 }}>
                {(() => {
                  const hour = new Date().getHours();
                  if (hour < 12) return 'Good morning,';
                  if (hour < 18) return 'Good afternoon,';
                  return 'Good evening,';
                })()}
              </h4>
              <h2>{profile?.fullName || 'Valued Bronze'} - {profile?.customerType || 'End user'}</h2>
            </div>
            <button 
              onClick={handleLogout} 
              style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
              aria-label="Logout"
            >
              <LogoutIcon />
            </button>
          </div>

          <div className="tier-card">
            <h4 style={{ color: 'rgba(255,255,255,0.7)', fontSize: 12, textTransform: 'uppercase', letterSpacing: 1 }}>Current Tier</h4>
            <h1 style={{ 
              fontSize: 32, 
              margin: '4px 0 16px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: (loyalty?.tier?.name || 'Bronze').toUpperCase() === 'GOLD' ? '#FFD700' : 'white',
              textShadow: (loyalty?.tier?.name || 'Bronze').toUpperCase() === 'GOLD' ? '0 0 10px rgba(255,215,0,0.5)' : 'none'
            }}>
              <svg viewBox="64 64 896 896" width="32" height="32" fill="currentColor"><path d="M899.6 276.5L705 396.4 518.4 147.5a8.06 8.06 0 00-12.9 0L319 396.4 124.3 276.5c-5.7-3.5-13.1 1.2-12.2 7.9L188.5 865c1.1 7.9 7.9 14 16 14h615.1c8 0 14.9-6 15.9-14l76.4-580.6c.8-6.7-6.5-11.4-12.3-7.9zM813 811H211l-59.3-451.1 144.5 89.1c5.1 3.2 11.6 1.4 14.6-4.1l199-265.4 199.1 265.4c3 4 10.3 6.9 15.4 3.7l148.6-91.8L813 811zM349.5 596.2l-9.9 22.9-24.3-5c-4.4-.9-7.9 2.5-6.9 6.9l5 24.3-22.9 9.9c-4.1 1.8-4 7.6.1 9.4l22.9 9.9-5 24.3c-.9 4.4 2.5 7.9 6.9 6.9l24.3-5 9.9 22.9c1.8 4.1 7.6 4 9.4-.1l9.9-22.9 24.3 5c4.4.9 7.9-2.5 6.9-6.9l-5-24.3 22.9-9.9c4.1-1.8 4-7.6-.1-9.4l-22.9-9.9 5-24.3c.9-4.4-2.5-7.9-6.9-6.9l-24.3 5-9.9-22.9c-1.8-4.2-7.6-4.2-9.4.1zm331-5c-4.1-1.8-9.8-1.9-11.7 2.2l-9.9 22.9-24.3-5c-4.4-.9-7.9 2.5-6.9 6.9l5 24.3-22.9 9.9c-4.1 1.8-4 7.6.1 9.4l22.9 9.9-5 24.3c-.9 4.4 2.5 7.9 6.9 6.9l24.3-5 9.9 22.9c1.8 4.1 7.6 4 9.4-.1l9.9-22.9 24.3 5c4.4.9 7.9-2.5 6.9-6.9l-5-24.3 22.9-9.9c4.1-1.8 4-7.6-.1-9.4l-22.9-9.9 5-24.3c.9-4.4-2.5-7.9-6.9-6.9l-24.3 5-9.9-22.9c-1.7-4.1-7.5-4.1-9.3 0zM512 408c-35.3 0-64 28.7-64 64s28.7 64 64 64 64-28.7 64-64-28.7-64-64-64zm0 94c-16.5 0-30-13.5-30-30s13.5-30 30-30 30 13.5 30 30-13.5 30-30 30z"></path></svg>
              {loyalty?.tier?.name || 'Bronze'}
            </h1>
            
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
                <div className="reward-image" style={reward.imageUrl ? { padding: 0, overflow: 'hidden' } : {}}>
                  {reward.imageUrl ? (
                    <img src={reward.imageUrl} alt={reward.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  ) : (
                    reward.code.includes('MUG') ? '☕' : reward.code.includes('TOTE') ? '🛍️' : '🎁'
                  )}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600, fontSize: 14, lineHeight: 1.2 }}>{reward.name}</div>
                  <div style={{ color: 'var(--primary)', fontWeight: 700, fontSize: 13, marginTop: 4 }}>{reward.pointsCost} pts</div>
                </div>
                <button 
                  className={`btn ${loyalty?.pointsBalance >= reward.pointsCost ? 'btn-primary' : 'btn-secondary'}`}
                  style={{ padding: '8px', fontSize: 13, borderRadius: 8 }}
                  disabled={loading || loyalty?.pointsBalance < reward.pointsCost}
                  onClick={() => setConfirmReward(reward)}
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
                        <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>
                          {new Date(rr.createdAt).toLocaleDateString()}
                          {rr.shipmentNo && <span> • #{rr.shipmentNo}</span>}
                        </div>
                        {rr.trackingLink && (
                          <div style={{ marginTop: 4 }}>
                            <a href={rr.trackingLink} target="_blank" rel="noopener noreferrer" style={{ fontSize: 12, color: 'var(--primary)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                              📦 Track Delivery ↗
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                    <div>
                      {(() => {
                        const isEarned = !rr.pointsSpent || rr.pointsSpent === 0;
                        const label = rr.status === 'pending' ? (isEarned ? 'earned' : 'redeemed') : rr.status;
                        const bg = rr.status === 'pending' ? (isEarned ? '#e0f2fe' : '#fef9c3') : rr.status === 'fulfilled' ? '#dcfce7' : rr.status === 'shipped' ? '#dbeafe' : '#fef9c3';
                        const fg = rr.status === 'pending' ? (isEarned ? '#0369a1' : '#854d0e') : rr.status === 'fulfilled' ? '#166534' : rr.status === 'shipped' ? '#1e40af' : '#854d0e';
                        return <span style={{ fontSize: 11, fontWeight: 700, padding: '4px 8px', borderRadius: 12, backgroundColor: bg, color: fg, textTransform: 'uppercase' }}>{label}</span>;
                      })()}
                    </div>
                  </div>
                ))}
                {profile?.orders?.map((order: any) => (
                  <div key={order.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px', background: '#f8fafc', borderRadius: '8px' }}>
                    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                      <div style={{ fontSize: 24 }}>🛍️</div>
                      <div>
                        <div style={{ fontWeight: 600, fontSize: 14 }}>{order.items?.[0]?.product?.name || `Product #${order.items?.[0]?.productId?.slice(0,6)}`}</div>
                        <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>
                          {new Date(order.createdAt).toLocaleDateString()}
                          {order.shipmentNo && <span> • #{order.shipmentNo}</span>}
                        </div>
                        {order.trackingLink && (
                          <div style={{ marginTop: 4 }}>
                            <a href={order.trackingLink} target="_blank" rel="noopener noreferrer" style={{ fontSize: 12, color: 'var(--primary)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                              📦 Track Delivery ↗
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                    <div>
                      {(() => {
                        const isEarned = order.isGwp === true;
                        const label = order.status === 'pending' ? (isEarned ? 'earned' : 'redeemed') : order.status;
                        const bg = order.status === 'pending' ? (isEarned ? '#e0f2fe' : '#fef9c3') : order.status === 'delivered' ? '#dcfce7' : order.status === 'shipped' ? '#dbeafe' : '#fef9c3';
                        const fg = order.status === 'pending' ? (isEarned ? '#0369a1' : '#854d0e') : order.status === 'delivered' ? '#166534' : order.status === 'shipped' ? '#1e40af' : '#854d0e';
                        return <span style={{ fontSize: 11, fontWeight: 700, padding: '4px 8px', borderRadius: 12, backgroundColor: bg, color: fg, textTransform: 'uppercase' }}>{label}</span>;
                      })()}
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
              {(profile?.customerType !== 'Outlet' && profile?.customerType !== 'Keyshop') && (
                <div className="input-group">
                  <label>Date of Birth</label>
                  <input 
                    type="date" 
                    value={onboardData.dateOfBirth} 
                    onChange={e => setOnboardData({...onboardData, dateOfBirth: e.target.value})} 
                    readOnly={!!profile?.dateOfBirth}
                    style={profile?.dateOfBirth ? { background: '#f1f5f9' } : {}}
                  />
                  {profile?.dateOfBirth && <div style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 4 }}>Date of birth cannot be changed after registration. Please contact support if you need to correct this.</div>}
                </div>
              )}
              <div className="input-group">
                <label>Address</label>
                <input type="text" value={onboardData.address} onChange={e => setOnboardData({...onboardData, address: e.target.value})} />
              </div>
              <div className="input-group">
                <label>Email</label>
                <input type="email" value={onboardData.email} onChange={e => setOnboardData({...onboardData, email: e.target.value})} />
              </div>
              <div className="input-group">
                <label>Change PIN Code (Optional)</label>
                <input type="password" value={pinCode} onChange={e => setPinCode(e.target.value)} placeholder="Enter new 6-digit PIN" maxLength={6} pattern="\d{6}" />
                <div style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 4 }}>Leave blank if you don't want to change it. Default is 123456.</div>
              </div>
              <button className="btn btn-primary" onClick={handleSavePersonalInfo} disabled={loading} style={{ marginTop: 8 }}>
                {loading ? 'Saving...' : 'Save Personal Info'}
              </button>
            </div>
          </div>

          {(profile?.customerType !== 'Outlet' && profile?.customerType !== 'Keyshop') && (
            <div className="glass-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                <h3 style={{ color: 'var(--primary)', margin: 0 }}>Kids ✨</h3>
                <button 
                  type="button"
                  onClick={() => {
                    const nextState = !showFamilySection;
                    setShowFamilySection(nextState);
                    if (nextState && babies.length === 0) addChild();
                  }}
                  style={{
                    padding: '6px 14px',
                    borderRadius: 20,
                    border: '1px solid var(--primary)',
                    background: showFamilySection ? 'rgba(59, 130, 246, 0.1)' : 'transparent',
                    color: 'var(--primary)',
                    fontWeight: 600,
                    fontSize: 12,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6
                  }}
                >
                  {showFamilySection ? '👁️ Hide Section' : '👁️ Show Section'}
                </button>
              </div>

              {showFamilySection ? (
                <>
                  <p style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 16 }}>Add your children's info to receive special birthday gifts and personalized rewards!</p>
                  
                  {babies.map((b, i) => (
                    <div key={i} style={{ background: 'rgba(255,255,255,0.8)', padding: 16, borderRadius: 12, marginBottom: 16, border: '1px solid #e2e8f0', position: 'relative' }}>
                      {b.id && (
                        <div style={{ position: 'absolute', top: 12, right: 40, background: '#10b981', color: 'white', padding: '4px 8px', borderRadius: 12, fontSize: 12, fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: 4 }}>
                          ✓ Saved
                        </div>
                      )}
                      {!b.id && <button type="button" onClick={() => setBabies(babies.filter((_, idx) => idx !== i))} style={{ position: 'absolute', right: 12, top: 12, background: 'none', border: 'none', color: 'var(--danger)', cursor: 'pointer', fontSize: 16 }}>✕</button>}
                      <div className="input-group">
                        <label>Child #{i + 1}'s Name *</label>
                        <input type="text" value={b.name} onChange={e => { const newB = [...babies]; newB[i].name = e.target.value; setBabies(newB); }} placeholder="Child's name" readOnly={!!b.id} style={b.id ? { background: '#f1f5f9' } : {}} required />
                      </div>
                      <div style={{ marginBottom: 16 }}>
                        <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                          <label style={{ display: 'flex', alignItems: 'center', gap: 6, fontWeight: 'normal', margin: 0 }}>
                            <input type="radio" name={`type-${i}`} checked={b.isBorn !== false} onChange={() => { const newB = [...babies]; newB[i].isBorn = true; newB[i].dueDate = ''; setBabies(newB); }} disabled={!!b.id} /> DoB
                          </label>
                          <label style={{ display: 'flex', alignItems: 'center', gap: 6, fontWeight: 'normal', margin: 0 }}>
                            <input type="radio" name={`type-${i}`} checked={b.isBorn === false} onChange={() => { const newB = [...babies]; newB[i].isBorn = false; newB[i].dateOfBirth = ''; setBabies(newB); }} disabled={!!b.id} /> DD
                          </label>
                          <div style={{ flex: 1 }}>
                            {b.isBorn !== false ? (
                              <input type="date" max={new Date().toISOString().split('T')[0]} value={b.dateOfBirth ? b.dateOfBirth.split('T')[0] : ''} onChange={e => { const newB = [...babies]; newB[i].dateOfBirth = e.target.value; setBabies(newB); }} disabled={!!b.id} style={b.id ? { background: '#f1f5f9', padding: '12px 14px', width: '100%', borderRadius: 12, border: '1px solid #cbd5e1' } : { padding: '12px 14px', width: '100%', borderRadius: 12, border: '1px solid #cbd5e1' }} required />
                            ) : (
                              <input type="date" min={new Date(Date.now() + 86400000).toISOString().split('T')[0]} value={b.dueDate ? b.dueDate.split('T')[0] : ''} onChange={e => { const newB = [...babies]; newB[i].dueDate = e.target.value; setBabies(newB); }} disabled={!!b.id} style={b.id ? { background: '#f1f5f9', padding: '12px 14px', width: '100%', borderRadius: 12, border: '1px solid #cbd5e1' } : { padding: '12px 14px', width: '100%', borderRadius: 12, border: '1px solid #cbd5e1' }} required />
                            )}
                          </div>
                        </div>
                      </div>
                      <div style={{ display: 'flex', gap: 12 }}>
                        <div className="input-group" style={{ flex: 1 }}>
                          <label>Gender *</label>
                          <select style={b.id ? { width: '100%', padding: 12, borderRadius: 12, border: '1px solid #cbd5e1', background: '#f1f5f9' } : { width: '100%', padding: 12, borderRadius: 12, border: '1px solid #cbd5e1', background: 'white' }} value={b.gender || ''} onChange={e => { const newB = [...babies]; newB[i].gender = e.target.value; setBabies(newB); }} disabled={!!b.id} required>
                            <option value="">Select gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                          </select>
                        </div>
                        <div className="input-group" style={{ flex: 1 }}>
                          <label>Stage *</label>
                          <select style={b.id ? { width: '100%', padding: 12, borderRadius: 12, border: '1px solid #cbd5e1', background: '#f1f5f9' } : { width: '100%', padding: 12, borderRadius: 12, border: '1px solid #cbd5e1', background: 'white' }} value={b.stageCode || ''} onChange={e => { const newB = [...babies]; newB[i].stageCode = e.target.value; setBabies(newB); }} disabled={!!b.id} required>
                            <option value="">Select stage</option>
                            <option value="NEWBORN">Newborn</option>
                            <option value="INFANT">Infant</option>
                            <option value="TODDLER">Toddler</option>
                          </select>
                        </div>
                      </div>
                      {b.id && <div style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 8 }}>Child information cannot be edited or deleted once saved. Please contact support.</div>}
                    </div>
                  ))}
                  
                  <div style={{ display: 'flex', gap: 12 }}>
                    <button type="button" className="btn btn-secondary" onClick={addChild} style={{ flex: 1 }}>+ Add Child</button>
                    <button type="button" className="btn btn-primary" onClick={handleSaveChildren} disabled={loading} style={{ flex: 1 }}>
                      {loading ? 'Saving...' : 'Save Kids Info'}
                    </button>
                  </div>
                </>
              ) : (
                <div style={{ padding: '16px 0', textAlign: 'center', color: 'var(--text-muted)', fontSize: 13 }}>
                  Kids section is hidden. Click <strong>"Show Section"</strong> to manage your child info.
                </div>
              )}
            </div>
          )}



          <div style={{ marginTop: 24, marginBottom: 24, textAlign: 'center' }}>
            <button className="btn" style={{ color: '#ef4444', background: 'rgba(239, 68, 68, 0.1)' }} onClick={handleLogout}>Log Out</button>
          </div>
        </div>
      )}

      {activeTab === 'support' && (
        <div className="screen fade-in">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
            <h2 style={{ fontSize: 24, margin: 0 }}>Support</h2>
            <button className="btn btn-primary" style={{ width: 'auto', padding: '8px 16px', fontSize: 13 }} onClick={() => setShowNewTicket(true)}>
              + New Ticket
            </button>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, paddingBottom: 100 }}>
            {tickets.length > 0 ? tickets.map(ticket => (
              <div key={ticket.id} className="glass-card" onClick={() => setSelectedTicket(ticket)} style={{ cursor: 'pointer' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
                  <h4 style={{ margin: 0, fontSize: 15, color: 'var(--text)', flex: 1, paddingRight: 16 }}>{ticket.subject}</h4>
                  <span style={{ 
                    fontSize: 11, padding: '2px 8px', borderRadius: 12, fontWeight: 600,
                    background: ticket.status === 'Open' ? '#e0f2fe' : ticket.status === 'Resolved' ? '#dcfce7' : '#fef9c3',
                    color: ticket.status === 'Open' ? '#0284c7' : ticket.status === 'Resolved' ? '#16a34a' : '#ca8a04'
                  }}>
                    {ticket.status}
                  </span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-muted)', fontSize: 12 }}>
                  <span>{ticket.category}</span>
                  <span>{new Date(ticket.createdAt).toLocaleDateString()}</span>
                </div>
              </div>
            )) : (
              <div style={{ textAlign: 'center', padding: 32, color: 'var(--text-muted)' }}>
                <div style={{ fontSize: 40, marginBottom: 16 }}>📨</div>
                <p>No support tickets yet.</p>
              </div>
            )}
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
        <div className={`nav-item ${activeTab === 'support' ? 'active' : ''}`} onClick={() => setActiveTab('support')}>
          <div className="nav-icon"><SupportIcon /></div>
          <span>Support</span>
        </div>
        <div className={`nav-item ${activeTab === 'profile' ? 'active' : ''}`} onClick={() => setActiveTab('profile')}>
          <div className="nav-icon"><UserIcon /></div>
          <span>Profile</span>
        </div>
      </div>

      {confirmReward && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.5)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24, backdropFilter: 'blur(4px)' }}>
          <div className="glass-card" style={{ width: '100%', maxWidth: 400, textAlign: 'center', padding: 32 }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>
              {confirmReward.imageUrl ? (
                <img src={confirmReward.imageUrl} alt={confirmReward.name} style={{ width: 80, height: 80, objectFit: 'cover', borderRadius: 12, margin: '0 auto', display: 'block' }} />
              ) : (
                confirmReward.code.includes('MUG') ? '☕' : confirmReward.code.includes('TOTE') ? '🛍️' : '🎁'
              )}
            </div>
            <h3 style={{ marginBottom: 8, fontSize: 20 }}>Confirm Redemption</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: 24, fontSize: 14 }}>
              Are you sure you want to redeem <strong>{confirmReward.name}</strong> for <strong style={{ color: 'var(--primary)' }}>{confirmReward.pointsCost} pts</strong>?
            </p>
            <div style={{ display: 'flex', gap: 12 }}>
              <button className="btn btn-secondary" onClick={() => setConfirmReward(null)} disabled={loading} style={{ flex: 1 }}>Cancel</button>
              <button className="btn btn-primary" onClick={() => handleRedeem(confirmReward)} disabled={loading} style={{ flex: 1 }}>
                {loading ? 'Redeeming...' : 'Confirm'}
              </button>
            </div>
          </div>
        </div>
      )}

      {showNewTicket && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.5)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16, backdropFilter: 'blur(4px)' }}>
          <div className="glass-card" style={{ width: '100%', maxWidth: 400, padding: 24 }}>
            <h3 style={{ marginBottom: 16, fontSize: 18 }}>Submit Support Ticket</h3>
            <form onSubmit={handleCreateTicket}>
              <div className="input-group">
                <label>Category</label>
                <select value={newTicketForm.category} onChange={e => setNewTicketForm({...newTicketForm, category: e.target.value})} required>
                  <option value="General">General Inquiry</option>
                  <option value="Reward Issue">Reward & Points Issue</option>
                  <option value="Account">Account Management</option>
                  <option value="Product Quality">Product Quality</option>
                </select>
              </div>
              <div className="input-group">
                <label>Subject</label>
                <input type="text" value={newTicketForm.subject} onChange={e => setNewTicketForm({...newTicketForm, subject: e.target.value})} placeholder="Brief summary of your issue" required />
              </div>
              <div className="input-group">
                <label>Message</label>
                <textarea rows={4} value={newTicketForm.message} onChange={e => setNewTicketForm({...newTicketForm, message: e.target.value})} placeholder="Describe your issue in detail..." required style={{ width: '100%', padding: '12px 16px', borderRadius: 12, border: '1px solid rgba(0,0,0,0.1)', background: 'white' }}></textarea>
              </div>
              <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
                <button type="button" className="btn btn-secondary" onClick={() => setShowNewTicket(false)} disabled={loading} style={{ flex: 1 }}>Cancel</button>
                <button type="submit" className="btn btn-primary" disabled={loading} style={{ flex: 1 }}>
                  {loading ? 'Submitting...' : 'Submit'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {selectedTicket && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(255,255,255,0.95)', zIndex: 9999, display: 'flex', flexDirection: 'column' }}>
          <div style={{ padding: '16px 24px', background: 'white', borderBottom: '1px solid rgba(0,0,0,0.05)', display: 'flex', alignItems: 'center', gap: 16 }}>
            <button onClick={() => setSelectedTicket(null)} style={{ background: 'none', border: 'none', fontSize: 24, cursor: 'pointer', color: 'var(--text-muted)' }}>←</button>
            <div style={{ flex: 1 }}>
              <h3 style={{ margin: 0, fontSize: 16 }}>{selectedTicket.subject}</h3>
              <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{selectedTicket.category} • {selectedTicket.status}</div>
            </div>
            {selectedTicket.status !== 'Resolved' && (
              <button 
                className="btn btn-secondary" 
                style={{ width: 'auto', padding: '6px 12px', fontSize: 12, borderColor: '#10b981', color: '#10b981' }}
                onClick={handleResolveTicket}
                disabled={loading}
              >
                ✓ Resolve
              </button>
            )}
          </div>
          
          <div style={{ flex: 1, overflowY: 'auto', padding: 24, display: 'flex', flexDirection: 'column', gap: 16 }}>
            {selectedTicket.messages?.map((msg: any, i: number) => (
              <div key={i} style={{ alignSelf: msg.sender === 'customer' ? 'flex-end' : 'flex-start', maxWidth: '85%' }}>
                <div style={{ fontSize: 11, color: 'var(--text-muted)', marginBottom: 4, marginLeft: 4 }}>
                  {msg.sender === 'customer' ? 'You' : msg.adminName || 'Support Team'} • {new Date(msg.timestamp).toLocaleString()}
                </div>
                <div style={{ 
                  background: msg.sender === 'customer' ? 'var(--primary)' : 'white',
                  color: msg.sender === 'customer' ? 'white' : 'var(--text)',
                  padding: '12px 16px',
                  borderRadius: 16,
                  boxShadow: msg.sender === 'customer' ? 'none' : '0 2px 8px rgba(0,0,0,0.05)',
                  borderBottomRightRadius: msg.sender === 'customer' ? 4 : 16,
                  borderBottomLeftRadius: msg.sender === 'customer' ? 16 : 4,
                  whiteSpace: 'pre-wrap',
                  lineHeight: 1.5
                }}>
                  {msg.message}
                </div>
              </div>
            ))}
          </div>
          
          <div style={{ padding: '16px 24px', background: 'white', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
            {selectedTicket.status === 'Resolved' ? (
              <div style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: 13, padding: 8 }}>This ticket has been marked as resolved.</div>
            ) : (
              <form onSubmit={handleReplyTicket} style={{ display: 'flex', gap: 12 }}>
                <input 
                  type="text" 
                  value={ticketReply} 
                  onChange={e => setTicketReply(e.target.value)} 
                  placeholder="Type your reply..." 
                  required
                  style={{ flex: 1, padding: '12px 16px', borderRadius: 24, border: '1px solid rgba(0,0,0,0.1)', background: '#f8fafc' }}
                />
                <button type="submit" disabled={loading || !ticketReply.trim()} style={{ background: 'var(--primary)', color: 'white', border: 'none', width: 44, height: 44, borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  ↑
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
