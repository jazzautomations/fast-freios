import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { Logo } from "./Logo";

const links = [
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Dicas", href: "#dicas" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        <Logo />

        <nav className="hidden lg:flex items-center gap-8" aria-label="Principal">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-semibold uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors relative group"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-primary group-hover:w-full transition-all" />
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://wa.me/5519999338747"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-3 border border-primary text-primary font-bold uppercase text-xs tracking-widest hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
          <a
            href="#checkup"
            className="inline-flex items-center px-5 py-3 bg-primary text-primary-foreground font-bold uppercase text-xs tracking-widest hover:brightness-110 transition orange-glow"
          >
            Checkup Gratuito
          </a>
        </div>

        <button
          aria-label="Abrir menu"
          className="lg:hidden md:hidden text-foreground"
          onClick={() => setOpen(true)}
        >
          <Menu className="h-7 w-7" />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-background/98 backdrop-blur-xl flex flex-col">
          <div className="container flex items-center justify-between py-5">
            <Logo />
            <button aria-label="Fechar menu" onClick={() => setOpen(false)}>
              <X className="h-7 w-7 text-foreground" />
            </button>
          </div>
          <nav className="container flex flex-col gap-6 mt-10">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-display text-4xl uppercase text-foreground hover:text-primary"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#checkup"
              onClick={() => setOpen(false)}
              className="mt-6 inline-flex items-center justify-center px-6 py-4 bg-primary text-primary-foreground font-bold uppercase tracking-widest"
            >
              Checkup Gratuito
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
