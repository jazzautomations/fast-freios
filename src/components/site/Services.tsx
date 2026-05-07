import { Disc3, Droplets, Wrench, Gauge, Search, CircuitBoard, Car, Sliders, Wind, ChevronDown } from "lucide-react";
import { useState } from "react";

const services = [
  {
    icon: Disc3,
    title: "Pastilhas de Freio",
    short: "Troca com peças de marcas premium e garantia real.",
    expanded: "Trabalhamos com pastilhas Fremax, Fras-le e Nakata — marcas que você confere na Oficina Autorizada. Nosso técnico avalia o estado das suas pastilhas, explica o que foi encontrado e só substitui se realmente precisa. Troca com garantia de mão de obra.",
  },
  {
    icon: Gauge,
    title: "Discos de Freio",
    short: "Avaliação de espessura e substituição quando necessário.",
    expanded: "Disco fora de medida? Substituímos com disco ou tambor novo Fremax, com retífica dos lábios para evitar vibração. Retífica de disco quando possível. Freio silencioso e sem trepidação na frenagem.",
  },
  {
    icon: Droplets,
    title: "Fluido de Freio",
    short: "Sangria e troca completa para resposta firme do pedal.",
    expanded: "Fluido degradado é perigo invisível. Fazemos sangria completa do sistema — ar nas tubulações sai, pedal firme como novo. Utilizamos o DOT conforme especificação de cada montadora.",
  },
  {
    icon: Wrench,
    title: "Revisão Completa",
    short: "Checklist de 20 pontos no sistema de freio do seu carro.",
    expanded: "Inspeção visual + funcional: pastilhas, discos, fluido, mangueiras, cilindro mestre, cilindro de roda, sapata, pastilhas traseiras, ABS, nivelamento do pedal. Laudo técnico escrito em 20 minutos.",
  },
  {
    icon: Search,
    title: "Diagnóstico Grátis",
    short: "Avaliação completa do sistema de freio. Sem custo, sem enrolação.",
    expanded: "Chegou, diagnóstico em 20 minutos, laudo técnico na mão. Sem compromisso, sem cobrança oculta. Se o freio estiver bom, a gente fala. Se precisar fazer, você decide — sem pressão.",
  },
  {
    icon: CircuitBoard,
    title: "Freio ABS",
    short: "Diagnóstico eletrônico e reparo de módulo e sensores.",
    expanded: "Luz do ABS acesa? Fazemos scan diagnóstico no módulo ABS, identificamos falha de sensor, anel ou módulo. Módulo do ABS — já temos a reparação e instalação necessária para seu veículo. Teste final antes da entrega.",
  },
  {
    icon: Car,
    title: "Suspensão Completa",
    short: "Amortecedores, molas, bandejas e buchas — tudo que mantém o carro firme na pista.",
    expanded: "Amortecedor vazando, mola quebrada, bandeja com folga? Substituímos todo o sistema de suspensão com peças Nakata. Geometria e alinhamento pós-serviço incluso.",
  },
  {
    icon: Sliders,
    title: "Alinhamento e Balanceamento",
    short: "Corrige direção, reduz desgaste dos pneus e garante conforto na direção.",
    expanded: "Direção puxando para um lado? Vibrando no volante? Alinhamos geometria 3D computadorizado e balanceamos rodas com pesos internos. Segurança e economia de combustível na mesma visita.",
  },
  {
    icon: Wind,
    title: "Calibração de Nitrogênio",
    short: "Encha os pneus com nitrogênio puro: pressão mais estável e maior durabilidade.",
    expanded: "Nitrogênio mantém a pressão estável por até 6 meses, reduz oxidação interna do pneu e evita variações por temperatura. Indicado para quem roda muito ou quer maior vida útil dos pneus com menor perda de pressão.",
  },
];

export const Services = () => {
  const [open, setOpen] = useState<string | null>(null);

  return (
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
          {services.map(({ icon: Icon, title, short, expanded }) => {
            const isOpen = open === title;
            return (
              <article
                key={title}
                onClick={() => setOpen(isOpen ? null : title)}
                className="group relative bg-surface border border-border p-7 hover:bg-surface-2 hover:border-primary transition-all cursor-pointer"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="h-14 w-14 bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-colors">
                    <Icon className="h-7 w-7 text-primary group-hover:text-primary-foreground stroke-[1.5]" />
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 text-muted-foreground transition-transform duration-300 ${isOpen ? "rotate-180 text-primary" : ""}`}
                  />
                </div>
                <h3 className="font-display text-2xl uppercase text-foreground mb-3">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-2">{short}</p>
                <div
                  className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <p className="text-sm text-foreground/80 leading-loose border-t border-border pt-4">
                    {expanded}
                  </p>
                </div>
                <div
                  aria-hidden
                  className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary transition-all group-hover:w-full"
                />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
