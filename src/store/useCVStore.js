import { create } from "zustand";

const initialPersonal = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  photo: null,
};

const initialState = {
  personal: { ...initialPersonal },
  education: [],
  experience: [],
  hardSkills: [],
  softSkills: [],
  languages: [],
  template: "classic",
  originalData: null,
  isTranslated: false,
};

export const useCVStore = create((set, get) => ({
  ...initialState,

  // Personal info
  setPersonal: (field, value) =>
    set((state) => ({
      personal: { ...state.personal, [field]: value },
    })),

  setPhoto: (photoDataUrl) =>
    set((state) => ({
      personal: { ...state.personal, photo: photoDataUrl },
    })),

  // Education
  addEducation: () =>
    set((state) => ({
      education: [
        ...state.education,
        {
          id: Date.now(),
          type: "",
          schoolName: "",
          field: "",
          yearFrom: "",
          yearTo: "",
        },
      ],
    })),

  updateEducation: (id, field, value) =>
    set((state) => ({
      education: state.education.map((edu) =>
        edu.id === id ? { ...edu, [field]: value } : edu
      ),
    })),

  removeEducation: (id) =>
    set((state) => ({
      education: state.education.filter((edu) => edu.id !== id),
    })),

  // Experience
  addExperience: () =>
    set((state) => ({
      experience: [
        ...state.experience,
        {
          id: Date.now(),
          position: "",
          company: "",
          dateFrom: "",
          dateTo: "",
          description: "",
        },
      ],
    })),

  updateExperience: (id, field, value) =>
    set((state) => ({
      experience: state.experience.map((exp) =>
        exp.id === id ? { ...exp, [field]: value } : exp
      ),
    })),

  removeExperience: (id) =>
    set((state) => ({
      experience: state.experience.filter((exp) => exp.id !== id),
    })),

  // Skills
  addHardSkill: (skill) =>
    set((state) => ({
      hardSkills: [...state.hardSkills, skill],
    })),

  removeHardSkill: (index) =>
    set((state) => ({
      hardSkills: state.hardSkills.filter((_, i) => i !== index),
    })),

  addSoftSkill: (skill) =>
    set((state) => ({
      softSkills: [...state.softSkills, skill],
    })),

  removeSoftSkill: (index) =>
    set((state) => ({
      softSkills: state.softSkills.filter((_, i) => i !== index),
    })),

  // Languages
  addLanguage: () =>
    set((state) => ({
      languages: [
        ...state.languages,
        { id: Date.now(), language: "", level: "" },
      ],
    })),

  updateLanguage: (id, field, value) =>
    set((state) => ({
      languages: state.languages.map((lang) =>
        lang.id === id ? { ...lang, [field]: value } : lang
      ),
    })),

  removeLanguage: (id) =>
    set((state) => ({
      languages: state.languages.filter((lang) => lang.id !== id),
    })),

  // Template
  setTemplate: (template) => set({ template }),

  // Translation
  setTranslatedData: (data) => {
    const state = get();
    if (!state.originalData) {
      set({
        originalData: {
          personal: { ...state.personal },
          education: state.education.map((e) => ({ ...e })),
          experience: state.experience.map((e) => ({ ...e })),
          hardSkills: [...state.hardSkills],
          softSkills: [...state.softSkills],
          languages: state.languages.map((l) => ({ ...l })),
        },
        isTranslated: true,
        ...data,
      });
    } else {
      set({ ...data, isTranslated: true });
    }
  },

  restoreOriginal: () => {
    const state = get();
    if (state.originalData) {
      set({
        ...state.originalData,
        originalData: null,
        isTranslated: false,
      });
    }
  },

  // Reset
  resetAll: () => set(initialState),
}));
