  "use client";
     

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { HiOutlineHome } from "react-icons/hi"; 
import { MdOutlineInsights } from "react-icons/md";
import { IoTimeOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

const Nav = () => {
    const pathname = usePathname(); 

    
    const linkStyle = (path) => 
        pathname === path 
        ? 'flex items-center gap-1 bg-[#2D4F44] text-white px-4 py-2 rounded-md transition' 
        : 'flex items-center gap-1 text-gray-600 px-4 py-2 hover:text-[#2D4F44] transition'; 

    return (
        <nav className='flex justify-center w-full py-4 shadow z-2'>
            <div className='flex items-center justify-between w-[90%] md:w-[80%] mx-auto'>
                <div className="logo">
                    <h2 className='text-2xl font-bold text-[#1a2e28]'>
                        Keen<span className='text-[#2D4F44]'>Keeper</span>
                    </h2>
                </div>


                <div className='md:hidden'><span><RxHamburgerMenu /></span></div>
                
                <div className="links hidden md:block">
                    <ul className='flex items-center gap-4'>
                        <li>
                            <Link href="/" className={linkStyle('/')}>
                                <HiOutlineHome /> Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/timeline" className={linkStyle('/timeline')}>
                                <IoTimeOutline />
                                                Timeline
                            </Link>
                        </li>
                        <li>
                            <Link href="/stats" className={linkStyle('/stats')}>
                                <MdOutlineInsights /> Stats
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
   


