import { IconSearch } from '@tabler/icons-react'
import React from 'react'

function Basicdetailswrapper() {
    return (
        <>
            <div className='py-2 bg-[#E2EAED]'>
                <p className='text-lg font-bold text-[#1D3A76] text-center'>Add Basic Details</p>
            </div>
            <div className='p-10'>
                <>
                    <p className='text-[#1D3A76] text-sm mb-4'>Property Type</p>
                    <div className='flex flex-row items-center gap-6'>
                        <div className='border border-[#1D3A76] bg-[#1D3A76] px-8 py-2 rounded-md cursor-pointer'>
                            <p className='text-white text-[10px]'>Residential</p>
                        </div>
                        <div className='group border border-[#909090] px-8 py-2 rounded-md  hover:bg-[#1D3A76] cursor-pointer'>
                            <p className='text-[#1D3A76] text-[10px] font-semibold group-hover:text-white'>Commercial</p>
                        </div>
                    </div>
                </>
                <>
                    <p className='text-[#1D3A76] text-sm my-4 '>Looking to</p>
                    <div className='flex flex-row items-center gap-6'>
                        <div className='border border-[#1D3A76] bg-[#1D3A76] px-8 py-2 rounded-md cursor-pointer'>
                            <p className='text-white text-[10px]'>Rent</p>
                        </div>
                        <div className='group border border-[#909090] px-8 py-2 rounded-md  hover:bg-[#1D3A76] cursor-pointer'>
                            <p className='text-[#1D3A76] text-[10px] font-semibold group-hover:text-white'>Sell</p>
                        </div>

                        <div className='group border border-[#909090] px-8 py-2 rounded-md  hover:bg-[#1D3A76] cursor-pointer'>
                            <p className='text-[#1D3A76] text-[10px] font-semibold group-hover:text-white'>PG/Co-living</p>
                        </div>
                    </div>
                </>
                <div className='border border-[#909090] flex flex-row items-center gap-3 my-4 rounded-lg h-9'>
                    <div className='bg-[#1D3A76] h-full flex items-center justify-center px-3 rounded-s-lg'>
                        <IconSearch size={20} color='#fff' />
                    </div>
                    <input type="text" placeholder='search location' className='w-full py-2 mx-2 h-7 focus:outline-none' />
                </div>

                <div className='flex flex-row justify-center items-center mt-6'>
                    <div className='border border-[#1D3A76] bg-[#1D3A76] px-8 py-2 rounded-md cursor-pointer'>
                        <p className='text-white text-[10px]'>Next, add property details</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Basicdetailswrapper