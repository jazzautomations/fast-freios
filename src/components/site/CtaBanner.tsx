import { ArrowRight, MessageCircle, Clock } from "lucide-react";

export const CtaBanner = () => (
  <section className="relative py-20 md:py-28 bg-primary text-primary-foreground overflow-hidden">
    <div aria-hidden className="absolute inset-0 opacity-20 diagonal-stripes-muted" />
    <div className="container relative">
      <div className="grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-8">
          <div className="text-xs font-bold uppercase tracking-[0.3em] mb-3 opacity-80">
            // Pronto pra rodar tranquilo?
          </div>
          <h2 className="font-display text-6xl md:text-8xl uppercase leading-[0.85]">
            Seu freio<br />
            tá seguro?
          </h2>
        </div>
        <div className="lg:col-span-4 flex flex-col gap-4">
          <a
            href="#checkup"
            className="inline-flex items-center justify-center gap-3 px-8 py-5 bg-background text-foreground font-bold uppercase text-sm tracking-widest hover:bg-foreground hover:text-background transition shadow-deep"
          >
            Checkup Gratuito <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="https://wa.me/5519999338747"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-5 border-2 border-background text-background font-bold uppercase text-sm tracking-widest hover:bg-background hover:text-foreground transition"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
        </div>
      </div>

      <div className="mt-14 pt-10 border-t border-primary-foreground/20 grid sm:grid-cols-3 gap-6">
        <div className="flex items-start gap-3">
          <Clock className="h-5 w-5 mt-0.5" />
          <div>
            <div className="font-display text-lg uppercase">Seg a Sex</div>
            <div className="text-sm opacity-90">07:30 às 18:00 (almoço 12h–13h)</div>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Clock className="h-5 w-5 mt-0.5" />
          <div>
            <div className="font-display text-lg uppercase">Sábado</div>
            <div className="text-sm opacity-90">07:30 às 13:00</div>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Clock className="h-5 w-5 mt-0.5" />
          <div>
            <div className="font-display text-lg uppercase">Domingo</div>
            <div className="text-sm opacity-90">Fechado — emergência via WhatsApp</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
