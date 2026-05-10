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
