'use client';

import { useEffect, useRef, useState } from 'react';

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { value: 1200, suffix: '+', label: 'Washes booked' },
  { value: 3,    suffix: '',   label: 'Cities at launch' },
  { value: 8,    suffix: ' min', label: 'Average wait time' },
];

function Counter({ value, suffix }: Pick<Stat, 'value' | 'suffix'>) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1400;
          const fps = 60;
          const steps = (duration / 1000) * fps;
          const increment = value / steps;
          let current = 0;
          const timer = setInterval(() => {
            current = Math.min(current + increment, value);
            setCount(Math.round(current));
            if (current >= value) clearInterval(timer);
          }, 1000 / fps);
        }
      },
      { threshold: 0.5 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref} className="font-display text-5xl lg:text-6xl font-bold text-white tabular-nums">
      {count.toLocaleString('en-ZA')}{suffix}
    </span>
  );
}

export default function TrustStats() {
  return (
    <section className="section bg-brand">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-white/20">
          {stats.map(s => (
            <div key={s.label} className="flex flex-col items-center gap-2 py-8 md:py-0">
              <Counter value={s.value} suffix={s.suffix} />
              <p className="text-white/70 text-base">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
