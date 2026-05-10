import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Navbar() {
  const { t, lang, setLang, isRTL } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: t.nav.work, href: "#portfolio" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.services, href: "#services" },
    { label: t.nav.process, href: "#process" },
    { label: t.nav.contact, href: "#contact" },
  ];

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

  const toggleLang = () => setLang(lang === "en" ? "ar" : "en");

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
          {/* Logo — col 1: left in LTR, right in RTL (grid reverses) */}
          <button
  data-testid="navbar-logo"
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
  className="font-serif text-[18px] md:text-[24px] tracking-[0.28em] md:tracking-[0.32em] uppercase text-[#D96F45] hover:text-[#1D1715] transition-all duration-300 text-start font-light whitespace-nowrap"
>
  {t.nav.logo}
</button>

          {/* Center nav */}
          <ul className="hidden md:flex items-center justify-center gap-9">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNav(link.href)}
                  className="font-sans text-[11px] tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300 relative group"
                >
                  {link.label}
                  {/* underline expands from inline-start (left in LTR, right in RTL) */}
                  <span className="absolute -bottom-0.5 start-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
                </button>
              </li>
            ))}
          </ul>

          {/* Right col: lang switcher + CTA — col 3: right in LTR, left in RTL */}
          <div className="hidden md:flex items-center gap-4 justify-end rtl:justify-start">
            <button
              data-testid="lang-switcher"
              onClick={toggleLang}
              className="flex items-center gap-1 font-sans text-[11px] tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors duration-300"
              aria-label="Switch language"
            >
              <span className={lang === "en" ? "text-foreground" : "text-muted-foreground"}>EN</span>
              <span className="text-border mx-0.5">|</span>
              <span className={lang === "ar" ? "text-foreground" : "text-muted-foreground"}>AR</span>
            </button>

            <button
              data-testid="navbar-cta"
              onClick={() => handleNav("#contact")}
              className="font-sans text-[11px] tracking-[0.15em] uppercase px-6 py-2.5 border border-foreground text-foreground hover:bg-foreground hover:text-background transition-all duration-300"
            >
              {t.nav.cta}
            </button>
          </div>

          {/* Mobile: lang + hamburger — spans cols 2-3, left in LTR; cols 2-3 = center+left in RTL */}
          <div className="md:hidden flex items-center gap-3 justify-end rtl:justify-start col-span-2">
            <button
              data-testid="lang-switcher-mobile"
              onClick={toggleLang}
              className="font-sans text-[11px] tracking-[0.15em] text-muted-foreground"
            >
              <span className={lang === "en" ? "text-foreground" : ""}>EN</span>
              <span className="mx-1 text-border">|</span>
              <span className={lang === "ar" ? "text-foreground" : ""}>AR</span>
            </button>
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
            className={`fixed inset-0 z-40 bg-background flex flex-col pb-20 px-10 md:hidden justify-end ${isRTL ? "items-end" : "items-start"}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className={`flex flex-col gap-8 ${isRTL ? "items-end" : "items-start"}`}>
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="font-serif text-5xl text-foreground hover:text-primary transition-colors duration-300 leading-none"
                  initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.06 }}
                >
                  {link.label}
                </motion.button>
              ))}
            </div>
            <div className="mt-12 divider" />
            <p className="mt-6 label-sm">{t.hero.label}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
