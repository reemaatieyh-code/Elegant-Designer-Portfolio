import { useEffect } from "react";
import { useParams, useLocation } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { projects } from "@/components/Portfolio";
import { useLanguage } from "@/contexts/LanguageContext";
import { projectsAr } from "@/lib/i18n";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function CaseStudy() {
  const { slug } = useParams<{ slug: string }>();
  const [, setLocation] = useLocation();
  const { t, lang, isRTL } = useLanguage();

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  const project = projects.find((p) => p.slug === slug);
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  const BackArrow = isRTL ? ArrowRight : ArrowLeft;
  const NextArrow = isRTL ? ArrowLeft : ArrowRight;

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className={`text-center ${isRTL ? "font-arabic" : ""}`}>
          <p className="label-sm mb-4">404</p>
          <h1 className="font-serif font-light text-5xl text-foreground mb-8">{t.caseStudy.notFound}</h1>
          <button onClick={() => setLocation("/")} className="btn-primary">{t.caseStudy.backPortfolio}</button>
        </div>
      </div>
    );
  }

  const arData = projectsAr.find((p) => p.slug === slug);

  const display = lang === "ar" && arData
    ? { title: arData.title, category: arData.category, detail: arData.detail, role: arData.role }
    : { title: project.title, category: project.category, detail: project.detail, role: project.role };

  const prevDisplay = prevProject
    ? (lang === "ar" ? (projectsAr.find((p) => p.slug === prevProject.slug)?.title ?? prevProject.title) : prevProject.title)
    : "";
  const nextDisplay = nextProject
    ? (lang === "ar" ? (projectsAr.find((p) => p.slug === nextProject.slug)?.title ?? nextProject.title) : nextProject.title)
    : "";

  return (
    <div className="min-h-screen bg-background">
      {/* Back nav */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className={`max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 h-[70px] flex items-center justify-between ${isRTL ? "flex-row-reverse" : ""}`}>
          <button
            data-testid="case-study-back"
            onClick={() => setLocation("/")}
            className={`flex items-center gap-3 font-sans text-[11px] tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300 ${isRTL ? "flex-row-reverse" : ""}`}
          >
            <BackArrow size={14} strokeWidth={1.5} />
            {t.caseStudy.back}
          </button>
          <p className="font-serif text-[17px] tracking-[0.12em] uppercase text-foreground hidden md:block">
            {t.nav.logo}
          </p>
          <p className="label-sm hidden md:block">{display.category}</p>
        </div>
      </div>

      {/* Hero image */}
      <section className="pt-[70px]">
        <motion.div
          className="w-full h-[55vh] md:h-[70vh]"
          style={{ background: project.bg }}
          data-testid="case-study-hero"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
      </section>

      {/* Project info */}
      <section className="section-pad border-b border-border">
        <div className="max-w-[1400px] mx-auto">
          <div className={`grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12 lg:gap-24 ${isRTL ? "lg:grid-flow-dense" : ""}`}>
            <motion.div className={`flex flex-col gap-6 ${isRTL ? "items-end text-right" : ""}`} {...fadeUp(0.1)}>
              <p className="label-sm text-primary">{display.category}</p>
              <h1 className="font-serif font-light text-[clamp(2.8rem,6vw,5.5rem)] text-foreground leading-[0.92]" data-testid="case-study-title">
                {display.title}
              </h1>
              <p className="font-sans text-[16px] text-muted-foreground leading-[1.75] font-light max-w-xl">
                {display.detail}
              </p>
            </motion.div>

            <motion.div
              className={`flex flex-col gap-8 border-border pl-8 md:pl-12 ${isRTL ? "border-r pr-8 md:pr-12 pl-0 md:pl-0 text-right items-end" : "border-l"}`}
              {...fadeUp(0.2)}
            >
              {[
                { label: t.caseStudy.categoryLabel, value: display.category },
                { label: t.caseStudy.roleLabel, value: display.role },
                { label: t.caseStudy.yearLabel, value: project.year },
                { label: t.caseStudy.clientLabel, value: display.title },
              ].map((item) => (
                <div key={item.label}>
                  <p className="label-sm mb-2">{item.label}</p>
                  <p className="font-sans text-sm text-foreground">{item.value}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Color palette */}
     {/* Project Gallery */}
<section className="section-pad border-b border-border">
  <div className="max-w-[1400px] mx-auto flex flex-col gap-24">

    {/* Hero Image */}
    <motion.div {...fadeUp(0.1)}>
      <img
        src="/projects/koala-snacks/hero.jpg"
        alt="Koala Snacks Packaging"
        className="w-full h-auto object-cover"
      />
    </motion.div>

    {/* Intro Text */}
    <motion.div
      {...fadeUp(0.15)}
      className={`grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-16 lg:gap-24 ${
        isRTL ? "lg:grid-flow-dense" : ""
      }`}
    >
      <div className={`${isRTL ? "text-right" : ""}`}>
        <p className="label-sm text-primary mb-5">
          Packaging & Print Design
        </p>

        <h2 className="font-serif font-light text-[clamp(2.8rem,6vw,5rem)] leading-[0.92] text-foreground mb-8">
          Koala Snacks Packaging Design
        </h2>

        <p className="font-sans text-[17px] leading-[1.9] text-muted-foreground font-light max-w-2xl">
          A playful packaging and print design project created for a children’s
          snack box experience, combining custom illustration, printed voucher
          design, and branded packaging details.
        </p>
      </div>

      <div
        className={`border-border ${
          isRTL
            ? "border-r pr-10 text-right"
            : "border-l pl-10"
        } flex flex-col gap-8`}
      >
        <div>
          <p className="label-sm mb-2">Category</p>
          <p className="font-sans text-sm">
            Packaging & Print Design
          </p>
        </div>

        <div>
          <p className="label-sm mb-2">Role</p>
          <p className="font-sans text-sm">
            Packaging Design, Print Design, Illustration
          </p>
        </div>

        <div>
          <p className="label-sm mb-2">Year</p>
          <p className="font-sans text-sm">2024</p>
        </div>

        <div>
          <p className="label-sm mb-2">Client</p>
          <p className="font-sans text-sm">Koala Snacks</p>
        </div>
      </div>
    </motion.div>

    {/* Two Image Grid */}
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 gap-8"
      {...fadeUp(0.2)}
    >
      <img
        src="/projects/koala-snacks/front.jpg"
        alt="Packaging Front"
        className="w-full h-full object-cover"
      />

      <img
        src="/projects/koala-snacks/back.jpg"
        alt="Packaging Back"
        className="w-full h-full object-cover"
      />
    </motion.div>

    {/* Detail Images */}
    <motion.div
      className="grid grid-cols-2 md:grid-cols-4 gap-6"
      {...fadeUp(0.25)}
    >
      <img
        src="/projects/koala-snacks/detail-1.jpg"
        alt=""
        className="w-full aspect-square object-cover"
      />

      <img
        src="/projects/koala-snacks/detail-2.jpg"
        alt=""
        className="w-full aspect-square object-cover"
      />

      <img
        src="/projects/koala-snacks/detail-3.jpg"
        alt=""
        className="w-full aspect-square object-cover"
      />

      <img
        src="/projects/koala-snacks/detail-4.jpg"
        alt=""
        className="w-full aspect-square object-cover"
      />
    </motion.div>

    {/* Final Showcase */}
    <motion.div {...fadeUp(0.3)}>
      <img
        src="/projects/koala-snacks/final.jpg"
        alt="Final Packaging Presentation"
        className="w-full h-auto object-cover"
      />
    </motion.div>

  </div>
</section>

      {/* Prev / Next */}
      <section className="border-b border-border">
        <div className={`max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border ${isRTL ? "md:grid-flow-dense" : ""}`}>
          {prevProject ? (
            <button
              data-testid="case-study-prev"
              onClick={() => setLocation(`/project/${prevProject.slug}`)}
              className={`p-12 md:p-16 flex flex-col gap-4 group hover:bg-card transition-colors duration-300 ${isRTL ? "items-end text-right" : "text-left"}`}
            >
              <span className={`flex items-center gap-2 label-sm group-hover:text-primary transition-colors duration-300 ${isRTL ? "flex-row-reverse" : ""}`}>
                <BackArrow size={13} strokeWidth={1.5} /> {t.caseStudy.prevProject}
              </span>
              <p className="font-serif font-light text-3xl text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
                {prevDisplay}
              </p>
            </button>
          ) : <div />}

          {nextProject ? (
            <button
              data-testid="case-study-next"
              onClick={() => setLocation(`/project/${nextProject.slug}`)}
              className={`p-12 md:p-16 flex flex-col gap-4 group hover:bg-card transition-colors duration-300 md:border-l border-border ${isRTL ? "items-start text-left" : "items-end text-right"}`}
            >
              <span className={`flex items-center gap-2 label-sm group-hover:text-primary transition-colors duration-300 ${isRTL ? "flex-row-reverse" : ""}`}>
                {t.caseStudy.nextProject} <NextArrow size={13} strokeWidth={1.5} />
              </span>
              <p className="font-serif font-light text-3xl text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
                {nextDisplay}
              </p>
            </button>
          ) : <div />}
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad bg-foreground">
        <div className={`max-w-[1400px] mx-auto text-center flex flex-col items-center gap-8 ${isRTL ? "text-right items-end" : ""}`}>
          <p className="label-sm text-background/40">{t.caseStudy.ctaLabel}</p>
          <h2 className="font-serif font-light text-[clamp(2.5rem,5vw,4.5rem)] text-background leading-[0.92]">
            {t.caseStudy.ctaLine1}
            <br />
            <em className="not-italic text-primary">{t.caseStudy.ctaLine2}</em>
          </h2>
          <button
            data-testid="case-study-cta"
            onClick={() => { setLocation("/"); setTimeout(() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }), 200); }}
            className="mt-2 px-10 py-4 border border-background/20 text-background font-sans text-[11px] tracking-[0.2em] uppercase hover:border-primary hover:text-primary transition-colors duration-300"
          >
            {t.caseStudy.ctaBtn}
          </button>
        </div>
      </section>
    </div>
  );
}
