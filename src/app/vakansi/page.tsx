import {Metadata} from 'next'
import Hero from "@/components/hero/hero";
import Opacha from "../../assets/images/Opacha.png"
import HeaderTitle from "@/components/text/header-title";
import VacanciesCard from "@/components/cards/vacancies";

export const metadata: Metadata = {
    title: "Bookers | Vacancies",
    description: "Bookers website",
  };

const vacanciesData = [
    {
        description: "Свидетельство о регистрации базы персональных данных в Государственном реестре баз персональных данных",
        buttonName: "Подробнее",
        title: 'Комьюнити-менеджер'

    },
    {
        description: "Свидетельство о регистрации базы персональных данных в Государственном реестре баз персональных данных",
        buttonName: "Подробнее",
        title: 'Комьюнити-менеджер'
    },
    {
        description: "Свидетельство о регистрации базы персональных данных в Государственном реестре баз персональных данных",
        buttonName: "Подробнее",
        title: 'Комьюнити-менеджер'
    }
];

const Vakansi = () => {
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
                    text="Вакансии" />
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