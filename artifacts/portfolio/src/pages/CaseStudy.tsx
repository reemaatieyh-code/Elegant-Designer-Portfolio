import { useEffect } from "react";
import { useParams, useLocation } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { projects } from "@/components/Portfolio";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function CaseStudy() {
  const { slug } = useParams<{ slug: string }>();
  const [, setLocation] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const project = projects.find((p) => p.slug === slug);
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="label-sm mb-4">404</p>
          <h1 className="font-serif font-light text-5xl text-foreground mb-8">Project not found</h1>
          <button onClick={() => setLocation("/")} className="btn-primary">
            Back to Portfolio
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Back nav */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 h-[70px] flex items-center justify-between">
          <button
            data-testid="case-study-back"
            onClick={() => setLocation("/#portfolio")}
            className="flex items-center gap-3 font-sans text-[11px] tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            <ArrowLeft size={14} strokeWidth={1.5} />
            All Work
          </button>
          <p className="font-serif text-[17px] tracking-[0.12em] uppercase text-foreground hidden md:block">
            Reema Atieh
          </p>
          <p className="label-sm hidden md:block">{project.category}</p>
        </div>
      </div>

      {/* Hero */}
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

      {/* Project info header */}
      <section className="section-pad border-b border-border">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12 lg:gap-24">
            <motion.div className="flex flex-col gap-6" {...fadeUp(0.1)}>
              <p className="label-sm text-primary">{project.category}</p>
              <h1
                className="font-serif font-light text-[clamp(2.8rem,6vw,5.5rem)] text-foreground leading-[0.92]"
                data-testid="case-study-title"
              >
                {project.title}
              </h1>
              <p className="font-sans text-[16px] text-muted-foreground leading-[1.75] font-light max-w-xl">
                {project.detail}
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col gap-8 border-l border-border pl-8 md:pl-12"
              {...fadeUp(0.2)}
            >
              {[
                { label: "Category", value: project.category },
                { label: "Role", value: project.role },
                { label: "Year", value: project.year },
                { label: "Client", value: project.title },
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
      <section className="section-pad border-b border-border">
        <div className="max-w-[1400px] mx-auto">
          <motion.div {...fadeUp(0.1)}>
            <p className="label-sm mb-10">Color Palette</p>
            <div className="flex gap-4 flex-wrap" data-testid="case-study-palette">
              {project.palette.map((color) => (
                <div key={color} className="flex flex-col gap-3">
                  <div
                    className="w-24 h-24 md:w-32 md:h-32"
                    style={{ backgroundColor: color }}
                  />
                  <p className="font-sans text-[11px] text-muted-foreground tracking-widest uppercase">{color}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mockup sections */}
      <section className="section-pad border-b border-border">
        <div className="max-w-[1400px] mx-auto flex flex-col gap-20">
          {/* Full width */}
          <motion.div {...fadeUp(0.1)}>
            <p className="label-sm mb-8">Concept Overview</p>
            <div
              className="w-full h-[400px] md:h-[560px]"
              style={{ background: project.bgAlt }}
              data-testid="case-study-mockup-1"
            />
          </motion.div>

          {/* Two column */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border"
            {...fadeUp(0.15)}
          >
            <div
              className="h-[320px] md:h-[400px]"
              style={{ background: project.bg, filter: "brightness(1.05)" }}
              data-testid="case-study-mockup-2"
            />
            <div
              className="h-[320px] md:h-[400px]"
              style={{ background: project.bgAlt2 }}
              data-testid="case-study-mockup-3"
            />
          </motion.div>

          {/* Typography showcase */}
          <motion.div
            className="border border-border p-12 md:p-20 flex flex-col gap-8"
            {...fadeUp(0.2)}
          >
            <p className="label-sm">Typography System</p>
            <div className="flex flex-col gap-4">
              <p className="font-serif font-light text-[clamp(2.5rem,6vw,5rem)] text-foreground leading-none">
                Aa Bb Cc
              </p>
              <p className="font-sans text-sm text-muted-foreground font-light">
                Cormorant Garamond — Display & Headings
              </p>
            </div>
            <div className="divider" />
            <div className="flex flex-col gap-2">
              <p className="font-sans text-xl text-foreground font-light">
                Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm
              </p>
              <p className="font-sans text-sm text-muted-foreground font-light">
                Inter — Body & UI Text
              </p>
            </div>
          </motion.div>

          {/* Full width alternate */}
          <motion.div {...fadeUp(0.1)}>
            <p className="label-sm mb-8">Final Deliverables</p>
            <div
              className="w-full h-[480px]"
              style={{ background: project.bgAlt2, filter: "brightness(0.97)" }}
              data-testid="case-study-mockup-4"
            />
          </motion.div>
        </div>
      </section>

      {/* Next / Prev navigation */}
      <section className="border-b border-border">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border">
          {prevProject ? (
            <button
              data-testid="case-study-prev"
              onClick={() => setLocation(`/project/${prevProject.slug}`)}
              className="p-12 md:p-16 flex flex-col gap-4 text-left group hover:bg-card transition-colors duration-300"
            >
              <span className="flex items-center gap-2 label-sm group-hover:text-primary transition-colors duration-300">
                <ArrowLeft size={13} strokeWidth={1.5} /> Previous Project
              </span>
              <p className="font-serif font-light text-3xl text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
                {prevProject.title}
              </p>
            </button>
          ) : (
            <div />
          )}

          {nextProject ? (
            <button
              data-testid="case-study-next"
              onClick={() => setLocation(`/project/${nextProject.slug}`)}
              className="p-12 md:p-16 flex flex-col gap-4 text-right items-end group hover:bg-card transition-colors duration-300 md:border-l border-border"
            >
              <span className="flex items-center gap-2 label-sm group-hover:text-primary transition-colors duration-300">
                Next Project <ArrowRight size={13} strokeWidth={1.5} />
              </span>
              <p className="font-serif font-light text-3xl text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
                {nextProject.title}
              </p>
            </button>
          ) : (
            <div />
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad bg-foreground">
        <div className="max-w-[1400px] mx-auto text-center flex flex-col items-center gap-8">
          <p className="label-sm text-background/40">Start a Project</p>
          <h2 className="font-serif font-light text-[clamp(2.5rem,5vw,4.5rem)] text-background leading-[0.92]">
            Let's create something
            <br />
            <em className="not-italic text-primary">remarkable together.</em>
          </h2>
          <button
            data-testid="case-study-cta"
            onClick={() => { setLocation("/"); setTimeout(() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }), 200); }}
            className="mt-2 px-10 py-4 border border-background/20 text-background font-sans text-[11px] tracking-[0.2em] uppercase hover:border-primary hover:text-primary transition-colors duration-300"
          >
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  );
}
