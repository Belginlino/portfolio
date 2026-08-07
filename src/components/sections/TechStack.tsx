import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { skills } from "@/data/portfolio";
import { Code2, FileCode, Layers, Server, Database, GitBranch, Cpu, Terminal, Layout, Wrench, Globe, Flame } from "lucide-react";

// Tech stack items for the horizontal icon row
const techItems = [
  { name: "Python", icon: Terminal, color: "#FF6A1A" },
  { name: "React", icon: Layers, color: "#61DAFB" },
  { name: "TypeScript", icon: FileCode, color: "#3178C6" },
  { name: "JavaScript", icon: Code2, color: "#F7DF1E" },
  { name: "Django", icon: Server, color: "#092E20" },
  { name: "Flask", icon: Cpu, color: "#FFFFFF" },
  { name: "HTML5", icon: Globe, color: "#E34F26" },
  { name: "CSS3", icon: Layout, color: "#1572B6" },
  { name: "MySQL", icon: Database, color: "#4479A1" },
  { name: "Git", icon: GitBranch, color: "#F05032" },
  { name: "GitHub", icon: Wrench, color: "#FFFFFF" },
  { name: "AI & ML", icon: Flame, color: "#FF6A1A" },
];

export function TechStack() {
  return (
    <Section
      id="stack"
      eyebrow="TECH STACK"
      title={
        <>
          POWERING MY <span className="text-[#FF6A1A]">SOLUTIONS</span>
        </>
      }
      description="Technologies, frameworks, and tools I use daily to engineer applications."
    >
      {/* Single horizontal row of icons in bordered boxes */}
      <div className="mb-14 overflow-x-auto pb-4 pt-2">
        <div className="flex min-w-max items-center justify-center gap-4 px-2">
          {techItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.04 }}
                whileHover={{ y: -6, scale: 1.1 }}
                className="group flex flex-col items-center gap-2.5 rounded-2xl border border-white/10 bg-[#141414] px-5 py-4 transition-all duration-300 hover:border-[#FF6A1A]/50 hover:bg-[#1a1a1a] hover:shadow-[0_0_20px_rgba(255,106,26,0.2)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1e1e1e] text-[#FF6A1A] transition-colors duration-300 group-hover:bg-[#FF6A1A] group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <span className="font-mono text-xs font-semibold text-[#9A9A9A] transition-colors duration-200 group-hover:text-white">
                  {item.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Category Breakdown Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, idx) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            className="rounded-2xl border border-white/10 bg-[#141414] p-6 transition-all duration-300 hover:border-white/20"
          >
            <h3 className="font-display text-base font-bold uppercase tracking-wider text-white mb-4 flex items-center justify-between border-b border-white/10 pb-3">
              <span>{group.category}</span>
              <span className="font-mono text-xs font-normal text-[#FF6A1A]">// 0{idx + 1}</span>
            </h3>

            <div className="space-y-3.5">
              {group.items.map((skill) => (
                <div key={skill.name}>
                  <div className="mb-1.5 flex items-center justify-between text-xs font-mono">
                    <span className="font-medium text-white">{skill.name}</span>
                    <span className="text-[#FF6A1A]">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#1e1e1e]">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
                      className="h-full rounded-full bg-[#FF6A1A]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
