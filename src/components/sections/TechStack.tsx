import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { techStackCategories, type TechSkill, type SkillProficiency } from "@/data/portfolio";
import {
  Terminal,
  Code2,
  FileCode,
  Layers,
  Globe,
  Layout,
  Server,
  Cpu,
  Database,
  Cloud,
  HardDrive,
  Flame,
  Binary,
  Eye,
  Bot,
  GitBranch,
  Github,
  Code,
  UploadCloud,
  Network,
  Zap,
  Coffee,
  Sparkles,
} from "lucide-react";

const iconLookup: Record<string, typeof Terminal> = {
  Terminal,
  Code2,
  Coffee,
  FileCode,
  Cpu,
  Layers,
  Globe,
  Layout,
  Sparkles,
  Zap,
  Server,
  Network,
  Database,
  HardDrive,
  Cloud,
  Flame,
  Binary,
  Eye,
  Bot,
  GitBranch,
  Github,
  Code,
  UploadCloud,
  TerminalSquare: Terminal,
};

function getBadgeStyle(level: SkillProficiency) {
  switch (level) {
    case "Project Experience":
      return "border-[#FF6A1A]/40 bg-[#FF6A1A]/10 text-[#FF6A1A]";
    case "Practicing":
      return "border-sky-500/30 bg-sky-500/10 text-sky-400";
    case "Familiar":
      return "border-neutral-700 bg-neutral-800 text-neutral-300";
    default:
      return "border-neutral-700 bg-neutral-800 text-neutral-300";
  }
}

export function TechStack() {
  return (
    <Section
      id="stack"
      eyebrow="TECHNICAL CAPABILITIES"
      title={
        <>
          CATEGORIZED <span className="text-[#FF6A1A]">TECH STACK</span>
        </>
      }
      description="Technologies, frameworks, and developer tools verified through actual projects and hands-on coursework."
    >
      {/* Category Level Legend */}
      <div className="mb-10 flex flex-wrap items-center justify-center gap-3 text-xs font-mono">
        <span className="text-[#888888] font-semibold mr-1">Experience Levels:</span>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-[#FF6A1A]/40 bg-[#FF6A1A]/10 px-3 py-1 font-semibold text-[#FF6A1A]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#FF6A1A]" />
          Project Experience
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 font-semibold text-sky-400">
          <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
          Practicing
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-neutral-700 bg-neutral-800 px-3 py-1 font-semibold text-neutral-300">
          <span className="h-1.5 w-1.5 rounded-full bg-neutral-400" />
          Familiar
        </span>
      </div>

      {/* Grid of Categories */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {techStackCategories.map((group, groupIdx) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: groupIdx * 0.06 }}
            className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-[#141414] p-6 transition-all duration-300 hover:border-[#FF6A1A]/40 hover:bg-[#161616] hover:shadow-[0_0_25px_rgba(255,106,26,0.15)]"
          >
            <div>
              <div className="flex items-center justify-between border-b border-white/5 pb-3">
                <h3 className="font-hero text-base font-bold uppercase tracking-tight text-white group-hover:text-[#FF6A1A] transition-colors">
                  {group.category}
                </h3>
                <span className="font-mono text-[11px] text-[#737373]">
                  {group.items.length} skills
                </span>
              </div>
              <p className="mt-2 text-xs text-[#8A8A8A] leading-relaxed">
                {group.description}
              </p>

              {/* Items in this category */}
              <div className="mt-5 space-y-3">
                {group.items.map((skill: TechSkill) => {
                  const Icon = iconLookup[skill.iconName] || Terminal;
                  const badgeClass = getBadgeStyle(skill.level);

                  return (
                    <div
                      key={skill.name}
                      className="flex items-center justify-between rounded-xl border border-white/5 bg-[#1A1A1A] p-3 transition-colors hover:border-white/10 hover:bg-[#1E1E1E]"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#252525] text-[#FF6A1A]">
                          <Icon className="h-4 w-4" />
                        </div>
                        <div className="min-w-0">
                          <p className="font-sans text-xs font-semibold text-white truncate">
                            {skill.name}
                          </p>
                          {skill.note && (
                            <p className="text-[10px] text-[#888888] truncate max-w-[150px] sm:max-w-[180px]">
                              {skill.note}
                            </p>
                          )}
                        </div>
                      </div>

                      <span
                        className={`shrink-0 rounded-md border px-2 py-0.5 font-mono text-[10px] font-medium ${badgeClass}`}
                      >
                        {skill.level}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
