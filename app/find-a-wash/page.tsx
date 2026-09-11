import type { Metadata } from 'next';
import { MapPin } from 'lucide-react';
import AppStoreBadges from '@/components/AppStoreBadges';

export const metadata: Metadata = {
  title: 'Find a wash',
  description: 'Browse car washes near you in Johannesburg, Cape Town and Durban.',
};

export default function FindAWashPage() {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-b from-surface-page to-white pt-16">
      <div className="container max-w-xl text-center py-24">
        <div className="w-20 h-20 rounded-3xl bg-brand-50 flex items-center justify-center mx-auto mb-8">
          <MapPin className="w-10 h-10 text-brand" strokeWidth={1.5} aria-hidden="true" />
        </div>
        <h1 className="font-display text-4xl font-bold text-ink mb-4">Find a wash near you</h1>
        <p className="text-ink-muted text-lg leading-relaxed mb-6">
          The full wash directory with a live map is coming soon. In the meantime, download the
          app to browse operators near you in Johannesburg, Cape Town and Durban.
        </p>
        <p className="text-ink-subtle text-sm mb-10">Launching October 2026</p>
        <AppStoreBadges className="justify-center" />
      </div>
    </section>
  );
}
