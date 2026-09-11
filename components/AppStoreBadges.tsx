import { cn } from '@/lib/utils';

export default function AppStoreBadges({ className }: { className?: string }) {
  return (
    <div className={cn('flex flex-wrap gap-3', className)} id="get-the-app">
      <a
        href="#"
        aria-label="Download on the App Store"
        className="flex items-center gap-3 bg-black text-white rounded-2xl px-5 py-3 hover:bg-neutral-800 transition-colors"
      >
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white flex-shrink-0" aria-hidden="true">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        </svg>
        <div className="text-left leading-tight">
          <div className="text-xs opacity-70">Download on the</div>
          <div className="text-sm font-semibold">App Store</div>
        </div>
      </a>

      <a
        href="#"
        aria-label="Get it on Google Play"
        className="flex items-center gap-3 bg-black text-white rounded-2xl px-5 py-3 hover:bg-neutral-800 transition-colors"
      >
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white flex-shrink-0" aria-hidden="true">
          <path d="M3.18 23.76c.3.17.65.19.96.04l12.87-7.43-2.76-2.76-11.07 10.15zM.44 1.07C.17 1.4 0 1.87 0 2.47v19.06c0 .6.17 1.07.44 1.4l.12.1L11.23 12.5v-.25L.56 1.07l-.12 0zM20.25 9.87l-2.61-1.51-3.09 3.09 3.09 3.09 2.64-1.53c.75-.43.75-1.12-.03-1.14zM3.18.24l12.87 7.43-2.76 2.76L2.22.28c.31-.15.66-.13.96-.04z" />
        </svg>
        <div className="text-left leading-tight">
          <div className="text-xs opacity-70">Get it on</div>
          <div className="text-sm font-semibold">Google Play</div>
        </div>
      </a>
    </div>
  );
}
