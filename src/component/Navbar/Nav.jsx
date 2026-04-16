"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { HiOutlineHome } from "react-icons/hi"; 
import { MdOutlineInsights } from "react-icons/md";
import { IoTimeOutline } from "react-icons/io5";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";

const Nav = () => {
    const pathname = usePathname(); 
    const [isOpen, setIsOpen] = useState(false);

    const linkStyle = (path) => 
        pathname === path 
        ? 'flex items-center gap-1 bg-[#2D4F44] text-white px-4 py-2 rounded-md transition' 
        : 'flex items-center gap-1 text-gray-600 px-4 py-2 hover:text-[#2D4F44] transition'; 

    const navLinks = [
        { name: 'Home', path: '/', icon: <HiOutlineHome /> },
        { name: 'Timeline', path: '/timeline', icon: <IoTimeOutline /> },
        { name: 'Stats', path: '/stats', icon: <MdOutlineInsights /> },
    ];

    return (
        <nav className='relative flex justify-center w-full py-4 shadow z-50 bg-white'>
            <div className='flex items-center justify-between w-[90%] md:w-[80%] mx-auto'>
                <div className="logo">
                    <h2 className='text-2xl font-extrabold text-[#182c26]'>
                        Keen<span className='text-[#326152]'>Keeper</span>
                    </h2>
                </div>

                <div className='md:hidden cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
                    <span className='text-2xl'>
                        {isOpen ? <RxCross2 /> : <RxHamburgerMenu />}
                    </span>
                </div>
                
                <div className="links hidden md:block">
                    <ul className='flex items-center gap-4'>
                        {navLinks.map((link) => (
                            <li key={link.path}>
                                <Link href={link.path} className={linkStyle(link.path)}>
                                    {link.icon} {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {isOpen && (
                <div className='absolute top-full left-0 w-full bg-white shadow-md md:hidden'>
                    <ul className='flex flex-col items-center gap-2 py-4'>
                        {navLinks.map((link) => (
                            <li key={link.path} className='w-[90%]' onClick={() => setIsOpen(false)}>
                                <Link href={link.path} className={`${linkStyle(link.path)} justify-center`}>
                                    {link.icon} {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Nav;