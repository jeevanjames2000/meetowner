import Image from 'next/image'
import React from 'react'



function Checkoutpropertywrappercard(item) {
    return (

        <div className="w-full flex flex-row border border-[#53c0ac] rounded-lg p-6 mt-8 gap-4">
        {/* Image Section */}
        <div className="w-[30%] h-32 relative">
            <Image
                src={item.image}
                alt={"property"}
                className="object-cover rounded-lg"
                fill
            />
        </div>
    
        {/* Text Content Section */}
        <div className="w-[70%] space-y-1">
            <p className="text-[16px] font-semibold text-[#6d6c6c] w-[80%]">{item.land}</p>
            <p className="text-[14px] font-light text-[#6d6c6c]">{item.area}</p>
            <p className="text-[14px] font-light text-[#6d6c6c] pb-3">{item.cost}</p>
    
            {/* Action Section */}
            <div className="flex flex-row items-center justify-between border-t border-t-[#6d6c6c] pt-3">
                <p className="text-[14px] font-light text-[#6d6c6c]">Plan upgrade required</p>
                <button
                    className="upgrade-btn bg-[#53c0ac] text-white py-1 px-3 rounded-lg text-sm hover:bg-[#53c0ac]/70 focus:outline-none"
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