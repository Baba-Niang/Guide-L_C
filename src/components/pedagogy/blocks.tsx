"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Lightbulb,
  AlertTriangle,
  CheckCircle2,
  Eye,
  HelpCircle,
  ListChecks,
  Sparkles,
  Check,
  X,
  Terminal,
} from "lucide-react";
import { CodeBlock } from "./code-block";

// ============================================================
// Story block (progressive reveal steps)
// ============================================================
export function StoryBlock({
  eyebrow,
  steps,
}: {
  eyebrow?: string;
  steps: { text: string; highlight?: string }[];
}) {
  const [visible, setVisible] = useState(1);
  return (
    <div className="ped-card">
      {eyebrow && <span className="ped-card-eyebrow"><Eye size={12} /> {eyebrow}</span>}
      <h3 className="mt-3 mb-4">La situation</h3>
      <div>
        {steps.map((s, i) => {
          const isVisible = i < visible;
          return (
            <motion.div
              key={i}
              initial={false}
              animate={isVisible ? { opacity: 1, y: 0, height: "auto" } : { opacity: 0, y: -8, height: 0 }}
              transition={{ duration: 0.35 }}
              style={{ overflow: "hidden" }}
            >
              <div className="story-step">
                <span className="ss-num">{i + 1}</span>
                {s.text}
                {s.highlight && (
                  <strong className="block mt-1 text-[var(--theme-700)] dark:text-[var(--theme-200)]">
                    {s.highlight}
                  </strong>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
      {visible < steps.length && (
        <button
          onClick={() => setVisible(visible + 1)}
          className="mt-3 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--theme-100)] text-[var(--theme-700)] dark:bg-[var(--theme-100)]/15 dark:text-[var(--theme-200)] text-sm font-semibold hover:bg-[var(--theme-200)] transition-colors"
        >
          <ChevronDown size={14} />
          Suite ({visible}/{steps.length})
        </button>
      )}
      {visible >= steps.length && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-3 text-xs text-[var(--muted-foreground)] italic"
        >
          Tu as lu toute la situation. On peut passer à la suite ↓
        </motion.p>
      )}
    </div>
  );
}

// ============================================================
// Analogy block
// ============================================================
export function AnalogyBlock({
  real,
  code,
  link,
}: {
  real: { icon: string; title: string; desc: string };
  code: { icon: string; title: string; desc: string };
  link: string;
}) {
  return (
    <div className="ped-card">
      <span className="ped-card-eyebrow"><Sparkles size={12} /> Analogie</span>
      <h3 className="mt-3 mb-4">Pour comprendre, comparons à la vraie vie</h3>
      <div className="analogy-block">
        <div className="ab-side">
          <div className="ab-icon">{real.icon}</div>
          <div className="ab-title">{real.title}</div>
          <div className="ab-desc">{real.desc}</div>
        </div>
        <div className="ab-arrow">⟷</div>
        <div className="ab-side">
          <div className="ab-icon">{code.icon}</div>
          <div className="ab-title">{code.title}</div>
          <div className="ab-desc">{code.desc}</div>
        </div>
      </div>
      <p className="mt-4 text-sm text-[var(--muted-foreground)] italic text-center">
        {link}
      </p>
    </div>
  );
}

// ============================================================
// Vocab block (terms defined BEFORE use)
// ============================================================
export function VocabBlock({
  terms,
}: {
  terms: { word: string; def: string; example?: string }[];
}) {
  return (
    <div className="ped-card">
      <span className="ped-card-eyebrow"><HelpCircle size={12} /> Vocabulaire</span>
      <h3 className="mt-3 mb-1">Les mots à connaître avant de continuer</h3>
      <p className="text-sm text-[var(--muted-foreground)] mb-4">
        Ces termes seront utilisés dans la suite du chapitre. On les définit ici
        pour ne pas être surpris.
      </p>
      <div className="grid grid-cols-1 gap-2">
        {terms.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="vocab-card"
          >
            <code className="v-term">{t.word}</code>
            <div className="v-def">
              {t.def}
              {t.example && (
                <div className="mt-1 text-xs text-[var(--muted-foreground)] font-mono">
                  ex: {t.example}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ============================================================
// Reveal block (click to reveal)
// ============================================================
export function RevealBlock({
  label,
  hint,
  content,
}: {
  label: string;
  hint?: string;
  content: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="ped-card">
      <button
        onClick={() => setOpen(!open)}
        className="reveal-box w-full text-left"
        aria-expanded={open}
      >
        <div className="rb-icon">
          <Lightbulb size={16} />
        </div>
        <div className="flex-1">
          <div className="rb-label">{label}</div>
          {hint && !open && <div className="rb-hint">{hint}</div>}
        </div>
        <ChevronDown
          size={16}
          style={{
            transform: open ? "rotate(180deg)" : "none",
            transition: "transform 0.2s",
            color: "var(--theme-500)",
          }}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            style={{ overflow: "hidden" }}
          >
            <div className="reveal-content mt-2">{content}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ============================================================
// Text block (paragraphs)
// ============================================================
export function TextBlock({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="ped-card">
      {paragraphs.map((p, i) => (
        <p
          key={i}
          className="text-[0.97rem] leading-[1.75] mb-3 last:mb-0"
          dangerouslySetInnerHTML={{ __html: renderInline(p) }}
        />
      ))}
    </div>
  );
}

// Inline markdown: **bold** and `code`
function renderInline(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\*\*([^*]+)\*\*/g, '<strong class="text-[var(--theme-700)] dark:text-[var(--theme-200)]">$1</strong>')
    .replace(/`([^`]+)`/g, '<code class="font-mono text-[0.85em] bg-[var(--muted)] px-1.5 py-0.5 rounded text-[var(--theme-700)] dark:text-[var(--theme-200)]">$1</code>');
}

// ============================================================
// Error block (bad vs good)
// ============================================================
export function ErrorBlock({
  title,
  bad,
  good,
  explanation,
}: {
  title: string;
  bad: string;
  good: string;
  explanation: string;
}) {
  return (
    <div className="error-card">
      <div className="ec-eyebrow">
        <AlertTriangle size={11} />
        Erreur fréquente
      </div>
      <h3 className="text-base font-bold mb-3">{title}</h3>
      <p className="text-xs font-bold uppercase tracking-wider text-red-600 dark:text-red-400 mb-1">
        ✗ Incorrect
      </p>
      <pre className="ec-bad whitespace-pre-wrap">{bad}</pre>
      <p className="text-xs font-bold uppercase tracking-wider text-green-600 dark:text-green-400 mb-1 mt-3">
        ✓ Correct
      </p>
      <pre className="ec-good whitespace-pre-wrap">{good}</pre>
      <div className="mt-4 p-3 rounded-lg bg-white/60 dark:bg-black/20 text-sm leading-relaxed">
        <strong className="text-[var(--theme-700)] dark:text-[var(--theme-200)]">Pourquoi :</strong>{" "}
        {explanation}
      </div>
    </div>
  );
}

// ============================================================
// Challenge block (predict / fill / findBug)
// ============================================================
export function ChallengeBlock({
  variant,
  prompt,
  accept,
  badLines,
  code,
  hint,
  feedback,
  storageKey,
}: {
  variant: "predict" | "fill" | "findBug";
  prompt: string;
  accept?: string[];
  badLines?: number[];
  code?: string;
  hint?: string;
  feedback?: string;
  storageKey: string;
}) {
  const [value, setValue] = useState("");
  const [submitted, setSubmitted] = useState<null | "ok" | "no">(null);
  const [showHint, setShowHint] = useState(false);
  const [selectedLine, setSelectedLine] = useState<number | null>(null);

  const check = () => {
    if (variant === "findBug") {
      if (selectedLine !== null && badLines?.includes(selectedLine)) {
        setSubmitted("ok");
      } else {
        setSubmitted("no");
      }
      return;
    }
    const v = value.trim().toLowerCase();
    const ok = accept?.some((a) => a.trim().toLowerCase() === v) ?? false;
    setSubmitted(ok ? "ok" : "no");
  };

  return (
    <div className="challenge-card">
      <div className="ch-eyebrow">
        {variant === "predict" && <><Eye size={11} /> Prédis le résultat</>}
        {variant === "fill" && <><Sparkles size={11} /> Complète le code</>}
        {variant === "findBug" && <><AlertTriangle size={11} /> Trouve l'erreur</>}
      </div>
      <div className="ch-prompt">{prompt}</div>

      {code && (
        <div className="mb-4">
          {variant === "findBug" ? (
            <div className="code-block" style={{ borderRadius: "0.875rem", overflow: "hidden" }}>
              <div className="code-header">
                <span className="ch-fname">code.c</span>
                <span className="text-[0.7rem] opacity-70">Clique sur la ligne fautive</span>
              </div>
              <div className="code-body" style={{ fontSize: "0.83rem" }}>
                {code.split("\n").map((line, i) => {
                  const lineNum = i + 1;
                  const isSel = selectedLine === lineNum;
                  return (
                    <div
                      key={i}
                      className={`code-line ${isSel ? "active" : ""}`}
                      onClick={() => !submitted && setSelectedLine(isSel ? null : lineNum)}
                      style={{ cursor: submitted ? "default" : "pointer" }}
                    >
                      <span className="cl-num">{lineNum}</span>
                      <span className="cl-content font-mono">{line || "\u00A0"}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            <pre className="bg-[var(--code-bg)] text-[var(--code-fg)] p-3 rounded-lg text-xs font-mono overflow-x-auto mb-3">
              {code}
            </pre>
          )}
        </div>
      )}

      {variant !== "findBug" && (
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && check()}
          disabled={submitted === "ok"}
          placeholder={variant === "predict" ? "Ta réponse…" : "Le code manquant…"}
          className={`ch-input ${submitted === "ok" ? "correct" : submitted === "no" ? "wrong" : ""}`}
        />
      )}

      <div className="mt-3 flex items-center gap-2 flex-wrap">
        {submitted !== "ok" && (
          <button onClick={check} className="ch-verify" disabled={variant === "findBug" && selectedLine === null}>
            <Check size={14} />
            Vérifier
          </button>
        )}
        {hint && !submitted && (
          <button
            onClick={() => setShowHint(!showHint)}
            className="text-xs text-[var(--muted-foreground)] hover:text-[var(--foreground)] underline"
          >
            {showHint ? "Masquer l'indice" : "Un indice ?"}
          </button>
        )}
      </div>

      {showHint && hint && !submitted && (
        <p className="ch-hint">{hint}</p>
      )}

      {submitted && (
        <motion.div
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className={`ch-feedback mt-3 ${submitted === "ok" ? "ok" : "no"}`}
        >
          {submitted === "ok" ? (
            <>
              <CheckCircle2 size={14} className="inline mr-1.5 -mt-0.5" />
              <strong>Correct ! </strong>
              {feedback}
            </>
          ) : (
            <>
              <X size={14} className="inline mr-1.5 -mt-0.5" />
              <strong>Pas tout à fait. </strong>
              {hint ? `Indice : ${hint}` : "Réessaie ou révèle la réponse."}
              <button
                onClick={() => setSubmitted(null)}
                className="ml-2 underline text-xs"
              >
                Réessayer
              </button>
            </>
          )}
        </motion.div>
      )}

      {submitted === "no" && feedback && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSubmitted("ok")}
          className="mt-2 text-xs text-[var(--muted-foreground)] underline"
        >
          Révéler la réponse
        </motion.button>
      )}
    </div>
  );
}

// ============================================================
// Quiz block
// ============================================================
export function QuizBlock({
  question,
  options,
  correctIndex,
  explanation,
  storageKey,
  onSolved,
}: {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  storageKey: string;
  onSolved?: () => void;
}) {
  const [sel, setSel] = useState<number | null>(null);
  const [show, setShow] = useState(false);

  const handleSelect = (i: number) => {
    if (show) return;
    setSel(i);
  };

  const handleValidate = () => {
    if (sel === null) return;
    setShow(true);
    if (sel === correctIndex && onSolved) onSolved();
  };

  const reset = () => {
    setSel(null);
    setShow(false);
  };

  return (
    <div className="quiz-card">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-7 h-7 rounded-full bg-[var(--theme-100)] text-[var(--theme-600)] dark:bg-[var(--theme-100)]/15 dark:text-[var(--theme-200)] flex items-center justify-center">
          <HelpCircle size={14} />
        </div>
        <span className="text-xs font-bold uppercase tracking-widest text-[var(--muted-foreground)]">
          Mini-quiz
        </span>
      </div>
      <p className="qz-question">{question}</p>
      <div>
        {options.map((opt, i) => {
          let cls = "qz-option";
          if (show && i === correctIndex) cls += " correct";
          if (show && sel === i && i !== correctIndex) cls += " wrong";
          if (!show && sel === i) cls += " selected";
          return (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              disabled={show}
              className={cls}
            >
              <span className="qo-letter">{String.fromCharCode(65 + i)}</span>
              <span>{opt}</span>
              {show && i === correctIndex && <CheckCircle2 size={16} className="ml-auto text-green-500" />}
              {show && sel === i && i !== correctIndex && <X size={16} className="ml-auto text-red-500" />}
            </button>
          );
        })}
      </div>
      {!show && sel !== null && (
        <button onClick={handleValidate} className="ch-verify mt-3">
          <Check size={14} />
          Valider ma réponse
        </button>
      )}
      {show && (
        <motion.div
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className={`qz-expl mt-3 ${sel === correctIndex ? "ok" : "no"}`}
        >
          <strong>{sel === correctIndex ? "Bien vu ! " : "Pas tout à fait. "}</strong>
          {explanation}
          <button onClick={reset} className="ml-2 underline text-xs">
            Réessayer
          </button>
        </motion.div>
      )}
    </div>
  );
}

// ============================================================
// Recap block (chapter summary)
// ============================================================
export function RecapBlock({
  title,
  bullets,
}: {
  title: string;
  bullets: { icon?: string; text: string }[];
}) {
  return (
    <div className="ped-card" style={{ background: "linear-gradient(135deg, var(--theme-50), var(--card))", borderColor: "var(--theme-200)" }}>
      <span className="ped-card-eyebrow">
        <ListChecks size={12} />
        Bilan
      </span>
      <h3 className="mt-3 mb-4">{title}</h3>
      <ul className="space-y-2.5">
        {bullets.map((b, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="flex items-start gap-3"
          >
            <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0 text-[var(--theme-500)]" />
            <span
              className="text-sm leading-relaxed"
              dangerouslySetInnerHTML={{ __html: renderInline(b.text) }}
            />
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

// ============================================================
// Code walkthrough wrapper (uses CodeBlock)
// ============================================================
export function CodeWalkthroughBlock({
  code,
  output,
  explanations,
  filename,
}: {
  code: string;
  output?: string;
  explanations?: Record<number, string>;
  filename?: string;
}) {
  return <CodeBlock code={code} output={output} explanations={explanations} filename={filename} />;
}
