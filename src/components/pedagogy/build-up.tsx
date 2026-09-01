"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, RotateCcw, Layers } from "lucide-react";
import type { BuildUpStep } from "@/lib/curriculum-types";
import { highlightCLines } from "@/lib/syntax";

interface BuildUpBlockProps {
  title?: string;
  intro?: string;
  steps: BuildUpStep[];
}

export function BuildUpBlock({ title, intro, steps }: BuildUpBlockProps) {
  const [current, setCurrent] = useState(0);
  const total = steps.length;
  const step = steps[current];

  const next = () => setCurrent((c) => Math.min(c + 1, total - 1));
  const prev = () => setCurrent((c) => Math.max(c - 1, 0));
  const reset = () => setCurrent(0);

  return (
    <div className="ped-card !p-0 overflow-hidden">
      {/* Header */}
      <div className="px-5 py-4 border-b border-[var(--border)] bg-[var(--theme-50)] dark:bg-[var(--theme-100)]/10 flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-[var(--theme-500)] text-white flex items-center justify-center flex-shrink-0">
          <Layers size={15} />
        </div>
        <div className="flex-1 min-w-0">
          {title && <div className="font-bold text-sm text-[var(--theme-700)] dark:text-[var(--theme-200)] truncate">{title}</div>}
          {intro && <div className="text-xs text-[var(--muted-foreground)] mt-0.5">{intro}</div>}
        </div>
        <div className="text-xs font-mono font-bold tabular-nums text-[var(--muted-foreground)]">
          {current + 1}/{total}
        </div>
      </div>

      {/* Stage area */}
      <div className="px-5 py-6 bg-gradient-to-b from-[var(--card)] to-[var(--muted)] dark:from-[var(--card)] dark:to-transparent min-h-[280px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.25 }}
            className="w-full max-w-2xl mx-auto"
          >
            <StepRenderer step={step} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Caption */}
      <div className="px-5 py-3 border-t border-[var(--border)] bg-[var(--card)] min-h-[60px] flex items-center">
        <p className="text-sm text-[var(--foreground)] leading-relaxed">{step.caption}</p>
      </div>

      {/* Progress dots */}
      <div className="px-5 py-2 bg-[var(--muted)] dark:bg-[var(--card)] border-t border-[var(--border)] flex items-center justify-center gap-1.5">
        {steps.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="transition-all rounded-full"
            style={{
              width: i === current ? 24 : 8,
              height: 8,
              background:
                i === current
                  ? "var(--theme-500)"
                  : i < current
                  ? "var(--theme-300)"
                  : "var(--muted-foreground)",
              opacity: i < current ? 0.5 : 1,
            }}
            aria-label={`Étape ${i + 1}`}
          />
        ))}
      </div>

      {/* Controls */}
      <div className="px-5 py-3 bg-[var(--card)] border-t border-[var(--border)] flex items-center justify-between gap-2">
        <button
          onClick={prev}
          disabled={current === 0}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium disabled:opacity-30 hover:bg-[var(--muted)] transition-colors"
        >
          <ChevronLeft size={14} /> Précédent
        </button>
        <button
          onClick={reset}
          className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs text-[var(--muted-foreground)] hover:bg-[var(--muted)] transition-colors"
          title="Recommencer depuis le début"
        >
          <RotateCcw size={12} /> Reset
        </button>
        {current < total - 1 ? (
          <button
            onClick={next}
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-sm font-semibold bg-[var(--theme-500)] text-white hover:opacity-90 transition-opacity"
          >
            Suivant <ChevronRight size={14} />
          </button>
        ) : (
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-semibold bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-300">
            <Play size={12} /> Terminé
          </div>
        )}
      </div>
    </div>
  );
}

// ============================================================
// STEP RENDERERS
// ============================================================

function StepRenderer({ step }: { step: BuildUpStep }) {
  switch (step.kind) {
    case "narration":
      return (
        <div className="text-center py-10">
          <p className="text-base font-medium text-[var(--foreground)] max-w-md mx-auto leading-relaxed">
            {step.caption}
          </p>
        </div>
      );
    case "memory":
      return <MemoryStage vars={step.vars} />;
    case "pointer":
      return <PointerStage {...step} />;
    case "code":
      return <CodeStage code={step.code} activeLines={step.activeLines} />;
    case "stack":
      return <StackStage frames={step.frames} />;
    default:
      return null;
  }
}

// ---- Memory stage ----
function MemoryStage({
  vars,
}: {
  vars: { name: string; type: string; value: string; addr?: string; tone?: "default" | "new" | "highlight" | "muted" }[];
}) {
  return (
    <div className="flex flex-wrap justify-center gap-5">
      {vars.map((v, i) => {
        const toneClasses = {
          default: "border-[var(--theme-300)]",
          new: "border-[var(--theme-500)] shadow-lg shadow-[var(--theme-500)]/30",
          highlight: "border-amber-400 bg-amber-50 dark:bg-amber-900/20",
          muted: "border-[var(--border)] opacity-50",
        }[v.tone || "default"];
        return (
          <motion.div
            key={i}
            initial={v.tone === "new" ? { opacity: 0, y: 12, scale: 0.92 } : false}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.35 }}
            className={`mem-cell ${toneClasses}`}
          >
            <div className="mc-type-tag">{v.type}</div>
            <div className="mc-value">{v.value}</div>
            <div className="mc-label">{v.name}</div>
            {v.addr && <div className="mc-addr">{v.addr}</div>}
          </motion.div>
        );
      })}
    </div>
  );
}

// ---- Pointer stage ----
function PointerStage({
  varName,
  ptrName,
  value,
  addr,
  showArrow = true,
  showDeref = false,
  writingValue,
}: {
  varName: string;
  ptrName: string;
  value: string;
  addr: string;
  showArrow?: boolean;
  showDeref?: boolean;
  writingValue?: string;
}) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
      {/* Variable */}
      <motion.div
        key={`var-${value}`}
        initial={writingValue ? { scale: 1.08 } : false}
        animate={{ scale: 1 }}
        className="flex flex-col items-center gap-2"
      >
        <div className="mem-cell" style={writingValue ? { borderColor: "var(--theme-500)", boxShadow: "0 0 0 4px var(--theme-100)" } : {}}>
          <div className="mc-type-tag">int</div>
          <div className="mc-value">{value}</div>
          <div className="mc-label">{varName}</div>
        </div>
        <div className="text-[10px] text-[var(--muted-foreground)] font-mono">adresse : {addr}</div>
      </motion.div>

      {/* Arrow */}
      {showArrow && (
        <motion.div
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col items-center gap-1"
        >
          <svg width="80" height="36" viewBox="0 0 80 36" className="text-[var(--theme-500)]">
            <motion.path
              d="M4 18 L70 18"
              stroke="currentColor"
              strokeWidth="2.5"
              fill="none"
              strokeDasharray="4 4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5 }}
              markerEnd="url(#arrowhead-buildup)"
            />
            <defs>
              <marker id="arrowhead-buildup" markerWidth="12" markerHeight="10" refX="10" refY="5" orient="auto">
                <path d="M0,0 L12,5 L0,10 Z" fill="currentColor" />
              </marker>
            </defs>
          </svg>
          {showDeref && (
            <motion.div
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xs font-mono font-bold text-[var(--theme-600)] dark:text-[var(--theme-300)] bg-[var(--theme-50)] dark:bg-[var(--theme-100)]/20 px-2 py-0.5 rounded"
            >
              *{ptrName} = {writingValue || value}
            </motion.div>
          )}
        </motion.div>
      )}

      {/* Pointer */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center gap-2"
      >
        <div className="mem-cell" style={{ borderColor: "var(--theme-500)" }}>
          <div className="mc-type-tag">int*</div>
          <div className="mc-value" style={{ color: "var(--theme-600)" }}>
            {addr}
          </div>
          <div className="mc-label">{ptrName}</div>
        </div>
        <div className="text-[10px] text-[var(--muted-foreground)] font-mono">contient l'adresse de {varName}</div>
      </motion.div>
    </div>
  );
}

// ---- Code stage ----
function CodeStage({ code, activeLines = [] }: { code: string; activeLines?: number[] }) {
  const lines = highlightCLines(code);
  return (
    <div className="code-block w-full max-w-2xl mx-auto" style={{ borderRadius: "0.875rem", overflow: "hidden" }}>
      <div className="code-header">
        <span className="ch-fname">code.c</span>
        <span className="text-[0.7rem] opacity-70">étape en cours</span>
      </div>
      <div className="code-body" style={{ fontSize: "0.85rem" }}>
        {lines.map((line, i) => {
          const lineNum = i + 1;
          const isActive = activeLines.includes(lineNum);
          return (
            <div
              key={i}
              className={`code-line ${isActive ? "active" : ""}`}
              style={{ cursor: "default" }}
            >
              <span className="cl-num">{lineNum}</span>
              <span
                className="cl-content font-mono"
                dangerouslySetInnerHTML={{ __html: line.html || "&nbsp;" }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ---- Stack stage (for recursion) ----
function StackStage({
  frames,
}: {
  frames: { label: string; value?: string; tone?: "active" | "resolved" | "pending" }[];
}) {
  return (
    <div className="flex flex-col items-center gap-1 max-w-sm mx-auto">
      <div className="text-xs font-bold uppercase tracking-widest text-[var(--muted-foreground)] mb-2">
        ↑ Sommet de la pile (dernier appel)
      </div>
      {frames.map((f, i) => {
        const toneClass =
          f.tone === "active"
            ? "border-[var(--theme-500)] bg-[var(--theme-50)] dark:bg-[var(--theme-100)]/20 shadow-md"
            : f.tone === "resolved"
            ? "border-green-400 bg-green-50 dark:bg-green-900/20 opacity-70"
            : "border-[var(--border)] bg-[var(--card)] opacity-60";
        return (
          <motion.div
            key={i}
            initial={f.tone === "active" ? { opacity: 0, y: -12, scale: 0.95 } : false}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.25 }}
            className={`w-full p-3 rounded-lg border-2 ${toneClass} flex items-center justify-between`}
          >
            <span className="font-mono font-bold text-sm text-[var(--foreground)]">{f.label}</span>
            {f.value && (
              <span className="font-mono text-xs text-[var(--theme-600)] dark:text-[var(--theme-300)] font-bold">
                → {f.value}
              </span>
            )}
          </motion.div>
        );
      })}
      <div className="text-xs font-bold uppercase tracking-widest text-[var(--muted-foreground)] mt-2">
        ↓ Base (premier appel)
      </div>
    </div>
  );
}
