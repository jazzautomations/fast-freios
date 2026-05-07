import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Pillars } from "@/components/site/Pillars";
import { Ticker } from "@/components/site/Ticker";
import { Services } from "@/components/site/Services";
import { About } from "@/components/site/About";
import { Process } from "@/components/site/Process";
import { TipBlock } from "@/components/site/TipBlock";
import { Testimonials } from "@/components/site/Testimonials";
import { Faq } from "@/components/site/Faq";
import { CtaBanner } from "@/components/site/CtaBanner";
import { CheckupForm } from "@/components/site/CheckupForm";
import { Brands } from "@/components/site/Brands";
import { MapSection } from "@/components/site/MapSection";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";

const servicesList = [
  "Troca de pastilhas de freio",
  "Troca de discos de freio",
  "Sangria de fluido de freio",
  "Diagnóstico de freio ABS",
  "Revisão completa de freios",
  "Suspensão completa",
  "Alinhamento e balanceamento",
  "Calibração de nitrogênio nos pneus",
];

const faqItems = [
  { question: "O diagnóstico é realmente grátis?", answer: "Sim. Fazemos avaliação completa do sistema de freio sem custo. Você recebe um laudo técnico com tudo o que precisa ser feito." },
  { question: "Quanto tempo leva o diagnóstico?", answer: "Em média 20 minutos. Verificamos pastilhas, discos, fluido, mangueiras e sistema ABS." },
  { question: "Trabalhamos com garantia?", answer: "Sim. Todas as peças têm garantia do fabricante e oferecemos garantia da mão de obra." },
  { question: "Preciso agendar?", answer: "Não é obrigatório, mas recomendamos. Assim garantimos que o seu carro seja atendido no horário ideal para você." },
  { question: "Vocês atendem só freios ou suspensão também?", answer: "Freios, suspensão, alinhamento, balanceamento e calibração de nitrogênio. Cuidamos de tudo que faz o seu carro parar e andar com segurança." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    // ── Organization ──
    {
      "@type": "Organization",
      "@id": "https://fastfreios.com.br/#org",
      name: "Fast Freios",
      url: "https://fastfreios.com.br/",
      logo: "https://fastfreios.com.br/logo.png",
      sameAs: [
        "https://www.instagram.com/fastfreios/",
        "https://www.facebook.com/fastfreiospiracicaba",
        "https://wa.me/5519999338747",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+55-19-99933-8747",
        contactType: "customer service",
        availableLanguage: "Portuguese",
        areaServed: "Piracicaba",
      },
    },
    // ── LocalBusiness (AutoRepair) ──
    {
      "@type": "AutoRepair",
      "@id": "https://fastfreios.com.br/#business",
      name: "Fast Freios",
      alternateName: "Fast Freios Piracicaba",
      slogan: "Segurança em qualquer parada",
      description:
        "Especialistas em freios e suspensão automotiva em Piracicaba SP. Troca de pastilhas, discos, fluido de freio, revisão completa, suspensão, alinhamento e diagnóstico de freio ABS. Diagnóstico grátis em 20 minutos com laudo técnico. Loja autorizada Fremax, Frasle e Nakata.",
      url: "https://fastfreios.com.br/",
      telephone: "+55-19-3490-0304",
      email: "contato@fastfreios.com.br",
      image: "https://fastfreios.com.br/logo.png",
      logo: "https://fastfreios.com.br/logo.png",
      priceRange: "$$",
      currenciesAccepted: "BRL",
      paymentAccepted: "Cash, Credit Card, Debit Card, PIX",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Av. Dr. Cássio Pascoal Padovani, 1021",
        addressLocality: "Piracicaba",
        addressRegion: "SP",
        postalCode: "13420-355",
        addressCountry: "BR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "-22.7253",
        longitude: "-47.6477",
      },
      hasMap: "https://maps.google.com/?q=Fast+Freios+Piracicaba",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "07:30",
          "closes": "18:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Saturday", "Sunday"],
          "opens": "00:00",
          "closes": "00:00",
          "description": "Fechado",
        },
      ],
      sameAs: [
        "https://www.instagram.com/fastfreios/",
        "https://www.facebook.com/fastfreiospiracicaba",
        "https://wa.me/5519999338747",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+55-19-99933-8747",
        contactType: "customer service",
        availableLanguage: "Portuguese",
        contactOption: "TollFree",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        reviewCount: "200",
        bestRating: "5",
      },
      areaServed: [
        { "@type": "City", name: "Piracicaba" },
        { "@type": "State", name: "São Paulo" },
      ],
      // ── Service schema per service ──
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Serviços Fast Freios",
        url: "https://fastfreios.com.br/#servicos",
        offers: servicesList.map((s) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: s },
        })),
      },
    },
    // ── FAQPage ──
    {
      "@type": "FAQPage",
      "@id": "https://fastfreios.com.br/#faq",
      mainEntity: faqItems.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: f.answer,
        },
      })),
    },
    // ── WebSite ──
    {
      "@type": "WebSite",
      "@id": "https://fastfreios.com.br/#website",
      url: "https://fastfreios.com.br/",
      name: "Fast Freios Piracicaba",
      description: "Especialistas em freios e suspensão automotiva em Piracicaba SP",
      inLanguage: "pt-BR",
      publisher: { "@id": "https://fastfreios.com.br/#org" },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://fastfreios.com.br/?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    },
    // ── BreadcrumbList ──
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Início",
          item: "https://fastfreios.com.br/",
        },
      ],
    },
  ],
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      {/* Fachada da oficina */}
      <div className="relative w-full pt-16 md:pt-20">
        <img
          src="/shop-wide.png"
          alt="Fast Freios — Oficina especializada em freios em Piracicaba"
          className="w-full object-contain object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background/70" />
      </div>
      
      <main>
        <Hero />
        <Brands />
        <Pillars />
        <Ticker />
        <Services />
        <About />
        <Process />
        <TipBlock />
        <Testimonials />
        <Faq />
        <CtaBanner />
        <CheckupForm />
        <MapSection />
      </main>
      <Footer />
      <WhatsAppButton />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
};

export default Index;
