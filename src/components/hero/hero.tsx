'use client';

import React from 'react';
import '../../app/globals.css';
import heroImg from '../../../assets/images/firstHero.png';
import '@splidejs/react-splide/css';
import { Splide, SplideSlide } from '@splidejs/react-splide';

const Hero = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${heroImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100%',
      }}
    >
      <Splide
        options={{
          type: 'loop',
          autoplay: true,
          interval: 3000,
          pauseOnHover: false,
        }}
      >
        <SplideSlide>
          <div className="bg-[#fff]">
            <h1>Система бронирования для мастеров, салонов красоты и их клиентов</h1>
            <p>
              Мы создаем систему взаимодействия между мастерами, бизнес-партнерами (салонами красоты) и клиентами,
              что является основной миссией данной системы бронирования. Платформа BOOKERS создает комфортные и
              выгодные условия для каждого клиента, предоставляя квалифицированные услуги мастеров.
            </p>
          </div>
        </SplideSlide>
      </Splide>
    </div>
  );
}

export default Hero;
