import Image from 'next/image'
import React from 'react'
import guaranteed_enquiries from '@/public/assets/guaranteed_enquiries.png'


function Getgauranteedenquiries() {
  return (
    <div className=' grid grid-cols-3 md:grid-cols-12 items-center justify-between  bg-[#F4EBD7] h-fit w-full rounded-[10px] px-5 py-3  '>
                <div className=' col-span-6 flex flex-col gap-2'>
                    <p className='text-[12px] font-[700] text-[#5E7796]'>
                        Get Guaranteed <span className=' text-[#1D3A76] text-[12px] font-[700]'>THIRTY ENQUIRIES  </span>
                    </p>
                    <p className='text-[10px] font-[600] text-[#727272] '>
                        With Owner Packages
                    </p>
                    <div className=' flex gap-2'>
                        <button
                            className="bg-[#53c0ac] text-white px-6 py-1 text-[16px] font-[700] rounded-lg 
                   focus:outline-none"
                        >
                            Upgrade Now
                        </button>
                        <button
                            className="text-[#5E7796] px-6 py-1 text-[12px] font-[600] 
                   focus:outline-none"
                        >
                            View more
                        </button>
                    </div>

                </div>

                <div className='col-span-6 h-full w-full '>
                    <Image src={guaranteed_enquiries} alt={"guaranteed_enquiries"} className=" ml-auto  object-cover h-28 w-40" />
                </div>
            </div>
  )
}

export default Getgauranteedenquiries