import type { Chapter } from "./curriculum-types";

// Chapters 5–8: Boucles, Fonctions, Tableaux, Pointeurs
export const chaptersPart2: Chapter[] = [
  // ============================================================
  // CHAPITRE 5 — LES BOUCLES
  // ============================================================
  {
    id: 5,
    title: "Les boucles",
    subtitle: "Répéter des instructions automatiquement.",
    shortTitle: "Boucles",
    icon: "Repeat",
    keywords: ["boucle", "for", "while", "do while", "répéter", "itération", "compteur", "break", "continue", "infinie"],
    goal: "Faire répéter un bloc de code un certain nombre de fois ou tant qu'une condition est vraie.",
    minutes: 17,
    levels: [
      {
        id: "comprendre",
        title: "Je comprends",
        subtitle: "L'ordinateur ne se fatigue jamais",
        blocks: [
          {
            kind: "story",
            eyebrow: "La situation",
            steps: [
              { text: "Tu veux afficher les nombres de 1 à 10." },
              { text: "Tu pourrais écrire 10 printf à la suite… mais c'est fastidieux." },
              { text: "Et si tu veux afficher de 1 à 1000 ? Ou à 1 million ?" },
              { text: "L'ordinateur excelle dans la répétition : il peut refaire la même chose 1 million de fois sans se tromper." },
            ],
          },
          {
            kind: "analogy",
            real: {
              icon: "🔄",
              title: "Tourner en rond",
              desc: "Tu cours autour d'une piste. À chaque tour, tu vérifies : « ai-je fait 10 tours ? ». Si non, tu continues. Si oui, tu t'arrêtes.",
            },
            code: {
              icon: "🔁",
              title: "Une boucle",
              desc: "Le programme exécute un bloc, puis vérifie une condition. Si elle est encore vraie, il recommence. Sinon, il sort.",
            },
            link: "Une boucle = un bloc + une condition de continuation.",
          },
          {
            kind: "vocab",
            terms: [
              { word: "Boucle", def: "Structure qui répète un bloc tant qu'une condition est vraie." },

          {
            kind: "recipe",
            title: "La formule de la boucle for",
            formula: [
              { text: "for", role: "keyword" },
              { text: " (", role: "punct" },
              { text: "init", role: "nom" },
              { text: "; ", role: "punct" },
              { text: "condition", role: "nom" },
              { text: "; ", role: "punct" },
              { text: "increment", role: "nom" },
              { text: ") {", role: "punct" },
              { text: "\n    bloc;", role: "value" },
              { text: "\n", role: "punct" },
              { text: "}", role: "punct" },
            ],
            example: [
              { text: "for", role: "keyword" },
              { text: " (", role: "punct" },
              { text: "int i = 0", role: "nom" },
              { text: "; ", role: "punct" },
              { text: "i < 10", role: "nom" },
              { text: "; ", role: "punct" },
              { text: "i++", role: "nom" },
              { text: ") {", role: "punct" },
              { text: "\n    printf(\"%d\", i);", role: "value" },
              { text: "\n", role: "punct" },
              { text: "}", role: "punct" },
            ],
          },

          {
            kind: "recipe",
            title: "La formule de la boucle while",
            formula: [
              { text: "while", role: "keyword" },
              { text: " (", role: "punct" },
              { text: "condition", role: "nom" },
              { text: ") {", role: "punct" },
              { text: "\n    bloc;", role: "value" },
              { text: "\n", role: "punct" },
              { text: "}", role: "punct" },
            ],
            example: [
              { text: "while", role: "keyword" },
              { text: " (", role: "punct" },
              { text: "n > 0", role: "nom" },
              { text: ") {", role: "punct" },
              { text: "\n    n--;", role: "value" },
              { text: "\n", role: "punct" },
              { text: "}", role: "punct" },
            ],
          },

          {
            kind: "challenge",
            variant: "fill",
            prompt: "Écris une boucle for qui affiche les nombres de 0 à 4 (5 itérations).",
            accept: [
              "for (int i = 0; i < 5; i++)",
              "for(int i=0;i<5;i++)",
              "for (int i = 0; i<5; i++)",
            ],
            hint: "for (init; condition; increment) — condition i < 5 pour 5 itérations.",
            feedback: "On écrit `for (int i = 0; i < 5; i++)`. i va de 0 à 4 (5 valeurs), donc i < 5.",
          },
              { word: "Itération", def: "Une exécution du bloc. Une boucle de 10 itérations a exécuté le bloc 10 fois." },
              { word: "Compteur", def: "Une variable (souvent appelée i) qui compte le nombre d'itérations." },
              { word: "Incrément", def: "Augmenter le compteur. Souvent i++ (= i = i + 1)." },
              { word: "Boucle infinie", def: "Une boucle dont la condition ne devient jamais fausse. Le programme ne s'arrête jamais (bug)." },
            ],
          },
          {
            kind: "visual",
            diagram: { type: "flowLoop" },
            caption: "Initialise → teste la condition → si vraie, exécute le bloc → incrémente → recommence.",
          },
          {
            kind: "reveal",
            label: "for, while, do-while : laquelle choisir ?",
            hint: "Clique pour révéler",
            content:
              "for : quand tu sais à l'avance combien de fois répéter (ex: 10 fois, ou pour chaque élément d'un tableau). while : quand tu ne sais pas combien d'itérations il faudra (ex: tant que l'utilisateur n'a pas tapé 'q'). do-while : comme while, mais le bloc s'exécute AU MOINS une fois.",
          },
          {
            kind: "quiz",
            question: "Quelle boucle est garantie de s'exécuter au moins une fois ?",
            options: ["while", "for", "do-while", "Aucune"],
            correctIndex: 2,
            explanation:
              "do-while teste la condition APRÈS avoir exécuté le bloc. Donc le bloc s'exécute toujours au moins une fois, même si la condition est fausse dès le départ.",
          },
        ],
      },
      {
        id: "lire",
        title: "Je sais lire",
        subtitle: "for, while, do-while",
        blocks: [
          {
            kind: "codeWalk",
            filename: "for.c",
            code: `#include <stdio.h>

int main(void) {
    for (int i = 1; i <= 5; i++) {
        printf("i = %d\\n", i);
    }
    return 0;
}`,
            output: "i = 1\ni = 2\ni = 3\ni = 4\ni = 5",
            explanations: {
              4: "La boucle for a 3 parties séparées par ; : initialisation, condition, incrément.",
              4: "1) int i = 1 : on crée i et on l'initialise à 1. Fait une seule fois.",
              4: "2) i <= 5 : la condition. Testée AVANT chaque itération. Si vraie, on entre. Si fausse, on sort.",
              5: "On exécute le bloc : on affiche i.",
              5: "3) i++ : on incrémente i. Fait APRÈS le bloc, AVANT de re-tester la condition.",
            },
          },
          {
            kind: "codeWalk",
            filename: "while.c",
            code: `#include <stdio.h>

int main(void) {
    int n = 10;

    while (n > 0) {
        printf("%d ", n);
        n -= 3;
    }
    printf("\\n");
    return 0;
}`,
            output: "10 7 4 1 ",
            explanations: {
              6: "while teste la condition AVANT chaque itération. n=10 > 0 → on entre.",
              7: "On affiche n (= 10).",
              8: "On soustrait 3 à n. n = 7.",
              6: "Re-test : 7 > 0 → on entre à nouveau. Et ainsi de suite : 7, 4, 1.",
              6: "Quand n = -2 : -2 > 0 est faux → on sort de la boucle.",
              9: "On affiche un saut de ligne final.",
            },
          },
          {
            kind: "codeWalk",
            filename: "dowhile.c",
            code: `#include <stdio.h>

int main(void) {
    int n = 100;

    do {
        printf("n = %d\\n", n);
    } while (n < 5);

    return 0;
}`,
            output: "n = 100",
            explanations: {
              6: "do : on entre dans le bloc SANS tester la condition. Le bloc s'exécute toujours au moins une fois.",
              7: "On affiche n (= 100).",
              8: "} while (n < 5) : maintenant, on teste. 100 < 5 est faux → on sort.",
              8: "Même si la condition était fausse dès le départ, le bloc s'est exécuté une fois. C'est la particularité de do-while.",
            },
          },
          {
            kind: "challenge",
            variant: "predict",
            prompt: "Combien de fois ce printf s'exécute-t-il ?",
            code: `for (int i = 0; i < 10; i++) {
    printf("x");
}`,
            accept: ["10", "10 fois"],
            hint: "i vaut 0, 1, 2, ..., 9. Combien de valeurs ?",
            feedback:
              "10 fois. i prend les valeurs 0, 1, 2, …, 9 (10 valeurs au total). La condition i < 10 devient fausse quand i atteint 10, donc on ne rentre pas pour i=10.",
          },
          {
            kind: "challenge",
            variant: "predict",
            prompt: "Combien de fois ce printf s'exécute-t-il ?",
            code: `for (int i = 1; i <= 10; i++) {
    printf("x");
}`,
            accept: ["10", "10 fois"],
            hint: "i vaut 1, 2, 3, ..., 10. Combien de valeurs ?",
            feedback:
              "10 fois. i prend les valeurs 1, 2, …, 10 (10 valeurs). `i <= 10` est vrai pour i = 10, donc on entre une 10e fois. C'est exactement la même quantité que l'exemple précédent, juste décalée.",
          },
          {
            kind: "quiz",
            question: "Que fait ce code ? `for (int i = 0; i < 3; i++) printf(\"%d\", i);`",
            options: ["Affiche 012", "Affiche 123", "Affiche 0123", "Affiche 1230"],
            correctIndex: 0,
            explanation:
              "i prend 0, 1, 2. À chaque itération, on affiche i sans saut de ligne. Résultat : « 012 » collé.",
          },
        ],
      },
      {
        id: "faire",
        title: "Je sais faire",
        subtitle: "Maîtriser les boucles",
        blocks: [
          {
            kind: "production",
            title: "Construire une boucle",
            syntax: "for (initialisation; condition; mise_a_jour) {\n    // instructions\n}\n\nwhile (condition) {\n    // instructions\n}",
            rules: [
              "for est pratique quand on connaît le nombre d’itérations.",
              "while répète tant que la condition est vraie.",
              "do...while exécute au moins une fois.",
              "Éviter une condition qui ne devient jamais fausse.",
            ],
            example: "for (int i = 0; i < 5; i++) {\n    printf(\"%d\\n\", i);\n}",
          },
          {
            kind: "error",
            title: "Erreur : boucle infinie",
            bad: `int i = 0;
while (i < 10) {
    printf("%d", i);
}`,
            good: `int i = 0;
while (i < 10) {
    printf("%d", i);
    i++;
}`,
            explanation:
              "On a oublié d'incrémenter i. La condition i < 10 restera vraie pour toujours (i reste à 0). Le programme ne s'arrête jamais → Ctrl+C dans le terminal.",
          },
          {
            kind: "error",
            title: "Erreur : off-by-one",
            bad: `for (int i = 0; i <= 5; i++) {
    printf("%d ", i);
}`,
            good: `for (int i = 0; i < 5; i++) {
    printf("%d ", i);
}`,
            explanation:
              "Avec `i <= 5`, le bloc s'exécute 6 fois (i = 0, 1, 2, 3, 4, 5). Si tu veux exactement 5 itérations, utilise `i < 5`. Cette erreur « off-by-one » est l'une des plus fréquentes.",
          },
          {
            kind: "challenge",
            variant: "predict",
            prompt: "Que va afficher cette boucle ?",
            code: `for (int i = 0; i < 10; i += 2) {
    printf("%d ", i);
}`,
            accept: ["0 2 4 6 8 ", "0 2 4 6 8"],
            hint: "On augmente i de 2 à chaque tour.",
            feedback:
              "On affiche 0 2 4 6 8 (avec un espace après chaque). i prend les valeurs 0, 2, 4, 6, 8. Quand i = 10, la condition i < 10 devient fausse.",
          },
          {
            kind: "challenge",
            variant: "fill",
            prompt: "Complète : une boucle for qui affiche les nombres de 1 à 100.",
            accept: ["for (int i = 1; i <= 100; i++)", "for(int i=1;i<=100;i++)", "for (int i = 1; i <= 100; i = i + 1)"],
            hint: "Commence à 1, condition i <= 100, incrémente avec i++.",
            feedback:
              "On écrit `for (int i = 1; i <= 100; i++) printf(\"%d\\n\", i);`. Astuce : `i <= 100` est vrai pour i = 100, donc on l'inclut bien.",
          },
          {
            kind: "codeWalk",
            filename: "break_continue.c",
            code: `#include <stdio.h>

int main(void) {
    for (int i = 1; i <= 10; i++) {
        if (i == 5) continue;
        if (i == 8) break;
        printf("%d ", i);
    }
    printf("\\n");
    return 0;
}`,
            output: "1 2 3 4 6 7 ",
            explanations: {
              6: "i=5 : continue saute le reste du bloc et passe à l'itération suivante. Donc on n'affiche pas 5.",
              7: "i=8 : break sort IMMÉDIATEMENT de la boucle. On n'affiche pas 8, 9, 10.",
              8: "On n'arrive ici que pour i = 1, 2, 3, 4, 6, 7 (on a sauté 5 et cassé à 8).",
            },
          },
          {
            kind: "challenge",
            variant: "predict",
            prompt: "Que fait cette boucle while ?",
            code: `int i = 0;
while (i < 3) {
    i++;
}
printf("%d", i);`,
            accept: ["3", "i = 3", "affiche 3"],
            hint: "On incrémente i jusqu'à ce que la condition devienne fausse. Quand sort-on ?",
            feedback:
              "À la sortie, i = 3. On entre pour i = 0, 1, 2. Quand i = 3, la condition i < 3 est fausse → on sort. La dernière valeur de i est 3.",
          },
          {
            kind: "recap",
            title: "Bilan du chapitre 5",
            bullets: [
              { text: "for : quand on connaît le nombre d'itérations. Syntaxe : `for (init; condition; incrément)`." },
              { text: "while : teste AVANT. Peut ne jamais s'exécuter." },
              { text: "do-while : teste APRÈS. S'exécute au moins une fois." },
              { text: "Toujours penser à INCRÉMENTER pour éviter les boucles infinies." },
              { text: "break sort de la boucle immédiatement." },
              { text: "continue passe à l'itération suivante sans finir le bloc." },
              { text: "Piège classique : `i < n` donne n itérations ; `i <= n` donne n+1." },
            ],
          },
          {
            kind: "quiz",
            question: "Qu'affiche ce code ? `for (int i = 0; i < 5; i++) { if (i == 2) break; printf(\"%d\", i); }`",
            options: ["01", "012", "0134", "013"],
            correctIndex: 0,
            explanation:
              "i=0 → affiche 0. i=1 → affiche 1. i=2 → break, on sort. On n'affiche jamais 2, 3, 4. Résultat : « 01 ».",
          },
        ],
      },
    ],
  },

  // ============================================================
  // CHAPITRE 6 — LES FONCTIONS
  // ============================================================
  {
    id: 6,
    title: "Les fonctions",
    subtitle: "Découper son programme en briques réutilisables.",
    shortTitle: "Fonctions",
    icon: "Package",
    keywords: ["fonction", "paramètre", "argument", "return", "appel", "prototype", "void", "récursif", "définition"],
    goal: "Écrire des fonctions pour éviter de répéter du code et organiser son programme.",
    minutes: 18,
    levels: [
      {
        id: "comprendre",
        title: "Je comprends",
        subtitle: "Une recette de cuisine",
        blocks: [
          {
            kind: "story",
            eyebrow: "La situation",
            steps: [
              { text: "Tu veux calculer la moyenne de plusieurs notes dans différents endroits de ton programme." },
              { text: "Tu pourrais recopier le même calcul partout… mais si tu te trompes, tu dois corriger partout." },
              { text: "L'idéal : écrire une fois la recette du calcul, et la réutiliser à volonté." },
              { text: "C'est exactement à ça que sert une fonction." },
            ],
          },
          {
            kind: "analogy",
            real: {
              icon: "🍳",
              title: "Une recette de cuisine",
              desc: "La recette « omelette » dit : entrées (3 œufs, beurre), étapes, sortie (une omelette). Tu l'écris une fois, tu la suis à chaque fois.",
            },
            code: {
              icon: "⚙️",
              title: "Une fonction C",
              desc: "Entrées (paramètres), un bloc d'instructions, sortie (valeur retournée). Tu l'écris une fois, tu l'appelles à chaque fois.",
            },
            link: "Une fonction = une recette réutilisable.",
          },
          {
            kind: "vocab",
            terms: [
              { word: "Fonction", def: "Un bloc de code nommé, réutilisable, qui fait un travail précis." },

          {
            kind: "recipe",
            title: "La formule d'une fonction",
            formula: [
              { text: "typeRetour", role: "type" },
              { text: " ", role: "punct" },
              { text: "nomFonction", role: "nom" },
              { text: "(", role: "punct" },
              { text: "type1", role: "type" },
              { text: " ", role: "punct" },
              { text: "param1", role: "nom" },
              { text: ", ", role: "punct" },
              { text: "type2", role: "type" },
              { text: " ", role: "punct" },
              { text: "param2", role: "nom" },
              { text: ") {", role: "punct" },
              { text: "\n    ", role: "punct" },
              { text: "return", role: "keyword" },
              { text: " ", role: "punct" },
              { text: "valeur", role: "value" },
              { text: ";", role: "punct" },
              { text: "\n", role: "punct" },
              { text: "}", role: "punct" },
            ],
            example: [
              { text: "int", role: "type" },
              { text: " addition", role: "nom" },
              { text: "(", role: "punct" },
              { text: "int", role: "type" },
              { text: " a", role: "nom" },
              { text: ", ", role: "punct" },
              { text: "int", role: "type" },
              { text: " b", role: "nom" },
              { text: ") {", role: "punct" },
              { text: "\n    return", role: "keyword" },
              { text: " a + b;", role: "value" },
              { text: "\n", role: "punct" },
              { text: "}", role: "punct" },
            ],
            rules: [
              "Toute fonction DOIT avoir un type de retour explicite (int, float, void…).",
              "void devant = ne renvoie rien. void entre () = ne prend pas de paramètre.",
              "Les paramètres sont passés par COPIE : la fonction ne peut pas modifier la variable de l'appelant.",
            ],
          },

          {
            kind: "challenge",
            variant: "fill",
            prompt: "Écris l'en-tête (signature) d'une fonction qui prend un int et renvoie le double sous forme d'int.",
            accept: [
              "int doubler(int n) {",
              "int doubler(int n){",
              "int doubler (int n) {",
            ],
            hint: "typeRetour nomFonction(typeParam nomParam) {",
            feedback: "On écrit `int doubler(int n) {`. Le type de retour est int, le nom est doubler, le paramètre est int n.",
          },
              { word: "Paramètre", def: "Une entrée déclarée dans la fonction. Ex: int a dans `int carre(int a)`." },
              { word: "Argument", def: "La valeur réelle qu'on passe à l'appel. Ex: dans `carre(5)`, 5 est l'argument." },
              { word: "Retour (return)", def: "La valeur que la fonction renvoie à l'appelant. Ex: `return a * a;`" },
              { word: "void", def: "Type spécial signifiant « rien ». Pour une fonction sans retour ou sans paramètres." },
              { word: "Prototype", def: "Annonce de la fonction (sa signature) placée avant le main, pour que le compilateur la connaisse." },
            ],
          },
          {
            kind: "visual",
            diagram: { type: "function", name: "carre", params: "int a", ret: "int" },
            caption: "Une fonction reçoit des entrées, fait un travail, et renvoie une sortie.",
          },
          {
            kind: "quiz",
            question: "À quoi sert `return` dans une fonction ?",
            options: [
              "À renvoyer un résultat au code appelant",
              "À déclarer la fonction",
              "À créer une variable",
              "À fermer le programme",
            ],
            correctIndex: 0,
            explanation:
              "return renvoie une valeur à l'appelant. Il interrompt aussi l'exécution de la fonction : tout code après return n'est pas exécuté.",
          },
        ],
      },
      {
        id: "lire",
        title: "Je sais lire",
        subtitle: "Définir et appeler une fonction",
        blocks: [
          {
            kind: "codeWalk",
            filename: "carre.c",
            code: `#include <stdio.h>

int carre(int a) {
    return a * a;
}

int main(void) {
    int r = carre(5);
    printf("5² = %d\\n", r);
    printf("7² = %d\\n", carre(7));
    return 0;
}`,
            output: "5² = 25\n7² = 49",
            explanations: {
              3: "On définit la fonction carre. Elle prend un int a en paramètre et renvoie un int.",
              4: "return a * a : on calcule a*a et on le renvoie. La fonction s'arrête ici.",
              7: "Dans main, on appelle carre(5). L'argument 5 est copié dans le paramètre a.",
              7: "carre(5) renvoie 25. On range 25 dans r.",
              8: "On affiche r.",
              9: "On peut aussi appeler carre(7) directement dans printf. Le compilateur exécute carre(7) → 49, puis l'affiche.",
            },
          },
          {
            kind: "codeWalk",
            filename: "addition.c",
            code: `#include <stdio.h>

int addition(int a, int b) {
    return a + b;
}

int main(void) {
    printf("%d\\n", addition(3, 4));
    printf("%d\\n", addition(10, 20));
    return 0;
}`,
            output: "7\n30",
            explanations: {
              3: "Une fonction peut avoir PLUSIEURS paramètres, séparés par des virgules.",
              4: "On calcule a + b et on le renvoie.",
              8: "addition(3, 4) : 3 va dans a, 4 va dans b. La fonction renvoie 7.",
              9: "addition(10, 20) renvoie 30. On peut appeler la même fonction avec des arguments différents.",
            },
          },
          {
            kind: "codeWalk",
            filename: "void.c",
            code: `#include <stdio.h>

void direBonjour(void) {
    printf("Bonjour !\\n");
}

int main(void) {
    direBonjour();
    direBonjour();
    return 0;
}`,
            output: "Bonjour !\nBonjour !",
            explanations: {
              3: "void devant : la fonction ne renvoie rien. void entre () : elle ne prend aucun paramètre.",
              4: "On fait juste un printf. Pas de return nécessaire (mais on peut mettre `return;` pour sortir tôt).",
              8: "On appelle la fonction. Elle ne renvoie rien, donc on ne stocke pas de résultat.",
              9: "On l'appelle à nouveau. C'est tout l'intérêt : on réutilise le code sans le recopier.",
            },
          },
          {
            kind: "reveal",
            label: "Que se passe-t-il si on définit la fonction APRÈS le main ?",
            hint: "Clique pour révéler",
            content:
              "Le compilateur lit le fichier de haut en bas. Si tu appelles `carre(5)` dans le main mais que carre est défini plus bas, il ne la connaît pas encore → erreur. Solution : écrire un PROTOTYPE (`int carre(int a);` avec un ;) avant le main, et la définition complète après. Ou simplement : définir les fonctions AVANT le main.",
          },
          {
            kind: "challenge",
            variant: "predict",
            prompt: "Que vaut `addition(addition(1, 2), 3)` ?",
            accept: ["6", "6 (addition(3, 3))"],
            hint: "On commence par évaluer l'appel le plus interne.",
            feedback:
              "On commence par le plus interne : addition(1, 2) = 3. Puis addition(3, 3) = 6. Les appels imbriqués sont évalués de l'intérieur vers l'extérieur.",
          },
          {
            kind: "quiz",
            question: "Que signifie `void` devant une fonction ?",
            options: [
              "La fonction renvoie un nombre",
              "La fonction ne renvoie rien",
              "La fonction est privée",
              "La fonction est vide",
            ],
            correctIndex: 1,
            explanation:
              "void devant = la fonction ne renvoie pas de valeur. void entre () = elle ne prend pas de paramètre. Une fonction `void f(void)` ne prend rien et ne renvoie rien.",
          },
        ],
      },
      {
        id: "faire",
        title: "Je sais faire",
        subtitle: "Écrire ses propres fonctions",
        blocks: [
          {
            kind: "production",
            title: "Déclarer, définir et appeler une fonction",
            syntax: "type_retour nom(type1 param1, type2 param2);\n\ntype_retour nom(type1 param1, type2 param2) {\n    return valeur;\n}",
            prototype: "type_retour nom(type1 param1, type2 param2);",
            parameters: [
              { name: "paramètres", desc: "valeurs reçues par la fonction ; en C elles sont passées par valeur." },
              { name: "void", desc: "aucun paramètre ou aucun retour selon sa position." },
            ],
            returns: "La valeur après return, ou aucune valeur si le type de retour est void.",
            rules: [
              "Mettre le prototype avant le premier appel si la définition vient plus bas.",
              "Passage par valeur : modifier param ne modifie pas la variable appelante.",
              "Pour modifier la variable appelante, passer son adresse avec un pointeur.",
            ],
            example: "void doubler(int *x);\n\nvoid doubler(int *x) {\n    *x = *x * 2;\n}\n\nint n = 5;\ndoubler(&n);",
          },
          {
            kind: "challenge",
            variant: "fill",
            prompt: "Complète : une fonction qui renvoie le double de n.",
            accept: ["int doubler(int n) { return n * 2; }", "int doubler(int n){return n*2;}", "int doubler(int n) {return 2*n;}", "int doubler(int n) { return 2 * n; }"],
            hint: "Type de retour + nom + (paramètre) { return ...; }",
            feedback:
              "On écrit `int doubler(int n) { return n * 2; }`. Le type de retour est int (un nombre), le paramètre est int n, on renvoie n*2.",
          },
          {
            kind: "error",
            title: "Erreur : oublier return",
            bad: `int carre(int a) {
    a * a;
}`,
            good: `int carre(int a) {
    return a * a;
}`,
            explanation:
              "Sans `return`, la fonction ne renvoie rien (comportement indéfini : on récupère une valeur quelconque). Si tu déclares un type de retour (int, float…), tu DOIS retourner une valeur.",
          },
          {
            kind: "error",
            title: "Erreur : oublier le type de retour",
            bad: `carre(int a) {
    return a * a;
}`,
            good: `int carre(int a) {
    return a * a;
}`,
            explanation:
              "En C, toute fonction doit avoir un type de retour explicite. Si tu ne mets rien, le compilateur suppose `int` (et affiche un warning). Toujours écrire le type explicitement.",
          },
          {
            kind: "challenge",
            variant: "predict",
            prompt: "Que vaut x après l'appel ?",
            code: `int f(int n) {
    return n + 1;
}
int x = f(f(f(0)));`,
            accept: ["3", "x = 3"],
            hint: "Évalue de l'intérieur vers l'extérieur.",
            feedback:
              "f(0) = 1. f(1) = 2. f(2) = 3. Donc x = 3. Les appels imbriqués s'évaluent de l'intérieur vers l'extérieur.",
          },
          {
            kind: "codeWalk",
            filename: "portee.c",
            code: `#include <stdio.h>

int globale = 100;

void test(int x) {
    int locale = 5;
    printf("globale=%d, locale=%d, x=%d\\n",
           globale, locale, x);
}

int main(void) {
    test(42);
    // printf("%d", locale);  // ERREUR : locale inconnue ici
    return 0;
}`,
            output: "globale=100, locale=5, x=42",
            explanations: {
              3: "Variable globale : déclarée hors de toute fonction. Accessible PARTOUT.",
              5: "x est un paramètre. Il n'existe que dans la fonction test.",
              6: "locale est une variable locale à test. Elle n'existe PAS en dehors de test.",
              7: "On peut utiliser globale, locale et x à l'intérieur de test.",
              11: "L'appel de la fonction. x reçoit la valeur 42.",
              12: "Cette ligne commenterait une erreur : locale n'existe pas dans main. Une variable locale meurt à la sortie de sa fonction.",
            },
          },
          {
            kind: "challenge",
            variant: "predict",
            prompt: "Que vaut `a` après ce code ?",
            code: `void modifie(int a) {
    a = 99;
}
int main(void) {
    int a = 5;
    modifie(a);
    // a vaut ?
}`,
            accept: ["5", "a = 5"],
            hint: "Les paramètres sont des COPIES en C.",
            feedback:
              "a vaut toujours 5 ! En C, les paramètres sont passés par COPIE. La fonction a reçu une copie de a, l'a modifiée, mais la variable a de main n'a pas bougé. Pour modifier une variable de l'appelant, il faut utiliser des pointeurs (chapitre 8).",
          },
          {
            kind: "recap",
            title: "Bilan du chapitre 6",
            bullets: [
              { text: "Une fonction = un bloc nommé, réutilisable, qui prend des paramètres et renvoie un résultat." },
              { text: "Syntaxe : `type nom(type param1, type param2) { ... return valeur; }`" },
              { text: "`void` devant = ne renvoie rien. `void` entre () = ne prend rien." },
              { text: "Une fonction doit TOUJOURS avoir un type de retour explicite." },
              { text: "Les paramètres sont passés par COPIE : la fonction ne peut pas modifier la variable de l'appelant." },
              { text: "Variables locales = ne vivent que dans leur fonction. Variables globales = accessibles partout." },
            ],
          },
          {
            kind: "quiz",
            question: "Une fonction `int carre(int a)` est appelée avec `carre(5)`. Que vaut a dans la fonction ?",
            options: ["0", "5", "25", "Indéterminé"],
            correctIndex: 1,
            explanation:
              "L'argument 5 est copié dans le paramètre a. Donc a vaut 5 pendant l'exécution de carre. La fonction renverra 25.",
          },
        ],
      },
    ],
  },

  // ============================================================
  // CHAPITRE 7 — LES TABLEAUX
  // ============================================================
  {
    id: 7,
    title: "Les tableaux",
    subtitle: "Stocker plusieurs valeurs dans une seule variable.",
    shortTitle: "Tableaux",
    icon: "LayoutGrid",
    keywords: ["tableau", "array", "indice", "taille", "boucle", "parcours", "débordement", "off-by-one", "[]"],
    goal: "Manipuler des suites de valeurs du même type, accessibles par un indice.",
    minutes: 17,
    levels: [
      {
        id: "comprendre",
        title: "Je comprends",
        subtitle: "Une rangée de cases",
        blocks: [
          {
            kind: "story",
            eyebrow: "La situation",
            steps: [
              { text: "Tu veux stocker les notes de 30 étudiants." },
              { text: "Déclarer 30 variables (note1, note2, ..., note30) serait insupportable." },
              { text: "Et comment ferais-tu pour calculer la moyenne sans savoir combien il y a d'étudiants ?" },
              { text: "Il faut une structure qui regroupe plusieurs valeurs sous un même nom : un tableau." },
            ],
          },
          {
            kind: "analogy",
            real: {
              icon: "🗂️",
              title: "Un classeur à onglets",
              desc: "Un classeur « Notes » contient 30 onglets numérotés de 0 à 29. Chaque onglet contient une note. Tu ouvres l'onglet 5, tu vois la 6e note.",
            },
            code: {
              icon: "📦",
              title: "Un tableau",
              desc: "Une variable notes[30] contient 30 cases numérotées de 0 à 29. Tu écris notes[5] pour accéder à la 6e case.",
            },
            link: "Un tableau = une rangée de cases mémoire contiguës, accessibles par un indice.",
          },
          {
            kind: "vocab",
            terms: [
              { word: "Tableau", def: "Une suite de cases mémoire du même type, sous un même nom. Ex: int notes[30];" },

          {
            kind: "recipe",
            title: "La formule pour déclarer un tableau",
            formula: [
              { text: "type", role: "type" },
              { text: " ", role: "punct" },
              { text: "nom", role: "nom" },
              { text: "[", role: "punct" },
              { text: "taille", role: "value" },
              { text: "];", role: "punct" },
            ],
            example: [
              { text: "int", role: "type" },
              { text: " notes", role: "nom" },
              { text: "[", role: "punct" },
              { text: "30", role: "value" },
              { text: "];", role: "punct" },
            ],
          },

          {
            kind: "recipe",
            title: "La formule pour accéder à un élément",
            formula: [
              { text: "nom", role: "nom" },
              { text: "[", role: "punct" },
              { text: "indice", role: "value" },
              { text: "]", role: "punct" },
            ],
            example: [
              { text: "notes", role: "nom" },
              { text: "[", role: "punct" },
              { text: "0", role: "value" },
              { text: "]", role: "punct" },
            ],
            rules: [
              "Les indices commencent TOUJOURS à 0. Le dernier indice valide est taille - 1.",
              "Accéder à un indice hors limites (ex: tab[5] sur un tab[4]) = débordement = comportement imprévisible.",
            ],
          },

          {
            kind: "challenge",
            variant: "fill",
            prompt: "Déclare un tableau de 100 float nommé notes.",
            accept: [
              "float notes[100];",
              "float notes[100] ;",
            ],
            hint: "type nom[taille];",
            feedback: "On écrit `float notes[100];`. Le type est float, le nom est notes, la taille est 100.",
          },
              { word: "Indice (index)", def: "Le numéro de la case. Commence TOUJOURS à 0. Le 1er élément est tab[0]." },
              { word: "Taille", def: "Le nombre de cases. Un tableau de taille 5 a des indices de 0 à 4." },
              { word: "Débordement", def: "Accéder à un indice en dehors du tableau (ex: tab[5] sur un tab[4]). Comportement imprévisible." },
            ],
          },
          {
            kind: "visual",
            diagram: { type: "array", name: "notes", values: ["12", "15", "8", "18", "14"], highlightIdx: 2 },
            caption: "Le 1er élément est notes[0], le dernier est notes[4]. La taille est 5, mais l'indice max est 4.",
          },
          {
            kind: "buildUp",
            title: "Parcourir un tableau case par case",
            intro: "Avance pas à pas : une boucle for visite chaque case l'une après l'autre.",
            steps: [
              {
                kind: "narration",
                caption: "On a un tableau `int t[5] = {10, 20, 30, 40, 50};`. On va le parcourir avec une boucle for, en partant de i = 0.",
              },
              {
                kind: "code",
                caption: "Boucle classique : i va de 0 à 4 (strictement inférieur à 5).",
                code: `int t[5] = {10, 20, 30, 40, 50};
for (int i = 0; i < 5; i++) {
    printf("%d\\n", t[i]);
}`,
                activeLines: [2],
              },
              {
                kind: "narration",
                caption: "1ère itération : i = 0. On lit t[0] = 10.",
              },
              {
                kind: "code",
                caption: "i = 0 : t[0] est lu.",
                code: `int t[5] = {10, 20, 30, 40, 50};
for (int i = 0; i < 5; i++) {
    printf("%d\\n", t[i]);   // i=0 → affiche 10
}`,
                activeLines: [3],
              },
              {
                kind: "narration",
                caption: "2e itération : i = 1. On lit t[1] = 20. Et ainsi de suite : 30, 40, 50.",
              },
              {
                kind: "code",
                caption: "i = 4 (dernière itération) : on lit t[4] = 50. Puis i devient 5, la condition i < 5 est fausse, on sort de la boucle.",
                code: `int t[5] = {10, 20, 30, 40, 50};
for (int i = 0; i < 5; i++) {
    printf("%d\\n", t[i]);   // i=4 → affiche 50
}
// i=5 : condition i<5 fausse → on sort`,
                activeLines: [3, 5],
              },
              {
                kind: "narration",
                caption: "Si on avait écrit `i <= 5` au lieu de `i < 5`, on aurait accédé à t[5] qui n'existe pas → débordement ! C'est l'erreur off-by-one, la plus fréquente en C.",
              },
            ],
          },
          {
            kind: "comparisonTable",
            title: "i < n  vs  i <= n  : la différence cruciale",
            columns: ["Condition", "Indices visités", "Nombre d'itérations", "Sécurité"],
            rows: [
              { cells: ["i < 5", "0, 1, 2, 3, 4", "5", "✓ Correct"], tone: "good" },
              { cells: ["i <= 5", "0, 1, 2, 3, 4, 5", "6", "✗ Débordement !"], tone: "bad" },
              { cells: ["i < 4", "0, 1, 2, 3", "4", "⚠ Oublie la dernière case"], tone: "default" },
            ],
          },
          {
            kind: "reveal",
            label: "Pourquoi les indices commencent-ils à 0 ?",
            hint: "Clique pour révéler",
            content:
              "Parce que l'indice représente un DÉCALAGE par rapport au début du tableau. tab[0] = « 0 case après le début ». tab[3] = « 3 cases après le début ». C'est plus naturel pour la machine, et ça évite une soustraction à chaque accès. Cette convention se retrouve dans presque tous les langages.",
          },
          {
            kind: "quiz",
            question: "Quel est l'indice du premier élément d'un tableau en C ?",
            options: ["1", "0", "-1", "Ça dépend de la taille"],
            correctIndex: 1,
            explanation:
              "En C, les indices commencent TOUJOURS à 0. Un tableau de 5 éléments a des indices 0, 1, 2, 3, 4. Il n'y a pas de tab[5].",
          },
        ],
      },
      {
        id: "lire",
        title: "Je sais lire",
        subtitle: "Déclarer, remplir, parcourir",
        blocks: [
          {
            kind: "codeWalk",
            filename: "tableau.c",
            code: `#include <stdio.h>

int main(void) {
    int notes[5];

    notes[0] = 12;
    notes[1] = 15;
    notes[2] = 8;
    notes[3] = 18;
    notes[4] = 14;

    printf("note 3 = %d\\n", notes[2]);
    return 0;
}`,
            output: "note 3 = 8",
            explanations: {
              4: "On déclare un tableau de 5 int. Les 5 cases sont numérotées 0, 1, 2, 3, 4.",
              6: "On range 12 dans la case 0 (la 1re case).",
              7: "On range 15 dans la case 1.",
              8: "On range 8 dans la case 2 (la 3e case, donc).",
              9: "On range 18 dans la case 3.",
              10: "On range 14 dans la case 4 (la dernière).",
              12: "notes[2] accède à la case 2, qui contient 8. Attention : notes[2] est la 3e case.",
            },
          },
          {
            kind: "codeWalk",
            filename: "init.c",
            code: `#include <stdio.h>

int main(void) {
    int tab[5] = {10, 20, 30, 40, 50};

    for (int i = 0; i < 5; i++) {
        printf("tab[%d] = %d\\n", i, tab[i]);
    }
    return 0;
}`,
            output: "tab[0] = 10\ntab[1] = 20\ntab[2] = 30\ntab[3] = 40\ntab[4] = 50",
            explanations: {
              4: "On déclare et on initialise en une seule ligne, avec { ... }. Les valeurs sont rangées dans l'ordre.",
              6: "Boucle for classique pour parcourir un tableau : i va de 0 à taille-1.",
              7: "On affiche l'indice i et la valeur tab[i].",
              6: "ATTENTION : i < 5 (pas i <= 5). Sinon on déborde et on lit n'importe quoi.",
            },
          },
          {
            kind: "codeWalk",
            filename: "somme.c",
            code: `#include <stdio.h>

int main(void) {
    int notes[5] = {12, 15, 8, 18, 14};
    int somme = 0;

    for (int i = 0; i < 5; i++) {
        somme = somme + notes[i];
    }

    float moyenne = (float)somme / 5;
    printf("Moyenne = %.2f\\n", moyenne);
    return 0;
}`,
            output: "Moyenne = 13.40",
            explanations: {
              4: "On déclare et initialise le tableau.",
              5: "On initialise somme à 0. Important ! Sinon, garbage.",
              7: "Pour chaque case, on ajoute sa valeur à somme.",
              10: "On convertit somme en float avec (float) pour que la division soit décimale.",
              10: "Sans (float), 67 / 5 = 13 (division entière). Avec (float), 67.0 / 5 = 13.4.",
              11: "%.2f affiche un float avec 2 décimales.",
            },
          },
          {
            kind: "challenge",
            variant: "predict",
            prompt: "Quelle est la valeur maximale d'indice valide pour `int t[10];` ?",
            accept: ["9", "10", "max 9"],
            hint: "Le dernier indice est toujours taille - 1.",
            feedback:
              "L'indice maximal est 9 (taille 10, indices de 0 à 9). t[10] est INTERDIT : on déborde.",
          },
          {
            kind: "quiz",
            question: "Que fait `int t[3] = {1, 2, 3};` ?",
            options: [
              "Crée un tableau de 3 cases avec 1, 2, 3",
              "Crée un tableau de 3 cases vides",
              "Crée un tableau de 4 cases",
              "Crée une erreur",
            ],
            correctIndex: 0,
            explanation:
              "On déclare un tableau de 3 int et on l'initialise avec les valeurs 1, 2, 3. t[0]=1, t[1]=2, t[2]=3.",
          },
        ],
      },
      {
        id: "faire",
        title: "Je sais faire",
        subtitle: "Parcourir sans déborder",
        blocks: [
          {
            kind: "production",
            title: "Déclarer, remplir et parcourir un tableau",
            syntax: "type tableau[taille];\ntableau[index] = valeur;\nvaleur = tableau[index];",
            rules: [
              "Le premier indice est 0.",
              "Le dernier indice est taille - 1.",
              "Ne jamais accéder à tableau[taille].",
              "Pour connaître la taille d’un tableau local : sizeof(tableau) / sizeof(tableau[0]).",
            ],
            example: "int notes[3] = {12, 15, 18};\nfor (int i = 0; i < 3; i++) {\n    printf(\"%d\\n\", notes[i]);\n}",
          },
          {
            kind: "error",
            title: "Erreur : débordement (off-by-one)",
            bad: `int t[5];
for (int i = 0; i <= 5; i++) {
    t[i] = 0;  // i va jusqu'à 5 !
}`,
            good: `int t[5];
for (int i = 0; i < 5; i++) {
    t[i] = 0;
}`,
            explanation:
              "Avec `i <= 5`, on écrit dans t[5] qui n'existe pas. On écrase de la mémoire voisine, ce qui peut faire planter le programme plus tard, sans message d'erreur clair. Règle d'or : `i < taille`.",
          },
          {
            kind: "challenge",
            variant: "predict",
            prompt: "Que vaut `t[2]` après ce code ?",
            code: `int t[5] = {1, 2, 3, 4, 5};
t[2] = t[0] + t[4];`,
            accept: ["6", "t[2] = 6"],
            hint: "t[0] = 1, t[4] = 5. Leur somme va dans t[2].",
            feedback:
              "t[0] = 1, t[4] = 5, donc 1 + 5 = 6. On range 6 dans t[2] (qui valait 3 avant). Le tableau devient {1, 2, 6, 4, 5}.",
          },
          {
            kind: "challenge",
            variant: "predict",
            prompt: "Que vaut la somme ?",
            code: `int t[4] = {1, 2, 3, 4};
int s = 0;
for (int i = 0; i < 4; i++) {
    s += t[i];
}`,
            accept: ["10", "s = 10"],
            hint: "1 + 2 + 3 + 4 = ?",
            feedback:
              "La somme vaut 10 (1 + 2 + 3 + 4). La boucle additionne chaque case. C'est le pattern classique pour sommer un tableau.",
          },
          {
            kind: "challenge",
            variant: "fill",
            prompt: "Complète : une boucle for qui affiche chaque case de t de taille 5.",
            accept: ["for (int i = 0; i < 5; i++)", "for(int i=0;i<5;i++)", "for (int i = 0; i<5; i++)"],
            hint: "Commence à 0, condition i < 5, incrémente.",
            feedback:
              "On écrit `for (int i = 0; i < 5; i++) printf(\"%d\\n\", t[i]);`. La condition est i < 5 (pas <=), pour éviter le débordement.",
          },
          {
            kind: "codeWalk",
            filename: "max.c",
            code: `#include <stdio.h>

int main(void) {
    int t[6] = {3, 8, 2, 9, 5, 1};
    int max = t[0];

    for (int i = 1; i < 6; i++) {
        if (t[i] > max) {
            max = t[i];
        }
    }

    printf("Max = %d\\n", max);
    return 0;
}`,
            output: "Max = 9",
            explanations: {
              4: "On initialise max avec t[0] = 3. C'est le plus grand jusqu'à présent.",
              6: "On commence à i = 1 (pas 0, car on a déjà pris t[0]).",
              7: "Si la case courante est plus grande que max…",
              8: "…alors elle devient le nouveau max.",
              12: "À la fin, max contient 9, le plus grand du tableau.",
            },
          },
          {
            kind: "challenge",
            variant: "predict",
            prompt: "Que vaut max à la fin ?",
            code: `int t[5] = {4, 7, 2, 9, 1};
int max = t[0];
for (int i = 1; i < 5; i++) {
    if (t[i] > max) max = t[i];
}`,
            accept: ["9", "max = 9"],
            hint: "Le max du tableau est mis à jour à chaque fois qu'on trouve une valeur plus grande.",
            feedback:
              "max = 9. Init à 4. i=1 : 7 > 4 → max = 7. i=2 : 2 > 7 non. i=3 : 9 > 7 → max = 9. i=4 : 1 > 9 non. Résultat : 9.",
          },
          {
            kind: "recap",
            title: "Bilan du chapitre 7",
            bullets: [
              { text: "Un tableau stocke plusieurs valeurs du même type sous un même nom." },
              { text: "Déclaration : `int t[5];` (5 cases) ou `int t[5] = {1, 2, 3, 4, 5};`." },
              { text: "Les indices vont de 0 à taille - 1. Jamais `t[taille]`." },
              { text: "Boucle classique : `for (int i = 0; i < taille; i++) ... t[i] ...`" },
              { text: "Piège majeur : `i <= taille` provoque un débordement (comportement imprévisible)." },
              { text: "Patterns utiles : somme, max/min, recherche, parcours inverse." },
            ],
          },
          {
            kind: "quiz",
            question: "Que fait `for (int i = 0; i < 5; i++) printf(\"%d \", t[i]);` ?",
            options: [
              "Affiche les 5 cases du tableau",
              "Affiche 4 cases",
              "Affiche 6 cases",
              "Plante le programme",
            ],
            correctIndex: 0,
            explanation:
              "i prend les valeurs 0, 1, 2, 3, 4 → exactement les 5 indices valides du tableau. On affiche donc toutes les cases.",
          },
        ],
      },
    ],
  },

  // ============================================================
  // CHAPITRE 8 — LES POINTEURS (V4.1 — refonte visuelle massive)
  // ============================================================
  {
    id: 8,
    title: "Les pointeurs",
    subtitle: "Comprendre où vivent les variables en mémoire.",
    shortTitle: "Pointeurs",
    icon: "ArrowRightLeft",
    keywords: ["pointeur", "adresse", "&", "*", "mémoire", "déréférencement", "NULL", "passage par adresse"],
    goal: "Voir graphiquement comment une variable, son adresse et un pointeur s'articulent.",
    minutes: 25,
    levels: [
      {
        id: "comprendre",
        title: "Je comprends",
        subtitle: "Naissance d'un pointeur, pas à pas",
        blocks: [
          {
            kind: "analogy",
            real: {
              icon: "🏠",
              title: "Une maison dans une rue",
              desc: "La maison « chez Paul » (le nom) est au numéro 12 de la rue (l'adresse). À l'intérieur il y a 4 personnes (la valeur).",
            },
            code: {
              icon: "📦",
              title: "Une variable en mémoire",
              desc: "La variable age (le nom) est à l'adresse 0x7ffc. Sa valeur est 20.",
            },
            link: "Adresse = OÙ (numéro de la case). Valeur = QUOI (ce qu'il y a dedans). Variable = la case elle-même, avec un nom humain.",
          },
          {
            kind: "vocab",
            terms: [
              { word: "Variable", def: "Une case mémoire avec un nom. Ex: `int age = 20;`", example: "int age = 20;" },

          {
            kind: "recipe",
            title: "La formule pour déclarer un pointeur",
            formula: [
              { text: "type", role: "type" },
              { text: " *", role: "punct" },
              { text: "nomPointeur", role: "nom" },
              { text: " = ", role: "punct" },
              { text: "&", role: "operator" },
              { text: "variable", role: "nom" },
              { text: ";", role: "punct" },
            ],
            example: [
              { text: "int", role: "type" },
              { text: " *", role: "punct" },
              { text: "ptr", role: "nom" },
              { text: " = ", role: "punct" },
              { text: "&", role: "operator" },
              { text: "age", role: "nom" },
              { text: ";", role: "punct" },
            ],
          },

          {
            kind: "recipe",
            title: "Déréférencement et écriture via pointeur",
            formula: [
              { text: "*", role: "operator" },
              { text: "nomPointeur", role: "nom" },
              { text: " = ", role: "punct" },
              { text: "valeur", role: "value" },
              { text: ";", role: "punct" },
            ],
            example: [
              { text: "*", role: "operator" },
              { text: "ptr", role: "nom" },
              { text: " = ", role: "punct" },
              { text: "25", role: "value" },
              { text: ";", role: "punct" },
            ],
            rules: [
              "* dans une DÉCLARATION (`int *p;`) signifie 'pointeur vers'.",
              "* dans une EXPRESSION (`*p = 5;`) signifie 'la valeur pointée par'.",
              "& donne l'adresse d'une variable : &age = l'adresse de age.",
            ],
          },

          {
            kind: "challenge",
            variant: "fill",
            prompt: "Déclare un pointeur sur float nommé pTemp et initialise-le avec l'adresse de la variable temperature.",
            accept: [
              "float *pTemp = &temperature;",
              "float *pTemp = &temperature ;",
              "float* pTemp = &temperature;",
            ],
            hint: "type *nom = &variable; — le type du pointeur est float *.",
            feedback: "On écrit `float *pTemp = &temperature;`. Le type est float *, le nom est pTemp, et on l'initialise avec &temperature.",
          },
              { word: "Adresse", def: "Le numéro de la case. Comme un numéro de maison. S'écrit en hexadécimal.", example: "0x7ffc" },
              { word: "Valeur", def: "Ce qu'il y a DANS la case.", example: "20" },
              { word: "&", def: "Donne l'ADRESSE d'une variable. Se lit « adresse de ».", example: "&age → 0x7ffc" },
              { word: "*", def: "Donne la VALEUR stockée à une adresse. Se lit « valeur pointée par ».", example: "*ptr → 20" },
              { word: "Pointeur", def: "Une variable spéciale qui contient une ADRESSE (pas une valeur classique).", example: "int *p;" },
            ],
          },
          {
            kind: "buildUp",
            title: "Comment naît un pointeur",
            intro: "Clique sur « Suivant » pour voir apparaître chaque concept, l'un après l'autre.",
            steps: [
              {
                kind: "narration",
                caption: "Tout commence par une variable ordinaire. On déclare `int age = 20;`. La mémoire réserve une case, lui donne le nom age, et y range 20.",
              },
              {
                kind: "memory",
                caption: "Voici la variable age. Elle contient 20. En dessous, son adresse : 0x7ffc. C'est sa position dans la grande rue de la mémoire.",
                vars: [{ name: "age", type: "int", value: "20", addr: "0x7ffc", tone: "new" }],
              },
              {
                kind: "narration",
                caption: "Maintenant, on va demander à l'ordinateur : « donne-moi l'ADRESSE de age ». Pour ça, on utilise l'opérateur & (et commercial).",
              },
              {
                kind: "code",
                caption: "On écrit `&age`. Le & transforme la variable en son adresse. Le résultat est 0x7ffc.",
                code: `int age = 20;
&age;   // ← ceci vaut 0x7ffc`,
                activeLines: [2],
              },
              {
                kind: "narration",
                caption: "Cette adresse, on va la RANGER dans une nouvelle variable. Mais pas n'importe quelle variable : un POINTEUR. Un pointeur est fait exprès pour stocker des adresses.",
              },
              {
                kind: "code",
                caption: "On déclare `int *ptr = &age;`. Le * dans la déclaration dit « ptr est un pointeur sur int ». On l'initialise avec l'adresse de age.",
                code: `int age = 20;
int *ptr = &age;   // ptr contient maintenant 0x7ffc`,
                activeLines: [2],
              },
              {
                kind: "pointer",
                caption: "Voilà ! ptr contient l'adresse de age (0x7ffc). On dit que « ptr pointe vers age ». La flèche montre ce lien.",
                varName: "age",
                ptrName: "ptr",
                value: "20",
                addr: "0x7ffc",
                showArrow: true,
                showDeref: false,
              },
              {
                kind: "narration",
                caption: "Maintenant, on veut récupérer la VALEUR de age, mais EN PASSANT par ptr. Pour ça, on utilise l'opérateur * (étoile) : c'est l'inverse de &.",
              },
              {
                kind: "code",
                caption: "On écrit `*ptr`. Le * (en expression, pas en déclaration) dit « va voir ce qu'il y a à l'adresse pointée ». Comme ptr pointe vers age, *ptr vaut 20.",
                code: `int age = 20;
int *ptr = &age;
*ptr;   // ← ceci vaut 20`,
                activeLines: [3],
              },
              {
                kind: "pointer",
                caption: "On lit : *ptr = 20. On a retrouvé la valeur de age, EN PASSANT par le pointeur. C'est ça, le déréférencement.",
                varName: "age",
                ptrName: "ptr",
                value: "20",
                addr: "0x7ffc",
                showArrow: true,
                showDeref: true,
              },
              {
                kind: "narration",
                caption: "Encore plus fort : si on écrit `*ptr = 25;`, on MODIFIE la case pointée par ptr. Comme ptr pointe vers age, c'est age qui est modifié !",
              },
              {
                kind: "code",
                caption: "`*ptr = 25;` range 25 à l'adresse pointée par ptr. Donc dans age. Sans jamais écrire `age =` directement.",
                code: `int age = 20;
int *ptr = &age;
*ptr = 25;   // age devient 25 !
printf("%d", age);   // affiche 25`,
                activeLines: [3],
              },
              {
                kind: "pointer",
                caption: "Et voilà : age vaut maintenant 25. On l'a modifié INDIRECTEMENT, via son adresse. C'est toute la puissance des pointeurs.",
                varName: "age",
                ptrName: "ptr",
                value: "25",
                addr: "0x7ffc",
                showArrow: true,
                showDeref: true,
                writingValue: "25",
              },
            ],
          },
          {
            kind: "comparisonTable",
            title: "& et * : le duo symétrique",
            columns: ["Opérateur", "Nom", "Direction", "Exemple"],
            rows: [
              { cells: ["&", "adresse de", "Variable → Adresse", "`&age` donne `0x7ffc`"], tone: "highlight" },
              { cells: ["*", "déréférencement", "Adresse → Valeur", "`*ptr` donne `20`"], tone: "highlight" },
              { cells: ["* (en déclaration)", "type pointeur", "Déclare un pointeur", "`int *ptr;`"], tone: "default" },
            ],
          },
          {
            kind: "reveal",
            label: "Pourquoi le * sert à deux choses différentes ?",
            hint: "Clique pour révéler",
            content:
              "1) Dans une DÉCLARATION (`int *ptr;`), le * signifie « ptr est un pointeur sur int ». 2) Dans une EXPRESSION (`*ptr = 5;`), le * signifie « la valeur pointée ». C'est le même symbole, deux rôles. C'est déroutant au début, mais ça devient naturel.",
          },
          {
            kind: "quiz",
            question: "Que contient un pointeur ?",
            options: [
              "Une valeur entière comme 42",
              "Une adresse mémoire",
              "Une chaîne de caractères",
              "Une fonction",
            ],
            correctIndex: 1,
            explanation:
              "Un pointeur CONTIENT une adresse mémoire. C'est sa raison d'être. *ptr (déréférencement) donne la VALEUR stockée à cette adresse.",
          },
        ],
      },
      {
        id: "lire",
        title: "Je sais lire",
        subtitle: "Le code, expliqué visuellement",
        blocks: [
          {
            kind: "codeWalk",
            filename: "pointeur.c",
            code: `#include <stdio.h>

int main(void) {
    int age = 20;
    int *ptr;

    ptr = &age;

    printf("age       = %d\\n", age);
    printf("&age      = %p\\n", (void*)&age);
    printf("ptr       = %p\\n", (void*)ptr);
    printf("*ptr      = %d\\n", *ptr);
    return 0;
}`,
            output: "age       = 20\n&age      = 0x7ffc2a8c\nptr       = 0x7ffc2a8c\n*ptr      = 20",
            explanations: {
              4: "On crée une variable age qui vaut 20. Elle est rangée quelque part en mémoire.",
              5: "On déclare un pointeur sur int. Le * signifie « pointeur vers ». ptr n'est pas encore initialisé.",
              7: "&age donne l'ADRESSE de age. On la range dans ptr. Maintenant ptr « pointe vers » age.",
              9: "La VALEUR de age est 20.",
              10: "&age est l'ADRESSE de age (quelque chose comme 0x7ffc...).",
              11: "ptr contient la même adresse que &age (puisqu'on vient de la lui donner).",
              12: "*ptr (déréférencement) = la valeur stockée à l'adresse pointée par ptr = la valeur de age = 20.",
            },
          },
          {
            kind: "buildUp",
            title: "Modification via pointeur",
            intro: "Comment un pointeur peut modifier une variable à distance.",
            steps: [
              {
                kind: "narration",
                caption: "On a age = 20, et un pointeur ptr qui pointe vers age. Jusqu'ici, tout va bien.",
              },
              {
                kind: "pointer",
                caption: "État initial : age contient 20. ptr contient l'adresse de age (0x7ffc). La flèche montre le lien.",
                varName: "age",
                ptrName: "ptr",
                value: "20",
                addr: "0x7ffc",
                showArrow: true,
                showDeref: true,
              },
              {
                kind: "code",
                caption: "On écrit `*ptr = 25;`. Le * dit « va à l'adresse pointée ». Le = dit « range cette valeur ».",
                code: `int age = 20;
int *ptr = &age;
*ptr = 25;   // ← ON ÉCRIT 25 À L'ADRESSE DE age`,
                activeLines: [3],
              },
              {
                kind: "pointer",
                caption: "Résultat : age vaut maintenant 25. On ne l'a pas touché directement, mais via ptr. C'est ça, la magie des pointeurs.",
                varName: "age",
                ptrName: "ptr",
                value: "25",
                addr: "0x7ffc",
                showArrow: true,
                showDeref: true,
                writingValue: "25",
              },
            ],
          },
          {
            kind: "challenge",
            variant: "predict",
            prompt: "Que vaut x après ce code ?",
            code: `int x = 10;
int *p = &x;
*p = 50;`,
            accept: ["50", "x = 50"],
            hint: "*p = 50 modifie ce qui est pointé par p. Et p pointe vers x.",
            feedback:
              "x vaut 50. *p = 50 signifie « range 50 à l'adresse pointée par p ». Comme p pointe vers x, on a modifié x.",
          },
          {
            kind: "codeWalk",
            filename: "echange.c",
            code: `#include <stdio.h>

void echanger(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

int main(void) {
    int x = 5, y = 10;
    echanger(&x, &y);
    printf("x=%d, y=%d\\n", x, y);
    return 0;
}`,
            output: "x=10, y=5",
            explanations: {
              3: "La fonction prend des POINTEURS en paramètres (pas des int). C'est la clé pour modifier les variables de l'appelant.",
              4: "*a est la valeur pointée par a, c'est-à-dire x. On la sauvegarde dans temp.",
              5: "*a = *b : on met la valeur pointée par b (y) dans la case pointée par a (x). Donc x = 10.",
              6: "*b = temp : on met temp (l'ancien x = 5) dans la case pointée par b (y). Donc y = 5.",
              10: "On passe les ADRESSES de x et y (avec &). Sans ça, la fonction recevrait des copies et ne pourrait rien modifier.",
              11: "Après l'appel, x = 10 et y = 5. L'échange a bien eu lieu ! C'était impossible sans pointeurs.",
            },
          },
          {
            kind: "visual",
            diagram: {
              type: "twoZoneCompare",
              leftTitle: "Passage par valeur (rappel ch.6)",
              rightTitle: "Passage par adresse (pointeurs)",
              rows: [
                { left: "f(x) reçoit une COPIE de x", right: "f(&x) reçoit l'ADRESSE de x" },
                { left: "f ne peut PAS modifier x", right: "f PEUT modifier x via *ptr" },
                { left: "Sûr mais limité", right: "Puissant mais à utiliser avec soin" },
              ],
            },
            caption: "Les pointeurs déverrouillent la modification à distance. Indispensable pour les fonctions comme echanger().",
          },
          {
            kind: "quiz",
            question: "Que fait `*ptr = 5;` si ptr pointe vers la variable n ?",
            options: [
              "Change ptr pour qu'il pointe vers 5",
              "Met la valeur 5 dans la variable pointée par ptr (donc dans n)",
              "Affiche 5",
              "Efface ptr",
            ],
            correctIndex: 1,
            explanation:
              "*ptr = 5 range 5 à l'adresse pointée par ptr. Comme ptr pointe vers n, n reçoit 5. On dit qu'on a « déréférencé puis assigné ».",
          },
        ],
      },
      {
        id: "faire",
        title: "Je sais faire",
        subtitle: "Éviter les pièges mortels",
        blocks: [
          {
            kind: "production",
            title: "Déclarer et utiliser un pointeur",
            syntax: "type *ptr;\nptr = &variable;\nvaleur = *ptr;\n*ptr = nouvelle_valeur;",
            parameters: [
              { name: "* dans la déclaration", desc: "indique que ptr est un pointeur vers un type." },
              { name: "&variable", desc: "donne l’adresse mémoire de variable." },
              { name: "*ptr", desc: "déréférence : accède à la valeur située à cette adresse." },
            ],
            returns: "Un pointeur contient une adresse ; *ptr donne la valeur pointée.",
            rules: [
              "Le type du pointeur doit correspondre au type visé.",
              "Ne jamais déréférencer un pointeur NULL ou non initialisé.",
              "Passage par adresse : f(&x) permet à f de modifier x via *ptr.",
            ],
            example: "int age = 20;\nint *p = &age;\nprintf(\"%d\\n\", *p);\n*p = 21;",
          },
          {
            kind: "comparisonTable",
            title: "Les 3 pièges mortels des pointeurs",
            columns: ["Piège", "Symptôme", "Correction"],
            rows: [
              {
                cells: ["Pointeur non initialisé", "Crash aléatoire, écriture sauvage en mémoire", "Toujours initialiser : `int *p = &n;` ou `NULL`"],
                tone: "bad",
              },
              {
                cells: ["Déréférencer NULL", "Segmentation fault immédiat", "Tester `if (p != NULL)` avant `*p`"],
                tone: "bad",
              },
              {
                cells: ["Pointeur pendant (après free)", "Comportement indéfini, bugs fantômes", "Mettre `p = NULL;` après `free(p);`"],
                tone: "bad",
              },
            ],
          },
          {
            kind: "error",
            title: "Erreur : pointeur non initialisé",
            bad: `int *ptr;
*ptr = 5;  // ptr pointe n'importe où !`,
            good: `int n;
int *ptr = &n;
*ptr = 5;  // OK, ptr pointe vers n`,
            explanation:
              "Un pointeur non initialisé contient une adresse aléatoire. *ptr = 5 écrit 5 à un endroit quelconque de la mémoire → crash quasi certain. Règle d'or : TOUJOURS initialiser un pointeur, soit avec &variable, soit avec NULL.",
          },
          {
            kind: "error",
            title: "Erreur : déréférencer NULL",
            bad: `int *ptr = NULL;
*ptr = 5;  // CRASH : segmentation fault`,
            good: `int n;
int *ptr = NULL;
if (ptr != NULL) {
    *ptr = 5;
} else {
    printf("Pointeur nul !\\n");
}`,
            explanation:
              "NULL représente un pointeur qui ne pointe nulle part. Le déréférencer provoque un « segmentation fault » (crash immédiat). Avant de déréférencer, on teste toujours `if (ptr != NULL)`.",
          },
          {
            kind: "challenge",
            variant: "predict",
            prompt: "Que vaut y après ce code ?",
            code: `int x = 7;
int y = 3;
int *p = &x;
y = *p;`,
            accept: ["7", "y = 7"],
            hint: "*p est la valeur pointée par p, donc la valeur de x.",
            feedback:
              "y vaut 7. *p = x = 7. On range cette valeur dans y. Maintenant x et y valent tous deux 7.",
          },
          {
            kind: "challenge",
            variant: "predict",
            prompt: "Que vaut *p après ce code ?",
            code: `int n = 10;
int *p = &n;
n = 20;`,
            accept: ["20", "*p = 20"],
            hint: "p pointe vers n. Si on change n, *p change aussi.",
            feedback:
              "*p vaut 20. Comme p pointe vers n, *p donne toujours la valeur actuelle de n. On a modifié n directement, et *p le reflète.",
          },
          {
            kind: "challenge",
            variant: "fill",
            prompt: "Complète : déclare un pointeur p qui pointe vers la variable n.",
            accept: ["int *p = &n;", "int* p = &n;", "int *p=&n;"],
            hint: "Type + * + nom + = + &variable + ;",
            feedback:
              "On écrit `int *p = &n;`. Le type est `int *` (pointeur sur int), le nom est p, on initialise avec l'adresse de n.",
          },
          {
            kind: "codeWalk",
            filename: "compter.c",
            code: `#include <stdio.h>

void ajouterUn(int *n) {
    (*n)++;
}

int main(void) {
    int compteur = 0;
    ajouterUn(&compteur);
    ajouterUn(&compteur);
    ajouterUn(&compteur);
    printf("compteur = %d\\n", compteur);
    return 0;
}`,
            output: "compteur = 3",
            explanations: {
              3: "La fonction prend un pointeur. Elle peut donc modifier la variable de l'appelant.",
              4: "(*n)++ : on incrémente la valeur pointée. Les parenthèses sont OBLIGATOIRES (sinon *n++ ferait n'importe quoi à cause de la priorité des opérateurs).",
              8: "On appelle 3 fois la fonction. À chaque appel, compteur augmente de 1.",
              12: "compteur vaut 3. Sans pointeur, la fonction n'aurait rien pu modifier (rappel chap. 6).",
            },
          },
          {
            kind: "challenge",
            variant: "predict",
            prompt: "Que vaut compteur après ce code ?",
            code: `int compteur = 5;
int *p = &compteur;
*p += 10;`,
            accept: ["15", "compteur = 15"],
            hint: "*p += 10 ajoute 10 à la valeur pointée par p.",
            feedback:
              "compteur vaut 15. *p += 10 signifie « ajoute 10 à la valeur pointée par p ». Comme p pointe vers compteur (qui vaut 5), compteur devient 15.",
          },
          {
            kind: "recap",
            title: "Bilan du chapitre 8",
            bullets: [
              { text: "Variable = case mémoire avec un nom. Adresse = numéro de la case. Valeur = contenu." },
              { text: "& (adresse de) transforme une variable en son adresse. * (déréférencement) fait l'inverse." },
              { text: "Un pointeur est une variable qui contient une adresse : `int *p = &n;`" },
              { text: "`*p = 5;` modifie la variable pointée par p (donc n), sans toucher n directement." },
              { text: "Un pointeur permet à une fonction de modifier une variable de l'appelant." },
              { text: "3 pièges : non-initialisé, NULL déréférencé, pointeur pendant après free." },
              { text: "Règle d'or : toujours initialiser (avec &var ou NULL), jamais déréférencer NULL." },
            ],
          },
          {
            kind: "quiz",
            question: "Quel opérateur donne l'adresse d'une variable age ?",
            options: ["*age", "&age", "@age", "addr(age)"],
            correctIndex: 1,
            explanation:
              "& est l'opérateur « adresse de ». &age donne l'adresse mémoire de age. * est son inverse : il donne la valeur stockée à une adresse.",
          },
        ],
      },
    ],
  },
];
