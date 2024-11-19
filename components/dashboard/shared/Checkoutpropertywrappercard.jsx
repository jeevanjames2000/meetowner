import Image from 'next/image'
import React from 'react'



function Checkoutpropertywrappercard(item) {
    return (

        <div className=' w-full flex flex-row border rounded-[10px] border-[#699BA0] p-5 mt-8 gap-4'>

            <div className="relative w-[30%] h-32 ">
                <Image
                    src={item.image}
                    alt={"property"}
                    className="w-full h-full object-cover rounded-lg"
                    layout="fill"

                />

            </div>

            <div className="space-y-1  w-[70%]">
                <p className="text-[16px] font-[600] text-[#6d6c6c]">
                    {item.land}
                </p>

                <p className="text-[14px] font-[300] text-[#6d6c6c]">
                    {item.area}
                </p>
                <p className="text-[14px] font-[300] text-[#6d6c6c] pb-3">
                    {item.cost}
                </p>
                <div className=" flex flex-row items-center  justify-between border-t border-t-[#6d6c6c] pt-3">
                    <p className="text-[14px] font-[300] text-[#6d6c6c]">
                        Plan upgrade required
                    </p>
                    <button
                        className="upgrade-btn bg-[#53c0ac] text-white py-1 px-3 rounded-lg text-sm hover:bg-[#53c0ac]/70 focus:outline-none "
                        onclick="upgradeNow()"
                    >
                        Upgrade Now
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Checkoutpropertywrappercard