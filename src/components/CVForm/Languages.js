"use client";

import { Globe, Plus, Trash2 } from "lucide-react";
import { useCVStore } from "@/store/useCVStore";
import FormSection from "./FormSection";

const LANGUAGES = [
  "Angielski",
  "Niemiecki",
  "Francuski",
  "Hiszpański",
  "Włoski",
  "Rosyjski",
  "Chiński",
  "Japoński",
  "Inny",
];

const LEVELS = ["A1", "A2", "B1", "B2", "C1", "C2", "Ojczysty"];

export default function Languages() {
  const { languages, addLanguage, updateLanguage, removeLanguage } = useCVStore();

  const selectClass =
    "w-full bg-surface-light/50 border border-border rounded-lg px-4 py-2.5 text-foreground focus-ring transition-colors focus:border-accent appearance-none cursor-pointer";

  return (
    <FormSection title="Języki obce" icon={Globe}>
      {languages.map((lang) => (
        <div
          key={lang.id}
          className="flex items-end gap-3 animate-scale-in"
        >
          <div className="flex-1">
            <label htmlFor={`lang-name-${lang.id}`} className="block text-sm font-medium text-muted mb-1.5">
              Język
            </label>
            <select
              id={`lang-name-${lang.id}`}
              value={lang.language}
              onChange={(e) => updateLanguage(lang.id, "language", e.target.value)}
              className={selectClass}
            >
              <option value="">Wybierz język...</option>
              {LANGUAGES.map((l) => (
                <option key={l} value={l}>
                  {l}
                </option>
              ))}
            </select>
          </div>

          <div className="flex-1">
            <label htmlFor={`lang-level-${lang.id}`} className="block text-sm font-medium text-muted mb-1.5">
              Poziom
            </label>
            <select
              id={`lang-level-${lang.id}`}
              value={lang.level}
              onChange={(e) => updateLanguage(lang.id, "level", e.target.value)}
              className={selectClass}
            >
              <option value="">Wybierz poziom...</option>
              {LEVELS.map((l) => (
                <option key={l} value={l}>
                  {l}
                </option>
              ))}
            </select>
          </div>

          <button
            type="button"
            onClick={() => removeLanguage(lang.id)}
            className="p-2.5 text-muted hover:text-danger hover:bg-danger/10 rounded-lg transition-colors cursor-pointer mb-0.5"
            aria-label="Usuń język"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      ))}

      <button
        type="button"
        onClick={addLanguage}
        className="w-full flex items-center justify-center gap-2 py-3 border-2 border-dashed border-border hover:border-accent text-muted hover:text-accent-light rounded-lg transition-colors cursor-pointer"
        id="add-language-btn"
      >
        <Plus className="w-4 h-4" />
        Dodaj język
      </button>
    </FormSection>
  );
}
