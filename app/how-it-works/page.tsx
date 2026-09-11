import type { Metadata } from 'next';
import { MapPin, CalendarCheck, Eye, KeyRound, Bell, Star } from 'lucide-react';
import CTAButton from '@/components/CTAButton';
import AppStoreBadges from '@/components/AppStoreBadges';

export const metadata: Metadata = {
  title: 'How it works',
  description:
    'Book a wash, track it in real time, and collect when ready. Here is exactly how Vroom Valet works for customers.',
};

const steps = [
  {
    icon: MapPin,
    step: '01',
    title: 'Find a wash near you',
    body: 'Browse operators on the map or search by area. Each listing shows services, pricing, available slots, and real reviews. Filter by service type — bay wash, cleaning area, or crew-to-vehicle.',
  },
  {
    icon: CalendarCheck,
    step: '02',
    title: 'Book your slot',
    body: 'Pick your service, choose a time that works, and confirm. A returning customer with one car at one site sees just two steps. Done in under a minute — no phone call, no walking up to ask.',
  },
  {
    icon: Eye,
    step: '03',
    title: 'Track it in real time',
    body: 'Once your car is checked in, watch it move through stages — Received → Washing → Drying → Ready. Push notifications mean you never have to hover near the bay.',
  },
  {
    icon: KeyRound,
    step: '04',
    title: 'Collect and pay',
    body: 'Your phone tells you when the car is done. Pay in cash, swipe on the operator\'s card machine, or settle online via Paystack if the operator offers it. No surprises.',
  },
  {
    icon: Bell,
    step: '05',
    title: 'Get notified',
    body: 'Push alerts at every stage, plus an email when the car is ready for collection. Web customers get email — the important message always reaches you.',
  },
  {
    icon: Star,
    step: '06',
    title: 'Earn loyalty stamps',
    body: 'Every completed wash earns a stamp. Five stamps unlock a free wash reward — redeemable at any wash you use. The counter lives in the app, not on a paper card that gets lost.',
  },
];

export default function HowItWorksPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-deep-700 to-brand-400 pt-32 pb-20 text-white">
        <div className="container max-w-3xl text-center">
          <h1 className="font-display text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            How Vroom Valet works
          </h1>
          <p className="text-xl text-white/75 leading-relaxed">
            From spotting a wash to driving away clean — the whole journey, step by step.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="section bg-surface-page">
        <div className="container max-w-4xl">
          <div className="space-y-16">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={s.step} className={`flex gap-8 items-start ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className="flex-shrink-0 w-20 h-20 rounded-3xl bg-white border border-ink-line shadow-card flex items-center justify-center">
                    <Icon className="w-9 h-9 text-brand" strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <div className="flex-1 pt-1">
                    <p className="text-brand font-bold text-sm mb-1">{s.step}</p>
                    <h2 className="font-display text-2xl font-bold text-ink mb-3">{s.title}</h2>
                    <p className="text-ink-muted leading-relaxed">{s.body}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-white text-center">
        <div className="container max-w-xl">
          <h2 className="font-display text-3xl font-bold text-ink mb-4">Ready to try it?</h2>
          <p className="text-ink-muted mb-8">Download the app and book your first wash. No card required to sign up.</p>
          <AppStoreBadges className="justify-center" />
        </div>
      </section>
    </>
  );
}
