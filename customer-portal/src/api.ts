const BASE_URL = 'http://localhost:3000/v1';

export const api = {
  identify: async (phone: string, fullName?: string) => {
    const res = await fetch(`${BASE_URL}/identify`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ phone, fullName }),
    });
    if (!res.ok) throw new Error('Identify failed');
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
  }
};
