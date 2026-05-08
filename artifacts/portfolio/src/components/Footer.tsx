import { Instagram, Linkedin, Twitter } from "lucide-react";

const socials = [
  { Icon: Instagram, href: "#", label: "Instagram" },
  { Icon: Linkedin, href: "#", label: "LinkedIn" },
  { Icon: Twitter, href: "#", label: "Twitter" },
];

const footerLinks = ["Work", "About", "Services", "Process", "Contact"];

export default function Footer() {
  const nav = (href: string) => {
    const id = href === "Work" ? "portfolio" : href.toLowerCase();
    document.querySelector(`#${id}`)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer data-testid="footer" className="border-t border-border section-pad py-16">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-14 border-b border-border">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <p className="font-serif text-2xl tracking-[0.08em] uppercase text-foreground">Reema Atieh</p>
            <p className="label-sm">Graphic Designer · Kuwait</p>
            <p className="font-sans text-sm text-muted-foreground font-light leading-relaxed max-w-xs">
              Creating purposeful design for brands that want to stand out — and stand for something.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-4">
            <p className="label-sm">Navigation</p>
            <nav className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <button
                  key={link}
                  data-testid={`footer-nav-${link.toLowerCase()}`}
                  onClick={() => nav(link)}
                  className="font-sans text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 text-left font-light"
                >
                  {link}
                </button>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div className="flex flex-col gap-4">
            <p className="label-sm">Follow Along</p>
            <div className="flex gap-3">
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
            <p className="font-sans text-sm text-muted-foreground font-light mt-2">
              hello@reemaatieh.com
            </p>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="label-sm">&copy; {new Date().getFullYear()} Reema Atieh. All rights reserved.</p>
          <p className="font-serif text-sm italic text-muted-foreground">Designed with intention.</p>
        </div>
      </div>
    </footer>
  );
}
