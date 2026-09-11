'use client';

import type { Metadata } from 'next';
import { useState } from 'react';
import { MessageCircle, Mail, Send } from 'lucide-react';

// Note: metadata export only works in Server Components. Contact form is client-only,
// so metadata is declared in a separate layout or the parent.

type Enquiry = 'customer' | 'operator' | 'other';

export default function ContactPage() {
  const [enquiry, setEnquiry] = useState<Enquiry>('customer');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    const res = await fetch('/api/lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    setStatus(res.ok ? 'sent' : 'error');
  }

  return (
    <>
      <section className="bg-gradient-to-b from-surface-page to-white pt-32 pb-12">
        <div className="container max-w-2xl text-center">
          <h1 className="font-display text-5xl font-bold text-ink tracking-tight mb-4">Get in touch</h1>
          <p className="text-ink-muted text-lg leading-relaxed">
            Whether you want to list your wash, ask a question, or just say hello — we read every message.
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container max-w-2xl">
          {status === 'sent' ? (
            <div className="text-center py-16">
              <div className="w-16 h-16 rounded-3xl bg-eco-50 flex items-center justify-center mx-auto mb-6">
                <Send className="w-8 h-8 text-eco" aria-hidden="true" />
              </div>
              <h2 className="font-display text-2xl font-bold text-ink mb-3">Message sent</h2>
              <p className="text-ink-muted">We will get back to you within one business day.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Enquiry type */}
              <div>
                <label className="block text-sm font-semibold text-ink mb-3">I am a…</label>
                <div className="flex gap-3 flex-wrap">
                  {(['customer', 'operator', 'other'] as Enquiry[]).map(t => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setEnquiry(t)}
                      className={`px-4 py-2 rounded-2xl text-sm font-semibold border transition-all ${
                        enquiry === t
                          ? 'bg-brand text-white border-brand'
                          : 'bg-white text-ink-muted border-ink-line hover:border-brand hover:text-brand'
                      }`}
                    >
                      {t.charAt(0).toUpperCase() + t.slice(1)}
                    </button>
                  ))}
                </div>
                <input type="hidden" name="enquiry" value={enquiry} />
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-ink mb-2">Name</label>
                  <input
                    id="name" name="name" type="text" required
                    className="w-full border border-ink-line rounded-2xl px-4 py-3 text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-ink mb-2">Email</label>
                  <input
                    id="email" name="email" type="email" required
                    className="w-full border border-ink-line rounded-2xl px-4 py-3 text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              {enquiry === 'operator' && (
                <div>
                  <label htmlFor="business" className="block text-sm font-semibold text-ink mb-2">Business name</label>
                  <input
                    id="business" name="business" type="text"
                    className="w-full border border-ink-line rounded-2xl px-4 py-3 text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
                    placeholder="Name of your car wash"
                  />
                </div>
              )}

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-ink mb-2">Message</label>
                <textarea
                  id="message" name="message" required rows={5}
                  className="w-full border border-ink-line rounded-2xl px-4 py-3 text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent resize-none"
                  placeholder="Tell us what you need…"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-brand text-white rounded-3xl py-4 font-semibold text-base hover:bg-brand-600 transition-colors disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
              >
                {status === 'sending' ? 'Sending…' : 'Send message'}
              </button>

              {status === 'error' && (
                <p className="text-danger-500 text-sm text-center">Something went wrong — please try again or email us directly.</p>
              )}
            </form>
          )}

          <div className="mt-12 pt-10 border-t border-ink-line flex flex-col sm:flex-row gap-6 justify-center text-center">
            <a href="mailto:info@vroomvalet.co.za" className="flex items-center gap-3 text-ink-muted hover:text-brand transition-colors">
              <Mail size={18} aria-hidden="true" />
              <span className="text-sm">info@vroomvalet.co.za</span>
            </a>
            <a href="https://wa.me/27000000000" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-ink-muted hover:text-eco transition-colors">
              <MessageCircle size={18} aria-hidden="true" />
              <span className="text-sm">WhatsApp us</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
