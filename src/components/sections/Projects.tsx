import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  X,
  ArrowUpRight,
  Code,
  Bot,
  Globe,
  Terminal,
  Sparkles,
  AlertTriangle,
  Layers,
  FileCheck2,
} from "lucide-react";
import { Section } from "@/components/Section";
import { projects, type Project, type ProjectCategory } from "@/data/portfolio";

const filters: ("All" | ProjectCategory)[] = ["All", "Web", "Python", "Automation", "AI"];

const categoryIcons: Record<ProjectCategory, typeof Globe> = {
  Web: Globe,
  Python: Terminal,
  Automation: Bot,
  AI: Sparkles,
};

function getStatusBadge(status: Project["status"]) {
  switch (status) {
    case "Production":
      return "border-emerald-500/40 bg-emerald-500/10 text-emerald-400";
    case "Completed":
      return "border-[#FF6A1A]/40 bg-[#FF6A1A]/10 text-[#FF6A1A]";
    case "Prototype":
      return "border-amber-500/40 bg-amber-500/10 text-amber-400";
    case "In Development":
      return "border-sky-500/40 bg-sky-500/10 text-sky-400";
    default:
      return "border-white/20 bg-white/5 text-white";
  }
}

export function Projects() {
  const [filter, setFilter] = useState<"All" | ProjectCategory>("All");
  const [active, setActive] = useState<Project | null>(null);

  const visible =
    filter === "All" ? projects : projects.filter((p) => p.categories.includes(filter));

  return (
    <Section
      id="projects"
      eyebrow="SELECTED WORKS"
      title={
        <>
          FEATURED <span className="text-[#FF6A1A]">PROJECTS</span>
        </>
      }
      description="Production retail POS, full-stack web applications, machine learning prototypes, and real-world tools with demonstrated business functionality."
    >
      {/* Category Filter Pills */}
      <div className="mb-12 flex flex-wrap justify-center gap-2 sm:gap-2.5">
        {filters.map((cat) => {
          const isActive = filter === cat;
          return (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`flex min-h-[44px] items-center rounded-full px-5 py-2 text-xs font-mono font-semibold uppercase tracking-wider transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6A1A] ${
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

      {/* Projects Grid */}
      <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((project, idx) => {
            const PrimaryCat = project.categories[0] as ProjectCategory;
            const CatIcon = categoryIcons[PrimaryCat] || Code;
            const statusStyle = getStatusBadge(project.status);

            return (
              <motion.article
                layout
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.04 }}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#141414] transition-all duration-300 hover:-translate-y-1 hover:border-[#FF6A1A]/50 hover:shadow-[0_0_30px_rgba(255,106,26,0.18)]"
              >
                <div>
                  {/* Card Header / Image or Visual Banner */}
                  <div
                    onClick={() => setActive(project)}
                    className="relative block aspect-[16/10] w-full cursor-pointer overflow-hidden bg-[#1a1a1a]"
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setActive(project);
                      }
                    }}
                    aria-label={`View full details for ${project.title}`}
                  >
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        loading="lazy"
                        className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-[#181818] p-6 text-center">
                        <div className="flex flex-col items-center gap-2">
                          <CatIcon className="h-10 w-10 text-[#FF6A1A]/60" />
                          <span className="font-mono text-xs font-semibold text-[#888888]">
                            {project.title}
                          </span>
                        </div>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/40 to-transparent" />

                    {/* Top Badges: Category & Status */}
                    <div className="absolute left-3.5 top-3.5 flex flex-wrap items-center gap-2">
                      <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-[#0A0A0A]/80 px-2.5 py-1 backdrop-blur-md">
                        <CatIcon className="h-3 w-3 text-[#FF6A1A]" />
                        <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-white">
                          {project.categories.join(" · ")}
                        </span>
                      </div>
                      <span
                        className={`rounded-full border px-2.5 py-0.5 font-mono text-[10px] font-semibold uppercase backdrop-blur-md ${statusStyle}`}
                      >
                        {project.status}
                      </span>
                    </div>

                    {/* Quick Expand Button */}
                    <div className="absolute right-3.5 top-3.5 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-[#0A0A0A]/80 text-[#FF6A1A] backdrop-blur-md transition-transform duration-300 group-hover:rotate-45 group-hover:bg-[#FF6A1A] group-hover:text-white">
                      <ArrowUpRight className="h-4 w-4" />
                    </div>

                    {/* Title inside visual area */}
                    <div className="absolute bottom-3 left-4 right-4">
                      <span className="font-mono text-[11px] text-[#FF6A1A]">
                        // 0{idx + 1}
                      </span>
                      <h3 className="font-display text-base sm:text-lg font-bold text-white line-clamp-1 group-hover:text-[#FF6A1A] transition-colors">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 pt-3">
                    <p className="text-xs leading-relaxed text-[#9A9A9A]">
                      {project.short}
                    </p>

                    {/* Problem Solved Snippet */}
                    <div className="mt-3 rounded-xl border border-white/5 bg-[#191919] p-2.5">
                      <p className="font-mono text-[10px] uppercase font-semibold text-[#FF6A1A] mb-0.5">
                        Problem Solved:
                      </p>
                      <p className="text-[11px] text-[#A3A3A3] line-clamp-2 leading-relaxed">
                        {project.problem}
                      </p>
                    </div>

                    {/* Tech Badges */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.tech.slice(0, 5).map((t) => (
                        <span
                          key={t}
                          className="rounded-md border border-white/5 bg-[#1C1C1C] px-2 py-0.5 font-mono text-[10px] text-[#9A9A9A]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Actions Footer */}
                <div className="flex items-center justify-between border-t border-white/5 p-5 pt-3.5">
                  <div className="flex items-center gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-10 w-10 min-h-[40px] min-w-[40px] items-center justify-center rounded-lg border border-white/10 bg-[#1E1E1E] text-[#9A9A9A] transition-colors hover:border-[#FF6A1A]/40 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6A1A]"
                        aria-label={`View source code for ${project.title}`}
                        title="View Source Code on GitHub"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-10 w-10 min-h-[40px] min-w-[40px] items-center justify-center rounded-lg border border-[#FF6A1A]/30 bg-[#FF6A1A]/10 text-[#FF6A1A] transition-colors hover:bg-[#FF6A1A] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6A1A]"
                        aria-label={`Open live demo for ${project.title}`}
                        title="Open Live Demo"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>

                  <button
                    onClick={() => setActive(project)}
                    className="group/btn inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-[#1E1E1E] px-3.5 py-2 font-mono text-xs font-semibold text-white transition-all hover:border-[#FF6A1A]/50 hover:bg-[#252525] hover:text-[#FF6A1A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6A1A]"
                  >
                    <span>Details</span>
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </button>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Detailed Project Modal */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5"
            onClick={() => setActive(null)}
          >
            <div className="absolute inset-0 bg-[#0A0A0A]/85 backdrop-blur-md" />
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-white/10 bg-[#141414] p-5 sm:p-8 shadow-2xl [scrollbar-width:thin]"
            >
              {/* Close Button */}
              <button
                onClick={() => setActive(null)}
                className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#1e1e1e] text-[#9A9A9A] transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6A1A]"
                aria-label="Close project modal"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Modal Image */}
              {active.image && (
                <div className="relative mb-6 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#1e1e1e]">
                  <img
                    src={active.image}
                    alt={`${active.title} interface`}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />
                </div>
              )}

              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#FF6A1A]">
                  // {active.categories.join(" · ")}
                </span>
                <span
                  className={`rounded-full border px-2.5 py-0.5 font-mono text-[10px] font-semibold uppercase ${getStatusBadge(
                    active.status
                  )}`}
                >
                  {active.status}
                </span>
              </div>

              {/* Project Title */}
              <h3 className="mt-2 font-hero text-2xl sm:text-3xl font-extrabold uppercase text-white">
                {active.title}
              </h3>

              {/* Educational Prototype Notice if present */}
              {active.notice && (
                <div className="mt-4 flex items-start gap-2.5 rounded-xl border border-amber-500/30 bg-amber-500/10 p-3 text-xs text-amber-300">
                  <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
                  <span className="leading-relaxed">{active.notice}</span>
                </div>
              )}

              {/* Problem & Solution Grid */}
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-white/5 bg-[#191919] p-4">
                  <h4 className="font-mono text-xs font-bold uppercase text-[#FF6A1A] mb-1.5 flex items-center gap-1.5">
                    <Layers className="h-3.5 w-3.5" /> Problem Context:
                  </h4>
                  <p className="text-xs text-[#9A9A9A] leading-relaxed">
                    {active.problem}
                  </p>
                </div>
                <div className="rounded-xl border border-white/5 bg-[#191919] p-4">
                  <h4 className="font-mono text-xs font-bold uppercase text-emerald-400 mb-1.5 flex items-center gap-1.5">
                    <FileCheck2 className="h-3.5 w-3.5" /> Solution Engineered:
                  </h4>
                  <p className="text-xs text-[#9A9A9A] leading-relaxed">
                    {active.solution}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="mt-5 text-xs sm:text-sm leading-relaxed text-[#A3A3A3]">
                {active.description}
              </p>

              {/* Specific Contribution */}
              <div className="mt-5 rounded-xl border border-white/5 bg-[#1A1A1A] p-4">
                <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-white mb-1.5">
                  My Specific Contribution:
                </h4>
                <p className="text-xs text-[#9A9A9A] leading-relaxed">
                  {active.contribution}
                </p>
              </div>

              {/* Key Features Highlights */}
              <h4 className="mt-6 font-mono text-xs font-bold uppercase tracking-wider text-white">
                Core Features &amp; Capabilities:
              </h4>
              <ul className="mt-3 space-y-2">
                {active.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2.5 text-xs text-[#9A9A9A]">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF6A1A]" />
                    <span className="leading-relaxed">{h}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Stack Used */}
              <h4 className="mt-6 font-mono text-xs font-bold uppercase tracking-wider text-white">
                Technologies Used:
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

              {/* Modal Actions */}
              <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-white/10 pt-6">
                {active.github && (
                  <a
                    href={active.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] items-center gap-2 rounded-xl border border-white/10 bg-[#1e1e1e] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:border-[#FF6A1A]/50 hover:bg-[#252525]"
                  >
                    <Github className="h-4 w-4" /> View Source Code
                  </a>
                )}
                {active.demo && (
                  <a
                    href={active.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] items-center gap-2 rounded-xl bg-[#FF6A1A] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white shadow-[0_0_15px_rgba(255,106,26,0.4)] transition-all hover:bg-[#FF7B2E] hover:scale-[1.02]"
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
