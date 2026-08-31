'use client';
import { useEffect, useState, useRef, useMemo } from 'react';
import { useGuideStore, TOTAL_CHAPTERS } from '@/lib/store';
import { chapters, Chapter } from '@/lib/chapters';
import { themes } from '@/lib/themes';
import { highlightC } from '@/lib/syntax';
import { quizzes } from '@/lib/quizzes';
import {
Search, Sun, Moon, Menu, X, ChevronLeft, ChevronRight, Star,
BookOpen, Code2, Trophy, Home, Palette, CheckCircle2, Circle,
ArrowRight, Clock, Zap, GraduationCap, StarOff, Terminal,
Lightbulb, AlertTriangle, Eye, PlayCircle, FileText, Copy, Check,
BookmarkPlus, Bookmark, Layers, Target, ArrowRightLeft,
Monitor, Box, Calculator, GitBranch, Repeat, Package, LayoutGrid,
Type, HardDrive, FolderTree, Recycle, ShieldCheck
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
/* ============================================================
ICON MAP & CONFIG
============================================================ */
const iconMap: Record<string, React.ElementType> = {
Monitor, Box, Calculator, GitBranch, Repeat, Package, LayoutGrid,
ArrowRightLeft, Type, Layers, HardDrive, FileText, FolderTree,
Recycle, Zap, ShieldCheck,
};
const blockConfig: Record<string, { icon: React.ElementType; label: string; className: string }> = {
title: { icon: BookOpen, label: '', className: '' },
situation: { icon: Eye, label: 'Situation reelle', className: 'block-situation' },
problem: { icon: AlertTriangle, label: 'Probleme', className: 'block-problem' },
question: { icon: Lightbulb, label: 'Question', className: 'block-question' },
reasoning: { icon: Zap, label: 'Raisonnement', className: 'block-reasoning' },
rule: { icon: Target, label: 'A retenir', className: 'block-rule' },
visual: { icon: Layers, label: 'Representation visuelle', className: 'block-visual' },
example: { icon: Code2, label: 'Exemple', className: 'block-example' },
error: { icon: AlertTriangle, label: 'Erreur frequente', className: 'block-error' },
exercise: { icon: PlayCircle, label: 'Exercice', className: 'block-exercise' },
correction: { icon: CheckCircle2, label: 'Correction', className: 'block-correction' },
verification: { icon: CheckCircle2, label: 'Verification', className: 'block-correction' },
summary: { icon: Trophy, label: 'Bilan', className: 'block-summary' },
comparison: { icon: ArrowRightLeft, label: 'Comparaison', className: 'block-comparison' },
content: { icon: FileText, label: '', className: 'block-example' },
};
const shortTitles: Record<number, string> = {
1: 'Programme C', 2: 'Variables', 3: 'Operateurs', 4: 'Conditions',
5: 'Boucles', 6: 'Fonctions', 7: 'Tableaux', 8: 'Pointeurs',
9: 'Chaines', 10: 'Structures', 11: 'Alloc dynamique', 12: 'Fichiers',
13: 'Modularite', 14: 'Recursivite', 15: 'Pt avances', 16: 'Debogage',
};
/* ============================================================
CODE BLOCK WITH EXPLANATIONS
============================================================ */
function CodeBlock({ code, label, explanations }: { code: string; label?: string; explanations?: string[] }) {
const [copied, setCopied] = useState(false);
const [showExpl, setShowExpl] = useState(false);
const highlighted = useMemo(() => {
const lines = highlightC(code).split('\n');
return lines.map((line, i) =>
`<span class="line-num">${String(i + 1).padStart(2, ' ')}</span>  ${line}`
).join('\n');
}, [code]);
const copy = () => { navigator.clipboard.writeText(code); setCopied(true); setTimeout(() => setCopied(false), 2000); };
const codeLines = code.split('\n');
const hasExpl = explanations && explanations.length > 0;
return (
<div className="my-6">
<div className="code-block">
<div className="code-header">
<span>{label || 'C'}</span>
<div className="flex items-center gap-2">
{hasExpl && (
<button
onClick={() => setShowExpl(!showExpl)}
className="copy-btn"
style={{ fontSize: '0.7rem', padding: '0.2rem 0.6rem' }}
>
{showExpl ? 'Masquer' : 'Expliquer'}
</button>
)}
<button className="copy-btn" onClick={copy}>
{copied ? <><Check size={11} /> Copie</> : <><Copy size={11} /> Copier</>}
</button>
</div>
</div>
<pre><code dangerouslySetInnerHTML={{ __html: highlighted }} /></pre>
</div>
{hasExpl && showExpl && (
<motion.div
initial={{ opacity: 0, y: -8 }}
animate={{ opacity: 1, y: 0 }}
className="code-explanation mt-0.5 rounded-t-none"
style={{ borderRadius: '0 0 0.875rem 0.875rem' }}
>
{codeLines.map((line, i) => (
<div key={i} className="expl-line">
<span className="expl-code">{line}</span>
{explanations[i] ? (
<>
<span className="expl-arrow">&#x2192;</span>
<span className="expl-text">{explanations[i]}</span>
</>
) : <span className="flex-1" />}
</div>
))}
</motion.div>
)}
</div>
);
}
/* ============================================================
DIAGRAM COMPONENTS
============================================================ */
function DiagramWrap({ title, children }: { title: string; children: React.ReactNode }) {
return (
<div className="diagram-container my-8">
<p className="text-xs font-bold mb-5 text-[var(--muted-foreground)] uppercase tracking-widest">{title}</p>
{children}
</div>
);
}
function ProcessDiagram({ steps, title }: { steps: string[]; title?: string }) {
return (
<DiagramWrap title={title || 'Processus'}>
<div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
{steps.map((step, i) => (
<div key={i} className="flex items-center gap-2 md:gap-3">
<div className="diagram-box border-[var(--theme-400)] bg-[var(--theme-50)] text-[var(--theme-700)] shadow-sm">
{step}
</div>
{i < steps.length - 1 && (
<div className="diagram-arrow text-[var(--theme-400)] text-lg md:text-xl">&#x2192;</div>
)}
</div>
))}
</div>
</DiagramWrap>
);
}
function MemoryDiagram({ vars }: { vars: { name: string; type: string; value: string }[] }) {
return (
<DiagramWrap title="Representation en memoire">
<div className="flex flex-wrap justify-center gap-4">
{vars.map((v, i) => (
<div key={i} className="flex flex-col items-center gap-1.5">
<div className="memory-cell">
<div className="cell-value text-center">{v.value}</div>
<div className="cell-label text-center">{v.name}</div>
</div>
<div className="text-xs text-[var(--muted-foreground)] font-mono mt-0.5">
{v.type} {v.name}
</div>
</div>
))}
</div>
</DiagramWrap>
);
}
function ArrayDiagram({ name, values }: { name: string; values: string[] }) {
return (
<DiagramWrap title={`Tableau : ${name}`}>
<div className="flex flex-col items-center gap-1">
<div className="flex items-stretch">
<div className="text-xs text-[var(--muted-foreground)] flex items-center pr-3 font-mono font-semibold">{name}</div>
<div className="flex">
{values.map((v, i) => (
<div key={i} className="array-cell">
<div className="cell-idx">[{i}]</div>
<div className="cell-val">{v}</div>
</div>
))}
</div>
</div>
<p className="text-xs text-[var(--muted-foreground)] mt-2">
{values.length} cases, indices de 0 a {values.length - 1}
</p>
</div>
</DiagramWrap>
);
}
function PointerDiagram({ varName, ptrName, value, addr }: { varName: string; ptrName: string; value: string; addr: string }) {
return (
<DiagramWrap title="Pointeur et variable">
<div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
<div className="flex flex-col items-center gap-2">
<div className="memory-cell">
<div className="cell-value text-center">{value}</div>
<div className="cell-label text-center">{varName}</div>
</div>
<div className="text-[10px] text-[var(--muted-foreground)] font-mono">{addr}</div>
</div>
<div className="flex flex-col items-center gap-1">
<svg width="40" height="40" viewBox="0 0 40 40" className="text-[var(--theme-400)]">
<path d="M20 4 L20 28" stroke="currentColor" strokeWidth="2" fill="none" />
<path d="M20 28 L12 20" stroke="currentColor" strokeWidth="2" fill="none" />
<path d="M20 28 L28 20" stroke="currentColor" strokeWidth="2" fill="none" />
</svg>
<div className="text-[10px] text-[var(--muted-foreground)]">*ptr = {value}</div>
</div>
<div className="flex flex-col items-center gap-2">
<div className="memory-cell" style={{ borderColor: 'var(--theme-500)' }}>
<div className="cell-value text-center" style={{ color: 'var(--theme-600)' }}>{addr}</div>
<div className="cell-label text-center">{ptrName}</div>
</div>
<div className="text-[10px] text-[var(--muted-foreground)] font-mono">contient l&apos;adresse</div>
</div>
</div>
</DiagramWrap>
);
}
function FlowDiagramConditional() {
return (
<DiagramWrap title="Flux conditionnel (if / else)">
<div className="flex flex-col items-center gap-1.5 py-2">
<div className="diagram-box border-[var(--theme-300)] bg-[var(--theme-50)] text-[var(--theme-700)]">Debut</div>
<svg width="20" height="20" className="text-[var(--theme-300)]"><path d="M10 2 L10 18" stroke="currentColor" strokeWidth="2"/><path d="M10 18 L5 13" stroke="currentColor" strokeWidth="2"/><path d="M10 18 L15 13" stroke="currentColor" strokeWidth="2"/></svg>
<div className="px-6 py-2.5 bg-amber-50 border-2 border-amber-400 text-amber-700 rounded-lg font-bold text-sm">Condition ?</div>
<div className="flex gap-8 md:gap-14 mt-1">
<div className="flex flex-col items-center gap-1.5">
<span className="text-[10px] font-bold text-green-600 uppercase tracking-wider">Vrai</span>
<svg width="20" height="20" className="text-green-500"><path d="M10 2 L10 16" stroke="currentColor" strokeWidth="2"/><path d="M10 16 L5 11" stroke="currentColor" strokeWidth="2"/><path d="M10 16 L15 11" stroke="currentColor" strokeWidth="2"/></svg>
<div className="diagram-box border-green-400 bg-green-50 text-green-700">Bloc A</div>
</div>
<div className="flex flex-col items-center gap-1.5">
<span className="text-[10px] font-bold text-red-500 uppercase tracking-wider">Faux</span>
<svg width="20" height="20" className="text-red-400"><path d="M10 2 L10 16" stroke="currentColor" strokeWidth="2"/><path d="M10 16 L5 11" stroke="currentColor" strokeWidth="2"/><path d="M10 16 L15 11" stroke="currentColor" strokeWidth="2"/></svg>
<div className="diagram-box border-red-400 bg-red-50 text-red-700">Bloc B</div>
</div>
</div>
<svg width="20" height="20" className="text-[var(--theme-300)] mt-1"><path d="M10 2 L10 16" stroke="currentColor" strokeWidth="2"/><path d="M10 16 L5 11" stroke="currentColor" strokeWidth="2"/><path d="M10 16 L15 11" stroke="currentColor" strokeWidth="2"/></svg>
<div className="diagram-box border-[var(--theme-300)] bg-[var(--theme-50)] text-[var(--theme-700)]">Suite</div>
</div>
</DiagramWrap>
);
}
function FlowDiagramLoop() {
return (
<DiagramWrap title="Flux d'une boucle">
<div className="flex flex-col items-center gap-1.5 py-2">
<div className="diagram-box border-[var(--theme-300)] bg-[var(--theme-50)] text-[var(--theme-700)]">Initialisation</div>
<svg width="20" height="20" className="text-[var(--theme-300)]"><path d="M10 2 L10 18" stroke="currentColor" strokeWidth="2"/><path d="M10 18 L5 13" stroke="currentColor" strokeWidth="2"/><path d="M10 18 L15 13" stroke="currentColor" strokeWidth="2"/></svg>
<div className="px-6 py-2.5 bg-amber-50 border-2 border-amber-400 text-amber-700 rounded-lg font-bold text-sm">Condition ?</div>
<div className="flex gap-10 md:gap-16 mt-1">
<div className="flex flex-col items-center gap-1.5">
<span className="text-[10px] font-bold text-green-600 uppercase tracking-wider">Vrai</span>
<svg width="20" height="20" className="text-green-500"><path d="M10 2 L10 16" stroke="currentColor" strokeWidth="2"/><path d="M10 16 L5 11" stroke="currentColor" strokeWidth="2"/><path d="M10 16 L15 11" stroke="currentColor" strokeWidth="2"/></svg>
<div className="diagram-box border-green-400 bg-green-50 text-green-700">Instructions</div>
<svg width="20" height="20" className="text-green-500"><path d="M10 16 L10 2" stroke="currentColor" strokeWidth="2"/><path d="M10 2 L5 7" stroke="currentColor" strokeWidth="2"/><path d="M10 2 L15 7" stroke="currentColor" strokeWidth="2"/></svg>
<span className="text-[10px] text-green-600 font-semibold">recommence</span>
</div>
<div className="flex flex-col items-center gap-1.5">
<span className="text-[10px] font-bold text-red-500 uppercase tracking-wider">Faux</span>
<svg width="20" height="20" className="text-red-400"><path d="M10 2 L10 16" stroke="currentColor" strokeWidth="2"/><path d="M10 16 L5 11" stroke="currentColor" strokeWidth="2"/><path d="M10 16 L15 11" stroke="currentColor" strokeWidth="2"/></svg>
<div className="diagram-box border-red-400 bg-red-50 text-red-700">Sortie</div>
</div>
</div>
</div>
</DiagramWrap>
);
}
function FunctionDiagram({ name, params, ret }: { name: string; params: string; ret: string }) {
return (
<DiagramWrap title="Modele d'une fonction">
<div className="flex flex-wrap items-center justify-center gap-3 md:gap-5">
<div className="flex flex-col items-center gap-1">
<div className="p-3 rounded-xl border-2 border-blue-300 bg-blue-50 text-blue-700 text-center min-w-[100px]">
<div className="font-mono text-xs font-bold">{params}</div>
<div className="text-[10px] mt-0.5 opacity-60">entrees</div>
</div>
</div>
<svg width="32" height="20" className="text-blue-400"><path d="M2 10 L26 10" stroke="currentColor" strokeWidth="2" markerEnd="url(#ah)"/><defs><marker id="ah" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="currentColor"/></marker></defs></svg>
<div className="p-4 rounded-2xl border-2 border-[var(--theme-400)] bg-[var(--theme-50)] text-center min-w-[130px]">
<div className="font-mono font-bold text-[var(--theme-700)]">{name}()</div>
<div className="text-[10px] text-[var(--muted-foreground)] mt-1">traitement</div>
</div>
<svg width="32" height="20" className="text-[var(--theme-400)]"><path d="M2 10 L26 10" stroke="currentColor" strokeWidth="2" markerEnd="url(#ah)"/></svg>
<div className="p-3 rounded-xl border-2 border-green-300 bg-green-50 text-green-700 text-center min-w-[100px]">
<div className="font-mono text-xs font-bold">{ret}</div>
<div className="text-[10px] mt-0.5 opacity-60">sortie</div>
</div>
</div>
</DiagramWrap>
);
}
function StringDiagram({ text }: { text: string }) {
const chars = text.split('').concat(['\\0']);
return (
<DiagramWrap title="Chaine en memoire">
<div className="flex flex-col items-center gap-2">
<div className="flex">
{chars.map((c, i) => (
<div key={i} className={`array-cell ${c === '\\0' ? '' : ''}`} style={c === '\\0' ? { borderColor: '#ef4444' } : {}}>
<div className="cell-val" style={c === '\\0' ? { color: '#ef4444', fontSize: '0.75rem' } : {}}>{c}</div>
</div>
))}
</div>
<p className="text-xs text-red-500 mt-1">Le caractere <span className="font-mono font-bold">\\0</span> marque la fin de la chaine</p>
</div>
</DiagramWrap>
);
}
function StructDiagram({ name, fields }: { name: string; fields: { name: string; type: string }[] }) {
return (
<DiagramWrap title={`Structure : ${name}`}>
<div className="inline-flex flex-col rounded-xl border-2 border-[var(--theme-400)] overflow-hidden shadow-sm">
<div className="bg-[var(--theme-500)] text-white text-center py-2.5 font-bold text-sm tracking-wide">
struct {name}
</div>
{fields.map((f, i) => (
<div key={i} className="flex justify-between px-5 py-2.5 bg-white border-t border-[var(--border)]">
<span className="font-mono text-sm text-[var(--theme-700)] font-semibold">{f.name}</span>
<span className="font-mono text-xs text-[var(--muted-foreground)] bg-[var(--muted)] px-2 py-0.5 rounded">{f.type}</span>
</div>
))}
</div>
</DiagramWrap>
);
}
function MallocDiagram() {
return (
<DiagramWrap title="Allocation dynamique">
<div className="flex flex-wrap items-center justify-center gap-5 md:gap-8">
<div className="flex flex-col items-center gap-2">
<div className="p-3 px-5 rounded-xl bg-[var(--theme-50)] border-2 border-[var(--theme-300)] font-mono text-sm font-bold text-[var(--theme-700)]">malloc(n * sizeof(int))</div>
<svg width="20" height="20" className="text-[var(--theme-400)]"><path d="M10 2 L10 16" stroke="currentColor" strokeWidth="2"/><path d="M10 16 L5 11" stroke="currentColor" strokeWidth="2"/><path d="M10 16 L15 11" stroke="currentColor" strokeWidth="2"/></svg>
<div className="p-3 rounded-lg bg-[var(--theme-100)] text-[var(--theme-700)] text-sm font-semibold">Tas (Heap)</div>
</div>
<div className="flex flex-col items-center gap-2">
<div className="memory-cell" style={{ borderColor: 'var(--theme-500)' }}>
<div className="cell-value text-center" style={{ color: 'var(--theme-600)' }}>adresse</div>
<div className="cell-label text-center">ptr</div>
</div>
<div className="text-[10px] text-[var(--muted-foreground)]">pointeur</div>
</div>
<div className="flex flex-col items-center gap-2">
<div className="p-3 px-5 rounded-xl bg-red-50 border-2 border-red-300 font-mono text-sm font-bold text-red-700">free(ptr)</div>
<svg width="20" height="20" className="text-red-400"><path d="M10 2 L10 16" stroke="currentColor" strokeWidth="2"/><path d="M10 16 L5 11" stroke="currentColor" strokeWidth="2"/><path d="M10 16 L15 11" stroke="currentColor" strokeWidth="2"/></svg>
<div className="p-3 rounded-lg bg-gray-100 text-gray-600 text-sm">Liberee</div>
</div>
</div>
</DiagramWrap>
);
}
function RecursionDiagram() {
return (
<DiagramWrap title="Recursivite : empilement des appels">
<div className="flex items-end justify-center gap-0">
{['fact(5)', 'fact(4)', 'fact(3)', 'fact(2)', 'fact(1)'].map((call, i) => (
<div key={i} className="flex flex-col items-center" style={{ width: `${100 - i * 14}px` }}>
<div className="w-full rounded-t-lg bg-[var(--theme-200)] border-2 border-[var(--theme-400)] border-b-0 p-2 text-center">
<span className="font-mono text-xs font-bold text-[var(--theme-700)]">{call}</span>
</div>
</div>
))}
</div>
<p className="text-xs text-[var(--muted-foreground)] mt-4">Chaque appel s&apos;empile, puis se resout en remontant</p>
</DiagramWrap>
);
}
/* ============================================================
CHAPTER-SPECIFIC DIAGRAM SELECTOR
============================================================ */
function ChapterDiagrams({ chapterId }: { chapterId: number }) {
switch (chapterId) {
case 1: return (
<>
<ProcessDiagram steps={["Ecrire le code (.c)", "Compiler (gcc)", "Executable", "Executer"]} title="Les 4 etapes" />
<DiagramWrap title="Environnement de travail">
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-lg mx-auto">
{[
{ name: 'Editeur', desc: 'Ecrire le code source', icon: '&#x1f4dd;', c: 'bg-blue-50 border-blue-300 text-blue-700' },
{ name: 'Terminal', desc: 'Compiler et executer', icon: '&#x2328;', c: 'bg-gray-50 border-gray-300 text-gray-700' },
{ name: 'GCC', desc: 'Traduire C en binaire', icon: '&#x2699;', c: 'bg-orange-50 border-orange-300 text-orange-700' },
].map((item, i) => (
<div key={i} className={`p-5 rounded-xl border-2 ${item.c} text-center transition-transform hover:scale-[1.03]`}>
<div className="text-2xl mb-2" dangerouslySetInnerHTML={{ __html: item.icon }} />
<div className="font-bold text-sm">{item.name}</div>
<div className="text-xs mt-1 opacity-60">{item.desc}</div>
</div>
))}
</div>
</DiagramWrap>
</>
);
case 2: return (
<>
<MemoryDiagram vars={[{ name: 'age', type: 'int', value: '20' }, { name: 'prix', type: 'float', value: '3.14' }, { name: 'lettre', type: 'char', value: "'A'" }]} />
<DiagramWrap title="Declaration en 2 etapes">
<div className="flex flex-col items-center gap-3">
<div className="flex items-center gap-4 text-sm">
<div className="p-3 rounded-lg border-2 border-dashed border-[var(--theme-300)] font-mono">int age;</div>
<span className="text-[var(--muted-foreground)]">puis</span>
<div className="p-3 rounded-lg border-2 border-solid border-[var(--theme-400)] bg-[var(--theme-50)] font-mono">age = 20;</div>
</div>
<div className="flex items-center gap-2 text-sm mt-1">
<span className="text-[var(--muted-foreground)]">ou directement :</span>
<div className="p-3 rounded-lg border-2 border-solid border-[var(--theme-500)] bg-[var(--theme-100)] font-mono font-bold">int age = 20;</div>
</div>
</div>
</DiagramWrap>
</>
);
case 3: return (
<DiagramWrap title="Les 3 familles d'operateurs">
<div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-xl mx-auto">
{[
{ title: 'Arithmetiques', items: ['+  -  *  /  %'], c: 'border-[var(--theme-300)] bg-[var(--theme-50)] text-[var(--theme-700)]' },
{ title: 'Comparaison', items: ['==  !=  >  <  >=  <='], c: 'border-amber-300 bg-amber-50 text-amber-700' },
{ title: 'Logiques', items: ['&&  ||  !'], c: 'border-purple-300 bg-purple-50 text-purple-700' },
].map((g, i) => (
<div key={i} className={`rounded-xl border-2 ${g.c} p-4 text-center`}>
<div className="font-bold text-sm mb-2">{g.title}</div>
<div className="font-mono text-xs space-y-1">{g.items.map(it => <div key={it}>{it}</div>)}</div>
</div>
))}
</div>
</DiagramWrap>
);
case 4: return <FlowDiagramConditional />;
case 5: return <FlowDiagramLoop />;
case 6: return <FunctionDiagram name="addition" params="int a, int b" ret="int" />;
case 7: return <ArrayDiagram name="notes" values={["12", "15", "8", "18", "14"]} />;
case 8: return <PointerDiagram varName="age" ptrName="ptr" value="20" addr="0x7ffc" />;
case 9: return <StringDiagram text="Bonjour" />;
case 10: return <StructDiagram name="Etudiant" fields={[{ name: 'nom', type: 'char[20]' }, { name: 'age', type: 'int' }, { name: 'moyenne', type: 'float' }]} />;
case 11: return <MallocDiagram />;
case 12: return <ProcessDiagram steps={["fopen()", "Lire / Ecrire", "fclose()"]} title="Manipulation de fichiers" />;
case 13: return (
<DiagramWrap title="Organisation en modules">
<div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-md mx-auto">
{[{ f: 'main.c', d: 'Programme principal', bg: 'bg-[var(--theme-50)]' }, { f: 'utils.h', d: 'Declarations', bg: 'bg-blue-50' }, { f: 'utils.c', d: 'Implementation', bg: 'bg-amber-50' }].map((m, i) => (
<div key={i} className={`p-4 rounded-xl border-2 border-[var(--border)] ${m.bg} text-center`}>
<div className="font-mono font-bold text-sm text-[var(--foreground)]">{m.f}</div>
<div className="text-xs text-[var(--muted-foreground)] mt-1">{m.d}</div>
</div>
))}
</div>
</DiagramWrap>
);
case 14: return <RecursionDiagram />;
case 15: return (
<DiagramWrap title="Pointeur sur fonction">
<div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
<div className="p-4 rounded-xl border-2 border-[var(--theme-400)] bg-[var(--theme-50)] text-[var(--theme-700)] font-mono text-sm text-center">
<div className="font-bold">int (*ptr)(int,int)</div>
<div className="text-[10px] mt-1 opacity-60">stocke l&apos;adresse d&apos;une fonction</div>
</div>
<svg width="32" height="20" className="text-[var(--theme-400)]"><path d="M2 10 L26 10" stroke="currentColor" strokeWidth="2" markerEnd="url(#ah)"/></svg>
<div className="p-4 rounded-xl border-2 border-blue-300 bg-blue-50 text-blue-700 font-mono text-sm text-center">
<div className="font-bold">int add(int a, int b)</div>
<div className="text-[10px] mt-1 opacity-60">la fonction ciblee</div>
</div>
</div>
</DiagramWrap>
);
case 16: return (
<DiagramWrap title="3 niveaux de defense">
<div className="flex flex-col items-center gap-3 max-w-sm mx-auto">
{[
{ l: '1. Prevenir', d: 'Initialiser, compiler avec -Wall -Wextra', c: 'border-green-400 bg-green-50 text-green-700' },
{ l: '2. Verifier', d: 'Tester retours de malloc, fopen, scanf', c: 'border-amber-400 bg-amber-50 text-amber-700' },
{ l: '3. Diagnostiquer', d: 'printf debug, gdb, valgrind', c: 'border-red-400 bg-red-50 text-red-700' },
].map((it, i) => (
<div key={i} className={`w-full p-3.5 rounded-xl border-2 ${it.c} text-center`}>
<div className="font-bold text-sm">{it.l}</div>
<div className="text-xs mt-1 opacity-65">{it.d}</div>
</div>
))}
</div>
</DiagramWrap>
);
default: return null;
}
}
/* ============================================================
BLOCK RENDERER
============================================================ */
function SlideBlock({ block, chapterId, index }: { block: Chapter['blocks'][0]; chapterId: number; index: number }) {
const config = blockConfig[block.type] || blockConfig.content;
const Icon = config.icon;
const isDark = block.type === 'rule';
// Ces types de blocs sont les plus denses en texte (situation, probleme,
// raisonnement, question) : on les rend scannables avec des puces plutot
// que des paragraphes empiles.
const isTextual = ['situation', 'problem', 'reasoning', 'question'].includes(block.type);
return (
<motion.div
initial={{ opacity: 0, y: 16 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, margin: '-40px' }}
transition={{ duration: 0.35, delay: Math.min(index * 0.04, 0.25) }}
className={`block-card ${config.className} mb-6`}
>
{config.label && (
<div className={`flex items-center gap-2 mb-4 ${isDark ? 'text-white/70' : 'text-[var(--muted-foreground)]'}`}>
<Icon size={15} />
<span className="text-[11px] font-bold uppercase tracking-widest">{config.label}</span>
</div>
)}
{block.content.map((line, i) => {
// Ligne residuelle du gabarit source ("Texte :") : on ne l'affiche pas.
if (/^Texte\s*:?\s*$/i.test(line.trim())) return null;
// La phrase d'analogie / exemple concret est la plus memorable du bloc :
// on la sort du flux de texte pour en faire un encart visuel a part.
if (/^(En vrai|Analogie|Exemple concret)\s*:/i.test(line.trim()))
return (
<div key={i} className={`flex items-start gap-3 mt-3 mb-1 p-3.5 rounded-lg ${isDark ? 'bg-white/10' : 'bg-[var(--card)] border border-[var(--border)]'}`}>
<Lightbulb size={16} className={`mt-0.5 flex-shrink-0 ${isDark ? 'text-white/80' : 'text-[var(--theme-500)]'}`} />
<span className="italic leading-relaxed text-sm">{line}</span>
</div>
);
if (/^Consigne/i.test(line))
return <p key={i} className={`text-sm italic mt-2 ${isDark ? 'text-white/60' : 'text-[var(--muted-foreground)]'}`}>{line}</p>;
if (/^\s*[-\u2022]\s/.test(line))
return <div key={i} className="flex items-start gap-2.5 mb-2"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-current opacity-30 flex-shrink-0" /><span className="leading-relaxed">{line.replace(/^\s*[-\u2022]\s*/, '')}</span></div>;
const nm = line.match(/^(\d+)\.\s(.+)/);
if (nm)
return <div key={i} className="flex items-start gap-3 mb-2"><span className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold flex-shrink-0 ${isDark ? 'bg-white/20' : 'bg-[var(--theme-100)] text-[var(--theme-700)]'}`}>{nm[1]}</span><span className="leading-relaxed">{nm[2]}</span></div>;
// Phrase "nue" dans un bloc textuel dense : on la transforme en ligne a
// puce plutot qu'en paragraphe, pour casser le mur de texte.
if (isTextual)
return (
<div key={i} className="flex items-start gap-2.5 mb-2.5">
<span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${isDark ? 'bg-white/50' : 'bg-[var(--theme-400)]'}`} />
<span className="leading-relaxed">{line}</span>
</div>
);
return <p key={i} className={`mb-1.5 leading-[1.75] ${line.length > 100 ? 'mb-2.5' : ''}`}>{line}</p>;
})}
{block.code && <CodeBlock code={block.code.code} />}
</motion.div>
);
}
/* ============================================================
QUIZ
============================================================ */
function ChapterQuiz({ chapterId }: { chapterId: number }) {
const quiz = quizzes[chapterId];
const [sel, setSel] = useState<number | null>(null);
const [show, setShow] = useState(false);
if (!quiz) return null;
return (
<motion.div
initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
className="block-card border-2 border-[var(--theme-300)] bg-[var(--theme-50)] mb-8"
>
<div className="flex items-center gap-2 mb-4">
<GraduationCap size={16} className="text-[var(--theme-500)]" />
<span className="text-[11px] font-bold uppercase tracking-widest text-[var(--theme-600)]">Quiz</span>
</div>
<p className="text-base font-semibold mb-5 leading-relaxed">{quiz.question}</p>
<div className="space-y-2 mb-4">
{quiz.options.map((opt, i) => {
let c = 'quiz-option';
if (show && i === quiz.correctIndex) c += ' correct';
if (show && sel === i && i !== quiz.correctIndex) c += ' wrong';
if (!show && sel === i) c += ' selected';
return (
<button key={i} onClick={() => !show && setSel(i)} disabled={show} className={`${c} w-full text-left flex items-center gap-3`}>
<span className="w-7 h-7 rounded-full border-2 border-current flex items-center justify-center text-[11px] font-bold flex-shrink-0">{String.fromCharCode(65 + i)}</span>
<span className="leading-relaxed">{opt}</span>
{show && i === quiz.correctIndex && <CheckCircle2 size={16} className="ml-auto text-green-500" />}
</button>
);
})}
</div>
{!show && sel !== null && (
<button onClick={() => setShow(true)} className="w-full py-2.5 rounded-lg bg-[var(--theme-500)] text-white font-semibold text-sm hover:opacity-90 transition-all">
Voir la reponse
</button>
)}
{show && (
<motion.div initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }}
className={`p-3.5 rounded-lg text-sm leading-relaxed ${sel === quiz.correctIndex ? 'bg-green-50 text-green-800' : 'bg-amber-50 text-amber-800'}`}>
<span className="font-bold">{sel === quiz.correctIndex ? 'Correct ! ' : 'Incorrect. '}</span>{quiz.explanation}
</motion.div>
)}
</motion.div>
);
}
/* ============================================================
CHAPTER PAGE
============================================================ */
function ChapterPage({ chapter }: { chapter: Chapter }) {
const { prevChapter, nextChapter, progress, markCompleted, isFavorite, toggleFavorite } = useGuideStore();
const cp = progress[chapter.id];
const fav = isFavorite(chapter.id);
const ChIcon = iconMap[chapter.icon] || BookOpen;
const ref = useRef<HTMLDivElement>(null);

useEffect(() => { ref.current?.scrollTo(0, 0); }, [chapter.id]);

return (
<div ref={ref} className="chapter-page-scroll h-full overflow-y-auto">
  <section className="chapter-hero text-white">
    <div className="chapter-hero-inner max-w-5xl mx-auto px-5 md:px-8">
      <div className="flex items-center gap-2.5 mb-3">
        <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-white/15 backdrop-blur-sm tracking-wide">
          CHAPITRE {String(chapter.id).padStart(2, '0')}
        </span>
        {cp?.completed && (
          <span className="flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-green-400/20 text-green-100">
            <CheckCircle2 size={12} /> Terminé
          </span>
        )}
      </div>
      <div className="flex items-end justify-between gap-6">
        <div className="min-w-0">
          <h1 className="text-3xl md:text-[2.65rem] font-extrabold leading-[1.12] tracking-tight">{chapter.title}</h1>
          <p className="text-white/78 text-base md:text-lg max-w-3xl leading-relaxed mt-2">{chapter.subtitle}</p>
        </div>
        <div className="hidden md:flex items-center justify-center w-14 h-14 rounded-2xl bg-white/12 border border-white/15 shrink-0">
          <ChIcon size={28} />
        </div>
      </div>
      <div className="flex items-center gap-3 mt-4">
        <div className="flex items-center gap-2 text-sm text-white/65"><ChIcon size={15} /> {chapter.blocks.length} sections</div>
        <button onClick={() => toggleFavorite(chapter.id)} className={`flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-lg transition-all ${fav ? 'bg-yellow-400/20 text-yellow-100' : 'bg-white/10 text-white/65 hover:bg-white/20'}`}>
          {fav ? <Bookmark size={13} /> : <BookmarkPlus size={13} />} {fav ? 'Favori' : 'Ajouter'}
        </button>
      </div>
    </div>
  </section>

  <div className="max-w-5xl mx-auto px-4 md:px-8 py-8 md:py-10 space-y-4">
    <ChapterDiagrams chapterId={chapter.id} />
    {chapter.blocks.map((block, i) => <SlideBlock key={i} block={block} chapterId={chapter.id} index={i} />)}
    <ChapterQuiz chapterId={chapter.id} />
    <div className="flex justify-center py-6">
      <button onClick={() => markCompleted(chapter.id)} className={`flex items-center gap-2.5 px-8 py-3.5 rounded-xl font-semibold text-sm transition-all shadow-sm ${cp?.completed ? 'bg-green-100 text-green-700' : 'bg-[var(--theme-500)] text-white hover:opacity-90 shadow-md'}`}>
        {cp?.completed ? <CheckCircle2 size={18} /> : <Trophy size={18} />}
        {cp?.completed ? 'Chapitre terminé !' : 'Marquer comme terminé'}
      </button>
    </div>
  </div>

  <div className="chapter-nav px-4 md:px-8 py-3.5 flex items-center justify-between">
    <button onClick={prevChapter} disabled={chapter.id <= 1} className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all disabled:opacity-25 hover:bg-white/10">
      <ChevronLeft size={16} /> <span className="hidden sm:inline">Chapitre précédent</span><span className="sm:hidden">Précédent</span>
    </button>
    <span className="text-sm font-semibold tabular-nums opacity-85">{chapter.id} / {TOTAL_CHAPTERS}</span>
    <button onClick={nextChapter} disabled={chapter.id >= TOTAL_CHAPTERS} className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all disabled:opacity-25 hover:bg-white/10">
      <span className="hidden sm:inline">Chapitre suivant</span><span className="sm:hidden">Suivant</span> <ChevronRight size={16} />
    </button>
  </div>
</div>
);
}

/* ============================================================
   HOME PAGE
============================================================ */
function HomePage() {
const { setChapter, progress, getGlobalProgress } = useGuideStore();
const gp = getGlobalProgress();
const done = Object.values(progress).filter(p => p.completed).length;
return (
<div className="flex flex-col h-full overflow-y-auto">
<div className="hero-gradient text-white flex-shrink-0">
<div className="max-w-4xl mx-auto px-6 pt-20 pb-16 md:pt-28 md:pb-24 text-center relative z-10">
<motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/12 backdrop-blur-sm text-sm mb-8 border border-white/10">
<Terminal size={13} /> Par Baba Niang
</div>
<h1 className="text-5xl md:text-7xl font-extrabold mb-3 tracking-tight">LANGAGE C</h1>
<p className="text-2xl md:text-3xl font-light text-white/80 mb-3">Guide Interactif</p>
<p className="text-white/55 max-w-lg mx-auto mb-10 text-base md:text-lg leading-relaxed">
Apprends le C etape par etape, de zero jusqu&apos;aux notions avancees. Chaque concept est explique avec des exemples et des visualisations.
</p>
<button onClick={() => setChapter(1)}
className="inline-flex items-center gap-2.5 px-9 py-4 bg-white text-[var(--theme-700)] rounded-xl font-bold text-base hover:bg-white/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
Commencer le cours <ArrowRight size={18} />
</button>
</motion.div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-16 max-w-2xl mx-auto">
{[
{ v: '16', l: 'Chapitres', ic: BookOpen },
{ v: '300+', l: 'Notions', ic: Layers },
{ v: '50+', l: 'Exemples C', ic: Code2 },
{ v: '16', l: 'Quiz', ic: GraduationCap },
].map((s, i) => (
<motion.div key={i} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 0.15 + i * 0.08 }} className="stat-card">
<s.ic size={20} className="mx-auto mb-2 opacity-60" />
<div className="text-2xl font-extrabold">{s.v}</div>
<div className="text-[11px] opacity-60 mt-0.5">{s.l}</div>
</motion.div>
))}
</div>
</div>
</div>
{done > 0 && (
<div className="max-w-3xl mx-auto px-6 py-8">
<div className="flex items-center justify-between mb-2.5">
<h2 className="text-lg font-bold">Ta progression</h2>
<span className="text-sm font-bold text-[var(--theme-500)] tabular-nums">{gp}%</span>
</div>
<div className="progress-bar-track h-2"><div className="progress-bar-fill" style={{ width: `${gp}%` }} /></div>
<p className="text-sm text-[var(--muted-foreground)] mt-2.5">{done} chapitre{done > 1 ? 's' : ''} termine{done > 1 ? 's' : ''} sur {TOTAL_CHAPTERS}</p>
</div>
)}
<div className="max-w-3xl mx-auto px-6 pb-14">
<h2 className="text-lg font-bold mb-5">Sommaire du cours</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
{chapters.map((ch, i) => {
const ChIcon = iconMap[ch.icon] || BookOpen;
const p = progress[ch.id];
return (
<motion.button key={ch.id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.25, delay: 0.2 + i * 0.025 }}
onClick={() => setChapter(ch.id)}
className="flex items-start gap-3.5 p-4 rounded-xl border border-[var(--border)] bg-[var(--card)] hover:shadow-md hover:-translate-y-0.5 transition-all text-left group"
>
<div className="w-10 h-10 rounded-lg bg-[var(--theme-100)] text-[var(--theme-600)] flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--theme-200)] transition-colors">
{p?.completed ? <CheckCircle2 size={18} className="text-green-500" /> : <ChIcon size={18} />}
</div>
<div className="min-w-0 flex-1">
<div className="text-[11px] text-[var(--muted-foreground)] font-mono font-bold mb-0.5 tabular-nums">{String(ch.id).padStart(2, '0')}</div>
<div className="font-semibold text-[15px] leading-snug">{ch.title}</div>
<div className="text-xs text-[var(--muted-foreground)] mt-1 leading-relaxed">{ch.subtitle}</div>
</div>
</motion.button>
);
})}
</div>
</div>
</div>
);
}
/* ============================================================
PROGRESS / FAVORITES / SEARCH / THEME PICKER
============================================================ */
function ProgressPage() {
const { setChapter, progress, getGlobalProgress } = useGuideStore();
const gp = getGlobalProgress();
return (
<div className="flex flex-col h-full overflow-y-auto">
<div className="px-6 py-12 border-b border-[var(--border)]">
<div className="max-w-2xl mx-auto">
<h1 className="text-2xl font-extrabold mb-4">Ma Progression</h1>
<div className="flex items-center gap-4"><div className="flex-1"><div className="progress-bar-track h-2.5"><div className="progress-bar-fill" style={{ width: `${gp}%` }} /></div></div>
<span className="text-3xl font-extrabold text-[var(--theme-500)] tabular-nums">{gp}<span className="text-lg">%</span></span></div>
<p className="text-sm text-[var(--muted-foreground)] mt-3">{Object.values(progress).filter(p => p.completed).length} / {TOTAL_CHAPTERS} chapitres termines</p>
</div>
</div>
<div className="flex-1 px-6 py-6"><div className="max-w-2xl mx-auto space-y-1.5">
{chapters.map(ch => {
const p = progress[ch.id];
return (
<button key={ch.id} onClick={() => setChapter(ch.id)}
className="w-full flex items-center gap-3.5 p-3.5 rounded-xl hover:bg-[var(--muted)] transition-all text-left">
<div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
{p?.completed ? <CheckCircle2 size={18} className="text-green-500" /> : p?.visited ? <Clock size={18} className="text-[var(--theme-400)]" /> : <Circle size={18} className="text-[var(--muted-foreground)] opacity-30" />}
</div>
<div className="flex-1 min-w-0"><div className="font-semibold text-sm">{ch.title}</div><div className="text-xs text-[var(--muted-foreground)] mt-0.5">{ch.subtitle}</div></div>
<span className="text-xs font-mono text-[var(--muted-foreground)] tabular-nums">{String(ch.id).padStart(2, '0')}</span>
</button>
);
})}
</div></div>
</div>
);
}
function FavoritesPage() {
const { favorites, setChapter } = useGuideStore();
const favs = chapters.filter(ch => favorites.includes(ch.id));
return (
<div className="flex flex-col h-full overflow-y-auto">
<div className="px-6 py-12 border-b border-[var(--border)]">
<div className="max-w-2xl mx-auto"><h1 className="text-2xl font-extrabold mb-1">Mes Favoris</h1><p className="text-[var(--muted-foreground)]">{favs.length} chapitre{favs.length > 1 ? 's' : ''} enregistre{favs.length > 1 ? 's' : ''}</p></div>
</div>
<div className="flex-1 px-6 py-6"><div className="max-w-2xl mx-auto">
{favs.length === 0 ? (
<div className="text-center py-20 text-[var(--muted-foreground)]"><StarOff size={48} className="mx-auto mb-4 opacity-20" /><p className="text-lg font-medium">Aucun favori</p><p className="text-sm mt-1.5">Ajoute des chapitres en favoris pour les retrouver facilement</p></div>
) : (
<div className="space-y-2">{favs.map(ch => (
<button key={ch.id} onClick={() => setChapter(ch.id)} className="w-full flex items-center gap-3.5 p-4 rounded-xl border border-[var(--border)] bg-[var(--card)] hover:shadow-md transition-all text-left">
<div className="w-10 h-10 rounded-lg bg-yellow-50 text-yellow-600 flex items-center justify-center flex-shrink-0"><Star size={18} /></div>
<div className="min-w-0"><div className="text-xs text-[var(--muted-foreground)] font-mono tabular-nums">{String(ch.id).padStart(2, '0')}</div><div className="font-semibold">{ch.title}</div><div className="text-sm text-[var(--muted-foreground)] mt-0.5">{ch.subtitle}</div></div>
</button>
))}</div>
)}
</div></div>
</div>
);
}
function SearchOverlay() {
const { searchQuery, setSearchQuery, setSearchOpen, setChapter } = useGuideStore();
const inputRef = useRef<HTMLInputElement>(null);
const results = useMemo(() => {
if (!searchQuery.trim()) return [];
const q = searchQuery.toLowerCase();
return chapters.filter(ch => (ch.title + ' ' + ch.subtitle + ' ' + ch.keywords.join(' ') + ' ' + ch.blocks.map(b => b.content.join(' ')).join(' ')).toLowerCase().includes(q)).slice(0, 8);
}, [searchQuery]);
useEffect(() => { inputRef.current?.focus(); }, []);
return (
<div className="search-overlay" onClick={() => setSearchOpen(false)}>
<motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="search-modal" onClick={e => e.stopPropagation()}>
<div className="flex items-center gap-3 px-5 py-4 border-b border-[var(--border)]">
<Search size={18} className="text-[var(--muted-foreground)] flex-shrink-0" />
<input ref={inputRef} value={searchQuery} onChange={e => setSearchQuery(e.target.value)} placeholder="Rechercher une notion, un mot-cle..." className="flex-1 bg-transparent outline-none text-base placeholder:text-[var(--muted-foreground)]" />
<kbd className="hidden sm:inline-flex items-center px-2 py-0.5 rounded text-[11px] border border-[var(--border)] text-[var(--muted-foreground)]">ESC</kbd>
</div>
{results.length > 0 && (
<div className="max-h-80 overflow-y-auto p-2">{results.map(ch => {
const ChIcon = iconMap[ch.icon] || BookOpen;
return (
<button key={ch.id} onClick={() => { setChapter(ch.id); setSearchOpen(false); setSearchQuery(''); }} className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-[var(--muted)] transition-colors text-left">
<ChIcon size={16} className="text-[var(--theme-400)] flex-shrink-0" />
<div className="min-w-0"><div className="font-semibold text-sm">{ch.title}</div><div className="text-xs text-[var(--muted-foreground)] truncate">{ch.subtitle}</div></div>
<span className="ml-auto text-xs font-mono text-[var(--muted-foreground)] tabular-nums">Ch {ch.id}</span>
</button>
);
})}</div>
)}
{searchQuery.trim() && results.length === 0 && <div className="p-8 text-center text-[var(--muted-foreground)] text-sm">Aucun resultat pour &laquo; {searchQuery} &raquo;</div>}
{!searchQuery.trim() && <div className="p-6 text-center text-[var(--muted-foreground)] text-sm">Tape un mot-cle pour rechercher</div>}
</motion.div>
</div>
);
}
function ThemePicker() {
const { colorTheme, setColorTheme } = useGuideStore();
const [open, setOpen] = useState(false);
const dots: Record<string, string> = { green: 'bg-emerald-500', blue: 'bg-blue-500', purple: 'bg-purple-500', orange: 'bg-orange-500', coral: 'bg-red-500' };
return (
<div className="relative">
<button onClick={() => setOpen(!open)} className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg hover:bg-white/10 transition-colors text-sm">
<Palette size={15} /><span className="hidden md:inline">Theme</span>
</button>
<AnimatePresence>{open && (
<motion.div initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }}
className="absolute right-0 top-full mt-2 bg-[var(--card)] border border-[var(--border)] rounded-xl p-3 shadow-xl z-50" onClick={e => e.stopPropagation()}>
<div className="flex gap-2.5">{themes.map(t => (
<button key={t.color} onClick={() => { setColorTheme(t.color); setOpen(false); }}
className={`theme-dot ${dots[t.color]} ${colorTheme === t.color ? 'active' : ''}`} title={t.name} />
))}</div>
</motion.div>
)}</AnimatePresence>
</div>
);
}
/* ============================================================
MAIN APP
============================================================ */
export default function GuidePage() {
const store = useGuideStore();
const { view, currentChapter, colorTheme, darkMode, sidebarOpen, searchOpen,
toggleDarkMode, toggleSidebar, setSidebarOpen, setSearchOpen, setView, progress, getGlobalProgress } = store;
const chapter = chapters.find(c => c.id === currentChapter);
const gp = getGlobalProgress();
useEffect(() => {
document.documentElement.setAttribute('data-color', colorTheme);
document.documentElement.classList.toggle('dark', darkMode);
}, [colorTheme, darkMode]);
useEffect(() => {
const h = (e: KeyboardEvent) => {
if ((e.metaKey || e.ctrlKey) && e.key === 'k') { e.preventDefault(); setSearchOpen(true); }
if (e.key === 'Escape') setSearchOpen(false);
if (e.key === 'ArrowRight' && view === 'chapter' && currentChapter < TOTAL_CHAPTERS) store.nextChapter();
if (e.key === 'ArrowLeft' && view === 'chapter' && currentChapter > 1) store.prevChapter();
};
window.addEventListener('keydown', h); return () => window.removeEventListener('keydown', h);
}, [view, currentChapter, setSearchOpen, store]);
return (
<div className="h-screen flex flex-col overflow-hidden bg-[var(--background)]">
<header className="topbar flex items-center px-3 md:px-4 h-14 flex-shrink-0 z-40">
<div className="flex items-center gap-2 md:gap-3 flex-1 min-w-0">
<button onClick={toggleSidebar} className="p-2 rounded-lg hover:bg-white/10 transition-colors md:hidden">{sidebarOpen ? <X size={20} /> : <Menu size={20} />}</button>
<button onClick={() => setView('home')} className="flex items-center gap-2.5 hover:opacity-80 transition-opacity flex-shrink-0">
<div className="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center font-extrabold text-sm tracking-tight">C</div>
<div className="hidden sm:block"><div className="text-[11px] font-bold leading-none tracking-wide">LANGAGE C</div><div className="text-[9px] text-white/50 leading-none mt-0.5 tracking-wider">GUIDE INTERACTIF</div></div>
</button>
<button onClick={() => setSearchOpen(true)} className="hidden md:flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/8 hover:bg-white/12 transition-colors text-sm text-white/60 flex-1 max-w-xs">
<Search size={13} /> Rechercher... <kbd className="ml-auto text-[10px] px-1.5 py-0.5 rounded bg-white/8">Ctrl+K</kbd>
</button>
</div>
<div className="flex items-center gap-1 md:gap-1.5">
<button onClick={() => setSearchOpen(true)} className="p-2 rounded-lg hover:bg-white/10 transition-colors md:hidden"><Search size={18} /></button>
<ThemePicker />
<button onClick={toggleDarkMode} className="p-2 rounded-lg hover:bg-white/10 transition-colors">{darkMode ? <Sun size={17} /> : <Moon size={17} />}</button>
<div className="hidden md:flex items-center gap-2.5 ml-1.5 pl-2.5 border-l border-white/15">
<div className="text-right"><div className="text-[11px] font-semibold leading-none">Baba Niang</div><div className="text-[9px] text-white/50 leading-none mt-0.5">Etudiant</div></div>
<div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center text-[11px] font-bold">BN</div>
</div>
</div>
</header>
<div className="flex flex-1 min-h-0">
<AnimatePresence>{sidebarOpen && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/40 z-40 md:hidden" onClick={() => setSidebarOpen(false)} />}</AnimatePresence>
<aside className={`sidebar fixed md:relative z-50 md:z-auto h-[calc(100vh-3.5rem)] w-[17rem] flex-shrink-0 flex flex-col transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
<div className="flex-1 overflow-y-auto px-3 py-4">
<div className="md:hidden mb-3"><div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10"><Search size={14} className="opacity-50" /><input value={store.searchQuery} onChange={e => store.setSearchQuery(e.target.value)} placeholder="Rechercher..." className="flex-1 bg-transparent outline-none text-sm placeholder:opacity-50" /></div></div>
<div className="space-y-0.5 mb-5">
{[{ icon: Home, label: 'Accueil', v: 'home' }, { icon: Trophy, label: 'Progression', v: 'progress' }, { icon: Star, label: 'Favoris', v: 'favorites' }].map(it => (
<button key={it.v} onClick={() => { setView(it.v as any); setSidebarOpen(false); }} className={`sidebar-chapter w-full ${view === it.v ? 'active' : ''}`}>
<it.icon size={15} /><span>{it.label}</span>
{it.v === 'progress' && gp > 0 && <span className="text-[11px] opacity-60 tabular-nums">{gp}%</span>}
</button>
))}
</div>
<div className="text-[9px] font-bold uppercase tracking-widest opacity-40 mb-2 px-2.5">Sommaire</div>
<div className="space-y-0.5">
{chapters.map(ch => {
const p = progress[ch.id];
const active = view === 'chapter' && currentChapter === ch.id;
return (
<button key={ch.id} onClick={() => { store.setChapter(ch.id); setSidebarOpen(false); }} className={`sidebar-chapter w-full ${active ? 'active' : ''}`}>
<div className="ch-num tabular-nums">{String(ch.id).padStart(2, '0')}</div>
<div className="min-w-0 flex-1"><div className="truncate text-[13px]">{shortTitles[ch.id] || ch.title}</div></div>
<div className="ch-status">{p?.completed ? <CheckCircle2 size={13} className="text-green-300" /> : p?.visited ? <Clock size={13} className="opacity-40" /> : null}</div>
</button>
);
})}
</div>
</div>
<div className="p-3 border-t border-white/8"><div className="text-[9px] opacity-30 text-center leading-relaxed">Langage C &mdash; Guide Interactif<br />par Baba Niang</div></div>
</aside>
<main className="flex-1 min-w-0 overflow-hidden">
{view === 'home' && <HomePage />}
{view === 'chapter' && chapter && <ChapterPage chapter={chapter} />}
{view === 'progress' && <ProgressPage />}
{view === 'favorites' && <FavoritesPage />}
</main>
</div>
<AnimatePresence>{searchOpen && <SearchOverlay />}</AnimatePresence>
</div>
);
}

