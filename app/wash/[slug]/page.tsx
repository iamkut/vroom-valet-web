import type { Metadata } from 'next';
import AppStoreBadges from '@/components/AppStoreBadges';

export const metadata: Metadata = {
  title: 'Book a wash',
  description: 'Download the Vroom Valet app to book this wash.',
};

export default async function WashKioskPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // Placeholder — web booking kiosk is deferred post-launch.
  // See docs/ROADMAP.md "Deferred: marketing-site operator kiosk page".
  const { slug } = await params;
  void slug;

  return (
    <section className="min-h-screen flex items-center bg-gradient-to-b from-surface-page to-white pt-16">
      <div className="container max-w-lg text-center py-24">
        <div className="text-5xl mb-8">🚗</div>
        <h1 className="font-display text-3xl font-bold text-ink mb-4">
          Book this wash
        </h1>
        <p className="text-ink-muted text-lg leading-relaxed mb-4">
          For the full booking experience — real-time tracking, loyalty stamps, and push
          notifications — download the Vroom Valet app.
        </p>
        <p className="text-ink-subtle text-sm mb-10">
          Web booking coming soon. Scan the QR code at the wash for the latest.
        </p>
        <AppStoreBadges className="justify-center" />
      </div>
    </section>
  );
}
