import { Instagram, Linkedin, Twitter } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const socials = [
  { Icon: Instagram, href: "#", label: "Instagram" },
  { Icon: Linkedin, href: "#", label: "LinkedIn" },
  { Icon: Twitter, href: "#", label: "Twitter" },
];

const sectionIds = ["portfolio", "about", "services", "process", "contact"];

export default function Footer() {
  const { t, isRTL } = useLanguage();

  const nav = (idx: number) => {
    document.querySelector(`#${sectionIds[idx]}`)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer data-testid="footer" className="border-t border-border section-pad py-16">
      <div className="max-w-[1400px] mx-auto">
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-12 pb-14 border-b border-border ${isRTL ? "text-right" : ""}`}>
          {/* Brand */}
          <div className={`flex flex-col gap-4 ${isRTL ? "items-end" : ""}`}>
            <p className="font-serif text-2xl tracking-[0.08em] uppercase text-foreground">{t.footer.brand}</p>
            <p className="label-sm">{t.footer.tagline}</p>
            <p className="font-sans text-sm text-muted-foreground font-light leading-relaxed max-w-xs">
              {t.footer.about}
            </p>
          </div>

          {/* Nav */}
          <div className={`flex flex-col gap-4 ${isRTL ? "items-end" : ""}`}>
            <p className="label-sm">{t.footer.navLabel}</p>
            <nav className="flex flex-col gap-3">
              {t.footer.links.map((link, idx) => (
                <button
                  key={link}
                  data-testid={`footer-nav-${idx}`}
                  onClick={() => nav(idx)}
                  className="font-sans text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 font-light text-left"
                  style={{ textAlign: isRTL ? "right" : "left" }}
                >
                  {link}
                </button>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div className={`flex flex-col gap-4 ${isRTL ? "items-end" : ""}`}>
            <p className="label-sm">{t.footer.followLabel}</p>
            <div className={`flex gap-3 ${isRTL ? "flex-row-reverse" : ""}`}>
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  data-testid={`footer-social-${label.toLowerCase()}`}
                  className="w-10 h-10 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors duration-300"
                >
                  <Icon size={15} strokeWidth={1.5} />
                </a>
              ))}
            </div>
            <p className="font-sans text-sm text-muted-foreground font-light mt-2">{t.footer.email}</p>
          </div>
        </div>

        <div className={`pt-8 flex flex-col md:flex-row items-center justify-between gap-4 ${isRTL ? "md:flex-row-reverse" : ""}`}>
          <p className="label-sm">{t.footer.copyright(new Date().getFullYear())}</p>
          <p className="font-serif text-sm italic text-muted-foreground">{t.footer.taglineFooter}</p>
        </div>
      </div>
    </footer>
  );
}
