"use client"
import React, { useState } from 'react'
import trouble from '@/public/assets/trouble.svg'
import explore_packages from '@/public/assets/explore_packages.svg'
import Image from 'next/image'

import Forselltab from './tabs/Forselltab'
import Forrenttab from './tabs/Forrenttab'
import Forcommercial from './tabs/Forcommercial'
function Packagestabswrapper() {
    const [activetab, setActivetab] = useState("forselltab");
    const updateActiveTab = (value) => {
        setActivetab(value)
    }
    return (
        <div className='flex flex-col  gap-6 px-6 bg-[#ffffff] rounded-bl-[10px] rounded-br-[10px]'>
            <div className='flex flex-row items-center justify-between py-4 mt-8'>
                <p className='text-[26px] text-[#699BA0] font-[700]'>
                    GET 30% off Valid Till<span className='block text-center text-[#116D85]'>AUG - 15TH - 2024</span>
                </p>
                <div className="flex">
                    <button onClick={() => updateActiveTab("forselltab")}
                     className={`h-8 rounded-l-full text-[12px] font-[600] text-center px-6 
                     ${activetab === "forselltab" ? 'bg-[#FEFDF8] text-[#1D3A76] border border-[#1D3A76]' : 'text-[#909090]  border border-[#8F9194]'}`}>
                        For sell
                    </button>
                    <button
                        onClick={() => updateActiveTab('forrenttab')}
                        className={`h-8 text-[12px] text-center font-[600] px-6 
                       ${activetab === 'forrenttab' ? 'bg-[#FEFDF8] text-[#1D3A76] border border-[#1D3A76]' : 'text-[#909090] border border-[#8F9194]'}`}
                    >
                        For Rent
                    </button>

                    <button onClick={() => updateActiveTab('forcommercial')}
                     className={` h-8 rounded-r-full text-[12px]  text-center font-[600] px-6
                      ${activetab === "forcommercial" ? 'bg-[#FEFDF8] text-[#1D3A76] border border-[#1D3A76]' : 'text-[#909090] border border-[#8F9194]'}`}
                    >
                        For commercial
                    </button>
                </div>
            </div>
            {activetab === "forselltab" &&
                <Forselltab />}
            {activetab === "forrenttab" &&
                <Forrenttab />
            }
            {
                activetab === "forcommercial" &&
                <Forcommercial />
            }
            <div className='flex flex-row w-fit gap-4 pb-8'>
                <div className=' cursor-pointer  flex flex-col  items-center justify-center border-[1.5px] border-[#699BA0] rounded-[10px] px-3 pb-1 '>
                    <Image src={trouble} alt={"trouble"} className="object-cover p-2" />
                    <p className='text-[11px] font-bold text-[#699BA0]'>
                        Explore Commercial Pakages
                    </p>
                </div>
                <div className=' cursor-pointer  flex flex-col  items-center justify-center border-[1.5px] border-[#699BA0] rounded-[10px] px-3 pb-1 '>
                <Image src={explore_packages} alt={"explore_packages"} className="object-cover p-2" />
                <p className='text-[11px] font-bold text-[#699BA0]'>
                        Having a Trouble? Request a callback
                    </p>
                </div>
            </div>

        </div>

    )
}

export default Packagestabswrapper