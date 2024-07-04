import { FaCheckCircle } from 'react-icons/fa';
const data = [
    "Разработка передовых IT-решений и программного обеспечения",
    "Создание инновационных платформ для обеспечения комфорта и эффективности",
    "Повышение качества услуг в разных сферах деятельности",
    "Улучшение пользовательского опыта",
    "Создание выгодных условий для всех участников экосистемы"
];

const Item = [
    "Инновация",
    "Качество",
    "Безопасность",
    "Клиентоориентированность",
    "Партнерство",
    "Командная работа",
    "Гибкость",
    "Устойчивое развитие"
];

const itemLIst = Item.map((item, index) => (
    <li key={index} className="flex items-center">
        <FaCheckCircle className="text-[#9C0B35] mr-3" />
        {item}
    </li>
));

const items = data.map((item, index) => (
    <li key={index} className="flex items-center">
        <FaCheckCircle className="text-[#9C0B35] mr-2" />
        {item}
    </li>
));

const MissionValuesCard = () => {
    return (
        <div className="text-white py-8">
            <div className="max-w-[1200px] mx-auto ">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="p-6 bg-[#B9B9C9] rounded-2xl">
                        <h3 className="text-xl font-semibold mb-4 text-[#9C0B35]">Наша миссия</h3>
                        <ul className="space-y-3 text-black">
                            {items}
                        </ul> 
                    </div>
                    <div className="p-6 bg-[#B9B9C9] rounded-2xl">
                        <h3 className="text-xl font-semibold mb-4 text-[#9C0B35]">Наши ценности</h3>
                        <ul className="space-y-3 text-black">
                            {itemLIst}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MissionValuesCard;