import { ReactNode } from "react";
import { motion } from "framer-motion";
import { ParallaxMarquee, SplitReveal } from "@/components/motion/scroll";

interface SectionProps {
  id: string;
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  children: ReactNode;
  className?: string;
}

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`relative isolate w-full max-w-full overflow-x-hidden min-w-0 py-20 sm:py-32 scroll-mt-20 lg:scroll-mt-24 bg-[#0A0A0A] ${className}`}
    >
      {/* Background dot grid pattern */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-dot-grid opacity-20" />
      {eyebrow && <ParallaxMarquee text={eyebrow} />}

      <div className="mx-auto w-full max-w-7xl px-3 sm:px-6 lg:px-8 min-w-0">
        <div className="mx-auto mb-16 max-w-3xl text-center px-2">
          {eyebrow && (
            <motion.span
              initial={{ opacity: 0, letterSpacing: "0.6em" }}
              whileInView={{ opacity: 1, letterSpacing: "0.25em" }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block font-mono text-xs font-bold uppercase tracking-[0.25em] text-[#FF6A1A]"
            >
              // {eyebrow}
            </motion.span>
          )}
          <h2 className="mt-3 font-hero text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-white break-normal [word-break:keep-all] whitespace-normal max-w-full">
            <SplitReveal>{title}</SplitReveal>
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-5 h-[3px] w-20 origin-center rounded-full bg-gradient-to-r from-transparent via-[#FF6A1A] to-transparent shadow-[0_0_12px_rgba(255,106,26,0.6)]"
          />
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="mt-4 text-sm leading-relaxed text-[#9A9A9A] sm:text-base"
            >
              {description}
            </motion.p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
