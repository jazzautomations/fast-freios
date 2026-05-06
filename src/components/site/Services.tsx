import { Disc3, Droplets, Wrench, Gauge, Search, CircuitBoard, Car, Sliders, Wind, ArrowUpRight } from "lucide-react";

const services = [
  { icon: Disc3, title: "Pastilhas de Freio", desc: "Troca com peças de marcas premium e garantia real." },
  { icon: Gauge, title: "Discos de Freio", desc: "Avaliação de espessura e substituição quando necessário." },
  { icon: Droplets, title: "Fluido de Freio", desc: "Sangria e troca completa para resposta firme do pedal." },
  { icon: Wrench, title: "Revisão Completa", desc: "Checklist de 20 pontos no sistema de freio do seu carro." },
  { icon: Search, title: "Diagnóstico Grátis", desc: "Avaliação completa do sistema de freio. Sem custo, sem enrolação." },
  { icon: CircuitBoard, title: "Freio ABS", desc: "Diagnóstico eletrônico e reparo de módulo e sensores." },
  { icon: Car, title: "Suspensão Completa", desc: "Amortecedores, molas, bandejas e buchas — tudo que mantém o carro firme na pista." },
  { icon: Sliders, title: "Alinhamento e Balanceamento", desc: "Corrige direção, reduz desgaste dos pneus e garante conforto na direção." },
  { icon: Wind, title: "Calibração de Nitrogênio", desc: "Encha os pneus com nitrogênio puro: pressão mais estável e maior durabilidade." },
];

export const Services = () => (
  <section id="servicos" className="py-24 md:py-32">
    <div className="container">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
        <div>
          <div className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-3">
            // Serviços
          </div>
          <h2 className="font-display text-5xl md:text-7xl uppercase text-foreground leading-none">
            Tudo que o seu carro<br />
            <span className="text-primary">precisa, no mesmo lugar.</span>
          </h2>
        </div>
        <p className="max-w-md text-muted-foreground">
          De freios a suspensão — cuidamos de tudo que faz o seu carro parar e andar com segurança.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map(({ icon: Icon, title, desc }) => (
          <article
            key={title}
            className="group relative bg-surface border border-border p-7 hover:bg-surface-2 hover:border-primary transition-all"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="h-14 w-14 bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-colors">
                <Icon className="h-7 w-7 text-primary group-hover:text-primary-foreground stroke-[1.5]" />
              </div>
              <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            </div>
            <h3 className="font-display text-2xl uppercase text-foreground mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            <div
              aria-hidden
              className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary transition-all group-hover:w-full"
            />
          </article>
        ))}
      </div>
    </div>
  </section>
);
