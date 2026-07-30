import { motion } from "framer-motion";
import { Zap, Brain, Hammer, Sparkles, Shuffle, TrendingUp } from "lucide-react";
import { Section } from "@/components/Section";
import { strengths } from "@/data/portfolio";

const icons = [Zap, Brain, Hammer, Sparkles, Shuffle, TrendingUp];

export function WhyHire() {
  return (
    <Section
      id="why"
      eyebrow="Why hire me"
      title={
        <>
          What I bring to the <span className="text-gradient">team</span>
        </>
      }
      description="Mindset and habits I've built while learning to ship real projects."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {strengths.map((s, i) => {
          const Icon = icons[i % icons.length];
          return (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card/60 p-6 backdrop-blur transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow"
            >
              <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gradient-primary opacity-10 blur-2xl transition-opacity group-hover:opacity-30" />
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.description}</p>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
