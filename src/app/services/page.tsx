import ServicesCard from "@/components/cards/services-card"
import { Metadata } from "next";
import images from '@/assets/serveces/servece.png'
import avatar from '@/assets/serveces/avatar.png'

export const metadata: Metadata = {
  title: "Bookers | Services",
  description: "Bookers website for services",
};

const servicesData = [
  {
    id: 1,
    mainImage: images,
    title: 'Женская для взрослых',
    avatarImage: avatar,
    firstName: 'Натали',
    service: 'Женский мастер',
    price: '500 000',
    location: 'Мирабадский р-н, ул. Нурафшон, 32',
    posts: 'Ближайшая запись: Сегодня',
    buttonName: 'Записаться'
  },
  {
    id: 2,
    mainImage: images,
    title: 'Женская для взрослых',
    avatarImage: avatar,
    firstName: 'Натали',
    service: 'Женский мастер',
    price: '500 000',
    location: 'Мирабадский р-н, ул. Нурафшон, 32',
    posts: 'Ближайшая запись: Сегодня',
    buttonName: 'Записаться'
  },
  {
    id: 3,
    mainImage: images,
    title: 'Женская для взрослых',
    avatarImage: avatar,
    firstName: 'Натали',
    service: 'Женский мастер',
    price: '500 000',
    location: 'Мирабадский р-н, ул. Нурафшон, 32',
    posts: 'Ближайшая запись: Сегодня',
    buttonName: 'Записаться'
  },
  {
    id: 4,
    mainImage: images,
    title: 'Женская для взрослых',
    avatarImage: avatar,
    firstName: 'Натали',
    service: 'Женский мастер',
    price: '500 000',
    location: 'Мирабадский р-н, ул. Нурафшон, 32',
    posts: 'Ближайшая запись: Сегодня',
    buttonName: 'Записаться'
  },
  {
    id: 5,
    mainImage: images,
    title: 'Женская для взрослых',
    avatarImage: avatar,
    firstName: 'Натали',
    service: 'Женский мастер',
    price: '500 000',
    location: 'Мирабадский р-н, ул. Нурафшон, 32',
    posts: 'Ближайшая запись: Сегодня',
    buttonName: 'Записаться'
  },
  {
    id: 6,
    mainImage: images,
    title: 'Женская для взрослых',
    avatarImage: avatar,
    firstName: 'Натали',
    service: 'Женский мастер',
    price: '500 000',
    location: 'Мирабадский р-н, ул. Нурафшон, 32',
    posts: 'Ближайшая запись: Сегодня',
    buttonName: 'Записаться'
  },
  {
    id: 7,
    mainImage: images,
    title: 'Женская для взрослых',
    avatarImage: avatar,
    firstName: 'Натали',
    service: 'Женский мастер',
    price: '500 000',
    location: 'Мирабадский р-н, ул. Нурафшон, 32',
    posts: 'Ближайшая запись: Сегодня',
    buttonName: 'Записаться'
  },
  {
    id: 8,
    mainImage: images,
    title: 'Женская для взрослых',
    avatarImage: avatar,
    firstName: 'Натали',
    service: 'Женский мастер',
    price: '500 000',
    location: 'Мирабадский р-н, ул. Нурафшон, 32',
    posts: 'Ближайшая запись: Сегодня',
    buttonName: 'Записаться'
  },
  {
    id: 9,
    mainImage: images,
    title: 'Женская для взрослых',
    avatarImage: avatar,
    firstName: 'Натали',
    service: 'Женский мастер',
    price: '500 000',
    location: 'Мирабадский р-н, ул. Нурафшон, 32',
    posts: 'Ближайшая запись: Сегодня',
    buttonName: 'Записаться'
  },
  {
    id: 10,
    mainImage: images,
    title: 'Женская для взрослых',
    avatarImage: avatar,
    firstName: 'Натали',
    service: 'Женский мастер',
    price: '500 000',
    location: 'Мирабадский р-н, ул. Нурафшон, 32',
    posts: 'Ближайшая запись: Сегодня',
    buttonName: 'Записаться'
  },
]

const Services = () => {
  return (
    <section className="py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {servicesData.map(services => (
          <ServicesCard data={services} />
        ))}
      </div>
    </section>
  )
}

export default Services