import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote:
      "I was sceptical about booking a car wash on my phone, but it just works. I drove in, watched the progress bar, and left when my phone buzzed. That's it.",
    name: 'Sipho M.',
    detail: 'Customer, Sandton',
  },
  {
    quote:
      "We went from taking walk-ins on a clipboard to a proper queue. Staff know what's coming and customers stop pacing around wondering if their car is done.",
    name: 'Fatima K.',
    detail: 'Owner, Rosebank Bay Wash',
  },
  {
    quote:
      "I pay cash every time — I don’t like apps that force you to enter a card. Vroom Valet never asked for one. I just show up and pay at the end.",
    name: 'Lungelo D.',
    detail: 'Customer, Durban North',
  },
];

export default function Testimonials() {
  return (
    <section className="section bg-surface-page">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-brand font-semibold text-sm tracking-wider uppercase mb-3">
            From the community
          </p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-ink tracking-tight">
            Real customers, real washes
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map(t => (
            <figure
              key={t.name}
              className="bg-white rounded-3xl p-8 border border-ink-line/50 shadow-card flex flex-col gap-6"
            >
              <Quote className="w-8 h-8 text-brand-200" aria-hidden="true" />
              <blockquote className="text-ink-muted leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption>
                <p className="font-semibold text-ink">{t.name}</p>
                <p className="text-ink-subtle text-sm">{t.detail}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
