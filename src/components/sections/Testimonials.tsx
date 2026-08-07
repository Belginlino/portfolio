import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { testimonials } from "@/data/portfolio";
import { Quote, Star } from "lucide-react";

export function Testimonials() {
  return (
    <Section
      id="testimonials"
      eyebrow="TESTIMONIALS"
      title={
        <>
          FEEDBACK &amp; <span className="text-[#FF6A1A]">REVIEWS</span>
        </>
      }
      description="What mentors, teammates, and tech collaborators say about my work ethic and projects."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#141414] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#FF6A1A]/40 hover:bg-[#1a1a1a] hover:shadow-[0_0_25px_rgba(255,106,26,0.15)]"
          >
            <div>
              {/* Quote Icon & Star Rating */}
              <div className="mb-4 flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FF6A1A]/10 text-[#FF6A1A] transition-transform duration-300 group-hover:scale-110">
                  <Quote className="h-5 w-5" />
                </div>
                <div className="flex items-center gap-1 text-[#FF6A1A]">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[#FF6A1A]" />
                  ))}
                </div>
              </div>

              {/* Italic Quote Text */}
              <p className="font-sans text-xs italic leading-relaxed text-[#9A9A9A] sm:text-sm">
                "{item.quote}"
              </p>
            </div>

            {/* Author details */}
            <div className="mt-6 flex items-center gap-3.5 border-t border-white/5 pt-4">
              <img
                src={item.avatar}
                alt={item.name}
                className="h-10 w-10 rounded-full object-cover border border-[#FF6A1A]/30"
              />
              <div>
                <h4 className="font-display text-sm font-bold text-white group-hover:text-[#FF6A1A] transition-colors">
                  {item.name}
                </h4>
                <p className="text-[11px] text-[#9A9A9A]">
                  {item.role} · <span className="text-white/80">{item.company}</span>
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
