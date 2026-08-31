import type { Chapter } from "./curriculum-types";
import { chaptersPart1 } from "./curriculum-part1";
import { chaptersPart2 } from "./curriculum-part2";
import { chaptersPart3 } from "./curriculum-part3";
export type { Chapter, ChapterLevel, PedBlock, IconName } from "./curriculum-types";
export { TOTAL_CHAPTERS } from "./curriculum-types";

export const chapters: Chapter[] = [
  ...chaptersPart1,
  ...chaptersPart2,
  ...chaptersPart3,
];

// Sanity: keep ids unique & sequential (dev-only, no-op in production)
if (typeof window !== "undefined" && process.env.NODE_ENV !== "production") {
  chapters.forEach((c, i) => {
    if (c.id !== i + 1) {
      console.warn(`Chapter at index ${i} has id ${c.id}, expected ${i + 1}`);
    }
  });
}
