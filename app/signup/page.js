import Signupform from '@/components/signup/Signupform'
import Signupswiper from '@/components/signup/Signupswiper'
import logo from '@/public/assets/logo.png'
import Image from 'next/image'
import React from 'react'

function page() {
  return (
    <div className='w-full'>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 h-screen  ">
        <div className="flex gap-4 col-span-1 ">
          <Signupswiper />
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
            <Signupform />
          </div>
        </div>
      </div>
    </div>
  )
}

export default page