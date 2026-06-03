import { Lesson } from '@/types/learning';

export const lessons: Lesson[] = [
  // ─── SPANISH · Unit 1 · Lesson 1 ─────────────────────────────────────────
  {
    id: 'es-u1-l1',
    unitId: 'es-unit-1',
    order: 1,
    title: 'Greetings',
    description: 'Learn how to say hello and goodbye in Spanish.',
    xpReward: 10,
    goal: 'Say hello, goodbye, and ask how someone is doing.',
    aiTeacherPrompt:
      'You are a friendly Spanish teacher. Teach the student basic Spanish greetings: hola, adiós, buenos días, buenas noches, ¿cómo estás? Use short, encouraging sentences. Repeat each word clearly and ask the student to repeat after you.',
    vocabulary: [
      { word: 'hola', translation: 'hello', phonetic: 'OH-lah', example: '¡Hola! ¿Cómo estás?' },
      { word: 'adiós', translation: 'goodbye', phonetic: 'ah-DYOHS' },
      { word: 'buenos días', translation: 'good morning', phonetic: 'BWEH-nohs DEE-ahs' },
      { word: 'buenas noches', translation: 'good night', phonetic: 'BWEH-nahs NOH-chehs' },
      { word: 'gracias', translation: 'thank you', phonetic: 'GRAH-syahs' },
      { word: 'por favor', translation: 'please', phonetic: 'por fah-BOR' },
    ],
    phrases: [
      { phrase: '¿Cómo estás?', translation: 'How are you?', phonetic: 'KOH-moh ehs-TAHS' },
      { phrase: 'Estoy bien.', translation: 'I am fine.', phonetic: 'ehs-TOY BYEHN' },
      { phrase: 'Mucho gusto.', translation: 'Nice to meet you.', phonetic: 'MOO-choh GOOS-toh' },
    ],
    activities: [
      {
        id: 'es-u1-l1-a1',
        type: 'multiple_choice',
        question: 'What does "hola" mean?',
        options: ['goodbye', 'hello', 'thank you', 'please'],
        answer: 'hello',
      },
      {
        id: 'es-u1-l1-a2',
        type: 'translate',
        question: 'Translate: "good morning"',
        answer: 'buenos días',
        hint: 'Think about the time of day.',
      },
      {
        id: 'es-u1-l1-a3',
        type: 'fill_in_blank',
        question: '¿Cómo ___?',
        options: ['estás', 'hola', 'gracias', 'adiós'],
        answer: 'estás',
      },
      {
        id: 'es-u1-l1-a4',
        type: 'multiple_choice',
        question: 'How do you say "thank you" in Spanish?',
        options: ['por favor', 'adiós', 'gracias', 'hola'],
        answer: 'gracias',
      },
    ],
  },

  // ─── SPANISH · Unit 1 · Lesson 2 ─────────────────────────────────────────
  {
    id: 'es-u1-l2',
    unitId: 'es-unit-1',
    order: 2,
    title: 'Introductions',
    description: "Introduce yourself and ask someone's name.",
    xpReward: 10,
    goal: "State your name, ask someone's name, and say where you are from.",
    aiTeacherPrompt:
      'You are a warm Spanish teacher. Teach the student to introduce themselves: me llamo, ¿cómo te llamas?, soy de. Use simple conversational examples and encourage the student to personalize with their own name and country.',
    vocabulary: [
      { word: 'nombre', translation: 'name', phonetic: 'NOHM-breh' },
      { word: 'yo', translation: 'I / me', phonetic: 'yoh' },
      { word: 'tú', translation: 'you', phonetic: 'too' },
      { word: 'soy', translation: 'I am', phonetic: 'soy' },
      { word: 'de', translation: 'from', phonetic: 'deh' },
    ],
    phrases: [
      { phrase: 'Me llamo Ana.', translation: 'My name is Ana.', phonetic: 'meh YAH-moh AH-nah' },
      { phrase: '¿Cómo te llamas?', translation: 'What is your name?', phonetic: 'KOH-moh teh YAH-mahs' },
      { phrase: 'Soy de México.', translation: 'I am from Mexico.', phonetic: 'soy deh MEH-hee-koh' },
    ],
    activities: [
      {
        id: 'es-u1-l2-a1',
        type: 'multiple_choice',
        question: 'How do you say "My name is" in Spanish?',
        options: ['Soy de', 'Me llamo', '¿Cómo te llamas?', 'Mucho gusto'],
        answer: 'Me llamo',
      },
      {
        id: 'es-u1-l2-a2',
        type: 'translate',
        question: 'Translate: "What is your name?"',
        answer: '¿Cómo te llamas?',
      },
      {
        id: 'es-u1-l2-a3',
        type: 'fill_in_blank',
        question: 'Soy ___ España.',
        options: ['de', 'en', 'a', 'con'],
        answer: 'de',
      },
    ],
  },

  // ─── SPANISH · Unit 1 · Lesson 3 ─────────────────────────────────────────
  {
    id: 'es-u1-l3',
    unitId: 'es-unit-1',
    order: 3,
    title: 'Numbers 1–10',
    description: 'Count from one to ten in Spanish.',
    xpReward: 15,
    goal: 'Count from 1 to 10 and use numbers in simple sentences.',
    aiTeacherPrompt:
      'You are an enthusiastic Spanish teacher. Teach numbers uno through diez in a fun, rhythmic way. Count objects together, ask simple questions like "¿Cuántos hay?" (How many are there?), and celebrate each correct answer.',
    vocabulary: [
      { word: 'uno', translation: 'one' },
      { word: 'dos', translation: 'two' },
      { word: 'tres', translation: 'three' },
      { word: 'cuatro', translation: 'four' },
      { word: 'cinco', translation: 'five' },
      { word: 'seis', translation: 'six' },
      { word: 'siete', translation: 'seven' },
      { word: 'ocho', translation: 'eight' },
      { word: 'nueve', translation: 'nine' },
      { word: 'diez', translation: 'ten' },
    ],
    phrases: [
      { phrase: 'Tengo tres gatos.', translation: 'I have three cats.' },
      { phrase: '¿Cuántos hay?', translation: 'How many are there?' },
    ],
    activities: [
      {
        id: 'es-u1-l3-a1',
        type: 'multiple_choice',
        question: 'What is "cinco" in English?',
        options: ['three', 'four', 'five', 'six'],
        answer: 'five',
      },
      {
        id: 'es-u1-l3-a2',
        type: 'translate',
        question: 'Translate: "eight"',
        answer: 'ocho',
      },
      {
        id: 'es-u1-l3-a3',
        type: 'multiple_choice',
        question: 'Which number comes after "seis"?',
        options: ['cinco', 'cuatro', 'siete', 'ocho'],
        answer: 'siete',
      },
    ],
  },

  // ─── SPANISH · Unit 2 · Lesson 1 ─────────────────────────────────────────
  {
    id: 'es-u2-l1',
    unitId: 'es-unit-2',
    order: 1,
    title: 'Family Members',
    description: 'Learn words for family members in Spanish.',
    xpReward: 10,
    goal: 'Name immediate family members and describe a simple family.',
    aiTeacherPrompt:
      'You are a caring Spanish teacher. Teach family vocabulary: madre, padre, hermano, hermana, abuelo, abuela. Use a simple family tree as a visual aid. Ask the student to describe their own family using these words.',
    vocabulary: [
      { word: 'madre', translation: 'mother', phonetic: 'MAH-dreh' },
      { word: 'padre', translation: 'father', phonetic: 'PAH-dreh' },
      { word: 'hermano', translation: 'brother', phonetic: 'ehr-MAH-noh' },
      { word: 'hermana', translation: 'sister', phonetic: 'ehr-MAH-nah' },
      { word: 'abuelo', translation: 'grandfather', phonetic: 'ah-BWEH-loh' },
      { word: 'abuela', translation: 'grandmother', phonetic: 'ah-BWEH-lah' },
    ],
    phrases: [
      { phrase: 'Mi madre se llama Rosa.', translation: "My mother's name is Rosa." },
      { phrase: 'Tengo dos hermanos.', translation: 'I have two brothers.' },
    ],
    activities: [
      {
        id: 'es-u2-l1-a1',
        type: 'multiple_choice',
        question: 'What does "hermana" mean?',
        options: ['mother', 'grandmother', 'sister', 'aunt'],
        answer: 'sister',
      },
      {
        id: 'es-u2-l1-a2',
        type: 'translate',
        question: 'Translate: "grandfather"',
        answer: 'abuelo',
      },
    ],
  },

  // ─── SPANISH · Unit 2 · Lesson 2 ─────────────────────────────────────────
  {
    id: 'es-u2-l2',
    unitId: 'es-unit-2',
    order: 2,
    title: 'Describing People',
    description: "Use adjectives to describe people's appearance.",
    xpReward: 15,
    goal: "Describe a person's hair, eyes, and basic traits in Spanish.",
    aiTeacherPrompt:
      'You are an expressive Spanish teacher. Teach descriptive adjectives: alto, bajo, joven, viejo, pelo rubio, ojos azules. Show how adjectives agree with gender. Ask the student to describe a family member or friend.',
    vocabulary: [
      { word: 'alto / alta', translation: 'tall' },
      { word: 'bajo / baja', translation: 'short' },
      { word: 'joven', translation: 'young' },
      { word: 'viejo / vieja', translation: 'old' },
      { word: 'rubio / rubia', translation: 'blonde' },
      { word: 'moreno / morena', translation: 'dark-haired' },
    ],
    phrases: [
      { phrase: 'Mi padre es alto.', translation: 'My father is tall.' },
      { phrase: 'Ella tiene pelo rubio.', translation: 'She has blonde hair.' },
    ],
    activities: [
      {
        id: 'es-u2-l2-a1',
        type: 'multiple_choice',
        question: 'What does "alto" mean?',
        options: ['short', 'old', 'tall', 'young'],
        answer: 'tall',
      },
      {
        id: 'es-u2-l2-a2',
        type: 'fill_in_blank',
        question: 'Mi hermana es ___. (young)',
        options: ['joven', 'vieja', 'alta', 'rubia'],
        answer: 'joven',
      },
    ],
  },

  // ─── FRENCH · Unit 1 · Lesson 1 ──────────────────────────────────────────
  {
    id: 'fr-u1-l1',
    unitId: 'fr-unit-1',
    order: 1,
    title: 'Bonjour!',
    description: 'Master the most essential French greetings.',
    xpReward: 10,
    goal: 'Greet people at different times of day and say goodbye politely.',
    aiTeacherPrompt:
      'You are a charming French teacher. Teach greetings: bonjour, bonsoir, bonne nuit, au revoir, salut. Emphasize nasal sounds and the importance of politeness in French culture. Encourage the student to practice each greeting aloud.',
    vocabulary: [
      { word: 'bonjour', translation: 'hello / good morning', phonetic: 'bon-ZHOOR' },
      { word: 'bonsoir', translation: 'good evening', phonetic: 'bon-SWAHR' },
      { word: 'bonne nuit', translation: 'good night', phonetic: 'bun NWEE' },
      { word: 'au revoir', translation: 'goodbye', phonetic: 'oh ruh-VWAHR' },
      { word: 'salut', translation: 'hi / bye (informal)', phonetic: 'sah-LUE' },
      { word: 'merci', translation: 'thank you', phonetic: 'mehr-SEE' },
    ],
    phrases: [
      { phrase: 'Comment allez-vous?', translation: 'How are you? (formal)', phonetic: 'koh-mahn tah-lay VOO' },
      { phrase: 'Très bien, merci.', translation: 'Very well, thank you.', phonetic: 'treh byahn, mehr-SEE' },
    ],
    activities: [
      {
        id: 'fr-u1-l1-a1',
        type: 'multiple_choice',
        question: 'What does "bonjour" mean?',
        options: ['goodbye', 'good night', 'hello', 'thank you'],
        answer: 'hello',
      },
      {
        id: 'fr-u1-l1-a2',
        type: 'translate',
        question: 'Translate: "good evening"',
        answer: 'bonsoir',
      },
    ],
  },

  // ─── FRENCH · Unit 1 · Lesson 2 ──────────────────────────────────────────
  {
    id: 'fr-u1-l2',
    unitId: 'fr-unit-1',
    order: 2,
    title: 'Introductions',
    description: 'Introduce yourself in French.',
    xpReward: 10,
    goal: 'State your name, nationality, and ask about others in French.',
    aiTeacherPrompt:
      "You are a patient French teacher. Teach: je m'appelle, quel est votre nom, je suis de. Note that French has formal and informal registers—teach both tu and vous. Ask the student to introduce themselves using complete sentences.",
    vocabulary: [
      { word: 'je', translation: 'I', phonetic: 'zhuh' },
      { word: 'vous', translation: 'you (formal)', phonetic: 'voo' },
      { word: 'tu', translation: 'you (informal)', phonetic: 'tue' },
      { word: 'nom', translation: 'name', phonetic: 'nohn' },
      { word: 'de', translation: 'from', phonetic: 'duh' },
    ],
    phrases: [
      { phrase: "Je m'appelle Léa.", translation: 'My name is Léa.' },
      { phrase: 'Quel est votre nom?', translation: 'What is your name? (formal)' },
      { phrase: 'Je suis de Paris.', translation: 'I am from Paris.' },
    ],
    activities: [
      {
        id: 'fr-u1-l2-a1',
        type: 'multiple_choice',
        question: 'How do you say "My name is" in French?',
        options: ['Je suis', "Je m'appelle", 'Quel est', 'Bonjour'],
        answer: "Je m'appelle",
      },
      {
        id: 'fr-u1-l2-a2',
        type: 'translate',
        question: 'Translate: "I am from Paris."',
        answer: 'Je suis de Paris.',
      },
    ],
  },

  // ─── FRENCH · Unit 2 · Lesson 1 ──────────────────────────────────────────
  {
    id: 'fr-u2-l1',
    unitId: 'fr-unit-2',
    order: 1,
    title: 'Numbers 1–10',
    description: 'Count to ten in French.',
    xpReward: 10,
    goal: 'Count from 1 to 10 and recognize French numbers in context.',
    aiTeacherPrompt:
      'You are an upbeat French teacher. Teach un through dix with rhythm and repetition. Count everyday objects together and ask simple questions like "Combien?" (How many?) to reinforce the lesson.',
    vocabulary: [
      { word: 'un', translation: 'one' },
      { word: 'deux', translation: 'two' },
      { word: 'trois', translation: 'three' },
      { word: 'quatre', translation: 'four' },
      { word: 'cinq', translation: 'five' },
      { word: 'six', translation: 'six' },
      { word: 'sept', translation: 'seven' },
      { word: 'huit', translation: 'eight' },
      { word: 'neuf', translation: 'nine' },
      { word: 'dix', translation: 'ten' },
    ],
    phrases: [
      { phrase: "J'ai deux chats.", translation: 'I have two cats.' },
      { phrase: 'Combien?', translation: 'How many?' },
    ],
    activities: [
      {
        id: 'fr-u2-l1-a1',
        type: 'multiple_choice',
        question: 'What is "sept" in English?',
        options: ['six', 'seven', 'eight', 'nine'],
        answer: 'seven',
      },
      {
        id: 'fr-u2-l1-a2',
        type: 'translate',
        question: 'Translate: "ten"',
        answer: 'dix',
      },
    ],
  },

  // ─── FRENCH · Unit 2 · Lesson 2 ──────────────────────────────────────────
  {
    id: 'fr-u2-l2',
    unitId: 'fr-unit-2',
    order: 2,
    title: 'Colors',
    description: 'Learn color words in French.',
    xpReward: 15,
    goal: 'Name common colors and use them to describe objects.',
    aiTeacherPrompt:
      'You are a creative French teacher. Teach colors: rouge, bleu, vert, jaune, blanc, noir. Highlight that French adjectives must agree in gender and number with the noun. Ask the student to describe objects around them.',
    vocabulary: [
      { word: 'rouge', translation: 'red' },
      { word: 'bleu / bleue', translation: 'blue' },
      { word: 'vert / verte', translation: 'green' },
      { word: 'jaune', translation: 'yellow' },
      { word: 'blanc / blanche', translation: 'white' },
      { word: 'noir / noire', translation: 'black' },
    ],
    phrases: [
      { phrase: 'Le ciel est bleu.', translation: 'The sky is blue.' },
      { phrase: 'Ma voiture est rouge.', translation: 'My car is red.' },
    ],
    activities: [
      {
        id: 'fr-u2-l2-a1',
        type: 'multiple_choice',
        question: 'What color is "jaune"?',
        options: ['red', 'green', 'yellow', 'blue'],
        answer: 'yellow',
      },
      {
        id: 'fr-u2-l2-a2',
        type: 'translate',
        question: 'Translate: "black"',
        answer: 'noir',
      },
    ],
  },

  // ─── GERMAN · Unit 1 · Lesson 1 ──────────────────────────────────────────
  {
    id: 'de-u1-l1',
    unitId: 'de-unit-1',
    order: 1,
    title: 'Hallo!',
    description: 'Basic German greetings and farewells.',
    xpReward: 10,
    goal: 'Greet people in German and ask how they are.',
    aiTeacherPrompt:
      'You are a friendly German teacher. Teach: Hallo, Guten Morgen, Guten Abend, Auf Wiedersehen, Tschüss. Explain the difference between formal and informal registers. Speak clearly and ask the student to repeat each greeting.',
    vocabulary: [
      { word: 'Hallo', translation: 'hello', phonetic: 'HAH-loh' },
      { word: 'Guten Morgen', translation: 'good morning', phonetic: 'GOO-ten MOR-gen' },
      { word: 'Guten Abend', translation: 'good evening', phonetic: 'GOO-ten AH-bent' },
      { word: 'Auf Wiedersehen', translation: 'goodbye (formal)', phonetic: 'owf VEE-dehr-zay-en' },
      { word: 'Tschüss', translation: 'bye (informal)', phonetic: 'chues' },
      { word: 'Danke', translation: 'thank you', phonetic: 'DAHN-keh' },
    ],
    phrases: [
      { phrase: 'Wie geht es Ihnen?', translation: 'How are you? (formal)', phonetic: 'vee gayt es EE-nen' },
      { phrase: 'Mir geht es gut.', translation: 'I am doing well.' },
    ],
    activities: [
      {
        id: 'de-u1-l1-a1',
        type: 'multiple_choice',
        question: 'What does "Guten Morgen" mean?',
        options: ['good evening', 'good night', 'good morning', 'goodbye'],
        answer: 'good morning',
      },
      {
        id: 'de-u1-l1-a2',
        type: 'translate',
        question: 'Translate: "thank you" in German',
        answer: 'Danke',
      },
    ],
  },

  // ─── GERMAN · Unit 1 · Lesson 2 ──────────────────────────────────────────
  {
    id: 'de-u1-l2',
    unitId: 'de-unit-1',
    order: 2,
    title: 'Introductions',
    description: 'Introduce yourself in German.',
    xpReward: 10,
    goal: 'State your name and where you are from in German.',
    aiTeacherPrompt:
      'You are a structured German teacher. Teach: Ich heiße, Wie heißen Sie?, Ich komme aus. Explain that German capitalizes all nouns. Walk through example introductions and ask the student to create their own.',
    vocabulary: [
      { word: 'ich', translation: 'I', phonetic: 'ikh' },
      { word: 'heiße', translation: 'am called', phonetic: 'HY-seh' },
      { word: 'Name', translation: 'name', phonetic: 'NAH-meh' },
      { word: 'aus', translation: 'from', phonetic: 'owss' },
    ],
    phrases: [
      { phrase: 'Ich heiße Max.', translation: 'My name is Max.' },
      { phrase: 'Wie heißen Sie?', translation: 'What is your name? (formal)' },
      { phrase: 'Ich komme aus Deutschland.', translation: 'I come from Germany.' },
    ],
    activities: [
      {
        id: 'de-u1-l2-a1',
        type: 'multiple_choice',
        question: 'How do you say "My name is" in German?',
        options: ['Ich komme', 'Wie heißen', 'Ich heiße', 'Guten Tag'],
        answer: 'Ich heiße',
      },
      {
        id: 'de-u1-l2-a2',
        type: 'translate',
        question: 'Translate: "I come from Germany."',
        answer: 'Ich komme aus Deutschland.',
      },
    ],
  },

  // ─── JAPANESE · Unit 1 · Lesson 1 ────────────────────────────────────────
  {
    id: 'ja-u1-l1',
    unitId: 'ja-unit-1',
    order: 1,
    title: 'こんにちは',
    description: 'Essential Japanese greetings.',
    xpReward: 10,
    goal: 'Greet people in Japanese at different times of day.',
    aiTeacherPrompt:
      'You are a patient Japanese teacher. Teach: おはようございます (good morning), こんにちは (hello), こんばんは (good evening), さようなら (goodbye), ありがとう (thank you). Introduce the concept of politeness levels. Use romaji alongside hiragana to help beginners.',
    vocabulary: [
      { word: 'おはよう', translation: 'good morning (informal)', phonetic: 'ohayou' },
      { word: 'おはようございます', translation: 'good morning (formal)', phonetic: 'ohayou gozaimasu' },
      { word: 'こんにちは', translation: 'hello', phonetic: 'konnichiwa' },
      { word: 'こんばんは', translation: 'good evening', phonetic: 'konbanwa' },
      { word: 'さようなら', translation: 'goodbye', phonetic: 'sayounara' },
      { word: 'ありがとう', translation: 'thank you', phonetic: 'arigatou' },
    ],
    phrases: [
      { phrase: 'お元気ですか？', translation: 'How are you?', phonetic: 'ogenki desu ka?' },
      { phrase: '元気です。', translation: 'I am fine.', phonetic: 'genki desu.' },
    ],
    activities: [
      {
        id: 'ja-u1-l1-a1',
        type: 'multiple_choice',
        question: 'What does "こんにちは" mean?',
        options: ['good morning', 'goodbye', 'hello', 'good evening'],
        answer: 'hello',
      },
      {
        id: 'ja-u1-l1-a2',
        type: 'translate',
        question: 'Translate: "good evening" in Japanese (romaji)',
        answer: 'konbanwa',
        hint: 'Think about the evening greeting.',
      },
    ],
  },

  // ─── JAPANESE · Unit 1 · Lesson 2 ────────────────────────────────────────
  {
    id: 'ja-u1-l2',
    unitId: 'ja-unit-1',
    order: 2,
    title: 'はじめまして',
    description: 'Introduce yourself for the first time in Japanese.',
    xpReward: 15,
    goal: 'Give a self-introduction and respond to one in Japanese.',
    aiTeacherPrompt:
      'You are a helpful Japanese teacher. Teach the standard self-introduction: はじめまして、〜と申します、よろしくお願いします。Explain that this phrase set is used every time you meet someone new in Japan. Walk through each part slowly.',
    vocabulary: [
      { word: 'はじめまして', translation: 'nice to meet you', phonetic: 'hajimemashite' },
      { word: 'わたし', translation: 'I / me', phonetic: 'watashi' },
      { word: 'なまえ', translation: 'name', phonetic: 'namae' },
      { word: 'です', translation: 'am / is / are', phonetic: 'desu' },
    ],
    phrases: [
      { phrase: 'はじめまして、田中です。', translation: 'Nice to meet you, I am Tanaka.', phonetic: 'hajimemashite, Tanaka desu.' },
      { phrase: 'よろしくお願いします。', translation: 'Please treat me well. / Nice to meet you.', phonetic: 'yoroshiku onegaishimasu.' },
    ],
    activities: [
      {
        id: 'ja-u1-l2-a1',
        type: 'multiple_choice',
        question: 'What does "はじめまして" mean?',
        options: ['goodbye', 'thank you', 'nice to meet you', 'good morning'],
        answer: 'nice to meet you',
      },
      {
        id: 'ja-u1-l2-a2',
        type: 'translate',
        question: 'Translate: "I am" (polite) in Japanese (romaji)',
        answer: 'desu',
      },
    ],
  },

  // ─── PORTUGUESE · Unit 1 · Lesson 1 ──────────────────────────────────────
  {
    id: 'pt-u1-l1',
    unitId: 'pt-unit-1',
    order: 1,
    title: 'Olá!',
    description: 'Basic Portuguese greetings.',
    xpReward: 10,
    goal: 'Say hello, goodbye, and ask how someone is in Portuguese.',
    aiTeacherPrompt:
      'You are a cheerful Portuguese teacher. Teach: olá, bom dia, boa tarde, boa noite, tchau, obrigado/obrigada. Note the gender difference in "thank you." Encourage the student to practice pronunciation of nasal vowels.',
    vocabulary: [
      { word: 'olá', translation: 'hello', phonetic: 'oh-LAH' },
      { word: 'bom dia', translation: 'good morning', phonetic: 'bohn JEE-ah' },
      { word: 'boa tarde', translation: 'good afternoon', phonetic: 'BOH-ah TAR-jeh' },
      { word: 'boa noite', translation: 'good night', phonetic: 'BOH-ah NOY-cheh' },
      { word: 'tchau', translation: 'bye', phonetic: 'chow' },
      { word: 'obrigado / obrigada', translation: 'thank you (m/f)', phonetic: 'oh-bree-GAH-doh/dah' },
    ],
    phrases: [
      { phrase: 'Tudo bem?', translation: 'Everything good?', phonetic: 'TOO-doo beng' },
      { phrase: 'Tudo bem, obrigado!', translation: 'All good, thank you!' },
    ],
    activities: [
      {
        id: 'pt-u1-l1-a1',
        type: 'multiple_choice',
        question: 'What does "bom dia" mean?',
        options: ['good night', 'goodbye', 'good morning', 'hello'],
        answer: 'good morning',
      },
      {
        id: 'pt-u1-l1-a2',
        type: 'translate',
        question: 'Translate: "good night" in Portuguese',
        answer: 'boa noite',
      },
    ],
  },

  // ─── PORTUGUESE · Unit 1 · Lesson 2 ──────────────────────────────────────
  {
    id: 'pt-u1-l2',
    unitId: 'pt-unit-1',
    order: 2,
    title: 'Introductions',
    description: 'Introduce yourself in Portuguese.',
    xpReward: 10,
    goal: 'State your name and where you are from in Portuguese.',
    aiTeacherPrompt:
      'You are a warm Portuguese teacher. Teach: me chamo, como você se chama, sou do Brasil. Explain that Brazilian and European Portuguese differ slightly in pronunciation. Ask the student to practice a full self-introduction.',
    vocabulary: [
      { word: 'eu', translation: 'I', phonetic: 'eh-oo' },
      { word: 'você', translation: 'you', phonetic: 'voh-SAY' },
      { word: 'nome', translation: 'name', phonetic: 'NOH-meh' },
      { word: 'de', translation: 'from', phonetic: 'deh' },
    ],
    phrases: [
      { phrase: 'Me chamo Lucas.', translation: 'My name is Lucas.' },
      { phrase: 'Como você se chama?', translation: 'What is your name?' },
      { phrase: 'Sou do Brasil.', translation: 'I am from Brazil.' },
    ],
    activities: [
      {
        id: 'pt-u1-l2-a1',
        type: 'multiple_choice',
        question: 'How do you say "My name is" in Portuguese?',
        options: ['Sou de', 'Como você', 'Me chamo', 'Olá'],
        answer: 'Me chamo',
      },
      {
        id: 'pt-u1-l2-a2',
        type: 'translate',
        question: 'Translate: "I am from Brazil."',
        answer: 'Sou do Brasil.',
      },
    ],
  },
];

export const getLessonsByUnit = (unitId: string) =>
  lessons.filter((l) => l.unitId === unitId).sort((a, b) => a.order - b.order);

export const getLessonById = (id: string) => lessons.find((l) => l.id === id);
