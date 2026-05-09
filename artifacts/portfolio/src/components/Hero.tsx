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
    document.querySelector("#portfolio")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      data-testid="hero-section"
      className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-[#F6F2EE] px-8 lg:px-16 pt-32 pb-12"
    >
      {/* Soft background shadow */}
      <div className="absolute left-0 bottom-0 w-[320px] h-[420px] bg-black/5 blur-[90px] rounded-full pointer-events-none" />

      {/* Top label */}
      <motion.div {...fadeUp(0.2)} className="mb-20">
        <p
          className="font-sans text-[14px] tracking-[0.38em] uppercase text-stone-600 mb-5"
          data-testid="hero-label"
        >
          {t.hero.label}
        </p>

        <div className="w-10 h-px bg-[#D96F45]" />
      </motion.div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_520px] gap-16 lg:gap-28 items-center">
        
        {/* Left */}
        <motion.div
          {...fadeUp(0.35)}
          className={`${isRTL ? "text-right" : ""} pl-2 lg:pl-4`}
        >
          <h1
            className="font-light text-[clamp(6rem,12vw,12rem)] leading-[0.88] text-[#16110F]"
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

        {/* Right */}
        <motion.div
          className={`flex flex-col gap-10 lg:pt-36 ${
            isRTL ? "items-end text-right" : ""
          }`}
          {...fadeUp(0.5)}
        >
          <p
            className="font-sans text-[17px] text-stone-700 leading-[1.9] font-light max-w-[470px]"
            data-testid="hero-intro"
          >
            {t.hero.intro}
          </p>

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
              className="border border-stone-500 px-10 py-5 uppercase tracking-[0.25em] text-[12px] hover:bg-black hover:text-white transition-all duration-300"
            >
              {t.hero.collab}
            </button>
          </div>
        </motion.div>
      </div>

      {/* Bottom */}
      <motion.div
        className={`mt-20 flex items-center ${
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
          } flex items-center gap-4 uppercase tracking-[0.28em] text-[12px] text-stone-700 hover:text-[#D96F45] transition-colors duration-300`}
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
            <ArrowDown size={16} strokeWidth={1.4} />
          </motion.span>
        </button>
      </motion.div>

      {/* Right vertical line */}
      <div
        className={`absolute top-52 bottom-10 w-px bg-stone-300 hidden xl:block ${
          isRTL ? "left-16" : "right-16"
        }`}
      />

      {/* Index */}
      <motion.span
        className={`absolute top-52 text-[12px] tracking-[0.35em] uppercase text-stone-700 ${
          isRTL ? "left-[68px]" : "right-[68px]"
        }`}
        style={{ writingMode: "vertical-rl" }}
        {...fadeUp(0.7)}
      >
        {t.hero.index}
      </motion.span>
    </section>
  );
}
