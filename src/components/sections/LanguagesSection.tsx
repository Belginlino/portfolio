import { motion } from "framer-motion";
import { revealCard } from "@/components/motion/scroll";
import { Languages as LangIcon } from "lucide-react";
import { Section } from "@/components/Section";
import { languages } from "@/data/portfolio";

export function LanguagesSection() {
  return (
    <Section
      id="languages"
      eyebrow="LANGUAGES"
      title={
        <>
          SPOKEN <span className="text-[#FF6A1A]">LANGUAGES</span>
        </>
      }
      description="Communicating across global teams and multicultural environments."
    >
      <div className="grid gap-5 sm:grid-cols-3">
        {languages.map((l, i) => (
          <motion.div
            key={l.name}
            {...revealCard(i)}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#141414] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#FF6A1A]/40 hover:bg-[#1a1a1a]"
          >
            <div className="flex items-center gap-3.5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FF6A1A]/10 text-[#FF6A1A] transition-colors duration-300 group-hover:bg-[#FF6A1A] group-hover:text-white">
                <LangIcon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-display text-base font-bold text-white group-hover:text-[#FF6A1A] transition-colors">
                  {l.name}
                </h3>
                <p className="text-xs text-[#9A9A9A]">{l.level}</p>
              </div>
            </div>
            <div className="mt-5 h-1.5 w-full overflow-hidden rounded-full bg-[#1e1e1e]">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${l.percent}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 + i * 0.1, ease: "easeOut" }}
                className="h-full rounded-full bg-[#FF6A1A]"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
