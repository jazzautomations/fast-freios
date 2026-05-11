import { ArrowRight, MessageCircle, Activity } from "lucide-react";
import heroBrake from "@/assets/hero-brake.jpg";

export const Hero = () => {
  return (
    <section id="top" className="relative pt-32 md:pt-40 pb-20 md:pb-28 overflow-hidden">
      {/* Decorative diagonal stripes */}
      <div
        aria-hidden
        className="absolute -top-10 right-0 w-72 h-32 diagonal-stripes opacity-70 clip-angular"
      />
      <div
        aria-hidden
        className="absolute bottom-10 left-0 w-40 h-10 diagonal-stripes-muted opacity-80"
      />
      {/* Orange glow line */}
      <div aria-hidden className="absolute inset-x-0 bottom-0 glow-line opacity-60" />

      <div className="container grid lg:grid-cols-12 gap-12 items-center relative z-10">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 border border-border px-3 py-1.5 mb-6">
            <Activity className="h-3.5 w-3.5 text-primary animate-glow-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground">
              Diagnóstico Grátis em Piracicaba
            </span>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[110px] uppercase leading-[0.88] text-foreground">
            Segurança
            <br />
            em qualquer
            <br />
            <span className="relative inline-block">
              <span className="relative z-10 text-primary">parada.</span>
              <span aria-hidden className="absolute inset-x-0 bottom-2 h-3 bg-primary/20 blur-md" />
            </span>
          </h1>

          <p className="mt-5 font-display text-xl md:text-2xl text-primary tracking-widest">
            RÁPIDO. CONFIÁVEL. ACESSÍVEL.
          </p>

          <p className="mt-6 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
            Especialistas em freios automotivos. Pastilhas, discos, fluido e revisão completa
            com peças garantidas e mão de obra que resolve hoje — sem enrolação.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contato"
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-bold uppercase text-sm tracking-widest clip-notch hover:brightness-110 transition orange-glow"
            >
              Agende Agora <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="https://wa.me/5519999338747"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 border-2 border-primary text-primary font-bold uppercase text-sm tracking-widest hover:bg-primary hover:text-primary-foreground transition"
            >
              <MessageCircle className="h-4 w-4" /> Chama no Whats
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-xs uppercase font-semibold tracking-widest text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-primary" /> +10 mil freios revisados
            </div>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-primary" /> 5★ no Google
            </div>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-primary" /> 100% garantia
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="relative aspect-square bg-surface border border-border overflow-hidden clip-notch">
            <img
              src={heroBrake}
              alt="Disco de freio incandescente em carro esportivo preto"
              width={1024}
              height={1024}
              className="w-full h-full object-cover"
            />
            <div aria-hidden className="absolute inset-0 bg-gradient-to-tr from-background via-background/10 to-transparent" />
            <div aria-hidden className="absolute -bottom-10 -left-10 w-56 h-20 diagonal-stripes opacity-90 clip-angular" />
          </div>
          {/* Floating telemetry card */}
          <div className="absolute -bottom-6 -left-4 md:left-auto md:-right-6 bg-surface-2 border border-border p-4 shadow-deep min-w-[200px]">
            <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-1">
              Tempo médio
            </div>
            <div className="font-display text-4xl text-foreground">
              20<span className="text-primary text-2xl ml-1">MIN</span>
            </div>
            <div className="text-xs text-muted-foreground">para diagnóstico completo</div>
          </div>
        </div>
      </div>
    </section>
  );
};
