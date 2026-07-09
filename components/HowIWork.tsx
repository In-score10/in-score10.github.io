import { principles } from "@/content/portfolio";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

export default function HowIWork() {
  return (
    <section id="how-i-work" className="mx-auto max-w-6xl px-5 py-24">
      <SectionHeading kicker="QA philosophy" title="How I Work" />
      <div className="grid gap-6 md:grid-cols-2">
        {principles.map((p, i) => (
          <Reveal
            key={p.title}
            delay={(i % 2) * 80}
            className={i === 0 ? "md:col-span-2" : ""}
          >
            <div
              className={`card-lift h-full rounded-2xl border bg-white/[0.03] p-7 ${
                i === 0 ? "border-sky-400/30" : "border-white/10"
              }`}
            >
              <span className="text-gradient font-mono text-sm font-bold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display mb-3 mt-2 text-lg font-bold leading-snug text-white">
                {p.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-slate-400">{p.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
