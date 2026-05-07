import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu } from "lucide-react";

const navLinks = [
  { label: "Work", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        data-testid="navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-background/95 backdrop-blur-sm border-b border-border" : "bg-transparent"
        }`}
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <nav className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 h-[70px] grid grid-cols-3 items-center">
          {/* Logo */}
          <button
            data-testid="navbar-logo"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-serif text-[17px] tracking-[0.12em] uppercase text-foreground hover:text-primary transition-colors duration-300 text-left"
          >
            Reema Atieh
          </button>

          {/* Center nav */}
          <ul className="hidden md:flex items-center justify-center gap-9">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  data-testid={`nav-link-${link.label.toLowerCase()}`}
                  onClick={() => handleNav(link.href)}
                  className="font-sans text-[11px] tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
                </button>
              </li>
            ))}
          </ul>

          {/* Right CTA */}
          <div className="hidden md:flex justify-end">
            <button
              data-testid="navbar-cta"
              onClick={() => handleNav("#contact")}
              className="font-sans text-[11px] tracking-[0.2em] uppercase px-6 py-2.5 border border-foreground text-foreground hover:bg-foreground hover:text-background transition-all duration-300"
            >
              Let's Talk
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden flex justify-end col-span-2">
            <button
              data-testid="navbar-menu-toggle"
              className="p-2 text-foreground"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            data-testid="mobile-menu"
            className="fixed inset-0 z-40 bg-background flex flex-col items-start justify-end pb-20 px-10 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="flex flex-col gap-8">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  data-testid={`mobile-nav-${link.label.toLowerCase()}`}
                  onClick={() => handleNav(link.href)}
                  className="font-serif text-5xl text-foreground hover:text-primary transition-colors duration-300 text-left leading-none"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.06 }}
                >
                  {link.label}
                </motion.button>
              ))}
            </div>
            <div className="mt-12 divider" />
            <p className="mt-6 label-sm">Kuwait · Graphic Designer</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
