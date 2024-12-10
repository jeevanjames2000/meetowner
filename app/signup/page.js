
import Header from '@/components/header/Header'

import React from 'react'
import signup_bg from '@/public/assets/signup_bg.jpg'
import signup_list from '@/public/assets/signup_list.svg'
import person_with_laptop from '@/public/assets/person_with_laptop.png'

import Image from 'next/image'
import Signupform from '@/components/signup/Signupform'

function page() {
  return (
    <>
      <Header />
      <div>
        <Image
          src={signup_bg}
          className="h-[600px] w-full relative object-cover"
          alt="Background"
        />
        <div className="absolute top-12 grid grid-cols-2 gap-20 pt-16 h-full px-32">
          {/* Left Column */}
          <div className="col-span-1 space-y-5 h-full">
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
          <div className="flex items-center justify-start col-span-1">
            <Signupform />
          </div>
        </div>
      </div>

    </>
    // <div className='w-full'>
    //   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 h-screen  ">
    //     <div className="flex gap-4 col-span-1 ">
    //       <Signupswiper />
    //     </div>
    //     <div className="flex gap-4 col-span-1 items-center justify-center">
    //       <div className="flex flex-col w-fit  space-y-10 ">
    //         <div>
    //           <Image
    //             src={logo}
    //             alt='logo'
    //             className='w-[150px]'
    //           />
    //         </div>
    //         <Signupform />
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}

export default page