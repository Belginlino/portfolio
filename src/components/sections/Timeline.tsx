import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { timeline } from "@/data/portfolio";

export function Timeline() {
  return (
    <Section
      id="timeline"
      eyebrow="Journey"
      title={<>My <span className="text-gradient">path so far</span></>}
      description="A snapshot of how I've grown as a developer."
    >
      <div className="relative mx-auto max-w-3xl">
        <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-primary via-accent to-transparent sm:left-1/2 sm:-translate-x-1/2" />

        <ul className="space-y-10">
          {timeline.map((item, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.li
                key={`${item.year}-${item.title}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className={`relative grid gap-4 sm:grid-cols-2 sm:gap-10`}
              >
                {/* dot */}
                <span className="absolute left-4 top-2 z-10 h-3 w-3 -translate-x-1/2 rounded-full bg-gradient-primary shadow-glow ring-4 ring-background sm:left-1/2" />

                <div
                  className={`pl-10 sm:pl-0 ${isLeft ? "sm:text-right sm:pr-10" : "sm:col-start-2 sm:pl-10"}`}
                >
                  <div className="rounded-2xl border border-border bg-card/60 p-5 backdrop-blur transition-all hover:border-primary/40 hover:shadow-glow">
                    <span className="font-mono text-xs font-medium uppercase tracking-wider text-accent">
                      {item.year}
                    </span>
                    <h3 className="mt-1 font-display text-lg font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}
