import Image from 'next/image'
import React from 'react'
import trouble from '@/public/assets/trouble.svg'
import explore_packages from '@/public/assets/explore_packages.svg'
function Packagestabswrapper() {
    return (
        <div className=' flex flex-col  gap-6 px-6 '>
            <div className='flex flex-row items-center justify-between py-4'>
                <p className='text-[16px] text-[#1D3A76]'>
                    GET 30% off Valid Till AUG - 15TH - 2024
                </p>
                <div className=' flex flex-row items-center justify-center text-[14px]  border border-[#909090]   h-9  gap-2'>
                    <div className='  cursor-pointer text-center px-3'>
                        For sell
                    </div>
                    <div className=' cursor-pointer text-center px-3 border  border-[#909090]  border-t-0 border-b-0'>
                        For rent
                    </div>
                    <div className='cursor-pointer text-center px-3'>
                        For commercial
                    </div>
                </div>
            </div>
            <div className=' flex flex-basis pt-6'>
                <div className=' basis-[28%] pt-10'>
                    <div className="text-[#6D6C6C] text-[14px] font-[600] space-y-1 ">
                        <p>Non-Commercial</p>
                        <p>Number Of Listings</p>
                        <p>Response Rate</p>
                        <p>Position On Search</p>
                        <p>Buyers Visibility</p>
                        <p>Verified Tag</p>
                        <p>Visibility on Best Details</p>
                        <p>Visibility on Latest Details</p>
                        <p>Land Page AD</p>
                        <p>Land Page Banner</p>
                        <p>Listings Page Small ADS</p>
                        <p>Dedicated Agent Support</p>
                        <p>Creatives</p>
                        <p>Listing Support</p>
                        <p>Meta ADS</p>
                        <p>Prime Promotion</p>
                        <p>CRM</p>
                    </div>

                </div>
                <div className='relative flex basis-[72%] w-full gap-4'>
                    <div className=' basis-[25%]  border  border-[#909090] rounded-[10px] px-4 py-3'>
                        <p className=' text-[14px] text-center font-[600] text-[#1D3A76] underline underline-offset-4 '>
                            Free listing
                        </p>
                        <div className='text-[#6D6C6C] text-center  text-[14px] font-[400] space-y-1 pt-2'>
                            <p >1 Month</p>
                            <p >25</p>
                            <p >2x More</p>
                            <p >Low</p>
                            <p >Limited</p>
                            <p >No</p>
                            <p >No</p>
                            <p >No</p>
                            <p >No</p>
                            <p >No</p>
                            <p >No</p>
                            <p >No</p>
                            <p >No</p>
                            <p >No</p>
                            <p >No</p>
                            <p >No</p>
                            <p >No</p>
                        </div>

                        <button className=" flex mx-auto mt-4 bg-[#699BA0]  text-[#ffffff]   h-7 py-1 px-4 text-[14px] font-[400] rounded-md focus:outline-none ">
                            Get it Now
                        </button>

                    </div>
                    <div className=' basis-[25%]  border  border-[#909090] rounded-[10px] px-4 py-3'>
                        <p className=' text-[14px] text-center font-[600] text-[#1D3A76] underline underline-offset-4 '>
                            Basic
                        </p>
                        <div className='text-[#6D6C6C] text-center  text-[14px] font-[400] space-y-1 pt-2'>
                            <p >120 days</p>
                            <p >250</p>
                            <p >10x More</p>
                            <p >Low</p>
                            <p >Limited</p>
                            <p >No</p>
                            <p >No</p>
                            <p >yes</p>
                            <p >yes</p>
                            <p >yes</p>
                            <p >yes</p>
                            <p >No</p>
                            <p >No</p>
                            <p >yes</p>
                            <p >No</p>
                            <p >No</p>
                            <p >No</p>
                        </div>

                        <button className=" flex mx-auto mt-4 bg-[#699BA0]  text-[#ffffff]   h-7 py-1 px-4 text-[14px] font-[400] rounded-md focus:outline-none ">
                            Get it Now
                        </button>

                    </div>
                    <div className=' relative basis-[25%]  border  border-[#909090] rounded-[10px] px-4 py-3'>
                        <button className=" absolute -top-11 left-4  flex mx-auto mt-4 bg-[#699BA0]  text-[#ffffff]   h-7 py-1 px-12 text-[14px] font-[400] rounded-tl-md  rounded-tr-md focus:outline-none ">
                            Popular
                        </button>
                        <p className=' text-[14px] text-center font-[600] text-[#1D3A76] underline underline-offset-4 '>
                            Prime
                        </p>
                        <div className='text-[#6D6C6C] text-center  text-[14px] font-[400] space-y-1 pt-2'>
                            <p >120 days</p>
                            <p >250</p>
                            <p >10x More</p>
                            <p >Low</p>
                            <p >Limited</p>
                            <p >No</p>
                            <p >No</p>
                            <p >yes</p>
                            <p >yes</p>
                            <p >yes</p>
                            <p >yes</p>
                            <p >No</p>
                            <p >No</p>
                            <p >yes</p>
                            <p >No</p>
                            <p >No</p>
                            <p >No</p>
                        </div>

                        <button className=" flex mx-auto mt-4 bg-[#699BA0]  text-[#ffffff]   h-7 py-1 px-4 text-[14px] font-[400] rounded-md focus:outline-none ">
                            Get it Now
                        </button>

                    </div>
                    <div className=' basis-[25%]  border  border-[#909090] rounded-[10px] px-4 py-3'>
                        <p className=' text-[14px] text-center font-[600] text-[#1D3A76] underline underline-offset-4 '>
                            prime plus
                        </p>
                        <div className='text-[#6D6C6C] text-center  text-[14px] font-[400] space-y-1 pt-2'>
                            <p >120 days</p>
                            <p >250</p>
                            <p >10x More</p>
                            <p >Low</p>
                            <p >Limited</p>
                            <p >No</p>
                            <p >No</p>
                            <p >yes</p>
                            <p >yes</p>
                            <p >yes</p>
                            <p >yes</p>
                            <p >No</p>
                            <p >No</p>
                            <p >yes</p>
                            <p >No</p>
                            <p >No</p>
                            <p >No</p>
                        </div>

                        <button className=" flex mx-auto mt-4 bg-[#699BA0]  text-[#ffffff]   h-7 py-1 px-4 text-[14px] font-[400] rounded-md focus:outline-none ">
                            Get it Now
                        </button>

                    </div>
                </div>
            </div>
            <div className='flex flex-row   w-fit gap-4 '>
                <div className=' cursor-pointer  flex flex-col  items-center justify-center border border-[#699BA0] rounded-[10px] px-3 pb-1 '>
                    <Image src={explore_packages} alt={"explore_packages"} className="object-cover p-2" />
                    <p className='text-[12px] font-bold text-[#699BA0]'>
                        Explore Commercial Pakages
                    </p>
                </div>
                <div className=' cursor-pointer  flex flex-col  items-center justify-center border border-[#699BA0] rounded-[10px] px-3 pb-1 '>
                    <Image src={trouble} alt={"trouble"} className="object-cover p-2" />
                    <p className='text-[12px] font-bold text-[#699BA0]'>
                        Having a Trouble? Request a callback
                    </p>
                </div>
            </div>
        </div>

    )
}

export default Packagestabswrapper