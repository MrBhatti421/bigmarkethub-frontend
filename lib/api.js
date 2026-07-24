import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

// عام axios انسٹینس (بغیر ٹوکن کے کالز کے لیے، جیسے لاگ اِن)
export const publicApi = axios.create({
  baseURL: API_URL,
  headers: { 'Content-Type': 'application/json' },
});

// ایڈمن کے لیے axios انسٹینس (ٹوکن کے ساتھ)
export function adminApi() {
  const token = typeof window !== 'undefined' ? localStorage.getItem('admin_token') : null;
  return axios.create({
    baseURL: API_URL,
    headers: {
      'Content-Type': 'application/json',
      Authorization: token ? `Bearer ${token}` : '',
    },
  });
}

// یوزر کے لیے axios انسٹینس (ٹوکن کے ساتھ)
export function userApi() {
  const token = typeof window !== 'undefined' ? localStorage.getItem('user_token') : null;
  return axios.create({
    baseURL: API_URL,
    headers: {
      'Content-Type': 'application/json',
      Authorization: token ? `Bearer ${token}` : '',
    },
  });
}
