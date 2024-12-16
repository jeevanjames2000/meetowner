import Image from 'next/image'
import find_planner from '@/public/assets/find_planner.png'
import React from 'react'

function Planfinder() {
    return (
        <div className='bg-[#F4EBD7] w-full h-fit flex flex-row rounded-[10px] pl-5 pt-5 gap-2'>
            <Image
                src={find_planner}
                alt={"find_planner"}
                className="w-[30%] h-full object-cover rounded-lg"


            />
            <div className=' w-full flex flex-row items-center justify-between px-10'>
                <div className="space-y-1 ">
                    <p className="text-[12px] font-[700] text-[#6d6c6c]">
                        Not sure which Package is best for you?
                    </p>

                    <p className="text-[11px] font-[400] text-[#6d6c6c]">
                        Let us help you out with our interactive plan finder
                    </p>
                </div>
                <button
                    className="upgrade-btn bg-[#53c0ac] text-[#ffffff] text-[12px] font-[700] py-1 px-3 rounded-[5px]  hover:bg-[#53c0ac]/70 focus:outline-none"
                  
                >
                   Find my plan
                </button>
            </div>


        </div>
    )
}

export default Planfinder