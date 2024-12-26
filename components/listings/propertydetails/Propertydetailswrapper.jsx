import React from 'react'
import Propertybanner from './Propertybanner'
import Propertyamenities from './Propertyamenities'
import Propertypricetabs from './Propertypricetabs'
import Propertylocation from './Propertylocation'
import Propertyoverview from './Propertyoverview'
import Propertymapview from './Propertymapview'
import PropertySpecifications from './PropertySpecifications'
import Propertiesgallery from '@/components/addproperty/tabs/parts/Propertiesgallery'
import listing_3 from '@/public/assets/listings_3.png'
import Image from 'next/image'
import Link from 'next/link'
function Propertydetailswrapper({ propertyDetails }) {
    return (
        <div className='flex bg-[#ffffffe6] px-[80px] py-6 gap-6'>
            <div className="w-[68%] space-y-14">
                <Propertybanner
                    propertyDetails={propertyDetails}
                />
                <Propertypricetabs
                    propertyDetails={propertyDetails}
                />
                {/* {
                    (propertyDetails?.subt_type === "Apartment" || propertyDetails?.subt_type === "Independent House" || propertyDetails?.subt_type === "Independent Villa" || propertyDetails?.subt_type === "Flat" || propertyDetails?.subt_type === "Office" || propertyDetails?.subt_type === "Retail Shop" || propertyDetails?.subt_type === "Show Room") && */}
                <Propertyamenities
                    propertyDetails={propertyDetails}
                />
                {/* } */}
                <Propertylocation
                    propertyDetails={propertyDetails}
                />
                <Propertyoverview
                    propertyDetails={propertyDetails}
                />
                <PropertySpecifications
                    propertyDetails={propertyDetails}
                />
                <Propertymapview
                    propertyDetails={propertyDetails}
                />
            </div>
            <div className='w-[32%] '>
                <div className='p-2 bg-white  shadow-xl rounded-lg'>
                    <div className='space-y-4'>
                        <iframe src="https://www.youtube.com/embed/19g66ezsKAg" allowFullScreen width="100%" />
                        <div className='w-full h-[200px] relative'>
                            <Propertiesgallery
                                propertyGallery={propertyDetails?.image || []}
                            />
                        </div>
                        <div className='bg-[#F0F0F0] p-3'>
                            <p className='font-sans font-semibold text-[#434343] text-[12px]'>More Properties by <span className='text-[#1d3a76] font-bold'>Meet Owner</span></p>
                            <div className='flex flex-row items-center justify-center gap-3 mt-2'>
                                <div className='flex flex-row  border border-[#1d3a76] h-[40px] rounded-md'>
                                    <div className='w-[50%] h-[100%]'>
                                        <Image
                                            src={listing_3}
                                            alt='property owner'
                                            className='h-[100%]'
                                            width={50}
                                        />
                                    </div>
                                    <div className='w-[50%] flex flex-col justify-center items-center gap-[2px]'>
                                        <p className='text-[#1d3a76] font-bold text-[7px]'>₹ 1.9 Cr</p>
                                        <p className='text-[#1d3a76] font-bold text-[7px]'>3 BHK</p>
                                        <p className='text-[#1d3a76] font-bold text-[7px]'>1915 sq.ft</p>
                                    </div>
                                </div>
                                <div className='flex flex-row  border border-[#1d3a76] h-[40px] rounded-md'>
                                    <div className='w-[50%] h-[100%]'>
                                        <Image
                                            src={listing_3}
                                            alt='property owner'
                                            className='h-[100%]'
                                            width={50}
                                        />
                                    </div>
                                    <div className='w-[50%] flex flex-col justify-center items-center gap-[2px]'>
                                        <p className='text-[#1d3a76] font-bold text-[7px]'>₹ 94 L</p>
                                        <p className='text-[#1d3a76] font-bold text-[7px]'>3 BHK</p>
                                        <p className='text-[#1d3a76] font-bold text-[7px]'>1915 sq.ft</p>
                                    </div>
                                </div>
                                <Link href="/listings" className='text-[#00609E] text-[14px] font-semibold'>See all Properties</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Propertydetailswrapper