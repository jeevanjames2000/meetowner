'use client'
import React from 'react'

import logo from '@/public/assets/logo.png'
import Image from 'next/image'
import apartment from '@/public/assets/apartment.jpg'
import apartment1 from '@/public/assets/apartment1.jpg'
import apartment2 from '@/public/assets/apartment2.jpg'
import apartment3 from '@/public/assets/apartment3.jpg'
import apartment4 from '@/public/assets/apartment4.jpg'
import { useState } from 'react';
import { IconEye, IconEyeOff } from '@tabler/icons-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Link from 'next/link'
import './loginstyles.css'

function Loginwrapper() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className='w-full'>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 h-screen  ">
        <div className="flex gap-4 col-span-1 ">
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={50}
            slidesPerView={1}
            className='w-full  '
            aria-orientation='horizontal'
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide className="w-full h-full">
              <Image
                src={apartment}
                alt="banner"
                className="w-full h-[100vh] object-cover"
              />
            </SwiperSlide>
            <SwiperSlide className="w-full h-full">
              <Image
                src={apartment1}
                alt="banner"
                className="w-full h-[100vh] object-cover"
              />
            </SwiperSlide>
            <SwiperSlide className="w-full h-full">
              <Image
                src={apartment2}
                alt="banner"
                className="w-full h-[100vh] object-cover"
              />
            </SwiperSlide>
            <SwiperSlide className="w-full h-full">
              <Image
                src={apartment3}
                alt="banner"
                className="w-full h-[100vh] object-cover"
              />
            </SwiperSlide>
            <SwiperSlide className="w-full h-full">
              <Image
                src={apartment4}
                alt="apartment4"
                className="w-full h-[100vh] object-cover"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="flex gap-4 col-span-1 items-center justify-center">
          <div className="flex flex-col w-[450px]  space-y-10 ">
            <div>
              <Image
                src={logo}
                alt='logo'
                className='w-[150px]'
              />
            </div>
            <div className=' space-y-4'>
              <div className="flex flex-col space-y-1">
                <label className=" font-[500]  text-[16px]">Email*</label>
                <input type="text" id="username" placeholder="Enter email" className=" border  rounded-sm h-9
 pl-2 focus:outline focus:outline-black" />
              </div>
              <div>
                <label  className="text-gray-700 font-[500]">Password*</label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    placeholder=" Enter password"
                    className="w-full border border-gray-300 rounded-sm h-9 pl-2 text-gray-700 focus:outline focus:outline-black "
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-3 flex items-center font-thin "
                  >
                    {showPassword ? <IconEye  size={18}  color='#6B7280' /> : <IconEyeOff  size={16} color='#6B7280'/>}
                  </button>
                </div>
              </div>
              <div className='  flex flex-col space-y-4 pt-4'>
                <div className=' flex flex-row justify-between'>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      className=" h-3 w-3  mr-2 border  border-[#FBAF01]"
                    />
                    <p className=" text-[14px] font-[200]">Remember me</p>
                  </div>
                  <Link href="/forgotpassword" className=' text-[#FBAF01] text-[14px] font-[200] '>Forgot Password?</Link>
                </div>
                <div className=' space-y-2'>
                  <button className=' h-9 w-full font-medium border rounded-sm bg-[#FBAF01] text-[#ffffff]'>
                    Log In
                  </button>
                  <p className=' text-[14px] text-[#898989] text-center '>
                    Don't have an account? <Link href='/signup' className=' text-black   font-medium'>Sign up</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Loginwrapper