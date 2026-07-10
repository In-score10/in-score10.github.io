"use client";

import { useState } from "react";

const facts = [
  { label: "Experience", value: "3+ years · FinTech, enterprise SaaS, e-commerce" },
  { label: "Projects", value: "8+ products across web, mobile & POS — quality owned end-to-end" },
  { label: "Core stack", value: "Playwright · Selenium · Java · Cucumber · OWASP ZAP · JMeter" },
  { label: "Edge", value: "Agentic AI woven into daily QA practice" },
  { label: "Based in", value: "Sri Lanka · working with global teams" },
];

export default function PortraitCard() {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="group h-80 w-full cursor-pointer [perspective:1200px]"
      onClick={() => setFlipped((f) => !f)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && setFlipped((f) => !f)}
      aria-label="Flip portrait card to see quick facts"
    >
      <div
        className={`relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] motion-reduce:transition-none group-hover:[transform:rotateY(180deg)] ${
          flipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* Front: portrait */}
        <div className="absolute inset-0 [backface-visibility:hidden]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/portrait.jpg"
            alt="Portrait of Sudasun Malaviarachchi"
            className="h-full w-full rounded-xl border border-white/10 object-cover object-[50%_18%] shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]"
          />
          <span className="absolute bottom-3 right-3 rounded-full border border-white/15 bg-black/50 px-2.5 py-1 font-mono text-[10px] text-slate-300 backdrop-blur-sm">
            flip ↻
          </span>
        </div>
        {/* Back: quick facts */}
        <div className="absolute inset-0 flex flex-col justify-center rounded-xl border border-sky-400/25 bg-[#0b1322] p-6 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)] [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <p className="mb-4 font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-sky-400">
            At a glance
          </p>
          <dl className="space-y-3">
            {facts.map((f) => (
              <div key={f.label}>
                <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-slate-500">
                  {f.label}
                </dt>
                <dd className="text-[13.5px] font-medium leading-snug text-slate-200">
                  {f.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
