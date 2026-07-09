import { experience } from "@/content/portfolio";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="border-t border-white/10 bg-white/[0.015]">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <SectionHeading kicker="Track record" title="Experience" />
        <ol className="relative ml-2 space-y-10 border-l border-white/15 pl-8">
          {experience.map((role) => (
            <Reveal key={role.dates}>
              <li className="relative">
                <span
                  className="absolute -left-[38.5px] top-1.5 h-[11px] w-[11px] rounded-full border-2 border-sky-400 bg-[#06090f]"
                  aria-hidden
                />
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-sky-400">
                  {role.dates}
                </p>
                <h3 className="font-display mt-1.5 text-lg font-bold text-white">
                  {role.role}
                </h3>
                <p className="mt-1.5 max-w-2xl text-[15px] leading-relaxed text-slate-400">
                  {role.detail}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
