"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search, Sun, Moon, Menu, X, ChevronLeft, ChevronRight, Star,
  BookOpen, Code2, Trophy, Home, Palette, CheckCircle2,
  ArrowRight, Clock, Zap, GraduationCap, StarOff, Terminal,
  BookmarkPlus, Bookmark, Layers, Target, Eye, Sparkles,
  Monitor, Box, Calculator, GitBranch, Repeat, Package, LayoutGrid,
  ArrowRightLeft, Type, HardDrive, FileText, FolderTree, Recycle,
  ShieldCheck, Lightbulb, PlayCircle, ListChecks, HelpCircle,
} from "lucide-react";
import { useGuideStore, type LevelId } from "@/lib/store";
import { chapters, TOTAL_CHAPTERS } from "@/lib/curriculum";
import type { Chapter, PedBlock } from "@/lib/curriculum-types";
import { themes } from "@/lib/themes";
import { VisualRouter } from "@/components/pedagogy/visual-router";
import {
  StoryBlock,
  AnalogyBlock,
  VocabBlock,
  RevealBlock,
  TextBlock,
  ErrorBlock,
  ChallengeBlock,
  QuizBlock,
  RecapBlock,
  CodeWalkthroughBlock,
  BuildUpBlock,
  ComparisonTableBlock,
  FlowStepsBlock,
} from "@/components/pedagogy/blocks";
import { RecipeCard } from "@/components/pedagogy/recipe-block";
import { ProductionGenerator } from "@/components/pedagogy/production-generator";

// ============================================================
// ICON MAP
// ============================================================
const iconMap: Record<string, React.ElementType> = {
  Monitor, Box, Calculator, GitBranch, Repeat, Package, LayoutGrid,
  ArrowRightLeft, Type, Layers, HardDrive, FileText, FolderTree,
  Recycle, Zap, ShieldCheck,
};

const LEVEL_META: Record<LevelId, { num: number; icon: React.ElementType; color: string }> = {
  comprendre: { num: 1, icon: Lightbulb, color: "var(--theme-400)" },
  lire: { num: 2, icon: Eye, color: "var(--theme-500)" },
  faire: { num: 3, icon: Target, color: "var(--theme-600)" },
};

// ============================================================
// BLOCK RENDERER
// ============================================================
function BlockRenderer({
  block,
  chapterId,
  levelId,
  index,
  onQuizSolved,
}: {
  block: PedBlock;
  chapterId: number;
  levelId: LevelId;
  index: number;
  onQuizSolved: () => void;
}) {
  const key = `${chapterId}-${levelId}-${index}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.03, 0.18) }}
    >
      {block.kind === "story" && <StoryBlock eyebrow={block.eyebrow} steps={block.steps} />}
      {block.kind === "analogy" && <AnalogyBlock real={block.real} code={block.code} link={block.link} />}
      {block.kind === "vocab" && <VocabBlock terms={block.terms} />}
      {block.kind === "visual" && (
        <>
          <VisualRouter block={block} />
          {block.caption && (
            <p className="text-sm text-[var(--muted-foreground)] text-center -mt-4 mb-4 italic max-w-xl mx-auto">
              {block.caption}
            </p>
          )}
        </>
      )}
      {block.kind === "codeWalk" && (
        <CodeWalkthroughBlock
          code={block.code}
          output={block.output}
          explanations={block.explanations}
          filename={block.filename}
        />
      )}
      {block.kind === "reveal" && (
        <RevealBlock label={block.label} hint={block.hint} content={block.content} />
      )}
      {block.kind === "error" && (
        <ErrorBlock title={block.title} bad={block.bad} good={block.good} explanation={block.explanation} />
      )}
      {block.kind === "challenge" && (
        <ChallengeBlock
          variant={block.variant}
          prompt={block.prompt}
          accept={block.accept}
          badLines={block.badLines}
          code={block.code}
          hint={block.hint}
          feedback={block.feedback}
          storageKey={key}
        />
      )}
      {block.kind === "quiz" && (
        <QuizBlock
          question={block.question}
          options={block.options}
          correctIndex={block.correctIndex}
          explanation={block.explanation}
          storageKey={key}
          onSolved={onQuizSolved}
        />
      )}
      {block.kind === "recap" && <RecapBlock title={block.title} bullets={block.bullets} />}
      {block.kind === "text" && <TextBlock paragraphs={block.paragraphs} />}
      {block.kind === "buildUp" && (
        <BuildUpBlock title={block.title} intro={block.intro} steps={block.steps} />
      )}
      {block.kind === "comparisonTable" && (
        <ComparisonTableBlock title={block.title} columns={block.columns} rows={block.rows} />
      )}
      {block.kind === "flowSteps" && (
        <FlowStepsBlock title={block.title} steps={block.steps} />
      )}
      {block.kind === "recipe" && (
        <RecipeCard title={block.title} formula={block.formula} example={block.example} rules={block.rules} />
      )}
    </motion.div>
  );
}

// ============================================================
// CHAPTER PAGE
// ============================================================
function ChapterPage({ chapter }: { chapter: Chapter }) {
  const store = useGuideStore();
  const { currentLevel, markVisited, markLevelDone, prevChapter, nextChapter, isFavorite, toggleFavorite, isChapterDone } = store;
  const scrollRef = useRef<HTMLDivElement>(null);
  const ChIcon = iconMap[chapter.icon] || BookOpen;

  useEffect(() => {
    markVisited(chapter.id);
    scrollRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  }, [chapter.id, currentLevel, markVisited]);

  const level = chapter.levels.find((l) => l.id === currentLevel)!;

  const handleQuizSolved = () => {
    markLevelDone(chapter.id, currentLevel);
  };

  const fav = isFavorite(chapter.id);
  const done = isChapterDone(chapter.id);

  return (
    <div ref={scrollRef} className="h-full overflow-y-auto">
      {/* Hero */}
      <section className="chapter-hero text-white">
        <div className="chapter-hero-inner">
          <div className="flex items-center gap-2.5 mb-3 flex-wrap">
            
            <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-white/10 flex items-center gap-1">
              <Clock size={11} /> {chapter.minutes} min
            </span>
            {done && (
              <span className="flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-green-400/20 text-green-100">
                <CheckCircle2 size={12} /> Terminé
              </span>
            )}
          </div>
          <div className="flex items-end justify-between gap-6">
            <div className="min-w-0">
              <h1 className="text-3xl md:text-[2.65rem] font-extrabold leading-[1.12] tracking-tight">
                {chapter.title}
              </h1>
              <p className="text-white/80 text-base md:text-lg max-w-3xl leading-relaxed mt-2">
                {chapter.subtitle}
              </p>
              <p className="text-white/60 text-sm mt-3 italic">
                Objectif : {chapter.goal}
              </p>
            </div>
            <div className="hidden md:flex items-center justify-center w-14 h-14 rounded-2xl bg-white/12 border border-white/15 shrink-0">
              <ChIcon size={28} />
            </div>
          </div>
          <div className="flex items-center gap-3 mt-4">
            <button
              onClick={() => toggleFavorite(chapter.id)}
              className={`flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-lg transition-all ${
                fav
                  ? "bg-yellow-400/20 text-yellow-100"
                  : "bg-white/10 text-white/65 hover:bg-white/20"
              }`}
            >
              {fav ? <Bookmark size={13} /> : <BookmarkPlus size={13} />}
              {fav ? "Favori" : "Ajouter"}
            </button>
          </div>
        </div>
      </section>

      {/* Body */}
      <div className="content-wide mx-auto px-4 md:px-8 py-7">
        <div className="mb-2 mt-4">
          <h2 className="text-xl font-bold mb-1">{level.title}</h2>
          <p className="text-sm text-[var(--muted-foreground)]">{level.subtitle}</p>
        </div>

        {currentLevel === "faire" && <ProductionGenerator />}

        <div className="space-y-5 mt-6">
          {level.blocks.map((b, i) => (
            <BlockRenderer
              key={i}
              block={b}
              chapterId={chapter.id}
              levelId={currentLevel}
              index={i}
              onQuizSolved={handleQuizSolved}
            />
          ))}
        </div>

      </div>

      {/* Bottom navigation : passe entre les 3 niveaux, puis au chapitre suivant */}
      <div className="chapter-foot-nav">
        <button
          onClick={() => {
            if (currentLevel === "faire") store.setLevel("lire");
            else if (currentLevel === "lire") store.setLevel("comprendre");
            else prevChapter();
          }}
          disabled={currentLevel === "comprendre" && chapter.id <= 1}
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all disabled:opacity-25 hover:bg-[var(--muted)]"
        >
          <ChevronLeft size={16} />
          <span className="hidden sm:inline">Précédent</span>
        </button>

        <span
          className="level-progress-badge"
          title={`Chapitre ${chapter.id} sur ${TOTAL_CHAPTERS}`}
        >
          <span>{currentLevel === "comprendre" ? "Je comprends" : currentLevel === "lire" ? "Je sais lire" : "Je sais faire"}</span>
          <span className="level-progress-count">{chapter.id} / {TOTAL_CHAPTERS}</span>
        </span>

        <button
          onClick={() => {
            if (currentLevel === "comprendre") store.setLevel("lire");
            else if (currentLevel === "lire") store.setLevel("faire");
            else nextChapter();
          }}
          disabled={currentLevel === "faire" && chapter.id >= TOTAL_CHAPTERS}
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all disabled:opacity-25 hover:bg-[var(--muted)]"
        >
          <span className="hidden sm:inline">Suivant</span>
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}
