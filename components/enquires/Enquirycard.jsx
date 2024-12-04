import { IconMail, IconPhone } from '@tabler/icons-react'
import Image from 'next/image'
import React from 'react'


function Enquirycard(item) {
    return (
        <div className="grid grid-cols-12  gap-2   items-start justify-center w-full rounded-md bg-[#E2EAED] px-3 py-5">
            <div className=' col-span-6 flex  w-full space-x-3'>
                <Image
                    src={item.image}
                    alt={"enquiry_1"}
                    className="object-cover w-16 h-16  border-2 border-[#909090] rounded-full p-[0.05rem]"

                />
                <div className=' space-y-1'>
                    <p className='text-[12px] text-[#252525] font-[600]'>
                        {item.lakescape}
                    </p>
                    <p className='text-[10px] text-[#252525]'>
                        {item.id_number}
                    </p>
                    <div className=' space-x-1'>
                        <button className=" text-[#ffffff] text-[10px] bg-[#1D3A76] rounded-[2px] px-2 py-1 focus:outline-none" >
                            Favourites
                        </button>
                        <button className=" text-[#ffffff] text-[10px] bg-[#1D3A76] rounded-[2px] px-2 py-1 focus:outline-none" >
                            View contact
                        </button>
                        <button className=" text-[#ffffff] text-[10px] bg-[#0392D4] rounded-[2px] px-2 py-1 focus:outline-none" >
                            Contact CRM
                        </button>


                    </div>
                </div>

            </div>
            <div className=' col-span-2  flex flex-col  '>
                <p className='text-[12px] text-[#252525] font-[600]'>
                    Admin
                </p>
                <div className=' flex items-center justify-start text-[10px] text-[#252525] font-[600] pt-[8px]'>
                    <IconPhone size={16} className=' mr-2' />
                    <p>9343456789</p>
                </div>
                <div className=' flex items-center justify-start text-[10px] text-[#252525] font-[600]'>
                    <IconMail size={20} className=' mr-2' />
                    <p> admin@gmail.com </p>
                </div>
            </div>
            <div className=' flex flex-col col-span-4   w-full space-y-1 pl-4'>
                <p className='text-[12px] text-[#252525] font-[600]'>
                    {item.date}
                </p>
                <p className=' flex text-[11px] text-[#252525] font-[400]'>
                    {item.trade}
                </p>
                <p className=' flex flex-wrap text-[11px] text-[#252525] font-[400]'>
                    {item.location}
                </p>
                <div className=' flex flex-wrap gap-2'>
                    <div className=' flex flex-row items-center justify-center bg-[#1D3A76] rounded-l-full rounded-r-full px-2 py-1'>
                        <p className=' flex text-[10px] text-[#ffffff] font-[400] border-r border-[#ffffff] pr-1'>
                            Buildup Area
                        </p>
                        <p className=' flex text-[10px] text-[#ffffff] font-[400] pl-2'>
                            {item.area}
                        </p>
                    </div>
                    <p className=' flex flex-row items-center justify-center text-[10px] bg-[#1D3A76] text-white rounded-l-full rounded-r-full px-2 py-1'>
                        2 crore
                    </p>
                </div>
            </div>


        </div>
    )
}

export default Enquirycard