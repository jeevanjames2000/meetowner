'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import logo from '@/public/assets/logo.png'
import Mainnavigation from './Mainnavigation';
import { IconHomePlus } from '@tabler/icons-react';
import { motion } from 'framer-motion'
function Header() {
    const [scrollY, setScrollY] = useState(0);
    // Update scroll position on page scroll
    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        // Attach scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Cleanup event listener on unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{
                opacity: scrollY > 120 ? 1 : 1,
                y: scrollY > 120 ? 0 : 8,
                boxShadow: scrollY > 120 ? '0px 4px 8px rgba(0, 0, 0, 0.1)' : 'none'
            }}
            transition={{ duration: 0.3 }}
            className={`h-[65px] bg-[#F2F2F2] w-full py-2 px-[80px] transition-all duration-1000 ${scrollY > 120 ? 'fixed top-0 z-50 shadow-lg' : ''}`}
        >
            {/* <div className='h-[65px] bg-[#F2F2F2] w-full py-3 shadow-lg px-[80px]'> */}
            <div className="flex flex-row justify-between items-center">
                <Link href="/dashboard">
                    <Image src={logo} alt={'logo'} height={100} width={120} />
                </Link>
                <Mainnavigation />
                <Link href="/addproperty" className='bg-[#1D3A76] flex flex-row items-center gap-2 p-2 rounded-md'>
                    <IconHomePlus color='#fff' size={18} />
                    <button className='text-white text-sm font-medium'>Add Property</button>
                </Link>
            </div>
            {/* </div> */}
        </motion.div>
    )
}

export default Header;
