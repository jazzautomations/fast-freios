type LogoProps = { className?: string; showWordmark?: boolean };

export const Logo = ({ className = "", showWordmark = false }: LogoProps) => (
  <a href="#top" className={`flex items-center ${className}`} aria-label="Fast Freios — início">
    <img
      src="/logo.png"
      alt="Fast Freios"
      className="h-9 md:h-11 w-auto object-contain"
      style={{ maxWidth: "220px" }}
    />
    {showWordmark && (
      <div className="leading-none ml-3">
        <div className="font-display text-2xl md:text-[28px] text-foreground tracking-wide">FAST</div>
        <div className="font-display text-2xl md:text-[28px] text-primary tracking-[0.2em] -mt-1">FREIOS</div>
      </div>
    )}
  </a>
);
