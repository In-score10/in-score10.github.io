"use client";

import { useEffect, useRef, useState } from "react";
import { metrics } from "@/content/portfolio";

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        obs.disconnect();
        if (reduced) {
          setValue(target);
          return;
        }
        const duration = 1300;
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - t, 3);
          setValue(Math.round(target * eased));
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="font-display text-4xl font-bold tracking-tight text-white">
      {value}
      <span className="text-gradient">{suffix}</span>
    </span>
  );
}

export default function ProofBar() {
  return (
    <section aria-label="Headline metrics" className="border-y border-white/10 bg-white/[0.02]">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px lg:grid-cols-4">
        {metrics.map((m) => (
          <div key={m.label} className="px-6 py-9 text-center">
            <CountUp target={m.value} suffix={m.suffix} />
            <p className="mx-auto mt-2 max-w-[16rem] text-[13px] leading-snug text-slate-400">
              {m.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
