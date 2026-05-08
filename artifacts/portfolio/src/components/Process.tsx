import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Process() {
  const { t, isRTL } = useLanguage();

  return (
    <section id="process" data-testid="process-section" className="section-pad border-t border-border bg-foreground">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className={`mb-16 md:mb-20 ${isRTL ? "text-right" : ""}`}>
          <p className="label-sm text-muted-foreground/60 mb-5">{t.process.label}</p>
          <h2 className="font-serif font-light text-[clamp(3rem,6vw,5.5rem)] text-background leading-[0.9]">
            {t.process.heading}
          </h2>
        </div>

        {/* 4-column grid — columns reverse automatically with dir="rtl" */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-background/10">
          {t.process.steps.map((step, i) => (
            <motion.div
              key={step.num}
              data-testid={`process-step-${i}`}
              className={`bg-foreground p-10 flex flex-col gap-6 ${isRTL ? "items-end text-right" : ""}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
            >
              <span className="font-sans text-[11px] tracking-[0.25em] uppercase text-primary">{step.num}</span>
              <h3 className="font-serif font-light text-3xl text-background">{step.title}</h3>
              <div className="w-6 h-px bg-primary" />
              <p className="font-sans text-[14px] text-background/50 leading-[1.75] font-light">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
