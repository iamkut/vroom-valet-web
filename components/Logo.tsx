import Link from 'next/link';
import { cn } from '@/lib/utils';

interface Props {
  variant?: 'color' | 'reversed';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  href?: string;
}

const sizes = {
  sm: { mark: 28, text: 'text-lg' },
  md: { mark: 36, text: 'text-xl' },
  lg: { mark: 48, text: 'text-2xl' },
};

function Mark({ variant, width }: { variant: 'color' | 'reversed'; width: number }) {
  const isReversed = variant === 'reversed';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width={width}
      height={width}
      aria-hidden="true"
    >
      <path
        d="M 14 32 L 36 72 L 58 32"
        fill="none"
        stroke={isReversed ? '#FFFFFF' : '#0F6FD0'}
        strokeWidth="14"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M 38 32 L 60 72 L 82 32 C 90 18 80 8 66 14"
        fill="none"
        stroke={isReversed ? '#BFE9FA' : '#00AEEF'}
        strokeWidth="14"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="66" cy="14" r="4.6" fill="#7AC943" />
    </svg>
  );
}

export default function Logo({
  variant = 'color',
  size = 'md',
  className,
  href = '/',
}: Props) {
  const { mark, text } = sizes[size];
  const wordmarkColor = variant === 'reversed' ? 'text-white' : 'text-ink';

  const inner = (
    <span className={cn('flex items-center gap-2.5', className)}>
      <Mark variant={variant} width={mark} />
      <span className={cn('font-display font-bold leading-none', text, wordmarkColor)}>
        Vroom <span className="text-eco">Valet</span>
      </span>
    </span>
  );

  if (!href) return inner;

  return (
    <Link href={href} aria-label="Vroom Valet home">
      {inner}
    </Link>
  );
}
