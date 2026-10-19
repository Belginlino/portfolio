import { motion } from "framer-motion";
import { revealCard } from "@/components/motion/scroll";
import { Download, Eye, FileText, CheckCircle2 } from "lucide-react";
import { Section } from "@/components/Section";
import { personalInfo } from "@/data/portfolio";
import { downloadResume } from "@/utils/downloadResume";

const highlights = [
  "B.Tech AI & Data Science (St. Xavier's)",
  "Full-Stack Web & Python Engineering",
  "Verified Java Internship (White Aura X)",
  "Production POS & Full-Stack Projects",
  "Open to Technical Internships",
];

export function Resume() {
  return (
    <Section
      id="resume"
      eyebrow="RESUME"
      title={
        <>
          GRAB MY <span className="text-[#FF6A1A]">RESUME</span>
        </>
      }
      description="A concise overview of my technical skills, software projects, and experience."
    >
      <motion.div
        {...revealCard(0)}
        className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-[#141414] p-8 shadow-2xl sm:p-12"
      >
        <div className="pointer-events-none absolute right-0 -top-20 h-64 w-64 rounded-full bg-[#FF6A1A]/15 blur-3xl max-w-full" />

        <div className="relative grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#FF6A1A]/30 bg-[#FF6A1A]/10 px-3.5 py-1 font-mono text-xs font-semibold text-[#FF6A1A]">
              <FileText className="h-3.5 w-3.5" /> PDF Document
            </span>
            <h3 className="mt-4 font-hero text-2xl font-bold uppercase text-white sm:text-3xl">
              Aspiring developer ready to contribute.
            </h3>
            <p className="mt-3 text-xs leading-relaxed text-[#9A9A9A] sm:text-sm">
              From Python automation tools to React frontends — explore my hands-on project experience and qualifications.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={personalInfo.resumeUrl}
                download="Belgin_Lino_Resume.pdf"
                onClick={downloadResume}
                className="inline-flex items-center gap-2 rounded-xl bg-[#FF6A1A] px-5 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-[0_0_15px_rgba(255,106,26,0.4)] transition-all hover:bg-[#FF7B2E] hover:scale-[1.02]"
              >
                <Download className="h-4 w-4" /> Download Resume
              </a>
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-[#1e1e1e] px-5 py-3 text-xs font-bold uppercase tracking-wider text-white transition-all hover:border-[#FF6A1A]/40"
              >
                <Eye className="h-4 w-4 text-[#FF6A1A]" /> View PDF
              </a>
            </div>
          </div>

          <ul className="grid gap-3">
            {highlights.map((h, i) => (
              <motion.li
                key={h}
                {...revealCard(i)}
                className="flex items-center gap-3 rounded-xl border border-white/5 bg-[#1a1a1a] px-4 py-3 text-xs font-semibold text-white"
              >
                <CheckCircle2 className="h-4 w-4 text-[#FF6A1A]" />
                <span>{h}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </Section>
  );
}
