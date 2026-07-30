import { motion } from "framer-motion";
import { Download, Eye, FileText, CheckCircle2 } from "lucide-react";
import { Section } from "@/components/Section";
import { personalInfo } from "@/data/portfolio";

const highlights = ["Web Developer", "Project Experience", " Openness to Experience"];

export function Resume() {
  return (
    <Section
      id="resume"
      eyebrow="Resume"
      title={
        <>
          Grab my <span className="text-gradient">resume</span>
        </>
      }
      description="A concise overview of my skills, projects, and journey so far."
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-border bg-card/60 p-8 backdrop-blur sm:p-12"
      >
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-primary opacity-20 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-accent opacity-15 blur-3xl" />

        <div className="relative grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium text-accent backdrop-blur">
              <FileText className="h-3.5 w-3.5" /> PDF · Updated 2026
            </span>
            <h3 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Aspiring developer ready to contribute.
            </h3>
            <p className="mt-3 text-muted-foreground">
              From Python automation to React frontends — explore my hands-on experience and the
              technologies I love working with.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={personalInfo.resumeUrl}
                download
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]"
              >
                <Download className="h-4 w-4" /> Download Resume
              </a>
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-card/80 px-5 py-3 text-sm font-medium hover:border-primary/40"
              >
                <Eye className="h-4 w-4" /> View Resume
              </a>
            </div>
          </div>

          <ul className="grid gap-3">
            {highlights.map((h, i) => (
              <motion.li
                key={h}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="flex items-center gap-3 rounded-xl border border-border bg-card/80 px-4 py-3 backdrop-blur"
              >
                <CheckCircle2 className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium">{h}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </Section>
  );
}
