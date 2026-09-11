import { MapPin, CalendarCheck, Eye, KeyRound } from 'lucide-react';

const steps = [
  {
    icon: MapPin,
    title: 'Find',
    description: 'Browse car washes near you on the map. Filter by service, price, and availability.',
  },
  {
    icon: CalendarCheck,
    title: 'Book',
    description: 'Pick your service, choose a slot, and confirm. Done in under a minute.',
  },
  {
    icon: Eye,
    title: 'Track',
    description: "Watch your wash move through stages in real time. No guessing when it's done.",
  },
  {
    icon: KeyRound,
    title: 'Collect',
    description: 'Your phone tells you when the car is ready. Pay how you want, then drive away.',
  },
];

export default function StepList() {
  return (
    <section className="section bg-surface-page">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-brand font-semibold text-sm tracking-wider uppercase mb-3">
            Simple by design
          </p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-ink tracking-tight">
            From street to shine<br className="hidden sm:block" /> in four steps
          </h2>
        </div>

        <div className="relative grid md:grid-cols-4 gap-10 lg:gap-12">
          {/* Connector (desktop) */}
          <div
            className="hidden md:block absolute top-10 h-px bg-ink-line"
            style={{ left: 'calc(12.5% + 2.5rem)', right: 'calc(12.5% + 2.5rem)' }}
            aria-hidden="true"
          />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="relative flex flex-col items-center text-center gap-4">
                <div className="relative flex items-center justify-center w-20 h-20 rounded-3xl bg-white border border-ink-line shadow-card">
                  <Icon className="w-8 h-8 text-brand" strokeWidth={1.5} aria-hidden="true" />
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-brand text-white text-xs font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-ink">{step.title}</h3>
                <p className="text-ink-muted text-sm leading-relaxed">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
