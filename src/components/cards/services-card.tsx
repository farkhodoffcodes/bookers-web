import React from 'react';
import Image from 'next/image';
import { FaMapMarkerAlt } from 'react-icons/fa';
import Button from '../button/button';

const ServicesCard = ({ data, key }: { data: any, key: string | number }) => {
    return (
        <div className="rounded-xl shadow-lg bg-[#B9B9C9] p-6" key={key}>
            <Image
                src={data.mainImage}
                alt="Barber shop"
                className="rounded-lg w-full mb-4"
            />
            <div>
                <h3 className="text-xl font-extrabold mb-2">{data.title}</h3>
                <div className="flex items-center mb-4">
                    <Image
                        src={data.avatarImage}
                        alt="Nathalie"
                        className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                        <p className="text-lg font-bold">{data.firstName}</p>
                        <p className="text-sm text-gray-600">{data.service}</p>
                    </div>
                </div>
                <p className="text-xl font-extrabold text-[#9C0B35] mb-4">{data.price} сум</p>
                <div className="flex items-center mb-4">
                    <div className='w-12 h-12 rounded-full p-5 bg-[#9C0B35] flex justify-center items-center'>
                        <FaMapMarkerAlt className="text-white scale-[200%]" />
                    </div>
                    <p className="text-sm text-gray-700 ml-4">{data.location}</p>
                </div>
                <p className="text-sm font-extrabold text-slate-900 mb-4">{data.posts}</p>
                <Button title={data.buttonName} />
            </div>
        </div>
    );
};

export default ServicesCard;
