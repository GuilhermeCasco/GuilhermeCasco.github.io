import React, { useState } from "react";
import { createPortal } from "react-dom";

export function GodCard(props) {
  const {
    name,
    type,
    element,
    description,
    abilities
  } = props;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="group relative h-80 border border-[var(--color-gold-dim)] bg-[rgba(8,24,26,0.6)] cursor-pointer overflow-hidden transition-all duration-500 hover:border-[var(--color-gold)] hover:shadow-[0_0_20px_rgba(212,175,55,0.2)]"
      >
        {/* Background Mist */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-teal-deep)] to-transparent opacity-80"></div>

        {/* Silhouette Placeholder */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-3/4 bg-[var(--color-teal-dark)] mask-image-gradient opacity-80 group-hover:scale-105 transition-transform duration-700 flex items-end justify-center">
          <span className="text-9xl opacity-20 filter blur-sm select-none">
            {type === "Grego" ? "⚡" : type === "Romano" ? "🦅" : "🐍"}
          </span>
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-[var(--color-gold-dim)] bg-[rgba(8,24,26,0.9)] transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          <div className="text-[var(--color-gold)] text-xs tracking-widest uppercase mb-1">
            {type}
          </div>
          <h3 className="text-2xl font-title text-[var(--color-sky-pastel)]">
            {name}
          </h3>
        </div>
      </div>

      {/* Modal */}
      {isOpen &&
        createPortal(
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            <div
              className="absolute inset-0 bg-black/90 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            ></div>

            <div className="relative w-full max-w-2xl bg-[var(--color-teal-deep)] border-2 border-[var(--color-gold)] p-8 md:p-12 shadow-[0_0_50px_var(--color-gold-dim)] animate-in fade-in zoom-in duration-300">
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-[var(--color-gold)] hover:text-white text-2xl"
              >
                ✕
              </button>

              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/3 border border-[var(--color-gold-dim)] h-64 flex items-center justify-center bg-[var(--color-teal-dark)]">
                  <span className="text-6xl">
                    {type === "Grego"
                      ? "⚡"
                      : type === "Romano"
                      ? "🦅"
                      : "🐍"}
                  </span>
                </div>

                <div className="flex-1">
                  <div className="text-[var(--color-gold)] tracking-widest uppercase mb-2">
                    {type} • {element}
                  </div>

                  <h2 className="text-4xl font-title text-white mb-6 border-b border-[var(--color-gold-dim)] pb-4">
                    {name}
                  </h2>

                  <p className="text-[var(--color-mist)] font-serif italic mb-6 leading-relaxed">
                    {description}
                  </p>

                  <h4 className="text-[var(--color-gold)] uppercase tracking-widest text-sm mb-3">
                    Habilidades
                  </h4>

                  <ul className="grid grid-cols-1 gap-2">
                    {abilities.map((ability, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-sm text-[var(--color-sky-pastel)]"
                      >
                        <span className="text-[var(--color-gold)]">✦</span>
                        {ability}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
