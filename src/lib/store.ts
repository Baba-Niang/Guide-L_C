'use client';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type ColorTheme = 'green' | 'blue' | 'purple' | 'orange' | 'coral';
export type ViewType = 'home' | 'chapter' | 'progress' | 'favorites' | 'search';

export interface ChapterProgress {
  visited: boolean;
  completed: boolean;
  scrollPercent: number;
}

interface GuideState {
  view: ViewType;
  currentChapter: number;
  colorTheme: ColorTheme;
  darkMode: boolean;
  sidebarOpen: boolean;
  searchQuery: string;
  searchOpen: boolean;
  progress: Record<number, ChapterProgress>;
  favorites: number[];
  quizAnswers: Record<string, string>;
  
  setView: (view: ViewType) => void;
  setChapter: (ch: number) => void;
  setColorTheme: (theme: ColorTheme) => void;
  toggleDarkMode: () => void;
  toggleSidebar: () => void;
  setSidebarOpen: (open: boolean) => void;
  setSearchQuery: (q: string) => void;
  setSearchOpen: (open: boolean) => void;
  markVisited: (ch: number) => void;
  markCompleted: (ch: number) => void;
  toggleFavorite: (ch: number) => void;
  setQuizAnswer: (key: string, answer: string) => void;
  getGlobalProgress: () => number;
  isFavorite: (ch: number) => boolean;
  nextChapter: () => void;
  prevChapter: () => void;
}

export const TOTAL_CHAPTERS = 16;

export const useGuideStore = create<GuideState>()(
  persist(
    (set, get) => ({
      view: 'home',
      currentChapter: 1,
      colorTheme: 'green',
      darkMode: false,
      sidebarOpen: false,
      searchQuery: '',
      searchOpen: false,
      progress: {},
      favorites: [],
      quizAnswers: {},

      setView: (view) => set({ view }),
      setChapter: (ch) => {
        set({ currentChapter: ch, view: 'chapter' });
        get().markVisited(ch);
      },
      setColorTheme: (theme) => set({ colorTheme: theme }),
      toggleDarkMode: () => set((s) => ({ darkMode: !s.darkMode })),
      toggleSidebar: () => set((s) => ({ sidebarOpen: !s.sidebarOpen })),
      setSidebarOpen: (open) => set({ sidebarOpen: open }),
      setSearchQuery: (q) => set({ searchQuery: q }),
      setSearchOpen: (open) => set({ searchOpen: open }),
      markVisited: (ch) =>
        set((s) => ({
          progress: {
            ...s.progress,
            [ch]: { ...s.progress[ch], visited: true, scrollPercent: s.progress[ch]?.scrollPercent || 0 },
          },
        })),
      markCompleted: (ch) =>
        set((s) => ({
          progress: {
            ...s.progress,
            [ch]: { visited: true, completed: true, scrollPercent: 100 },
          },
        })),
      toggleFavorite: (ch) =>
        set((s) => ({
          favorites: s.favorites.includes(ch)
            ? s.favorites.filter((f) => f !== ch)
            : [...s.favorites, ch],
        })),
      setQuizAnswer: (key, answer) =>
        set((s) => ({ quizAnswers: { ...s.quizAnswers, [key]: answer } })),
      getGlobalProgress: () => {
        const { progress } = get();
        const completed = Object.values(progress).filter((p) => p.completed).length;
        return Math.round((completed / TOTAL_CHAPTERS) * 100);
      },
      isFavorite: (ch) => get().favorites.includes(ch),
      nextChapter: () => {
        const { currentChapter } = get();
        if (currentChapter < TOTAL_CHAPTERS) {
          get().setChapter(currentChapter + 1);
        }
      },
      prevChapter: () => {
        const { currentChapter } = get();
        if (currentChapter > 1) {
          get().setChapter(currentChapter - 1);
        }
      },
    }),
    { name: 'c-guide-state' }
  )
);
