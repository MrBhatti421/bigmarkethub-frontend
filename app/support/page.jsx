'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';

export default function SupportPage() {
  const [form, setForm] = useState({ subject: '', message: '' });
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: wire to real support-ticket API later
    setSent(true);
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main className="max-w-2xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-extrabold mb-2">
          <span className="text-primary">SUPPORT</span> CENTER
        </h1>
        <p className="text-gray-400 mb-8">کوئی سوال یا مسئلہ؟ ہمیں پیغام بھیجیں۔</p>

        {sent ? (
          <div className="bg-dark-light border border-primary/20 rounded-2xl p-8 text-center">
            <p className="text-3xl mb-3">✅</p>
            <p className="font-semibold">آپ کی درخواست موصول ہو گئی</p>
            <p className="text-gray-400 text-sm mt-1">ہماری ٹیم جلد آپ سے رابطہ کرے گی۔</p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-dark-light border border-primary/20 rounded-2xl p-6 space-y-5"
          >
            <div>
              <label className="block text-xs text-gray-400 mb-1.5">SUBJECT</label>
              <input
                type="text"
                className="w-full bg-black border border-gray-700 rounded-lg px-4 py-2.5 focus:outline-none focus:border-primary"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                required
              />
            </div>
            <div>
              <label className="block text-xs text-gray-400 mb-1.5">MESSAGE</label>
              <textarea
                rows={5}
                className="w-full bg-black border border-gray-700 rounded-lg px-4 py-2.5 focus:outline-none focus:border-primary"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-black font-semibold py-3 rounded-lg hover:bg-primary-dark hover:text-white transition"
            >
              Send Message
            </button>
          </form>
        )}
      </main>
    </div>
  );
}
