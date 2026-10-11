import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import {
  Code2,
  FileCode,
  Layers,
  Server,
  Database,
  GitBranch,
  Cpu,
  Terminal,
  Layout,
  Wrench,
  Globe,
  Flame,
} from "lucide-react";

// Tech stack items
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
      {/* Responsive Grid of Tech Stack Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {techItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.03 }}
              whileHover={{ y: -5, scale: 1.03 }}
              className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-white/10 bg-[#141414] p-5 transition-all duration-300 hover:border-[#FF6A1A]/50 hover:bg-[#1a1a1a] hover:shadow-[0_0_25px_rgba(255,106,26,0.2)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1e1e1e] text-[#FF6A1A] transition-all duration-300 group-hover:bg-[#FF6A1A] group-hover:text-white group-hover:shadow-[0_0_15px_rgba(255,106,26,0.4)]">
                <Icon className="h-6 w-6" />
              </div>
              <span className="font-mono text-xs font-semibold text-[#A3A3A3] transition-colors duration-200 group-hover:text-white text-center">
                {item.name}
              </span>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
