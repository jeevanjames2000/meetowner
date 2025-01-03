import Image from 'next/image'
import React from 'react'
import my_profile from '@/public/assets/my_profile.png'
import Myprofiletab from './tabs/Myprofiletab'
import { IconEdit } from '@tabler/icons-react'

function Myprofile() {
    return (
        <div className=' flex items-center justify-center  px-4 md:px-[4vw] lg:px-[6vw]'>
            <div className=' grid grid-cols-12 w-full gap-[2%] pt-12'>
                <div className="w-full col-span-3 h-full py-5 space-y-[6px] bg-[#ffffff] rounded-[8px]">
                    <div className=' flex flex-col h-full w-full items-center justify-center gap-1'>
                        <div className=' relative'>
                            <Image
                                src={my_profile}
                                alt='my_profile'
                                className='h-40 w-40 rounded-full border border-[#AEAEAE]/40 object-cover relative'
                            />
                            <button className='absolute bottom-2 right-2 border-[#AEAEAE] border-[1px] bg-[#fff] rounded-full p-1 '><IconEdit color='#1D37A6' size={18} /></button>
                        </div>
                        <p className='text-[#252525] pt-2 text-[18px] 2xl:text-[16px] 3xl:text-[18px] 4xl:text[20px] font-bold '>
                            Alex Carey
                        </p>
                        <p className="bg-[#1D3A76] px-4 py-1 text-[#ffffff] text-[14px] 2xl:text-[16px] 3xl:text-[18px] 4xl:text[20px] font-[400] rounded-[6px]">
                            Builder
                        </p>
                    </div>
                </div>
                <div className="w-full col-span-9 h-full bg-[#FFF] rounded-[8px] pt-5 px-4 space-y-[6px]">
                    <Myprofiletab />
                </div>
            </div>
        </div>
    )
}

export default Myprofile