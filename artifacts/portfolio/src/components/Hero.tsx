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
      className="relative min-h-screen flex flex-col justify-end section-pad pt-28 overflow-hidden bg-[#F7F4EF]"
    >
      {/* Top Label */}
      <motion.div {...fadeUp(0.2)} className="mb-10 md:mb-14">
        <p
          className="font-sans text-[13px] tracking-[0.38em] uppercase text-stone-600 mb-5"
          data-testid="hero-label"
        >
          {t.hero.label}
        </p>

        <div className="w-10 h-px bg-[#D96F45]" />
      </motion.div>

      {/* Main Hero */}
      <div className="grid grid-cols-1 lg:grid-cols-[0.78fr_560px] items-center">
        
        {/* LEFT — NAME */}
        <motion.div
          {...fadeUp(0.35)}
          className={`${isRTL ? "text-right" : ""} relative`}
        >
          <h1
            className="font-light leading-[0.82] tracking-[-0.04em] text-[#171311]"
            style={{
              fontFamily:
                "'Canela', 'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(6rem, 11vw, 11rem)",
            }}
            data-testid="hero-name"
          >
            <span className="block">
              {t.hero.line1}
            </span>

            <span className="block text-[#D96F45] ml-10 mt-1">
              {t.hero.line2}
            </span>
          </h1>
        </motion.div>

        {/* RIGHT — PARAGRAPH */}
        <motion.div
          className={`flex flex-col gap-8 lg:-ml-52 ${
            isRTL ? "items-end text-right lg:ml-0 lg:-mr-52" : ""
          }`}
          {...fadeUp(0.5)}
        >
          <p
            className="font-sans text-[20px] text-stone-700 leading-[1.85] font-light max-w-[520px]"
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
              className="bg-black text-white px-10 py-5 uppercase tracking-[0.28em] text-[12px] hover:bg-[#D96F45] transition-all duration-300"
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
              className="border border-stone-400 px-10 py-5 uppercase tracking-[0.28em] text-[12px] hover:border-black hover:text-black transition-all duration-300"
            >
              {t.hero.collab}
            </button>
          </div>
        </motion.div>
      </div>

      {/* Bottom Divider */}
      <motion.div
        className={`mt-14 md:mt-20 flex items-center ${
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
        className={`absolute top-28 bottom-20 w-px bg-stone-300 hidden xl:block ${
          isRTL ? "left-20" : "right-20"
        }`}
      />

      {/* Portfolio Index */}
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
