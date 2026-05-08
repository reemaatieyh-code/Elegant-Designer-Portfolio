import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Contact() {
  const { t, isRTL } = useLanguage();
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
        <div className={`grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-20 lg:gap-32 ${isRTL ? "lg:grid-flow-dense" : ""}`}>
          {/* Info */}
          <motion.div
            className={`flex flex-col gap-10 ${isRTL ? "items-end text-right" : ""}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            <div>
              <p className="label-sm mb-6">{t.contact.label}</p>
              <h2 className="font-serif font-light text-[clamp(2.8rem,5vw,4.5rem)] text-foreground leading-[0.92]">
                {t.contact.headingLine1}
                <br />
                <em className="not-italic" style={{ color: "hsl(var(--primary))" }}>{t.contact.headingAccent}</em>
              </h2>
            </div>

            <p className="font-sans text-[15px] text-muted-foreground leading-[1.75] font-light">
              {t.contact.body}
            </p>

            <div className="flex flex-col gap-7 pt-2">
              {[
                { Icon: Mail, label: t.contact.emailLabel, value: "hello@reemaatieh.com", testId: "contact-email" },
                { Icon: MapPin, label: t.contact.locationLabel, value: t.contact.location, testId: "contact-location" },
              ].map(({ Icon, label, value, testId }) => (
                <div key={testId} data-testid={testId} className={`flex items-center gap-5 ${isRTL ? "flex-row-reverse" : ""}`}>
                  <div className="w-10 h-10 border border-border flex items-center justify-center text-primary shrink-0">
                    <Icon size={15} strokeWidth={1.5} />
                  </div>
                  <div className={isRTL ? "text-right" : ""}>
                    <p className="label-sm mb-1">{label}</p>
                    <p className="font-sans text-sm text-foreground">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
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
              { id: "name", label: t.contact.nameLabel, type: "text", placeholder: t.contact.namePlaceholder, key: "name" as const },
              { id: "email", label: t.contact.emailFieldLabel, type: "email", placeholder: t.contact.emailPlaceholder, key: "email" as const },
            ].map((f) => (
              <div key={f.id} className={`flex flex-col gap-2 ${isRTL ? "items-end" : ""}`}>
                <label className="label-sm">{f.label}</label>
                <input
                  data-testid={`contact-input-${f.id}`}
                  type={f.type}
                  required
                  value={form[f.key]}
                  onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                  placeholder={f.placeholder}
                  className={`w-full bg-transparent border border-border px-5 py-4 font-sans text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors duration-300 ${isRTL ? "text-right" : ""}`}
                />
              </div>
            ))}

            <div className={`flex flex-col gap-2 ${isRTL ? "items-end" : ""}`}>
              <label className="label-sm">{t.contact.messageLabel}</label>
              <textarea
                data-testid="contact-input-message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder={t.contact.messagePlaceholder}
                className={`w-full bg-transparent border border-border px-5 py-4 font-sans text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors duration-300 resize-none ${isRTL ? "text-right" : ""}`}
              />
            </div>

            <button data-testid="contact-submit" type="submit" className="btn-primary mt-2 justify-center">
              {sent ? t.contact.sent : (<>{t.contact.submit} <Send size={13} strokeWidth={1.5} /></>)}
            </button>

            {sent && (
              <motion.p
                className="font-sans text-sm text-primary text-center"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                data-testid="contact-success"
              >
                {t.contact.success}
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
