import Loginform from '@/components/login/Loginform'
import Loginsiwper from '@/components/login/Loginsiwper'
import logo from '@/public/assets/logo.png'
import Image from 'next/image'
import React from 'react'

function page() {
  return (
    <div className='w-full'>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 h-screen  ">
        <div className="flex gap-4 col-span-1 ">
          <Loginsiwper />
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
            <Loginform />
          </div>
        </div>
      </div>
    </div>
  )
}

export default page