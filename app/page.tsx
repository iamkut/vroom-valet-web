import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import StepList from '@/components/StepList';
import PaymentCards from '@/components/PaymentCards';
import TrustStats from '@/components/TrustStats';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import CTAButton from '@/components/CTAButton';

export const metadata: Metadata = {
  title: 'Vroom Valet — Book a car wash near you',
  description:
    'Book a wash near you. Watch it happen. Pay in cash, at the till, or online. No card required to sign up.',
};

export default function Home() {
  return (
    <>
      <Hero />
      <StepList />
      <PaymentCards />
      <TrustStats />

      {/* Operator ribbon */}
      <section className="section bg-deep text-white">
        <div className="container text-center max-w-3xl mx-auto">
          <p className="text-brand-200 font-semibold text-sm tracking-wider uppercase mb-4">
            For operators
          </p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
            Run a car wash?<br />Fill your bays without an app of your own.
          </h2>
          <p className="mt-6 text-white/70 text-lg leading-relaxed">
            In-app storefront. Queue management. Staff accounts.
            Paystack when you&apos;re ready — never a gate.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/for-operators" variant="white" size="lg">
              See how it works
            </CTAButton>
            <CTAButton href="/contact" variant="ghost-dark" size="lg">
              List your business
            </CTAButton>
          </div>
        </div>
      </section>

      <Testimonials />
      <FAQ />
    </>
  );
}
