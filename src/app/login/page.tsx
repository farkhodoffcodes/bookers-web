
import i18n from "i18next";
import { useTranslation } from "next-i18next";
import { initReactI18next } from "react-i18next";
import { en } from "@/cons/language/en";
import { ru } from "@/cons/language/ru";
import { uz } from "@/cons/language/uz";
import languageStore from "@/types/language/languageStore";
import { useEffect } from "react";


i18n.use(initReactI18next).init({
    resources: {
      en: { translation: en },
      ru: { translation: ru },
      uz: { translation: uz },
    },
    lng: "ru",
    fallbackLng: "ru",
  });


const Login = () => {
  const { selectedLanguage } = languageStore();
  const { t } = useTranslation();

   // Component ilk render bo'lganda ishlaydigan useEffect
   useEffect(() => {
    i18n.changeLanguage(selectedLanguage);
  }, [selectedLanguage]);

  return (
    <div>Login</div>
  )
}

export default Login