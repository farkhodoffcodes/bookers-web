import React from 'react';
import Image from 'next/image';
import { FaMapMarkerAlt } from 'react-icons/fa';

const ServicesCard = () => {
  return (
    <div className="max-w-sm mx-auto rounded-lg shadow-lg bg-gray-100 p-6">
      <Image 
        src="" 
        alt="Barber shop"
        className="rounded-lg w-full mb-4"
      />
      <div>
        <h3 className="text-xl font-bold mb-2">Женская для взрослых</h3>
        <div className="flex items-center mb-4">
          <Image 
            src="" 
            alt="Nathalie"
            className="w-10 h-10 rounded-full mr-3"
          />
          <div>
            <p className="text-lg font-semibold">Натали</p>
            <p className="text-sm text-gray-600">Женский мастер</p>
          </div>
        </div>
        <p className="text-2xl font-bold text-red-600 mb-4">350 000 сум</p>
        <div className="flex items-center mb-4">
          <FaMapMarkerAlt className="text-blue-500" />
          <p className="text-sm text-gray-700 ml-2">Миpабадский р-н, ул. Нурафшон, 32</p>
        </div>
        <p className="text-sm text-gray-700 mb-4">Ближайшая запись: Сегодня</p>
        <button className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700">
          Записаться
        </button>
      </div>
    </div>
  );
};

export default ServicesCard;
