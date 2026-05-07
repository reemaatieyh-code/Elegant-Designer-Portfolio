import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Send } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="py-32 px-6 bg-card"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">
          {/* Left: heading + info */}
          <motion.div
            className="flex flex-col gap-10"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <p className="font-sans text-xs tracking-[0.35em] uppercase text-primary mb-4">
                Let's Connect
              </p>
              <h2 className="font-serif font-light text-5xl md:text-6xl text-foreground leading-[1.05]">
                Have a project
                <br />
                <span className="italic text-primary">in mind?</span>
              </h2>
            </div>

            <div className="w-10 h-px bg-primary" />

            <p className="font-sans text-muted-foreground leading-relaxed">
              Whether you're looking to build a brand from scratch, refresh your
              visual identity, or need a reliable creative partner — I'd love to
              hear about your project.
            </p>

            <div className="flex flex-col gap-6">
              <div
                data-testid="contact-email"
                className="flex items-center gap-4"
              >
                <div className="w-9 h-9 border border-border flex items-center justify-center text-primary shrink-0">
                  <Mail size={16} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-sans text-xs text-muted-foreground uppercase tracking-widest mb-0.5">
                    Email
                  </p>
                  <p className="font-sans text-sm text-foreground">
                    hello@reemaatieh.com
                  </p>
                </div>
              </div>

              <div
                data-testid="contact-location"
                className="flex items-center gap-4"
              >
                <div className="w-9 h-9 border border-border flex items-center justify-center text-primary shrink-0">
                  <MapPin size={16} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-sans text-xs text-muted-foreground uppercase tracking-widest mb-0.5">
                    Location
                  </p>
                  <p className="font-sans text-sm text-foreground">
                    Kuwait City, Kuwait
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.form
            data-testid="contact-form"
            onSubmit={handleSubmit}
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="flex flex-col gap-2">
              <label className="font-sans text-xs tracking-widest uppercase text-muted-foreground">
                Name
              </label>
              <input
                data-testid="contact-input-name"
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="bg-background border border-border px-5 py-4 font-sans text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors duration-300"
                placeholder="Your name"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-sans text-xs tracking-widest uppercase text-muted-foreground">
                Email
              </label>
              <input
                data-testid="contact-input-email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="bg-background border border-border px-5 py-4 font-sans text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors duration-300"
                placeholder="your@email.com"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-sans text-xs tracking-widest uppercase text-muted-foreground">
                Message
              </label>
              <textarea
                data-testid="contact-input-message"
                required
                rows={6}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="bg-background border border-border px-5 py-4 font-sans text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors duration-300 resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              data-testid="contact-submit"
              type="submit"
              className="flex items-center justify-center gap-3 px-10 py-4 bg-foreground text-background font-sans text-sm tracking-widest uppercase hover:bg-primary transition-colors duration-400 mt-2"
            >
              {sent ? (
                "Message Sent"
              ) : (
                <>
                  Send Message
                  <Send size={14} />
                </>
              )}
            </button>

            {sent && (
              <motion.p
                className="font-sans text-sm text-primary text-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                data-testid="contact-success-msg"
              >
                Thank you — I'll be in touch soon.
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
