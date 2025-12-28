import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const Medallion: React.FC<{ className?: string }> = ({ className = '' }) => {
  const gearRef = useRef<SVGSVGElement>(null);
  const lightningRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (gearRef.current) {
      gsap.to(gearRef.current, {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: "linear"
      });
    }
    
    if (lightningRef.current) {
      gsap.to(lightningRef.current, {
        opacity: 0.8,
        duration: 0.2,
        repeat: -1,
        yoyo: true,
        repeatDelay: 3,
        ease: "power1.inOut"
      });
    }
  }, []);

  return (
    <div className={`relative w-64 h-64 flex items-center justify-center ${className}`}>
      {/* Outer Ring */}
      <div className="absolute inset-0 border-4 border-[var(--color-gold)] rounded-full opacity-80 shadow-[0_0_30px_var(--color-gold-dim)]"></div>
      
      {/* Rotating Gears SVG */}
      <svg ref={gearRef} className="w-48 h-48 text-[var(--color-bronze)] opacity-60" viewBox="0 0 100 100" fill="currentColor">
        <path d="M50 0 L55 10 L65 10 L70 0 L80 5 L75 15 L85 20 L95 15 L100 25 L90 30 L95 40 L100 45 L95 55 L85 50 L80 60 L90 65 L85 75 L75 70 L70 80 L60 75 L55 85 L45 85 L40 75 L30 80 L25 70 L15 75 L10 65 L20 60 L15 50 L5 55 L0 45 L5 40 L10 30 L0 25 L5 15 L15 20 L20 10 L30 15 L25 5 L35 0 L45 10 L50 0 Z" />
        <circle cx="50" cy="50" r="20" fill="transparent" stroke="currentColor" strokeWidth="5" />
      </svg>

      {/* Inner Lightning Symbol */}
      <div ref={lightningRef} className="absolute z-10 text-[var(--color-gold)] drop-shadow-[0_0_10px_var(--color-gold)]">
        <svg width="60" height="100" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" />
        </svg>
      </div>
    </div>
  );
};
