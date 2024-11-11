'use client'
import React from 'react'
import banner from '@/assets/banner.jpg'
import Image from 'next/image'
import { useState } from 'react';
import { IconEye, IconEyeOff } from '@tabler/icons-react';

function Loginwrapper() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 px-6">
        <div className="flex gap-4 col-span-1">
          <Image
            src={banner}
            alt='banner'
            className=' h-screen w-full'
          />
        </div>
        <div className="flex gap-4 col-span-1 items-center justify-center">
          <div className="flex flex-col w-[450px]     space-y-10 ">
            <div className=' leading-8 flex flex-col items-center'>
              <p className=' text-[24px] font-[600]  text-black'>
                Log In
              </p>
              <p className=' text-[16px] text-[#898989]'>
                Don't have an account?<span className=' text-black  font-bold '> Sign in</span>
              </p>
            </div>
            <div className=' space-y-6'>
              <div className="flex flex-col space-y-1">
                <label className=" font-[500]  text-[16px]">Email Address</label>
                <input type="text" id="username" placeholder="Enter email" className="border  rounded-lg p-3 focus:outline-none " />
              </div>
              <div>
                <label htmlFor="password" className="text-gray-700 font-[500]">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    placeholder="Enter your password"
                    className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:outline-none   "
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-3 flex items-center font-thin text-[#006666]"
                  >
                    {showPassword ? <IconEyeOff className='text-[#f0bc3c]'/> : <IconEye  className='text-[#f0bc3c]'/>}
                  </button>
                </div>
              </div>
              <div className='  flex flex-col space-y-6'>
                <div className=' flex flex-row justify-between'>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      className=" h-4 w-4  mr-2 border  border-[#f0bc3c]"
                    />
                    <p className="text-black">Remember me</p>
                  </div>
                  <p className=' text-[#f0bc3c]  font-thin'>Forgot Password?</p>
                </div>
                <div>
                  <button className=' h-12  w-full font-bold border rounded-md bg-[#f0bc3c] text-[#000000]'>
                    Sign in
                  </button>
                  <p className=' text-[16px] text-[#898989] text-center pt-2 '>
                    Be sign up, You agree to the ' Terms and Conditions'
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