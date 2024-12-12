import Image from 'next/image'
import React from 'react'
import operate_1 from '@/public/assets/operate_1.png'
import operate_2 from '@/public/assets/operate_2.png'
import operate_3 from '@/public/assets/operate_3.png'
import operate_4 from '@/public/assets/operate_4.png'



function Operates() {
    return (
        <div className='flex flex-row  items-center   bg-[#FCFCF3] py-12 px-20 w-full gap-24 '>
            <p className=' text-[32px] text-[#116D85] text-start font-bold  w-[34%]'>
                How It Operates ?
            </p>
            <div className=' grid grid-cols-1 md:grid-cols-2 grid-rows-2 w-[70%] gap-6'>
                <div className='col-span-1 row-span-1 flex flex-row items-center gap-16  '>
                    <p className='flex items-center  justify-center text-[14px] font-bold p-3 border-2 border-[#1D3A76] text-[#1D3A76] rounded-full  h-6 w-6'>
                        1
                    </p>
                    <div className=' '>
                        <Image src={operate_1} alt={"operate_1"} className="object-contain h-36 w-full  " />
                        <p className="ext-center text-[14px] font-[400] text-[#116D85] space-y-2 pt-4">
                            Upload your property
                        </p>
                    </div>

                </div>
                <div className='col-span-1 row-span-1 flex flex-row items-center gap-16  '>
                    <p className='flex items-center  justify-center text-[14px] font-bold p-3 border-2 border-[#1D3A76] text-[#1D3A76] rounded-full  h-6 w-6'>
                        2
                    </p>
                    <div className=' '>
                        <Image src={operate_2} alt={"operate_2"} className="object-contain h-36 w-full  " />
                        <p className="ext-center text-[14px] font-[400] text-[#116D85] space-y-2 pt-4">
                            Choose a package
                        </p>
                    </div>
                </div>
                <div className='col-span-1 row-span-1 flex flex-row items-center gap-16  '>
                    <p className='flex items-center  justify-center text-[14px] font-bold p-3 border-2 border-[#1D3A76] text-[#1D3A76] rounded-full  h-6 w-6'>
                        3
                    </p>
                    <div className=' '>
                        <Image src={operate_3} alt={"operate_3"} className="object-contain h-32 w-full  " />
                        <p className="ext-center text-[14px] font-[400] text-[#116D85] space-y-2 pt-4">
                            Property is advertised to attract endless inquiries.

                        </p>
                    </div>
                </div>
                <div className='col-span-1 row-span-1 flex flex-row items-center gap-16  '>
                    <p className='flex items-center  justify-center text-[14px] font-bold p-3 border-2 border-[#1D3A76] text-[#1D3A76] rounded-full  h-6 w-6'>
                        4
                    </p>
                    <div className=' '>
                        <Image src={operate_4} alt={"operate_4"} className="object-contain h-32 w-full  " />
                        <p className="ext-center text-[14px] font-[400] text-[#116D85] space-y-2 pt-4">
                            Only the most relevant inquiries  are filtered out by a dedicated RM for you.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Operates