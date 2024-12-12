import React from 'react'

import Image from 'next/image'
import { IconChevronRight } from '@tabler/icons-react'

function Agreementcard(item) {
    return (
        <div className=' bg-[#ffffff] p-4 space-y-1 rounded-[10px]'>
            <div className="grid grid-cols-5 grid-rows-1 gap-5 w-full h-fit   ">
                <div className='col-span-2 row-span-1 w-full '>
                    <Image
                        src={item.image}
                        alt={"property"}
                        className="w-fit h-fit object-cover  rounded-lg"
                    />
                </div>
                <div className="space-y-3 col-span-3 row-span-1 w-full">
                    <p className="text-[12px] font-[600] text-[#6d6c6c] leading-tight">
                        {item.online_agreement}
                    </p>
                    <p className="text-[12px] font-[400] text-[#6d6c6c]">
                        {item.description}
                    </p>
                </div>
            </div>
         
                <button
                    className="flex items-center text-[#53C0AC]  ml-auto h-7 py-1 px-4 text-[14px] font-[400] rounded-md focus:outline-none bg-transparent hover:bg-[#e6f5f2] transition-all"
                >
                    Create agreement
                    <IconChevronRight className="ml-2 w-4 h-4 text-[#53C0AC]" />
                </button>
           
       </div>

    )
}

export default Agreementcard