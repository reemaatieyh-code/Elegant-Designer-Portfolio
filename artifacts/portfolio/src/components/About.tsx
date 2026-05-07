import { motion } from "framer-motion";

const stats = [
  { value: "5+", label: "Years of Experience" },
  { value: "60+", label: "Projects Delivered" },
  { value: "30+", label: "Happy Clients" },
];

export default function About() {
  return (
    <section
      id="about"
      data-testid="about-section"
      className="py-32 px-6 bg-card"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Photo placeholder */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div
              data-testid="about-photo-placeholder"
              className="aspect-[3/4] w-full max-w-md mx-auto lg:mx-0"
              style={{
                background:
                  "linear-gradient(145deg, hsl(350,30%,82%) 0%, hsl(30,25%,78%) 40%, hsl(20,20%,72%) 100%)",
              }}
            />
            {/* Decorative frame offset */}
            <div className="absolute -bottom-4 -right-4 w-full max-w-md h-full border border-primary/30 -z-10" />
            <div className="absolute top-6 -left-6 font-serif text-8xl text-primary/10 select-none leading-none">
              R
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            className="flex flex-col gap-8"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div>
              <p
                className="font-sans text-xs tracking-[0.35em] uppercase text-primary mb-4"
                data-testid="about-label"
              >
                About
              </p>
              <h2
                className="font-serif font-light text-5xl md:text-6xl text-foreground leading-[1.05]"
                data-testid="about-heading"
              >
                Design is how
                <br />
                <span className="italic text-primary">I think.</span>
              </h2>
            </div>

            <div className="w-10 h-px bg-primary" />

            <p
              className="font-sans text-muted-foreground leading-relaxed text-base"
              data-testid="about-bio-1"
            >
              I'm Reema Atieh, a Kuwait-based graphic designer with a passion for
              crafting visual stories that resonate. My work lives at the
              intersection of strategy and aesthetics — designs that don't just
              look beautiful, but communicate with intention and clarity.
            </p>
            <p
              className="font-sans text-muted-foreground leading-relaxed text-base"
              data-testid="about-bio-2"
            >
              From building brand identities from the ground up to crafting
              editorial layouts and motion sequences, I bring the same level of
              care and curiosity to every project. I believe great design
              understands the audience before it speaks to them.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-4 border-t border-border">
              {stats.map((stat) => (
                <div key={stat.label} data-testid={`about-stat-${stat.value}`}>
                  <p className="font-serif text-3xl text-foreground">{stat.value}</p>
                  <p className="font-sans text-xs text-muted-foreground mt-1 leading-tight">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <button
              data-testid="about-cta"
              onClick={() => {
                const el = document.querySelector("#contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="self-start px-8 py-3 border border-foreground text-foreground font-sans text-sm tracking-widest uppercase hover:bg-foreground hover:text-background transition-all duration-400"
            >
              Work Together
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
