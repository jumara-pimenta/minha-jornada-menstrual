# 🌸 Minha Jornada Menstrual

> Jogo educativo web para ajudar adolescentes a entenderem seu corpo, os sintomas da menstruação e como agir em situações do dia a dia com acolhimento, leveza e representatividade.

---

## 🎯 Objetivo

**Minha Jornada Menstrual** foi criado para apoiar adolescentes que estão vivendo suas primeiras menstruações. Por meio de escolhas, mini-games e diálogos com a guia **Nina**, as jogadoras aprendem sobre:

- O que é menstruação e por que ela acontece
- Como montar um kit menstrual de emergência
- As quatro fases do ciclo menstrual
- Como lidar com situações reais: vazamentos, cólicas, falta de absorvente e preconceito

O jogo não pune — ele acolhe. Cada escolha gera aprendizado, e o final reflete o equilíbrio entre o bem-estar **emocional** e o cuidado com o **corpo**.

---

## 🎮 Como Jogar

1. Escolha sua personagem entre avatares diversos
2. Digite seu nome
3. Tome decisões ao longo de 4 capítulos
4. Explore as fases do ciclo no mapa interativo
5. Descubra seu final: 🌟 Confiante, 🌱 Em aprendizado ou 💛 Precisa de apoio

---

## 🚀 Como Executar o Projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/) v18 ou superior
- npm v9 ou superior

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/jornada-menstrual.git

# Entre na pasta
cd jornada-menstrual

# Instale as dependências
npm install
```

### Executar em desenvolvimento

```bash
npm run dev
```

---

## 🗂️ Estrutura do Projeto

```
src/
├── data/
│   ├── gameData.js       # Roteiro completo: capítulos, escolhas, ciclo e finais
│   └── avatars.js        # Lista de avatares com imagens e cores
├── context/
│   └── GameContext.jsx   # Estado global do jogo (emoção, corpo, progresso)
├── components/
│   ├── StatsBar          # Barra de Emoção e Corpo (topo da tela)
│   ├── NinaDialog        # Balão de fala da guia Nina
│   └── SceneCard         # Card padrão de cena
├── screens/
│   ├── StartScreen       # Tela inicial
│   ├── CharacterScreen   # Seleção de avatar e nome
│   ├── GameScreen        # Tela principal do jogo
│   ├── EndingScreen      # Tela de resultado final
│   └── nodes/
│       ├── StoryNode     # Cenas com escolhas
│       ├── NinaNode      # Falas da Nina
│       ├── QuizNode      # Mini quiz
│       ├── MiniGameNode  # Kit menstrual
│       └── CycleNode     # Mapa interativo do ciclo
public/
└── avatars/              # Imagens dos avatares (Avatar1.png … Avatar18.png)
```

---

## 🛠️ Tecnologias

| Tecnologia | Uso |
|------------|-----|
| [React](https://react.dev/) | Interface e componentes |
| [Vite](https://vitejs.dev/) | Bundler e servidor de desenvolvimento |
| CSS Modules | Estilização por componente |
| [Nunito](https://fonts.google.com/specimen/Nunito) | Tipografia acessível e arredondada |

---

## 🎨 Design

- **Paleta:** rosa claro, lilás, branco
- **Fonte:** Nunito (arredondada, amigável para crianças)
- **Avatares:** 18 personagens com diversidade de tom de pele, tipo de cabelo, acessórios e representação cultural
- **Tom:** acolhedor, sem punições, com linguagem simples e emojis

---

Acesse o jogo aqui: [Jornada Menstrual](https://jornadamenstrual.netlify.app/)

## 👩‍💻 Criadora

Desenvolvido com 💛 por **Jumara Pimenta**

- Linkedin - [Jumara Pimenta](https://www.linkedin.com/in/jumara-souza-pimenta/)
- GitHub - [Jumara Pimenta](https://github.com/jumara-pimenta)

---

## 📄 Licença

Este projeto é de uso educativo. Todos os direitos reservados à criadora.
