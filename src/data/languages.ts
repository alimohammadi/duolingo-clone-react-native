import { Language } from '@/types/learning';

export const languages: Language[] = [
  {
    code: 'es',
    name: 'Spanish',
    nativeName: 'Español',
    flag: 'https://flagcdn.com/w320/es.png',
    description: 'The second most spoken language in the world.',
  },
  {
    code: 'fr',
    name: 'French',
    nativeName: 'Français',
    flag: 'https://flagcdn.com/w320/fr.png',
    description: 'The language of love, cuisine, and diplomacy.',
  },
  {
    code: 'de',
    name: 'German',
    nativeName: 'Deutsch',
    flag: 'https://flagcdn.com/w320/de.png',
    description: 'A precise and expressive European language.',
  },
  {
    code: 'ja',
    name: 'Japanese',
    nativeName: '日本語',
    flag: 'https://flagcdn.com/w320/jp.png',
    description: 'A beautiful language with three unique writing systems.',
  },
  {
    code: 'pt',
    name: 'Portuguese',
    nativeName: 'Português',
    flag: 'https://flagcdn.com/w320/br.png',
    description: 'Spoken across Brazil, Portugal, and beyond.',
  },
];

export const getLanguageByCode = (code: string) =>
  languages.find((l) => l.code === code);
