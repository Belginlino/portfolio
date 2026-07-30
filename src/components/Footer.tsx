import { Github, Linkedin, Mail, Code2 } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-3">
          <div>
            <a href="#home" className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-primary shadow-glow">
                <Code2 className="h-5 w-5 text-primary-foreground" />
              </span>
              <span className="font-display text-base font-semibold">
                Belgin <span className="text-gradient">Lino</span>
              </span>
            </a>
            <p className="mt-3 max-w-sm text-sm text-muted-foreground">
              Aspiring software developer building real-world apps and automations with Python,
              React and AI.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Quick links
            </h4>
            <ul className="mt-4 grid grid-cols-2 gap-2">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-foreground/80 hover:text-foreground hover:underline"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Connect
            </h4>
            <div className="mt-4 flex items-center gap-2">
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
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card/40 text-muted-foreground transition-all hover:scale-110 hover:border-primary/40 hover:text-foreground"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © 2026 {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Built with <span className="text-foreground">React</span>,{" "}
            <span className="text-foreground">Tailwind</span> &{" "}
            <span className="text-foreground">Framer Motion</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}
