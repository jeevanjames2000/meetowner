import Image from 'next/image'
import React from 'react'
import recommended_plan1 from '@/public/assets/enroll_package2.png'
import online_support from '@/public/assets/online_support.png'


function Recommendedplan() {
    return (
        <div>
            <p className=' bg-[#E2EAED] text-[24px] text-[#1D3A76] text-center font-bold py-3 w-full'>
                What awaits you on Meetowner.in
            </p>
            <div className=' grid grid-cols-1 md:grid-cols-2  items-center justify-center bg-[#FCFCF3] py-12 gap-16  px-48'>
                <div className=' col-span-1 flex flex-col items-center justify-center  border-2 rounded-[10px] border-[#909090] px-4 gap-4 py-6'>
                    <p className="font-[600] text-[#116D85] pb-4 text-[18px]">Enhancer of Visibility</p>
                    <Image src={recommended_plan1} alt={"recommended_plan1"} className="object-cover w-fit h-40" />
                    <p className="text-center text-[12px] text-[#6D6C6C] font-[400] space-y-2">
                        Ad packages to advertise your listings in the best places to attract more inquiries quickly.
                    </p>
                    <button className=' flex items-center justify-center px-4 py-2   rounded-md border-[0.09rem] border-[#699BA0] text-[#699BA0] text-[12px] hover:text-[#ffffff] hover:bg-[#699BA0]'>
                    See Recommended Plan
                    </button>
                </div>
                <div className=' col-span-1 flex flex-col items-center justify-center  border-2 rounded-[10px] border-[#909090] px-4 gap-4 py-6'>
                    <p className="font-[600] text-[#116D85] pb-4 text-[18px]">Enhancer of Visibility</p>
                    <Image src={online_support} alt={"online_support"} className="object-cover w-fit h-40" />
                    <p className="text-center  text-[12px] text-[#6D6C6C] font-[400] space-y-2">
                    A committed executive will filter your inquiries and tenant profiles.                    </p>
                    <button className=' flex items-center justify-center px-4 py-2   rounded-md border-[0.09rem] border-[#699BA0] text-[#699BA0] text-[12px] hover:text-[#ffffff] hover:bg-[#699BA0]'>
                    See Recommended Plan
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Recommendedplan