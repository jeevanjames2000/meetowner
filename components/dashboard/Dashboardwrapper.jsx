import Image from 'next/image'
import React from 'react'
import user_profile from '@/public/assets/user_image.png'
import Checkoutpropertywrapper from './Checkoutpropertywrapper'
function Dashboardwrapper() {
  return (
   <div className='flex flex-row gap-2 px-[80px] mt-5'>
        <div className='basis-[70%]'>
            <div className='bg-[#31539A] px-4 py-2 rounded-md flex flex-row items-center gap-4 '>
                <div>
                    <Image src={user_profile} alt='logo' width={40} height={40} />
                </div>
                <p className='text-white text-[15px] font-semibold font-sans'>Hello,  MEETOWNER !</p>
            </div>
            <Checkoutpropertywrapper/>
        </div>
        <div className='basis-[30%]'>

        </div>
   </div>
  )
}

export default Dashboardwrapper