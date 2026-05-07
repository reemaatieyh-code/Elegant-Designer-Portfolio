import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Work", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
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
          scrolled
            ? "bg-[hsl(36,33%,96%)]/90 backdrop-blur-md border-b border-[hsl(30,10%,88%)]"
            : "bg-transparent"
        }`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <nav className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
          <button
            data-testid="navbar-logo"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-serif text-xl tracking-widest uppercase text-foreground hover:text-primary transition-colors duration-300"
          >
            Reema Atieh
          </button>

          <ul className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  data-testid={`nav-link-${link.label.toLowerCase()}`}
                  onClick={() => handleNav(link.href)}
                  className="font-sans text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors duration-300 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
                </button>
              </li>
            ))}
          </ul>

          <button
            data-testid="navbar-menu-toggle"
            className="md:hidden p-2 text-foreground"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            data-testid="mobile-menu"
            className="fixed inset-0 z-40 bg-[hsl(36,33%,96%)] flex flex-col items-center justify-center gap-10 md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                data-testid={`mobile-nav-link-${link.label.toLowerCase()}`}
                onClick={() => handleNav(link.href)}
                className="font-serif text-4xl text-foreground hover:text-primary transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
              >
                {link.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
