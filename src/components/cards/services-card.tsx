import React from 'react';
import Image from 'next/image';
import { FaMapMarkerAlt } from 'react-icons/fa';
import Button from '../button/button';

const ServicesCard = ({ data }: { data: any }) => {
    return (
        <div className="rounded-xl shadow-lg bg-[#B9B9C9] p-6">
            <Image
                src={data.mainImage}
                alt="Barber shop"
                className="rounded-lg w-full mb-4"
            />
            <div>
                <h3 className="text-xl font-bold mb-2">{data.title}</h3>
                <div className="flex items-center mb-4">
                    <Image
                        src={data.avatarImage}
                        alt="Nathalie"
                        className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                        <p className="text-lg font-semibold">{data.firstName}</p>
                        <p className="text-sm text-gray-600">{data.service}</p>
                    </div>
                </div>
                <p className="text-2xl font-bold text-[#9C0B35] mb-4">{data.price} сум</p>
                <div className="flex items-center mb-4">
                    <FaMapMarkerAlt className="text-blue-500" />
                    <p className="text-sm text-gray-700 ml-2">{data.location}</p>
                </div>
                <p className="text-sm text-gray-700 mb-4">{data.posts}</p>
                <Button title={data.buttonName} />
            </div>
        </div>
    );
};

export default ServicesCard;
