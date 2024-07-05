'use client';

import React from 'react';
import '../../app/globals.css';
import '@splidejs/react-splide/css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import HeaderTitle from '../text/header-title';
import heroImage from '../../../assets/images/firstHero.png';
import Image, { StaticImageData } from 'next/image'; 

const Hero: React.FC<{ splide?: boolean, title?: string, description?: string, heroImg?: StaticImageData }> = ({ splide, title, description, heroImg }) => {
  return (
    <div className="relative h-screen w-full">
      {splide ? (
        <Splide
          options={{
            type: 'loop',
            autoplay: true,
            interval: 3000,
            pauseOnHover: false,
          }}
        >
          <SplideSlide>
            <div className="flex flex-col md:flex-row justify-between items-center h-full p-4 md:p-8">
              <div className="w-full md:w-1/2 text-white">
                <HeaderTitle text="Система бронирования для мастеров, салонов красоты и их клиентов" />
                <p className="text-gray-300 text-lg mt-4">
                  Мы создаем систему взаимодействия между мастерами, бизнес-партнерами (салонами красоты) и клиентами,
                  что является основной миссией данной системы бронирования. Платформа BOOKERS создает комфортные и
                  выгодные условия для каждого клиента, предоставляя квалифицированные услуги мастеров.
                </p>
              </div>
              <div className="w-full md:w-1/2 flex justify-center mt-4 md:mt-0">
                <Image className="rounded-lg" src={heroImage} alt="Hero image" width={400} height={400} />
              </div>
            </div>
          </SplideSlide>
        </Splide>
      ) : (
        <div className="flex flex-col md:flex-row justify-between items-center h-full p-4 md:p-8">
          <div className="w-full md:w-1/2 flex flex-col gap-5 text-white">
            <HeaderTitle text={`${title}`} />
            <p className="text-gray-300 text-lg mt-4">{description}</p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center mt-4 md:mt-0">
            <Image className="rounded-lg" src={heroImg ? heroImg : ''} alt="Hero image" width={400} height={400} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
