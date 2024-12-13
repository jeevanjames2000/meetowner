import Header from '@/components/header/Header'
import React from 'react'
import signup_bg from '@/public/assets/signup_bg.jpg'
import signup_list from '@/public/assets/signup_list.svg'
import person_with_laptop from '@/public/assets/person_with_laptop.png'
import Image from 'next/image'
import Loginform from '@/components/login/Loginform'
function page() {
  return (
    <div className='loginpage'>
      <Header />
      <div className="overflow-hidden relative" style={{ height: 'calc(100vh - 65px)' }}>
        <Image
          src={signup_bg}
          className="h-full w-full object-cover"
          alt="Background"
        />
        <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12  gap-6 md:gap-16 lg:gap-20 pt-6  px-4 xs:px-8 md:px-[4vw] lg:px-[6vw] ">
          {/* Left Column */}
          <div className="hidden md:block col-span-1 md:col-span-6 space-y-4 my-auto"> 
            <p className="w-full text-[20px] md:text-[24px] lg:text-[24px] xl:text-[36px] leading-tight  text-[#ffffff] font-[600] font-sans">
              Lorem Ipsum is a dummy text 
            </p>
            <ul className="space-y-4">
              {/* First List Item */}
              <li className="flex items-center gap-2">
                <Image
                  src={signup_list}
                  alt="Image 1"
                  className="rounded-full h-4 w-4"
                />
                <span className="text-[14px] md:text-[16px] xl:text-[24px] 2xl:text-[28px] text-[#ffffff] font-[600] font-sans">
                  Lorem Ipsum1
                </span>
              </li>
              {/* Second List Item */}
              <li className="flex items-center gap-2">
                <Image
                  src={signup_list}
                  alt="Image 2"
                  className="rounded-full h-4 w-4"
                />
                  <span className="text-[14px] md:text-[16px] xl:text-[24px] 2xl:text-[28px] text-[#ffffff] font-[600] font-sans">
                  Lorem Ipsum1
                </span>
              </li>
              {/* Third List Item */}
              <li className="flex items-center gap-2">
                <Image
                  src={signup_list}
                  alt="Image 3"
                  className="rounded-full h-4 w-4"
                />
                 <span className="text-[14px] md:text-[16px] xl:text-[24px] 2xl:text-[28px] text-[#ffffff] font-[600] font-sans">
                  Lorem Ipsum1
                </span>
              </li>
            </ul>
            <Image
              src={person_with_laptop}
              alt="Person with Laptop"
              className="mt-4 lg:h-[320px] lg:w-[500px]"
             
            />
          </div>

          {/* Right Column */}
          <div className="flex items-center justify-end col-span-1 md:col-span-6">
            <Loginform />
          </div>
        </div>

      </div>
    </div>
  )
}

export default page