"use client";

import { useRef } from "react";
import { useCVStore } from "@/store/useCVStore";
import ClassicTemplate from "./ClassicTemplate";
import ModernTemplate from "./ModernTemplate";
import CreativeTemplate from "./CreativeTemplate";

const templates = {
  classic: ClassicTemplate,
  modern: ModernTemplate,
  creative: CreativeTemplate,
};

export default function CVPreview({ previewRef }) {
  const { personal, education, experience, hardSkills, softSkills, languages, template, _headers } =
    useCVStore();

  const TemplateComponent = templates[template] || ClassicTemplate;

  const data = {
    personal,
    education,
    experience,
    hardSkills,
    softSkills,
    languages,
  };

  const isEmpty =
    !personal.firstName &&
    !personal.lastName &&
    education.length === 0 &&
    experience.length === 0 &&
    hardSkills.length === 0 &&
    softSkills.length === 0 &&
    languages.length === 0;

  return (
    <div className="cv-preview">
      <div
        ref={previewRef}
        className="bg-white rounded-lg shadow-2xl overflow-hidden"
        style={{
          width: "210mm",
          minHeight: "297mm",
          transformOrigin: "top left",
        }}
      >
        {isEmpty ? (
          <div className="flex items-center justify-center h-[297mm] text-gray-400">
            <div className="text-center space-y-3">
              <div className="text-6xl">📄</div>
              <p className="text-lg font-medium">Twoje CV pojawi się tutaj</p>
              <p className="text-sm">Zacznij wypełniać formularz po lewej stronie</p>
            </div>
          </div>
        ) : (
          <TemplateComponent data={data} headers={_headers} />
        )}
      </div>
    </div>
  );
}
