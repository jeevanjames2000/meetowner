import Image from 'next/image'
import React from 'react'
 import  benefits from '@/public/assets/benefits.png'

function Benefits() {
    return (
        <div className='flex flex-row  items-center justify-center bg-[#FCFCF3] pt-12 px-20 gap-12 rounded-[10px]'>
            <p className=' text-[26px] text-[#116D85] text-start font-bold  w-full'>
                What are your benefits?
            </p>
            <Image src={benefits} alt={"benefits"} className="object-cover h-80 " />
        </div>
    )
}

export default Benefits