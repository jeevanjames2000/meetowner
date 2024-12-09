import {IconBaselineDensitySmall, IconBuildings, IconEdit, IconList, IconTrash } from '@tabler/icons-react'
import Image from 'next/image'
import React from 'react'

function Listingcard(item) {
    return (
        <div className=' bg-[#FFFFFF]'>
            <div className='px-4 py-2 flex items-center justify-between border-b border-[#D7D8D9]'>
                <p className='text-[#455A64] text-[12px]'>
                    ID:{item.id_number}
                </p>
                <div className=' flex  gap-3'>
                    <button className='text-[#1D3A76] text-[14px] font-[600]'>
                        View Enquiries
                    </button>
                    <button className='text-[#1D3A76] text-[14px] font-[600]'>
                        + Advanced Details
                    </button>

                    < IconBaselineDensitySmall size={18} />
                </div>
            </div>
            <div className='grid grid-cols-12  gap-4 w-full'>
                <div className=' flex flex-row col-span-6 h-full gap-2 '>

                    <Image
                        src={item.image}
                        alt={"property"}
                        className="object-cover h-32 w-44"

                    />


                    {/* Text Content Section */}
                    <div className=" space-y-1 py-3">
                        <p className="text-[12px] font-semibold text-[#6d6c6c]  ">{item.cost}</p>
                        <p className=" flex-wrap text-[12px] font-semibold text-[#6d6c6c] ">{item.land}</p>
                        <p className="text-[12px] font-light text-[#6d6c6c]">{item.area}</p>
                        <p className=" flex flex-row items-center justify-start text-[14px] font-light text-[#1D3A76] gap-2 pt-2"><IconBuildings />{item.interested_tenants}</p>
                    </div>
                </div>
                <div className=' flex flex-col col-span-6 py-3  gap-4'>
                    <div className='flex gap-2 pr-4'>
                        <p className=" flex flex-col text-[12px]  text-[#6d6c6c] ">Last Added<span className='font-bold block pt-2 text-[12px]'> {item.added_date}</span></p>
                        <p className=" flex flex-col text-[12px]  text-[#6d6c6c] border-l border-r border-[#909090] px-2 ">Expiry on<span className='font-bold block pt-2 text-[12px] '> {item.expiry_date}</span></p>
                        <p className="text-[12px] text-[#6d6c6c]">
                            Visibility
                            <span className="block font-[400] pt-2 text-[12px] text-[#BC405E]">
                                Low <span className="text-[#6d6c6c]">(Freeplan)</span>
                            </span>
                        </p>
                        <p className='flex items-center justify-center text-[12px]  ml-10 text-[#ffffff] bg-[#038AC9] h-7 px-6 rounded-l-full rounded-r-full'>
                               Active
                        </p>
                    </div>
                    <div className=' flex gap-4 pr-4  '>
                        <button className='  py-1 flex flex-row items-center justify-center text-[#ffffff] px-4  bg-[#038AC9] rounded-l-full rounded-r-full text-[12px] '>
                                  Edit<IconEdit size={16} />
                        </button>
                        <button className='  py-1 flex flex-row items-center justify-center text-[#ffffff] px-4  bg-[#A5413F] rounded-l-full rounded-r-full text-[12px] '>
                                 Delete<IconTrash size={16} />
                        </button>
                        <button className='  py-1 flex flex-row items-center justify-center text-[#ffffff] px-4  bg-[#59788E]  text-[12px] '>
                                 View Analytics
                        </button>
                        <button className='  py-1 flex flex-row items-center justify-center text-[#ffffff] px-4  bg-[#59788E]  text-[12px] '>
                                Upgrade Now
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Listingcard