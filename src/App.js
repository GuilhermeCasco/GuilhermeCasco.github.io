import React from 'react';
import { Medallion } from './components/ui/Medallion';
import { GodCard, GodProps } from './components/ui/GodCard';
import { Frame } from './components/layout/Frame';
import { LoadingScreen } from './components/layout/LoadingScreen';

function App() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [activeSection, setActiveSection] = React.useState('home');

  // Mock Data
  const gods: GodProps[] = [
    { name: 'Zeus', type: 'Grego', element: 'Céu / Trovão', description: 'Rei dos Deuses, governante do Monte Olimpo e deus do céu e do trovão.', abilities: ['Mestre dos Raios', 'Controle do Clima', 'Voo', 'Força Divina'] },
    { name: 'Júpiter', type: 'Romano', element: 'Céu / Estado', description: 'Rei dos deuses na mitologia romana, deus do céu e do trovão. Protetor do estado.', abilities: ['Fulgor Imperial', 'Autoridade Absoluta', 'Tempestade', 'Águia de Júpiter'] },
    { name: 'Poseidon', type: 'Grego', element: 'Mar', description: 'Deus dos mares, tempestades, terremotos e cavalos.', abilities: ['Hidrocinese', 'Terremotos', 'Comunicação com Equinos', 'Respiração Subaquática'] },
    { name: 'Netuno', type: 'Romano', element: 'Água Doce / Mar', description: 'Deus romano das águas e dos mares.', abilities: ['Tridente Sísmico', 'Controle das Marés', 'Fúria do Oceano', 'Criação de Fontes'] },
    { name: 'Hades', type: 'Grego', element: 'Submundo', description: 'Deus dos mortos e rei do submundo.', abilities: ['Umbracinese', 'Necromancia', 'Viagem nas Sombras', 'Riquezas da Terra'] },
    { name: 'Plutão', type: 'Romano', element: 'Morte / Riqueza', description: 'Deus do submundo e da riqueza.', abilities: ['Controle de Minerais', 'Invisibilidade', 'Julgamento Final', 'Cadeias da Morte'] },
  ];

  const monsters: GodProps[] = [
    { name: 'Minotauro', type: 'Monstro', element: 'Labirinto', description: 'Criatura com cabeça de touro e corpo de homem.', abilities: ['Força Bruta', 'Sentido de Direção', 'Investida', 'Resistência'] },
    { name: 'Medusa', type: 'Monstro', element: 'Pedra', description: 'Górgona com serpentes no lugar dos cabelos.', abilities: ['Olhar Petrificante', 'Veneno', 'Medo', 'Agilidade'] },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return (
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto animate-in fade-in duration-1000">
            <Medallion className="mb-12 scale-125" />
            
            <h1 className="text-5xl md:text-7xl text-[var(--color-gold)] mb-8 drop-shadow-[0_0_15px_rgba(212,175,55,0.5)]">
              A Nova Titanomaquia
            </h1>
            
            <div className="space-y-6 text-lg md:text-xl text-[var(--color-sky-pastel)] font-serif leading-relaxed max-w-2xl">
              <p>
                O Monte Olimpo treme. O Monte Otris se reergue. 
                As antigas forças primordiais despertam de seu sono eterno no Tártaro.
              </p>
              <p className="text-[var(--color-mist)] italic border-l-4 border-[var(--color-gold)] pl-6 py-2 my-8 bg-[rgba(0,0,0,0.3)]">
                "Doze tronos dourados contra a escuridão titânica. 
                Escolha seu lado, semideus. A era dos heróis recomeça agora."
              </p>
              <p>
                Explore os arquivos dos deuses, conheça seus aliados romanos e gregos, 
                e prepare-se para o conflito que definirá o destino do mundo ocidental.
              </p>
            </div>

            <button 
              onClick={() => setActiveSection('gregos')}
              className="mt-12 px-12 py-4 border-2 border-[var(--color-gold)] text-[var(--color-gold)] font-title tracking-[0.2em] hover:bg-[var(--color-gold)] hover:text-[var(--color-teal-dark)] transition-all duration-300 uppercase"
            >
              Entrar no Acampamento
            </button>
          </div>
        );
      
      case 'gregos':
        return (
          <div className="animate-in slide-in-from-bottom-10 duration-700">
            <h2 className="text-4xl text-[var(--color-gold)] mb-8 border-b border-[var(--color-gold-dim)] pb-4">Deuses Gregos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {gods.filter(g => g.type === 'Grego').map((god, i) => (
                <GodCard key={i} {...god} />
              ))}
            </div>
          </div>
        );

      case 'romanos':
        return (
          <div className="animate-in slide-in-from-bottom-10 duration-700">
            <h2 className="text-4xl text-[var(--color-gold)] mb-8 border-b border-[var(--color-gold-dim)] pb-4">Deuses Romanos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {gods.filter(g => g.type === 'Romano').map((god, i) => (
                <GodCard key={i} {...god} />
              ))}
            </div>
          </div>
        );

      case 'monstros':
        return (
          <div className="animate-in slide-in-from-bottom-10 duration-700">
            <h2 className="text-4xl text-[var(--color-bronze)] mb-8 border-b border-[var(--color-bronze-dark)] pb-4">Bestiário</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {monsters.map((m, i) => (
                <GodCard key={i} {...m} />
              ))}
            </div>
          </div>
        );

      default:
        return (
          <div className="flex items-center justify-center h-full text-[var(--color-mist)]">
            <p className="text-2xl italic">Conteúdo em desenvolvimento pelos filhos de Hefesto...</p>
          </div>
        );
    }
  };

  return (
    <>
      {/* Background Effects */}
      <div className="fixed inset-0 bg-teal-deep z-0"></div>
      <div className="fog-layer z-10"></div>
      <div className="lightning-overlay z-20"></div>

      {isLoading ? (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      ) : (
        <div className="relative z-30 h-screen animate-in fade-in duration-1000">
          <Frame activeSection={activeSection} onNavigate={setActiveSection}>
            {renderContent()}
          </Frame>
        </div>
      )}
    </>
  );
}

export default App;
