import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Section } from "@/components/Section";
import { personalInfo, stats } from "@/data/portfolio";
import { useCountUp } from "@/hooks/use-count-up";
import { Briefcase, GraduationCap, MapPin, Plane } from "lucide-react";

function StatCard({
  value,
  suffix,
  label,
  delay,
  inView,
}: {
  value: number;
  suffix: string;
  label: string;
  delay: number;
  inView: boolean;
}) {
  const count = useCountUp(value, 1500, inView);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group relative overflow-hidden rounded-2xl border border-border bg-card/60 p-6 backdrop-blur transition-all hover:border-primary/40 hover:shadow-glow"
    >
      <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-primary opacity-10 blur-2xl transition-opacity group-hover:opacity-30" />
      <p className="font-display text-4xl font-semibold tracking-tight">
        <span className="text-gradient">{count}</span>
        <span className="text-foreground/70">{suffix}</span>
      </p>
      <p className="mt-1 text-sm text-muted-foreground">{label}</p>
    </motion.div>
  );
}

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Section
      id="about"
      eyebrow="About"
      title={
        <>
          A bit about <span className="text-gradient">me</span>
        </>
      }
      description="Driven by curiosity, focused on building things that work."
    >
      <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          <p>{personalInfo.longBio}</p>
          <p>
            I love exploring <span className="text-foreground font-medium">new technologies</span>,{" "}
            <span className="text-foreground font-medium">building impactful projects</span> and{" "}
            <span className="text-foreground font-medium"></span>turning ideas into real
            applications.
          </p>

          <ul className="grid gap-3 pt-4 sm:grid-cols-2">
            {[
              { Icon: GraduationCap, text: "Aspiring AI student" },
              { Icon: Briefcase, text: "Open to internships & roles" },
              { Icon: MapPin, text: "India" },
              { Icon: Plane, text: "Germany" },
            ].map(({ Icon, text }) => (
              <li
                key={text}
                className="flex items-center gap-3 rounded-xl border border-border bg-card/40 px-4 py-3 text-sm text-foreground"
              >
                <Icon className="h-4 w-4 text-accent" />
                {text}
              </li>
            ))}
          </ul>
        </motion.div>

        <div ref={ref} className="grid grid-cols-2 gap-4 sm:gap-5">
          {stats.map((s, i) => (
            <StatCard key={s.label} {...s} delay={i * 0.08} inView={inView} />
          ))}
        </div>
      </div>
    </Section>
  );
}
