import { caseStudies } from "@/content/portfolio";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import TriageFunnel from "@/components/diagrams/TriageFunnel";
import FrameworkStack from "@/components/diagrams/FrameworkStack";

const stages = [
  { key: "situation", label: "Situation", color: "text-sky-400 border-sky-400/30 bg-sky-400/10" },
  { key: "approach", label: "Approach", color: "text-violet-400 border-violet-400/30 bg-violet-400/10" },
  { key: "result", label: "Result", color: "text-emerald-400 border-emerald-400/30 bg-emerald-400/10" },
] as const;

export default function CaseStudies() {
  return (
    <section id="case-studies" className="mx-auto max-w-6xl px-5 py-24">
      <SectionHeading kicker="Selected work" title="Case Studies" />
      <div className="space-y-8">
        {caseStudies.map((cs, i) => (
          <Reveal key={cs.title}>
            <article
              className={`card-lift rounded-2xl border bg-white/[0.03] p-7 sm:p-10 ${
                cs.featured
                  ? "border-sky-400/30 shadow-[0_0_60px_-20px_rgba(56,189,248,0.25)]"
                  : "border-white/10"
              }`}
            >
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <span className="font-mono text-xs font-semibold text-slate-500">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-sky-400">
                  {cs.tag}
                </span>
                {cs.featured && (
                  <span className="rounded-full border border-sky-400/30 bg-sky-400/10 px-2.5 py-0.5 text-[11px] font-semibold text-sky-300">
                    Featured
                  </span>
                )}
              </div>
              <h3 className="font-display mb-8 max-w-3xl text-xl font-bold leading-snug text-white sm:text-2xl">
                {cs.title}
              </h3>
              <div className="grid gap-8 lg:grid-cols-3">
                {stages.map((stage) => (
                  <div key={stage.key}>
                    <span
                      className={`mb-3 inline-block rounded-md border px-2.5 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] ${stage.color}`}
                    >
                      {stage.label}
                    </span>
                    <p className="text-[15px] leading-relaxed text-slate-300">
                      {cs[stage.key]}
                    </p>
                  </div>
                ))}
              </div>
              {cs.diagram === "triage" && <TriageFunnel />}
              {cs.diagram === "framework" && <FrameworkStack />}
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
