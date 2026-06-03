import { Unit } from '@/types/learning';

export const units: Unit[] = [
  // Spanish units
  {
    id: 'es-unit-1',
    languageCode: 'es',
    order: 1,
    title: 'Basics',
    description: 'Greetings, introductions, and everyday essentials.',
    color: '#58CC02',
    lessonIds: ['es-u1-l1', 'es-u1-l2', 'es-u1-l3'],
  },
  {
    id: 'es-unit-2',
    languageCode: 'es',
    order: 2,
    title: 'Family & People',
    description: 'Talk about family members and describe people.',
    color: '#FF9600',
    lessonIds: ['es-u2-l1', 'es-u2-l2'],
  },

  // French units
  {
    id: 'fr-unit-1',
    languageCode: 'fr',
    order: 1,
    title: 'Bonjour!',
    description: 'Greetings and basic French expressions.',
    color: '#1CB0F6',
    lessonIds: ['fr-u1-l1', 'fr-u1-l2'],
  },
  {
    id: 'fr-unit-2',
    languageCode: 'fr',
    order: 2,
    title: 'Numbers & Colors',
    description: 'Count and describe the world around you.',
    color: '#FF4B4B',
    lessonIds: ['fr-u2-l1', 'fr-u2-l2'],
  },

  // German units
  {
    id: 'de-unit-1',
    languageCode: 'de',
    order: 1,
    title: 'Hallo!',
    description: 'First words and greetings in German.',
    color: '#CE82FF',
    lessonIds: ['de-u1-l1', 'de-u1-l2'],
  },

  // Japanese units
  {
    id: 'ja-unit-1',
    languageCode: 'ja',
    order: 1,
    title: 'はじめまして',
    description: 'Say hello and introduce yourself in Japanese.',
    color: '#FF86D0',
    lessonIds: ['ja-u1-l1', 'ja-u1-l2'],
  },

  // Portuguese units
  {
    id: 'pt-unit-1',
    languageCode: 'pt',
    order: 1,
    title: 'Olá!',
    description: 'Greetings and simple phrases in Portuguese.',
    color: '#00CD9C',
    lessonIds: ['pt-u1-l1', 'pt-u1-l2'],
  },
];

export const getUnitsByLanguage = (languageCode: string) =>
  units.filter((u) => u.languageCode === languageCode).sort((a, b) => a.order - b.order);

export const getUnitById = (id: string) => units.find((u) => u.id === id);
