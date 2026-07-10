"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#projects", label: "Projects" },
  { href: "#ai-qa", label: "AI × QA" },
  { href: "#skills", label: "Skills" },
  { href: "#how-i-work", label: "How I Work" },
  { href: "#writing", label: "Writing" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector(l.href))
      .filter(Boolean) as Element[];
    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-[#06090f]/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
      aria-label="Section navigation"
    >
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-4 gap-y-1 px-5 py-3.5">
        <a
          href="#top"
          className="font-display text-sm font-bold tracking-wide text-white"
        >
          Sudasun&nbsp;Malaviarachchi
        </a>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-[13px] transition-colors ${
                active === l.href
                  ? "text-sky-400"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
