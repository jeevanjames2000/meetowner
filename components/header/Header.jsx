'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import logo from '@/public/assets/logo.png'
import Mainnavigation from './Mainnavigation';
import { usePathname } from 'next/navigation';
import { useUserDetails } from '../zustand/useUserDetails';
import addproperty from '@/public/assets/addproperty.svg'
import downloadapp_svg from '@/public/assets/downloadapp_svg.svg'
import login from '@/public/assets/login.svg'
import { IconHomePlus } from '@tabler/icons-react';
function Header() {
    const userInfo = useUserDetails((state) => state.userInfo);
    const isLogged = useUserDetails((state) => state.isLogged);
    const pathname = usePathname();
    const isActive = (path) => pathname === path;
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
        <div
            className={`h-[65px] 3xl:h-[120px] bg-[#F2F2F2] overflow-visible w-full py-2 transition-all duration-1000 shadow-xl flex flex-row justify-between items-center px-4 md:px-[4vw] lg:px-[6vw]  ${scrollY > 120 ? 'fixed top-0 z-50' : ''}`}
        >
            <Link href="/dashboard">
                <Image src={logo} alt={'logo'} height={80} width={120} className='3xl:h-20 3xl:w-56 object-cover' />
            </Link>
            {
                isLogged ?
                    <>
                        <Mainnavigation />
                        <div>
                            {
                                pathname === '/addproperty' ? null : (
                                    <Link href="/addproperty" className='bg-[#1D3A76] flex flex-row items-center gap-2 p-2 rounded-md'>
                                        <IconHomePlus color='#fff' size={18} />
                                        <button className='text-white text-sm font-[700]'>Add Property</button>
                                    </Link>
                                )
                            }
                        </div>
                    </>
                    :
                    <div className="flex flex-row justify-start items-center gap-4">
                        <div className="hidden md:flex flex-row items-center justify-start gap-2 3xl:gap-4">
                            <Image src={downloadapp_svg} alt='downloadapp_svg' className='h-[16px] w-fit 3xl:h-9 3xl:w-fit object-cover' />
                            <Link href="/downloadapp" className="text-[#1D3A76] text-[12px] md:text-[12px] lg:text-sm 2xl:text-[16px]  3xl:text-[32px] font-medium font-sans">Download App</Link>
                        </div>
                        <div className="hidden md:flex">
                            <Link href="/addproperty" className="flex flex-row items-center justify-center gap-2 3xl:gap-4 p-2 rounded-md">
                                <Image src={addproperty} alt='addproperty' className='h-[22px] w-fit 3xl:h-12 3xl:w-fit object-cover mt-1' />
                                <button className="text-[#1D3A76] text-[12px] md:text-[12px] lg:text-sm 2xl:text-[16px]  3xl:text-[32px] font-medium font-sans">Add Property</button>
                            </Link>
                        </div>
                        <div>
                            <Link href="/" className="bg-[#1D3A76] flex flex-row items-center py-1 md:py-2 lg:py-2 3xl:py-6 px-2 md:px-4 lg:px-4 3xl:px-8 rounded-md 3xl:rounded gap-2 3xl:gap-2">
                                <Image src={login} alt='login' className='h-[16px] w-fit 3xl:h-9 3xl:w-fit object-cover' />
                                <button className="text-white text-[12px] md:text-[12px] lg:text-sm 2xl:text-[16px]  3xl:text-[32px] font-medium font-sans">Login</button>
                            </Link>
                        </div>
                    </div>

            }
        </div>
    )
}

export default Header;
