import Hero from '@/components/hero/hero'
import Image from 'next/image'
import React from 'react'
import line from '../../../assets/line.png'
import heroImg from '../../../assets/images/firstHero.png';

const Line = () => {
  return (
    <div className='py-10'>
      <Image src={line} alt='' />
    </div>
  )
}

const Home = () => {
  return (
    <>
      <div>
        <Hero
          description='Мы создаем систему взаимодействия между мастерами, бизнес-партнерами (салонами красоты) и клиентами, что является основной миссией данной системы бронирования. Платформа BOOKERS создает комфортные и выгодные условия для каждого клиента, предоставляя квалифицированные услуги мастеров.'
          title='Система бронирования для мастеров, салонов красоты и их клиентов'
          heroImg={heroImg}
        />
        <Line />
      </div>
    </>
  )
}

export default Home