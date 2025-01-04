import Image from 'next/image'
import React from 'react'
import my_profile from '@/public/assets/my_profile.png'
import { IconEdit } from '@tabler/icons-react'
import Myprofilemodal from './Myprofilemodal'

function Myprofile() {
    return (
        <div className='items-center justify-center  px-4 md:px-[4vw] lg:px-[6vw] grid grid-cols-12 w-full gap-[2%] py-6 md:py-12'>
            <div className="w-full col-span-12 sm:col-span-3 h-full py-5 space-y-[3px] md:space-y-[6px] bg-[#ffffff] rounded-[8px] flex flex-col items-center justify-center">
                <div className='relative'>
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
                <p className="bg-[#1D3A76] px-4 py-1 text-[#ffffff] text-[12px] md:text-[14px] 2xl:text-[16px] 3xl:text-[18px] 4xl:text[20px] font-[400] rounded-[6px]">
                    Builder
                </p>
            </div>
            <div className='flex flex-col md:flex-row pb-6 w-full col-span-12 sm:col-span-9 h-full bg-[#FFF] rounded-[8px] pt-5 px-4 space-y-[6px]'>
                <div className='flex flex-col space-y-3'>
                    <p className='text-[#1D3A76] font-[600] text-[12px] md:text-[14px]  2xl:text-[16px] 3xl:text-[24px] 4xl:text-[24px] 5xl:text-[24px]'>
                        Name :<span className='pl-1 text-[#252525]/70 font-[600]' >Alex Carey</span>
                    </p>
                    <p className='text-[#1D3A76] font-[600] text-[12px] md:text-[14px]  2xl:text-[16px] 3xl:text-[24px] 4xl:text-[24px] 5xl:text-[24px]'>
                        Phone Number :<span className='pl-1 text-[#252525]/70 font-[600]' >9876543210</span>
                    </p>
                    <p className='text-[#1D3A76] font-[600] text-[12px] md:text-[14px]  2xl:text-[16px] 3xl:text-[24px] 4xl:text-[24px] 5xl:text-[24px]'>
                        Email Address :<span className='pl-1 text-[#252525]/70 font-[600]'>alexharey@gmail.com</span>
                    </p>
                    <p className=' text-[#1D3A76] font-[600] text-[12px] md:text-[14px]  2xl:text-[16px] 3xl:text-[24px] 4xl:text-[24px] 5xl:text-[24px]'>
                        Address :<span className='inline-block pl-1 text-[#252525]/70 font-[600]'>Madhapur,Hyderabad,Telangana</span>
                    </p>
                    <p className='text-[#1D3A76] font-[600] text-[12px] md:text-[14px]  2xl:text-[16px] 3xl:text-[24px] 4xl:text-[24px] 5xl:text-[24px]'>
                        District :<span className='pl-1 text-[#252525]/70 font-[600]'>Hyderabad</span>
                    </p>
                    <p className='text-[#1D3A76] font-[600] text-[12px] md:text-[14px]  2xl:text-[16px] 3xl:text-[24px] 4xl:text-[24px] 5xl:text-[24px]'>
                        State :<span className='pl-1 text-[#252525]/70 font-[600]'>Telangana</span>
                    </p>
                </div>
                <Myprofilemodal />
            </div>
        </div>
    )
}

export default Myprofile