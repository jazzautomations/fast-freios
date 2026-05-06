import { useState } from "react";
import { ClipboardCheck, CheckCircle2, Loader2 } from "lucide-react";
import { APPS_SCRIPT_URL, WHATSAPP_NUMBER } from "@/config";

const SERVICES = [
  "Checkup Gratuito de Freios",
  "Troca de Pastilhas de Freio",
  "Troca de Discos de Freio",
  "Troca de Fluido de Freio",
  "Diagnóstico de Freio ABS",
  "Revisão Completa de Freios",
  "Suspensão Completa",
  "Alinhamento e Balanceamento",
  "Calibração de Nitrogênio nos Pneus",
];

type Status = "idle" | "sending" | "success" | "error";

function buildWhatsAppMsg(name: string, phone: string, car: string, service: string) {
  return (
    `Olá! Vim pelo site da Fast Freios.\n\n` +
    `👤 Nome: ${name}\n` +
    `📱 WhatsApp: ${phone}\n` +
    `🚗 Carro: ${car}\n` +
    `🔧 Serviço: ${service || "Checkup Gratuito"}\n\n` +
    `Gostaria de agendar um horário. Poderia me ajudar?`
  );
}

async function sendToSheets(data: Record<string, string>) {
  if (!APPS_SCRIPT_URL || APPS_SCRIPT_URL.startsWith("COLOQUE")) return;
  try {
    await fetch(APPS_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors", // Apps Script requires no-cors
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, timestamp: new Date().toLocaleString("pt-BR") }),
    });
  } catch {
    // Silently ignore — WhatsApp still opens even if Sheets fails
  }
}

export const CheckupForm = () => {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const name    = (form.elements.namedItem("name")    as HTMLInputElement).value.trim();
    const phone   = (form.elements.namedItem("phone")   as HTMLInputElement).value.trim();
    const car     = (form.elements.namedItem("car")     as HTMLInputElement).value.trim();
    const service = (form.elements.namedItem("service") as HTMLSelectElement).value;

    setStatus("sending");

    // 1. Send lead to Google Sheets (non-blocking)
    await sendToSheets({ name, phone, car, service });

    setStatus("success");

    // 2. Open WhatsApp with pre-filled message after a short delay
    setTimeout(() => {
      const msg = buildWhatsAppMsg(name, phone, car, service);
      window.open(
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`,
        "_blank",
      );
    }, 600);
  }

  if (status === "success") {
    return (
      <section id="checkup" className="py-24 md:py-32 bg-surface/60 border-y border-border">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <CheckCircle2 className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="font-display text-4xl md:text-5xl uppercase text-foreground mb-4">
              Recebemos seu pedido!
            </h2>
            <p className="text-muted-foreground mb-8">
              O WhatsApp vai abrir agora com sua mensagem já preenchida. É só enviar e aguardar nossa confirmação.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="text-sm text-primary underline underline-offset-4 hover:opacity-80 transition"
            >
              Fazer outro agendamento
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="checkup" className="py-24 md:py-32 bg-surface/60 border-y border-border">
      <div className="container">
        <div className="max-w-2xl mx-auto">
          <div className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-3 text-center">
            // Checkup Gratuito
          </div>
          <h2 className="font-display text-5xl md:text-6xl uppercase text-foreground leading-none text-center mb-4">
            Agende seu<br />
            <span className="text-primary">diagnóstico grátis.</span>
          </h2>
          <p className="text-muted-foreground text-center mb-10">
            Preencha o formulário — abrimos o WhatsApp com sua mensagem já pronta
            e salvamos seu contato para não te perder.
          </p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2"
                >
                  Seu nome *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="João Silva"
                  className="w-full bg-background border border-border px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2"
                >
                  WhatsApp *
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="(19) 99999-9999"
                  className="w-full bg-background border border-border px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="car"
                className="block text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2"
              >
                Seu carro *
              </label>
              <input
                id="car"
                name="car"
                type="text"
                required
                placeholder="Ex: Honda Civic 2020"
                className="w-full bg-background border border-border px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition"
              />
            </div>

            <div>
              <label
                htmlFor="service"
                className="block text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2"
              >
                Serviço de interesse
              </label>
              <div className="relative">
                <select
                  id="service"
                  name="service"
                  className="w-full bg-background border border-border px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition appearance-none pr-10"
                >
                  <option value="">Selecione um serviço...</option>
                  {SERVICES.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground text-xs">▼</span>
              </div>
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full inline-flex items-center justify-center gap-3 px-8 py-5 bg-primary text-primary-foreground font-bold uppercase text-sm tracking-widest hover:brightness-110 transition orange-glow disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status === "sending" ? (
                <><Loader2 className="h-5 w-5 animate-spin" /> Enviando...</>
              ) : (
                <><ClipboardCheck className="h-5 w-5" /> Agendar Checkup Gratuito</>
              )}
            </button>

            <p className="text-center text-xs text-muted-foreground">
              * Campos obrigatórios. Ao enviar, o WhatsApp abre com sua mensagem já preenchida — é só apertar enviar.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};
