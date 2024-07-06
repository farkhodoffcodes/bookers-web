"use client"
import Hero from "@/components/hero/hero";
import Opacha from "../../assets/images/Opacha.png"
import HeaderTitle from "@/components/text/header-title";
import VacanciesCard from "@/components/cards/vacancies";
import { title } from "process";

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


const vacanciesData = [
    {
        description: "Свидетельство о регистрации базы персональных данных в Государственном реестре баз персональных данных",
        buttonName: "Подробнее",
        title:'Комьюнити-менеджер'

    },
    {
        description: "Свидетельство о регистрации базы персональных данных в Государственном реестре баз персональных данных",
        buttonName: "Подробнее",
        title:'Комьюнити-менеджер'
    },
    {
        description: "Свидетельство о регистрации базы персональных данных в Государственном реестре баз персональных данных",
        buttonName: "Подробнее",
        title:'Комьюнити-менеджер'
    }
];

const Vakansi = () => {
    const { selectedLanguage } = languageStore();
  const { t } = useTranslation();

   // Component ilk render bo'lganda ishlaydigan useEffect
   useEffect(() => {
    i18n.changeLanguage(selectedLanguage);
  }, [selectedLanguage]);

    return (
        <div>
            <div>
            <Hero
                title="Компания Well Tech:  Вакансии"
                description="Вы готовы нести  ответственность за свою работу и результаты, способствовать эффективному выполнению задач и достижению результатов?
 Компания Well Tech открыта для реализации новых возможностей и расширять состав команды. "
                heroImg={Opacha}

            />
        </div>
        <div className="mb-10">
            <HeaderTitle
             text="Вакансии"/>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-xl mb-12">
        {vacanciesData.map((vacancy, index) => (
                    <VacanciesCard
                        key={index}
                        title={vacancy.title}
                        description={vacancy.description}
                        buttonName={vacancy.buttonName}
                    />
                ))}
        </div>
        </div>
    );
};
export default Vakansi;