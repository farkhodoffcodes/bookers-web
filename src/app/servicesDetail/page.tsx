import MissionValuesCard from "@/components/cards/mission-card";
import VacanciesCard from "@/components/cards/vacancies";

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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-xl">
        {vacanciesData.map((vacancy, index) => (
          <VacanciesCard
            key={index}
            description={vacancy.description}
            buttonName={vacancy.buttonName}
          />
        ))}
      </div>
      <MissionValuesCard />
    </>
  );
};

export default ServicesCard;
