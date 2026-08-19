const BASE_URL = 'http://localhost:3000/v1';

export const api = {
  identify: async (phone: string, pinCode?: string, fullName?: string, userAgent?: string) => {
    const res = await fetch(`${BASE_URL}/identify`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ phone, pinCode, fullName, userAgent, source: 'Portal' }),
    });
    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      throw new Error(errorData.message || 'Identify failed');
    }
    const text = await res.text();
    return text ? JSON.parse(text) : null;
  },

  getProfile: async (customerId: string) => {
    const res = await fetch(`${BASE_URL}/customers/${customerId}`);
    if (!res.ok) throw new Error('Failed to fetch profile');
    const text = await res.text();
    return text ? JSON.parse(text) : null;
  },

  updateProfile: async (customerId: string, data: any) => {
    const res = await fetch(`${BASE_URL}/customers/${customerId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error('Failed to update profile');
    const text = await res.text();
    return text ? JSON.parse(text) : null;
  },

  getLoyalty: async (customerId: string) => {
    const res = await fetch(`${BASE_URL}/loyalty/${customerId}`);
    if (!res.ok) throw new Error('Failed to fetch loyalty account');
    const text = await res.text();
    return text ? JSON.parse(text) : null;
  },

  getRewards: async (customerId: string) => {
    const res = await fetch(`${BASE_URL}/loyalty/${customerId}/rewards`);
    if (!res.ok) throw new Error('Failed to fetch rewards');
    const text = await res.text();
    return text ? JSON.parse(text) : [];
  },

  redeemReward: async (customerId: string, rewardCode: string) => {
    const idempotencyKey = `redeem-${Date.now()}`;
    const res = await fetch(`${BASE_URL}/loyalty/${customerId}/redeem`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ rewardCode, idempotencyKey }),
    });
    const data = await res.json();
    if (data.error) throw new Error(data.error);
    return data;
  },

  // Support Tickets
  getTickets: async (customerId: string) => {
    const res = await fetch(`${BASE_URL}/support/tickets/customer/${customerId}`);
    if (!res.ok) throw new Error('Failed to fetch tickets');
    return res.json();
  },
  createTicket: async (customerId: string, subject: string, category: string, message: string) => {
    const res = await fetch(`${BASE_URL}/support/tickets`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ customerId, subject, category, message }),
    });
    if (!res.ok) throw new Error('Failed to create ticket');
    return res.json();
  },
  replyTicket: async (ticketId: string, message: string) => {
    const res = await fetch(`${BASE_URL}/support/tickets/${ticketId}/reply`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message }),
    });
    if (!res.ok) throw new Error('Failed to send reply');
    return res.json();
  },
  resolveTicket: async (ticketId: string) => {
    const res = await fetch(`${BASE_URL}/support/tickets/${ticketId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: 'Resolved' }),
    });
    if (!res.ok) throw new Error('Failed to resolve ticket');
    return res.json();
  }
};
