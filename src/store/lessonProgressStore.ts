import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface LessonProgressState {
  completedLessons: string[];
  markCompleted: (lessonId: string) => void;
}

export const useLessonProgressStore = create<LessonProgressState>()(
  persist(
    (set) => ({
      completedLessons: ['es-u1-l1', 'es-u1-l2'],
      markCompleted: (lessonId) =>
        set((state) => ({
          completedLessons: state.completedLessons.includes(lessonId)
            ? state.completedLessons
            : [...state.completedLessons, lessonId],
        })),
    }),
    {
      name: 'lesson-progress',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
