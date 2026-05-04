import { Lightbulb, ArrowRight } from "lucide-react";

const tips = [
  "Pedal baixo ou esponjoso? Pode ser ar no sistema.",
  "Barulho de chiado ao frear? Pastilhas no fim.",
  "Carro puxa pra um lado? Pinça travada ou desbalanço.",
];

export const TipBlock = () => (
  <section id="dicas" className="py-20 md:py-24">
    <div className="container">
      <div className="relative bg-surface-2 border border-border p-8 md:p-14 overflow-hidden">
        <div aria-hidden className="absolute -top-12 -right-12 w-72 h-72 bg-primary/10 blur-3xl rounded-full" />
        <div aria-hidden className="absolute top-0 left-0 h-1 w-32 bg-primary" />

        <div className="grid lg:grid-cols-12 gap-10 items-center relative">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center justify-center h-16 w-16 bg-primary mb-6 clip-angular">
              <Lightbulb className="h-8 w-8 text-primary-foreground" />
            </div>
            <div className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-3">
              // Dica da Fast
            </div>
            <h2 className="font-display text-4xl md:text-5xl uppercase text-foreground leading-none">
              Como checar o<br />
              <span className="text-primary">básico do seu freio</span><br />
              você mesmo agora.
            </h2>
          </div>

          <div className="lg:col-span-7">
            <ul className="space-y-4">
              {tips.map((t, i) => (
                <li key={t} className="flex items-start gap-4 bg-background border border-border p-5 hover:border-primary transition-colors">
                  <span className="font-display text-2xl text-primary leading-none flex-shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-foreground font-medium">{t}</span>
                </li>
              ))}
            </ul>
            <a
              href="#contato"
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary font-bold uppercase text-xs tracking-widest hover:bg-primary hover:text-primary-foreground transition"
            >
              Quero um diagnóstico grátis <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);
