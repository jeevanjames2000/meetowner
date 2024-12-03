import Image from 'next/image'
import React from 'react'
import enroll_package2 from '@/public/assets/enroll_package2.png'
import enroll_package1 from '@/public/assets/enroll_package1.png'


function Enrollpackages() {
    return (
        <div className='bg-[#FCFCF3] grid grid-cols-1 md:grid-cols-2 grid-rows-1 px-6 py-6 gap-10 '>
            <div className=' flex flex-col col-span-1 row-span-1 w-full h-full space-y-4'>
                <p className="text-[16px] text-[#6D6C6C] font-[400]">
                    <span className="font-[600] text-[#1D3A76]">Enroll</span> in one of our
                    <span className="font-[600] text-[#1D3A76]"> premium packages </span> to receive
                    <span className="font-[600] text-[#1D3A76]"> exclusive benefits </span> and sell or rent your
                    <span className="font-[600] text-[#1D3A76]"> property quickly</span>.
                </p>
                <p className="text-[16px] text-[#6D6C6C] font-[400]">
                    <span className="font-[600] text-[#1D3A76]">Promote your property</span> to more than several lakh home buyers on
                    <span className="font-[600] text-[#1D3A76]">Meetowner</span>
                </p>

                <ul className="list-disc pl-8 text-[14px] text-[#6D6C6C] font-[400] space-y-2">
                    <li>These packages are only applicable to residential listings. To view commercial packages, please go to the commercial tab.</li>

                    <li>Plans are not eligible for PG listings.</li>
                    <li>
                        The guarantee package is only available for listings with a rent of less than
                        <span className="font-[600] text-[#1D3A76]"> 50001</span>.
                    </li>
                </ul>
                <button className=" flex  items-center justify-center  bg-[#53C0AC]  text-[#ffffff]   h-11 w-fit  px-4 text-[20px] font-[400] rounded-md focus:outline-none ">
                    Upgrade Now
                </button>


            </div>
            <div className=' flex flex-col items-center justify-center col-span-1 row-span-1 w-full h-full'>
                <Image src={enroll_package2} alt={"enroll_package2"} className="object-cover h-32 w-72 p-2" />
                <Image src={enroll_package1} alt={"enroll_package1"} className="object-cover" />

            </div>
        </div>
    )
}

export default Enrollpackages