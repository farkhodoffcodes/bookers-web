export const changeLanguage = (e: any, setSelectedLanguage: any) => {
    const newLanguage = e;
    setSelectedLanguage(newLanguage);
    localStorage.setItem("selectedLanguage", newLanguage); // Tanlangan tilni localStorage ga saqlash
  };