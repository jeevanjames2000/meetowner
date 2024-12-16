import Image from 'next/image'
import React from 'react'
import agreement1 from '@/public/assets/agreement1.png';
import { IconChevronRight } from '@tabler/icons-react';


function Uploadproperty() {
    return (

        <div className="bg-[#FFFFFF] p-4 pt-9 rounded-md">
            <div className="flex gap-4">
                <div className="w-[38%] h-full border-[2px] border-[#909090] rounded-md">
                    <Image src={agreement1} alt="Upload Property" className="w-[110px] h-[110px] object-cover py-3 px-2" />
                </div>
                <div className="w-[62%] space-y-2">
                    <p className="text-[16px] font-[700] text-[#6d6c6c]">Upload Property</p>
                    <p className="text-[12px] font-[400] text-[#6d6c6c]">
                        100% complete listing with specific details about the rooms gets you more leads
                    </p>
                    <button
                        className="flex items-center text-[#699BA0] ml-auto h-7 py-1 text-[11px] font-[700] rounded-md focus:outline-none bg-transparent hover:bg-[#e6f5f2] transition-all"
                    >
                        Add property
                        <div className="bg-[#699BA0] h-3 w-3 flex items-center justify-center rounded-full ml-2">
                            <IconChevronRight color="#ffffff" stroke={2} className="w-3 h-3" />
                        </div>
                    </button>
                </div>
            </div>
        </div>

    )
}

export default Uploadproperty