import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";

type Category =
  | "All"
  | "Social Media Design"
  | "Packaging Design"
  | "Editorial Design"
  | "Animation / Motion Design"
  | "Website & Digital Design"
  | "Branding / Visual Identity";

interface Project {
  id: number;
  title: string;
  category: Exclude<Category, "All">;
  description: string;
  detail: string;
  gradient: string;
  accentGradient: string;
  tag: string;
}

const projects: Project[] = [
  // Social Media Design
  {
    id: 1,
    title: "Bloom Studio Campaign",
    category: "Social Media Design",
    description: "A seasonal Instagram campaign for a local floral studio, balancing softness with boldness.",
    detail: "A full suite of Instagram posts, Stories, and Reels graphics for Bloom Studio's spring launch. The visual system draws on soft botanical photography, hand-lettered typography, and a dusky rose palette to create a cohesive feed that reflects the studio's identity — refined, warm, and deeply feminine.",
    gradient: "linear-gradient(135deg, hsl(350,40%,78%) 0%, hsl(340,30%,65%) 50%, hsl(330,25%,55%) 100%)",
    accentGradient: "linear-gradient(135deg, hsl(350,40%,85%) 0%, hsl(330,30%,70%) 100%)",
    tag: "SM",
  },
  {
    id: 2,
    title: "Raha Wellness Content",
    category: "Social Media Design",
    description: "Monthly social content for a Kuwait wellness brand — calm, clean, and consistently on-brand.",
    detail: "Twelve months of ongoing social media content for Raha Wellness, covering educational carousels, testimonial templates, and promotional graphics. The system was built for flexibility — any team member could produce new posts using the established grid, type hierarchy, and color system.",
    gradient: "linear-gradient(135deg, hsl(355,30%,72%) 0%, hsl(10,25%,60%) 100%)",
    accentGradient: "linear-gradient(135deg, hsl(355,35%,80%) 0%, hsl(10,20%,68%) 100%)",
    tag: "SM",
  },
  {
    id: 3,
    title: "Saffron Restaurant Launch",
    category: "Social Media Design",
    description: "Launch graphics for a fine-dining restaurant opening in Kuwait City.",
    detail: "A launch campaign that needed to communicate luxury and warmth simultaneously. The visual identity translated to social through deep jewel tones, gold typographic accents, and cinematic food photography styling guides.",
    gradient: "linear-gradient(135deg, hsl(15,45%,60%) 0%, hsl(350,35%,50%) 100%)",
    accentGradient: "linear-gradient(135deg, hsl(15,50%,70%) 0%, hsl(350,30%,60%) 100%)",
    tag: "SM",
  },
  // Packaging Design
  {
    id: 4,
    title: "Musk & Cedar Candles",
    category: "Packaging Design",
    description: "Premium candle packaging that communicates slow luxury through minimal form.",
    detail: "Packaging design for a boutique candle brand positioned in the premium gifting market. The brief called for tactile premium cues: kraft outer with debossed logotype, a matte-finish inner wrap in warm linen, and a wax-sealed collar for the lid. The type system uses a single serif face in three weights, letting material choice carry the visual weight.",
    gradient: "linear-gradient(135deg, hsl(80,20%,55%) 0%, hsl(100,18%,42%) 50%, hsl(120,15%,38%) 100%)",
    accentGradient: "linear-gradient(135deg, hsl(80,22%,65%) 0%, hsl(100,18%,52%) 100%)",
    tag: "PK",
  },
  {
    id: 5,
    title: "Zafran Spice Co.",
    category: "Packaging Design",
    description: "Bold, market-shelf packaging for an artisan spice brand entering retail.",
    detail: "The challenge: make artisan spices stand out in a crowded retail shelf without looking artisanal in a clichéd way. The solution uses a structural grid of bold geometric color blocks, each hue tied to a flavor family, with a hand-illustrated botanical mark anchoring every SKU.",
    gradient: "linear-gradient(135deg, hsl(90,25%,48%) 0%, hsl(110,20%,40%) 100%)",
    accentGradient: "linear-gradient(135deg, hsl(90,28%,58%) 0%, hsl(110,22%,50%) 100%)",
    tag: "PK",
  },
  // Editorial Design
  {
    id: 6,
    title: "The Kuwaiti Kitchen",
    category: "Editorial Design",
    description: "A cookbook layout celebrating traditional Kuwaiti cuisine with contemporary editorial design.",
    detail: "A 240-page cookbook combining food photography, typographic hierarchy, and marginal notes. The design system uses a loose, generous grid to give recipes room to breathe, contrasted against tightly-set chapter openers that command attention. Printed with a sewn binding and matte laminate cover.",
    gradient: "linear-gradient(135deg, hsl(35,35%,72%) 0%, hsl(25,30%,60%) 50%, hsl(20,25%,52%) 100%)",
    accentGradient: "linear-gradient(135deg, hsl(35,38%,80%) 0%, hsl(25,30%,68%) 100%)",
    tag: "ED",
  },
  {
    id: 7,
    title: "Gulf Architecture Review",
    category: "Editorial Design",
    description: "Quarterly publication layout for an architecture and interiors magazine.",
    detail: "Art direction and layout for a bi-annual architecture publication covering contemporary Gulf design. The grid is Swiss-influenced but warm — structured enough to anchor long-form journalism, flexible enough to let full-bleed architectural photography own its space.",
    gradient: "linear-gradient(135deg, hsl(30,28%,68%) 0%, hsl(20,22%,56%) 100%)",
    accentGradient: "linear-gradient(135deg, hsl(30,30%,76%) 0%, hsl(20,24%,64%) 100%)",
    tag: "ED",
  },
  // Animation / Motion Design
  {
    id: 8,
    title: "Al Watan Brand Animation",
    category: "Animation / Motion Design",
    description: "Logo reveal and brand motion system for a media company rebrand.",
    detail: "A comprehensive brand motion system: logo reveal (3 variations — full, lock-up, and icon mark), a lower-thirds package, transition wipes, and a social bumper. The motion language is confident and precise — no decorative flourishes, just purposeful movement that mirrors the editorial brand.",
    gradient: "linear-gradient(135deg, hsl(260,30%,55%) 0%, hsl(240,25%,42%) 50%, hsl(220,30%,38%) 100%)",
    accentGradient: "linear-gradient(135deg, hsl(260,32%,65%) 0%, hsl(240,26%,52%) 100%)",
    tag: "AN",
  },
  {
    id: 9,
    title: "Social Reel Templates",
    category: "Animation / Motion Design",
    description: "Animated Instagram Reel template packs designed for easy client customization.",
    detail: "A series of 12 animated Reel templates for a social media agency's client library. Each template ships as an After Effects project with labeled composition layers, allowing non-designers to swap text and imagery while preserving motion timing and easing.",
    gradient: "linear-gradient(135deg, hsl(250,28%,60%) 0%, hsl(270,22%,48%) 100%)",
    accentGradient: "linear-gradient(135deg, hsl(250,30%,70%) 0%, hsl(270,24%,58%) 100%)",
    tag: "AN",
  },
  // Website & Digital Design
  {
    id: 10,
    title: "Noor Architecture Studio",
    category: "Website & Digital Design",
    description: "Portfolio website visual design for a Kuwait-based architecture firm.",
    detail: "Visual design for a five-page architecture portfolio. The design system prioritizes the photography — a near-invisible navigation, a full-bleed project grid, and a restrained type palette. The result feels like a gallery, not a website. Delivered as Figma components and an annotated style guide.",
    gradient: "linear-gradient(135deg, hsl(210,25%,52%) 0%, hsl(220,22%,40%) 50%, hsl(230,20%,36%) 100%)",
    accentGradient: "linear-gradient(135deg, hsl(210,26%,62%) 0%, hsl(220,22%,50%) 100%)",
    tag: "WD",
  },
  {
    id: 11,
    title: "Luma Skincare E-commerce",
    category: "Website & Digital Design",
    description: "E-commerce visual design and UI kit for a premium skincare brand.",
    detail: "A complete UI design for an e-commerce skincare platform: homepage, product listing, product detail, cart, and checkout flows. The visual language is clinical-clean with warm undertones — communicating both efficacy and luxury without clinical sterility.",
    gradient: "linear-gradient(135deg, hsl(205,22%,58%) 0%, hsl(215,20%,46%) 100%)",
    accentGradient: "linear-gradient(135deg, hsl(205,24%,66%) 0%, hsl(215,20%,54%) 100%)",
    tag: "WD",
  },
  // Branding / Visual Identity
  {
    id: 12,
    title: "Joud Creative Studio",
    category: "Branding / Visual Identity",
    description: "Full brand identity system for a boutique creative consultancy.",
    detail: "A ground-up identity for a creative consultancy positioning itself at the intersection of strategy and craft. The logomark is a geometric tension — two forms that push against each other but hold. The color system: warm off-white, charcoal, and a single accent terracotta. The typeface pairing: condensed grotesque for headlines, humanist serif for body.",
    gradient: "linear-gradient(135deg, hsl(15,40%,55%) 0%, hsl(5,35%,45%) 50%, hsl(0,30%,40%) 100%)",
    accentGradient: "linear-gradient(135deg, hsl(15,42%,65%) 0%, hsl(5,36%,55%) 100%)",
    tag: "BI",
  },
  {
    id: 13,
    title: "Zara Restaurant Group",
    category: "Branding / Visual Identity",
    description: "Brand identity for a multi-location restaurant group expanding across the Gulf.",
    detail: "A scalable identity system for a restaurant group with three distinct concepts under one umbrella. The challenge: each concept needed its own personality while sharing enough visual DNA to communicate coherent ownership. The solution: a structural grid and shared typographic system, with unique color families and illustration styles per concept.",
    gradient: "linear-gradient(135deg, hsl(10,38%,50%) 0%, hsl(0,32%,42%) 100%)",
    accentGradient: "linear-gradient(135deg, hsl(10,40%,60%) 0%, hsl(0,34%,52%) 100%)",
    tag: "BI",
  },
];

const categories: Category[] = [
  "All",
  "Social Media Design",
  "Packaging Design",
  "Editorial Design",
  "Animation / Motion Design",
  "Website & Digital Design",
  "Branding / Visual Identity",
];

export default function Portfolio() {
  const [active, setActive] = useState<Category>("All");
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section
      id="portfolio"
      data-testid="portfolio-section"
      className="py-32 px-6 bg-background"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-sans text-xs tracking-[0.35em] uppercase text-primary mb-4">
            Selected Work
          </p>
          <h2 className="font-serif font-light text-5xl md:text-6xl text-foreground">
            Portfolio
          </h2>
        </motion.div>

        {/* Filters */}
        <motion.div
          className="flex flex-wrap gap-3 mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              data-testid={`filter-${cat.replace(/\s+/g, "-").toLowerCase()}`}
              onClick={() => setActive(cat)}
              className={`font-sans text-xs tracking-widest uppercase px-5 py-2.5 border transition-all duration-300 ${
                active === cat
                  ? "bg-foreground text-background border-foreground"
                  : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                data-testid={`project-card-${project.id}`}
                className="bg-background group cursor-pointer overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                onClick={() => setSelected(project)}
              >
                {/* Image placeholder */}
                <div className="relative overflow-hidden">
                  <div
                    className="h-64 w-full transition-transform duration-700 group-hover:scale-105"
                    style={{ background: project.gradient }}
                  />
                  {/* Tag */}
                  <div className="absolute top-4 left-4 font-sans text-xs tracking-widest text-white/80 border border-white/20 px-2 py-1 bg-black/10 backdrop-blur-sm">
                    {project.tag}
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/70 transition-all duration-400 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2 text-background font-sans text-sm tracking-widest uppercase">
                      View Project <ArrowRight size={14} />
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6 flex flex-col gap-2">
                  <p className="font-sans text-xs tracking-widest uppercase text-primary">
                    {project.category}
                  </p>
                  <h3 className="font-serif text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="font-sans text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            data-testid="project-modal-overlay"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10 bg-foreground/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              data-testid="project-modal"
              className="bg-background w-full max-w-4xl max-h-[90vh] overflow-y-auto relative"
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.97 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Hero image */}
              <div
                className="h-72 md:h-96 w-full"
                style={{ background: selected.gradient }}
              />

              {/* Close button */}
              <button
                data-testid="project-modal-close"
                onClick={() => setSelected(null)}
                className="absolute top-5 right-5 w-10 h-10 bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors duration-200"
              >
                <X size={18} />
              </button>

              <div className="p-8 md:p-12 flex flex-col gap-8">
                <div>
                  <p className="font-sans text-xs tracking-[0.35em] uppercase text-primary mb-3">
                    {selected.category}
                  </p>
                  <h2 className="font-serif font-light text-4xl md:text-5xl text-foreground">
                    {selected.title}
                  </h2>
                </div>

                <div className="w-10 h-px bg-primary" />

                <p className="font-sans text-muted-foreground leading-relaxed text-base max-w-2xl">
                  {selected.detail}
                </p>

                {/* Additional image placeholders */}
                <div className="grid grid-cols-2 gap-4">
                  <div
                    className="h-48"
                    style={{ background: selected.accentGradient }}
                    data-testid="project-modal-img-1"
                  />
                  <div
                    className="h-48"
                    style={{
                      background: selected.gradient,
                      filter: "brightness(1.08) saturate(0.9)",
                    }}
                    data-testid="project-modal-img-2"
                  />
                </div>
                <div
                  className="h-56 w-full"
                  style={{ background: selected.accentGradient, filter: "brightness(0.95)" }}
                  data-testid="project-modal-img-3"
                />

                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <button
                    data-testid="project-modal-inquire"
                    onClick={() => {
                      setSelected(null);
                      setTimeout(() => {
                        const el = document.querySelector("#contact");
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                      }, 200);
                    }}
                    className="px-8 py-3 bg-foreground text-background font-sans text-sm tracking-widest uppercase hover:bg-primary transition-colors duration-400"
                  >
                    Inquire About This Project
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
