import Image from 'next/image'
import React from 'react'
import priceplansftsartitech1 from '@/public/assets/priceplansfts-artitech1.png'
import priceplansftsartitech2 from '@/public/assets/priceplansfts-artitech2.png'

function Floorplanfour() {
    return (
        <div className='floorplan flex'>
            <div className='w-[50%] space-y-5'>
                <p className='text-[14px] text-[#492828] font-[600] underline underline-offset-8'>
                    Floor plan
                </p>
                <Image
                    src={priceplansftsartitech1}
                    alt="priceplansfts-artitech1"
                    className='w-full h-72 object-cover'
                />
            </div>
            <div className='w-[48%] pl-[10%] space-y-5'>
                <div className='flex gap-2'>
                    <p className='text-[14px] text-[#492828] font-[600] underline underline-offset-8'>
                        Price
                    </p>
                    <p className='text-[14px] text-[#492828] font-[700] '>₹ 93 L</p>
                </div>
                <div className='custom-shadow bg-[#FFFFFF] px-8 pb-2 rounded-lg'>
                    <div className='flex items-center justify-between'>
                        <p className='text-[24px] font-[600] text-[#492828]'>
                            TYPE
                        </p>
                        <p className='text-[48px] text-[#878787] font-[700]'>4</p>
                    </div>
                    <Image
                        src={priceplansftsartitech2}
                        alt="priceplansfts-artitech1"
                        className='w-full h-52 object-contain mx-auto '
                    />
                </div>
            </div>
        </div>
    )
}

export default Floorplanfour