'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { publicApi } from '@/lib/api';

export default function UserLoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const { data } = await publicApi.post('/user/login', form);
      localStorage.setItem('user_token', data.token);
      router.push('/home-panel');
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
        className="bg-dark-light border border-primary/30 shadow-xl rounded-2xl p-8 w-full max-w-sm space-y-4"
      >
        <h1 className="text-2xl font-bold text-center text-primary">یوزر لاگ اِن</h1>

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
          {loading ? 'انتظار کریں...' : 'لاگ اِن'}
        </button>

        <p className="text-center text-sm text-gray-400">
          اکاؤنٹ نہیں ہے؟{' '}
          <Link href="/register" className="text-primary hover:underline">
            رجسٹر کریں
          </Link>
        </p>
      </form>
    </main>
  );
}
