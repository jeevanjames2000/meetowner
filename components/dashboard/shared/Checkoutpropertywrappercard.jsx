import Image from 'next/image'
import React from 'react'



function Checkoutpropertywrappercard(item) {
    return (

        <div className="w-full flex flex-col xs:flex-row border-[1.5px] border-[#699BA0] rounded-lg p-3 mt-6 gap-4">
        {/* Image Section */}
        <div className="w-full xs:w-[30%] h-32 2xl:h-auto relative">
            <Image
                src={item.image}
                alt={"property"}
                className="object-cover rounded-lg border-2 border-[#E2EAED]"
                fill
            />
        </div>
    
        {/* Text Content Section */}
        <div className="w-full xs:w-[70%] space-y-1">
            <p className="text-[16px] 2xl:text-[20px] 3xl:text-[22px] 4xl:text-[24px] font-[700] text-[#6d6c6c] w-[80%]">{item.land}</p>
            <p className="text-[14px] 2xl:text-[18px] 3xl:text-[20px] 4xl:text-[22px] font-[400] text-[#6d6c6c]">{item.area}</p>
            <p className="text-[14px] 2xl:text-[18px] 3xl:text-[20px] 4xl:text-[22px] font-[400] text-[#6d6c6c] pb-3">{item.cost}</p>
    
            {/* Action Section */}
            <div className="flex flex-row items-center justify-between border-t-[1.5px] border-t-[#E2EAED] pt-3">
                <p className="text-[14px] 2xl:text-[18px] 3xl:text-[20px] 4xl:text-[22px] font-[400] text-[#6d6c6c]">Plan upgrade required</p>
                <button
                    className="upgrade-btn bg-[#53c0ac] text-[#ffffff] text-[12px] 2xl:text-[16px] 3xl:text-[18px] 4xl:text-[20px] font-[700] py-1 px-3 rounded-[5px] hover:bg-[#53c0ac]/70 focus:outline-none"
                    onClick={() => upgradeNow()} // Make sure this function is defined
                >
                    Upgrade Now
                </button>
            </div>
        </div>
    </div>
    
    )
}

export default Checkoutpropertywrappercard