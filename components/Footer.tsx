import Link from 'next/link';
import { MessageCircle, Twitter, Instagram, Linkedin } from 'lucide-react';
import Logo from './Logo';

const product = [
  { href: '/how-it-works', label: 'How it works' },
  { href: '/find-a-wash',  label: 'Find a wash' },
  { href: '/pricing',      label: 'Pricing' },
  { href: '/blog',         label: 'Blog' },
];

const operators = [
  { href: '/for-operators',       label: 'For operators' },
  { href: '/pricing#operators',   label: 'Operator pricing' },
  { href: '/contact',             label: 'List your business' },
];

const legal = [
  { href: '/legal/terms',                label: 'Terms of service' },
  { href: '/legal/privacy',             label: 'Privacy policy' },
  { href: '/legal/paystack-disclosure', label: 'Paystack disclosure' },
  { href: '/contact',                   label: 'Contact us' },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="container py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Logo variant="reversed" size="sm" />
            <p className="mt-4 text-white/50 text-sm leading-relaxed max-w-xs">
              South Africa&apos;s car-wash marketplace. Book near you, pay how you want.
            </p>
            <div className="mt-6 flex gap-4">
              <a href="#" aria-label="Twitter / X" className="text-white/40 hover:text-white transition-colors"><Twitter size={18} /></a>
              <a href="#" aria-label="Instagram"   className="text-white/40 hover:text-white transition-colors"><Instagram size={18} /></a>
              <a href="#" aria-label="LinkedIn"    className="text-white/40 hover:text-white transition-colors"><Linkedin size={18} /></a>
              <a href="https://wa.me/27000000000" aria-label="WhatsApp" className="text-white/40 hover:text-eco transition-colors">
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <p className="text-white/40 text-xs font-semibold uppercase tracking-wider mb-5">Product</p>
            <ul className="space-y-3">
              {product.map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="text-white/70 hover:text-white text-sm transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Operators */}
          <div>
            <p className="text-white/40 text-xs font-semibold uppercase tracking-wider mb-5">For operators</p>
            <ul className="space-y-3">
              {operators.map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="text-white/70 hover:text-white text-sm transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="text-white/40 text-xs font-semibold uppercase tracking-wider mb-5">Legal</p>
            <ul className="space-y-3">
              {legal.map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="text-white/70 hover:text-white text-sm transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-white/30 text-xs">
          <p>© 2026 Vroom Valet. All rights reserved.</p>
          <p>Made with care in South Africa 🇿🇦</p>
        </div>
      </div>
    </footer>
  );
}
