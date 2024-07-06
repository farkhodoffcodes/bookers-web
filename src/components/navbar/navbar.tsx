"use client"
import React, { useState, useEffect } from 'react';
import { FaGlobe } from 'react-icons/fa';
import logo from '../../assets/logos/logo.png';
import Button from '../button/button';
import { IoIosArrowDown, IoIosMenu } from "react-icons/io";
import Image from 'next/image';
import DropdownMenu from '../dropdown/DropdownMenu';
import { useTranslation } from 'react-i18next';
import { ImCancelCircle } from "react-icons/im";

const Navbar = () => {
    const { t } = useTranslation();
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`${scrolled ? 'bg-gray-800 shadow-lg fixed top-0 left-0 w-full flex items-center justify-between px-20 py-4 text-white transition-all duration-300 z-50 ' : 'bg-[#21212E] fixed top-0 left-0 w-full flex items-center justify-between px-20 py-4 text-white transition-all duration-300 z-50 '}`}>
            <div className="flex flex-col items-center gap-1">
                <Image src={logo} alt="bookers logo" className="h-13 w-7" />
                <span className="ml-2 font-[10px]">{t("booker")}</span>
            </div>
            <div className="hidden md:flex space-x-6">
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
                </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
                <div>
                    <DropdownMenu />
                </div>
                <div>
                    <Button title='Войти / Регистрация' />
                </div>
            </div>
            <div className="flex md:hidden items-center">
                <button onClick={toggleMenu}>
                    <IoIosMenu className="text-2xl" />
                </button>
            </div>
            {isOpen && (
                <div className="fixed inset-0 bg-gray-900 z-50 flex flex-col items-center justify-center">
                    <button onClick={toggleMenu} className="absolute top-4 right-4 text-2xl">
                        <ImCancelCircle className='text-[#9C0B35]'/>
                    </button>
                    <div className="flex flex-col items-center space-y-4">
                        <button className="text-xl" onClick={toggleMenu}>
                            Bookers
                        </button>
                        <button className="text-xl" onClick={toggleMenu}>
                            Бронирование
                        </button>
                        <button className="text-xl" onClick={toggleMenu}>
                            Партнерство
                        </button>
                        <DropdownMenu />
                        <Button title='Войти / Регистрация' />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Navbar;