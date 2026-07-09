const employers = [
  { name: "Modernie Business Solutions", src: "/logos/modernie.png", height: "h-9" },
  { name: "IFS", src: "/logos/ifs.png", height: "h-9" },
  { name: "hSenid Mobile Solutions", src: "/logos/hsenid-mobile.png", height: "h-7" },
];

export default function Employers() {
  return (
    <section aria-label="Employers" className="border-b border-white/10 bg-white/[0.015]">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-14 gap-y-6 px-5 py-10">
        <p className="w-full text-center font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-slate-500 sm:w-auto">
          Where I&rsquo;ve worked
        </p>
        {employers.map((e) => (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            key={e.name}
            src={e.src}
            alt={`${e.name} logo`}
            title={e.name}
            className={`${e.height} w-auto opacity-55 brightness-0 invert transition-opacity duration-300 hover:opacity-90`}
          />
        ))}
      </div>
    </section>
  );
}
