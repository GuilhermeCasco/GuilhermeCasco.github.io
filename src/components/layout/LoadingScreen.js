import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Medallion } from '../ui/Medallion';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const silhouetteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(containerRef.current, {
          opacity: 0,
          duration: 1.5,
          onComplete: onComplete
        });
      }
    });

    // Silhouette Animation
    gsap.to(silhouetteRef.current, {
      y: -20,
      opacity: 0.3,
      duration: 4,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut"
    });

    tl.fromTo(textRef.current, 
      { opacity: 0, y: 50, letterSpacing: '0.1em' },
      { opacity: 1, y: 0, letterSpacing: '0.5em', duration: 2, ease: "power3.out" }
    )
    .to(textRef.current, {
      textShadow: "0 0 20px var(--color-gold)",
      duration: 1,
      yoyo: true,
      repeat: 1
    })
    .to({}, { duration: 1 }); // Wait a bit

  }, [onComplete]);

  return (
    <div ref={containerRef} className="fixed inset-0 z-[100] bg-[var(--color-teal-dark)] flex flex-col items-center justify-center overflow-hidden">
      {/* Fog Layer */}
      <div className="absolute inset-0 bg-[url('https://raw.githubusercontent.com/yoksel/css-filters/master/img/clouds.jpg')] opacity-10 bg-cover animate-pulse mix-blend-overlay"></div>
      
      {/* Giant Silhouette Background */}
      <div ref={silhouetteRef} className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] opacity-10 pointer-events-none">
         <svg viewBox="0 0 100 100" fill="currentColor" className="text-[var(--color-teal-deep)] w-full h-full">
           <path d="M50 20 C 60 20 65 30 65 40 C 65 50 55 55 50 55 C 45 55 35 50 35 40 C 35 30 40 20 50 20 Z M 20 100 L 35 60 L 65 60 L 80 100 Z" />
         </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        <Medallion className="scale-150 mb-8" />
        
        <h1 ref={textRef} className="text-4xl md:text-6xl text-[var(--color-gold)] font-bold tracking-widest border-b-2 border-[var(--color-gold)] pb-4 text-center px-4">
          TITANOMAQUIA
        </h1>
        
        <p className="text-[var(--color-mist)] font-serif italic text-lg mt-4 animate-pulse">
          Carregando a Era dos Mitos...
        </p>
      </div>
    </div>
  );
};
