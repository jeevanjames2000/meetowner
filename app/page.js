import Header from '@/components/header/Header'
import React from 'react'
import signup_bg from '@/public/assets/signup_bg.jpg'
import signup_list from '@/public/assets/signup_list.svg'
import person_with_laptop from '@/public/assets/person_with_laptop.png'
import Image from 'next/image'
import Loginform from '@/components/login/Loginform'
function page() {
  return (
    <>
      <Header />
      <div className="overflow-hidden h-[600px] relative">
        <Image
          src={signup_bg}
          className="h-full w-full object-cover"
          alt="Background"
        />
        <div className="absolute inset-0 grid grid-cols-12 gap-20 pt-12 px-32">
          {/* Left Column */}
          <div className="col-span-6 space-y-5">
            <p className="text-[24px] text-[#ffffff] font-[600] font-sans">
              Lorem Ipsum is simply dummy text
            </p>
            <ul className="space-y-4">
              {/* First List Item */}
              <li className="flex items-center">
                <Image
                  src={signup_list}
                  alt="Image 1"
                  className="rounded-full mr-4 h-6 w-6"
                />
                <span className="text-[16px] text-[#ffffff] font-[600] font-sans">
                  Lorem Ipsum1
                </span>
              </li>
              {/* Second List Item */}
              <li className="flex items-center">
                <Image
                  src={signup_list}
                  alt="Image 2"
                  className="rounded-full mr-4 h-6 w-6"
                />
                <span className="text-[16px] text-[#ffffff] font-[600] font-sans">
                  Lorem Ipsum2
                </span>
              </li>
              {/* Third List Item */}
              <li className="flex items-center">
                <Image
                  src={signup_list}
                  alt="Image 3"
                  className="rounded-full mr-4 h-6 w-6"
                />
                <span className="text-[16px] text-[#ffffff] font-[600] font-sans">
                  Lorem Ipsum3
                </span>
              </li>
            </ul>
            <Image
              src={person_with_laptop}
              alt="Person with Laptop"
              className="mt-4"
            />
          </div>

          {/* Right Column */}
          <div className="flex items-center justify-start col-span-6">
            <Loginform />
          </div>
        </div>
      </div>
    </>
  )
}

export default page