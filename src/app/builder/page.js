"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Eye, Edit3 } from "lucide-react";

import PersonalInfo from "@/components/CVForm/PersonalInfo";
import Education from "@/components/CVForm/Education";
import Experience from "@/components/CVForm/Experience";
import Skills from "@/components/CVForm/Skills";
import Languages from "@/components/CVForm/Languages";
import CVPreview from "@/components/CVPreview/CVPreview";
import TemplateSelector from "@/components/TemplateSelector";
import TranslationPanel from "@/components/TranslationPanel";
import PDFExport from "@/components/PDFExport";

export default function BuilderPage() {
  const previewRef = useRef(null);
  const [mobileTab, setMobileTab] = useState("form"); // "form" | "preview"

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top bar */}
      <header className="glass sticky top-0 z-50 border-b border-border/50">
        <div className="max-w-[1800px] mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="p-2 text-muted hover:text-foreground hover:bg-surface-light rounded-lg transition-colors"
              aria-label="Powrót"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="text-lg font-bold">
              <span className="gradient-text">Generator CV</span>
            </h1>
          </div>

          {/* Mobile tabs */}
          <div className="flex lg:hidden gap-1 bg-surface rounded-lg p-1">
            <button
              type="button"
              onClick={() => setMobileTab("form")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition-colors cursor-pointer ${
                mobileTab === "form"
                  ? "bg-accent text-white"
                  : "text-muted hover:text-foreground"
              }`}
            >
              <Edit3 className="w-4 h-4" />
              Formularz
            </button>
            <button
              type="button"
              onClick={() => setMobileTab("preview")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition-colors cursor-pointer ${
                mobileTab === "preview"
                  ? "bg-accent text-white"
                  : "text-muted hover:text-foreground"
              }`}
            >
              <Eye className="w-4 h-4" />
              Podgląd
            </button>
          </div>

          <div className="hidden lg:block">
            <PDFExport previewRef={previewRef} />
          </div>
        </div>
      </header>

      {/* Main content */}
      <div className="flex-1 flex">
        {/* Form panel */}
        <aside
          className={`w-full lg:w-[420px] xl:w-[480px] lg:block overflow-y-auto border-r border-border/50 bg-background ${
            mobileTab === "form" ? "block" : "hidden"
          }`}
          style={{ height: "calc(100vh - 57px)" }}
        >
          <div className="p-4 space-y-4">
            <TemplateSelector />
            <PersonalInfo />
            <Education />
            <Experience />
            <Skills />
            <Languages />
            <TranslationPanel />

            {/* Mobile PDF button */}
            <div className="lg:hidden">
              <PDFExport previewRef={previewRef} />
            </div>

            <div className="h-4" />
          </div>
        </aside>

        {/* Preview panel */}
        <main
          className={`flex-1 lg:block overflow-auto bg-surface/50 ${
            mobileTab === "preview" ? "block" : "hidden"
          }`}
          style={{ height: "calc(100vh - 57px)" }}
        >
          <div className="p-6 flex justify-center">
            <div
              className="origin-top"
              style={{
                transform: "scale(0.6)",
                transformOrigin: "top center",
              }}
            >
              <CVPreview previewRef={previewRef} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
