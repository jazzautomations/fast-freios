import { Disc3, Droplets, Wrench, Gauge, Search, CircuitBoard, Car, Sliders, Wind, ChevronDown } from "lucide-react";
import { useState } from "react";

const services = [
  {
    icon: Disc3,
    title: "Pastilhas de Freio",
    short: "Troca com peças Frasle de qualidade garantida.",
    expanded: "Trabalhamos com pastilhas Frasle — marca reconhecida pela durabilidade e performance. Nosso técnico avalia o estado das suas pastilhas, explica o que foi encontrado e só substitui se realmente precisa. Troca com garantia de mão de obra e peça.",
  },
  {
    icon: Gauge,
    title: "Discos de Freio",
    short: "Verificação de medida, retífica ou substituição com Fremax.",
    expanded: "Verificamos se o disco está fora de medida. Substituímos com discos Fremax quando necessário, ou fazemos retífica do disco quando ainda é possível. Resultado: freio silencioso e sem trepidação na frenagem.",
  },
  {
    icon: Droplets,
    title: "Fluido de Freio",
    short: "Troca com fluido DOT conforme especificação da montadora.",
    expanded: "Fluido velho perde eficiência e coloca em risco. Fazemos sangria completa do sistema, eliminamos bolhas de ar e colocamos fluido DOT novo conforme a especificação de cada montadora. Pedal firme e resposta imediata.",
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
    short: "Diagnóstico eletrônico, reparação e instalação do sistema.",
    expanded: "Luz do ABS acesa? Fazemos diagnóstico eletrônico completo, identificamos falha de sensor, anel ou módulo. A Fast Freios já conta com reparação e instalação necessária para o sistema ABS do seu veículo. Teste final antes da entrega.",
  },
  {
    icon: Car,
    title: "Suspensão Completa",
    short: "Amortecedores, molas, bandejas e buchas Nakata — tudo que mantém o carro firme na pista.",
    expanded: "Amortecedor vazando, mola quebrada, bandeja com folga? Substituímos todo o sistema de suspensão com componentes Nakata. Geometria e alinhamento pós-serviço incluso.",
  },
  {
    icon: Sliders,
    title: "Alinhamento e Balanceamento",
    short: "Corrige direção, reduz desgaste dos pneus e economiza combustível.",
    expanded: "Direção puxando para um lado? Vibrando no volante? Alinhamos geometria 3D computadorizado e balanceamos rodas com pesos internos. Segurança, conforto e economia de combustível na mesma visita.",
  },
  {
    icon: Wind,
    title: "Calibração de Nitrogênio",
    short: "Pressão estável por até 6 meses, menor desgaste e mais segurança.",
    expanded: "Nitrogênio mantém a pressão estável por até 6 meses, reduz oxidação interna do pneu e evita variações por temperatura. Indicado para quem roda muito ou quer maior durabilidade dos pneus com menor perda de pressão.",
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
