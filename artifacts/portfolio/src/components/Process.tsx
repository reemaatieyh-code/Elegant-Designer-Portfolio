import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Discover", desc: "We start with a deep conversation — understanding your brand, audience, goals, and competitive landscape. Every project begins with listening." },
  { num: "02", title: "Define", desc: "Strategy before aesthetics. I define the creative direction, key messages, and visual parameters before a single design decision is made." },
  { num: "03", title: "Design", desc: "Concepts are developed, refined, and iterated with your feedback at every stage. No surprises — you see the work evolve in real time." },
  { num: "04", title: "Deliver", desc: "Final files, brand guidelines, and all assets delivered in every format you need. Handoff is complete and clear." },
];

export default function Process() {
  return (
    <section id="process" data-testid="process-section" className="section-pad border-t border-border bg-foreground">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-16 md:mb-20">
          <p className="label-sm text-muted-foreground/60 mb-5">How I Work</p>
          <h2 className="font-serif font-light text-[clamp(3rem,6vw,5.5rem)] text-background leading-[0.9]">
            The Process
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-background/10">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              data-testid={`process-step-${i}`}
              className="bg-foreground p-10 flex flex-col gap-6"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
            >
              <span className="font-sans text-[11px] tracking-[0.25em] uppercase text-primary">{step.num}</span>
              <h3 className="font-serif font-light text-3xl text-background">{step.title}</h3>
              <div className="w-6 h-px bg-primary" />
              <p className="font-sans text-[14px] text-background/50 leading-[1.75] font-light">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
