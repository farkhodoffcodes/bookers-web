import MissionValuesCard from "@/components/cards/mission-card";
import VacanciesCard from "@/components/cards/vacancies";
import Hero from "@/components/hero/hero";
import HeaderTitle from "@/components/text/header-title";
import Subtitle from "@/components/text/subtitle";
import { BsCheckCircle } from "react-icons/bs";
import { CiCircleCheck } from "react-icons/ci";
import Mask1 from '../../../assets/images/Mask1.png'
import Guvohnoma from '../../../assets/images/guvohnoma.png'
import Guvohnoma2 from '../../../assets/images/guvohnoma2.png'
import Image from "next/image";

const modulesData = [
    "Модуль управления клиентами",
    "Модуль маркетинга и продвижения",
    "Модуль мониторинга и аналитики",
];

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
            <div>
                <Hero
                    title="Компания Well Tech предлагает продукты программных обеспечений для создания автоматизации процессов и улучшения эффективности бизнес процессов"
                    description="Компания Well Tech ведет свою деятельность в сфере информационных технологий и активно участвует в развитии IT-инфраструктуры нашей страны. За короткий срок своего существования наша компания реализовала ряд успешных проектов, включая bookers"
                    heroImg={Mask1} />
            </div>
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
                <div className="flex justify-between">
                        <Image src={Guvohnoma} alt="" />
                        <Image src={Guvohnoma2} alt=""  layout="responsive" />   
                </div>
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
            <div className="w-full bg-[#B9B9C9] p-6 rounded-xl shadow-md mb-10">
                <div className="flex items-center text-center mb-8">
                    <h2 className="text-2xl font-bold text-[#9C0B35]">
                        Мы ценим
                    </h2>
                </div>
                <div className="flex justify-start">
                    <ul className="list-disc list-inside mb-8 mr-8">
                        {modulesData.map((module, index) => (
                            <li key={index} className="flex items-center mb-2">
                                <CiCircleCheck className="text-[#9C0B35] mr-2 text-3xl font-bold" />
                                <span className="font-bold">{module}</span>
                            </li>
                        ))}
                    </ul>
                    <ul className="list-disc list-inside mb-8 mr-8">
                        {modulesData.map((module, index) => (
                            <li key={index} className="flex items-center mb-2">
                                <CiCircleCheck className="text-[#9C0B35] mr-2 text-3xl font-bold" />
                                <span className="font-bold">{module}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default ServicesCard;
