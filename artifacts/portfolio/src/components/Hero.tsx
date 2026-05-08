import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  const { t, isRTL } = useLanguage();

  const scrollToWork = () => {
    document.querySelector("#portfolio")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      data-testid="hero-section"
      className="relative min-h-screen flex flex-col justify-end section-pad pt-36 overflow-hidden"
    >
      {/* Top label */}
      <motion.p
        className="label-sm mb-10 md:mb-14"
        data-testid="hero-label"
        {...fadeUp(0.2)}
      >
        {t.hero.label}
      </motion.p>

      {/* Main grid */}
      <div className={`grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-10 lg:gap-20 items-end`}>
        {/* Heading */}
        <motion.div {...fadeUp(0.35)}>
          <h1
            className="font-light text-[clamp(4.5rem,11vw,10.5rem)] leading-[0.88] text-foreground"
            style={{ fontFamily: "'Canela', 'Cormorant Garamond', Georgia, serif" }}
            data-testid="hero-name"
          >
            {t.hero.line1}
            <br />
            <em className="not-italic" style={{ color: "hsl(var(--primary))" }}>{t.hero.line2}</em>
          </h1>
        </motion.div>

        {/* Right: intro + buttons */}
        <motion.div className="flex flex-col gap-8 pb-2" {...fadeUp(0.5)}>
          <p
            className="font-sans text-[15px] text-muted-foreground leading-relaxed font-light"
            data-testid="hero-intro"
          >
            {t.hero.intro}
          </p>

          <div className={`flex flex-col sm:flex-row gap-3 ${isRTL ? "sm:flex-row-reverse" : ""}`}>
            <button
              data-testid="hero-cta-work"
              onClick={scrollToWork}
              className="btn-primary"
            >
              {t.hero.viewWork}
            </button>
            <button
              data-testid="hero-cta-collab"
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-secondary"
            >
              {t.hero.collab}
            </button>
          </div>
        </motion.div>
      </div>

      {/* Divider + scroll */}
      <motion.div
        className="mt-14 md:mt-20 flex items-center justify-between"
        {...fadeUp(0.65)}
      >
        <div className="divider flex-1" />
        <button
          data-testid="hero-scroll"
          onClick={scrollToWork}
          className={`${isRTL ? "mr-8" : "ml-8"} flex items-center gap-3 label-sm hover:text-primary transition-colors duration-300 shrink-0 group`}
        >
          {t.hero.scroll}
          <motion.span
            className="inline-flex"
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ArrowDown size={14} strokeWidth={1.5} />
          </motion.span>
        </button>
      </motion.div>

      {/* Decorative vertical line */}
      <div className={`absolute ${isRTL ? "left-12" : "right-12"} top-36 bottom-24 w-px bg-border hidden xl:block`} />

      {/* Index number */}
      <motion.span
        className={`absolute ${isRTL ? "left-[54px]" : "right-[54px]"} top-40 label-sm`}
        style={{ writingMode: "vertical-rl" }}
        {...fadeUp(0.7)}
      >
        {t.hero.index}
      </motion.span>
    </section>
  );
}
