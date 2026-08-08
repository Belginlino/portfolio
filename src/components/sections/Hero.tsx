import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles, FolderGit2, Cpu, Clock, CheckCircle2 } from "lucide-react";
import heroPhoto from "@/assets/hero-visual.jpg";
import { personalInfo, stats } from "@/data/portfolio";
import { useTypewriter } from "@/hooks/use-typewriter";

const statIcons = [FolderGit2, Cpu, Clock, CheckCircle2];

export function Hero() {
  const roleText = useTypewriter(personalInfo.roles, 70, 1600);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className="relative isolate min-h-screen overflow-hidden bg-[#0A0A0A] pt-32 pb-20 lg:pt-36 lg:pb-28"
    >
      {/* Faint Dot Grid Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-dot-grid opacity-30" />

      {/* Subtle cursor-following ambient orange glow */}
      <div
        className="pointer-events-none absolute -z-10 h-[500px] w-[500px] rounded-full bg-[#FF6A1A]/10 blur-[120px] transition-transform duration-300 ease-out"
        style={{
          left: `${mousePos.x - 250}px`,
          top: `${mousePos.y - 250}px`,
        }}
      />

      {/* Static soft ambient orange top light */}
      <div className="pointer-events-none absolute top-10 left-1/3 -z-10 h-72 w-96 rounded-full bg-[#FF6A1A]/10 blur-[130px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 md:grid-cols-2 lg:grid-cols-[1.1fr_0.9fr_auto] lg:gap-10 xl:gap-14">
          
          {/* LEFT: Text Content & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Monospace accent tagline */}
            <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-widest text-[#FF6A1A]">
              <Sparkles className="h-3.5 w-3.5" />
              <span>&lt; hello, I'm /&gt;</span>
            </div>

            {/* Oversized hero heading with responsive fluid scaling */}
            <h1 className="mt-3 font-hero text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold uppercase leading-[0.95] tracking-tight text-white break-words">
              BELGIN <br />
              <span className="text-white/90">LINO</span>
              <span className="text-[#FF6A1A]">.</span>
            </h1>

            {/* Role text with typing effect */}
            <div className="mt-5 flex items-center gap-2 font-mono text-xs sm:text-sm font-medium text-[#F5F5F5] sm:text-base">
              <span className="text-[#FF6A1A]">&gt;</span>
              <span className="truncate">{roleText}</span>
              <span className="inline-block h-4 w-[2px] shrink-0 animate-blink bg-[#FF6A1A]" />
            </div>

            {/* Bio text */}
            <p className="mt-5 max-w-lg text-xs leading-relaxed text-[#9A9A9A] sm:text-base">
              {personalInfo.bio}
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
              {/* Primary CTA: Solid Orange */}
              <a
                href="#projects"
                className="group relative inline-flex min-h-[44px] items-center gap-2.5 overflow-hidden rounded-xl bg-[#FF6A1A] px-5 py-3 sm:px-6 sm:py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-[0_0_20px_rgba(255,106,26,0.35)] transition-all duration-300 hover:scale-[1.03] hover:bg-[#FF7B2E] hover:shadow-[0_0_30px_rgba(255,106,26,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white active:scale-[0.98]"
              >
                <span>View Projects</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>

              {/* Secondary CTA: Dark with Orange Border */}
              <a
                href={personalInfo.resumeUrl}
                download
                className="inline-flex min-h-[44px] items-center gap-2 rounded-xl border border-[#FF6A1A]/40 bg-[#141414] px-5 py-3 sm:px-6 sm:py-3.5 text-xs font-bold uppercase tracking-wider text-white transition-all duration-300 hover:border-[#FF6A1A] hover:bg-[#FF6A1A]/10 hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6A1A] active:scale-[0.98]"
              >
                <Download className="h-4 w-4 text-[#FF6A1A]" />
                <span>Resume</span>
              </a>
            </div>

            {/* Social Icons */}
            <div className="mt-8 sm:mt-10 flex items-center gap-3">
              <span className="font-mono text-xs uppercase tracking-wider text-[#9A9A9A]">Follow:</span>
              {[
                { Icon: Github, href: personalInfo.github, label: "GitHub" },
                { Icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn" },
                { Icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="group flex h-11 w-11 min-h-[44px] min-w-[44px] items-center justify-center rounded-xl border border-white/10 bg-[#141414] text-[#9A9A9A] transition-all duration-200 hover:border-[#FF6A1A]/50 hover:bg-[#1e1e1e] hover:text-[#FF6A1A] hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6A1A]"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* CENTER/RIGHT: Portrait Photo + Glowing Ring */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            className="relative flex justify-center py-4 sm:py-6 overflow-hidden"
          >
            {/* Glowing Orange Ring / Pulsing Circle behind photo */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-56 w-56 sm:h-72 sm:w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FF6A1A] animate-pulse-glow" />
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 sm:h-80 sm:w-80 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#FF6A1A]/30 opacity-70" />
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 sm:h-96 sm:w-96 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#FF6A1A]/15 opacity-40" />

            {/* Photo Container */}
            <div className="group relative z-10 cursor-default max-w-full overflow-hidden rounded-2xl border border-white/10 bg-[#141414] shadow-2xl backdrop-blur transition-all duration-500 hover:border-[#FF6A1A]/60 hover:shadow-[0_0_35px_rgba(255,106,26,0.35)]">
              <img
                src={heroPhoto}
                alt="Belgin Lino SP"
                loading="eager"
                className="h-72 w-64 sm:h-96 sm:w-80 max-w-full object-cover object-top filter grayscale contrast-125 transition-all duration-500 group-hover:grayscale-0 group-hover:contrast-100 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-30" />
              <div className="absolute bottom-3 left-3 right-3 sm:left-4 sm:right-4 rounded-xl border border-white/10 bg-[#141414]/90 p-2 sm:p-2.5 backdrop-blur-md transition-all duration-300 group-hover:border-[#FF6A1A]/40">
                <p className="font-mono text-xs font-semibold text-white">Belgin Lino SP</p>
                <p className="font-mono text-[10px] text-[#9A9A9A]">AI &amp; Fullstack Developer</p>
              </div>
            </div>
          </motion.div>

          {/* FAR RIGHT: Vertical Stats List with Icons */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="col-span-1 md:col-span-2 lg:col-span-1 grid grid-cols-2 gap-3 p-4 sm:flex sm:flex-row sm:flex-wrap sm:justify-around sm:gap-4 sm:p-5 lg:flex-col lg:justify-center lg:gap-6 lg:p-6 rounded-2xl border border-white/10 bg-[#141414]"
          >
            {stats.map((item, idx) => {
              const Icon = statIcons[idx % statIcons.length];
              return (
                <div key={item.label} className="flex items-center gap-2.5 sm:gap-3.5 min-w-0">
                  <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-xl border border-[#FF6A1A]/30 bg-[#FF6A1A]/10 text-[#FF6A1A]">
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-hero text-xl font-extrabold tracking-tight text-white sm:text-2xl lg:text-3xl">
                      {item.value}
                      <span className="text-[#FF6A1A]">{item.suffix}</span>
                    </p>
                    <p className="text-[10px] sm:text-[11px] font-medium uppercase tracking-wider text-[#9A9A9A] break-words leading-tight">
                      {item.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
