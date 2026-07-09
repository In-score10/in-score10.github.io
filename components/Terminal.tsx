"use client";

import { useEffect, useState } from "react";

const LINES = [
  { text: "$ npx playwright test --grep @regression", cls: "text-sky-300" },
  { text: "  running 42 scenarios (chromium)", cls: "text-slate-400" },
  { text: "  ✓ 42 passed · 0 flaky · 3.8m", cls: "text-emerald-400" },
  { text: "$ zap-baseline.py -t https://staging.target", cls: "text-sky-300" },
  { text: "  ⚠ 47 alerts raised", cls: "text-amber-300" },
  { text: "$ qa triage --reconcile openapi.yaml", cls: "text-sky-300" },
  { text: "  44 false positives → eliminated", cls: "text-slate-400" },
  { text: "  ✓ 3 confirmed → severity-ranked", cls: "text-emerald-400" },
  { text: "$ qa report --dated --regression", cls: "text-sky-300" },
  { text: "  ✓ decision-ready. shipped.", cls: "text-emerald-400" },
];

export default function Terminal() {
  const [pos, setPos] = useState({ line: 0, char: 0 });
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (reduced) return;
    const { line, char } = pos;
    let delay: number;
    if (line >= LINES.length) {
      delay = 4500; // hold the finished run, then restart
    } else if (char < LINES[line].text.length) {
      delay = LINES[line].text.startsWith("$") ? 38 : 10;
    } else {
      delay = LINES[line].text.startsWith("$") ? 500 : 260;
    }
    const t = setTimeout(() => {
      if (line >= LINES.length) setPos({ line: 0, char: 0 });
      else if (char < LINES[line].text.length) setPos({ line, char: char + 1 });
      else setPos({ line: line + 1, char: 0 });
    }, delay);
    return () => clearTimeout(t);
  }, [pos, reduced]);

  const visible = reduced
    ? LINES.map((l) => ({ ...l, shown: l.text }))
    : LINES.slice(0, pos.line + 1).map((l, i) => ({
        ...l,
        shown: i < pos.line ? l.text : l.text.slice(0, pos.char),
      }));

  return (
    <div className="w-full max-w-md overflow-hidden rounded-xl border border-white/10 bg-black/50 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]">
      <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/[0.04] px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" aria-hidden />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" aria-hidden />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" aria-hidden />
        <span className="ml-3 font-mono text-[11px] text-slate-500">
          qa@sudasun — regression cycle
        </span>
      </div>
      <div className="min-h-[15.5rem] px-4 py-4 font-mono text-[12.5px] leading-[1.55]">
        {visible.map((l, i) => (
          <p key={i} className={l.cls}>
            {l.shown}
            {!reduced && i === visible.length - 1 && (
              <span className="cursor-blink ml-0.5 inline-block h-[1.1em] w-[0.55em] translate-y-[0.2em] bg-slate-300" />
            )}
          </p>
        ))}
      </div>
    </div>
  );
}
