import Image from 'next/image'
import find_planner from '@/public/assets/find_planner.png'
import React from 'react'

function Planfinder() {
    return (
        <div className='bg-[#F4EBD7] w-full flex flex-row rounded-[10px] items-center p-5 gap-2'>
            <div className='w-[30%]'>
                <Image
                    src={find_planner}
                    alt={"find_planner"}
                    className="h-full object-cover rounded-lg"
                />
            </div>
            <div className='w-[70%]'>
                <div className='flex flex-row items-center gap-1'>
                    <div className="space-y-1 w-[75%] ">
                        <p className="text-[25px] font-[700] text-[#6d6c6c]">
                            Not sure which Package is best for you?
                        </p>

                        <p className="text-[14px] font-[400] text-[#6d6c6c]">
                            Let us help you out with our interactive plan finder
                        </p>
                    </div>
                        <button
                            className="w-[25%] mr-3 bg-[#53c0ac] text-[#ffffff] text-[14px] font-[700] py-1 px-1 rounded-[5px]  hover:bg-[#53c0ac]/70 focus:outline-none"
                        >
                            Find plan
                        </button>
                </div>
            </div>
        </div>
    )
}

export default Planfinder