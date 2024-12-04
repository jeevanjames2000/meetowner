'use client'
import { IconCheck, IconChevronLeft, IconPhone, IconPointFilled } from '@tabler/icons-react'
import React, { useState } from 'react'
import Basicdetailswrapper from './parts/Basicdetailswrapper'
import Propertydetailswrapper from './parts/Propertydetailswrapper'
import Addresswrapper from './parts/Addresswrapper'
import Photoswrapper from './parts/Photoswrapper'
import Reviewawrapper from './parts/Reviewawrapper'

function Tabswrapper() {
    const [activeTab, setActiveTab] = useState('basicdetails')
    const updateActiveTab = (tab, status) => {
        setActiveTab(tab)
        if (tab === 'propertydetails') {
            setBasicDetailsStatus(status)
            setPropertyDetailsStatus('inprogress')
        } else if (tab === 'address') {
            setPropertyDetailsStatus(status)
            setAddressStatus('inprogress')
        } else if (tab === 'photos') {
            setAddressStatus(status)
            setPhotosStatus('inprogress')
        } else if (tab === 'review') {
            setPhotosStatus(status)
            setReviewsStatus('inprogress')
        }
    }

    const [basicDetailsStatus, setBasicDetailsStatus] = useState('inprogress')
    const [propertyDetailsStatus, setPropertyDetailsStatus] = useState('pending')
    const [addressStatus, setAddressStatus] = useState('pending')
    const [photosStatus, setPhotosStatus] = useState('pending')
    const [reviewsStatus, setReviewsStatus] = useState('pending')


    return (
        <div className='flex flex-row gap-2 relative'>
            <div className='basis-[25%] bg-white rounded-t-lg '>
                <div className='flex flex-row justify-center items-center py-3 gap-1 bg-[#E2EAED] '>
                    <IconChevronLeft size={16} color='#1D3A76' />
                    <p className='text-xs text-[#1D3A76] font-medium'>Back to dashboard</p>
                </div>
                <div className='bg-white px-11 py-2 mb-16'>
                    <p className='text-[#1D3A76] font-semibold text-[14px]'>Post your Property</p>
                    <p className='text-[#1D3A76] text-[11px] font-light'>sell or rent your property </p>
                    {/* progress bar */}
                    <div className="flex items-center">
                        <div className="flex w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                            <div className="flex flex-col justify-center rounded-full overflow-hidden bg-[#BACAD5] text-xs text-white text-center whitespace-nowrap transition duration-500  w-[100%]"></div>
                        </div>
                        <div className="w-10 text-end">
                            <span className="text-[10px] text-[#1D3A76]">0%</span>
                        </div>
                    </div>
                    {/* tabs */}
                    <div className='my-3'>
                        {
                            activeTab !== 'review' &&
                            <>
                                <div className="flex flex-row items-start gap-3">
                                    <div className="flex flex-col justify-center items-center">
                                        <div className="h-4 w-4 rounded-full border-2 flex items-center justify-center">
                                            {
                                                basicDetailsStatus === 'completed' ? (
                                                    <div className="h-3 w-4 flex flex-row justify-center items-center bg-[#287DB0] rounded-full">
                                                        <IconCheck size={10} color='#fff' />
                                                    </div>
                                                ) : basicDetailsStatus === 'inprogress' ? (
                                                    <div className="h-2 w-2 bg-[#1D3A76] rounded-full"></div>
                                                )
                                                    :
                                                    <div className="h-2 w-2 rounded-full"></div>
                                            }
                                        </div>
                                        <div className="border-l-2 h-10"></div>
                                    </div>
                                    <div className='flex flex-col'>
                                        <p className={`text-[13px] font-bold text-[#1D3A76]`}>Basic Details</p>
                                        <div className="flex flex-row items-center justify-start">
                                            {
                                                basicDetailsStatus === 'completed' ? (
                                                    <>
                                                        <IconPointFilled size={16} color="#287DB0" />
                                                        <p className="text-[8px] font-semibold text-[#287DB0]">Completed</p>
                                                    </>
                                                ) : basicDetailsStatus === 'pending' ? (
                                                    <>
                                                        <IconPointFilled size={16} color="#1D3A76" />
                                                        <p className="text-[8px] font-semibold text-[#1D3A76]">Pending</p>
                                                    </>
                                                ) : (
                                                    <>
                                                        <IconPointFilled size={16} color="#909090" />
                                                        <p className="text-[8px] font-semibold text-[#909090]">In Progress</p>
                                                    </>
                                                )
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-row items-start gap-3">
                                    <div className="flex flex-col justify-center items-center">
                                        <div className="h-4 w-4 rounded-full border-2 flex items-center justify-center">
                                            {
                                                propertyDetailsStatus === 'completed' ? (
                                                    <div className="h-3 w-4 flex flex-row justify-center items-center bg-[#287DB0] rounded-full">
                                                        <IconCheck size={10} color='#fff' />
                                                    </div>
                                                ) : propertyDetailsStatus === 'inprogress' ? (
                                                    <div className="h-2 w-2 bg-[#1D3A76] rounded-full"></div>
                                                )
                                                    :
                                                    <div className="h-2 w-2 rounded-full"></div>
                                            }
                                        </div>
                                        <div className="border-l-2 h-10"></div>
                                    </div>
                                    <div className='flex flex-col'>
                                        <p className={`text-[13px] font-bold ${activeTab === 'propertydetails' || propertyDetailsStatus === 'completed' ? 'text-[#1D3A76]' : 'text-[#909090]'}`}>Property Details</p>
                                        <div className="flex flex-row items-center justify-start">
                                            {
                                                propertyDetailsStatus === 'completed' ? (
                                                    <>
                                                        <IconPointFilled size={16} color="#287DB0" />
                                                        <p className="text-[8px] font-semibold text-[#287DB0]">Completed</p>
                                                    </>
                                                ) : propertyDetailsStatus === 'inprogress' ? (
                                                    <>
                                                        <IconPointFilled size={16} color="#1D3A76" />
                                                        <p className="text-[8px] font-semibold text-[#1D3A76]">In Progress</p>
                                                    </>
                                                ) : (
                                                    <>
                                                        <IconPointFilled size={16} color="#909090" />
                                                        <p className="text-[8px] font-semibold text-[#909090]">Pending</p>
                                                    </>
                                                )
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-row items-start gap-3">
                                    <div className="flex flex-col justify-center items-center">
                                        <div className="h-4 w-4 rounded-full border-2 flex items-center justify-center">
                                            {
                                                addressStatus === 'completed' ? (
                                                    <div className="h-3 w-4 flex flex-row justify-center items-center bg-[#287DB0] rounded-full">
                                                        <IconCheck size={10} color='#fff' />
                                                    </div>
                                                ) : addressStatus === 'inprogress' ? (
                                                    <div className="h-2 w-2 bg-[#1D3A76] rounded-full"></div>
                                                )
                                                    :
                                                    <div className="h-2 w-2 rounded-full"></div>
                                            }
                                        </div>
                                        <div className="border-l-2 h-10"></div>
                                    </div>
                                    <div className='flex flex-col'>
                                        <p className={`text-[13px] font-bold ${activeTab === 'address' || addressStatus === 'completed' ? 'text-[#1D3A76]' : 'text-[#909090]'}`}>Address</p>
                                        <div className="flex flex-row items-center justify-center">
                                            {
                                                addressStatus === 'completed' ? (
                                                    <>
                                                        <IconPointFilled size={16} color="#287DB0" />
                                                        <p className="text-[8px] font-semibold text-[#287DB0]">Completed</p>
                                                    </>
                                                ) : addressStatus === 'inprogress' ? (
                                                    <>
                                                        <IconPointFilled size={16} color="#1D3A76" />
                                                        <p className="text-[8px] font-semibold text-[#1D3A76]">In Progress</p>
                                                    </>
                                                ) : (
                                                    <>
                                                        <IconPointFilled size={16} color="#909090" />
                                                        <p className="text-[8px] font-semibold text-[#909090]">Pending</p>
                                                    </>
                                                )
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-row items-start gap-3">
                                    <div className="flex flex-col justify-center items-center">
                                        <div className="h-4 w-4 rounded-full border-2 flex items-center justify-center">
                                            {
                                                photosStatus === 'completed' ? (
                                                    <div className="h-3 w-4 flex flex-row justify-center items-center bg-[#287DB0] rounded-full">
                                                        <IconCheck size={10} color='#fff' />
                                                    </div>
                                                ) : photosStatus === 'inprogress' ? (
                                                    <div className="h-2 w-2 bg-[#1D3A76] rounded-full"></div>
                                                )
                                                    :
                                                    <div className="h-2 w-2 rounded-full"></div>
                                            }
                                        </div>
                                        <div className="border-l-2 h-10"></div>
                                    </div>
                                    <div className='flex flex-col'>
                                        <p className={`text-[13px] font-bold ${activeTab === 'photos' || photosStatus === 'completed' ? 'text-[#1D3A76]' : 'text-[#909090]'}`}>Photos</p>
                                        <div className="flex flex-row items-center justify-center">
                                            {
                                                photosStatus === 'completed' ? (
                                                    <>
                                                        <IconPointFilled size={16} color="#287DB0" />
                                                        <p className="text-[8px] font-semibold text-[#287DB0]">Completed</p>
                                                    </>
                                                ) : photosStatus === 'inprogress' ? (
                                                    <>
                                                        <IconPointFilled size={16} color="#1D3A76" />
                                                        <p className="text-[8px] font-semibold text-[#1D3A76]">In Progress</p>
                                                    </>
                                                ) : (
                                                    <>
                                                        <IconPointFilled size={16} color="#909090" />
                                                        <p className="text-[8px] font-semibold text-[#909090]">Pending</p>
                                                    </>
                                                )
                                            }
                                        </div>
                                    </div>
                                </div>
                            </>
                        }
                        <div className="flex flex-row items-start gap-3">
                            <div className="flex flex-col justify-center items-center">
                                <div className="h-4 w-4 rounded-full border-2 flex items-center justify-center">
                                    {
                                        reviewsStatus === 'completed' ? (
                                            <div className="h-3 w-4 flex flex-row justify-center items-center bg-[#287DB0] rounded-full">
                                                <IconCheck size={10} color='#fff' />
                                            </div>
                                        ) : reviewsStatus === 'inprogress' ? (
                                            <div className="h-2 w-2 bg-[#1D3A76] rounded-full"></div>
                                        )
                                            :
                                            <div className="h-2 w-2 rounded-full"></div>
                                    }
                                </div>
                            </div>
                            <div className='flex flex-col'>
                                <p className={`text-[13px] font-bold ${activeTab === 'review' || reviewsStatus === 'completed' ? 'text-[#1D3A76]' : 'text-[#909090]'}`}>Review</p>
                                <div className="flex flex-row items-center justify-center">
                                    {
                                        reviewsStatus === 'completed' ? (
                                            <>
                                                <IconPointFilled size={16} color="#287DB0" />
                                                <p className="text-[8px] font-semibold text-[#287DB0]">Completed</p>
                                            </>
                                        ) : reviewsStatus === 'inprogress' ? (
                                            <>
                                                <IconPointFilled size={16} color="#1D3A76" />
                                                <p className="text-[8px] font-semibold text-[#1D3A76]">In Progress</p>
                                            </>
                                        ) : (
                                            <>
                                                <IconPointFilled size={16} color="#909090" />
                                                <p className="text-[8px] font-semibold text-[#909090]">Pending</p>
                                            </>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='px-11 space-y-3 absolute bottom-4 '>
                    <p className='text-[#699BA0] text-sm font-semibold font-sans'>Require Assistance?</p>
                    <div className='flex flex-row items-center gap-2 border-b-2 pb-2 border-[#699BA0]'>
                        <IconPhone size={18} color='#699BA0' />
                        <p className='text-[#699BA0] text-sm font-sans'>+91 9999999999</p>
                    </div>
                </div>
            </div>
            <div className='basis-[75%] bg-white w-full rounded-t-lg'>
                {
                    activeTab === 'basicdetails' &&
                    <Basicdetailswrapper
                        updateActiveTab={updateActiveTab}
                    />
                }
                {
                    activeTab === 'propertydetails' &&
                    <Propertydetailswrapper
                        updateActiveTab={updateActiveTab}
                    />
                }
                {
                    activeTab === 'address' &&
                    <Addresswrapper
                        updateActiveTab={updateActiveTab}
                    />
                }
                {
                    activeTab === 'photos' &&
                    <Photoswrapper
                        updateActiveTab={updateActiveTab}
                    />
                }
                {
                    activeTab === 'review' &&
                    <Reviewawrapper
                        updateActiveTab={updateActiveTab}
                    />
                }
            </div>
        </div>
    )
}

export default Tabswrapper