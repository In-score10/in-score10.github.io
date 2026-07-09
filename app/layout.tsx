import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const grotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-grotesk" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" });

export const metadata: Metadata = {
  title: "Sudasun Malaviarachchi — Senior QA Engineer · Security Testing & Test Automation",
  description:
    "Sudasun Malaviarachchi — Senior QA Engineer in FinTech specializing in security testing (DAST/OWASP ZAP), test automation frameworks (Playwright, TypeScript, Cucumber BDD), agentic-AI-assisted QA, and decision-ready technical reporting.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${grotesk.variable} ${mono.variable}`}>
      <body className="bg-[#06090f] text-slate-200 antialiased">{children}</body>
    </html>
  );
}
