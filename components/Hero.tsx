import { contact } from "@/content/portfolio";
import { MailIcon, GitHubIcon, LinkedInIcon, DownloadIcon } from "@/components/Icons";

export default function Hero() {
  return (
    <header id="top" className="hero-bg relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-5 pb-20 pt-36 sm:pt-44">
        <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-sky-400/25 bg-sky-400/10 px-4 py-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-sky-300">
          <span className="h-1.5 w-1.5 rounded-full bg-sky-400" aria-hidden />
          Senior QA Engineer · FinTech · Security Testing &amp; Test Automation
        </p>
        <h1 className="font-display max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-6xl">
          I find the defects that matter — <span className="text-gradient">and kill the noise that doesn&rsquo;t.</span>
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-relaxed text-slate-300">
          I treat test results as claims to be verified, not findings to be
          forwarded. My specialty is the unglamorous middle of security and
          quality work: authenticated DAST scans, black-box output reconciled
          against API specifications, and strict false-positive discipline —
          so the report a team receives contains only defects that are real,
          reproducible, and ranked by actual risk.
        </p>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-400">
          A tester checks the build; a quality assurance engineer assures the
          whole development lifecycle. Currently a Senior QA Engineer in FinTech,
          I build test automation
          frameworks from scratch (Playwright, TypeScript, Cucumber BDD) and put
          agentic AI to work inside the QA process itself. Across FinTech,
          enterprise sustainability software, multi-platform e-commerce, and
          cloud communications, I combine automation at scale with precise
          technical reporting that turns messy scanner output into
          decision-ready deliverables.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <a
            href={`mailto:${contact.email}`}
            className="inline-flex items-center gap-2 rounded-lg bg-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-sky-400"
          >
            <MailIcon />
            Email me
          </a>
          <a
            href="#case-studies"
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-6 py-3 text-sm font-semibold text-slate-200 transition-colors hover:border-sky-400/50 hover:text-white"
          >
            View case studies
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-6 py-3 text-sm font-semibold text-slate-200 transition-colors hover:border-sky-400/50 hover:text-white"
          >
            <LinkedInIcon />
            LinkedIn
          </a>
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-6 py-3 text-sm font-semibold text-slate-200 transition-colors hover:border-sky-400/50 hover:text-white"
          >
            <GitHubIcon />
            GitHub
          </a>
          <a
            href="/cv.pdf"
            download="Sudasun_Malaviarachchi_Senior_Quality_Assurance_Engineer_Resume.pdf"
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-6 py-3 text-sm font-semibold text-slate-200 transition-colors hover:border-sky-400/50 hover:text-white"
          >
            <DownloadIcon />
            Download CV
          </a>
        </div>
      </div>
    </header>
  );
}
