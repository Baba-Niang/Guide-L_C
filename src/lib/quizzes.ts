export interface Quiz {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export const quizzes: Record<number, Quiz> = {
  "1": {
    "question": "Quel outil traduit le code C en binaire ?",
    "options": [
      "L'editeur de texte",
      "Le compilateur (gcc)",
      "Le systeme d'exploitation",
      "Le navigateur"
    ],
    "correctIndex": 1,
    "explanation": "Le compilateur (comme gcc) traduit le code C ecrit par le programmeur en code binaire executable par la machine."
  },
  "2": {
    "question": "Que contient une variable en C ?",
    "options": [
      "Une adresse uniquement",
      "Une valeur stockee en memoire",
      "Une fonction",
      "Un fichier"
    ],
    "correctIndex": 1,
    "explanation": "Une variable est un espace memoire nomme qui contient une valeur. On y accede par son nom."
  },
  "3": {
    "question": "Quelle est la difference entre = et == en C ?",
    "options": [
      "Ils sont identiques",
      "= est pour l'affectation, == pour la comparaison",
      "= est pour la comparaison, == pour l'affectation",
      "= est plus rapide que =="
    ],
    "correctIndex": 1,
    "explanation": "L'operateur = affecte une valeur a une variable, tandis que == compare deux valeurs et retourne vrai ou faux."
  },
  "4": {
    "question": "Que fait le mot-cle else ?",
    "options": [
      "Il cree une boucle",
      "Il s'execute si la condition du if est fausse",
      "Il declare une variable",
      "Il arrete le programme"
    ],
    "correctIndex": 1,
    "explanation": "Le bloc else s'execute uniquement lorsque la condition du if est fausse. C'est le 'sinon' du 'si'."
  },
  "5": {
    "question": "Quelle boucle est garantee de s'executer au moins une fois ?",
    "options": [
      "while",
      "for",
      "do-while",
      "Aucune"
    ],
    "correctIndex": 2,
    "explanation": "La boucle do-while teste la condition apres l'execution du bloc, donc elle s'execute toujours au moins une fois."
  },
  "6": {
    "question": "A quoi sert le mot-cle return dans une fonction ?",
    "options": [
      "A declarer la fonction",
      "A renvoyer un resultat au code appelant",
      "A creer une variable",
      "A fermer le programme"
    ],
    "correctIndex": 1,
    "explanation": "return renvoie une valeur depuis la fonction vers le code qui l'a appelee, et arrete l'execution de la fonction."
  },
  "7": {
    "question": "Quel est l'indice du premier element d'un tableau en C ?",
    "options": [
      "1",
      "0",
      "-1",
      "Ca depend de la taille"
    ],
    "correctIndex": 1,
    "explanation": "En C, les tableaux commencent toujours a l'indice 0. Le premier element est tab[0], le deuxieme tab[1], etc."
  },
  "8": {
    "question": "Que stocke un pointeur ?",
    "options": [
      "Une valeur entiere",
      "Une adresse memoire",
      "Un caractere",
      "Une chaine"
    ],
    "correctIndex": 1,
    "explanation": "Un pointeur est une variable qui stocke l'adresse memoire d'une autre variable. L'operateur & donne l'adresse."
  },
  "9": {
    "question": "Comment se termine une chaine de caracteres en C ?",
    "options": [
      "Par un point (.)",
      "Par un caractere null (\\0)",
      "Par un saut de ligne",
      "Par une accolade"
    ],
    "correctIndex": 1,
    "explanation": "En C, toute chaine se termine par le caractere special \\0 (null). Il est automatiquement ajoute par les guillemets."
  },
  "10": {
    "question": "Quel operateur permet d'acceder aux membres d'une structure via un pointeur ?",
    "options": [
      ".",
      "->",
      "::",
      "&"
    ],
    "correctIndex": 1,
    "explanation": "L'operateur -> permet d'acceder aux membres d'une structure pointee. ptr->membre est equivalent a (*ptr).membre."
  },
  "11": {
    "question": "Que fait free() ?",
    "options": [
      "Alloue de la memoire",
      "Libere la memoire allouee par malloc",
      "Cree un tableau",
      "Copie des donnees"
    ],
    "correctIndex": 1,
    "explanation": "free() libere la memoire precedemment allouee par malloc. Oublier de liberer la memoire provoque des fuites memoire."
  },
  "12": {
    "question": "Quelle fonction ouvre un fichier en C ?",
    "options": [
      "open()",
      "fopen()",
      "read()",
      "file()"
    ],
    "correctIndex": 1,
    "explanation": "fopen() ouvre un fichier et retourne un pointeur FILE*. Il faut toujours verifier que le retour n'est pas NULL."
  },
  "13": {
    "question": "A quoi servent les gardes (#ifndef) dans un fichier .h ?",
    "options": [
      "A securiser le code",
      "A eviter les inclusions multiples",
      "A compiler plus vite",
      "A declarer des variables"
    ],
    "correctIndex": 1,
    "explanation": "Les gardes d'inclusion (#ifndef/#define/#endif) empechent un fichier d'etre inclus plusieurs fois, evitant les erreurs de redefinition."
  },
  "14": {
    "question": "Quel element est indispensable dans une fonction recursive ?",
    "options": [
      "Une boucle for",
      "Un cas de base (condition d'arret)",
      "Un pointeur",
      "Un tableau"
    ],
    "correctIndex": 1,
    "explanation": "Le cas de base est la condition qui arrete la recursion. Sans lui, la fonction s'appellerait indefiniment."
  },
  "15": {
    "question": "Qu'est-ce qu'un pointeur sur fonction ?",
    "options": [
      "Une fonction qui retourne un pointeur",
      "Une variable qui stocke l'adresse d'une fonction",
      "Un pointeur qui est aussi une fonction",
      "Un type de donnee"
    ],
    "correctIndex": 1,
    "explanation": "Un pointeur sur fonction est une variable qui contient l'adresse d'une fonction. Il permet de passer des fonctions en parametre."
  },
  "16": {
    "question": "Quelle option de compilation active tous les avertissements ?",
    "options": [
      "-O2",
      "-Wall -Wextra",
      "-g",
      "-o"
    ],
    "correctIndex": 1,
    "explanation": "-Wall et -Wextra activent la plupart des avertissements du compilateur, aidant a detecter les erreurs potentielles."
  }
};
