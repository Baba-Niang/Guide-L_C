1
'use client';
     2
3
import { useEffect, useState, useRef, useMemo } from 'react';
     4
import { useGuideStore, TOTAL_CHAPTERS } from '@/lib/store';
     5
import { chapters, Chapter } from '@/lib/chapters';
     6
import { themes } from '@/lib/themes';
     7
import { highlightC } from '@/lib/syntax';
     8
import { quizzes } from '@/lib/quizzes';
     9
import {
    10
Search, Sun, Moon, Menu, X, ChevronLeft, ChevronRight, Star,
    11
BookOpen, Code2, Trophy, Home, Palette, CheckCircle2, Circle,
    12
ArrowRight, Clock, Zap, GraduationCap, StarOff, Terminal,
    13
Lightbulb, AlertTriangle, Eye, PlayCircle, FileText, Copy, Check,
    14
BookmarkPlus, Bookmark, Layers, Target, ArrowRightLeft,
    15
Monitor, Box, Calculator, GitBranch, Repeat, Package, LayoutGrid,
    16
Type, HardDrive, FolderTree, Recycle, ShieldCheck
    17
} from 'lucide-react';
    18
import { motion, AnimatePresence } from 'framer-motion';
    19
20
/* ============================================================
    21
ICON MAP & CONFIG
    22
============================================================ */
    23
const iconMap: Record<string, React.ElementType> = {
    24
Monitor, Box, Calculator, GitBranch, Repeat, Package, LayoutGrid,
    25
ArrowRightLeft, Type, Layers, HardDrive, FileText, FolderTree,
    26
Recycle, Zap, ShieldCheck,
    27
};
    28
29
const blockConfig: Record<string, { icon: React.ElementType; label: string; className: string }> = {
    30
title: { icon: BookOpen, label: '', className: '' },
    31
situation: { icon: Eye, label: 'Situation reelle', className: 'block-situation' },
    32
problem: { icon: AlertTriangle, label: 'Probleme', className: 'block-problem' },
    33
question: { icon: Lightbulb, label: 'Question', className: 'block-question' },
    34
reasoning: { icon: Zap, label: 'Raisonnement', className: 'block-reasoning' },
    35
rule: { icon: Target, label: 'A retenir', className: 'block-rule' },
    36
visual: { icon: Layers, label: 'Representation visuelle', className: 'block-visual' },
    37
example: { icon: Code2, label: 'Exemple', className: 'block-example' },
    38
error: { icon: AlertTriangle, label: 'Erreur frequente', className: 'block-error' },
    39
exercise: { icon: PlayCircle, label: 'Exercice', className: 'block-exercise' },
    40
correction: { icon: CheckCircle2, label: 'Correction', className: 'block-correction' },
    41
verification: { icon: CheckCircle2, label: 'Verification', className: 'block-correction' },
    42
summary: { icon: Trophy, label: 'Bilan', className: 'block-summary' },
    43
comparison: { icon: ArrowRightLeft, label: 'Comparaison', className: 'block-comparison' },
    44
content: { icon: FileText, label: '', className: 'block-example' },
    45
};
    46
47
const shortTitles: Record<number, string> = {
    48
1: 'Programme C', 2: 'Variables', 3: 'Operateurs', 4: 'Conditions',
    49
5: 'Boucles', 6: 'Fonctions', 7: 'Tableaux', 8: 'Pointeurs',
    50
9: 'Chaines', 10: 'Structures', 11: 'Alloc dynamique', 12: 'Fichiers',
    51
13: 'Modularite', 14: 'Recursivite', 15: 'Pt avances', 16: 'Debogage',
    52
};
    53
54
/* ============================================================
    55
CODE BLOCK WITH EXPLANATIONS
    56
============================================================ */
    57
function CodeBlock({ code, label, explanations }: { code: string; label?: string; explanations?: string[] }) {
    58
const [copied, setCopied] = useState(false);
    59
const [showExpl, setShowExpl] = useState(false);
    60
const highlighted = useMemo(() => {
    61
const lines = highlightC(code).split('\n');
    62
return lines.map((line, i) =>
    63
`<span class="line-num">${String(i + 1).padStart(2, ' ')}</span>  ${line}`
    64
).join('\n');
    65
}, [code]);
    66
67
const copy = () => { navigator.clipboard.writeText(code); setCopied(true); setTimeout(() => setCopied(false), 2000); };
    68
const codeLines = code.split('\n');
    69
const hasExpl = explanations && explanations.length > 0;
    70
71
return (
    72
<div className="my-6">
    73
<div className="code-block">
    74
<div className="code-header">
    75
<span>{label || 'C'}</span>
    76
<div className="flex items-center gap-2">
    77
{hasExpl && (
    78
<button
    79
onClick={() => setShowExpl(!showExpl)}
    80
className="copy-btn"
    81
style={{ fontSize: '0.7rem', padding: '0.2rem 0.6rem' }}
    82
>
    83
{showExpl ? 'Masquer' : 'Expliquer'}
    84
</button>
    85
)}
    86
<button className="copy-btn" onClick={copy}>
    87
{copied ? <><Check size={11} /> Copie</> : <><Copy size={11} /> Copier</>}
    88
</button>
    89
</div>
    90
</div>
    91
<pre><code dangerouslySetInnerHTML={{ __html: highlighted }} /></pre>
    92
</div>
    93
{hasExpl && showExpl && (
    94
<motion.div
    95
initial={{ opacity: 0, y: -8 }}
    96
animate={{ opacity: 1, y: 0 }}
    97
className="code-explanation mt-0.5 rounded-t-none"
    98
style={{ borderRadius: '0 0 0.875rem 0.875rem' }}
    99
>
   100
{codeLines.map((line, i) => (
   101
<div key={i} className="expl-line">
   102
<span className="expl-code">{line}</span>
   103
{explanations[i] ? (
   104
<>
   105
<span className="expl-arrow">&#x2192;</span>
   106
<span className="expl-text">{explanations[i]}</span>
   107
</>
   108
) : <span className="flex-1" />}
   109
</div>
   110
))}
   111
</motion.div>
   112
)}
   113
</div>
   114
);
   115
}
   116
117
/* ============================================================
   118
DIAGRAM COMPONENTS
   119
============================================================ */
   120
function DiagramWrap({ title, children }: { title: string; children: React.ReactNode }) {
   121
return (
   122
<div className="diagram-container my-8">
   123
<p className="text-xs font-bold mb-5 text-[var(--muted-foreground)] uppercase tracking-widest">{title}</p>
   124
{children}
   125
</div>
   126
);
   127
}
   128
129
function ProcessDiagram({ steps, title }: { steps: string[]; title?: string }) {
   130
return (
   131
<DiagramWrap title={title || 'Processus'}>
   132
<div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
   133
{steps.map((step, i) => (
   134
<div key={i} className="flex items-center gap-2 md:gap-3">
   135
<div className="diagram-box border-[var(--theme-400)] bg-[var(--theme-50)] text-[var(--theme-700)] shadow-sm">
   136
{step}
   137
</div>
   138
{i < steps.length - 1 && (
   139
<div className="diagram-arrow text-[var(--theme-400)] text-lg md:text-xl">&#x2192;</div>
   140
)}
   141
</div>
   142
))}
   143
</div>
   144
</DiagramWrap>
   145
);
   146
}
   147
148
function MemoryDiagram({ vars }: { vars: { name: string; type: string; value: string }[] }) {
   149
return (
   150
<DiagramWrap title="Representation en memoire">
   151
<div className="flex flex-wrap justify-center gap-4">
   152
{vars.map((v, i) => (
   153
<div key={i} className="flex flex-col items-center gap-1.5">
   154
<div className="memory-cell">
   155
<div className="cell-value text-center">{v.value}</div>
   156
<div className="cell-label text-center">{v.name}</div>
   157
</div>
   158
<div className="text-xs text-[var(--muted-foreground)] font-mono mt-0.5">
   159
{v.type} {v.name}
   160
</div>
   161
</div>
   162
))}
   163
</div>
   164
</DiagramWrap>
   165
);
   166
}
   167
168
function ArrayDiagram({ name, values }: { name: string; values: string[] }) {
   169
return (
   170
<DiagramWrap title={`Tableau : ${name}`}>
   171
<div className="flex flex-col items-center gap-1">
   172
<div className="flex items-stretch">
   173
<div className="text-xs text-[var(--muted-foreground)] flex items-center pr-3 font-mono font-semibold">{name}</div>
   174
<div className="flex">
   175
{values.map((v, i) => (
   176
<div key={i} className="array-cell">
   177
<div className="cell-idx">[{i}]</div>
   178
<div className="cell-val">{v}</div>
   179
</div>
   180
))}
   181
</div>
   182
</div>
   183
<p className="text-xs text-[var(--muted-foreground)] mt-2">
   184
{values.length} cases, indices de 0 a {values.length - 1}
   185
</p>
   186
</div>
   187
</DiagramWrap>
   188
);
   189
}
   190
191
function PointerDiagram({ varName, ptrName, value, addr }: { varName: string; ptrName: string; value: string; addr: string }) {
   192
return (
   193
<DiagramWrap title="Pointeur et variable">
   194
<div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
   195
<div className="flex flex-col items-center gap-2">
   196
<div className="memory-cell">
   197
<div className="cell-value text-center">{value}</div>
   198
<div className="cell-label text-center">{varName}</div>
   199
</div>
   200
<div className="text-[10px] text-[var(--muted-foreground)] font-mono">{addr}</div>
   201
</div>
   202
<div className="flex flex-col items-center gap-1">
   203
<svg width="40" height="40" viewBox="0 0 40 40" className="text-[var(--theme-400)]">
   204
<path d="M20 4 L20 28" stroke="currentColor" strokeWidth="2" fill="none" />
   205
<path d="M20 28 L12 20" stroke="currentColor" strokeWidth="2" fill="none" />
   206
<path d="M20 28 L28 20" stroke="currentColor" strokeWidth="2" fill="none" />
   207
</svg>
   208
<div className="text-[10px] text-[var(--muted-foreground)]">*ptr = {value}</div>
   209
</div>
   210
<div className="flex flex-col items-center gap-2">
   211
<div className="memory-cell" style={{ borderColor: 'var(--theme-500)' }}>
   212
<div className="cell-value text-center" style={{ color: 'var(--theme-600)' }}>{addr}</div>
   213
<div className="cell-label text-center">{ptrName}</div>
   214
</div>
   215
<div className="text-[10px] text-[var(--muted-foreground)] font-mono">contient l&apos;adresse</div>
   216
</div>
   217
</div>
   218
</DiagramWrap>
   219
);
   220
}
   221
222
function FlowDiagramConditional() {
   223
return (
   224
<DiagramWrap title="Flux conditionnel (if / else)">
   225
<div className="flex flex-col items-center gap-1.5 py-2">
   226
<div className="diagram-box border-[var(--theme-300)] bg-[var(--theme-50)] text-[var(--theme-700)]">Debut</div>
   227
<svg width="20" height="20" className="text-[var(--theme-300)]"><path d="M10 2 L10 18" stroke="currentColor" strokeWidth="2"/><path d="M10 18 L5 13" stroke="currentColor" strokeWidth="2"/><path d="M10 18 L15 13" stroke="currentColor" strokeWidth="2"/></svg>
   228
<div className="px-6 py-2.5 bg-amber-50 border-2 border-amber-400 text-amber-700 rounded-lg font-bold text-sm">Condition ?</div>
   229
<div className="flex gap-8 md:gap-14 mt-1">
   230
<div className="flex flex-col items-center gap-1.5">
   231
<span className="text-[10px] font-bold text-green-600 uppercase tracking-wider">Vrai</span>
   232
<svg width="20" height="20" className="text-green-500"><path d="M10 2 L10 16" stroke="currentColor" strokeWidth="2"/><path d="M10 16 L5 11" stroke="currentColor" strokeWidth="2"/><path d="M10 16 L15 11" stroke="currentColor" strokeWidth="2"/></svg>
   233
<div className="diagram-box border-green-400 bg-green-50 text-green-700">Bloc A</div>
   234
</div>
   235
<div className="flex flex-col items-center gap-1.5">
   236
<span className="text-[10px] font-bold text-red-500 uppercase tracking-wider">Faux</span>
   237
<svg width="20" height="20" className="text-red-400"><path d="M10 2 L10 16" stroke="currentColor" strokeWidth="2"/><path d="M10 16 L5 11" stroke="currentColor" strokeWidth="2"/><path d="M10 16 L15 11" stroke="currentColor" strokeWidth="2"/></svg>
   238
<div className="diagram-box border-red-400 bg-red-50 text-red-700">Bloc B</div>
   239
</div>
   240
</div>
   241
<svg width="20" height="20" className="text-[var(--theme-300)] mt-1"><path d="M10 2 L10 16" stroke="currentColor" strokeWidth="2"/><path d="M10 16 L5 11" stroke="currentColor" strokeWidth="2"/><path d="M10 16 L15 11" stroke="currentColor" strokeWidth="2"/></svg>
   242
<div className="diagram-box border-[var(--theme-300)] bg-[var(--theme-50)] text-[var(--theme-700)]">Suite</div>
   243
</div>
   244
</DiagramWrap>
   245
);
   246
}
   247
248
function FlowDiagramLoop() {
   249
return (
   250
<DiagramWrap title="Flux d'une boucle">
   251
<div className="flex flex-col items-center gap-1.5 py-2">
   252
<div className="diagram-box border-[var(--theme-300)] bg-[var(--theme-50)] text-[var(--theme-700)]">Initialisation</div>
   253
<svg width="20" height="20" className="text-[var(--theme-300)]"><path d="M10 2 L10 18" stroke="currentColor" strokeWidth="2"/><path d="M10 18 L5 13" stroke="currentColor" strokeWidth="2"/><path d="M10 18 L15 13" stroke="currentColor" strokeWidth="2"/></svg>
   254
<div className="px-6 py-2.5 bg-amber-50 border-2 border-amber-400 text-amber-700 rounded-lg font-bold text-sm">Condition ?</div>
   255
<div className="flex gap-10 md:gap-16 mt-1">
   256
<div className="flex flex-col items-center gap-1.5">
   257
<span className="text-[10px] font-bold text-green-600 uppercase tracking-wider">Vrai</span>
   258
<svg width="20" height="20" className="text-green-500"><path d="M10 2 L10 16" stroke="currentColor" strokeWidth="2"/><path d="M10 16 L5 11" stroke="currentColor" strokeWidth="2"/><path d="M10 16 L15 11" stroke="currentColor" strokeWidth="2"/></svg>
   259
<div className="diagram-box border-green-400 bg-green-50 text-green-700">Instructions</div>
   260
<svg width="20" height="20" className="text-green-500"><path d="M10 16 L10 2" stroke="currentColor" strokeWidth="2"/><path d="M10 2 L5 7" stroke="currentColor" strokeWidth="2"/><path d="M10 2 L15 7" stroke="currentColor" strokeWidth="2"/></svg>
   261
<span className="text-[10px] text-green-600 font-semibold">recommence</span>
   262
</div>
   263
<div className="flex flex-col items-center gap-1.5">
   264
<span className="text-[10px] font-bold text-red-500 uppercase tracking-wider">Faux</span>
   265
<svg width="20" height="20" className="text-red-400"><path d="M10 2 L10 16" stroke="currentColor" strokeWidth="2"/><path d="M10 16 L5 11" stroke="currentColor" strokeWidth="2"/><path d="M10 16 L15 11" stroke="currentColor" strokeWidth="2"/></svg>
   266
<div className="diagram-box border-red-400 bg-red-50 text-red-700">Sortie</div>
   267
</div>
   268
</div>
   269
</div>
   270
</DiagramWrap>
   271
);
   272
}
   273
274
function FunctionDiagram({ name, params, ret }: { name: string; params: string; ret: string }) {
   275
return (
   276
<DiagramWrap title="Modele d'une fonction">
   277
<div className="flex flex-wrap items-center justify-center gap-3 md:gap-5">
   278
<div className="flex flex-col items-center gap-1">
   279
<div className="p-3 rounded-xl border-2 border-blue-300 bg-blue-50 text-blue-700 text-center min-w-[100px]">
   280
<div className="font-mono text-xs font-bold">{params}</div>
   281
<div className="text-[10px] mt-0.5 opacity-60">entrees</div>
   282
</div>
   283
</div>
   284
<svg width="32" height="20" className="text-blue-400"><path d="M2 10 L26 10" stroke="currentColor" strokeWidth="2" markerEnd="url(#ah)"/><defs><marker id="ah" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="currentColor"/></marker></defs></svg>
   285
<div className="p-4 rounded-2xl border-2 border-[var(--theme-400)] bg-[var(--theme-50)] text-center min-w-[130px]">
   286
<div className="font-mono font-bold text-[var(--theme-700)]">{name}()</div>
   287
<div className="text-[10px] text-[var(--muted-foreground)] mt-1">traitement</div>
   288
</div>
   289
<svg width="32" height="20" className="text-[var(--theme-400)]"><path d="M2 10 L26 10" stroke="currentColor" strokeWidth="2" markerEnd="url(#ah)"/></svg>
   290
<div className="p-3 rounded-xl border-2 border-green-300 bg-green-50 text-green-700 text-center min-w-[100px]">
   291
<div className="font-mono text-xs font-bold">{ret}</div>
   292
<div className="text-[10px] mt-0.5 opacity-60">sortie</div>
   293
</div>
   294
</div>
   295
</DiagramWrap>
   296
);
   297
}
   298
299
function StringDiagram({ text }: { text: string }) {
   300
const chars = text.split('').concat(['\\0']);
   301
return (
   302
<DiagramWrap title="Chaine en memoire">
   303
<div className="flex flex-col items-center gap-2">
   304
<div className="flex">
   305
{chars.map((c, i) => (
   306
<div key={i} className={`array-cell ${c === '\\0' ? '' : ''}`} style={c === '\\0' ? { borderColor: '#ef4444' } : {}}>
   307
<div className="cell-val" style={c === '\\0' ? { color: '#ef4444', fontSize: '0.75rem' } : {}}>{c}</div>
   308
</div>
   309
))}
   310
</div>
   311
<p className="text-xs text-red-500 mt-1">Le caractere <span className="font-mono font-bold">\\0</span> marque la fin de la chaine</p>
   312
</div>
   313
</DiagramWrap>
   314
);
   315
}
   316
317
function StructDiagram({ name, fields }: { name: string; fields: { name: string; type: string }[] }) {
   318
return (
   319
<DiagramWrap title={`Structure : ${name}`}>
   320
<div className="inline-flex flex-col rounded-xl border-2 border-[var(--theme-400)] overflow-hidden shadow-sm">
   321
<div className="bg-[var(--theme-500)] text-white text-center py-2.5 font-bold text-sm tracking-wide">
   322
struct {name}
   323
</div>
   324
{fields.map((f, i) => (
   325
<div key={i} className="flex justify-between px-5 py-2.5 bg-white border-t border-[var(--border)]">
   326
<span className="font-mono text-sm text-[var(--theme-700)] font-semibold">{f.name}</span>
   327
<span className="font-mono text-xs text-[var(--muted-foreground)] bg-[var(--muted)] px-2 py-0.5 rounded">{f.type}</span>
   328
</div>
   329
))}
   330
</div>
   331
</DiagramWrap>
   332
);
   333
}
   334
335
function MallocDiagram() {
   336
return (
   337
<DiagramWrap title="Allocation dynamique">
   338
<div className="flex flex-wrap items-center justify-center gap-5 md:gap-8">
   339
<div className="flex flex-col items-center gap-2">
   340
<div className="p-3 px-5 rounded-xl bg-[var(--theme-50)] border-2 border-[var(--theme-300)] font-mono text-sm font-bold text-[var(--theme-700)]">malloc(n * sizeof(int))</div>
   341
<svg width="20" height="20" className="text-[var(--theme-400)]"><path d="M10 2 L10 16" stroke="currentColor" strokeWidth="2"/><path d="M10 16 L5 11" stroke="currentColor" strokeWidth="2"/><path d="M10 16 L15 11" stroke="currentColor" strokeWidth="2"/></svg>
   342
<div className="p-3 rounded-lg bg-[var(--theme-100)] text-[var(--theme-700)] text-sm font-semibold">Tas (Heap)</div>
   343
</div>
   344
<div className="flex flex-col items-center gap-2">
   345
<div className="memory-cell" style={{ borderColor: 'var(--theme-500)' }}>
   346
<div className="cell-value text-center" style={{ color: 'var(--theme-600)' }}>adresse</div>
   347
<div className="cell-label text-center">ptr</div>
   348
</div>
   349
<div className="text-[10px] text-[var(--muted-foreground)]">pointeur</div>
   350
</div>
   351
<div className="flex flex-col items-center gap-2">
   352
<div className="p-3 px-5 rounded-xl bg-red-50 border-2 border-red-300 font-mono text-sm font-bold text-red-700">free(ptr)</div>
   353
<svg width="20" height="20" className="text-red-400"><path d="M10 2 L10 16" stroke="currentColor" strokeWidth="2"/><path d="M10 16 L5 11" stroke="currentColor" strokeWidth="2"/><path d="M10 16 L15 11" stroke="currentColor" strokeWidth="2"/></svg>
   354
<div className="p-3 rounded-lg bg-gray-100 text-gray-600 text-sm">Liberee</div>
   355
</div>
   356
</div>
   357
</DiagramWrap>
   358
);
   359
}
   360
361
function RecursionDiagram() {
   362
return (
   363
<DiagramWrap title="Recursivite : empilement des appels">
   364
<div className="flex items-end justify-center gap-0">
   365
{['fact(5)', 'fact(4)', 'fact(3)', 'fact(2)', 'fact(1)'].map((call, i) => (
   366
<div key={i} className="flex flex-col items-center" style={{ width: `${100 - i * 14}px` }}>
   367
<div className="w-full rounded-t-lg bg-[var(--theme-200)] border-2 border-[var(--theme-400)] border-b-0 p-2 text-center">
   368
<span className="font-mono text-xs font-bold text-[var(--theme-700)]">{call}</span>
   369
</div>
   370
</div>
   371
))}
   372
</div>
   373
<p className="text-xs text-[var(--muted-foreground)] mt-4">Chaque appel s&apos;empile, puis se resout en remontant</p>
   374
</DiagramWrap>
   375
);
   376
}
   377
378
/* ============================================================
   379
CHAPTER-SPECIFIC DIAGRAM SELECTOR
   380
============================================================ */
   381
function ChapterDiagrams({ chapterId }: { chapterId: number }) {
   382
switch (chapterId) {
   383
case 1: return (
   384
<>
   385
<ProcessDiagram steps={["Ecrire le code (.c)", "Compiler (gcc)", "Executable", "Executer"]} title="Les 4 etapes" />
   386
<DiagramWrap title="Environnement de travail">
   387
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-lg mx-auto">
   388
{[
   389
{ name: 'Editeur', desc: 'Ecrire le code source', icon: '&#x1f4dd;', c: 'bg-blue-50 border-blue-300 text-blue-700' },
   390
{ name: 'Terminal', desc: 'Compiler et executer', icon: '&#x2328;', c: 'bg-gray-50 border-gray-300 text-gray-700' },
   391
{ name: 'GCC', desc: 'Traduire C en binaire', icon: '&#x2699;', c: 'bg-orange-50 border-orange-300 text-orange-700' },
   392
].map((item, i) => (
   393
<div key={i} className={`p-5 rounded-xl border-2 ${item.c} text-center transition-transform hover:scale-[1.03]`}>
   394
<div className="text-2xl mb-2" dangerouslySetInnerHTML={{ __html: item.icon }} />
   395
<div className="font-bold text-sm">{item.name}</div>
   396
<div className="text-xs mt-1 opacity-60">{item.desc}</div>
   397
</div>
   398
))}
   399
</div>
   400
</DiagramWrap>
   401
</>
   402
);
   403
case 2: return (
   404
<>
   405
<MemoryDiagram vars={[{ name: 'age', type: 'int', value: '20' }, { name: 'prix', type: 'float', value: '3.14' }, { name: 'lettre', type: 'char', value: "'A'" }]} />
   406
<DiagramWrap title="Declaration en 2 etapes">
   407
<div className="flex flex-col items-center gap-3">
   408
<div className="flex items-center gap-4 text-sm">
   409
<div className="p-3 rounded-lg border-2 border-dashed border-[var(--theme-300)] font-mono">int age;</div>
   410
<span className="text-[var(--muted-foreground)]">puis</span>
   411
<div className="p-3 rounded-lg border-2 border-solid border-[var(--theme-400)] bg-[var(--theme-50)] font-mono">age = 20;</div>
   412
</div>
   413
<div className="flex items-center gap-2 text-sm mt-1">
   414
<span className="text-[var(--muted-foreground)]">ou directement :</span>
   415
<div className="p-3 rounded-lg border-2 border-solid border-[var(--theme-500)] bg-[var(--theme-100)] font-mono font-bold">int age = 20;</div>
   416
</div>
   417
</div>
   418
</DiagramWrap>
   419
</>
   420
);
   421
case 3: return (
   422
<DiagramWrap title="Les 3 familles d'operateurs">
   423
<div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-xl mx-auto">
   424
{[
   425
{ title: 'Arithmetiques', items: ['+  -  *  /  %'], c: 'border-[var(--theme-300)] bg-[var(--theme-50)] text-[var(--theme-700)]' },
   426
{ title: 'Comparaison', items: ['==  !=  >  <  >=  <='], c: 'border-amber-300 bg-amber-50 text-amber-700' },
   427
{ title: 'Logiques', items: ['&&  ||  !'], c: 'border-purple-300 bg-purple-50 text-purple-700' },
   428
].map((g, i) => (
   429
<div key={i} className={`rounded-xl border-2 ${g.c} p-4 text-center`}>
   430
<div className="font-bold text-sm mb-2">{g.title}</div>
   431
<div className="font-mono text-xs space-y-1">{g.items.map(it => <div key={it}>{it}</div>)}</div>
   432
</div>
   433
))}
   434
</div>
   435
</DiagramWrap>
   436
);
   437
case 4: return <FlowDiagramConditional />;
   438
case 5: return <FlowDiagramLoop />;
   439
case 6: return <FunctionDiagram name="addition" params="int a, int b" ret="int" />;
   440
case 7: return <ArrayDiagram name="notes" values={["12", "15", "8", "18", "14"]} />;
   441
case 8: return <PointerDiagram varName="age" ptrName="ptr" value="20" addr="0x7ffc" />;
   442
case 9: return <StringDiagram text="Bonjour" />;
   443
case 10: return <StructDiagram name="Etudiant" fields={[{ name: 'nom', type: 'char[20]' }, { name: 'age', type: 'int' }, { name: 'moyenne', type: 'float' }]} />;
   444
case 11: return <MallocDiagram />;
   445
case 12: return <ProcessDiagram steps={["fopen()", "Lire / Ecrire", "fclose()"]} title="Manipulation de fichiers" />;
   446
case 13: return (
   447
<DiagramWrap title="Organisation en modules">
   448
<div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-md mx-auto">
   449
{[{ f: 'main.c', d: 'Programme principal', bg: 'bg-[var(--theme-50)]' }, { f: 'utils.h', d: 'Declarations', bg: 'bg-blue-50' }, { f: 'utils.c', d: 'Implementation', bg: 'bg-amber-50' }].map((m, i) => (
   450
<div key={i} className={`p-4 rounded-xl border-2 border-[var(--border)] ${m.bg} text-center`}>
   451
<div className="font-mono font-bold text-sm text-[var(--foreground)]">{m.f}</div>
   452
<div className="text-xs text-[var(--muted-foreground)] mt-1">{m.d}</div>
   453
</div>
   454
))}
   455
</div>
   456
</DiagramWrap>
   457
);
   458
case 14: return <RecursionDiagram />;
   459
case 15: return (
   460
<DiagramWrap title="Pointeur sur fonction">
   461
<div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
   462
<div className="p-4 rounded-xl border-2 border-[var(--theme-400)] bg-[var(--theme-50)] text-[var(--theme-700)] font-mono text-sm text-center">
   463
<div className="font-bold">int (*ptr)(int,int)</div>
   464
<div className="text-[10px] mt-1 opacity-60">stocke l&apos;adresse d&apos;une fonction</div>
   465
</div>
   466
<svg width="32" height="20" className="text-[var(--theme-400)]"><path d="M2 10 L26 10" stroke="currentColor" strokeWidth="2" markerEnd="url(#ah)"/></svg>
   467
<div className="p-4 rounded-xl border-2 border-blue-300 bg-blue-50 text-blue-700 font-mono text-sm text-center">
   468
<div className="font-bold">int add(int a, int b)</div>
   469
<div className="text-[10px] mt-1 opacity-60">la fonction ciblee</div>
   470
</div>
   471
</div>
   472
</DiagramWrap>
   473
);
   474
case 16: return (
   475
<DiagramWrap title="3 niveaux de defense">
   476
<div className="flex flex-col items-center gap-3 max-w-sm mx-auto">
   477
{[
   478
{ l: '1. Prevenir', d: 'Initialiser, compiler avec -Wall -Wextra', c: 'border-green-400 bg-green-50 text-green-700' },
   479
{ l: '2. Verifier', d: 'Tester retours de malloc, fopen, scanf', c: 'border-amber-400 bg-amber-50 text-amber-700' },
   480
{ l: '3. Diagnostiquer', d: 'printf debug, gdb, valgrind', c: 'border-red-400 bg-red-50 text-red-700' },
   481
].map((it, i) => (
   482
<div key={i} className={`w-full p-3.5 rounded-xl border-2 ${it.c} text-center`}>
   483
<div className="font-bold text-sm">{it.l}</div>
   484
<div className="text-xs mt-1 opacity-65">{it.d}</div>
   485
</div>
   486
))}
   487
</div>
   488
</DiagramWrap>
   489
);
   490
default: return null;
   491
}
   492
}
   493
494
/* ============================================================
   495
BLOCK RENDERER
   496
============================================================ */
   497
function SlideBlock({ block, chapterId, index }: { block: Chapter['blocks'][0]; chapterId: number; index: number }) {
   498
const config = blockConfig[block.type] || blockConfig.content;
   499
const Icon = config.icon;
   500
const isDark = block.type === 'rule';
   501
502
return (
   503
<motion.div
   504
initial={{ opacity: 0, y: 16 }}
   505
whileInView={{ opacity: 1, y: 0 }}
   506
viewport={{ once: true, margin: '-40px' }}
   507
transition={{ duration: 0.35, delay: Math.min(index * 0.04, 0.25) }}
   508
className={`block-card ${config.className} mb-6`}
   509
>
   510
{config.label && (
   511
<div className={`flex items-center gap-2 mb-4 ${isDark ? 'text-white/70' : 'text-[var(--muted-foreground)]'}`}>
   512
<Icon size={15} />
   513
<span className="text-[11px] font-bold uppercase tracking-widest">{config.label}</span>
   514
</div>
   515
)}
   516
517
{block.content.map((line, i) => {
   518
if (/^Consigne/i.test(line))
   519
return <p key={i} className={`text-sm italic mt-2 ${isDark ? 'text-white/60' : 'text-[var(--muted-foreground)]'}`}>{line}</p>;
   520
if (/^\s*[-\u2022]\s/.test(line))
   521
return <div key={i} className="flex items-start gap-2.5 mb-2"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-current opacity-30 flex-shrink-0" /><span className="leading-relaxed">{line.replace(/^\s*[-\u2022]\s*/, '')}</span></div>;
   522
const nm = line.match(/^(\d+)\.\s(.+)/);
   523
if (nm)
   524
return <div key={i} className="flex items-start gap-3 mb-2"><span className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold flex-shrink-0 ${isDark ? 'bg-white/20' : 'bg-[var(--theme-100)] text-[var(--theme-700)]'}`}>{nm[1]}</span><span className="leading-relaxed">{nm[2]}</span></div>;
   525
return <p key={i} className={`mb-1.5 leading-[1.75] ${line.length > 100 ? 'mb-2.5' : ''}`}>{line}</p>;
   526
})}
   527
528
{block.code && <CodeBlock code={block.code.code} />}
   529
</motion.div>
   530
);
   531
}
   532
533
/* ============================================================
   534
QUIZ
   535
============================================================ */
   536
function ChapterQuiz({ chapterId }: { chapterId: number }) {
   537
const quiz = quizzes[chapterId];
   538
const [sel, setSel] = useState<number | null>(null);
   539
const [show, setShow] = useState(false);
   540
if (!quiz) return null;
   541
542
return (
   543
<motion.div
   544
initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
   545
className="block-card border-2 border-[var(--theme-300)] bg-[var(--theme-50)] mb-8"
   546
>
   547
<div className="flex items-center gap-2 mb-4">
   548
<GraduationCap size={16} className="text-[var(--theme-500)]" />
   549
<span className="text-[11px] font-bold uppercase tracking-widest text-[var(--theme-600)]">Quiz</span>
   550
</div>
   551
<p className="text-base font-semibold mb-5 leading-relaxed">{quiz.question}</p>
   552
<div className="space-y-2 mb-4">
   553
{quiz.options.map((opt, i) => {
   554
let c = 'quiz-option';
   555
if (show && i === quiz.correctIndex) c += ' correct';
   556
if (show && sel === i && i !== quiz.correctIndex) c += ' wrong';
   557
if (!show && sel === i) c += ' selected';
   558
return (
   559
<button key={i} onClick={() => !show && setSel(i)} disabled={show} className={`${c} w-full text-left flex items-center gap-3`}>
   560
<span className="w-7 h-7 rounded-full border-2 border-current flex items-center justify-center text-[11px] font-bold flex-shrink-0">{String.fromCharCode(65 + i)}</span>
   561
<span className="leading-relaxed">{opt}</span>
   562
{show && i === quiz.correctIndex && <CheckCircle2 size={16} className="ml-auto text-green-500" />}
   563
</button>
   564
);
   565
})}
   566
</div>
   567
{!show && sel !== null && (
   568
<button onClick={() => setShow(true)} className="w-full py-2.5 rounded-lg bg-[var(--theme-500)] text-white font-semibold text-sm hover:opacity-90 transition-all">
   569
Voir la reponse
   570
</button>
   571
)}
   572
{show && (
   573
<motion.div initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }}
   574
className={`p-3.5 rounded-lg text-sm leading-relaxed ${sel === quiz.correctIndex ? 'bg-green-50 text-green-800' : 'bg-amber-50 text-amber-800'}`}>
   575
<span className="font-bold">{sel === quiz.correctIndex ? 'Correct ! ' : 'Incorrect. '}</span>{quiz.explanation}
   576
</motion.div>
   577
)}
   578
</motion.div>
   579
);
   580
}
   581
582
/* ============================================================
   583
CHAPTER PAGE
   584
============================================================ */
   585
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
   662
============================================================ */
   663
function HomePage() {
   664
const { setChapter, progress, getGlobalProgress } = useGuideStore();
   665
const gp = getGlobalProgress();
   666
const done = Object.values(progress).filter(p => p.completed).length;
   667
668
return (
   669
<div className="flex flex-col h-full overflow-y-auto">
   670
<div className="hero-gradient text-white flex-shrink-0">
   671
<div className="max-w-4xl mx-auto px-6 pt-20 pb-16 md:pt-28 md:pb-24 text-center relative z-10">
   672
<motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
   673
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/12 backdrop-blur-sm text-sm mb-8 border border-white/10">
   674
<Terminal size={13} /> Par Baba Niang
   675
</div>
   676
<h1 className="text-5xl md:text-7xl font-extrabold mb-3 tracking-tight">LANGAGE C</h1>
   677
<p className="text-2xl md:text-3xl font-light text-white/80 mb-3">Guide Interactif</p>
   678
<p className="text-white/55 max-w-lg mx-auto mb-10 text-base md:text-lg leading-relaxed">
   679
Apprends le C etape par etape, de zero jusqu&apos;aux notions avancees. Chaque concept est explique avec des exemples et des visualisations.
   680
</p>
   681
<button onClick={() => setChapter(1)}
   682
className="inline-flex items-center gap-2.5 px-9 py-4 bg-white text-[var(--theme-700)] rounded-xl font-bold text-base hover:bg-white/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
   683
Commencer le cours <ArrowRight size={18} />
   684
</button>
   685
</motion.div>
   686
<div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-16 max-w-2xl mx-auto">
   687
{[
   688
{ v: '16', l: 'Chapitres', ic: BookOpen },
   689
{ v: '300+', l: 'Notions', ic: Layers },
   690
{ v: '50+', l: 'Exemples C', ic: Code2 },
   691
{ v: '16', l: 'Quiz', ic: GraduationCap },
   692
].map((s, i) => (
   693
<motion.div key={i} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 0.15 + i * 0.08 }} className="stat-card">
   694
<s.ic size={20} className="mx-auto mb-2 opacity-60" />
   695
<div className="text-2xl font-extrabold">{s.v}</div>
   696
<div className="text-[11px] opacity-60 mt-0.5">{s.l}</div>
   697
</motion.div>
   698
))}
   699
</div>
   700
</div>
   701
</div>
   702
703
{done > 0 && (
   704
<div className="max-w-3xl mx-auto px-6 py-8">
   705
<div className="flex items-center justify-between mb-2.5">
   706
<h2 className="text-lg font-bold">Ta progression</h2>
   707
<span className="text-sm font-bold text-[var(--theme-500)] tabular-nums">{gp}%</span>
   708
</div>
   709
<div className="progress-bar-track h-2"><div className="progress-bar-fill" style={{ width: `${gp}%` }} /></div>
   710
<p className="text-sm text-[var(--muted-foreground)] mt-2.5">{done} chapitre{done > 1 ? 's' : ''} termine{done > 1 ? 's' : ''} sur {TOTAL_CHAPTERS}</p>
   711
</div>
   712
)}
   713
714
<div className="max-w-3xl mx-auto px-6 pb-14">
   715
<h2 className="text-lg font-bold mb-5">Sommaire du cours</h2>
   716
<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
   717
{chapters.map((ch, i) => {
   718
const ChIcon = iconMap[ch.icon] || BookOpen;
   719
const p = progress[ch.id];
   720
return (
   721
<motion.button key={ch.id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
   722
transition={{ duration: 0.25, delay: 0.2 + i * 0.025 }}
   723
onClick={() => setChapter(ch.id)}
   724
className="flex items-start gap-3.5 p-4 rounded-xl border border-[var(--border)] bg-[var(--card)] hover:shadow-md hover:-translate-y-0.5 transition-all text-left group"
   725
>
   726
<div className="w-10 h-10 rounded-lg bg-[var(--theme-100)] text-[var(--theme-600)] flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--theme-200)] transition-colors">
   727
{p?.completed ? <CheckCircle2 size={18} className="text-green-500" /> : <ChIcon size={18} />}
   728
</div>
   729
<div className="min-w-0 flex-1">
   730
<div className="text-[11px] text-[var(--muted-foreground)] font-mono font-bold mb-0.5 tabular-nums">{String(ch.id).padStart(2, '0')}</div>
   731
<div className="font-semibold text-[15px] leading-snug">{ch.title}</div>
   732
<div className="text-xs text-[var(--muted-foreground)] mt-1 leading-relaxed">{ch.subtitle}</div>
   733
</div>
   734
</motion.button>
   735
);
   736
})}
   737
</div>
   738
</div>
   739
</div>
   740
);
   741
}
   742
743
/* ============================================================
   744
PROGRESS / FAVORITES / SEARCH / THEME PICKER
   745
============================================================ */
   746
function ProgressPage() {
   747
const { setChapter, progress, getGlobalProgress } = useGuideStore();
   748
const gp = getGlobalProgress();
   749
return (
   750
<div className="flex flex-col h-full overflow-y-auto">
   751
<div className="px-6 py-12 border-b border-[var(--border)]">
   752
<div className="max-w-2xl mx-auto">
   753
<h1 className="text-2xl font-extrabold mb-4">Ma Progression</h1>
   754
<div className="flex items-center gap-4"><div className="flex-1"><div className="progress-bar-track h-2.5"><div className="progress-bar-fill" style={{ width: `${gp}%` }} /></div></div>
   755
<span className="text-3xl font-extrabold text-[var(--theme-500)] tabular-nums">{gp}<span className="text-lg">%</span></span></div>
   756
<p className="text-sm text-[var(--muted-foreground)] mt-3">{Object.values(progress).filter(p => p.completed).length} / {TOTAL_CHAPTERS} chapitres termines</p>
   757
</div>
   758
</div>
   759
<div className="flex-1 px-6 py-6"><div className="max-w-2xl mx-auto space-y-1.5">
   760
{chapters.map(ch => {
   761
const p = progress[ch.id];
   762
return (
   763
<button key={ch.id} onClick={() => setChapter(ch.id)}
   764
className="w-full flex items-center gap-3.5 p-3.5 rounded-xl hover:bg-[var(--muted)] transition-all text-left">
   765
<div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
   766
{p?.completed ? <CheckCircle2 size={18} className="text-green-500" /> : p?.visited ? <Clock size={18} className="text-[var(--theme-400)]" /> : <Circle size={18} className="text-[var(--muted-foreground)] opacity-30" />}
   767
</div>
   768
<div className="flex-1 min-w-0"><div className="font-semibold text-sm">{ch.title}</div><div className="text-xs text-[var(--muted-foreground)] mt-0.5">{ch.subtitle}</div></div>
   769
<span className="text-xs font-mono text-[var(--muted-foreground)] tabular-nums">{String(ch.id).padStart(2, '0')}</span>
   770
</button>
   771
);
   772
})}
   773
</div></div>
   774
</div>
   775
);
   776
}
   777
778
function FavoritesPage() {
   779
const { favorites, setChapter } = useGuideStore();
   780
const favs = chapters.filter(ch => favorites.includes(ch.id));
   781
return (
   782
<div className="flex flex-col h-full overflow-y-auto">
   783
<div className="px-6 py-12 border-b border-[var(--border)]">
   784
<div className="max-w-2xl mx-auto"><h1 className="text-2xl font-extrabold mb-1">Mes Favoris</h1><p className="text-[var(--muted-foreground)]">{favs.length} chapitre{favs.length > 1 ? 's' : ''} enregistre{favs.length > 1 ? 's' : ''}</p></div>
   785
</div>
   786
<div className="flex-1 px-6 py-6"><div className="max-w-2xl mx-auto">
   787
{favs.length === 0 ? (
   788
<div className="text-center py-20 text-[var(--muted-foreground)]"><StarOff size={48} className="mx-auto mb-4 opacity-20" /><p className="text-lg font-medium">Aucun favori</p><p className="text-sm mt-1.5">Ajoute des chapitres en favoris pour les retrouver facilement</p></div>
   789
) : (
   790
<div className="space-y-2">{favs.map(ch => (
   791
<button key={ch.id} onClick={() => setChapter(ch.id)} className="w-full flex items-center gap-3.5 p-4 rounded-xl border border-[var(--border)] bg-[var(--card)] hover:shadow-md transition-all text-left">
   792
<div className="w-10 h-10 rounded-lg bg-yellow-50 text-yellow-600 flex items-center justify-center flex-shrink-0"><Star size={18} /></div>
   793
<div className="min-w-0"><div className="text-xs text-[var(--muted-foreground)] font-mono tabular-nums">{String(ch.id).padStart(2, '0')}</div><div className="font-semibold">{ch.title}</div><div className="text-sm text-[var(--muted-foreground)] mt-0.5">{ch.subtitle}</div></div>
   794
</button>
   795
))}</div>
   796
)}
   797
</div></div>
   798
</div>
   799
);
   800
}
   801
802
function SearchOverlay() {
   803
const { searchQuery, setSearchQuery, setSearchOpen, setChapter } = useGuideStore();
   804
const inputRef = useRef<HTMLInputElement>(null);
   805
const results = useMemo(() => {
   806
if (!searchQuery.trim()) return [];
   807
const q = searchQuery.toLowerCase();
   808
return chapters.filter(ch => (ch.title + ' ' + ch.subtitle + ' ' + ch.keywords.join(' ') + ' ' + ch.blocks.map(b => b.content.join(' ')).join(' ')).toLowerCase().includes(q)).slice(0, 8);
   809
}, [searchQuery]);
   810
useEffect(() => { inputRef.current?.focus(); }, []);
   811
812
return (
   813
<div className="search-overlay" onClick={() => setSearchOpen(false)}>
   814
<motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="search-modal" onClick={e => e.stopPropagation()}>
   815
<div className="flex items-center gap-3 px-5 py-4 border-b border-[var(--border)]">
   816
<Search size={18} className="text-[var(--muted-foreground)] flex-shrink-0" />
   817
<input ref={inputRef} value={searchQuery} onChange={e => setSearchQuery(e.target.value)} placeholder="Rechercher une notion, un mot-cle..." className="flex-1 bg-transparent outline-none text-base placeholder:text-[var(--muted-foreground)]" />
   818
<kbd className="hidden sm:inline-flex items-center px-2 py-0.5 rounded text-[11px] border border-[var(--border)] text-[var(--muted-foreground)]">ESC</kbd>
   819
</div>
   820
{results.length > 0 && (
   821
<div className="max-h-80 overflow-y-auto p-2">{results.map(ch => {
   822
const ChIcon = iconMap[ch.icon] || BookOpen;
   823
return (
   824
<button key={ch.id} onClick={() => { setChapter(ch.id); setSearchOpen(false); setSearchQuery(''); }} className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-[var(--muted)] transition-colors text-left">
   825
<ChIcon size={16} className="text-[var(--theme-400)] flex-shrink-0" />
   826
<div className="min-w-0"><div className="font-semibold text-sm">{ch.title}</div><div className="text-xs text-[var(--muted-foreground)] truncate">{ch.subtitle}</div></div>
   827
<span className="ml-auto text-xs font-mono text-[var(--muted-foreground)] tabular-nums">Ch {ch.id}</span>
   828
</button>
   829
);
   830
})}</div>
   831
)}
   832
{searchQuery.trim() && results.length === 0 && <div className="p-8 text-center text-[var(--muted-foreground)] text-sm">Aucun resultat pour &laquo; {searchQuery} &raquo;</div>}
   833
{!searchQuery.trim() && <div className="p-6 text-center text-[var(--muted-foreground)] text-sm">Tape un mot-cle pour rechercher</div>}
   834
</motion.div>
   835
</div>
   836
);
   837
}
   838
839
function ThemePicker() {
   840
const { colorTheme, setColorTheme } = useGuideStore();
   841
const [open, setOpen] = useState(false);
   842
const dots: Record<string, string> = { green: 'bg-emerald-500', blue: 'bg-blue-500', purple: 'bg-purple-500', orange: 'bg-orange-500', coral: 'bg-red-500' };
   843
return (
   844
<div className="relative">
   845
<button onClick={() => setOpen(!open)} className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg hover:bg-white/10 transition-colors text-sm">
   846
<Palette size={15} /><span className="hidden md:inline">Theme</span>
   847
</button>
   848
<AnimatePresence>{open && (
   849
<motion.div initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }}
   850
className="absolute right-0 top-full mt-2 bg-[var(--card)] border border-[var(--border)] rounded-xl p-3 shadow-xl z-50" onClick={e => e.stopPropagation()}>
   851
<div className="flex gap-2.5">{themes.map(t => (
   852
<button key={t.color} onClick={() => { setColorTheme(t.color); setOpen(false); }}
   853
className={`theme-dot ${dots[t.color]} ${colorTheme === t.color ? 'active' : ''}`} title={t.name} />
   854
))}</div>
   855
</motion.div>
   856
)}</AnimatePresence>
   857
</div>
   858
);
   859
}
   860
861
/* ============================================================
   862
MAIN APP
   863
============================================================ */
   864
export default function GuidePage() {
   865
const store = useGuideStore();
   866
const { view, currentChapter, colorTheme, darkMode, sidebarOpen, searchOpen,
   867
toggleDarkMode, toggleSidebar, setSidebarOpen, setSearchOpen, setView, progress, getGlobalProgress } = store;
   868
const chapter = chapters.find(c => c.id === currentChapter);
   869
const gp = getGlobalProgress();
   870
871
useEffect(() => {
   872
document.documentElement.setAttribute('data-color', colorTheme);
   873
document.documentElement.classList.toggle('dark', darkMode);
   874
}, [colorTheme, darkMode]);
   875
876
useEffect(() => {
   877
const h = (e: KeyboardEvent) => {
   878
if ((e.metaKey || e.ctrlKey) && e.key === 'k') { e.preventDefault(); setSearchOpen(true); }
   879
if (e.key === 'Escape') setSearchOpen(false);
   880
if (e.key === 'ArrowRight' && view === 'chapter' && currentChapter < TOTAL_CHAPTERS) store.nextChapter();
   881
if (e.key === 'ArrowLeft' && view === 'chapter' && currentChapter > 1) store.prevChapter();
   882
};
   883
window.addEventListener('keydown', h); return () => window.removeEventListener('keydown', h);
   884
}, [view, currentChapter, setSearchOpen, store]);
   885
886
return (
   887
<div className="h-screen flex flex-col overflow-hidden bg-[var(--background)]">
   888
<header className="topbar flex items-center px-3 md:px-4 h-14 flex-shrink-0 z-40">
   889
<div className="flex items-center gap-2 md:gap-3 flex-1 min-w-0">
   890
<button onClick={toggleSidebar} className="p-2 rounded-lg hover:bg-white/10 transition-colors md:hidden">{sidebarOpen ? <X size={20} /> : <Menu size={20} />}</button>
   891
<button onClick={() => setView('home')} className="flex items-center gap-2.5 hover:opacity-80 transition-opacity flex-shrink-0">
   892
<div className="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center font-extrabold text-sm tracking-tight">C</div>
   893
<div className="hidden sm:block"><div className="text-[11px] font-bold leading-none tracking-wide">LANGAGE C</div><div className="text-[9px] text-white/50 leading-none mt-0.5 tracking-wider">GUIDE INTERACTIF</div></div>
   894
</button>
   895
<button onClick={() => setSearchOpen(true)} className="hidden md:flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/8 hover:bg-white/12 transition-colors text-sm text-white/60 flex-1 max-w-xs">
   896
<Search size={13} /> Rechercher... <kbd className="ml-auto text-[10px] px-1.5 py-0.5 rounded bg-white/8">Ctrl+K</kbd>
   897
</button>
   898
</div>
   899
<div className="flex items-center gap-1 md:gap-1.5">
   900
<button onClick={() => setSearchOpen(true)} className="p-2 rounded-lg hover:bg-white/10 transition-colors md:hidden"><Search size={18} /></button>
   901
<ThemePicker />
   902
<button onClick={toggleDarkMode} className="p-2 rounded-lg hover:bg-white/10 transition-colors">{darkMode ? <Sun size={17} /> : <Moon size={17} />}</button>
   903
<div className="hidden md:flex items-center gap-2.5 ml-1.5 pl-2.5 border-l border-white/15">
   904
<div className="text-right"><div className="text-[11px] font-semibold leading-none">Baba Niang</div><div className="text-[9px] text-white/50 leading-none mt-0.5">Etudiant</div></div>
   905
<div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center text-[11px] font-bold">BN</div>
   906
</div>
   907
</div>
   908
</header>
   909
910
<div className="flex flex-1 min-h-0">
   911
<AnimatePresence>{sidebarOpen && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/40 z-40 md:hidden" onClick={() => setSidebarOpen(false)} />}</AnimatePresence>
   912
913
<aside className={`sidebar fixed md:relative z-50 md:z-auto h-[calc(100vh-3.5rem)] w-[17rem] flex-shrink-0 flex flex-col transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
   914
<div className="flex-1 overflow-y-auto px-3 py-4">
   915
<div className="md:hidden mb-3"><div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10"><Search size={14} className="opacity-50" /><input value={store.searchQuery} onChange={e => store.setSearchQuery(e.target.value)} placeholder="Rechercher..." className="flex-1 bg-transparent outline-none text-sm placeholder:opacity-50" /></div></div>
   916
<div className="space-y-0.5 mb-5">
   917
{[{ icon: Home, label: 'Accueil', v: 'home' }, { icon: Trophy, label: 'Progression', v: 'progress' }, { icon: Star, label: 'Favoris', v: 'favorites' }].map(it => (
   918
<button key={it.v} onClick={() => { setView(it.v as any); setSidebarOpen(false); }} className={`sidebar-chapter w-full ${view === it.v ? 'active' : ''}`}>
   919
<it.icon size={15} /><span>{it.label}</span>
   920
{it.v === 'progress' && gp > 0 && <span className="text-[11px] opacity-60 tabular-nums">{gp}%</span>}
   921
</button>
   922
))}
   923
</div>
   924
<div className="text-[9px] font-bold uppercase tracking-widest opacity-40 mb-2 px-2.5">Sommaire</div>
   925
<div className="space-y-0.5">
   926
{chapters.map(ch => {
   927
const p = progress[ch.id];
   928
const active = view === 'chapter' && currentChapter === ch.id;
   929
return (
   930
<button key={ch.id} onClick={() => { store.setChapter(ch.id); setSidebarOpen(false); }} className={`sidebar-chapter w-full ${active ? 'active' : ''}`}>
   931
<div className="ch-num tabular-nums">{String(ch.id).padStart(2, '0')}</div>
   932
<div className="min-w-0 flex-1"><div className="truncate text-[13px]">{shortTitles[ch.id] || ch.title}</div></div>
   933
<div className="ch-status">{p?.completed ? <CheckCircle2 size={13} className="text-green-300" /> : p?.visited ? <Clock size={13} className="opacity-40" /> : null}</div>
   934
</button>
   935
);
   936
})}
   937
</div>
   938
</div>
   939
<div className="p-3 border-t border-white/8"><div className="text-[9px] opacity-30 text-center leading-relaxed">Langage C &mdash; Guide Interactif<br />par Baba Niang</div></div>
   940
</aside>
   941
942
<main className="flex-1 min-w-0 overflow-hidden">
   943
{view === 'home' && <HomePage />}
   944
{view === 'chapter' && chapter && <ChapterPage chapter={chapter} />}
   945
{view === 'progress' && <ProgressPage />}
   946
{view === 'favorites' && <FavoritesPage />}
   947
</main>
   948
</div>
   949
950
<AnimatePresence>{searchOpen && <SearchOverlay />}</AnimatePresence>
   951
</div>
   952
);
   953
}
   954

