'use client';

import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Carousel from '@/components/Carousel';
import { userApi } from '@/lib/api';

const slides = [
  { label: 'RETAIL FULFILLMENT', className: 'bg-gradient-to-br from-orange-500 to-yellow-400 text-black' },
  { label: 'WHOLESALE SOURCING', className: 'bg-gradient-to-br from-gray-800 to-black text-primary border border-primary/40' },
  { label: 'FAST-TRACK DELIVERY', className: 'bg-gradient-to-br from-red-600 to-orange-600 text-white' },
];

const categories = [
  {
    id: 1,
    title: 'Retail Fulfillment',
    desc: 'Tasks related to inventory sorting, order packing, and large-scale retail logistics.',
  },
  {
    id: 2,
    title: 'Wholesale Sourcing',
    desc: 'Tasks around supplier coordination, bulk order tracking, and wholesale trade support.',
  },
  {
    id: 3,
    title: 'Fast-Track Delivery',
    desc: 'Tasks focused on real-time order processing and quick-turnaround fulfillment.',
  },
];

export default function HomePanelPage() {
  const [name, setName] = useState('');
  const [activity, setActivity] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('user_token');
    if (!token) return;

    userApi()
      .get('/user/dashboard')
      .then((res) => setName(res.data.user?.name || ''))
      .catch(() => {});

    // Placeholder recent-activity feed — replace with real backend data later
    setActivity([
      { id: 1, type: 'Task Completed', detail: 'Retail Fulfillment #A213', time: '2 min ago' },
      { id: 2, type: 'Task Assigned', detail: 'Wholesale Sourcing #W087', time: '10 min ago' },
      { id: 3, type: 'Task Completed', detail: 'Fast-Track Delivery #F045', time: '25 min ago' },
      { id: 4, type: 'Team Update', detail: 'New member joined your team', time: '1 hr ago' },
    ]);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 py-10">
        {/* Hero */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-5xl font-extrabold">
            <span className="text-primary">WELCOME BACK</span>
            {name ? `, ${name.toUpperCase()}` : ''}
          </h1>
          <p className="text-gray-400 mt-3 max-w-xl mx-auto">
            اپنے ٹاسکس مینج کریں، اپنی ٹیم دیکھیں اور اپنی پیش رفت ٹریک کریں۔
          </p>
        </div>

        {/* Quick actions */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          <a href="/wallet" className="bg-dark-light border border-primary/20 rounded-xl p-5 text-center hover:border-primary transition">
            <div className="text-3xl mb-2">💰</div>
            <p className="font-bold">Wallet</p>
            <p className="text-xs text-gray-400">Deposit / Withdraw</p>
          </a>
          <a href="/history" className="bg-dark-light border border-primary/20 rounded-xl p-5 text-center hover:border-primary transition">
            <div className="text-3xl mb-2">📜</div>
            <p className="font-bold">History</p>
            <p className="text-xs text-gray-400">Past Activity</p>
          </a>
          <a href="/market" className="bg-dark-light border border-primary/20 rounded-xl p-5 text-center hover:border-primary transition">
            <div className="text-3xl mb-2">🧑‍🤝‍🧑</div>
            <p className="font-bold">Team</p>
            <p className="text-xs text-gray-400">My Network</p>
          </a>
          <a href="/support" className="bg-dark-light border border-primary/20 rounded-xl p-5 text-center hover:border-primary transition">
            <div className="text-3xl mb-2">🎧</div>
            <p className="font-bold">Support</p>
            <p className="text-xs text-gray-400">Get Help</p>
          </a>
        </div>

        {/* Carousel */}
        <Carousel slides={slides} />

        {/* Recent activity */}
        <div className="mt-14">
          <h2 className="text-2xl font-bold text-center mb-6">
            <span className="text-primary">RECENT</span> ACTIVITY
          </h2>
          <div className="bg-dark-light border border-primary/20 rounded-2xl p-4 max-w-2xl mx-auto">
            <div className="flex items-center justify-between mb-3 text-xs text-gray-400">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
                Live team activity
              </span>
              <span>Refreshes automatically</span>
            </div>
            <div className="divide-y divide-gray-800">
              {activity.map((a) => (
                <div key={a.id} className="flex justify-between py-3">
                  <div>
                    <p className="font-medium">{a.type}</p>
                    <p className="text-sm text-gray-400">{a.detail}</p>
                  </div>
                  <span className="text-xs text-gray-500">{a.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Category intro */}
        <div className="mt-14">
          <h2 className="text-2xl font-bold text-center mb-6">Task Categories</h2>
          <div className="grid sm:grid-cols-3 gap-5">
            {categories.map((c) => (
              <div
                key={c.id}
                className="bg-dark-light border border-primary/20 rounded-2xl p-5 flex flex-col"
              >
                <span className="w-7 h-7 rounded-full bg-primary text-black text-sm font-bold flex items-center justify-center mb-4">
                  {c.id}
                </span>
                <h3 className="font-bold mb-2">{c.title}</h3>
                <p className="text-sm text-gray-400 mb-4 flex-1">{c.desc}</p>
                <a href="/market" className="text-primary text-sm font-medium hover:underline">
                  View Tasks →
                </a>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
