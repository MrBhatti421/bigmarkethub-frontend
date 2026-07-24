'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';

export default function WalletPage() {
  const [form, setForm] = useState({
    walletName: '',
    address: '',
    holderName: '',
  });
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setError('');

    if (!form.walletName || !form.address || !form.holderName) {
      setError('براہ کرم تمام فیلڈز پُر کریں۔');
      return;
    }

    // TODO: replace with real API call once wallet backend is built
    setSaved(true);
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main className="max-w-2xl mx-auto px-6 py-10">
        <span className="inline-block bg-dark-light border border-primary/30 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-4">
          SECURITY REGISTRY
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-2">
          WITHDRAWAL <span className="text-primary">WALLET</span>
        </h1>
        <p className="text-gray-400 mb-8">
          اپنا USDT (TRC20) نکالنے والا والیٹ محفوظ کریں۔
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-dark-light border border-primary/20 rounded-2xl p-6 space-y-5"
        >
          {saved && (
            <div className="bg-green-500/10 border border-green-500/30 text-green-400 text-sm rounded-lg px-4 py-3">
              ✅ والیٹ کامیابی سے محفوظ ہو گیا۔ آپ اسے بعد میں سیٹنگز سے اپڈیٹ کر سکتے ہیں۔
            </div>
          )}
          {error && (
            <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-sm rounded-lg px-4 py-3">
              {error}
            </div>
          )}

          <div>
            <label className="block text-xs text-gray-400 mb-1.5">WALLET NAME</label>
            <input
              type="text"
              placeholder="e.g. My USDT Wallet"
              className="w-full bg-black border border-gray-700 rounded-lg px-4 py-2.5 focus:outline-none focus:border-primary"
              value={form.walletName}
              onChange={(e) => setForm({ ...form, walletName: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-xs text-gray-400 mb-1.5">VIRTUAL CURRENCY PROTOCOL</label>
            <div className="w-full bg-black border border-primary/40 rounded-lg px-4 py-2.5 flex items-center justify-between">
              <span className="font-semibold">TRC20 (TRON Network)</span>
              <span className="text-xs text-primary">✓ Selected</span>
            </div>
            <p className="text-xs text-gray-500 mt-1.5">
              فی الحال صرف TRC20 (USDT) سپورٹ کیا جاتا ہے۔
            </p>
          </div>

          <div>
            <label className="block text-xs text-gray-400 mb-1.5">WALLET ADDRESS</label>
            <input
              type="text"
              placeholder="Paste your TRC20 USDT address"
              className="w-full bg-black border border-gray-700 rounded-lg px-4 py-2.5 focus:outline-none focus:border-primary font-mono text-sm"
              value={form.address}
              onChange={(e) => setForm({ ...form, address: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-xs text-gray-400 mb-1.5">HOLDER NAME</label>
            <input
              type="text"
              placeholder="Full legal name"
              className="w-full bg-black border border-gray-700 rounded-lg px-4 py-2.5 focus:outline-none focus:border-primary"
              value={form.holderName}
              onChange={(e) => setForm({ ...form, holderName: e.target.value })}
            />
          </div>

          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg px-4 py-3 text-sm text-yellow-400">
            ⚠️ ایڈریس کو دو بار چیک کریں۔ غلط والیٹ ایڈریس پر بھیجی گئی رقم واپس نہیں آ سکتی۔
            ضرورت پڑنے پر آپ سیٹنگز سے یہ والیٹ بعد میں تبدیل کر سکتے ہیں۔
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-black font-semibold py-3 rounded-lg hover:bg-primary-dark hover:text-white transition"
          >
            Save Wallet
          </button>
        </form>
      </main>
    </div>
  );
}
