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
  return res.json();
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
  get: (id: string) => request<any>(`/customers/${id}`),
  create: (data: any) => 
    request<any>('/admin/customers', { method: 'POST', body: JSON.stringify(data) }),
  update: (id: string, data: any) =>
    request<any>(`/customers/${id}`, { method: 'PATCH', body: JSON.stringify(data) }),
};

// Loyalty APIs
export const loyaltyApi = {
  get: (customerId: string) => request<any>(`/loyalty/${customerId}`),
  getRewards: (customerId: string) => request<any[]>(`/loyalty/${customerId}/rewards`),
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

// Serial verification
export const serialApi = {
  verify: (serialCode: string) =>
    request<any>('/serials/verify', { method: 'POST', body: JSON.stringify({ serialCode }) }),
};
