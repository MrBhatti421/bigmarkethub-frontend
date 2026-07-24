'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/home-panel', label: 'Home' },
  { href: '/market', label: 'Market' },
  { href: '/wallet', label: 'Wallet' },
  { href: '/support', label: 'Support' },
  { href: '/history', label: 'History' },
  { href: '/profile', label: 'Profile' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-black/90 backdrop-blur border-b border-primary/20">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link href="/home-panel" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full border-2 border-primary flex items-center justify-center text-primary font-bold">
            B
          </div>
          <span className="hidden sm:block font-bold text-white tracking-wide">
            BigMarketHub
          </span>
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-1 bg-dark-light rounded-full px-1 py-1">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${
                  active
                    ? 'bg-primary text-black'
                    : 'text-gray-300 hover:text-primary'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <button className="text-gray-300 hover:text-primary" aria-label="Notifications">
            🔔
          </button>
          <Link
            href="/profile"
            className="w-8 h-8 rounded-full bg-primary text-black font-bold flex items-center justify-center text-sm"
          >
            U
          </Link>
        </div>
      </div>

      {/* Mobile nav */}
      <nav className="md:hidden flex overflow-x-auto gap-2 px-4 pb-3">
        {links.map((link) => {
          const active = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`whitespace-nowrap px-3 py-1.5 rounded-full text-xs font-medium ${
                active ? 'bg-primary text-black' : 'bg-dark-light text-gray-300'
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
