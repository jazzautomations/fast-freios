import { ShieldCheck } from "lucide-react";

const brands = [
  {
    name: "Fremax",
    logo: "/logo-fremax-transparent.png",
    desc: "Discos e tambores de freio",
    url: "https://www.fremax.com.br",
  },
  {
    name: "Fras-le",
    logo: "/logo-frasle-transparent.png",
    desc: "Pastilhas e lonas de freio",
    url: "https://www.frasle.com",
  },
  {
    name: "Nakata",
    logo: "/logo-nakata.webp",
    desc: "Suspensão e direção",
    url: "https://www.nakata.com.br",
  },
];

export const Brands = () => (
  <section className="py-12 md:py-20 border-y border-border bg-background">
    <div className="container">
      <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-16">
        <div className="flex-shrink-0 md:border-r md:border-border md:pr-12">
          <div className="inline-flex items-center gap-2 mb-2">
            <ShieldCheck className="h-5 w-5 text-primary" />
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">
              Loja Autorizada
            </span>
          </div>
          <p className="text-sm text-muted-foreground max-w-[180px] leading-relaxed">
            Trabalhamos somente com as melhores marcas do mercado.
          </p>
        </div>

        <div className="flex-1">
          <div className="flex md:grid md:grid-cols-3 gap-3 overflow-x-auto md:overflow-visible -mx-3 px-3 md:mx-0 md:px-0 md:gap-4">
            {brands.map((b) => (
              <div
                key={b.name}
                className="group flex-shrink-0 w-[140px] md:w-auto flex flex-col items-center justify-center gap-2.5 bg-transparent p-4 md:p-6"
              >
                <div className="h-12 md:h-14 flex items-center justify-center w-full">
                  <img
                    src={b.logo}
                    alt={`Logo ${b.name}`}
                    className="max-h-12 md:max-h-14 max-w-[160px] w-auto object-contain"
                  />
                </div>
                <span className="text-[9px] uppercase tracking-widest text-muted-foreground font-semibold text-center leading-tight">
                  {b.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);
