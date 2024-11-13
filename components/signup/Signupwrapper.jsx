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
import '../login/loginstyles.css'

function Signupwrapper() {
    const [selectedOption, setSelectedOption] = useState('Builder');

    const handleChange = (e) => {
        setSelectedOption(e.target.value);
    };

    const [showPassword, setShowPassword] = useState(false);
    const [confirmPassword, setconfirmPassword] = useState(false);
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
                    <div className="flex flex-col w-fit  space-y-10 ">
                        <div>
                            <Image
                                src={logo}
                                alt='logo'
                                className='w-[150px]'
                            />
                        </div>
                        <div className=' space-y-4'>
                            <ul className="flex flex-col sm:flex-row ">
                                <li className="inline-flex items-center gap-x-2.5 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg sm:-ms-px sm:mt-0 sm:first:rounded-se-none sm:first:rounded-es-lg sm:last:rounded-es-none sm:last:rounded-se-lg">
                                    <div className="relative flex items-start w-full">
                                        <div className="flex items-center h-5">
                                            <input
                                                id="hs-horizontal-list-group-item-radio-1"
                                                name="hs-horizontal-list-group-item-radio"
                                                type="radio"
                                                className="custom-radio border-gray-200 rounded-full checked:bg-yellow-500 checked:border-yellow-500"
                                                value="Builder"
                                                checked={selectedOption === 'Builder'}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <label
                                            htmlFor="hs-horizontal-list-group-item-radio-1"
                                            className="ms-3 block w-full text-sm text-gray-600"
                                        >
                                            Builder
                                        </label>
                                    </div>
                                </li>

                                <li className="inline-flex items-center gap-x-2.5 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg sm:-ms-px sm:mt-0 sm:first:rounded-se-none sm:first:rounded-es-lg sm:last:rounded-es-none sm:last:rounded-se-lg">
                                    <div className="relative flex items-start w-full">
                                        <div className="flex items-center h-5">
                                            <input
                                                id="hs-horizontal-list-group-item-radio-2"
                                                name="hs-horizontal-list-group-item-radio"
                                                type="radio"
                                                className="custom-radio border-gray-200 rounded-full checked:bg-yellow-500 checked:border-yellow-500"
                                                value="Agent"
                                                checked={selectedOption === 'Agent'}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <label
                                            htmlFor="hs-horizontal-list-group-item-radio-2"
                                            className="ms-3 block w-full text-sm text-gray-600"
                                        >
                                            Agent
                                        </label>
                                    </div>
                                </li>

                                <li className="inline-flex items-center gap-x-2.5 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg sm:-ms-px sm:mt-0 sm:first:rounded-se-none sm:first:rounded-es-lg sm:last:rounded-es-none sm:last:rounded-se-lg">
                                    <div className="relative flex items-start w-full">
                                        <div className="flex items-center h-5">
                                            <input
                                                id="hs-horizontal-list-group-item-radio-3"
                                                name="hs-horizontal-list-group-item-radio"
                                                type="radio"
                                                className="custom-radio border-gray-200 rounded-full checked:bg-yellow-500 checked:border-yellow-500"
                                                value="Owner"
                                                checked={selectedOption === 'Owner'}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <label
                                            htmlFor="hs-horizontal-list-group-item-radio-3"
                                            className="ms-3 block w-full text-sm text-gray-600"
                                        >
                                            Owner
                                        </label>
                                    </div>
                                </li>

                                <li className="inline-flex items-center gap-x-2.5 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg sm:-ms-px sm:mt-0 sm:first:rounded-se-none sm:first:rounded-es-lg sm:last:rounded-es-none sm:last:rounded-se-lg">
                                    <div className="relative flex items-start w-full">
                                        <div className="flex items-center h-5">
                                            <input
                                                id="hs-horizontal-list-group-item-radio-4"
                                                name="hs-horizontal-list-group-item-radio"
                                                type="radio"
                                                className="custom-radio border-gray-200 rounded-full checked:bg-yellow-500 checked:border-yellow-500"
                                                value="Channel Partner"
                                                checked={selectedOption === 'Channel Partner'}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <label
                                            htmlFor="hs-horizontal-list-group-item-radio-4"
                                            className="ms-3 block w-full text-sm text-gray-600"
                                        >
                                            Channel Partner
                                        </label>
                                    </div>
                                </li>
                            </ul>
                            <div className="flex flex-col space-y-1">
                                <label className=" font-[500]  text-[14px]">Email*</label>
                                <input type="text" id="username" placeholder="Enter email" className=" border  rounded-sm h-9 pl-2 focus:outline focus:outline-black" />
                            </div>
                            <div>
                                <label className="font-[500]  text-[14px]">Password*</label>
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
                                        {showPassword ? <IconEye color='#6B7280' size={18} /> : <IconEyeOff color='#6B7280' size={16} />}
                                    </button>
                                </div>
                            </div>
                            <div>
                                <label className=" font-[500]  text-[14px]">Confirm Password*</label>
                                <div className="relative">
                                    <input
                                        type={confirmPassword ? 'text' : 'password'}
                                        id="password"
                                        placeholder=" Enter password"
                                        className="w-full border border-gray-300 rounded-sm h-9 pl-2 text-gray-700 focus:outline focus:outline-black "
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setconfirmPassword(!confirmPassword)}
                                        className="absolute inset-y-0 right-3 flex items-center font-thin "
                                    >
                                        {confirmPassword ? <IconEye  size={18}  color='#6B7280' /> : <IconEyeOff  size={16} color='#6B7280'/>}
                                    </button>
                                </div>
                            </div>
                            <div className='  flex flex-col space-y-2  pt-1'>
                                <button className=' h-9 w-full font-medium border rounded-md bg-[#FBAF01] text-[#ffffff]'>
                                    Sign up
                                </button>
                                <p className=' text-[14px] text-[#898989] text-center '>
                                    Have an account? <Link href='/' className=' text-[#FBAF01]  font-medium'>Login</Link>
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