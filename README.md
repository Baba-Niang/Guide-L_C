# Langage C — Guide Interactif V4

Un cours complet pour apprendre le langage C **de zéro à autonome**, avec une pédagogie progressive inspirée des meilleurs tutoriels interactifs.

## ✨ Ce qui fait la différence

Chaque chapitre suit **3 niveaux de progression** :

1. **🟢 Je comprends** — histoire, analogie, vocabulaire défini AVANT usage, schémas animés, reveal au clic, mini-quiz
2. **🔵 Je sais lire** — code multi-lignes avec coloration syntaxique, numéros de ligne, **explications ligne par ligne** (panneau rétractable) et **sortie du programme à côté**
3. **🟣 Je sais faire** — défis interactifs (prédis / complète / trouve l'erreur), erreurs fréquentes bad-vs-good, mini-quiz, bilan

L'ordre pédagogique suit le pattern UML : Comprendre → Exemple → Visualisation → Manipuler → Erreur → Exercice → Quiz.

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
| 07 | Tableaux | indices, parcours, débordement, somme/max |
| 08 | Pointeurs | & et *, adresse vs valeur, échange par pointeur |
| 09 | Chaînes de caractères | char[], \0, strlen, strcpy, strcmp |
| 10 | Structures | struct, typedef, . et ->, tableaux de struct |
| 11 | Allocation dynamique | malloc, calloc, realloc, free, fuites mémoire |
| 12 | Fichiers | fopen, fprintf, fscanf, fclose, modes r/w/a |
| 13 | Modularité | .h/.c, prototypes, gardes d'inclusion, Makefile |
| 14 | Récursivité | cas de base, factorielle, Fibonacci, pile d'appels |
| 15 | Pointeurs avancés | arithmétique, pointeur sur fonction, void* |
| 16 | Débogage | -Wall -Wextra, assert, gdb, valgrind, segfault |

## 🚀 Installation

### Prérequis

- **Node.js 18+** ou **Bun** (recommandé)
- Un terminal

### Étapes

```bash
# 1. Dézippe le fichier
unzip langage-c-guide-v4.zip
cd langage-c-guide-v4

# 2. Installe les dépendances
# Avec bun (recommandé, plus rapide) :
bun install
# Ou avec npm :
npm install
# Ou avec pnpm :
pnpm install

# 3. Lance le serveur de développement
bun run dev
# ou : npm run dev

# 4. Ouvre http://localhost:3000 dans ton navigateur
```

### Build de production

```bash
bun run build
bun run start
```

Le site est alors servi sur http://localhost:3000.

## 🎨 Personnalisation

### Changer la couleur dominante

Clique sur le bouton **« Couleur »** en haut à droite. 6 palettes disponibles :
- Émeraude (vert, par défaut)
- Océan (bleu)
- Améthyste (violet)
- Ambre (orange)
- Corail (rouge)
- Sarcelle (turquoise)

Le choix est sauvegardé automatiquement dans le navigateur.

### Mode sombre

Bouton lune/soleil en haut à droite. Sauvegardé automatiquement.

### Raccourcis clavier

- `Ctrl + K` — Ouvrir la recherche
- `←` / `→` — Chapitre précédent / suivant
- `1` / `2` / `3` — Switcher entre les niveaux (Je comprends / Je sais lire / Je sais faire)
- `Échap` — Fermer la recherche

## 📁 Structure du projet

```
langage-c-guide-v4/
├── src/
│   ├── app/
│   │   ├── globals.css         # Design system complet (thèmes, blocs, diagrammes)
│   │   ├── layout.tsx          # Layout racine (métadonnées, fonts)
│   │   ├── page.tsx            # App principale (topbar, sidebar, home, chapter, etc.)
│   │   └── api/route.ts        # Route API d'exemple (inutilisée)
│   ├── components/
│   │   ├── pedagogy/
│   │   │   ├── blocks.tsx      # StoryBlock, AnalogyBlock, VocabBlock, RevealBlock,
│   │   │   │                   #   ErrorBlock, ChallengeBlock, QuizBlock, RecapBlock, TextBlock
│   │   │   ├── code-block.tsx  # Bloc de code premium (lignes, explications, sortie)
│   │   │   ├── visuals.tsx     # 17 diagrammes (mémoire, pointeur, tableau, etc.)
│   │   │   └── visual-router.tsx
│   │   └── ui/                 # shadcn/ui (Radix)
│   ├── lib/
│   │   ├── curriculum-types.ts # Modèle pédagogique typé
│   │   ├── curriculum.ts       # Point d'entrée des chapitres
│   │   ├── curriculum-part1.ts # Chapitres 1-4
│   │   ├── curriculum-part2.ts # Chapitres 5-8
│   │   ├── curriculum-part3.ts # Chapitres 9-16
│   │   ├── store.ts            # Zustand (progression, favoris, thème)
│   │   ├── syntax.ts           # Tokenizer C custom pour la coloration
│   │   ├── themes.ts           # 6 palettes de couleur
│   │   └── utils.ts            # cn() helper
│   └── hooks/
│       ├── use-mobile.ts
│       └── use-toast.ts
├── public/
│   ├── logo.svg
│   └── robots.txt
├── prisma/
│   └── schema.prisma           # Schéma optionnel (non utilisé par défaut)
├── package.json
├── tsconfig.json
├── next.config.ts
├── postcss.config.mjs
├── tailwind.config.ts
├── components.json             # shadcn/ui config
├── eslint.config.mjs
├── .env.example
└── .gitignore
```

## ✏️ Modifier le contenu

### Ajouter un chapitre

Édite l'un des fichiers `src/lib/curriculum-part*.ts` et ajoute un objet `Chapter`. Le typage TypeScript te guidera.

### Ajouter un bloc pédagogique

Les types de blocs disponibles (définis dans `src/lib/curriculum-types.ts`) :

- `story` — Histoire avec apparition progressive des étapes
- `analogy` — Analogie vraie vie ↔ code
- `vocab` — Vocabulaire défini avant usage
- `visual` — Un des 17 diagrammes
- `codeWalk` — Code avec explications ligne par ligne + sortie
- `reveal` — Bloc « clique pour révéler »
- `error` — Erreur fréquente (bad vs good)
- `challenge` — Défi interactif (predict / fill / findBug)
- `quiz` — Mini-quiz avec feedback
- `recap` — Bilan du chapitre
- `text` — Paragraphes simples

### Créer un nouveau type de diagramme

1. Ajoute un cas dans `VisualBlock['diagram']` (dans `curriculum-types.ts`)
2. Crée le composant React dans `src/components/pedagogy/visuals.tsx`
3. Ajoute le routage dans `src/components/pedagogy/visual-router.tsx`

## 🛠 Stack technique

- **Next.js 16** (App Router)
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
