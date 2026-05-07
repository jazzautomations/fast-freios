import { MapPin, Clock, Phone } from "lucide-react";

export const MapSection = () => (
  <section className="py-0 border-t border-border">
    <div className="grid lg:grid-cols-2 min-h-[420px]">
      {/* Info panel */}
      <div className="bg-surface/60 flex flex-col justify-center px-8 md:px-16 py-14 border-r border-border">
        <div className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-3">
          // Como chegar
        </div>
        <h2 className="font-display text-4xl md:text-5xl uppercase text-foreground leading-none mb-6">
          Estamos em<br />
          <span className="text-primary">Piracicaba - SP</span>
        </h2>

        <ul className="space-y-5 text-sm">
          <li className="flex items-start gap-4">
            <div className="h-10 w-10 bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
              <MapPin className="h-5 w-5 text-primary" />
            </div>
            <div>
              <div className="font-bold text-foreground mb-0.5">Endereço</div>
              <div className="text-muted-foreground">
                Av. Dr. Cássio Pascoal Padovani, 1021<br />
                Morumbi — Piracicaba/SP — 13420-355
              </div>
            </div>
          </li>

          <li className="flex items-start gap-4">
            <div className="h-10 w-10 bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
              <Clock className="h-5 w-5 text-primary" />
            </div>
            <div>
              <div className="font-bold text-foreground mb-0.5">Horário de atendimento</div>
              <div className="text-muted-foreground">
                Seg – Sex: 07:30 às 18:00<br />
                Sábado: Fechado<br />
                Domingo: Fechado
              </div>
            </div>
          </li>

          <li className="flex items-start gap-4">
            <div className="h-10 w-10 bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
              <Phone className="h-5 w-5 text-primary" />
            </div>
            <div>
              <div className="font-bold text-foreground mb-0.5">Contato</div>
              <div className="text-muted-foreground">
                <a href="https://wa.me/5519999338747" target="_blank" rel="noreferrer" className="hover:text-primary transition">
                  WhatsApp: (19) 99933-8747
                </a><br />
                <a href="tel:+551934900304" className="hover:text-primary transition">
                  Telefone: (19) 3490-0304
                </a>
              </div>
            </div>
          </li>
        </ul>

        <a
          href="https://maps.google.com/?q=Fast+Freios+Piracicaba"
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary hover:opacity-80 transition"
        >
          <MapPin className="h-4 w-4" /> Abrir no Google Maps
        </a>
      </div>

      {/* Google Maps embed */}
      <div className="relative min-h-[300px] lg:min-h-0">
        <iframe
          title="Localização Fast Freios Piracicaba"
          src="https://maps.google.com/maps?q=Av.+Dr.+Cássio+Pascoal+Padovani,+1021,+Piracicaba,+SP&t=&z=16&ie=UTF8&iwloc=&output=embed"
          className="absolute inset-0 w-full h-full border-0 grayscale contrast-[1.1] opacity-90"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
        {/* Overlay to match dark theme */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "rgba(13,13,13,0.15)", mixBlendMode: "multiply" }}
        />
      </div>
    </div>
  </section>
);
