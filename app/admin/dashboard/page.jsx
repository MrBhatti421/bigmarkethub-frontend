'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { adminApi } from '@/lib/api';

export default function AdminDashboardPage() {
  const router = useRouter();
  const [data, setData] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('admin_token');
    if (!token) {
      router.push('/admin/login');
      return;
    }

    adminApi()
      .get('/admin/dashboard')
      .then((res) => setData(res.data))
      .catch(() => {
        localStorage.removeItem('admin_token');
        router.push('/admin/login');
      });
  }, [router]);

  function handleLogout() {
    adminApi()
      .post('/admin/logout')
      .finally(() => {
        localStorage.removeItem('admin_token');
        router.push('/admin/login');
      });
  }

  if (!data) return <p className="text-center mt-20 text-gray-400">لوڈ ہو رہا ہے...</p>;

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-56 bg-dark-light border-l border-primary/20 p-6 hidden sm:block">
        <h2 className="text-primary font-bold text-lg mb-8">BigMarketHub</h2>
        <nav className="space-y-2 text-sm">
          <p className="px-3 py-2 rounded-lg bg-primary/10 text-primary font-medium">ڈیش بورڈ</p>
          <p className="px-3 py-2 rounded-lg text-gray-400">یوزرز</p>
          <p className="px-3 py-2 rounded-lg text-gray-400">ٹاسکس</p>
          <p className="px-3 py-2 rounded-lg text-gray-400">سیٹنگز</p>
        </nav>
      </aside>

      {/* Main */}
      <main className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-primary">ایڈمن ڈیش بورڈ</h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 rounded-lg border border-primary text-primary hover:bg-primary hover:text-black transition"
          >
            لاگ آؤٹ
          </button>
        </div>

        <p className="mb-6 text-gray-300">خوش آمدید، {data.admin?.name}</p>

        <div className="grid grid-cols-3 gap-4">
          <div className="bg-dark-light border border-primary/20 rounded-xl p-4 text-center">
            <p className="text-3xl font-bold text-primary">{data.stats.total_users}</p>
            <p className="text-gray-400 text-sm mt-1">کل یوزرز</p>
          </div>
          <div className="bg-dark-light border border-primary/20 rounded-xl p-4 text-center">
            <p className="text-3xl font-bold text-primary">{data.stats.total_tasks}</p>
            <p className="text-gray-400 text-sm mt-1">کل ٹاسکس</p>
          </div>
          <div className="bg-dark-light border border-primary/20 rounded-xl p-4 text-center">
            <p className="text-3xl font-bold text-primary">{data.stats.total_projects}</p>
            <p className="text-gray-400 text-sm mt-1">کل پروجیکٹس</p>
          </div>
        </div>
      </main>
    </div>
  );
}
