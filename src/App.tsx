import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Services } from "@/components/sections/Services";
import { TechStack } from "@/components/sections/TechStack";
import { Projects } from "@/components/sections/Projects";
import { GithubActivity } from "@/components/sections/GithubActivity";
import { Resume } from "@/components/sections/Resume";
import { Certifications } from "@/components/sections/Certifications";
import { Contact } from "@/components/sections/Contact";
import { Toaster } from "@/components/ui/sonner";

export default function App() {
  return (
    <div className="relative min-h-screen w-full max-w-full overflow-x-hidden bg-[#0A0A0A] text-[#F5F5F5] selection:bg-[#FF6A1A] selection:text-white">
      <Navbar />
      <main className="w-full max-w-full min-w-0 overflow-x-hidden">
        <Hero />
        <About />
        <Experience />
        <Services />
        <TechStack />
        <Projects />
        <GithubActivity />
        <Resume />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      <Toaster />
    </div>
  );
}
