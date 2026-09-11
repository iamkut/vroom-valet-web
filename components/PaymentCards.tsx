import { Banknote, CreditCard, Smartphone } from 'lucide-react';

const payments = [
  {
    icon: Banknote,
    title: 'Cash',
    description:
      'Pay the operator directly at the till when you collect your car. Nothing upfront, no card needed — ever.',
    badge: 'Always available',
    badgeClass: 'bg-eco-50 text-eco-700',
  },
  {
    icon: CreditCard,
    title: 'Card at the till',
    description:
      "Swipe on the operator's own card machine. Vroom Valet never touches your card details.",
    badge: 'Always available',
    badgeClass: 'bg-eco-50 text-eco-700',
  },
  {
    icon: Smartphone,
    title: 'Pay online',
    description:
      'Pay upfront in the app via Paystack. Secure and instant — only where operators choose to offer it.',
    badge: 'Where operators enable it',
    badgeClass: 'bg-brand-50 text-brand-700',
  },
];

export default function PaymentCards() {
  return (
    <section className="section bg-white">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-eco font-semibold text-sm tracking-wider uppercase mb-3">Flexible by design</p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-ink tracking-tight">
            Pay how the wash works.
          </h2>
          <p className="mt-4 text-ink-muted text-lg leading-relaxed">
            Cash at the till, your own card machine, or online — the operator chooses what fits their business. You choose what fits yours.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {payments.map(p => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="bg-surface-page rounded-3xl p-8 border border-ink-line/50 flex flex-col gap-5 hover:shadow-card transition-shadow"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-50 flex items-center justify-center">
                  <Icon className="w-7 h-7 text-brand" strokeWidth={1.5} aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl font-bold text-ink mb-2">{p.title}</h3>
                  <p className="text-ink-muted text-sm leading-relaxed">{p.description}</p>
                </div>
                <span className={`self-start text-xs font-semibold px-3 py-1.5 rounded-full ${p.badgeClass}`}>
                  {p.badge}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
