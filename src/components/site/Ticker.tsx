const words = ["AGILIDADE", "SEGURANÇA", "CONFIANÇA", "PRATICIDADE", "FAST FREIOS"];

export const Ticker = () => {
  const stream = [...words, ...words, ...words, ...words];
  return (
    <div className="relative py-5 bg-primary text-primary-foreground overflow-hidden border-y border-primary">
      <div className="flex whitespace-nowrap animate-ticker">
        {stream.map((w, i) => (
          <span key={i} className="font-display text-3xl md:text-4xl uppercase mx-8 flex items-center gap-8">
            {w}
            <span className="inline-block h-2 w-2 bg-primary-foreground rotate-45" />
          </span>
        ))}
      </div>
    </div>
  );
};
