import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Resume } from "@/components/sections/Resume";
import { Timeline } from "@/components/sections/Timeline";
import { Certifications } from "@/components/sections/Certifications";
import { LanguagesSection } from "@/components/sections/LanguagesSection";
import { WhyHire } from "@/components/sections/WhyHire";
import { Contact } from "@/components/sections/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Belgin's Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Belgin Lino SP — aspiring software developer building Python, web and automation projects. Open to opportunities in India and Germany.",
      },
      { property: "og:title", content: "Belgin Lino SP — Aspiring Software Developer" },
      {
        property: "og:description",
        content:
          "Python · React · Django · Automation. Real projects, clean code, and a passion for solving real-world problems.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Resume />
        <Timeline />
        <Certifications />
        <LanguagesSection />
        <WhyHire />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
