import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

function Star() {
  return (
    <span className="font-sans text-primary shrink-0 px-4 md:px-8 text-lg" aria-hidden="true">
      ✦
    </span>
  );
}

export default function Categories() {
  const { t, isRTL } = useLanguage();
  const cats = t.categories.items;

  return (
    <section
      data-testid="categories-section"
      className="py-16 md:py-20 border-t border-b border-border overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 mb-10">
        <p className="label-sm">{t.categories.label}</p>
      </div>

      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex items-center whitespace-nowrap"
          animate={{ x: isRTL ? ["0%", "50%"] : ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 28, ease: "linear" }}
        >
          {[...cats, ...cats].map((cat, i) => (
            <span key={i} className="inline-flex items-center">
              <span
                data-testid={i < cats.length ? `category-${i}` : undefined}
                className="font-serif font-light text-[clamp(1.6rem,3.5vw,2.8rem)] text-foreground tracking-tight shrink-0"
              >
                {cat}
              </span>
              <Star />
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
