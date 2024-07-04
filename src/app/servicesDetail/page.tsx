import MissionValuesCard from "@/components/cards/mission-card";
import VacanciesCard from "@/components/cards/vacancies";
import HeaderTitle from "@/components/text/header-title";
import Subtitle from "@/components/text/subtitle";
import { BsCheckCircle } from "react-icons/bs";

const vacanciesData = [
    {
        description: "Свидетельство о регистрации базы персональных данных в Государственном реестре баз персональных данных",
        buttonName: "Подробнее"
    },
    {
        description: "Свидетельство о регистрации базы персональных данных в Государственном реестре баз персональных данных",
        buttonName: "Подробнее"
    },
    {
        description: "Свидетельство о регистрации базы персональных данных в Государственном реестре баз персональных данных",
        buttonName: "Подробнее"
    }
];

const ServicesCard = () => {
    return (
        <>
            <div className="mb-10">
                <HeaderTitle
                    text="Свидетельства и сертификатdbookers"
                />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-xl mb-10">
                {vacanciesData.map((vacancy, index) => (
                    <VacanciesCard
                        key={index}
                        description={vacancy.description}
                        buttonName={vacancy.buttonName}
                    />
                ))}
            </div>
            <div>

            </div>
            <div className="mb-10">
                <HeaderTitle
                    text="Свидетельства и сертификатdbookers"
                />
            </div>
            <MissionValuesCard />
            <div className="mb-7">
                <HeaderTitle
                    text="Свидетельства и сертификатdbookers"
                />
            </div>
            <div className="mb-7 w-[60%]">
                <Subtitle
                    text='Well Tech объединяет талантливых разработчиков, дизайнеров, проектных менеджеров, маркетологов и аналитиков и квалифицированных специалистов своего направления. Каждый из нас вносит уникальный вклад в создание  IT-решений и ведение успешных проектов.' />
            </div>
            <div className="max-w-[1200px] mx-auto ">
                <div className="p-6 bg-[#B9B9C9] rounded-2xl">
                    <h3 className="text-xl text-center font-semibold mb-4 text-[#9C0B35]">Наша миссия</h3>
                    <div className="flex flex-row">
                        <div>
                            <BsCheckCircle className="mr-4" />Сотрудничество
                            <BsCheckCircle className="mr-4" />Сотрудничество
                            <BsCheckCircle className="mr-4" />Сотрудничество
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServicesCard;
