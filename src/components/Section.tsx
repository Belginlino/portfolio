import { ReactNode } from "react";
import { motion } from "framer-motion";

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
    <section id={id} className={`relative py-24 sm:py-32 bg-[#0A0A0A] ${className}`}>
      {/* Background dot grid pattern */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-dot-grid opacity-20" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          {eyebrow && (
            <span className="inline-block font-mono text-xs font-bold uppercase tracking-[0.25em] text-[#FF6A1A]">
              // {eyebrow}
            </span>
          )}
          <h2 className="mt-3 font-hero text-4xl font-extrabold uppercase tracking-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h2>
          {description && (
            <p className="mt-4 text-sm leading-relaxed text-[#9A9A9A] sm:text-base">
              {description}
            </p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
