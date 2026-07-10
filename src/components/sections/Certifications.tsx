import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { Section } from "@/components/Section";
import { certifications } from "@/data/portfolio";

export function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="Certifications"
      title={<>Learning <span className="text-gradient">credentials</span></>}
      description="Continuously upskilling through structured courses and workshops."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.05 }}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card/60 p-6 backdrop-blur transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow"
          >
            <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gradient-primary opacity-10 blur-2xl transition-opacity group-hover:opacity-30" />
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">
                <Award className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <h3 className="font-display text-base font-semibold">{c.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{c.issuer}</p>
                <span className="mt-2 inline-block rounded-md border border-border bg-muted/50 px-2 py-0.5 font-mono text-xs text-muted-foreground">
                  {c.year}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
