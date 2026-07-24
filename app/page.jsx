import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-6 text-center px-4 bg-black">
      <h1 className="text-5xl font-extrabold text-primary tracking-tight">BigMarketHub</h1>
      <p className="text-gray-400 max-w-md">
        پروفیشنل ٹاسک مینجمنٹ پلیٹ فارم
      </p>
      <div className="flex gap-4 mt-4">
        <Link
          href="/login"
          className="px-6 py-2.5 rounded-lg bg-primary text-black font-semibold hover:bg-primary-dark hover:text-white transition"
        >
          یوزر لاگ اِن
        </Link>
        <Link
          href="/admin/login"
          className="px-6 py-2.5 rounded-lg border border-primary text-primary font-semibold hover:bg-primary hover:text-black transition"
        >
          ایڈمن لاگ اِن
        </Link>
      </div>
    </main>
  );
}
