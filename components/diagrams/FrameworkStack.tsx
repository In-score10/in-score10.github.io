const layers = [
  {
    title: "Cucumber BDD feature files",
    detail: "Business-legible scenarios — executable specifications written before the code exists",
    accent: "border-sky-400/40 text-sky-300",
  },
  {
    title: "TypeScript step definitions",
    detail: "Typed glue binding each Gherkin step to real browser and API actions",
    accent: "border-violet-400/40 text-violet-300",
  },
  {
    title: "Page objects & API clients",
    detail: "One place to absorb UI and contract change — scenarios stay stable",
    accent: "border-fuchsia-400/40 text-fuchsia-300",
  },
  {
    title: "Playwright execution engine",
    detail: "Fast, reliable cross-browser automation with traces on failure",
    accent: "border-emerald-400/40 text-emerald-300",
  },
  {
    title: "CI pipeline · reports · agentic-AI-assisted maintenance",
    detail: "Every change verified on the way in; AI accelerates test design, coverage analysis & upkeep",
    accent: "border-amber-400/40 text-amber-300",
  },
];

export default function FrameworkStack() {
  return (
    <figure className="mt-10 rounded-xl border border-white/10 bg-black/20 p-6 sm:p-8">
      <p className="mb-6 text-center font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
        Framework architecture — built from scratch
      </p>
      <div className="mx-auto flex max-w-2xl flex-col">
        {layers.map((layer, i) => (
          <div key={layer.title} className="flex flex-col items-center">
            {i > 0 && (
              <svg
                className="my-1.5 h-4 w-4 text-slate-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M12 5v14m0 0 6-6m-6 6-6-6" />
              </svg>
            )}
            <div
              className={`w-full rounded-lg border bg-white/[0.03] px-4 py-3 text-center ${layer.accent}`}
            >
              <p className="text-sm font-semibold">{layer.title}</p>
              <p className="mt-0.5 text-[12px] leading-snug text-slate-400">{layer.detail}</p>
            </div>
          </div>
        ))}
      </div>
      <figcaption className="mt-6 text-center text-[12px] text-slate-500">
        Scenarios read as requirements at the top; everything below exists so
        they run fast, in every browser, on every commit.
      </figcaption>
    </figure>
  );
}
