import Image, { StaticImageData } from 'next/image';
import React from 'react';

const HomeFeedback: React.FC<{ image: StaticImageData, masterName: string, salonName: string, description: string }> = ({ image, masterName, salonName, description }) => {
    return (
        <div className="max-w-[350px] mx-auto bg-[#b9b9c9] text-white rounded-2xl">
            <div className="p-6">
                <div className="flex items-center mb-4">
                    <Image src={image} alt="Master" className="w-10 h-10 rounded-full mr-3" />
                </div>
                <div>
                    <p className="mb-4 text-black text-sm">{description}</p>
                </div>
                <div className="border-t border-gray-700 pt-4 flex gap-1">
                    <span className="block text-black">{masterName}</span>
                    <span className='text-black'> / </span>
                    <span className="block text-[#9c0b35]"> {salonName}</span>
                </div>
            </div>
        </div>
    );
};

export default HomeFeedback;
