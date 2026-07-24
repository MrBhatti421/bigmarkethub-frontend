'use client';

import Navbar from '@/components/Navbar';

const rows = [
  { id: 1, type: 'Task Reward', detail: 'Inventory Sorting Batch #A213', amount: '+$12.00', status: 'Completed', date: 'Jul 25, 2026' },
  { id: 2, type: 'Withdrawal', detail: 'To TRC20 ****9f21', amount: '-$40.00', status: 'Processing', date: 'Jul 24, 2026' },
  { id: 3, type: 'Task Reward', detail: 'Supplier Verification #W087', amount: '+$28.00', status: 'Completed', date: 'Jul 23, 2026' },
  { id: 4, type: 'Deposit', detail: 'Wallet Top-up', amount: '+$50.00', status: 'Completed', date: 'Jul 20, 2026' },
];

const statusColor = {
  Completed: 'text-green-400 bg-green-500/10 border-green-500/30',
  Processing: 'text-yellow-400 bg-yellow-500/10 border-yellow-500/30',
  Failed: 'text-red-400 bg-red-500/10 border-red-500/30',
};

export default function HistoryPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main className="max-w-4xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-extrabold mb-2">
          TRANSACTION <span className="text-primary">HISTORY</span>
        </h1>
        <p className="text-gray-400 mb-8">آپ کے تمام لین دین اور ٹاسک کی سرگرمی۔</p>

        <div className="bg-dark-light border border-primary/20 rounded-2xl overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-gray-500 border-b border-gray-800">
                <th className="px-5 py-3 font-medium">Type</th>
                <th className="px-5 py-3 font-medium">Detail</th>
                <th className="px-5 py-3 font-medium">Amount</th>
                <th className="px-5 py-3 font-medium">Status</th>
                <th className="px-5 py-3 font-medium">Date</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.id} className="border-b border-gray-800 last:border-0">
                  <td className="px-5 py-4 font-medium">{r.type}</td>
                  <td className="px-5 py-4 text-gray-400">{r.detail}</td>
                  <td
                    className={`px-5 py-4 font-semibold ${
                      r.amount.startsWith('+') ? 'text-green-400' : 'text-red-400'
                    }`}
                  >
                    {r.amount}
                  </td>
                  <td className="px-5 py-4">
                    <span
                      className={`text-xs px-2.5 py-1 rounded-full border ${statusColor[r.status]}`}
                    >
                      {r.status}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-gray-500">{r.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
