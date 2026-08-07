import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { timeline } from "@/data/portfolio";

export function Timeline() {
  return (
    <Section
      id="timeline"
      eyebrow="JOURNEY"
      title={
        <>
          MY DEVELOPMENT <span className="text-[#FF6A1A]">PATH</span>
        </>
      }
      description="Milestones and learning progression along my journey."
    >
      <div className="relative mx-auto max-w-3xl">
        {/* Timeline center line */}
        <div className="absolute left-4 top-0 h-full w-[2px] bg-gradient-to-b from-[#FF6A1A] via-[#FF6A1A]/40 to-transparent sm:left-1/2 sm:-translate-x-1/2" />

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
                className="relative grid gap-4 sm:grid-cols-2 sm:gap-10"
              >
                {/* Dot */}
                <span className="absolute left-4 top-4 z-10 h-3 w-3 -translate-x-1/2 rounded-full bg-[#FF6A1A] shadow-[0_0_10px_#FF6A1A] ring-4 ring-[#0A0A0A] sm:left-1/2" />

                <div
                  className={`pl-10 sm:pl-0 ${isLeft ? "sm:text-right sm:pr-10" : "sm:col-start-2 sm:pl-10"}`}
                >
                  <div className="rounded-2xl border border-white/10 bg-[#141414] p-5 transition-all duration-300 hover:border-[#FF6A1A]/40 hover:bg-[#1a1a1a]">
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#FF6A1A]">
                      {item.year}
                    </span>
                    <h3 className="mt-1 font-display text-base font-bold text-white">{item.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-[#9A9A9A]">{item.description}</p>
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
