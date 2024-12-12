'use client'
import React, { useState } from 'react'
import Myenquirestab from './tabs/Myenquirestab'
import Matchingtenanttab from './tabs/Matchingtenanttab'
function Enquirestabswrapper() {
    const [activeTab, setActivetab] = useState('myenquires')
    const updateActiveTab = (value) => {
        setActivetab(value)
    }
    return (
        <div className='grid grid-cols-12 w-full gap-4'>
            <div className='col-span-12 md:col-span-2 space-y-8'>
                <div className="w-full bg-[#ffffff] h-96 rounded-lg ">
                    <div onClick={() => updateActiveTab('myenquires')} 
                    className={` cursor-pointer flex items-center justify-start px-2 py-3 text-[12px] font-[600] text-[#1D3A76]
                     ${activeTab ==='myenquires' && 'bg-[#E2EAED]'}`}>
                        My Enquiries
                    </div>
                    <div onClick={() => updateActiveTab('matchingtenants')}
                     className={` cursor-pointer flex items-center justify-start px-2 py-3 text-[12px] font-[600] text-[#1D3A76]
                      ${activeTab === 'matchingtenants' && 'bg-[#E2EAED]' }`}>
                        Matching Tenants
                    </div>
                </div>
            </div>
            <div className="col-span-12 md:col-span-10 space-y-8 mb-8">
                {
                    activeTab === 'myenquires' &&
                    <Myenquirestab />
                }
                {
                    activeTab === 'matchingtenants' &&
                    <Matchingtenanttab />
                }
            </div>
        </div>
    )
}

export default Enquirestabswrapper