'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { publicApi } from '@/lib/api';

export default function AdminLoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const { data } = await publicApi.post('/admin/login', form);
      localStorage.setItem('admin_token', data.token);
      router.push('/admin/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'کچھ غلط ہو گیا، دوبارہ کوشش کریں');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex items-center justify-center min-h-screen px-4 bg-black">
      <form
        onSubmit={handleSubmit}
        className="bg-dark-light border border-primary/40 shadow-[0_0_25px_rgba(249,115,22,0.15)] rounded-2xl p-8 w-full max-w-sm space-y-4"
      >
        <h1 className="text-2xl font-bold text-center text-primary">ایڈمن پینل</h1>
        <p className="text-center text-gray-500 text-xs -mt-2">صرف مجاز افراد کے لیے</p>

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        <input
          type="email"
          placeholder="ای میل"
          className="w-full bg-black border border-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:border-primary"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <input
          type="password"
          placeholder="پاس ورڈ"
          className="w-full bg-black border border-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:border-primary"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-primary text-black font-semibold py-2 rounded-lg hover:bg-primary-dark hover:text-white transition disabled:opacity-50"
        >
          {loading ? 'انتظار کریں...' : 'ایڈمن لاگ اِن'}
        </button>
      </form>
    </main>
  );
}
