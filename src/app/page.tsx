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
// LEVEL TAB
// ============================================================
function LevelTabs({
  chapterId,
  current,
  onChange,
}: {
  chapterId: number;
  current: LevelId;
  onChange: (l: LevelId) => void;
}) {
  const { isLevelDone } = useGuideStore();
  const levels: LevelId[] = ["comprendre", "lire", "faire"];
  const meta: Record<LevelId, { title: string; sub: string }> = {
    comprendre: { title: "Je comprends", sub: "L'idée avant le code" },
    lire: { title: "Je sais lire", sub: "Le code, expliqué" },
    faire: { title: "Je sais faire", sub: "Manipuler et bugs" },
  };

  return (
    <div className="level-tabs sticky top-0 z-20 backdrop-blur-md bg-[var(--background)]/85 py-3 mb-4">
      {levels.map((l) => {
        const m = LEVEL_META[l];
        const Icon = m.icon;
        const done = isLevelDone(chapterId, l);
        const isActive = current === l;
        return (
          <button
            key={l}
            onClick={() => onChange(l)}
            className={`level-tab ${isActive ? "active" : ""} ${done ? "done" : ""}`}
          >
            <span className="lt-num">
              {done ? <CheckCircle2 size={13} /> : m.num}
            </span>
            <span className="hidden sm:flex flex-col items-start leading-tight">
              <span>{meta[l].title}</span>
              <span className="text-[10px] font-normal opacity-70">{meta[l].sub}</span>
            </span>
            <span className="sm:hidden">{meta[l].title}</span>
          </button>
        );
      })}
    </div>
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
        <LevelTabs
          chapterId={chapter.id}
          current={currentLevel}
          onChange={(l) => store.setLevel(l)}
        />

        <div className="mb-2 mt-4">
          <h2 className="text-xl font-bold mb-1">{level.title}</h2>
          <p className="text-sm text-[var(--muted-foreground)]">{level.subtitle}</p>
        </div>

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

        {/* Level completion + next-level CTA */}
        <LevelCompletionCTA
          chapterId={chapter.id}
          levelId={currentLevel}
          onNextLevel={(l) => store.setLevel(l)}
          onNextChapter={nextChapter}
          isLastChapter={chapter.id >= TOTAL_CHAPTERS}
          isChapterDone={done}
        />
      </div>

      {/* Bottom nav */}
      <div className="chapter-foot-nav">
        <button
          onClick={prevChapter}
          disabled={chapter.id <= 1}
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all disabled:opacity-25 hover:bg-[var(--muted)]"
        >
          <ChevronLeft size={16} />
          <span className="hidden sm:inline">Précédent</span>
        </button>
        <span className="text-sm font-semibold tabular-nums opacity-85">
          {chapter.id} / {TOTAL_CHAPTERS}
        </span>
        <button
          onClick={nextChapter}
          disabled={chapter.id >= TOTAL_CHAPTERS}
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all disabled:opacity-25 hover:bg-[var(--muted)]"
        >
          <span className="hidden sm:inline">Suivant</span>
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}

function LevelCompletionCTA({
  chapterId,
  levelId,
  onNextLevel,
  onNextChapter,
  isLastChapter,
  isChapterDone,
}: {
  chapterId: number;
  levelId: LevelId;
  onNextLevel: (l: LevelId) => void;
  onNextChapter: () => void;
  isLastChapter: boolean;
  isChapterDone: boolean;
}) {
  const { isLevelDone } = useGuideStore();
  const done = isLevelDone(chapterId, levelId);
  const levels: LevelId[] = ["comprendre", "lire", "faire"];
  const idx = levels.indexOf(levelId);
  const nextLevel = levels[idx + 1];

  if (!done) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-8 ped-card"
      style={{ background: "linear-gradient(135deg, var(--theme-50), var(--card))", borderColor: "var(--theme-200)" }}
    >
      <div className="flex items-center gap-3 mb-3">
        <CheckCircle2 size={22} className="text-[var(--theme-500)]" />
        <h3 className="text-base font-bold !mt-0">Niveau terminé !</h3>
      </div>
      <p className="text-sm text-[var(--muted-foreground)] mb-4">
        {nextLevel
          ? "Tu maîtrises ce niveau. Passe au suivant pour aller plus loin."
          : isChapterDone
          ? "Bravo ! Tu as terminé ce chapitre. Tu peux passer au suivant."
          : "C'est le dernier niveau de ce chapitre."}
      </p>
      <div className="flex flex-wrap gap-2">
        {nextLevel && (
          <button
            onClick={() => onNextLevel(nextLevel)}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[var(--theme-500)] text-white font-semibold text-sm hover:opacity-90 transition-all"
          >
            Niveau suivant <ArrowRight size={14} />
          </button>
        )}
        {!nextLevel && !isLastChapter && (
          <button
            onClick={onNextChapter}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[var(--theme-500)] text-white font-semibold text-sm hover:opacity-90 transition-all"
          >
            Chapitre suivant <ArrowRight size={14} />
          </button>
        )}
        {isChapterDone && !isLastChapter && (
          <button
            onClick={onNextChapter}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-[var(--theme-300)] text-[var(--theme-700)] dark:text-[var(--theme-200)] font-semibold text-sm hover:bg-[var(--theme-50)] dark:hover:bg-[var(--theme-100)]/10 transition-all"
          >
            Continuer vers le chapitre suivant <ArrowRight size={14} />
          </button>
        )}
      </div>
    </motion.div>
  );
}

// ============================================================
// HOME PAGE
// ============================================================
function HomePage() {
  const { setChapter, progress, getGlobalProgress } = useGuideStore();
  const gp = getGlobalProgress();
  const doneCount = Object.values(progress).filter(
    (p) => p.levelDone?.comprendre && p.levelDone?.lire && p.levelDone?.faire
  ).length;

  return (
    <div className="h-full overflow-y-auto">
      {/* Hero */}
      <div className="home-hero">
        <div className="home-hero-inner">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/12 backdrop-blur-sm text-sm mb-6 border border-white/10">
              <Terminal size={13} /> Par Baba Niang
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-3 tracking-tight">
              Langage C
            </h1>
            <p className="text-2xl md:text-3xl font-light text-white/85 mb-4">
              Apprends de zéro, étape par étape
            </p>
            <p className="text-white/65 max-w-xl mx-auto mb-10 text-base md:text-lg leading-relaxed">
              Une pédagogie progressive inspirée des meilleurs tutoriels :{" "}
              <strong className="text-white/85">je comprends → je sais lire → je sais faire</strong>.
              Schémas animés, code expliqué ligne par ligne, mini-défis et quiz à chaque concept.
            </p>
            <button
              onClick={() => setChapter(1)}
              className="inline-flex items-center gap-2.5 px-9 py-4 bg-white text-[var(--theme-700)] rounded-xl font-bold text-base hover:bg-white/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Commencer le cours <ArrowRight size={18} />
            </button>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-14 max-w-2xl mx-auto">
            {[
              { v: `${TOTAL_CHAPTERS}`, l: "Chapitres", ic: BookOpen },
              { v: "3", l: "Niveaux par chapitre", ic: Layers },
              { v: "100+", l: "Quiz & défis", ic: GraduationCap },
              { v: "0 → Pro", l: "De débutant à autonome", ic: Trophy },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.15 + i * 0.08 }}
                className="home-stat-card"
              >
                <s.ic size={20} className="mx-auto mb-2 opacity-60" />
                <div className="hs-val">{s.v}</div>
                <div className="hs-lbl">{s.l}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Progress */}
      {doneCount > 0 && (
        <div className="content-wide mx-auto px-6 py-8">
          <div className="flex items-center justify-between mb-2.5">
            <h2 className="text-lg font-bold">Ta progression</h2>
            <span className="text-sm font-bold text-[var(--theme-500)] tabular-nums">{gp}%</span>
          </div>
          <div className="progress-track">
            <div className="progress-fill" style={{ width: `${gp}%` }} />
          </div>
          <p className="text-sm text-[var(--muted-foreground)] mt-2.5">
            {doneCount} chapitre{doneCount > 1 ? "s" : ""} terminé{doneCount > 1 ? "s" : ""} sur {TOTAL_CHAPTERS}
          </p>
        </div>
      )}

      {/* How it works */}
      <div className="content-wide mx-auto px-6 py-6">
        <h2 className="text-xl font-bold mb-4">Comment marche ce cours ?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {[
            { icon: Lightbulb, t: "Je comprends", d: "Histoire, analogie, vocabulaire. Aucun jargon non expliqué." },
            { icon: Eye, t: "Je sais lire", d: "Le code, expliqué ligne par ligne, avec la sortie à côté." },
            { icon: Target, t: "Je sais faire", d: "Défis, erreurs à corriger, quiz. On manipule vraiment." },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="ped-card !p-4"
            >
              <div className="w-9 h-9 rounded-lg bg-[var(--theme-100)] dark:bg-[var(--theme-100)]/15 text-[var(--theme-600)] dark:text-[var(--theme-200)] flex items-center justify-center mb-2.5">
                <s.icon size={16} />
              </div>
              <div className="font-bold text-sm">{s.t}</div>
              <div className="text-xs text-[var(--muted-foreground)] mt-1 leading-relaxed">
                {s.d}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Chapters grid */}
      <div className="content-wide mx-auto px-6 pb-14">
        <h2 className="text-xl font-bold mb-4">Sommaire du cours</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {chapters.map((ch, i) => {
            const ChIcon = iconMap[ch.icon] || BookOpen;
            const p = progress[ch.id];
            const isDone = p?.levelDone?.comprendre && p?.levelDone?.lire && p?.levelDone?.faire;
            const started = p?.visited;
            return (
              <motion.button
                key={ch.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: 0.2 + i * 0.02 }}
                onClick={() => setChapter(ch.id)}
                className="home-chapter-card group"
              >
                <div className="hcc-icon">
                  {isDone ? (
                    <CheckCircle2 size={20} className="text-green-500" />
                  ) : (
                    <ChIcon size={20} />
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="hcc-num">
                    CHAPITRE {String(ch.id).padStart(2, "0")}
                    {started && !isDone && (
                      <span className="ml-2 text-[10px] text-[var(--theme-500)]">● En cours</span>
                    )}
                  </div>
                  <div className="hcc-title">{ch.title}</div>
                  <div className="hcc-sub">{ch.subtitle}</div>
                </div>
                <ArrowRight
                  size={16}
                  className="text-[var(--muted-foreground)] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                />
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ============================================================
// PROGRESS PAGE
// ============================================================
function ProgressPage() {
  const { setChapter, progress, getGlobalProgress } = useGuideStore();
  const gp = getGlobalProgress();
  return (
    <div className="h-full overflow-y-auto">
      <div className="px-6 py-10 border-b border-[var(--border)]">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-2xl font-extrabold mb-4">Ma progression</h1>
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <div className="progress-track h-2.5">
                <div className="progress-fill" style={{ width: `${gp}%` }} />
              </div>
            </div>
            <span className="text-3xl font-extrabold text-[var(--theme-500)] tabular-nums">
              {gp}
              <span className="text-lg">%</span>
            </span>
          </div>
          <p className="text-sm text-[var(--muted-foreground)] mt-3">
            {Object.values(progress).filter((p) => p.levelDone?.comprendre && p.levelDone?.lire && p.levelDone?.faire).length} / {TOTAL_CHAPTERS} chapitres terminés
          </p>
        </div>
      </div>
      <div className="flex-1 px-6 py-6">
        <div className="max-w-2xl mx-auto space-y-1.5">
          {chapters.map((ch) => {
            const p = progress[ch.id];
            const isDone = p?.levelDone?.comprendre && p?.levelDone?.lire && p?.levelDone?.faire;
            const levelCount = p ? Object.values(p.levelDone).filter(Boolean).length : 0;
            const ChIcon = iconMap[ch.icon] || BookOpen;
            return (
              <button
                key={ch.id}
                onClick={() => setChapter(ch.id)}
                className="w-full flex items-center gap-3.5 p-3.5 rounded-xl hover:bg-[var(--muted)] transition-all text-left"
              >
                <div className="w-9 h-9 rounded-lg bg-[var(--theme-100)] dark:bg-[var(--theme-100)]/15 text-[var(--theme-600)] dark:text-[var(--theme-200)] flex items-center justify-center flex-shrink-0">
                  <ChIcon size={16} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-sm">{ch.title}</div>
                  <div className="text-xs text-[var(--muted-foreground)] mt-0.5">
                    {ch.subtitle}
                  </div>
                  {p?.visited && (
                    <div className="flex gap-1 mt-1.5">
                      {(["comprendre", "lire", "faire"] as LevelId[]).map((l) => (
                        <div
                          key={l}
                          className={`text-[9px] px-1.5 py-0.5 rounded font-bold uppercase tracking-wider ${
                            p.levelDone?.[l]
                              ? "bg-[var(--theme-100)] text-[var(--theme-700)] dark:bg-[var(--theme-100)]/15 dark:text-[var(--theme-200)]"
                              : "bg-[var(--muted)] text-[var(--muted-foreground)]"
                          }`}
                        >
                          {l === "comprendre" ? "C" : l === "lire" ? "L" : "F"}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <span className="text-xs font-mono text-[var(--muted-foreground)] tabular-nums">
                  {String(ch.id).padStart(2, "0")}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ============================================================
// FAVORITES PAGE
// ============================================================
function FavoritesPage() {
  const { favorites, setChapter } = useGuideStore();
  const favs = chapters.filter((ch) => favorites.includes(ch.id));
  return (
    <div className="h-full overflow-y-auto">
      <div className="px-6 py-10 border-b border-[var(--border)]">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-2xl font-extrabold mb-1">Mes favoris</h1>
          <p className="text-[var(--muted-foreground)]">
            {favs.length} chapitre{favs.length > 1 ? "s" : ""} enregistré{favs.length > 1 ? "s" : ""}
          </p>
        </div>
      </div>
      <div className="flex-1 px-6 py-6">
        <div className="max-w-2xl mx-auto">
          {favs.length === 0 ? (
            <div className="text-center py-20 text-[var(--muted-foreground)]">
              <StarOff size={48} className="mx-auto mb-4 opacity-20" />
              <p className="text-lg font-medium">Aucun favori</p>
              <p className="text-sm mt-1.5">
                Ajoute des chapitres en favoris pour les retrouver facilement.
              </p>
            </div>
          ) : (
            <div className="space-y-2">
              {favs.map((ch) => (
                <button
                  key={ch.id}
                  onClick={() => setChapter(ch.id)}
                  className="w-full flex items-center gap-3.5 p-4 rounded-xl border border-[var(--border)] bg-[var(--card)] hover:shadow-md transition-all text-left"
                >
                  <div className="w-10 h-10 rounded-lg bg-yellow-50 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-300 flex items-center justify-center flex-shrink-0">
                    <Star size={18} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs text-[var(--muted-foreground)] font-mono tabular-nums">
                      {String(ch.id).padStart(2, "0")}
                    </div>
                    <div className="font-semibold">{ch.title}</div>
                    <div className="text-sm text-[var(--muted-foreground)] mt-0.5">
                      {ch.subtitle}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ============================================================
// SEARCH OVERLAY
// ============================================================
function SearchOverlay() {
  const { searchQuery, setSearchQuery, setSearchOpen, setChapter } = useGuideStore();
  const inputRef = useRef<HTMLInputElement>(null);

  const results = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase();
    return chapters
      .filter(
        (ch) =>
          (ch.title + " " + ch.subtitle + " " + ch.keywords.join(" "))
            .toLowerCase()
            .includes(q)
      )
      .slice(0, 8);
  }, [searchQuery]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="search-overlay" onClick={() => setSearchOpen(false)}>
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="search-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 px-5 py-4 border-b border-[var(--border)]">
          <Search size={18} className="text-[var(--muted-foreground)] flex-shrink-0" />
          <input
            ref={inputRef}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Rechercher un chapitre, une notion..."
            className="flex-1 bg-transparent outline-none text-base placeholder:text-[var(--muted-foreground)]"
          />
          <kbd className="hidden sm:inline-flex items-center px-2 py-0.5 rounded text-[11px] border border-[var(--border)] text-[var(--muted-foreground)]">
            ESC
          </kbd>
        </div>
        {results.length > 0 && (
          <div className="max-h-80 overflow-y-auto p-2">
            {results.map((ch) => {
              const ChIcon = iconMap[ch.icon] || BookOpen;
              return (
                <button
                  key={ch.id}
                  onClick={() => {
                    setChapter(ch.id);
                    setSearchOpen(false);
                    setSearchQuery("");
                  }}
                  className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-[var(--muted)] transition-colors text-left"
                >
                  <ChIcon size={16} className="text-[var(--theme-400)] flex-shrink-0" />
                  <div className="min-w-0">
                    <div className="font-semibold text-sm">{ch.title}</div>
                    <div className="text-xs text-[var(--muted-foreground)] truncate">
                      {ch.subtitle}
                    </div>
                  </div>
                  <span className="ml-auto text-xs font-mono text-[var(--muted-foreground)] tabular-nums">
                    Ch {ch.id}
                  </span>
                </button>
              );
            })}
          </div>
        )}
        {searchQuery.trim() && results.length === 0 && (
          <div className="p-8 text-center text-[var(--muted-foreground)] text-sm">
            Aucun résultat pour « {searchQuery} »
          </div>
        )}
        {!searchQuery.trim() && (
          <div className="p-6 text-center text-[var(--muted-foreground)] text-sm">
            Tape un mot-clé pour rechercher (ex: pointeur, boucle, fichier)
          </div>
        )}
      </motion.div>
    </div>
  );
}

// ============================================================
// THEME PICKER
// ============================================================
function ThemePicker() {
  const { colorTheme, setColorTheme } = useGuideStore();
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg hover:bg-white/10 transition-colors text-sm"
        aria-label="Choisir un thème de couleur"
      >
        <Palette size={15} />
        <span className="hidden md:inline">Couleur</span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            className="absolute right-0 top-full mt-2 bg-[var(--card)] border border-[var(--border)] rounded-xl p-3 shadow-xl z-50"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-[10px] font-bold uppercase tracking-widest text-[var(--muted-foreground)] mb-2 px-1">
              Palette
            </div>
            <div className="flex gap-2.5">
              {themes.map((t) => (
                <button
                  key={t.id}
                  onClick={() => {
                    setColorTheme(t.id);
                    setOpen(false);
                  }}
                  className={`theme-dot ${colorTheme === t.id ? "active" : ""}`}
                  style={{ background: t.swatch }}
                  title={t.name}
                  aria-label={t.name}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ============================================================
// MAIN APP
// ============================================================
export default function GuidePage() {
  const store = useGuideStore();
  const {
    view, currentChapter, currentLevel, colorTheme, darkMode, sidebarOpen, searchOpen,
    toggleDarkMode, toggleSidebar, setSidebarOpen, setSearchOpen, setView, setLevel,
    setChapter, progress, getGlobalProgress,
  } = store;
  const chapter = chapters.find((c) => c.id === currentChapter);
  const gp = getGlobalProgress();

  // Apply theme + dark mode
  useEffect(() => {
    document.documentElement.setAttribute("data-color", colorTheme);
    document.documentElement.classList.toggle("dark", darkMode);
  }, [colorTheme, darkMode]);

  // Keyboard shortcuts
  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
      if (e.key === "Escape") setSearchOpen(false);
      if (e.key === "ArrowRight" && view === "chapter" && currentChapter < TOTAL_CHAPTERS) {
        store.nextChapter();
      }
      if (e.key === "ArrowLeft" && view === "chapter" && currentChapter > 1) {
        store.prevChapter();
      }
      // 1/2/3 to switch levels
      if (view === "chapter") {
        if (e.key === "1") setLevel("comprendre");
        if (e.key === "2") setLevel("lire");
        if (e.key === "3") setLevel("faire");
      }
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [view, currentChapter, setSearchOpen, store, setLevel]);

  return (
    <div className="app-shell">
      {/* Topbar — identité + ressources */}
      <header className="app-topbar">
        <div className="topbar-profile">
          <button onClick={() => setView("home")} className="topbar-avatar" aria-label="Accueil">
            <img src="/Guide-L_C/baba-niang.jpg" alt="Baba Niang" />
          </button>
          <div className="topbar-profile-text">
            <div className="topbar-profile-name">Baba Niang</div>
            <div className="topbar-profile-role">Étudiant</div>
          </div>
        </div>

        <div className="topbar-motto" aria-label="Devise">◆ Discipline-Constance-Rigueur ◆</div>

        <nav className="topbar-links" aria-label="Raccourcis Baba Niang">
          <a href="https://baba-niang.github.io/Guide-Git-Github/" target="_blank" rel="noreferrer" className="topbar-link" title="Guide Git & GitHub">
            <img src="https://cdn.simpleicons.org/git/F05032" alt="Git" />
            <span>Git</span>
          </a>
          <a href="https://www.java.com/" target="_blank" rel="noreferrer" className="topbar-link" title="Java">
            <img src="https://cdn.simpleicons.org/openjdk/F89820" alt="Java" />
            <span>Java</span>
          </a>
          <a href="https://baba-niang.github.io/Guide-PHP/" target="_blank" rel="noreferrer" className="topbar-link" title="Guide PHP">
            <img src="https://cdn.simpleicons.org/php/777BB4" alt="PHP" />
            <span>PHP</span>
          </a>
          <a href="https://baba-niang.github.io/Guide-Bootstrap-Bigginers/" target="_blank" rel="noreferrer" className="topbar-link" title="Guide Bootstrap">
            <img src="https://cdn.simpleicons.org/bootstrap/7952B3" alt="Bootstrap" />
            <span>Bootstrap</span>
          </a>
          <a href="https://baba-niang.github.io/Guide-UML-B/" target="_blank" rel="noreferrer" className="topbar-link" title="Guide UML">
            <img src="https://cdn.simpleicons.org/uml/7B4BD3" alt="UML" />
            <span>UML</span>
          </a>
          <span className="topbar-divider" aria-hidden="true" />
          <a href="https://github.com/Baba-Niang" target="_blank" rel="noreferrer" className="topbar-link icon-only" title="GitHub">
            <img src="/Guide-L_C/icons/github.svg" alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/baba-niang-121436383" target="_blank" rel="noreferrer" className="topbar-link icon-only" title="LinkedIn">
            <img src="/Guide-L_C/icons/linkedin.svg" alt="LinkedIn" />
          </a>
          <a href="mailto:baba.niang.isep@gmail.com" className="topbar-link icon-only" title="Gmail">
            <img src="/Guide-L_C/icons/gmail.svg" alt="Gmail" />
          </a>
        </nav>

        <div className="topbar-actions">
          <button onClick={() => setSearchOpen(true)} className="topbar-action" aria-label="Rechercher"><Search size={18} /></button>
          <ThemePicker />
          <button onClick={toggleDarkMode} className="topbar-action" aria-label="Mode sombre/clair">
            {darkMode ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <button onClick={toggleSidebar} className="topbar-action md:hidden" aria-label="Menu">
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>
      <div className="app-body">
        {/* Mobile sidebar overlay */}
        <AnimatePresence>
          {sidebarOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 z-40 md:hidden"
              onClick={() => setSidebarOpen(false)}
            />
          )}
        </AnimatePresence>

        {/* Sidebar */}
        <aside
          className={`app-sidebar ${sidebarOpen ? "open" : ""}`}
        >
          <div className="flex-1 overflow-y-auto py-3">
            <div className="space-y-0.5 mb-3 px-1">
              {[
                { icon: Home, label: "Accueil", v: "home" as const },
                { icon: Trophy, label: "Progression", v: "progress" as const },
                { icon: Star, label: "Favoris", v: "favorites" as const },
              ].map((it) => (
                <button
                  key={it.v}
                  onClick={() => {
                    setView(it.v);
                    setSidebarOpen(false);
                  }}
                  className={`sb-item ${view === it.v ? "active" : ""}`}
                >
                  <it.icon size={15} />
                  <span>{it.label}</span>
                  {it.v === "progress" && gp > 0 && (
                    <span className="text-[11px] opacity-60 tabular-nums ml-auto">
                      {gp}%
                    </span>
                  )}
                </button>
              ))}
            </div>
            <div className="sb-section-title">Sommaire</div>
            <div className="space-y-0.5">
              {chapters.map((ch) => {
                const p = progress[ch.id];
                const active = view === "chapter" && currentChapter === ch.id;
                const isDone = p?.levelDone?.comprendre && p?.levelDone?.lire && p?.levelDone?.faire;
                const started = p?.visited && !isDone;
                return (
                  <button
                    key={ch.id}
                    onClick={() => {
                      setChapter(ch.id);
                      setSidebarOpen(false);
                    }}
                    className={`sb-item ${active ? "active" : ""}`}
                  >
                    <div className="sb-num">{String(ch.id).padStart(2, "0")}</div>
                    <div className="min-w-0 flex-1">
                      <div className="truncate text-[12.5px]">{ch.shortTitle}</div>
                    </div>
                    <div className="sb-status">
                      {isDone ? (
                        <div className="sb-progress-ring done" />
                      ) : started ? (
                        <div className="sb-progress-ring started" />
                      ) : null}
                    </div>
                  </button>
                );
              })}
            </div>
            <button
              onClick={() => { setView("progress"); setSidebarOpen(false); }}
              className="sb-progress-card"
              aria-label="Voir votre progression"
            >
              <div className="sb-progress-head">
                <div className="sb-progress-icon"><Trophy size={16} /></div>
                <span>Votre progression</span>
                <ChevronRight size={16} className="ml-auto" />
              </div>
              <div className="sb-progress-row">
                <div className="sb-progress-ring-lg" style={{ ["--progress" as string]: `${gp}%` }}>
                  <span>{gp}%</span>
                </div>
                <div>
                  <strong>{Math.round((gp / 100) * TOTAL_CHAPTERS)} / {TOTAL_CHAPTERS} leçons</strong>
                  <small>Continuez votre apprentissage</small>
                </div>
              </div>
            </button>
          </div>
          <div className="p-3 border-t border-white/5">
            <div className="text-[9px] opacity-40 text-center leading-relaxed">
              Langage C — Guide Interactif
              <br />
              par Baba Niang
            </div>
          </div>
        </aside>

        {/* Main */}
        <main className="app-main">
          {view === "home" && <HomePage />}
          {view === "chapter" && chapter && <ChapterPage chapter={chapter} />}
          {view === "progress" && <ProgressPage />}
          {view === "favorites" && <FavoritesPage />}
        </main>
      </div>

      <AnimatePresence>{searchOpen && <SearchOverlay />}</AnimatePresence>
    </div>
  );
}
