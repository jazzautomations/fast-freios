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

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
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
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "07:30",
          closes: "18:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "07:30",
          closes: "13:00",
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
        {
          "@type": "City",
          name: "Piracicaba",
          "@id": "https://www.wikidata.org/wiki/Q174987",
        },
      ],
      serviceType: [
        "Troca de pastilhas de freio",
        "Troca de discos de freio",
        "Sangria de fluido de freio",
        "Diagnóstico de freio ABS",
        "Revisão completa de freios",
        "Diagnóstico grátis de freios",
        "Suspensão completa",
        "Alinhamento e balanceamento",
        "Calibração de nitrogênio nos pneus",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://fastfreios.com.br/#website",
      url: "https://fastfreios.com.br/",
      name: "Fast Freios Piracicaba",
      description: "Especialistas em freios e suspensão automotiva em Piracicaba SP",
      inLanguage: "pt-BR",
      publisher: { "@id": "https://fastfreios.com.br/#business" },
    },
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
