import { motion } from "framer-motion";
import {
  Palette,
  Smartphone,
  Package,
  BookOpen,
  Play,
  Globe,
} from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Visual Identity & Branding",
    description:
      "Comprehensive brand systems — logos, color palettes, typography, and guidelines that give businesses a cohesive, memorable identity.",
  },
  {
    icon: Smartphone,
    title: "Social Media Design",
    description:
      "Scroll-stopping content crafted for Instagram, LinkedIn, and beyond. Consistent, on-brand visuals that build community and drive engagement.",
  },
  {
    icon: Package,
    title: "Packaging Design",
    description:
      "Packaging that stands out on the shelf and reflects the soul of the product — structural thinking paired with refined visual craft.",
  },
  {
    icon: BookOpen,
    title: "Editorial Design",
    description:
      "Books, magazines, annual reports, and catalogs laid out with precision and elegance. Typography that guides the reader effortlessly.",
  },
  {
    icon: Play,
    title: "Animation & Motion Design",
    description:
      "Bringing static designs to life through motion — logo animations, social reels, explainer sequences, and kinetic typography.",
  },
  {
    icon: Globe,
    title: "Website & Digital Design",
    description:
      "Website visuals and digital assets that are both beautiful and purposeful — UI concepts, landing pages, and digital brand extensions.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      data-testid="services-section"
      className="py-32 px-6 bg-background"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-sans text-xs tracking-[0.35em] uppercase text-primary mb-4">
            What I Offer
          </p>
          <h2 className="font-serif font-light text-5xl md:text-6xl text-foreground">
            Services
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                data-testid={`service-card-${i}`}
                className="bg-background p-10 flex flex-col gap-5 group hover:bg-card transition-colors duration-400"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: i * 0.07 }}
              >
                <div className="w-10 h-10 flex items-center justify-center border border-border group-hover:border-primary group-hover:text-primary transition-colors duration-400">
                  <Icon size={18} strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-xl text-foreground group-hover:text-primary transition-colors duration-400">
                  {service.title}
                </h3>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
