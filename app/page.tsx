import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ProofBar from "@/components/ProofBar";
import CaseStudies from "@/components/CaseStudies";
import Skills from "@/components/Skills";
import HowIWork from "@/components/HowIWork";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ProofBar />
        <CaseStudies />
        <Skills />
        <HowIWork />
        <Experience />
      </main>
      <Footer />
    </>
  );
}
