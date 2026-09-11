import Link from 'next/link';
import AppStoreBadges from './AppStoreBadges';
import PhoneMockup from './PhoneMockup';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-to-br from-deep-700 via-deep-500 to-brand-400 pt-16">
      {/* Ambient blobs */}
      <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-brand-300/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -left-32 w-[500px] h-[500px] rounded-full bg-eco-500/10 blur-3xl pointer-events-none" />

      <div className="container relative z-10 grid lg:grid-cols-2 gap-16 items-center pt-6 pb-20 lg:pt-10 lg:pb-28">
        {/* Copy */}
        <div>
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-sm px-4 py-2 rounded-full mb-8">
            🇿🇦 South Africa&apos;s car-wash marketplace
          </div>

          <h1 className="font-display text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.05] tracking-tight">
            Your car,<br />
            washed.<br />
            <span className="text-eco-300">Your way.</span>
          </h1>

          <p className="mt-6 text-lg lg:text-xl text-white/75 max-w-lg leading-relaxed">
            Book a wash near you. Watch it happen in real time.
            Pay in cash, at the till, or online — your call.
          </p>

          <div className="mt-10">
            <AppStoreBadges />
          </div>

          <p className="mt-6 text-white/50 text-sm">
            Run a car wash?{' '}
            <Link
              href="/for-operators"
              className="text-eco-300 hover:text-eco transition-colors font-medium underline-offset-4 hover:underline"
            >
              List your business →
            </Link>
          </p>
        </div>

        {/* Phone */}
        <div className="flex justify-center lg:justify-end">
          <PhoneMockup />
        </div>
      </div>

      {/* Wave into next section */}
      <div className="absolute bottom-0 inset-x-0 pointer-events-none">
        <svg
          viewBox="0 0 1440 80"
          className="w-full fill-surface-page"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" />
        </svg>
      </div>
    </section>
  );
}
