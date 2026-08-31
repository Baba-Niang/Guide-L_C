export type ColorThemeId = "green" | "blue" | "violet" | "amber" | "coral" | "teal";

export interface ThemeConfig {
  id: ColorThemeId;
  name: string;
  /** main swatch color */
  swatch: string;
}

export const themes: ThemeConfig[] = [
  { id: "green",  name: "Émeraude", swatch: "#10b981" },
  { id: "blue",   name: "Océan",    swatch: "#3b82f6" },
  { id: "violet", name: "Améthyste",swatch: "#8b5cf6" },
  { id: "amber",  name: "Ambre",    swatch: "#f59e0b" },
  { id: "coral",  name: "Corail",   swatch: "#f43f5e" },
  { id: "teal",   name: "Sarcelle", swatch: "#14b8a6" },
];
