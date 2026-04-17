"use client";

import { Mail, Phone } from "lucide-react";

export default function CreativeTemplate({ data, headers }) {
  const { personal, education, experience, hardSkills, softSkills, languages } = data;
  const h = headers || {};

  return (
    <div className="bg-white text-gray-800 min-h-[297mm]" style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
      {/* Header with gradient */}
      <div className="relative bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500 px-8 py-10 text-white overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-[-30px] right-[-30px] w-40 h-40 bg-white/10 rounded-full" />
        <div className="absolute bottom-[-20px] left-[20%] w-24 h-24 bg-white/10 rounded-full" />

        <div className="flex items-center gap-6 relative z-10">
          {personal.photo && (
            <div className="w-28 h-28 rounded-2xl overflow-hidden border-4 border-white/40 shadow-xl rotate-3 hover:rotate-0 transition-transform">
              <img src={personal.photo} alt="" className="w-full h-full object-cover" />
            </div>
          )}
          <div>
            <h1 className="text-4xl font-black">
              {personal.firstName} {personal.lastName}
            </h1>
            <div className="flex items-center gap-4 mt-3 text-sm text-white/80">
              {personal.email && (
                <span className="flex items-center gap-1.5 bg-white/15 px-3 py-1 rounded-full">
                  <Mail className="w-3.5 h-3.5" />
                  {personal.email}
                </span>
              )}
              {personal.phone && (
                <span className="flex items-center gap-1.5 bg-white/15 px-3 py-1 rounded-full">
                  <Phone className="w-3.5 h-3.5" />
                  {personal.phone}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="p-8">
        <div className="grid grid-cols-3 gap-8">
          {/* Main content (2/3) */}
          <div className="col-span-2 space-y-6">
            {/* Experience */}
            {experience.length > 0 && (
              <section>
                <h2 className="text-xl font-black text-purple-600 mb-4 flex items-center gap-2">
                  <span className="w-8 h-1 bg-gradient-to-r from-fuchsia-500 to-purple-500 rounded-full" />
                  {h.experience || "Doświadczenie zawodowe"}
                </h2>
                <div className="space-y-5">
                  {experience.map((exp) => (
                    <div
                      key={exp.id}
                      className="pl-4 border-l-3 border-gradient-to-b border-purple-300 relative"
                      style={{ borderLeftWidth: "3px", borderImage: "linear-gradient(to bottom, #d946ef, #8b5cf6) 1" }}
                    >
                      <h3 className="font-bold text-gray-800 text-base">{exp.position}</h3>
                      <div className="flex items-center gap-2 text-sm">
                        <span className="font-semibold text-purple-500">{exp.company}</span>
                        {(exp.dateFrom || exp.dateTo) && (
                          <span className="text-gray-400">
                            | {exp.dateFrom}{exp.dateFrom && exp.dateTo ? " – " : ""}{exp.dateTo}
                          </span>
                        )}
                      </div>
                      {exp.description && (
                        <p className="text-sm text-gray-600 mt-1.5 leading-relaxed">{exp.description}</p>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Education */}
            {education.length > 0 && (
              <section>
                <h2 className="text-xl font-black text-purple-600 mb-4 flex items-center gap-2">
                  <span className="w-8 h-1 bg-gradient-to-r from-fuchsia-500 to-purple-500 rounded-full" />
                  {h.education || "Wykształcenie"}
                </h2>
                <div className="space-y-3">
                  {education.map((edu) => (
                    <div
                      key={edu.id}
                      className="bg-gradient-to-r from-purple-50 to-fuchsia-50 rounded-xl p-4"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-bold text-gray-800">{edu.schoolName}</h3>
                          <p className="text-sm text-gray-500">
                            {edu.type && <span className="capitalize">{edu.type}</span>}
                            {edu.type && edu.field ? " • " : ""}
                            {edu.field}
                          </p>
                        </div>
                        <span className="text-xs text-purple-500 font-semibold bg-purple-100 px-2.5 py-1 rounded-full whitespace-nowrap">
                          {edu.yearFrom}{edu.yearFrom && edu.yearTo ? "–" : ""}{edu.yearTo}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar (1/3) */}
          <div className="space-y-6">
            {/* Hard Skills */}
            {hardSkills.length > 0 && (
              <section>
                <h2 className="text-sm font-black text-purple-600 uppercase tracking-widest mb-3">
                  {h.hardSkills || "Umiejętności twarde"}
                </h2>
                <div className="flex flex-wrap gap-2">
                  {hardSkills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 text-xs font-semibold bg-gradient-to-r from-indigo-100 to-purple-100 text-purple-700 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {/* Soft Skills */}
            {softSkills.length > 0 && (
              <section>
                <h2 className="text-sm font-black text-fuchsia-600 uppercase tracking-widest mb-3">
                  {h.softSkills || "Umiejętności miękkie"}
                </h2>
                <div className="flex flex-wrap gap-2">
                  {softSkills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 text-xs font-semibold bg-gradient-to-r from-fuchsia-100 to-pink-100 text-fuchsia-700 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {/* Languages */}
            {languages.length > 0 && (
              <section>
                <h2 className="text-sm font-black text-purple-600 uppercase tracking-widest mb-3">
                  {h.languages || "Języki"}
                </h2>
                <div className="space-y-2">
                  {languages.map((lang) => (
                    <div key={lang.id} className="flex items-center justify-between bg-purple-50 rounded-lg px-3 py-2">
                      <span className="text-sm font-medium text-gray-700">{lang.language}</span>
                      <span className="text-xs font-bold text-purple-500 bg-purple-100 px-2 py-0.5 rounded-full">
                        {lang.level}
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
