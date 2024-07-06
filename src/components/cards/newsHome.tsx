import Image from 'next/image';
import React from 'react';
import img from '../../../assets/Rectangle 4165.png'
import { FaCalendarAlt } from 'react-icons/fa';
import Link from 'next/link';

const NewsHome = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-72 bg-gray-100 rounded-2xl overflow-hidden shadow-md">
                <Image src={img} alt="News" />
                <div className="p-4">
                    <div className="flex gap-2">
                        <FaCalendarAlt className="text-[#9C0B35]" />
                        <p className="text-gray-600 text-xs">18 июня 2024 г.</p>
                    </div>
                    <p className="text-gray-800 text-lg my-2 font-bold">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <p className="text-gray-600 text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since...</p>
                    <Link className="text-[#9C0B35] no-underline text-sm" href="#">
                        Подробнее
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default NewsHome;