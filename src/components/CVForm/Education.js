"use client";

import { GraduationCap, Plus, Trash2 } from "lucide-react";
import { useCVStore } from "@/store/useCVStore";
import FormSection from "./FormSection";

const SCHOOL_TYPES = [
  { value: "podstawowe", label: "Podstawowe" },
  { value: "średnie", label: "Średnie" },
  { value: "wyższe", label: "Wyższe" },
  { value: "inne", label: "Inne" },
];

export default function Education() {
  const { education, addEducation, updateEducation, removeEducation } = useCVStore();

  const inputClass =
    "w-full bg-surface-light/50 border border-border rounded-lg px-4 py-2.5 text-foreground placeholder-muted-dark focus-ring transition-colors focus:border-accent";
  const selectClass =
    "w-full bg-surface-light/50 border border-border rounded-lg px-4 py-2.5 text-foreground focus-ring transition-colors focus:border-accent appearance-none cursor-pointer";

  return (
    <FormSection title="Wykształcenie" icon={GraduationCap}>
      {education.map((edu, index) => (
        <div
          key={edu.id}
          className="relative p-4 bg-surface-light/30 rounded-lg border border-border/50 space-y-3 animate-scale-in"
        >
          <button
            type="button"
            onClick={() => removeEducation(edu.id)}
            className="absolute top-3 right-3 p-1.5 text-muted hover:text-danger hover:bg-danger/10 rounded-lg transition-colors cursor-pointer"
            aria-label="Usuń wykształcenie"
          >
            <Trash2 className="w-4 h-4" />
          </button>

          <div>
            <label htmlFor={`edu-type-${edu.id}`} className="block text-sm font-medium text-muted mb-1.5">
              Typ szkoły
            </label>
            <select
              id={`edu-type-${edu.id}`}
              value={edu.type}
              onChange={(e) => updateEducation(edu.id, "type", e.target.value)}
              className={selectClass}
            >
              <option value="">Wybierz typ szkoły...</option>
              {SCHOOL_TYPES.map((t) => (
                <option key={t.value} value={t.value}>
                  {t.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor={`edu-name-${edu.id}`} className="block text-sm font-medium text-muted mb-1.5">
              Nazwa szkoły
            </label>
            <input
              id={`edu-name-${edu.id}`}
              type="text"
              value={edu.schoolName}
              onChange={(e) => updateEducation(edu.id, "schoolName", e.target.value)}
              placeholder="np. Uniwersytet Jagielloński"
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor={`edu-field-${edu.id}`} className="block text-sm font-medium text-muted mb-1.5">
              Kierunek / Profil
            </label>
            <input
              id={`edu-field-${edu.id}`}
              type="text"
              value={edu.field}
              onChange={(e) => updateEducation(edu.id, "field", e.target.value)}
              placeholder="np. Informatyka"
              className={inputClass}
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label htmlFor={`edu-from-${edu.id}`} className="block text-sm font-medium text-muted mb-1.5">
                Od roku
              </label>
              <input
                id={`edu-from-${edu.id}`}
                type="text"
                value={edu.yearFrom}
                onChange={(e) => updateEducation(edu.id, "yearFrom", e.target.value)}
                placeholder="2018"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor={`edu-to-${edu.id}`} className="block text-sm font-medium text-muted mb-1.5">
                Do roku
              </label>
              <input
                id={`edu-to-${edu.id}`}
                type="text"
                value={edu.yearTo}
                onChange={(e) => updateEducation(edu.id, "yearTo", e.target.value)}
                placeholder="2022"
                className={inputClass}
              />
            </div>
          </div>
        </div>
      ))}

      <button
        type="button"
        onClick={addEducation}
        className="w-full flex items-center justify-center gap-2 py-3 border-2 border-dashed border-border hover:border-accent text-muted hover:text-accent-light rounded-lg transition-colors cursor-pointer"
        id="add-education-btn"
      >
        <Plus className="w-4 h-4" />
        Dodaj wykształcenie
      </button>
    </FormSection>
  );
}
