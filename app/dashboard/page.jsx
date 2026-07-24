'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { userApi } from '@/lib/api';

export default function UserDashboardPage() {
  const router = useRouter();
  const [data, setData] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('user_token');
    if (!token) {
      router.push('/login');
      return;
    }

    userApi()
      .get('/user/dashboard')
      .then((res) => setData(res.data))
      .catch(() => {
        localStorage.removeItem('user_token');
        router.push('/login');
      });
  }, [router]);

  function handleLogout() {
    userApi()
      .post('/user/logout')
      .finally(() => {
        localStorage.removeItem('user_token');
        router.push('/login');
      });
  }

  if (!data) return <p className="text-center mt-20 text-gray-400">لوڈ ہو رہا ہے...</p>;

  return (
    <main className="max-w-3xl mx-auto p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-primary">یوزر ڈیش بورڈ</h1>
        <button
          onClick={handleLogout}
          className="px-4 py-2 rounded-lg border border-primary text-primary hover:bg-primary hover:text-black transition"
        >
          لاگ آؤٹ
        </button>
      </div>

      <p className="mb-6 text-gray-300">خوش آمدید، {data.user?.name}</p>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-dark-light border border-primary/20 rounded-xl p-4 text-center">
          <p className="text-3xl font-bold text-primary">{data.stats.my_tasks}</p>
          <p className="text-gray-400 text-sm mt-1">میرے ٹاسک</p>
        </div>
        <div className="bg-dark-light border border-primary/20 rounded-xl p-4 text-center">
          <p className="text-3xl font-bold text-primary">{data.stats.completed_tasks}</p>
          <p className="text-gray-400 text-sm mt-1">مکمل ٹاسک</p>
        </div>
        <div className="bg-dark-light border border-primary/20 rounded-xl p-4 text-center">
          <p className="text-3xl font-bold text-primary">{data.stats.pending_tasks}</p>
          <p className="text-gray-400 text-sm mt-1">زیر التوا ٹاسک</p>
        </div>
      </div>
    </main>
  );
}
