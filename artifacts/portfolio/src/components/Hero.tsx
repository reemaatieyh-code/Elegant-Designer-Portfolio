import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const scrollToWork = () => {
    const el = document.querySelector("#portfolio");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      data-testid="hero-section"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background px-6"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-8 w-px h-32 bg-primary/20" />
        <div className="absolute top-1/4 right-8 w-px h-32 bg-primary/20" />
        <div
          className="absolute bottom-0 left-0 right-0 h-px bg-border"
          style={{ bottom: "10%" }}
        />
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.p
          className="font-sans text-xs tracking-[0.35em] uppercase text-primary mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          data-testid="hero-location"
        >
          Kuwait · Graphic Designer
        </motion.p>

        <motion.h1
          className="font-serif font-light text-[clamp(3.5rem,10vw,9rem)] leading-[0.9] tracking-tight text-foreground mb-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          data-testid="hero-name"
        >
          Reema
          <br />
          <span className="italic text-primary">Atieh</span>
        </motion.h1>

        <motion.div
          className="w-16 h-px bg-primary mx-auto mb-10"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        />

        <motion.p
          className="font-sans text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          data-testid="hero-intro"
        >
          I'm Reema Atieh, a Kuwait-based graphic designer specializing in visual
          identity, social media design, packaging, editorial design, animation,
          and website visuals.
        </motion.p>

        <motion.div
          className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <button
            data-testid="hero-cta-work"
            onClick={scrollToWork}
            className="px-10 py-3.5 bg-foreground text-background font-sans text-sm tracking-widest uppercase hover:bg-primary transition-colors duration-400"
          >
            View Work
          </button>
          <button
            data-testid="hero-cta-contact"
            onClick={() => {
              const el = document.querySelector("#contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-10 py-3.5 border border-foreground text-foreground font-sans text-sm tracking-widest uppercase hover:border-primary hover:text-primary transition-colors duration-400"
          >
            Get in Touch
          </button>
        </motion.div>
      </div>

      <motion.button
        data-testid="hero-scroll-indicator"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300"
        onClick={scrollToWork}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
      >
        <span className="font-sans text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.button>
    </section>
  );
}
