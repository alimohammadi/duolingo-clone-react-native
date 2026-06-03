export type LanguageCode = 'es' | 'fr' | 'de' | 'ja' | 'pt';

export interface Language {
  code: LanguageCode;
  name: string;
  nativeName: string;
  flag: string;
  description: string;
}

export type ActivityType =
  | 'multiple_choice'
  | 'fill_in_blank'
  | 'match_pairs'
  | 'listen_and_select'
  | 'speak_phrase'
  | 'translate';

export interface VocabItem {
  word: string;
  translation: string;
  phonetic?: string;
  example?: string;
}

export interface PhraseItem {
  phrase: string;
  translation: string;
  phonetic?: string;
}

export interface Activity {
  id: string;
  type: ActivityType;
  question: string;
  options?: string[];
  answer: string;
  hint?: string;
}

export interface Lesson {
  id: string;
  unitId: string;
  order: number;
  title: string;
  description: string;
  xpReward: number;
  vocabulary: VocabItem[];
  phrases: PhraseItem[];
  activities: Activity[];
  // Guides the AI Vision Agent teacher for audio/video lessons
  aiTeacherPrompt: string;
  goal: string;
}

export interface Unit {
  id: string;
  languageCode: LanguageCode;
  order: number;
  title: string;
  description: string;
  color: string;
  lessonIds: string[];
}
