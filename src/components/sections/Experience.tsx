import { motion } from "framer-motion";
import { revealCard } from "@/components/motion/scroll";
import { Briefcase, Building2, Calendar, MapPin, CheckCircle2, Award, Terminal } from "lucide-react";
import { Section } from "@/components/Section";
import { experiences } from "@/data/portfolio";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="EXPERIENCE & TRAINING"
      title={
        <>
          PRACTICAL <span className="text-[#FF6A1A]">EXPERIENCE &amp; TRAINING</span>
        </>
      }
      description="Hands-on software development internship, professional full-stack training, and developer experience."
    >
      <div className="mx-auto max-w-4xl space-y-8">
        {experiences.map((exp, idx) => {
          const isInternship = exp.type === "Internship";
          const isTraining = exp.type === "Professional Training";

          return (
            <motion.article
              key={exp.id}
              {...revealCard(idx, idx % 2 === 0 ? "left" : "right")}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#141414] p-6 sm:p-8 transition-all duration-300 hover:border-[#FF6A1A]/40 hover:bg-[#161616] hover:shadow-[0_0_30px_rgba(255,106,26,0.15)]"
            >
              {/* Type Badge & Status */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/5 pb-5">
                <div className="flex items-center gap-2.5">
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider ${
                      isInternship
                        ? "border border-amber-500/30 bg-amber-500/10 text-amber-400"
                        : isTraining
                        ? "border border-sky-500/30 bg-sky-500/10 text-sky-400"
                        : "border border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
                    }`}
                  >
                    {isInternship ? (
                      <Briefcase className="h-3 w-3" />
                    ) : isTraining ? (
                      <Award className="h-3 w-3" />
                    ) : (
                      <Terminal className="h-3 w-3" />
                    )}
                    <span>{exp.type}</span>
                  </span>

                  <span className="inline-flex items-center gap-1 font-mono text-xs text-[#9A9A9A]">
                    <Calendar className="h-3.5 w-3.5 text-[#FF6A1A]" />
                    <span>{exp.duration}</span>
                  </span>
                </div>

                <span className="rounded-md border border-white/10 bg-[#1E1E1E] px-2.5 py-0.5 font-mono text-[10px] text-[#A3A3A3]">
                  {exp.status}
                </span>
              </div>

              {/* Role & Company Header */}
              <div className="mt-5">
                <h3 className="font-hero text-xl sm:text-2xl font-bold uppercase tracking-tight text-white group-hover:text-[#FF6A1A] transition-colors">
                  {exp.role}
                </h3>
                <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs sm:text-sm text-[#A3A3A3]">
                  <span className="flex items-center gap-1.5 font-medium text-white">
                    <Building2 className="h-4 w-4 text-[#FF6A1A]" />
                    {exp.company}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5 text-[#737373]" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="mt-4 text-xs sm:text-sm leading-relaxed text-[#9A9A9A]">
                {exp.description}
              </p>

              {/* Responsibilities / Accomplishments */}
              <div className="mt-5">
                <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-white mb-2.5">
                  Verified Responsibilities &amp; Outcomes:
                </h4>
                <ul className="space-y-2">
                  {exp.achievements.map((ach) => (
                    <li key={ach} className="flex items-start gap-2.5 text-xs text-[#A3A3A3]">
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#FF6A1A]" />
                      <span className="leading-relaxed">{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills Tags */}
              <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-white/5 pt-4">
                <span className="font-mono text-[11px] text-[#737373] mr-1">Skills:</span>
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-white/10 bg-[#1A1A1A] px-2.5 py-1 font-mono text-[11px] text-[#E5E5E5]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.article>
          );
        })}
      </div>
    </Section>
  );
}
