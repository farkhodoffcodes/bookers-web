'use client'
import Hero from '@/components/hero/hero'
import Image from 'next/image'
import React, { useState } from 'react'
import line from '../assets/line.png'
import heroImg from '../assets/images/firstHero.png';
import { FaPhone, FaSearch } from 'react-icons/fa';
import Link from 'next/link'
import HomeOffers from '@/components/cards/homeOffers'
import { BsGift } from "react-icons/bs";
import { PiHandCoinsLight, PiUsersThree } from "react-icons/pi";
import { TbVectorBezier2 } from "react-icons/tb";
import HeaderTitle from '@/components/text/header-title'
import BeautyService from '@/components/cards/beauty-service'
import { GiComb } from "react-icons/gi";
import HomeNews from '@/components/cards/homeNews'
import Button from '@/components/button/button'
import HomeFeedback from '@/components/cards/homeFeedback'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import './globals.css'
import HomeStatistic from '@/components/cards/homeStatistic'
import { SlGraduation } from "react-icons/sl";
import { GrLocation } from "react-icons/gr";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import paymeIMG from '../assets/images/payme.png';
import clickIMG from '../assets/images/click.png';
import selloIMG from '../assets/images/sello.png';
import uzumIMG from '../assets/images/uzum.png';
import osonIMG from '../assets/images/oson.png';
import NewsHome from '@/components/cards/newsHome';
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Bookers",
  description: "Bookers website",
};

const Line = () => {
  return (
    <div className='py-10'>
      <Image src={line} alt='img' />
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
          className="bg-transparent outline-none w-[300px]"
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

const feedbacks = [
  {
    image: heroImg,
    masterName: 'Анастасия Дан',
    salonName: 'Beauty Wave',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley .',
  },
  {
    image: heroImg,
    masterName: 'Роман Левел',
    salonName: 'Tamo Style',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley .',
  },
  {
    image: heroImg,
    masterName: 'Алекс Саккетт',
    salonName: 'Lotus SPA',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley .',
  },
  {
    image: heroImg,
    masterName: 'Алекс Саккетт',
    salonName: 'Lotus SPA',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley .',
  },
];

const partnerData = [
  { image: paymeIMG },
  { image: osonIMG },
  { image: selloIMG },
  { image: clickIMG },
  { image: uzumIMG },
]

const Home = () => {
  return (
    <>
      <div>
        <SearchBar />
        <Hero
          splide
        />
        <Line />
        <div className='flex justify-between'>
          <HomeOffers icon={BsGift} data={FirstCard} title='Что предлагает BOOKERS клиентам услуг красоты? ' />
          <HomeOffers icon={PiHandCoinsLight} data={SecondCard} title='Что предлагает BOOKERS мастерам? ' />
          <HomeOffers icon={TbVectorBezier2} data={ThirdCard} title='Какую интеграцию предлагает BOOKERS бизнес-партнерам: ' />
        </div>
        <Line />
        <div>
          <HeaderTitle text='Выберите свою услугу красоты в bookers' />
          <div className='flex justify-between flex-wrap py-10 gap-y-5'>
            <BeautyService icon={<GiComb />} title='Барбершоп' description='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.' />
            <BeautyService icon={<GiComb />} title='Барбершоп' description='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.' />
            <BeautyService icon={<GiComb />} title='Барбершоп' description='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.' />
            <BeautyService icon={<GiComb />} title='Барбершоп' description='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.' />
            <BeautyService icon={<GiComb />} title='Барбершоп' description='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.' />
            <BeautyService icon={<GiComb />} title='Барбершоп' description='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.' />
            <BeautyService icon={<GiComb />} title='Барбершоп' description='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.' />
            <BeautyService icon={<GiComb />} title='Барбершоп' description='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.' />
            <BeautyService icon={<GiComb />} title='Барбершоп' description='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.' />
          </div>
        </div>
        <Line />
        <div>
          <div className='w-[68%] flex-col flex gap-10'>
            <HeaderTitle text='Продвигайте свои мастер-классы, тренинги и обучения на платформах bookers' />
            <p className='text-base text-gray-400'>Мы предлагаем мастерам внедрение кросс-маркетинговых проектов в рамках программы “Мастер класс”. Данная программа предназначена для мастеров, которые проводят мастер-классы, тренинги и обучения по своей специальности.</p>
            <p className='text-3xl text-white'>Какую пользу вы получите с участием в программе “Мастер классы”</p>
          </div>
        </div>
        <div className='flex gap-10 items-center flex-wrap py-10 gap-y-5'>
          <HomeNews title='Повышение лояльности аудитории — создание условий для укрепления связи с текущими клиентами и привлечения новых.' />
          <HomeNews title='Увеличение узнаваемости бренда — активное продвижение вашего бренда через различные каналы, чтобы сделать его более известным и популярным..' />
          <HomeNews title='Сбор целевой аудитории — привлечение и удержание клиентов, которые действительно заинтересованы в ваших услугах и продуктах.' />
          <HomeNews title='Мониторинг интереса  — постоянный анализ и отслеживание предпочтений и интересов аудитории для более точного удовлетворения их потребностей.' />
          <HomeNews title='Создание эффективного канала продвижения — разработка и внедрение стратегий, которые обеспечат максимальную эффективность в продвижении ваших услуг и продуктов.' />
        </div>
        <div className='bg-[#B9B9C9] flex justify-between p-5 items-center rounded-2xl my-5'>
          <div className='w-2/3'>
            <p className='text-2xl font-bold text-[#9C0B35]'>Для  создания объявления и обеспечения видимости мероприятия в мобильном приложении и на сайте BOOKERS отправьте заявку.</p>
          </div>
          <div className='w-[20%]'>
            <Button title='Отправить заявку' />
          </div>
        </div>
        <Line />
        <div>
          <div className='w-[90%]'>
            <HeaderTitle text='Ознакомьтесь с отзывами клиентов касательно услуг мастеров и салонов красоты перед бронированием' />
          </div>
          <div className="max-w-7xl mx-auto">
            <Splide
              options={{
                type: 'loop',
                perPage: 3,
                gap: '1rem',
                rewind: true,
                pagination: true,
                arrows: true,
                perMove: 1,
                classes: {
                  arrows: 'splide__arrows splide__arrows--top',
                  prev: 'splide__arrow--prev',
                  next: 'splide__arrow--next',
                },
                breakpoints: {
                  1024: {
                    perPage: 2,
                  },
                  768: {
                    perPage: 1,
                  },
                },
              }}
            >
              {feedbacks.map((feedback, index) => (
                <SplideSlide key={index}>
                  <HomeFeedback salonName={feedback.salonName} masterName={feedback.masterName} image={feedback.image} description={feedback.description} />
                </SplideSlide>
              ))}
            </Splide>
          </div>
          <div className='flex justify-center items-center'>
            <div className='w-[250px] py-5'>
              <Button title='Оставить отзыв' />
            </div>
          </div>
        </div>
        <Line />
        <div>
          <HeaderTitle text='Статистика bookers' />
          <div className='flex justify-between py-10'>
            <HomeStatistic icon={SlGraduation} count={500} subTitle='Количество мастеров' />
            <HomeStatistic icon={PiUsersThree} count={1200} subTitle='Количество клиентов' />
            <HomeStatistic icon={GrLocation} count={135} subTitle='Количество локаций' />
            <HomeStatistic icon={IoMdCheckmarkCircleOutline} count={1200} subTitle='успешных бронирований' />
          </div>
        </div>
        <Line />
        <div>
          <HeaderTitle text='Бизнес-партнеры мобильного приложения' />
          <div>
            <Splide
              options={{
                type: 'loop',
                perPage: 4,
                gap: '1rem',
                rewind: true,
                pagination: true,
                arrows: false,
                perMove: 1,
                breakpoints: {
                  1024: {
                    perPage: 2,
                  },
                  768: {
                    perPage: 1,
                  },
                },
              }}>
              {partnerData.map((item, index) => (
                <SplideSlide key={index}>
                  <Image src={item.image} alt='partnorsImage' />
                </SplideSlide>
              ))}
            </Splide>
          </div>
        </div>
        <Line />
        <div>
          <HeaderTitle text='Новости bookers' />
          <div>
            <Splide
              options={{
                type: 'loop',
                perPage: 3,
                gap: '1rem',
                rewind: true,
                pagination: true,
                arrows: true,
                perMove: 1,
                classes: {
                  arrows: 'splide__arrows splide__arrows--top',
                  prev: 'splide__arrow--prev',
                  next: 'splide__arrow--next',
                },
                breakpoints: {
                  1024: {
                    perPage: 2,
                  },
                  768: {
                    perPage: 1,
                  },
                },
              }}
            >
              <SplideSlide>
                <NewsHome />
              </SplideSlide>
              <SplideSlide>
                <NewsHome />
              </SplideSlide>
              <SplideSlide>
                <NewsHome />
              </SplideSlide>
              <SplideSlide>
                <NewsHome />
              </SplideSlide>
              <SplideSlide>
                <NewsHome />
              </SplideSlide>
              <SplideSlide>
                <NewsHome />
              </SplideSlide>
            </Splide>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;
