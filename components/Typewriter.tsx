"use client";

import { useEffect, useState } from "react";

const PHRASES = [
  "Security Testing & DAST",
  "Playwright Test Automation",
  "False-Positive Discipline",
  "Agentic AI in QA",
  "Performance Testing · JMeter",
];

export default function Typewriter() {
  const [phrase, setPhrase] = useState(0);
  const [chars, setChars] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (reduced) return;
    const full = PHRASES[phrase];
    let delay: number;
    if (!deleting) {
      delay = chars === full.length ? 2000 : 55;
    } else {
      delay = chars === 0 ? 350 : 28;
    }
    const t = setTimeout(() => {
      if (!deleting) {
        if (chars === full.length) setDeleting(true);
        else setChars(chars + 1);
      } else {
        if (chars === 0) {
          setDeleting(false);
          setPhrase((phrase + 1) % PHRASES.length);
        } else setChars(chars - 1);
      }
    }, delay);
    return () => clearTimeout(t);
  }, [chars, deleting, phrase, reduced]);

  return (
    <p className="mt-4 font-mono text-lg text-sky-300">
      <span className="text-slate-500">&gt; </span>
      {reduced ? PHRASES[0] : PHRASES[phrase].slice(0, chars)}
      {!reduced && (
        <span className="cursor-blink ml-0.5 inline-block h-[1.1em] w-[0.55em] translate-y-[0.2em] bg-sky-300" />
      )}
    </p>
  );
}
