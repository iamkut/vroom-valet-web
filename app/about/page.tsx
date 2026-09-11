import type { Metadata } from 'next';
import CTAButton from '@/components/CTAButton';

export const metadata: Metadata = {
  title: 'About',
  description: 'The story behind Vroom Valet — a car-wash marketplace built in South Africa, for South Africa.',
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-deep-700 to-brand-500 pt-32 pb-20 text-white">
        <div className="container max-w-3xl">
          <h1 className="font-display text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Built in South Africa,<br />for South Africa
          </h1>
          <p className="text-xl text-white/75 leading-relaxed">
            Vroom Valet started with a simple problem: booking a car wash still meant a phone call,
            showing up and hoping there was a free bay, or knowing someone who knew someone.
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container max-w-3xl prose">
          <h2>The problem we are solving</h2>
          <p>
            South African car washes are everywhere — petrol stations, shopping centres, office parks,
            residential complexes. But most of them run on walk-ins and WhatsApp messages. Operators
            lose track of capacity. Customers lose time waiting. Nobody wins.
          </p>
          <p>
            We built Vroom Valet because the technology to fix this is straightforward. The missing piece
            was a marketplace that works for both sides: customers who want to book and track on their
            phone, and operators who want a queue they can manage without a tech team.
          </p>

          <h2>Why we built it the way we did</h2>
          <p>
            Most car washes in South Africa take cash. Many don&apos;t have card machines. Almost none
            have the runway to go through a payment KYC process before they can start accepting bookings.
          </p>
          <p>
            So we built for that reality. Operators can start on cash tomorrow. Paystack is an upgrade
            path, not a gatekeeper. We make money when operators make money — and only once they choose
            to route payments through us.
          </p>

          <h2>Where we are now</h2>
          <p>
            Vroom Valet is launching in Johannesburg, Cape Town and Durban in October 2026. We are
            onboarding our first operators now. If you run a car wash in one of those cities and want
            to be in the first cohort, we would love to hear from you.
          </p>
        </div>
      </section>

      <section className="section bg-surface-page text-center">
        <div className="container max-w-xl">
          <h2 className="font-display text-3xl font-bold text-ink mb-4">Want to be part of it?</h2>
          <p className="text-ink-muted mb-8">
            Whether you are a car owner curious about the app or an operator interested in listing your wash, we&apos;d love to talk.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/contact" variant="primary">Get in touch</CTAButton>
            <CTAButton href="/for-operators" variant="ghost">For operators</CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
