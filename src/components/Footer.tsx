import { Github, Linkedin, Mail, Code2, ArrowUp } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

const footerLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#stack", label: "Tech Stack" },
  { href: "#projects", label: "Projects" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#070707] py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-3 lg:items-center">
          
          {/* Logo & Tagline Left */}
          <div>
            <a href="#home" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#FF6A1A] text-white shadow-[0_0_15px_rgba(255,106,26,0.4)]">
                <Code2 className="h-5 w-5" />
              </span>
              <span className="font-hero text-base font-extrabold uppercase tracking-wider text-white">
                BELGIN <span className="text-[#FF6A1A]">LINO</span>
              </span>
            </a>
            <p className="mt-3 max-w-sm font-sans text-xs leading-relaxed text-[#9A9A9A]">
              AI Student &amp; Fullstack Developer crafting clean, intelligent web applications and Python automations.
            </p>
          </div>

          {/* Quick Nav Links Center */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono text-xs font-semibold uppercase tracking-wider text-[#9A9A9A] transition-colors hover:text-[#FF6A1A]"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Socials & Back to Top Right */}
          <div className="flex items-center justify-start gap-3 lg:justify-end">
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
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[#141414] text-[#9A9A9A] transition-all hover:border-[#FF6A1A]/50 hover:bg-[#FF6A1A] hover:text-white"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}

            <button
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#FF6A1A]/40 bg-[#FF6A1A]/10 text-[#FF6A1A] transition-all hover:bg-[#FF6A1A] hover:text-white"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-center sm:flex-row sm:text-left">
          <p className="font-mono text-xs text-[#9A9A9A]">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <p className="font-mono text-xs text-[#9A9A9A]">
            Designed with <span className="text-[#FF6A1A]">Orange &amp; Near-Black</span> aesthetic.
          </p>
        </div>
      </div>
    </footer>
  );
}
