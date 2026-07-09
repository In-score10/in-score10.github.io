function Arrow({ note }: { note: string }) {
  return (
    <div className="flex flex-col items-center gap-1 py-2">
      <span className="font-mono text-[11px] italic text-slate-500">{note}</span>
      <svg
        className="h-4 w-4 text-slate-600"
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
    </div>
  );
}

export default function TriageFunnel() {
  return (
    <figure className="mt-10 rounded-xl border border-white/10 bg-black/20 p-6 sm:p-8">
      <p className="mb-6 text-center font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
        The false-positive triage funnel
      </p>
      <div className="mx-auto max-w-2xl">
        <div className="mx-auto w-full rounded-lg border border-sky-400/40 bg-sky-400/10 px-4 py-3 text-center">
          <p className="text-sm font-semibold text-sky-300">Raw scanner output</p>
          <p className="mt-0.5 text-[12px] leading-snug text-slate-400">
            Authenticated OWASP ZAP scan as a low-privilege user — every alert
            treated as a claim, not a finding
          </p>
        </div>
        <Arrow note="reconcile against the OpenAPI spec · reproduce manually" />
        <div className="mx-auto w-[82%] rounded-lg border border-violet-400/40 bg-violet-400/10 px-4 py-3 text-center">
          <p className="text-sm font-semibold text-violet-300">Noise eliminated</p>
          <p className="mt-0.5 text-[12px] leading-snug text-slate-400">
            The loudest alerts — /.env, /.git/config, /auth/dev-login &ldquo;disclosures&rdquo;
            — traced to the SPA&rsquo;s catch-all route: entire cluster → zero real issues
          </p>
        </div>
        <Arrow note="rank what survives by real-world consequence" />
        <div className="mx-auto w-[58%] min-w-[16rem] rounded-lg border border-emerald-400/40 bg-emerald-400/10 px-4 py-3 text-center">
          <p className="text-sm font-semibold text-emerald-300">Confirmed findings</p>
          <p className="mt-0.5 text-[12px] leading-snug text-slate-400">
            BOLA exposure of HR records &amp; audit log, verb-level authorization gaps
            — re-verified with live data on every redeployment
          </p>
        </div>
      </div>
      <figcaption className="mt-6 text-center text-[12px] text-slate-500">
        Every report ships only what survives this funnel — real, reproducible,
        severity-ranked.
      </figcaption>
    </figure>
  );
}
