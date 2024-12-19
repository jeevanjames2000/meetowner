'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import logo from '@/public/assets/logo.png'
import Mainnavigation from './Mainnavigation';
import { usePathname } from 'next/navigation';
import { useUserDetails } from '../zustand/useUserDetails';
import addproperty from  '@/public/assets/addproperty.svg'
import downloadapp_svg from '@/public/assets/downloadapp_svg.svg'
import login from '@/public/assets/login.svg'
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
            className={`h-[65px] bg-[#F2F2F2] overflow-visible w-full py-2 transition-all duration-1000  ${scrollY > 120 ? 'fixed top-0 z-50' : ''}`}
        >
            <div className="flex flex-row justify-between items-center shadow-xl py-2 bg-[#F2F2F2] px-4 md:px-[4vw] lg:px-[6vw]">
                <Link href="/dashboard">
                    <Image src={logo} alt={'logo'} height={80} width={120} />
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
                            <div className="hidden md:flex flex-row items-center justify-start gap-2">
                              <Image src={downloadapp_svg} alt='downloadapp_svg' className='h-[16px] w-fit'/>
                                <Link href="/downloadapp" className="text-[#1D3A76] text-sm font-medium font-sans">Download App</Link>
                            </div>
                            <div className="hidden md:flex">
                                <Link href="/addproperty" className="flex flex-row items-center justify-start gap-2 p-2 rounded-md">
                                   <Image src={addproperty} alt='addproperty' className='h-[22px] w-fit'/>
                                    <button className="text-[#1D3A76] text-sm font-medium font-sans">Add Property</button>
                                </Link>
                            </div>
                            <div>
                                <Link href="/" className="bg-[#1D3A76] flex flex-row items-center py-1 md:py-2 px-2 md:px-4 rounded-md">
                                <Image src={login} alt='login' className='h-[16px] w-fit]'/>
                                <button className="text-white text-[12px]md:text-sm font-medium font-sans">Login</button>
                                </Link>
                            </div>
                        </div>

                }
            </div>
        </div>
    )
}

export default Header;
