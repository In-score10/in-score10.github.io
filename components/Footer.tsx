import { contact } from "@/content/portfolio";
import { MailIcon, GitHubIcon, LinkedInIcon, DownloadIcon } from "@/components/Icons";
import PhoneLink from "@/components/PhoneLink";

export default function Footer() {
  return (
    <footer id="contact" className="hero-bg border-t border-white/10">
      <div className="mx-auto max-w-6xl px-5 py-24 text-center">
        <p className="mb-2 font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-sky-400">
          Contact
        </p>
        <h2 className="font-display mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Looking for a QA engineer who verifies before reporting?
        </h2>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href={`mailto:${contact.email}`}
            className="inline-flex items-center gap-2 rounded-lg bg-sky-500 px-7 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-sky-400"
          >
            <MailIcon />
            {contact.email}
          </a>
          <PhoneLink className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-7 py-3 text-sm font-semibold text-slate-200 transition-colors hover:border-sky-400/50 hover:text-white" />
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-7 py-3 text-sm font-semibold text-slate-200 transition-colors hover:border-sky-400/50 hover:text-white"
          >
            <LinkedInIcon />
            LinkedIn
          </a>
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-7 py-3 text-sm font-semibold text-slate-200 transition-colors hover:border-sky-400/50 hover:text-white"
          >
            <GitHubIcon />
            GitHub
          </a>
          <a
            href="/cv.pdf"
            download="Sudasun_Malaviarachchi_Senior_Quality_Assurance_Engineer_Resume.pdf"
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-7 py-3 text-sm font-semibold text-slate-200 transition-colors hover:border-sky-400/50 hover:text-white"
          >
            <DownloadIcon />
            Download CV
          </a>
        </div>
        <p className="mt-10 text-[13px] text-slate-500">
          Sanitized report samples and further artifacts available on request.
        </p>
        <p className="mt-6 text-[12px] text-slate-600">
          © 2026 Sudasun Malaviarachchi
        </p>
      </div>
    </footer>
  );
}
