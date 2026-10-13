import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { services } from "@/data/portfolio";
import { Bot, Globe, Code2, Sparkles, ArrowRight } from "lucide-react";

const iconMap = {
  Bot,
  Globe,
  Code2,
  Sparkles,
};

export function Services() {
  return (
    <Section
      id="services"
      eyebrow="TECHNICAL OFFERINGS"
      title={
        <>
          WHAT I <span className="text-[#FF6A1A]">BUILD &amp; SOLVE</span>
        </>
      }
      description="Practical software engineering capabilities grounded in actual project execution and coursework."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, idx) => {
          const IconComponent = iconMap[service.iconName as keyof typeof iconMap] || Code2;

          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#141414] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#FF6A1A]/50 hover:bg-[#161616] hover:shadow-[0_0_25px_rgba(255,106,26,0.15)]"
            >
              {/* Card top accent line on hover */}
              <div className="absolute left-0 top-0 h-1 w-full bg-[#FF6A1A] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div>
                {/* Icon */}
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#FF6A1A]/10 text-[#FF6A1A] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#FF6A1A] group-hover:text-white">
                  <IconComponent className="h-6 w-6" />
                </div>

                {/* Title */}
                <h3 className="font-display text-base sm:text-lg font-bold text-white mb-2.5 group-hover:text-[#FF6A1A] transition-colors duration-200">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-xs leading-relaxed text-[#9A9A9A]">
                  {service.description}
                </p>
              </div>

              {/* Functional Action Link */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-[#FF6A1A] hover:underline"
                >
                  <span>Explore Projects</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </a>

                <a
                  href="#contact"
                  className="font-mono text-[11px] text-[#737373] hover:text-white transition-colors"
                >
                  Discuss
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
