import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { certifications } from "@/content/portfolio";

const useCases = [
  {
    title: "Test design, accelerated",
    body: "Agentic tools draft BDD scenarios, edge-case matrices, and negative paths directly from requirements and acceptance criteria. I review, prune, and harden every scenario before it enters the suite — generation is fast, but the judgment stays human.",
    tools: ["Claude Code", "Cursor"],
  },
  {
    title: "Coverage analysis, continuous",
    body: "Agents sweep the existing suite against specs and API contracts to surface untested paths, missing negative cases, and redundant tests — turning coverage review from a release-time chore into an everyday habit.",
    tools: ["Claude Code", "Antigravity"],
  },
  {
    title: "Maintenance & failure triage",
    body: "CI failures get first-pass triage, root-cause summaries, and suggested locator or step refactors from agents working inside the framework I built — keeping a from-scratch automation suite healthy without burning QA hours on upkeep.",
    tools: ["Claude Code", "Cursor", "Antigravity"],
  },
  {
    title: "AI output is a claim until verified",
    body: "The same false-positive discipline I apply to security scanners applies here: every generated test is executed before it's trusted, every suggested fix is re-verified, and nothing ships on an agent's word alone. AI accelerates the work — the engineer assures it.",
    tools: [],
    featured: true,
  },
];

const aiTools = [
  { name: "Claude Code", src: "/logos/tools/claudecode.svg" },
  { name: "Cursor", src: "/logos/tools/cursor.svg" },
  { name: "Google Antigravity", src: "/logos/tools/antigravity.png" },
];

export default function AiQa() {
  return (
    <section id="ai-qa" className="border-t border-white/10 bg-white/[0.015]">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <SectionHeading kicker="The 2026 edge" title="Agentic AI × QA" />
        <div className="-mt-6 mb-10 flex flex-wrap items-center gap-x-8 gap-y-4">
          <p className="max-w-2xl text-[15px] leading-relaxed text-slate-400">
            I initiated AI test-tooling adoption in my team at IFS — hands-on
            with Kane AI and Testsigma to automate test scenarios, sharing
            insights that influenced project-level automation strategy and
            tooling direction. Today, agentic workflows are core to my daily QA
            practice in FinTech — not a novelty, but a working layer of the
            discipline itself.
          </p>
          <div className="flex items-center gap-6">
            {aiTools.map((t) => (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                key={t.name}
                src={t.src}
                alt={`${t.name} logo`}
                title={t.name}
                className="h-7 w-7 object-contain opacity-55 brightness-0 invert transition-opacity duration-300 hover:opacity-90"
              />
            ))}
          </div>
        </div>
        <div className="mb-10 flex flex-wrap items-center gap-3">
          <span className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-slate-500">
            Certified by Anthropic
          </span>
          {certifications.map((c) => (
            <a
              key={c.url}
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-4 py-1.5 text-[13px] font-medium text-emerald-300 transition-colors hover:border-emerald-400/50 hover:text-emerald-200"
            >
              <svg
                className="h-3.5 w-3.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M9 12l2 2 4-4" />
                <circle cx="12" cy="12" r="9" />
              </svg>
              {c.name}
              <span className="text-emerald-400/60">↗</span>
            </a>
          ))}
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {useCases.map((uc, i) => (
            <Reveal key={uc.title} delay={(i % 2) * 80}>
              <div
                className={`card-lift h-full rounded-2xl border bg-white/[0.03] p-7 ${
                  uc.featured ? "border-violet-400/40" : "border-white/10"
                }`}
              >
                <h3 className="font-display mb-3 text-lg font-bold leading-snug text-white">
                  {uc.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-slate-400">{uc.body}</p>
                {uc.tools.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {uc.tools.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-violet-400/25 bg-violet-400/10 px-2.5 py-0.5 text-[11px] font-medium text-violet-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
