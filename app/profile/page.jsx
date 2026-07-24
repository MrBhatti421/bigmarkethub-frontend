'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import { userApi } from '@/lib/api';

export default function ProfilePage() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('user_token');
    if (!token) {
      router.push('/login');
      return;
    }
    userApi()
      .get('/user/me')
      .then((res) => setUser(res.data))
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

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main className="max-w-xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-extrabold mb-8">
          MY <span className="text-primary">PROFILE</span>
        </h1>

        {!user ? (
          <p className="text-gray-400">لوڈ ہو رہا ہے...</p>
        ) : (
          <div className="bg-dark-light border border-primary/20 rounded-2xl p-6 space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-primary text-black text-2xl font-bold flex items-center justify-center">
                {user.name?.charAt(0)?.toUpperCase()}
              </div>
              <div>
                <p className="font-bold text-lg">{user.name}</p>
                <p className="text-gray-400 text-sm">{user.email}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="bg-black border border-gray-800 rounded-lg p-4">
                <p className="text-gray-500 text-xs mb-1">Member Since</p>
                <p className="font-medium">
                  {user.created_at ? new Date(user.created_at).toLocaleDateString() : '—'}
                </p>
              </div>
              <div className="bg-black border border-gray-800 rounded-lg p-4">
                <p className="text-gray-500 text-xs mb-1">Account Type</p>
                <p className="font-medium">Standard User</p>
              </div>
            </div>

            <button
              onClick={handleLogout}
              className="w-full border border-primary text-primary font-semibold py-2.5 rounded-lg hover:bg-primary hover:text-black transition"
            >
              لاگ آؤٹ
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
