import React from 'react';

interface NavigationProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ activeSection, onNavigate }) => {
  const items = [
    { id: 'home', label: 'Início', icon: '🏛️' },
    { id: 'romanos', label: 'Romanos', icon: '🦅' },
    { id: 'gregos', label: 'Gregos', icon: '⚡' },
    { id: 'monstros', label: 'Meio-Monstros', icon: '🐍' },
    { id: 'extras', label: 'Extras', icon: '📜' },
  ];

  return (
    <nav className="flex flex-col gap-6 p-8 h-full justify-center border-r border-[var(--color-gold-dim)] bg-[rgba(8,24,26,0.8)] backdrop-blur-sm">
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => onNavigate(item.id)}
          className={`
            group flex items-center gap-4 text-left transition-all duration-500
            ${activeSection === item.id ? 'translate-x-4' : 'hover:translate-x-2'}
          `}
        >
          <span className={`
            text-2xl transition-all duration-300
            ${activeSection === item.id ? 'scale-125 drop-shadow-[0_0_10px_var(--color-gold)]' : 'opacity-70 group-hover:opacity-100'}
          `}>
            {item.icon}
          </span>
          <span className={`
            font-title text-lg tracking-widest uppercase transition-colors duration-300
            ${activeSection === item.id ? 'text-[var(--color-gold)]' : 'text-[var(--color-mist)] group-hover:text-[var(--color-gold)]'}
          `}>
            {item.label}
          </span>
        </button>
      ))}
    </nav>
  );
};
