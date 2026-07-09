import { skillGroups, signalLabel, type Signal } from "@/content/portfolio";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const pillStyles: Record<Signal, string> = {
  applied: "border-emerald-400/30 bg-emerald-400/10 text-emerald-300",
  working: "border-sky-400/30 bg-sky-400/10 text-sky-300",
  foundational: "border-slate-400/25 bg-slate-400/10 text-slate-400",
};

export default function Skills() {
  return (
    <section id="skills" className="border-t border-white/10 bg-white/[0.015]">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <SectionHeading kicker="Capability map" title="Skills Matrix" />
        <p className="-mt-6 mb-10 max-w-3xl text-sm leading-relaxed text-slate-400">
          Proficiency signals — <strong className="text-emerald-300">Applied in production</strong>:
          used on shipped projects with outcomes ·{" "}
          <strong className="text-sky-300">Working</strong>: used regularly, smaller scope ·{" "}
          <strong className="text-slate-300">Foundational</strong>: trained/exposed, not yet a
          headline claim.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={(i % 2) * 80}>
              <div className="card-lift h-full rounded-2xl border border-white/10 bg-white/[0.03] p-7">
                <h3 className="font-display mb-5 text-lg font-bold text-white">
                  {group.title}
                </h3>
                <ul className="space-y-4">
                  {group.skills.map((skill) => (
                    <li key={skill.name}>
                      <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1">
                        <span className="text-[15px] font-medium text-slate-200">
                          {skill.name}
                        </span>
                        <span
                          className={`shrink-0 rounded-full border px-2.5 py-0.5 text-[11px] font-semibold ${pillStyles[skill.signal]}`}
                        >
                          {signalLabel[skill.signal]}
                        </span>
                      </div>
                      {skill.evidence && (
                        <p className="mt-1 text-[13px] leading-snug text-slate-500">
                          {skill.evidence}
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
