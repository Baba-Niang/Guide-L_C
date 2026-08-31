// Simple C syntax highlighter that returns HTML per line.
// Returns an array so the renderer can keep line-by-line structure
// and we can attach hover/click handlers per line.

export type TokenType =
  | "kw"
  | "type"
  | "str"
  | "num"
  | "fn"
  | "cm"
  | "prep"
  | "inc"
  | "op"
  | "pun"
  | "ident"
  | "ws";

export interface Token {
  type: TokenType;
  value: string;
}

const KEYWORDS = new Set([
  "auto","break","case","const","continue","default","do",
  "else","enum","extern","for","goto","if",
  "register","return","sizeof",
  "static","struct","switch","typedef","union",
  "volatile","while",
  "unsigned","signed","long","short",
]);

const TYPES = new Set([
  "int","float","double","char","void","FILE","size_t",
]);

const BUILTINS = new Set([
  "printf","scanf","fprintf","fscanf","fgets","fopen","fclose",
  "malloc","calloc","realloc","free",
  "strlen","strcpy","strcat","strcmp","strncpy","strncat","strncmp",
  "assert","exit","atoi","atof","atol",
  "NULL","EOF","main","putchar","getchar","puts","gets",
]);

const OPERATORS = new Set([
  "+","-","*","/","%","=","<",">","!","&","|","^","~","?",
  ":",".","-=", "+=", "*=", "/=", "%=", "<<", ">>",
  "==","!=","<=",">=","&&","||","++","--","->", "<<=", ">>=",
]);

const PUNCT = new Set(["(",")","{","}","[","]", ";", ","]);

function isIdentStart(c: string): boolean {
  return /[a-zA-Z_]/.test(c);
}
function isIdent(c: string): boolean {
  return /[a-zA-Z0-9_]/.test(c);
}
function isDigit(c: string): boolean {
  return c >= "0" && c <= "9";
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export function tokenizeCLine(line: string): Token[] {
  const tokens: Token[] = [];
  let i = 0;
  const n = line.length;

  // Preprocessor line: starts with #
  if (/^\s*#/.test(line)) {
    // Try to extract #include <...> or #define X Y
    const match = line.match(/^(\s*#\s*\w+)(\s+)?(.*)?$/);
    if (match) {
      if (match[1]) tokens.push({ type: "prep", value: match[1] });
      if (match[2]) tokens.push({ type: "ws", value: match[2] });
      if (match[3]) {
        // Highlight <...> as include, "..." as string, rest as ident
        const rest = match[3];
        if (/^<.*>$/.test(rest.trim())) {
          tokens.push({ type: "inc", value: rest });
        } else {
          // Tokenize the rest normally
          const subTokens = tokenizeRest(rest);
          tokens.push(...subTokens);
        }
      }
      return tokens;
    }
  }

  return tokenizeRest(line);
}

function tokenizeRest(s: string): Token[] {
  const tokens: Token[] = [];
  let i = 0;
  const n = s.length;
  while (i < n) {
    const c = s[i];

    // Whitespace
    if (c === " " || c === "\t") {
      let j = i;
      while (j < n && (s[j] === " " || s[j] === "\t")) j++;
      tokens.push({ type: "ws", value: s.slice(i, j) });
      i = j;
      continue;
    }

    // Comment // ...
    if (c === "/" && s[i + 1] === "/") {
      tokens.push({ type: "cm", value: s.slice(i) });
      i = n;
      continue;
    }

    // Comment /* ... */ (single line)
    if (c === "/" && s[i + 1] === "*") {
      const end = s.indexOf("*/", i + 2);
      const stop = end === -1 ? n : end + 2;
      tokens.push({ type: "cm", value: s.slice(i, stop) });
      i = stop;
      continue;
    }

    // String literal
    if (c === '"') {
      let j = i + 1;
      while (j < n && s[j] !== '"') {
        if (s[j] === "\\") j++;
        j++;
      }
      j = Math.min(j + 1, n);
      tokens.push({ type: "str", value: s.slice(i, j) });
      i = j;
      continue;
    }

    // Char literal
    if (c === "'") {
      let j = i + 1;
      while (j < n && s[j] !== "'") {
        if (s[j] === "\\") j++;
        j++;
      }
      j = Math.min(j + 1, n);
      tokens.push({ type: "str", value: s.slice(i, j) });
      i = j;
      continue;
    }

    // Number
    if (isDigit(c) || (c === "." && isDigit(s[i + 1]))) {
      let j = i;
      while (j < n && /[0-9a-fA-FxX._]/.test(s[j])) j++;
      // optional suffix
      while (j < n && /[fFlLuU]/.test(s[j])) j++;
      tokens.push({ type: "num", value: s.slice(i, j) });
      i = j;
      continue;
    }

    // Identifier / keyword
    if (isIdentStart(c)) {
      let j = i;
      while (j < n && isIdent(s[j])) j++;
      const word = s.slice(i, j);
      // Check function call (next non-ws char is '(')
      let k = j;
      while (k < n && (s[k] === " " || s[k] === "\t")) k++;
      const isCall = s[k] === "(";
      let type: TokenType = "ident";
      if (KEYWORDS.has(word)) type = "kw";
      else if (TYPES.has(word)) type = "type";
      else if (BUILTINS.has(word)) type = "fn";
      else if (isCall) type = "fn";
      tokens.push({ type, value: word });
      i = j;
      continue;
    }

    // Operators (greedy: try 3 then 2 then 1)
    let matched = false;
    for (const len of [3, 2, 1]) {
      const slice = s.slice(i, i + len);
      if (slice.length === len && OPERATORS.has(slice)) {
        tokens.push({ type: "op", value: slice });
        i += len;
        matched = true;
        break;
      }
    }
    if (matched) continue;

    if (PUNCT.has(c)) {
      tokens.push({ type: "pun", value: c });
      i++;
      continue;
    }

    // Fallback single char
    tokens.push({ type: "op", value: c });
    i++;
  }
  return tokens;
}

const TOKEN_CLASS: Record<TokenType, string> = {
  kw: "syn-kw",
  type: "syn-type",
  str: "syn-str",
  num: "syn-num",
  fn: "syn-fn",
  cm: "syn-cm",
  prep: "syn-prep",
  inc: "syn-inc",
  op: "syn-op",
  pun: "syn-pun",
  ident: "",
  ws: "",
};

export function renderTokensHtml(tokens: Token[]): string {
  return tokens
    .map((t) => {
      const cls = TOKEN_CLASS[t.type];
      const v = escapeHtml(t.value);
      if (!cls) return v;
      return `<span class="${cls}">${v}</span>`;
    })
    .join("");
}

export function highlightCLines(code: string): { tokens: Token[]; html: string; raw: string }[] {
  return code.split("\n").map((line) => {
    const tokens = tokenizeCLine(line);
    return { tokens, html: renderTokensHtml(tokens), raw: line };
  });
}
