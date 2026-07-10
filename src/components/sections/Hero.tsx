import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import heroVisual from "@/assets/hero-visual.jpg";
import { personalInfo } from "@/data/portfolio";
import { useTypewriter } from "@/hooks/use-typewriter";
export function Hero() {
  const text = useTypewriter(personalInfo.roles, 80, 1400);

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-44"
    >
      {/* Aurora background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-aurora" />
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 grid-pattern opacity-40" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
           

            <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Hi, I'm <span className="text-gradient">Belgin Lino</span>.
              <br />
              <span className="text-foreground/90">AI Student & Developer</span>
              <br />
              <span className="text-foreground/90"> building real-world projects.</span>
            </h1>

            <p className="mt-6 flex items-center gap-2 font-mono text-base text-muted-foreground sm:text-lg">
              <span className="text-accent">{">"}</span>
              <span className="text-foreground">{text}</span>
              <span className="inline-block h-5 w-[2px] animate-blink bg-primary" />
            </p>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {personalInfo.bio}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]"
              >
                View Projects <ArrowDown className="h-4 w-4" />
              </a>
              <a
                href={personalInfo.resumeUrl}
                download
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-card/60 px-5 py-3 text-sm font-medium text-foreground backdrop-blur transition-all hover:border-primary/50 hover:bg-card"
              >
                <Download className="h-4 w-4" /> Download Resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium text-foreground/80 underline-offset-4 hover:text-foreground hover:underline"
              >
                Contact Me →
              </a>
            </div>

            <div className="mt-10 flex items-center gap-4">
              {[
                { Icon: Github, href: personalInfo.github, label: "GitHub" },
                { Icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn" },
                { Icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="group flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-card/40 text-muted-foreground backdrop-blur transition-all hover:scale-110 hover:border-primary/60 hover:text-foreground"
                >
                  <Icon className="h-5 w-5 transition-transform group-hover:rotate-6" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            className="relative"
          >
            <div className="absolute -inset-6 -z-10 bg-gradient-primary opacity-20 blur-3xl" />
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-elegant">
              <img
                src={heroVisual}
                alt="Belgin's developer workspace illustration"
                width={1280}
                height={1280}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </div>

            {/* floating cards */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-4 top-10 hidden rounded-2xl border border-border bg-card/80 p-3 shadow-elegant backdrop-blur sm:block"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary text-primary-foreground">
                  🐍
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Loving</p>
                  <p className="text-sm font-semibold">Python &amp; React</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-4 bottom-10 hidden rounded-2xl border border-border bg-card/80 p-3 shadow-elegant backdrop-blur sm:block"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/20 text-accent">
                  ⚡
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Building</p>
                  <p className="text-sm font-semibold">Automations</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
