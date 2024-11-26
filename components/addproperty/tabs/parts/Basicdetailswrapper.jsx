'use client'
import { IconSearch } from '@tabler/icons-react'
import React, { useState } from 'react'

function Basicdetailswrapper({ updateActiveTab }) {
    const [propertyType, setPropertyType] = useState('')
    const updatePropertyType = (type) => {
        setPropertyType(type)
    }
    const [lookingTo, setLookingTo] = useState('')
    const updateLookingTo = (type) => {
        setLookingTo(type)
        if (type !== 'Sell') {
            setTransactionType('')
        }
    }

    const [transactionType, setTransactionType] = useState('')
    const updateTransactionType = (e) => {
        setTransactionType(e.target.value)
    }

    return (
        <>
            <div className='py-2 bg-[#E2EAED]'>
                <p className='text-lg font-bold text-[#1D3A76] text-center'>Add Basic Details</p>
            </div>
            <div className='p-10'>
                <>
                    <p className='text-[#1D3A76] text-sm mb-4'>Property Type</p>
                    <div className='flex flex-row items-center gap-6'>
                        <div onClick={() => updatePropertyType('Residential')} className={`group cursor-pointer px-8 py-2 rounded-md  ${propertyType === 'Residential' ? 'border border-[#1D3A76] bg-[#1D3A76]' : 'border border-[#909090]  hover:bg-[#1D3A76]'}`}>
                            <p className={`${propertyType === 'Residential' ? 'text-white text-[10px]' : 'text-[#1D3A76] text-[10px] font-semibold group-hover:text-white'}`}>Residential</p>
                        </div>
                        <div onClick={() => updatePropertyType('Commercial')} className={`group cursor-pointer px-8 py-2 rounded-md  ${propertyType === 'Commercial' ? 'border border-[#1D3A76] bg-[#1D3A76]' : 'border border-[#909090]  hover:bg-[#1D3A76]'}`}>
                            <p className={`${propertyType === 'Commercial' ? 'text-white text-[10px]' : 'text-[#1D3A76] text-[10px] font-semibold group-hover:text-white'}`}>Commercial</p>
                        </div>
                    </div>
                </>
                <>
                    <p className='text-[#1D3A76] text-sm my-4 '>Looking to</p>
                    <div className='flex flex-row items-center gap-6'>
                        <div onClick={() => updateLookingTo('Sell')} className={`group cursor-pointer px-8 py-2 rounded-md  ${lookingTo === 'Sell' ? 'border border-[#1D3A76] bg-[#1D3A76]' : 'border border-[#909090]  hover:bg-[#1D3A76]'}`}>
                            <p className={`${lookingTo === 'Sell' ? 'text-white text-[10px]' : 'text-[#1D3A76] text-[10px] font-semibold group-hover:text-white'}`}>Sell</p>
                        </div>
                        <div onClick={() => updateLookingTo('Rent')} className={`group cursor-pointer px-8 py-2 rounded-md  ${lookingTo === 'Rent' ? 'border border-[#1D3A76] bg-[#1D3A76]' : 'border border-[#909090]  hover:bg-[#1D3A76]'}`}>
                            <p className={`${lookingTo === 'Rent' ? 'text-white text-[10px]' : 'text-[#1D3A76] text-[10px] font-semibold group-hover:text-white'}`}>Rent</p>
                        </div>
                        <div onClick={() => updateLookingTo('Pgorcoliving')} className={`group cursor-pointer px-8 py-2 rounded-md  ${lookingTo === 'Pgorcoliving' ? 'border border-[#1D3A76] bg-[#1D3A76]' : 'border border-[#909090]  hover:bg-[#1D3A76]'}`}>
                            <p className={`${lookingTo === 'Pgorcoliving' ? 'text-white text-[10px]' : 'text-[#1D3A76] text-[10px] font-semibold group-hover:text-white'}`}>PG/Co-living</p>
                        </div>
                    </div>
                    {
                        lookingTo === 'Sell' && (
                            <div className="flex flex-col">
                                <p className='text-[#1D3A76] text-sm mt-4 mb-2'>Transaction Type</p>
                                <select
                                    className="w-[40%] border border-[#909090] rounded-md focus:outline-none text-sm py-2 "
                                    id="transactionType"
                                    value={transactionType}
                                    onChange={updateTransactionType}
                                >
                                    <option>Select option</option>
                                    <option value="new">New</option>
                                    <option value="resale">Resale</option>
                                </select>
                            </div>
                        )
                    }
                </>
                <div className='border border-[#909090] flex flex-row items-center gap-3 my-4 rounded-lg h-9'>
                    <div className='bg-[#1D3A76] h-full flex items-center justify-center px-3 rounded-s-lg'>
                        <IconSearch size={20} color='#fff' />
                    </div>
                    <input type="text" placeholder='search location' className='w-full py-2 mx-2 h-7 focus:outline-none' />
                </div>

                <div className='flex flex-row justify-end items-center mt-6'>
                    <div onClick={() => updateActiveTab('propertydetails', 'completed')} className='border border-[#1D3A76] bg-[#1D3A76] px-8 py-3 rounded-md cursor-pointer'>
                        <p className='text-white text-[12px]'>Next, add property details</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Basicdetailswrapper