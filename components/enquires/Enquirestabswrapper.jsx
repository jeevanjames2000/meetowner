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
        <div className='w-full gap-1 grid grid-cols-12'>
            <div className="w-full col-span-12 sm:col-span-2 bg-[#ffffff] h-full sm:h-96 rounded-[8px] py-5 sm:py-10 space-y-[6px]">
                <div onClick={() => updateActiveTab('myenquires')}
                    className={`cursor-pointer flex items-center justify-start px-2 py-2 text-[10px] xs:text-[11px] 2xl:text-[16px] 3xl:text-[18px] 4xl:text[20px] font-[600] text-[#1D3A76] ${activeTab === 'myenquires' && 'bg-[#E2EAED]'}`}
                >
                    My Enquiries(25)
                </div>
                <div onClick={() => updateActiveTab('matchingtenants')}
                    className={` cursor-pointer flex items-center justify-start px-2 py-2 pr-2 text-[10px] xs:text-[11px] 2xl:text-[16px] 3xl:text-[18px] 4xl:text[20px] font-[600] text-[#1D3A76]
                      ${activeTab === 'matchingtenants' && 'bg-[#E2EAED]'}`}>
                    Matching Tenants(0)
                </div>
                <div onClick={() => updateActiveTab('Future Tab 1')}
                    className={` cursor-pointer flex items-center justify-start px-2 py-2 pr-2 text-[10px] xs:text-[11px] 2xl:text-[16px] 3xl:text-[18px] 4xl:text[20px] font-[600] text-[#1D3A76]
                      ${activeTab === 'Future Tab 1' && 'bg-[#E2EAED]'}`}>
                    Future Tab 1
                </div>
                <div onClick={() => updateActiveTab('Future Tab 2')}
                    className={` cursor-pointer flex items-center justify-start px-2 py-2 pr-2 text-[10px] xs:text-[11px] 2xl:text-[16px] 3xl:text-[18px] 4xl:text[20px] font-[600] text-[#1D3A76]
                      ${activeTab === 'Future Tab 2' && 'bg-[#E2EAED]'}`}>
                    Future Tab 2
                </div>
            </div>
            <div className="col-span-12 sm:col-span-10 space-y-4 mt-5 sm:mt-0 mb-5 sm:mx-6">
                <p className="flex items-center justify-start px-5 py-[10px] text-[12px] xs:text-[14px] 2xl:text-[20px] 3xl:text-[22px] 4xl:text[24px] text-[#ffffff] font-[700] bg-[#31539A] rounded-md">
                    Enquiries For: 2 BHK Apartment in Kondapur (Rent)
                </p>
                <div className="flex items-center justify-between sm:px-5">
                    <p className="text-[10px] xs:text-[12px] 2xl:text-[16px] 3xl:text-[18px] 4xl:text[20px] text-[#252525] font-[600]">
                        Displaying 4 out of 25 Enquiries
                    </p>
                    <button
                        className="flex items-center text-[#252525] border-[0.09rem] border-[#B5B5B5] rounded-full py-[3px] px-2 text-[10px] xs:text-[11px] 2xl:text-[16px] 3xl:text-[18px] 4xl:text[20px] font-semibold focus:outline-none bg-transparent hover:bg-[#1D3A76] hover:text-white"
                    >
                        Download
                        <IconDownload stroke={2} className="ml-2 w-3 h-3 2xl:h-4 2xl:w-4 3xl:h-5 3xl:w-5 4xl:w-6 4xl:h-6" />
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