import Link from 'next/link';
import { cn } from '@/lib/utils';

type Variant = 'primary' | 'success' | 'ghost' | 'white' | 'ghost-dark';

interface Props {
  href: string;
  variant?: Variant;
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}

const variants: Record<Variant, string> = {
  primary:    'bg-brand text-white hover:bg-brand-600 shadow-sm',
  success:    'bg-eco text-white hover:bg-eco-600 shadow-sm',
  ghost:      'border border-ink-line text-ink hover:bg-surface-sunken',
  'ghost-dark': 'border border-white/30 text-white hover:bg-white/10',
  white:      'bg-white text-deep hover:bg-brand-50 shadow-sm',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export default function CTAButton({
  href,
  variant = 'primary',
  size = 'md',
  children,
  className,
  external,
}: Props) {
  const cls = cn(
    'inline-flex items-center gap-2 rounded-3xl font-semibold transition-all duration-200',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2',
    variants[variant],
    sizes[size],
    className,
  );

  if (external) {
    return (
      <a href={href} className={cls} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  return <Link href={href} className={cls}>{children}</Link>;
}
