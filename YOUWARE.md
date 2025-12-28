# YOUWARE - Titanomaquia RPG Site

Este projeto é um site institucional e interativo de RPG ambientado no Riordanverso, focado na Titanomaquia. Ele utiliza uma estética "Art Déco Mitológica" com animações cinematográficas.

## Status do Projeto

- **Tipo**: Aplicação Web React + TypeScript
- **Estilo Visual**: Art Déco, Mitológico, Cinematográfico (Teal, Dourado, Mármore)
- **Framework**: React 18 (via Vite)
- **Estilização**: Tailwind CSS + CSS Modules (Variáveis CSS para temas) + GSAP para animações complexas

## Estrutura do Código

### Componentes Principais (`src/components/`)

- **`layout/Frame.tsx`**: O layout principal "Triptych" (três painéis). Gerencia a moldura ornamental fixa e a navegação responsiva.
- **`layout/Navigation.tsx`**: Menu lateral esquerdo com efeitos de hover dourados.
- **`layout/RightPanel.tsx`**: Painel direito com destaques de lore e artefatos.
- **`layout/LoadingScreen.tsx`**: Tela de carregamento cinematográfica com névoa e silhuetas (GSAP).
- **`ui/Medallion.tsx`**: O elemento central animado (engrenagens e raio) usando SVG e GSAP.
- **`ui/GodCard.tsx`**: Cards interativos para os deuses/monstros. Inclui lógica de Modal para exibir detalhes e habilidades.

### Estilos Globais (`src/index.css`)

- Define as variáveis de cor (`--color-teal-deep`, `--color-gold`, etc.).
- Define as fontes (`Cinzel` para títulos, `Playfair Display` para corpo).
- Contém animações CSS globais (`fog-flow`, `lightning-flash`) e utilitários de animação (`animate-in`, `fade-in`).

### Lógica Principal (`src/App.tsx`)

- Gerencia o estado de carregamento (`isLoading`).
- Gerencia a navegação entre seções (`home`, `gregos`, `romanos`, `monstros`).
- Contém os dados mockados (Deuses, Habilidades) para exibição.

## Comandos de Desenvolvimento

- **Instalar dependências**: `npm install`
- **Rodar servidor de desenvolvimento**: `npm run dev`
- **Build de produção**: `npm run build`

## Notas de Design

- **Tipografia**: Cinzel (Google Fonts) é usada para todos os títulos para dar o ar "épico".
- **Animações**: GSAP é usado para rotações contínuas e sequências complexas (Loading). CSS puro é preferido para hovers e loops simples (névoa).
- **Responsividade**: O layout Triptych colapsa para uma coluna única em mobile, com navegação inferior fixa.
