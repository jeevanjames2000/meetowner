import Image from 'next/image'
import React from 'react'
import estimate_property from '@/public/assets/estimate_property.png';
import { IconChevronRight } from '@tabler/icons-react';


function Propertyvaluecalculator() {
    return (
        <div>
            <div className="bg-[#FFFFFF] p-4 rounded-[10px]">
                <div className="flex gap-4">
                    <div className="w-[40%] h-full border-[2px] border-[#909090] rounded-[10px]">
                        <Image src={estimate_property} alt="Property Value Calculator" className="w-[28] h-24 object-cover py-3 px-2" />
                    </div>
                    <div className="w-[60%] space-y-1">
                        <p className="text-[12px] font-[700] text-[#6d6c6c]">Property Value Calculator</p>
                        <p className="text-[10px] font-[400] text-[#6d6c6c]">Calculate the right value of your property</p>
                        <button className="flex items-center text-[#699BA0] ml-auto h-7 py-1 text-[11px] font-[700] rounded-md focus:outline-none bg-transparent hover:bg-[#e6f5f2] transition-all"
                        > Add property
                            <div className="bg-[#699BA0] h-3 w-3 flex items-center justify-center rounded-full ml-2">
                                <IconChevronRight color="#ffffff" stroke={2} className="w-3 h-3" />
                            </div>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Propertyvaluecalculator