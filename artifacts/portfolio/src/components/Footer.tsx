import { Instagram, Linkedin, Twitter } from "lucide-react";

const socialLinks = [
  { Icon: Instagram, href: "#", label: "Instagram" },
  { Icon: Linkedin, href: "#", label: "LinkedIn" },
  { Icon: Twitter, href: "#", label: "Twitter" },
];

const footerNav = [
  { label: "Work", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      data-testid="footer"
      className="bg-foreground text-background py-16 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 pb-10 border-b border-background/10">
          <div>
            <p className="font-serif text-2xl tracking-widest uppercase">
              Reema Atieh
            </p>
            <p className="font-sans text-xs text-background/50 mt-1 tracking-widest uppercase">
              Graphic Designer · Kuwait
            </p>
          </div>

          <nav className="flex flex-wrap gap-8">
            {footerNav.map((link) => (
              <button
                key={link.href}
                data-testid={`footer-nav-${link.label.toLowerCase()}`}
                onClick={() => handleNav(link.href)}
                className="font-sans text-xs tracking-widest uppercase text-background/50 hover:text-background transition-colors duration-300"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="flex gap-5">
            {socialLinks.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                data-testid={`footer-social-${label.toLowerCase()}`}
                className="w-9 h-9 border border-background/20 flex items-center justify-center text-background/50 hover:text-background hover:border-background transition-colors duration-300"
              >
                <Icon size={15} strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-background/30">
            &copy; {new Date().getFullYear()} Reema Atieh. All rights reserved.
          </p>
          <p className="font-sans text-xs text-background/20 italic">
            Designed with intention.
          </p>
        </div>
      </div>
    </footer>
  );
}
