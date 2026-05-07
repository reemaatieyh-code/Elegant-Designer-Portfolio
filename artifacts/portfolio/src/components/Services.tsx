import { motion } from "framer-motion";
import { Palette, Smartphone, Package, BookOpen, Play, Globe } from "lucide-react";

const services = [
  { icon: Palette, num: "01", title: "Visual Identity & Branding", desc: "Comprehensive brand systems — logos, color palettes, typography, and guidelines that give businesses a cohesive, memorable identity." },
  { icon: Smartphone, num: "02", title: "Social Media Design", desc: "Scroll-stopping content for Instagram, LinkedIn, and beyond. Consistent, on-brand visuals that build community and drive engagement." },
  { icon: Package, num: "03", title: "Packaging Design", desc: "Packaging that stands out on the shelf and reflects the soul of the product — structural thinking paired with refined visual craft." },
  { icon: BookOpen, num: "04", title: "Editorial Design", desc: "Books, magazines, annual reports, and catalogs laid out with precision and elegance. Typography that guides the reader effortlessly." },
  { icon: Play, num: "05", title: "Animation & Motion Design", desc: "Bringing static designs to life through motion — logo animations, social reels, explainer sequences, and kinetic typography." },
  { icon: Globe, num: "06", title: "Website & Digital Design", desc: "Website visuals and digital assets that are both beautiful and purposeful — UI concepts, landing pages, and digital brand extensions." },
];

export default function Services() {
  return (
    <section id="services" data-testid="services-section" className="section-pad border-t border-border">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-20">
          <div>
            <p className="label-sm mb-5">What I Offer</p>
            <h2 className="font-serif font-light text-[clamp(3rem,6vw,5.5rem)] text-foreground">
              Services
            </h2>
          </div>
        </div>

        <div className="flex flex-col divide-y divide-border">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.num}
                data-testid={`service-${i}`}
                className="grid grid-cols-1 md:grid-cols-[80px_1fr_1fr] gap-6 md:gap-12 py-10 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
              >
                <div className="flex items-start gap-4 md:flex-col md:gap-3">
                  <span className="label-sm group-hover:text-primary transition-colors duration-300">{s.num}</span>
                  <Icon size={18} strokeWidth={1.5} className="text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                </div>
                <h3 className="font-serif font-light text-2xl md:text-[1.7rem] text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
                  {s.title}
                </h3>
                <p className="font-sans text-[14px] text-muted-foreground leading-[1.75] font-light">
                  {s.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
