import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { ToolsSection } from "@/components/tools/ToolsSection";
import { LiveToolSection } from "@/components/LiveTool";
import { AILayer } from "@/components/AILayer";
import { Ecosystem } from "@/components/Ecosystem";
import { Projects } from "@/components/Projects";
import { FinalCTA, Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ToolsSection />
        <LiveToolSection />
        <AILayer />
        <Ecosystem />
        <Projects />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
