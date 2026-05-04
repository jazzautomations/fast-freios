import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "Quando devo trocar as pastilhas de freio?",
    a: "Em média, a cada 25 mil a 40 mil km, mas depende do uso. Sinais de chiado, pedal baixo ou luz no painel são alertas. Faça o diagnóstico grátis pra ter certeza.",
  },
  {
    q: "Quanto custa uma revisão completa de freio?",
    a: "O diagnóstico é gratuito. O orçamento depende do modelo do carro e das peças necessárias — sempre mostramos antes de qualquer serviço.",
  },
  {
    q: "Vocês dão garantia nas peças e no serviço?",
    a: "Sim. Todas as peças têm garantia de fábrica e o serviço é garantido por escrito na nota fiscal.",
  },
  {
    q: "Preciso agendar ou posso ir direto?",
    a: "Atendemos por ordem de chegada, mas agendar pelo WhatsApp garante seu horário e zero espera.",
  },
  {
    q: "Vocês mexem com sistema ABS?",
    a: "Sim. Temos scanner técnico e mecânicos especializados em diagnóstico eletrônico e reparo do módulo ABS, sensores e cabeamento.",
  },
  {
    q: "Quanto tempo demora a troca de pastilha?",
    a: "Em média 40 minutos. Carros mais complexos podem levar até 1h30.",
  },
];

export const Faq = () => (
  <section id="faq" className="py-24 md:py-32">
    <div className="container max-w-4xl">
      <div className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-3">
        // FAQ
      </div>
      <h2 className="font-display text-5xl md:text-6xl uppercase text-foreground leading-none mb-12">
        Perguntas<br />
        <span className="text-primary">que a gente ouve direto.</span>
      </h2>

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((f, i) => (
          <AccordionItem
            key={i}
            value={`item-${i}`}
            className="border border-border bg-surface px-6 data-[state=open]:border-primary"
          >
            <AccordionTrigger className="font-display text-lg md:text-xl uppercase text-foreground hover:text-primary text-left">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base leading-relaxed">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);
