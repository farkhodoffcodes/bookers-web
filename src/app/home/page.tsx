'use client'

import Hero from '@/components/hero/hero'
import Image from 'next/image'
import React, { useState } from 'react'
import line from '../../../assets/line.png'
import heroImg from '../../../assets/images/firstHero.png';
import { FaPhone, FaSearch } from 'react-icons/fa';
import Link from 'next/link'
import HomeOffers from '@/components/cards/homeOffers'
import { BsGift } from "react-icons/bs";
import { PiHandCoinsLight } from "react-icons/pi";
import { TbVectorBezier2 } from "react-icons/tb";

const Line = () => {
  return (
    <div className='py-10'>
      <Image src={line} alt='' />
    </div>
  )
}

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle the search logic here, such as making an API call with the query
    console.log('Search query:', query);
  };

  return (
    <div className='flex mt-10 gap-5 justify-end'>
      <form onSubmit={handleSearch} className="flex items-center bg-gray-900 text-white rounded-full px-4 py-2">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Поиск мастеров/салонов/услуг"
          className="bg-transparent outline-none w-[300px] px-2"
        />
        <button type="submit" className="bg-[#9c0b35] rounded-full p-2 ml-2">
          <FaSearch />
        </button>
      </form>
      <div>
        <Link href={'tel:+998 77 308-88-88'}>
          <div className="flex items-center bg-gray-900 text-white w-[215px] cursor-pointer rounded-full px-4 py-2">
            <div className="bg-[#9c0b35] rounded-full p-2">
              <FaPhone />
            </div>
            <span className="ml-2">+998 77 308-88-88</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

const FirstCard = [
  { text: 'Быстрое и удобное бронирование' },
  { text: 'Гарантированные онлайн-записи' },
  { text: 'Большой выбор мастеров' },
  { text: 'Детальная информация о профилях мастеров и отзывы клиентов' },
  { text: 'Интеграция с календарем и напоминания' },
  { text: 'Программы лояльности и бонусы' },
]
const SecondCard = [
  { text: 'Возможность настраивать услуги по полу, категориям, специализациям и процедурам' },
  { text: 'Управление графиком работы' },
  { text: 'Онлайн бронирование' },
  { text: 'Активация времени для VIP клиентов' },
  { text: 'Настройка приема онлайн оплаты и и предоплаты' },
  { text: 'Учет расходов мастера' },
  { text: 'Создать записи на месяц вперед и другие' },
]
const ThirdCard = [
  { text: 'Модуль управления клиентами' },
  { text: 'Модуль мониторинга и аналитики' },
  { text: 'Модуль планирования и расписания' },
  { text: 'Модуль маркетинга и продвижения' },
  { text: 'Модуль управления персоналом' },
  { text: 'Модуль комьюнити' },
]

const Home = () => {
  return (
    <>
      <div>
        <SearchBar />
        <Hero
          description='Мы создаем систему взаимодействия между мастерами, бизнес-партнерами (салонами красоты) и клиентами, что является основной миссией данной системы бронирования. Платформа BOOKERS создает комфортные и выгодные условия для каждого клиента, предоставляя квалифицированные услуги мастеров.'
          title='Система бронирования для мастеров, салонов красоты и их клиентов'
          heroImg={heroImg}
        />
        <Line />
        <div className='flex justify-between'>
          <HomeOffers icon={BsGift} data={FirstCard} title='Что предлагает BOOKERS клиентам услуг красоты? ' />
          <HomeOffers icon={PiHandCoinsLight} data={SecondCard} title='Что предлагает BOOKERS мастерам? ' />
          <HomeOffers icon={TbVectorBezier2} data={ThirdCard} title='Какую интеграцию предлагает BOOKERS бизнес-партнерам: ' />
        </div>
      </div>
    </>
  )
}

export default Home