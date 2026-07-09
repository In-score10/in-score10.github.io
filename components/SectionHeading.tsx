export default function SectionHeading({
  kicker,
  title,
}: {
  kicker: string;
  title: string;
}) {
  return (
    <div className="mb-12">
      <p className="mb-2 font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-sky-400">
        {kicker}
      </p>
      <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}
