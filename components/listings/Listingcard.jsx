import { IconBaselineDensitySmall, IconBuildings, IconEdit, IconList, IconTrash } from '@tabler/icons-react'
import Image from 'next/image'
import React from 'react'
import list from '@/public/assets/list.svg'
import tenantsimage from '@/public/assets/tenants_image.svg';
import imageplacholder from '@/public/assets/imgeplaceholder.jpg';
function Listingcard(item) {
    return (
        <div className='bg-[#FFFFFF] rounded-[8px]'>
            <div className='px-4 py-2 flex items-center justify-between border-b border-[#D7D8D9]'>
                <p className='text-[#455A64] font-[600] text-[11px]'>
                    ID : {item.id_number}
                </p>
                <div className='flex gap-10'>
                    <button className='text-[#1D3A76] text-[12px] font-[600]'>
                        View Enquiries
                    </button>
                    <button className='text-[#1D3A76] text-[12px] font-[600]'>
                        + Advanced Details
                    </button>

                    <Image src={list} alt='list' className='h-5 w-5 mr-6' />
                </div>
            </div>
            <div className='grid grid-cols-12 w-full'>
                <div className=' flex flex-row col-span-6 h-full gap-3'>
                    <Image
                        src={item?.image || imageplacholder}
                        alt={"property"}
                        className="object-cover h-32 w-52 rounded-bl-[8px]"
                        height={100}
                        width={150}
                    />


                    {/* Text Content Section */}
                    <div className=" space-y-2 py-2">
                        <p className="text-[11px] font-[700] text-[#6d6c6c]">{item.cost}</p>
                        <p className=" flex-wrap text-[11px] font-[700] text-[#6d6c6c]">{item.land}</p>
                        <p className="text-[11px] font-[600] text-[#757575]">{item.area}<span className='pl-5'>Fully furnished</span></p>
                        <div className=" flex flex-row items-center justify-start gap-2 pt-2">
                            <Image
                                src={tenantsimage}
                                alt={"tenantsimage"}
                                className="object-cover h-4 w-4"
                                height={100}
                                width={100}
                            />
                            <p className='text-[12px] font-[400] text-[#1D3A76] pt-1'>{item.interested_tenants}</p>
                        </div>
                    </div>
                </div>
                <div className=' flex flex-col col-span-6 py-3 -ml-6 justify-between w-[110%]'>
                    <div className='flex gap-2 pr-4'>
                        <p className=" flex flex-col text-[11px] font-[400] text-[#6d6c6c] ">Last Added<span className='font-[600] block pt-2 text-[11px]'> {item.last_added_date || `12/07/2024`}</span></p>
                        <p className=" flex flex-col text-[11px] font-[400] text-[#6d6c6c] border-l-[0.09rem] border-r-[0.09rem] border-[#909090] px-3 mx-4 ">Expiry on<span className='font-[600] block pt-2 text-[11px]'> {item.expiry_date}</span></p>
                        <p className="text-[11px] font-[400] text-[#6d6c6c]">
                            Visibility
                            <span className="block font-[400] pt-2 text-[11px] text-[#BC405E]">
                                Low <span className="text-[#6d6c6c] font-[600]">(Freeplan)</span>
                            </span>
                        </p>
                        <p className='flex items-center justify-center text-[9px] font-[700] ml-16 text-[#ffffff] bg-[#038AC9] h-4 px-2 rounded-l-full rounded-r-full'>
                            Active
                        </p>
                    </div>
                    <div className='flex items-center justify-start gap-4 '>
                        <button className='flex items-center justify-center text-[10px] font-[700] text-[#ffffff] bg-[#038AC9] h-5 px-3 rounded-l-full rounded-r-full gap-2'>
                            Edit<IconEdit size={14} stroke={1.5} />
                        </button>
                        <button className='flex items-center justify-center text-[10px] font-[700] text-[#ffffff]  bg-[#A5413F] h-5 px-3 rounded-l-full rounded-r-full gap-2'>
                            Delete<IconTrash size={14} stroke={1.5} />
                        </button>
                        <button className='py-1 h-7 rounded-[2px] flex flex-row items-center justify-center text-[#ffffff] px-4  bg-[#59788E]  text-[11px] font-[700] ml-3'>
                            View Analytics
                        </button>
                        <button className='py-1 h-7 rounded-[2px] flex flex-row items-center justify-center text-[#ffffff] px-4  bg-[#59788E]  text-[11px] font-[700]'>
                            Upgrade Now
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Listingcard