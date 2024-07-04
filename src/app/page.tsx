"use client";
import Button from "@/components/button/button";
import i18n from "i18next";
import React, { useEffect } from "react";
import { initReactI18next } from "react-i18next";
import { en } from "@/cons/language/en";
import { ru } from "@/cons/language/ru";
import { uz } from "@/cons/language/uz";
import languageStore from "@/types/language/languageStore";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ru: { translation: ru },
    uz: { translation: uz },
  },
  lng: "en",
  fallbackLng: "en",
});

const Home = () => {
  const { selectedLanguage, setLang, setSelectedLanguage } = languageStore()



  // Component ilk render bo'lganda ishlaydigan useEffect
  useEffect(() => {
    i18n.changeLanguage(selectedLanguage);
    setLang(selectedLanguage);
  }, [selectedLanguage]);

  return (
    <div>
      <Button title="Войти / Регистрация" outlineStyle />
    </div>
  );
};

export default Home;
