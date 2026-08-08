import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { TechStack } from "@/components/sections/TechStack";
import { Projects } from "@/components/sections/Projects";
import { Resume } from "@/components/sections/Resume";
import { Timeline } from "@/components/sections/Timeline";
import { Certifications } from "@/components/sections/Certifications";
import { LanguagesSection } from "@/components/sections/LanguagesSection";
import { Contact } from "@/components/sections/Contact";
import { Toaster } from "@/components/ui/sonner";

export default function App() {
  return (
    <div className="relative min-h-screen w-full max-w-full overflow-x-hidden bg-[#0A0A0A] text-[#F5F5F5] selection:bg-[#FF6A1A] selection:text-white">
      <Navbar />
      <main className="w-full max-w-full min-w-0 overflow-x-hidden">
        <Hero />
        <About />
        <Services />
        <TechStack />
        <Projects />
        <Resume />
        <Timeline />
        <Certifications />
        <LanguagesSection />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      <Toaster />
    </div>
  );
}
