'use client'
import React from 'react'

import logo from '@/assets/logo.png'
import Image from 'next/image'
import apartment from '@/assets/apartment.jpg'
import apartment1 from '@/assets/apartment1.jpg'
import apartment2 from '@/assets/apartment2.jpg'
import apartment3 from '@/assets/apartment3.jpg'
import apartment4 from '@/assets/apartment4.jpg'
import { useState } from 'react';
import { IconEye, IconEyeOff } from '@tabler/icons-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Link from 'next/link'
import '../login/loginstyles.css'

function Signupwrapper() {
    const [selectedOption, setSelectedOption] = useState('Chris Lynch');
  
    const handleChange = (e) => {
      setSelectedOption(e.target.value);
    };

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
                            <ul className="flex flex-col sm:flex-row">
                                <li className="inline-flex items-center gap-x-2.5 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg sm:-ms-px sm:mt-0 sm:first:rounded-se-none sm:first:rounded-es-lg sm:last:rounded-es-none sm:last:rounded-se-lg dark:bg-neutral-800 dark:border-neutral-700 dark:text-white">
                                    <div className="relative flex items-start w-full">
                                    <div className="flex items-center h-5">
                                        <input
                                        id="hs-horizontal-list-group-item-radio-1"
                                        name="hs-horizontal-list-group-item-radio"
                                        type="radio"
                                        className="border-gray-200 rounded-full disabled:opacity-50 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                        value="Chris Lynch"
                                        checked={selectedOption === 'Chris Lynch'}
                                        onChange={handleChange}
                                        />
                                    </div>
                                    <label
                                        htmlFor="hs-horizontal-list-group-item-radio-1"
                                        className="ms-3 block w-full text-sm text-gray-600 dark:text-neutral-500"
                                    >
                                        Chris Lynch
                                    </label>
                                    </div>
                                </li>

                                <li className="inline-flex items-center gap-x-2.5 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg sm:-ms-px sm:mt-0 sm:first:rounded-se-none sm:first:rounded-es-lg sm:last:rounded-es-none sm:last:rounded-se-lg dark:bg-neutral-800 dark:border-neutral-700 dark:text-white">
                                    <div className="relative flex items-start w-full">
                                    <div className="flex items-center h-5">
                                        <input
                                        id="hs-horizontal-list-group-item-radio-2"
                                        name="hs-horizontal-list-group-item-radio"
                                        type="radio"
                                        className="border-gray-200 rounded-full disabled:opacity-50 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                        value="Maria Guan"
                                        checked={selectedOption === 'Maria Guan'}
                                        onChange={handleChange}
                                        />
                                    </div>
                                    <label
                                        htmlFor="hs-horizontal-list-group-item-radio-2"
                                        className="ms-3 block w-full text-sm text-gray-600 dark:text-neutral-500"
                                    >
                                        Maria Guan
                                    </label>
                                    </div>
                                </li>

                                <li className="inline-flex items-center gap-x-2.5 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg sm:-ms-px sm:mt-0 sm:first:rounded-se-none sm:first:rounded-es-lg sm:last:rounded-es-none sm:last:rounded-se-lg dark:bg-neutral-800 dark:border-neutral-700 dark:text-white">
                                    <div className="relative flex items-start w-full">
                                    <div className="flex items-center h-5">
                                        <input
                                        id="hs-horizontal-list-group-item-radio-3"
                                        name="hs-horizontal-list-group-item-radio"
                                        type="radio"
                                        className="border-gray-200 rounded-full disabled:opacity-50 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                        value="Bob Arum"
                                        checked={selectedOption === 'Bob Arum'}
                                        onChange={handleChange}
                                        />
                                    </div>
                                    <label
                                        htmlFor="hs-horizontal-list-group-item-radio-3"
                                        className="ms-3 block w-full text-sm text-gray-600 dark:text-neutral-500"
                                    >
                                        Bob Arum
                                    </label>
                                    </div>
                                </li>
                            </ul>
                            <div className="flex flex-col space-y-1">
                                <label className=" font-[500]  text-[16px]">Email*</label>
                                <input type="text" id="username" placeholder="Enter email" className=" border  rounded-lg h-11 pl-2 focus:outline focus:outline-black" />
                            </div>
                            <div>
                                <label className="text-gray-700 font-[500]">Password*</label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        id="password"
                                        placeholder=" Enter password"
                                        className="w-full border border-gray-300 rounded-lg h-11 pl-2 text-gray-700 focus:outline focus:outline-black "
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute inset-y-0 right-3 flex items-center font-thin "
                                    >
                                        {showPassword ? <IconEye className='text-[#FBAF01]' /> : <IconEyeOff className='text-[#FBAF01]' />}
                                    </button>
                                </div>
                            </div>
                            <div>
                                <label className="text-gray-700 font-[500]">Confirm Password*</label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        id="password"
                                        placeholder=" Enter password"
                                        className="w-full border border-gray-300 rounded-lg h-11 pl-2 text-gray-700 focus:outline focus:outline-black "
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute inset-y-0 right-3 flex items-center font-thin "
                                    >
                                        {showPassword ? <IconEye className='text-[#FBAF01]' /> : <IconEyeOff className='text-[#FBAF01]' />}
                                    </button>
                                </div>
                            </div>
                            <div className='  flex flex-col space-y-4 '>
                            <button className=' h-11  w-full font-bold border rounded-md bg-[#FBAF01] text-[#ffffff]'>
                                        Sign Up
                                    </button>
                                    <p className=' text-[16px] text-[#898989] text-center pt-6'>
                                     Have an account? <Link href='#' className=' text-black ml-4 underline font-semibold'>Login</Link>
                                    </p>
                                    

                              
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signupwrapper