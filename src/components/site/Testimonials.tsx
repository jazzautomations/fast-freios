import { Star, Quote } from "lucide-react";

const items = [
  {
    name: "Carlos M.",
    car: "Honda Civic",
    text: "Levei pra trocar pastilha e em menos de 1 hora tava na rua. Atendimento direto e preço justo. Voltei pra revisão completa.",
  },
  {
    name: "Juliana R.",
    car: "Jeep Compass",
    text: "Outras oficinas só enrolavam. Na Fast Freios fizeram diagnóstico na hora, mostraram o problema e resolveram no mesmo dia.",
  },
  {
    name: "Rafael S.",
    car: "Toyota Corolla",
    text: "Sistema ABS deu pau e me devolveram o carro funcionando 100%. Confiança total, virei cliente fiel.",
  },
];

export const Testimonials = () => (
  <section className="py-24 md:py-32 bg-surface/40 border-y border-border">
    <div className="container">
      <div className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-3">
        // Depoimentos
      </div>
      <h2 className="font-display text-5xl md:text-6xl uppercase text-foreground leading-none mb-14">
        Quem freia com a gente,<br />
        <span className="text-primary">volta sempre.</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {items.map((t) => (
          <article key={t.name} className="relative bg-background border border-border p-8 hover:border-primary transition-colors">
            <Quote className="absolute top-6 right-6 h-8 w-8 text-primary/20" />
            <div className="flex gap-1 mb-5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-foreground leading-relaxed mb-6">"{t.text}"</p>
            <div className="pt-5 border-t border-border">
              <div className="font-display text-xl uppercase text-foreground">{t.name}</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{t.car}</div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
