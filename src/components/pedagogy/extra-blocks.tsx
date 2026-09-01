"use client";
import { motion } from "framer-motion";
import { Check, X, Minus, ArrowRight } from "lucide-react";

// ============================================================
// COMPARISON TABLE
// ============================================================
export function ComparisonTableBlock({
  title,
  columns,
  rows,
}: {
  title?: string;
  columns: string[];
  rows: { cells: string[]; tone?: "default" | "good" | "bad" | "highlight" }[];
}) {
  return (
    <div className="ped-card !p-0 overflow-hidden">
      {title && (
        <div className="px-5 py-3.5 border-b border-[var(--border)] bg-[var(--theme-50)] dark:bg-[var(--theme-100)]/10">
          <h3 className="font-bold text-sm text-[var(--theme-700)] dark:text-[var(--theme-200)]">{title}</h3>
        </div>
      )}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-[var(--muted)] dark:bg-[var(--muted)]/50">
              {columns.map((col, i) => (
                <th
                  key={i}
                  className={`px-4 py-3 text-left font-bold text-[var(--foreground)] ${
                    i === 0 ? "text-left" : "text-center"
                  }`}
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, ri) => {
              const toneClasses = {
                default: "bg-[var(--card)]",
                good: "bg-green-50 dark:bg-green-900/10",
                bad: "bg-red-50 dark:bg-red-900/10",
                highlight: "bg-[var(--theme-50)] dark:bg-[var(--theme-100)]/10",
              };
              return (
                <motion.tr
                  key={ri}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: ri * 0.04 }}
                  className={`${toneClasses[row.tone || "default"]} border-t border-[var(--border)]`}
                >
                  {row.cells.map((cell, ci) => {
                    const isGood = row.tone === "good" && ci > 0;
                    const isBad = row.tone === "bad" && ci > 0;
                    return (
                      <td
                        key={ci}
                        className={`px-4 py-3 ${
                          ci === 0
                            ? "font-semibold text-[var(--foreground)]"
                            : "text-center text-[var(--muted-foreground)]"
                        }`}
                      >
                        <div className="flex items-center gap-2" style={{ justifyContent: ci === 0 ? "flex-start" : "center" }}>
                          {isGood && <Check size={14} className="text-green-500 flex-shrink-0" />}
                          {isBad && <X size={14} className="text-red-500 flex-shrink-0" />}
                          <span dangerouslySetInnerHTML={{ __html: renderInline(cell) }} />
                        </div>
                      </td>
                    );
                  })}
                </motion.tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ============================================================
// FLOW STEPS (numbered cards with connecting arrows)
// ============================================================
export function FlowStepsBlock({
  title,
  steps,
}: {
  title?: string;
  steps: { title: string; desc: string; icon?: string }[];
}) {
  return (
    <div className="ped-card">
      {title && (
        <div className="mb-5">
          <span className="ped-card-eyebrow"><ArrowRight size={12} /> Étapes</span>
          <h3 className="mt-3">{title}</h3>
        </div>
      )}
      <div className="space-y-2">
        {steps.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07 }}
            className="flex items-stretch gap-3"
          >
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-[var(--theme-500)] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                {s.icon || i + 1}
              </div>
              {i < steps.length - 1 && (
                <div className="flex-1 w-0.5 bg-[var(--theme-200)] dark:bg-[var(--theme-100)]/20 my-1 min-h-[20px]" />
              )}
            </div>
            <div className="flex-1 pb-3 pt-1.5">
              <div className="font-bold text-sm text-[var(--foreground)]">{s.title}</div>
              <div className="text-sm text-[var(--muted-foreground)] mt-1 leading-relaxed">{s.desc}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ============================================================
// STACK vs HEAP diagram
// ============================================================
export function StackVsHeapDiagram({ title }: { title?: string }) {
  return (
    <div className="diagram-frame">
      {title && <p className="df-label">{title}</p>}
      <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto">
        {/* Stack */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-xl border-2 border-blue-300 bg-blue-50 dark:bg-blue-900/20 dark:border-blue-700 p-4"
        >
          <div className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-300 mb-3">
            Pile (Stack)
          </div>
          <div className="space-y-1.5">
            <div className="bg-white dark:bg-black/30 rounded p-2 text-xs font-mono text-blue-700 dark:text-blue-200">
              fact(1) ← actuel
            </div>
            <div className="bg-white dark:bg-black/30 rounded p-2 text-xs font-mono text-blue-700 dark:text-blue-200">
              fact(2) ← en attente
            </div>
            <div className="bg-white dark:bg-black/30 rounded p-2 text-xs font-mono text-blue-700 dark:text-blue-200">
              fact(3) ← en attente
            </div>
            <div className="bg-white dark:bg-black/30 rounded p-2 text-xs font-mono text-blue-700 dark:text-blue-200">
              main() ← en attente
            </div>
          </div>
          <div className="mt-3 text-[10px] text-blue-700 dark:text-blue-300 leading-relaxed">
            Variables locales, appels de fonction. Gérée automatiquement. Rapide. Petite (≈ 1 Mo).
          </div>
        </motion.div>

        {/* Heap */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="rounded-xl border-2 border-orange-300 bg-orange-50 dark:bg-orange-900/20 dark:border-orange-700 p-4"
        >
          <div className="text-xs font-bold uppercase tracking-widest text-orange-600 dark:text-orange-300 mb-3">
            Tas (Heap)
          </div>
          <div className="space-y-1.5">
            <div className="bg-white dark:bg-black/30 rounded p-2 text-xs font-mono text-orange-700 dark:text-orange-200">
              bloc libre
            </div>
            <div className="bg-white dark:bg-black/30 rounded p-2 text-xs font-mono text-orange-700 dark:text-orange-200">
              malloc(40) ← à toi
            </div>
            <div className="bg-white dark:bg-black/30 rounded p-2 text-xs font-mono text-orange-700 dark:text-orange-200">
              bloc libre
            </div>
            <div className="bg-white dark:bg-black/30 rounded p-2 text-xs font-mono text-orange-700 dark:text-orange-200">
              bloc libre
            </div>
          </div>
          <div className="mt-3 text-[10px] text-orange-700 dark:text-orange-300 leading-relaxed">
            Mémoire que TU demandes via malloc. Tu gères avec free. Plus lente. Grande (Go).
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// ============================================================
// MEMORY MAP diagram (4 zones)
// ============================================================
export function MemoryMapDiagram({
  regions,
}: {
  regions: { name: string; desc: string; tone: "stack" | "heap" | "global" | "code" }[];
}) {
  const toneClasses = {
    stack: "border-blue-300 bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-700",
    heap: "border-orange-300 bg-orange-50 text-orange-700 dark:bg-orange-900/20 dark:text-orange-300 dark:border-orange-700",
    global: "border-purple-300 bg-purple-50 text-purple-700 dark:bg-purple-900/20 dark:text-purple-300 dark:border-purple-700",
    code: "border-gray-300 bg-gray-50 text-gray-700 dark:bg-gray-800/40 dark:text-gray-300 dark:border-gray-600",
  };
  return (
    <div className="diagram-frame">
      <p className="df-label">La mémoire vue d'en haut</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
        {regions.map((r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`rounded-xl border-2 ${toneClasses[r.tone]} p-4 text-center`}
          >
            <div className="font-bold text-sm">{r.name}</div>
            <div className="text-xs mt-1 opacity-80 leading-relaxed">{r.desc}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ============================================================
// TWO ZONE COMPARE
// ============================================================
export function TwoZoneCompareDiagram({
  leftTitle,
  rightTitle,
  rows,
}: {
  leftTitle: string;
  rightTitle: string;
  rows: { left: string; right: string }[];
}) {
  return (
    <div className="diagram-frame">
      <div className="max-w-2xl mx-auto">
        <div className="grid grid-cols-2 gap-2 mb-3">
          <div className="text-center font-bold text-sm text-[var(--theme-700)] dark:text-[var(--theme-200)] bg-[var(--theme-100)] dark:bg-[var(--theme-100)]/15 py-2.5 rounded-lg">
            {leftTitle}
          </div>
          <div className="text-center font-bold text-sm text-[var(--theme-700)] dark:text-[var(--theme-200)] bg-[var(--theme-100)] dark:bg-[var(--theme-100)]/15 py-2.5 rounded-lg">
            {rightTitle}
          </div>
        </div>
        <div className="space-y-1">
          {rows.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="grid grid-cols-2 gap-2"
            >
              <div className="p-2.5 bg-[var(--card)] border border-[var(--border)] rounded text-xs text-center">
                {r.left}
              </div>
              <div className="p-2.5 bg-[var(--card)] border border-[var(--border)] rounded text-xs text-center">
                {r.right}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

// inline markdown helper
function renderInline(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\*\*([^*]+)\*\*/g, '<strong class="text-[var(--theme-700)] dark:text-[var(--theme-200)]">$1</strong>')
    .replace(/`([^`]+)`/g, '<code class="font-mono text-[0.85em] bg-[var(--muted)] px-1.5 py-0.5 rounded text-[var(--theme-700)] dark:text-[var(--theme-200)]">$1</code>');
}
