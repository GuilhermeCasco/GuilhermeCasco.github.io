import React from "react";
import { Navigation } from "./Navigation.jsx";
import { RightPanel } from "./RightPanel.jsx";

export function Frame(props) {
  const { children, activeSection, onNavigate } = props;

  return (
    <div className="relative w-full h-screen overflow-hidden bg-marble flex flex-col md:flex-row">
      {/* Ornamental Corners */}
      <div className="deco-border-corner corner-tl"></div>
      <div className="deco-border-corner corner-tr"></div>
      <div className="deco-border-corner corner-bl"></div>
      <div className="deco-border-corner corner-br"></div>

      {/* Top/Bottom Borders */}
      <div className="absolute top-0 left-20 right-20 h-1 bg-gradient-to-r from-transparent via-[var(--color-gold)] to-transparent z-50"></div>
      <div className="absolute bottom-0 left-20 right-20 h-1 bg-gradient-to-r from-transparent via-[var(--color-gold)] to-transparent z-50"></div>

      {/* Left Panel (Nav) */}
      <div className="hidden md:block w-64 h-full relative z-40">
        <Navigation
          activeSection={activeSection}
          onNavigate={onNavigate}
        />
      </div>

      {/* Main Content (Center) */}
      <main className="flex-1 h-full relative overflow-y-auto overflow-x-hidden scroll-smooth">
        <div className="min-h-full p-8 md:p-16 pt-24 pb-24">
          {children}
        </div>
      </main>

      {/* Right Panel (Lore) */}
      <div className="hidden lg:block w-64 h-full relative z-40">
        <RightPanel />
      </div>

      {/* Mobile Nav */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-[var(--color-teal-deep)] border-t border-[var(--color-gold)] p-4 flex justify-around z-50">
        <button onClick={() => onNavigate("home")} className="text-2xl">🏛️</button>
        <button onClick={() => onNavigate("romanos")} className="text-2xl">🦅</button>
        <button onClick={() => onNavigate("gregos")} className="text-2xl">⚡</button>
      </div>
    </div>
  );
}
