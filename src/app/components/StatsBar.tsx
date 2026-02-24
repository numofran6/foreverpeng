"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 5, suffix: "+", label: "Years Experience" },
  { value: 500, suffix: "+", label: "Happy Clients" },
  { value: 100, suffix: "%", label: "HD Lace Only" },
  { value: 7, suffix: " days", label: "Wig Turnaround" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
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
          const duration = 1600;
          const start = performance.now();

          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * value));
            if (progress < 1) requestAnimationFrame(tick);
            else setCount(value);
          };
          requestAnimationFrame(tick);
          observer.disconnect();
        }
      },
      { threshold: 0.6 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function StatsBar() {
  return (
    <section className="bg-[#0a0a0a] py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x md:divide-[#1f1f1f]">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center md:px-8 gap-2">
              <p className="font-display text-4xl md:text-5xl font-black text-white">
                <Counter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#4a4a4a] text-center">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-10 pt-8 border-t border-[#1a1a1a] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-display italic text-[#3a3a3a] text-sm text-center md:text-left">
            &ldquo;At Forever Peng Hair, we value professionalism, precision, and your time.&rdquo;
          </p>
          <a
            href="https://wa.me/447707228205"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[11px] tracking-[0.22em] uppercase text-[#ff5a1f] border border-[#ff5a1f]/30 px-5 py-3 hover:bg-[#ff5a1f] hover:text-white transition-all duration-300"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
