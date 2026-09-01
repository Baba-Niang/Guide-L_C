"use client";

import { ChevronRight, Code2, ListChecks, RotateCcw } from "lucide-react";
import type { Recipe } from "@/lib/production-recipes";

export function ProductionRecipe({ recipe }: { recipe: Recipe }) {
  return (
    <section className="production-recipe" aria-label="Recette pour produire son propre code">
      <div className="production-head">
        <div className="production-badge"><ListChecks size={17} /> RECETTE POUR PRODUIRE</div>
        <h3>{recipe.title}</h3>
        <p>{recipe.goal}</p>
      </div>

      <div className="production-grid">
        <div className="production-syntax">
          <div className="production-label"><Code2 size={17} /> SYNTAXE À CONSTRUIRE</div>
          <pre><code>{recipe.syntax}</code></pre>
          <div className="production-parts">
            {recipe.parts.map((part) => (
              <div className="production-part" key={part.code}>
                <code>{part.code}</code><span>{part.meaning}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="production-steps">
          <div className="production-label"><RotateCcw size={17} /> ÉTAPES</div>
          {recipe.steps.map((step, i) => (
            <div className="production-step" key={step.title}>
              <span className="production-step-num">{i + 1}</span>
              <div><strong>{step.title}</strong><p>{step.desc}</p></div>
              {i < recipe.steps.length - 1 && <ChevronRight className="production-step-arrow" size={15} />}
            </div>
          ))}
        </div>
      </div>

      {(recipe.prototype || recipe.returns) && (
        <div className="production-api">
          {recipe.prototype && <div><strong>Prototype</strong><code>{recipe.prototype}</code></div>}
          {recipe.returns && <div><strong>Retour</strong><span>{recipe.returns}</span></div>}
        </div>
      )}
    </section>
  );
}
