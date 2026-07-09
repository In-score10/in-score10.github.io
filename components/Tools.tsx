const tools = [
  { name: "Playwright", src: "/logos/tools/playwright.svg" },
  { name: "TypeScript", src: "/logos/tools/typescript.svg" },
  { name: "Java", src: "/logos/tools/java.svg" },
  { name: "Cucumber", src: "/logos/tools/cucumber.svg" },
  { name: "Selenium", src: "/logos/tools/selenium.svg" },
  { name: "Katalon", src: "/logos/tools/katalon.svg" },
  { name: "OWASP ZAP", src: "/logos/tools/zap.svg" },
  { name: "JMeter", src: "/logos/tools/apachejmeter.svg" },
  { name: "Postman", src: "/logos/tools/postman.svg" },
  { name: "Jira + Xray", src: "/logos/tools/jira.svg" },
  { name: "Git", src: "/logos/tools/git.svg" },
  { name: "Jenkins", src: "/logos/tools/jenkins.svg" },
  { name: "Claude Code", src: "/logos/tools/claudecode.svg" },
  { name: "Cursor", src: "/logos/tools/cursor.svg" },
  { name: "Antigravity", src: "/logos/tools/antigravity.png" },
];

export default function Tools() {
  return (
    <div className="marquee-mask relative mb-12 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] py-7">
      <div className="marquee flex w-max hover:[animation-play-state:paused]">
        {[0, 1].map((copy) => (
          <div
            key={copy}
            aria-hidden={copy === 1}
            className="marquee-set flex items-start gap-12 pr-12"
          >
            {tools.map((t) => (
              <div key={t.name} className="flex w-16 flex-col items-center gap-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={t.src}
                  alt={copy === 0 ? `${t.name} logo` : ""}
                  title={t.name}
                  className="h-8 w-8 object-contain opacity-55 brightness-0 invert transition-opacity duration-300 hover:opacity-90"
                />
                <span className="whitespace-nowrap text-center font-mono text-[10px] leading-tight text-slate-500">
                  {t.name}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
