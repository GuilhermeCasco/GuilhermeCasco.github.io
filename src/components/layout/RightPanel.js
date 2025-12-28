import React from "react";

export function RightPanel() {
  return (
    <aside className="h-full p-8 border-l border-[var(--color-gold-dim)] bg-[rgba(8,24,26,0.8)] backdrop-blur-sm flex flex-col gap-8 justify-center">
      <div className="border border-[var(--color-gold-dim)] p-6 relative group hover:border-[var(--color-gold)] transition-colors duration-500">
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[var(--color-teal-dark)] px-2 text-[var(--color-gold)] text-xs tracking-widest uppercase">
          Destaque
        </div>
        <h3 className="text-[var(--color-gold)] text-center mb-2">
          A Profecia
        </h3>
        <p className="text-[var(--color-mist)] text-sm text-center font-serif italic leading-relaxed">
          "Sete meio-sangues responderão ao chamado. Em tempestade ou fogo, o mundo terá acabado."
        </p>
      </div>

      <div className="border border-[var(--color-gold-dim)] p-6 relative group hover:border-[var(--color-gold)] transition-colors duration-500">
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[var(--color-teal-dark)] px-2 text-[var(--color-gold)] text-xs tracking-widest uppercase">
          Artefato
        </div>
        <h3 className="text-[var(--color-gold)] text-center mb-2">
          Raio Mestre
        </h3>
        <div className="w-full h-24 bg-[var(--color-teal-deep)] flex items-center justify-center border border-[var(--color-bronze-dark)]">
          <span className="text-4xl animate-pulse">⚡</span>
        </div>
      </div>
    </aside>
  );
}
