import React from "react";
import { Medallion } from "./components/ui/Medallion";
import { GodCard } from "./components/ui/GodCard";
import { Frame } from "./components/layout/Frame";
import { LoadingScreen } from "./components/layout/LoadingScreen";

function App() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [activeSection, setActiveSection] = React.useState("home");

  // Mock Data
  const gods = [
    {
      name: "Zeus",
      type: "Grego",
      element: "Céu / Trovão",
      description: "Rei dos Deuses, governante do Monte Olimpo e deus do céu e do trovão.",
      abilities: ["Mestre dos Raios", "Controle do Clima", "Voo", "Força Divina"]
    },
    {
      name: "Júpiter",
      type: "Romano",
      element: "Céu / Estado",
      description: "Rei dos deuses na mitologia romana, deus do céu e do trovão. Protetor do estado.",
      abilities: ["Fulgor Imperial", "Autoridade Absoluta", "Tempestade", "Águia de Júpiter"]
    },
    {
      name: "Poseidon",
      type: "Grego",
      element: "Mar",
      description: "Deus dos mares, tempestades, terremotos e cavalos.",
      abilities: ["Hidrocinese", "Terremotos", "Comunicação com Equinos", "Respiração Subaquática"]
    },
    {
      name: "Netuno",
      type: "Romano",
      element: "Água Doce / Mar",
      description: "Deus romano das águas e dos mares.",
      abilities: ["Tridente Sísmico", "Controle das Marés", "Fúria do Oceano", "Criação de Fontes"]
    },
    {
      name: "Hades",
      type: "Grego",
      element: "Submundo",
      description: "Deus dos mortos e rei do submundo.",
      abilities: ["Umbracinese", "Necromancia", "Viagem nas Sombras", "Riquezas da Terra"]
    },
    {
      name: "Plutão",
      type: "Romano",
      element: "Morte / Riqueza",
      description: "Deus do submundo e da riqueza.",
      abilities: ["Controle de Minerais", "Invisibilidade", "Julgamento Final", "Cadeias da Morte"]
    }
  ];

  const monsters = [
    {
      name: "Minotauro",
      type: "Monstro",
      element: "Labirinto",
      description: "Criatura com cabeça de touro e corpo de homem.",
      abilities: ["Força Bruta", "Sentido de Direção", "Investida", "Resistência"]
    },
    {
      name: "Medusa",
      type: "Monstro",
      element: "Pedra",
      description: "Górgona com serpentes no lugar dos cabelos.",
      abilities: ["Olhar Petrificante", "Veneno", "Medo", "Agilidade"]
    }
  ];

  const renderContent = () => {
    switch (activeSection) {
      case "home":
        return (
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto animate-in fade-in duration-1000">
            <Medallion className="mb-12 scale-125" />

            <h1 className="text-5xl md:text-7xl text-[var(--color-gold)] mb-8">
              A Nova Titanomaquia
            </h1>

            <button
              onClick={() => setActiveSection("gregos")}
              className="mt-12 px-12 py-4 border-2 border-[var(--color-gold)] text-[var(--color-gold)] uppercase"
            >
              Entrar no Acampamento
            </button>
          </div>
        );

      case "gregos":
        return gods
          .filter(g => g.type === "Grego")
          .map((god, i) => <GodCard key={i} {...god} />);

      case "romanos":
        return gods
          .filter(g => g.type === "Romano")
          .map((god, i) => <GodCard key={i} {...god} />);

      case "monstros":
        return monsters.map((m, i) => <GodCard key={i} {...m} />);

      default:
        return null;
    }
  };

  return (
    <>
      {isLoading ? (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      ) : (
        <Frame activeSection={activeSection} onNavigate={setActiveSection}>
          {renderContent()}
        </Frame>
      )}
    </>
  );
}

export default App;
