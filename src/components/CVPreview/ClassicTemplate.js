"use client";

import { Mail, Phone, MapPin } from "lucide-react";

export default function ClassicTemplate({ data, headers }) {
  const { personal, education, experience, hardSkills, softSkills, languages } = data;
  const h = headers || {};

  return (
    <div className="bg-white text-gray-800 p-8 min-h-[297mm] font-serif" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
      {/* Header */}
      <div className="text-center border-b-2 border-gray-800 pb-6 mb-6">
        {personal.photo && (
          <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden border-2 border-gray-300">
            <img src={personal.photo} alt="" className="w-full h-full object-cover" />
          </div>
        )}
        <h1 className="text-3xl font-bold tracking-wide uppercase text-gray-900">
          {personal.firstName} {personal.lastName}
        </h1>
        <div className="flex items-center justify-center gap-6 mt-3 text-sm text-gray-600">
          {personal.email && (
            <span className="flex items-center gap-1">
              <Mail className="w-3.5 h-3.5" />
              {personal.email}
            </span>
          )}
          {personal.phone && (
            <span className="flex items-center gap-1">
              <Phone className="w-3.5 h-3.5" />
              {personal.phone}
            </span>
          )}
        </div>
      </div>

      {/* Education */}
      {education.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-bold uppercase tracking-wider border-b border-gray-300 pb-1 mb-3 text-gray-800">
            {h.education || "Wykształcenie"}
          </h2>
          {education.map((edu) => (
            <div key={edu.id} className="mb-3">
              <div className="flex justify-between items-baseline">
                <h3 className="font-bold text-gray-800">{edu.schoolName}</h3>
                <span className="text-sm text-gray-500">
                  {edu.yearFrom}{edu.yearFrom && edu.yearTo ? " – " : ""}{edu.yearTo}
                </span>
              </div>
              <p className="text-sm text-gray-600">
                {edu.type && <span className="capitalize">{edu.type}</span>}
                {edu.type && edu.field ? " • " : ""}
                {edu.field}
              </p>
            </div>
          ))}
        </section>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-bold uppercase tracking-wider border-b border-gray-300 pb-1 mb-3 text-gray-800">
            {h.experience || "Doświadczenie zawodowe"}
          </h2>
          {experience.map((exp) => (
            <div key={exp.id} className="mb-4">
              <div className="flex justify-between items-baseline">
                <h3 className="font-bold text-gray-800">{exp.position}</h3>
                <span className="text-sm text-gray-500">
                  {exp.dateFrom}{exp.dateFrom && exp.dateTo ? " – " : ""}{exp.dateTo}
                </span>
              </div>
              <p className="text-sm font-medium text-gray-600 italic">{exp.company}</p>
              {exp.description && (
                <p className="text-sm text-gray-600 mt-1 leading-relaxed">{exp.description}</p>
              )}
            </div>
          ))}
        </section>
      )}

      {/* Skills */}
      {(hardSkills.length > 0 || softSkills.length > 0) && (
        <section className="mb-6">
          <h2 className="text-lg font-bold uppercase tracking-wider border-b border-gray-300 pb-1 mb-3 text-gray-800">
            {h.hardSkills ? `${h.hardSkills} / ${h.softSkills}` : "Umiejętności"}
          </h2>
          {hardSkills.length > 0 && (
            <div className="mb-2">
              <span className="font-semibold text-sm text-gray-700">{h.hardSkills || "Twarde"}: </span>
              <span className="text-sm text-gray-600">{hardSkills.join(", ")}</span>
            </div>
          )}
          {softSkills.length > 0 && (
            <div>
              <span className="font-semibold text-sm text-gray-700">{h.softSkills || "Miękkie"}: </span>
              <span className="text-sm text-gray-600">{softSkills.join(", ")}</span>
            </div>
          )}
        </section>
      )}

      {/* Languages */}
      {languages.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-bold uppercase tracking-wider border-b border-gray-300 pb-1 mb-3 text-gray-800">
            {h.languages || "Języki obce"}
          </h2>
          <div className="grid grid-cols-2 gap-2">
            {languages.map((lang) => (
              <div key={lang.id} className="text-sm text-gray-600">
                <span className="font-medium text-gray-700">{lang.language}</span>
                {lang.level && <span> — {lang.level}</span>}
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
