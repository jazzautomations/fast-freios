import { MapPin, Phone, Instagram, MessageCircle, Facebook } from "lucide-react";
import { Logo } from "./Logo";

export const Footer = () => (
  <footer id="contato" className="bg-background border-t border-border pt-20 pb-10 relative">
    <div aria-hidden className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
    <div className="container">
      <div className="grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <Logo />
          <p className="mt-6 max-w-sm text-muted-foreground leading-relaxed">
            Especialistas em freios automotivos. Rápido, confiável e acessível —
            pra você ter segurança em qualquer parada.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href="https://wa.me/5519999338747"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="h-11 w-11 inline-flex items-center justify-center border border-border hover:bg-primary hover:border-primary transition"
            >
              <MessageCircle className="h-5 w-5" />
            </a>
            <a
              href="https://www.instagram.com/fastfreios/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="h-11 w-11 inline-flex items-center justify-center border border-border hover:bg-primary hover:border-primary transition"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://www.facebook.com/fastfreiospiracicaba"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="h-11 w-11 inline-flex items-center justify-center border border-border hover:bg-primary hover:border-primary transition"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="tel:+551934900304"
              aria-label="Telefone"
              className="h-11 w-11 inline-flex items-center justify-center border border-border hover:bg-primary hover:border-primary transition"
            >
              <Phone className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="lg:col-span-3">
          <h4 className="font-display text-xl uppercase mb-5 text-foreground">Contato</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-3">
              <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
              <span>Av. Dr. Cássio Pascoal Padovani, 1021 — Morumbi, Piracicaba - SP, 13420-355</span>
            </li>
            <li className="flex items-start gap-3">
              <MessageCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
              <a href="https://wa.me/5519999338747" target="_blank" rel="noreferrer" className="hover:text-primary transition">
                (19) 99933-8747
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
              <a href="tel:+551934900304" className="hover:text-primary transition">
                (19) 3490-0304
              </a>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h4 className="font-display text-xl uppercase mb-5 text-foreground">Menu</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#servicos" className="hover:text-primary transition">Serviços</a></li>
            <li><a href="#sobre" className="hover:text-primary transition">Sobre</a></li>
            <li><a href="#dicas" className="hover:text-primary transition">Dicas</a></li>
            <li><a href="#faq" className="hover:text-primary transition">FAQ</a></li>
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h4 className="font-display text-xl uppercase mb-5 text-foreground">Horário</h4>
          <ul className="space-y-1 text-sm text-muted-foreground">
            <li>Seg–Sex: 07:30 – 18h</li>
            <li className="text-xs">12h–13h almoço</li>
            <li className="mt-2">Sábado: Fechado</li>
            <li>Domingo: fechado</li>
          </ul>
        </div>
      </div>

      <div className="mt-14 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs uppercase tracking-widest text-muted-foreground">
        <div>© {new Date().getFullYear()} Fast Freios. Todos os direitos reservados.</div>
        <div className="font-display tracking-[0.3em] text-primary">SEGURANÇA EM QUALQUER PARADA.</div>
        <div className="text-muted-foreground/50 normal-case tracking-normal text-[10px]">Site feito por AION 2026</div>
      </div>
    </div>
  </footer>
);
