"use client";

import { Wrench, X } from "lucide-react";
import { useCVStore } from "@/store/useCVStore";
import { useState } from "react";
import FormSection from "./FormSection";

function SkillInput({ onAdd, placeholder }) {
  const [value, setValue] = useState("");

  const handleAdd = () => {
    if (value.trim()) {
      onAdd(value.trim());
      setValue("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAdd();
    }
  };

  return (
    <div className="flex gap-2">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        className="flex-1 bg-surface-light/50 border border-border rounded-lg px-4 py-2.5 text-foreground placeholder-muted-dark focus-ring transition-colors focus:border-accent"
      />
      <button
        type="button"
        onClick={handleAdd}
        disabled={!value.trim()}
        className="px-4 py-2.5 bg-accent hover:bg-accent-dark text-white rounded-lg font-medium transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
      >
        Dodaj
      </button>
    </div>
  );
}

function SkillTag({ skill, onRemove, colorClass }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium ${colorClass} animate-scale-in`}
    >
      {skill}
      <button
        type="button"
        onClick={onRemove}
        className="hover:bg-white/20 rounded-full p-0.5 transition-colors cursor-pointer"
        aria-label={`Usuń ${skill}`}
      >
        <X className="w-3 h-3" />
      </button>
    </span>
  );
}

export default function Skills() {
  const { hardSkills, softSkills, addHardSkill, removeHardSkill, addSoftSkill, removeSoftSkill } =
    useCVStore();

  return (
    <FormSection title="Umiejętności" icon={Wrench}>
      {/* Hard skills */}
      <div>
        <h4 className="text-sm font-semibold text-accent-light mb-2">
          Umiejętności twarde
        </h4>
        <SkillInput
          onAdd={addHardSkill}
          placeholder="np. JavaScript, Photoshop, Excel..."
        />
        <div className="flex flex-wrap gap-2 mt-3">
          {hardSkills.map((skill, index) => (
            <SkillTag
              key={`hard-${index}`}
              skill={skill}
              onRemove={() => removeHardSkill(index)}
              colorClass="bg-accent/20 text-accent-light border border-accent/30"
            />
          ))}
        </div>
      </div>

      {/* Soft skills */}
      <div>
        <h4 className="text-sm font-semibold text-purple-light mb-2">
          Umiejętności miękkie
        </h4>
        <SkillInput
          onAdd={addSoftSkill}
          placeholder="np. Komunikacja, Praca zespołowa..."
        />
        <div className="flex flex-wrap gap-2 mt-3">
          {softSkills.map((skill, index) => (
            <SkillTag
              key={`soft-${index}`}
              skill={skill}
              onRemove={() => removeSoftSkill(index)}
              colorClass="bg-purple/20 text-purple-light border border-purple/30"
            />
          ))}
        </div>
      </div>
    </FormSection>
  );
}
