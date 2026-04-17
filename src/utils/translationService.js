const MYMEMORY_API = "https://api.mymemory.translated.net/get";

async function translateText(text, fromLang = "pl", toLang = "en") {
  if (!text || text.trim() === "") return text;

  try {
    const response = await fetch(
      `${MYMEMORY_API}?q=${encodeURIComponent(text)}&langpair=${fromLang}|${toLang}`
    );
    const data = await response.json();

    if (data.responseStatus === 200 && data.responseData?.translatedText) {
      return data.responseData.translatedText;
    }
    return text;
  } catch (error) {
    console.error("Translation error:", error);
    return text;
  }
}

// Section header translations (built-in, no API needed)
const sectionHeaders = {
  en: {
    personalInfo: "Personal Information",
    education: "Education",
    experience: "Work Experience",
    hardSkills: "Technical Skills",
    softSkills: "Soft Skills",
    languages: "Languages",
    phone: "Phone",
    email: "Email",
    schoolType: { podstawowe: "Primary", średnie: "Secondary", wyższe: "Higher", inne: "Other" },
  },
  de: {
    personalInfo: "Persönliche Daten",
    education: "Ausbildung",
    experience: "Berufserfahrung",
    hardSkills: "Technische Fähigkeiten",
    softSkills: "Soft Skills",
    languages: "Sprachen",
    phone: "Telefon",
    email: "E-Mail",
    schoolType: { podstawowe: "Grundschule", średnie: "Gymnasium", wyższe: "Hochschule", inne: "Andere" },
  },
  fr: {
    personalInfo: "Informations Personnelles",
    education: "Formation",
    experience: "Expérience Professionnelle",
    hardSkills: "Compétences Techniques",
    softSkills: "Compétences Interpersonnelles",
    languages: "Langues",
    phone: "Téléphone",
    email: "E-mail",
    schoolType: { podstawowe: "Primaire", średnie: "Secondaire", wyższe: "Supérieur", inne: "Autre" },
  },
  es: {
    personalInfo: "Información Personal",
    education: "Educación",
    experience: "Experiencia Laboral",
    hardSkills: "Habilidades Técnicas",
    softSkills: "Habilidades Blandas",
    languages: "Idiomas",
    phone: "Teléfono",
    email: "Correo Electrónico",
    schoolType: { podstawowe: "Primaria", średnie: "Secundaria", wyższe: "Superior", inne: "Otro" },
  },
  it: {
    personalInfo: "Informazioni Personali",
    education: "Istruzione",
    experience: "Esperienza Lavorativa",
    hardSkills: "Competenze Tecniche",
    softSkills: "Competenze Trasversali",
    languages: "Lingue",
    phone: "Telefono",
    email: "E-mail",
    schoolType: { podstawowe: "Elementare", średnie: "Superiore", wyższe: "Universitaria", inne: "Altro" },
  },
};

export async function translateCV(cvData, targetLang) {
  const langPair = `pl|${targetLang}`;
  const headers = sectionHeaders[targetLang] || sectionHeaders.en;

  // Translate user content via API
  const translateField = (text) => translateText(text, "pl", targetLang);

  // Translate personal info
  const personal = {
    ...cvData.personal,
    // Name stays the same
  };

  // Translate education
  const education = await Promise.all(
    cvData.education.map(async (edu) => ({
      ...edu,
      type: headers.schoolType[edu.type] || edu.type,
      schoolName: await translateField(edu.schoolName),
      field: await translateField(edu.field),
    }))
  );

  // Translate experience
  const experience = await Promise.all(
    cvData.experience.map(async (exp) => ({
      ...exp,
      position: await translateField(exp.position),
      company: exp.company, // Company names stay the same
      description: await translateField(exp.description),
    }))
  );

  // Translate skills
  const hardSkills = await Promise.all(
    cvData.hardSkills.map((skill) => translateField(skill))
  );

  const softSkills = await Promise.all(
    cvData.softSkills.map((skill) => translateField(skill))
  );

  return {
    personal,
    education,
    experience,
    hardSkills,
    softSkills,
    languages: cvData.languages,
    _headers: headers,
  };
}

export function getSectionHeaders(lang) {
  return sectionHeaders[lang] || sectionHeaders.en;
}

export const availableLanguages = [
  { code: "en", name: "Angielski", flag: "🇬🇧" },
  { code: "de", name: "Niemiecki", flag: "🇩🇪" },
  { code: "fr", name: "Francuski", flag: "🇫🇷" },
  { code: "es", name: "Hiszpański", flag: "🇪🇸" },
  { code: "it", name: "Włoski", flag: "🇮🇹" },
];
