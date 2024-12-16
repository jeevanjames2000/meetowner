import { IconMail, IconPhone } from '@tabler/icons-react'
import Image from 'next/image'
import React from 'react'
function Matchingtenantcard(item) {
  return (
  
        <div className="grid grid-cols-12 items-start gap-3 w-full rounded-[10px] border-[1px] border-[#1d3a7652] bg-[#E2EAED] px-2 py-[10px]">
            <div className='col-span-6 flex w-full space-x-2 pt-4'>
                <Image
                    src={item.image}
                    alt={"enquiry_1"}
                    className="object-cover w-16 h-16  border-2 border-[#909090] rounded-full p-[0.05rem]"
                />
                <div className=' space-y-1'>
                    <p className='text-[11px] text-[#252525] font-[700]'>
                        {item.lakescape}
                    </p>
                    <p className='text-[9px] text-[#252525] font-[600]'>
                        {item.id_number}
                    </p>
                    <div className=' space-x-1'>
                        <button className=" text-[#ffffff] text-[9px] bg-[#1D3A76] font-[600] rounded-[5px] px-2 py-1 focus:outline-none" >
                            Favourites
                        </button>
                        <button className=" text-[#ffffff] text-[9px] bg-[#1D3A76] font-[600] rounded-[5px] px-2 py-1 focus:outline-none" >
                            View contact
                        </button>
                        <button className=" text-[#ffffff] text-[9px] bg-[#0392D4] font-[600] rounded-[5px] px-2 py-1 focus:outline-none" >
                            Contact CRM
                        </button>


                    </div>
                </div>

            </div>
            <div className='col-span-2 flex flex-col items-center justify-center pt-4'>
                <p className='text-[11px] text-[#252525] font-[700]'>
                    Admin
                </p>
                <div className='flex items-center justify-start text-[9px] text-[#252525] font-[700] pt-2 gap-[4px]'>
                    <IconPhone size={16}/>
                    <p>+91 934 345 6789</p>
                </div>
                <div className='flex items-center justify-start text-[9px] text-[#252525] font-[700] gap-[4px] leading-tight'>
                    <IconMail size={16}/>
                    <p> admin@gmail.com </p>
                </div>
            </div>
            <div className=' flex flex-col col-span-4 w-full space-y-1 pl-6'>
                <p className='text-[11px] text-[#252525] font-[700]'>
                    {item.date}
                </p>
                <p className=' flex text-[10px] text-[#252525] font-[600]'>
                    {item.trade}
                </p>
                <p className=' flex flex-wrap text-[9px] text-[#252525] font-[400]'>
                    {item.location}
                </p>
                <div className=' flex flex-wrap gap-1'>
                    <div className=' flex flex-row items-center justify-center bg-[#1D3A76] rounded-l-full rounded-r-full px-2 py-1'>
                        <p className=' flex text-[9px] text-[#ffffff] font-[600] border-r border-[#ffffff] pr-1'>
                            Buildup Area
                        </p>
                        <p className=' flex text-[9px] text-[#ffffff] font-[600] pl-[2px]'>
                            {item.area}
                        </p>
                    </div>
                    <p className=' flex flex-row items-center justify-center text-[9px] font-[600] bg-[#1D3A76] text-white rounded-l-full rounded-r-full px-3 py-[3px]'>
                        {item.price}
                    </p>
                </div>
            </div>
        </div>
    )
  }

export default Matchingtenantcard