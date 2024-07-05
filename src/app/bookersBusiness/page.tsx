"use client";
import Hero from "@/components/hero/hero";
import Mask from "../../../assets/images/Mask.png";
import HeaderTitle from "@/components/text/header-title";
import Subtitle from "@/components/text/subtitle";
import CardComponent from "@/components/cards/busnes-card";

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

const BookersBiznes = () => {
  const { selectedLanguage } = languageStore();
  const { t } = useTranslation();

   // Component ilk render bo'lganda ishlaydigan useEffect
   useEffect(() => {
    i18n.changeLanguage(selectedLanguage);
  }, [selectedLanguage]);


  return (
    <div>
      <Hero title={t("partnershipBenefits")} heroImg={Mask} />
      <div className="w-full md:w-[70%] mb-5">
        <HeaderTitle text={t("webCabinet")} />
      </div>
      <div className="w-full md:w-[65%] mb-5">
        <Subtitle text={t("webCabinetDescription")} />
      </div>
      <div className="w-full md:w-[60%] mb-10">
        <Subtitle text={t("webCabinetIntegration")} />
      </div>
      <div className="mb-10 w-full">
        <CardComponent />
      </div>
    </div>
  );
};

export default BookersBiznes;
