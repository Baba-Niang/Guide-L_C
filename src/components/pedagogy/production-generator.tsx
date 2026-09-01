"use client";
import { useMemo, useState } from "react";

const TEMPLATES = {
  variable: { label: "Variable", fields: ["type", "nom", "valeur"], make: (v:any) => `${v.type} ${v.nom} = ${v.valeur};` },
  printf: { label: "Afficher", fields: ["format", "expression"], make: (v:any) => `printf("${v.format}\\n", ${v.expression});` },
  scanf: { label: "Lire", fields: ["format", "nom"], make: (v:any) => `scanf("${v.format}", &${v.nom});` },
  if: { label: "Condition", fields: ["condition"], make: (v:any) => `if (${v.condition}) {\n    // instructions\n}` },
  for: { label: "Boucle for", fields: ["initialisation", "condition", "increment"], make: (v:any) => `for (${v.initialisation}; ${v.condition}; ${v.increment}) {\n    // instructions\n}` },
  function: { label: "Fonction", fields: ["retour", "nom", "parametres"], make: (v:any) => `${v.retour} ${v.nom}(${v.parametres}) {\n    // instructions\n}` },
};

export function ProductionGenerator() {
  const [kind, setKind] = useState<keyof typeof TEMPLATES>("variable");
  const tpl = TEMPLATES[kind];
  const [values, setValues] = useState<Record<string,string>>({type:"int",nom:"age",valeur:"20",format:"%d",expression:"age",condition:"age >= 18",initialisation:"int i = 0",increment:"i++",retour:"int",parametres:"int a"});
  const code = useMemo(() => tpl.make(values), [tpl, values]);
  return <section className="ped-card production-generator">
    <div className="flex items-center justify-between gap-3 flex-wrap">
      <div><div className="text-xs font-bold uppercase tracking-widest text-[var(--theme-600)]">Savoir produire</div><h3 className="!mt-1">Construis ta propre ligne de C</h3></div>
      <select value={kind} onChange={e=>setKind(e.target.value as keyof typeof TEMPLATES)} className="rounded-lg border bg-[var(--card)] px-3 py-2 text-sm">{Object.entries(TEMPLATES).map(([k,v])=><option key={k} value={k}>{v.label}</option>)}</select>
    </div>
    <div className="grid gap-3 sm:grid-cols-2 mt-4">{tpl.fields.map(f=><label key={f} className="text-sm font-semibold">{f}<input value={values[f]||""} onChange={e=>setValues({...values,[f]:e.target.value})} className="mt-1 w-full rounded-lg border bg-[var(--background)] px-3 py-2 font-mono text-sm" /></label>)}</div>
    <pre className="mt-4 rounded-xl p-4 overflow-x-auto bg-[var(--code-bg)] text-[var(--code-fg)]"><code>{code}</code></pre>
    <p className="mt-2 text-sm text-[var(--muted-foreground)]">Utilise la formule, remplace les éléments génériques, puis vérifie le résultat.</p>
  </section>;
}
