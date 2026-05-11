import { CheckCircle2 } from "lucide-react";
import mechanic from "@/assets/mechanic.jpg";

const points = [
  "Diagnóstico grátis em 20 minutos, sem enrolação",
  "Peças com garantia e nota fiscal",
  "Mecânicos especialistas em sistema de freio",
  "Atendimento direto, popular e transparente",
];

const stats = [
  { n: "+10mil", l: "Freios revisados" },
  { n: "5★", l: "Avaliação Google" },
  { n: "20min", l: "Diagnóstico" },
  { n: "100%", l: "Garantia" },
];

export const About = () => (
  <section id="sobre" className="py-24 md:py-32 bg-surface/40 border-y border-border relative overflow-hidden">
    <div aria-hidden className="absolute -top-20 -right-20 w-96 h-40 diagonal-stripes opacity-30 clip-angular" />
    <div className="container grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative">
      <div className="relative">
        <div className="relative aspect-[4/5] overflow-hidden border border-border clip-notch">
          <img
            src={mechanic}
            alt="Mecânico especialista da Fast Freios segurando disco de freio"
            width={1024}
            height={1280}
            loading="lazy"
            className="w-full h-full object-cover"
          />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>
        <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground px-6 py-5 clip-angular shadow-orange">
          <div className="font-display text-5xl leading-none">2</div>
          <div className="text-[11px] uppercase tracking-widest font-bold mt-1">Anos de estrada</div>
        </div>
      </div>

      <div>
        <div className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-3">
          // Por que a Fast Freios
        </div>
        <h2 className="font-display text-5xl md:text-6xl uppercase leading-none text-foreground">
          Resolve hoje.<br />
          <span className="text-primary">Sem dor de cabeça.</span>
        </h2>
        <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
          A gente combina diagnóstico técnico, peças de qualidade e atendimento direto pra
          devolver pro seu carro o que mais importa: a segurança em qualquer parada.
        </p>

        <ul className="mt-8 space-y-4">
          {points.map((p) => (
            <li key={p} className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-foreground font-medium">{p}</span>
            </li>
          ))}
        </ul>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div key={s.l} className="border-l-2 border-primary pl-4">
              <div className="font-display text-3xl md:text-4xl text-foreground leading-none">{s.n}</div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-2 font-semibold">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
