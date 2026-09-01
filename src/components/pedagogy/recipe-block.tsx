"use client";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import type { RecipeToken, RecipeTokenRole } from "@/lib/curriculum-types";

const ROLE_CLASS: Record<RecipeTokenRole, string> = {
  type: "recipe-type",
  keyword: "recipe-keyword",
  nom: "recipe-nom",
  operator: "recipe-operator",
  punct: "recipe-punct",
  value: "recipe-value",
};

function TokenRow({ tokens, size = "normal" }: { tokens: RecipeToken[]; size?: "normal" | "small" }) {
  return (
    <>
      {tokens.map((t, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: i * 0.05 }}
          className={ROLE_CLASS[t.role]}
          style={{
            whiteSpace: "pre",
            fontSize: size === "small" ? undefined : undefined,
          }}
        >
          {t.text}
        </motion.span>
      ))}
    </>
  );
}

export function RecipeCard({
  title,
  formula,
  example,
  rules,
}: {
  title: string;
  formula: RecipeToken[];
  example: RecipeToken[];
  rules?: string[];
}) {
  return (
    <div className="recipe-card">
      <div className="rc-header">
        <Sparkles size={12} />
        Formule
      </div>
      <div className="rc-title">{title}</div>
      <div className="rc-formula">
        <TokenRow tokens={formula} />
      </div>
      <div className="rc-example-label">Exemple :</div>
      <div className="rc-example">
        <TokenRow tokens={example} size="small" />
      </div>
      {rules && rules.length > 0 && (
        <div className="rc-rules">
          <ul>
            {rules.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
