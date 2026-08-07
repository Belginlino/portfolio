import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X, Code2, ArrowRight } from "lucide-react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#stack", label: "Tech Stack" },
  { href: "#projects", label: "Projects" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState("#home");
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 20 });

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active link spy
      const sections = navLinks.map((l) => l.href.substring(1));
      const current = sections.find((sec) => {
        const el = document.getElementById(sec);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });
      if (current) {
        setActiveHash(`#${current}`);
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top progress line in orange */}
      <motion.div
        className="fixed left-0 right-0 top-0 z-[70] h-[3px] origin-left bg-[#FF6A1A]"
        style={{ scaleX }}
      />

      <header className="fixed inset-x-0 top-0 z-50 py-4 transition-all duration-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav
            className={`flex items-center justify-between rounded-full px-5 py-3 transition-all duration-300 ${
              scrolled
                ? "border border-white/10 bg-[#141414]/90 shadow-2xl backdrop-blur-md"
                : "border border-white/5 bg-[#141414]/60 backdrop-blur-sm"
            }`}
          >
            {/* Logo Left */}
            <a href="#home" className="group flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#FF6A1A] text-white shadow-[0_0_15px_rgba(255,106,26,0.4)] transition-transform duration-300 group-hover:scale-105">
                <Code2 className="h-5 w-5" />
              </span>
              <span className="font-hero text-base font-extrabold tracking-wider uppercase text-white">
                BELGIN <span className="text-[#FF6A1A]">LINO</span>
              </span>
            </a>

            {/* Nav Links Center */}
            <ul className="hidden items-center gap-1 md:flex">
              {navLinks.map((link) => {
                const isActive = activeHash === link.href;
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className={`relative rounded-full px-4 py-2 text-xs font-medium uppercase tracking-wider transition-colors duration-200 ${
                        isActive
                          ? "text-white font-semibold"
                          : "text-[#9A9A9A] hover:text-white"
                      }`}
                    >
                      {link.label}
                      {/* Hover / Active indicator dot & line */}
                      {isActive && (
                        <motion.span
                          layoutId="navDot"
                          className="absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[#FF6A1A] shadow-[0_0_8px_#FF6A1A]"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* CTA Right */}
            <div className="flex items-center gap-3">
              <a
                href="#contact"
                className="group relative hidden items-center gap-2 overflow-hidden rounded-full border border-[#FF6A1A] bg-[#FF6A1A]/10 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-[#FF6A1A] transition-all duration-300 hover:bg-[#FF6A1A] hover:text-white hover:shadow-[0_0_20px_rgba(255,106,26,0.5)] hover:scale-[1.03] active:scale-[0.98] sm:inline-flex"
              >
                <span>Let's Talk</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </a>

              {/* Mobile menu trigger */}
              <button
                onClick={() => setOpen((v) => !v)}
                aria-label="Toggle navigation menu"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-[#1e1e1e] text-white transition-colors hover:border-[#FF6A1A]/50 md:hidden"
              >
                {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </button>
            </div>
          </nav>
        </div>

        {/* Mobile dropdown */}
        <motion.div
          initial={false}
          animate={open ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="overflow-hidden md:hidden"
        >
          <div className="mx-auto mt-2 max-w-7xl px-4">
            <ul className="flex flex-col gap-1 rounded-2xl border border-white/10 bg-[#141414] p-3 shadow-2xl backdrop-blur-xl">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-xs font-medium uppercase tracking-wider text-[#9A9A9A] transition-colors hover:bg-[#1e1e1e] hover:text-[#FF6A1A]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#FF6A1A] py-3 text-xs font-semibold uppercase tracking-wider text-white shadow-[0_0_15px_rgba(255,106,26,0.4)]"
                >
                  Let's Talk <ArrowRight className="h-4 w-4" />
                </a>
              </li>
            </ul>
          </div>
        </motion.div>
      </header>
    </>
  );
}
