import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { Section } from "@/components/Section";
import { certifications } from "@/data/portfolio";

export function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="CERTIFICATIONS"
      title={
        <>
          LEARNING <span className="text-[#FF6A1A]">CREDENTIALS</span>
        </>
      }
      description="Structured courses and training programs completed to sharpen technical capabilities."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.05 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#141414] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#FF6A1A]/40 hover:bg-[#1a1a1a]"
          >
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FF6A1A]/10 text-[#FF6A1A] transition-colors duration-300 group-hover:bg-[#FF6A1A] group-hover:text-white">
                <Award className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <h3 className="font-display text-base font-bold text-white group-hover:text-[#FF6A1A] transition-colors">
                  {c.title}
                </h3>
                <p className="mt-1 text-xs text-[#9A9A9A]">{c.issuer}</p>
                <span className="mt-2 inline-block rounded-md border border-white/10 bg-[#1e1e1e] px-2.5 py-0.5 font-mono text-[10px] text-[#FF6A1A]">
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
