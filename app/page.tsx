import Nav from "@/components/Nav";
import ScrollProgress from "@/components/ScrollProgress";
import Spotlight from "@/components/Spotlight";
import Hero from "@/components/Hero";
import ProofBar from "@/components/ProofBar";
import Employers from "@/components/Employers";
import CaseStudies from "@/components/CaseStudies";
import AiQa from "@/components/AiQa";
import Skills from "@/components/Skills";
import HowIWork from "@/components/HowIWork";
import Writing from "@/components/Writing";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Spotlight />
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <ProofBar />
        <Employers />
        <CaseStudies />
        <AiQa />
        <Skills />
        <HowIWork />
        <Writing />
        <Experience />
      </main>
      <Footer />
    </>
  );
}
