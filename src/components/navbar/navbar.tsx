"use client"
import React from 'react';
import { FaGlobe } from 'react-icons/fa'; // Example for globe icon, adjust as needed
import logo from '../../assets/logos/logo.png';
import Button from '../button/button';
import { IoIosArrowDown } from "react-icons/io";
import Image from 'next/image';
import DropdownMenu from '../dropdown/DropdownMenu';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
    const {t } = useTranslation()
    return (
        <div className="flex items-center justify-between px-20 py-4 bg-gray-900 text-white">
            <div className="flex flex-col items-center gap-1">
                <Image src={logo} alt="bookers logo" className="h-13 w-7" />
                <span className="ml-2 font-[10px]">{t("booker")}</span>
            </div>
            <div className="flex space-x-6">
                <div className="relative group">
                    <button className="flex items-center gap-3">
                        Bookers
                        <IoIosArrowDown />
                    </button>
                </div>
                <div className="relative group">
                    <button className=" flex items-center gap-3">
                        Бронирование
                        <IoIosArrowDown />
                    </button>
                </div>
                <div className="relative group">
                    <button className=" flex items-center gap-3">
                        Партнерство
                        <IoIosArrowDown />
                    </button>
                    {/* Dropdown menu */}
                </div>
            </div>
            <div className="flex items-center space-x-4">
                <div>
                    <DropdownMenu />
                </div>
                <div>
                    <Button title='Войти / Регистрация' />
                </div>
            </div>
        </div>
    );
}

export default Navbar;
