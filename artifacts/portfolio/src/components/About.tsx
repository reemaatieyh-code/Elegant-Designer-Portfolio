import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function About() {
  const { t, isRTL } = useLanguage();

  return (
    <section id="about" data-testid="about-section" className="section-pad border-t border-border">
      <div className="max-w-[1400px] mx-auto">
        <div className="max-w-2xl">
          <motion.div
            className={`flex flex-col gap-10 ${isRTL ? "items-end text-right" : ""}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            <div>
              <p className="label-sm mb-6">{t.about.label}</p>
              <h2 className="font-serif font-light text-[clamp(3rem,5.5vw,5rem)] text-foreground leading-[0.92]">
                {t.about.headingLine1}
                <br />
                <em className="not-italic" style={{ color: "hsl(var(--primary))" }}>{t.about.headingAccent}</em>
              </h2>
            </div>

            <div className={`w-8 h-px bg-primary ${isRTL ? "self-end" : ""}`} />

            <p className="font-sans text-[15px] text-muted-foreground leading-[1.75] font-light" data-testid="about-bio-1">
              {t.about.bio1}
            </p>
            <p className="font-sans text-[15px] text-muted-foreground leading-[1.75] font-light" data-testid="about-bio-2">
              {t.about.bio2}
            </p>

            <button
              data-testid="about-cta"
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className={`btn-secondary ${isRTL ? "self-end" : "self-start"}`}
            >
              {t.about.cta}
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
