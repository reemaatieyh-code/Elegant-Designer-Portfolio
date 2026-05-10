import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

function Star() {
  return (
    <span
      className="font-sans text-[#D96F45] shrink-0 px-4 md:px-8 text-lg"
      aria-hidden="true"
    >
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
      className="py-20 md:py-24 border-t border-b border-stone-200 overflow-hidden bg-[#F7F4EF]"
    >
      {/* Label */}
      <div className="max-w-[1500px] mx-auto px-6 md:px-12 lg:px-20 mb-12">
        <p className="font-sans uppercase tracking-[0.35em] text-[11px] text-stone-500">
          {t.categories.label}
        </p>
      </div>

      {/* Animated Categories */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex items-center whitespace-nowrap"
          animate={{ x: isRTL ? ["0%", "50%"] : ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 40,
            ease: "linear",
          }}
        >
          {[...cats, ...cats].map((cat, i) => (
            <span key={i} className="inline-flex items-center">
              <span
                data-testid={i < cats.length ? `category-${i}` : undefined}
                className="font-serif font-light text-[clamp(1.8rem,3.8vw,3.2rem)] text-[#1D1715] tracking-[-0.02em] shrink-0"
                style={{
                  fontFamily:
                    "'Canela', 'Cormorant Garamond', Georgia, serif",
                }}
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
