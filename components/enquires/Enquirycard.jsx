import Image from 'next/image'
import React from 'react'


function Enquirycard(item) {
    return (
        <div className="grid grid-cols-12  gap-8   items-start  w-full rounded-md bg-[#E2EAED] px-3 py-5">
            <div className=' col-span-6 flex items-start w-full space-x-2'>
                <Image
                    src={item.image}
                    alt={"enquiry_1"}
                    className="object-cover w-20 h-20 rounded-lg"

                />
                <div className=''>
                    <p className='text-[12px] text-[#252525] font-[600]'>
                        {item.lakescape}
                    </p>
                    <p className='text-[12px] text-[#252525]'>
                        {item.id_number}
                    </p>

                </div>
            </div>

        </div>
    )
}

export default Enquirycard