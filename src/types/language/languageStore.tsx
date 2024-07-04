import { create } from "zustand";

interface Language {
    selectedLanguage: string;
    setSelectedLanguage: (newLang: string) => void;
    lang: string;
    setLang: (newLang: string) => void;
  }
  
  // Zustand store ni yaratish
  const languageStore = create<Language>((set) => ({
    selectedLanguage: localStorage.getItem("selectedLanguage") || "en",
    setSelectedLanguage: (newLang) => set({ selectedLanguage: newLang }),
    lang: "en",
    setLang: (newLang) => set({ lang: newLang }),
  }));
  
  export default languageStore;