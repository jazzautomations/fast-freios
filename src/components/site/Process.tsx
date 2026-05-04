const steps = [
  { n: "01", t: "Agende", d: "Pelo WhatsApp ou clique aqui no site. Escolha dia e horário." },
  { n: "02", t: "Diagnóstico Grátis", d: "Avaliação completa em 20 minutos com laudo técnico." },
  { n: "03", t: "Resolve Hoje", d: "Aprovou o orçamento? A gente bota a mão na massa na hora." },
];

export const Process = () => (
  <section className="py-24 md:py-32">
    <div className="container">
      <div className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-3">
        // Como funciona
      </div>
      <h2 className="font-display text-5xl md:text-7xl uppercase text-foreground leading-none mb-14">
        Simples assim.
      </h2>

      <div className="grid md:grid-cols-3 gap-6 relative">
        <div
          aria-hidden
          className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px border-t-2 border-dashed border-primary/40"
        />
        {steps.map((s, i) => (
          <div key={s.n} className="relative bg-surface border border-border p-8 hover:border-primary transition-colors">
            <div className="font-display text-7xl text-primary leading-none mb-6">{s.n}</div>
            <h3 className="font-display text-3xl uppercase text-foreground mb-3">{s.t}</h3>
            <p className="text-muted-foreground leading-relaxed">{s.d}</p>
            {i < steps.length - 1 && (
              <div aria-hidden className="hidden md:block absolute top-10 -right-3 w-6 h-6 bg-primary rotate-45 border-4 border-background" />
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);
