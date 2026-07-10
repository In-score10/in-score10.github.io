import { articles, contact } from "@/content/portfolio";
import { MediumIcon } from "@/components/Icons";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

export default function Writing() {
  return (
    <section id="writing" className="mx-auto max-w-6xl px-5 py-24">
      <SectionHeading kicker="Technical writing" title="Writing" />
      <p className="-mt-6 mb-10 max-w-3xl text-[15px] leading-relaxed text-slate-400">
        Precise technical writing is part of how I do QA — these are some of my
        articles on test strategy, automation architecture, and security testing.
      </p>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((a, i) => (
          <Reveal key={a.url} delay={(i % 3) * 70}>
            <a
              href={a.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card-lift group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <div className="mb-3 flex items-center justify-between gap-3">
                <span className="rounded-full border border-sky-400/25 bg-sky-400/10 px-2.5 py-0.5 font-mono text-[10px] font-medium uppercase tracking-[0.12em] text-sky-300">
                  {a.tag}
                </span>
                <span className="font-mono text-[11px] text-slate-500">{a.date}</span>
              </div>
              <h3 className="font-display text-[17px] font-bold leading-snug text-white group-hover:text-sky-300">
                {a.title}
              </h3>
              <span className="mt-auto pt-4 font-mono text-[11px] text-slate-500 transition-colors group-hover:text-sky-400">
                Read on Medium →
              </span>
            </a>
          </Reveal>
        ))}
      </div>
      <div className="mt-8 text-center">
        <a
          href={contact.medium}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-6 py-3 text-sm font-semibold text-slate-200 transition-colors hover:border-sky-400/50 hover:text-white"
        >
          <MediumIcon />
          All articles on Medium
        </a>
      </div>
    </section>
  );
}
