import type { Metadata } from 'next';
import { Check } from 'lucide-react';
import CTAButton from '@/components/CTAButton';

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Vroom Valet is free for customers. Operators pay a flat monthly subscription — no hidden fees, no forced card on day one.',
};

const operatorTiers = [
  {
    name: 'Starter',
    price: 'R 249',
    period: '/mo per site',
    description: 'Everything you need to go digital tomorrow.',
    features: [
      'In-app storefront',
      'Unlimited bookings',
      'Queue management',
      'Staff accounts (up to 5)',
      'Cash + card-at-till payments',
      'Basic loyalty (stamp card)',
      'Email booking confirmations',
    ],
    cta: 'Get started',
    href: '/contact',
    highlight: false,
  },
  {
    name: 'Growth',
    price: 'R 549',
    period: '/mo per site',
    description: 'Add Paystack and unlock the full platform.',
    features: [
      'Everything in Starter',
      'Paystack in-app payments',
      'Platform take-rate: 2.5% on Paystack transactions',
      'Unlimited staff accounts',
      'SMS notifications (operator-controlled)',
      'Promo codes',
      'Priority support',
    ],
    cta: 'Get started',
    href: '/contact',
    highlight: true,
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-surface-page to-white pt-32 pb-4">
        <div className="container text-center max-w-2xl">
          <h1 className="font-display text-5xl lg:text-6xl font-bold text-ink tracking-tight mb-4">
            Simple, honest pricing
          </h1>
          <p className="text-ink-muted text-xl leading-relaxed">
            Free for customers. A flat monthly fee for operators — no surprise charges.
          </p>
        </div>
      </section>

      {/* Customer = free */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-sm mx-auto bg-eco-50 border border-eco-200 rounded-3xl p-10 text-center mb-20">
            <p className="text-eco font-semibold text-sm tracking-wider uppercase mb-3">For customers</p>
            <p className="font-display text-6xl font-bold text-ink mb-2">Free</p>
            <p className="text-ink-muted">Always. No subscription, no hidden fees. You pay the operator for the wash — we charge nothing on top.</p>
          </div>

          {/* Operator tiers */}
          <div id="operators" className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-brand font-semibold text-sm tracking-wider uppercase mb-3">For operators</p>
            <h2 className="font-display text-4xl font-bold text-ink tracking-tight">
              Pick the tier that fits where you are today
            </h2>
            <p className="mt-4 text-ink-muted">
              Paystack fees are pass-through — we never mark them up. The 2.5% platform take only applies to Paystack-routed transactions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {operatorTiers.map(tier => (
              <div
                key={tier.name}
                className={`rounded-3xl p-8 border flex flex-col gap-6 ${
                  tier.highlight
                    ? 'bg-deep border-deep text-white shadow-lifted'
                    : 'bg-white border-ink-line shadow-card'
                }`}
              >
                <div>
                  <p className={`font-semibold text-sm uppercase tracking-wider mb-1 ${tier.highlight ? 'text-brand-200' : 'text-brand'}`}>
                    {tier.name}
                  </p>
                  <div className="flex items-end gap-1 mb-2">
                    <span className={`font-display text-4xl font-bold ${tier.highlight ? 'text-white' : 'text-ink'}`}>
                      {tier.price}
                    </span>
                    <span className={`text-sm mb-1 ${tier.highlight ? 'text-white/60' : 'text-ink-muted'}`}>
                      {tier.period}
                    </span>
                  </div>
                  <p className={`text-sm ${tier.highlight ? 'text-white/70' : 'text-ink-muted'}`}>
                    {tier.description}
                  </p>
                </div>

                <ul className="space-y-3 flex-1">
                  {tier.features.map(f => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <Check
                        size={16}
                        className={`flex-shrink-0 mt-0.5 ${tier.highlight ? 'text-eco-300' : 'text-eco'}`}
                        aria-hidden="true"
                      />
                      <span className={tier.highlight ? 'text-white/85' : 'text-ink-muted'}>{f}</span>
                    </li>
                  ))}
                </ul>

                <CTAButton
                  href={tier.href}
                  variant={tier.highlight ? 'white' : 'primary'}
                  className="justify-center"
                >
                  {tier.cta}
                </CTAButton>
              </div>
            ))}
          </div>

          <p className="text-center text-ink-subtle text-sm mt-8">
            Prices exclude VAT. Billed monthly via Paystack card-on-file.
          </p>
        </div>
      </section>
    </>
  );
}
