import React from 'react'
import Packagestabswrapper from './Packagestabswrapper'
import Enrollpackages from './parts/Enrollpackages'

function Packageswrapper() {
    return (
        <div className=" px-[80px] mt-5 w-full space-y-6 mb-24 ">
            <div className='bg-[#E2EAED] mx-auto'>
                <p className=' text-[20px] text-[#1D3A76] text-center font-bold py-3 w-full'>
                    SELECT THE RIGHT PACKAGE
                </p>
            </div>
            <Packagestabswrapper />
            <Enrollpackages />
        </div>
    )
}

export default Packageswrapper