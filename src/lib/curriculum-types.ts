// ============================================================
// Pedagogical data model for the C language guide.
//
// Each chapter is structured in 3 levels (UML-style progression):
//   1. "Je comprends"  — intuition & vocabulary (no jargon, no code yet)
//   2. "Je sais lire"  — first code, line-by-line walkthrough, output
//   3. "Je sais faire" — manipulation, errors, challenges, final quiz
//
// Block types follow the UML-inspired pedagogy:
//   Comprendre → Exemple concret → Visualisation → Manipuler
//               → Erreur → Exercice → Quiz
// ============================================================

export type IconName =
  | "Monitor" | "Box" | "Calculator" | "GitBranch" | "Repeat"
  | "Package" | "LayoutGrid" | "ArrowRightLeft" | "Type" | "Layers"
  | "HardDrive" | "FileText" | "FolderTree" | "Recycle" | "Zap"
  | "ShieldCheck";

// ---------- Block types ----------

// ---------- Recipe block ("savoir produire") ----------

export type RecipeTokenRole = "type" | "nom" | "operator" | "value" | "punct" | "keyword";

export interface RecipeToken {
  text: string;
  role: RecipeTokenRole;
}

export interface ProductionBlock {
  kind: "production";
  title: string;
  syntax: string;
  prototype?: string;
  parameters?: { name: string; desc: string }[];
  returns?: string;
  rules?: string[];
  example?: string;
}

export interface RecipeBlock {
  kind: "recipe";
  /** ex: "La formule pour déclarer une variable" */
  title: string;
  /** le patron générique et abstrait, tokenisé pour la couleur */
  formula: RecipeToken[];
  /** une instanciation concrète du patron, même tokenisation */
  example: RecipeToken[];
  /** règles complémentaires : nommage, contraintes, pièges de syntaxe */
  rules?: string[];
}

export interface StoryBlock {
  kind: "story";
  /** short eyebrow / chapter context */
  eyebrow?: string;
  /** narrative steps - revealed progressively */
  steps: { text: string; highlight?: string }[];
}

export interface AnalogyBlock {
  kind: "analogy";
  real: { icon: string; title: string; desc: string };
  code: { icon: string; title: string; desc: string };
  link: string; // the bridging sentence
}

export interface VocabBlock {
  kind: "vocab";
  /** terms that will appear in the upcoming code, defined BEFORE first use */
  terms: { word: string; def: string; example?: string }[];
}

export interface VisualBlock {
  kind: "visual";
  /** one of the built-in diagram types */
  diagram:
    | { type: "memory"; vars: { name: string; type: string; value: string; addr?: string }[] }
    | { type: "array"; name: string; values: string[]; highlightIdx?: number }
    | { type: "pointer"; varName: string; ptrName: string; value: string; addr: string }
    | { type: "string"; text: string }
    | { type: "struct"; name: string; fields: { name: string; type: string }[] }
    | { type: "flowIf" }
    | { type: "flowLoop" }
    | { type: "process"; steps: string[]; title?: string }
    | { type: "function"; name: string; params: string; ret: string }
    | { type: "malloc" }
    | { type: "recursion"; calls: string[] }
    | { type: "pointerFn"; sig: string; target: string }
    | { type: "defense"; levels: { l: string; d: string }[] }
    | { type: "operators3"; groups: { title: string; items: string[] }[] }
    | { type: "modules"; files: { name: string; desc: string }[] }
    | { type: "files3"; steps: { name: string; desc: string }[] }
    | { type: "lifecycle"; stages: { l: string; d: string }[] }
    | { type: "compare2"; a: { t: string; d: string }; b: { t: string; d: string } }
    | { type: "stackVsHeap"; title?: string }
    | { type: "memoryMap"; regions: { name: string; desc: string; tone: "stack" | "heap" | "global" | "code" }[] }
    | { type: "twoZoneCompare"; leftTitle: string; rightTitle: string; rows: { left: string; right: string }[] };
  caption?: string;
}

// Animated step-by-step walkthrough. User clicks "Suivant" to advance
// and the diagram/code evolves on each step.
export interface BuildUpBlock {
  kind: "buildUp";
  /** overall title */
  title?: string;
  /** what's being built up (e.g. "Comment naît un pointeur") */
  intro?: string;
  /** each step adds or transforms the visual */
  steps: BuildUpStep[];
}

export type BuildUpStep =
  | {
      kind: "narration";
      caption: string;
    }
  | {
      kind: "memory";
      caption: string;
      vars: { name: string; type: string; value: string; addr?: string; tone?: "default" | "new" | "highlight" | "muted" }[];
    }
  | {
      kind: "pointer";
      caption: string;
      varName: string;
      ptrName: string;
      value: string;
      addr: string;
      /** show an arrow from ptr to var */
      showArrow?: boolean;
      /** show *ptr = value label */
      showDeref?: boolean;
      /** highlight *ptr write */
      writingValue?: string;
    }
  | {
      kind: "code";
      caption: string;
      code: string;
      /** which lines are highlighted in this step */
      activeLines?: number[];
    }
  | {
      kind: "stack";
      caption: string;
      /** bottom-up stack frames (most recent on top) */
      frames: { label: string; value?: string; tone?: "active" | "resolved" | "pending" }[];
    };

export interface ComparisonTableBlock {
  kind: "comparisonTable";
  title?: string;
  columns: string[];
  rows: { cells: string[]; tone?: "default" | "good" | "bad" | "highlight" }[];
}

export interface FlowStepsBlock {
  kind: "flowSteps";
  title?: string;
  /** numbered steps with description; rendered as connected cards */
  steps: { title: string; desc: string; icon?: string }[];
}

export interface CodeWalkthroughBlock {
  kind: "codeWalk";
  /** the source code - multi-line, properly formatted */
  code: string;
  /** expected program output (shown alongside) */
  output?: string;
  /** line-by-line explanations, indexed by line number (1-based) */
  explanations?: Record<number, string>;
  /** file name shown in code header */
  filename?: string;
}

export interface RevealBlock {
  kind: "reveal";
  label: string;
  hint?: string;
  content: string;
}

export interface ErrorBlock {
  kind: "error";
  title: string;
  bad: string;
  good: string;
  explanation: string;
}

export interface ChallengeBlock {
  kind: "challenge";
  /** predict output | fillBlank | orderLines | findBug */
  variant: "predict" | "fill" | "findBug";
  prompt: string;
  /** for predict/fill: the accepted answers (any match) */
  accept?: string[];
  /** for findBug: the line(s) that are wrong (1-based) */
  badLines?: number[];
  code?: string;
  hint?: string;
  /** feedback shown after attempt */
  feedback?: string;
}

export interface QuizBlock {
  kind: "quiz";
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface RecapBlock {
  kind: "recap";
  title: string;
  bullets: { icon?: string; text: string }[];
}

export interface TextBlock {
  kind: "text";
  /** markdown-ish paragraphs */
  paragraphs: string[];
}

export type PedBlock =
  | StoryBlock
  | AnalogyBlock
  | VocabBlock
  | VisualBlock
  | BuildUpBlock
  | ComparisonTableBlock
  | FlowStepsBlock
  | CodeWalkthroughBlock
  | RevealBlock
  | ErrorBlock
  | ChallengeBlock
  | QuizBlock
  | RecapBlock
  | TextBlock
  | RecipeBlock
  | ProductionBlock;

export interface ChapterLevel {
  id: "comprendre" | "lire" | "faire";
  title: string;
  subtitle: string;
  blocks: PedBlock[];
}

export interface Chapter {
  id: number;
  title: string;
  subtitle: string;
  icon: IconName;
  /** short title for sidebar */
  shortTitle: string;
  /** keywords for search */
  keywords: string[];
  /** one-sentence goal shown in hero */
  goal: string;
  /** estimated reading time, minutes */
  minutes: number;
  levels: ChapterLevel[];
}

// helper for shorter chapter definitions
export const lvl = (
  id: ChapterLevel["id"],
  title: string,
  subtitle: string,
  blocks: PedBlock[]
): ChapterLevel => ({ id, title, subtitle, blocks });

export const TOTAL_CHAPTERS = 16;
