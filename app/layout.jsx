import './globals.css';

export const metadata = {
  title: 'BigMarketHub',
  description: 'Professional Task Management Platform',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ur" dir="rtl">
      <body className="bg-black min-h-screen text-white">{children}</body>
    </html>
  );
}
