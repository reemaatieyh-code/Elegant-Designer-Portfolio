import { motion } from "framer-motion";
import { Palette, Smartphone, Package, BookOpen, Play, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const icons = [Palette, Smartphone, Package, BookOpen, Play, Globe];

export default function Services() {
  const { t, isRTL } = useLanguage();

  return (
    <section id="services" data-testid="services-section" className="section-pad border-t border-border">
      <div className="max-w-[1400px] mx-auto">
        <div className={`flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-20 ${isRTL ? "md:flex-row-reverse" : ""}`}>
          <div className={isRTL ? "text-right" : ""}>
            <p className="label-sm mb-5">{t.services.label}</p>
            <h2 className="font-serif font-light text-[clamp(3rem,6vw,5.5rem)] text-foreground">
              {t.services.heading}
            </h2>
          </div>
        </div>

        <div className="flex flex-col divide-y divide-border">
          {t.services.items.map((s, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={s.num}
                data-testid={`service-${i}`}
                className={`grid grid-cols-1 md:grid-cols-[80px_1fr_1fr] gap-6 md:gap-12 py-10 group ${isRTL ? "md:grid-cols-[1fr_1fr_80px] text-right" : ""}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
              >
                {isRTL ? (
                  <>
                    <p className="font-sans text-[14px] text-muted-foreground leading-[1.75] font-light">{s.desc}</p>
                    <h3 className="font-serif font-light text-2xl md:text-[1.7rem] text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">{s.title}</h3>
                    <div className="flex items-start justify-end gap-4 md:flex-col md:gap-3">
                      <Icon size={18} strokeWidth={1.5} className="text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                      <span className="label-sm group-hover:text-primary transition-colors duration-300">{s.num}</span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex items-start gap-4 md:flex-col md:gap-3">
                      <span className="label-sm group-hover:text-primary transition-colors duration-300">{s.num}</span>
                      <Icon size={18} strokeWidth={1.5} className="text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                    </div>
                    <h3 className="font-serif font-light text-2xl md:text-[1.7rem] text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">{s.title}</h3>
                    <p className="font-sans text-[14px] text-muted-foreground leading-[1.75] font-light">{s.desc}</p>
                  </>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
