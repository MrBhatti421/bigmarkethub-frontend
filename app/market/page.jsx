'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';

const tabs = ['All', 'Retail Fulfillment', 'Wholesale Sourcing', 'Fast-Track Delivery'];

const tasks = [
  {
    id: 1,
    category: 'Retail Fulfillment',
    title: 'Inventory Sorting Batch #A213',
    desc: 'Sort and tag 200 inbound retail items by category and shelf location.',
    reward: '$12.00',
    duration: '~2 hrs',
    difficulty: 'Beginner',
  },
  {
    id: 2,
    category: 'Wholesale Sourcing',
    title: 'Supplier Verification #W087',
    desc: 'Verify supplier documentation and confirm bulk order pricing tiers.',
    reward: '$28.00',
    duration: '~3 hrs',
    difficulty: 'Intermediate',
  },
  {
    id: 3,
    category: 'Fast-Track Delivery',
    title: 'Order Routing Optimization #F045',
    desc: 'Review same-day delivery routes and flag scheduling conflicts.',
    reward: '$18.50',
    duration: '~1.5 hrs',
    difficulty: 'Beginner',
  },
  {
    id: 4,
    category: 'Retail Fulfillment',
    title: 'Return Processing Queue #A214',
    desc: 'Process customer return requests and update inventory records.',
    reward: '$15.00',
    duration: '~2 hrs',
    difficulty: 'Beginner',
  },
];

export default function MarketPage() {
  const [activeTab, setActiveTab] = useState('All');

  const filtered =
    activeTab === 'All' ? tasks : tasks.filter((t) => t.category === activeTab);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 py-10">
        <div className="text-center mb-8">
          <span className="inline-block bg-dark-light border border-primary/30 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-4">
            OPEN TASK BOARD
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold">
            TASK <span className="text-primary">MARKETPLACE</span>
          </h1>
          <p className="text-gray-400 mt-3">
            دستیاب ٹاسکس براؤز کریں اور اپلائی کریں — کوئی ڈپازٹ یا بیلنس شرط نہیں۔
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                activeTab === tab
                  ? 'bg-primary text-black'
                  : 'bg-dark-light text-gray-300 hover:text-primary'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Task cards */}
        <div className="grid sm:grid-cols-2 gap-5">
          {filtered.map((t) => (
            <div
              key={t.id}
              className="bg-dark-light border border-primary/20 rounded-2xl p-6 flex flex-col"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <span className="text-xs text-primary font-semibold">{t.category}</span>
                  <h3 className="font-bold text-lg mt-1">{t.title}</h3>
                </div>
                <span className="text-xs bg-green-500/10 text-green-400 border border-green-500/30 px-2 py-1 rounded-full">
                  {t.difficulty}
                </span>
              </div>

              <p className="text-sm text-gray-400 mb-5 flex-1">{t.desc}</p>

              <div className="flex items-center justify-between text-sm mb-4">
                <div>
                  <p className="text-gray-500 text-xs">Reward</p>
                  <p className="font-bold text-primary">{t.reward}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-xs">Est. Duration</p>
                  <p className="font-bold">{t.duration}</p>
                </div>
              </div>

              <button className="w-full bg-primary text-black font-semibold py-2.5 rounded-lg hover:bg-primary-dark hover:text-white transition">
                Apply for Task
              </button>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-gray-500 mt-10">اس کیٹیگری میں فی الحال کوئی ٹاسک نہیں۔</p>
        )}
      </main>
    </div>
  );
}
