import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Github, X, ArrowUpRight } from "lucide-react";
import { Section } from "@/components/Section";
import { projects, type Project, type ProjectCategory } from "@/data/portfolio";

const filters: ("All" | ProjectCategory)[] = ["All", "Web", "Python", "Automation", "AI"];

const gradients = [
  "from-violet-500 to-cyan-400",
  "from-fuchsia-500 to-orange-400",
  "from-emerald-400 to-cyan-500",
  "from-blue-500 to-violet-500",
  "from-rose-500 to-amber-400",
  "from-cyan-400 to-emerald-500",
];

export function Projects() {
  const [filter, setFilter] = useState<"All" | ProjectCategory>("All");
  const [active, setActive] = useState<Project | null>(null);

  const visible =
    filter === "All" ? projects : projects.filter((p) => p.categories.includes(filter));

  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title={<>Selected <span className="text-gradient">work</span></>}
      description="Real projects, real problems, and the lessons that came with them."
    >
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
              filter === f
                ? "bg-gradient-primary text-primary-foreground shadow-glow"
                : "border border-border bg-card/40 text-muted-foreground hover:border-primary/40 hover:text-foreground"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((p, i) => (
            <motion.article
              layout
              key={p.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card/60 backdrop-blur transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow"
            >
              <button
                onClick={() => setActive(p)}
                className="relative block aspect-[16/10] w-full overflow-hidden"
                aria-label={`View details for ${p.title}`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${gradients[i % gradients.length]} opacity-90 transition-transform duration-700 group-hover:scale-110`}
                />
                <div className="absolute inset-0 grid-pattern opacity-30 mix-blend-overlay" />
                <div className="absolute inset-0 flex items-end p-5">
                  <span className="font-mono text-xs font-medium uppercase tracking-wider text-white/90">
                    {p.categories.join(" · ")}
                  </span>
                </div>
                <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur transition-transform group-hover:rotate-45">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </button>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-xl font-semibold tracking-tight">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{p.short}</p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tech.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-border bg-muted/50 px-2 py-0.5 text-xs text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-center gap-2">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-primary/40"
                    >
                      <Github className="h-3.5 w-3.5" /> Code
                    </a>
                  )}
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-primary px-3 py-1.5 text-xs font-medium text-primary-foreground"
                    >
                      <ExternalLink className="h-3.5 w-3.5" /> Demo
                    </a>
                  )}
                  <button
                    onClick={() => setActive(p)}
                    className="ml-auto text-xs font-medium text-accent hover:underline"
                  >
                    Details →
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            onClick={() => setActive(null)}
          >
            <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-border bg-card p-8 shadow-elegant"
            >
              <button
                onClick={() => setActive(null)}
                className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-muted/50 text-muted-foreground hover:text-foreground"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
              <span className="font-mono text-xs uppercase tracking-wider text-accent">
                {active.categories.join(" · ")}
              </span>
              <h3 className="mt-2 font-display text-3xl font-semibold tracking-tight">
                {active.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {active.description}
              </p>

              <h4 className="mt-6 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Highlights
              </h4>
              <ul className="mt-3 space-y-2">
                {active.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-sm">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-gradient-primary" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <h4 className="mt-6 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Tech Stack
              </h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {active.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-lg border border-border bg-muted/50 px-3 py-1 text-xs text-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex items-center gap-3">
                {active.github && (
                  <a
                    href={active.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2 text-sm font-medium hover:border-primary/40"
                  >
                    <Github className="h-4 w-4" /> View Code
                  </a>
                )}
                {active.demo && (
                  <a
                    href={active.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-glow"
                  >
                    <ExternalLink className="h-4 w-4" /> Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
