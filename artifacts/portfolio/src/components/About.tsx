import { motion } from "framer-motion";

const stats = [
  { value: "5+", label: "Years of Experience" },
  { value: "60+", label: "Projects Delivered" },
  { value: "30+", label: "Happy Clients" },
];

export default function About() {
  return (
    <section id="about" data-testid="about-section" className="section-pad border-t border-border">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-20 lg:gap-32">
          {/* Left */}
          <motion.div
            className="flex flex-col gap-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            <div>
              <p className="label-sm mb-6">About</p>
              <h2 className="font-serif font-light text-[clamp(3rem,5.5vw,5rem)] text-foreground leading-[0.92]">
                Design is how
                <br />
                <em className="not-italic" style={{ color: "hsl(var(--primary))" }}>I think.</em>
              </h2>
            </div>

            <div className="w-8 h-px bg-primary" />

            <p className="font-sans text-[15px] text-muted-foreground leading-[1.75] font-light" data-testid="about-bio-1">
              I'm Reema Atieh, a Kuwait-based graphic designer with a passion for
              crafting visual stories that resonate. My work lives at the intersection
              of strategy and aesthetics — designs that don't just look beautiful,
              but communicate with intention and clarity.
            </p>

            <p className="font-sans text-[15px] text-muted-foreground leading-[1.75] font-light" data-testid="about-bio-2">
              From building brand identities from the ground up to crafting editorial
              layouts and motion sequences, I bring the same level of care and
              curiosity to every project. I believe great design understands the
              audience before it speaks to them.
            </p>

            <button
              data-testid="about-cta"
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-secondary self-start"
            >
              Work Together
            </button>
          </motion.div>

          {/* Right: photo + stats */}
          <motion.div
            className="flex flex-col gap-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.85, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Photo placeholder */}
            <div className="relative">
              <div
                data-testid="about-photo"
                className="aspect-[4/5] w-full max-w-sm"
                style={{
                  background: "linear-gradient(160deg, #C9B0A0 0%, #A88A78 45%, #7A6050 100%)",
                }}
              />
              <div className="absolute -bottom-3 -right-3 w-full max-w-sm aspect-[4/5] border border-border -z-10" />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 border-t border-border pt-10">
              {stats.map((s) => (
                <div key={s.label} data-testid={`stat-${s.value}`}>
                  <p className="font-serif font-light text-4xl text-foreground">{s.value}</p>
                  <p className="label-sm mt-2 leading-snug">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
