import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { personalInfo, education } from "@/data/portfolio";
import {
  GraduationCap,
  Briefcase,
  MapPin,
  Code2,
  Cpu,
  Layers,
  Sparkles,
  Terminal,
} from "lucide-react";

const focusHighlights = [
  {
    icon: Layers,
    title: "Full-Stack Web Engineering",
    description:
      "Building practical, responsive web applications with React, TypeScript, Tailwind CSS, Django, and modern component systems.",
  },
  {
    icon: Terminal,
    title: "Python Tools & Scripting",
    description:
      "Developing backend APIs, automation workflows, data preprocessing scripts, and command-line developer utilities.",
  },
  {
    icon: Cpu,
    title: "Applied AI & ML Prototyping",
    description:
      "Integrating machine-learning models and computer vision pipelines into accessible, real-time web applications.",
  },
  {
    icon: Sparkles,
    title: "Project-Centric Problem Solving",
    description:
      "Focused on shipping working software — from production POS billing systems to academic intelligence platforms.",
  },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="ABOUT ME"
      title={
        <>
          BUILDING IDEAS INTO <span className="text-[#FF6A1A]">PRACTICAL SOFTWARE</span>
        </>
      }
      description="Artificial Intelligence & Data Science student at St. Xavier's Catholic College of Engineering with hands-on experience developing full-stack web applications and Python tools."
    >
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-14 items-start">
        {/* Left Column: Personal Story & Education */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="rounded-2xl border border-white/10 bg-[#141414] p-6 sm:p-8 shadow-xl">
            <h3 className="font-hero text-xl sm:text-2xl font-bold uppercase tracking-tight text-white mb-4">
              My Journey &amp; Focus
            </h3>
            <p className="text-xs sm:text-sm leading-relaxed text-[#9A9A9A]">
              {personalInfo.longBio}
            </p>
            <p className="mt-4 text-xs sm:text-sm leading-relaxed text-[#9A9A9A]">
              My core technical focus centers on bridging <span className="text-white font-medium">Python backends</span>,{" "}
              <span className="text-[#FF6A1A] font-medium">responsive React frontends</span>, and{" "}
              <span className="text-white font-medium">applied machine learning</span> to solve concrete operational problems.
            </p>

            {/* Quick Facts List */}
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                {
                  Icon: GraduationCap,
                  label: "Degree Program",
                  text: education.degree,
                },
                {
                  Icon: MapPin,
                  label: "Institution",
                  text: "St. Xavier's Catholic College, Chunkankadai",
                },
                {
                  Icon: Briefcase,
                  label: "Opportunity Status",
                  text: "Open to Software / AI Internships",
                },
                {
                  Icon: Code2,
                  label: "Engineering Mindset",
                  text: "Production-ready, Maintainable Code",
                },
              ].map(({ Icon, label, text }) => (
                <li
                  key={label}
                  className="rounded-xl border border-white/5 bg-[#1a1a1a] p-3.5"
                >
                  <div className="flex items-center gap-2 text-[#FF6A1A] mb-1">
                    <Icon className="h-4 w-4" />
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#A3A3A3]">
                      {label}
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-white leading-snug">{text}</p>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Right Column: 2x2 Feature Highlights */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {focusHighlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#141414] p-6 transition-all duration-300 hover:border-[#FF6A1A]/40 hover:bg-[#1a1a1a] hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(255,106,26,0.15)]"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#FF6A1A]/10 text-[#FF6A1A] transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#FF6A1A] group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h4 className="font-display text-base font-bold text-white mb-2 group-hover:text-[#FF6A1A] transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs leading-relaxed text-[#9A9A9A]">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
