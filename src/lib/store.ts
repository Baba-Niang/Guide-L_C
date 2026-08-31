"use client";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { ColorThemeId } from "./themes";
import { TOTAL_CHAPTERS } from "./curriculum-types";

export type ViewType = "home" | "chapter" | "progress" | "favorites";
export type LevelId = "comprendre" | "lire" | "faire";

export interface ChapterProgress {
  visited: boolean;
  /** which levels have been completed (quiz answered correctly, etc.) */
  levelDone: Record<LevelId, boolean>;
  /** chapter considered completed only when all 3 levels are done */
}

interface GuideState {
  view: ViewType;
  currentChapter: number;
  currentLevel: LevelId;
  colorTheme: ColorThemeId;
  darkMode: boolean;
  sidebarOpen: boolean;
  searchOpen: boolean;
  searchQuery: string;
  progress: Record<number, ChapterProgress>;
  favorites: number[];
  /** quiz answers: key = `${chapterId}-${levelId}-${blockIndex}` -> chosen option index */
  quizAnswers: Record<string, number>;
  /** challenge answers: key = `${chapterId}-${levelId}-${blockIndex}` -> user input */
  challengeAnswers: Record<string, string>;

  setView: (v: ViewType) => void;
  setChapter: (n: number) => void;
  setLevel: (l: LevelId) => void;
  setColorTheme: (t: ColorThemeId) => void;
  toggleDarkMode: () => void;
  toggleSidebar: () => void;
  setSidebarOpen: (b: boolean) => void;
  setSearchOpen: (b: boolean) => void;
  setSearchQuery: (q: string) => void;

  markVisited: (n: number) => void;
  markLevelDone: (n: number, l: LevelId) => void;
  isLevelDone: (n: number, l: LevelId) => boolean;
  isChapterDone: (n: number) => boolean;
  getGlobalProgress: () => number;

  toggleFavorite: (n: number) => void;
  isFavorite: (n: number) => boolean;

  setQuizAnswer: (key: string, idx: number) => void;
  getQuizAnswer: (key: string) => number | undefined;
  setChallengeAnswer: (key: string, val: string) => void;
  getChallengeAnswer: (key: string) => string | undefined;

  nextChapter: () => void;
  prevChapter: () => void;
}

const emptyLevel = (): ChapterProgress => ({
  visited: false,
  levelDone: { comprendre: false, lire: false, faire: false },
});

export const useGuideStore = create<GuideState>()(
  persist(
    (set, get) => ({
      view: "home",
      currentChapter: 1,
      currentLevel: "comprendre",
      colorTheme: "green",
      darkMode: false,
      sidebarOpen: false,
      searchOpen: false,
      searchQuery: "",
      progress: {},
      favorites: [],
      quizAnswers: {},
      challengeAnswers: {},

      setView: (v) => set({ view: v }),
      setChapter: (n) =>
        set((s) => ({
          currentChapter: n,
          view: "chapter",
          // if user has already progressed past 'comprendre', keep their level; else start at comprendre
          currentLevel:
            s.progress[n]?.levelDone?.comprendre
              ? s.progress[n]?.levelDone?.lire
                ? "faire"
                : "lire"
              : "comprendre",
        })),
      setLevel: (l) => set({ currentLevel: l }),
      setColorTheme: (t) => set({ colorTheme: t }),
      toggleDarkMode: () => set((s) => ({ darkMode: !s.darkMode })),
      toggleSidebar: () => set((s) => ({ sidebarOpen: !s.sidebarOpen })),
      setSidebarOpen: (b) => set({ sidebarOpen: b }),
      setSearchOpen: (b) => set({ searchOpen: b }),
      setSearchQuery: (q) => set({ searchQuery: q }),

      markVisited: (n) =>
        set((s) => ({
          progress: {
            ...s.progress,
            [n]: {
              ...(s.progress[n] || emptyLevel()),
              visited: true,
            },
          },
        })),

      markLevelDone: (n, l) =>
        set((s) => {
          const prev = s.progress[n] || emptyLevel();
          return {
            progress: {
              ...s.progress,
              [n]: {
                ...prev,
                visited: true,
                levelDone: { ...prev.levelDone, [l]: true },
              },
            },
          };
        }),
      isLevelDone: (n, l) => {
        const p = get().progress[n];
        return p?.levelDone?.[l] === true;
      },
      isChapterDone: (n) => {
        const p = get().progress[n];
        if (!p) return false;
        return p.levelDone.comprendre && p.levelDone.lire && p.levelDone.faire;
      },
      getGlobalProgress: () => {
        const { progress } = get();
        const done = Object.values(progress).filter(
          (p) => p.levelDone.comprendre && p.levelDone.lire && p.levelDone.faire
        ).length;
        return Math.round((done / TOTAL_CHAPTERS) * 100);
      },

      toggleFavorite: (n) =>
        set((s) => ({
          favorites: s.favorites.includes(n)
            ? s.favorites.filter((f) => f !== n)
            : [...s.favorites, n],
        })),
      isFavorite: (n) => get().favorites.includes(n),

      setQuizAnswer: (key, idx) =>
        set((s) => ({ quizAnswers: { ...s.quizAnswers, [key]: idx } })),
      getQuizAnswer: (key) => get().quizAnswers[key],
      setChallengeAnswer: (key, val) =>
        set((s) => ({ challengeAnswers: { ...s.challengeAnswers, [key]: val } })),
      getChallengeAnswer: (key) => get().challengeAnswers[key],

      nextChapter: () => {
        const c = get().currentChapter;
        if (c < TOTAL_CHAPTERS) get().setChapter(c + 1);
      },
      prevChapter: () => {
        const c = get().currentChapter;
        if (c > 1) get().setChapter(c - 1);
      },
    }),
    { name: "c-guide-v4" }
  )
);
