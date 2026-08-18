const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:3000/v1';

async function request<T>(path: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
  });
  if (!res.ok) throw new Error(`API ${res.status}: ${await res.text()}`);
  const text = await res.text();
  return text ? JSON.parse(text) : null;
}

// Customer APIs
export const customerApi = {
  list: (params?: { cursor?: string; take?: number; search?: string }) => {
    const qs = new URLSearchParams();
    if (params?.cursor) qs.set('cursor', params.cursor);
    if (params?.take) qs.set('take', String(params.take));
    if (params?.search) qs.set('search', params.search);
    return request<{ data: any[]; nextCursor: string | null; hasMore: boolean }>(
      `/admin/customers?${qs.toString()}`
    );
  },
  get: (id: string) => request<any>(`/admin/customers/${id}`),
  updateRewardStatus: (id: string, redemptionId: string, payload: { status: string; shipmentNo?: string; trackingLink?: string }) =>
    request<any>(`/customers/${id}/reward-redemptions/${redemptionId}/status`, { method: 'PATCH', body: JSON.stringify(payload) }),
  updateOrderStatus: (id: string, orderId: string, payload: { status: string; shipmentNo?: string; trackingLink?: string }) =>
    request<any>(`/customers/${id}/orders/${orderId}/status`, { method: 'PATCH', body: JSON.stringify(payload) }),
  create: (data: any) => 
    request<any>('/admin/customers', { method: 'POST', body: JSON.stringify(data) }),
  update: (id: string, data: any) =>
    request<any>(`/customers/${id}`, { method: 'PATCH', body: JSON.stringify(data) }),
  updateStatus: (id: string, isActive: boolean) =>
    request<any>(`/admin/customers/${id}/status`, { method: 'PUT', body: JSON.stringify({ isActive }) }),
  getMetrics: (period?: string) => request<any>(`/admin/customers/metrics${period ? `?period=${period}` : ''}`),
};

// Support Ticket APIs
export const supportApi = {
  getAll: () => request<any[]>('/admin/support/tickets'),
  getByCustomer: (customerId: string) => request<any[]>(`/admin/support/tickets/customer/${customerId}`),
  updateStatus: (ticketId: string, status: string) => 
    request<any>(`/admin/support/tickets/${ticketId}`, { method: 'PATCH', body: JSON.stringify({ status }) }),
  reply: (ticketId: string, message: string, adminName: string) =>
    request<any>(`/admin/support/tickets/${ticketId}/reply`, { method: 'POST', body: JSON.stringify({ message, adminName }) }),
};

// Baby APIs
export const babyApi = {
  list: (customerId: string) => request<any[]>(`/babies/customer/${customerId}`),
  create: (data: any) => request<any>('/babies', { method: 'POST', body: JSON.stringify(data) }),
};

// Events APIs
export const eventApi = {
  ingest: (events: any[]) =>
    request<any>('/events', { method: 'POST', body: JSON.stringify({ events }) }),
};

// Condition Dictionary APIs
export const conditionDefinitionApi = {
  list: () => request<any[]>('/admin/conditions'),
  create: (data: any) => request<any>('/admin/conditions', { method: 'POST', body: JSON.stringify(data) }),
  update: (id: string, data: any) => request<any>(`/admin/conditions/${id}`, { method: 'PUT', body: JSON.stringify(data) }),
  delete: (id: string) => request<any>(`/admin/conditions/${id}`, { method: 'DELETE' }),
};

// Serial verification
export const serialApi = {
  verify: (serialCode: string) =>
    request<any>('/serials/verify', { method: 'POST', body: JSON.stringify({ serialCode }) }),
};

// Journey APIs
export const journeyApi = {
  list: () => request<any[]>('/journey/list'),
  create: (data: any) => request<any>('/journey', { method: 'POST', body: JSON.stringify(data) }),
  update: (id: string, data: any) =>
    request<any>(`/journey/${id}`, { method: 'PATCH', body: JSON.stringify(data) }),
};

// Dynamic Action APIs
export const dynamicActionApi = {
  list: () => request<any[]>('/admin/dynamic-actions'),
  get: (id: string) => request<any>(`/admin/dynamic-actions/${id}`),
  create: (data: any) =>
    request<any>('/admin/dynamic-actions', { method: 'POST', body: JSON.stringify(data) }),
  update: (id: string, data: any) =>
    request<any>(`/admin/dynamic-actions/${id}`, { method: 'PATCH', body: JSON.stringify(data) }),
  updateStatus: (id: string, status: string) =>
    request<any>(`/admin/dynamic-actions/${id}/status`, { method: 'PATCH', body: JSON.stringify({ status }) }),
  delete: (id: string) =>
    request<any>(`/admin/dynamic-actions/${id}`, { method: 'DELETE' }),
};

// Zalo OA APIs
export const zaloOAApi = {
  list: () => request<any[]>('/admin/zalo-oa'),
  get: (id: string) => request<any>(`/admin/zalo-oa/${id}`),
  create: (data: any) =>
    request<any>('/admin/zalo-oa', { method: 'POST', body: JSON.stringify(data) }),
  update: (id: string, data: any) =>
    request<any>(`/admin/zalo-oa/${id}`, { method: 'PATCH', body: JSON.stringify(data) }),
  updateStatus: (id: string, status: string) =>
    request<any>(`/admin/zalo-oa/${id}/status`, { method: 'PATCH', body: JSON.stringify({ status }) }),
  delete: (id: string) =>
    request<any>(`/admin/zalo-oa/${id}`, { method: 'DELETE' }),
};

// Zalo Mini App APIs
export const zaloMiniAppApi = {
  list: () => request<any[]>('/admin/zalo-mini-app'),
  get: (id: string) => request<any>(`/admin/zalo-mini-app/${id}`),
  create: (data: any) =>
    request<any>('/admin/zalo-mini-app', { method: 'POST', body: JSON.stringify(data) }),
  update: (id: string, data: any) =>
    request<any>(`/admin/zalo-mini-app/${id}`, { method: 'PATCH', body: JSON.stringify(data) }),
  delete: (id: string) =>
    request<any>(`/admin/zalo-mini-app/${id}`, { method: 'DELETE' }),
};

// Product APIs
export const productApi = {
  list: () => request<any[]>('/admin/products'),
};

// Loyalty APIs
export const loyaltyApi = {
  get: (customerId: string) => request<any>(`/loyalty/${customerId}`),
  getRewards: (customerId: string) => request<any[]>(`/loyalty/${customerId}/rewards`),

  // Stats
  getStats: () => request<any>('/admin/loyalty/stats'),

  // Tiers
  listTiers: () => request<any[]>('/admin/loyalty/tiers'),
  createTier: (data: any) =>
    request<any>('/admin/loyalty/tiers', { method: 'POST', body: JSON.stringify(data) }),
  updateTier: (id: string, data: any) =>
    request<any>(`/admin/loyalty/tiers/${id}`, { method: 'PATCH', body: JSON.stringify(data) }),
  deleteTier: (id: string) =>
    request<any>(`/admin/loyalty/tiers/${id}`, { method: 'DELETE' }),

  // Earn Rules
  getWelcomeRule: () => request<any>('/admin/loyalty/welcome-rule'),
  upsertWelcomeRule: (data: any) =>
    request<any>('/admin/loyalty/welcome-rule', { method: 'POST', body: JSON.stringify(data) }),
  listEarnRules: () => request<any[]>('/admin/loyalty/earn-rules'),
  createEarnRule: (data: any) =>
    request<any>('/admin/loyalty/earn-rules', { method: 'POST', body: JSON.stringify(data) }),
  updateEarnRule: (id: string, data: any) =>
    request<any>(`/admin/loyalty/earn-rules/${id}`, { method: 'PATCH', body: JSON.stringify(data) }),
  deleteEarnRule: (id: string) =>
    request<any>(`/admin/loyalty/earn-rules/${id}`, { method: 'DELETE' }),

  // Rewards
  listRewards: () => request<any[]>('/admin/loyalty/rewards'),
  createReward: (data: any) =>
    request<any>('/admin/loyalty/rewards', { method: 'POST', body: JSON.stringify(data) }),
  updateReward: (id: string, data: any) =>
    request<any>(`/admin/loyalty/rewards/${id}`, { method: 'PATCH', body: JSON.stringify(data) }),
  deleteReward: (id: string) =>
    request<any>(`/admin/loyalty/rewards/${id}`, { method: 'DELETE' }),

  // Transactions & Redemptions
  listTransactions: (take?: number) =>
    request<any[]>(`/admin/loyalty/transactions${take ? `?take=${take}` : ''}`),
  listRedemptions: (take?: number) =>
    request<any[]>(`/admin/loyalty/redemptions${take ? `?take=${take}` : ''}`),
};

// Notification APIs
export const notificationApi = {
  list: (take = 30) =>
    request<{ items: any[]; unreadCount: number }>(`/admin/notifications?take=${take}`),
  markRead: (id: string) =>
    request<any>(`/admin/notifications/${id}/read`, { method: 'PATCH' }),
  markAllRead: () =>
    request<any>('/admin/notifications/read-all', { method: 'PATCH' }),
};
