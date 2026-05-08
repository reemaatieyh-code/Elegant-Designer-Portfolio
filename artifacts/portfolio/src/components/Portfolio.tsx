import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "wouter";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { projectsAr } from "@/lib/i18n";

export type Project = {
  id: number;
  slug: string;
  title: string;
  category: string;
  year: string;
  description: string;
  detail: string;
  role: string;
  bg: string;
  bgAlt: string;
  bgAlt2: string;
  palette: string[];
};

export const projects: Project[] = [
  {
    id: 1, slug: "bloom-studio", title: "Bloom Studio",
    category: "Social Media Design", year: "2024",
    description: "A seasonal campaign that balances botanical softness with editorial sharpness.",
    detail: "A full suite of Instagram posts, Stories, and Reels graphics for Bloom Studio's spring launch. The visual system draws on soft botanical motifs, refined typography, and a dusky rose palette to create a feed that feels curated and unmistakably on-brand.",
    role: "Social Media Design",
    bg: "linear-gradient(160deg, #C9A89E 0%, #A87070 60%, #7A4848 100%)",
    bgAlt: "linear-gradient(135deg, #D4B0A8 0%, #B08080 100%)",
    bgAlt2: "linear-gradient(160deg, #E8D4CE 0%, #C9A89E 100%)",
    palette: ["#C9A89E", "#A87070", "#7A4848", "#F2EAE6"],
  },
  {
    id: 2, slug: "raha-wellness", title: "Raha Wellness",
    category: "Social Media Design", year: "2024",
    description: "Ongoing monthly content for a Kuwait wellness brand — calm, considered, consistent.",
    detail: "Twelve months of social media content for Raha Wellness — educational carousels, testimonial templates, and promotional graphics built around a flexible design system. The system lets any team member produce new posts while maintaining strict visual consistency.",
    role: "Social Media Design, Brand System",
    bg: "linear-gradient(160deg, #B8A898 0%, #957B6C 60%, #6E5548 100%)",
    bgAlt: "linear-gradient(135deg, #C8B8A8 0%, #A58878 100%)",
    bgAlt2: "linear-gradient(160deg, #E2D8CE 0%, #C0AA98 100%)",
    palette: ["#B8A898", "#957B6C", "#6E5548", "#F0EBE4"],
  },
  {
    id: 3, slug: "musk-cedar", title: "Musk & Cedar Candles",
    category: "Packaging Design", year: "2023",
    description: "Packaging for a boutique candle brand positioned in the premium gifting market.",
    detail: "Structural and graphic packaging design for a boutique candle brand. Kraft outer with debossed logotype, matte linen-finish inner wrap, wax-sealed collar. A single serif face in three weights carries the entire typographic system — material choice does the rest.",
    role: "Packaging Design, Typography",
    bg: "linear-gradient(160deg, #8A9E7A 0%, #6A8060 60%, #4A6040 100%)",
    bgAlt: "linear-gradient(135deg, #9EAE8E 0%, #7A9270 100%)",
    bgAlt2: "linear-gradient(160deg, #D4DCC8 0%, #B0C2A0 100%)",
    palette: ["#8A9E7A", "#6A8060", "#4A6040", "#E8EEE0"],
  },
  {
    id: 4, slug: "zafran-spice", title: "Zafran Spice Co.",
    category: "Packaging Design", year: "2023",
    description: "Bold shelf-ready packaging for an artisan spice brand entering retail.",
    detail: "The challenge: stand out in a crowded retail shelf without looking artisanal in a clichéd way. The solution: bold geometric color blocks, each hue tied to a flavor family, with a hand-illustrated botanical mark anchoring every SKU.",
    role: "Packaging Design, Illustration Direction",
    bg: "linear-gradient(160deg, #9BAE78 0%, #7A9058 60%, #587040 100%)",
    bgAlt: "linear-gradient(135deg, #AEBC8E 0%, #889A6E 100%)",
    bgAlt2: "linear-gradient(160deg, #D8E0C8 0%, #B8C8A0 100%)",
    palette: ["#9BAE78", "#7A9058", "#587040", "#EAF0DA"],
  },
  {
    id: 5, slug: "kuwaiti-kitchen", title: "The Kuwaiti Kitchen",
    category: "Editorial Design", year: "2024",
    description: "A cookbook celebrating traditional Kuwaiti cuisine through contemporary editorial design.",
    detail: "A 240-page cookbook combining food photography, typographic hierarchy, and marginal notes. The grid is generous around recipes, contrasted against tightly-set chapter openers. Sewn binding, matte laminate cover, cream uncoated interior pages.",
    role: "Editorial Design",
    bg: "linear-gradient(160deg, #C8A870 0%, #A88448 60%, #7A6030 100%)",
    bgAlt: "linear-gradient(135deg, #D8BE88 0%, #B89060 100%)",
    bgAlt2: "linear-gradient(160deg, #F0E4CC 0%, #D8C098 100%)",
    palette: ["#C8A870", "#A88448", "#7A6030", "#F8F0E0"],
  },
  {
    id: 6, slug: "gulf-architecture", title: "Gulf Architecture Review",
    category: "Editorial Design", year: "2023",
    description: "Layout for a bi-annual architecture and interiors publication.",
    detail: "A bi-annual architecture publication covering contemporary Gulf design. The grid is Swiss-influenced but warm — structured enough to anchor long-form journalism, flexible enough to let full-bleed architectural photography own its space.",
    role: "Editorial Design, Typography",
    bg: "linear-gradient(160deg, #B89878 0%, #987858 60%, #705840 100%)",
    bgAlt: "linear-gradient(135deg, #C8A888 0%, #A88868 100%)",
    bgAlt2: "linear-gradient(160deg, #EAE0D0 0%, #CCB898 100%)",
    palette: ["#B89878", "#987858", "#705840", "#F4EDE0"],
  },
  {
    id: 7, slug: "al-watan-motion", title: "Al Watan Brand Motion",
    category: "Animation / Motion Design", year: "2024",
    description: "Logo reveal and comprehensive brand motion system for a media company rebrand.",
    detail: "A full brand motion system: logo reveal in three variations, lower-thirds package, transition wipes, and social bumper. The motion language is confident and precise — purposeful movement that mirrors the editorial identity of the brand.",
    role: "Motion Design, Brand Animation",
    bg: "linear-gradient(160deg, #7888B0 0%, #586898 60%, #384870 100%)",
    bgAlt: "linear-gradient(135deg, #8898C0 0%, #6878A8 100%)",
    bgAlt2: "linear-gradient(160deg, #D0D8F0 0%, #B0B8D8 100%)",
    palette: ["#7888B0", "#586898", "#384870", "#E8ECF8"],
  },
  {
    id: 8, slug: "noor-architecture", title: "Noor Architecture Studio",
    category: "Website & Digital Design", year: "2024",
    description: "Portfolio website visual design for a Kuwait-based architecture firm.",
    detail: "Visual design for a five-page architecture portfolio. Near-invisible navigation, full-bleed project grid, a restrained type palette. The result feels like a gallery, not a website. Delivered as Figma components and an annotated style guide.",
    role: "UI Design",
    bg: "linear-gradient(160deg, #788898 0%, #586878 60%, #384858 100%)",
    bgAlt: "linear-gradient(135deg, #8898A8 0%, #687888 100%)",
    bgAlt2: "linear-gradient(160deg, #D0DAE0 0%, #B0C0C8 100%)",
    palette: ["#788898", "#586878", "#384858", "#E8EEF2"],
  },
  {
    id: 9, slug: "joud-creative", title: "Joud Creative Studio",
    category: "Branding / Visual Identity", year: "2024",
    description: "Full brand identity system for a boutique creative consultancy.",
    detail: "A ground-up identity for a creative consultancy at the intersection of strategy and craft. The logomark: two geometric forms that push against each other but hold. Color system: warm off-white, charcoal, terracotta accent. Typeface pairing: condensed grotesque + humanist serif.",
    role: "Brand Identity",
    bg: "linear-gradient(160deg, #C07858 0%, #A05838 60%, #783820 100%)",
    bgAlt: "linear-gradient(135deg, #D08870 0%, #B06850 100%)",
    bgAlt2: "linear-gradient(160deg, #F0D8CC 0%, #D8B0A0 100%)",
    palette: ["#C07858", "#A05838", "#783820", "#F8ECE4"],
  },
  {
    id: 10, slug: "zara-restaurant", title: "Zara Restaurant Group",
    category: "Branding / Visual Identity", year: "2023",
    description: "Scalable identity system for a multi-location restaurant group expanding across the Gulf.",
    detail: "A scalable identity for a restaurant group with three distinct concepts under one umbrella. Each concept has its own personality while sharing visual DNA: a structural grid, shared typographic system, unique color families and illustration styles per concept.",
    role: "Brand Identity, Packaging",
    bg: "linear-gradient(160deg, #B06848 0%, #904828 60%, #682810 100%)",
    bgAlt: "linear-gradient(135deg, #C07858 0%, #A05838 100%)",
    bgAlt2: "linear-gradient(160deg, #EED8C8 0%, #CCB0A0 100%)",
    palette: ["#B06848", "#904828", "#682810", "#F8EAE0"],
  },
];

const EN_CATEGORIES = [
  "All",
  "Social Media Design",
  "Packaging Design",
  "Editorial Design",
  "Animation / Motion Design",
  "Website & Digital Design",
  "Branding / Visual Identity",
];

export default function Portfolio() {
  const { t, isRTL, lang } = useLanguage();
  const [activeIdx, setActiveIdx] = useState(0);
  const [, setLocation] = useLocation();

  const filterLabels = t.portfolio.filterLabels;
  const enCategory = EN_CATEGORIES[activeIdx];
  const filtered = activeIdx === 0 ? projects : projects.filter((p) => p.category === enCategory);

  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const getProjectDisplay = (project: Project) => {
    if (lang === "ar") {
      const arData = projectsAr.find((p) => p.slug === project.slug);
      if (arData) {
        return {
          title: arData.title,
          category: arData.category,
          description: arData.description,
        };
      }
    }
    return {
      title: project.title,
      category: project.category,
      description: project.description,
    };
  };

  return (
    <section id="portfolio" data-testid="portfolio-section" className="section-pad border-t border-border">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className={`flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-20 ${isRTL ? "md:flex-row-reverse" : ""}`}>
          <div>
            <p className="label-sm mb-5">{t.portfolio.label}</p>
            <h2 className="font-serif font-light text-[clamp(3rem,6vw,5.5rem)] text-foreground">
              {t.portfolio.heading}
            </h2>
          </div>
          <p className={`font-sans text-sm text-muted-foreground max-w-xs font-light leading-relaxed ${isRTL ? "text-right" : ""}`}>
            {t.portfolio.sub}
          </p>
        </div>

        {/* Filters */}
        <motion.div
          className={`flex flex-wrap gap-2 mb-14 ${isRTL ? "flex-row-reverse" : ""}`}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {filterLabels.map((label, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIdx(idx)}
              className={`font-sans text-[10px] tracking-[0.15em] uppercase px-5 py-2 border transition-all duration-300 ${
                activeIdx === idx
                  ? "bg-foreground text-background border-foreground"
                  : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
              }`}
            >
              {label}
            </button>
          ))}
        </motion.div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => {
              const display = getProjectDisplay(project);
              return (
                <motion.article
                  key={project.id}
                  layout
                  data-testid={`project-card-${project.id}`}
                  className="bg-background group cursor-pointer"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35, delay: i * 0.04 }}
                  onClick={() => setLocation(`/project/${project.slug}`)}
                >
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <div
                      className="h-[360px] md:h-[420px] w-full transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      style={{ background: project.bg }}
                    />
                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/55 transition-all duration-500 flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-3 group-hover:translate-y-0 font-sans text-[11px] tracking-[0.2em] uppercase text-background flex items-center gap-2">
                        {t.portfolio.viewCase} <ArrowIcon size={13} strokeWidth={1.5} />
                      </span>
                    </div>
                    <span className={`absolute top-5 ${isRTL ? "left-5" : "right-5"} label-sm text-white/60`}>{project.year}</span>
                  </div>

                  {/* Info */}
                  <div className={`p-8 flex items-start justify-between gap-6 border-t border-border ${isRTL ? "flex-row-reverse" : ""}`}>
                    <div className={`flex flex-col gap-2 ${isRTL ? "items-end text-right" : ""}`}>
                      <p className="label-sm text-primary">{display.category}</p>
                      <h3 className="font-serif font-light text-2xl md:text-[1.7rem] text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
                        {display.title}
                      </h3>
                      <p className="font-sans text-sm text-muted-foreground leading-relaxed mt-1 font-light max-w-xs">
                        {display.description}
                      </p>
                    </div>
                    <button
                      className="shrink-0 mt-1 w-10 h-10 border border-border flex items-center justify-center text-muted-foreground group-hover:border-primary group-hover:bg-primary group-hover:text-white transition-all duration-300"
                      aria-label={`View ${display.title}`}
                    >
                      <ArrowIcon size={15} strokeWidth={1.5} />
                    </button>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
