import { Zap, ShieldCheck, Cog, ThumbsUp } from "lucide-react";

const items = [
  { icon: Zap, title: "Agilidade", desc: "Atendimento rápido, sem enrolação." },
  { icon: ShieldCheck, title: "Segurança", desc: "Peças com garantia e laudo técnico." },
  { icon: Cog, title: "Confiança", desc: "Mecânicos especialistas em freios." },
  { icon: ThumbsUp, title: "Praticidade", desc: "Agende online e resolva hoje." },
];

export const Pillars = () => (
  <section className="py-16 md:py-20 border-y border-border bg-surface/50">
    <div className="container grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      {items.map(({ icon: Icon, title, desc }) => (
        <div
          key={title}
          className="group relative bg-background border border-border p-6 md:p-7 hover:border-primary transition-colors"
        >
          <div
            aria-hidden
            className="absolute top-0 right-0 w-12 h-1 bg-primary transition-all group-hover:w-20"
          />
          <Icon className="h-8 w-8 md:h-10 md:w-10 text-primary mb-4 stroke-[1.5]" />
          <h3 className="font-display text-2xl md:text-3xl uppercase text-foreground">{title}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
        </div>
      ))}
    </div>
  </section>
);
