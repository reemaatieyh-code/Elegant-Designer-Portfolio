import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.9,
    delay,
    ease: [0.22, 1, 0.36, 1],
  },
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
      className="relative min-h-screen flex flex-col justify-center pt-20 md:pt-24 pb-12 px-8 md:px-14 xl:px-20 overflow-hidden bg-[#F7F4EF]"
    >
      {/* LEFT CONTENT WRAPPER */}
      <div className="xl:translate-x-16">
        
        {/* TOP LABEL */}
        <motion.div
          {...fadeUp(0.2)}
          className="mb-12 md:mb-16"
        >
          <p
            className="font-sans text-[13px] tracking-[0.38em] uppercase text-stone-600 mb-5"
            data-testid="hero-label"
          >
            {t.hero.label}
          </p>

          <div className="w-10 h-px bg-[#D96F45]" />
        </motion.div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 xl:grid-cols-[0.82fr_520px] items-center gap-10 xl:gap-0">
          
          {/* BIG NAME */}
          <motion.div
            {...fadeUp(0.35)}
            className={`${isRTL ? "text-right" : ""}`}
          >
            <h1
              data-testid="hero-name"
              className="font-light text-[clamp(5rem,11vw,11rem)] leading-[0.88] tracking-[-0.03em] text-[#171311]"
              style={{
                fontFamily:
                  "'Canela', 'Cormorant Garamond', Georgia, serif",
              }}
            >
              {t.hero.line1}
              <br />

              <em className="not-italic text-[#D96F45]">
                {t.hero.line2}
              </em>
            </h1>
          </motion.div>

          {/* RIGHT TEXT */}
          <motion.div
            {...fadeUp(0.5)}
            className={`flex flex-col gap-8 ${
              isRTL ? "items-end text-right" : ""
            }`}
          >
            <p
              data-testid="hero-intro"
              className="font-sans text-[18px] leading-[1.8] text-stone-700 font-light max-w-[460px]"
            >
              {t.hero.intro}
            </p>

            {/* BUTTONS */}
            <div
              className={`flex flex-col sm:flex-row gap-4 ${
                isRTL ? "sm:flex-row-reverse" : ""
              }`}
            >
              <button
                data-testid="hero-cta-work"
                onClick={scrollToWork}
                className="bg-black text-white px-10 py-5 uppercase tracking-[0.24em] text-[12px] transition-all duration-300 hover:bg-[#D96F45]"
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
                className="border border-stone-400 px-10 py-5 uppercase tracking-[0.24em] text-[12px] text-stone-700 hover:border-black hover:text-black transition-all duration-300"
              >
                {t.hero.collab}
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* BOTTOM LINE + SCROLL */}
      <motion.div
        {...fadeUp(0.65)}
        className={`mt-16 flex items-center ${
          isRTL ? "flex-row-reverse" : ""
        }`}
      >
        <div className="flex-1 h-px bg-stone-300" />

        <button
          data-testid="hero-scroll"
          onClick={scrollToWork}
          className={`${
            isRTL ? "me-8 flex-row-reverse" : "ms-8"
          } flex items-center gap-3 uppercase tracking-[0.28em] text-[12px] text-stone-600 hover:text-black transition-colors duration-300 shrink-0`}
        >
          {t.hero.scroll}

          <motion.span
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

      {/* RIGHT VERTICAL LINE */}
      <div
        className={`absolute top-32 bottom-20 hidden xl:block w-px bg-stone-300 ${
          isRTL ? "left-20" : "right-20"
        }`}
      />

      {/* VERTICAL TEXT */}
      <motion.span
        {...fadeUp(0.7)}
        className={`absolute top-[260px] text-[11px] tracking-[0.35em] uppercase text-stone-500 hidden sm:block ${
          isRTL ? "left-6 md:left-[88px]" : "right-6 md:right-[88px]"
        }`}
        style={{ writingMode: "vertical-rl" }}
      >
        {t.hero.index}
      </motion.span>
    </section>
  );
}
