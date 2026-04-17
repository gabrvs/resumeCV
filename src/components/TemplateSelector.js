"use client";

import { useCVStore } from "@/store/useCVStore";
import { Layout } from "lucide-react";

const TEMPLATES = [
  {
    id: "classic",
    name: "Klasyczny",
    description: "Tradycyjny, elegancki układ",
    colors: ["#1f2937", "#ffffff", "#6b7280"],
  },
  {
    id: "modern",
    name: "Nowoczesny",
    description: "Dwukolumnowy z kolorowym sidebar",
    colors: ["#4f46e5", "#7c3aed", "#ffffff"],
  },
  {
    id: "creative",
    name: "Kreatywny",
    description: "Odważny gradient, asymetryczny",
    colors: ["#d946ef", "#8b5cf6", "#6366f1"],
  },
];

export default function TemplateSelector() {
  const { template, setTemplate } = useCVStore();

  return (
    <div className="glass rounded-xl p-4 animate-slide-up">
      <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground mb-3">
        <Layout className="w-5 h-5 text-accent-light" />
        Szablon CV
      </h3>
      <div className="grid grid-cols-3 gap-3">
        {TEMPLATES.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setTemplate(t.id)}
            className={`relative group p-3 rounded-xl border-2 transition-all duration-200 cursor-pointer ${
              template === t.id
                ? "border-accent bg-accent/10 shadow-lg shadow-accent/20"
                : "border-border hover:border-accent/50 bg-surface-light/30 hover:bg-surface-light/50"
            }`}
            id={`template-${t.id}`}
          >
            {/* Mini preview */}
            <div className="w-full aspect-[210/297] rounded-md overflow-hidden mb-2 bg-white shadow-sm">
              {t.id === "classic" && (
                <div className="p-2 h-full">
                  <div className="w-6 h-6 rounded-full bg-gray-200 mx-auto mb-1" />
                  <div className="h-1 bg-gray-800 w-3/4 mx-auto mb-1" />
                  <div className="h-0.5 bg-gray-300 w-1/2 mx-auto mb-2" />
                  <div className="border-t border-gray-200 pt-1 space-y-0.5">
                    <div className="h-0.5 bg-gray-800 w-1/3" />
                    <div className="h-0.5 bg-gray-200 w-full" />
                    <div className="h-0.5 bg-gray-200 w-4/5" />
                  </div>
                </div>
              )}
              {t.id === "modern" && (
                <div className="flex h-full">
                  <div className="w-[35%] bg-gradient-to-b from-indigo-500 to-purple-600 p-1.5">
                    <div className="w-5 h-5 rounded-full bg-white/30 mx-auto mb-1" />
                    <div className="h-0.5 bg-white/40 w-full mb-0.5" />
                    <div className="h-0.5 bg-white/30 w-3/4 mb-1" />
                    <div className="h-0.5 bg-white/20 w-full mb-0.5" />
                    <div className="h-0.5 bg-white/20 w-4/5" />
                  </div>
                  <div className="flex-1 p-1.5">
                    <div className="h-1 bg-gray-800 w-2/3 mb-0.5" />
                    <div className="h-0.5 bg-indigo-400 w-1/2 mb-1.5" />
                    <div className="h-0.5 bg-gray-200 w-full mb-0.5" />
                    <div className="h-0.5 bg-gray-200 w-4/5 mb-0.5" />
                    <div className="h-0.5 bg-gray-200 w-full" />
                  </div>
                </div>
              )}
              {t.id === "creative" && (
                <div className="h-full">
                  <div className="bg-gradient-to-r from-fuchsia-400 via-purple-400 to-indigo-400 p-2 pb-3">
                    <div className="flex items-center gap-1.5">
                      <div className="w-5 h-5 rounded-md bg-white/30" />
                      <div>
                        <div className="h-1 bg-white w-10 mb-0.5" />
                        <div className="h-0.5 bg-white/60 w-6" />
                      </div>
                    </div>
                  </div>
                  <div className="p-1.5 flex gap-1.5">
                    <div className="flex-1 space-y-0.5">
                      <div className="h-0.5 bg-purple-300 w-1/2" />
                      <div className="h-0.5 bg-gray-200 w-full" />
                      <div className="h-0.5 bg-gray-200 w-4/5" />
                    </div>
                    <div className="w-1/3 space-y-0.5">
                      <div className="h-2 bg-purple-100 rounded-sm" />
                      <div className="h-2 bg-fuchsia-100 rounded-sm" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            <p className="text-xs font-semibold text-foreground">{t.name}</p>
            <p className="text-[10px] text-muted">{t.description}</p>

            {template === t.id && (
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-accent rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
