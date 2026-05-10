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
          scrolled
            ? "bg-background/95 backdrop-blur-sm border-b border-border"
            : "bg-background/40 backdrop-blur-sm"
        }`}
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <nav className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-12 xl:px-20 h-[76px] grid grid-cols-2 xl:grid-cols-3 items-center">
          <button
            data-testid="navbar-logo"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-serif text-[16px] md:text-[18px] xl:text-[22px] tracking-[0.22em] md:tracking-[0.28em] uppercase text-[#D96F45] hover:text-[#1D1715] transition-all duration-300 text-start font-light whitespace-nowrap"
          >
            {t.nav.logo}
          </button>

          <ul className="hidden xl:flex items-center justify-center gap-10">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNav(link.href)}
                  className="font-sans text-[11px] tracking-[0.22em] uppercase text-stone-500 hover:text-black transition-all duration-300 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 start-0 w-0 h-px bg-[#D96F45] transition-all duration-300 group-hover:w-full" />
                </button>
              </li>
            ))}
          </ul>

          <div className="hidden xl:flex items-center gap-4 justify-end rtl:justify-start">
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
              className="font-sans text-[11px] tracking-[0.22em] uppercase px-7 py-3 border border-stone-400 text-stone-800 hover:bg-stone-900 hover:text-white transition-all duration-500"
            >
              {t.nav.cta}
            </button>
          </div>

          <div className="xl:hidden flex items-center gap-4 justify-end rtl:justify-start">
            <button
              data-testid="lang-switcher-mobile"
              onClick={toggleLang}
              className="font-sans text-[12px] tracking-[0.15em] text-muted-foreground"
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
              {menuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            data-testid="mobile-menu"
            className={`fixed inset-0 z-40 bg-[#F7F4EF] flex flex-col pb-20 px-10 lg:hidden justify-end ${
              isRTL ? "items-end" : "items-start"
            }`}
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
                  className="font-serif text-5xl text-foreground hover:text-[#D96F45] transition-colors duration-300 leading-none"
                  initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.06 }}
                >
                  {link.label}
                </motion.button>
              ))}
            </div>

            <div className="mt-12 w-full h-px bg-stone-300" />
            <p className="mt-6 font-sans text-[12px] tracking-[0.35em] uppercase text-stone-500">
              {t.hero.label}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
