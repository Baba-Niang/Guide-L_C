"use client";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Copy, Check, ChevronDown, Terminal, FileCode2, Play } from "lucide-react";
import { highlightCLines } from "@/lib/syntax";

interface CodeBlockProps {
  code: string;
  filename?: string;
  output?: string;
  explanations?: Record<number, string>;
}

export function CodeBlock({ code, filename = "code.c", output, explanations }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const [activeLine, setActiveLine] = useState<number | null>(null);
  const [showExpl, setShowExpl] = useState<boolean>(
    explanations && Object.keys(explanations).length > 0
  );

  const lines = useMemo(() => highlightCLines(code), [code]);

  const copy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  const hasExpl = explanations && Object.keys(explanations).length > 0;

  return (
    <div className="code-wrap my-6">
      <div className="code-wrap-inner" style={{ display: "grid", gridTemplateColumns: output ? "1fr" : "1fr" }}>
        {/* Code panel */}
        <div className={`code-block ${output ? "with-output" : ""}`}>
          <div className="code-header">
            <div className="flex items-center gap-2">
              <span className="ch-dots">
                <span />
                <span />
                <span />
              </span>
              <span className="ch-fname">
                <FileCode2 size={12} />
                {filename}
              </span>
            </div>
            <div className="code-actions">
              {hasExpl && (
                <button
                  onClick={() => setShowExpl(!showExpl)}
                  className={`code-action-btn ${showExpl ? "active" : ""}`}
                  title="Afficher/masquer les explications ligne par ligne"
                >
                  <ChevronDown size={11} style={{ transform: showExpl ? "rotate(180deg)" : "none", transition: "transform 0.2s" }} />
                  <span>Explications</span>
                </button>
              )}
              <button onClick={copy} className="code-action-btn">
                {copied ? <Check size={11} /> : <Copy size={11} />}
                <span>{copied ? "Copié" : "Copier"}</span>
              </button>
            </div>
          </div>

          <div className="code-body">
            {lines.map((line, i) => {
              const lineNum = i + 1;
              const isActive = activeLine === lineNum;
              const hasLineExpl = explanations?.[lineNum];
              return (
                <div
                  key={i}
                  className={`code-line ${isActive ? "active" : ""}`}
                  onMouseEnter={() => setActiveLine(lineNum)}
                  onMouseLeave={() => setActiveLine(null)}
                  onClick={() => hasLineExpl && setActiveLine(isActive ? null : lineNum)}
                  style={hasLineExpl ? { cursor: "pointer" } : {}}
                >
                  <span className="cl-num">{lineNum}</span>
                  <span
                    className="cl-content"
                    dangerouslySetInnerHTML={{ __html: line.html || "&nbsp;" }}
                  />
                </div>
              );
            })}
          </div>

          {/* Always-visible explanations strip */}
          {hasExpl && showExpl && (
            <div className="code-expl-strip">
              {lines.map((_, i) => {
                const lineNum = i + 1;
                const expl = explanations?.[lineNum];
                if (!expl) return null;
                return (
                  <div
                    key={i}
                    className={`ces-row ${activeLine === lineNum ? "active" : ""}`}
                    onMouseEnter={() => setActiveLine(lineNum)}
                    onMouseLeave={() => setActiveLine(null)}
                  >
                    <span className="ces-num">{lineNum}</span>
                    <span className="ces-text">{expl}</span>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Output panel */}
        {output && (
          <div className="code-output">
            <div className="co-header">
              <Terminal size={12} />
              <span>Sortie du programme</span>
            </div>
            <div className="co-body">
              {output.split("\n").map((line, i) => (
                <span key={i} className="co-line">
                  {line || "\u00A0"}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
