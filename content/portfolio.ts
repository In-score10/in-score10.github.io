export type Signal = "applied" | "working" | "foundational";

export const signalLabel: Record<Signal, string> = {
  applied: "Applied in production",
  working: "Working",
  foundational: "Foundational",
};

export interface Metric {
  value: number;
  suffix: string;
  label: string;
}

export const metrics: Metric[] = [
  {
    value: 3,
    suffix: "+",
    label: "years assuring quality across FinTech, enterprise SaaS, e-commerce & cloud communications",
  },
  {
    value: 8,
    suffix: "+",
    label: "products tested end-to-end across web, mobile & POS",
  },
  {
    value: 2000,
    suffix: "+",
    label: "defects investigated across my career — 400+ tracked to 95% resolution on one release train alone",
  },
  {
    value: 5,
    suffix: "",
    label: "automation stacks applied in production: Playwright, Cucumber, Selenium, Katalon, TAR",
  },
];

export interface CaseStudy {
  tag: string;
  title: string;
  featured?: boolean;
  situation: string;
  approach: string;
  result: string;
  diagram?: "framework" | "triage";
}

export const caseStudies: CaseStudy[] = [
  {
    tag: "Automation Framework · Playwright · TypeScript · Cucumber BDD",
    title: "Standing Up Test Automation from Zero: a Playwright Framework for a FinTech Platform",
    diagram: "framework",
    situation:
      "DigiApp is a workforce-management platform built for CDB, a FinTech customer — a domain where employee PII and compliance expectations raise the cost of every defect — and it had no test automation framework. As Senior QA Engineer at Modernie Business Solutions, I owned building that capability from scratch, on the same platform whose security posture I test (next case study).",
    approach:
      "I designed and built the automation framework end-to-end on Playwright and TypeScript with a Cucumber BDD layer, so scenarios read as business-legible specifications while executing as fast, reliable browser automation. I fold agentic AI into day-to-day QA work — test design, coverage analysis, and suite maintenance — and complement functional automation with Apache JMeter load/stress testing and a security-aware testing lens appropriate to the FinTech domain.",
    result:
      "A from-scratch automation foundation the team can extend: BDD scenarios that double as living documentation, reliable cross-browser regression coverage, and a framework architecture built for CI. (Metrics to add: scenario count, regression cycle time, coverage growth.)",
  },
  {
    tag: "Security Testing · DAST · OWASP Top 10",
    title: "Separating Real Risk from Scanner Noise: Securing an HR Platform's Employee Data",
    featured: true,
    situation:
      "The same CDB DigiApp platform — an HR / workforce-management web application built as a React SPA over a Firebase REST API — holds real employee PII. As part of my end-to-end QA ownership of the platform at Modernie, I run its security testing: automated scanning alone was producing alarming but unvetted output, and the sensitivity of the data meant both false alarms and missed access-control flaws carried real cost.",
    approach:
      "I ran authenticated OWASP ZAP scans as a deliberately low-privilege user, then reconciled every black-box finding against the API's own OpenAPI specification. The scanner's loudest alerts — a cluster of apparent file disclosures (/.env, /.git/config, an /auth/dev-login endpoint) — traced back to the SPA's catch-all route serving the homepage on every path: the entire cluster collapsed to zero real issues under triage. That same reconciliation surfaced what the automated pass under-weighted: a broken-access-control (BOLA) flaw allowing a plain user token to read other employees' HR records and the org-wide audit log, and an inconsistent-authorization pattern where the same resource was protected on one HTTP verb and wide open on another. I delivered each cycle as a dated regression suite and re-verified the open access-control findings against live data on every redeployment.",
    result:
      "The team remediated the hardening-tier findings (frontend security headers, version banner removal) by the next deployment. The access-control findings — the ones with genuine HR-privacy and audit consequences — were re-confirmed still open across several redeployments and remained flagged with current evidence, so the risk register reflected reality rather than a one-time snapshot.",
  },
  {
    tag: "Test Automation · Enterprise Release Train",
    title: "Test Automation at Enterprise Scale: IFS Cloud Emissions Management",
    situation:
      "IFS Cloud's Emissions Management module is an enterprise sustainability product shipping on a demanding cadence — 3+ major releases and 12+ service updates during my tenure — with a cross-functional team of 20+ engineers.",
    approach:
      "I led integration test automation using TAR and built UI automation in Katalon, alongside REST API validation covering the module's service layer. Testing was mixed manual + automated, with defects managed end-to-end through Jira + Xray so that every release carried a traceable quality record.",
    result:
      "400+ defects identified and tracked to a 95% resolution rate across the release train — quality signal delivered consistently across every major release and service update rather than in one-off pushes.",
  },
  {
    tag: "Functional · Regression · API · Selenium + Cucumber",
    title: "One QA Function, Four Products: the appiGo & Applova E-commerce Suites",
    situation:
      "As Associate SE–QA (March 2023 – April 2024), I covered two parallel product families: appiGo's mobile/web e-commerce suite (Retailer, Pay, Rush, Restohub) and Applova's POS + e-commerce platform spanning web, mobile, and physical POS — payment, ordering, and fulfillment workflows that cross device and platform boundaries.",
    approach:
      "I ran functional, regression, and API testing across the appiGo products and end-to-end workflow and integration testing on Applova, automating the highest-value UI paths with Selenium + Cucumber so regression coverage kept pace with releases across four products simultaneously.",
    result:
      "Sustained release-quality coverage across four distinct products and three platform types — web, mobile, and POS — with a single QA function.",
  },
  {
    tag: "API Reliability · Backend Validation",
    title: "Messaging You Can Bet On: API Reliability for a CPaaS Platform",
    situation:
      "A cloud communications (CPaaS) platform where the product is the API: message delivery failures are customer-visible immediately, so backend correctness and reliability were the core quality risk.",
    approach:
      "I focused on API and backend validation with targeted messaging reliability testing, complemented by Selenium UI automation for the platform's management surfaces.",
    result:
      "Backend and messaging paths validated release over release, keeping delivery-critical defects from reaching customer-facing traffic.",
  },
];

export interface Skill {
  name: string;
  signal: Signal;
  evidence?: string;
}

export interface SkillGroup {
  title: string;
  skills: Skill[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Security Testing",
    skills: [
      {
        name: "DAST with OWASP ZAP (authenticated, role-based scans)",
        signal: "applied",
        evidence: "DigiApp engagement — Case Study 1",
      },
      {
        name: "OWASP Top 10 / API Top 10 mapping (incl. BOLA)",
        signal: "applied",
        evidence: "Identified and re-verified live BOLA exposure of HR records",
      },
      {
        name: "White-box vs. black-box reconciliation",
        signal: "applied",
        evidence: "Collapsed an entire false-positive cluster to zero via SPA routing analysis",
      },
      {
        name: "False-positive triage discipline",
        signal: "applied",
        evidence: "Flagship differentiator — see How I Work",
      },
      {
        name: "Pen-testing awareness in FinTech risk contexts",
        signal: "working",
        evidence: "Security-aware testing lens at Modernie (FinTech)",
      },
    ],
  },
  {
    title: "Test Automation & API Validation",
    skills: [
      {
        name: "Playwright + TypeScript (framework design from scratch)",
        signal: "applied",
        evidence: "CDB DigiApp automation framework — Modernie (FinTech)",
      },
      {
        name: "Cucumber BDD",
        signal: "applied",
        evidence: "BDD layer of the CDB DigiApp framework; earlier Selenium + Cucumber suites",
      },
      { name: "Katalon (UI automation)", signal: "applied", evidence: "IFS Cloud – Emissions Management" },
      { name: "TAR (integration test automation)", signal: "applied", evidence: "Led integration automation on IFS Cloud" },
      { name: "Selenium + Cucumber (BDD UI automation)", signal: "applied", evidence: "appiGo suite, CPaaS" },
      { name: "REST API testing & validation", signal: "applied", evidence: "IFS Cloud, CPaaS backend/messaging validation" },
    ],
  },
  {
    title: "Test Design & Management",
    skills: [
      {
        name: "Regression suite design across long release cycles",
        signal: "applied",
        evidence: "3+ major releases, 12+ service updates (IFS Cloud)",
      },
      {
        name: "Defect lifecycle management (Jira + Xray)",
        signal: "applied",
        evidence: "400+ defects tracked, 95% resolution rate",
      },
      {
        name: "Cross-functional collaboration",
        signal: "applied",
        evidence: "20+ member team, IFS Cloud",
      },
    ],
  },
  {
    title: "AI-Augmented QA & Performance",
    skills: [
      {
        name: "Agentic AI in QA workflows (test design, coverage analysis, maintenance)",
        signal: "applied",
        evidence: "Claude Code, Cursor, Google Antigravity — daily QA practice at Modernie (FinTech)",
      },
      {
        name: "Performance / load & stress testing (Apache JMeter)",
        signal: "working",
        evidence: "Load and stress profiles for FinTech workloads at Modernie",
      },
    ],
  },
  {
    title: "Documentation & Reporting",
    skills: [
      {
        name: "Security reporting (dated, per-cycle regression reports)",
        signal: "applied",
        evidence: "DigiApp report structure — Case Study 1",
      },
      {
        name: "Decision-ready deliverables from raw findings",
        signal: "applied",
        evidence: "Severity-ranked, re-verified findings tracked across redeployments",
      },
    ],
  },
  {
    title: "DevOps & Tooling",
    skills: [
      { name: "Git, CI/CD concepts", signal: "working", evidence: "Daily use across all roles" },
      { name: "Jenkins", signal: "foundational", evidence: "Basic pipeline exposure" },
      { name: "Linux", signal: "foundational" },
      { name: "AWS", signal: "foundational" },
    ],
  },
];

export interface Principle {
  title: string;
  body: string;
}

export const principles: Principle[] = [
  {
    title: "Quality is assured across the lifecycle — not inspected in at the end.",
    body: "Testing a deployed build is the last checkpoint, not the first. I get involved where defects are cheapest to prevent: reviewing requirements for testability, writing BDD scenarios that act as executable specifications before the code exists, wiring automation into the pipeline so every change is verified on its way in, and carrying security and performance concerns from design conversations through to dated post-deployment regression cycles.",
  },
  {
    title: "A finding is a claim until it's reproduced.",
    body: "Scanners report signals, not vulnerabilities. Before anything reaches a report, I reproduce it manually, check it against the API contract, and ask what the application is actually doing — which is how a page of alarming file-disclosure alerts becomes zero issues, and a quiet authorization inconsistency becomes the top of the risk register.",
  },
  {
    title: "False positives are a cost, not a formality.",
    body: "Every noise finding a team triages erodes trust in the next report. I would rather deliver six confirmed findings than forty possible ones.",
  },
  {
    title: "Verification has a date on it.",
    body: "Findings get re-tested against live systems every cycle, and reports are dated regression suites — so “fixed” means re-verified, and “still open” is a current fact, not a stale one.",
  },
  {
    title: "The deliverable is a decision, not a document.",
    body: "Reports are structured so a reader can act on them in one pass: severity ranked by real-world consequence, reproduction steps that work, and a clear line between “fix now,” “harden soon,” and “accepted risk.”",
  },
];

export interface Role {
  dates: string;
  role: string;
  detail: string;
}

export const experience: Role[] = [
  {
    dates: "Apr 2026 – Present",
    role: "Senior Quality Assurance Engineer",
    detail:
      "Modernie Business Solutions — FinTech domain. Built the CDB DigiApp test automation framework from scratch (Playwright, TypeScript, Cucumber BDD); agentic-AI-assisted QA workflows; performance/load testing with Apache JMeter; security-aware testing for FinTech risk contexts.",
  },
  {
    dates: "Apr 2024 – Apr 2026",
    role: "Software QA Engineer",
    detail:
      "IFS — Emissions Management module of IFS Cloud. Integration test automation (TAR), UI automation (Katalon), REST API validation.",
  },
  {
    dates: "Mar 2023 – Apr 2024",
    role: "Associate Software Engineer – QA",
    detail:
      "hSenid Mobile Solutions — appiGo (Retailer, Pay, Rush, Restohub), Applova (POS + e-commerce), and a CPaaS platform. Functional, regression, API, and end-to-end testing; Selenium + Cucumber automation.",
  },
];

export const contact = {
  email: "mvirajsudasun@gmail.com",
  // Base64-encoded phone number, decoded client-side so it never appears
  // in the static HTML or as plain text in the bundle (see PhoneLink.tsx)
  phoneEncoded: "Kzk0IDc2IDczNiA0Nzk1",
  github: "https://github.com/SudasunViraj",
  linkedin: "https://www.linkedin.com/in/sudasun-malaviarachchi-77a02a182/",
  // TODO: add CV download URL when available
};
