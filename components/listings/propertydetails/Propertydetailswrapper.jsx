'use client'
import React, { useEffect, useState } from 'react'
import Propertybanner from './Propertybanner'
import Propertyamenities from './Propertyamenities'
import Propertypricetabs from './Propertypricetabs'
import Propertylocation from './Propertylocation'
import Propertyoverview from './Propertyoverview'
import PropertySpecifications from './PropertySpecifications'
import listing_3 from '@/public/assets/listings_3.png'
import Image from 'next/image'
import Link from 'next/link'
import { Modal } from '@nayeshdaggula/tailify'
import GoogleMapView from '@/components/shared/GoogleMapView'
function Propertydetailswrapper({ propertyDetails }) {
    const [modal, setModal] = useState(false)
    const openModal = () => {
        setModal(true)
    }
    const closeModal = () => {
        setModal(false)
    }
    const images = propertyDetails?.image || [];

    return (
        <>
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
                    <div>
                        <p className="text-[#1d3a76] text-[25px] font-[600] mb-3">EXPLORE - MAP view</p>
                        <GoogleMapView
                            propertiesData={propertyDetails}
                        />
                    </div>
                </div>
                <div className='w-[32%] '>
                    <div className='p-2 bg-white  shadow-xl rounded-lg'>
                        <div className='space-y-4'>
                            <iframe src="https://res.cloudinary.com/dd6r2ukms/video/upload/v1735284244/86_Acres_Farm_-_Real_Estate_Drone_Video-_720p_aea4p1.mp4" allowFullScreen width="100%" height="100%" />
                            {/* <video
                                src={project_video2}
                                controls
                                width="600"
                                height="400"
                                style={{ borderRadius: '8px' }}
                            >
                                Your browser does not support the video tag.
                            </video> */}
                            <div className='flex gap-2'>
                                {images?.slice(0, 2).map((img, index) => (
                                    <Image
                                        key={index}
                                        src={img}
                                        alt={`Property image ${index + 1}`}
                                        className='rounded-lg'
                                        width={100}
                                        height={100}
                                        style={{ height: '100px' }}
                                    />
                                ))}
                                {images.length > 2 && (
                                    <div onClick={openModal} className='cursor-pointer flex flex-col justify-center items-center gap-2 bg-[#00000033] p-2'>
                                        <p className='text-[#ffffff] font-bold text-[12px]'>+{images.length - 2} More Pics</p>
                                    </div>
                                )}
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
                                    <Link href="/listings" className='text-[#00609E] text-[12px] text-center font-semibold'>See all Properties</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal
                open={modal}
                onClose={closeModal}
                size="lg"
                zIndex={9999}
            >
                <div className='grid grid-cols-4 gap-4'>
                    {images?.slice(2).map((img, index) => (
                        <Image
                            key={index}
                            src={img}
                            alt={`Modal property image ${index + 1}`}
                            className='rounded-lg'
                            width={150}
                            height={150}
                            style={{ height: '100px' }}
                        />
                    ))}
                </div>
            </Modal>
        </>
    )
}

export default Propertydetailswrapper