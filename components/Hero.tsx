import { contact } from "@/content/portfolio";
import { MailIcon, GitHubIcon, LinkedInIcon, MediumIcon, DownloadIcon } from "@/components/Icons";
import Terminal from "@/components/Terminal";
import PortraitCard from "@/components/PortraitCard";
import Typewriter from "@/components/Typewriter";

export default function Hero() {
  return (
    <header id="top" className="hero-bg relative overflow-hidden">
      <div
        aria-hidden
        className="hero-blob left-[8%] top-[12%] h-72 w-72 bg-sky-500/25"
      />
      <div
        aria-hidden
        className="hero-blob right-[6%] top-[38%] h-80 w-80 bg-indigo-500/20"
        style={{ animationDelay: "-8s" }}
      />
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-5 pb-16 pt-24 sm:gap-12 sm:pb-20 sm:pt-40 lg:grid-cols-[minmax(0,1fr)_26rem]">
        <div className="min-w-0">
        <p className="animate-in mb-5 inline-flex items-center gap-2 rounded-full border border-sky-400/25 bg-sky-400/10 px-4 py-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-sky-300">
          <span className="relative flex h-1.5 w-1.5" aria-hidden>
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75 motion-reduce:hidden" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-sky-400" />
          </span>
          Senior QA Engineer · FinTech · Security Testing &amp; Test Automation
        </p>
        <p className="animate-in delay-1 font-mono text-base text-slate-400">Hello, I&rsquo;m</p>
        <h1 className="animate-in delay-2 font-display mt-1 max-w-4xl text-[2.35rem] font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
          <span className="text-gradient text-gradient-x">Sudasun Malaviarachchi</span>
        </h1>
        <div className="animate-in delay-3">
          <Typewriter />
        </div>
        <p className="animate-in delay-3 font-display mt-5 max-w-3xl text-xl font-semibold leading-snug text-white sm:text-3xl">
          I find the defects that matter — and kill the noise that doesn&rsquo;t.
        </p>
        <p className="animate-in delay-4 mt-7 max-w-2xl text-lg leading-relaxed text-slate-300">
          I treat test results as claims to be verified, not findings to be
          forwarded. My specialty is the unglamorous middle of security and
          quality work: authenticated DAST scans, black-box output reconciled
          against API specifications, and strict false-positive discipline —
          so the report a team receives contains only defects that are real,
          reproducible, and ranked by actual risk.
        </p>
        <p className="animate-in delay-4 mt-4 max-w-2xl text-base leading-relaxed text-slate-400">
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
        <div className="animate-in delay-5 mt-9 flex flex-wrap gap-3">
          <a
            href={`mailto:${contact.email}`}
            className="inline-flex items-center gap-2 rounded-lg bg-sky-500 px-4 py-2.5 text-[13px] font-semibold text-slate-950 transition-colors hover:bg-sky-400 sm:px-6 sm:py-3 sm:text-sm"
          >
            <MailIcon />
            Email me
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-2.5 text-[13px] font-semibold text-slate-200 transition-colors hover:border-sky-400/50 hover:text-white sm:px-6 sm:py-3 sm:text-sm"
          >
            View projects
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-2.5 text-[13px] font-semibold text-slate-200 transition-colors hover:border-sky-400/50 hover:text-white sm:px-6 sm:py-3 sm:text-sm"
          >
            <LinkedInIcon />
            LinkedIn
          </a>
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-2.5 text-[13px] font-semibold text-slate-200 transition-colors hover:border-sky-400/50 hover:text-white sm:px-6 sm:py-3 sm:text-sm"
          >
            <GitHubIcon />
            GitHub
          </a>
          <a
            href={contact.medium}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-2.5 text-[13px] font-semibold text-slate-200 transition-colors hover:border-sky-400/50 hover:text-white sm:px-6 sm:py-3 sm:text-sm"
          >
            <MediumIcon />
            Medium
          </a>
          <a
            href="/cv.pdf"
            download="Sudasun_Malaviarachchi_Senior_Quality_Assurance_Engineer_Resume.pdf"
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-2.5 text-[13px] font-semibold text-slate-200 transition-colors hover:border-sky-400/50 hover:text-white sm:px-6 sm:py-3 sm:text-sm"
          >
            <DownloadIcon />
            Download CV
          </a>
        </div>
        </div>
        <div className="animate-in delay-5 w-full min-w-0 max-w-md justify-self-center space-y-4 lg:justify-self-end">
          <PortraitCard />
          <Terminal />
        </div>
      </div>
    </header>
  );
}
