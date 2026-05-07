import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";

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
    <section id="contact" data-testid="contact-section" className="section-pad border-t border-border">
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
              <p className="label-sm mb-6">Get in Touch</p>
              <h2 className="font-serif font-light text-[clamp(2.8rem,5vw,4.5rem)] text-foreground leading-[0.92]">
                Have a project
                <br />
                <em className="not-italic" style={{ color: "hsl(var(--primary))" }}>in mind?</em>
              </h2>
            </div>

            <p className="font-sans text-[15px] text-muted-foreground leading-[1.75] font-light">
              Whether you're looking to build a brand from scratch, refresh your
              visual identity, or need a reliable creative partner — I'd love to
              hear about your project.
            </p>

            <div className="flex flex-col gap-7 pt-2">
              <div data-testid="contact-email" className="flex items-center gap-5">
                <div className="w-10 h-10 border border-border flex items-center justify-center text-primary shrink-0">
                  <Mail size={15} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="label-sm mb-1">Email</p>
                  <p className="font-sans text-sm text-foreground">hello@reemaatieh.com</p>
                </div>
              </div>
              <div data-testid="contact-location" className="flex items-center gap-5">
                <div className="w-10 h-10 border border-border flex items-center justify-center text-primary shrink-0">
                  <MapPin size={15} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="label-sm mb-1">Location</p>
                  <p className="font-sans text-sm text-foreground">Kuwait City, Kuwait</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.form
            data-testid="contact-form"
            onSubmit={handleSubmit}
            className="flex flex-col gap-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            {[
              { id: "name", label: "Name", type: "text", placeholder: "Your name", key: "name" as const },
              { id: "email", label: "Email", type: "email", placeholder: "your@email.com", key: "email" as const },
            ].map((f) => (
              <div key={f.id} className="flex flex-col gap-2">
                <label className="label-sm">{f.label}</label>
                <input
                  data-testid={`contact-input-${f.id}`}
                  type={f.type}
                  required
                  value={form[f.key]}
                  onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                  placeholder={f.placeholder}
                  className="bg-transparent border border-border px-5 py-4 font-sans text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors duration-300"
                />
              </div>
            ))}

            <div className="flex flex-col gap-2">
              <label className="label-sm">Message</label>
              <textarea
                data-testid="contact-input-message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about your project..."
                className="bg-transparent border border-border px-5 py-4 font-sans text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors duration-300 resize-none"
              />
            </div>

            <button
              data-testid="contact-submit"
              type="submit"
              className="btn-primary mt-2 justify-center"
            >
              {sent ? "Message Sent" : (<>Send Message <Send size={13} strokeWidth={1.5} /></>)}
            </button>

            {sent && (
              <motion.p
                className="font-sans text-sm text-primary text-center"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                data-testid="contact-success"
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
