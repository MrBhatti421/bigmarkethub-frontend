# BigMarketHub — Frontend (Next.js)

## سیٹ اپ اسٹیپس

1. ڈیپینڈینسیز انسٹال کریں:
   ```bash
   npm install
   ```

2. `.env.local` بنائیں:
   ```bash
   cp .env.local.example .env.local
   ```
   اور بیک اینڈ API کا URL چیک کریں (ڈیفالٹ: `http://localhost:8000/api`)

3. ڈیو سرور اسٹارٹ کریں:
   ```bash
   npm run dev
   ```
   ڈیفالٹ: http://localhost:3000

## صفحات (Pages)

| روٹ                | تفصیل                  |
|---------------------|-------------------------|
| `/`                  | ہوم پیج (روٹ لنکس)      |
| `/login`             | یوزر لاگ اِن            |
| `/dashboard`         | یوزر ڈیش بورڈ (محفوظ)  |
| `/admin/login`       | ایڈمن لاگ اِن           |
| `/admin/dashboard`   | ایڈمن ڈیش بورڈ (محفوظ) |

ٹوکن `localStorage` میں `user_token` / `admin_token` کے نام سے محفوظ ہوتا ہے
اور ہر محفوظ (protected) API کال میں `Authorization: Bearer {token}` ہیڈر کے ساتھ بھیجا جاتا ہے۔
