import Image from 'next/image'
import find_planner from '@/public/assets/find_planner.png'
import React from 'react'

function Planfinder() {
    return (
        <div className=' bg-[#F4EBD7] w-full h-fit flex flex-row   rounded-[10px] pl-5 pt-5 gap-2'>
            <Image
                src={find_planner}
                alt={"find_planner"}
                className="w-[30%] h-full object-cover rounded-lg"


            />
            <div className=' w-full flex flex-row items-center justify-between px-10'>
                <div className="space-y-1 ">
                    <p className="text-[16px] font-[600] text-[#6d6c6c]">
                        Not sure which Package is best for you?
                    </p>

                    <p className="text-[14px] font-[300] text-[#6d6c6c]">
                        Let us help you out with our interactive plan finder
                    </p>
                </div>
                <button
                    className=" bg-[#53c0ac] text-white py-1 px-3 rounded-lg text-sm hover:bg-[#53c0ac]/70 focus:outline-none "

                >
                    Find My Plan
                </button>
            </div>


        </div>
    )
}

export default Planfinder