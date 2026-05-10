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
    document
      .querySelector("#portfolio")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      data-testid="hero-section"
      className="relative min-h-screen flex flex-col justify-end section-pad pt-32 overflow-hidden bg-[#F7F4EF]"
    >
      {/* Top Label */}
      <motion.div {...fadeUp(0.2)} className="mb-12 md:mb-16">
        <p
          className="font-sans text-[13px] tracking-[0.38em] uppercase text-stone-600 mb-5"
          data-testid="hero-label"
        >
          {t.hero.label}
        </p>

        <div className="w-10 h-px bg-[#D96F45]" />
      </motion.div>

      {/* Main Hero Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_520px] gap-0 items-center">
        
        {/* Left Side — Name */}
        <motion.div
          {...fadeUp(0.35)}
          className={`${isRTL ? "text-right" : ""} lg:translate-x-32`}
        >
          <h1
            className="font-light text-[clamp(5rem,10vw,10rem)] leading-[0.88] text-[#171311]"
            style={{
              fontFamily:
                "'Canela', 'Cormorant Garamond', Georgia, serif",
            }}
            data-testid="hero-name"
          >
            {t.hero.line1}

            <br />

            <em className="not-italic text-[#D96F45]">
              {t.hero.line2}
            </em>
          </h1>
        </motion.div>

        {/* Right Side — Paragraph + Buttons */}
        <motion.div
          className={`flex flex-col gap-8 ${
            isRTL ? "items-end text-right" : ""
          }`}
          {...fadeUp(0.5)}
        >
          <p
            className="font-sans text-[18px] text-stone-700 leading-[1.8] font-light max-w-[460px]"
            data-testid="hero-intro"
          >
            {t.hero.intro}
          </p>

          {/* Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 ${
              isRTL ? "sm:flex-row-reverse" : ""
            }`}
          >
            <button
              data-testid="hero-cta-work"
              onClick={scrollToWork}
              className="bg-black text-white px-10 py-5 uppercase tracking-[0.25em] text-[12px] hover:bg-[#D96F45] transition-all duration-300"
            >
              {t.hero.viewWork}
            </button>

            <button
              data-testid="hero-cta-collab"
              onClick={() =>
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="border border-stone-400 px-10 py-5 uppercase tracking-[0.25em] text-[12px] hover:border-black hover:text-black transition-all duration-300"
            >
              {t.hero.collab}
            </button>
          </div>
        </motion.div>
      </div>

      {/* Bottom Divider + Scroll */}
      <motion.div
        className={`mt-16 md:mt-20 flex items-center ${
          isRTL ? "flex-row-reverse" : ""
        }`}
        {...fadeUp(0.65)}
      >
        <div className="flex-1 h-px bg-stone-300" />

        <button
          data-testid="hero-scroll"
          onClick={scrollToWork}
          className={`${
            isRTL ? "me-8 flex-row-reverse" : "ms-8"
          } flex items-center gap-3 uppercase tracking-[0.28em] text-[12px] text-stone-600 hover:text-black transition-colors duration-300 shrink-0 group`}
        >
          {t.hero.scroll}

          <motion.span
            className="inline-flex"
            animate={{ y: [0, 5, 0] }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut",
            }}
          >
            <ArrowDown size={14} strokeWidth={1.5} />
          </motion.span>
        </button>
      </motion.div>

      {/* Right Vertical Line */}
      <div
        className={`absolute top-32 bottom-20 w-px bg-stone-300 hidden xl:block ${
          isRTL ? "left-20" : "right-20"
        }`}
      />

      {/* Vertical Portfolio Index */}
      <motion.span
        className={`absolute top-40 text-[12px] tracking-[0.35em] uppercase text-stone-600 ${
          isRTL ? "left-[88px]" : "right-[88px]"
        }`}
        style={{ writingMode: "vertical-rl" }}
        {...fadeUp(0.7)}
      >
        {t.hero.index}
      </motion.span>
    </section>
  );
}
