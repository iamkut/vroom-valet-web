'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const questions = [
  {
    slug: 'do-i-need-a-card',
    q: 'Do I need a card to sign up?',
    a: 'No. You register with just your name, email and phone number. A card is only needed if you choose to pay online via Paystack — and that is always optional.',
  },
  {
    slug: 'how-does-tracking-work',
    q: 'How does real-time tracking work?',
    a: 'When staff check your car in and advance it through stages (received, washing, drying, ready), your app updates instantly via push notification. No refreshing, no guessing.',
  },
  {
    slug: 'can-i-cancel',
    q: 'Can I cancel my booking?',
    a: "Yes, up to 2 hours before your slot. After that, contact the wash directly — cancellations close to the time are at the operator's discretion.",
  },
  {
    slug: 'how-do-operators-get-paid',
    q: 'How do operators get paid?',
    a: 'Operators choose how they accept payment: cash at the till, their own card machine, or online via Paystack. Vroom Valet never touches the money for cash or card-at-till payments.',
  },
  {
    slug: 'which-cities',
    q: 'Which cities are live?',
    a: 'We launch in Johannesburg, Cape Town and Durban first. More cities follow as operators onboard — check the Find a Wash page for live locations near you.',
  },
  {
    slug: 'is-it-free',
    q: 'Is the app free for customers?',
    a: 'Yes. Vroom Valet is free to download and free to use. You pay the operator for the wash, not us.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section className="section bg-white" id="faq">
      <div className="container max-w-3xl">
        <div className="text-center mb-16">
          <p className="text-brand font-semibold text-sm tracking-wider uppercase mb-3">FAQ</p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-ink tracking-tight">
            Good questions
          </h2>
        </div>

        <div className="divide-y divide-ink-line">
          {questions.map(item => (
            <div key={item.slug} id={item.slug}>
              <button
                onClick={() => setOpen(open === item.slug ? null : item.slug)}
                className="w-full flex items-center justify-between gap-4 py-5 text-left group"
                aria-expanded={open === item.slug}
                aria-controls={`answer-${item.slug}`}
              >
                <span className="font-semibold text-ink group-hover:text-brand transition-colors">
                  {item.q}
                </span>
                <span className="flex-shrink-0 text-ink-muted" aria-hidden="true">
                  {open === item.slug ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>
              {open === item.slug && (
                <p
                  id={`answer-${item.slug}`}
                  className="pb-5 text-ink-muted leading-relaxed"
                >
                  {item.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
