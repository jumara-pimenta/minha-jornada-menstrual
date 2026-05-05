export const CHAPTERS = [
  // ─── CAPÍTULO 1 ───────────────────────────────────────────────────────────
  {
    id: "ch1_scene",
    type: "story",
    illustration: "🏫",
    title: "Capítulo 1 — O Primeiro Sinal",
    text: "Você está na escola e percebe sangue na sua roupa íntima. O coração acelera. O que você faz?",
    choices: [
      {
        label: "😨 Entrar em pânico",
        emotion: -1,
        body: 0,
        next: "ch1_nina_a",
      },
      {
        label: "🤔 Tentar entender",
        emotion: 1,
        body: 0,
        next: "ch1_nina_b",
      },
      {
        label: "🗣️ Pedir ajuda",
        emotion: 2,
        body: 0,
        next: "ch1_nina_c",
      },
    ],
  },
  {
    id: "ch1_nina_a",
    type: "nina",
    text: "Ei, eu sei que pode assustar 💛 mas tá tudo bem. Isso pode ser sua primeira menstruação. Você não está sozinha!",
    next: "ch1_quiz",
  },
  {
    id: "ch1_nina_b",
    type: "nina",
    text: "Boa! Buscar entender é um ótimo começo 💛 Vamos aprender juntas o que está acontecendo.",
    next: "ch1_quiz",
  },
  {
    id: "ch1_nina_c",
    type: "nina",
    text: "Pode ser a sua primeira menstruação e pedir ajuda é muito importante 💛 Você não precisa passar por isso sozinha. Que corajosa!",
    next: "ch1_quiz",
  },
  {
    id: "ch1_quiz",
    type: "quiz",
    title: "Mini Quiz 🧠",
    question: "O que é menstruação?",
    options: [
      {
        label: "❌ Algo errado com o corpo",
        correct: false,
        feedback: "Na verdade, é um processo completamente natural 💛 Não tem nada de errado!",
      },
      {
        label: "✅ Um processo natural do corpo",
        correct: true,
        feedback: "Isso mesmo! 👏 A menstruação é um sinal de que seu corpo está saudável e funcionando.",
      },
      {
        label: "🤷 Não sei",
        correct: false,
        feedback: "Tá tudo bem não saber, você vai aprender agora 💛 A menstruação é um processo natural!",
        neutral: true,
      },
    ],
    next: "ch2_scene",
  },

  // ─── CAPÍTULO 2 ───────────────────────────────────────────────────────────
  {
    id: "ch2_scene",
    type: "story",
    illustration: "🎒",
    title: "Capítulo 2 — E Agora?",
    text: "Você ainda está na escola e precisa lidar com isso agora. O que você decide fazer?",
    choices: [
      {
        label: "😶 Ignorar e continuar",
        emotion: 0,
        body: -1,
        next: "ch2_nina_a",
      },
      {
        label: "🧻 Improvisar com papel",
        emotion: 0,
        body: 0,
        next: "ch2_nina_b",
      },
      {
        label: "🛍️ Procurar um absorvente",
        emotion: 0,
        body: 2,
        next: "ch2_nina_c",
      },
    ],
  },
  {
    id: "ch2_nina_a",
    type: "nina",
    text: "Ignorar pode te deixar desconfortável 😕 Sempre que possível, peça ajuda e cuide de você mesma primeiro!",
    next: "ch2_minigame",
  },
  {
    id: "ch2_nina_b",
    type: "nina",
    text: "Pode ajudar por um tempinho, mas não é o ideal e pode até gerar desconforto 😕 Que tal sempre ter um kit de emergência na bolsa? 💛 ",
    next: "ch2_minigame",
  },
  {
    id: "ch2_nina_c",
    type: "nina",
    text: "Boa! Isso vai te deixar muito mais confortável 👏 Você se cuidou bem!",
    next: "ch2_minigame",
  },
  {
    id: "ch2_minigame",
    type: "minigame",
    title: "🎒 Monte seu Kit Menstrual",
    description: "Selecione os itens que você colocaria na sua mochila para estar preparada!",
    items: [
      { id: "absorvente", label: "🩸 Absorvente", correct: true },
      { id: "papel", label: "🧻 Papel higiênico extra", correct: true },
      { id: "calcinha", label: "👙 Calcinha extra", correct: true },
      { id: "chocolate", label: "🍫 Chocolate", correct: false, neutral: true },
      { id: "celular", label: "📱 Celular extra", correct: false },
      { id: "lapis", label: "✏️ Lápis", correct: false },
    ],
    next: "ch3_scene",
  },

  // ─── CAPÍTULO 3 ───────────────────────────────────────────────────────────
  {
    id: "ch3_scene",
    type: "story",
    illustration: "🌸",
    title: "Capítulo 3 — Entendendo o Corpo",
    text: "Nina quer te contar um segredo: seu corpo funciona em ciclos! O que você acha que muda durante o ciclo?",
    choices: [
      {
        label: "🩸 Só o sangue muda",
        emotion: 0,
        body: 0,
        next: "ch3_nina_a",
      },
      {
        label: "💫 Emoções e o corpo",
        emotion: 1,
        body: 0,
        next: "ch3_nina_b",
      },
      {
        label: "🤷 Nada muda",
        emotion: 0,
        body: 0,
        next: "ch3_nina_c",
      },
    ],
  },
  {
    id: "ch3_nina_a",
    type: "nina",
    text: "Não só isso! Também mudam suas emoções, energia, disposição e até como você dorme 💛 O corpo é incrível!",
    next: "ch3_cycle",
  },
  {
    id: "ch3_nina_b",
    type: "nina",
    text: "Isso mesmo! 👏 Seu humor, energia e corpo passam por fases ao longo do mês. Você é muito perspicaz!",
    next: "ch3_cycle",
  },
  {
    id: "ch3_nina_c",
    type: "nina",
    text: "Na verdade, várias coisas mudam 😊 Emoções, energia e o corpo passam por fases. Vamos explorar!",
    next: "ch3_cycle",
  },
  {
    id: "ch3_cycle",
    type: "cycle",
    next: "ch4_scene1",
  },

  // ─── CAPÍTULO 4 ───────────────────────────────────────────────────────────
  {
    id: "ch4_scene1",
    type: "story",
    illustration: "🏃‍♀️",
    title: "Capítulo 4 — Situações Reais",
    subtitle: "Situação 1: Vazamento",
    text: "Durante a aula, você percebe uma mancha na sua roupa. Todo mundo pode ver. O que você faz?",
    choices: [
      {
        label: "🧥 Amarrar o casaco na cintura",
        emotion: 0,
        body: 1,
        next: "ch4_nina1a",
      },
      {
        label: "🤝 Pedir ajuda a alguém",
        emotion: 2,
        body: 0,
        next: "ch4_nina1b",
      },
      {
        label: "😶 Ignorar e torcer",
        emotion: -1,
        body: 0,
        next: "ch4_nina1c",
      },
    ],
  },
  {
    id: "ch4_nina1a",
    type: "nina",
    text: "Boa solução rápida! 💛 Improvisar com o que você tem é sempre uma opção válida. E lembre-se: vazamentos são normais e podem acontecer. Sempre que possível, peça ajuda.",
    next: "ch4_scene2",
  },
  {
    id: "ch4_nina1b",
    type: "nina",
    text: "Muito bem! Pedir ajuda é muito importante 💛 É sempre bom poder contar com alguém nesses momentos!",
    next: "ch4_scene2",
  },
  {
    id: "ch4_nina1c",
    type: "nina",
    text: "Pode te deixar mais ansiosa 😕 Lembre-se: vazamentos são normais e você não precisa resolver tudo sozinha!",
    next: "ch4_scene2",
  },
  {
    id: "ch4_scene2",
    type: "story",
    illustration: "🛋️",
    title: "Situação 2: Cólica",
    text: "Você está em casa e a cólica está forte. O que você faz para se sentir melhor?",
    choices: [
      {
        label: "🛌 Deitar e descansar",
        emotion: 0,
        body: 2,
        next: "ch4_nina2a",
      },
      {
        label: "🔥 Bolsa de água quente",
        emotion: 0,
        body: 2,
        next: "ch4_nina2b",
      },
      {
        label: "😤 Ignorar e forçar",
        emotion: 0,
        body: -1,
        next: "ch4_nina2c",
      },
    ],
  },
  {
    id: "ch4_nina2a",
    type: "nina",
    text: "Descansar é ótimo! 💛 Seu corpo pede uma pausa e tudo bem dar essa pausa a ele.",
    next: "ch4_scene3",
  },
  {
    id: "ch4_nina2b",
    type: "nina",
    text: "Calor ajuda muito a aliviar a cólica! 💛 Uma ótima dica para sempre ter em mente.",
    next: "ch4_scene3",
  },
  {
    id: "ch4_nina2c",
    type: "nina",
    text: "Forçar pode piorar a dor 😕 Cuide de você! Descansar ou uma bolsa de água quente ajudam muito.",
    next: "ch4_scene3",
  },
  {
    id: "ch4_scene3",
    type: "story",
    illustration: "💬",
    title: "Situação 3: Piada na Escola",
    text: "Um colega faz uma piada sobre menstruação na frente de todos. Você fica constrangida. O que você faz?",
    choices: [
      {
        label: "😶 Ficar calada",
        emotion: -1,
        body: 0,
        next: "ch4_nina3a",
      },
      {
        label: "💪 Se posicionar com calma",
        emotion: 2,
        body: 0,
        next: "ch4_nina3b",
      },
      {
        label: "🤝 Pedir apoio a alguém",
        emotion: 2,
        body: 0,
        next: "ch4_nina3c",
      },
    ],
  },
  {
    id: "ch4_nina3a",
    type: "nina",
    text: "Silêncio às vezes dói por dentro 💛 Você tem todo o direito de se expressar quando se sentir pronta. Lembre-se: menstruação não deve ser motivo de piada.",
    next: "ch4_scene4",
  },
  {
    id: "ch4_nina3b",
    type: "nina",
    text: "Você tem direito de falar! 💛 Menstruação é saúde e não tem nada de vergonhoso nisso.",
    next: "ch4_scene4",
  },
  {
    id: "ch4_nina3c",
    type: "nina",
    text: "Pedir apoio é sempre uma escolha corajosa 💛 Você não precisa enfrentar isso sozinha, aliás menstruação não deve ser motivo de piada.",
    next: "ch4_scene4",
  },
  {
    id: "ch4_scene4",
    type: "story",
    illustration: "😰",
    title: "Situação 4: Sem Absorvente",
    text: "Você está fora de casa e sua menstruação veio de surpresa. Você não tem absorvente. O que você faz?",
    choices: [
      {
        label: "🗣️ Pedir ajuda",
        emotion: 2,
        body: 0,
        next: "ch4_nina4a",
      },
      {
        label: "🧻 Improvisar",
        emotion: 0,
        body: 0,
        next: "ch4_nina4b",
      },
      {
        label: "😶 Não fazer nada",
        emotion: 0,
        body: -2,
        next: "ch4_nina4c",
      },
    ],
  },
  {
    id: "ch4_nina4a",
    type: "nina",
    text: "Perfeito! 💛 Pedir ajuda é um sinal de maturidade, não de fraqueza. Toda mulher já passou por isso!",
    next: "ending",
  },
  {
    id: "ch4_nina4b",
    type: "nina",
    text: "Improvisar pode resolver por um tempo 💛 E lembre-se: se possível, sempre tente ter um absorvente na bolsa!",
    next: "ending",
  },
  {
    id: "ch4_nina4c",
    type: "nina",
    text: "Isso pode ser bem desconfortável 😕 Lembra: pedir ajuda ou improvisar são sempre melhores opções!",
    next: "ending",
  },

  // ─── FINAL ────────────────────────────────────────────────────────────────
  {
    id: "ending",
    type: "ending",
  },
];

export const CYCLE_PHASES = [
  {
    id: "menstruation",
    emoji: "🩸",
    name: "Menstruação",
    color: "#e8a0bf",
    description:
      "Sangramento natural causado pela descamação do endométrio e faz parte do ciclo menstrual. É normal sentir um pouco de cólica, cansaço e querer descansar mais.",
    symptoms: ["Cólicas", "Cansaço", "Sensibilidade"],
    tip: "Descanse quando precisar e use bolsa de água quente para aliviar cólicas.",
    choices: [
      { label: "🛌 Descansar", emotion: 0, body: 1, feedback: "Ótimo! Seu corpo agradece o descanso 💛" },
      { label: "😤 Ignorar a dor", emotion: 0, body: -1, feedback: "Cuidar de si é importante! Tente descansar 💛" },
    ],
  },
  {
    id: "follicular",
    emoji: "🌱",
    name: "Pós-Menstruação",
    color: "#b5ead7",
    description:
      "O corpo se recupera e você começa a se sentir com mais energia e disposição para o dia a dia.",
    symptoms: ["Mais energia", "Bom humor", "Disposição"],
    tip: "Aproveite essa fase de energia para atividades que você gosta!",
    choices: [
      { label: "🏃 Voltar às atividades", emotion: 1, body: 0, feedback: "Que energia! Aproveite essa fase 💛" },
      { label: "🏠 Se isolar", emotion: -1, body: 0, feedback: "Tente sair um pouco! Você vai se sentir melhor 💛" },
    ],
  },
  {
    id: "ovulation",
    emoji: "🌼",
    name: "Ovulação",
    color: "#ffd6a5",
    description:
      "Fase ovulatória do ciclo menstrual. Você está no pico de energia! É comum se sentir mais sociável, confiante e com vontade de se comunicar.",
    symptoms: ["Alta energia", "Sociável", "Confiante"],
    tip: "Ótimo momento para trabalhos em grupo e atividades sociais!",
    choices: [
      { label: "👯 Socializar", emotion: 1, body: 0, feedback: "Você brilhou! Aproveite essa energia 💛" },
      { label: "😶 Evitar pessoas", emotion: 0, body: 0, feedback: "Tudo bem também 💛 Cada uma tem seu tempo." },
    ],
  },
  {
    id: "luteal",
    emoji: "🌙",
    name: "Fase Lútea",
    color: "#c9b1ff",
    description:
      "Você pode se sentir um pouco mais cansada, emotiva ou irritada. São mudanças hormonais normais!",
    symptoms: ["Cansaço", "Sensibilidade", "Emoções"],
    tip: "Cuide-se com carinho: chá, música, descanso e conversas com quem você confia.",
    choices: [
      { label: "💆 Cuidar de si", emotion: 1, body: 0, feedback: "Você merece esse cuidado todo! 💛" },
      { label: "😤 Se irritar com tudo", emotion: -1, body: 0, feedback: "Respira! Essas emoções são normais 💛" },
    ],
  },
];

export const ENDINGS = {
  high: {
    emoji: "🌟",
    title: "Confiante e Preparada!",
    subtitle: "Final 1 — Confiante",
    message:
      "Você aprendeu a cuidar de si mesma e a entender seu corpo com carinho e sabedoria 💛 Você está mais do que pronta!",
    color: "#ffd6a5",
  },
  medium: {
    emoji: "🌱",
    title: "Em Aprendizado!",
    subtitle: "Final 2 — Em aprendizado",
    message:
      "Você está no caminho certo! Continue aprendendo, cada dia você fica mais forte 💛 Isso é o que importa.",
    color: "#b5ead7",
  },
  low: {
    emoji: "💛",
    title: "Você Não Está Sozinha!",
    subtitle: "Final 3 — Precisa de apoio",
    message:
      "Tudo bem não saber tudo agora. Você pode aprender aos poucos, no seu ritmo, e sempre há alguém disposta a ajudar 💛",
    color: "#e8a0bf",
  },
};

export const getEnding = (emotion, body) => {
  // Final 1: ambos precisam estar bem (>= 7 emoção E >= 6 corpo)
  if (emotion >= 7 && body >= 6) return ENDINGS.high;
  // Final 3: algum dos dois muito baixo (< 4)
  if (emotion < 4 || body < 4) return ENDINGS.low;
  // Final 2: tudo no meio
  return ENDINGS.medium;
};

export const LEARNED_TOPICS = [
  "O que é menstruação",
  "Como montar seu kit menstrual",
  "As fases do ciclo",
  "Como lidar com situações do dia a dia",
  "A importância de pedir ajuda",
];
