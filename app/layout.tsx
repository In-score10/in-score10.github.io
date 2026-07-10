import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const GA_ID = "G-37RHE88J10";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const grotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-grotesk" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" });

export const metadata: Metadata = {
  metadataBase: new URL("https://sudasunviraj.github.io"),
  title: "Sudasun Malaviarachchi — Senior QA Engineer · Security Testing & Test Automation",
  description:
    "Sudasun Malaviarachchi — Senior QA Engineer in FinTech specializing in security testing (DAST/OWASP ZAP), test automation frameworks (Playwright, TypeScript, Cucumber BDD), agentic-AI-assisted QA, and decision-ready technical reporting.",
  openGraph: {
    title: "Sudasun Malaviarachchi — Senior QA Engineer",
    description:
      "Security testing, test automation frameworks from scratch, and agentic AI in QA. I find the defects that matter — and kill the noise that doesn't.",
    url: "https://sudasunviraj.github.io",
    siteName: "Sudasun Malaviarachchi — Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sudasun Malaviarachchi — Senior QA Engineer",
    description:
      "Security testing, test automation frameworks from scratch, and agentic AI in QA.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${grotesk.variable} ${mono.variable}`}>
      <body className="bg-[#06090f] text-slate-200 antialiased">
        {children}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
