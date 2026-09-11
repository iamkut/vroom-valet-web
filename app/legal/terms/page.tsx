import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of service',
  description: 'Vroom Valet terms of service.',
};

export default function TermsPage() {
  return (
    <div className="pt-28 pb-20 bg-white">
      <div className="container max-w-3xl">
        <h1 className="font-display text-4xl font-bold text-ink mb-2">Terms of service</h1>
        <p className="text-ink-subtle text-sm mb-10">Last updated: October 2026</p>
        <div className="prose">
          <p>
            These terms are being finalised and will be published before launch. If you have questions
            in the meantime, please <a href="/contact">contact us</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
