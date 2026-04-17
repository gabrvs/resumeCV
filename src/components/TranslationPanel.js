"use client";

import { useState } from "react";
import { Languages, RotateCcw, Loader2 } from "lucide-react";
import { useCVStore } from "@/store/useCVStore";
import { translateCV, availableLanguages } from "@/utils/translationService";

export default function TranslationPanel() {
  const [targetLang, setTargetLang] = useState("en");
  const [isTranslating, setIsTranslating] = useState(false);
  const { personal, education, experience, hardSkills, softSkills, languages, isTranslated, setTranslatedData, restoreOriginal } =
    useCVStore();

  const handleTranslate = async () => {
    setIsTranslating(true);
    try {
      const cvData = { personal, education, experience, hardSkills, softSkills, languages };
      const translated = await translateCV(cvData, targetLang);
      setTranslatedData(translated);
    } catch (error) {
      console.error("Translation failed:", error);
    } finally {
      setIsTranslating(false);
    }
  };

  const handleRestore = () => {
    restoreOriginal();
  };

  return (
    <div className="glass rounded-xl p-4 animate-slide-up">
      <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground mb-3">
        <Languages className="w-5 h-5 text-accent-light" />
        Tłumaczenie
      </h3>

      <div className="space-y-3">
        <div>
          <label htmlFor="target-language" className="block text-sm font-medium text-muted mb-1.5">
            Język docelowy
          </label>
          <select
            id="target-language"
            value={targetLang}
            onChange={(e) => setTargetLang(e.target.value)}
            className="w-full bg-surface-light/50 border border-border rounded-lg px-4 py-2.5 text-foreground focus-ring transition-colors focus:border-accent appearance-none cursor-pointer"
          >
            {availableLanguages.map((lang) => (
              <option key={lang.code} value={lang.code}>
                {lang.flag} {lang.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex gap-2">
          <button
            type="button"
            onClick={handleTranslate}
            disabled={isTranslating}
            className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-accent hover:bg-accent-dark text-white rounded-lg font-medium transition-colors disabled:opacity-50 cursor-pointer"
            id="translate-btn"
          >
            {isTranslating ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Tłumaczenie...
              </>
            ) : (
              <>
                <Languages className="w-4 h-4" />
                Przetłumacz
              </>
            )}
          </button>

          {isTranslated && (
            <button
              type="button"
              onClick={handleRestore}
              className="flex items-center gap-2 px-4 py-2.5 bg-surface-light border border-border hover:border-warning text-muted hover:text-warning rounded-lg font-medium transition-colors cursor-pointer"
              id="restore-original-btn"
            >
              <RotateCcw className="w-4 h-4" />
              Przywróć
            </button>
          )}
        </div>

        {isTranslated && (
          <p className="text-xs text-success flex items-center gap-1">
            <span className="w-2 h-2 bg-success rounded-full animate-pulse-soft" />
            CV przetłumaczone. Możesz ręcznie edytować treści w formularzu.
          </p>
        )}
      </div>
    </div>
  );
}
