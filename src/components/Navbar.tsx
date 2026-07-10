import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X, Moon, Sun, Code2 } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#resume", label: "Resume" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggle } = useTheme();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 20 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.div
        className="fixed left-0 right-0 top-0 z-[60] h-[2px] origin-left bg-gradient-primary"
        style={{ scaleX: progress }}
      />
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? "py-2" : "py-4"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav
            className={`flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 ${
              scrolled ? "glass shadow-elegant" : "bg-transparent"
            }`}
          >
            <a href="#home" className="group flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-primary shadow-glow">
                <Code2 className="h-5 w-5 text-primary-foreground" />
              </span>
              <span className="font-display text-base font-semibold tracking-tight">
                Belgin <span className="text-gradient">Lino</span>
              </span>
            </a>

            <ul className="hidden items-center gap-1 lg:flex">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="relative rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-2">
              <button
                onClick={toggle}
                aria-label="Toggle theme"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-card/40 text-foreground transition-all hover:scale-105 hover:border-primary/50"
              >
                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </button>
              <a
                href="#contact"
                className="hidden rounded-xl bg-gradient-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-[1.03] sm:inline-flex"
              >
                Hire me
              </a>
              <button
                onClick={() => setOpen((v) => !v)}
                aria-label="Menu"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-card/40 lg:hidden"
              >
                {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </button>
            </div>
          </nav>
        </div>

        {/* Mobile menu */}
        <motion.div
          initial={false}
          animate={open ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="overflow-hidden lg:hidden"
        >
          <div className="mx-auto mt-2 max-w-7xl px-4 sm:px-6 lg:px-8">
            <ul className="glass flex flex-col gap-1 rounded-2xl p-3 shadow-elegant">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </header>
    </>
  );
}
