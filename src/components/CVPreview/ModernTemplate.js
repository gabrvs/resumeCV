"use client";

import { Mail, Phone, GraduationCap, Briefcase, Wrench, Globe } from "lucide-react";

export default function ModernTemplate({ data, headers }) {
  const { personal, education, experience, hardSkills, softSkills, languages } = data;
  const h = headers || {};

  return (
    <div className="bg-white text-gray-800 min-h-[297mm] flex" style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
      {/* Sidebar */}
      <div className="w-[35%] bg-gradient-to-b from-indigo-600 to-purple-700 text-white p-6">
        {/* Photo */}
        {personal.photo && (
          <div className="w-28 h-28 rounded-full mx-auto mb-4 overflow-hidden border-4 border-white/30 shadow-lg">
            <img src={personal.photo} alt="" className="w-full h-full object-cover" />
          </div>
        )}

        {/* Contact */}
        <div className="space-y-3 mb-8">
          <h2 className="text-xs font-bold uppercase tracking-widest text-white/70 mb-2">
            {h.personalInfo || "Kontakt"}
          </h2>
          {personal.email && (
            <div className="flex items-center gap-2 text-sm">
              <Mail className="w-4 h-4 text-white/70 shrink-0" />
              <span className="break-all text-white/90">{personal.email}</span>
            </div>
          )}
          {personal.phone && (
            <div className="flex items-center gap-2 text-sm">
              <Phone className="w-4 h-4 text-white/70 shrink-0" />
              <span className="text-white/90">{personal.phone}</span>
            </div>
          )}
        </div>

        {/* Skills */}
        {hardSkills.length > 0 && (
          <div className="mb-6">
            <h2 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/70 mb-3">
              <Wrench className="w-3.5 h-3.5" />
              {h.hardSkills || "Umiejętności twarde"}
            </h2>
            <div className="space-y-2">
              {hardSkills.map((skill, i) => (
                <div key={i}>
                  <span className="text-sm text-white/90">{skill}</span>
                  <div className="w-full bg-white/20 rounded-full h-1.5 mt-1">
                    <div
                      className="bg-white/80 rounded-full h-1.5"
                      style={{ width: `${Math.max(40, 100 - i * 12)}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {softSkills.length > 0 && (
          <div className="mb-6">
            <h2 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/70 mb-3">
              {h.softSkills || "Umiejętności miękkie"}
            </h2>
            <div className="flex flex-wrap gap-1.5">
              {softSkills.map((skill, i) => (
                <span
                  key={i}
                  className="px-2 py-1 text-xs bg-white/15 rounded-full text-white/90"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Languages */}
        {languages.length > 0 && (
          <div>
            <h2 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/70 mb-3">
              <Globe className="w-3.5 h-3.5" />
              {h.languages || "Języki"}
            </h2>
            <div className="space-y-2">
              {languages.map((lang) => (
                <div key={lang.id} className="flex justify-between text-sm">
                  <span className="text-white/90">{lang.language}</span>
                  <span className="text-white/60 text-xs">{lang.level}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Main content */}
      <div className="flex-1 p-8">
        {/* Name header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            {personal.firstName}
          </h1>
          <h1 className="text-3xl font-light text-indigo-600">
            {personal.lastName}
          </h1>
        </div>

        {/* Experience */}
        {experience.length > 0 && (
          <section className="mb-8">
            <h2 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-indigo-600 mb-4">
              <Briefcase className="w-4 h-4" />
              {h.experience || "Doświadczenie zawodowe"}
            </h2>
            <div className="space-y-5 border-l-2 border-indigo-100 pl-5">
              {experience.map((exp) => (
                <div key={exp.id} className="relative">
                  <div className="absolute -left-[27px] top-1 w-3 h-3 bg-indigo-500 rounded-full border-2 border-white" />
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-gray-800">{exp.position}</h3>
                      <p className="text-sm text-indigo-500 font-medium">{exp.company}</p>
                    </div>
                    <span className="text-xs text-gray-400 bg-gray-50 px-2 py-1 rounded whitespace-nowrap">
                      {exp.dateFrom}{exp.dateFrom && exp.dateTo ? " – " : ""}{exp.dateTo}
                    </span>
                  </div>
                  {exp.description && (
                    <p className="text-sm text-gray-600 mt-2 leading-relaxed">{exp.description}</p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Education */}
        {education.length > 0 && (
          <section>
            <h2 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-indigo-600 mb-4">
              <GraduationCap className="w-4 h-4" />
              {h.education || "Wykształcenie"}
            </h2>
            <div className="space-y-4 border-l-2 border-indigo-100 pl-5">
              {education.map((edu) => (
                <div key={edu.id} className="relative">
                  <div className="absolute -left-[27px] top-1 w-3 h-3 bg-purple-500 rounded-full border-2 border-white" />
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-gray-800">{edu.schoolName}</h3>
                      <p className="text-sm text-gray-600">
                        {edu.type && <span className="capitalize">{edu.type}</span>}
                        {edu.type && edu.field ? " • " : ""}
                        {edu.field}
                      </p>
                    </div>
                    <span className="text-xs text-gray-400 bg-gray-50 px-2 py-1 rounded whitespace-nowrap">
                      {edu.yearFrom}{edu.yearFrom && edu.yearTo ? " – " : ""}{edu.yearTo}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
