import { motion } from "framer-motion";
import { Languages as LangIcon } from "lucide-react";
import { Section } from "@/components/Section";
import { languages } from "@/data/portfolio";

export function LanguagesSection() {
  return (
    <Section
      id="languages"
      eyebrow="Languages"
      title={<>I speak <span className="text-gradient">multiple languages</span></>}
      description="Bridging cultures across India and Germany."
    >
      <div className="grid gap-5 sm:grid-cols-3">
        {languages.map((l, i) => (
          <motion.div
            key={l.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card/60 p-6 backdrop-blur transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow"
          >
            <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-accent opacity-10 blur-2xl transition-opacity group-hover:opacity-30" />
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">
                <LangIcon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold">{l.name}</h3>
                <p className="text-xs text-muted-foreground">{l.level}</p>
              </div>
            </div>
            <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-muted">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${l.percent}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 + i * 0.1, ease: "easeOut" }}
                className="h-full rounded-full bg-gradient-primary"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
