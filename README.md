# Langage C — Guide Interactif V4.1

Un cours complet pour apprendre le langage C **de zéro à autonome**, avec une pédagogie progressive inspirée des meilleurs tutoriels interactifs (style [Guide UML-B](https://baba-niang.github.io/Guide-UML-B/)).

## ✨ Ce qui fait la différence

Chaque chapitre suit **3 niveaux de progression** :

1. **🟢 Je comprends** — histoire, analogie, vocabulaire défini AVANT usage, **schémas animés pas-à-pas**, reveal au clic, mini-quiz
2. **🔵 Je sais lire** — code multi-lignes avec coloration syntaxique, numéros de ligne, **explications ligne par ligne** (panneau rétractable) et **sortie du programme à côté**
3. **🟣 Je sais faire** — défis interactifs (prédis / complète / trouve l'erreur), erreurs fréquentes bad-vs-good, tableaux comparatifs, mini-quiz, bilan

L'ordre pédagogique : Comprendre → Exemple → Visualisation → Manipuler → Erreur → Exercice → Quiz.

## 🆕 Nouveautés V4.1

- **Composant `BuildUp`** : animations pas-à-pas cliquables (bouton Suivant) pour construire visuellement un concept. Utilisé pour :
  - Pointeurs (ch. 8) : variable → adresse → & → pointeur → * → modification
  - Tableaux (ch. 7) : parcours case par case, piège off-by-one
  - Allocation (ch. 11) : cycle malloc → utilisation → free
  - Récursivité (ch. 14) : empilement/dépilement de la pile d'appels
- **Tableaux comparatifs** (`comparisonTable`) : & vs *, i<n vs i<=n, tas vs pile, pièges mortels
- **Nouveaux diagrammes** : `stackVsHeap` (pile vs tas côte à côte), `memoryMap` (4 zones mémoire), `twoZoneCompare`
- **Réduction des TextBlock** : convertis en vocab/analogy/flowSteps quand possible

## 🎯 Contenu

16 chapitres complets, du tout débutant au niveau intermédiaire avancé :

| #  | Chapitre | Notions clés |
|----|----------|--------------|
| 01 | Qu'est-ce qu'un programme ? | Code source, compilateur, gcc, main, printf |
| 02 | Variables et types de base | int, float, char, déclaration, affectation |
| 03 | Opérateurs | arithmétiques, comparaison, logiques, ++ |
| 04 | Conditions | if, else if, else, switch, break |
| 05 | Boucles | for, while, do-while, break, continue |
| 06 | Fonctions | paramètres, return, void, portée des variables |
| 07 | Tableaux | indices, parcours (animé), débordement, off-by-one |
| 08 | **Pointeurs** | **BuildUp visuel : variable → adresse → & → ptr → * → modif** |
| 09 | Chaînes de caractères | char[], \0, strlen, strcpy, strcmp |
| 10 | Structures | struct, typedef, . et ->, tableaux de struct |
| 11 | **Allocation dynamique** | **tas vs pile (visuel), malloc/free pas-à-pas** |
| 12 | Fichiers | fopen, fprintf, fscanf, fclose, modes r/w/a |
| 13 | Modularité | .h/.c, prototypes, gardes d'inclusion, Makefile |
| 14 | **Récursivité** | **animation empilement/dépilement de la pile d'appels** |
| 15 | Pointeurs avancés | arithmétique, pointeur sur fonction, void* |
| 16 | Débogage | -Wall -Wextra, assert, gdb, valgrind, segfault |

## 🚀 Installation

### Prérequis

- **Node.js 18+** (recommandé 20+)
- npm (inclus avec Node.js)

### Étapes

```bash
# 1. Dézippe le fichier
unzip langage-c-guide-v4.zip
cd langage-c-guide-v4

# 2. Installe les dépendances (lockfile inclus)
npm install

# 3. Lance le serveur de développement
npm run dev

# 4. Ouvre http://localhost:3000 dans ton navigateur
```

### Build de production (statique)

```bash
npm run build
# Le dossier out/ contient le site statique
```

## 🚀 Déploiement GitHub Pages

Ce dépôt est pré-configuré pour un déploiement automatique sur GitHub Pages.

### Étapes

1. Crée un nouveau repo sur GitHub (ex: `langage-c-guide-v4`)
2. Push le contenu du zip :
   ```bash
   cd langage-c-guide-v4
   git init
   git add .
   git commit -m "V4.1 initiale"
   git branch -M main
   git remote add origin https://github.com/<ton-user>/langage-c-guide-v4.git
   git push -u origin main
   ```
3. Sur GitHub : **Settings → Pages → Source = GitHub Actions**
4. Le workflow `.github/workflows/deploy.yml` se déclenche à chaque push sur `main`. Il build le site en statique et le déploie automatiquement.
5. Après 1-2 min, ton site est en ligne sur `https://<ton-user>.github.io/langage-c-guide-v4/`

### Notes techniques

- `next.config.ts` détecte automatiquement l'environnement GitHub Actions (`GITHUB_ACTIONS=true`) et active le `basePath`/`assetPrefix` pour le sous-dossier.
- En local (`npm run dev`), aucun `basePath` : le site marche sur `http://localhost:3000/`.
- `.nojekyll` est inclus dans `public/` pour désactiver le traitement Jekyll de GitHub Pages (nécessaire pour les dossiers commençant par `_` comme `_next/`).
- `package-lock.json` est inclus pour des installs reproductibles.

## 🎨 Personnalisation

### Changer la couleur dominante

Bouton **« Couleur »** en haut à droite. 6 palettes : Émeraude, Océan, Améthyste, Ambre, Corail, Sarcelle. Sauvegardé en localStorage.

### Mode sombre

Bouton lune/soleil en haut à droite. Sauvegardé en localStorage.

### Raccourcis clavier

- `Ctrl + K` — Ouvrir la recherche
- `←` / `→` — Chapitre précédent / suivant
- `1` / `2` / `3` — Switcher entre les niveaux
- `Échap` — Fermer la recherche

## 📁 Structure du projet

```
langage-c-guide-v4/
├── .github/workflows/deploy.yml  # CI GitHub Pages
├── public/
│   ├── .nojekyll                 # Désactive Jekyll sur GH Pages
│   ├── logo.svg
│   └── robots.txt
├── src/
│   ├── app/
│   │   ├── globals.css           # Design system complet
│   │   ├── layout.tsx
│   │   └── page.tsx              # App principale
│   ├── components/
│   │   └── pedagogy/
│   │       ├── blocks.tsx        # StoryBlock, AnalogyBlock, VocabBlock, etc.
│   │       ├── build-up.tsx      # ⭐ Animations pas-à-pas (NOUVEAU V4.1)
│   │       ├── code-block.tsx    # Code premium avec sortie
│   │       ├── extra-blocks.tsx  # ⭐ ComparisonTable, FlowSteps, StackVsHeap (NOUVEAU V4.1)
│   │       ├── visuals.tsx       # 17 diagrammes
│   │       └── visual-router.tsx
│   └── lib/
│       ├── curriculum-types.ts   # Modèle pédagogique typé
│       ├── curriculum-part1.ts   # Ch. 1-4
│       ├── curriculum-part2.ts   # Ch. 5-8 (pointeurs refaits)
│       ├── curriculum-part3.ts   # Ch. 9-16 (alloc + récursivité refaits)
│       ├── store.ts              # Zustand
│       ├── syntax.ts             # Tokenizer C
│       └── themes.ts             # 6 palettes
├── prisma/schema.prisma          # Schéma optionnel
├── package.json
├── package-lock.json             # ⭐ Inclus pour CI reproductible
├── next.config.ts                # ⭐ Config GitHub Pages (output: export)
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.mjs
├── components.json               # shadcn/ui
├── eslint.config.mjs
└── .gitignore
```

## ✏️ Modifier le contenu

### Types de blocs disponibles

- `story` — Histoire avec apparition progressive
- `analogy` — Analogie vraie vie ↔ code
- `vocab` — Vocabulaire défini avant usage
- `visual` — Un des 17+3 diagrammes
- `buildUp` — ⭐ **Animation pas-à-pas cliquable** (memory, pointer, code, stack, narration)
- `comparisonTable` — ⭐ **Tableau comparatif** avec tones good/bad/highlight
- `flowSteps` — ⭐ **Étapes numérotées connectées**
- `codeWalk` — Code avec explications ligne par ligne + sortie
- `reveal` — Bloc « clique pour révéler »
- `error` — Erreur fréquente (bad vs good)
- `challenge` — Défi (predict / fill / findBug)
- `quiz` — Mini-quiz avec feedback
- `recap` — Bilan du chapitre
- `text` — Paragraphes (utilisé avec parcimonie)

### Ajouter un BuildUp

Exemple (dans `curriculum-types.ts` le type `BuildUpStep` supporte 5 kinds) :

```ts
{
  kind: "buildUp",
  title: "Comment naît un pointeur",
  intro: "Clique sur Suivant pour avancer.",
  steps: [
    { kind: "narration", caption: "Tout commence par une variable..." },
    { kind: "memory", caption: "Voici age.", vars: [{ name: "age", type: "int", value: "20", addr: "0x7ffc", tone: "new" }] },
    { kind: "code", caption: "On déclare un pointeur.", code: `int *ptr = &age;`, activeLines: [1] },
    { kind: "pointer", caption: "ptr pointe vers age.", varName: "age", ptrName: "ptr", value: "20", addr: "0x7ffc", showArrow: true, showDeref: true },
    { kind: "stack", caption: "Pile d'appels.", frames: [{ label: "main()", tone: "active" }] },
  ],
}
```

## 🛠 Stack technique

- **Next.js 16** (App Router, static export)
- **TypeScript 5**
- **Tailwind CSS 4** + **tw-animate-css**
- **shadcn/ui** (New York) + **Radix UI**
- **Framer Motion** pour les animations
- **Zustand** (state management, persisté en localStorage)
- **Lucide React** pour les icônes

## 📝 Licence

Projet pédagogique par **Baba Niang**. Libre d'utilisation et de modification à des fins éducatives.

## 🙏 Remerciements

Pédagogie inspirée du [Guide UML-B](https://baba-niang.github.io/Guide-UML-B/) pour sa progression en 3 niveaux et son approche visuelle.


## Pédagogie de production

Chaque chapitre fournit désormais une **recette pour produire** : syntaxe, prototype, paramètres, valeur de retour, règles et exemple complet. L’objectif est de permettre à l’étudiant d’écrire son propre code, pas seulement de lire un code déjà écrit.
