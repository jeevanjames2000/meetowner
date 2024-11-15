'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import logo from '@/public/assets/logo.png'
import Mainnavigation from './Mainnavigation';
import { IconHomePlus } from '@tabler/icons-react';
function Header() {
    return (
        <>
            <div className='h-[65px] bg-[#F2F2F2] w-full py-3 shadow-lg px-[80px]'>
                <div className="flex flex-row justify-between items-center">
                    <Link href="/dashboard">
                        <Image src={logo} alt={'logo'} height={100} width={120} />
                    </Link>
                    <Mainnavigation />
                    <div className='bg-[#1D3A76] flex flex-row items-center gap-2 p-2 rounded-md'>
                        <IconHomePlus color='#fff' size={18} />
                        <button className='text-white text-sm font-medium'>Add Property</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;
