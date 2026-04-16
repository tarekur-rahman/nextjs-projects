import React from 'react';

const Footer = () => {
    return (
        <div className='bg-[#244D3F] text-center '>
            <div className='py-10 space-y-5 text-center border border-x-0 border-t-0  border-b-gray-500 w-[90%] lg:w-[80%] mx-auto'>
                <h1 className='text-3xl md:text-5xl text-center font-bold text-white'>KeenKeeper</h1>
                <p className='text-center text-gray-200'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>

                <div className="social mt-10">
                    <h2 className='text-white font-bold'>Social Links</h2>
                    <div className="icon flex items-center justify-center mt-5 gap-5 text-center">
                        <img className='text-white h-10 w-10' src="/facebook.png" alt="" />
                        <img className='text-white h-10 w-10' src="/instagram.png" alt="" />
                        <img className='text-white h-10 w-10' src="/twitter.png" alt="" />

                    </div>
                </div>
            </div>

            <div className='w-[90%] lg:w-[80%] mx-auto flex flex-col flex-col-reverse md:flex-row md:flex  md:justify-between py-10'>
                <div><p className='text-gray-300'>© 2026 KeenKeeper. All rights reserved. Developed by Tarekur Rahman</p></div>
                <div className='space-y-2 md:flex justify-between gap-5'>
                    <p className='text-gray-300 '>Privacy Policy</p>
                    <p className='text-gray-300'>Terms & Condition</p>
                    <p className='text-gray-300 pb-3 md:pb-0'>Cookie Policies</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;