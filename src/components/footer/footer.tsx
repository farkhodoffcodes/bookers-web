import { FaFacebookF, FaInstagram, FaTelegramPlane, FaYoutube } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import Link from 'next/link';
import Image from 'next/image';
import img from '@/assets/logos/logo.png'

const Footer = () => {
    return (
        <footer className="bg-[#161621] text-white py-8">
            <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <h3 className="mb-4 font-bold">Документация</h3>
                    <ul>
                        <li><Link href="#" className="text-gray-400 hover:underline">Условия использования</Link></li>
                        <li><Link href="#" className="text-gray-400 hover:underline">Публичное соглашение</Link></li>
                        <li><Link href="#" className="text-gray-400 hover:underline">Лицензионным соглашением</Link></li>
                        <li><Link href="#" className="text-gray-400 hover:underline">Политикой конфиденциальности</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className="mb-4 font-bold">Ссылки основных страниц</h3>
                    <ul>
                        <li><Link href="#" className="text-gray-400 hover:underline">Клиентам</Link></li>
                        <li><Link href="#" className="text-gray-400 hover:underline">Мастерам</Link></li>
                        <li><Link href="#" className="text-gray-400 hover:underline">Бизнес-партнерство</Link></li>
                        <li><Link href="#" className="text-gray-400 hover:underline">Мастер-классы / Обучение / Тренинги</Link></li>
                        <li><Link href="#" className="text-gray-400 hover:underline">Пакеты для мастеров</Link></li>
                        <li><Link href="#" className="text-gray-400 hover:underline">FAQ</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className="mb-4 font-bold">Вход / Регистрация</h3>
                    <ul>
                        <li><Link href="#" className="text-gray-400 hover:underline">Клиент</Link></li>
                        <li><Link href="#" className="text-gray-400 hover:underline">Мастер</Link></li>
                        <li><Link href="#" className="text-gray-400 hover:underline">Бизнес-партнер</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className="mb-4 font-bold">Контактные данные</h3>
                    <address className="not-italic text-gray-400">
                        Республика Узбекистан, город Ташкент,<br />
                        Алмазарский район СГМ Янги Себзор,<br />
                        Массив Себзар L17/18, дом 8, кв. 31<br />
                        <Link href="tel:+998773088888" className="block mt-2">+998 77 308-88-88</Link>
                        <Link href="mailto:info@welltech.uz" className="mt-2 flex items-center">
                            <AiOutlineMail className="mr-2" />info@welltech.uz
                        </Link>
                    </address>
                </div>
            </div>
            <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center border-t border-gray-800 pt-4 mt-8">
                <div className="mb-4 md:mb-0">
                    <p className="text-center md:text-left text-gray-400">&copy; 2024 Bookers. Все права защищены.</p>
                </div>
                <div className="flex space-x-4 mb-4 md:mb-0">
                    <Link href="#" className="text-gray-400 hover:text-white"><FaFacebookF /></Link>
                    <Link href="#" className="text-gray-400 hover:text-white"><FaInstagram /></Link>
                    <Link href="#" className="text-gray-400 hover:text-white"><FaTelegramPlane /></Link>
                    <Link href="#" className="text-gray-400 hover:text-white"><FaYoutube /></Link>
                </div>
                <div className="flex space-x-4">
                    <Link href="#" className="text-gray-400 hover:text-white"><Image src={img} alt="Download on the App Store" /></Link>
                    <Link href="#" className="text-gray-400 hover:text-white"><Image src={img} alt="Get it on Google Play" /></Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
