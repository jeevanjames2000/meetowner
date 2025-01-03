import Header from '@/components/header/Header'
import React from 'react'
import signup_bg from '@/public/assets/approperties-bg.png'
import signup_list from '@/public/assets/signup_list.svg'
import person_with_laptop from '@/public/assets/person_with_laptop.png'
import Image from 'next/image'
import Loginform from '@/components/login/Loginform'
function page() {

  return (
    <div className='loginpage h-[100vh]' style={{
      backgroundImage: `url(${signup_bg.src})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}>
      <Header />
      <div className="overflow-hidden flex xxs:items-center xxs:justify-center justify-center items-center h-[calc(100vh-65px)] 3xl:h-[calc(100vh-120px)]">
        <div className=" grid grid-cols-12 w-full gap-[5%] px-4 md:px-[4vw] lg:px-[6vw] items-center justify-between">
          {/* Left Column */}
          <div className="col-span-6 space-y-4 hidden md:block">
            <p className="heading1  text-[#ffffff] font-[600] font-sans">
              Lorem Ipsum is simply dummy text
            </p>
            <ul className="space-y-[3%] ">
              {/* First List Item */}
              <li className="flex items-center gap-[1.5%]">
                <Image
                  src={signup_list}
                  alt="Image 1"
                  className="imageList rounded-full"
                />
                <span className="lists text-[#ffffff] font-[600] font-sans">
                  Lorem Ipsum1
                </span>
              </li>
              {/* Second List Item */}
              <li className="flex items-center gap-[1.5%]">
                <Image
                  src={signup_list}
                  alt="Image 1"
                  className="imageList rounded-full"
                />
                <span className="lists text-[#ffffff] font-[600] font-sans">
                  Lorem Ipsum2
                </span>
              </li>
              {/* Third List Item */}
              <li className="flex items-center gap-[1.5%]">
                <Image
                  src={signup_list}
                  alt="Image 1"
                  className="imageList rounded-full"
                />
                <span className="lists text-[#ffffff] font-[600] font-sans">
                  Lorem Ipsum3
                </span>
              </li>
            </ul>
            <div className='pt-0 2xl:pt-[4%]'>
              <Image
                src={person_with_laptop}
                alt="Person with Laptop"
                className="mt-4  2xl:h-fit 2xl:w-[90%] 3xl:h-fit 3xl:w-[80%] object-cover"
                height={400}
                width={400}
              />
            </div>
          </div>
          {/* Right Column */}
          <div className="flex items-center justify-center xxs:col-span-12  md:col-span-6 px-3">
            <Loginform />
          </div>
        </div>
      </div>
    </div>
  )
}

export default page