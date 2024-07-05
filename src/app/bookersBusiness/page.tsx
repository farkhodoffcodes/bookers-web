"use client";
import Hero from "@/components/hero/hero";
import Mask from "../../../assets/images/Mask.png";
import HeaderTitle from "@/components/text/header-title";
import Subtitle from "@/components/text/subtitle";
import CardComponent from "@/components/cards/busnes-card";
import { useTranslation } from "next-i18next";

const BookersBiznes = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Hero title={t("partnershipBenefits")} heroImg={Mask} />
      <div className="w-full md:w-[70%] mb-5">
        <HeaderTitle text={t("webCabinet")} />
      </div>
      <div className="w-full md:w-[65%] mb-5">
        <Subtitle text="Мы предлагаем взаимовыгодное партнерство владельцам салонов красоты с инструментами управления и мониторинга для обеспечения стабильного роста бизнеса. Вы можете интегрировать сразу несколько филиалов сети и в режиме онлайн управлять процессами с помощью адаптированного Web-кабинета bookers, разработанного под вашу бизнес-стратегию. bookers поможет создать эффективную воронку продаж и обрабатывать клиентов до сделки через модуль комьюнити." />
      </div>
      <div className="w-full md:w-[60%] mb-10">
        <Subtitle text="Web-кабинет bookers интегрирует ваш бизнес с модулями для повышения лояльности клиентов, увеличения доходов и анализа деятельности." />
      </div>
      <div className="mb-10 w-full">
        <CardComponent />
      </div>
    </div>
  );
};

export default BookersBiznes;
