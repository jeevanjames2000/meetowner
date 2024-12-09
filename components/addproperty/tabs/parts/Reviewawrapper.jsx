import { IconCheck } from '@tabler/icons-react'
import Image from 'next/image'
import React from 'react'
import property from '@/public/assets/property.png'
import Link from 'next/link'
function Reviewawrapper({ allpropertyDetails }) {
    return (
        <div className='relative'>
            <div className='py-2 bg-[#E2EAED]'>
                <p className='text-lg font-bold text-[#1D3A76] text-center font-sans'>Review</p>
            </div>
            <div className='w-full overflow-y-auto px-5 py-3 h-[calc(100vh-220px)]' >
                <div className='border rounded-md'>
                    <div className='flex flex-row items-center justify-center gap-1 bg-[#E6E6E6] py-2'>
                        <div className='flex justify-center items-center p-1 bg-[#287DB0] rounded-full'>
                            <IconCheck size={16} color='#fff' />
                        </div>
                        <p className='font-semibold font-sans text-sm'>Congratulations!</p>
                        <p className='text-xs mt-1'>Your listing is being reviewed.</p>
                    </div>
                    <div className='flex w-full gap-4 p-2'>
                        <Image src={property} width={200} height={200} />
                        <div className='flex justify-between items-center w-full'>
                            <div className='flex flex-col gap-2'>
                                <p className='font-sans text-[#6D6C6C] text-xs font-semibold'>₹ {allpropertyDetails?.monthly_rent}</p>
                                <p className='text-[#6D6C6C] font-sans text-xs'>{allpropertyDetails?.bedrooms} {allpropertyDetails?.sub_type} for {allpropertyDetails?.property_for} </p>
                                <p className='text-[#6D6C6C] font-sans text-xs'>{allpropertyDetails?.builtup_area} sq.ft. | {allpropertyDetails?.furnished_status} | SVN</p>
                                <p className='text-[#6D6C6C] font-semibold font-sans text-xs'>Avilable from 24/08/2024</p>
                            </div>
                            <div className='cursor-pointer border border-[#287DB0] bg-[#FEFDF8] py-2 px-4 rounded-md'>
                                <p className='font-bold text-xs text-[#287DB0]'>Edit Details</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-center cursor-pointer'>
                <Link href="/dashboard" className='text-[#757575] text-xs underline pb-2 font-semibold text-center'>Exit to Dashboard</Link>
            </div>
        </div>
    )
}

export default Reviewawrapper