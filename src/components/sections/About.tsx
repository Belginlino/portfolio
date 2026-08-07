import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { personalInfo, strengths } from "@/data/portfolio";
import { Zap, Code, Bot, CheckCircle, GraduationCap, Briefcase, MapPin, Globe } from "lucide-react";

const featureIcons = [Zap, Code, Bot, CheckCircle];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="ABOUT ME"
      title={
        <>
          BUILDING IDEAS INTO <span className="text-[#FF6A1A]">REALITY</span>
        </>
      }
      description="Passionate AI student and developer dedicated to clean code, practical applications, and continuous growth."
    >
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
        {/* Left Column: Personal Story */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="rounded-2xl border border-white/10 bg-[#141414] p-6 sm:p-8">
            <h3 className="font-hero text-2xl font-bold uppercase tracking-tight text-white mb-4">
              My Journey &amp; Focus
            </h3>
            <p className="text-sm leading-relaxed text-[#9A9A9A] sm:text-base">
              {personalInfo.longBio}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-[#9A9A9A] sm:text-base">
              I specialize in combining <span className="text-white font-medium">Python automation</span>,{" "}
              <span className="text-[#FF6A1A] font-medium">modern web frontends</span>, and{" "}
              <span className="text-white font-medium">AI tools</span> to solve real-world problems.
            </p>

            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                { Icon: GraduationCap, text: "AI Engineering Student" },
                { Icon: Briefcase, text: "Open to Internships" },
                { Icon: MapPin, text: "Based in India" },
                { Icon: Globe, text: "Learning German (Global roles)" },
              ].map(({ Icon, text }) => (
                <li
                  key={text}
                  className="flex items-center gap-3 rounded-xl border border-white/5 bg-[#1a1a1a] px-4 py-3 text-xs font-medium text-white"
                >
                  <Icon className="h-4 w-4 text-[#FF6A1A]" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Right Column: 2x2 Feature Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {strengths.slice(0, 4).map((item, idx) => {
            const Icon = featureIcons[idx % featureIcons.length];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#141414] p-6 transition-all duration-300 hover:border-[#FF6A1A]/40 hover:bg-[#1a1a1a] hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(255,106,26,0.15)]"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#FF6A1A]/10 text-[#FF6A1A] transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#FF6A1A] group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h4 className="font-display text-base font-bold text-white mb-2">
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
