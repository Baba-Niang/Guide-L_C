"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronDown,
  Lightbulb,
  AlertTriangle,
  CheckCircle2,
  Eye,
  Terminal,
  HelpCircle,
  BookMarked,
  ListChecks,
} from "lucide-react";

// ============================================================
// Diagram wrapper
// ============================================================
export function DiagramFrame({
  label,
  children,
  caption,
}: {
  label?: string;
  children: React.ReactNode;
  caption?: string;
}) {
  return (
    <div className="diagram-frame my-6">
      {label && <p className="df-label">{label}</p>}
      {children}
      {caption && (
        <p className="mt-4 text-sm text-[var(--muted-foreground)] leading-relaxed max-w-xl mx-auto">
          {caption}
        </p>
      )}
    </div>
  );
}

// ============================================================
// Memory diagram
// ============================================================
export function MemoryDiagram({
  vars,
}: {
  vars: { name: string; type: string; value: string; addr?: string }[];
}) {
  const [active, setActive] = useState<number | null>(null);
  return (
    <DiagramFrame label="Représentation en mémoire">
      <div className="flex flex-wrap justify-center gap-5">
        {vars.map((v, i) => (
          <motion.button
            key={i}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            onClick={() => setActive(active === i ? null : i)}
            className={`mem-cell ${active === i ? "active" : ""}`}
          >
            <div className="mc-type-tag">{v.type}</div>
            <div className="mc-value">{v.value}</div>
            <div className="mc-label">{v.name}</div>
            {v.addr && <div className="mc-addr">{v.addr}</div>}
          </motion.button>
        ))}
      </div>
      {active !== null && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-4 text-sm text-[var(--theme-700)] dark:text-[var(--theme-200)] font-medium"
        >
          La variable <code className="font-mono font-bold">{vars[active].name}</code> de type{" "}
          <code className="font-mono font-bold">{vars[active].type}</code> contient la valeur{" "}
          <code className="font-mono font-bold">{vars[active].value}</code>
          {vars[active].addr && <> à l'adresse {vars[active].addr}</>}.
        </motion.p>
      )}
    </DiagramFrame>
  );
}

// ============================================================
// Array diagram
// ============================================================
export function ArrayDiagram({
  name,
  values,
  highlightIdx,
}: {
  name: string;
  values: string[];
  highlightIdx?: number;
}) {
  const [active, setActive] = useState<number | null>(highlightIdx ?? null);
  return (
    <DiagramFrame label={`Tableau : ${name}`}>
      <div className="flex flex-col items-center gap-3">
        <div className="flex items-stretch">
          <div className="text-xs text-[var(--muted-foreground)] flex items-center pr-3 font-mono font-semibold">
            {name}
          </div>
          <div className="flex">
            {values.map((v, i) => (
              <motion.button
                key={i}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                onClick={() => setActive(active === i ? null : i)}
                className={`arr-cell ${active === i ? "active" : ""}`}
                style={i > 0 ? { borderLeft: "none" } : {}}
              >
                <div className="ac-idx">[{i}]</div>
                <div className="ac-val">{v}</div>
              </motion.button>
            ))}
          </div>
        </div>
        <p className="text-xs text-[var(--muted-foreground)]">
          {values.length} cases — indices de <strong>0</strong> à{" "}
          <strong>{values.length - 1}</strong>. La première case est{" "}
          <code className="font-mono">{name}[0]</code>.
        </p>
      </div>
    </DiagramFrame>
  );
}

// ============================================================
// Pointer diagram
// ============================================================
export function PointerDiagram({
  varName,
  ptrName,
  value,
  addr,
}: {
  varName: string;
  ptrName: string;
  value: string;
  addr: string;
}) {
  return (
    <DiagramFrame label="Pointeur et variable">
      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
        <div className="flex flex-col items-center gap-2">
          <div className="mem-cell">
            <div className="mc-value text-center">{value}</div>
            <div className="mc-label text-center">{varName}</div>
          </div>
          <div className="text-[10px] text-[var(--muted-foreground)] font-mono">
            adresse : {addr}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: -8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-1"
        >
          <svg width="56" height="36" viewBox="0 0 56 36" className="text-[var(--theme-400)]">
            <path d="M4 18 L44 18" stroke="currentColor" strokeWidth="2.5" fill="none" markerEnd="url(#arrowhead)" />
            <defs>
              <marker id="arrowhead" markerWidth="10" markerHeight="8" refX="8" refY="4" orient="auto">
                <path d="M0,0 L10,4 L0,8 Z" fill="currentColor" />
              </marker>
            </defs>
          </svg>
          <div className="text-[10px] text-[var(--muted-foreground)] font-mono">
            *{ptrName} = {value}
          </div>
        </motion.div>

        <div className="flex flex-col items-center gap-2">
          <div className="mem-cell" style={{ borderColor: "var(--theme-500)" }}>
            <div className="mc-value text-center" style={{ color: "var(--theme-600)" }}>
              {addr}
            </div>
            <div className="mc-label text-center">{ptrName}</div>
          </div>
          <div className="text-[10px] text-[var(--muted-foreground)] font-mono">
            contient l'adresse de {varName}
          </div>
        </div>
      </div>
    </DiagramFrame>
  );
}

// ============================================================
// String diagram
// ============================================================
export function StringDiagram({ text }: { text: string }) {
  const chars = text.split("").concat(["\\0"]);
  return (
    <DiagramFrame label="Chaîne en mémoire">
      <div className="flex flex-col items-center gap-3">
        <div className="flex">
          {chars.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="arr-cell"
              style={
                c === "\\0"
                  ? { borderColor: "#ef4444" }
                  : i > 0
                  ? { borderLeft: "none" }
                  : {}
              }
            >
              <div className="ac-idx">[{i}]</div>
              <div className="ac-val" style={c === "\\0" ? { color: "#ef4444", fontSize: "0.85rem" } : {}}>
                {c === "\\0" ? "\\0" : c}
              </div>
            </motion.div>
          ))}
        </div>
        <p className="text-sm text-[var(--muted-foreground)] max-w-md">
          La chaîne <code className="font-mono font-bold">"{text}"</code> occupe{" "}
          <strong>{chars.length}</strong> cases : {text.length} lettres + 1 case
          pour le caractère nul{" "}
          <code className="font-mono font-bold text-red-500">\0</code> qui marque
          la fin.
        </p>
      </div>
    </DiagramFrame>
  );
}

// ============================================================
// Struct diagram
// ============================================================
export function StructDiagram({ name, fields }: { name: string; fields: { name: string; type: string }[] }) {
  return (
    <DiagramFrame label={`Structure : ${name}`}>
      <div className="inline-flex flex-col rounded-xl border-2 border-[var(--theme-400)] overflow-hidden shadow-sm max-w-md mx-auto">
        <div className="bg-[var(--theme-500)] text-white text-center py-2.5 font-bold text-sm tracking-wide">
          struct {name}
        </div>
        {fields.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="flex justify-between items-center px-5 py-2.5 bg-white dark:bg-[var(--card)] border-t border-[var(--border)]"
          >
            <span className="font-mono text-sm text-[var(--theme-700)] dark:text-[var(--theme-200)] font-semibold">
              {f.name}
            </span>
            <span className="font-mono text-xs text-[var(--muted-foreground)] bg-[var(--muted)] px-2 py-0.5 rounded">
              {f.type}
            </span>
          </motion.div>
        ))}
      </div>
    </DiagramFrame>
  );
}

// ============================================================
// Flow diagrams (if, loop)
// ============================================================
function ArrowDown({ color = "var(--theme-300)" }: { color?: string }) {
  return (
    <svg width="20" height="22" style={{ color }}>
      <path d="M10 2 L10 16" stroke="currentColor" strokeWidth="2" />
      <path d="M10 16 L5 11" stroke="currentColor" strokeWidth="2" />
      <path d="M10 16 L15 11" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function FlowIfDiagram() {
  return (
    <DiagramFrame label="Flux conditionnel (if / else)">
      <div className="flex flex-col items-center gap-1.5 py-2">
        <div className="diag-box border-[var(--theme-300)] bg-[var(--theme-50)] text-[var(--theme-700)]">
          Début
        </div>
        <ArrowDown />
        <div className="px-6 py-2.5 bg-amber-50 border-2 border-amber-400 text-amber-700 dark:bg-amber-900/20 dark:text-amber-300 dark:border-amber-700 rounded-lg font-bold text-sm">
          Condition ?
        </div>
        <div className="flex gap-8 md:gap-16 mt-1">
          <div className="flex flex-col items-center gap-1.5">
            <span className="text-[10px] font-bold text-green-600 dark:text-green-400 uppercase tracking-wider">
              Vrai
            </span>
            <ArrowDown color="#22c55e" />
            <div className="diag-box border-green-400 bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-300 dark:border-green-700">
              Bloc A
            </div>
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <span className="text-[10px] font-bold text-red-500 dark:text-red-400 uppercase tracking-wider">
              Faux
            </span>
            <ArrowDown color="#f87171" />
            <div className="diag-box border-red-400 bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-300 dark:border-red-700">
              Bloc B (else)
            </div>
          </div>
        </div>
        <ArrowDown />
        <div className="diag-box border-[var(--theme-300)] bg-[var(--theme-50)] text-[var(--theme-700)]">
          Suite du programme
        </div>
      </div>
    </DiagramFrame>
  );
}

export function FlowLoopDiagram() {
  return (
    <DiagramFrame label="Flux d'une boucle">
      <div className="flex flex-col items-center gap-1.5 py-2">
        <div className="diag-box border-[var(--theme-300)] bg-[var(--theme-50)] text-[var(--theme-700)]">
          Initialisation
        </div>
        <ArrowDown />
        <div className="px-6 py-2.5 bg-amber-50 border-2 border-amber-400 text-amber-700 dark:bg-amber-900/20 dark:text-amber-300 dark:border-amber-700 rounded-lg font-bold text-sm">
          Condition ?
        </div>
        <div className="flex gap-10 md:gap-16 mt-1">
          <div className="flex flex-col items-center gap-1.5">
            <span className="text-[10px] font-bold text-green-600 dark:text-green-400 uppercase tracking-wider">
              Vrai
            </span>
            <ArrowDown color="#22c55e" />
            <div className="diag-box border-green-400 bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-300 dark:border-green-700">
              Instructions
            </div>
            <svg width="20" height="22" style={{ color: "#22c55e", transform: "rotate(180deg)" }}>
              <path d="M10 2 L10 16" stroke="currentColor" strokeWidth="2" />
              <path d="M10 16 L5 11" stroke="currentColor" strokeWidth="2" />
              <path d="M10 16 L15 11" stroke="currentColor" strokeWidth="2" />
            </svg>
            <span className="text-[10px] text-green-600 dark:text-green-400 font-semibold">
              recommence
            </span>
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <span className="text-[10px] font-bold text-red-500 dark:text-red-400 uppercase tracking-wider">
              Faux
            </span>
            <ArrowDown color="#f87171" />
            <div className="diag-box border-red-400 bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-300 dark:border-red-700">
              Sortie
            </div>
          </div>
        </div>
      </div>
    </DiagramFrame>
  );
}

// ============================================================
// Process diagram (steps)
// ============================================================
export function ProcessDiagram({ steps, title }: { steps: string[]; title?: string }) {
  return (
    <DiagramFrame label={title}>
      <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
        {steps.map((step, i) => (
          <div key={i} className="flex items-center gap-2 md:gap-3">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="diag-box border-[var(--theme-400)] bg-[var(--theme-50)] text-[var(--theme-700)] dark:bg-[var(--theme-100)]/10 dark:text-[var(--theme-200)] whitespace-pre-line text-center min-w-[100px] text-xs"
            >
              {step}
            </motion.div>
            {i < steps.length - 1 && (
              <span className="diagram-arrow text-[var(--theme-400)] text-lg md:text-xl">→</span>
            )}
          </div>
        ))}
      </div>
    </DiagramFrame>
  );
}

// ============================================================
// Function diagram
// ============================================================
export function FunctionDiagram({ name, params, ret }: { name: string; params: string; ret: string }) {
  return (
    <DiagramFrame label="Modèle d'une fonction">
      <div className="flex flex-wrap items-center justify-center gap-3 md:gap-5">
        <div className="flex flex-col items-center gap-1">
          <div className="p-3 rounded-xl border-2 border-blue-300 bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-700 text-center min-w-[110px]">
            <div className="font-mono text-xs font-bold">{params}</div>
            <div className="text-[10px] mt-0.5 opacity-60">entrées</div>
          </div>
        </div>
        <svg width="32" height="20" className="text-blue-400 dark:text-blue-500">
          <path d="M2 10 L26 10" stroke="currentColor" strokeWidth="2" markerEnd="url(#ah-fd)" />
          <defs>
            <marker id="ah-fd" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <path d="M0,0 L8,3 L0,6" fill="currentColor" />
            </marker>
          </defs>
        </svg>
        <div className="p-4 rounded-2xl border-2 border-[var(--theme-400)] bg-[var(--theme-50)] dark:bg-[var(--theme-100)]/10 text-center min-w-[130px]">
          <div className="font-mono font-bold text-[var(--theme-700)] dark:text-[var(--theme-200)]">
            {name}()
          </div>
          <div className="text-[10px] text-[var(--muted-foreground)] mt-1">traitement</div>
        </div>
        <svg width="32" height="20" className="text-[var(--theme-400)]">
          <path d="M2 10 L26 10" stroke="currentColor" strokeWidth="2" markerEnd="url(#ah-fd)" />
        </svg>
        <div className="flex flex-col items-center gap-1">
          <div className="p-3 rounded-xl border-2 border-green-300 bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-300 dark:border-green-700 text-center min-w-[110px]">
            <div className="font-mono text-xs font-bold">{ret}</div>
            <div className="text-[10px] mt-0.5 opacity-60">sortie</div>
          </div>
        </div>
      </div>
    </DiagramFrame>
  );
}

// ============================================================
// Malloc diagram
// ============================================================
export function MallocDiagram() {
  return (
    <DiagramFrame label="Allocation dynamique">
      <div className="flex flex-wrap items-center justify-center gap-5 md:gap-8">
        <div className="flex flex-col items-center gap-2">
          <div className="p-3 px-5 rounded-xl bg-[var(--theme-50)] dark:bg-[var(--theme-100)]/10 border-2 border-[var(--theme-300)] font-mono text-sm font-bold text-[var(--theme-700)] dark:text-[var(--theme-200)]">
            malloc(n * sizeof(int))
          </div>
          <ArrowDown />
          <div className="p-3 rounded-lg bg-[var(--theme-100)] dark:bg-[var(--theme-100)]/20 text-[var(--theme-700)] dark:text-[var(--theme-200)] text-sm font-semibold">
            Tas (Heap)
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="mem-cell" style={{ borderColor: "var(--theme-500)" }}>
            <div className="mc-value text-center" style={{ color: "var(--theme-600)" }}>
              adresse
            </div>
            <div className="mc-label text-center">ptr</div>
          </div>
          <div className="text-[10px] text-[var(--muted-foreground)]">pointeur</div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="p-3 px-5 rounded-xl bg-red-50 dark:bg-red-900/20 border-2 border-red-300 dark:border-red-700 font-mono text-sm font-bold text-red-700 dark:text-red-300">
            free(ptr)
          </div>
          <ArrowDown color="#f87171" />
          <div className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-sm">
            Libérée
          </div>
        </div>
      </div>
    </DiagramFrame>
  );
}

// ============================================================
// Recursion diagram
// ============================================================
export function RecursionDiagram({ calls }: { calls: string[] }) {
  return (
    <DiagramFrame label="Récursivité : empilement des appels">
      <div className="flex flex-col items-center gap-1">
        {calls.map((call, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            className="rounded-lg bg-[var(--theme-200)] dark:bg-[var(--theme-100)]/20 border-2 border-[var(--theme-400)] p-2 px-5 text-center"
            style={{
              width: `${Math.max(110, 220 - i * 18)}px`,
              marginLeft: `${i * 9}px`,
            }}
          >
            <span className="font-mono text-sm font-bold text-[var(--theme-700)] dark:text-[var(--theme-200)]">
              {call}
            </span>
          </motion.div>
        ))}
      </div>
      <p className="text-sm text-[var(--muted-foreground)] mt-4 max-w-md mx-auto">
        Chaque appel s'empile jusqu'au cas de base ({calls[calls.length - 1]}),
        puis les résultats remontent.
      </p>
    </DiagramFrame>
  );
}

// ============================================================
// Pointer on function diagram
// ============================================================
export function PointerFnDiagram({ sig, target }: { sig: string; target: string }) {
  return (
    <DiagramFrame label="Pointeur sur fonction">
      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
        <div className="p-4 rounded-xl border-2 border-[var(--theme-400)] bg-[var(--theme-50)] dark:bg-[var(--theme-100)]/10 text-[var(--theme-700)] dark:text-[var(--theme-200)] font-mono text-sm text-center">
          <div className="font-bold">{sig}</div>
          <div className="text-[10px] mt-1 opacity-60">stocke l'adresse d'une fonction</div>
        </div>
        <svg width="40" height="22" className="text-[var(--theme-400)]">
          <path d="M2 11 L34 11" stroke="currentColor" strokeWidth="2.5" markerEnd="url(#ah-pf)" />
          <defs>
            <marker id="ah-pf" markerWidth="10" markerHeight="8" refX="8" refY="4" orient="auto">
              <path d="M0,0 L10,4 L0,8 Z" fill="currentColor" />
            </marker>
          </defs>
        </svg>
        <div className="p-4 rounded-xl border-2 border-blue-300 bg-blue-50 dark:bg-blue-900/20 dark:border-blue-700 text-blue-700 dark:text-blue-300 font-mono text-sm text-center">
          <div className="font-bold">{target}</div>
          <div className="text-[10px] mt-1 opacity-60">la fonction ciblée</div>
        </div>
      </div>
    </DiagramFrame>
  );
}

// ============================================================
// Defense diagram
// ============================================================
export function DefenseDiagram({ levels }: { levels: { l: string; d: string }[] }) {
  return (
    <DiagramFrame label="3 niveaux de défense">
      <div className="flex flex-col items-center gap-3 max-w-md mx-auto">
        {levels.map((it, i) => {
          const colors = [
            "border-green-400 bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-300 dark:border-green-700",
            "border-amber-400 bg-amber-50 text-amber-700 dark:bg-amber-900/20 dark:text-amber-300 dark:border-amber-700",
            "border-red-400 bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-300 dark:border-red-700",
          ];
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`w-full p-4 rounded-xl border-2 ${colors[i]} text-center`}
            >
              <div className="font-bold text-sm">{it.l}</div>
              <div className="text-xs mt-1 opacity-75">{it.d}</div>
            </motion.div>
          );
        })}
      </div>
    </DiagramFrame>
  );
}

// ============================================================
// Operators 3 groups diagram
// ============================================================
export function Operators3Diagram({ groups }: { groups: { title: string; items: string[] }[] }) {
  const colors = [
    "border-[var(--theme-300)] bg-[var(--theme-50)] text-[var(--theme-700)] dark:bg-[var(--theme-100)]/10 dark:text-[var(--theme-200)]",
    "border-amber-300 bg-amber-50 text-amber-700 dark:bg-amber-900/20 dark:text-amber-300 dark:border-amber-700",
    "border-purple-300 bg-purple-50 text-purple-700 dark:bg-purple-900/20 dark:text-purple-300 dark:border-purple-700",
  ];
  return (
    <DiagramFrame label="Les 3 familles d'opérateurs">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-xl mx-auto">
        {groups.map((g, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`rounded-xl border-2 ${colors[i]} p-4 text-center`}
          >
            <div className="font-bold text-sm mb-2">{g.title}</div>
            <div className="font-mono text-xs space-y-1">
              {g.items.map((it, j) => (
                <div key={j}>{it}</div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </DiagramFrame>
  );
}

// ============================================================
// Modules diagram
// ============================================================
export function ModulesDiagram({ files }: { files: { name: string; desc: string }[] }) {
  return (
    <DiagramFrame label="Organisation en modules">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-md mx-auto">
        {files.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-4 rounded-xl border-2 border-[var(--theme-300)] bg-[var(--theme-50)] dark:bg-[var(--theme-100)]/10 text-center"
          >
            <div className="font-mono font-bold text-sm text-[var(--theme-700)] dark:text-[var(--theme-200)]">
              {f.name}
            </div>
            <div className="text-xs mt-1 text-[var(--muted-foreground)]">{f.desc}</div>
          </motion.div>
        ))}
      </div>
    </DiagramFrame>
  );
}

// ============================================================
// Files3 (open / read-write / close) diagram
// ============================================================
export function Files3Diagram({ steps }: { steps: { name: string; desc: string }[] }) {
  return (
    <DiagramFrame label="Toujours 3 étapes">
      <div className="flex flex-wrap items-center justify-center gap-3 md:gap-5">
        {steps.map((s, i) => (
          <div key={i} className="flex items-center gap-3">
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="p-4 rounded-xl border-2 border-[var(--theme-400)] bg-[var(--theme-50)] dark:bg-[var(--theme-100)]/10 text-center min-w-[110px]"
            >
              <div className="font-mono font-bold text-sm text-[var(--theme-700)] dark:text-[var(--theme-200)]">
                {s.name}
              </div>
              <div className="text-xs mt-1 text-[var(--muted-foreground)]">{s.desc}</div>
            </motion.div>
            {i < steps.length - 1 && (
              <span className="diagram-arrow text-[var(--theme-400)] text-lg md:text-xl">→</span>
            )}
          </div>
        ))}
      </div>
    </DiagramFrame>
  );
}

// ============================================================
// Lifecycle diagram (stages)
// ============================================================
export function LifecycleDiagram({ stages }: { stages: { l: string; d: string }[] }) {
  return (
    <DiagramFrame label="Cycle de vie">
      <div className="flex flex-col items-center gap-3 max-w-md mx-auto">
        {stages.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="w-full p-3.5 rounded-xl border-2 border-[var(--theme-300)] bg-[var(--theme-50)] dark:bg-[var(--theme-100)]/10 text-center"
          >
            <div className="font-bold text-sm text-[var(--theme-700)] dark:text-[var(--theme-200)]">{s.l}</div>
            <div className="text-xs mt-1 text-[var(--muted-foreground)]">{s.d}</div>
          </motion.div>
        ))}
      </div>
    </DiagramFrame>
  );
}

// ============================================================
// Compare 2 diagram
// ============================================================
export function Compare2Diagram({ a, b }: { a: { t: string; d: string }; b: { t: string; d: string } }) {
  return (
    <DiagramFrame label="Comparaison">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-lg mx-auto">
        {[a, b].map((side, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-4 rounded-xl border-2 border-[var(--theme-300)] bg-[var(--theme-50)] dark:bg-[var(--theme-100)]/10 text-center"
          >
            <div className="font-bold text-sm text-[var(--theme-700)] dark:text-[var(--theme-200)]">{side.t}</div>
            <div className="text-xs mt-1 text-[var(--muted-foreground)]">{side.d}</div>
          </motion.div>
        ))}
      </div>
    </DiagramFrame>
  );
}
