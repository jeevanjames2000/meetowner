import { IconMail, IconPhone } from '@tabler/icons-react'
import React from 'react'

function Queries() {
    return (
        <div className="bg-[#ffffff]  p-6 rounded-lg space-y-8">
            <div className="grid grid-cols-5 grid-rows-1 gap-5 w-full  py-4 ">
                <div className='col-span-2 row-span-1 space-y-3 border rounded-lg p-6 border-[#699BA0] text-center '>
                    <p className="text-[20px] font-[700] text-[#6d6c6c] ">
                        Have Questions?
                    </p>
                    <p className="text-[12px] font-[300] text-[#6d6c6c]  px-6">
                        Explore our FAQ section for commonly asked questions
                    </p>
                    <button
                        className=" bg-[#53c0ac] text-white h-9 w-full  px-4 rounded-sm text-[14px] focus:outline-none "

                    >
                        Explore FAQ'S
                    </button>

                </div>
                <div className='col-span-3 row-span-1 w-full space-y-3 border rounded-lg p-6 border-[#699BA0] text-center '>
                    <p className="text-[20px] font-[700] text-[#6d6c6c] ">
                        Customer Support
                    </p>
                    <div className=' flex flex-row items-center justify-center'>
                    <IconPhone  size={20}/>
                    <p className="text-[12px] font-[300] text-[#6d6c6c] text-center  px-2">
                     +91 9121314151
                    </p>
                    </div>
                    <div className=' flex flex-row items-center justify-center'>
                    <IconMail size={20} />
                    <p className="text-[12px] font-[300] text-[#6d6c6c] text-center  px-2">
                    meetowner.in@gmail.com

                    </p>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default Queries