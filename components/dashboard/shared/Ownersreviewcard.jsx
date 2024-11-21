import { IconStarFilled } from '@tabler/icons-react'
import Image from 'next/image'
import React from 'react'

function Ownersreviewcard(item) {
    return (
        <div className="grid grid-cols-5 grid-rows-1 gap-4 w-full h-fit px-2 ">
            <div className='col-span-2 row-span-1 w-full '>
                <Image
                    src={item.image}
                    alt={"property"}
                    className="w-fit h-fit object-cover rounded-lg"


                />
            </div>
            <div className="space-y-1  col-span-3 row-span-1 w-full">

                <p className="text-[16px] font-[600] text-[#000000] leading-tight">
                    {item.owner_name}
                </p>

                <p className="text-[12px] font-[500] text-[#1D3A76]">
                    {item.review_headline}
                </p>
                <p className="text-[12px] font-[300] text-[#6d6c6c] pb-3">
                    {item.review}
                </p>
                <div className="flex">
                    {Array(4).fill().map((_, index) => (
                        <IconStarFilled  size={12} key={index} className="text-[#1D3A76] w-3 h-3" />
                    ))}
                </div>

            </div>
        </div>

    )
}

export default Ownersreviewcard