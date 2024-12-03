import Image from 'next/image'
import React from 'react'
import agreement1 from '@/public/assets/agreement1.png';
import { IconChevronRight } from '@tabler/icons-react';


function Uploadproperty() {
    return (
        <div>
            <div className="bg-white p-4 rounded-[10px]">
                <div className="flex gap-2">
                    <div className="w-[30%]">
                        <Image src={agreement1} alt="Upload Property" className="w-fit h-fit rounded-lg" />
                    </div>
                    <div className="w-[70%] space-y-1">
                        <p className="text-[12px] font-[600] text-[#6d6c6c]">Upload Property</p>
                        <p className="text-[12px] font-[400] text-[#6d6c6c]">
                            100% complete listing with specific details about the rooms gets you more leads
                        </p>
                    </div>
                </div>
                <button
                    className="flex items-center text-[#53C0AC] ml-auto h-7 px-4 text-[14px] font-[400] rounded-md bg-transparent hover:bg-[#e6f5f2] transition-all"
                >
                    Add Property
                    <IconChevronRight className="ml-2 w-4 h-4 text-[#53C0AC]" />
                </button>
            </div>
        </div>
    )
}

export default Uploadproperty