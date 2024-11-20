import React from 'react'

import Getapp from './parts/Getapp'
import Agreement from './parts/Agreement'
import Image from 'next/image'
import agreement1 from '@/public/assets/agreement1.png'
import estimate_property from '@/public/assets/estimate_property.png'
import kyc_verification from '@/public/assets/kyc_verification.png'



import { IconChevronRight } from '@tabler/icons-react'

function Dashboardsidebarsection() {
  return (

    <>
      <Agreement />
      <Getapp />
      <div className=' bg-[#ffffff] p-6 space-y-1 rounded-[10px]'>
        <div className="grid grid-cols-5 grid-rows-1 gap-5 w-full h-fit  ">
          <div className='col-span-2 row-span-1 w-full '>
            <Image
              src={agreement1}
              alt={"agreement1"}
              className="w-fit h-fit  rounded-lg"


            />
          </div>
          <div className="space-y-3 col-span-3 row-span-1 w-full">

            <p className="text-[16px] font-[600] text-[#6d6c6c] ">
              Upload Property
            </p>

            <p className="text-[14px] font-[400] text-[#6d6c6c]">
              100% complete listing with
              specific details about the
              rooms gets you more leads
            </p>


          </div>
        </div>
        <button
          className="flex items-center text-[#53C0AC]  ml-auto h-7  px-4 text-[14px] font-[400] rounded-md focus:outline-none bg-transparent hover:bg-[#e6f5f2] transition-all"
        >
          Add Property
          <IconChevronRight className="ml-2 w-4 h-4 text-[#53C0AC]" />
        </button>
      </div>
      {/* Property Value Calculator */}
      <div className=' bg-[#ffffff] p-6 space-y-1 rounded-[10px]'>
        <div className="grid grid-cols-5 grid-rows-1 gap-5 w-full h-fit  ">
          <div className='col-span-2 row-span-1 w-full '>
            <Image
              src={estimate_property}
              alt={"estimate_property"}
              className="w-fit h-fit  rounded-lg"


            />
          </div>
          <div className="space-y-3 col-span-3 row-span-1 w-full">

            <p className="text-[16px] font-[600] text-[#6d6c6c] ">
              Property Value
              Calculator
            </p>

            <p className="text-[14px] font-[400] text-[#6d6c6c]">
              Calculate the right value of
              your property
            </p>


          </div>
        </div>
        <button
          className="flex items-center text-[#53C0AC]  ml-auto h-7  px-4 text-[14px] font-[400] rounded-md focus:outline-none bg-transparent hover:bg-[#e6f5f2] transition-all"
        >
          Add Property
          <IconChevronRight className="ml-2 w-4 h-4 text-[#53C0AC]" />
        </button>
      </div>
      {/* Verify your identity */}
      <div className=' bg-[#ffffff] p-6 space-y-1 rounded-[10px]'>
        <div className="grid grid-cols-5 grid-rows-1 gap-5 w-full h-fit  ">
          <div className='col-span-2 row-span-1 w-full '>
            <Image
              src={kyc_verification}
              alt={"kyc_verification"}
              className="w-fit h-fit  rounded-lg"


            />
          </div>
          <div className="space-y-3 col-span-3 row-span-1 w-full">

            <p className="text-[16px] font-[600] text-[#6d6c6c] ">
              Verify your identity
            </p>

            <p className="text-[14px] font-[400] text-[#6d6c6c]">
              Complete verification with   Aadhar eKYC!

            </p>


          </div>
        </div>
        <button
          className="flex items-center text-[#53C0AC]  ml-auto h-7  px-4 text-[14px] font-[400] rounded-md focus:outline-none bg-transparent hover:bg-[#e6f5f2] transition-all"
        >
          Verify Now
          <IconChevronRight className="ml-2 w-4 h-4 text-[#53C0AC]" />
        </button>
      </div>


    </>
  )
}

export default Dashboardsidebarsection