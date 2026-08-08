import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Github, X, ArrowUpRight, Code, Bot, Globe, Terminal, Sparkles } from "lucide-react";
import { Section } from "@/components/Section";
import { projects, type Project, type ProjectCategory } from "@/data/portfolio";

const filters: ("All" | ProjectCategory)[] = ["All", "Web", "Python", "Automation", "AI"];

const categoryIcons = {
  Web: Globe,
  Python: Terminal,
  Automation: Bot,
  AI: Sparkles,
};

export function Projects() {
  const [filter, setFilter] = useState<"All" | ProjectCategory>("All");
  const [active, setActive] = useState<Project | null>(null);

  const visible =
    filter === "All" ? projects : projects.filter((p) => p.categories.includes(filter));

  return (
    <Section
      id="projects"
      eyebrow="SELECTED PROJECTS"
      title={
        <>
          FEATURED <span className="text-[#FF6A1A]">WORKS</span>
        </>
      }
      description="Real-world applications, intelligent automations, and software projects I've engineered."
    >
      {/* Category Filters */}
      <div className="mb-12 flex flex-wrap justify-center gap-2.5">
        {filters.map((cat) => {
          const isActive = filter === cat;
          return (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`flex min-h-[44px] items-center rounded-full px-5 py-2.5 text-xs font-mono font-semibold uppercase tracking-wider transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6A1A] ${
                isActive
                  ? "bg-[#FF6A1A] text-white shadow-[0_0_15px_rgba(255,106,26,0.4)]"
                  : "border border-white/10 bg-[#141414] text-[#9A9A9A] hover:border-[#FF6A1A]/40 hover:text-white"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Empty State */}
      {visible.length === 0 && (
        <div className="my-12 rounded-2xl border border-white/10 bg-[#141414] p-12 text-center">
          <p className="font-mono text-sm text-[#9A9A9A]">No projects found matching the selected category.</p>
          <button
            onClick={() => setFilter("All")}
            className="mt-4 inline-flex min-h-[44px] items-center rounded-xl bg-[#FF6A1A] px-5 py-2.5 text-xs font-semibold uppercase text-white shadow-[0_0_15px_rgba(255,106,26,0.4)]"
          >
            Show All Projects
          </button>
        </div>
      )}

      {/* 3-Column Card Grid */}
      <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((project, idx) => {
            const PrimaryCat = project.categories[0] as ProjectCategory;
            const CatIcon = categoryIcons[PrimaryCat] || Code;

            return (
              <motion.article
                layout
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.04 }}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#141414] transition-all duration-300 hover:-translate-y-1 hover:border-[#FF6A1A]/50 hover:shadow-[0_0_25px_rgba(255,106,26,0.2)]"
              >
                {/* Project Image / Banner top */}
                <button
                  onClick={() => setActive(project)}
                  className="relative block aspect-[16/10] w-full overflow-hidden bg-[#1e1e1e] text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6A1A]"
                  aria-label={`View details for ${project.title}`}
                >
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-dot-grid opacity-30" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/50 to-transparent" />

                  {/* Top category badge & icon */}
                  <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/10 bg-[#0A0A0A]/80 px-3 py-1 backdrop-blur-md">
                    <CatIcon className="h-3.5 w-3.5 text-[#FF6A1A]" />
                    <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-white">
                      {project.categories.join(" · ")}
                    </span>
                  </div>

                  {/* Arrow indicator */}
                  <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-[#0A0A0A]/80 text-[#FF6A1A] backdrop-blur-md transition-transform duration-300 group-hover:rotate-45 group-hover:bg-[#FF6A1A] group-hover:text-white">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>

                  {/* Project code badge title display */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="font-mono text-[11px] text-[#FF6A1A]">
                      // 0{idx + 1}
                    </span>
                    <h4 className="font-display text-lg font-bold text-white line-clamp-1 group-hover:text-[#FF6A1A] transition-colors">
                      {project.title}
                    </h4>
                  </div>
                </button>

                {/* Card Content */}
                <div className="flex flex-1 flex-col p-6 pt-2">
                  <p className="mt-1 flex-1 text-xs leading-relaxed text-[#9A9A9A]">
                    {project.short}
                  </p>

                  {/* Tech stack tags */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-white/5 bg-[#1a1a1a] px-2.5 py-1 font-mono text-[10px] text-[#9A9A9A]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Footer links: View Project link in Orange */}
                  <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-4">
                    <div className="flex items-center gap-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-11 w-11 min-h-[44px] min-w-[44px] items-center justify-center rounded-lg border border-white/10 bg-[#1e1e1e] text-[#9A9A9A] transition-colors hover:border-[#FF6A1A]/40 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6A1A]"
                          aria-label="GitHub Repository"
                        >
                          <Github className="h-4 w-4" />
                        </a>
                      )}
                      {(project.demo || project.github) && (
                        <a
                          href={project.demo || project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-11 w-11 min-h-[44px] min-w-[44px] items-center justify-center rounded-lg border border-white/10 bg-[#1e1e1e] text-[#9A9A9A] transition-colors hover:border-[#FF6A1A]/40 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6A1A]"
                          aria-label="Open Project"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                    </div>

                    <button
                      onClick={() => setActive(project)}
                      className="group/link flex min-h-[44px] items-center gap-1 font-mono text-xs font-semibold text-[#FF6A1A] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6A1A]"
                    >
                      <span>View project</span>
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </button>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Modal Popup */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            onClick={() => setActive(null)}
          >
            <div className="absolute inset-0 bg-[#0A0A0A]/85 backdrop-blur-md" />
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-white/10 bg-[#141414] p-6 shadow-2xl sm:p-8"
            >
              <button
                onClick={() => setActive(null)}
                className="absolute right-5 top-5 z-10 flex h-11 w-11 min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-white/10 bg-[#1e1e1e] text-[#9A9A9A] transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6A1A]"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>

              {active.image && (
                <div className="relative mb-6 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#1e1e1e]">
                  <img
                    src={active.image}
                    alt={active.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />
                </div>
              )}

              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#FF6A1A]">
                // {active.categories.join(" · ")}
              </span>

              <h3 className="mt-2 font-hero text-3xl font-extrabold uppercase text-white">
                {active.title}
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-[#9A9A9A]">
                {active.description}
              </p>

              <h4 className="mt-6 font-mono text-xs font-bold uppercase tracking-wider text-white">
                Key Highlights
              </h4>
              <ul className="mt-3 space-y-2">
                {active.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2.5 text-xs text-[#9A9A9A]">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#FF6A1A]" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <h4 className="mt-6 font-mono text-xs font-bold uppercase tracking-wider text-white">
                Tech Stack Used
              </h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {active.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-lg border border-white/10 bg-[#1e1e1e] px-3 py-1 font-mono text-xs text-white"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-white/10 pt-6">
                {active.github && (
                  <a
                    href={active.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-[#1e1e1e] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:border-[#FF6A1A]/50 hover:bg-[#252525]"
                  >
                    <Github className="h-4 w-4" /> View Code
                  </a>
                )}
                {(active.demo || active.github) && (
                  <a
                    href={active.demo || active.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-[#FF6A1A] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white shadow-[0_0_15px_rgba(255,106,26,0.4)] transition-all hover:bg-[#FF7B2E] hover:scale-[1.02]"
                  >
                    <ExternalLink className="h-4 w-4" /> Open Project
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
