import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
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
        Graphic Designer & Art Director &nbsp;·&nbsp; Based in Kuwait
      </motion.p>

      {/* Main grid: heading left, text right */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-10 lg:gap-20 items-end">
        {/* Left: big heading */}
        <motion.div {...fadeUp(0.35)}>
          <h1
            className="font-serif font-light text-[clamp(4.5rem,11vw,10.5rem)] leading-[0.88] text-foreground"
            data-testid="hero-name"
          >
            Reema
            <br />
            <em className="not-italic" style={{ color: "hsl(var(--primary))" }}>Atieh.</em>
          </h1>
        </motion.div>

        {/* Right: text + buttons */}
        <motion.div
          className="flex flex-col gap-8 pb-2"
          {...fadeUp(0.5)}
        >
          <p
            className="font-sans text-[15px] text-muted-foreground leading-relaxed font-light"
            data-testid="hero-intro"
          >
            I'm Reema Atieh, a Kuwait-based graphic designer specializing in
            visual identity, social media design, packaging, editorial design,
            animation, and website visuals.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              data-testid="hero-cta-work"
              onClick={scrollToWork}
              className="btn-primary"
            >
              View Work
            </button>
            <button
              data-testid="hero-cta-collab"
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-secondary"
            >
              Let's Collaborate
            </button>
          </div>
        </motion.div>
      </div>

      {/* Divider + scroll indicator */}
      <motion.div
        className="mt-14 md:mt-20 flex items-center justify-between"
        {...fadeUp(0.65)}
      >
        <div className="divider flex-1" />
        <button
          data-testid="hero-scroll"
          onClick={scrollToWork}
          className="ml-8 flex items-center gap-3 label-sm hover:text-primary transition-colors duration-300 shrink-0 group"
        >
          Scroll to explore
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
      <div className="absolute right-12 top-36 bottom-24 w-px bg-border hidden xl:block" />

      {/* Index number */}
      <motion.span
        className="absolute right-[54px] top-40 label-sm"
        style={{ writingMode: "vertical-rl" }}
        {...fadeUp(0.7)}
      >
        01 / Portfolio 2024
      </motion.span>
    </section>
  );
}
