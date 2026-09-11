import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Vroom Valet — Book a car wash near you',
    template: '%s | Vroom Valet',
  },
  description:
    "Book a car wash near you. Watch it happen. Pay in cash, at the till, or online. South Africa's car-wash marketplace.",
  metadataBase: new URL('https://www.vroomvalet.co.za'),
  icons: { icon: '/favicon.png' },
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    url: 'https://www.vroomvalet.co.za',
    siteName: 'Vroom Valet',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-ZA" className={`${inter.variable} ${outfit.variable}`}>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
