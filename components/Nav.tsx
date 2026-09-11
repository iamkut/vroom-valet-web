'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import CTAButton from './CTAButton';

const links = [
  { href: '/how-it-works', label: 'How it works' },
  { href: '/for-operators', label: 'For operators' },
  { href: '/find-a-wash', label: 'Find a wash' },
  { href: '/pricing', label: 'Pricing' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/85 backdrop-blur-md border-b border-ink-line/40 shadow-sm">
      <nav className="container flex h-16 items-center justify-between">
        <Link href="/" aria-label="Vroom Valet home" className="flex-shrink-0">
          <Image
            src="/logo-wordmark.png"
            alt="Vroom Valet"
            width={188}
            height={36}
            className="h-9 w-auto"
            priority
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-ink-muted hover:text-ink transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:block flex-shrink-0">
          <CTAButton href="#get-the-app" variant="primary" size="sm">
            Get the app
          </CTAButton>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded-xl text-ink-muted hover:bg-surface-sunken transition-colors"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-white border-t border-ink-line">
          <div className="container py-5 flex flex-col gap-1">
            {links.map(l => (
              <Link
                key={l.href}
                href={l.href}
                className="text-ink-muted hover:text-ink py-3 text-sm font-medium border-b border-ink-line/50 last:border-0"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <CTAButton href="#get-the-app" className="mt-3 justify-center w-full">
              Get the app
            </CTAButton>
          </div>
        </div>
      )}
    </header>
  );
}
