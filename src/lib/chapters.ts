export interface CodeExample {
  code: string;
  explanation?: string;
  output?: string;
}

export interface Quiz {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface SlideBlock {
  type: string;
  title: string;
  content: string[];
  code?: CodeExample;
  visual?: string;
  keyTakeaway?: string;
}

export interface Chapter {
  id: number;
  title: string;
  subtitle: string;
  icon: string;
  objective: string;
  blocks: SlideBlock[];
  keywords: string[];
}

export const chapters: Chapter[] = [
  {
    "id": 1,
    "title": "QU’EST-CE QU’UN PROGRAMME ?",
    "subtitle": "Découvrir le langage C, écrire, compiler et exécuter son premier code.",
    "icon": "Monitor",
    "objective": "Découvrir le langage C, écrire, compiler et exécuter son premier code.",
    "blocks": [
      {
        "type": "title",
        "title": "TITRE",
        "content": [
          "Titre : Chapitre 1 – Qu’est-ce qu’un programme ?",
          "Sous-titre : Découvrir le langage C, écrire, compiler et exécuter son premier code."
        ],
        "visual": "(Visuel : une grande image d’un écran d’ordinateur avec des lignes de code floues en arrièreplan, et au premier plan le mot « C » en bleu/blanc.)"
      },
      {
        "type": "situation",
        "title": "SITUATION RÉELLE",
        "content": [
          "Texte :",
          "Tu veux afficher un message à l’écran.",
          "Tu veux que l’ordinateur calcule une addition à ta place.",
          "L’ordinateur peut le faire en une fraction de seconde, sans se tromper."
        ],
        "visual": "(Visuel : une calculatrice, un écran avec un message « Bonjour », et une flèche qui relie un humain à un ordinateur.)"
      },
      {
        "type": "problem",
        "title": "PROBLÈME À COMPRENDRE",
        "content": [
          "Texte :",
          "L’ordinateur ne comprend ni le français, ni l’anglais.",
          "Il ne comprend que des impulsions électriques : 0 et 1 (le binaire).",
          "Écrire en 0 et 1 est impossible pour un humain (trop long et trop complexe)."
        ],
        "visual": "(Visuel : une longue suite de « 01001101 01001000 » sur un écran, avec un visage perplexe à côté.)"
      },
      {
        "type": "question",
        "title": "QUESTION QUE L’ÉTUDIANT DOIT SE POSER",
        "content": [
          "Texte :",
          "« Comment donner une instruction claire à l’ordinateur sans apprendre le binaire ? »"
        ],
        "visual": "(Visuel : un gros point d’interrogation au centre, entouré de 0 et 1 qui s’éloignent.)"
      },
      {
        "type": "reasoning",
        "title": "RAISONNEMENT",
        "content": [
          "Texte :",
          "On invente un langage intermédiaire, proche du français : le langage C.",
          "On écrit nos instructions en C (c’est lisible).",
          "Un outil spécial, le compilateur, traduit automatiquement le C en binaire.",
          "Le binaire est exécuté par la machine."
        ],
        "visual": "(Visuel : schéma à 3 blocs – [Code C] → (Compilateur) → [Binaire exécutable]. Flèches vertes.)"
      },
      {
        "type": "rule",
        "title": "RÈGLE (À RETENIR)",
        "content": [
          "Texte :",
          "Les 4 étapes incontournables :",
          "Écrire le code dans un fichier .c (ex: monprog.c).",
          "Compiler avec un compilateur (ex: gcc).",
          "Obtenir un fichier exécutable (.exe ou a.out).",
          "Lancer l’exécutable pour voir le résultat."
        ],
        "visual": "(Visuel : un cycle horizontal avec 4 cases numérotées et des flèches.)"
      },
      {
        "type": "visual",
        "title": "REPRÉSENTATION VISUELLE DE L’ENVIRONNEMENT",
        "content": [
          "Texte :",
          "Éditeur (ex: Visual Studio Code) → pour écrire le code (couleur bleue).",
          "Terminal (ligne de commande) → pour compiler et exécuter (couleur noire).",
          "Compilateur (GCC) → outil caché, appelé depuis le terminal (couleur orange)."
        ],
        "visual": "(Visuel : trois boîtes alignées. L’éditeur avec du texte, le terminal avec des commandes, le compilateur en icône d’engrenage.)"
      },
      {
        "type": "example",
        "title": "EXEMPLE GUIDÉ (DÉCOUVERTE DU CODE)",
        "content": [
          "Texte :",
          "Voici le plus petit programme C qui affiche un message :"
        ],
        "code": {
          "code": "#include <stdio.h>\nint main() {\nprintf(\"Bonjour le monde !\");\nreturn 0;\n}\nConsigne : Ne cherche pas à tout comprendre maintenant. Lis-le juste une fois. Nous allons le découper pièce par pièce."
        },
        "visual": "(Visuel : code coloré (syntax highlighting). Chaque mot a une couleur différente.)"
      },
      {
        "type": "example",
        "title": "EXEMPLE CONSTRUIT ÉTAPE 1 : LA BIBLIOTHÈQUE",
        "content": [
          "Texte :",
          "#include <stdio.h>",
          "C’est une boîte à outils qu’on va chercher.",
          "Elle contient des outils pour afficher des choses à l’écran.",
          "stdio.h = Standard Input Output (entrées/sorties standard)."
        ],
        "visual": "(Visuel : une caisse à outils ouverte avec l’étiquette « stdio.h ». À l’intérieur, on voit le mot « printf ».)"
      },
      {
        "type": "example",
        "title": "EXEMPLE CONSTRUIT ÉTAPE 2 : LE POINT D’ENTRÉE",
        "content": [
          "Texte :",
          "int main() { ... }",
          "C’est le point de départ obligatoire du programme.",
          "L’ordinateur commence toujours par exécuter ce qui est entre les accolades { } du main.",
          "Sans main, le programme ne sait pas par où commencer."
        ],
        "visual": "(Visuel : une flèche rouge qui pointe vers le mot main, avec une ligne de départ (départ de course).)"
      },
      {
        "type": "example",
        "title": "EXEMPLE CONSTRUIT ÉTAPE 3 : L’AFFICHAGE",
        "content": [
          "Texte :",
          "printf(\"Bonjour le monde !\");",
          "printf = print (afficher) formaté.",
          "Les parenthèses ( ) contiennent ce qu’on affiche.",
          "Les guillemets \" \" délimitent le texte exact.",
          "Le point-virgule ; termine l’instruction (comme un point dans une phrase)."
        ],
        "visual": "(Visuel : zoom sur printf. Une bulle de dialogue sort du code et montre « Bonjour le monde ! » à l’écran.)"
      },
      {
        "type": "example",
        "title": "EXEMPLE CONSTRUIT ÉTAPE 4 : LA FIN DU PROGRAMME",
        "content": [
          "Texte :",
          "return 0;",
          "Cela signifie : « Le programme se termine, tout s’est bien passé ».",
          "0 est le code de succès (zéro erreur)."
        ],
        "visual": "(Visuel : un petit drapeau d’arrivée vert avec « OK ».)"
      },
      {
        "type": "example",
        "title": "EXEMPLE CONSTRUIT ÉTAPE 5 : LES ACCOLADES",
        "content": [
          "Texte :",
          "{ : on ouvre le corps du programme.",
          "} : on ferme le corps du programme.",
          "Tout ce qui est à l’intérieur est exécuté dans l’ordre."
        ],
        "visual": "(Visuel : des flèches courbes qui entourent le contenu du main.)"
      },
      {
        "type": "example",
        "title": "EXEMPLE CONSTRUIT ÉTAPE 6 : SYNTHÈSE VISUELLE COMPLÈTE",
        "content": [
          "Texte :",
          "(Légende couleur fonctionnelle)",
          "🔵 Bleu : #include → importer une boîte à outils.",
          "🟠 Orange : int main() → le point de départ.",
          "🟢 Vert : printf(...) → afficher.",
          "🔴 Rouge : return 0; → fin normale.",
          "⚫ Noir : les accolades { } → délimiter le bloc."
        ],
        "visual": "(Visuel : le code complet avec chaque partie surlignée de sa couleur, et une légende à côté.)"
      },
      {
        "type": "error",
        "title": "ERREUR FRÉQUENTE N°1",
        "content": [
          "Texte :",
          "❌ OUBLIER LE POINT-VIRGULE",
          "Code faux :"
        ],
        "code": {
          "code": "printf(\"Bonjour !\")\nConséquence : le compilateur affiche une erreur et refuse de créer l’exécutable."
        },
        "visual": "(Visuel : la ligne est barrée en rouge, une bulle d’erreur dit « erreur : expected ‘;’ before ‘return’ ».)"
      },
      {
        "type": "error",
        "title": "ERREUR FRÉQUENTE N°2",
        "content": [
          "Texte :",
          "❌ OUBLIER LES GUILLEMETS",
          "Code faux :"
        ],
        "code": {
          "code": "printf(Bonjour !);\nConséquence : le compilateur cherche une variable nommée Bonjour, qui n’existe pas."
        },
        "visual": "(Visuel : la ligne barrée en rouge, avec une bulle « erreur : ‘Bonjour’ undeclared ».)"
      },
      {
        "type": "error",
        "title": "ERREUR FRÉQUENTE N°3",
        "content": [
          "Texte :",
          "❌ MAUVAISE ORTHOGRAPHE DE main",
          "Code faux :"
        ],
        "code": {
          "code": "int mian() { ... }\nConséquence : le compilateur ne trouve pas le point de départ.\nRègle d’or : le C est sensible à la casse – main doit être écrit exactement en minuscules."
        },
        "visual": "(Visuel : un marteau rouge barrant « mian », une flèche verte vers « main ».)"
      },
      {
        "type": "exercise",
        "title": "PETIT EXERCICE",
        "content": [
          "Texte :",
          "À toi de jouer !",
          "Écris un programme C complet qui affiche exactement cette phrase à l’écran :",
          "Je débute en C !",
          "(Indice : inspiretoi du modèle du diapositive 8. Remplace seulement le texte à l’intérieur des guillemets.)"
        ],
        "visual": "(Visuel : une feuille blanche avec un curseur clignotant, prêt à écrire.)"
      },
      {
        "type": "correction",
        "title": "CORRECTION EXPLIQUÉE",
        "content": [
          "Texte :",
          "Voici la solution :"
        ],
        "code": {
          "code": "#include <stdio.h>\nint main() {\nprintf(\"Je débute en C !\");\nreturn 0;\n}\nPourquoi c’est juste ?\n#include <stdio.h> → on a la boîte à outils pour printf.\nint main() → point de départ correct.\nprintf(\"Je débute en C !\"); → le texte demandé, entre guillemets, avec ;.\nreturn 0; → fin normale."
        },
        "visual": "(Visuel : le code est affiché en vert (bon) avec des petites étoiles.)"
      },
      {
        "type": "verification",
        "title": "VÉRIFICATION AUTONOME",
        "content": [
          "Texte :",
          "Sans utiliser l’ordinateur, trouve l’erreur dans ce code :"
        ],
        "code": {
          "code": "#include <stdio.h>\nint main()\n{\nprintf(\"Bonjour\")\nreturn 0;\n}\nQuestions à te poser :\nEst-ce que chaque instruction se termine par ; ?\nEst-ce que main est bien écrit ?\nEst-ce que les guillemets sont présents ?\nRéponse : il manque un ; après printf(\"Bonjour\")."
        },
        "visual": "(Visuel : le code est affiché, et une loupe pointe l’endroit où le ; est absent.)"
      },
      {
        "type": "summary",
        "title": "PASSAGE À L’AUTONOMIE (BILAN DU CHAPITRE)",
        "content": [
          "Texte :",
          "Tu dois maintenant être capable de répondre à ces 3 questions :",
          "Qu’est-ce que c’est ? → Un programme C est une suite d’instructions, traduites en binaire par un compilateur.",
          "Pourquoi l’utilise-t-on ? → Pour donner des ordres simples à l’ordinateur (afficher, calculer, etc.).",
          "Comment le construire seul ? → Écrire le code dans un fichier .c, le compiler avec gcc, exécuter le fichier obtenu.",
          "Vérification ultime :",
          "Modifie le programme pour qu’il affiche \"C est génial !\" à la place de \"Bonjour\". Fais-le mentalement, sans ouvrir l’ordinateur."
        ],
        "visual": "(Visuel : trois cases à cocher avec les 3 questions, et une étoile pour la vérification.)"
      }
    ],
    "keywords": [
      "printf",
      "main",
      "return",
      "include",
      "int",
      "long",
      "if",
      "for"
    ]
  },
  {
    "id": 2,
    "title": "LES VARIABLES ET LES TYPES DE BASE",
    "subtitle": "Stocker des nombres et des lettres dans la mémoire de l’ordinateur",
    "icon": "Box",
    "objective": "Stocker des nombres et des lettres dans la mémoire de l’ordinateur",
    "blocks": [
      {
        "type": "title",
        "title": "TITRE",
        "content": [
          "Titre : Chapitre 2 – Les variables et les types de base",
          "Sous-titre : Stocker des nombres et des lettres dans la mémoire de l’ordinateur"
        ],
        "visual": "(Visuel : une grande image de plusieurs petites cases (mémoire) avec des étiquettes comme « age », « prix », « lettre ». Certaines cases contiennent des nombres, d’autres des lettres.)"
      },
      {
        "type": "situation",
        "title": "SITUATION RÉELLE",
        "content": [
          "Texte :",
          "Tu veux calculer l’âge d’une personne dans 10 ans.",
          "Tu veux additionner deux prix dans un supermarché.",
          "Tu veux stocker la première lettre du prénom d’un utilisateur.",
          "L’ordinateur doit retenir ces valeurs pendant qu’il calcule."
        ],
        "visual": "(Visuel : une main humaine qui écrit « 25 » sur un papier, une calculatrice qui affiche un résultat, et une flèche vers un écran d’ordinateur avec des cases.)"
      },
      {
        "type": "problem",
        "title": "PROBLÈME À COMPRENDRE",
        "content": [
          "Texte :",
          "L’ordinateur a une mémoire (la RAM).",
          "Cette mémoire est découpée en millions de petites cases.",
          "Chaque case peut contenir un nombre, mais elle n’a pas de nom par défaut.",
          "Pour nous humains, retenir des adresses du type « case n° 4 285 921 » est impossible."
        ],
        "visual": "(Visuel : une immense grille de cases grises numérotées de manière aléatoire (ex: 0x7A3F, 0x7A40…). Un visage perdu au milieu.)"
      },
      {
        "type": "question",
        "title": "QUESTION QUE L’ÉTUDIANT DOIT SE POSER",
        "content": [
          "Texte :",
          "« Comment donner un nom facile à retenir à une case mémoire, pour y ranger et retrouver mes valeurs ? »"
        ],
        "visual": "(Visuel : une case grise vide, avec une étiquette blanche accrochée dessus. Sur l’étiquette, un point d’interrogation.)"
      },
      {
        "type": "reasoning",
        "title": "RAISONNEMENT",
        "content": [
          "Texte :",
          "En C, on va donner un nom à une case mémoire : c’est une variable.",
          "On décide aussi du type de ce qu’on va ranger :",
          "un nombre entier (ex: 25) → type int",
          "un nombre à virgule (ex: 3.14) → type float",
          "un seul caractère (ex: ‘A’) → type char",
          "Le compilateur choisit automatiquement une case libre et y associe notre nom."
        ],
        "visual": "(Visuel : trois boîtes colorées. La bleue étiquetée « int » contient « 25 ». La verte « float » contient « 3.14 ». La rouge « char » contient « A ».)"
      },
      {
        "type": "rule",
        "title": "RÈGLE (À RETENIR)",
        "content": [
          "Texte :",
          "Les 3 étapes pour utiliser une variable :",
          "Déclarer : donner un nom et un type (ex: int age;).",
          "Affecter : ranger une valeur dans la case (ex: age = 25;).",
          "Initialiser : déclarer ET ranger en une seule fois (ex: int age = 25;).",
          "Règle d’or : Une variable ne peut contenir qu’une valeur à la fois. Si on en met une nouvelle, l’ancienne est écrasée."
        ],
        "visual": "(Visuel : une case avec une étiquette « age ». Première étape : case vide avec le nom. Deuxième étape : on met « 25 » dedans. Troisième étape : on met « 26 » à la place, le 25 disparaît (effacé).)"
      },
      {
        "type": "visual",
        "title": "REPRÉSENTATION VISUELLE DES TYPES",
        "content": [
          "Texte :",
          "Couleurs fonctionnelles pour ce chapitre :",
          "🟦 BLEU = int (nombres entiers, sans virgule).",
          "🟩 VERT = float (nombres réels, avec virgule).",
          "🟥 ROUGE = char (un seul caractère, entre guillemets simples ' ').",
          "Taille approximative (pour se représenter) :",
          "int : une grande case (4 octets).",
          "float : une grande case (4 octets) mais avec un format spécial.",
          "char : une toute petite case (1 octet)."
        ],
        "visual": "(Visuel : trois cases de tailles différentes, colorées selon la légende, avec des exemples à l’intérieur : int age = 30, float prix = 9.99, char initiale = 'J'.)"
      },
      {
        "type": "example",
        "title": "EXEMPLE GUIDÉ (DÉCOUVERTE DU CODE)",
        "content": [
          "Texte :",
          "Voici un premier programme complet qui utilise une variable :"
        ],
        "code": {
          "code": "#include <stdio.h>int main() {    int age;          // Étape 1 : déclaration    age = 25;         // Étape 2 : affectation    printf(\"%d\", age); // Étape 3 : affichage    return 0;}\nConsigne : Ne retiens pas tout. Nous allons décortiquer chaque ligne."
        },
        "visual": "(Visuel : le code coloré. Le mot int en bleu, age en jaune, 25 en orange, %d en magenta.)"
      },
      {
        "type": "example",
        "title": "EXEMPLE CONSTRUIT ÉTAPE 1 : LA DÉCLARATION",
        "content": [
          "Texte :",
          "int age;",
          "On demande une case mémoire.",
          "On l’appelle age.",
          "On précise qu’elle ne contiendra que des nombres entiers (int).",
          "La case est pour l’instant vide (elle contient des données aléatoires, mais on ne s’en sert pas)."
        ],
        "visual": "(Visuel : une grande case bleue vide, avec une étiquette « age » accrochée dessus. Un point d’interrogation à l’intérieur.)"
      },
      {
        "type": "example",
        "title": "EXEMPLE CONSTRUIT ÉTAPE 2 : L’AFFECTATION",
        "content": [
          "Texte :",
          "age = 25;",
          "Le signe = ne veut pas dire « est égal à » (contrairement aux maths).",
          "Il signifie : « mettre la valeur de droite dans la case de gauche ».",
          "On range le nombre 25 dans la case age.",
          "L’ancienne valeur (s’il y en avait une) est effacée."
        ],
        "visual": "(Visuel : la case bleue étiquetée « age » contient maintenant le nombre 25 en gros. Une flèche jaune part du = et pointe vers la case.)"
      },
      {
        "type": "example",
        "title": "EXEMPLE CONSTRUIT ÉTAPE 3 : L’AFFICHAGE AVEC printf",
        "content": [
          "Texte :",
          "printf(\"%d\", age);",
          "Pour afficher une variable, on ne met pas son nom directement entre guillemets.",
          "On utilise un code de format :",
          "%d → afficher un nombre entier (d pour décimal).",
          "Le %d est un emplacement réservé.",
          "Le mot age (après la virgule) donne la valeur à placer à cet emplacement."
        ],
        "visual": "(Visuel : une flèche qui montre %d dans les guillemets, puis une autre flèche qui relie age à %d. Un écran affiche « 25 » à la fin.)"
      },
      {
        "type": "example",
        "title": "EXEMPLE CONSTRUIT ÉTAPE 4 : LES AUTRES TYPES EN AFFICHAGE",
        "content": [
          "Texte :",
          "Chaque type a son propre code pour printf :",
          "int → %d (ou %i)",
          "float → %f (affiche 6 décimales par défaut, ex: 3.140000)",
          "char → %c (affiche le caractère lui-même)",
          "Exemple :"
        ],
        "code": {
          "code": "int a = 10;float b = 2.5;char c = 'Z';printf(\"%d %f %c\", a, b, c);\nAffiche : 10 2.500000 Z"
        },
        "visual": "(Visuel : un tableau avec 3 colonnes : Type, Code, Exemple. Les couleurs correspondent.)"
      },
      {
        "type": "example",
        "title": "EXEMPLE CONSTRUIT ÉTAPE 5 : INITIALISATION (DÉCLARATION + AFFECTATION)",
        "content": [
          "Texte :",
          "On peut faire les deux en même temps :"
        ],
        "code": {
          "code": "int age = 25;   // Déclare ET range 25float prix = 9.99;char initiale = 'A';\nC’est plus court, et on évite d’oublier de mettre une valeur.\nRègle : Toujours initialiser ses variables dès que possible."
        },
        "visual": "(Visuel : une double flèche qui fusionne les étapes 1 et 2 en une seule. La case est directement remplie.)"
      },
      {
        "type": "example",
        "title": "EXEMPLE CONSTRUIT ÉTAPE 6 : LIRE UNE VARIABLE AVEC scanf (INTRODUCTION)",
        "content": [
          "Texte :",
          "Pour que l’utilisateur entre une valeur au clavier, on utilise scanf."
        ],
        "code": {
          "code": "int age;printf(\"Donne ton age : \");scanf(\"%d\", &age);printf(\"Tu as %d ans\", age);\nscanf = scan (lire) formaté.\nOn met %d pour dire « attendstoi à un nombre entier ».\nLe & devant age signifie « donne-moi l’adresse de la case age » (on expliquera cela plus tard ; pour l’instant, retiens qu’il faut le mettre pour scanf)."
        },
        "visual": "(Visuel : un clavier relié à la case age. Une flèche entre &age et la case mémoire.)"
      },
      {
        "type": "error",
        "title": "ERREUR FRÉQUENTE N°1 : OUBLIER LE & DANS scanf",
        "content": [
          "Texte :",
          "❌ Code faux :"
        ],
        "code": {
          "code": "scanf(\"%d\", &age);\nAstuce visuelle : le & est comme une flèche qui dit « va ranger ça DANS la case ». Sans lui, on donne juste le contenu de la case (qui est vide !)."
        },
        "visual": "(Visuel : une case sans & → la flèche se perd. Avec & → la flèche entre proprement dans la case.)"
      },
      {
        "type": "error",
        "title": "ERREUR FRÉQUENTE N°2 : MAUVAIS CODE DE FORMAT",
        "content": [
          "Texte :",
          "❌ Code faux :"
        ],
        "code": {
          "code": "printf(\"%f\", prix);\nRègle : Le code de format doit correspondre au type de la variable."
        },
        "visual": "(Visuel : une clé (format) qui ne correspond pas à la serrure (type) → elle coince. Une clé verte %f entre parfaitement dans la serrure float.)"
      },
      {
        "type": "error",
        "title": "ERREUR FRÉQUENTE N°3 : UTILISER UNE VARIABLE NON INITIALISÉE",
        "content": [
          "Texte :",
          "❌ Code faux :"
        ],
        "code": {
          "code": "int age;printf(\"%d\", age);   // age n’a jamais reçu de valeur\nConséquence : affiche un nombre complètement aléatoire (ce qui traînait dans la case mémoire).\n✅ Règle d’or : Toujours donner une valeur à une variable avant de l’afficher ou de l’utiliser."
        },
        "visual": "(Visuel : une case avec des déchets aléatoires « 67384 » dedans, avec une alerte rouge.)"
      },
      {
        "type": "exercise",
        "title": "PETIT EXERCICE",
        "content": [
          "Texte :",
          "À toi de jouer !",
          "Écris un programme C complet qui :",
          "Déclare une variable float nommée taille.",
          "Initialise-la avec la valeur 1.75.",
          "Affiche le message : Ma taille est 1.750000 mètres.",
          "(Utilise printf avec le bon format.)"
        ],
        "visual": "(Visuel : un mètre ruban avec la valeur 1.75, et un écran vierge avec un curseur.)"
      },
      {
        "type": "correction",
        "title": "CORRECTION EXPLIQUÉE",
        "content": [
          "Texte :",
          "Voici la solution :"
        ],
        "code": {
          "code": "#include <stdio.h>int main() {    float taille = 1.75;    printf(\"Ma taille est %f mètres\", taille);    return 0;}\nPourquoi c’est juste ?\nfloat : bon type pour un nombre à virgule.\nInitialisation directe (= 1.75).\n%f dans printf pour afficher un float.\nLa variable taille est bien passée en 2e argument de printf."
        },
        "visual": "(Visuel : le code est entouré de vert, et l’écran affiche le résultat attendu.)"
      },
      {
        "type": "verification",
        "title": "VÉRIFICATION AUTONOME",
        "content": [
          "Texte :",
          "Sans utiliser l’ordinateur, trouve les 2 erreurs dans ce code :"
        ],
        "code": {
          "code": "#include <stdio.h>int main() {    int note    note = 15;    printf(\"Votre note est %f\", note);    return 0;}\nQuestions à te poser :\nY atil un ; après la déclaration ?\nLe type de note est-il compatible avec le format %f ?\nRéponses :\nIl manque un ; après int note.\n%f est pour float, mais note est un int. Il faut utiliser %d."
        },
        "visual": "(Visuel : une loupe rouge qui pointe l’absence de ; et une autre qui pointe %f.)"
      },
      {
        "type": "summary",
        "title": "PASSAGE À L’AUTONOMIE (BILAN DU CHAPITRE 2)",
        "content": [
          "Texte :",
          "Tu dois maintenant être capable de répondre à ces 3 questions :",
          "Qu’est-ce que c’est ? → Une variable est une case mémoire nommée, qui contient une valeur d’un certain type (int, float, char).",
          "Pourquoi l’utilise-t-on ? → Pour stocker des données temporaires (âge, prix, lettre) et les réutiliser dans le programme.",
          "Comment le construire seul ? → Déclarer (type nom;), affecter (nom = valeur;), afficher avec le bon code (%d, %f, %c) et lire avec scanf (en pensant au &).",
          "Vérification ultime :",
          "Écris un programme qui demande à l’utilisateur son âge (entier) et affiche : Dans 5 ans, tu auras X ans. Fais-le mentalement (ou sur papier)."
        ],
        "visual": "(Visuel : trois cases à cocher avec les questions, et une étoile pour la vérification.)"
      }
    ],
    "keywords": [
      "printf",
      "scanf",
      "main",
      "return",
      "include",
      "int",
      "float",
      "char"
    ]
  },
  {
    "id": 3,
    "title": "LES OPÉRATEURS",
    "subtitle": "Calculer, comparer et prendre des décisions avec des symboles",
    "icon": "Calculator",
    "objective": "Calculer, comparer et prendre des décisions avec des symboles",
    "blocks": [
      {
        "type": "title",
        "title": "TITRE",
        "content": [
          "Titre : Chapitre 3 – Les opérateurs",
          "Sous-titre : Calculer, comparer et prendre des décisions avec des symboles"
        ],
        "visual": "(Visuel : une grande image d’une calculette, d’un panneau de comparaison (>, <, =) et d’un interrupteur (vrai/faux), le tout relié par des flèches.)"
      },
      {
        "type": "situation",
        "title": "SITUATION RÉELLE",
        "content": [
          "Texte :",
          "Tu veux calculer le prix total de 3 pommes à 2 € pièce → multiplication.",
          "Tu veux savoir si ton âge est supérieur à 18 ans → comparaison.",
          "Tu veux vérifier qu’il fait soleil ET qu’il ne pleut pas avant de sortir → logique.",
          "L’ordinateur doit faire ces calculs et ces tests très rapidement."
        ],
        "visual": "(Visuel : une caisse de pommes avec « 3 × 2 € », une carte d’identité avec « âge > 18 ? », un ciel avec soleil et nuage.)"
      },
      {
        "type": "problem",
        "title": "PROBLÈME À COMPRENDRE",
        "content": [
          "Texte :",
          "En maths, on écrit « 3 × 4 » ou « a > b ».",
          "En C, on doit écrire ces symboles différemment, car le clavier n’a pas tout.",
          "Par exemple, la multiplication s’écrit * et non ×.",
          "L’ordinateur a besoin d’instructions très précises, sans ambiguïté."
        ],
        "visual": "(Visuel : un clavier avec les touches *, =, ! mises en évidence. À côté, une feuille de maths avec « × » et « > » barrés, remplacés par * et >.)"
      },
      {
        "type": "question",
        "title": "QUESTION QUE L’ÉTUDIANT DOIT SE POSER",
        "content": [
          "Texte :",
          "« Quels sont les bons symboles en C pour calculer, comparer et tester plusieurs conditions ? »",
          "*(Visuel : un point d’interrogation géant composé de symboles comme +, -, , /, ==, &&, !.)"
        ]
      },
      {
        "type": "reasoning",
        "title": "RAISONNEMENT (DÉCOMPOSITION EN 3 FAMILLES)",
        "content": [
          "Texte :",
          "On classe les opérateurs en 3 familles, que l’on apprendra dans l’ordre :",
          "Arithmétiques : pour faire des calculs (+, -, *, /, %).",
          "De comparaison : pour tester des relations (<, >, ==, !=, <=, >=).",
          "Logiques : pour combiner des tests (&&, ||, !).",
          "Principe fondamental : chaque opérateur renvoie un résultat.",
          "Un calcul renvoie un nombre.",
          "Une comparaison renvoie 1 (vrai) ou 0 (faux)."
        ],
        "visual": "(Visuel : trois boîtes colorées : arithmétique en bleu, comparaison en orange, logique en vert. Chacune montre un exemple de résultat.)"
      },
      {
        "type": "rule",
        "title": "RÈGLE GÉNÉRALE (À RETENIR AVANT D’ENTRER DANS LE DÉTAIL)",
        "content": [
          "Texte :",
          "Les 3 règles d’or des opérateurs :",
          "Un opérateur s’utilise toujours avec des valeurs (variables ou nombres) : a + b.",
          "Le résultat peut être stocké dans une variable : int resultat = a + b;.",
          "Les parenthèses ( ) permettent de forcer l’ordre des calculs (comme en maths).",
          "PARTIE 1 – OPÉRATEURS ARITHMÉTIQUES"
        ],
        "visual": "(Visuel : un schéma « opérateur + opérandes = résultat » avec des flèches. Exemple : (3 + 5) * 2 → les parenthèses sont surlignées.)"
      },
      {
        "type": "visual",
        "title": "REPRÉSENTATION VISUELLE DES OPÉRATEURS ARITHMÉTIQUES",
        "content": [
          "Texte :",
          "Couleurs fonctionnelles (pour ce chapitre) :",
          "🔵 BLEU : opérateurs arithmétiques (+, -, *, /, %).",
          "🟠 ORANGE : opérateurs de comparaison (==, !=, <, >, <=, >=).",
          "🟢 VERT : opérateurs logiques (&&, ||, !).",
          "Tableau des arithmétiques :",
          "Symbole",
          "Nom",
          "Exemple",
          "Résultat",
          "+",
          "Addition",
          "5 + 2",
          "7",
          "-",
          "Soustraction",
          "5 - 2",
          "3",
          "*",
          "Multiplication",
          "5 * 2",
          "10",
          "/",
          "Division",
          "5 / 2",
          "2 (entier) / 2.5 (réel)",
          "%",
          "Modulo (reste)",
          "5 % 2",
          "1"
        ],
        "visual": "(Visuel : tableau bien structuré avec des couleurs. Les symboles sont en gros caractères.)"
      },
      {
        "type": "example",
        "title": "EXEMPLE CONSTRUIT ÉTAPE 1 : DIVISION ENTIÈRE VS RÉELLE",
        "content": [
          "Texte :",
          "Piège immédiat : en C, 5 / 2 ne donne pas 2.5 si les deux sont des int.",
          "Si on divise deux entiers, le résultat est tronqué (partie décimale supprimée).",
          "5 / 2 → 2 (et non 2.5).",
          "Pour obtenir 2.5, il faut qu’au moins un des deux soit un float : 5.0 / 2 ou 5 / 2.0."
        ],
        "visual": "(Visuel : deux cases côte à côte. À gauche : int a = 5; int b = 2; → division → résultat 2 (partie décimale coupée). À droite : float a = 5.0; int b = 2; → résultat 2.5.)"
      },
      {
        "type": "example",
        "title": "EXEMPLE CONSTRUIT ÉTAPE 2 : LE MODULO % (RESTE)",
        "content": [
          "Texte :",
          "% donne le reste de la division entière.",
          "7 % 3 → 7 divisé par 3 = 2, reste 1 → résultat 1.",
          "10 % 4 → reste 2.",
          "Utile pour savoir si un nombre est pair (n % 2 == 0).",
          "Règle importante : % ne s’utilise qu’avec des entiers (int). Pas avec des float."
        ],
        "visual": "(Visuel : une division posée : 7 ÷ 3 = 2, reste 1. La flèche pointe vers le 1 et dit « voici le modulo ».)"
      },
      {
        "type": "example",
        "title": "EXEMPLE GUIDÉ (ARITHMÉTIQUE)",
        "content": [
          "Texte :",
          "Voici un programme complet avec des calculs :"
        ],
        "code": {
          "code": "#include <stdio.h>int main() {    int a = 10;    int b = 3;    int somme = a + b;    int produit = a * b;    int quotient = a / b;  // 10/3 = 3 (tronqué)    int reste = a % b;     // 10%3 = 1    printf(\"Somme=%d, Produit=%d, Quotient=%d, Reste=%d\", somme, produit, quotient, reste);    return 0;}\nAffichage : Somme=13, Produit=30, Quotient=3, Reste=1\nPARTIE 2 – OPÉRATEURS DE COMPARAISON"
        },
        "visual": "(Visuel : le code est affiché avec chaque opérateur en bleu. Un écran à côté montre le résultat.)"
      },
      {
        "type": "visual",
        "title": "REPRÉSENTATION VISUELLE DES COMPARAISONS",
        "content": [
          "Texte :",
          "Ils servent à tester une relation entre deux valeurs. Le résultat est toujours 1 (vrai) ou 0 (faux).",
          "Symbole",
          "Signification",
          "Exemple",
          "Résultat",
          "==",
          "Égal à",
          "5 == 5",
          "1 (vrai)",
          "!=",
          "Différent de",
          "5 != 3",
          "1 (vrai)",
          ">",
          "Supérieur à",
          "5 > 3",
          "1 (vrai)",
          "<",
          "Inférieur à",
          "5 < 3",
          "0 (faux)",
          ">=",
          "Supérieur ou égal",
          "5 >= 5",
          "1 (vrai)",
          "<=",
          "Inférieur ou égal",
          "5 <= 4",
          "0 (faux)"
        ],
        "visual": "(Visuel : un tableau couleur orange, avec une colonne « Résultat » qui affiche 1 ou 0.)"
      },
      {
        "type": "example",
        "title": "EXEMPLE CONSTRUIT ÉTAPE 1 : NE PAS CONFONDRE = ET ==",
        "content": [
          "Texte :",
          "= = affectation (mettre une valeur dans une case).",
          "== = comparaison (tester si deux valeurs sont égales).",
          "Exemple dans un programme :"
        ],
        "code": {
          "code": "int age = 18;        // on met 18 dans age (affectation)if (age == 18) { ... }  // on teste si age vaut 18 (comparaison)\nSi on écrit if (age = 18), c’est une affectation (et une erreur logique !)."
        },
        "visual": "(Visuel : deux icônes côte à côte. L’une = avec une flèche vers une case (ranger). L’autre == avec une balance (comparer).)"
      },
      {
        "type": "example",
        "title": "EXEMPLE GUIDÉ (COMPARAISON)",
        "content": [
          "Texte :"
        ],
        "code": {
          "code": "#include <stdio.h>int main() {    int x = 7;    int y = 10;    int test1 = (x == y);  // 7 == 10 ? faux → 0    int test2 = (x < y);   // 7 < 10 ? vrai → 1    printf(\"test1=%d, test2=%d\", test1, test2);    return 0;}\nAffichage : test1=0, test2=1\nPARTIE 3 – OPÉRATEURS LOGIQUES"
        },
        "visual": "(Visuel : le code avec les comparaisons en orange. Un petit tableau montre les valeurs de test1 et test2.)"
      },
      {
        "type": "visual",
        "title": "REPRÉSENTATION VISUELLE DES LOGIQUES",
        "content": [
          "Texte :",
          "Ils combinent plusieurs tests (qui sont déjà des 1 ou 0).",
          "Symbole",
          "Nom",
          "Règle",
          "Exemple (vrai=1, faux=0)",
          "&&",
          "ET logique",
          "Vrai si les deux sont vrais",
          "(5>3) && (2<4) → 1",
          "||",
          "OU logique",
          "Vrai si au moins un est vrai",
          "(5<3) || (2<4) → 1",
          "!",
          "NON logique",
          "Inverse le résultat",
          "!(5>3) → 0"
        ],
        "visual": "(Visuel : trois circuits électriques en vert. Le ET : deux interrupteurs en série. Le OU : deux interrupteurs en parallèle. Le NON : un interrupteur qui s’inverse.)"
      },
      {
        "type": "example",
        "title": "EXEMPLE CONSTRUIT ÉTAPE 1 (ET/OU)",
        "content": [
          "Texte :",
          "Exemple concret :",
          "Pour entrer en discothèque, il faut avoir plus de 18 ans ET ne pas être ivre.",
          "En C : (age >= 18) && (ivresse == 0).",
          "Autre exemple :",
          "Tu prends le parapluie s’il pleut OU s’il y a du vent.",
          "En C : (pluie == 1) || (vent == 1)."
        ],
        "visual": "(Visuel : deux schémas. Le premier : deux conditions avec une porte ET. Le second : deux conditions avec une porte OU.)"
      },
      {
        "type": "example",
        "title": "EXEMPLE GUIDÉ (LOGIQUE)",
        "content": [
          "Texte :"
        ],
        "code": {
          "code": "#include <stdio.h>int main() {    int a = 5;    int b = 3;    int c = 8;    int resultat = (a < b) && (b < c); // 5<3 ? faux, donc tout est faux    printf(\"résultat = %d\", resultat);  // affiche 0    return 0;}\nPARTIE 4 – OPÉRATEURS D’INCRÉMENTATION ET D’AFFECTATION COMPOSÉE"
        },
        "visual": "(Visuel : le code avec les opérateurs logiques en vert. Une animation montre que a < b est faux (0), donc le && donne directement 0 sans évaluer la suite – on peut mentionner ce « court-circuit » si souhaité, mais on garde simple pour ce chapitre.)"
      },
      {
        "type": "visual",
        "title": "REPRÉSENTATION VISUELLE (RACCOURCIS)",
        "content": [
          "Texte :",
          "Il existe des raccourcis très utiles pour modifier une variable.",
          "++ : ajouter 1 (incrémenter).",
          "-- : enlever 1 (décrémenter).",
          "Exemples :"
        ],
        "code": {
          "code": "int compteur = 0;compteur++;   // compteur devient 1compteur--;   // compteur redevient 0\nAffectation composée :\nÉcriture longue\nRaccourci\na = a + 5;\na += 5;\nb = b - 3;\nb -= 3;\nc = c * 2;\nc *= 2;\nd = d / 4;\nd /= 4;\ne = e % 10;\ne %= 10;"
        },
        "visual": "(Visuel : un tableau comparatif. À gauche les écritures longues, à droite les raccourcis. Une flèche bleue relie les deux.)"
      },
      {
        "type": "error",
        "title": "ERREUR FRÉQUENTE N°1 : = AU LIEU DE == DANS UN TEST",
        "content": [
          "Texte :",
          "❌ Code faux :"
        ],
        "code": {
          "code": "if (age = 18) { printf(\"Tu as 18 ans\"); }\nConséquence : on affecte 18 à age (qui devient 18), et le test est toujours vrai (car 18 != 0).\n✅ Code correct : if (age == 18)\nAstuce : pour éviter cela, certains écrivent if (18 == age) – si on oublie un =, le compilateur détecte l’erreur."
        },
        "visual": "(Visuel : une alerte rouge avec un point d’exclamation sur = dans un test.)"
      },
      {
        "type": "error",
        "title": "ERREUR FRÉQUENTE N°2 : DIVISION ENTIÈRE PAR MÉGARDE",
        "content": [
          "Texte :",
          "❌ Code faux :"
        ],
        "code": {
          "code": "float moyenne = (float)note / total;  // ou note / 20.0"
        },
        "visual": "(Visuel : deux cases. L’une avec note/total qui donne 0 (gros X rouge). L’autre avec (float)note/total qui donne 0.85 (coche verte).)"
      },
      {
        "type": "error",
        "title": "ERREUR FRÉQUENTE N°3 : OUBLIER LES PARENTHÈSES POUR L’ORDRE DES OPÉRATIONS",
        "content": [
          "Texte :",
          "❌ Code faux :"
        ],
        "code": {
          "code": "int resultat = 10 + 2 * 3;   // 10 + 6 = 16 (car * prioritaire)\nSi on voulait (10+2)*3 = 36, il faut des parenthèses.\n✅ Code correct : int resultat = (10 + 2) * 3;\nRègle : En cas de doute, mets des parenthèses – c’est plus clair et plus sûr."
        },
        "visual": "(Visuel : deux arbres de calcul. Le premier avec la multiplication prioritaire (résultat 16). Le second avec les parenthèses (résultat 36).)"
      },
      {
        "type": "exercise",
        "title": "PETIT EXERCICE",
        "content": [
          "Texte :",
          "À toi de jouer !",
          "Écris un programme C qui :",
          "Déclare trois variables int : a = 20, b = 6, c = 4.",
          "Calcule et affiche le résultat de cette expression :",
          "(a + b) / c - 2",
          "Affiche aussi 1 si a est plus grand que b ET c est différent de 0, sinon 0.",
          "(Indice : utilise les bons opérateurs et les bons codes %d.)"
        ],
        "visual": "(Visuel : l’expression écrite en grand, avec un espace vide pour le code.)"
      },
      {
        "type": "correction",
        "title": "CORRECTION EXPLIQUÉE",
        "content": [
          "Texte :",
          "Voici la solution :"
        ],
        "code": {
          "code": "#include <stdio.h>int main() {    int a = 20, b = 6, c = 4;    int calcul = (a + b) / c - 2;  // (26) / 4 = 6 (tronqué), -2 = 4    int test = (a > b) && (c != 0);  // vrai && vrai = 1    printf(\"Calcul = %d\\n\", calcul);    printf(\"Test = %d\\n\", test);    return 0;}\nPourquoi c’est juste ?\n(a+b)/c - 2 → 26/4 = 6 (division entière) → 6-2 = 4.\n(a > b) → 20 > 6 = vrai (1) ; (c != 0) → 4 != 0 = vrai (1) ; && donne 1.\nLes parenthèses sont bien placées."
        },
        "visual": "(Visuel : le code en vert, et l’affichage à côté : Calcul = 4 et Test = 1.)"
      },
      {
        "type": "verification",
        "title": "VÉRIFICATION AUTONOME",
        "content": [
          "Texte :",
          "Sans utiliser l’ordinateur, trouve la valeur affichée par ce programme :"
        ],
        "code": {
          "code": "#include <stdio.h>int main() {    int x = 5;    int y = 2;    int z = 8;    int r = x * y + z / y;    int s = (x * y) + (z / y);    printf(\"r=%d, s=%d\", r, s);    return 0;}\nQuestions à te poser :\nQuelle est la priorité de * et / par rapport à + ?\nLes parenthèses changent-elles quelque chose ici ?\nRéponse :\nx*y = 10, z/y = 8/2 = 4 (division entière), donc 10+4 = 14.\nLes parenthèses ne changent rien car * et / sont prioritaires sur +.\nLe programme affiche : r=14, s=14."
        },
        "visual": "(Visuel : le code est affiché, et une loupe pointe les opérateurs prioritaires. Le résultat en gros : 14.)"
      },
      {
        "type": "summary",
        "title": "PASSAGE À L’AUTONOMIE (BILAN DU CHAPITRE 3)",
        "content": [
          "Texte :",
          "Tu dois maintenant être capable de répondre à ces 3 questions :",
          "Qu’est-ce que c’est ? → Les opérateurs sont des symboles qui effectuent des calculs (+, -, *, /, %), des comparaisons (==, !=, <, > …) ou des combinaisons logiques (&&, ||, !).",
          "Pourquoi l’utilise-t-on ? → Pour transformer des données, tester des conditions et prendre des décisions dans le programme.",
          "Comment le construire seul ? → En écrivant des expressions avec des variables et des opérateurs, en stockant le résultat dans une variable, et en utilisant des parenthèses pour clarifier l’ordre.",
          "Vérification ultime :",
          "Écris un programme qui :",
          "Demande deux nombres entiers à l’utilisateur (scanf).",
          "Affiche 1 si le premier est supérieur ou égal au second ET que le second est pair (utilise %), sinon 0.",
          "Fais-le sur papier avant de tester sur machine."
        ],
        "visual": "(Visuel : trois cases à cocher avec les questions, et une étoile pour la vérification.)"
      }
    ],
    "keywords": [
      "printf",
      "scanf",
      "main",
      "return",
      "include",
      "int",
      "float",
      "long"
    ]
  },
  {
    "id": 4,
    "title": "LES CONDITIONS (if, else, switch)",
    "subtitle": "Faire choisir l’ordinateur selon une situation (si… sinon…)",
    "icon": "GitBranch",
    "objective": "Faire choisir l’ordinateur selon une situation (si… sinon…)",
    "blocks": [
      {
        "type": "title",
        "title": "TITRE",
        "content": [
          "Titre : Chapitre 4 – Les conditions",
          "Sous-titre : Faire choisir l’ordinateur selon une situation (si… sinon…)"
        ],
        "visual": "(Visuel : un embranchement routier. À gauche, une route « pluie » avec un parapluie. À droite, une route « soleil » avec des lunettes. Le panneau indique « if (pluie) ».)"
      },
      {
        "type": "situation",
        "title": "SITUATION RÉELLE",
        "content": [
          "Texte :",
          "Tu veux afficher « Tu es majeur » si l’âge est ≥ 18, sinon « Tu es mineur ».",
          "Tu veux calculer le prix d’un billet : réduit pour les enfants (< 12 ans), plein tarif pour les autres.",
          "Tu veux afficher une mention différente selon la note (A, B, C, D).",
          "L’ordinateur doit tester une condition et choisir quel code exécuter."
        ],
        "visual": "(Visuel : un guichet automatique avec des options ; une carte d’identité avec un âge ; un bulletin scolaire.)"
      },
      {
        "type": "problem",
        "title": "PROBLÈME À COMPRENDRE",
        "content": [
          "Texte :",
          "Sans conditions, le programme exécute toutes les lignes dans l’ordre, sans réfléchir.",
          "Or, la vie réelle est pleine de décisions : « si ceci est vrai, alors je fais cela, sinon je fais autre chose ».",
          "Il faut un outil en C pour exprimer : « Si (test) alors { actions } sinon { autres actions } »."
        ],
        "visual": "(Visuel : une suite de blocs rectilignes (programme linéaire) vs un schéma avec un embranchement en Y.)"
      },
      {
        "type": "question",
        "title": "QUESTION QUE L’ÉTUDIANT DOIT SE POSER",
        "content": [
          "Texte :",
          "« Comment écrire en C : “Si telle condition est vraie, exécute ce bloc, sinon exécute cet autre bloc” ? »"
        ],
        "visual": "(Visuel : un grand point d’interrogation posé sur une balance avec deux plateaux.)"
      },
      {
        "type": "reasoning",
        "title": "RAISONNEMENT (DÉCOMPOSITION)",
        "content": [
          "Texte :",
          "On va apprendre 3 structures conditionnelles, de la plus simple à la plus complète :",
          "if : exécute un bloc seulement si la condition est vraie.",
          "if / else : exécute le bloc if si vrai, sinon le bloc else.",
          "else if : enchaîne plusieurs tests.",
          "switch : une alternative pour tester l’égalité d’une variable avec plusieurs valeurs.",
          "Rappel : une condition est une expression qui donne 1 (vrai) ou 0 (faux) (on utilise souvent les opérateurs de comparaison du chapitre 3)."
        ],
        "visual": "(Visuel : quatre boîtes empilées, numérotées 1 à 4, avec des flèches de progression.)"
      },
      {
        "type": "rule",
        "title": "RÈGLE GÉNÉRALE (LA SYNTAXE DE if)",
        "content": [
          "Texte :",
          "Structure de base :"
        ],
        "code": {
          "code": "if (condition) {    // instructions exécutées si condition == 1 (vrai)}\nDeux règles impératives :\nLa condition doit être entre parenthèses ( ).\nLe bloc d’instructions est entre accolades { }. (Si une seule instruction, on peut les omettre, mais on recommande toujours de les mettre pour éviter les erreurs.)"
        },
        "visual": "(Visuel : un schéma de flux : un losange « condition ? » → si oui (1) → flèche vers un rectangle « actions ». Si non (0) → flèche qui contourne le rectangle.)"
      },
      {
        "type": "visual",
        "title": "REPRÉSENTATION VISUELLE (COULEURS)",
        "content": [
          "Texte :",
          "Couleurs fonctionnelles pour ce chapitre :",
          "🟣 MAGENTA : le mot-clé if.",
          "🔵 BLEU : le mot-clé else.",
          "🟠 ORANGE : le mot-clé switch, case, break.",
          "🟢 VERT : les conditions (comparaisons/logiques).",
          "⚫ NOIR : les instructions à exécuter.",
          "PARTIE 1 – LE if SEUL"
        ],
        "visual": "(Visuel : un extrait de code coloré avec la légende à côté.)"
      },
      {
        "type": "example",
        "title": "EXEMPLE CONSTRUIT ÉTAPE 1 (if seul)",
        "content": [
          "Texte :",
          "Problème : afficher « Tu es majeur ! » si l’âge est supérieur ou égal à 18."
        ],
        "code": {
          "code": "#include <stdio.h>int main() {    int age = 20;    if (age >= 18) {        printf(\"Tu es majeur !\");    }    return 0;}\nLa condition (age >= 18) est vraie (20 ≥ 18) → on exécute le printf.\nSi age valait 15, la condition serait fausse → on saute le printf."
        },
        "visual": "(Visuel : le code s’affiche. Une animation de flux : le losange contient age >= 18 ; la flèche VRAI mène au printf, la flèche FAUX contourne et va au return 0.)"
      },
      {
        "type": "example",
        "title": "EXEMPLE CONSTRUIT ÉTAPE 2 (if seul avec plusieurs instructions)",
        "content": [
          "Texte :",
          "On peut mettre plusieurs instructions dans le bloc if :"
        ],
        "code": {
          "code": "if (age >= 18) {    printf(\"Tu es majeur.\\n\");    printf(\"Tu peux voter.\\n\");}\nLes deux printf ne sont exécutés que si la condition est vraie.\nLes accolades délimitent le bloc : tout ce qui est à l’intérieur est groupé.\nPARTIE 2 – LE if / else"
        },
        "visual": "(Visuel : le code avec les deux lignes entourées par des accolades en surbrillance.)"
      },
      {
        "type": "example",
        "title": "EXEMPLE CONSTRUIT ÉTAPE 1 (if/else)",
        "content": [
          "Texte :",
          "Problème : afficher « Majeur » si ≥ 18, sinon « Mineur »."
        ],
        "code": {
          "code": "if (age >= 18) {    printf(\"Majeur\");} else {    printf(\"Mineur\");}\nSi condition vraie → on exécute le bloc if.\nSi condition fausse → on exécute le bloc else.\nUn et un seul des deux blocs est exécuté."
        },
        "visual": "(Visuel : schéma de flux avec le losange. Une flèche VRAI vers « Majeur », une flèche FAUX vers « Mineur ».)"
      },
      {
        "type": "example",
        "title": "EXEMPLE GUIDÉ (if/else avec calcul)",
        "content": [
          "Texte :",
          "Problème : afficher si un nombre est pair ou impair."
        ],
        "code": {
          "code": "int nombre = 7;if (nombre % 2 == 0) {    printf(\"Pair\");} else {    printf(\"Impair\");}\nnombre % 2 donne le reste de la division par 2.\nSi reste = 0 → pair → if exécuté.\nSinon → impair → else exécuté.\nPARTIE 3 – LE else if (ENCHAÎNEMENT)"
        },
        "visual": "(Visuel : le code avec les couleurs. Une bulle montre le calcul 7 % 2 = 1 donc c’est impair.)"
      },
      {
        "type": "example",
        "title": "EXEMPLE CONSTRUIT ÉTAPE 1 (else if)",
        "content": [
          "Texte :",
          "Problème : afficher une mention selon une note (sur 20) :",
          "≥ 16 → « Très bien »",
          "≥ 14 → « Bien »",
          "≥ 12 → « Assez bien »",
          "< 12 → « Insuffisant »"
        ],
        "code": {
          "code": "int note = 15;if (note >= 16) {    printf(\"Très bien\");} else if (note >= 14) {    printf(\"Bien\");} else if (note >= 12) {    printf(\"Assez bien\");} else {    printf(\"Insuffisant\");}\nFonctionnement : le programme teste les conditions dans l’ordre. Dès qu’une est vraie, il exécute son bloc et sort de toute la structure (les tests suivants ne sont pas évalués)."
        },
        "visual": "(Visuel : un schéma en cascade avec des losanges successifs. Dès qu’un losange est VRAI, on sort.)"
      },
      {
        "type": "error",
        "title": "ERREUR FRÉQUENTE AVEC else if (ORDRE DES TESTS)",
        "content": [
          "Texte :",
          "❌ Mauvais ordre :"
        ],
        "code": {
          "code": "if (note >= 12) {    printf(\"Assez bien\");} else if (note >= 14) {    printf(\"Bien\");   // jamais atteint si note >=14 car ≥12 est vrai d'abord !}\nRègle : On teste toujours les cas les plus stricts en premier (les plus grandes valeurs d’abord pour les seuils).\nPARTIE 4 – LE switch (ALTERNATIVE MULTIPLE)"
        },
        "visual": "(Visuel : un schéma où le premier losange capture toutes les valeurs ≥ 12, empêchant les suivants. Une croix rouge.)"
      },
      {
        "type": "visual",
        "title": "REPRÉSENTATION VISUELLE DU switch",
        "content": [
          "Texte :",
          "Quand on veut tester l’égalité d’une variable avec plusieurs valeurs, on peut utiliser switch (plutôt qu’un long else if).",
          "Syntaxe :"
        ],
        "code": {
          "code": "switch (variable) {    case valeur1: instructions; break;    case valeur2: instructions; break;    ...    default: instructions; break;}\ncase : compare la variable à une valeur.\nbreak : sort du switch (sinon il continue).\ndefault : si aucun case ne correspond (optionnel)."
        },
        "visual": "(Visuel : un disque rotatif avec plusieurs cases numérotées. L’aiguille s’arrête sur la bonne.)"
      },
      {
        "type": "example",
        "title": "EXEMPLE CONSTRUIT ÉTAPE 1 (switch)",
        "content": [
          "Texte :",
          "Problème : afficher le nom du mois (en chiffre 1 à 12)."
        ],
        "code": {
          "code": "int mois = 3;switch (mois) {    case 1: printf(\"Janvier\"); break;    case 2: printf(\"Février\"); break;    case 3: printf(\"Mars\"); break;    case 4: printf(\"Avril\"); break;    default: printf(\"Mois inconnu\"); break;}// Affiche \"Mars\"\nmois vaut 3 → on saute au case 3: et on exécute le printf.\nLe break empêche d’exécuter les cases suivants."
        },
        "visual": "(Visuel : un code coloré. Une flèche pointe du switch(mois) vers le case 3:.)"
      },
      {
        "type": "error",
        "title": "ERREUR FRÉQUENTE : OUBLIER LE break",
        "content": [
          "Texte :",
          "❌ Code faux (sans break) :"
        ],
        "code": {
          "code": "switch (mois) {    case 1: printf(\"Janvier\");    case 2: printf(\"Février\");    case 3: printf(\"Mars\");}\nSi mois = 1, il affiche « JanvierFévrierMars » (car il tombe dans case 1, puis continue sans s’arrêter).\n✅ Règle d’or : toujours mettre un break après chaque case (sauf si on veut volontairement faire tomber, mais ce n’est pas pour débutant).\nPARTIE 5 – L’OPÉRATEUR TERNAIRE (PETIT PLUS)"
        },
        "visual": "(Visuel : une chute d’escalier où le break est la seule barrière qui arrête la chute. Sans break, on dévale toutes les marches.)"
      },
      {
        "type": "example",
        "title": "EXEMPLE CONSTRUIT (TERNaire)",
        "content": [
          "Texte :",
          "Pour les choix très simples (une condition, deux valeurs), il existe un raccourci : l’opérateur ternaire ? :.",
          "Syntaxe : condition ? valeur_si_vrai : valeur_si_faux",
          "Exemple :"
        ],
        "code": {
          "code": "int age = 20;char* statut = (age >= 18) ? \"Majeur\" : \"Mineur\";printf(\"%s\", statut);\nC’est comme un if/else qui renvoie une valeur.\nÀ utiliser avec modération pour ne pas rendre le code illisible."
        },
        "visual": "(Visuel : une balance avec deux plateaux. D’un côté la condition, de l’autre les deux résultats.)"
      },
      {
        "type": "error",
        "title": "ERREUR FRÉQUENTE N°1 : = DANS LA CONDITION",
        "content": [
          "Texte :",
          "❌ Code faux :"
        ],
        "code": {
          "code": "if (age = 18) { ... }   // affectation, pas comparaison !\nCela met 18 dans age, puis teste la valeur (18 ≠ 0 donc vrai).\nLe programme ne fait pas ce qu’on attend.\n✅ Correction : if (age == 18).\nAstuce de pro : écrire if (18 == age) pour que, si on oublie un =, le compilateur détecte l’erreur (car 18 = age est invalide)."
        },
        "visual": "(Visuel : un feu rouge sur = et un feu vert sur ==.)"
      },
      {
        "type": "error",
        "title": "ERREUR FRÉQUENTE N°2 : OUBLIER LES ACCOLADES",
        "content": [
          "Texte :",
          "❌ Code faux (sans accolades) :"
        ],
        "code": {
          "code": "if (age >= 18)    printf(\"Majeur\");    printf(\"Tu peux voter\");   // cette ligne est toujours exécutée !\nSans accolades, le if ne concerne que la première instruction qui suit.\nLa seconde est exécutée quoi qu’il arrive.\n✅ Règle : mettez toujours des accolades { }, même pour une seule ligne. Cela évite 90 % des erreurs."
        },
        "visual": "(Visuel : deux flèches. Une seule est attachée au if, l’autre part directement du main.)"
      },
      {
        "type": "error",
        "title": "ERREUR FRÉQUENTE N°3 : default OUBLIÉ OU MAL PLACÉ",
        "content": [
          "Texte :",
          "❌ Code faux :"
        ],
        "code": {
          "code": "switch (mois) {    case 1: ... break;    case 2: ... break;    // pas de default}\nSi mois = 5, aucun case ne correspond, et rien ne s’affiche (comportement silencieux).\n✅ Bon réflexe : toujours prévoir un default pour gérer les valeurs inattendues, même si c’est juste pour afficher une erreur."
        },
        "visual": "(Visuel : un casier vide avec une étiquette « default » où l’on range tout ce qui ne rentre pas ailleurs.)"
      },
      {
        "type": "exercise",
        "title": "PETIT EXERCICE",
        "content": [
          "Texte :",
          "À toi de jouer !",
          "Écris un programme C qui :",
          "Demande à l’utilisateur un nombre entier (scanf).",
          "Affiche :",
          "« Positif » si le nombre est > 0.",
          "« Négatif » si le nombre est < 0.",
          "« Zéro » si le nombre est égal à 0.",
          "(Utilise if, else if, else.)"
        ],
        "visual": "(Visuel : un écran avec une ligne de saisie, et trois zones de résultat possibles.)"
      },
      {
        "type": "correction",
        "title": "CORRECTION EXPLIQUÉE",
        "content": [
          "Texte :",
          "Voici la solution :"
        ],
        "code": {
          "code": "#include <stdio.h>int main() {    int n;    printf(\"Donne un nombre : \");    scanf(\"%d\", &n);    if (n > 0) {        printf(\"Positif\");    } else if (n < 0) {        printf(\"Négatif\");    } else {        printf(\"Zéro\");    }    return 0;}\nPourquoi c’est juste ?\nOn teste d’abord n > 0. Si vrai → on affiche « Positif » et on sort.\nSinon, on teste n < 0. Si vrai → « Négatif ».\nSi aucun des deux n’est vrai, c’est forcément n == 0 → on tombe dans le else.\nL’ordre est logique et couvre tous les cas."
        },
        "visual": "(Visuel : le code en vert, avec les trois résultats possibles pour les valeurs 5, -3, 0.)"
      },
      {
        "type": "verification",
        "title": "VÉRIFICATION AUTONOME",
        "content": [
          "Texte :",
          "Sans utiliser l’ordinateur, trouve ce que le programme suivant affiche pour jour = 3 et pour jour = 7 :"
        ],
        "code": {
          "code": "switch (jour) {    case 1: printf(\"Lundi\"); break;    case 2: printf(\"Mardi\"); break;    case 3: printf(\"Mercredi\"); break;    case 4: printf(\"Jeudi\"); break;    case 5: printf(\"Vendredi\"); break;    default: printf(\"Week-end\");}\nQuestions à te poser :\nQue vaut jour ?\nY atil un case pour cette valeur ?\nQue fait le default ?\nRéponse :\nPour jour = 3 → correspond à case 3: → affiche « Mercredi ».\nPour jour = 7 → aucun case → va dans default → affiche « Week-end »."
        },
        "visual": "(Visuel : le code avec deux flèches distinctes. Une flèche pour 3 vers Mercredi, une flèche pour 7 vers default.)"
      },
      {
        "type": "summary",
        "title": "PASSAGE À L’AUTONOMIE (BILAN DU CHAPITRE 4)",
        "content": [
          "Texte :",
          "Tu dois maintenant être capable de répondre à ces 3 questions :",
          "Qu’est-ce que c’est ? → Les conditions (if, else, else if, switch) permettent d’exécuter des blocs de code selon qu’une condition est vraie (1) ou fausse (0).",
          "Pourquoi l’utilise-t-on ? → Pour que le programme s’adapte aux données (âge, note, choix utilisateur) et prenne des décisions.",
          "Comment le construire seul ? → En écrivant if (condition) { ... } else { ... } ou switch(variable) { case valeur: ... break; }, en respectant les parenthèses, les accolades et les break.",
          "Vérification ultime :",
          "Écris un programme qui demande un code de réduction (entier) à l’utilisateur :",
          "Si le code est 1 → affiche « Réduction 10% ».",
          "Si le code est 2 → affiche « Réduction 20% ».",
          "Si le code est 3 → affiche « Réduction 30% ».",
          "Sinon → affiche « Code invalide ».",
          "Utilise un switch (pas de if/else). Fais-le sur papier, puis vérifie avec un compilateur si possible."
        ],
        "visual": "(Visuel : trois cases à cocher et une étoile pour la vérification ultime.)"
      }
    ],
    "keywords": [
      "printf",
      "scanf",
      "main",
      "return",
      "include",
      "int",
      "char",
      "long"
    ]
  },
  {
    "id": 5,
    "title": "LES BOUCLES (while, do-while, for)",
    "subtitle": "Répéter des instructions sans les écrire cent fois",
    "icon": "Repeat",
    "objective": "Répéter des instructions sans les écrire cent fois",
    "blocks": [
      {
        "type": "title",
        "title": "TITRE",
        "content": [
          "Titre : Chapitre 5 – Les boucles",
          "Sous-titre : Répéter des instructions sans les écrire cent fois"
        ],
        "visual": "(Visuel : un tour de manège qui tourne en rond, avec des flèches circulaires. Chaque tour exécute une action.)"
      },
      {
        "type": "situation",
        "title": "SITUATION RÉELLE",
        "content": [
          "Texte :",
          "Tu veux afficher les nombres de 1 à 1000 → impossible à écrire un par un.",
          "Tu veux demander un mot de passe jusqu’à ce que l’utilisateur le donne correctement.",
          "Tu veux calculer la somme de 50 notes saisies au clavier.",
          "L’ordinateur est excellent pour répéter des tâches très rapidement, sans se fatiguer."
        ],
        "visual": "(Visuel : une affiche « 1, 2, 3, … 1000 » avec un rouleau qui se déroule ; une porte avec un verrou et une clé ; une calculatrice qui additionne sans arrêt.)"
      },
      {
        "type": "problem",
        "title": "PROBLÈME À COMPRENDRE",
        "content": [
          "Texte :",
          "Sans boucles, pour afficher 1000 nombres, il faudrait écrire 1000 lignes de printf.",
          "C’est impossible à écrire, à lire et à modifier.",
          "Il faut un outil qui dit : « exécute ce bloc, puis reviens au début et recommence, tant qu’une condition est vraie »."
        ],
        "visual": "(Visuel : un rouleau de papier long de 10 mètres couvert de lignes de code identiques, avec un visage épuisé. À côté, une petite boîte « boucle » qui fait tout en 5 lignes.)"
      },
      {
        "type": "question",
        "title": "QUESTION QUE L’ÉTUDIANT DOIT SE POSER",
        "content": [
          "Texte :",
          "« Comment dire à l’ordinateur de répéter un bloc de code plusieurs fois, sans écrire le bloc en double ? »"
        ],
        "visual": "(Visuel : une grande flèche courbe qui revient sur elle-même, avec un point d’interrogation au centre.)"
      },
      {
        "type": "reasoning",
        "title": "RAISONNEMENT (3 FAMILLES DE BOUCLES)",
        "content": [
          "Texte :",
          "On apprend 3 types de boucles, du plus général au plus spécialisé :",
          "while : répète tant qu’une condition est vraie (condition testée avant d’entrer).",
          "do-while : répète tant qu’une condition est vraie, mais la condition est testée après (exécution garantie au moins une fois).",
          "for : spécialisée pour les répétitions avec un compteur (initialisation, condition, incrément réunis).",
          "Règle commune : une boucle doit toujours avoir une condition de sortie qui devient fausse à un moment, sinon elle tourne indéfiniment (boucle infinie)."
        ],
        "visual": "(Visuel : trois engrenages : le premier « while », le second « do-while », le troisième « for ».)"
      },
      {
        "type": "rule",
        "title": "RÈGLE GÉNÉRALE (LA SYNTAXE DE while)",
        "content": [
          "Texte :",
          "Structure de while :"
        ],
        "code": {
          "code": "while (condition) {    // instructions répétées tant que condition est vraie (1)}\nLa condition est testée avant chaque exécution.\nSi elle est fausse dès le départ, le bloc n’est jamais exécuté.\nLe bloc doit contenir une instruction qui modifie la condition (sinon boucle infinie).\nPARTIE 1 – LA BOUCLE while"
        },
        "visual": "(Visuel : un schéma de flux avec un losange « condition ? ». Si VRAI → flèche vers le bloc d’instructions → puis flèche qui remonte vers le losange. Si FAUX → flèche qui sort de la boucle.)"
      },
      {
        "type": "example",
        "title": "EXEMPLE CONSTRUIT ÉTAPE 1 (while simple)",
        "content": [
          "Texte :",
          "Problème : afficher les nombres de 1 à 5."
        ],
        "code": {
          "code": "#include <stdio.h>int main() {    int compteur = 1;          // étape 1 : initialisation    while (compteur <= 5) {    // étape 2 : condition        printf(\"%d \", compteur);        compteur++;            // étape 3 : incrément (modifie la condition)    }    return 0;}// Affichage : 1 2 3 4 5\ncompteur commence à 1.\nLa condition (compteur <= 5) est vraie → on affiche compteur puis on l’incrémente.\nQuand compteur devient 6, la condition est fausse → on sort."
        },
        "visual": "(Visuel : une animation pas à pas avec une table de suivi (compteur, condition, affichage).)"
      },
      {
        "type": "example",
        "title": "EXEMPLE CONSTRUIT ÉTAPE 2 (boucle qui attend une saisie)",
        "content": [
          "Texte :",
          "Problème : demander un nombre à l’utilisateur, et recommencer tant qu’il donne un nombre négatif."
        ],
        "code": {
          "code": "int nombre;printf(\"Donne un nombre positif : \");scanf(\"%d\", &nombre);while (nombre < 0) {    printf(\"Erreur ! Redonne un nombre positif : \");    scanf(\"%d\", &nombre);}printf(\"Merci, tu as donné %d\", nombre);\nSi l’utilisateur donne -3 → on entre dans la boucle, on redemande, on relit.\nOn sort dès qu’il donne un nombre ≥ 0.\nPARTIE 2 – LA BOUCLE do-while"
        },
        "visual": "(Visuel : deux cas – l’un avec saisie -3 qui entre dans la boucle, l’autre avec saisie 5 qui la saute.)"
      },
      {
        "type": "visual",
        "title": "REPRÉSENTATION VISUELLE DU do-while",
        "content": [
          "Texte :",
          "Structure de do-while :"
        ],
        "code": {
          "code": "do {    // instructions exécutées au moins une fois} while (condition);\nLa condition est testée après l’exécution du bloc.\nDonc le bloc est toujours exécuté au moins une fois, même si la condition est fausse dès le début.\nUtile pour les menus ou les saisies où on veut interagir au moins une fois."
        },
        "visual": "(Visuel : le même schéma que while, mais la flèche qui remonte passe par le test en bas du bloc. Le bloc est exécuté avant le premier test.)"
      },
      {
        "type": "example",
        "title": "EXEMPLE CONSTRUIT ÉTAPE 1 (do-while pour saisie)",
        "content": [
          "Texte :",
          "Problème : afficher un menu et le répéter jusqu’à ce que l’utilisateur tape 0."
        ],
        "code": {
          "code": "int choix;do {    printf(\"1. Jouer  2. Options  0. Quitter\\n\");    printf(\"Ton choix : \");    scanf(\"%d\", &choix);    // ici on traite le choix (non détaillé pour l'instant)} while (choix != 0);\nOn affiche le menu au moins une fois.\nOn redemande tant que l’utilisateur n’a pas tapé 0.\nParfait pour les interactions utilisateur."
        },
        "visual": "(Visuel : un menu qui s’affiche, un curseur qui attend la saisie, et un retour en boucle tant que ce n’est pas 0.)"
      },
      {
        "type": "comparison",
        "title": "COMPARAISON while vs do-while (VISUEL)",
        "content": [
          "Texte :",
          "Différence clé à retenir :",
          "while : la condition est testée avant → le bloc peut ne jamais s’exécuter.",
          "do-while : la condition est testée après → le bloc s’exécute au moins une fois.",
          "Exemple :"
        ],
        "code": {
          "code": "int x = 10;while (x < 5) { printf(\"while\"); }  // n'affiche riendo { printf(\"do-while\"); } while (x < 5);  // affiche \"do-while\" une fois\nPARTIE 3 – LA BOUCLE for"
        },
        "visual": "(Visuel : deux schémas côte à côte. À gauche, while avec le test devant la porte. À droite, do-while avec le test derrière la porte.)"
      },
      {
        "type": "visual",
        "title": "REPRÉSENTATION VISUELLE DU for",
        "content": [
          "Texte :",
          "Structure de for :"
        ],
        "code": {
          "code": "i = 1;while (i <= 5) {    // corps    i++;}"
        },
        "visual": "(Visuel : trois cases côte à côte : initialisation | condition | incrément, avec des flèches qui montrent l’ordre d’exécution.)"
      },
      {
        "type": "example",
        "title": "EXEMPLE CONSTRUIT ÉTAPE 1 (for simple)",
        "content": [
          "Texte :",
          "Problème : afficher les nombres de 1 à 10."
        ],
        "code": {
          "code": "for (int i = 1; i <= 10; i++) {    printf(\"%d \", i);}// Affiche : 1 2 3 4 5 6 7 8 9 10\nOn déclare i dans le for (valable uniquement à l’intérieur).\nLa condition i <= 10 est testée avant chaque tour.\ni++ ajoute 1 après chaque tour."
        },
        "visual": "(Visuel : un compteur qui s’incrémente, avec un tableau qui suit i à chaque itération.)"
      },
      {
        "type": "example",
        "title": "EXEMPLE CONSTRUIT ÉTAPE 2 (for avec calcul de somme)",
        "content": [
          "Texte :",
          "Problème : calculer la somme des entiers de 1 à N (saisi par l’utilisateur)."
        ],
        "code": {
          "code": "int N, somme = 0;printf(\"Donne N : \");scanf(\"%d\", &N);for (int i = 1; i <= N; i++) {    somme = somme + i;   // ou somme += i}printf(\"Somme = %d\", somme);\nSi N = 5 → somme = 1+2+3+4+5 = 15.\nLe for est parfait quand on connaît à l’avance le nombre d’itérations."
        },
        "visual": "(Visuel : un tableau avec les valeurs successives de i et somme.)"
      },
      {
        "type": "content",
        "title": "LES 3 PARTIES DU for SONT OPTIONNELLES (MAIS AVEC PRUDENCE)",
        "content": [
          "Texte :",
          "On peut omettre l’initialisation (si la variable est déjà définie).",
          "On peut omettre la condition (boucle infinie).",
          "On peut omettre l’incrément (le mettre dans le corps).",
          "Exemple (boucle infinie volontaire) :"
        ],
        "code": {
          "code": "for (;;) {    printf(\"Je tourne pour toujours\");}\nCeci est une boucle infinie (on la sort avec break).\nMais pour un débutant, on recommande d’écrire les trois parties pour éviter les confusions.\nPARTIE 4 – INSTRUCTIONS SPÉCIALES : break ET continue"
        },
        "visual": "(Visuel : les trois cases en pointillés pour montrer qu’elles sont optionnelles, mais une alerte « Prudence ! ».)"
      },
      {
        "type": "visual",
        "title": "REPRÉSENTATION VISUELLE DE break",
        "content": [
          "Texte :",
          "break : sort immédiatement de la boucle (même si la condition est encore vraie).",
          "Exemple :"
        ],
        "code": {
          "code": "for (int i = 1; i <= 10; i++) {    if (i == 5) {        break;   // on sort quand i vaut 5    }    printf(\"%d \", i);}// Affiche : 1 2 3 4\nDès que i vaut 5, on quitte la boucle, on n’affiche pas les suivants."
        },
        "visual": "(Visuel : une porte qui s’ouvre brusquement sur le côté, et l’exécution sort de la boucle.)"
      },
      {
        "type": "visual",
        "title": "REPRÉSENTATION VISUELLE DE continue",
        "content": [
          "Texte :",
          "continue : saute le reste du corps de la boucle et passe directement à l’itération suivante.",
          "Exemple :"
        ],
        "code": {
          "code": "for (int i = 1; i <= 5; i++) {    if (i == 3) {        continue;   // saute le printf quand i=3    }    printf(\"%d \", i);}// Affiche : 1 2 4 5\nQuand i=3, on n’exécute pas le printf, on passe directement à i=4."
        },
        "visual": "(Visuel : un obstacle sur la piste cyclable : la flèche contourne le bloc et revient directement à l’incrément.)"
      },
      {
        "type": "error",
        "title": "ERREUR FRÉQUENTE N°1 : OUBLIER L’INCRÉMENT (BOUCLE INFINIE)",
        "content": [
          "Texte :",
          "❌ Code faux :"
        ],
        "code": {
          "code": "int i = 1;while (i <= 5) {    printf(\"%d \", i);    // on oublie i++ ;}\ni reste toujours à 1, la condition est toujours vraie → boucle infinie.\n✅ Correction : ajouter i++; dans le corps.\nRègle : toujours modifier la variable de condition à l’intérieur de la boucle."
        },
        "visual": "(Visuel : une horloge qui tourne sans fin, avec une alerte rouge « INFINI ».)"
      },
      {
        "type": "error",
        "title": "ERREUR FRÉQUENTE N°2 : POINT-VIRGULE APRÈS LE while OU LE for",
        "content": [
          "Texte :",
          "❌ Code faux :"
        ],
        "code": {
          "code": "while (i <= 5); {    printf(\"%d \", i);    i++;}\nLe ; après la parenthèse termine la boucle (corps vide).\nLe bloc { ... } est exécuté une seule fois, pas dans la boucle.\n✅ Correction : enlever le ; après while (i <= 5).\nAstuce : ce piège arrive aussi avec for : for (i=0; i<10; i++); → corps vide."
        },
        "visual": "(Visuel : une loupe qui pointe le ; avec une croix rouge.)"
      },
      {
        "type": "error",
        "title": "ERREUR FRÉQUENTE N°3 : CONDITION DE BOUCLE QUI N’EST JAMAIS FAUSSE (BOUCLE INFINIE VOLONTAIRE OU NON)",
        "content": [
          "Texte :",
          "❌ Code faux :"
        ],
        "code": {
          "code": "int i = 0;while (i >= 0) {    printf(\"%d\", i);    i++;   // i augmente, mais i >= 0 est toujours vrai}\ni devient de plus en plus grand, mais la condition reste vraie pour toujours.\nIl faut une condition de borne supérieure, ou un break bien placé.\n✅ Correction : while (i < 10) par exemple."
        },
        "visual": "(Visuel : une voiture qui accélère sans jamais s’arrêter sur une route infinie.)"
      },
      {
        "type": "exercise",
        "title": "PETIT EXERCICE (while + for)",
        "content": [
          "Texte :",
          "À toi de jouer !",
          "Écris un programme C qui :",
          "Demande un nombre entier N à l’utilisateur.",
          "Affiche tous les nombres pairs de 0 à N (inclus).",
          "Utilise une boucle for pour cela.",
          "Puis, réécris le même affichage en utilisant une boucle while (pour comparer).",
          "(Indice : pour savoir si un nombre est pair, utilise i % 2 == 0.)"
        ],
        "visual": "(Visuel : l’énoncé avec deux emplacements vides, un pour le for, un pour le while.)"
      },
      {
        "type": "correction",
        "title": "CORRECTION EXPLIQUÉE",
        "content": [
          "Texte :",
          "Version for :"
        ],
        "code": {
          "code": "int i = 0;while (i <= N) {    if (i % 2 == 0) {        printf(\"%d \", i);    }    i++;}\nPourquoi c’est juste ?\nOn parcourt tous les i de 0 à N.\nLe test i % 2 == 0 filtre les pairs.\nLes deux boucles donnent le même résultat. Le for est plus compact quand on connaît le nombre de tours."
        },
        "visual": "(Visuel : les deux codes côte à côte avec le même résultat affiché à côté. Exemple : N=6 → 0 2 4 6.)"
      },
      {
        "type": "verification",
        "title": "VÉRIFICATION AUTONOME",
        "content": [
          "Texte :",
          "Sans utiliser l’ordinateur, trouve ce que ce programme affiche :"
        ],
        "code": {
          "code": "#include <stdio.h>int main() {    int i = 1;    while (i <= 4) {        if (i == 3) {            i++;            continue;        }        printf(\"%d \", i);        i++;    }    return 0;}\nQuestions à te poser :\nQue vaut i au départ ?\nQue se passe-t-il quand i vaut 3 ? (continue saute-t-il l’incrément du printf ? Attention, il y a un i++ avant le continue !)\nRéponse :\ni=1 → affiche 1, i=2.\ni=2 → affiche 2, i=3.\ni=3 → on entre dans le if, on fait i++ → i=4, puis continue → on remonte au while, i=4.\ni=4 → affiche 4, i=5 → sortie.\nAffichage : 1 2 4 (le 3 est sauté, mais on a incrémenté avant de continuer)."
        },
        "visual": "(Visuel : une table de suivi des valeurs avec chaque étape.)"
      },
      {
        "type": "summary",
        "title": "PASSAGE À L’AUTONOMIE (BILAN DU CHAPITRE 5)",
        "content": [
          "Texte :",
          "Tu dois maintenant être capable de répondre à ces 3 questions :",
          "Qu’est-ce que c’est ? → Les boucles (while, do-while, for) permettent de répéter un bloc d’instructions tant qu’une condition est vraie.",
          "Pourquoi l’utilise-t-on ? → Pour éviter d’écrire plusieurs fois le même code, pour parcourir des séries de données, pour attendre une saisie valide, etc.",
          "Comment le construire seul ? → En choisissant la boucle adaptée :",
          "while : quand on ne sait pas à l’avance le nombre de répétitions.",
          "do-while : quand on veut exécuter au moins une fois.",
          "for : quand on connaît le nombre d’itérations (compteur).",
          "Vérification ultime :",
          "Écris un programme qui demande 10 nombres à l’utilisateur (utilise une boucle for) et affiche leur moyenne.",
          "Puis modifie-le pour qu’il continue à demander des nombres tant que l’utilisateur ne tape pas -1 (utilise while). Fais-le sur papier."
        ],
        "visual": "(Visuel : trois cases à cocher et une étoile pour la vérification ultime.)"
      }
    ],
    "keywords": [
      "printf",
      "scanf",
      "main",
      "return",
      "include",
      "int",
      "double",
      "if"
    ]
  },
  {
    "id": 6,
    "title": "LES FONCTIONS",
    "subtitle": "Découper son code en blocs réutilisables et modulaires",
    "icon": "Package",
    "objective": "Découper son code en blocs réutilisables et modulaires",
    "blocks": [
      {
        "type": "title",
        "title": "TITRE",
        "content": [
          "Titre : Chapitre 6 – Les fonctions",
          "Sous-titre : Découper son code en blocs réutilisables et modulaires"
        ],
        "visual": "(Visuel : une grande image de plusieurs boîtes noires (comme des machines). Chaque boîte a une flèche d’entrée (données) et une flèche de sortie (résultat). L’une d’elles est étiquetée « additionner », une autre « afficher ».)"
      },
      {
        "type": "situation",
        "title": "SITUATION RÉELLE",
        "content": [
          "Texte :",
          "Tu veux calculer l’aire d’un rectangle à plusieurs endroits de ton programme.",
          "Tu veux afficher un menu de bienvenue dans plusieurs parties de ton jeu.",
          "Tu veux pouvoir réutiliser le même calcul sans recopier 10 fois le même code.",
          "Dans la vie, on utilise des machines : une machine à café prend de l’eau et du café, et donne du café prêt."
        ],
        "visual": "(Visuel : une machine à café (entrée : eau + café → sortie : café), une calculette (entrée : nombres + opérateur → sortie : résultat).)"
      },
      {
        "type": "problem",
        "title": "PROBLÈME À COMPRENDRE",
        "content": [
          "Texte :",
          "Sans fonctions, on est obligé de recopier le même code partout.",
          "Si on fait une erreur, il faut la corriger à chaque endroit.",
          "Le programme devient très long, difficile à lire et à modifier.",
          "Il faut un outil qui permet de donner un nom à un bloc, de l’appeler quand on veut, et éventuellement de lui passer des données et de récupérer un résultat."
        ],
        "visual": "(Visuel : un long rouleau de code avec des parties copiées-collées en rouge, et des ciseaux qui coupent pour créer des blocs séparés.)"
      },
      {
        "type": "question",
        "title": "QUESTION QUE L’ÉTUDIANT DOIT SE POSER",
        "content": [
          "Texte :",
          "« Comment créer ma propre instruction (comme printf ou scanf) qui fait ce que je veux, et l’appeler quand j’en ai besoin ? »"
        ],
        "visual": "(Visuel : un point d’interrogation à l’intérieur d’une boîte noire. Des flèches entrent et sortent de la boîte.)"
      },
      {
        "type": "reasoning",
        "title": "RAISONNEMENT (LE MODÈLE DE LA BOÎTE)",
        "content": [
          "Texte :",
          "Une fonction, c’est une boîte qui a :",
          "Un nom (pour l’appeler).",
          "Des entrées (paramètres) – ce qu’elle reçoit pour travailler.",
          "Un traitement (les instructions à l’intérieur).",
          "Une sortie (valeur de retour) – ce qu’elle renvoie.",
          "Les 4 rôles d’une fonction :",
          "Éviter les doublons (réutiliser le code).",
          "Rendre le programme plus lisible (découpage logique).",
          "Faciliter les corrections (une seule modification).",
          "Permettre le travail en équipe (chacun écrit ses fonctions)."
        ],
        "visual": "(Visuel : le schéma de la boîte avec 4 zones étiquetées : Nom, Entrées, Traitement, Sortie.)"
      },
      {
        "type": "rule",
        "title": "RÈGLE GÉNÉRALE (LA SYNTAXE D’UNE FONCTION)",
        "content": [
          "Texte :",
          "Définition d’une fonction :"
        ],
        "code": {
          "code": "nom_fonction(valeur1, valeur2);   // si elle ne renvoie rien (void)int resultat = nom_fonction(valeur1, valeur2);  // si elle renvoie un résultat\nDeux cas particuliers :\nSi elle ne renvoie rien, on met void comme type de retour.\nSi elle ne prend pas de paramètres, on met void entre parenthèses (ou rien)."
        },
        "visual": "(Visuel : le code coloré avec des légendes. Le type_retour en bleu, le nom en orange, les paramètres en vert, le return en rouge.)"
      },
      {
        "type": "visual",
        "title": "REPRÉSENTATION VISUELLE DES COULEURS (FONCTIONS)",
        "content": [
          "Texte :",
          "Couleurs fonctionnelles pour ce chapitre :",
          "🔵 BLEU : type de retour (int, float, void, etc.).",
          "🟠 ORANGE : nom de la fonction.",
          "🟢 VERT : paramètres (types et noms).",
          "🔴 ROUGE : return et la valeur renvoyée.",
          "⚫ NOIR : le corps (instructions)."
        ],
        "visual": "(Visuel : un exemple de fonction colorée avec la légende à côté : int (bleu) additionner (orange) (int a, int b) (vert) { return a + b; } (rouge pour return).)"
      },
      {
        "type": "example",
        "title": "EXEMPLE GUIDÉ (DÉCOUVERTE D’UNE FONCTION SIMPLE)",
        "content": [
          "Texte :",
          "Voici une fonction qui additionne deux nombres :"
        ],
        "code": {
          "code": "int resultat = additionner(5, 3);printf(\"Résultat = %d\", resultat);  // affiche 8\nLa fonction reçoit 5 dans a et 3 dans b.\nElle calcule a + b et renvoie 8.\nLe main récupère ce 8 dans la variable resultat."
        },
        "visual": "(Visuel : une animation où les flèches amènent 5 et 3 dans la boîte, la boîte affiche 8 en sortie.)"
      },
      {
        "type": "example",
        "title": "EXEMPLE CONSTRUIT ÉTAPE 1 : LE TYPE DE RETOUR",
        "content": [
          "Texte :",
          "int additionner(...)",
          "Le premier mot int est le type de retour.",
          "Cela signifie que la fonction renverra un nombre entier (int).",
          "Si la fonction n’a rien à renvoyer, on met void (ex: void afficherMenu()).",
          "Exemple avec void :"
        ],
        "code": {
          "code": "void afficherMessage() {    printf(\"Bonjour !\");}// Appel : afficherMessage();  // rien à récupérer"
        },
        "visual": "(Visuel : deux boîtes côte à côte. Celle de gauche a une flèche de sortie étiquetée int (renvoie un nombre). Celle de droite n’a pas de flèche de sortie, marquée void.)"
      },
      {
        "type": "example",
        "title": "EXEMPLE CONSTRUIT ÉTAPE 2 : LES PARAMÈTRES",
        "content": [
          "Texte :",
          "(int a, int b)",
          "Ce sont les variables locales de la fonction.",
          "Elles sont initialisées automatiquement avec les valeurs passées lors de l’appel.",
          "On peut en avoir plusieurs (séparées par des virgules), ou aucune (void).",
          "Exemple sans paramètre :"
        ],
        "code": {
          "code": "void direBonjour() {    printf(\"Bonjour tout le monde !\");}\nOn ne passe rien lors de l’appel : direBonjour();."
        },
        "visual": "(Visuel : une boîte avec des fentes d’entrée. La première boîte a deux fentes a et b. La seconde n’a pas de fente.)"
      },
      {
        "type": "example",
        "title": "EXEMPLE CONSTRUIT ÉTAPE 3 : LE CORPS ET LE return",
        "content": [
          "Texte :",
          "{ return a + b; }",
          "Le corps contient les instructions exécutées quand la fonction est appelée.",
          "return fait deux choses :",
          "Il renvoie la valeur (ici a + b).",
          "Il termine immédiatement la fonction (ce qui suit n’est pas exécuté).",
          "Règle importante :",
          "Une fonction void peut avoir un return; (sans valeur) pour sortir plus tôt.",
          "Une fonction non-void doit obligatoirement avoir un return avec une valeur du bon type."
        ],
        "visual": "(Visuel : une flèche rouge qui sort de la boîte avec la valeur. Une seconde flèche qui montre que le code après return est ignoré (grisé).)"
      },
      {
        "type": "example",
        "title": "EXEMPLE CONSTRUIT ÉTAPE 4 : LE PROTOTYPE (DÉCLARATION AVANT main)",
        "content": [
          "Texte :",
          "Problème : En C, on doit déclarer la fonction avant de l’utiliser.",
          "Si on définit la fonction après le main, il faut mettre un prototype (ou déclaration anticipée) avant.",
          "Prototype = entête sans le corps, terminé par ; :"
        ],
        "code": {
          "code": "int additionner(int a, int b);   // prototypeint main() {    int r = additionner(5, 3);   // appel    return 0;}int additionner(int a, int b) {  // définition complète    return a + b;}\nLe prototype dit au compilateur : « Cette fonction existe, je la définirai plus tard ».\nBon réflexe : toujours mettre les prototypes en haut du fichier (ou dans un fichier .h plus tard)."
        },
        "visual": "(Visuel : le code avec le prototype surligné en jaune, et une flèche qui relie le prototype à la définition.)"
      },
      {
        "type": "content",
        "title": "PORTÉE DES VARIABLES (LOCALES VS GLOBALES)",
        "content": [
          "Texte :",
          "Variable locale : déclarée à l’intérieur d’une fonction. Elle n’existe que dans cette fonction.",
          "Variable globale : déclarée en dehors de toutes les fonctions. Elle existe partout (mais à utiliser avec précaution).",
          "Exemple :"
        ],
        "code": {
          "code": "int globale = 10;   // globalevoid fonction1() {    int locale = 5;   // locale à fonction1    printf(\"%d\", globale);  // OK (globale accessible)}void fonction2() {    printf(\"%d\", locale);   // ERREUR ! locale n'existe pas ici}\nChaque fonction a son propre espace. Les paramètres sont aussi des variables locales."
        },
        "visual": "(Visuel : trois boîtes. La boîte « globale » est à l’extérieur, visible partout. Les boîtes locales sont à l’intérieur de chaque fonction.)"
      },
      {
        "type": "error",
        "title": "ERREUR FRÉQUENTE N°1 : OUBLIER LE TYPE DE RETOUR",
        "content": [
          "Texte :",
          "❌ Code faux :"
        ],
        "code": {
          "code": "int additionner(int a, int b) { ... }"
        },
        "visual": "(Visuel : le mot int manquant surligné en rouge avec une alerte.)"
      },
      {
        "type": "error",
        "title": "ERREUR FRÉQUENTE N°2 : PARAMÈTRES QUI NE CORRESPONDENT PAS",
        "content": [
          "Texte :",
          "❌ Code faux :"
        ],
        "code": {
          "code": "additionner(5, 3, 4);   // trop de paramètres\n✅ Règle : le nombre et le type des paramètres doivent correspondre exactement."
        },
        "visual": "(Visuel : une prise électrique avec deux fiches (paramètres). On essaie de brancher trois fiches → ça ne rentre pas.)"
      },
      {
        "type": "error",
        "title": "ERREUR FRÉQUENTE N°3 : UTILISER UNE VARIABLE LOCALE À L’EXTÉRIEUR",
        "content": [
          "Texte :",
          "❌ Code faux :"
        ],
        "code": {
          "code": "void maFonction() {    int x = 10;}int main() {    printf(\"%d\", x);   // x n'existe pas ici !}\nx n’existe que dans maFonction.\nUne fonction ne peut pas accéder aux variables locales d’une autre fonction (sauf si on les passe en paramètres ou si on utilise des globales).\n✅ Solution : soit passer x en paramètre, soit le retourner, soit le déclarer globale (avec précaution)."
        },
        "visual": "(Visuel : deux bulles séparées. La bulle de maFonction contient x. La bulle de main est vide et ne voit pas x.)"
      },
      {
        "type": "exercise",
        "title": "PETIT EXERCICE",
        "content": [
          "Texte :",
          "À toi de jouer !",
          "Écris une fonction qui :",
          "S’appelle carre.",
          "Prend un paramètre int n.",
          "Renvoie le carré de n (n × n).",
          "Dans le main, appelle cette fonction avec 6, et affiche le résultat avec printf.",
          "(Indice : utilise le type de retour int.)"
        ],
        "visual": "(Visuel : une grande feuille avec l’énoncé, et un espace pour écrire le code.)"
      },
      {
        "type": "correction",
        "title": "CORRECTION EXPLIQUÉE",
        "content": [
          "Texte :",
          "Voici la solution :"
        ],
        "code": {
          "code": "#include <stdio.h>// Prototypeint carre(int n);int main() {    int resultat = carre(6);    printf(\"Le carré de 6 est %d\", resultat);    return 0;}// Définitionint carre(int n) {    return n * n;}\nPourquoi c’est juste ?\nLe prototype est bien placé avant le main.\nLe paramètre n reçoit la valeur 6 lors de l’appel.\nLe return renvoie 6 * 6 = 36.\nLe main récupère cette valeur dans resultat et l’affiche."
        },
        "visual": "(Visuel : le code en vert avec des flèches qui montrent le passage de 6 à n, puis le retour de 36.)"
      },
      {
        "type": "verification",
        "title": "VÉRIFICATION AUTONOME",
        "content": [
          "Texte :",
          "Sans utiliser l’ordinateur, trouve l’erreur dans ce code :"
        ],
        "code": {
          "code": "#include <stdio.h>void afficherDouble(int x) {    int doubleX = x * 2;    printf(\"%d\", doubleX);}int main() {    int nombre = 5;    afficherDouble(nombre);    printf(\"%d\", doubleX);   // ligne problématique    return 0;}\nQuestions à te poser :\nOù est déclarée doubleX ?\nEst-elle accessible dans le main ?\nRéponse :\ndoubleX est déclarée dans la fonction afficherDouble (locale).\nElle n’est donc pas accessible dans le main. Le printf du main est faux.\nPour afficher doubleX dans le main, il faudrait que la fonction le retourne, ou bien faire l’affichage directement dans la fonction."
        },
        "visual": "(Visuel : le code avec une loupe rouge qui pointe doubleX dans le main et une alerte « hors de portée ».)"
      },
      {
        "type": "summary",
        "title": "PASSAGE À L’AUTONOMIE (BILAN DU CHAPITRE 6)",
        "content": [
          "Texte :",
          "Tu dois maintenant être capable de répondre à ces 3 questions :",
          "Qu’est-ce que c’est ? → Une fonction est un bloc de code nommé, réutilisable, qui peut recevoir des paramètres (entrées) et renvoyer un résultat (sortie).",
          "Pourquoi l’utilise-t-on ? → Pour éviter les doublons, structurer le programme, faciliter la lecture et les corrections.",
          "Comment le construire seul ? →",
          "Écrire le prototype en haut.",
          "Définir la fonction avec un type de retour, un nom, des paramètres entre parenthèses, un corps avec return.",
          "L’appeler depuis main ou une autre fonction en passant les bons arguments.",
          "Vérification ultime :",
          "Écris une fonction estPair qui prend un int en paramètre et renvoie 1 (vrai) si le nombre est pair, 0 (faux) sinon.",
          "Dans le main, demande un nombre à l’utilisateur, appelle cette fonction et affiche « Pair » ou « Impair » en fonction du résultat.",
          "Fais-le sur papier, en respectant les prototypes et la portée des variables."
        ],
        "visual": "(Visuel : trois cases à cocher et une étoile pour la vérification ultime.)"
      }
    ],
    "keywords": [
      "printf",
      "scanf",
      "main",
      "return",
      "include",
      "int",
      "float",
      "double"
    ]
  },
  {
    "id": 7,
    "title": "LES TABLEAUX",
    "subtitle": "Regrouper des données de même type dans une seule variable",
    "icon": "LayoutGrid",
    "objective": "Regrouper des données de même type dans une seule variable",
    "blocks": [
      {
        "type": "title",
        "title": "TITRE",
        "content": [
          "Titre : Chapitre 7 – Les tableaux",
          "Sous-titre : Regrouper des données de même type dans une seule variable"
        ],
        "visual": "(Visuel : une rangée de casiers (comme à la piscine ou au collège). Chaque casier est numéroté : 0, 1, 2, 3, 4. Certains contiennent des nombres, d’autres des lettres.)"
      },
      {
        "type": "situation",
        "title": "SITUATION RÉELLE",
        "content": [
          "Texte :",
          "Tu veux stocker les 10 notes d’une classe pour calculer la moyenne.",
          "Tu veux enregistrer les températures de chaque jour de la semaine.",
          "Tu veux mémoriser les scores de 5 joueurs dans un jeu vidéo.",
          "Dans tous ces cas, tu as plusieurs valeurs du même type (toutes des nombres entiers, ou tous des floats) à ranger ensemble."
        ],
        "visual": "(Visuel : un bulletin scolaire avec 10 notes ; un thermomètre pour chaque jour (Lundi à Dimanche) ; un tableau de scores de jeu vidéo.)"
      },
      {
        "type": "problem",
        "title": "PROBLÈME À COMPRENDRE",
        "content": [
          "Texte :",
          "Sans tableau, pour 10 notes, il faudrait 10 variables : note1, note2, note3… note10.",
          "Pour 1000 notes, c’est impossible à écrire et à gérer.",
          "Pire encore : pour afficher toutes les notes, il faudrait écrire 1000 printf.",
          "Il faut une structure qui porte un seul nom et qui permette d’accéder à chaque élément par un numéro (un index)."
        ],
        "visual": "(Visuel : un long défilé de variables note1, note2, note3… avec un visage fatigué. À côté, une seule boîte nommée notes[ ] avec des cases à l’intérieur.)"
      },
      {
        "type": "question",
        "title": "QUESTION QUE L’ÉTUDIANT DOIT SE POSER",
        "content": [
          "Texte :",
          "« Comment stocker plusieurs valeurs sous un même nom, et les retrouver facilement grâce à leur position ? »"
        ],
        "visual": "(Visuel : un grand point d’interrogation à côté d’une étagère à casiers numérotés.)"
      },
      {
        "type": "reasoning",
        "title": "RAISONNEMENT (LE CONCEPT DE TABLEAU)",
        "content": [
          "Texte :",
          "Un tableau (array) est une suite de cases mémoires contiguës (collées les unes aux autres).",
          "Toutes les cases ont le même type (ex: toutes des int, ou toutes des float).",
          "On donne un nom unique au tableau.",
          "Pour désigner une case précise, on met un index (un numéro) entre crochets [ ].",
          "Règle absolue : en C, le premier élément est toujours à l’index 0 (et non 1)."
        ],
        "visual": "(Visuel : un bloc de 5 cases grises alignées. Audessus, le nom notes. En dessous, les numéros [0], [1], [2], [3], [4]. La case [0] est surlignée en vert avec l’étiquette « Premier élément ! ».)"
      },
      {
        "type": "rule",
        "title": "RÈGLE GÉNÉRALE (DÉCLARATION ET ACCÈS)",
        "content": [
          "Texte :",
          "Déclaration :"
        ],
        "code": {
          "code": "notes[0] = 15;   // on met 15 dans la première casenotes[1] = 18;   // on met 18 dans la deuxième caseint premiereNote = notes[0];   // on lit la première case\nDeux règles d’or :\nLa taille doit être une constante (ou un nombre fixe) lors de la déclaration.\nL’index doit être entre 0 et (taille - 1). Si on dépasse, c’est une erreur grave (comportement imprévisible)."
        },
        "visual": "(Visuel : une règle graduée de 0 à 9. Les indices valides sont en vert, les indices invalides (10, 11, -1) sont en rouge barré.)"
      },
      {
        "type": "visual",
        "title": "REPRÉSENTATION VISUELLE (COULEURS)",
        "content": [
          "Texte :",
          "Couleurs fonctionnelles pour ce chapitre :",
          "🔵 BLEU : le type du tableau (int, float, etc.).",
          "🟠 ORANGE : le nom du tableau.",
          "🟢 VERT : l’index entre crochets [ ].",
          "🔴 ROUGE : les valeurs stockées dans les cases."
        ],
        "visual": "(Visuel : un tableau int notes[5] avec les cases. Chaque case est colorée différemment selon l’index, avec la valeur à l’intérieur : [0]=12, [1]=15, [2]=8, [3]=19, [4]=10. Une légende explique chaque couleur.)"
      },
      {
        "type": "example",
        "title": "EXEMPLE GUIDÉ (DÉCOUVERTE DU CODE)",
        "content": [
          "Texte :",
          "Voici un premier programme complet qui utilise un tableau :"
        ],
        "code": {
          "code": "#include <stdio.h>int main() {    int notes[5];               // Étape 1 : déclaration    notes[0] = 12;              // Étape 2 : on remplit    notes[1] = 15;    notes[2] = 8;    notes[3] = 19;    notes[4] = 10;    printf(\"Note 0 = %d\", notes[0]);  // Étape 3 : on lit    return 0;}\nConsigne : on va décortiquer chaque ligne. Le tableau a 5 cases, numérotées 0, 1, 2, 3, 4."
        },
        "visual": "(Visuel : le code coloré, avec les indices [0] à [4] en vert vif.)"
      },
      {
        "type": "example",
        "title": "EXEMPLE CONSTRUIT ÉTAPE 1 : DÉCLARATION",
        "content": [
          "Texte :",
          "int notes[5];",
          "On demande au compilateur de réserver 5 cases int d’affilée dans la mémoire.",
          "On les appelle toutes ensemble notes.",
          "Pour l’instant, les cases contiennent des valeurs aléatoires (on les remplira ensuite)."
        ],
        "visual": "(Visuel : 5 cases grises vides alignées, avec l’étiquette notes audessus. Les indices 0 à 4 sont écrits en dessous.)"
      },
      {
        "type": "example",
        "title": "EXEMPLE CONSTRUIT ÉTAPE 2 : L’INDEXATION (PREMIER ÉLÉMENT = 0)",
        "content": [
          "Texte :",
          "notes[0] = 12;",
          "Le [0] signifie : « va à la première case du tableau notes ».",
          "On y range la valeur 12.",
          "Important : on commence à 0, pas à 1.",
          "notes[0] = 1er élément.",
          "notes[1] = 2e élément.",
          "notes[4] = 5e élément (le dernier ici)."
        ],
        "visual": "(Visuel : une flèche rouge qui pointe vers la case [0] et y dépose le 12. Un rappel en bas : « Index 0 → 1ère case ».)"
      },
      {
        "type": "example",
        "title": "EXEMPLE CONSTRUIT ÉTAPE 3 : INITIALISATION RAPIDE",
        "content": [
          "Texte :",
          "On peut déclarer ET remplir en une seule ligne :"
        ],
        "code": {
          "code": "int notes[5] = {12, 15, 8, 19, 10};\nLes valeurs entre { } sont rangées dans l’ordre :\n12 va dans notes[0]\n15 va dans notes[1]\n…\nSi on met moins de valeurs, les cases restantes sont mises à 0 automatiquement."
        },
        "visual": "(Visuel : une flèche qui relie la liste {12, 15, 8, 19, 10} aux cases correspondantes 0, 1, 2, 3, 4.)"
      },
      {
        "type": "example",
        "title": "EXEMPLE CONSTRUIT ÉTAPE 4 : PARCOURIR AVEC UNE BOUCLE for",
        "content": [
          "Texte :",
          "C’est là que la puissance des tableaux apparaît : on utilise une boucle for pour parcourir toutes les cases."
        ],
        "code": {
          "code": "int notes[5] = {12, 15, 8, 19, 10};for (int i = 0; i < 5; i++) {    printf(\"%d \", notes[i]);}// Affiche : 12 15 8 19 10\ni commence à 0, va jusqu’à 4 (car i < 5).\nÀ chaque tour, notes[i] désigne la case courante.\nC’est LA combinaison gagnante : tableau + boucle for."
        },
        "visual": "(Visuel : une animation de la boucle : à chaque itération, l’index i change et la case correspondante s’allume.)"
      },
      {
        "type": "example",
        "title": "EXEMPLE CONSTRUIT ÉTAPE 5 : CALCULER LA SOMME",
        "content": [
          "Texte :",
          "Problème : calculer la moyenne des notes."
        ],
        "code": {
          "code": "int notes[5] = {12, 15, 8, 19, 10};int somme = 0;for (int i = 0; i < 5; i++) {    somme = somme + notes[i];}float moyenne = (float)somme / 5;printf(\"Moyenne = %.2f\", moyenne);  // affiche 12.80\nOn parcourt toutes les cases, on additionne.\nOn convertit somme en float pour avoir une division réelle."
        },
        "visual": "(Visuel : un tableau avec 3 colonnes : i, notes[i], somme. Les lignes se remplissent au fur et à mesure de l’exécution.)"
      },
      {
        "type": "error",
        "title": "ERREUR FRÉQUENTE N°1 : INDEX HORS LIMITES (OFF-BY-ONE)",
        "content": [
          "Texte :",
          "❌ Code faux :"
        ],
        "code": {
          "code": "int notes[5];for (int i = 0; i <= 5; i++) {  // i va jusqu'à 5 !    notes[i] = 10;}\nLe tableau a des cases de 0 à 4.\nQuand i = 5, on écrit dans notes[5] → cette case n’existe pas !\nConséquence : le programme peut planter ou écraser une autre variable.\n✅ Correction : for (int i = 0; i < 5; i++)."
        },
        "visual": "(Visuel : une flèche rouge qui part de la case [5] (inexistante) vers un précipice. La case [4] est la dernière autorisée.)"
      },
      {
        "type": "error",
        "title": "ERREUR FRÉQUENTE N°2 : OUBLIER QUE L’INDEX COMMENCE À 0",
        "content": [
          "Texte :",
          "❌ Code faux :"
        ],
        "code": {
          "code": "int notes[5] = {10, 20, 30, 40, 50};printf(\"%d\", notes[5]);   // On pense au 5e élément\nOn croit que notes[5] est le 5e élément, mais c’est le 6e (qui n’existe pas).\nLe 5e élément est notes[4] (il vaut 50).\nAstuce visuelle : l’index est toujours un décalage : le premier est décalé de 0."
        },
        "visual": "(Visuel : les 5 cases avec les indices 0, 1, 2, 3, 4. La case notes[4] est surlignée en vert avec « 5e élément ». La case notes[5] est barrée en rouge.)"
      },
      {
        "type": "error",
        "title": "ERREUR FRÉQUENTE N°3 : UTILISER UNE TAILLE VARIABLE SANS CONSTANTE",
        "content": [
          "Texte :",
          "❌ Code faux (en C classique) :"
        ],
        "code": {
          "code": "int n = 10;int tableau[n];   // Certains compilateurs l'acceptent, mais c'est dangereux\nLa taille d’un tableau doit être connue à la compilation.\nUtiliser une variable pour la taille s’appelle un VLA (Variable Length Array) – ce n’est pas toujours supporté et peut causer des problèmes.\n✅ Solution : soit utiliser une constante (#define TAILLE 10), soit allouer dynamiquement (chapitre 11).\nPour ce chapitre : on utilise une constante ou un nombre fixe."
        },
        "visual": "(Visuel : une alerte rouge sur int tableau[n] avec le message « Taille inconnue à la compilation ! »)"
      },
      {
        "type": "exercise",
        "title": "PETIT EXERCICE",
        "content": [
          "Texte :",
          "À toi de jouer !",
          "Écris un programme C qui :",
          "Déclare un tableau int nommé valeurs de taille 6.",
          "Initialisele avec les nombres : 5, 2, 9, 1, 7, 3.",
          "Parcourt le tableau avec une boucle for et affiche le double de chaque nombre (ex: 5→10, 2→4…).",
          "(Indice : dans la boucle, utilise valeurs[i] * 2 dans le printf.)"
        ],
        "visual": "(Visuel : le tableau de 6 cases avec les valeurs, et un écran qui doit afficher les doubles.)"
      },
      {
        "type": "correction",
        "title": "CORRECTION EXPLIQUÉE",
        "content": [
          "Texte :",
          "Voici la solution :"
        ],
        "code": {
          "code": "#include <stdio.h>int main() {    int valeurs[6] = {5, 2, 9, 1, 7, 3};    for (int i = 0; i < 6; i++) {        printf(\"%d \", valeurs[i] * 2);    }    return 0;}// Affiche : 10 4 18 2 14 6\nPourquoi c’est juste ?\nLe tableau a 6 cases, indexées 0 à 5 → la boucle i < 6 est parfaite.\nvaleurs[i] * 2 calcule le double sans modifier le tableau.\nOn affiche chaque résultat séparé par un espace."
        },
        "visual": "(Visuel : le code en vert, avec le résultat affiché à côté.)"
      },
      {
        "type": "verification",
        "title": "VÉRIFICATION AUTONOME",
        "content": [
          "Texte :",
          "Sans utiliser l’ordinateur, trouve ce que ce programme affiche :"
        ],
        "code": {
          "code": "#include <stdio.h>int main() {    int t[4] = {10, 20, 30, 40};    int i = 0;    while (i < 4) {        t[i] = t[i] + 5;        i++;    }    printf(\"%d %d\", t[1], t[3]);    return 0;}\nQuestions à te poser :\nQue vaut i au départ ?\nQue devient chaque case après la boucle ?\nQuelles cases sont affichées à la fin ?\nRéponse :\nChaque case est augmentée de 5 : {15, 25, 35, 45}.\nt[1] = 25 (2e case), t[3] = 45 (4e case).\nLe programme affiche : 25 45."
        },
        "visual": "(Visuel : une table de suivi de la boucle avec les valeurs de i, t[0] à t[3].)"
      },
      {
        "type": "summary",
        "title": "PASSAGE À L’AUTONOMIE (BILAN DU CHAPITRE 7)",
        "content": [
          "Texte :",
          "Tu dois maintenant être capable de répondre à ces 3 questions :",
          "Qu’est-ce que c’est ? → Un tableau est une suite de cases mémoire de même type, accessibles par un index (commençant à 0).",
          "Pourquoi l’utilise-t-on ? → Pour stocker et manipuler des séries de données (notes, températures, scores) sans créer des centaines de variables.",
          "Comment le construire seul ? → Le déclarer avec type nom[taille], le remplir case par case ou à l’initialisation { ... }, et le parcourir avec une boucle for (int i=0; i<taille; i++).",
          "Vérification ultime :",
          "Écris un programme qui :",
          "Déclare un tableau de 8 entiers initialisé avec les nombres de votre choix.",
          "Parcourt le tableau et affiche le plus grand nombre (indice : commence par une variable max = tableau[0], puis compare avec chaque tableau[i]).",
          "Fais-le sur papier sans utiliser l’ordinateur, puis testele."
        ],
        "visual": "(Visuel : trois cases à cocher et une étoile pour la vérification ultime.)"
      }
    ],
    "keywords": [
      "printf",
      "main",
      "return",
      "include",
      "int",
      "float",
      "double",
      "if"
    ]
  },
  {
    "id": 8,
    "title": "LES POINTEURS (BASE)",
    "subtitle": "Manipuler les adresses mémoire pour accéder indirectement aux données",
    "icon": "ArrowRightLeft",
    "objective": "Manipuler les adresses mémoire pour accéder indirectement aux données",
    "blocks": [
      {
        "type": "title",
        "title": "TITRE",
        "content": [
          "Titre : Chapitre 8 – Les pointeurs (base)",
          "Sous-titre : Manipuler les adresses mémoire pour accéder indirectement aux données"
        ],
        "visual": "(Visuel : une rue avec des boîtes aux lettres numérotées (adresses). Une flèche part d’une main et pointe vers une boîte spécifique. Une autre flèche montre un « pointeur » qui est un morceau de papier sur lequel est écrite une adresse.)"
      },
      {
        "type": "situation",
        "title": "SITUATION RÉELLE",
        "content": [
          "Texte :",
          "Tu veux qu’une fonction modifie une variable du main (sans utiliser return).",
          "Tu veux parcourir un tableau sans utiliser d’index (plus rapide).",
          "Tu veux allouer de la mémoire dynamiquement plus tard (chapitre 11).",
          "En vrai : pour envoyer un colis, tu n’as pas besoin de connaître le contenu, tu as juste besoin de l’adresse de la maison."
        ],
        "visual": "(Visuel : un facteur avec une lettre. Il ne regarde pas à l’intérieur de la lettre, il lit juste l’adresse sur l’enveloppe pour savoir où la déposer. L’adresse est surlignée.)"
      },
      {
        "type": "problem",
        "title": "PROBLÈME À COMPRENDRE",
        "content": [
          "Texte :",
          "Chaque variable en C est stockée dans une case mémoire.",
          "Cette case a une adresse unique (un numéro, comme une adresse postale).",
          "Jusqu’ici, on utilisait le nom de la variable pour accéder à la case (age = 18).",
          "Mais parfois, on ne connaît pas le nom (ex: dans une fonction, on reçoit une adresse).",
          "Il faut un outil qui permette de stocker une adresse dans une variable, puis d’accéder à la case via cette adresse."
        ],
        "visual": "(Visuel : une immense grille de cases mémoire, chaque case ayant un numéro flou (ex: 0x7FFD...). Une des cases est surlignée et porte une étiquette « age ». On voit qu’à côté du nom, il y a aussi un numéro d’adresse.)"
      },
      {
        "type": "question",
        "title": "QUESTION QUE L’ÉTUDIANT DOIT SE POSER",
        "content": [
          "Texte :",
          "« Comment connaître l’adresse d’une variable, la stocker dans une autre variable, et utiliser cette adresse pour lire ou modifier la variable d’origine ? »"
        ],
        "visual": "(Visuel : un point d’interrogation sur une enveloppe. L’enveloppe contient un morceau de papier où est écrite l’adresse d’une autre maison.)"
      },
      {
        "type": "reasoning",
        "title": "RAISONNEMENT (LES 3 OPÉRATIONS CLÉS)",
        "content": [
          "Texte :",
          "Il y a 3 opérateurs / notions à connaître :",
          "L’adresse d’une variable : on utilise & (esperluette).",
          "Ex: &age → donne l’adresse mémoire de age.",
          "Le type pointeur : on déclare une variable qui contient une adresse.",
          "Ex: int* ptr; → ptr est une variable qui contiendra l’adresse d’un int.",
          "Le déréférencement : on utilise * (étoile) devant un pointeur pour accéder à la valeur à l’adresse stockée.",
          "Ex: *ptr = 20; → va à l’adresse contenue dans ptr et y met 20.",
          "Métaphore finale :",
          "La variable = la maison.",
          "&variable = l’adresse de la maison.",
          "Le pointeur = une enveloppe sur laquelle on écrit l’adresse.",
          "*pointeur = on va à l’adresse écrite sur l’enveloppe, on ouvre la porte, on lit ou on modifie ce qu’il y a dedans."
        ],
        "visual": "(Visuel : un schéma en 3 étapes. Étape 1 : maison avec & → panneau d’adresse. Étape 2 : enveloppe (pointeur) qui contient l’adresse. Étape 3 : * → flèche qui va de l’enveloppe à la maison.)"
      },
      {
        "type": "rule",
        "title": "RÈGLE GÉNÉRALE (SYNTAXE)",
        "content": [
          "Texte :",
          "Déclaration d’un pointeur :"
        ],
        "code": {
          "code": "*ptr = 30;   // age devient 30"
        },
        "visual": "(Visuel : le code coloré. La ligne int age = 25; montre une case bleue. La ligne int* ptr = &age; montre une flèche rouge qui part de ptr et pointe vers la case age. Le *ptr est une loupe qui regarde dans la case pointée.)"
      },
      {
        "type": "visual",
        "title": "REPRÉSENTATION VISUELLE (COULEURS)",
        "content": [
          "Texte :",
          "Couleurs fonctionnelles pour ce chapitre :",
          "🔵 BLEU : type de base (int, float, char).",
          "🟠 ORANGE : le pointeur (le nom de la variable pointeur).",
          "🟢 VERT : l’opérateur & (prendre l’adresse).",
          "🔴 ROUGE : l’opérateur * (déréférencement).",
          "⚫ NOIR : les valeurs normales."
        ],
        "visual": "(Visuel : un exemple coloré : int (bleu) age (noir) = 25 ; int* (bleu+) ptr (orange) = &age (vert) ; printf(\"%d\", *ptr) (rouge pour *).)*"
      },
      {
        "type": "example",
        "title": "EXEMPLE GUIDÉ (DÉCOUVERTE DU CODE)",
        "content": [
          "Texte :",
          "Voici un premier programme complet avec un pointeur :"
        ],
        "code": {
          "code": "#include <stdio.h>int main() {    int age = 25;          // une variable normale    int* ptr = &age;       // un pointeur qui contient l'adresse de age        printf(\"age = %d\\n\", age);      // affiche 25    printf(\"adresse de age = %p\\n\", &age);  // affiche l'adresse (hexadécimale)    printf(\"ptr contient = %p\\n\", ptr);     // affiche la même adresse    printf(\"valeur via ptr = %d\\n\", *ptr);  // affiche 25 (déréférencement)        *ptr = 30;              // on modifie age via le pointeur    printf(\"age = %d\\n\", age);      // affiche 30    return 0;}\nNe retiens pas tout : on va décortiquer ligne par ligne."
        },
        "visual": "(Visuel : le code entier s’affiche. Les deux %p affichent des adresses du style 0x7ffc....)"
      },
      {
        "type": "example",
        "title": "EXEMPLE CONSTRUIT ÉTAPE 1 : LA VARIABLE NORMALE ET SON ADRESSE",
        "content": [
          "Texte :",
          "int age = 25;",
          "On a une case mémoire nommée age, qui contient la valeur 25.",
          "Cette case a une adresse (par exemple 0x7FFD1234).",
          "Pour connaître cette adresse, on écrit &age.",
          "& = « adresse de ».",
          "Exemple d’affichage :"
        ],
        "code": {
          "code": "printf(\"%p\", &age);   // affiche l'adresse (en hexadécimal)"
        },
        "visual": "(Visuel : une case bleue avec l’étiquette age et la valeur 25. Audessus, une étiquette flottante « Adresse : 0x7FFD1234 ». Une flèche part de &age vers cette adresse.)"
      },
      {
        "type": "example",
        "title": "EXEMPLE CONSTRUIT ÉTAPE 2 : LE POINTEUR (LA VARIABLE QUI CONTIENT UNE ADRESSE)",
        "content": [
          "Texte :",
          "int* ptr = &age;",
          "int* : on déclare un pointeur vers un int.",
          "ptr : le nom de ce pointeur.",
          "= &age : on stocke l’adresse de age dans ptr.",
          "Résultat :",
          "ptr est une variable. Sa valeur n’est pas un nombre comme 25, c’est une adresse (ex: 0x7FFD1234).",
          "On dit que ptr « pointe vers » age."
        ],
        "visual": "(Visuel : deux cases côte à côte. À gauche, la case age avec 25. À droite, la case ptr qui contient l’adresse 0x7FFD1234. Une flèche part de la case ptr et va vers la case age.)"
      },
      {
        "type": "example",
        "title": "EXEMPLE CONSTRUIT ÉTAPE 3 : LE DÉRÉFÉREMENT (ALLER À L’ADRESSE)",
        "content": [
          "Texte :",
          "printf(\"%d\", *ptr);",
          "Le * devant ptr signifie : « va à l’adresse stockée dans ptr et donnemoi la valeur qui s’y trouve ».",
          "Comme ptr contient l’adresse de age, *ptr est équivalent à age.",
          "Résultat : 25.",
          "Règle d’or :",
          "ptr = l’adresse (le numéro).",
          "*ptr = la valeur à cette adresse (le contenu de la case)."
        ],
        "visual": "(Visuel : une loupe rouge qui traverse ptr, suit la flèche jusqu’à la case age, et affiche 25.)"
      },
      {
        "type": "example",
        "title": "EXEMPLE CONSTRUIT ÉTAPE 4 : MODIFIER VIA LE POINTEUR",
        "content": [
          "Texte :",
          "*ptr = 30;",
          "On utilise le * pour écrire à l’adresse pointée.",
          "Cela revient à faire age = 30;.",
          "La case age est maintenant modifiée, sans même utiliser son nom.",
          "Preuve :"
        ],
        "code": {
          "code": "printf(\"%d\", age);   // affiche 30printf(\"%d\", *ptr);  // affiche 30 aussi"
        },
        "visual": "(Visuel : une animation où *ptr = 30 envoie la valeur 30 le long de la flèche, directement dans la case age. La case age passe de 25 à 30.)"
      },
      {
        "type": "content",
        "title": "POINTEURS ET TABLEAUX (RELATION FONDAMENTALE)",
        "content": [
          "Texte :",
          "Règle absolue en C : le nom d’un tableau est l’adresse de son premier élément."
        ],
        "code": {
          "code": "printf(\"%d\", *ptr);       // affiche 10 (notes[0])printf(\"%d\", *(ptr + 2)); // affiche 30 (notes[2])"
        },
        "visual": "(Visuel : le tableau notes avec ses 5 cases. ptr est une flèche qui pointe vers la première case (index 0). Les flèches ptr+1, ptr+2 avancent d’une case en case.)"
      },
      {
        "type": "error",
        "title": "ERREUR FRÉQUENTE N°1 : OUBLIER LE & DANS scanf (RAPPEL)",
        "content": [
          "Texte :",
          "❌ Code faux :"
        ],
        "code": {
          "code": "int age;scanf(\"%d\", age);   // OUBLI du &\nscanf a besoin de l’adresse de la variable pour y ranger la valeur.\nOn a vu cela au chapitre 2. Maintenant, vous comprenez pourquoi : scanf modifie la variable via un pointeur !\n✅ Correction : scanf(\"%d\", &age);\nC’est la première utilisation concrète des pointeurs que vous avez déjà vue."
        },
        "visual": "(Visuel : le code avec age sans & → la flèche se perd. Avec & → la flèche entre dans la case.)"
      },
      {
        "type": "error",
        "title": "ERREUR FRÉQUENTE N°2 : DÉRÉFÉRENCER UN POINTEUR NON INITIALISÉ",
        "content": [
          "Texte :",
          "❌ Code faux :"
        ],
        "code": {
          "code": "int age;int* ptr = &age;   // initialisé*ptr = 10;         // OK"
        },
        "visual": "(Visuel : une flèche aléatoire qui part dans le vide (zone grisée) avec une alerte rouge « Adresse invalide ! ».)"
      },
      {
        "type": "error",
        "title": "ERREUR FRÉQUENTE N°3 : CONFONDRE ptr ET *ptr",
        "content": [
          "Texte :",
          "❌ Code faux :"
        ],
        "code": {
          "code": "int age = 25;int* ptr = &age;printf(\"%d\", ptr);   // affiche l'adresse (un grand nombre) au lieu de la valeur\nptr = l’adresse (un nombre hexadécimal).\n*ptr = la valeur (25).\n✅ Correction : printf(\"%d\", *ptr);\nAstuce pour retenir :\nSans *, on parle de l’enveloppe (l’adresse).\nAvec *, on ouvre l’enveloppe et on regarde le contenu."
        },
        "visual": "(Visuel : une enveloppe avec une adresse écrite dessus. ptr = l’enveloppe. *ptr = le contenu à l’intérieur. Les deux sont clairement séparés.)"
      },
      {
        "type": "exercise",
        "title": "PETIT EXERCICE",
        "content": [
          "Texte :",
          "À toi de jouer !",
          "Écris un programme C qui :",
          "Déclare une variable int nommée nombre et initialisela à 42.",
          "Déclare un pointeur int* nommé p qui pointe vers nombre.",
          "Affiche :",
          "La valeur de nombre.",
          "L’adresse de nombre (utilise %p).",
          "La valeur pointée par p (déréférencement).",
          "Modifie nombre à 100 via le pointeur p.",
          "Affiche à nouveau la valeur de nombre pour vérifier.",
          "(Indice : pour l’adresse, utilise &nombre ou p dans printf.)"
        ],
        "visual": "(Visuel : un espace pour écrire le code, avec les 5 étapes clairement numérotées.)"
      },
      {
        "type": "correction",
        "title": "CORRECTION EXPLIQUÉE",
        "content": [
          "Texte :",
          "Voici la solution :"
        ],
        "code": {
          "code": "#include <stdio.h>int main() {    int nombre = 42;          // étape 1    int* p = &nombre;        // étape 2    printf(\"1. nombre = %d\\n\", nombre);       // 42    printf(\"2. adresse = %p\\n\", &nombre);     // ex: 0x7FFD...    printf(\"3. *p = %d\\n\", *p);               // 42    *p = 100;                 // étape 4 : modification via pointeur    printf(\"4. nombre = %d\\n\", nombre);       // 100    return 0;}\nPourquoi c’est juste ?\np contient l’adresse de nombre.\n*p permet d’accéder directement à cette case pour lire et écrire.\nLa modification via *p est visible sur nombre car c’est la même case mémoire."
        },
        "visual": "(Visuel : le code en vert. Une animation montre que *p = 100 envoie 100 dans la case de nombre.)"
      },
      {
        "type": "verification",
        "title": "VÉRIFICATION AUTONOME",
        "content": [
          "Texte :",
          "Sans utiliser l’ordinateur, trouve ce que ce programme affiche :"
        ],
        "code": {
          "code": "#include <stdio.h>int main() {    int a = 5;    int b = 10;    int* p = &a;    int* q = &b;    *p = *q + 3;    p = q;    *p = 20;    printf(\"a=%d, b=%d\", a, b);    return 0;}\nQuestions à te poser :\nQue vaut *p = *q + 3 ? (indice : *q = 10, donc 10+3 = 13, on met 13 dans la case pointée par p, c’est-à-dire a).\nQue fait p = q; ? (indice : p pointe maintenant vers b).\nQue fait *p = 20; ? (indice : on met 20 dans la case pointée par p, qui est maintenant b).\nRéponse :\na devient 13.\np pointe sur b, puis *p = 20 met 20 dans b.\nAffichage : a=13, b=20."
        },
        "visual": "(Visuel : un tableau de suivi des valeurs de a, b, p et q avec les flèches qui se déplacent.)"
      },
      {
        "type": "summary",
        "title": "PASSAGE À L’AUTONOMIE (BILAN DU CHAPITRE 8)",
        "content": [
          "Texte :",
          "Tu dois maintenant être capable de répondre à ces 3 questions :",
          "Qu’est-ce que c’est ? → Un pointeur est une variable qui stocke une adresse mémoire. Avec l’opérateur * (déréférencement), on accède à la valeur située à cette adresse.",
          "Pourquoi l’utilise-t-on ? → Pour modifier une variable depuis une autre fonction (plus tard), pour parcourir des tableaux efficacement, pour allouer de la mémoire dynamique, et pour construire des structures de données avancées.",
          "Comment le construire seul ? → Déclarer un pointeur avec type* nom = &variable, lire la valeur avec *nom, écrire avec *nom = valeur, et afficher l’adresse avec %p.",
          "Vérification ultime :",
          "Écris un programme qui :",
          "Déclare un tableau de 3 entiers {10, 20, 30}.",
          "Déclare un pointeur int* ptr = tableau;.",
          "Utilise ce pointeur (avec * et des décalages (ptr + i)) pour afficher les 3 valeurs du tableau, sans utiliser [] (crochets).",
          "Fais-le sur papier, puis vérifie sur machine."
        ],
        "visual": "(Visuel : trois cases à cocher et une étoile pour la vérification ultime.)"
      }
    ],
    "keywords": [
      "printf",
      "scanf",
      "main",
      "return",
      "include",
      "int",
      "float",
      "char"
    ]
  },
  {
    "id": 9,
    "title": "LES CHAÎNES DE CARACTÈRES",
    "subtitle": "Manipuler du texte : mots, phrases, noms et messages",
    "icon": "Type",
    "objective": "Manipuler du texte : mots, phrases, noms et messages",
    "blocks": [
      {
        "type": "title",
        "title": "TITRE",
        "content": [
          "Titre : Chapitre 9 – Les chaînes de caractères",
          "Sous-titre : Manipuler du texte : mots, phrases, noms et messages"
        ],
        "visual": "(Visuel : un écran avec une ligne de texte « Bonjour le monde ! ». Chaque lettre est dans une petite case, et la dernière case contient le symbole \\0 en rouge.)"
      },
      {
        "type": "situation",
        "title": "SITUATION RÉELLE",
        "content": [
          "Texte :",
          "Tu veux demander le nom de l’utilisateur et l’afficher avec un message de bienvenue.",
          "Tu veux stocker une phrase complète.",
          "Tu veux comparer deux mots (ex: mot de passe).",
          "Tu veux concaténer (coller) plusieurs morceaux de texte.",
          "L’ordinateur doit savoir stocker et manipuler des suites de lettres."
        ],
        "visual": "(Visuel : une carte d’identité avec « Nom : Dupont » ; un champ de saisie de mot de passe ; une affiche avec « Bienvenue, Alice ! ».)"
      },
      {
        "type": "problem",
        "title": "PROBLÈME À COMPRENDRE",
        "content": [
          "Texte :",
          "Un char ne stocke qu’un seul caractère (ex: 'A').",
          "Pour un mot comme « Bonjour », il faut plusieurs char à la suite.",
          "On pourrait utiliser un tableau de char, mais il faut un moyen de savoir où s’arrête le texte.",
          "En C, la convention est : la fin d’une chaîne est marquée par un caractère spécial : \\0 (le caractère nul)."
        ],
        "visual": "(Visuel : une petite case char avec 'B', une autre avec 'o'… et la dernière avec \\0. Une question : comment savoir que « Bonjour » est fini ? → La réponse est \\0.)"
      },
      {
        "type": "question",
        "title": "QUESTION QUE L’ÉTUDIANT DOIT SE POSER",
        "content": [
          "Texte :",
          "« Comment stocker un mot ou une phrase entière, et comment indiquer à l’ordinateur où se termine le texte ? »"
        ],
        "visual": "(Visuel : un gros point d’interrogation sur un clavier, avec des lettres qui flottent autour.)"
      },
      {
        "type": "reasoning",
        "title": "RAISONNEMENT (LA RÈGLE DE \\0)",
        "content": [
          "Texte :",
          "Une chaîne de caractères en C est un tableau de char.",
          "Elle se termine toujours par le caractère \\0 (appelé « zéro terminal » ou « null terminator »).",
          "Ce n’est pas un espace, ni un point : c’est un caractère invisible qui vaut 0 en mémoire.",
          "Grâce à ce \\0, les fonctions (comme printf) savent où s’arrêter.",
          "Exemple visuel :"
        ],
        "code": {
          "code": "char nom[6] = {'A', 'l', 'i', 'c', 'e', '\\0'};\nOn peut aussi écrire plus simplement : char nom[] = \"Alice\"; (le \\0 est ajouté automatiquement)."
        },
        "visual": "(Visuel : 6 cases alignées. Les cases 0 à 4 contiennent A, l, i, c, e. La case 5 contient \\0 en rouge. Une flèche indique : « Le tableau a 6 cases, mais le texte fait 5 lettres ! »)"
      },
      {
        "type": "rule",
        "title": "RÈGLE GÉNÉRALE (DÉCLARATION ET INITIALISATION)",
        "content": [
          "Texte :",
          "Trois façons de déclarer une chaîne :",
          "Tableau de char avec taille fixe :",
          "char nom[20]; → peut contenir jusqu’à 19 caractères + \\0.",
          "Initialisation avec {} :",
          "char nom[6] = {'A', 'l', 'i', 'c', 'e', '\\0'};.",
          "La plus courante : avec des guillemets doubles :",
          "char nom[] = \"Alice\";",
          "→ Le compilateur compte automatiquement : 5 lettres + \\0 = taille 6.",
          "Rappel : 'A' (guillemets simples) = un seul caractère.",
          "\"Alice\" (guillemets doubles) = une chaîne (avec \\0 automatique)."
        ],
        "visual": "(Visuel : trois exemples de code alignés, avec des flèches qui montrent la taille et le \\0.)"
      },
      {
        "type": "visual",
        "title": "REPRÉSENTATION VISUELLE (COULEURS)",
        "content": [
          "Texte :",
          "Couleurs fonctionnelles pour ce chapitre :",
          "🟥 ROUGE : le caractère nul \\0 (terminateur).",
          "🔵 BLEU : le type char et les tableaux de char.",
          "🟢 VERT : les guillemets doubles pour les chaînes.",
          "🟠 ORANGE : les fonctions de <string.h>."
        ],
        "visual": "(Visuel : un tableau char avec des cases colorées : lettres en bleu, \\0 en rouge. Une légende explique chaque couleur.)"
      },
      {
        "type": "example",
        "title": "EXEMPLE GUIDÉ (DÉCOUVERTE DU CODE)",
        "content": [
          "Texte :",
          "Voici un premier programme complet avec une chaîne :"
        ],
        "code": {
          "code": "#include <stdio.h>int main() {    char prenom[] = \"Alice\";           // déclaration    printf(\"Bonjour %s !\\n\", prenom);  // affichage avec %s    return 0;}// Affiche : Bonjour Alice !\n%s est le code de format pour afficher une chaîne.\nprintf parcourt les caractères un par un jusqu’à rencontrer \\0."
        },
        "visual": "(Visuel : le code avec %s surligné. Un écran à côté affiche « Bonjour Alice ! ».)"
      },
      {
        "type": "example",
        "title": "EXEMPLE CONSTRUIT ÉTAPE 1 : LE TABLEAU SOUS-JACENT",
        "content": [
          "Texte :",
          "Quand on écrit char prenom[] = \"Alice\";, le compilateur crée en réalité :"
        ],
        "code": {
          "code": "printf(\"Taille du tableau = %lu\\n\", sizeof(prenom));  // affiche 6"
        },
        "visual": "(Visuel : une représentation graphique des 6 cases avec leurs indices et leurs contenus.)"
      },
      {
        "type": "example",
        "title": "EXEMPLE CONSTRUIT ÉTAPE 2 : AFFICHER AVEC %s",
        "content": [
          "Texte :",
          "printf(\"Bonjour %s !\", prenom);",
          "%s est un emplacement réservé pour une chaîne.",
          "printf reçoit l’adresse du premier caractère (prenom est l’adresse de prenom[0]).",
          "Il affiche les caractères un par un jusqu’à rencontrer \\0.",
          "Le \\0 n’est pas affiché, il sert juste de marqueur d’arrêt."
        ],
        "visual": "(Visuel : une flèche qui part de prenom (l’adresse) et parcourt les cases A, l, i, c, e, puis s’arrête sur \\0 (qui n’est pas affiché).)"
      },
      {
        "type": "example",
        "title": "EXEMPLE CONSTRUIT ÉTAPE 3 : SAISIR UNE CHAÎNE AVEC scanf",
        "content": [
          "Texte :",
          "Méthode simple mais dangereuse :"
        ],
        "code": {
          "code": "char nom[20];printf(\"Donne ton nom : \");scanf(\"%s\", nom);   // PAS de & (car nom est déjà une adresse)printf(\"Bonjour %s\", nom);\nscanf(\"%s\", nom) lit un mot (pas de spaces) jusqu’à l’espace ou la touche Entrée.\nIl ajoute automatiquement \\0 à la fin.\nProblème : si l’utilisateur tape plus de 19 caractères, scanf écrit au-delà du tableau → danger (débordement)."
        },
        "visual": "(Visuel : un champ de saisie avec « Alice ». Une flèche montre que le texte va dans le tableau nom. Une alerte : « Attention : pas de vérification de taille ! »)"
      },
      {
        "type": "example",
        "title": "EXEMPLE CONSTRUIT ÉTAPE 4 : SAISIR UNE PHRASE (AVEC ESPACES)",
        "content": [
          "Texte :",
          "Problème : scanf(\"%s\", ...) s’arrête au premier espace.",
          "Pour saisir une phrase entière (avec des espaces), on utilise fgets."
        ],
        "code": {
          "code": "char phrase[100];printf(\"Donne une phrase : \");fgets(phrase, 100, stdin);   // stdin = clavierprintf(\"Tu as dit : %s\", phrase);\nfgets lit au plus 99 caractères (laisse la place pour \\0).\nIl lit jusqu’à la fin de la ligne (Entrée).\nC’est la méthode sûre pour saisir du texte."
        },
        "visual": "(Visuel : une comparaison : scanf coupe la phrase à l’espace ; fgets garde toute la phrase. fgets a un bouclier « sécurisé ».)"
      },
      {
        "type": "content",
        "title": "INTRODUCTION À <string.h> (LES FONCTIONS SPÉCIALISÉES)",
        "content": [
          "Texte :",
          "Pour manipuler les chaînes, on dispose d’une bibliothèque : <string.h>.",
          "On va apprendre 4 fonctions essentielles (une par une) :",
          "Fonction",
          "Action",
          "Exemple",
          "strlen",
          "longueur (sans \\0)",
          "strlen(\"Alice\") → 5",
          "strcpy",
          "copier une chaîne",
          "strcpy(dest, src)",
          "strcat",
          "concaténer (coller)",
          "strcat(dest, src)",
          "strcmp",
          "comparer (0 = égal)",
          "strcmp(a, b) == 0",
          "Règle : ces fonctions s’attendent à des chaînes terminées par \\0."
        ],
        "visual": "(Visuel : un panneau d’outils avec 4 icônes : une règle (strlen), une copie (strcpy), une colle (strcat), une balance (strcmp).)"
      },
      {
        "type": "example",
        "title": "EXEMPLE CONSTRUIT (strlen – longueur)",
        "content": [
          "Texte :",
          "strlen donne le nombre de caractères sans compter le \\0."
        ],
        "code": {
          "code": "#include <stdio.h>#include <string.h>   // nécessaireint main() {    char nom[] = \"Alice\";    int longueur = strlen(nom);    printf(\"Longueur = %d\", longueur);   // affiche 5    return 0;}\nPour \"Alice\", strlen parcourt jusqu’à \\0 et compte 5.\nDifférence avec sizeof : sizeof(nom) donnerait 6 (car il compte le tableau entier)."
        },
        "visual": "(Visuel : les 5 lettres A,l,i,c,e comptées, et le \\0 ignoré. Une balance compare strlen=5 vs sizeof=6.)"
      },
      {
        "type": "example",
        "title": "EXEMPLE CONSTRUIT (strcpy – copie)",
        "content": [
          "Texte :",
          "strcpy copie le contenu d’une chaîne dans une autre."
        ],
        "code": {
          "code": "char source[] = \"Bonjour\";char destination[20];   // doit être assez grandestrcpy(destination, source);printf(\"%s\", destination);  // affiche \"Bonjour\"\nIl copie y compris le \\0 de source vers destination.\nAttention : destination doit avoir assez de place."
        },
        "visual": "(Visuel : deux tableaux. Une flèche rouge part de source et va vers destination, en copiant tous les caractères + \\0.)"
      },
      {
        "type": "example",
        "title": "EXEMPLE CONSTRUIT (strcat – concaténation)",
        "content": [
          "Texte :",
          "strcat ajoute (colle) une chaîne à la fin d’une autre."
        ],
        "code": {
          "code": "char message[30] = \"Bonjour \";   // 8 lettres + \\0char nom[] = \"Alice\";strcat(message, nom);printf(\"%s\", message);  // affiche \"Bonjour Alice\"\nIl cherche le \\0 de message et y colle nom (en écrasant le \\0, puis en ajoutant un nouveau \\0 à la fin).\nAttention : message doit avoir assez de place pour le tout."
        },
        "visual": "(Visuel : deux morceaux de texte qui se collent l’un à l’autre. Le \\0 de la première est remplacé par la seconde, et un nouveau \\0 est ajouté à la fin.)"
      },
      {
        "type": "example",
        "title": "EXEMPLE CONSTRUIT (strcmp – comparaison)",
        "content": [
          "Texte :",
          "strcmp compare deux chaînes caractère par caractère.",
          "Retourne 0 si elles sont identiques.",
          "Retourne une valeur négative si la première est plus petite (ordre alphabétique).",
          "Retourne une valeur positive si la première est plus grande.",
          "Exemple (test de mot de passe) :"
        ],
        "code": {
          "code": "char mdp[] = \"secret\";char saisie[20];scanf(\"%s\", saisie);if (strcmp(mdp, saisie) == 0) {    printf(\"Accès autorisé\");} else {    printf(\"Mot de passe incorrect\");}\nOn utilise strcmp pour comparer, pas == (car == comparerait les adresses, pas le contenu)."
        },
        "visual": "(Visuel : une balance avec deux plateaux : mdp d’un côté, saisie de l’autre. La balance penche ou reste droite. Si elle est droite (0) → c’est bon.)"
      },
      {
        "type": "error",
        "title": "ERREUR FRÉQUENTE N°1 : OUBLIER LA PLACE POUR \\0",
        "content": [
          "Texte :",
          "❌ Code faux :"
        ],
        "code": {
          "code": "char nom[5] = \"Alice\";   // 5 lettres, mais il faut 6 cases pour le \\0 !\nLe tableau a 5 cases, indexées 0 à 4.\nOn essaye de mettre A,l,i,c,e,\\0 → le \\0 ne rentre pas → débordement.\n✅ Correction : soit char nom[6] = \"Alice\"; soit char nom[] = \"Alice\"; (le compilateur choisit 6)."
        },
        "visual": "(Visuel : 5 cases trop petites pour 5 lettres + \\0 → le \\0 sort de la case, alerte rouge.)"
      },
      {
        "type": "error",
        "title": "ERREUR FRÉQUENTE N°2 : UTILISER == POUR COMPARER DES CHAÎNES",
        "content": [
          "Texte :",
          "❌ Code faux :"
        ],
        "code": {
          "code": "if (nom == \"Alice\") { ... }   // compare les adresses, pas le contenu !\nnom est une adresse (celle du premier caractère).\n\"Alice\" est une autre adresse (celle de la chaîne constante).\nLa comparaison est presque toujours fausse.\n✅ Correction : utiliser strcmp(nom, \"Alice\") == 0."
        },
        "visual": "(Visuel : deux flèches qui pointent vers des endroits différents. La balance == montre qu’elles sont différentes, même si le contenu est identique. Une croix rouge.)"
      },
      {
        "type": "error",
        "title": "ERREUR FRÉQUENTE N°3 : OUBLIER #include <string.h>",
        "content": [
          "Texte :",
          "❌ Code faux :"
        ],
        "code": {
          "code": "#include <stdio.h>int main() {    char nom[] = \"Alice\";    int len = strlen(nom);   // Erreur : fonction non déclarée    return 0;}\nLe compilateur ne connaît pas strlen (ni strcpy, strcmp, etc.) sans l’inclusion.\n✅ Correction : ajouter #include <string.h> en haut du fichier."
        },
        "visual": "(Visuel : une alerte « fonction inconnue » avec un gros point d’exclamation. Puis un #include vert qui fait apparaître les fonctions.)"
      },
      {
        "type": "exercise",
        "title": "PETIT EXERCICE",
        "content": [
          "Texte :",
          "À toi de jouer !",
          "Écris un programme C qui :",
          "Demande à l’utilisateur son prénom (chaîne, sans espaces) avec scanf.",
          "Demande son nom (chaîne, sans espaces).",
          "Concatène le prénom et le nom dans une variable nomComplet (avec un espace au milieu).",
          "Affiche le résultat, ainsi que la longueur totale (sans compter \\0).",
          "(Indice : utilise strcpy, strcat et strlen. Pense à la taille suffisante pour nomComplet.)"
        ],
        "visual": "(Visuel : l’énoncé avec des emplacements pour le code.)"
      },
      {
        "type": "correction",
        "title": "CORRECTION EXPLIQUÉE",
        "content": [
          "Texte :",
          "Voici la solution :"
        ],
        "code": {
          "code": "#include <stdio.h>#include <string.h>int main() {    char prenom[30], nom[30], nomComplet[60];        printf(\"Donne ton prénom : \");    scanf(\"%s\", prenom);    printf(\"Donne ton nom : \");    scanf(\"%s\", nom);        strcpy(nomComplet, prenom);        // copie le prénom    strcat(nomComplet, \" \");           // ajoute un espace    strcat(nomComplet, nom);           // ajoute le nom        printf(\"Nom complet : %s\\n\", nomComplet);    printf(\"Longueur : %lu\\n\", strlen(nomComplet));    return 0;}\nPourquoi c’est juste ?\nLes tableaux ont assez de place (30, 30, 60).\nstrcpy initialise nomComplet avec le prénom.\nstrcat colle l’espace, puis le nom.\nstrlen compte les caractères sans \\0."
        },
        "visual": "(Visuel : le code en vert. Un exemple d’exécution avec prénom=Jean, nom=Dupont → « Jean Dupont », longueur=10.)"
      },
      {
        "type": "verification",
        "title": "VÉRIFICATION AUTONOME",
        "content": [
          "Texte :",
          "Sans utiliser l’ordinateur, trouve ce que ce programme affiche :"
        ],
        "code": {
          "code": "#include <stdio.h>#include <string.h>int main() {    char a[20] = \"Bonjour\";    char b[20] = \" tout le monde\";    strcat(a, b);    printf(\"%d\", strlen(a));    return 0;}\nQuestions à te poser :\nQue contient a au départ ?\nQue fait strcat(a, b) ?\nCombien de caractères y a-t-il dans \"Bonjour tout le monde\" ? (compte sans le \\0).\nRéponse :\na devient \"Bonjour tout le monde\".\nLongueur : « Bonjour » = 7, « tout le monde » = 14 (avec l’espace au début).\nTotal : 7 + 14 = 21. Le programme affiche 21."
        },
        "visual": "(Visuel : le code avec une loupe sur strcat. La chaîne finale est affichée avec les caractères comptés.)"
      },
      {
        "type": "summary",
        "title": "PASSAGE À L’AUTONOMIE (BILAN DU CHAPITRE 9)",
        "content": [
          "Texte :",
          "Tu dois maintenant être capable de répondre à ces 3 questions :",
          "Qu’est-ce que c’est ? → Une chaîne de caractères est un tableau de char terminé par le caractère nul \\0. On la déclare avec char nom[] = \"...\";.",
          "Pourquoi l’utilise-t-on ? → Pour stocker et manipuler du texte (noms, messages, phrases, mots de passe).",
          "Comment le construire seul ? →",
          "Déclarer un tableau assez grand.",
          "Utiliser scanf(\"%s\", ...) pour un mot (sans &), ou fgets pour une phrase.",
          "Afficher avec %s.",
          "Utiliser <string.h> pour strlen, strcpy, strcat, strcmp.",
          "Vérification ultime :",
          "Écris un programme qui :",
          "Demande deux mots à l’utilisateur (avec scanf).",
          "Compare les deux mots avec strcmp.",
          "Affiche « Identiques » si c’est le cas, sinon « Différents ».",
          "Fais-le sur papier, puis vérifie sur machine."
        ],
        "visual": "(Visuel : trois cases à cocher et une étoile pour la vérification ultime.)"
      }
    ],
    "keywords": [
      "printf",
      "scanf",
      "main",
      "return",
      "include",
      "int",
      "double",
      "char"
    ]
  },
  {
    "id": 10,
    "title": "LES STRUCTURES (struct)",
    "subtitle": "Créer ses propres types pour regrouper des données différentes",
    "icon": "Layers",
    "objective": "Créer ses propres types pour regrouper des données différentes",
    "blocks": [
      {
        "type": "title",
        "title": "TITRE",
        "content": [
          "Titre : Chapitre 10 – Les structures (struct)",
          "Sous-titre : Créer ses propres types pour regrouper des données différentes"
        ],
        "visual": "(Visuel : une grande image d’une fiche de renseignements avec plusieurs champs : Nom, Prénom, Âge, Note. Chaque champ est une case de couleur différente (texte, nombre, nombre à virgule).)"
      },
      {
        "type": "situation",
        "title": "SITUATION RÉELLE",
        "content": [
          "Texte :",
          "Tu veux stocker les informations d’un étudiant : son nom (chaîne), son âge (int) et sa moyenne (float).",
          "Tu veux gérer un catalogue de produits : chaque produit a un nom, un prix et un code.",
          "Tu veux représenter un point dans un plan : coordonnées x et y (deux floats).",
          "Dans tous ces cas, les données sont liées mais de types différents."
        ],
        "visual": "(Visuel : une fiche d’étudiant avec des champs ; une étiquette de produit avec prix ; un graphique avec un point marqué (x,y).)"
      },
      {
        "type": "problem",
        "title": "PROBLÈME À COMPRENDRE",
        "content": [
          "Texte :",
          "Avec ce qu’on sait déjà, pour un étudiant, il faudrait 3 variables séparées :",
          "char nom[20]; int age; float moyenne;",
          "Si on a 100 étudiants, il faut 3 tableaux différents, et il faut gérer les indices pour qu’ils correspondent (l’étudiant n°5 a son nom dans noms[5], son âge dans ages[5], etc.).",
          "C’est lourd, difficile à lire, et on peut se tromper de correspondance.",
          "Il faut un outil qui permette de regrouper ces 3 données en un seul bloc, comme une « fiche »."
        ],
        "visual": "(Visuel : trois tableaux séparés (noms, ages, moyennes) avec des flèches qui essayent de relier les indices. Une grande croix rouge. À côté, une fiche unique « Étudiant » qui contient tout.)"
      },
      {
        "type": "question",
        "title": "QUESTION QUE L’ÉTUDIANT DOIT SE POSER",
        "content": [
          "Texte :",
          "« Comment créer un nouveau type sur mesure, qui regroupe plusieurs données de types différents, et l’utiliser comme une seule variable ? »"
        ],
        "visual": "(Visuel : un grand point d’interrogation à l’intérieur d’un puzzle dont les pièces sont de formes différentes (carré, rond, triangle) mais qui s’assemblent pour former un rectangle.)"
      },
      {
        "type": "reasoning",
        "title": "RAISONNEMENT (LE CONCEPT DE STRUCTURE)",
        "content": [
          "Texte :",
          "Une structure (struct) est un type composite que l’on définit soi-même.",
          "Elle contient des membres (ou champs) qui peuvent être de types différents (int, float, char[], etc.).",
          "Une fois définie, on peut déclarer des variables de ce nouveau type, comme on déclare un int ou un float.",
          "Pour accéder à un membre, on utilise le point ..",
          "Analogie : Une structure, c’est comme un formulaire avec plusieurs cases à remplir. Le formulaire s’appelle Etudiant, les cases s’appellent nom, age, moyenne."
        ],
        "visual": "(Visuel : un formulaire vide avec le titre « struct Etudiant ». Trois lignes : nom (char[]), age (int), moyenne (float).)"
      },
      {
        "type": "rule",
        "title": "RÈGLE GÉNÉRALE (DÉFINITION ET UTILISATION)",
        "content": [
          "Texte :",
          "Définition de la structure (en dehors de main) :"
        ],
        "code": {
          "code": "etudiant1.age = 20;strcpy(etudiant1.nom, \"Alice\");etudiant1.moyenne = 15.5;"
        },
        "visual": "(Visuel : le code de définition est affiché avec des couleurs. struct en bleu, Etudiant en orange, les membres en vert. Puis une variable etudiant1 est dessinée comme une grande boîte contenant 3 sousboîtes : nom, age, moyenne.)"
      },
      {
        "type": "visual",
        "title": "REPRÉSENTATION VISUELLE (COULEURS)",
        "content": [
          "Texte :",
          "Couleurs fonctionnelles pour ce chapitre :",
          "🔵 BLEU : le motclé struct.",
          "🟠 ORANGE : le nom de la structure (ex: Etudiant).",
          "🟢 VERT : les membres (ex: nom, age, moyenne).",
          "🔴 ROUGE : l’opérateur d’accès . (point).",
          "🟣 MAGENTA : l’opérateur -> (pour les pointeurs vers structure)."
        ],
        "visual": "(Visuel : un exemple de code coloré avec la légende à côté. Un schéma d’une variable structure montre les membres avec leurs couleurs.)"
      },
      {
        "type": "example",
        "title": "EXEMPLE GUIDÉ (DÉCOUVERTE DU CODE)",
        "content": [
          "Texte :",
          "Voici un premier programme complet qui utilise une structure :"
        ],
        "code": {
          "code": "#include <stdio.h>#include <string.h>// Définition de la structure (en dehors de main)struct Etudiant {    char nom[50];    int age;    float moyenne;};int main() {    struct Etudiant etu1;           // déclaration d'une variable    strcpy(etu1.nom, \"Alice\");      // remplir le champ nom    etu1.age = 20;                  // remplir le champ age    etu1.moyenne = 15.5;            // remplir le champ moyenne    printf(\"Nom: %s\\n\", etu1.nom);    printf(\"Age: %d\\n\", etu1.age);    printf(\"Moyenne: %.2f\\n\", etu1.moyenne);    return 0;}"
        },
        "visual": "(Visuel : le code s’affiche. La définition de la structure est encadrée. Les accès avec . sont surlignés en rouge.)"
      },
      {
        "type": "example",
        "title": "EXEMPLE CONSTRUIT ÉTAPE 1 : DÉFINIR LA STRUCTURE",
        "content": [
          "Texte :",
          "struct Etudiant { char nom[50]; int age; float moyenne; };",
          "On définit un nouveau type appelé struct Etudiant.",
          "Il contient 3 membres :",
          "nom : un tableau de 50 caractères (une chaîne).",
          "age : un entier.",
          "moyenne : un nombre à virgule.",
          "La définition se termine par un point-virgule ; (c’est une instruction).",
          "On la place en dehors de toute fonction (en général en haut du fichier) pour qu’elle soit accessible partout."
        ],
        "visual": "(Visuel : la définition est affichée comme un moule ou un gabarit. Des flèches partent de chaque membre vers des exemples de valeurs (ex: « Alice » → nom, 20 → age, 15.5 → moyenne).)"
      },
      {
        "type": "example",
        "title": "EXEMPLE CONSTRUIT ÉTAPE 2 : DÉCLARER UNE VARIABLE DE STRUCTURE",
        "content": [
          "Texte :",
          "struct Etudiant etu1;",
          "On déclare une variable nommée etu1 du type struct Etudiant.",
          "En mémoire, etu1 occupe un bloc qui contient tous les membres les uns à la suite des autres.",
          "Pour l’instant, les membres contiennent des valeurs aléatoires (sauf si on les initialise).",
          "On peut aussi déclarer plusieurs variables d’un coup :",
          "struct Etudiant etu1, etu2, etu3;"
        ],
        "visual": "(Visuel : un grand bloc mémoire nommé etu1. À l’intérieur, trois sousblocs : nom (vide), age (vide), moyenne (vide).)"
      },
      {
        "type": "example",
        "title": "EXEMPLE CONSTRUIT ÉTAPE 3 : ACCÉDER AUX MEMBRES AVEC . (LE POINT)",
        "content": [
          "Texte :",
          "etu1.age = 20;",
          "On utilise le point . pour accéder à un membre de la structure.",
          "etu1.age désigne le champ age de la variable etu1.",
          "On peut lire ou écrire comme avec une variable normale.",
          "Pour les chaînes, on utilise strcpy :",
          "strcpy(etu1.nom, \"Alice\");",
          "Initialisation rapide (déclarative) :",
          "struct Etudiant etu2 = {\"Bob\", 22, 16.0};",
          "→ L’ordre doit correspondre à la définition : nom, age, moyenne."
        ],
        "visual": "(Visuel : une animation où la variable etu1 est remplie. Le champ age reçoit 20, le champ nom reçoit \"Alice\" via strcpy, le champ moyenne reçoit 15.5.)"
      },
      {
        "type": "content",
        "title": "TABLEAUX DE STRUCTURES (PASSAGE À L’ÉCHELLE)",
        "content": [
          "Texte :",
          "Problème : gérer 3 étudiants. On utilise un tableau de struct Etudiant."
        ],
        "code": {
          "code": "struct Etudiant classe[3];   // un tableau de 3 étudiants// Remplir le premierstrcpy(classe[0].nom, \"Alice\");classe[0].age = 20;classe[0].moyenne = 15.5;// Remplir le deuxièmestrcpy(classe[1].nom, \"Bob\");classe[1].age = 22;classe[1].moyenne = 16.0;// Parcourir avec une bouclefor (int i = 0; i < 3; i++) {    printf(\"%s a %d ans et %.2f de moyenne\\n\", classe[i].nom, classe[i].age, classe[i].moyenne);}\nOn utilise classe[i].nom : d’abord l’index du tableau, puis le point pour le membre."
        },
        "visual": "(Visuel : une armoire à 3 étagères. Chaque étagère contient une fiche d’étudiant (nom, age, moyenne). Une boucle for parcourt les étagères.)"
      },
      {
        "type": "content",
        "title": "POINTEURS VERS STRUCTURES (L’OPÉRATEUR ->)",
        "content": [
          "Texte :",
          "Pour éviter de copier toute la structure (qui peut être grosse), on utilise souvent des pointeurs.",
          "Syntaxe avec pointeur :"
        ],
        "code": {
          "code": "struct Etudiant etu1 = {\"Alice\", 20, 15.5};struct Etudiant* ptr = &etu1;   // ptr pointe vers etu1// Accès via le pointeur (deux façons)(*ptr).age = 21;   // méthode 1 : déréférencement + pointptr->age = 21;     // méthode 2 : flèche -> (plus simple)\n-> (tiret + supérieur) est un raccourci : ptr->age équivaut à (*ptr).age.\nOn l’utilise tout le temps avec les structures."
        },
        "visual": "(Visuel : une flèche rouge -> qui part du pointeur ptr et va directement au membre age de la structure pointée. La méthode (*ptr).age est présentée comme plus lourde et barrée, la flèche -> est en vert et validée.)"
      },
      {
        "type": "error",
        "title": "ERREUR FRÉQUENTE N°1 : OUBLIER LE POINT-VIRGULE APRÈS LA DÉFINITION",
        "content": [
          "Texte :",
          "❌ Code faux :"
        ],
        "code": {
          "code": "struct Etudiant { ... };"
        },
        "visual": "(Visuel : un gros point d’exclamation rouge sur l’accolade fermante sans ;.)"
      },
      {
        "type": "error",
        "title": "ERREUR FRÉQUENTE N°2 : CONFONDRE LE NOM DE LA STRUCTURE ET LE NOM DE LA VARIABLE",
        "content": [
          "Texte :",
          "❌ Code faux :"
        ],
        "code": {
          "code": "struct Etudiant {    char nom[50];    int age;};Etudiant etu1;   // OUBLI de struct devant\nEn C, il faut écrire struct Etudiant pour déclarer une variable.\n✅ Correction : struct Etudiant etu1;\n(Note : on peut utiliser typedef pour éviter de répéter struct, mais ce sera vu plus tard. Pour l’instant, on garde struct.)"
        },
        "visual": "(Visuel : une alerte rouge sur Etudiant etu1; avec le message « struct manquant ». Une correction en vert avec struct Etudiant etu1;.)"
      },
      {
        "type": "error",
        "title": "ERREUR FRÉQUENTE N°3 : UTILISER = POUR COPIER UNE CHAÎNE DANS UNE STRUCTURE",
        "content": [
          "Texte :",
          "❌ Code faux :"
        ],
        "code": {
          "code": "struct Etudiant etu1;etu1.nom = \"Alice\";   // Erreur ! on ne peut pas affecter une chaîne avec =\nLe membre nom est un tableau. On ne peut pas lui assigner une chaîne directement avec =.\n✅ Correction : utiliser strcpy(etu1.nom, \"Alice\");."
        },
        "visual": "(Visuel : une flèche rouge barrée entre \"Alice\" et le champ nom. Une flèche verte valide pour strcpy.)"
      },
      {
        "type": "exercise",
        "title": "PETIT EXERCICE",
        "content": [
          "Texte :",
          "À toi de jouer !",
          "Écris un programme C qui :",
          "Définit une structure Point qui contient deux membres float x et float y.",
          "Dans le main, déclare une variable p1 de type struct Point.",
          "Demande à l’utilisateur de saisir les coordonnées x et y (avec scanf).",
          "Affiche les coordonnées sous la forme : Point (x, y).",
          "(Indice : utilise scanf(\"%f\", &p1.x) pour lire chaque coordonnée.)"
        ],
        "visual": "(Visuel : un graphique avec des axes, un point vide à placer, et l’énoncé.)"
      },
      {
        "type": "correction",
        "title": "CORRECTION EXPLIQUÉE",
        "content": [
          "Texte :",
          "Voici la solution :"
        ],
        "code": {
          "code": "#include <stdio.h>struct Point {    float x;    float y;};int main() {    struct Point p1;    printf(\"Donne x : \");    scanf(\"%f\", &p1.x);    printf(\"Donne y : \");    scanf(\"%f\", &p1.y);    printf(\"Point (%.2f, %.2f)\\n\", p1.x, p1.y);    return 0;}\nPourquoi c’est juste ?\nLa structure Point est bien définie.\np1.x et p1.y sont utilisés comme des variables float normales.\nDans scanf, on met &p1.x (car scanf a besoin d’une adresse).\nL’affichage utilise %.2f pour deux décimales."
        },
        "visual": "(Visuel : le code en vert. Un exemple d’exécution avec x=3.5, y=2.0 → affiche Point (3.50, 2.00).)"
      },
      {
        "type": "verification",
        "title": "VÉRIFICATION AUTONOME",
        "content": [
          "Texte :",
          "Sans utiliser l’ordinateur, trouve l’erreur dans ce code :"
        ],
        "code": {
          "code": "#include <stdio.h>#include <string.h>struct Livre {    char titre[100];    int pages;};int main() {    struct Livre livre1;    livre1.titre = \"Le Petit Prince\";    livre1.pages = 96;    printf(\"%s - %d pages\", livre1.titre, livre1.pages);    return 0;}\nQuestions à te poser :\nComment assigneton correctement une chaîne à un tableau de char ?\nY atil une autre erreur ?\nRéponse :\nErreur : livre1.titre = \"Le Petit Prince\"; est incorrect pour un tableau.\nCorrection : utiliser strcpy(livre1.titre, \"Le Petit Prince\"); (et inclure <string.h>).\nLe reste du code est correct."
        },
        "visual": "(Visuel : une loupe rouge pointe la ligne livre1.titre = ... avec une alerte. La correction avec strcpy est affichée en vert.)"
      },
      {
        "type": "summary",
        "title": "PASSAGE À L’AUTONOMIE (BILAN DU CHAPITRE 10)",
        "content": [
          "Texte :",
          "Tu dois maintenant être capable de répondre à ces 3 questions :",
          "Qu’est-ce que c’est ? → Une structure est un type défini par l’utilisateur qui regroupe plusieurs membres de types différents en une seule entité.",
          "Pourquoi l’utilise-t-on ? → Pour organiser des données liées (ex: un étudiant, un point, un produit) et les manipuler facilement, surtout avec des tableaux et des fonctions.",
          "Comment le construire seul ? →",
          "Définir avec struct Nom { ... };.",
          "Déclarer avec struct Nom variable;.",
          "Accéder aux membres avec . (ou -> pour un pointeur).",
          "Utiliser strcpy pour les chaînes.",
          "Vérification ultime :",
          "Écris un programme qui :",
          "Définit une structure Produit avec un nom (char[50]) et un prix (float).",
          "Déclare un tableau de 3 produits.",
          "Remplisle avec des valeurs de ton choix (initialisation directe).",
          "Parcourt le tableau et affiche chaque produit avec son prix.",
          "Fais-le sur papier, puis vérifie sur machine."
        ],
        "visual": "(Visuel : trois cases à cocher et une étoile pour la vérification ultime.)"
      }
    ],
    "keywords": [
      "printf",
      "scanf",
      "main",
      "return",
      "include",
      "int",
      "float",
      "char"
    ]
  },
  {
    "id": 11,
    "title": "ALLOCATION DYNAMIQUE DE MÉMOIRE (malloc, free)",
    "subtitle": "Créer des tableaux dont la taille est choisie pendant l’exécution",
    "icon": "HardDrive",
    "objective": "Créer des tableaux dont la taille est choisie pendant l’exécution",
    "blocks": [
      {
        "type": "title",
        "title": "TITRE",
        "content": [
          "Titre : Chapitre 11 – Allocation dynamique de mémoire",
          "Sous-titre : Créer des tableaux dont la taille est choisie pendant l’exécution"
        ],
        "visual": "(Visuel : un entrepôt géant (le tas / heap) avec des espaces vides. Un ouvrier (le programme) demande un bloc de la taille qu’il veut, le prend, et plus tard le remet en place. Un pointeur tient le numéro du bloc.)"
      },
      {
        "type": "situation",
        "title": "SITUATION RÉELLE",
        "content": [
          "Texte :",
          "Tu veux que l’utilisateur saisisse le nombre de notes qu’il a, puis que tu crées un tableau de cette taille exacte pour les stocker.",
          "Tu veux stocker des données dans un jeu vidéo, mais tu ne sais pas à l’avance combien d’ennemis seront présents.",
          "Tu as besoin d’un tableau qui peut grandir ou rétrécir pendant l’exécution.",
          "Les tableaux classiques (à taille fixe) sont trop rigides."
        ],
        "visual": "(Visuel : un utilisateur qui tape « 5 » au clavier, et un tableau de 5 cases apparaît. Un autre utilisateur tape « 100 » → un tableau de 100 cases apparaît.)"
      },
      {
        "type": "problem",
        "title": "PROBLÈME À COMPRENDRE",
        "content": [
          "Texte :",
          "Avec les tableaux vus au chapitre 7, la taille doit être connue à la compilation : int tab[10];.",
          "Si on veut une taille variable (ex: int tab[n]; avec n saisi par l’utilisateur), ce n’est pas toujours possible ou c’est dangereux (VLA).",
          "Il faut pouvoir demander de la mémoire pendant que le programme tourne, et la rendre quand on n’en a plus besoin.",
          "Le système d’exploitation gère une grande réserve de mémoire : le tas (heap)."
        ],
        "visual": "(Visuel : un diagramme de la mémoire. En haut, la « pile » (stack) avec les variables locales (taille fixe). En bas, le « tas » (heap) avec de grands blocs disponibles. Une flèche montre qu’on va demander au tas.)"
      },
      {
        "type": "question",
        "title": "QUESTION QUE L’ÉTUDIANT DOIT SE POSER",
        "content": [
          "Texte :",
          "« Comment demander au système d’exploitation un bloc de mémoire de la taille que je veux, à l’instant où j’en ai besoin, et comment le rendre quand j’ai fini ? »"
        ],
        "visual": "(Visuel : un point d’interrogation sur une réserve de blocs de mémoire, avec une main qui prend un bloc et une autre main qui le repose.)"
      },
      {
        "type": "reasoning",
        "title": "RAISONNEMENT (LES 4 ÉTAPES DE LA VIE D’UN BLOC DYNAMIQUE)",
        "content": [
          "Texte :",
          "Allouer : demander un bloc de la taille souhaitée → fonction malloc (memory allocate).",
          "Vérifier : s’assurer que l’allocation a réussi (malloc renvoie NULL si échec).",
          "Utiliser : lire/écrire dans ce bloc (via un pointeur, comme un tableau).",
          "Libérer : rendre le bloc au système avec free (sinon → fuite mémoire).",
          "Règle d’or absolue : tout malloc doit avoir un free correspondant."
        ],
        "visual": "(Visuel : un cycle à 4 étapes : ① Allouer (flèche), ② Vérifier (drapeau), ③ Utiliser (engrenage), ④ Libérer (poubelle).)"
      },
      {
        "type": "rule",
        "title": "RÈGLE GÉNÉRALE (SYNTAXE DE malloc ET free)",
        "content": [
          "Texte :",
          "Allocation :"
        ],
        "code": {
          "code": "if (ptr == NULL) {    printf(\"Erreur d'allocation !\");    exit(1);}"
        },
        "visual": "(Visuel : le code avec malloc et free coloré. Une flèche montre que ptr pointe vers le nouveau bloc. Un bouclier « Vérification NULL » est ajouté.)"
      },
      {
        "type": "visual",
        "title": "REPRÉSENTATION VISUELLE (COULEURS)",
        "content": [
          "Texte :",
          "Couleurs fonctionnelles pour ce chapitre :",
          "🟠 ORANGE : la fonction malloc.",
          "🔴 ROUGE : la fonction free.",
          "🟢 VERT : la vérification de NULL.",
          "🔵 BLEU : le pointeur qui reçoit l’adresse.",
          "🟣 MAGENTA : sizeof (pour calculer la taille)."
        ],
        "visual": "(Visuel : une ligne de code int* tab = (int*)malloc(n * sizeof(int)); avec chaque partie colorée selon la légende.)"
      },
      {
        "type": "example",
        "title": "EXEMPLE GUIDÉ (DÉCOUVERTE DU CODE)",
        "content": [
          "Texte :",
          "Voici un premier programme qui alloue dynamiquement un tableau d’entiers :"
        ],
        "code": {
          "code": "#include <stdio.h>#include <stdlib.h>int main() {    int n;    printf(\"Combien de nombres ? \");    scanf(\"%d\", &n);    // Étape 1 : allocation    int* tab = (int*)malloc(n * sizeof(int));    // Étape 2 : vérification    if (tab == NULL) {        printf(\"Mémoire insuffisante !\\n\");        return 1;    }    // Étape 3 : utilisation (comme un tableau normal)    for (int i = 0; i < n; i++) {        tab[i] = i * 10;        printf(\"%d \", tab[i]);    }    // Étape 4 : libération    free(tab);    return 0;}\nConsigne : on va décortiquer chaque étape."
        },
        "visual": "(Visuel : le code s’affiche avec les 4 étapes numérotées.)"
      },
      {
        "type": "example",
        "title": "EXEMPLE CONSTRUIT ÉTAPE 1 : malloc ET sizeof",
        "content": [
          "Texte :",
          "int* tab = (int*)malloc(n * sizeof(int));",
          "n * sizeof(int) : combien d’octets ? Si int fait 4 octets et n=5, on demande 20 octets.",
          "malloc va chercher un bloc de 20 octets dans le tas et renvoie son adresse.",
          "(int*) : on dit au compilateur « traite cette adresse comme un pointeur vers int ».",
          "On stocke cette adresse dans tab.",
          "Si n=0 ? Le comportement est indéfini (on évite)."
        ],
        "visual": "(Visuel : un schéma du tas avec un bloc de 20 octets surligné. La flèche tab pointe vers le début de ce bloc.)"
      },
      {
        "type": "example",
        "title": "EXEMPLE CONSTRUIT ÉTAPE 2 : VÉRIFICATION DE NULL",
        "content": [
          "Texte :",
          "if (tab == NULL) { ... }",
          "Si malloc ne trouve pas assez de mémoire (très rare, mais possible), il renvoie NULL.",
          "NULL est une adresse spéciale qui signifie « rien ».",
          "Ne jamais utiliser un pointeur NULL (le programme planterait).",
          "On vérifie donc systématiquement."
        ],
        "visual": "(Visuel : une bifurcation : si tab != NULL → on continue (vert). Si tab == NULL → on affiche une erreur et on s’arrête (rouge).)"
      },
      {
        "type": "example",
        "title": "EXEMPLE CONSTRUIT ÉTAPE 3 : UTILISATION COMME UN TABLEAU",
        "content": [
          "Texte :",
          "tab[i] = i * 10;",
          "tab est un pointeur, mais on peut utiliser les crochets [ ] comme pour un tableau.",
          "C’est équivalent à *(tab + i).",
          "La mémoire allouée est contiguë (cases collées), exactement comme un tableau statique.",
          "Différence avec un tableau statique :",
          "Ici, la taille n est décidée à l’exécution.",
          "On peut avoir n = 5 ou n = 1000 selon la saisie."
        ],
        "visual": "(Visuel : le bloc alloué avec les cases [0], [1], ..., [n-1]. Une flèche montre que tab[2] est équivalent à *(tab+2).)"
      },
      {
        "type": "example",
        "title": "EXEMPLE CONSTRUIT ÉTAPE 4 : LIBÉRATION AVEC free",
        "content": [
          "Texte :",
          "free(tab);",
          "On rend le bloc de mémoire au système.",
          "Le système pourra le réutiliser pour d’autres allocations.",
          "Ne pas oublier : sans free, le bloc reste réservé jusqu’à la fin du programme → fuite mémoire.",
          "Après free, ne plus utiliser tab (sauf si on lui réaffecte une nouvelle adresse)."
        ],
        "visual": "(Visuel : le bloc alloué passe de « occupé » (vert) à « libre » (gris). Une alerte « Ne plus utiliser tab après free ! ».)"
      },
      {
        "type": "example",
        "title": "EXEMPLE CONSTRUIT ÉTAPE 5 : calloc (ALLOCATION + INITIALISATION À ZÉRO)",
        "content": [
          "Texte :",
          "calloc fait la même chose que malloc, mais met tous les octets à 0.",
          "Syntaxe :"
        ],
        "code": {
          "code": "int* tab = (int*)calloc(n, sizeof(int));\ncalloc(n, sizeof(int)) alloue n blocs de sizeof(int) octets et les remplit de 0.\nUtile quand on veut un tableau initialisé à zéro sans faire de boucle.\nDifférence :\nmalloc : allocation rapide, contenu aléatoire.\ncalloc : un peu plus lent, mais contenu garanti à 0."
        },
        "visual": "(Visuel : deux tableaux côte à côte. Celui de malloc contient des valeurs aléatoires (ex: 38472, -5, 0, ...). Celui de calloc contient tous des 0.)"
      },
      {
        "type": "example",
        "title": "EXEMPLE CONSTRUIT ÉTAPE 6 : realloc (REDIMENSIONNER)",
        "content": [
          "Texte :",
          "realloc permet de changer la taille d’un bloc déjà alloué.",
          "Syntaxe :"
        ],
        "code": {
          "code": "int* nouveau = (int*)realloc(ancien, nouvelle_taille * sizeof(int));\nSi la nouvelle taille est plus grande, realloc essaye d’agrandir le bloc. Si ce n’est pas possible, il en alloue un nouveau, copie les données, et libère l’ancien.\nImportant : toujours stocker le retour dans un nouveau pointeur pour vérifier, car realloc peut échouer et renvoyer NULL (auquel cas l’ancien bloc est toujours valide).\n(Note : on mentionne realloc mais on ne l’utilisera pas dans l’exercice pour rester simple.)"
        },
        "visual": "(Visuel : un bloc qui s’agrandit (flèche vers la droite) ou qui se déplace (flèche courbe) si le système le décide.)"
      },
      {
        "type": "error",
        "title": "ERREUR FRÉQUENTE N°1 : OUBLIER free (FUITE MÉMOIRE)",
        "content": [
          "Texte :",
          "❌ Code faux :"
        ],
        "code": {
          "code": "int* tab = (int*)malloc(100 * sizeof(int));// on utilise tab...// on oublie free(tab);\nLa mémoire reste réservée jusqu’à la fin du programme.\nDans un programme long (serveur, jeu), les fuites s’accumulent et finissent par épuiser la mémoire.\n✅ Règle : chaque malloc doit avoir un free associé. Pensez à l’écrire immédiatement après l’allocation (même avant l’utilisation) pour ne pas l’oublier."
        },
        "visual": "(Visuel : un réservoir qui se vide goutte à goutte (les free manquants). Une alerte « FUITE ! ».)"
      },
      {
        "type": "error",
        "title": "ERREUR FRÉQUENTE N°2 : UTILISER LA MÉMOIRE APRÈS free (PENDANT)",
        "content": [
          "Texte :",
          "❌ Code faux :"
        ],
        "code": {
          "code": "int* tab = (int*)malloc(5 * sizeof(int));free(tab);tab[0] = 10;   // utilisation après free !\nfree rend le bloc au système. L’adresse n’est plus valide.\nUtiliser tab après free est un comportement indéfini (peut planter ou corrompre des données).\n✅ Bon réflexe : après free(tab);, mettre tab = NULL; pour éviter de l’utiliser par erreur."
        },
        "visual": "(Visuel : une flèche tab qui pointe vers une zone grisée (libre) avec une croix rouge et le message « Interdit ! ».)"
      },
      {
        "type": "error",
        "title": "ERREUR FRÉQUENTE N°3 : OUBLIER LE CAST OU LA VÉRIFICATION DE NULL",
        "content": [
          "Texte :",
          "❌ Code faux :"
        ],
        "code": {
          "code": "int* tab = malloc(n * sizeof(int));   // cast omis (acceptable en C, mais déconseillé)// On utilise tab sans vérifier s'il est NULL\nEn C, le cast n’est pas obligatoire, mais il est recommandé pour la clarté (et pour les compilateurs C++).\nLe plus grave : ne pas vérifier NULL. Si malloc échoue, tab vaut NULL, et le programme plantera.\n✅ Correction : toujours vérifier if (tab == NULL) { ... }."
        },
        "visual": "(Visuel : un pointeur qui pointe vers NULL, puis un crash de programme. Une alerte rouge avec « Vérifie toujours NULL ! ».)"
      },
      {
        "type": "exercise",
        "title": "PETIT EXERCICE",
        "content": [
          "Texte :",
          "À toi de jouer !",
          "Écris un programme C qui :",
          "Demande à l’utilisateur le nombre de notes (n).",
          "Alloue dynamiquement un tableau de float de taille n.",
          "Demande à l’utilisateur de saisir chaque note (une par une, avec scanf).",
          "Calcule et affiche la moyenne des notes.",
          "Libère la mémoire avant de terminer.",
          "(Indice : utilise malloc, une boucle for, et free. Pense à la conversion en float pour la moyenne.)"
        ],
        "visual": "(Visuel : l’énoncé avec des étapes numérotées.)"
      },
      {
        "type": "correction",
        "title": "CORRECTION EXPLIQUÉE",
        "content": [
          "Texte :",
          "Voici la solution :"
        ],
        "code": {
          "code": "#include <stdio.h>#include <stdlib.h>int main() {    int n;    printf(\"Combien de notes ? \");    scanf(\"%d\", &n);    float* notes = (float*)malloc(n * sizeof(float));    if (notes == NULL) {        printf(\"Erreur d'allocation !\\n\");        return 1;    }    float somme = 0.0;    for (int i = 0; i < n; i++) {        printf(\"Note %d : \", i + 1);        scanf(\"%f\", &notes[i]);        somme += notes[i];    }    float moyenne = somme / n;    printf(\"Moyenne = %.2f\\n\", moyenne);    free(notes);   // Étape indispensable    return 0;}\nPourquoi c’est juste ?\nLa taille est dynamique (choisie par l’utilisateur).\nmalloc est vérifié.\nLe tableau est utilisé comme un tableau normal.\nfree libère proprement la mémoire."
        },
        "visual": "(Visuel : le code en vert, avec les étapes clés surlignées. Un exemple d’exécution avec n=3, notes 12, 15, 18 → moyenne 15.00.)"
      },
      {
        "type": "verification",
        "title": "VÉRIFICATION AUTONOME",
        "content": [
          "Texte :",
          "Sans utiliser l’ordinateur, trouve les 2 erreurs dans ce code :"
        ],
        "code": {
          "code": "#include <stdio.h>#include <stdlib.h>int main() {    int n = 5;    int* tab = (int*)malloc(n * sizeof(int));    if (tab == NULL) return 1;    for (int i = 0; i <= n; i++) {        tab[i] = i;    }    free(tab);    printf(\"%d\", tab[2]);    return 0;}\nQuestions à te poser :\nQuelle est la borne de la boucle for ? (indice : un tableau de taille n a des indices de 0 à n-1).\nQue se passe-t-il après free(tab) ?\nRéponse :\nLa boucle for (int i = 0; i <= n; i++) va jusqu’à i=5 inclus, donc on écrit dans tab[5] qui n’existe pas → débordement.\nAprès free(tab), on utilise tab[2] dans printf → utilisation mémoire libérée (comportement indéfini)."
        },
        "visual": "(Visuel : une loupe rouge pointe la condition i <= n et une autre pointe le printf après free. Les corrections sont proposées : i < n et déplacer printf avant free.)"
      },
      {
        "type": "summary",
        "title": "PASSAGE À L’AUTONOMIE (BILAN DU CHAPITRE 11)",
        "content": [
          "Texte :",
          "Tu dois maintenant être capable de répondre à ces 3 questions :",
          "Qu’est-ce que c’est ? → L’allocation dynamique permet de demander de la mémoire au tas (heap) pendant l’exécution, via malloc, et de la rendre avec free.",
          "Pourquoi l’utilise-t-on ? → Pour créer des tableaux dont la taille n’est pas connue à la compilation, ou des structures qui peuvent grandir/rétrécir.",
          "Comment le construire seul ? →",
          "Inclure <stdlib.h>.",
          "Allouer avec type* ptr = (type*)malloc(nb * sizeof(type));.",
          "Vérifier ptr != NULL.",
          "Utiliser les crochets [ ].",
          "Libérer avec free(ptr); (et optionnellement mettre ptr = NULL;).",
          "Vérification ultime :",
          "Écris un programme qui :",
          "Demande à l’utilisateur une taille N.",
          "Alloue un tableau d’entiers de taille N.",
          "Remplit le tableau avec les nombres de 1 à N.",
          "Affiche le tableau à l’envers (du dernier au premier).",
          "Libère la mémoire.",
          "Fais-le sur papier, puis vérifie sur machine."
        ],
        "visual": "(Visuel : trois cases à cocher et une étoile pour la vérification ultime.)"
      }
    ],
    "keywords": [
      "printf",
      "scanf",
      "main",
      "return",
      "include",
      "int",
      "float",
      "long"
    ]
  },
  {
    "id": 12,
    "title": "LES FICHIERS (LECTURE / ÉCRITURE)",
    "subtitle": "Sauvegarder des données sur le disque pour les réutiliser plus tard",
    "icon": "FileText",
    "objective": "Sauvegarder des données sur le disque pour les réutiliser plus tard",
    "blocks": [
      {
        "type": "title",
        "title": "TITRE",
        "content": [
          "Titre : Chapitre 12 – Les fichiers",
          "Sous-titre : Sauvegarder des données sur le disque pour les réutiliser plus tard"
        ],
        "visual": "(Visuel : une grande image d’un classeur ou d’une boîte de rangement étiquetée « données.txt ». À côté, une clé USB et un disque dur. Une flèche relie la mémoire RAM (volatile) au disque dur (permanent).)"
      },
      {
        "type": "situation",
        "title": "SITUATION RÉELLE",
        "content": [
          "Texte :",
          "Tu veux que les scores d’un jeu vidéo restent enregistrés même après avoir éteint l’ordinateur.",
          "Tu veux sauvegarder la liste des contacts de ton agenda.",
          "Tu veux exporter des données (notes, clients, factures) pour les ouvrir dans un tableur.",
          "La mémoire RAM s’efface quand on éteint l’ordinateur. Le disque dur, lui, garde les données."
        ],
        "visual": "(Visuel : une partie de jeu qui se termine et un tableau des meilleurs scores qui s’affiche (sauvegardé). Un carnet d’adresses. Une facture exportée en .txt.)"
      },
      {
        "type": "problem",
        "title": "PROBLÈME À COMPRENDRE",
        "content": [
          "Texte :",
          "Les données en mémoire (variables, tableaux) sont temporaires : elles disparaissent quand le programme se termine.",
          "Pour conserver des données, il faut les écrire dans un fichier sur le disque dur.",
          "L’ordinateur voit les fichiers comme un flux de caractères. Il faut :",
          "Ouvrir un fichier (pour lire ou écrire).",
          "Lire ou écrire des données.",
          "Fermer le fichier (pour s’assurer que tout est bien enregistré)."
        ],
        "visual": "(Visuel : une main qui écrit sur un disque dur avec un stylo, puis qui le referme. Le disque dur a une étiquette « Fichier sauvegardé ».)"
      },
      {
        "type": "question",
        "title": "QUESTION QUE L’ÉTUDIANT DOIT SE POSER",
        "content": [
          "Texte :",
          "« Comment ouvrir un fichier sur le disque, y écrire des données, les relire, et le refermer correctement ? »"
        ],
        "visual": "(Visuel : un point d’interrogation sur un dossier de fichiers, avec des flèches entrantes (lecture) et sortantes (écriture).)"
      },
      {
        "type": "reasoning",
        "title": "RAISONNEMENT (LE MODÈLE DU FLUX)",
        "content": [
          "Texte :",
          "En C, on manipule les fichiers via un type spécial : FILE* (un pointeur sur une structure qui représente le fichier).",
          "On utilise 3 étapes principales :",
          "Ouvrir : fopen(\"nom_fichier\", \"mode\") → retourne un FILE* (ou NULL en cas d’échec).",
          "Lire / écrire :",
          "Écrire : fprintf, fputs (comme printf, mais vers un fichier).",
          "Lire : fscanf, fgets (comme scanf, mais depuis un fichier).",
          "Fermer : fclose(fichier) pour libérer les ressources et s’assurer que les données sont bien écrites.",
          "Règle d’or : tout fichier ouvert doit être fermé (fclose)."
        ],
        "visual": "(Visuel : trois boîtes enchaînées : ① fopen (une porte qui s’ouvre), ② fprintf/fscanf (des flèches qui entrent ou sortent), ③ fclose (la porte qui se referme).)"
      },
      {
        "type": "rule",
        "title": "RÈGLE GÉNÉRALE (LES MODES D’OUVERTURE)",
        "content": [
          "Texte :",
          "fopen prend deux arguments : le nom du fichier et le mode.",
          "Mode",
          "Signification",
          "Si le fichier existe",
          "Si le fichier n’existe pas",
          "\"r\"",
          "Lecture seule",
          "On l’ouvre",
          "Erreur (retourne NULL)",
          "\"w\"",
          "Écriture seule",
          "On l’efface (écrase)",
          "On le crée",
          "\"a\"",
          "Ajout (append)",
          "On écrit à la fin",
          "On le crée",
          "\"r+\"",
          "Lecture + écriture",
          "On l’ouvre",
          "Erreur",
          "\"w+\"",
          "Lecture + écriture",
          "On l’efface",
          "On le crée",
          "Pour débuter, on utilise surtout :",
          "\"r\" pour lire un fichier existant.",
          "\"w\" pour écrire dans un fichier (écrase l’ancien).",
          "\"a\" pour ajouter à la fin d’un fichier."
        ],
        "visual": "(Visuel : un tableau coloré avec les modes et leurs conséquences. Les modes les plus courants sont encadrés en vert.)"
      },
      {
        "type": "visual",
        "title": "REPRÉSENTATION VISUELLE (COULEURS)",
        "content": [
          "Texte :",
          "Couleurs fonctionnelles pour ce chapitre :",
          "🟠 ORANGE : FILE* (le pointeur de fichier).",
          "🔵 BLEU : fopen (ouvrir).",
          "🔴 ROUGE : fclose (fermer).",
          "🟢 VERT : les fonctions d’écriture/lecture (fprintf, fscanf, fgets, fputs).",
          "🟣 MAGENTA : la vérification de NULL."
        ],
        "visual": "(Visuel : une ligne de code avec fopen en bleu, FILE* en orange, fprintf en vert, et fclose en rouge, avec une légende à côté.)"
      },
      {
        "type": "example",
        "title": "EXEMPLE GUIDÉ (DÉCOUVERTE DU CODE – ÉCRITURE)",
        "content": [
          "Texte :",
          "Voici un programme qui écrit un message dans un fichier test.txt :"
        ],
        "code": {
          "code": "#include <stdio.h>int main() {    FILE* fichier;   // Étape 1 : déclarer un pointeur de fichier    fichier = fopen(\"test.txt\", \"w\");   // Étape 2 : ouvrir en écriture    if (fichier == NULL) {        printf(\"Erreur d'ouverture !\\n\");        return 1;    }    fprintf(fichier, \"Bonjour le monde !\\n\");   // Étape 3 : écrire    fprintf(fichier, \"Ligne 2\");    fclose(fichier);   // Étape 4 : fermer    return 0;}\nConsigne : on va décortiquer chaque ligne."
        },
        "visual": "(Visuel : le code s’affiche. Un écran à côté montre que le fichier test.txt a été créé sur le disque.)"
      },
      {
        "type": "example",
        "title": "EXEMPLE CONSTRUIT ÉTAPE 1 : DÉCLARATION DE FILE*",
        "content": [
          "Texte :",
          "FILE* fichier;",
          "FILE est un type défini dans <stdio.h>.",
          "fichier est un pointeur qui servira à désigner le fichier ouvert.",
          "On ne crée pas un objet FILE nous-mêmes : c’est fopen qui le crée et nous donne son adresse."
        ],
        "visual": "(Visuel : une boîte vide (le pointeur) qui va recevoir l’adresse d’un fichier. Le mot FILE* est en orange.)"
      },
      {
        "type": "example",
        "title": "EXEMPLE CONSTRUIT ÉTAPE 2 : OUVERTURE AVEC fopen",
        "content": [
          "Texte :",
          "fichier = fopen(\"test.txt\", \"w\");",
          "On demande au système d’ouvrir (ou créer) le fichier nommé \"test.txt\".",
          "Mode \"w\" = écriture : si le fichier existe, il est effacé ; s’il n’existe pas, il est créé.",
          "fopen retourne un pointeur vers une structure interne qui représente le fichier.",
          "Si l’ouverture échoue (ex: autorisations insuffisantes), elle retourne NULL."
        ],
        "visual": "(Visuel : une porte de fichier qui s’ouvre. fichier contient maintenant un numéro (l’adresse) qui mène à ce fichier.)"
      },
      {
        "type": "example",
        "title": "EXEMPLE CONSTRUIT ÉTAPE 3 : VÉRIFICATION DE NULL",
        "content": [
          "Texte :",
          "if (fichier == NULL) { ... }",
          "Toujours vérifier si fopen a réussi.",
          "Si fichier vaut NULL, le fichier n’est pas accessible.",
          "Dans ce cas, on affiche une erreur et on quitte (avec return 1 ou exit).",
          "Rappel : utiliser NULL sans fopen échouerait (plantage)."
        ],
        "visual": "(Visuel : une bifurcation : si fichier != NULL → on continue (vert). Si NULL → alerte rouge et arrêt.)"
      },
      {
        "type": "example",
        "title": "EXEMPLE CONSTRUIT ÉTAPE 4 : ÉCRIRE AVEC fprintf",
        "content": [
          "Texte :",
          "fprintf(fichier, \"Bonjour le monde !\\n\");",
          "fprintf fonctionne comme printf, mais avec un paramètre supplémentaire au début : le pointeur de fichier.",
          "On écrit dans le fichier, pas à l’écran.",
          "On peut utiliser tous les codes de format : %d, %f, %s, etc."
        ],
        "code": {
          "code": "int age = 25;fprintf(fichier, \"Age : %d\", age);\nLes données sont écrites sous forme de texte (lisible par un humain)."
        },
        "visual": "(Visuel : une flèche qui part du printf vers le fichier test.txt sur le disque. Le texte « Bonjour le monde ! » apparaît dans le fichier.)"
      },
      {
        "type": "example",
        "title": "EXEMPLE CONSTRUIT ÉTAPE 5 : FERMER AVEC fclose",
        "content": [
          "Texte :",
          "fclose(fichier);",
          "On ferme le fichier.",
          "Cela sauvegarde toutes les données sur le disque.",
          "Cela libère les ressources (le système peut rouvrir le fichier).",
          "Ne jamais oublier : si on ne ferme pas, certaines données peuvent rester dans un tampon (buffer) et ne pas être écrites, et le fichier peut rester verrouillé."
        ],
        "visual": "(Visuel : la porte du fichier se referme avec un clic. Un cadenas vert indique que les données sont bien enregistrées.)"
      },
      {
        "type": "example",
        "title": "EXEMPLE CONSTRUIT ÉTAPE 6 : LIRE AVEC fscanf",
        "content": [
          "Texte :",
          "Pour relire le fichier qu’on vient d’écrire :"
        ],
        "code": {
          "code": "FILE* fichier = fopen(\"test.txt\", \"r\");   // mode lectureif (fichier == NULL) { return 1; }char chaine[100];fscanf(fichier, \"%s\", chaine);   // lit un mot (s’arrête à l’espace)printf(\"Lu : %s\", chaine);fclose(fichier);\nfscanf fonctionne comme scanf, mais lit depuis le fichier.\nMode \"r\" : le fichier doit exister, sinon fopen retourne NULL.\nPour lire une ligne entière (avec espaces), on utilise fgets (plus sûr)."
        },
        "visual": "(Visuel : une flèche qui part du fichier test.txt, traverse fscanf, et affiche le contenu à l’écran.)"
      },
      {
        "type": "content",
        "title": "LIRE UNE LIGNE COMPLÈTE AVEC fgets (SAIN ET SÛR)",
        "content": [
          "Texte :",
          "fgets lit une ligne entière (y compris les espaces) et s’arrête à \\n."
        ],
        "code": {
          "code": "FILE* fichier = fopen(\"test.txt\", \"r\");if (fichier == NULL) return 1;char ligne[200];while (fgets(ligne, sizeof(ligne), fichier) != NULL) {    printf(\"%s\", ligne);   // affiche chaque ligne}fclose(fichier);\nfgets(ligne, 200, fichier) lit au plus 199 caractères + \\0.\nIl s’arrête à la fin de la ligne ou à la fin du fichier.\nLa boucle while lit toutes les lignes jusqu’à la fin du fichier."
        },
        "visual": "(Visuel : un fichier avec plusieurs lignes. Une boucle while passe une à une, affichant chaque ligne sur l’écran.)"
      },
      {
        "type": "error",
        "title": "ERREUR FRÉQUENTE N°1 : OUBLIER DE VÉRIFIER LE RETOUR DE fopen",
        "content": [
          "Texte :",
          "❌ Code faux :"
        ],
        "code": {
          "code": "FILE* fichier = fopen(\"data.txt\", \"r\");fscanf(fichier, \"%d\", &valeur);   // si fichier == NULL, plantage !\nSi le fichier n’existe pas, fopen retourne NULL.\nUtiliser fscanf sur NULL fait planter le programme.\n✅ Correction : toujours vérifier if (fichier == NULL) { ... }."
        },
        "visual": "(Visuel : une flèche qui pointe vers NULL et un crash. Une alerte rouge « Vérifie fopen ! ».)"
      },
      {
        "type": "error",
        "title": "ERREUR FRÉQUENTE N°2 : OUBLIER DE FERMER LE FICHIER (fclose)",
        "content": [
          "Texte :",
          "❌ Code faux :"
        ],
        "code": {
          "code": "FILE* f = fopen(\"data.txt\", \"w\");fprintf(f, \"Hello\");// on oublie fclose(f);\nLes données peuvent rester dans le tampon mémoire et ne pas être écrites sur le disque.\nLe fichier peut rester verrouillé, impossible à rouvrir par un autre programme.\nLe système peut manquer de ressources si on accumule les fichiers ouverts.\n✅ Règle : écrire fclose(f) juste après l’avoir ouvert (même vide) pour ne pas l’oublier."
        },
        "visual": "(Visuel : un tampon (buffer) avec des données qui ne sont pas transférées au disque. Une alerte « Risque de perte de données ! ».)"
      },
      {
        "type": "error",
        "title": "ERREUR FRÉQUENTE N°3 : MAUVAIS MODE D’OUVERTURE",
        "content": [
          "Texte :",
          "❌ Code faux :"
        ],
        "code": {
          "code": "FILE* f = fopen(\"data.txt\", \"w\");   // on ouvre en écriturefscanf(f, \"%d\", &x);                // on essaye de lire !\nMode \"w\" = écriture seulement. fscanf (lecture) échouera.\n✅ Correction : utiliser le bon mode : \"r\" pour lire, \"w\" pour écrire, \"r+\" pour les deux."
        },
        "visual": "(Visuel : une clé \"w\" qui ne tourne pas dans la serrure fscanf (lecture). La clé \"r\" fonctionne.)"
      },
      {
        "type": "exercise",
        "title": "PETIT EXERCICE",
        "content": [
          "Texte :",
          "À toi de jouer !",
          "Écris un programme C qui :",
          "Demande à l’utilisateur son nom (chaîne) et son âge (entier).",
          "Ouvre un fichier \"personne.txt\" en mode écriture \"w\".",
          "Écrit dans ce fichier : Nom : [nom] - Age : [age] (avec un \\n à la fin).",
          "Ferme le fichier.",
          "Réouvre le fichier en mode lecture \"r\", lit la ligne avec fgets, et l’affiche à l’écran.",
          "(Indice : utilise fprintf pour écrire, fgets pour lire, et fclose deux fois.)"
        ],
        "visual": "(Visuel : l’énoncé avec les étapes numérotées.)"
      },
      {
        "type": "correction",
        "title": "CORRECTION EXPLIQUÉE",
        "content": [
          "Texte :",
          "Voici la solution :"
        ],
        "code": {
          "code": "#include <stdio.h>#include <string.h>int main() {    char nom[50];    int age;    printf(\"Nom : \");    scanf(\"%s\", nom);    printf(\"Age : \");    scanf(\"%d\", &age);    // Écriture    FILE* f = fopen(\"personne.txt\", \"w\");    if (f == NULL) { printf(\"Erreur écriture\\n\"); return 1; }    fprintf(f, \"Nom : %s - Age : %d\\n\", nom, age);    fclose(f);    // Lecture    f = fopen(\"personne.txt\", \"r\");    if (f == NULL) { printf(\"Erreur lecture\\n\"); return 1; }    char ligne[100];    fgets(ligne, sizeof(ligne), f);    printf(\"Contenu du fichier : %s\", ligne);    fclose(f);    return 0;}\nPourquoi c’est juste ?\nOn vérifie fopen à chaque fois.\nOn ferme le fichier après écriture avant de le rouvrir en lecture.\nfgets lit la ligne entière avec les espaces."
        },
        "visual": "(Visuel : le code en vert. Un exemple d’exécution : Nom=Alice, Age=30 → le fichier contient « Nom : Alice - Age : 30 » et le programme l’affiche.)"
      },
      {
        "type": "verification",
        "title": "VÉRIFICATION AUTONOME",
        "content": [
          "Texte :",
          "Sans utiliser l’ordinateur, trouve l’erreur dans ce code :"
        ],
        "code": {
          "code": "#include <stdio.h>int main() {    FILE* f = fopen(\"test.txt\", \"r\");    fprintf(f, \"Hello\");    fclose(f);    return 0;}\nQuestions à te poser :\nQuel est le mode d’ouverture ?\nEstil compatible avec fprintf ?\nManquetil une vérification ?\nRéponse :\nMode \"r\" = lecture seule. fprintf écrit → erreur.\nIl faut soit utiliser \"w\" pour écrire, soit \"w+\" ou \"r+\" pour lire et écrire.\nIl manque aussi la vérification de NULL (même si ce n’est pas la question principale)."
        },
        "visual": "(Visuel : une loupe rouge pointe le mode \"r\" et l’appel à fprintf.)"
      },
      {
        "type": "summary",
        "title": "PASSAGE À L’AUTONOMIE (BILAN DU CHAPITRE 12)",
        "content": [
          "Texte :",
          "Tu dois maintenant être capable de répondre à ces 3 questions :",
          "Qu’est-ce que c’est ? → Un fichier est une zone de stockage permanente sur le disque. En C, on le manipule via un FILE*, avec fopen (ouverture), fprintf/fscanf (lecture/écriture), et fclose (fermeture).",
          "Pourquoi l’utilise-t-on ? → Pour sauvegarder des données entre deux exécutions du programme (scores, paramètres, listes, etc.).",
          "Comment le construire seul ? →",
          "Ouvrir avec FILE* f = fopen(\"nom\", \"mode\");.",
          "Vérifier if (f == NULL).",
          "Écrire avec fprintf(f, ...) ou lire avec fscanf(f, ...) ou fgets(...).",
          "Fermer avec fclose(f);.",
          "Vérification ultime :",
          "Écris un programme qui lit un fichier \"nombres.txt\" contenant des entiers (un par ligne) et affiche leur somme. (Supposons que le fichier existe et contient des nombres.)",
          "Indice : utilise une boucle while (fscanf(f, \"%d\", &n) == 1) { somme += n; }.",
          "Fais-le sur papier, puis vérifie sur machine."
        ],
        "visual": "(Visuel : trois cases à cocher et une étoile pour la vérification ultime.)"
      }
    ],
    "keywords": [
      "printf",
      "scanf",
      "main",
      "return",
      "include",
      "int",
      "char",
      "if"
    ]
  },
  {
    "id": 13,
    "title": "MODULARITÉ (PLUSIEURS FICHIERS .c et .h)",
    "subtitle": "Découper son code en plusieurs fichiers pour le rendre professionnel",
    "icon": "FolderTree",
    "objective": "Découper son code en plusieurs fichiers pour le rendre professionnel",
    "blocks": [
      {
        "type": "title",
        "title": "TITRE",
        "content": [
          "Titre : Chapitre 13 – Modularité",
          "Sous-titre : Découper son code en plusieurs fichiers pour le rendre professionnel"
        ],
        "visual": "(Visuel : une bibliothèque avec plusieurs rayons (fichiers). Sur chaque rayon, une étiquette : main.c, utils.c, math.c. Un architecte (le programmeur) regarde les plans de la bibliothèque.)"
      },
      {
        "type": "situation",
        "title": "SITUATION RÉELLE",
        "content": [
          "Texte :",
          "Ton programme fait maintenant 500 lignes, puis 1000 lignes.",
          "Tu veux réutiliser tes fonctions (comme calculMoyenne) dans un autre projet.",
          "Tu travailles en équipe : Alice s’occupe des entrées/sorties, Bob des calculs.",
          "Un seul fichier devient vite un gros spaghetti : difficile à lire, à modifier, et à tester."
        ],
        "visual": "(Visuel : un long rouleau de code de 1000 lignes avec des visages fatigués. À côté, plusieurs blocs séparés et bien rangés avec des étiquettes.)"
      },
      {
        "type": "problem",
        "title": "PROBLÈME À COMPRENDRE",
        "content": [
          "Texte :",
          "Toutes nos fonctions étaient jusqu’ici dans le même fichier que main.",
          "Si je veux réutiliser strlen (de <string.h>), je n’ai pas besoin de recopier son code : elle est dans une bibliothèque.",
          "Je dois pouvoir créer mes propres bibliothèques : des fichiers qui contiennent des fonctions réutilisables.",
          "Mais en C, une fonction ne peut être définie qu’une seule fois. Il faut séparer la déclaration (le prototype) de la définition (le corps)."
        ],
        "visual": "(Visuel : un puzzle. Une pièce est la déclaration (le contour), l’autre est la définition (le remplissage). Les deux sont séparées dans des boîtes différentes.)"
      },
      {
        "type": "question",
        "title": "QUESTION QUE L’ÉTUDIANT DOIT SE POSER",
        "content": [
          "Texte :",
          "« Comment ranger mes fonctions dans plusieurs fichiers, et dire au compilateur de tous les assembler pour former un seul programme ? »"
        ],
        "visual": "(Visuel : un point d’interrogation avec des flèches qui relient plusieurs blocs (fichiers) vers un seul exécutable.)"
      },
      {
        "type": "reasoning",
        "title": "RAISONNEMENT (LE CONCEPT DE MODULE)",
        "content": [
          "Texte :",
          "On distingue deux types de fichiers :",
          "Le fichier d’entête (.h) :",
          "Contient les déclarations (prototypes de fonctions, #define, struct).",
          "C’est la « carte d’identité » du module. Il dit ce qu’on peut utiliser, mais pas comment c’est fait.",
          "On l’inclut avec #include \"nom.h\".",
          "Le fichier source (.c) :",
          "Contient les définitions (le corps des fonctions).",
          "C’est l’implémentation concrète.",
          "Il inclut son propre .h et les bibliothèques nécessaires.",
          "Principe fondamental :",
          "On peut appeler une fonction si on a vu son prototype (dans un .h).",
          "Le compilateur n’a pas besoin de voir le corps pour compiler ; il le trouvera plus tard lors de l’édition des liens (linkage)."
        ],
        "visual": "(Visuel : un restaurant. Le .h est le menu (ce qui est proposé). Le .c est la cuisine (comment c’est préparé). Le client (main.c) commande en regardant le menu.)"
      },
      {
        "type": "rule",
        "title": "RÈGLE GÉNÉRALE (ORGANISATION TYPIQUE)",
        "content": [
          "Texte :",
          "Structure d’un projet avec 3 fichiers :",
          "operations.h : déclarations (prototypes)."
        ],
        "code": {
          "code": "#include <stdio.h>#include \"operations.h\"int main() { printf(\"%d\", additionner(5,3)); return 0; }\nCompilation :\ngcc main.c operations.c -o programme\n→ Le compilateur assemble les deux .c en un seul exécutable."
        },
        "visual": "(Visuel : trois blocs reliés. Les blocs .h et .c sont codés avec leurs couleurs. Une flèche de main.c pointe vers operations.h, et une autre flèche de compilation relie main.c + operations.c vers programme.exe.)"
      },
      {
        "type": "visual",
        "title": "REPRÉSENTATION VISUELLE (COULEURS)",
        "content": [
          "Texte :",
          "Couleurs fonctionnelles pour ce chapitre :",
          "🔵 BLEU : les fichiers .h (entêtes / déclarations).",
          "🟠 ORANGE : les fichiers .c (sources / définitions).",
          "🟢 VERT : les gardes #ifndef / #define / #endif.",
          "🔴 ROUGE : les #include (pour importer).",
          "🟣 MAGENTA : les prototypes (dans les .h)."
        ],
        "visual": "(Visuel : l’écran montre un projet avec trois fichiers. operations.h est coloré en bleu, operations.c en orange, main.c en orange aussi. Les #include sont en rouge.)"
      },
      {
        "type": "example",
        "title": "EXEMPLE GUIDÉ (CRÉER UN MODULE SIMPLE)",
        "content": [
          "Texte :",
          "Nous allons créer un module math avec deux fonctions : carre et cube.",
          "Étape 1 : Créer math.h (le menu)"
        ],
        "code": {
          "code": "#include <stdio.h>#include \"math.h\"int main() {    int x = 5;    printf(\"Carre de %d = %d\\n\", x, carre(x));    printf(\"Cube de %d = %d\\n\", x, cube(x));    return 0;}\nCompilation :\ngcc main.c math.c -o programme"
        },
        "visual": "(Visuel : les trois fichiers s’affichent sur un écran avec leurs couleurs. Une flèche d’exécution montre le résultat : Carre de 5 = 25, Cube de 5 = 125.)"
      },
      {
        "type": "example",
        "title": "EXEMPLE CONSTRUIT ÉTAPE 1 : LE FICHIER .h ET LES GARDES",
        "content": [
          "Texte :",
          "Pourquoi ces étranges #ifndef, #define, #endif ?",
          "Le problème : si un fichier .h est inclus plusieurs fois (directement ou indirectement), le compilateur voit deux fois les mêmes prototypes → erreur de redéfinition.",
          "La solution : les garde-fous (include guards).",
          "#ifndef MATH_H : « Si MATH_H n’est pas défini… »",
          "#define MATH_H : « …alors définisle. »",
          "#endif : « Fin de la condition. »",
          "Règle : le nom de la garde (ex: MATH_H) doit être unique dans le projet. En général, on utilise le nom du fichier en majuscules avec _H."
        ],
        "visual": "(Visuel : une porte avec un verrou (#ifndef). La première fois qu’on inclut, la porte s’ouvre (#define). Les fois suivantes, la porte reste fermée (le contenu est ignoré).)"
      },
      {
        "type": "example",
        "title": "EXEMPLE CONSTRUIT ÉTAPE 2 : LE FICHIER .c (IMPLÉMENTATION)",
        "content": [
          "Texte :",
          "#include \"math.h\"",
          "On inclut l’entête pour que le compilateur connaisse les prototypes.",
          "On écrit le corps de chaque fonction.",
          "Remarque : on n’inclut pas <stdio.h> ici si on n’utilise pas printf dans ce fichier. On n’inclut que ce dont on a besoin.",
          "Compilation séparée :",
          "Le fichier .c est compilé individuellement en un fichier objet (.o ou .obj).",
          "Puis le linker (éditeur de liens) les assemble."
        ],
        "visual": "(Visuel : une pièce de cuisine où le chef (math.c) prépare les plats (carre et cube) en suivant la recette (les prototypes du .h).)"
      },
      {
        "type": "example",
        "title": "EXEMPLE CONSTRUIT ÉTAPE 3 : LE main.c ET L’INCLUSION",
        "content": [
          "Texte :",
          "#include \"math.h\"",
          "On utilise des guillemets \" \" pour nos propres fichiers (par opposition aux chevrons < > qui sont pour les bibliothèques système).",
          "math.h est cherché d’abord dans le répertoire du projet.",
          "Grâce à cette inclusion, le compilateur connaît les prototypes de carre et cube et peut vérifier que les appels sont corrects.",
          "Appel :",
          "int resultat = carre(5); → le compilateur sait que carre existe (quelque part), il fait confiance au linker pour trouver le corps."
        ],
        "visual": "(Visuel : une flèche de main.c vers math.h. Le compilateur coche une case « prototype connu ».)"
      },
      {
        "type": "example",
        "title": "EXEMPLE CONSTRUIT ÉTAPE 4 : LA COMPILATION (LA COMMANDE)",
        "content": [
          "Texte :",
          "gcc -o programme main.c math.c",
          "On donne tous les fichiers .c au compilateur.",
          "Il les compile chacun en fichier objet, puis les assemble.",
          "Si on oublie math.c, le linker dira : « référence indéfinie vers carre ».",
          "Alternative (compilation séparée en deux étapes) :",
          "bash",
          "gcc -c main.c        # produit main.ogcc -c math.c        # produit math.ogcc -o programme main.o math.o   # assemble les objets",
          "Utile pour les gros projets : on ne recompile que ce qui a changé."
        ],
        "visual": "(Visuel : une ligne de commande avec les fichiers. Une flèche montre que main.c + math.c → programme.exe.)"
      },
      {
        "type": "example",
        "title": "EXEMPLE CONSTRUIT ÉTAPE 5 : PARTAGER UNE CONSTANTE OU UNE STRUCTURE",
        "content": [
          "Texte :",
          "On peut aussi déclarer des constantes ou des structures dans le .h.",
          "constantes.h :"
        ],
        "code": {
          "code": "#ifndef CONSTANTES_H#define CONSTANTES_H#define TAILLE_MAX 100#define PI 3.14159struct Point { float x; float y; };#endif\n#define crée une macro (remplacement textuel).\nLa structure est déclarée, donc tout fichier qui inclut constantes.h peut l’utiliser.\nImportant : si on définit une variable dans le .h (ex: int global = 5;), elle sera dupliquée dans chaque fichier qui l’inclut → erreur ! On ne met que des déclarations dans le .h, jamais de définitions de variables (sauf si elles sont static ou extern, mais c’est plus avancé)."
        },
        "visual": "(Visuel : une boîte à outils constantes.h avec des constantes et des moules (struct). Chaque fichier .c peut la prendre.)"
      },
      {
        "type": "error",
        "title": "ERREUR FRÉQUENTE N°1 : OUBLIER LES GARDES DANS LE .h",
        "content": [
          "Texte :",
          "❌ Code faux (math.h sans gardes) :"
        ],
        "code": {
          "code": "int carre(int n);int cube(int n);\nSi ce fichier est inclus deux fois (ex: main.c inclut math.h et utils.h qui inclut math.h), le compilateur voit deux fois les prototypes → erreur de redéfinition.\n✅ Correction : toujours entourer le contenu de #ifndef NOM_H / #define NOM_H / #endif."
        },
        "visual": "(Visuel : une porte qui s’ouvre deux fois et qui bloque (erreur). Les gardes sont comme un videur qui dit « déjà passé ! ».)"
      },
      {
        "type": "error",
        "title": "ERREUR FRÉQUENTE N°2 : OUBLIER DE COMPILER UN FICHIER .c",
        "content": [
          "Texte :",
          "❌ Commande incomplète :",
          "bash",
          "gcc main.c -o programme   # on oublie math.c",
          "Le linker cherche le corps de carre mais ne le trouve pas.",
          "Message d’erreur : undefined reference to 'carre'.",
          "✅ Correction : inclure tous les fichiers .c :",
          "bash",
          "gcc main.c math.c -o programme"
        ],
        "visual": "(Visuel : un ouvrier (linker) qui cherche une pièce (carre) dans la caisse math.c qui n’est pas là. Il lève les bras en signe d’impuissance.)"
      },
      {
        "type": "error",
        "title": "ERREUR FRÉQUENTE N°3 : OUBLIER LE #include DU .h DANS LE .c",
        "content": [
          "Texte :",
          "❌ Code faux (math.c) :"
        ],
        "code": {
          "code": "// on oublie #include \"math.h\"int carre(int n) { return n * n; }\nLe compilateur compile math.c sans voir le prototype. Si le prototype dans le .h est modifié, le compilateur ne le saura pas.\nCela peut causer des incohérences silencieuses (ex: si le retour est float mais que le .c le définit en int).\n✅ Règle : chaque fichier .c doit inclure son propre .h en premier, pour que le compilateur vérifie la cohérence entre la déclaration et la définition."
        },
        "visual": "(Visuel : un miroir (math.h) que math.c doit regarder pour s’assurer qu’il est bien habillé (prototype cohérent).)"
      },
      {
        "type": "exercise",
        "title": "PETIT EXERCICE",
        "content": [
          "Texte :",
          "À toi de jouer !",
          "Crée un projet avec 3 fichiers pour gérer un cercle :",
          "cercle.h :",
          "Déclare une constante PI (3.14159).",
          "Déclare une fonction float perimetre(float rayon); qui retourne 2 * PI * rayon.",
          "Déclare une fonction float aire(float rayon); qui retourne PI * rayon * rayon.",
          "cercle.c : implémente ces deux fonctions (inclut cercle.h).",
          "main.c :",
          "Demande le rayon à l’utilisateur.",
          "Affiche le périmètre et l’aire (en appelant les fonctions).",
          "Écris chaque fichier sur papier, puis compile mentalement (ou sur machine si possible)."
        ],
        "visual": "(Visuel : l’énoncé avec les trois fichiers à compléter.)"
      },
      {
        "type": "correction",
        "title": "CORRECTION EXPLIQUÉE",
        "content": [
          "Texte :",
          "cercle.h :"
        ],
        "code": {
          "code": "#include <stdio.h>#include \"cercle.h\"int main() {    float r;    printf(\"Rayon : \");    scanf(\"%f\", &r);    printf(\"Périmètre = %.2f\\n\", perimetre(r));    printf(\"Aire = %.2f\\n\", aire(r));    return 0;}\nCompilation : gcc main.c cercle.c -o cercle\nPourquoi c’est juste ?\nLes gardes empêchent les inclusions multiples.\ncercle.c inclut son .h pour la cohérence.\nmain.c inclut cercle.h pour utiliser les fonctions.\nLa compilation réunit les deux .c."
        },
        "visual": "(Visuel : les trois fichiers en vert, avec la commande de compilation et un exemple d’exécution pour r=5 → Périmètre=31.42, Aire=78.54.)"
      },
      {
        "type": "verification",
        "title": "VÉRIFICATION AUTONOME",
        "content": [
          "Texte :",
          "Sans utiliser l’ordinateur, trouve l’erreur dans ce code (un projet de deux fichiers) :",
          "calcul.h :"
        ],
        "code": {
          "code": "#include <stdio.h>int main() {    int x = addition(2, 3);    printf(\"%d\", x);    return 0;}\n(On suppose que addition est définie dans un fichier calcul.c qui existe.)\nQuestions à te poser :\nEstce que main.c voit le prototype de addition ?\nY atil un fichier manquant dans la compilation ?\nRéponse :\nmain.c n’inclut pas calcul.h. Le compilateur ne connaît pas addition et émettra un avertissement (ou une erreur) sur la ligne int x = addition(2,3);.\nIl manque #include \"calcul.h\" dans main.c.\nIl faut aussi compiler avec gcc main.c calcul.c -o prog (mais on suppose que calcul.c existe)."
        },
        "visual": "(Visuel : une loupe rouge pointe l’appel à addition dans main.c et le fait qu’il n’y a pas d’#include \"calcul.h\".)"
      },
      {
        "type": "summary",
        "title": "PASSAGE À L’AUTONOMIE (BILAN DU CHAPITRE 13)",
        "content": [
          "Texte :",
          "Tu dois maintenant être capable de répondre à ces 3 questions :",
          "Qu’est-ce que c’est ? → Un projet modulaire sépare les déclarations (.h) des définitions (.c). Les .h sont inclus avec #include, et les .c sont compilés ensemble. Les gardes (#ifndef) évitent les inclusions multiples.",
          "Pourquoi l’utilise-t-on ? → Pour organiser le code, le rendre réutilisable, permettre le travail en équipe, et accélérer la compilation.",
          "Comment le construire seul ? →",
          "Créer un .h avec les prototypes, les #define et les struct, entouré de gardes.",
          "Créer un .c avec les définitions des fonctions, incluant son propre .h.",
          "Dans le main.c, inclure le(s) .h nécessaires.",
          "Compiler avec gcc fichier1.c fichier2.c ... -o programme.",
          "Vérification ultime :",
          "Crée un miniprojet avec :",
          "Un fichier utils.h déclarant une fonction int max(int a, int b);.",
          "Un fichier utils.c définissant cette fonction.",
          "Un main.c qui demande deux nombres à l’utilisateur et affiche le plus grand.",
          "Compile et exécute (sur papier, puis sur machine)."
        ],
        "visual": "(Visuel : trois cases à cocher et une étoile pour la vérification ultime.)"
      }
    ],
    "keywords": [
      "printf",
      "scanf",
      "main",
      "return",
      "include",
      "int",
      "float",
      "if"
    ]
  },
  {
    "id": 14,
    "title": "RÉCURSIVITÉ",
    "subtitle": "Une fonction qui s’appelle elle-même pour résoudre des problèmes plus petits",
    "icon": "Recycle",
    "objective": "Une fonction qui s’appelle elle-même pour résoudre des problèmes plus petits",
    "blocks": [
      {
        "type": "title",
        "title": "TITRE",
        "content": [
          "Titre : Chapitre 14 – Récursivité",
          "Sous-titre : Une fonction qui s’appelle elle-même pour résoudre des problèmes plus petits"
        ],
        "visual": "(Visuel : une image de poupées russes (matriochkas). La plus grande contient une plus petite, qui contient une plus petite, etc. Chaque poupée s’ouvre pour révéler la suivante.)"
      },
      {
        "type": "situation",
        "title": "SITUATION RÉELLE",
        "content": [
          "Texte :",
          "Pour ranger une pile de dossiers, tu enlèves le premier, puis tu ranges le reste de la pile de la même manière.",
          "Pour calculer la somme des nombres de 1 à N, tu peux faire N + somme des nombres de 1 à N-1.",
          "Pour explorer un labyrinthe, tu regardes si tu es à la sortie ; si non, tu explores chaque chemin voisin de la même façon.",
          "Certains problèmes sont naturellement définis en fonction d’eux-mêmes."
        ],
        "visual": "(Visuel : une pile de dossiers où l’on prend le premier ; un chemin de labyrinthe avec des embranchements.)"
      },
      {
        "type": "problem",
        "title": "PROBLÈME À COMPRENDRE",
        "content": [
          "Texte :",
          "Avec les boucles (for, while), on répète des instructions un nombre connu ou conditionné.",
          "Mais certains problèmes sont plus faciles à résoudre en les décomposant en un petit pas + le même problème sur une version réduite.",
          "Une fonction qui s’appelle elle-même peut exprimer cette décomposition naturelle.",
          "Il faut un mécanisme pour que cette chaîne d’appels ne soit pas infinie."
        ],
        "visual": "(Visuel : une équation : Problème(N) = petite_étape + Problème(N-1). Une flèche montre que Problème(N-1) est la même fonction avec un argument plus petit.)"
      },
      {
        "type": "question",
        "title": "QUESTION QUE L’ÉTUDIANT DOIT SE POSER",
        "content": [
          "Texte :",
          "« Comment écrire une fonction qui s’appelle elle-même, et surtout, comment l’empêcher de s’appeler indéfiniment ? »"
        ],
        "visual": "(Visuel : un point d’interrogation avec un miroir qui reflète un autre point d’interrogation, à l’infini.)"
      },
      {
        "type": "reasoning",
        "title": "RAISONNEMENT (LES 2 INGRÉDIENTS INDISPENSABLES)",
        "content": [
          "Texte :",
          "Une fonction récursive doit contenir deux éléments essentiels :",
          "Le cas de base (ou cas d’arrêt) :",
          "Une situation où le problème est assez petit pour être résolu directement, sans rappel.",
          "Exemple : factorielle(0) = 1.",
          "Le cas récursif :",
          "Le problème est décomposé en une petite étape + un appel à la même fonction sur une version plus petite du problème.",
          "Exemple : factorielle(n) = n * factorielle(n-1).",
          "Règle d’or :",
          "La fonction doit forcer le rapprochement du cas de base à chaque appel (ex: n-1, n/2, etc.).",
          "Sinon, elle s’appelle à l’infini → débordement de la pile (stack overflow)."
        ],
        "visual": "(Visuel : un escalier qui descend. En bas, le cas de base (une plateforme). Chaque marche est un appel récursif qui descend d’un cran.)"
      },
      {
        "type": "rule",
        "title": "RÈGLE GÉNÉRALE (LA STRUCTURE D’UNE FONCTION RÉCURSIVE)",
        "content": [
          "Texte :",
          "Gabarit type :"
        ],
        "code": {
          "code": "int factorielle(int n) {    if (n == 0) {          // Cas de base        return 1;    } else {               // Cas récursif        return n * factorielle(n - 1);    }}"
        },
        "visual": "(Visuel : un schéma de flux. Une flèche part du paramètre n vers une condition n == 0 ?. Si OUI → retourne 1. Si NON → retourne n * factorielle(n-1) avec une flèche qui revient vers la même fonction.)"
      },
      {
        "type": "visual",
        "title": "REPRÉSENTATION VISUELLE (COULEURS)",
        "content": [
          "Texte :",
          "Couleurs fonctionnelles pour ce chapitre :",
          "🔵 BLEU : la fonction récursive (nom).",
          "🟢 VERT : le cas de base (arrêt).",
          "🔴 ROUGE : l’appel récursif (la fonction qui s’appelle elle-même).",
          "🟠 ORANGE : la réduction du paramètre (ex: n-1).",
          "🟣 MAGENTA : la pile d’appels (représentation en mémoire)."
        ],
        "visual": "(Visuel : un exemple de code factorielle coloré avec la légende.)"
      },
      {
        "type": "example",
        "title": "EXEMPLE GUIDÉ (DÉCOUVERTE – Factorielle)",
        "content": [
          "Texte :",
          "Voici le programme complet qui calcule la factorielle de 5 :"
        ],
        "code": {
          "code": "#include <stdio.h>int factorielle(int n) {    if (n == 0) return 1;    return n * factorielle(n - 1);}int main() {    int resultat = factorielle(5);    printf(\"5! = %d\", resultat);  // 120    return 0;}\nConsigne : On va suivre pas à pas ce qui se passe en mémoire quand on appelle factorielle(5)."
        },
        "visual": "(Visuel : le code s’affiche. Le return n * factorielle(n-1) est surligné en rouge.)"
      },
      {
        "type": "example",
        "title": "EXEMPLE CONSTRUIT ÉTAPE 1 : EXÉCUTION PAS À PAS (DÉPLIER)",
        "content": [
          "Texte :",
          "Appelons factorielle(5). Le programme exécute :",
          "n=5 → 5 != 0 → il doit calculer 5 * factorielle(4).",
          "Pour calculer factorielle(4), il appelle factorielle(4).",
          "n=4 → 4 != 0 → il calcule 4 * factorielle(3).",
          "n=3 → 3 * factorielle(2).",
          "n=2 → 2 * factorielle(1).",
          "n=1 → 1 * factorielle(0).",
          "n=0 → cas de base : retourne 1."
        ],
        "visual": "(Visuel : une pile de blocs (la pile d’appels) qui s’empile. En bas, factorielle(0) retourne 1. Ensuite, chaque bloc retourne son résultat au-dessus.)"
      },
      {
        "type": "example",
        "title": "EXEMPLE CONSTRUIT ÉTAPE 2 : REMONTER LES RÉSULTATS (REMPILER)",
        "content": [
          "Texte :",
          "Maintenant, les résultats remontent :",
          "factorielle(0) renvoie 1.",
          "factorielle(1) renvoie 1 * 1 = 1.",
          "factorielle(2) renvoie 2 * 1 = 2.",
          "factorielle(3) renvoie 3 * 2 = 6.",
          "factorielle(4) renvoie 4 * 6 = 24.",
          "factorielle(5) renvoie 5 * 24 = 120.",
          "C’est comme une pile d’assiettes : on empile les appels, puis on les dépile en calculant les résultats."
        ],
        "visual": "(Visuel : l’animation de la pile. Les appels descendent (empilent) puis les valeurs remontent (dépilent) avec des flèches vertes.)"
      },
      {
        "type": "example",
        "title": "EXEMPLE CONSTRUIT ÉTAPE 3 : UN AUTRE EXEMPLE – SOMME DES NOMBRES",
        "content": [
          "Texte :",
          "Problème : calculer la somme des entiers de 1 à N.",
          "Version récursive :"
        ],
        "code": {
          "code": "int somme_iter(int n) {    int s = 0;    for (int i = 1; i <= n; i++) s += i;    return s;}\nLes deux donnent le même résultat. La récursive est plus élégante, mais consomme plus de mémoire (pile)."
        },
        "visual": "(Visuel : les deux versions côte à côte, avec une balance qui les compare. La récursive est plus courte, l’itérative est plus efficace en mémoire.)"
      },
      {
        "type": "content",
        "title": "RÉCURSIVITÉ ET PILE D’APPELS (MÉMOIRE)",
        "content": [
          "Texte :",
          "Chaque appel récursif empile des informations : l’adresse de retour, les variables locales, les paramètres.",
          "Quand le cas de base est atteint, les appels se dépilent (les résultats remontent).",
          "Attention : si la récursion est trop profonde (ex: factorielle(100000)), la pile peut déborder (stack overflow).",
          "La version itérative (boucle) n’a pas ce problème car elle utilise un seul frame de pile.",
          "Règle : la récursivité est merveilleuse pour des problèmes qui se prêtent à la division (arbres, fractales, tris), mais pas toujours pour de simples calculs linéaires avec de très grands nombres."
        ],
        "visual": "(Visuel : un schéma de la pile mémoire. Une flèche rouge montre la limite de la pile avec une alerte « Attention ! ».)"
      },
      {
        "type": "example",
        "title": "EXEMPLE CONSTRUIT ÉTAPE 4 : LA PUISSANCE (EXPONENTIELLE)",
        "content": [
          "Texte :",
          "Problème : calculer x^n (x à la puissance n).",
          "Définition récursive :",
          "Cas de base : x^0 = 1.",
          "Cas récursif : x^n = x * x^(n-1).",
          "Code :"
        ],
        "code": {
          "code": "int puissance(int x, int n) {    if (n == 0) return 1;    return x * puissance(x, n - 1);}\nExemple : puissance(2, 3) → 2 * puissance(2, 2) → 2 * (2 * puissance(2, 1)) → 2 * (2 * (2 * puissance(2, 0))) → 2 * (2 * (2 * 1)) = 8."
        },
        "visual": "(Visuel : un schéma d’appels pour puissance(2,3) avec les étapes de déroulement.)"
      },
      {
        "type": "example",
        "title": "EXEMPLE CONSTRUIT ÉTAPE 5 : FIBONACCI (AVERTISSEMENT SUR L’EFFICACITÉ)",
        "content": [
          "Texte :",
          "La suite de Fibonacci : F(0)=0, F(1)=1, F(n) = F(n-1) + F(n-2).",
          "Code récursif naïf :"
        ],
        "code": {
          "code": "int fib(int n) {    if (n == 0) return 0;    if (n == 1) return 1;    return fib(n - 1) + fib(n - 2);}\nCe code est très lent pour n grand (ex: n=40), car il recalcule sans cesse les mêmes valeurs (arbre d’appels exponentiel).\nLa version itérative est bien plus rapide.\nLeçon : la récursivité n’est pas toujours la meilleure solution. Il faut évaluer la complexité."
        },
        "visual": "(Visuel : un arbre d’appels pour fib(5) qui montre les redondances (ex: fib(3) calculé deux fois). Une croix rouge avec « Inefficace ».)"
      },
      {
        "type": "error",
        "title": "ERREUR FRÉQUENTE N°1 : OUBLIER LE CAS DE BASE (BOUCLE INFINIE)",
        "content": [
          "Texte :",
          "❌ Code faux :"
        ],
        "code": {
          "code": "int factorielle(int n) {    return n * factorielle(n - 1);   // Pas de cas de base}\nLe programme s’appelle à l’infini (jusqu’à ce que la pile déborde).\n✅ Correction : ajouter if (n == 0) return 1;.\nRègle : le cas de base doit être atteint inconditionnellement au bout d’un nombre fini d’appels."
        },
        "visual": "(Visuel : un puits sans fond (appels infinis). Une alerte rouge « Stack Overflow ».)"
      },
      {
        "type": "error",
        "title": "ERREUR FRÉQUENTE N°2 : MAUVAIS CAS DE BASE (NE COUVRE PAS TOUS LES CAS)",
        "content": [
          "Texte :",
          "❌ Code faux :"
        ],
        "code": {
          "code": "int factorielle(int n) {    if (n == 1) return 1;   // cas de base = 1    return n * factorielle(n - 1);}\nPour n=0, le cas de base n’est jamais atteint (on appelle factorielle(0), puis factorielle(-1)…).\n✅ Correction : utiliser if (n <= 1) return 1; ou if (n == 0) return 1;.\nRègle : le cas de base doit couvrir toutes les valeurs limites possibles (surtout 0)."
        },
        "visual": "(Visuel : une marche manquante dans l’escalier. La fonction tombe dans le vide pour n=0.)"
      },
      {
        "type": "error",
        "title": "ERREUR FRÉQUENTE N°3 : NE PAS MODIFIER LE PARAMÈTRE POUR RAPPROCHER LE CAS DE BASE",
        "content": [
          "Texte :",
          "❌ Code faux :"
        ],
        "code": {
          "code": "int compte(int n) {    if (n == 0) return 0;    return 1 + compte(n);   // n ne change pas !}\nLe paramètre reste n, donc l’appel récursif est identique → boucle infinie.\n✅ Correction : return 1 + compte(n - 1); (ou toute réduction).\nRègle : chaque appel récursif doit utiliser une version strictement plus petite du paramètre (ex: n-1, n/2)."
        },
        "visual": "(Visuel : un train qui tourne en rond sans jamais avancer. Une flèche montre que n ne change pas.)"
      },
      {
        "type": "exercise",
        "title": "PETIT EXERCICE",
        "content": [
          "Texte :",
          "À toi de jouer !",
          "Écris une fonction récursive longueurChaine qui prend une chaîne de caractères (un char* ou un tableau de char) et retourne son nombre de caractères sans utiliser strlen.",
          "Rappel : une chaîne se termine par \\0.",
          "Cas de base : si le premier caractère est \\0, retourne 0.",
          "Cas récursif : retourne 1 + longueurChaine(chaine + 1) (pour avancer d’un caractère).",
          "(Indice : chaine + 1 est l’adresse du caractère suivant.)"
        ],
        "visual": "(Visuel : une chaîne « Bonjour » avec un pointeur qui avance de caractère en caractère.)"
      },
      {
        "type": "correction",
        "title": "CORRECTION EXPLIQUÉE",
        "content": [
          "Texte :",
          "Voici la solution :"
        ],
        "code": {
          "code": "#include <stdio.h>int longueurChaine(char* str) {    if (*str == '\\0') {        // cas de base : fin de chaîne        return 0;    } else {        return 1 + longueurChaine(str + 1);    }}int main() {    char mot[] = \"Bonjour\";    printf(\"Longueur = %d\", longueurChaine(mot));  // 7    return 0;}\nPourquoi c’est juste ?\n*str déréférence le pointeur pour obtenir le caractère courant.\nSi c’est \\0, on arrête.\nSinon, on ajoute 1 et on rappelle avec l’adresse du caractère suivant (str + 1).\nLe cas de base est atteint pour chaque chaîne."
        },
        "visual": "(Visuel : le code en vert. Une animation montre le pointeur str qui avance case par case jusqu’à \\0, en comptant à chaque fois.)"
      },
      {
        "type": "verification",
        "title": "VÉRIFICATION AUTONOME",
        "content": [
          "Texte :",
          "Sans utiliser l’ordinateur, trouve ce que ce programme affiche :"
        ],
        "code": {
          "code": "#include <stdio.h>int mystere(int a, int b) {    if (b == 0) return 0;    if (b % 2 == 0) return mystere(a + a, b / 2);    return a + mystere(a + a, b / 2);}int main() {    printf(\"%d\", mystere(3, 5));    return 0;}\nQuestions à te poser :\nQuel est le cas de base ? (b == 0)\nQue se passe-t-il pour b=5 ?\nRéponse (pas à pas) :\nmystere(3,5) : b=5 impair → 3 + mystere(6,2).\nmystere(6,2) : b=2 pair → mystere(12,1).\nmystere(12,1) : b=1 impair → 12 + mystere(24,0).\nmystere(24,0) : b=0 → retourne 0.\nRemontée : 12 + 0 = 12 ; puis 3 + 12 = 15.\nLe programme affiche 15. (C’est une multiplication récursive !)"
        },
        "visual": "(Visuel : le code avec une table de suivi des appels.)"
      },
      {
        "type": "summary",
        "title": "PASSAGE À L’AUTONOMIE (BILAN DU CHAPITRE 14)",
        "content": [
          "Texte :",
          "Tu dois maintenant être capable de répondre à ces 3 questions :",
          "Qu’est-ce que c’est ? → La récursivité est une technique où une fonction s’appelle elle-même pour résoudre des sous-problèmes plus petits.",
          "Pourquoi l’utilise-t-on ? → Pour des problèmes naturellement définis en eux-mêmes (arbres, fractales, algorithmes « diviser pour régner »). Elle produit souvent un code plus élégant et plus lisible.",
          "Comment le construire seul ? →",
          "Identifier le cas de base (le plus simple).",
          "Identifier le cas récursif avec un appel à la fonction sur des paramètres plus petits.",
          "S’assurer que chaque appel se rapproche du cas de base.",
          "Vérification ultime :",
          "Écris une fonction récursive estPair qui retourne 1 si un nombre est pair, 0 sinon, sans utiliser l’opérateur % (modulo). Utilise le principe :",
          "estPair(0) = 1.",
          "estPair(1) = 0.",
          "estPair(n) = estPair(n - 2) (en restant positif).",
          "(Indice : gère le cas négatif aussi.)",
          "Fais-le sur papier, puis vérifie sur machine."
        ],
        "visual": "(Visuel : trois cases à cocher et une étoile pour la vérification ultime.)"
      }
    ],
    "keywords": [
      "printf",
      "main",
      "return",
      "include",
      "int",
      "char",
      "long",
      "if"
    ]
  },
  {
    "id": 15,
    "title": "POINTEURS AVANCÉS",
    "subtitle": "Pointeurs sur fonctions, tableaux de pointeurs et généricité avec void*",
    "icon": "Zap",
    "objective": "Pointeurs sur fonctions, tableaux de pointeurs et généricité avec void*",
    "blocks": [
      {
        "type": "title",
        "title": "TITRE",
        "content": [
          "Titre : Chapitre 15 – Pointeurs avancés",
          "Sous-titre : Pointeurs sur fonctions, tableaux de pointeurs et généricité avec void*"
        ],
        "visual": "(Visuel : une télécommande universelle (pointeur sur fonction) qui peut commander différents appareils. Un tableau de flèches (tableau de pointeurs) pointant vers des cases différentes. Un trousseau de clés universel (void) pouvant ouvrir différentes serrures.)*"
      },
      {
        "type": "situation",
        "title": "SITUATION RÉELLE",
        "content": [
          "Texte :",
          "Tu veux écrire une fonction tri qui peut trier des nombres dans l'ordre croissant OU décroissant, selon ce que l'utilisateur choisit → il faut passer la règle de comparaison en paramètre.",
          "Tu veux stocker les adresses de plusieurs variables ou tableaux dans une seule structure → tableau de pointeurs.",
          "Tu veux écrire une fonction qui peut afficher ou traiter n'importe quel type de donnée (int, float, char, structure) sans dupliquer le code → pointeur void*.",
          "L'ordinateur a besoin de flexibilité pour traiter des données de natures différentes."
        ],
        "visual": "(Visuel : un chef qui donne une recette (une fonction) à ses cuisiniers ; un tiroir à compartiments contenant des pointeurs vers différents outils ; une boîte à outils universelle.)"
      },
      {
        "type": "problem",
        "title": "PROBLÈME À COMPRENDRE",
        "content": [
          "Texte :",
          "Jusqu'ici, les pointeurs pointaient vers des données (int, float, char).",
          "Mais parfois, on veut pointé vers une fonction pour l'appeler plus tard, sans connaître son nom à l'avance.",
          "Parfois, on veut un tableau de pointeurs pour éviter de copier des données lourdes.",
          "Parfois, on veut une fonction qui fonctionne avec n'importe quel type (ex: qsort). C'est le rôle du pointeur void* (pointeur générique)."
        ],
        "visual": "(Visuel : trois boîtes à problèmes. La première : une fonction qui appelle une autre fonction. La seconde : des flèches multiples. La troisième : un point d'interrogation générique.)"
      },
      {
        "type": "question",
        "title": "QUESTION QUE L'ÉTUDIANT DOIT SE POSER",
        "content": [
          "Texte :",
          "« Comment écrire du code plus flexible : passer des fonctions en paramètre, créer des listes de pointeurs, et manipuler des données de types différents sans les dupliquer ? »"
        ],
        "visual": "(Visuel : un point d'interrogation entouré de trois symboles : (*)() (fonction), []* (tableau de pointeurs), et void* (générique).)"
      },
      {
        "type": "reasoning",
        "title": "RAISONNEMENT (TROIS OUTILS PUISSANTS)",
        "content": [
          "Texte :",
          "Nous allons apprendre trois outils avancés, un par un :",
          "Les pointeurs sur fonctions : une variable qui contient l'adresse d'une fonction. On peut alors l'appeler comme une fonction normale.",
          "Utilisation : algorithmes paramétrables (ex: tri avec différentes règles).",
          "Les tableaux de pointeurs : un tableau dont chaque case contient une adresse.",
          "Utilisation : gérer des listes de chaînes de caractères, des listes d'objets sans les copier.",
          "Le pointeur void* (pointeur générique) : un pointeur qui peut contenir l'adresse de n'importe quel type.",
          "Utilisation : écrire des fonctions qui acceptent des données de type inconnu (ex: qsort, memcpy).",
          "Attention : on ne peut pas déréférencer un void* directement ; il faut le caster (convertir) en un type concret."
        ],
        "visual": "(Visuel : trois engrenages : le premier étiqueté « Pointeur sur fonction », le second « Tableau de pointeurs », le troisième « void ».)*"
      },
      {
        "type": "rule",
        "title": "RÈGLE GÉNÉRALE (SYNTAXE – POINTEUR SUR FONCTION)",
        "content": [
          "Texte :",
          "La déclaration d'un pointeur sur fonction est la partie la plus déroutante."
        ],
        "code": {
          "code": "// Une fonction normaleint addition(int a, int b) { return a + b; }// Un pointeur qui peut pointer vers additionint (*ptrFonction)(int, int) = &addition;// Appel via le pointeurint resultat = ptrFonction(5, 3);   // ou (*ptrFonction)(5,3)\nLe nom du pointeur est entouré de (* ... ) pour signifier que c'est un pointeur, et non une fonction qui retourne un pointeur.\nOn peut l'utiliser comme une fonction normale."
        },
        "visual": "(Visuel : une étiquette avec int (*ptr)(int, int). La partie (*ptr) est en orange, le reste en bleu. Une flèche montre que ptr pointe vers addition.)"
      },
      {
        "type": "visual",
        "title": "REPRÉSENTATION VISUELLE (COULEURS)",
        "content": [
          "Texte :",
          "Couleurs fonctionnelles pour ce chapitre :",
          "🟠 ORANGE : le pointeur sur fonction (ex: (*ptrFonction)).",
          "🟢 VERT : les fonctions et leurs prototypes.",
          "🔴 ROUGE : le pointeur void*.",
          "🔵 BLEU : les tableaux de pointeurs.",
          "🟣 MAGENTA : les casts (conversions).",
          "PARTIE 1 – POINTEURS SUR FONCTIONS"
        ],
        "visual": "(Visuel : un code coloré avec int (*ptrF)(int,int) en orange, void* en rouge, char* tab[10] en bleu.)"
      },
      {
        "type": "example",
        "title": "EXEMPLE GUIDÉ (DÉCOUVERTE – POINTEUR SUR FONCTION)",
        "content": [
          "Texte :",
          "Voici un programme qui utilise un pointeur sur fonction pour appeler addition ou soustraction selon le choix :"
        ],
        "code": {
          "code": "#include <stdio.h>int addition(int a, int b) { return a + b; }int soustraction(int a, int b) { return a - b; }int main() {    int (*operation)(int, int);   // déclaration du pointeur    int choix = 1;                // 1 = addition, 2 = soustraction    if (choix == 1) {        operation = &addition;    } else {        operation = &soustraction;    }    int resultat = operation(10, 3);    printf(\"Résultat = %d\", resultat);  // 13 si addition, 7 si soustraction    return 0;}\nConsigne : on va décortiquer la déclaration et l'utilisation."
        },
        "visual": "(Visuel : le code s'affiche. int (*operation)(int, int) est surligné en orange.)"
      },
      {
        "type": "example",
        "title": "EXEMPLE CONSTRUIT ÉTAPE 1 : DÉCLARATION",
        "content": [
          "Texte :",
          "int (*operation)(int, int);",
          "int = type de retour de la fonction pointée.",
          "(*operation) = le nom du pointeur, précédé de * pour indiquer que c'est un pointeur. Les parenthèses sont obligatoires.",
          "(int, int) = la liste des paramètres de la fonction pointée.",
          "Piège à éviter :",
          "int *operation(int, int); serait une fonction qui retourne un pointeur vers int, et non un pointeur sur fonction. Les parenthèses autour de *operation sont cruciales."
        ],
        "visual": "(Visuel : deux déclarations côte à côte. La bonne int (*operation)(int,int); avec un crochet vert. La mauvaise int *operation(int,int); avec une croix rouge, et une bulle « Ceci est une fonction, pas un pointeur ! ».)"
      },
      {
        "type": "example",
        "title": "EXEMPLE CONSTRUIT ÉTAPE 2 : AFFECTATION",
        "content": [
          "Texte :",
          "operation = &addition; ou operation = addition;",
          "Les deux sont valides : le nom d'une fonction est déjà son adresse.",
          "&addition est explicite, addition est implicite.",
          "Règle : On peut utiliser operation = addition; sans le &, car le nom d'une fonction se comporte comme un pointeur vers elle-même."
        ],
        "visual": "(Visuel : une flèche qui part de operation et pointe vers le bloc de code de addition.)"
      },
      {
        "type": "example",
        "title": "EXEMPLE CONSTRUIT ÉTAPE 3 : APPEL",
        "content": [
          "Texte :",
          "int resultat = operation(10, 3);",
          "On appelle le pointeur comme s'il s'agissait d'une fonction normale.",
          "C'est équivalent à int resultat = (*operation)(10, 3); (la première forme est plus courante).",
          "Le compilateur sait que operation est un pointeur sur fonction, il génère un appel indirect.",
          "Exemple d'utilité réelle : passer une fonction de comparaison à qsort (tri rapide)."
        ],
        "visual": "(Visuel : une flèche qui part de operation(10,3) et exécute le code pointé.)"
      },
      {
        "type": "example",
        "title": "EXEMPLE CONSTRUIT ÉTAPE 4 : UTILITÉ CONCRÈTE – UNE FONCTION QUI REÇOIT UN POINTEUR SUR FONCTION",
        "content": [
          "Texte :",
          "On peut écrire une fonction calculer qui reçoit un pointeur sur fonction en paramètre :"
        ],
        "code": {
          "code": "int calculer(int (*op)(int, int), int a, int b) {    return op(a, b);}// Appel :int r = calculer(&addition, 5, 3);   // r = 8int s = calculer(&soustraction, 5, 3); // s = 2\ncalculer ne sait pas quelle opération elle va faire ; c'est le main qui décide.\nC'est le principe du callback (fonction de rappel) : on passe un comportement.\nPARTIE 2 – TABLEAUX DE POINTEURS"
        },
        "visual": "(Visuel : calculer est une machine qui reçoit une boîte noire (op) et deux nombres. Elle applique la boîte noire aux nombres.)"
      },
      {
        "type": "visual",
        "title": "REPRÉSENTATION VISUELLE ET EXEMPLE",
        "content": [
          "Texte :",
          "Un tableau de pointeurs est un tableau où chaque case contient une adresse.",
          "Exemple : tableau de chaînes de caractères (sans copier les chaînes)."
        ],
        "code": {
          "code": "char* noms[3];           // 3 cases, chacune contient un pointeur vers charnoms[0] = \"Alice\";noms[1] = \"Bob\";noms[2] = \"Charlie\";for (int i = 0; i < 3; i++) {    printf(\"%s\\n\", noms[i]);   // affiche les noms}\nIci, noms[0] est un pointeur vers le premier caractère de \"Alice\".\nLe tableau ne contient pas les chaînes, mais leurs adresses. C'est léger et flexible.\nAutre usage : tableau de pointeurs vers des structures."
        },
        "visual": "(Visuel : un tableau de 3 flèches. Chaque flèche pointe vers une zone mémoire contenant un nom. Les noms sont dans des zones séparées.)"
      },
      {
        "type": "example",
        "title": "EXEMPLE CONSTRUIT (TABLEAU DE POINTEURS VERS STRUCTURES)",
        "content": [
          "Texte :"
        ],
        "code": {
          "code": "struct Etudiant { char nom[50]; int age; };struct Etudiant e1 = {\"Alice\", 20};struct Etudiant e2 = {\"Bob\", 22};struct Etudiant e3 = {\"Charlie\", 21};struct Etudiant* classe[3];   // tableau de 3 pointeurs vers Etudiantclasse[0] = &e1;classe[1] = &e2;classe[2] = &e3;for (int i = 0; i < 3; i++) {    printf(\"%s a %d ans\\n\", classe[i]->nom, classe[i]->age);}\nOn utilise classe[i]->nom (car classe[i] est un pointeur vers struct Etudiant).\nCela évite de copier les structures entières, on ne manipule que des adresses.\nPARTIE 3 – LE POINTEUR GÉNÉRIQUE void*"
        },
        "visual": "(Visuel : trois structures dans la mémoire (e1, e2, e3). Le tableau classe contient les adresses de ces trois structures. Des flèches partent du tableau vers les structures.)"
      },
      {
        "type": "visual",
        "title": "REPRÉSENTATION VISUELLE DE void*",
        "content": [
          "Texte :",
          "void* est un pointeur qui peut pointer vers n'importe quel type.",
          "On l'utilise quand on ne connaît pas le type à l'avance (ex: fonctions génériques).",
          "Règles :",
          "On peut affecter n'importe quel pointeur à un void* sans cast.",
          "On ne peut pas déréférencer un void* directement (car on ne connaît pas sa taille).",
          "Pour utiliser la valeur, on doit caster (convertir) en un type concret : *(int*)ptr.",
          "Exemple :"
        ],
        "code": {
          "code": "int a = 42;float b = 3.14;void* p;          // pointeur génériquep = &a;           // OK, p pointe vers un intprintf(\"%d\", *(int*)p);   // cast en int* pour déréférencerp = &b;           // OK, p pointe maintenant vers un floatprintf(\"%.2f\", *(float*)p); // cast en float*"
        },
        "visual": "(Visuel : une boîte void* qui peut contenir une adresse. Selon ce qu'elle contient, on met une clé (cast) pour ouvrir la bonne serrure (int, float, etc.).)"
      },
      {
        "type": "example",
        "title": "EXEMPLE CONSTRUIT (FONCTION GÉNÉRIQUE AVEC void*)",
        "content": [
          "Texte :",
          "Écrire une fonction afficherValeur qui affiche un int ou un float selon un paramètre."
        ],
        "code": {
          "code": "void afficherValeur(void* ptr, char type) {    if (type == 'i') {        printf(\"%d\", *(int*)ptr);   // cast en int*    } else if (type == 'f') {        printf(\"%.2f\", *(float*)ptr);    }}int main() {    int a = 10;    float b = 5.5;    afficherValeur(&a, 'i');   // affiche 10    afficherValeur(&b, 'f');   // affiche 5.50    return 0;}\nLa fonction accepte n'importe quelle adresse via void*.\nOn utilise un paramètre type pour savoir comment interpréter la mémoire.\nUtilisation célèbre : la fonction qsort (tri) de la bibliothèque standard utilise void* pour trier n'importe quel type."
        },
        "visual": "(Visuel : void* ptr arrive dans la fonction. Si type='i', on met des lunettes int* ; si type='f', on met des lunettes float*. Les deux voient la même adresse mais l'interprètent différemment.)"
      },
      {
        "type": "error",
        "title": "ERREUR FRÉQUENTE N°1 : DÉRÉFÉRENCER UN void* SANS CAST",
        "content": [
          "Texte :",
          "❌ Code faux :"
        ],
        "code": {
          "code": "void* p = &a;printf(\"%d\", *p);   // Erreur ! impossible de déréférencer void*\nLe compilateur ne sait pas combien d'octets lire.\n✅ Correction : printf(\"%d\", *(int*)p);\nRègle : on ne peut pas déréférencer un void* directement ; il faut toujours le caster en un type concret."
        },
        "visual": "(Visuel : un trousseau de clés avec une étiquette void* mais sans dent. On ne peut pas ouvrir la porte sans une clé (cast).)"
      },
      {
        "type": "error",
        "title": "ERREUR FRÉQUENTE N°2 : POINTEUR SUR FONCTION – OUBLIER LES PARENTHÈSES",
        "content": [
          "Texte :",
          "❌ Code faux :"
        ],
        "code": {
          "code": "int *operation(int, int);   // Déclare une fonction, pas un pointeur !\nLe * s'attache au type de retour, pas au nom.\n✅ Correction : int (*operation)(int, int);\nAstuce mnémotechnique : les parenthèses autour de *nom sont obligatoires."
        },
        "visual": "(Visuel : un code avec une alerte rouge sur int *operation(int,int) et une flèche verte vers int (*operation)(int,int).)"
      },
      {
        "type": "error",
        "title": "ERREUR FRÉQUENTE N°3 : UTILISER UN POINTEUR SUR FONCTION SANS L'INITIALISER",
        "content": [
          "Texte :",
          "❌ Code faux :"
        ],
        "code": {
          "code": "ptr = &addition;   // ou ptr = addition;"
        },
        "visual": "(Visuel : une flèche qui part dans le vide (pointeur non initialisé) et s'écrase contre un mur.)"
      },
      {
        "type": "exercise",
        "title": "PETIT EXERCICE",
        "content": [
          "Texte :",
          "À toi de jouer !",
          "Écris un programme qui :",
          "Définit deux fonctions : int max(int a, int b) et int min(int a, int b).",
          "Dans le main, demande à l'utilisateur s'il veut le max (1) ou le min (2).",
          "Déclare un pointeur sur fonction et l'affecte à la fonction choisie.",
          "Demande deux nombres et applique la fonction pour afficher le résultat.",
          "(Indice : utilise un if pour choisir le pointeur, puis appelle-le.)"
        ],
        "visual": "(Visuel : l'énoncé avec les étapes numérotées.)"
      },
      {
        "type": "correction",
        "title": "CORRECTION EXPLIQUÉE",
        "content": [
          "Texte :",
          "Voici la solution :"
        ],
        "code": {
          "code": "#include <stdio.h>int max(int a, int b) { return (a > b) ? a : b; }int min(int a, int b) { return (a < b) ? a : b; }int main() {    int choix, x, y;    int (*operation)(int, int);    printf(\"1.Max 2.Min : \");    scanf(\"%d\", &choix);    if (choix == 1) operation = max;    else operation = min;    printf(\"Deux nombres : \");    scanf(\"%d %d\", &x, &y);    int resultat = operation(x, y);    printf(\"Résultat = %d\\n\", resultat);    return 0;}\nPourquoi c'est juste ?\nLe pointeur operation est déclaré correctement int (*operation)(int, int).\nIl est affecté à max ou min selon le choix.\nL'appel operation(x, y) exécute la bonne fonction."
        },
        "visual": "(Visuel : le code en vert avec un exemple d'exécution.)"
      },
      {
        "type": "verification",
        "title": "VÉRIFICATION AUTONOME",
        "content": [
          "Texte :",
          "Sans utiliser l'ordinateur, trouve l'erreur dans ce code :"
        ],
        "code": {
          "code": "#include <stdio.h>void afficher(int x) { printf(\"%d\", x); }int main() {    void (*ptr)(int);    ptr = &afficher;    int val = 10;    (*ptr)(val);    return 0;}\nQuestions à te poser :\nY atil une erreur de syntaxe ?\nLe pointeur est-il correctement initialisé ?\nL'appel est-il correct ?\nRéponse : Il n'y a pas d'erreur ! Le code est correct.\nvoid (*ptr)(int); déclare un pointeur sur fonction retournant void et prenant un int.\nptr = &afficher; est valide.\n(*ptr)(val); est un appel valide (équivalent à ptr(val))."
        },
        "visual": "(Visuel : le code s'affiche avec des coches vertes sur chaque ligne.)"
      },
      {
        "type": "summary",
        "title": "PASSAGE À L'AUTONOMIE (BILAN DU CHAPITRE 15)",
        "content": [
          "Texte :",
          "Tu dois maintenant être capable de répondre à ces 3 questions :",
          "Qu'est-ce que c'est ?",
          "Un pointeur sur fonction est une variable qui contient l'adresse d'une fonction.",
          "Un tableau de pointeurs est un tableau d'adresses (ex: vers des chaînes ou structures).",
          "void* est un pointeur générique qui peut pointer sur n'importe quel type.",
          "Pourquoi l'utilise-t-on ? → Pour écrire du code flexible et réutilisable : algorithmes paramétrables (tri, callbacks), gestion de collections hétérogènes, fonctions génériques.",
          "Comment le construire seul ? →",
          "Pointeur sur fonction : type (*nom)(parametres); affectation nom = &fonction; appel nom(args);.",
          "Tableau de pointeurs : type* tab[taille]; accès tab[i].",
          "void* : déclaration void* p; affectation p = &var; utilisation avec cast *(type*)p.",
          "Vérification ultime :",
          "Écris une fonction appliquer qui prend en paramètre :",
          "Un pointeur sur fonction operation qui prend deux int et retourne un int.",
          "Deux entiers a et b.",
          "La fonction retourne operation(a, b).",
          "Dans le main, utilise appliquer avec une fonction multiplication (que tu définis) pour multiplier 6 et 7.",
          "Fais-le sur papier, puis vérifie sur machine."
        ],
        "visual": "(Visuel : trois cases à cocher et une étoile pour la vérification ultime.)"
      }
    ],
    "keywords": [
      "printf",
      "scanf",
      "main",
      "return",
      "include",
      "int",
      "float",
      "char"
    ]
  },
  {
    "id": 16,
    "title": "GESTION DES ERREURS ET DÉBOGAGE",
    "subtitle": "Sécuriser son code, trouver les bugs et devenir un pro de l’autonomie",
    "icon": "ShieldCheck",
    "objective": "Sécuriser son code, trouver les bugs et devenir un pro de l’autonomie",
    "blocks": [
      {
        "type": "title",
        "title": "TITRE",
        "content": [
          "Titre : Chapitre 16 – Gestion des erreurs et débogage",
          "Sous-titre : Sécuriser son code, trouver les bugs et devenir un pro de l’autonomie"
        ],
        "visual": "(Visuel : un mécanicien automobile (le programmeur) avec une valise de diagnostic (le débogueur). Un voyant rouge (erreur) s’allume sur un tableau de bord. Il a un filet de sécurité (assert) sous la voiture.)"
      },
      {
        "type": "situation",
        "title": "SITUATION RÉELLE",
        "content": [
          "Texte :",
          "Ton programme plante sans raison apparente.",
          "Une variable affiche une valeur bizarre (ex: -89723).",
          "Le programme fait une boucle infinie, ou il se bloque.",
          "Tu veux être sûr que ton programme ne plante pas à cause d’une mémoire insuffisante ou d’un fichier manquant.",
          "Dans la vie réelle, un avion ou une voiture a des capteurs et des voyants pour détecter les problèmes. Un programme doit avoir les mêmes garde-fous."
        ],
        "visual": "(Visuel : un écran avec une fenêtre d’erreur « Segmentation fault ». Un ingénieur avec un casque qui examine les logs.)"
      },
      {
        "type": "problem",
        "title": "PROBLÈME À COMPRENDRE",
        "content": [
          "Texte :",
          "Les erreurs en C ne sont pas toujours évidentes. Le compilateur détecte les erreurs de syntaxe, mais pas les erreurs de logique ou d’exécution.",
          "Un programme peut planter des heures après son lancement, à cause d’une fuite mémoire ou d’un pointeur NULL.",
          "Il faut des outils et des réflexes pour :",
          "Détecter les problèmes avant qu’ils n’arrivent (vérifications).",
          "Comprendre pourquoi un problème est arrivé (débogage).",
          "Éviter les problèmes récurrents (bonnes pratiques)."
        ],
        "visual": "(Visuel : un bug (insecte) rampant dans un code. Un piège à souris (assert), une lampe torche (printf), et un détecteur de fumée (bonnes pratiques) sont placés autour.)"
      },
      {
        "type": "question",
        "title": "QUESTION QUE L’ÉTUDIANT DOIT SE POSER",
        "content": [
          "Texte :",
          "« Comment anticiper les erreurs, les détecter, les comprendre et les corriger efficacement ? »"
        ],
        "visual": "(Visuel : un point d’interrogation avec une loupe, un panneau d’avertissement, et une clé à molette.)"
      },
      {
        "type": "reasoning",
        "title": "RAISONNEMENT (TROIS NIVEAUX DE DÉFENSE)",
        "content": [
          "Texte :",
          "Nous allons aborder trois niveaux de protection :",
          "La prévention (codage défensif) :",
          "Vérifier systématiquement les retours de fonctions (malloc, fopen, scanf).",
          "Utiliser assert pour valider des hypothèses (ex: un pointeur non NULL).",
          "Le débogage (trouver le bug) :",
          "La méthode « pauvre » : insérer des printf pour suivre l’exécution.",
          "La méthode « professionnelle » : utiliser un débogueur (gdb).",
          "Les bonnes pratiques (pour que ça n’arrive pas) :",
          "Initialiser les variables.",
          "Compiler avec les avertissements (-Wall -Wextra).",
          "Utiliser des analyseurs de mémoire (ex: valgrind)."
        ],
        "visual": "(Visuel : un château fort avec trois murailles. La première muraille = Prévention, la deuxième = Débogage, la troisième = Bonnes pratiques.)"
      },
      {
        "type": "rule",
        "title": "RÈGLE GÉNÉRALE (LES RÉFLEXES À AVOIR)",
        "content": [
          "Texte :",
          "Règles d’or pour un code robuste :",
          "Toujours vérifier les retours :",
          "if (ptr == NULL) { ... } après malloc.",
          "if (fichier == NULL) { ... } après fopen.",
          "if (scanf(...) != 1) { ... } pour s’assurer que la saisie est valide.",
          "Toujours initialiser les variables (surtout les pointeurs).",
          "Compiler avec les warnings : gcc -Wall -Wextra -g monprog.c.",
          "Tester sur des cas limites (0, négatif, très grand, fichier vide)."
        ],
        "visual": "(Visuel : une affiche avec ces 4 règles encadrées en vert. Une étoile pour chaque règle.)"
      },
      {
        "type": "visual",
        "title": "REPRÉSENTATION VISUELLE (COULEURS)",
        "content": [
          "Texte :",
          "Couleurs fonctionnelles pour ce chapitre :",
          "🔴 ROUGE : les fonctions de vérification (if, assert).",
          "🟢 VERT : les bonnes pratiques (initialisation, -Wall).",
          "🔵 BLEU : les outils (printf de débogage, gdb).",
          "🟠 ORANGE : les erreurs à éviter (fuites, NULL).",
          "🟣 MAGENTA : les messages d’erreur.",
          "PARTIE 1 – LA PRÉVENTION (CODAGE DÉFENSIF)"
        ],
        "visual": "(Visuel : un extrait de code avec if (ptr == NULL) en rouge, printf(\"DEBUG: val=%d\", val) en bleu, -Wall en vert.)"
      },
      {
        "type": "example",
        "title": "EXEMPLE CONSTRUIT ÉTAPE 1 : VÉRIFIER LES RETOURS DE malloc",
        "content": [
          "Texte :",
          "Problème : que faire si malloc échoue ?",
          "Solution : vérifier et gérer l’erreur."
        ],
        "code": {
          "code": "int* tab = (int*)malloc(n * sizeof(int));if (tab == NULL) {    printf(\"Erreur : mémoire insuffisante !\\n\");    exit(1);   // ou return 1;}\nexit(1) termine le programme immédiatement avec un code d’erreur (1).\nOn peut aussi retourner une valeur d’erreur à la fonction appelante.\nRègle : ne jamais ignorer le retour de malloc."
        },
        "visual": "(Visuel : une alerte rouge sur NULL, puis un message d’erreur qui s’affiche. Le programme s’arrête proprement au lieu de planter.)"
      },
      {
        "type": "example",
        "title": "EXEMPLE CONSTRUIT ÉTAPE 2 : VÉRIFIER LES RETOURS DE fopen",
        "content": [
          "Texte :"
        ],
        "code": {
          "code": "FILE* f = fopen(\"data.txt\", \"r\");if (f == NULL) {    printf(\"Erreur : impossible d'ouvrir le fichier !\\n\");    return 1;}// On utilise ffclose(f);\nSi le fichier n’existe pas, fopen retourne NULL.\nSans cette vérification, fscanf planterait.\nRègle : toujours vérifier fopen."
        },
        "visual": "(Visuel : une porte de fichier qui refuse de s’ouvrir. Un message d’erreur s’affiche, et le programme s’arrête sans planter.)"
      },
      {
        "type": "example",
        "title": "EXEMPLE CONSTRUIT ÉTAPE 3 : VÉRIFIER LES RETOURS DE scanf",
        "content": [
          "Texte :",
          "scanf retourne le nombre d’éléments lus avec succès."
        ],
        "code": {
          "code": "int age;printf(\"Donne ton age : \");if (scanf(\"%d\", &age) != 1) {    printf(\"Erreur : saisie invalide !\\n\");    // On vide le buffer si nécessaire    return 1;}\nSi l’utilisateur tape « abc » au lieu d’un nombre, scanf retourne 0.\nOn peut ainsi détecter une saisie incorrecte."
        },
        "visual": "(Visuel : un clavier qui envoie des lettres. La case age ne reçoit rien, et un message « Erreur » apparaît.)"
      },
      {
        "type": "example",
        "title": "EXEMPLE CONSTRUIT ÉTAPE 4 : UTILISER assert (VÉRIFICATIONS INTERNES)",
        "content": [
          "Texte :",
          "assert est une macro qui vérifie une condition. Si la condition est fausse, le programme s’arrête et affiche un message.",
          "Utilisation :"
        ],
        "code": {
          "code": "#include <assert.h>int division(int a, int b) {    assert(b != 0);   // Si b == 0, le programme s'arrête    return a / b;}\nassert est idéal pour vérifier des post-conditions ou des invariants dans le code.\nImportant : assert est désactivé si on compile avec -DNDEBUG (pour les versions finales). Ne pas l’utiliser pour des vérifications critiques (ex: malloc). Utilisez if pour celles-ci.\nPARTIE 2 – LE DÉBOGAGE (TROUVER LES BUGS)"
        },
        "visual": "(Visuel : un gardien (assert) qui vérifie une condition. Si c’est faux, il tire la sonnette d’alarme et stoppe tout.)"
      },
      {
        "type": "example",
        "title": "EXEMPLE CONSTRUIT ÉTAPE 1 : DÉBOGUER AVEC printf (LA MÉTHODE DU POINT)",
        "content": [
          "Texte :",
          "La technique la plus simple : insérer des printf pour tracer l’exécution."
        ],
        "code": {
          "code": "int main() {    int x = 5;    printf(\"DEBUG : x = %d\\n\", x);   // Vérifier la valeur    int* ptr = &x;    printf(\"DEBUG : ptr = %p\\n\", (void*)ptr);   // Vérifier l'adresse    *ptr = 10;    printf(\"DEBUG : après modif, x = %d\\n\", x);    return 0;}\nRègles pour un bon printf de débogage :\nMettre un message clair (ex: \"DEBUG: avant boucle\").\nAfficher les valeurs des variables importantes.\nPenser à retirer ou commenter ces printf après correction."
        },
        "visual": "(Visuel : un programme avec des lignes printf en bleu. L’exécution affiche les messages dans l’ordre, comme un journal de bord.)"
      },
      {
        "type": "example",
        "title": "EXEMPLE CONSTRUIT ÉTAPE 2 : INTRODUCTION À gdb (LE DÉBOGUEUR)",
        "content": [
          "Texte :",
          "gdb (GNU Debugger) est un outil puissant pour exécuter un programme pas à pas.",
          "Compilation avec informations de débogage :",
          "bash",
          "gcc -g monprog.c -o monprog",
          "Lancer gdb :",
          "bash",
          "gdb ./monprog",
          "Commandes de base :",
          "Commande",
          "Effet",
          "run",
          "Lance le programme",
          "break main",
          "Met un point d’arrêt au début de main",
          "next (ou n)",
          "Exécute la ligne suivante (sans entrer dans les fonctions)",
          "step (ou s)",
          "Entre dans les fonctions",
          "print variable (ou p)",
          "Affiche la valeur d’une variable",
          "continue (ou c)",
          "Continue l’exécution jusqu’au prochain point d’arrêt",
          "quit",
          "Quitte gdb"
        ],
        "visual": "(Visuel : un terminal avec la fenêtre gdb. La ligne (gdb) break main est écrite, puis run, puis print x.)"
      },
      {
        "type": "example",
        "title": "EXEMPLE CONSTRUIT ÉTAPE 3 : UTILISER gdb POUR TROUVER UN SEGFAULT",
        "content": [
          "Texte :",
          "Problème : Segmentation Fault.",
          "Avec gdb :",
          "Compiler avec -g.",
          "Lancer gdb ./prog.",
          "Taper run.",
          "Le programme plante → gdb indique la ligne exacte où le crash a eu lieu.",
          "Taper print variable pour voir ce qui cloche.",
          "Exemple :"
        ],
        "code": {
          "code": "int* ptr = NULL;*ptr = 5;   // Crash ici\ngdb affichera : Program received signal SIGSEGV, Segmentation fault. main () at prog.c:5 → ligne 5.\nPlus besoin de chercher des heures !\nPARTIE 3 – LES BONNES PRATIQUES (ÉVITER LES ERREURS)"
        },
        "visual": "(Visuel : un écran avec gdb qui montre la ligne du crash surlignée en rouge. Une flèche pointe vers ptr qui vaut 0x0 (NULL).)"
      },
      {
        "type": "example",
        "title": "EXEMPLE CONSTRUIT ÉTAPE 1 : INITIALISER LES VARIABLES",
        "content": [
          "Texte :",
          "❌ Mauvais réflexe :"
        ],
        "code": {
          "code": "int compteur;compteur = compteur + 1;   // compteur vaut n’importe quoi !\n✅ Bon réflexe : int compteur = 0;\nRègle : Toujours initialiser les variables locales. Un compilateur avec -Wall vous avertira si vous utilisez une variable non initialisée."
        },
        "visual": "(Visuel : une case mémoire vide avec un point d’interrogation (aléatoire). Une flèche la remplit avec 0, puis on l’incrémente.)"
      },
      {
        "type": "example",
        "title": "EXEMPLE CONSTRUIT ÉTAPE 2 : COMPILER AVEC LES WARNINGS (-Wall -Wextra)",
        "content": [
          "Texte :",
          "Le compilateur est votre ami. Il détecte de nombreux problèmes potentiels.",
          "Compilation recommandée :",
          "bash",
          "gcc -Wall -Wextra -g monprog.c -o monprog",
          "-Wall : active la plupart des avertissements.",
          "-Wextra : active des avertissements supplémentaires.",
          "-g : ajoute les informations de débogage.",
          "Exemple de warning :",
          "warning: unused variable ‘x’ → vous avez déclaré une variable inutile.",
          "warning: control reaches end of non-void function → vous avez oublié un return.",
          "Règle : Ne laissez jamais un warning non corrigé (sauf cas exceptionnel)."
        ],
        "visual": "(Visuel : un terminal avec des messages d’avertissement en jaune. Un programmeur les lit et corrige le code.)"
      },
      {
        "type": "example",
        "title": "EXEMPLE CONSTRUIT ÉTAPE 3 : UTILISER valgrind (DÉTECTEUR DE FUITES MÉMOIRE)",
        "content": [
          "Texte :",
          "valgrind est un outil qui détecte les fuites mémoire et les erreurs d’accès mémoire.",
          "Utilisation :",
          "bash",
          "valgrind ./monprog",
          "Exemple de rapport :",
          "text",
          "==1234== HEAP SUMMARY:==1234== definitely lost: 40 bytes in 1 blocks.",
          "Cela signifie que vous avez oublié un free.",
          "Règle : Testez régulièrement vos programmes avec valgrind pour chasser les fuites."
        ],
        "visual": "(Visuel : un aspirateur (valgrind) qui passe sur le code et ramasse les blocs de mémoire non libérés. Une liste de blocs est affichée.)"
      },
      {
        "type": "error",
        "title": "ERREUR FRÉQUENTE N°1 : UTILISER = AU LIEU DE == (DÉJÀ VU, MAIS RAPPEL)",
        "content": [
          "Texte :",
          "❌ Code faux :"
        ],
        "code": {
          "code": "if (x = 5) { ... }   // affectation, pas comparaison !\nCela met 5 dans x, puis teste x (qui vaut 5 → vrai).\n✅ Correction : if (x == 5).\nAstuce de pro : écriture défensive : if (5 == x) → si on oublie un =, le compilateur génère une erreur."
        },
        "visual": "(Visuel : un panneau lumineux avec = barré en rouge et == en vert.)"
      },
      {
        "type": "error",
        "title": "ERREUR FRÉQUENTE N°2 : DÉBORDEMENT DE TABLEAU (OFF-BY-ONE)",
        "content": [
          "Texte :",
          "❌ Code faux :"
        ],
        "code": {
          "code": "int tab[5];for (int i = 0; i <= 5; i++) {  // i va jusqu'à 5    tab[i] = 0;}\ntab[5] n’existe pas → débordement.\n✅ Correction : for (int i = 0; i < 5; i++).\nRègle : Vérifiez toujours la borne supérieure. Les outils comme valgrind ou gdb détectent ce genre d’erreur."
        },
        "visual": "(Visuel : une flèche qui sort du tableau par la droite (case 5 inexistante) et s’écrase.)"
      },
      {
        "type": "exercise",
        "title": "PETIT EXERCICE",
        "content": [
          "Texte :",
          "À toi de jouer !",
          "Voici un programme volontairement bugué. Trouve les 3 erreurs (syntaxique, logique, mémoire) :"
        ],
        "code": {
          "code": "#include <stdio.h>int main() {    int tab[3]    tab[0] = 10;    tab[1] = 20;    tab[2] = 30;    for (int i = 0; i <= 3; i++) {        printf(\"%d \", tab[i]);    }    int* ptr;    *ptr = 5;    return 0;}\nQuestions à te poser :\nManque-t-il un ; quelque part ?\nLa boucle for est-elle correcte ?\nQue vaut ptr ?\n(Indice : il y a un oubli de ;, un débordement de tableau, et un pointeur non initialisé.)"
        },
        "visual": "(Visuel : le code est affiché avec trois zones marquées (?) à corriger.)"
      },
      {
        "type": "correction",
        "title": "CORRECTION EXPLIQUÉE",
        "content": [
          "Texte :",
          "Erreur 1 (syntaxique) :",
          "int tab[3] → il manque ; à la fin de la ligne.",
          "Correction : int tab[3];",
          "Erreur 2 (logique / débordement) :",
          "for (int i = 0; i <= 3; i++) → i va jusqu’à 3, donc on accède à tab[3] (inexistant).",
          "Correction : for (int i = 0; i < 3; i++)",
          "Erreur 3 (mémoire) :",
          "int* ptr; *ptr = 5; → ptr n’est pas initialisé, il pointe n’importe où.",
          "Correction : int valeur; int* ptr = &valeur; *ptr = 5; (ou allouer dynamiquement).",
          "Code corrigé :"
        ],
        "code": {
          "code": "#include <stdio.h>int main() {    int tab[3];   // correction 1    tab[0] = 10; tab[1] = 20; tab[2] = 30;    for (int i = 0; i < 3; i++) {   // correction 2        printf(\"%d \", tab[i]);    }    int val;    int* ptr = &val;   // correction 3    *ptr = 5;    return 0;}"
        },
        "visual": "(Visuel : le code corrigé en vert avec les trois corrections surlignées.)"
      },
      {
        "type": "verification",
        "title": "VÉRIFICATION AUTONOME",
        "content": [
          "Texte :",
          "Sans utiliser l’ordinateur, trouve ce que ce programme affiche (ou ce qui se passe) :"
        ],
        "code": {
          "code": "#include <stdio.h>#include <stdlib.h>int main() {    int* a = (int*)malloc(3 * sizeof(int));    if (a == NULL) return 1;    a[0] = 1; a[1] = 2; a[2] = 3;    int* b = a;    free(a);    printf(\"%d\", b[1]);    return 0;}\nQuestions à te poser :\nQue pointe b ?\nQue se passe-t-il après free(a) ?\nQuelle est l’erreur ?\nRéponse :\nb pointe vers la même zone que a.\nfree(a) libère la mémoire, mais b pointe toujours vers cette zone libérée (pointeur pendant).\nb[1] accède à une mémoire libérée → comportement indéfini (peut planter ou afficher une valeur aléatoire).\nCorrection : ne pas utiliser b après free(a), ou mettre b = NULL; après."
        },
        "visual": "(Visuel : une flèche b qui pointe vers une zone grisée (libérée) avec une alerte rouge.)"
      },
      {
        "type": "summary",
        "title": "PASSAGE À L’AUTONOMIE (BILAN DU CHAPITRE 16)",
        "content": [
          "Texte :",
          "Tu dois maintenant être capable de répondre à ces 3 questions :",
          "Qu’est-ce que c’est ? → La gestion des erreurs et le débogage sont un ensemble de techniques et d’outils (assert, vérifications, printf, gdb, valgrind) pour prévenir, détecter et corriger les bugs.",
          "Pourquoi l’utilise-t-on ? → Pour rendre les programmes robustes, professionnels et maintenables.",
          "Comment le construire seul ? →",
          "Toujours vérifier les retours (malloc, fopen, scanf).",
          "Utiliser assert pour les invariants critiques.",
          "Tracer avec printf ou utiliser gdb (compilation avec -g).",
          "Compiler avec -Wall -Wextra.",
          "Tester avec valgrind pour chasser les fuites.",
          "Vérification ultime (la vraie !) :",
          "Prends un ancien programme que tu as écrit (par exemple le chapitre 11 ou 12).",
          "Ajoute toutes les vérifications de malloc et fopen manquantes.",
          "Compile avec -Wall -Wextra et corrige tous les avertissements.",
          "Lance-le avec valgrind pour vérifier qu’il n’y a pas de fuite mémoire.",
          "Si tu passes cette étape, tu es autonome et tu peux coder en C dans des conditions professionnelles. Félicitations !",
          "FIN DU CHAPITRE 16 – FIN DU COURS COMPLET",
          "CONCLUSION GÉNÉRALE DU COURS (Diapositive Bonus)",
          "Texte :",
          "Félicitations ! Tu as parcouru 16 chapitres, du tout débutant jusqu’à la gestion des erreurs et du débogage.",
          "Tu es maintenant capable de :",
          "Lire et écrire du code C structuré.",
          "Utiliser des pointeurs, des structures, des fichiers.",
          "Allouer de la mémoire dynamiquement.",
          "Gérer des projets multi-fichiers.",
          "Déboguer et sécuriser tes programmes.",
          "Le plus important : Tu as appris à réfléchir comme un programmeur. Le langage C n’est qu’un outil ; la logique, la persévérance et la méthode sont les vraies compétences que tu as acquises.",
          "Bon courage pour tes projets futurs, et n’oublie jamais :",
          "« Je sais maintenant comment réfléchir et je peux le faire seul. »"
        ],
        "visual": "(Visuel : une ligne d’arrivée, un diplôme, et un sourire.)"
      }
    ],
    "keywords": [
      "printf",
      "scanf",
      "main",
      "return",
      "include",
      "int",
      "void",
      "if"
    ]
  }
];
