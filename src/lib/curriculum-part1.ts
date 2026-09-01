import type { Chapter } from "./curriculum-types";

// Chapters 1–4: Programme C, Variables, Opérateurs, Conditions
export const chaptersPart1: Chapter[] = [
  // ============================================================
  // CHAPITRE 1 — QU'EST-CE QU'UN PROGRAMME ?
  // ============================================================
  {
    id: 1,
    title: "Qu'est-ce qu'un programme ?",
    subtitle: "Découvrir le langage C, écrire, compiler et exécuter son premier code.",
    shortTitle: "Programme C",
    icon: "Monitor",
    keywords: ["programme", "compilateur", "gcc", "main", "printf", "hello world", "code source"],
    goal: "Comprendre ce qu'est un programme, comment on l'écrit en C, et comment on l'exécute.",
    minutes: 12,
    levels: [
      {
        id: "comprendre",
        title: "Je comprends",
        subtitle: "L'idée avant le code",
        blocks: [
          {
            kind: "story",
            eyebrow: "Point de départ",
            steps: [
              { text: "Tu veux que l'ordinateur affiche un message à l'écran." },
              { text: "Tu veux qu'il calcule une addition à ta place." },
              { text: "L'ordinateur peut le faire en une fraction de seconde, sans se tromper." },
              { text: "Mais il y a un problème : l'ordinateur ne comprend ni le français, ni l'anglais." },
            ],
          },
          {
            kind: "analogy",
            real: {
              icon: "🌍",
              title: "Un touriste étranger",
              desc: "Tu parles français, lui parle une langue que tu ne comprends pas. Vous avez besoin d'un interprète.",
            },
            code: {
              icon: "💻",
              title: "L'ordinateur",
              desc: "Tu écris en C, lui ne comprend que des 0 et des 1 (le binaire). Il te faut un traducteur.",
            },
            link: "Le compilateur est l'interprète qui traduit ton C en binaire.",
          },
          {
            kind: "vocab",
            terms: [
              { word: "Code source", def: "Le texte que tu écris dans un fichier .c. C'est lisible par un humain." },
              { word: "Compilateur", def: "Le logiciel (ex: gcc) qui traduit ton code source en binaire exécutable par la machine." },
              { word: "Exécutable", def: "Le fichier obtenu après compilation (ex: a.out ou .exe). C'est ce que la machine lance." },
              { word: "Binaire", def: "La suite de 0 et de 1 que comprend le processeur. On n'écrit jamais directement en binaire." },
            ],
          },
          {
            kind: "visual",
            diagram: {
              type: "process",
              title: "De ton texte à l'exécution",
              steps: ["Code source\nmonprog.c", "Compilateur\ngcc", "Exécutable\na.out", "Résultat\nà l'écran"],
            },
            caption: "Quatre étapes, toujours dans cet ordre.",
          },
          {
            kind: "reveal",
            label: "Pourquoi apprendre le C et pas un autre langage ?",
            hint: "Clique pour révéler",
            content:
              "Le C est un des plus vieux langages encore massivement utilisés. Il est proche de la machine : tu vois exactement comment la mémoire travaille. Une fois le C maîtrisé, apprendre C++, Java, Python ou JavaScript devient beaucoup plus facile — ils empruntent tous la syntaxe du C.",
          },
          {
            kind: "quiz",
            question: "Quel outil traduit le code C en binaire exécutable ?",
            options: ["L'éditeur de texte", "Le compilateur (gcc)", "Le système d'exploitation", "Le navigateur web"],
            correctIndex: 1,
            explanation:
              "Le compilateur (gcc, clang…) lit ton .c et produit un fichier exécutable. L'éditeur sert juste à écrire le texte.",
          },
        ],
      },
      {
        id: "lire",
        title: "Je sais lire",
        subtitle: "Le plus petit programme C",
        blocks: [
          {
            kind: "text",
            paragraphs: [
              "Voici le plus petit programme C qui affiche quelque chose à l'écran. **Ne cherche pas à tout comprendre maintenant.** On va le découper ligne par ligne juste après.",
            ],
          },
          {
            kind: "codeWalk",
            filename: "bonjour.c",
            code: `#include <stdio.h>

int main(void) {
    printf("Bonjour le monde !\\n");
    return 0;
}`,
            output: "Bonjour le monde !",
            explanations: {
              1: "On importe la boîte à outils stdio.h (Standard Input/Output). Elle contient printf, l'outil pour afficher du texte.",
              2: "Ligne vide pour aérer. Optionnelle mais recommandée.",
              4: "int main(void) est le point de départ obligatoire. C'est là que l'ordinateur commence à lire le programme.",
              5: "{ ouvre le bloc du main. Tout ce qui est entre { et } est exécuté dans l'ordre.",
              6: "printf(...) affiche le texte entre guillemets. \\n représente un saut de ligne. Le ; termine l'instruction.",
              7: "return 0; signifie « le programme se termine, tout s'est bien passé ». 0 = zéro erreur.",
              8: "} ferme le bloc du main. Le programme est fini.",
            },
          },
          {
            kind: "vocab",
            terms: [
              { word: "#include", def: "Direction au compilateur : « va chercher cette boîte à outils ». La ligne commence toujours par #." },
              { word: "main", def: "La fonction principale. C'est le point d'entrée : l'ordinateur commence toujours par exécuter main()." },
              { word: "printf", def: "La fonction qui affiche du texte à l'écran. Le f signifie « formaté »." },
              { word: "; (point-virgule)", def: "Termine une instruction. Comme le point à la fin d'une phrase en français." },
              { word: "{ } (accolades)", def: "Délimitent un bloc. Tout ce qui est entre { et } appartient à la même fonction." },
              { word: "\\n", def: "Un saut de ligne dans un texte affiché. Le \\ indique que le caractère suivant est spécial." },
            ],
          },
          {
            kind: "challenge",
            variant: "predict",
            prompt: "Que se passe-t-il si on oublie le point-virgule à la fin de la ligne printf ?",
            accept: ["erreur", "Erreur", "ne compile pas", "compile pas", "ne compile", "Le programme ne compile pas", "Erreur de compilation"],
            hint: "Le ; est obligatoire en C. Sans lui, le compilateur ne sait pas où s'arrête l'instruction.",
            feedback:
              "Le compilateur affiche une erreur du type « expected ; before ... » et refuse de produire l'exécutable. C'est l'erreur la plus fréquente chez les débutants.",
          },
          {
            kind: "quiz",
            question: "À quoi sert la ligne `#include <stdio.h>` ?",
            options: [
              "À déclarer la fonction main",
              "À importer printf et d'autres outils d'affichage",
              "À compiler le programme",
              "À exécuter le programme",
            ],
            correctIndex: 1,
            explanation:
              "#include va chercher le fichier stdio.h qui contient la définition de printf, scanf, etc. Sans lui, printf ne serait pas reconnu.",
          },
        ],
      },
      {
        id: "faire",
        title: "Je sais faire",
        subtitle: "Compiler et exécuter ton premier programme",
        blocks: [
          {
            kind: "text",
            paragraphs: [
              "Tu as 3 étapes à reproduire dans ton terminal. On suppose que tu as enregistré le code précédent dans un fichier `bonjour.c`.",
            ],
          },
          {
            kind: "codeWalk",
            filename: "Terminal",
            code: `gcc bonjour.c -o bonjour
./bonjour`,
            output: "Bonjour le monde !",
            explanations: {
              1: "gcc lit bonjour.c et produit un exécutable appelé bonjour (-o donne le nom de sortie).",
              2: "./bonjour lance l'exécutable. Le ./ signifie « dans le dossier courant ».",
            },
          },
          {
            kind: "error",
            title: "Erreur fréquente : oublier #include",
            bad: `int main(void) {
    printf("Hi");
    return 0;
}`,
            good: `#include <stdio.h>
int main(void) {
    printf("Hi");
    return 0;
}`,
            explanation:
              "Sans stdio.h, le compilateur ne connaît pas printf. Il affiche « implicit declaration of function 'printf' ». La solution : toujours commencer par #include <stdio.h> dès qu'on utilise printf ou scanf.",
          },
          {
            kind: "error",
            title: "Erreur fréquente : oublier le ; final",
            bad: `printf("Bonjour\\n")`,
            good: `printf("Bonjour\\n");`,
            explanation:
              "Le point-virgule termine chaque instruction. C'est aussi indispensable que le point final d'une phrase. L'oublier provoque l'erreur la plus courante du débutant.",
          },
          {
            kind: "challenge",
            variant: "findBug",
            prompt: "Il y a une erreur dans ce programme. Trouve-la (indique le numéro de la ligne fautive).",
            code: `#include <stdio.h>

int main(void) {
    printf("Bonjour")
    return 0;
}`,
            badLines: [4],
            hint: "Cherche une instruction qui ne se termine pas correctement.",
            feedback:
              "Ligne 4 : il manque le ; après printf(\"Bonjour\"). Le compilateur va signaler l'erreur à la ligne suivante, mais le vrai problème est à la ligne 4.",
          },
          {
            kind: "challenge",
            variant: "predict",
            prompt: "Que fait ce programme (que voit l'utilisateur) ?",
            code: `#include <stdio.h>
int main(void) {
    printf("A");
    printf("B");
    return 0;
}`,
            accept: ["AB", "ab", "Ab", "Il affiche AB", "affiche AB", "AB à l'écran"],
            hint: "printf n'ajoute pas de saut de ligne si tu n'en mets pas.",
            feedback:
              "Le programme affiche « AB » sur la même ligne. Sans \\n, rien ne passe à la ligne. printf écrit exactement ce qu'on lui donne, ni plus ni moins.",
          },
          {
            kind: "recap",
            title: "Bilan du chapitre 1",
            bullets: [
              { text: "Un programme C est un texte (le code source) que le compilateur traduit en exécutable." },
              { text: "Tout programme C commence par `int main(void) { ... }`." },
              { text: "`printf(\"texte\")` affiche du texte à l'écran." },
              { text: "Chaque instruction se termine par `;` et chaque bloc est délimité par `{ }`." },
              { text: "On compile avec `gcc fichier.c -o sortie` puis on exécute avec `./sortie`." },
            ],
          },
          {
            kind: "quiz",
            question: "Quelle commande compile un fichier bonjour.c en exécutable nommé bonjour ?",
            options: [
              "gcc bonjour.c bonjour",
              "gcc bonjour.c -o bonjour",
              "compile bonjour.c -o bonjour",
              "run bonjour.c",
            ],
            correctIndex: 1,
            explanation:
              "`gcc bonjour.c -o bonjour` : -o (output) donne le nom de l'exécutable. Sans -o, gcc produit un fichier nommé a.out par défaut.",
          },
        ],
      },
    ],
  },

  // ============================================================
  // CHAPITRE 2 — LES VARIABLES ET LES TYPES DE BASE
  // ============================================================
  {
    id: 2,
    title: "Les variables et les types de base",
    subtitle: "Stocker des nombres et des lettres dans la mémoire de l'ordinateur.",
    shortTitle: "Variables",
    icon: "Box",
    keywords: ["variable", "int", "float", "char", "double", "mémoire", "affectation", "déclaration", "type"],
    goal: "Comprendre ce qu'est une variable, comment la déclarer, et quels types de données on peut stocker.",
    minutes: 18,
    levels: [
      {
        id: "comprendre",
        title: "Je comprends",
        subtitle: "Une boîte avec un nom",
        blocks: [
          {
            kind: "story",
            eyebrow: "La situation",
            steps: [
              { text: "Tu veux calculer l'âge d'une personne dans 10 ans." },
              { text: "Tu veux additionner deux prix dans un supermarché." },
              { text: "Tu veux stocker la première lettre du prénom d'un utilisateur." },
              { text: "L'ordinateur doit retenir ces valeurs le temps de faire le calcul." },
            ],
          },
          {
            kind: "analogy",
            real: {
              icon: "📦",
              title: "Une boîte étiquetée",
              desc: "Tu écris « âge » sur une boîte, tu y ranges le nombre 25. Tu peux le sortir, le remplacer, l'utiliser.",
            },
            code: {
              icon: "🔢",
              title: "Une variable",
              desc: "Tu donnes un nom à une case mémoire (ex: age) et tu y ranges une valeur (ex: 25). Tu peux la lire et la modifier.",
            },
            link: "Une variable est une boîte mémoire avec un nom, qui contient une valeur.",
          },
          {
            kind: "vocab",
            terms: [
              { word: "Mémoire (RAM)", def: "L'espace de travail de l'ordinateur. Coupé en millions de petites cases numérotées." },
              { word: "Variable", def: "Une case mémoire à laquelle on a donné un nom lisible (ex: age, prix). On y range une valeur." },
              { word: "Type", def: "La nature de ce qu'on range : un entier (int), un nombre à virgule (float), une lettre (char)." },
              { word: "Déclaration", def: "Créer la variable en donnant son type et son nom. Ex: int age;" },
              { word: "Affectation", def: "Ranger une valeur dans la variable. Ex: age = 25; Le = signifie « range »." },
              { word: "Initialisation", def: "Déclarer ET affecter en une seule fois. Ex: int age = 25;" },
            ],
          },
          {
            kind: "visual",
            diagram: {
              type: "memory",
              vars: [
                { name: "age", type: "int", value: "20", addr: "0x7ffc" },
                { name: "prix", type: "float", value: "3.14", addr: "0x8000" },
                { name: "lettre", type: "char", value: "'A'", addr: "0x8004" },
              ],
            },
            caption: "Chaque variable a un nom, un type, une valeur et une adresse en mémoire.",
          },
          {
            kind: "reveal",
            label: "Pourquoi doit-on annoncer le type à l'avance ?",
            hint: "Clique pour révéler",
            content:
              "Parce que la machine réserve la bonne taille de case : 4 octets pour un int, 4 pour un float, 1 seul pour un char. En annonçant le type, tu dis au compilateur combien de mémoire réserver. C'est ce qui rend le C rapide et proche de la machine.",
          },
          {
            kind: "quiz",
            question: "Quelle est la bonne définition d'une variable ?",
            options: [
              "Une case mémoire avec un nom, qui contient une valeur",
              "Une fonction qui calcule un résultat",
              "Un type de donnée prédéfini",
              "Une adresse réseau",
            ],
            correctIndex: 0,
            explanation:
              "Une variable = un nom + un type + une valeur stockée en mémoire. C'est la chose la plus importante à retenir de ce chapitre.",
          },
        ],
      },
      {
        id: "lire",
        title: "Je sais lire",
        subtitle: "Déclarer, affecter, utiliser",
        blocks: [
          {
            kind: "text",
            paragraphs: [
              "Voici le programme le plus simple possible qui utilise une variable. On déclare une variable `age`, on y range 20, puis on l'affiche.",
            ],
          },
          {
            kind: "codeWalk",
            filename: "age.c",
            code: `#include <stdio.h>

int main(void) {
    int age;
    age = 20;
    printf("J'ai %d ans\\n", age);
    return 0;
}`,
            output: "J'ai 20 ans",
            explanations: {
              1: "#include <stdio.h> pour avoir accès à printf.",
              4: "On déclare la variable age de type int (entier). À ce stade, sa valeur est indéterminée.",
              5: "On range la valeur 20 dans age. Le = est l'opérateur d'affectation : il range à gauche ce qui est à droite.",
              6: "printf affiche le texte. %d est un trou (un « format specifier ») qui sera remplacé par la valeur de age.",
              7: "return 0; — fin normale du programme.",
            },
          },
          {
            kind: "vocab",
            terms: [
              { word: "%d", def: "Un trou dans le texte, remplacé par un int au moment de l'affichage. Le d signifie decimal." },
              { word: "%f", def: "Un trou pour un float/double. Affiché avec 6 chiffres après la virgule par défaut." },
              { word: "%c", def: "Un trou pour un seul caractère (char)." },
              { word: "%s", def: "Un trou pour une chaîne de caractères (string)." },
            ],
          },
          {
            kind: "challenge",
            variant: "predict",
            prompt: "Que se passe-t-il si on oublie d'initialiser age ?",
            code: `int age;
printf("%d", age);`,
            accept: ["n'importe quoi", "valeur inconnue", "aléatoire", "indéterminé", "Indéterminé", "n'importe", "valeur aléatoire", " garbage", "garbage"],
            hint: "Une variable non initialisée contient ce que la mémoire avait avant : on ne sait pas ce que c'est.",
            feedback:
              "On obtient une valeur quelconque (souvent appelée « garbage ») : 0, -123456, 42… Ça dépend de ce que la mémoire contenait avant. Règle d'or : toujours initialiser ses variables.",
          },
          {
            kind: "codeWalk",
            filename: "types.c",
            code: `#include <stdio.h>

int main(void) {
    int    age     = 20;
    float  prix    = 9.99f;
    char   initiale = 'B';

    printf("Age : %d\\n", age);
    printf("Prix : %f\\n", prix);
    printf("Initiale : %c\\n", initiale);
    return 0;
}`,
            output: "Age : 20\nPrix : 9.990000\nInitiale : B",
            explanations: {
              4: "int = entier (sans virgule). 4 octets. Ex: 20, -5, 1000.",
              5: "float = nombre à virgule. Le suffixe f indique un float (sans f, le compilateur lit un double).",
              6: "char = un seul caractère, entre guillemets simples ' '. 1 octet.",
              8: "%d pour afficher un int.",
              9: "%f pour afficher un float. Affiche 6 décimales par défaut.",
              10: "%c pour afficher un char.",
            },
          },
          {
            kind: "visual",
            diagram: {
              type: "memory",
              vars: [
                { name: "age", type: "int", value: "20" },
                { name: "prix", type: "float", value: "9.99" },
                { name: "initiale", type: "char", value: "'B'" },
              ],
            },
            caption: "Trois variables, trois types, trois cases mémoire.",
          },
          {
            kind: "quiz",
            question: "Quel format specifier utilise-t-on pour afficher un int avec printf ?",
            options: ["%i", "%d", "%int", "%n"],
            correctIndex: 1,
            explanation:
              "%d (decimal) est le format standard pour un int. %i existe aussi mais est plus rare. Pour un float c'est %f, pour un char c'est %c.",
          },
        ],
      },
      {
        id: "faire",
        title: "Je sais faire",
        subtitle: "Manipuler les variables",
        blocks: [
          {
            kind: "challenge",
            variant: "fill",
            prompt: "Complète : déclare une variable `score` de type int et initialise-la à 100.",
            accept: ["int score = 100;", "int score=100;", "int score =100;", "int score= 100;"],
            hint: "Type + nom + = + valeur + ;",
            feedback: "La syntaxe est `int score = 100;`. On peut aussi le faire en deux lignes : `int score; score = 100;`",
          },
          {
            kind: "error",
            title: "Erreur : oublier le type",
            bad: `age = 20;`,
            good: `int age = 20;`,
            explanation:
              "En C, toute variable doit être déclarée avec son type avant d'être utilisée. Si tu écris `age = 20;` sans avoir dit `int age;` avant, le compilateur refuse.",
          },
          {
            kind: "error",
            title: "Erreur : type et valeur incompatibles",
            bad: `int age = "vingt";`,
            good: `int age = 20;`,
            explanation:
              "Un int doit contenir un entier. \"vingt\" est une chaîne de caractères (entre guillemets). Le compilateur refuse de ranger une chaîne dans un int.",
          },
          {
            kind: "challenge",
            variant: "predict",
            prompt: "Que vaut x à la fin ?",
            code: `int x = 5;
x = 10;
x = 20;`,
            accept: ["20", "x = 20", "x vaut 20"],
            hint: "Une variable ne contient qu'une seule valeur à la fois.",
            feedback:
              "x vaut 20. Chaque affectation écrase la précédente. La variable ne se souvient pas de son ancienne valeur.",
          },
          {
            kind: "challenge",
            variant: "predict",
            prompt: "Que va afficher ce printf ?",
            code: `int a = 3;
int b = 4;
printf("%d", a + b);`,
            accept: ["7", "a + b = 7"],
            hint: "On peut faire des calculs directement dans printf.",
            feedback:
              "Le programme affiche 7. %d est remplacé par la valeur de a+b, c'est-à-dire 3+4=7.",
          },
          {
            kind: "codeWalk",
            filename: "permutter.c",
            code: `#include <stdio.h>

int main(void) {
    int a = 5, b = 10;
    int temp;

    temp = a;
    a = b;
    b = temp;

    printf("a = %d, b = %d\\n", a, b);
    return 0;
}`,
            output: "a = 10, b = 5",
            explanations: {
              4: "On déclare deux variables a et b en une seule ligne, en les initialisant.",
              5: "On déclare une variable temporaire temp (pas encore initialisée).",
              7: "On sauvegarde la valeur de a dans temp. Maintenant temp = 5.",
              8: "On met b dans a. Maintenant a = 10 (et b vaut toujours 10).",
              9: "On met temp dans b. Maintenant b = 5. L'échange est terminé !",
              11: "On affiche les valeurs : a = 10, b = 5. Les valeurs ont bien été échangées.",
            },
          },
          {
            kind: "recap",
            title: "Bilan du chapitre 2",
            bullets: [
              { text: "Une variable = un nom + un type + une valeur stockée en mémoire." },
              { text: "On déclare avec son type : `int age;`. On affecte avec = : `age = 20;`." },
              { text: "On peut faire les deux d'un coup : `int age = 20;` (initialisation)." },
              { text: "Types de base : `int` (entier), `float` (virgule), `char` (caractère), `double` (virgule précise)." },
              { text: "Format specifiers : `%d` (int), `%f` (float), `%c` (char), `%s` (string)." },
              { text: "Toujours initialiser ses variables : une variable non initialisée contient n'importe quoi." },
            ],
          },
          {
            kind: "quiz",
            question: "Quel type utilises-tu pour stocker la lettre 'A' ?",
            options: ["int", "float", "char", "string"],
            correctIndex: 2,
            explanation:
              "char stocke un seul caractère (entre guillemets simples). Pour une suite de lettres, on utilise un tableau de char (une « chaîne »), qu'on verra au chapitre 9.",
          },
        ],
      },
    ],
  },

  // ============================================================
  // CHAPITRE 3 — LES OPÉRATEURS
  // ============================================================
  {
    id: 3,
    title: "Les opérateurs",
    subtitle: "Calculer, comparer, combiner des conditions.",
    shortTitle: "Opérateurs",
    icon: "Calculator",
    keywords: ["opérateur", "arithmétique", "+", "-", "*", "/", "%", "comparaison", "==", "logique", "&&", "||", "!", "incrément", "++"],
    goal: "Maîtriser les 3 familles d'opérateurs : arithmétiques, de comparaison, logiques.",
    minutes: 15,
    levels: [
      {
        id: "comprendre",
        title: "Je comprends",
        subtitle: "Trois familles d'opérateurs",
        blocks: [
          {
            kind: "story",
            eyebrow: "La situation",
            steps: [
              { text: "Tu veux additionner deux nombres." },
              { text: "Tu veux savoir si un nombre est plus grand qu'un autre." },
              { text: "Tu veux combiner deux conditions : « s'il pleut ET si j'ai un parapluie »." },
              { text: "Pour chacune de ces situations, il existe un opérateur en C." },
            ],
          },
          {
            kind: "vocab",
            terms: [
              { word: "Opérateur", def: "Un symbole qui effectue une opération entre des valeurs. Ex: + additionne, == compare." },
              { word: "Opérande", def: "La valeur sur laquelle agit l'opérateur. Dans `a + b`, a et b sont les opérandes de +." },
              { word: "Expression", def: "Une combinaison de valeurs et d'opérateurs qui produit un résultat. Ex: `a + b * 2`." },
              { word: "Booléen", def: "Une valeur qui vaut soit vrai (1) soit faux (0). En C, c'est le résultat d'une comparaison." },
            ],
          },
          {
            kind: "visual",
            diagram: {
              type: "operators3",
              groups: [
                { title: "Arithmétiques", items: ["+  -  *  /  %", "Calculs numériques"] },
                { title: "Comparaison", items: ["==  !=  >  <  >=  <=", "Donnent vrai (1) ou faux (0)"] },
                { title: "Logiques", items: ["&&  ||  !", "Combinent des conditions"] },
              ],
            },
            caption: "Trois familles, trois usages. On les utilise tous les jours.",
          },
          {
            kind: "reveal",
            label: "Différence entre = et == ?",
            hint: "Clique pour révéler",
            content:
              "= est l'affectation : il RANGE une valeur dans une variable. `a = 5` met 5 dans a. == est la comparaison : il TESTE l'égalité. `a == 5` vaut 1 si a contient 5, sinon 0. Confondre les deux est l'erreur la plus fréquente en C.",
          },
          {
            kind: "quiz",
            question: "Que vaut l'expression `5 == 5` en C ?",
            options: ["5", "0", "1 (vrai)", "true"],
            correctIndex: 2,
            explanation:
              "5 == 5 est une comparaison qui est vraie. En C, vrai = 1 et faux = 0. Donc 5 == 5 vaut 1.",
          },
        ],
      },
      {
        id: "lire",
        title: "Je sais lire",
        subtitle: "Les trois familles en code",
        blocks: [
          {
            kind: "codeWalk",
            filename: "arithmetique.c",
            code: `#include <stdio.h>

int main(void) {
    int a = 17, b = 5;

    printf("%d + %d = %d\\n", a, b, a + b);
    printf("%d - %d = %d\\n", a, b, a - b);
    printf("%d * %d = %d\\n", a, b, a * b);
    printf("%d / %d = %d\\n", a, b, a / b);
    printf("%d %% %d = %d\\n", a, b, a % b);
    return 0;
}`,
            output: "17 + 5 = 22\n17 - 5 = 12\n17 * 5 = 85\n17 / 5 = 3\n17 % 5 = 2",
            explanations: {
              4: "On déclare deux variables a=17 et b=5 en une seule ligne.",
              6: "+ addition. 17 + 5 = 22.",
              7: "- soustraction. 17 - 5 = 12.",
              8: "* multiplication. 17 * 5 = 85.",
              9: "/ division ENTIÈRE. 17 / 5 = 3 (pas 3.4, on perd la virgule car int / int = int).",
              10: "% modulo (le reste de la division). 17 = 5×3 + 2, donc 17 % 5 = 2. Note : %% dans printf pour afficher un %.",
            },
          },
          {
            kind: "reveal",
            label: "Pourquoi 17 / 5 donne 3 et pas 3.4 ?",
            hint: "Clique pour révéler",
            content:
              "Parce que a et b sont des int. En C, `int / int = int` : la division est entière, on perd la partie décimale. Pour obtenir 3.4, il faut qu'au moins un des deux soit un float/double, ou forcer la conversion.",
          },
          {
            kind: "codeWalk",
            filename: "comparaison.c",
            code: `#include <stdio.h>

int main(void) {
    int age = 18;

    printf("age == 18  -> %d\\n", age == 18);
    printf("age != 18  -> %d\\n", age != 18);
    printf("age > 18   -> %d\\n", age > 18);
    printf("age >= 18  -> %d\\n", age >= 18);
    return 0;
}`,
            output: "age == 18  -> 1\nage != 18  -> 0\nage > 18   -> 0\nage >= 18  -> 1",
            explanations: {
              6: "== teste l'égalité. age contient 18, donc age == 18 est vrai → 1.",
              7: "!= teste la différence. age n'est pas différent de 18, donc faux → 0.",
              8: "> strictement supérieur. 18 > 18 est faux → 0.",
              9: ">= supérieur OU égal. 18 >= 18 est vrai → 1.",
            },
          },
          {
            kind: "codeWalk",
            filename: "logiques.c",
            code: `#include <stdio.h>

int main(void) {
    int majeur = 1;     // 1 = vrai
    int permis  = 0;    // 0 = faux

    printf("majeur ET permis : %d\\n", majeur && permis);
    printf("majeur OU permis : %d\\n", majeur || permis);
    printf("NON majeur       : %d\\n", !majeur);
    return 0;
}`,
            output: "majeur ET permis : 0\nmajeur OU permis : 1\nNON majeur       : 0",
            explanations: {
              5: "On représente « vrai » par 1 et « faux » par 0. C'est la convention du C.",
              8: "&& (ET logique) : vrai seulement si LES DEUX sont vrais. majeur=1 mais permis=0 → 0.",
              9: "|| (OU logique) : vrai si AU MOINS UN des deux est vrai. majeur=1 → 1.",
              10: "! (NON logique) : inverse. majeur=1, donc !majeur=0.",
            },
          },
          {
            kind: "codeWalk",
            filename: "increment.c",
            code: `#include <stdio.h>

int main(void) {
    int n = 5;

    n++;           // n devient 6
    printf("n = %d\\n", n);

    n += 10;       // n devient 16
    printf("n = %d\\n", n);

    return 0;
}`,
            output: "n = 6\nn = 16",
            explanations: {
              6: "n++ est équivalent à n = n + 1. C'est l'incrément.",
              9: "n += 10 est équivalent à n = n + 10. Il existe aussi -=, *=, /=, %=.",
            },
          },
          {
            kind: "quiz",
            question: "Que vaut `17 % 5` ?",
            options: ["3", "3.4", "2", "85"],
            correctIndex: 2,
            explanation:
              "% est le modulo : le reste de la division entière. 17 = 5×3 + 2, le reste est 2. Très utile pour tester si un nombre est pair (n % 2 == 0).",
          },
        ],
      },
      {
        id: "faire",
        title: "Je sais faire",
        subtitle: "Calculer et combiner",
        blocks: [
          {
            kind: "challenge",
            variant: "predict",
            prompt: "Que vaut `7 / 2` en C (avec des int) ?",
            accept: ["3", "3 (entier)", "3 (division entière)"],
            hint: "int / int = int. On perd la virgule.",
            feedback:
              "7 / 2 = 3. C'est la division entière : on garde seulement la partie entière, sans arrondir. 3.5 devient 3.",
          },
          {
            kind: "challenge",
            variant: "predict",
            prompt: "Que vaut `7.0 / 2` en C ?",
            accept: ["3.5", "3.500000"],
            hint: "Dès qu'un des deux opérandes est un flottant, la division est décimale.",
            feedback:
              "7.0 / 2 = 3.5 (affiché 3.500000 avec %f). Dès qu'un opérande est float/double, le résultat est décimal.",
          },
          {
            kind: "error",
            title: "Erreur classique : confondre = et ==",
            bad: `if (age = 18) {
    printf("Majeur");
}`,
            good: `if (age == 18) {
    printf("Majeur");
}`,
            explanation:
              "Avec =, on RANGE 18 dans age (au lieu de tester). age devient 18, qui est non-nul, donc « vrai » : le if s'exécute toujours ! Il faut utiliser == pour comparer. Cette erreur est sournoise car elle ne provoque pas d'erreur de compilation.",
          },
          {
            kind: "challenge",
            variant: "predict",
            prompt: "Que vaut `!(5 > 3)` ?",
            accept: ["0", "faux", "0 (faux)"],
            hint: "5 > 3 est vrai. Le ! inverse.",
            feedback:
              "5 > 3 est vrai (1). Le ! l'inverse : !(1) = 0, c'est-à-dire faux.",
          },
          {
            kind: "challenge",
            variant: "predict",
            prompt: "Que vaut `(5 > 3) && (2 > 1)` ?",
            accept: ["1", "vrai", "1 (vrai)"],
            hint: "Les deux conditions sont vraies.",
            feedback:
              "5 > 3 = 1 (vrai) ET 2 > 1 = 1 (vrai). 1 && 1 = 1. Les deux conditions sont vraies, donc le ET est vrai.",
          },
          {
            kind: "challenge",
            variant: "fill",
            prompt: "Écris l'expression qui teste si n est pair (vaut 1 si pair, 0 sinon).",
            accept: ["n % 2 == 0", "n%2==0", "n % 2==0", "n%2 == 0", "!(n%2)"],
            hint: "Un nombre est pair si le reste de sa division par 2 est 0.",
            feedback:
              "On écrit `n % 2 == 0`. Si n = 4, n%2 = 0, donc 0 == 0 = vrai (1). Si n = 5, n%2 = 1, donc 1 == 0 = faux (0).",
          },
          {
            kind: "recap",
            title: "Bilan du chapitre 3",
            bullets: [
              { text: "Arithmétiques : + - * / (division entière si int) % (modulo)." },
              { text: "Comparaison : == != > < >= <= (résultat : 1=vrai, 0=faux)." },
              { text: "Logiques : && (ET) || (OU) ! (NON)." },
              { text: "Affectation =, comparaison == : ne jamais confondre." },
              { text: "Raccourcis : ++, --, +=, -=, *=, /=, %=." },
              { text: "Pour tester la parité : `n % 2 == 0`." },
            ],
          },
          {
            kind: "quiz",
            question: "Que vaut l'expression `10 == 10 && 5 > 3` ?",
            options: ["0 (faux)", "1 (vrai)", "10", "Erreur"],
            correctIndex: 1,
            explanation:
              "10 == 10 = 1 (vrai), 5 > 3 = 1 (vrai). 1 && 1 = 1. Donc l'expression complète vaut 1 (vrai).",
          },
        ],
      },
    ],
  },

  // ============================================================
  // CHAPITRE 4 — LES CONDITIONS (if / else if / else, switch)
  // ============================================================
  {
    id: 4,
    title: "Les conditions",
    subtitle: "Faire prendre des décisions au programme.",
    shortTitle: "Conditions",
    icon: "GitBranch",
    keywords: ["if", "else", "else if", "switch", "case", "condition", "décision", "break", "comparaison"],
    goal: "Faire exécuter des blocs différents selon des conditions.",
    minutes: 16,
    levels: [
      {
        id: "comprendre",
        title: "Je comprends",
        subtitle: "L'ordinateur choisit",
        blocks: [
          {
            kind: "story",
            eyebrow: "La situation",
            steps: [
              { text: "Tu demandes l'âge de l'utilisateur." },
              { text: "S'il a 18 ans ou plus, tu affiches « Majeur »." },
              { text: "Sinon, tu affiches « Mineur »." },
              { text: "C'est une décision : le programme doit choisir entre deux chemins selon une condition." },
            ],
          },
          {
            kind: "analogy",
            real: {
              icon: "🛂",
              title: "Un contrôle d'âge",
              desc: "Le vigile regarde ton âge. Si ≥ 18, tu passes. Sinon, tu fais demi-tour.",
            },
            code: {
              icon: "🔀",
              title: "Un if / else",
              desc: "Le programme teste une condition. Si elle est vraie, il exécute un bloc. Sinon, un autre.",
            },
            link: "if = « si », else = « sinon ». C'est le vigile du programme.",
          },
          {
            kind: "vocab",
            terms: [
              { word: "Condition", def: "Une expression qui vaut vrai (1) ou faux (0). Ex: age >= 18." },
              { word: "if", def: "Mot-clé qui exécute un bloc SI la condition est vraie." },
              { word: "else", def: "Mot-clé qui exécute un bloc SI la condition du if est fausse. Optionnel." },
              { word: "else if", def: "Pour chaîner plusieurs conditions. On teste la 2e si la 1re est fausse." },
              { word: "Bloc", def: "Le code entre { } qui s'exécute si la condition est vraie." },
            ],
          },
          {
            kind: "visual",
            diagram: { type: "flowIf" },
            caption: "Le programme arrive au if. Si la condition est vraie → bloc A. Sinon → bloc B. Puis il continue.",
          },
          {
            kind: "quiz",
            question: "À quoi sert le mot-clé `else` ?",
            options: [
              "À exécuter un bloc si la condition du if est fausse",
              "À créer une boucle",
              "À déclarer une variable",
              "À arrêter le programme",
            ],
            correctIndex: 0,
            explanation:
              "else = « sinon ». Il introduit le bloc qui s'exécute quand la condition du if est fausse. Il est toujours optionnel.",
          },
        ],
      },
      {
        id: "lire",
        title: "Je sais lire",
        subtitle: "if / else if / else en code",
        blocks: [
          {
            kind: "codeWalk",
            filename: "majeur.c",
            code: `#include <stdio.h>

int main(void) {
    int age = 20;

    if (age >= 18) {
        printf("Tu es majeur.\\n");
    } else {
        printf("Tu es mineur.\\n");
    }
    return 0;
}`,
            output: "Tu es majeur.",
            explanations: {
              4: "On déclare age et on y range 20.",
              6: "if teste la condition entre parenthèses. age >= 18 est vrai (20 ≥ 18) → on entre dans le bloc.",
              7: "Ce bloc s'exécute. On affiche « Tu es majeur ».",
              8: "} ferme le bloc du if.",
              9: "else : ce bloc s'exécuterait si la condition était fausse. Ici, on ne l'exécute pas.",
            },
          },
          {
            kind: "codeWalk",
            filename: "note.c",
            code: `#include <stdio.h>

int main(void) {
    int note = 14;

    if (note >= 16) {
        printf("Très bien\\n");
    } else if (note >= 14) {
        printf("Bien\\n");
    } else if (note >= 12) {
        printf("Assez bien\\n");
    } else {
        printf("Insuffisant\\n");
    }
    return 0;
}`,
            output: "Bien",
            explanations: {
              6: "note >= 16 ? 14 >= 16 est faux → on passe au else if suivant.",
              8: "note >= 14 ? 14 >= 14 est vrai → on entre dans ce bloc.",
              9: "On affiche « Bien ».",
              10: "Une fois qu'un bloc est exécuté, on SAUTE tous les autres else if/else. On ne teste pas les suivants.",
            },
          },
          {
            kind: "reveal",
            label: "Que se passe-t-il si on oublie les accolades ?",
            hint: "Clique pour révéler",
            content:
              "Sans accolades, seul le premier `;` après le if est concerné. `if (x > 0) printf(\"a\"); printf(\"b\");` affichera toujours « b », même si x ≤ 0. Conseil : mets TOUJOURS les accolades, même pour un bloc d'une seule ligne. Ça évite des bugs très difficiles à trouver.",
          },
          {
            kind: "codeWalk",
            filename: "switch.c",
            code: `#include <stdio.h>

int main(void) {
    int jour = 3;

    switch (jour) {
        case 1: printf("Lundi\\n");   break;
        case 2: printf("Mardi\\n");   break;
        case 3: printf("Mercredi\\n"); break;
        case 4: printf("Jeudi\\n");   break;
        case 5: printf("Vendredi\\n");break;
        default: printf("Weekend\\n");
    }
    return 0;
}`,
            output: "Mercredi",
            explanations: {
              6: "switch regarde la valeur de jour. jour = 3.",
              7: "case 1: pas le bon, on continue.",
              8: "case 2: pas le bon, on continue.",
              9: "case 3: c'est le bon ! On exécute printf(\"Mercredi\").",
              10: "break est INDISPENSABLE : sans lui, on continuerait sur case 4, case 5… (effet de cascade).",
              12: "default: exécuté si aucun case ne correspond (comme un else final).",
            },
          },
          {
            kind: "challenge",
            variant: "predict",
            prompt: "Que se passe-t-il si on oublie `break` dans un case du switch ?",
            accept: ["cascade", "continue", "exécute tous les case suivants", "exécute les case suivants", "tombe", "fall through", "fall-through"],
            hint: "Sans break, le switch ne s'arrête pas. Il continue sur les case suivants.",
            feedback:
              "Sans break, le switch « tombe » dans tous les case suivants (effet cascade / fall-through). C'est parfois voulu, mais le plus souvent c'est un bug.",
          },
          {
            kind: "quiz",
            question: "Qu'affiche ce code ? `int x = 5; if (x > 10) printf(\"A\"); else printf(\"B\");`",
            options: ["A", "B", "AB", "Rien"],
            correctIndex: 1,
            explanation:
              "x = 5, et 5 > 10 est faux. Donc on entre dans le else et on affiche « B ».",
          },
        ],
      },
      {
        id: "faire",
        title: "Je sais faire",
        subtitle: "Combiner et éviter les pièges",
        blocks: [
          {
            kind: "error",
            title: "Erreur : oublier les accolades",
            bad: `if (age >= 18)
    printf("Majeur");
    printf("Bienvenue");

// Affiche toujours "Bienvenue" !`,
            good: `if (age >= 18) {
    printf("Majeur");
    printf("Bienvenue");
}`,
            explanation:
              "Sans accolades, seul le premier printf est dans le if. Le deuxième s'exécute TOUJOURS, quelle que soit la condition. Règle d'or : toujours mettre des accolades.",
          },
          {
            kind: "error",
            title: "Erreur : = au lieu de ==",
            bad: `if (age = 18) {
    printf("Majeur");
}`,
            good: `if (age == 18) {
    printf("Exactement 18");
}`,
            explanation:
              "if (age = 18) RANGE 18 dans age (l'âge devient 18 !), puis teste si 18 est non-nul (= vrai). Le bloc s'exécute donc TOUJOURS. Cette erreur ne provoque pas d'erreur de compilation mais un bug logique.",
          },
          {
            kind: "challenge",
            variant: "predict",
            prompt: "Qu'affiche ce code ?",
            code: `int x = 7;
if (x > 10)
    printf("A");
else if (x > 5)
    printf("B");
else
    printf("C");`,
            accept: ["B", "B", "Il affiche B"],
            hint: "On teste les conditions dans l'ordre. Dès qu'une est vraie, on s'arrête.",
            feedback:
              "x = 7. 7 > 10 est faux → on passe au else if. 7 > 5 est vrai → on affiche « B » et on s'arrête (le else final n'est pas exécuté).",
          },
          {
            kind: "challenge",
            variant: "fill",
            prompt: "Complète : affiche « Pair » si n est divisible par 2, sinon « Impair ».",
            accept: ["if (n % 2 == 0)", "if (n%2==0)", "if (n % 2==0)", "if (n%2 == 0)"],
            hint: "Divisible par 2 = le reste de la division par 2 est 0.",
            feedback: "On utilise `if (n % 2 == 0)` pour tester la parité. n%2 est le reste de la division de n par 2.",
          },
          {
            kind: "codeWalk",
            filename: "combiner.c",
            code: `#include <stdio.h>

int main(void) {
    int age = 20;
    int permis = 1;

    if (age >= 18 && permis == 1) {
        printf("Tu peux conduire.\\n");
    } else {
        printf("Pas encore.\\n");
    }
    return 0;
}`,
            output: "Tu peux conduire.",
            explanations: {
              7: "On combine deux conditions avec && (ET logique). Les deux doivent être vraies.",
              8: "Les deux sont vraies (20 ≥ 18 ET permis = 1), donc on entre dans le if.",
              9: "On affiche « Tu peux conduire ».",
            },
          },
          {
            kind: "challenge",
            variant: "predict",
            prompt: "Que vaut `!(5 > 3)` en C ?",
            accept: ["0", "faux", "0 (faux)"],
            hint: "Le ! inverse la valeur booléenne.",
            feedback: "5 > 3 est vrai (1). Le ! l'inverse : !(1) = 0 (faux).",
          },
          {
            kind: "recap",
            title: "Bilan du chapitre 4",
            bullets: [
              { text: "if teste une condition. else = sinon. else if = chaîner." },
              { text: "Toujours mettre des accolades { }, même pour une seule ligne." },
              { text: "Ne pas confondre `=` (affectation) et `==` (comparaison)." },
              { text: "switch : teste la valeur d'une variable contre plusieurs case. break est obligatoire." },
              { text: "On combine les conditions avec && (ET), || (OU), ! (NON)." },
              { text: "Les conditions sont évaluées dans l'ordre ; on s'arrête dès qu'une est vraie." },
            ],
          },
          {
            kind: "quiz",
            question: "Quel mot-clé évite l'effet cascade dans un switch ?",
            options: ["case", "default", "break", "stop"],
            correctIndex: 2,
            explanation:
              "break fait sortir du switch immédiatement. Sans lui, l'exécution continue dans les case suivants (effet cascade / fall-through).",
          },
        ],
      },
    ],
  },
];
