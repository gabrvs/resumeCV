"use client";

import { useState } from "react";
import { Download, Loader2 } from "lucide-react";
import { generatePDF } from "@/utils/pdfGenerator";

export default function PDFExport({ previewRef }) {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleExport = async () => {
    if (!previewRef?.current) return;

    setIsGenerating(true);
    try {
      await generatePDF(previewRef.current, "MojeCV");
    } catch (error) {
      console.error("PDF generation failed:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleExport}
      disabled={isGenerating}
      className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-accent to-purple rounded-xl text-white font-semibold shadow-lg shadow-accent/25 hover:shadow-accent/40 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:hover:scale-100 cursor-pointer"
      id="export-pdf-btn"
    >
      {isGenerating ? (
        <>
          <Loader2 className="w-5 h-5 animate-spin" />
          Generowanie PDF...
        </>
      ) : (
        <>
          <Download className="w-5 h-5" />
          Pobierz PDF
        </>
      )}
    </button>
  );
}
