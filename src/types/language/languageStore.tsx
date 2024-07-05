import { create } from "zustand";

interface Language {
    selectedLanguage: string;
    setSelectedLanguage: (newLang: string) => void;
  }
  
  // Zustand store ni yaratish
  const languageStore = create<Language>((set) => ({
    selectedLanguage: localStorage.getItem("selectedLanguage") || "ru",
    setSelectedLanguage: (newLang) => set({ selectedLanguage: newLang }),
  }));
  
  export default languageStore;