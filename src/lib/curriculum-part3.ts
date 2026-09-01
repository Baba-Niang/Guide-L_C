import type { Chapter } from "./curriculum-types";

// Chapters 9–16
export const chaptersPart3: Chapter[] = [
  // ============================================================
  // CHAPITRE 9 — LES CHAÎNES DE CARACTÈRES
  // ============================================================
  {
    id: 9,
    title: "Les chaînes de caractères",
    subtitle: "Manipuler du texte en C.",
    shortTitle: "Chaînes",
    icon: "Type",
    keywords: ["chaîne", "string", "char", "\\0", "strlen", "strcpy", "strcat", "strcmp", "tableau de char"],
    goal: "Comprendre qu'en C, une chaîne est un tableau de char terminé par \\0, et utiliser les fonctions de string.h.",
    minutes: 16,
    levels: [
      {
        id: "comprendre",
        title: "Je comprends",
        subtitle: "Une chaîne = un tableau spécial",
        blocks: [
          {
            kind: "story",
            eyebrow: "La situation",
            steps: [
              { text: "Tu veux demander le nom de l'utilisateur et l'afficher." },
              { text: "Un nom, c'est plusieurs lettres : B, o, n, j, o, u, r." },
              { text: "Comment ranger ça ? Une variable par lettre ? Non, trop lourd." },
              { text: "On utilise un tableau de char. Mais il faut un moyen de savoir où finit le mot." },
            ],
          },
          {
            kind: "vocab",
            terms: [
              { word: "Chaîne (string)", def: "Une suite de char (caractères) terminée par un caractère spécial \\0 qui marque la fin." },
              { word: "\\0 (caractère nul)", def: "Le caractère de fin de chaîne. Son code ASCII est 0. Il est automatiquement ajouté par les guillemets \" \"." },
              { word: "char[]", def: "Un tableau de char. Quand il se termine par \\0, c'est une chaîne." },
              { word: "string.h", def: "La bibliothèque standard qui contient strlen, strcpy, strcat, strcmp, etc." },
            ],
          },
          {
            kind: "visual",
            diagram: { type: "string", text: "Bonjour" },
            caption: "La chaîne \"Bonjour\" occupe 8 cases : 7 lettres + \\0. Sans \\0, printf lirait au-delà et afficherait n'importe quoi.",
          },
          {
            kind: "reveal",
            label: "Pourquoi \\0 à la fin ?",
            hint: "Clique pour révéler",
            content:
              "Parce que le tableau a une taille fixe, mais la chaîne peut être plus courte. \"Bonjour\" fait 7 lettres, mais si on le range dans un char[20], il reste 12 cases vides. \\0 dit à printf « arrête-toi ici ». Sans \\0, printf continuerait à lire la mémoire après « Bonjour », affichant des caractères aléatoires.",
          },
          {
            kind: "quiz",
            question: "Comment se termine une chaîne de caractères en C ?",
            options: ["Par un point (.)", "Par le caractère nul \\0", "Par un saut de ligne", "Par une accolade"],
            correctIndex: 1,
            explanation:
              "Toute chaîne C se termine par \\0 (le caractère nul, code ASCII 0). Il est automatiquement ajouté par les guillemets \" \".",
          },
        ],
      },
      {
        id: "lire",
        title: "Je sais lire",
        subtitle: "Déclarer, lire, afficher, manipuler",
        blocks: [
          {
            kind: "codeWalk",
            filename: "chaine.c",
            code: `#include <stdio.h>

int main(void) {
    char nom[20] = "Baba";

    printf("Bonjour %s !\\n", nom);
    return 0;
}`,
            output: "Bonjour Baba !",
            explanations: {
              4: "On déclare un tableau de 20 char et on l'initialise avec \"Baba\". Le \\0 est automatiquement ajouté après le 'a'.",
              6: "%s est le format specifier pour une chaîne. printf lit le tableau jusqu'au \\0 et affiche tout ce qui est avant.",
            },
          },
          {
            kind: "codeWalk",
            filename: "string_h.c",
            code: `#include <stdio.h>
#include <string.h>

int main(void) {
    char a[20] = "Bonjour";
    char b[20];

    printf("Longueur : %lu\\n", strlen(a));

    strcpy(b, a);             // b = "Bonjour"
    strcat(b, " !");          // b = "Bonjour !"

    printf("a = %s\\n", a);
    printf("b = %s\\n", b);
    printf("Comparaison : %d\\n", strcmp(a, b));
    return 0;
}`,
            output: "Longueur : 7\na = Bonjour\nb = Bonjour !\nComparaison : -32",
            explanations: {
              2: "On inclut string.h pour avoir strlen, strcpy, strcat, strcmp.",
              5: "On déclare deux chaînes. b n'est pas encore initialisée.",
              8: "strlen(a) renvoie la longueur SANS le \\0. \"Bonjour\" = 7 caractères.",
              10: "strcpy(b, a) COPIE a dans b. Après : b contient \"Bonjour\".",
              11: "strcat(b, \" !\") CONCATÈNE \" !\" à la fin de b. Maintenant b = \"Bonjour !\".",
              13: "a est inchangée : \"Bonjour\".",
              14: "b contient maintenant \"Bonjour !\".",
              15: "strcmp(a, b) compare : 0 si égales, négatif si a < b, positif si a > b. Ici -32 car 'B' < 'B'+(' !')…",
            },
          },
          {
            kind: "reveal",
            label: "Comment lire une chaîne tapée par l'utilisateur ?",
            hint: "Clique pour révéler",
            content:
              "On utilise `scanf(\"%s\", nom)` (sans &, car nom est déjà une adresse : un tableau se transforme en pointeur quand on le passe). Mais scanf s'arrête au premier espace. Pour lire une ligne complète avec espaces, on utilise `fgets(nom, 20, stdin)` qui est plus sûre (limite la taille).",
          },
          {
            kind: "quiz",
            question: "Que fait `strcpy(dest, src)` ?",
            options: [
              "Compare dest et src",
              "Copie src dans dest",
              "Concatène src à dest",
              "Donne la longueur de src",
            ],
            correctIndex: 1,
            explanation:
              "strcpy(dest, src) copie la chaîne src DANS dest (en écrasant dest). Attention : dest doit être assez grand pour recevoir src.",
          },
        ],
      },
      {
        id: "faire",
        title: "Je sais faire",
        subtitle: "Manipuler les chaînes",
        blocks: [
          {
            kind: "error",
            title: "Erreur : tableau trop petit",
            bad: `char nom[4] = "Baba";`,
            good: `char nom[5] = "Baba";`,
            explanation:
              "\"Baba\" = 4 lettres + \\0 = 5 caractères. Il faut donc au moins 5 cases. Avec char[4], on déborde : le \\0 est écrit hors du tableau → bug.",
          },
          {
            kind: "error",
            title: "Erreur : comparer avec ==",
            bad: `if (nom == "Baba") { ... }`,
            good: `if (strcmp(nom, "Baba") == 0) { ... }`,
            explanation:
              "En C, `nom == \"Baba\"` compare les ADRESSES (qui sont différentes), pas le contenu. Pour comparer deux chaînes caractère par caractère, on utilise strcmp qui renvoie 0 si elles sont égales.",
          },
          {
            kind: "challenge",
            variant: "predict",
            prompt: "Que vaut strlen(\"Bonjour\") ?",
            accept: ["7"],
            hint: "strlen compte sans le \\0.",
            feedback:
              "strlen renvoie 7. \"Bonjour\" a 7 lettres (B-o-n-j-o-u-r). Le \\0 n'est PAS compté par strlen.",
          },
          {
            kind: "challenge",
            variant: "predict",
            prompt: "Quelle est la taille minimale du tableau pour stocker \"Bonjour\" ?",
            accept: ["8", "8 octets", "8 cases"],
            hint: "7 lettres + 1 pour \\0.",
            feedback:
              "Il faut 8 cases : 7 pour les lettres B-o-n-j-o-u-r + 1 pour le \\0. `char s[8] = \"Bonjour\";` est correct.",
          },
          {
            kind: "challenge",
            variant: "fill",
            prompt: "Complète : copier la chaîne source dans dest.",
            accept: ["strcpy(dest, source)", "strcpy(dest, source);", "strcpy(dest,src)", "strcpy(dest, src);"],
            hint: "Fonction de string.h : premier argument = destination, deuxième = source.",
            feedback:
              "On écrit `strcpy(dest, source);`. Note l'ordre : destination en premier. C'est une convention qui se retrouve dans beaucoup de fonctions C.",
          },
          {
            kind: "recap",
            title: "Bilan du chapitre 9",
            bullets: [
              { text: "Une chaîne C est un tableau de char terminé par \\0." },
              { text: "\"texte\" ajoute automatiquement le \\0 final." },
              { text: "%s affiche une chaîne (lit jusqu'au \\0)." },
              { text: "strlen(s) : longueur sans \\0. strcpy(d, s) : copie. strcat(d, s) : concatène. strcmp(a, b) : compare (0 = égales)." },
              { text: "Ne jamais comparer des chaînes avec ==, toujours avec strcmp." },
              { text: "Toujours prévoir une case pour le \\0 (taille = longueur + 1)." },
            ],
          },
          {
            kind: "quiz",
            question: "Combien de cases faut-il pour stocker \"C\" (une seule lettre) ?",
            options: ["1", "2", "3", "4"],
            correctIndex: 1,
            explanation:
              "2 cases : 1 pour la lettre 'C' + 1 pour le \\0. Même une seule lettre a besoin du caractère de fin. `char s[2] = \"C\";` est correct.",
          },
        ],
      },
    ],
  },

  // ============================================================
  // CHAPITRE 10 — LES STRUCTURES
  // ============================================================
  {
    id: 10,
    title: "Les structures",
    subtitle: "Regrouper des données différentes sous un même nom.",
    shortTitle: "Structures",
    icon: "Layers",
    keywords: ["struct", "structure", "champ", "membre", ".", "->", "typedef", "type composé"],
    goal: "Créer ses propres types pour regrouper plusieurs variables liées (ex: un étudiant = nom + âge + moyenne).",
    minutes: 16,
    levels: [
      {
        id: "comprendre",
        title: "Je comprends",
        subtitle: "Une fiche d'identité",
        blocks: [
          {
            kind: "story",
            eyebrow: "La situation",
            steps: [
              { text: "Tu veux gérer des étudiants : chacun a un nom, un âge, une moyenne." },
              { text: "Avec ce qu'on connaît : 3 tableaux séparés (noms[], ages[], moyennes[])." },
              { text: "Mais ça devient ingérable : si tu ajoutes un étudiant, tu dois mettre à jour 3 tableaux." },
              { text: "Idéal : une seule « fiche » par étudiant, qui contient les 3 infos." },
            ],
          },
          {
            kind: "analogy",
            real: {
              icon: "📋",
              title: "Une fiche d'étudiant",
              desc: "Une seule feuille avec : nom, âge, moyenne. On tient la fiche, on lit ce qu'on veut.",
            },
            code: {
              icon: "📦",
              title: "Une struct",
              desc: "Une variable qui contient plusieurs champs (nom, age, moyenne) regroupés sous un même type.",
            },
            link: "Une struct = un type personnalisé qui regroupe plusieurs variables.",
          },
          {
            kind: "vocab",
            terms: [
              { word: "struct", def: "Mot-clé pour définir un type composé de plusieurs champs." },
              { word: "Champ (membre)", def: "Une variable à l'intérieur de la struct. Ex: le champ age de Etudiant." },
              { word: ".", def: "Opérateur d'accès à un champ. `e.age` = le champ age de la variable e." },
              { word: "->", def: "Opérateur d'accès via un pointeur. `ptr->age` = `(*ptr).age`." },
              { word: "typedef", def: "Donne un nom court à un type. Ex: typedef struct { ... } Etudiant; permet d'écrire Etudiant au lieu de struct ... ." },
            ],
          },
          {
            kind: "visual",
            diagram: { type: "struct", name: "Etudiant", fields: [{ name: "nom", type: "char[20]" }, { name: "age", type: "int" }, { name: "moyenne", type: "float" }] },
            caption: "Une struct Etudiant contient 3 champs de types différents, regroupés dans une seule variable.",
          },
          {
            kind: "quiz",
            question: "Quel opérateur utilise-t-on pour accéder au champ age de la variable e (de type struct) ?",
            options: [".", "->", "::", "&"],
            correctIndex: 0,
            explanation:
              "On utilise le point : `e.age`. Si on a un pointeur p vers e, on utilise `p->age` (équivalent à `(*p).age`).",
          },
        ],
      },
      {
        id: "lire",
        title: "Je sais lire",
        subtitle: "Définir, déclarer, utiliser",
        blocks: [
          {
            kind: "codeWalk",
            filename: "struct.c",
            code: `#include <stdio.h>
#include <string.h>

struct Etudiant {
    char nom[20];
    int  age;
    float moyenne;
};

int main(void) {
    struct Etudiant e;

    strcpy(e.nom, "Baba");
    e.age = 20;
    e.moyenne = 15.5f;

    printf("%s, %d ans, moy=%.1f\\n",
           e.nom, e.age, e.moyenne);
    return 0;
}`,
            output: "Baba, 20 ans, moy=15.5",
            explanations: {
              4: "On définit le type struct Etudiant. Il a 3 champs : nom, age, moyenne.",
              11: "On déclare une variable e de type struct Etudiant.",
              13: "On remplit le champ nom avec strcpy (on ne peut pas faire e.nom = \"Baba\").",
              14: "On remplit le champ age avec .",
              15: "On remplit le champ moyenne.",
              17: "On accède aux champs avec e.nom, e.age, e.moyenne pour les afficher.",
            },
          },
          {
            kind: "codeWalk",
            filename: "typedef.c",
            code: `#include <stdio.h>

typedef struct {
    int x;
    int y;
} Point;

int main(void) {
    Point p = {3, 4};
    printf("Point (%d, %d)\\n", p.x, p.y);
    return 0;
}`,
            output: "Point (3, 4)",
            explanations: {
              3: "typedef + struct anonyme : on crée un type nommé Point (sans avoir à écrire struct Point).",
              4: "Champs x et y.",
              5: "Fin de la définition. Le nom Point vient APRÈS le }.",
              9: "On déclare p de type Point (plus besoin de \"struct\").",
              9: "{3, 4} initialise les champs dans l'ordre : x=3, y=4.",
              10: "On accède aux champs avec p.x et p.y.",
            },
          },
          {
            kind: "codeWalk",
            filename: "pointeur_struct.c",
            code: `#include <stdio.h>

typedef struct { int x; int y; } Point;

void deplacer(Point *p, int dx, int dy) {
    p->x += dx;
    p->y += dy;
}

int main(void) {
    Point p = {0, 0};
    deplacer(&p, 3, 5);
    printf("(%d, %d)\\n", p.x, p.y);
    return 0;
}`,
            output: "(3, 5)",
            explanations: {
              5: "La fonction prend un POINTEUR vers Point. Elle peut donc modifier le Point de l'appelant.",
              6: "p->x += dx : on accède au champ x via le pointeur. Équivalent à (*p).x.",
              7: "Idem pour y.",
              11: "On passe l'ADRESSE de p. La fonction peut modifier p.",
              12: "Après l'appel, p.x = 3 et p.y = 5. La fonction a bien modifié la struct de l'appelant.",
            },
          },
          {
            kind: "challenge",
            variant: "predict",
            prompt: "Que vaut p.x après ce code ?",
            code: `typedef struct { int x; int y; } P;
P p = {1, 2};
p.x = p.y + 5;`,
            accept: ["7", "p.x = 7"],
            hint: "p.y = 2. Donc p.x = 2 + 5 = ?",
            feedback:
              "p.x vaut 7. On a initialisé p avec x=1, y=2. Ensuite on met p.y + 5 dans p.x, c'est-à-dire 2 + 5 = 7.",
          },
          {
            kind: "quiz",
            question: "Que fait `p->x` (p étant un pointeur vers une struct) ?",
            options: [
              "Accède au champ x via le pointeur p",
              "Change p pour pointer vers x",
              "Compare p et x",
              "Crée un champ x",
            ],
            correctIndex: 0,
            explanation:
              "p->x est un raccourci pour (*p).x. Cela accède au champ x de la struct pointée par p. Très utile quand on a un pointeur sur struct.",
          },
        ],
      },
      {
        id: "faire",
        title: "Je sais faire",
        subtitle: "Structurer ses données",
        blocks: [
          {
            kind: "error",
            title: "Erreur : affecter une chaîne avec =",
            bad: `struct Etudiant e;
e.nom = "Baba";  // INTERDIT`,
            good: `struct Etudiant e;
strcpy(e.nom, "Baba");`,
            explanation:
              "On ne peut pas affecter une chaîne avec = en C (les tableaux ne sont pas assignables). Il faut utiliser strcpy. À l'initialisation seulement, on peut faire `struct Etudiant e = {.nom=\"Baba\", .age=20};`.",
          },
          {
            kind: "challenge",
            variant: "fill",
            prompt: "Complète : définis une struct Point avec deux champs int x et int y.",
            accept: ["struct Point { int x; int y; };", "struct Point{int x;int y;};", "struct Point { int x; int y; }"],
            hint: "struct + nom + { champs } + ;",
            feedback:
              "On écrit `struct Point { int x; int y; };`. Le ; final est OBLIGATOIRE (erreur fréquente de l'oublier).",
          },
          {
            kind: "challenge",
            variant: "predict",
            prompt: "Que vaut p.y après ce code ?",
            code: `typedef struct { int x; int y; } P;
P p = {10, 20};
P *ptr = &p;
ptr->y = 100;`,
            accept: ["100", "p.y = 100"],
            hint: "ptr pointe vers p. ptr->y modifie p.y.",
            feedback:
              "p.y vaut 100. ptr pointe vers p, donc ptr->y = 100 met 100 dans p.y. On a modifié la struct via son pointeur.",
          },
          {
            kind: "codeWalk",
            filename: "tableau_struct.c",
            code: `#include <stdio.h>

typedef struct {
    char nom[20];
    float moyenne;
} Etudiant;

int main(void) {
    Etudiant classe[3] = {
        {"Baba", 15.5f},
        {"Awa",  17.0f},
        {"Ali",  12.0f}
    };

    for (int i = 0; i < 3; i++) {
        printf("%s : %.1f\\n",
               classe[i].nom, classe[i].moyenne);
    }
    return 0;
}`,
            output: "Baba : 15.5\nAwa : 17.0\nAli : 12.0",
            explanations: {
              4: "On définit un type Etudiant (struct anonyme + typedef).",
              10: "On crée un TABLEAU de 3 Etudiant. Chaque case est une struct complète.",
              11: "Initialisation du tableau : chaque { ... } initialise une struct.",
              17: "On parcourt le tableau avec une boucle for.",
              18: "classe[i].nom : on accède au champ nom de la i-ème struct. classe[i] est une struct, .nom est son champ.",
            },
          },
          {
            kind: "recap",
            title: "Bilan du chapitre 10",
            bullets: [
              { text: "Une struct regroupe plusieurs champs de types différents sous un même nom." },
              { text: "Définition : `struct Nom { type champ; ... };` (le ; final est obligatoire)." },
              { text: "typedef permet de créer un nom court : `typedef struct { ... } Nom;`" },
              { text: "Accès au champ : `var.champ` (variable) ou `ptr->champ` (pointeur)." },
              { text: "Pour les chaînes, on ne peut pas utiliser = ; il faut strcpy." },
              { text: "On peut faire des tableaux de struct pour gérer des collections." },
            ],
          },
          {
            kind: "quiz",
            question: "Pourquoi utilise-t-on `p->x` plutôt que `p.x` quand p est un pointeur ?",
            options: [
              "Parce que p->x est plus rapide",
              "Parce que p.x ne compile pas sur un pointeur",
              "Parce que p->x est plus lisible",
              "Les deux sont identiques",
            ],
            correctIndex: 1,
            explanation:
              "Si p est un pointeur, p.x ne compile pas (p n'est pas une struct, c'est une adresse). On doit déréférencer : (*p).x, ou utiliser le raccourci p->x qui fait la même chose.",
          },
        ],
      },
    ],
  },

  // ============================================================
  // CHAPITRE 11 — L'ALLOCATION DYNAMIQUE
  // ============================================================
  {
    id: 11,
    title: "L'allocation dynamique",
    subtitle: "Demander de la mémoire au programme en cours d'exécution.",
    shortTitle: "Allocation",
    icon: "HardDrive",
    keywords: ["malloc", "calloc", "realloc", "free", "allocation dynamique", "heap", "tas", "sizeof", "fuite mémoire"],
    goal: "Allouer de la mémoire dont la taille n'est connue qu'à l'exécution, et la libérer correctement.",
    minutes: 18,
    levels: [
      {
        id: "comprendre",
        title: "Je comprends",
        subtitle: "Quand on ne connaît pas la taille à l'avance",
        blocks: [
          {
            kind: "story",
            eyebrow: "La situation",
            steps: [
              { text: "Tu demandes à l'utilisateur combien d'étudiants il veut gérer." },
              { text: "S'il répond 30, tu as besoin d'un tableau de 30 cases." },
              { text: "S'il répond 1000, tu as besoin de 1000 cases." },
              { text: "Comment faire un tableau dont la taille dépend de la réponse ? Impossible avec `int t[N];` classique." },
            ],
          },
          {
            kind: "analogy",
            real: {
              icon: "🏨",
              title: "Réserver des chambres",
              desc: "Tu appelles l'hôtel : « j'ai besoin de 30 chambres pour ce soir ». L'hôtel réserve et te donne les clés. À la fin, tu libères les chambres.",
            },
            code: {
              icon: "💾",
              title: "malloc et free",
              desc: "Tu demandes à l'OS : « donne-moi 30 cases mémoire ». malloc te renvoie l'adresse. Quand tu n'en as plus besoin, free() les libère.",
            },
            link: "malloc = réserver. free = libérer. Entre les deux, tu utilises la mémoire.",
          },
          {
            kind: "vocab",
            terms: [
              { word: "Tas (heap)", def: "La zone de mémoire gérée par malloc/free. À opposer à la pile (stack), qui gère les variables locales." },
              { word: "malloc(size)", def: "Demande `size` octets au système. Renvoie l'adresse du bloc (ou NULL si échec)." },
              { word: "free(ptr)", def: "Libère le bloc pointé par ptr. À appeler quand tu n'as plus besoin de la mémoire." },
              { word: "sizeof(type)", def: "Donne la taille en octets d'un type. Ex: sizeof(int) = 4. Indispensable pour allouer la bonne quantité." },
              { word: "Fuite mémoire", def: "Quand on oublie de free() un bloc alloué. La mémoire reste occupée jusqu'à la fin du programme. Bug grave." },
              { word: "Pointeur pendant", def: "Un pointeur qui pointe vers un bloc libéré. L'utiliser provoque un comportement indéfini." },
            ],
          },
          {
            kind: "visual",
            diagram: { type: "malloc" },
            caption: "malloc réserve sur le tas. free libère. Sans free, la mémoire reste occupée.",
          },
          {
            kind: "visual",
            diagram: {
              type: "memoryMap",
              regions: [
                { name: "Code", desc: "Le programme compilé (read-only)", tone: "code" },
                { name: "Globales", desc: "Variables globales et static", tone: "global" },
                { name: "Tas (Heap)", desc: "malloc / calloc / free — c'est TOI qui gères", tone: "heap" },
                { name: "Pile (Stack)", desc: "Variables locales, appels de fonction — automatique", tone: "stack" },
              ],
            },
            caption: "La mémoire est découpée en 4 zones. malloc travaille sur le TAS. Tes variables locales vivent sur la PILE.",
          },
          {
            kind: "visual",
            diagram: { type: "stackVsHeap", title: "Pile vs Tas : les deux mondes" },
            caption: "La pile est petite et auto-gérée. Le tas est grand mais c'est TOI qui le gères avec malloc/free.",
          },
          {
            kind: "buildUp",
            title: "Le cycle de vie malloc → free",
            intro: "Avance pas à pas pour voir la mémoire évoluer.",
            steps: [
              {
                kind: "narration",
                caption: "Au départ, le tas est vide. Le programme n'a rien demandé.",
              },
              {
                kind: "code",
                caption: "On écrit `int *tab = malloc(3 * sizeof(int));`. On demande 12 octets (3 ints) au système.",
                code: `int *tab = malloc(3 * sizeof(int));`,
                activeLines: [1],
              },
              {
                kind: "narration",
                caption: "malloc trouve 12 octets libres dans le tas, et renvoie l'adresse du début du bloc. tab contient maintenant cette adresse.",
              },
              {
                kind: "code",
                caption: "On remplit les 3 cases : tab[0]=10, tab[1]=20, tab[2]=30.",
                code: `int *tab = malloc(3 * sizeof(int));
tab[0] = 10;
tab[1] = 20;
tab[2] = 30;`,
                activeLines: [2, 3, 4],
              },
              {
                kind: "narration",
                caption: "Le bloc est utilisé. Tant qu'on ne libère pas, ces 12 octets restent réservés pour nous.",
              },
              {
                kind: "code",
                caption: "Quand on n'a plus besoin de tab, on appelle `free(tab);`. Le système récupère les 12 octets.",
                code: `int *tab = malloc(3 * sizeof(int));
// ... on utilise tab ...
free(tab);   // ← on libère !
tab = NULL;  // bonne pratique`,
                activeLines: [3, 4],
              },
              {
                kind: "narration",
                caption: "C'est fait. La mémoire est rendue au système. Si on oubliait free → fuite mémoire (le bloc resterait occupé jusqu'à la fin du programme).",
              },
            ],
          },
          {
            kind: "reveal",
            label: "Pourquoi ne pas toujours utiliser malloc ?",
            hint: "Clique pour révéler",
            content:
              "1) malloc est plus lent que la déclaration classique. 2) Il faut penser à free, sinon fuite mémoire. 3) La mémoire n'est pas initialisée (garbage). 4) Risque de pointeurs pendants. Règle : on utilise les tableaux classiques quand la taille est connue à la compilation, et malloc seulement quand la taille est dynamique.",
          },
          {
            kind: "quiz",
            question: "Que fait `free(ptr)` ?",
            options: [
              "Alloue de la mémoire",
              "Libère la mémoire allouée par malloc",
              "Met ptr à NULL",
              "Efface les données",
            ],
            correctIndex: 1,
            explanation:
              "free(ptr) dit au système : « je n'ai plus besoin de ce bloc, tu peux le réutiliser ». ptr n'est PAS mis à NULL automatiquement (il devient un pointeur pendant si on l'utilise).",
          },
        ],
      },
      {
        id: "lire",
        title: "Je sais lire",
        subtitle: "malloc / free en pratique",
        blocks: [
          {
            kind: "codeWalk",
            filename: "malloc.c",
            code: `#include <stdio.h>
#include <stdlib.h>

int main(void) {
    int n;
    printf("Combien d'entiers ? ");
    scanf("%d", &n);

    int *tab = malloc(n * sizeof(int));
    if (tab == NULL) {
        printf("Echec de l'allocation\\n");
        return 1;
    }

    for (int i = 0; i < n; i++) {
        tab[i] = i * i;
    }

    for (int i = 0; i < n; i++) {
        printf("%d ", tab[i]);
    }
    printf("\\n");

    free(tab);
    return 0;
}`,
            output: "Combien d'entiers ? 5\n0 1 4 9 16 ",
            explanations: {
              2: "stdlib.h contient malloc et free.",
              6: "On demande à l'utilisateur combien d'entiers il veut. La taille est connue à l'EXÉCUTION.",
              9: "malloc(n * sizeof(int)) : on demande n * 4 octets. On stocke l'adresse dans tab.",
              10: "VÉRIFICATION OBLIGATOIRE : malloc peut échouer (renvoyer NULL) si pas assez de mémoire.",
              11: "On sort proprement avec un code d'erreur (1) si l'allocation échoue.",
              15: "On utilise tab comme un tableau normal : tab[i] = ...",
              20: "On affiche le contenu.",
              24: "free(tab) libère la mémoire. À NE JAMAIS OUBLIER.",
            },
          },
          {
            kind: "reveal",
            label: "Pourquoi multiplier par sizeof(int) ?",
            hint: "Clique pour révéler",
            content:
              "malloc prend des OCTETS en paramètre. Un int = 4 octets. Si tu veux 5 int, il faut 5 * 4 = 20 octets. sizeof(int) = 4, donc 5 * sizeof(int) = 20. Écrire `5 * 4` fonctionnerait mais serait moins portable (sur d'autres machines, int peut faire 2 ou 8 octets). sizeof s'adapte automatiquement.",
          },
          {
            kind: "codeWalk",
            filename: "calloc.c",
            code: `#include <stdio.h>
#include <stdlib.h>

int main(void) {
    int *tab = calloc(10, sizeof(int));
    if (tab == NULL) return 1;

    printf("%d %d %d\\n", tab[0], tab[1], tab[9]);
    free(tab);
    return 0;
}`,
            output: "0 0 0",
            explanations: {
              5: "calloc(10, sizeof(int)) alloue 10 int ET les met à 0. Contrairement à malloc qui laisse du garbage.",
              6: "Vérification, comme pour malloc.",
              8: "Les cases sont à 0 : calloc initialise la mémoire.",
              9: "free : on libère.",
            },
          },
          {
            kind: "challenge",
            variant: "predict",
            prompt: "Que contient `tab[0]` juste après `malloc(4 * sizeof(int));` (sans rien mettre dedans) ?",
            accept: ["n'importe quoi", "garbage", "indéterminé", "valeur inconnue", "aléatoire"],
            hint: "malloc n'initialise PAS la mémoire.",
            feedback:
              "Une valeur quelconque (garbage). malloc réserve la mémoire mais ne l'efface pas. calloc, lui, met tout à 0.",
          },
          {
            kind: "quiz",
            question: "Quel est le rôle de `sizeof(int)` dans `malloc(5 * sizeof(int))` ?",
            options: [
              "Compter le nombre d'éléments",
              "Donner la taille en octets d'un int pour allouer la bonne quantité",
              "Initialiser à 0",
              "Libérer la mémoire",
            ],
            correctIndex: 1,
            explanation:
              "malloc prend des OCTETS. sizeof(int) = 4 (sur la plupart des machines). 5 * 4 = 20 octets pour stocker 5 int. Sans sizeof, on allouerait la mauvaise taille.",
          },
        ],
      },
      {
        id: "faire",
        title: "Je sais faire",
        subtitle: "Allouer et libérer correctement",
        blocks: [
          {
            kind: "error",
            title: "Erreur : oublier free (fuite mémoire)",
            bad: `int *p = malloc(100 * sizeof(int));
// ... on utilise p ...
// on oublie free(p);`,
            good: `int *p = malloc(100 * sizeof(int));
// ... on utilise p ...
free(p);`,
            explanation:
              "Sans free, la mémoire reste occupée jusqu'à la fin du programme. Sur un petit programme, on ne voit rien. Sur un programme long (serveur, jeu), la mémoire grossit jusqu'à saturer la machine. Règle d'or : un malloc = un free.",
          },
          {
            kind: "error",
            title: "Erreur : double free",
            bad: `int *p = malloc(10 * sizeof(int));
free(p);
free(p);  // CRASH`,
            good: `int *p = malloc(10 * sizeof(int));
free(p);
p = NULL;   // bonne pratique
// free(p) maintenant n'a aucun effet`,
            explanation:
              "Free deux fois le même bloc provoque un crash (undefined behavior). Solution : après free, mettre p = NULL. free(NULL) est inoffensif, donc double-free devient impossible.",
          },
          {
            kind: "error",
            title: "Erreur : pointeur pendant",
            bad: `int *p = malloc(sizeof(int));
int *q = p;
free(p);
*q = 5;   // q pointe vers une zone libérée !`,
            good: `int *p = malloc(sizeof(int));
int *q = p;
free(p);
p = NULL;
q = NULL;  // plus aucun pointeur vers la zone libérée`,
            explanation:
              "Après free(p), q pointe vers une zone libérée. *q = 5 écrit dans une mémoire qui ne t'appartient plus → comportement indéfini. Solution : mettre à NULL tous les pointeurs qui pointaient vers le bloc.",
          },
          {
            kind: "challenge",
            variant: "fill",
            prompt: "Complète : alloue un tableau de n int via malloc.",
            accept: ["int *tab = malloc(n * sizeof(int));", "int *tab=malloc(n*sizeof(int));", "int* tab = malloc(n * sizeof(int));"],
            hint: "malloc prend des octets. Pour n int : n * sizeof(int).",
            feedback:
              "On écrit `int *tab = malloc(n * sizeof(int));`. On n'oublie pas de vérifier `if (tab == NULL)` ensuite, et de free(tab) à la fin.",
          },
          {
            kind: "challenge",
            variant: "predict",
            prompt: "Que se passe-t-il si on appelle malloc et qu'il n'y a plus de mémoire disponible ?",
            accept: ["NULL", "retourne NULL", "Renvoie NULL", "renvoie null", "il renvoie NULL"],
            hint: "malloc peut échouer.",
            feedback:
              "malloc renvoie NULL. C'est pour ça qu'il faut TOUJOURS vérifier : `if (ptr == NULL) { /* gérer l'erreur */ }`. Ne pas le faire provoque un crash au premier *ptr.",
          },
          {
            kind: "codeWalk",
            filename: "realloc.c",
            code: `#include <stdio.h>
#include <stdlib.h>

int main(void) {
    int *tab = malloc(3 * sizeof(int));
    tab[0] = 10; tab[1] = 20; tab[2] = 30;

    // On veut 5 cases au lieu de 3
    tab = realloc(tab, 5 * sizeof(int));
    tab[3] = 40;
    tab[4] = 50;

    for (int i = 0; i < 5; i++)
        printf("%d ", tab[i]);
    printf("\\n");

    free(tab);
    return 0;
}`,
            output: "10 20 30 40 50 ",
            explanations: {
              5: "On alloue 3 int au départ.",
              9: "realloc agrandit (ou réduit) le bloc. Les anciennes valeurs sont conservées.",
              9: "ATTENTION : si realloc échoue, il renvoie NULL mais NE LIBÈRE PAS l'ancien bloc. On devrait utiliser un pointeur temporaire pour gérer ce cas en production.",
              10: "On remplit les 2 nouvelles cases.",
              12: "On affiche tout : les 3 anciennes valeurs + les 2 nouvelles.",
              15: "free final : un seul malloc, un seul free.",
            },
          },
          {
            kind: "recap",
            title: "Bilan du chapitre 11",
            bullets: [
              { text: "malloc(n * sizeof(type)) : alloue n éléments. Renvoie un pointeur (ou NULL)." },
              { text: "calloc(n, sizeof(type)) : comme malloc mais met à 0." },
              { text: "realloc(ptr, nouvelle_taille) : redimensionne un bloc." },
              { text: "free(ptr) : libère le bloc. OBLIGATOIRE pour chaque malloc." },
              { text: "Toujours vérifier `if (ptr == NULL)` après malloc." },
              { text: "Après free, mettre ptr = NULL pour éviter double-free et pointeurs pendants." },
              { text: "1 malloc = 1 free. Ne pas libérer = fuite mémoire. Libérer 2 fois = crash." },
            ],
          },
          {
            kind: "quiz",
            question: "Que se passe-t-il si on oublie d'appeler free sur un bloc alloué par malloc ?",
            options: [
              "Le programme plante immédiatement",
              "Le compilateur refuse de compiler",
              "Fuite mémoire : la mémoire reste occupée",
              "Rien du tout",
            ],
            correctIndex: 2,
            explanation:
              "C'est une fuite mémoire. Sur un petit programme, on ne voit rien. Sur un programme long, la mémoire s'accumule jusqu'à saturer la machine. C'est un bug grave et silencieux.",
          },
        ],
      },
    ],
  },

  // ============================================================
  // CHAPITRE 12 — LES FICHIERS
  // ============================================================
  {
    id: 12,
    title: "Les fichiers",
    subtitle: "Lire et écrire sur le disque dur.",
    shortTitle: "Fichiers",
    icon: "FileText",
    keywords: ["fichier", "fopen", "fclose", "fread", "fwrite", "fprintf", "fscanf", "FILE", "fgets", "mode"],
    goal: "Ouvrir, lire, écrire et fermer un fichier en C.",
    minutes: 17,
    levels: [
      {
        id: "comprendre",
        title: "Je comprends",
        subtitle: "Toujours 3 étapes",
        blocks: [
          {
            kind: "story",
            eyebrow: "La situation",
            steps: [
              { text: "Tu veux sauvegarder les scores d'un jeu pour les retrouver au prochain lancement." },
              { text: "Les variables disparaissent à la fin du programme. La mémoire se vide." },
              { text: "Pour garder des données, il faut les écrire sur le disque dur, dans un fichier." },
              { text: "Et pour les retrouver, il faut lire ce fichier." },
            ],
          },
          {
            kind: "analogy",
            real: {
              icon: "📁",
              title: "Un classeur physique",
              desc: "Pour y travailler : ouvrir le classeur → lire/écrire des feuilles → refermer le classeur.",
            },
            code: {
              icon: "💾",
              title: "Un fichier C",
              desc: "fopen pour l'ouvrir → fprintf / fscanf pour écrire/lire → fclose pour le fermer. Toujours ces 3 étapes.",
            },
            link: "fopen → lire/écrire → fclose. Comme un classeur physique.",
          },
          {
            kind: "vocab",
            terms: [
              { word: "FILE*", def: "Le type « pointeur vers fichier ». Représente un fichier ouvert. On l'obtient de fopen." },
              { word: "fopen(nom, mode)", def: "Ouvre un fichier. mode = \"r\" (lecture), \"w\" (écriture, écrase), \"a\" (ajout). Renvoie NULL si échec." },
              { word: "fclose(f)", def: "Ferme le fichier. Sauvegarde les dernières écritures. OBLIGATOIRE à la fin." },
              { word: "fprintf(f, ...)", def: "Comme printf, mais écrit dans le fichier f au lieu de l'écran." },
              { word: "fscanf(f, ...)", def: "Comme scanf, mais lit depuis le fichier f au lieu du clavier." },
              { word: "fgets(s, n, f)", def: "Lit une ligne du fichier f (au max n-1 caractères). Plus sûre que fscanf pour les chaînes." },
            ],
          },
          {
            kind: "visual",
            diagram: { type: "files3", steps: [{ name: "fopen()", desc: "Ouvrir" }, { name: "Lire/Écrire", desc: "fprintf, fscanf, fgets…" }, { name: "fclose()", desc: "Fermer" }] },
            caption: "3 étapes : ouvrir, travailler, fermer. Toujours dans cet ordre.",
          },
          {
            kind: "reveal",
            label: "Que se passe-t-il si on oublie fclose ?",
            hint: "Clique pour révéler",
            content:
              "1) Les dernières écritures peuvent être perdues (le système bufferise). 2) Le fichier reste « verrouillé » : d'autres programmes ne peuvent pas l'ouvrir. 3) Fuite de ressource : on épuise le nombre max de fichiers ouverts. Règle : un fopen = un fclose. Toujours.",
          },
          {
            kind: "quiz",
            question: "Quelle fonction ouvre un fichier en C ?",
            options: ["open()", "fopen()", "read()", "file()"],
            correctIndex: 1,
            explanation:
              "fopen() ouvre un fichier et renvoie un FILE*. Toujours vérifier que le retour n'est pas NULL (fichier introuvable, droits insuffisants, disque plein).",
          },
        ],
      },
      {
        id: "lire",
        title: "Je sais lire",
        subtitle: "Écrire et lire dans un fichier",
        blocks: [
          {
            kind: "codeWalk",
            filename: "ecrire.c",
            code: `#include <stdio.h>

int main(void) {
    FILE *f = fopen("notes.txt", "w");
    if (f == NULL) {
        printf("Impossible d'ouvrir le fichier\\n");
        return 1;
    }

    fprintf(f, "Baba 15\\n");
    fprintf(f, "Awa  17\\n");
    fprintf(f, "Ali  12\\n");

    fclose(f);
    printf("Fichier cree.\\n");
    return 0;
}`,
            output: "Fichier cree.",
            explanations: {
              4: "fopen ouvre notes.txt en mode \"w\" (write = écriture, écrase si existe). Renvoie un FILE*.",
              5: "VÉRIFICATION OBLIGATOIRE : si le fichier ne peut être ouvert, fopen renvoie NULL.",
              9: "fprintf écrit dans le fichier (comme printf, mais avec le FILE* en premier).",
              13: "fclose ferme le fichier. Les dernières écritures sont sauvegardées sur le disque.",
            },
          },
          {
            kind: "codeWalk",
            filename: "lire.c",
            code: `#include <stdio.h>

int main(void) {
    FILE *f = fopen("notes.txt", "r");
    if (f == NULL) {
        printf("Fichier introuvable\\n");
        return 1;
    }

    char nom[20];
    int note;
    while (fscanf(f, "%s %d", nom, &note) == 2) {
        printf("%s a eu %d\\n", nom, note);
    }

    fclose(f);
    return 0;
}`,
            output: "Baba a eu 15\nAwa a eu 17\nAli a eu 12",
            explanations: {
              4: "Mode \"r\" (read = lecture). Le fichier doit exister, sinon fopen renvoie NULL.",
              5: "Vérification, comme pour l'écriture.",
              10: "On déclare des variables pour stocker ce qu'on va lire.",
              12: "fscanf lit depuis le fichier. Renvoie le nombre d'éléments lus (ici 2 : une chaîne + un int).",
              12: "On boucle TANT QUE fscanf arrive à lire 2 éléments. Quand on atteint la fin du fichier, fscanf renvoie EOF (≠ 2), on sort.",
              15: "fclose ferme. Toujours fermer ce qu'on a ouvert.",
            },
          },
          {
            kind: "reveal",
            label: "Que fait le mode \"a\" (append) ?",
            hint: "Clique pour révéler",
            content:
              "Le mode \"a\" (ajout) ouvre le fichier en écriture SANS l'écraser. Les nouvelles écritures sont ajoutées à la fin. Idéal pour un fichier de logs. Si le fichier n'existe pas, il est créé. À comparer : \"w\" écrase, \"a\" ajoute.",
          },
          {
            kind: "challenge",
            variant: "predict",
            prompt: "Que fait fopen(\"data.txt\", \"w\") si data.txt existe déjà ?",
            accept: ["écrase", "Écrase", "il l'écrase", "efface le contenu", "vide"],
            hint: "Le mode w = write = écrire.",
            feedback:
              "fopen avec \"w\" ÉCRASE le fichier existant (son contenu est perdu). Si tu veux ajouter sans écraser, utilise \"a\" (append).",
          },
          {
            kind: "quiz",
            question: "Que renvoie fopen quand il échoue (fichier introuvable) ?",
            options: ["-1", "0", "NULL", "EOF"],
            correctIndex: 2,
            explanation:
              "fopen renvoie NULL en cas d'échec. Toujours tester : `if (f == NULL) { /* gérer l'erreur */ }`. Ne jamais utiliser un FILE* sans vérifier.",
          },
        ],
      },
      {
        id: "faire",
        title: "Je sais faire",
        subtitle: "Bonnes pratiques et pièges",
        blocks: [
          {
            kind: "error",
            title: "Erreur : oublier de vérifier fopen",
            bad: `FILE *f = fopen("data.txt", "r");
fscanf(f, "%d", &n);  // CRASH si f est NULL`,
            good: `FILE *f = fopen("data.txt", "r");
if (f == NULL) {
    printf("Erreur d'ouverture\\n");
    return 1;
}
fscanf(f, "%d", &n);`,
            explanation:
              "Si fopen échoue, f est NULL. fscanf(NULL, ...) provoque un crash immédiat (segfault). Toujours vérifier `if (f == NULL)` avant d'utiliser le fichier.",
          },
          {
            kind: "error",
            title: "Erreur : oublier fclose",
            bad: `FILE *f = fopen("log.txt", "w");
fprintf(f, "debut\\n");
// on oublie fclose(f)
return 0;`,
            good: `FILE *f = fopen("log.txt", "w");
fprintf(f, "debut\\n");
fclose(f);
return 0;`,
            explanation:
              "Sans fclose, les dernières écritures peuvent être perdues (le système bufferise) et le fichier reste verrouillé. Toujours fermer ce qu'on a ouvert.",
          },
          {
            kind: "challenge",
            variant: "fill",
            prompt: "Complète : ouvre le fichier \"data.txt\" en lecture.",
            accept: ["fopen(\"data.txt\", \"r\")", "fopen(\"data.txt\",\"r\")", "fopen(\"data.txt\", \"r\");", "fopen(\"data.txt\",\"r\");"],
            hint: "fopen(nom, mode). Le mode lecture est \"r\".",
            feedback:
              "On écrit `fopen(\"data.txt\", \"r\")`. Le mode \"r\" = read (lecture). Le fichier doit exister, sinon fopen renvoie NULL.",
          },
          {
            kind: "challenge",
            variant: "predict",
            prompt: "Que vaut `f` après `FILE *f = fopen(\"introuvable.txt\", \"r\");` ?",
            accept: ["NULL", "null", "f = NULL"],
            hint: "Si le fichier n'existe pas, fopen échoue.",
            feedback:
              "f vaut NULL. fopen renvoie NULL quand le fichier n'existe pas (en mode \"r\"). D'où l'importance de toujours vérifier.",
          },
          {
            kind: "codeWalk",
            filename: "lignes.c",
            code: `#include <stdio.h>

int main(void) {
    FILE *f = fopen("poeme.txt", "r");
    if (f == NULL) return 1;

    char ligne[100];
    int num = 0;
    while (fgets(ligne, 100, f) != NULL) {
        num++;
        printf("%d: %s", num, ligne);
    }

    fclose(f);
    return 0;
}`,
            output: "1: Première ligne du poème\n2: Deuxième ligne\n3: Dernière ligne",
            explanations: {
              5: "On ouvre en lecture.",
              9: "fgets lit une ligne complète (jusqu'au \\n inclus). Plus sûre que fscanf pour les lignes.",
              9: "Le 2e paramètre (100) est la taille max : fgets ne lira pas plus de 99 caractères.",
              9: "fgets renvoie NULL à la fin du fichier → on sort de la boucle.",
              10: "On compte les lignes.",
              11: "On affiche la ligne. Pas besoin de \\n : fgets l'a conservé.",
            },
          },
          {
            kind: "recap",
            title: "Bilan du chapitre 12",
            bullets: [
              { text: "Toujours 3 étapes : fopen → lire/écrire → fclose." },
              { text: "fopen(nom, mode) : mode = \"r\" (lecture), \"w\" (écriture, écrase), \"a\" (ajout)." },
              { text: "Toujours vérifier `if (f == NULL)` après fopen." },
              { text: "fprintf(f, ...) pour écrire, fscanf(f, ...) pour lire, fgets pour lire une ligne." },
              { text: "fclose est obligatoire : sans lui, fuite de ressource et données perdues." },
              { text: "1 fopen = 1 fclose. Règle d'or." },
            ],
          },
          {
            kind: "quiz",
            question: "Quel mode de fopen permet d'ajouter à la fin d'un fichier sans l'écraser ?",
            options: ["\"r\"", "\"w\"", "\"a\"", "\"rw\""],
            correctIndex: 2,
            explanation:
              "Le mode \"a\" (append) ajoute à la fin sans écraser. \"w\" écrase, \"r\" lit seulement. \"a\" crée le fichier s'il n'existe pas.",
          },
        ],
      },
    ],
  },

  // ============================================================
  // CHAPITRE 13 — LA MODULARITÉ
  // ============================================================
  {
    id: 13,
    title: "La modularité",
    subtitle: "Découper son programme en plusieurs fichiers.",
    shortTitle: "Modularité",
    icon: "FolderTree",
    keywords: ["modularité", ".h", ".c", "include", "header", "prototype", "#ifndef", "garde", "compilation séparée", "makefile"],
    goal: "Organiser un programme en plusieurs fichiers .c et .h pour le rendre lisible et réutilisable.",
    minutes: 15,
    levels: [
      {
        id: "comprendre",
        title: "Je comprends",
        subtitle: "Un fichier par module",
        blocks: [
          {
            kind: "story",
            eyebrow: "La situation",
            steps: [
              { text: "Ton programme grossit : 500 lignes, 1000, 5000…" },
              { text: "Tout dans un seul fichier devient ingérable : difficile de trouver une fonction, de collaborer." },
              { text: "Solution : découper en modules. Un module = un sujet (ex: mathématiques, entrées/sorties, réseau)." },
              { text: "Chaque module est composé d'un fichier .c (le code) et d'un fichier .h (l'interface)." },
            ],
          },
          {
            kind: "analogy",
            real: {
              icon: "📚",
              title: "Une bibliothèque",
              desc: "Tu as un catalogue (l'interface : quels livres existent) et les étagères (le code : où sont les livres).",
            },
            code: {
              icon: "📄",
              title: "Un module C",
              desc: "Le .h est le catalogue (les prototypes), le .c est l'implémentation (le code des fonctions).",
            },
            link: ".h = ce que le module OFFRE. .c = COMMENT il le fait.",
          },
          {
            kind: "vocab",
            terms: [
              { word: ".h (header)", def: "Le fichier d'en-tête. Contient les prototypes de fonctions, les types, les constantes. C'est l'INTERFACE du module." },
              { word: ".c", def: "Le fichier source. Contient le CODE des fonctions. C'est l'IMPLÉMENTATION." },
              { word: "#include", def: "Inclut un fichier .h dans un .c. Comme dire « je veux utiliser ce module »." },
              { word: "Prototype", def: "La signature d'une fonction sans son corps. Ex: `int carre(int);` (avec un ; au lieu du corps)." },
              { word: "Garde d'inclusion", def: "Les #ifndef / #define / #endif dans un .h pour éviter qu'il soit inclus plusieurs fois." },
            ],
          },
          {
            kind: "visual",
            diagram: { type: "modules", files: [{ name: "math.h", desc: " prototypes : int carre(int);" }, { name: "math.c", desc: "implémentation : int carre(int a) { return a*a; }" }, { name: "main.c", desc: "#include \"math.h\" → peut appeler carre(5)" }] },
            caption: "Le .h annonce. Le .c implémente. Le main.c inclut le .h pour utiliser les fonctions.",
          },
          {
            kind: "reveal",
            label: "Pourquoi des gardes d'inclusion (#ifndef) ?",
            hint: "Clique pour révéler",
            content:
              "Si deux fichiers .c incluent le même .h, et qu'un troisième .h inclut aussi ce .h, le compilateur risque de voir les déclarations DEUX FOIS → erreur de redéfinition. Les gardes (#ifndef MATH_H / #define MATH_H / ... / #endif) disent : « si déjà inclus, ne pas ré-inclure ». C'est standard et obligatoire.",
          },
          {
            kind: "quiz",
            question: "À quoi sert le fichier .h d'un module ?",
            options: [
              "Contient le code des fonctions",
              "Contient les prototypes (interface) du module",
              "Compile le module",
              "Exécute le module",
            ],
            correctIndex: 1,
            explanation:
              "Le .h contient les PROTOTYPES : les signatures des fonctions sans leur corps. C'est l'interface publique du module. Le .c contient l'implémentation.",
          },
        ],
      },
      {
        id: "lire",
        title: "Je sais lire",
        subtitle: "Un module concret",
        blocks: [
          {
            kind: "codeWalk",
            filename: "math.h",
            code: `#ifndef MATH_H
#define MATH_H

int carre(int a);
int cube(int a);

#endif`,
            explanations: {
              1: "#ifndef MATH_H : si MATH_H n'est PAS défini, on continue. Sinon, on saute tout jusqu'au #endif.",
              2: "#define MATH_H : on définit MATH_H. Comme ça, si on inclut math.h une 2e fois, le #ifndef échouera et on sautera.",
              4: "Prototype de carre : type de retour + nom + (paramètres) + ;. Pas de corps.",
              5: "Prototype de cube.",
              7: "#endif ferme le #ifndef. C'est la garde d'inclusion.",
            },
          },
          {
            kind: "codeWalk",
            filename: "math.c",
            code: `#include "math.h"

int carre(int a) {
    return a * a;
}

int cube(int a) {
    return a * a * a;
}`,
            explanations: {
              1: "On inclut notre propre .h (avec \" \", pas < >, car c'est un fichier local).",
              3: "Implémentation de carre. Le corps de la fonction.",
              7: "Implémentation de cube.",
            },
          },
          {
            kind: "codeWalk",
            filename: "main.c",
            code: `#include <stdio.h>
#include "math.h"

int main(void) {
    printf("carre(5) = %d\\n", carre(5));
    printf("cube(3)  = %d\\n", cube(3));
    return 0;
}`,
            output: "carre(5) = 25\ncube(3)  = 27",
            explanations: {
              1: "On inclut stdio.h pour printf (entre < > car c'est un fichier système).",
              2: "On inclut math.h (entre \" \" car c'est un fichier local). Maintenant on connaît carre et cube.",
              5: "On appelle carre(5) comme si elle était définie ici. Le compilateur fait le lien.",
              6: "On appelle cube(3).",
            },
          },
          {
            kind: "codeWalk",
            filename: "Terminal — Compilation",
            code: `gcc -c math.c -o math.o
gcc -c main.c -o main.o
gcc math.o main.o -o programme
./programme`,
            output: "carre(5) = 25\ncube(3)  = 27",
            explanations: {
              1: "gcc -c compile math.c SANS produire d'exécutable. On obtient math.o (objet).",
              2: "Idem pour main.c → main.o.",
              3: "On LIE les fichiers objets pour produire l'exécutable. C'est l'édition de liens.",
              4: "On exécute.",
            },
          },
          {
            kind: "challenge",
            variant: "predict",
            prompt: "Que se passe-t-il si on oublie d'inclure math.h dans main.c ?",
            accept: ["erreur", "Erreur", "ne compile pas", "compile pas", "implicit declaration"],
            hint: "Le compilateur ne connaîtra pas carre et cube.",
            feedback:
              "Le compilateur affiche « implicit declaration of function 'carre' » ou une erreur. Il ne connaît pas la fonction. Solution : inclure math.h.",
          },
          {
            kind: "quiz",
            question: "Pourquoi utilise-t-on `#include \"math.h\"` (avec guillemets) plutôt que `#include <math.h>` ?",
            options: [
              "Les deux sont identiques",
              "Les guillemets cherchent d'abord dans le dossier courant, < > dans les bibliothèques système",
              "Les guillemets sont plus rapides",
              "< > ne fonctionne qu'avec stdio.h",
            ],
            correctIndex: 1,
            explanation:
              "Convention : \" \" pour tes propres fichiers .h (cherchés d'abord dans le dossier courant), < > pour les bibliothèques standard (stdio.h, stdlib.h…). C'est une convention de chemin de recherche.",
          },
        ],
      },
      {
        id: "faire",
        title: "Je sais faire",
        subtitle: "Écrire un module propre",
        blocks: [
          {
            kind: "error",
            title: "Erreur : oublier les gardes d'inclusion",
            bad: `// math.h sans gardes
int carre(int a);`,
            good: `#ifndef MATH_H
#define MATH_H
int carre(int a);
#endif`,
            explanation:
              "Sans gardes, si math.h est inclus plusieurs fois (directement ou indirectement), le compilateur verra le prototype 2 fois → erreur de redéfinition. Les gardes (#ifndef / #define / #endif) empêchent cela.",
          },
          {
            kind: "challenge",
            variant: "fill",
            prompt: "Complète la garde d'inclusion pour un fichier « utils.h ».",
            accept: ["#ifndef UTILS_H\n#define UTILS_H", "#ifndef UTILS_H #define UTILS_H", "#ifndef UTILS_H\\n#define UTILS_H"],
            hint: "#ifndef + nom_en_majuscules + _H, puis #define le même nom.",
            feedback:
              "On écrit : `#ifndef UTILS_H` puis `#define UTILS_H`. Convention : nom du fichier en majuscules, _H à la fin. Le #endif va à la toute fin du fichier.",
          },
          {
            kind: "challenge",
            variant: "predict",
            prompt: "Que se passe-t-il si on définit carre() dans main.c ET dans math.c ?",
            accept: ["erreur", "Erreur", "multiple definition", "définition multiple", "linker error"],
            hint: "Deux définitions de la même fonction = ?",
            feedback:
              "Erreur de « multiple definition » au moment de l'édition de liens (linker). Chaque fonction ne doit être définie qu'UNE SEULE FOIS dans tout le programme. Les prototypes peuvent être répétés (via le .h), pas les définitions.",
          },
          {
            kind: "codeWalk",
            filename: "Makefile",
            code: `programme: main.o math.o
\tgcc main.o math.o -o programme

main.o: main.c math.h
\tgcc -c main.c -o main.o

math.o: math.c math.h
\tgcc -c math.c -o math.o

clean:
\trm -f *.o programme`,
            explanations: {
              1: "Cible principale : on veut produire 'programme'. Il dépend de main.o et math.o.",
              2: "Commande pour lier les .o en exécutable. La ligne DOIT commencer par une TAB (pas des espaces).",
              4: "Cible main.o : dépend de main.c et math.h. Si l'un change, on recompile.",
              7: "Idem pour math.o.",
              10: "Cible clean : pour nettoyer les fichiers générés. On l'appelle avec `make clean`.",
            },
          },
          {
            kind: "recap",
            title: "Bilan du chapitre 13",
            bullets: [
              { text: "Un module = un .h (interface, prototypes) + un .c (implémentation)." },
              { text: "Le .h a des gardes : #ifndef NOM_H / #define NOM_H / ... / #endif." },
              { text: "#include \"local.h\" pour tes fichiers, #include <systeme.h> pour la bibliothèque standard." },
              { text: "On compile en 2 temps : `gcc -c fichier.c -o fichier.o`, puis on lie les .o." },
              { text: "Chaque fonction est définie UNE SEULE FOIS (dans le .c), mais peut être déclarée (prototype) plusieurs fois." },
              { text: "Un Makefile automatise la compilation : `make` rebuild seulement ce qui a changé." },
            ],
          },
          {
            kind: "quiz",
            question: "Où place-t-on les gardes d'inclusion (#ifndef / #define / #endif) ?",
            options: [
              "Dans le .c",
              "Dans le .h, autour de toutes les déclarations",
              "Dans le Makefile",
              "Dans le main",
            ],
            correctIndex: 1,
            explanation:
              "Les gardes vont dans le .h, autour de TOUT son contenu. Le #ifndef au tout début, le #endif à la toute fin. Elles empêchent le .h d'être inclus plusieurs fois.",
          },
        ],
      },
    ],
  },

  // ============================================================
  // CHAPITRE 14 — LA RÉCURSIVITÉ
  // ============================================================
  {
    id: 14,
    title: "La récursivité",
    subtitle: "Une fonction qui s'appelle elle-même.",
    shortTitle: "Récursivité",
    icon: "Recycle",
    keywords: ["récursivité", "récursif", "cas de base", "cas d'arrêt", "factorielle", "fibonacci", "pile d'appels", "récursion"],
    goal: "Comprendre et écrire des fonctions récursives, en identifiant le cas de base.",
    minutes: 14,
    levels: [
      {
        id: "comprendre",
        title: "Je comprends",
        subtitle: "Comme une poupée russe",
        blocks: [
          {
            kind: "story",
            eyebrow: "La situation",
            steps: [
              { text: "Tu veux calculer la factorielle de 5 : 5! = 5 × 4 × 3 × 2 × 1 = 120." },
              { text: "Tu remarques : 5! = 5 × 4! Et 4! = 4 × 3! Et 3! = 3 × 2! Et 2! = 2 × 1! Et 1! = 1." },
              { text: "Donc factorielle(5) = 5 × factorielle(4). C'est une définition récursive." },
              { text: "Une fonction peut s'appeler ELLE-MÊME pour résoudre un sous-problème plus petit." },
            ],
          },
          {
            kind: "analogy",
            real: {
              icon: "🪆",
              title: "Une poupée russe",
              desc: "Tu ouvres la poupée, il y en a une plus petite à l'intérieur. Tu l'ouvres, il y en a une encore plus petite. Jusqu'à la plus petite qui ne s'ouvre plus.",
            },
            code: {
              icon: "🔁",
              title: "Une fonction récursive",
              desc: "La fonction s'appelle avec un problème plus petit. Jusqu'au cas de base : le plus petit problème, qu'on résout directement sans rappeler.",
            },
            link: "Récursivité = se rappeler avec un sous-problème plus petit + un cas de base qui arrête.",
          },
          {
            kind: "vocab",
            terms: [
              { word: "Récursivité", def: "Une fonction qui s'appelle elle-même. Pour résoudre un problème en le découpant en sous-problèmes plus petits." },
              { word: "Cas de base", def: "La condition qui ARRÊTE la récursion. Sans lui, la fonction s'appellerait indéfiniment → crash." },
              { word: "Cas récursif", def: "Le cas où on s'appelle soi-même avec un sous-problème plus petit." },
              { word: "Pile d'appels (call stack)", def: "La mémoire qui empile chaque appel de fonction en attente. Trop d'appels récursifs = débordement de pile (stack overflow)." },
            ],
          },
          {
            kind: "visual",
            diagram: { type: "recursion", calls: ["fact(5)", "fact(4)", "fact(3)", "fact(2)", "fact(1)"] },
            caption: "Chaque appel s'empile, jusqu'au cas de base (fact(1)). Puis les résultats remontent.",
          },
          {
            kind: "reveal",
            label: "Récursivité ou boucle : que choisir ?",
            hint: "Clique pour révéler",
            content:
              "Tout ce qui est récursif peut être fait avec une boucle, et inversement. La récursivité est plus ÉLÉGANTE pour les problèmes naturellement récursifs (arbres, fractales, divisions successives comme le tri rapide). Les boucles sont plus EFFICACES (pas de pile d'appels). En pratique : récursif si ça rend le code beaucoup plus clair, boucle sinon.",
          },
          {
            kind: "quiz",
            question: "Quel élément est INDISPENSABLE dans une fonction récursive ?",
            options: ["Une boucle for", "Un cas de base (condition d'arrêt)", "Un pointeur", "Un tableau"],
            correctIndex: 1,
            explanation:
              "Le cas de base est la condition qui arrête la récursion. Sans lui, la fonction s'appellerait indéfiniment, épuisant la pile d'appels → stack overflow.",
          },
        ],
      },
      {
        id: "lire",
        title: "Je sais lire",
        subtitle: "La factorielle en récursif",
        blocks: [
          {
            kind: "codeWalk",
            filename: "factorielle.c",
            code: `#include <stdio.h>

int factorielle(int n) {
    if (n <= 1) {
        return 1;             // cas de base
    }
    return n * factorielle(n - 1);  // cas récursif
}

int main(void) {
    printf("5! = %d\\n", factorielle(5));
    return 0;
}`,
            output: "5! = 120",
            explanations: {
              3: "On définit factorielle. Elle prend un int n et renvoie un int.",
              4: "Cas de base : si n ≤ 1, on renvoie 1. C'est l'arrêt. 0! = 1! = 1.",
              7: "Cas récursif : n * factorielle(n-1). On rappelle la fonction avec un n plus petit.",
              7: "Pour n=5 : on calcule 5 * factorielle(4). Mais factorielle(4) n'est pas encore connu, il faut l'appeler.",
              11: "On appelle factorielle(5).",
              12: "Résultat : 120 = 5*4*3*2*1.",
            },
          },
          {
            kind: "reveal",
            label: "Comment se déroule l'appel factorielle(3) ?",
            hint: "Clique pour révéler",
            content:
              "factorielle(3) = 3 * factorielle(2) [en attente]\n  factorielle(2) = 2 * factorielle(1) [en attente]\n    factorielle(1) : cas de base → renvoie 1\n  factorielle(2) = 2 * 1 = 2\nfactorielle(3) = 3 * 2 = 6\n\nChaque appel attend que le suivant soit fini, puis se résout. C'est la pile d'appels qui mémorise les appels en attente.",
          },
          {
            kind: "buildUp",
            title: "La pile d'appels de factorielle(3)",
            intro: "Avance pas à pas : chaque appel s'empile, puis les résultats remontent.",
            steps: [
              {
                kind: "narration",
                caption: "On appelle factorielle(3). La machine empile cet appel sur la pile. Il doit attendre de connaître factorielle(2) pour pouvoir calculer 3 * factorielle(2).",
              },
              {
                kind: "stack",
                caption: "État de la pile : factorielle(3) est en attente. Elle a besoin du résultat de factorielle(2).",
                frames: [
                  { label: "factorielle(3)", value: "3 * ?", tone: "active" },
                ],
              },
              {
                kind: "narration",
                caption: "factorielle(3) appelle factorielle(2). Celui-ci s'empile AU-DESSUS du précédent.",
              },
              {
                kind: "stack",
                caption: "Pile : factorielle(3) en attente, factorielle(2) au sommet (en cours).",
                frames: [
                  { label: "factorielle(2)", value: "2 * ?", tone: "active" },
                  { label: "factorielle(3)", value: "3 * ?", tone: "pending" },
                ],
              },
              {
                kind: "narration",
                caption: "factorielle(2) appelle factorielle(1). Encore un empilement.",
              },
              {
                kind: "stack",
                caption: "Pile : trois appels empilés. factorielle(1) au sommet.",
                frames: [
                  { label: "factorielle(1)", value: "cas de base", tone: "active" },
                  { label: "factorielle(2)", value: "2 * ?", tone: "pending" },
                  { label: "factorielle(3)", value: "3 * ?", tone: "pending" },
                ],
              },
              {
                kind: "narration",
                caption: "factorielle(1) : n ≤ 1, c'est le CAS DE BASE. Pas de nouvel appel. On renvoie 1 immédiatement.",
              },
              {
                kind: "stack",
                caption: "factorielle(1) se résout : renvoie 1. Il se dépile.",
                frames: [
                  { label: "factorielle(1)", value: "→ 1", tone: "resolved" },
                  { label: "factorielle(2)", value: "2 * ?", tone: "active" },
                  { label: "factorielle(3)", value: "3 * ?", tone: "pending" },
                ],
              },
              {
                kind: "narration",
                caption: "factorielle(2) reçoit 1. Il peut calculer 2 * 1 = 2 et se dépiler à son tour.",
              },
              {
                kind: "stack",
                caption: "factorielle(2) se résout : renvoie 2. La pile diminue.",
                frames: [
                  { label: "factorielle(2)", value: "2 * 1 = 2", tone: "resolved" },
                  { label: "factorielle(3)", value: "3 * ?", tone: "active" },
                ],
              },
              {
                kind: "narration",
                caption: "factorielle(3) reçoit 2. Il calcule 3 * 2 = 6 et se dépile.",
              },
              {
                kind: "stack",
                caption: "factorielle(3) se résout : renvoie 6. La pile est vide. Résultat final : 6.",
                frames: [
                  { label: "factorielle(3)", value: "3 * 2 = 6", tone: "resolved" },
                ],
              },
            ],
          },
          {
            kind: "codeWalk",
            filename: "fibonacci.c",
            code: `#include <stdio.h>

int fib(int n) {
    if (n < 2) return n;       // cas de base : fib(0)=0, fib(1)=1
    return fib(n - 1) + fib(n - 2);  // cas récursif
}

int main(void) {
    for (int i = 0; i < 10; i++)
        printf("%d ", fib(i));
    printf("\\n");
    return 0;
}`,
            output: "0 1 1 2 3 5 8 13 21 34 ",
            explanations: {
              3: "La suite de Fibonacci : fib(0)=0, fib(1)=1, fib(n) = fib(n-1) + fib(n-2) pour n ≥ 2.",
              4: "Cas de base : si n < 2, on renvoie n. Donc fib(0)=0 et fib(1)=1.",
              5: "Cas récursif : on s'appelle DEUX FOIS avec n-1 et n-2. La somme est le résultat.",
              9: "On affiche les 10 premiers termes.",
              10: "Résultat : 0 1 1 2 3 5 8 13 21 34.",
            },
          },
          {
            kind: "challenge",
            variant: "predict",
            prompt: "Que vaut factorielle(0) avec notre fonction ?",
            accept: ["1", "0! = 1"],
            hint: "n = 0 tombe dans le cas de base (n ≤ 1).",
            feedback:
              "factorielle(0) = 1. La condition n ≤ 1 est vraie pour n=0, donc on entre dans le cas de base et on renvoie 1. C'est la convention mathématique : 0! = 1.",
          },
          {
            kind: "quiz",
            question: "Que se passe-t-il si on oublie le cas de base dans une fonction récursive ?",
            options: [
              "Le programme s'arrête proprement",
              "Le compilateur refuse",
              "Stack overflow : la fonction s'appelle indéfiniment jusqu'au crash",
              "Renvoie 0",
            ],
            correctIndex: 2,
            explanation:
              "Sans cas de base, la fonction s'appelle indéfiniment. Chaque appel empile sur la pile d'appels. Au bout d'un moment, la pile déborde → crash (stack overflow).",
          },
        ],
      },
      {
        id: "faire",
        title: "Je sais faire",
        subtitle: "Écrire des récursions",
        blocks: [
          {
            kind: "error",
            title: "Erreur : oublier le cas de base",
            bad: `int factorielle(int n) {
    return n * factorielle(n - 1);
}`,
            good: `int factorielle(int n) {
    if (n <= 1) return 1;
    return n * factorielle(n - 1);
}`,
            explanation:
              "Sans cas de base, factorielle(5) appelle factorielle(4) qui appelle factorielle(3)… qui appelle factorielle(-1), -2, -3… La pile d'appels déborde → crash. Le cas de base est OBLIGATOIRE.",
          },
          {
            kind: "error",
            title: "Erreur : le sous-problème ne rétrécit pas",
            bad: `int factorielle(int n) {
    if (n <= 1) return 1;
    return n * factorielle(n);  // n ne diminue pas !
}`,
            good: `int factorielle(int n) {
    if (n <= 1) return 1;
    return n * factorielle(n - 1);  // n-1 : on se rapproche du cas de base
}`,
            explanation:
              "Le cas récursif doit se rapprocher du cas de base. Si on rappelle avec le même n, on ne terminera jamais (boucle infinie récursive).",
          },
          {
            kind: "challenge",
            variant: "predict",
            prompt: "Que vaut factorielle(4) ?",
            accept: ["24"],
            hint: "4 * 3 * 2 * 1 = ?",
            feedback:
              "factorielle(4) = 4 * factorielle(3) = 4 * 6 = 24. Et factorielle(3) = 3 * 2 * 1 = 6. Donc 4! = 24.",
          },
          {
            kind: "challenge",
            variant: "fill",
            prompt: "Complète le cas récursif : une fonction somme(n) qui renvoie 1+2+...+n.",
            accept: ["return n + somme(n - 1);", "return n + somme(n-1);", "return n+somme(n-1);"],
            hint: "somme(n) = n + somme(n-1). Le cas de base est somme(0) = 0 ou somme(1) = 1.",
            feedback:
              "On écrit `return n + somme(n - 1);`. Le cas récursif : somme(n) est la somme de n et de la somme des entiers de 1 à n-1. Le cas de base serait `if (n == 0) return 0;`.",
          },
          {
            kind: "codeWalk",
            filename: "puissance.c",
            code: `#include <stdio.h>

int puissance(int base, int exp) {
    if (exp == 0) return 1;        // cas de base
    return base * puissance(base, exp - 1);
}

int main(void) {
    printf("2^10 = %d\\n", puissance(2, 10));
    return 0;
}`,
            output: "2^10 = 1024",
            explanations: {
              3: "Cas de base : tout nombre à la puissance 0 vaut 1.",
              4: "Cas récursif : base * puissance(base, exp-1). On diminue exp à chaque appel.",
              8: "2^10 = 2 * 2^9 = 2 * 2 * 2^8 = ... = 1024.",
            },
          },
          {
            kind: "recap",
            title: "Bilan du chapitre 14",
            bullets: [
              { text: "Une fonction récursive s'appelle elle-même avec un sous-problème plus petit." },
              { text: "Cas de base OBLIGATOIRE : la condition qui arrête la récursion." },
              { text: "Le cas récursif doit se rapprocher du cas de base (sinon boucle infinie)." },
              { text: "Chaque appel s'empile sur la pile d'appels ; les résultats remontent." },
              { text: "Trop d'appels = stack overflow (la pile déborde)." },
              { text: "Exemples classiques : factorielle, Fibonacci, puissance, parcours d'arbres." },
            ],
          },
          {
            kind: "quiz",
            question: "Quel est le cas de base de `int fact(int n) { if (n <= 1) return 1; return n * fact(n-1); }` ?",
            options: ["n <= 1", "n * fact(n-1)", "return 1", "fact(n-1)"],
            correctIndex: 0,
            explanation:
              "Le cas de base est la CONDITION qui arrête la récursion : `n <= 1`. Quand cette condition est vraie, on renvoie 1 sans s'appeler.",
          },
        ],
      },
    ],
  },

  // ============================================================
  // CHAPITRE 15 — LES POINTEURS AVANCÉS
  // ============================================================
  {
    id: 15,
    title: "Les pointeurs avancés",
    subtitle: "Pointeurs sur tableaux, sur fonctions, arithmétique.",
    shortTitle: "Pt avancés",
    icon: "Zap",
    keywords: ["pointeur avancé", "arithmétique", "pointeur de fonction", "pointeur sur tableau", "double pointeur", "void*"],
    goal: "Aller plus loin avec les pointeurs : arithmétique, pointeurs sur fonction, pointeurs génériques.",
    minutes: 16,
    levels: [
      {
        id: "comprendre",
        title: "Je comprends",
        subtitle: "Les pointeurs ne sont pas que des adresses",
        blocks: [
          {
            kind: "story",
            eyebrow: "Pour aller plus loin",
            steps: [
              { text: "Tu maîtrises les bases : un pointeur contient une adresse." },
              { text: "On peut faire plus : se déplacer dans un tableau avec un pointeur, stocker l'adresse d'une fonction, etc." },
              { text: "C'est ce qui rend le C puissant : on peut tout manipuler par adresse." },
              { text: "Mais c'est aussi ce qui le rend dangereux : une mauvaise adresse = crash." },
            ],
          },
          {
            kind: "vocab",
            terms: [
              { word: "Arithmétique des pointeurs", def: "On peut faire ptr + 1, ptr + n sur un pointeur. Ça avance de n ÉLÉMENTS (pas n octets)." },
              { word: "Pointeur sur fonction", def: "Un pointeur qui contient l'ADRESSE d'une fonction. Permet d'appeler la fonction indirectement, ou de la passer en paramètre." },
              { word: "void*", def: "Un pointeur générique qui peut pointer vers n'importe quel type. À utiliser avec précaution (pas de vérification de type)." },
              { word: "Double pointeur (int**)", def: "Un pointeur qui pointe vers un pointeur. Utile pour modifier un pointeur dans une fonction." },
            ],
          },
          {
            kind: "visual",
            diagram: { type: "pointerFn", sig: "int (*ptr)(int, int)", target: "int add(int a, int b)" },
            caption: "Un pointeur sur fonction stocke l'ADRESSE du code de la fonction. On peut l'appeler via (*ptr)(a, b) ou ptr(a, b).",
          },
          {
            kind: "reveal",
            label: "Pourquoi utiliser un pointeur sur fonction ?",
            hint: "Clique pour révéler",
            content:
              "Exemple typique : la fonction qsort de la bibliothèque standard trie un tableau. Mais comment sait-il dans quel ordre ? On lui passe une FONCTION de comparaison via un pointeur : `qsort(tab, n, sizeof(int), &compare);`. Sans pointeurs sur fonction, ce genre de fonction générique serait impossible.",
          },
          {
            kind: "quiz",
            question: "Si `int *p` pointe vers un tableau d'entiers, que fait `p + 1` ?",
            options: [
              "Avance d'1 octet",
              "Avance d'1 int (4 octets sur la plupart des machines)",
              "Avance d'1 case mémoire",
              "Ne change pas p",
            ],
            correctIndex: 1,
            explanation:
              "L'arithmétique des pointeurs est typée. p + 1 avance d'1 ÉLÉMENT, donc de sizeof(int) = 4 octets. C'est fait exprès pour parcourir un tableau naturellement.",
          },
        ],
      },
      {
        id: "lire",
        title: "Je sais lire",
        subtitle: "Arithmétique et pointeurs sur fonction",
        blocks: [
          {
            kind: "codeWalk",
            filename: "arithmetique.c",
            code: `#include <stdio.h>

int main(void) {
    int t[5] = {10, 20, 30, 40, 50};
    int *p = t;       // p pointe vers t[0]

    printf("%d\\n", *p);       // 10
    printf("%d\\n", *(p + 1)); // 20
    printf("%d\\n", *(p + 3)); // 40

    p++;               // p pointe vers t[1]
    printf("%d\\n", *p);       // 20
    return 0;
}`,
            output: "10\n20\n40\n20",
            explanations: {
              4: "t (un tableau) se comporte comme un pointeur vers son 1er élément. Donc p = t est équivalent à p = &t[0].",
              6: "*p donne la valeur à l'adresse de p, c'est-à-dire t[0] = 10.",
              7: "*(p+1) : p+1 avance d'1 int (4 octets). On pointe vers t[1] = 20.",
              8: "*(p+3) : p+3 avance de 3 int. On pointe vers t[3] = 40.",
              10: "p++ modifie p lui-même. Maintenant p pointe vers t[1].",
              11: "*p donne t[1] = 20.",
            },
          },
          {
            kind: "reveal",
            label: "Tableau et pointeur : quelle différence ?",
            hint: "Clique pour révéler",
            content:
              "Un tableau `int t[5]` et un pointeur `int *p = t;` sont presque interchangeables. La différence : un tableau a une adresse FIXE (on ne peut pas faire t++), alors qu'un pointeur est une variable modifiable. Sinon, t[i] et p[i] s'utilisent pareil. C'est pourquoi on peut passer un tableau à une fonction qui attend un pointeur.",
          },
          {
            kind: "codeWalk",
            filename: "ptr_fonction.c",
            code: `#include <stdio.h>

int addition(int a, int b) { return a + b; }
int soustraction(int a, int b) { return a - b; }

int main(void) {
    int (*operation)(int, int);  // pointeur sur fonction

    operation = &addition;
    printf("5 + 3 = %d\\n", operation(5, 3));

    operation = &soustraction;
    printf("5 - 3 = %d\\n", operation(5, 3));
    return 0;
}`,
            output: "5 + 3 = 8\n5 - 3 = 2",
            explanations: {
              6: "On déclare un pointeur sur fonction. Syntaxe : `int (*nom)(int, int)`. Le type de retour (int) et les paramètres (int, int) doivent correspondre.",
              8: "On stocke l'adresse de addition dans operation. & est optionnel ici, on pourrait écrire operation = addition.",
              9: "On appelle la fonction via le pointeur : operation(5, 3) appelle addition(5, 3) = 8.",
              11: "On change : maintenant operation pointe vers soustraction.",
              12: "operation(5, 3) appelle soustraction(5, 3) = 2. Le même code, mais une fonction différente !",
            },
          },
          {
            kind: "challenge",
            variant: "predict",
            prompt: "Que vaut *(p + 2) si p pointe vers t[0] = 5 et t = {5, 10, 15, 20} ?",
            accept: ["15", "t[2]", "t[2] = 15"],
            hint: "p+2 avance de 2 éléments.",
            feedback:
              "*(p+2) = 15. p pointe vers t[0]. p+2 avance de 2 int, donc vers t[2]. *(p+2) donne t[2] = 15.",
          },
          {
            kind: "quiz",
            question: "Comment déclare-t-on un pointeur sur fonction qui prend 2 int et renvoie un int ?",
            options: [
              "int *f(int, int);",
              "int (*f)(int, int);",
              "int f(int, int)*;",
              "(int *)f(int, int);",
            ],
            correctIndex: 1,
            explanation:
              "La syntaxe est `int (*f)(int, int);`. Les parenthèses autour de *f sont OBLIGATOIRES (sinon ce serait une fonction renvoyant un int*). C'est une syntaxe déroutante mais unique.",
          },
        ],
      },
      {
        id: "faire",
        title: "Je sais faire",
        subtitle: "Utiliser avancé",
        blocks: [
          {
            kind: "error",
            title: "Erreur : déborder du tableau avec un pointeur",
            bad: `int t[3] = {1, 2, 3};
int *p = t;
printf("%d", *(p + 5));   // en dehors !`,
            good: `int t[3] = {1, 2, 3};
int *p = t;
for (int i = 0; i < 3; i++)
    printf("%d ", *(p + i));`,
            explanation:
              "L'arithmétique des pointeurs ne vérifie pas les bornes. *(p+5) lit en dehors du tableau → comportement indéfini. Toujours garder la trace mentale de la taille.",
          },
          {
            kind: "challenge",
            variant: "predict",
            prompt: "Après `int t[4] = {1,2,3,4}; int *p = t; p++; p++;`, que vaut *p ?",
            accept: ["3", "t[2]", "t[2] = 3"],
            hint: "Au départ p = &t[0]. Après 2 increments, p = &t[?].",
            feedback:
              "*p = 3. p commence à &t[0]. Après p++ : p = &t[1]. Après p++ encore : p = &t[2]. Donc *p = t[2] = 3.",
          },
          {
            kind: "codeWalk",
            filename: "void_ptr.c",
            code: `#include <stdio.h>

void afficher(void *ptr, char type) {
    if (type == 'i') {
        printf("Entier : %d\\n", *(int*)ptr);
    } else if (type == 'f') {
        printf("Flottant : %f\\n", *(float*)ptr);
    }
}

int main(void) {
    int n = 42;
    float f = 3.14f;
    afficher(&n, 'i');
    afficher(&f, 'f');
    return 0;
}`,
            output: "Entier : 42\nFlottant : 3.140000",
            explanations: {
              3: "void* = pointeur générique. Peut pointer vers n'importe quoi. On perd l'info du type.",
              5: "Pour utiliser la valeur, on CONVERTIT (cast) vers le bon type : (int*)ptr. Puis on déréférence : *(int*)ptr.",
              7: "Idem pour float.",
              13: "On passe l'adresse d'un int avec le code 'i'.",
              14: "On passe l'adresse d'un float avec le code 'f'. La même fonction gère les deux types.",
            },
          },
          {
            kind: "challenge",
            variant: "predict",
            prompt: "Que fait `int *p = t; p[2] = 99;` si t est un tableau ?",
            accept: ["modifie t[2]", "t[2] = 99", "Met 99 dans t[2]"],
            hint: "p[i] est équivalent à *(p+i).",
            feedback:
              "p[2] = 99 met 99 dans t[2]. La syntaxe p[i] fonctionne sur les pointeurs exactement comme sur les tableaux (c'est *(p+i)). C'est pour ça que tableau et pointeur sont interchangeables en C.",
          },
          {
            kind: "recap",
            title: "Bilan du chapitre 15",
            bullets: [
              { text: "Arithmétique : ptr + n avance de n éléments (typés), pas de n octets." },
              { text: "Un tableau `int t[n]` se comporte comme un pointeur vers son 1er élément." },
              { text: "p[i] est équivalent à *(p + i). Tableaux et pointeurs sont interchangeables." },
              { text: "Pointeur sur fonction : `int (*f)(int, int);` — pour passer des fonctions en paramètre." },
              { text: "void* : pointeur générique. On doit le caster (int*)ptr pour l'utiliser." },
              { text: "L'arithmétique ne vérifie PAS les bornes : rester dans le tableau." },
            ],
          },
          {
            kind: "quiz",
            question: "Que vaut `*(p + 2)` si `int t[5] = {10, 20, 30, 40, 50}; int *p = t;` ?",
            options: ["12", "30", "50", "20"],
            correctIndex: 1,
            explanation:
              "p pointe vers t[0]. p + 2 avance de 2 int, donc vers t[2]. *(p+2) = t[2] = 30. C'est équivalent à p[2] = 30.",
          },
        ],
      },
    ],
  },

  // ============================================================
  // CHAPITRE 16 — LE DÉBOGAGE ET LA GESTION DES ERREURS
  // ============================================================
  {
    id: 16,
    title: "Le débogage et la gestion des erreurs",
    subtitle: "Rendre ses programmes robustes et trouver les bugs.",
    shortTitle: "Débogage",
    icon: "ShieldCheck",
    keywords: ["débogage", "debug", "assert", "gdb", "valgrind", "-Wall", "-Wextra", "printf debug", "segmentation fault", "fuite"],
    goal: "Prévenir, détecter et corriger les bugs. Utiliser les outils de débogage standards.",
    minutes: 17,
    levels: [
      {
        id: "comprendre",
        title: "Je comprends",
        subtitle: "3 niveaux de défense",
        blocks: [
          {
            kind: "story",
            eyebrow: "La situation",
            steps: [
              { text: "Ton programme plante. « Segmentation fault ». Tu ne sais pas pourquoi." },
              { text: "Ou pire : il ne plante pas, mais donne des résultats faux de temps en temps." },
              { text: "Plus ton programme grandit, plus les bugs deviennent difficiles à trouver." },
              { text: "Il existe des techniques et des outils pour prévenir et détecter les bugs." },
            ],
          },
          {
            kind: "analogy",
            real: {
              icon: "🛡️",
              title: "La sécurité en voiture",
              desc: "1) Prévenir : ceinture, airbag, bons réflexes. 2) Détecter : voyants du tableau de bord. 3) Diagnostiquer : garage avec outils.",
            },
            code: {
              icon: "🐛",
              title: "Le débogage",
              desc: "1) Prévenir : initialiser ses variables, compiler avec -Wall. 2) Détecter : vérifier les retours de malloc, assert. 3) Diagnostiquer : gdb, valgrind.",
            },
            link: "3 niveaux : prévenir, détecter, diagnostiquer. Comme la sécurité en voiture.",
          },
          {
            kind: "vocab",
            terms: [
              { word: "Bug", def: "Une erreur dans le code qui produit un mauvais comportement (crash, résultat faux, etc.)." },
              { word: "Segmentation fault", def: "Crash causé par un accès mémoire interdit (pointeur NULL, débordement, etc.). Le programme s'arrête immédiatement." },
              { word: "assert(condition)", def: "Vérifie une condition. Si fausse, le programme s'arrête avec un message. À utiliser pour les invariants critiques." },
              { word: "gdb", def: "Le débogueur standard. Permet d'exécuter le programme pas à pas, d'inspecter les variables." },
              { word: "valgrind", def: "Outil qui détecte les fuites mémoire et les accès illégaux. Indispensable en C." },
              { word: "-Wall -Wextra", def: "Options de gcc qui activent tous les avertissements. À TOUJOURS utiliser." },
            ],
          },
          {
            kind: "visual",
            diagram: { type: "defense", levels: [{ l: "1. Prévenir", d: "Initialiser, compiler avec -Wall -Wextra" }, { l: "2. Vérifier", d: "Tester retours de malloc, fopen, scanf" }, { l: "3. Diagnostiquer", d: "printf debug, gdb, valgrind" }] },
            caption: "3 niveaux de défense. Plus tu préviens en amont, moins tu débogues en aval.",
          },
          {
            kind: "reveal",
            label: "Qu'est-ce qu'une « segmentation fault » ?",
            hint: "Clique pour révéler",
            content:
              "C'est le crash le plus courant en C. Il se produit quand ton programme accède à une zone mémoire interdite : pointeur NULL, accès hors tableau, mémoire libérée… Le système d'exploitation détecte l'accès illégal et tue le programme immédiatement. Le message est « Segmentation fault (core dumped) ». C'est presque toujours un problème de pointeur.",
          },
          {
            kind: "quiz",
            question: "Que fait `assert(condition);` ?",
            options: [
              "Affiche un message",
              "Si la condition est fausse, arrête le programme avec un message",
              "Compile en mode debug",
              "Ignore l'erreur",
            ],
            correctIndex: 1,
            explanation:
              "assert(cond) : si cond est fausse, le programme s'arrête immédiatement avec un message du type « assertion failed: file.c:42 ». Idéal pour vérifier des invariants en phase de développement.",
          },
        ],
      },
      {
        id: "lire",
        title: "Je sais lire",
        subtitle: "Les techniques de débogage",
        blocks: [
          {
            kind: "codeWalk",
            filename: "compiler.c",
            code: `// Compilation avec tous les avertissements :
gcc -Wall -Wextra -g programme.c -o programme

// -Wall      : active les avertissements standards
// -Wextra    : active des avertissements supplémentaires
// -g         : inclut les infos de débogage pour gdb
// -O2        : optimisation (à mettre APRÈS le débogage)`,
            explanations: {
              2: "Toujours compiler avec -Wall -Wextra en développement. Ça détecte des tas d'erreurs silencieuses.",
              5: "-g inclut les symboles de débogage. Sans ça, gdb ne peut pas te montrer les variables.",
              7: "-O2 active l'optimisation. À utiliser pour la version finale, PAS pour le débogage (ça rend le code difficile à suivre dans gdb).",
            },
          },
          {
            kind: "codeWalk",
            filename: "assert.c",
            code: `#include <stdio.h>
#include <assert.h>

int division(int a, int b) {
    assert(b != 0 && "Division par zero !");
    return a / b;
}

int main(void) {
    printf("%d\\n", division(10, 2));
    printf("%d\\n", division(10, 0));
    return 0;
}`,
            output: "5\nAssertion failed: b != 0 && \"Division par zero !\"",
            explanations: {
              2: "assert.h contient la macro assert().",
              5: "assert(b != 0) : si b vaut 0, le programme s'arrête avec un message. Le && \"...\" ajoute un message personnalisé.",
              11: "division(10, 2) = 5. Tout va bien.",
              12: "division(10, 0) : b = 0, donc assert échoue. Le programme s'arrête avec le message « Division par zero ! ».",
            },
          },
          {
            kind: "reveal",
            label: "Comment utiliser gdb pas à pas ?",
            hint: "Clique pour révéler",
            content:
              "1) Compile avec -g : `gcc -g prog.c -o prog`. 2) Lance gdb : `gdb ./prog`. 3) Dans gdb : `break main` (point d'arrêt), `run` (démarrer), `next` (ligne suivante), `print variable` (voir une variable), `backtrace` (voir la pile d'appels), `quit` (sortir). gdb permet de voir exactement où et pourquoi le programme plante.",
          },
          {
            kind: "codeWalk",
            filename: "verifications.c",
            code: `#include <stdio.h>
#include <stdlib.h>

int main(void) {
    int *p = malloc(100 * sizeof(int));
    if (p == NULL) {
        fprintf(stderr, "Echec malloc\\n");
        return 1;
    }

    FILE *f = fopen("data.txt", "r");
    if (f == NULL) {
        fprintf(stderr, "Fichier introuvable\\n");
        free(p);
        return 1;
    }

    // ... utiliser p et f ...

    fclose(f);
    free(p);
    return 0;
}`,
            explanations: {
              6: "On vérifie TOUJOURS le retour de malloc. Si NULL : on affiche sur stderr et on quitte proprement.",
              8: "fprintf(stderr, ...) écrit sur la sortie d'erreur. Plus approprié que printf pour les erreurs.",
              12: "On vérifie fopen. Si NULL : on libère p (sinon fuite) avant de quitter.",
              16: "Imagine que le code utiliserait p et f ici.",
              19: "On libère dans l'ordre inverse : d'abord le fichier, puis la mémoire.",
            },
          },
          {
            kind: "challenge",
            variant: "predict",
            prompt: "Que se passe-t-il si on oublie de vérifier le retour de fopen et qu'il renvoie NULL ?",
            accept: ["crash", "segfault", "segmentation fault", "plante", "plante si on utilise f"],
            hint: "f est NULL. Si on essaie de l'utiliser (fscanf(f, ...))…",
            feedback:
              "Crash (segmentation fault) dès qu'on essaie d'utiliser f. fscanf(NULL, ...) provoque un accès mémoire illégal. D'où l'importance de toujours vérifier `if (f == NULL)`.",
          },
          {
            kind: "quiz",
            question: "Quelle option de compilation active tous les avertissements ?",
            options: ["-O2", "-Wall -Wextra", "-g", "-o"],
            correctIndex: 1,
            explanation:
              "-Wall active les avertissements standards, -Wextra en ajoute d'autres. Toujours les utiliser en développement. -g inclut les infos de débogage pour gdb.",
          },
        ],
      },
      {
        id: "faire",
        title: "Je sais faire",
        subtitle: "Programmer robustement",
        blocks: [
          {
            kind: "error",
            title: "Bug : variable non initialisée",
            bad: `int n;
printf("%d", n);  // garbage`,
            good: `int n = 0;
printf("%d", n);`,
            explanation:
              "Une variable non initialisée contient n'importe quoi. -Wall détecte ce problème (« may be used uninitialized »). Règle : toujours initialiser, surtout les pointeurs.",
          },
          {
            kind: "error",
            title: "Bug : oublier de vérifier le retour de scanf",
            bad: `int n;
scanf("%d", &n);  // si l'utilisateur tape "abc" ?
printf("%d", n);  // garbage`,
            good: `int n;
if (scanf("%d", &n) != 1) {
    printf("Saisie invalide\\n");
    return 1;
}
printf("%d", n);`,
            explanation:
              "scanf renvoie le nombre d'éléments lus. Si l'utilisateur tape du texte au lieu d'un nombre, scanf échoue et n'est pas modifié (garbage). Toujours vérifier le retour.",
          },
          {
            kind: "challenge",
            variant: "predict",
            prompt: "Que fait valgrind sur un programme qui a oublié un free ?",
            accept: ["détecte la fuite", "signale la fuite", "indique la fuite", "trouve la fuite", "fuite mémoire"],
            hint: "valgrind suit chaque malloc et chaque free.",
            feedback:
              "valgrind détecte et signale la fuite mémoire : il indique la ligne exacte du malloc oublié, la taille du bloc, etc. Indispensable en C pour chasser les fuites.",
          },
          {
            kind: "challenge",
            variant: "predict",
            prompt: "Quelle est la cause la plus probable d'un « segmentation fault » ?",
            accept: ["pointeur", "NULL", "pointeur NULL", "débordement", "mauvais pointeur", "accès mémoire"],
            hint: "C'est presque toujours un problème d'adresse.",
            feedback:
              "Un pointeur problématique : pointeur NULL déréférencé, accès hors tableau, ou mémoire libérée. Pour trouver la ligne : gdb + backtrace.",
          },
          {
            kind: "codeWalk",
            filename: "printf_debug.c",
            code: `#include <stdio.h>

int somme(int t[], int n) {
    int s = 0;
    for (int i = 0; i < n; i++) {
        printf("[DEBUG] i=%d, t[i]=%d, s=%d\\n",
               i, t[i], s);
        s += t[i];
    }
    return s;
}

int main(void) {
    int t[3] = {1, 2, 3};
    printf("Total = %d\\n", somme(t, 3));
    return 0;
}`,
            output: "[DEBUG] i=0, t[i]=1, s=0\n[DEBUG] i=1, t[i]=2, s=1\n[DEBUG] i=2, t[i]=3, s=3\nTotal = 6",
            explanations: {
              6: "La technique la plus simple : printf debug. On affiche les variables à chaque itération pour voir où ça va mal.",
              7: "i, t[i] et s : on suit l'évolution. On voit s'accumuler la somme.",
              9: "On retire ces printf une fois le bug trouvé. Astuce : utiliser #ifdef DEBUG pour les activer/désactiver proprement.",
            },
          },
          {
            kind: "recap",
            title: "Bilan du chapitre 16",
            bullets: [
              { text: "3 niveaux de défense : prévenir, détecter, diagnostiquer." },
              { text: "Toujours compiler avec -Wall -Wextra -g." },
              { text: "Toujours initialiser ses variables (surtout les pointeurs)." },
              { text: "Vérifier les retours de malloc, fopen, scanf." },
              { text: "assert() pour les invariants critiques en phase de dev." },
              { text: "printf debug pour traquer un bug. gdb pour aller plus loin." },
              { text: "valgrind pour chasser les fuites mémoire et accès illégaux." },
            ],
          },
          {
            kind: "quiz",
            question: "Comment appelle-t-on le crash causé par un accès mémoire interdit ?",
            options: ["Buffer overflow", "Segmentation fault", "Stack overflow", "Memory leak"],
            correctIndex: 1,
            explanation:
              "Segmentation fault (ou segfault). Le système d'exploitation détecte l'accès illégal et tue le programme. Presque toujours causé par un problème de pointeur.",
          },
        ],
      },
    ],
  },
];
