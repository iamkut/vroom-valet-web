import type { Metadata } from 'next';
import { Store, Users, LayoutList, CreditCard, Star, BarChart3 } from 'lucide-react';
import CTAButton from '@/components/CTAButton';

export const metadata: Metadata = {
  title: 'For operators — List your car wash',
  description:
    'Fill your bays. Keep your brand. Get paid your way. Vroom Valet gives car-wash operators an in-app storefront, queue management, and cash-friendly payouts.',
};

const valueProps = [
  {
    icon: Store,
    title: 'Your storefront, inside the app',
    body: 'Your brand, logo, services, and pricing — presented to every Vroom Valet customer searching near you. No separate app to maintain.',
  },
  {
    icon: LayoutList,
    title: 'Queue management',
    body: 'Staff see every booking for the day on one screen. Check cars in, advance wash stages, and mark collection — all from a tablet or phone.',
  },
  {
    icon: Users,
    title: 'Staff accounts',
    body: 'Create separate logins for each staff member. Managers see the full picture; wash staff see only what they need.',
  },
  {
    icon: CreditCard,
    title: 'Get paid your way',
    body: 'Cash at the till, your own card machine, or online via Paystack. Vroom Valet never forces a payment method — start on cash tomorrow.',
  },
  {
    icon: Star,
    title: 'Loyalty built in',
    body: 'Every completed wash earns the customer a stamp. Five stamps means a free wash from you — a loyalty programme without the plastic cards.',
  },
  {
    icon: BarChart3,
    title: 'Bookings, not guesswork',
    body: 'Know your day before it starts. Capacity caps, slot durations, and blackout dates mean the queue is yours to control.',
  },
];

const steps = [
  { n: '01', title: 'Sign up',         body: 'Create your operator account with a name, email and phone. No KYC required to start.' },
  { n: '02', title: 'Set up your wash', body: 'Add your services, set prices, upload your logo, and configure opening hours. Takes about 20 minutes.' },
  { n: '03', title: 'Go live',          body: 'Your storefront is visible to customers searching near you. First booking can land the same day.' },
];

export default function ForOperatorsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-deep-700 to-ink pt-32 pb-24 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(122,201,67,0.15),_transparent_60%)] pointer-events-none" />
        <div className="container max-w-3xl relative z-10">
          <p className="text-eco-300 font-semibold text-sm tracking-wider uppercase mb-4">For operators</p>
          <h1 className="font-display text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
            Fill your bays.<br />Keep your brand.<br />
            <span className="text-eco-300">Get paid your way.</span>
          </h1>
          <p className="text-xl text-white/75 leading-relaxed mb-10 max-w-2xl">
            One in-app storefront. A queue your staff can actually work from. Cash-friendly from day one.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <CTAButton href="/contact" variant="success" size="lg">List your business</CTAButton>
            <CTAButton href="/pricing#operators" variant="ghost-dark" size="lg">See pricing</CTAButton>
          </div>
        </div>
      </section>

      {/* Value props */}
      <section className="section bg-surface-page">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-4xl font-bold text-ink tracking-tight">Everything you need to run a digital queue</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {valueProps.map(p => {
              const Icon = p.icon;
              return (
                <div key={p.title} className="bg-white rounded-3xl p-8 border border-ink-line/50 shadow-card flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-brand-50 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-brand" strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-ink">{p.title}</h3>
                  <p className="text-ink-muted text-sm leading-relaxed">{p.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How onboarding works */}
      <section className="section bg-white">
        <div className="container max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-ink tracking-tight">From sign-up to first booking</h2>
            <p className="mt-4 text-ink-muted text-lg">No tech team needed. No KYC forms on day one.</p>
          </div>
          <div className="space-y-8">
            {steps.map(s => (
              <div key={s.n} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-eco text-white font-display font-bold flex items-center justify-center text-sm">
                  {s.n}
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-ink mb-1">{s.title}</h3>
                  <p className="text-ink-muted leading-relaxed">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Paystack note */}
      <section className="section bg-brand-50 border-y border-brand-100">
        <div className="container max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold text-ink mb-4">Paystack is opt-in. Never a gate.</h2>
          <p className="text-ink-muted leading-relaxed max-w-2xl mx-auto">
            You can run on cash and card-at-till indefinitely. Paystack is an upgrade path for operators who want
            in-app payment — available when you&apos;re ready, not required to get started. Adding it takes about
            10 minutes once you have your bank details.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-deep text-white text-center">
        <div className="container max-w-xl">
          <h2 className="font-display text-4xl font-bold mb-4">Ready to list your wash?</h2>
          <p className="text-white/70 mb-8">Fill in a short form and we&apos;ll have your storefront live within 24 hours.</p>
          <CTAButton href="/contact" variant="white" size="lg">List your business</CTAButton>
        </div>
      </section>
    </>
  );
}
