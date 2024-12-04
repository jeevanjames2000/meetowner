import React from 'react'
import dynamic from 'next/dynamic'
const Packagestabswrapper = dynamic(() => import('./Packagestabswrapper'))
const Enrollpackages = dynamic(() => import('./parts/Enrollpackages'))
const Recommendedplan = dynamic(() => import('./parts/Recommendedplan'))
const Benefits = dynamic(() => import('./parts/Benefits'))
const Operates = dynamic(() => import('./parts/Operates'))



function Packageswrapper() {
    return (
        <div className=" px-[80px] mt-5 w-full space-y-12 mb-24 ">
            <div className='bg-[#E2EAED] mx-auto'>
                <p className=' text-[20px] text-[#1D3A76] text-center font-bold py-3 w-full'>
                    SELECT THE RIGHT PACKAGE
                </p>
            </div>
            <Packagestabswrapper />
            <Enrollpackages />
            <Recommendedplan />
            <Benefits />
            <Operates />
        </div>
    )
}

export default Packageswrapper