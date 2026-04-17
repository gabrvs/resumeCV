"use client";

import { Briefcase, Plus, Trash2 } from "lucide-react";
import { useCVStore } from "@/store/useCVStore";
import FormSection from "./FormSection";

export default function Experience() {
  const { experience, addExperience, updateExperience, removeExperience } = useCVStore();

  const inputClass =
    "w-full bg-surface-light/50 border border-border rounded-lg px-4 py-2.5 text-foreground placeholder-muted-dark focus-ring transition-colors focus:border-accent";

  return (
    <FormSection title="Doświadczenie zawodowe" icon={Briefcase}>
      {experience.map((exp) => (
        <div
          key={exp.id}
          className="relative p-4 bg-surface-light/30 rounded-lg border border-border/50 space-y-3 animate-scale-in"
        >
          <button
            type="button"
            onClick={() => removeExperience(exp.id)}
            className="absolute top-3 right-3 p-1.5 text-muted hover:text-danger hover:bg-danger/10 rounded-lg transition-colors cursor-pointer"
            aria-label="Usuń doświadczenie"
          >
            <Trash2 className="w-4 h-4" />
          </button>

          <div>
            <label htmlFor={`exp-pos-${exp.id}`} className="block text-sm font-medium text-muted mb-1.5">
              Stanowisko
            </label>
            <input
              id={`exp-pos-${exp.id}`}
              type="text"
              value={exp.position}
              onChange={(e) => updateExperience(exp.id, "position", e.target.value)}
              placeholder="np. Frontend Developer"
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor={`exp-comp-${exp.id}`} className="block text-sm font-medium text-muted mb-1.5">
              Nazwa firmy
            </label>
            <input
              id={`exp-comp-${exp.id}`}
              type="text"
              value={exp.company}
              onChange={(e) => updateExperience(exp.id, "company", e.target.value)}
              placeholder="np. Google Polska"
              className={inputClass}
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label htmlFor={`exp-from-${exp.id}`} className="block text-sm font-medium text-muted mb-1.5">
                Od
              </label>
              <input
                id={`exp-from-${exp.id}`}
                type="text"
                value={exp.dateFrom}
                onChange={(e) => updateExperience(exp.id, "dateFrom", e.target.value)}
                placeholder="01.2020"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor={`exp-to-${exp.id}`} className="block text-sm font-medium text-muted mb-1.5">
                Do
              </label>
              <input
                id={`exp-to-${exp.id}`}
                type="text"
                value={exp.dateTo}
                onChange={(e) => updateExperience(exp.id, "dateTo", e.target.value)}
                placeholder="obecnie"
                className={inputClass}
              />
            </div>
          </div>

          <div>
            <label htmlFor={`exp-desc-${exp.id}`} className="block text-sm font-medium text-muted mb-1.5">
              Opis obowiązków
            </label>
            <textarea
              id={`exp-desc-${exp.id}`}
              value={exp.description}
              onChange={(e) => updateExperience(exp.id, "description", e.target.value)}
              placeholder="Opisz swoje główne obowiązki i osiągnięcia..."
              rows={3}
              className={`${inputClass} resize-none`}
            />
          </div>
        </div>
      ))}

      <button
        type="button"
        onClick={addExperience}
        className="w-full flex items-center justify-center gap-2 py-3 border-2 border-dashed border-border hover:border-accent text-muted hover:text-accent-light rounded-lg transition-colors cursor-pointer"
        id="add-experience-btn"
      >
        <Plus className="w-4 h-4" />
        Dodaj doświadczenie
      </button>
    </FormSection>
  );
}
