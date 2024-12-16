'use client'
import React, { useState } from 'react'
import Myenquirestab from './tabs/Myenquirestab'
import Matchingtenanttab from './tabs/Matchingtenanttab'
import Getgauranteedenquiries from './Getgauranteedenquiries'
import { IconDownload } from '@tabler/icons-react'
function Enquirestabswrapper() {
    const [activeTab, setActivetab] = useState('myenquires')
    const updateActiveTab = (value) => {
        setActivetab(value)
    }
    return (
        <div className='flex w-full gap-1'>
            <div className='basis-[17%] space-y-8'>
                <div className="w-full bg-[#ffffff] h-96 rounded-[8px] pt-10 space-y-[6px]">
                    <div onClick={() => updateActiveTab('myenquires')}
                        className={`cursor-pointer flex items-center justify-start px-2 py-2 text-[11px] font-[600] text-[#1D3A76]
                     ${activeTab === 'myenquires' && 'bg-[#E2EAED]'}`}>
                        My Enquiries(25)
                    </div>
                    <div onClick={() => updateActiveTab('matchingtenants')}
                        className={` cursor-pointer flex items-center justify-start px-2 py-2 pr-2 text-[11px] font-[600] text-[#1D3A76]
                      ${activeTab === 'matchingtenants' && 'bg-[#E2EAED]'}`}>
                        Matching Tenants(0)
                    </div>
                </div>
            </div>
            <div className="basis-[83%] space-y-8 mb-8 mx-6">
                <p className="flex items-center justify-start px-5 py-[10px] text-[14px] text-[#ffffff] font-[700] bg-[#31539A] rounded-md">
                    Enquiries For: 2 BHK Apartment in Kondapur (Rent)
                </p>
                <div className="flex items-center justify-between px-5">
                    <p className="text-[11px] text-[#252525] font-[600]">
                        Displaying 4 out of 25 Enquiries
                    </p>
                    <button
                        className="flex items-center text-[#252525] border-[0.09rem] border-[#B5B5B5] rounded-full py-[3px] px-2 text-[11px] font-semibold focus:outline-none bg-transparent hover:bg-[#1D3A76] hover:text-white"
                    >
                        Download
                        <IconDownload stroke={2} className="ml-2 w-3 h-3" />
                    </button>
                </div>
                {
                    activeTab === 'myenquires' &&
                    <>
                        <Myenquirestab />

                    </>
                }
                {
                    activeTab === 'matchingtenants' &&
                    <Matchingtenanttab />
                }
                <Getgauranteedenquiries />
            </div>
        </div>
    )
}

export default Enquirestabswrapper