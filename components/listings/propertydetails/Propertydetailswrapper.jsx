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
import { useUserDetails } from '@/components/zustand/useUserDetails';
import { useRouter } from 'next/navigation'

function Propertydetailswrapper({ propertyDetails }) {
    const [modal, setModal] = useState(false)
    const openModal = () => {
        setModal(true)
    }
    const closeModal = () => {
        setModal(false)
    }
    const images = propertyDetails?.image || [];

    // const router = useRouter();

    // const isLogged = useUserDetails((state) => state.isLogged);
    // useEffect(() => {
    //     if (!isLogged) {
    //         router.push('/');
    //     }
    // }, [isLogged]);

    return (
        <>
            <div className='flex flex-col lg:flex-row bg-[#ffffffe6] px-4 md:px-[4vw] lg:px-[6vw] py-6 gap-3 lg:gap-6'>
                <div className="w-full lg:w-[68%] space-y-14">
                    <Propertybanner
                        propertyDetails={propertyDetails}
                    />
                    <Propertypricetabs
                        propertyDetails={propertyDetails}
                    />
                    <Propertyamenities
                        propertyDetails={propertyDetails}
                    />
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
                        <p className="text-[#1d3a76] text-[22px] xs:text-[25px] 2xl:text-[28px] 3xl:text-[30px] 4xl:text-[32px] font-[600] mb-3">EXPLORE - MAP view</p>
                        <GoogleMapView
                            propertiesData={propertyDetails}
                        />
                    </div>
                </div>
                <div className='w-full lg:w-[25%] lg:fixed lg:right-3 p-2 bg-white h-fit shadow-[0_0px_10px_0px_rgba(0,0,0,0.2)] rounded-lg space-y-4'>
                    {propertyDetails?.videos[0] ?
                        <video
                            src={propertyDetails?.videos[0]}
                            className="w-full h-40 object-cover rounded"
                            controls
                        />
                        :
                        <p className='text-[#1d3a76] text-[10px] xs:text-[12px] 2xl:text-[16px] 3xl:text-[18px] 4xl:text-[20px] font-bold text-center pt-4'>No Video Available</p>
                    }
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
                            <button onClick={openModal} className='cursor-pointer flex flex-col justify-center items-center gap-2 bg-[#00000033] p-2 text-[#ffffff] font-bold text-[10px] xs:text-[12px] 2xl:text-[16px] 3xl:text-[18px] 4xl:text-[20px]'>
                                +{images.length - 2} More Pics
                            </button>
                        )}
                    </div>
                    <div className='bg-[#F0F0F0] p-3'>
                        <p className='font-sans font-semibold text-[#434343] text-[10px] xs:text-[12px] 2xl:text-[16px] 3xl:text-[18px] 4xl:text-[20px]'>More Properties by <span className='text-[#1d3a76] font-bold'>Meet Owner</span></p>
                        <div className='flex flex-col md:flex-row items-center justify-center gap-3 mt-2'>
                            <div className='flex flex-row border border-[#1d3a76] h-auto w-full rounded-md overflow-hidden'>
                                <Image
                                    src={listing_3}
                                    alt='property owner'
                                    className='h-[100%] w-[60%]'
                                />
                                <div className='w-[40%] flex flex-col justify-center items-center gap-[2px]'>
                                    <p className='text-[#1d3a76] font-bold text-[12px] lg:text-[7px] 2xl:text-[10px] 3xl:text-[12px] 4xl:text-[14px]'>₹ 1.9 Cr</p>
                                    <p className='text-[#1d3a76] font-bold text-[12px] lg:text-[7px] 2xl:text-[10px] 3xl:text-[12px] 4xl:text-[14px]'>3 BHK</p>
                                    <p className='text-[#1d3a76] font-bold text-[12px] lg:text-[7px] 2xl:text-[10px] 3xl:text-[12px] 4xl:text-[14px]'>1915 sq.ft</p>
                                </div>
                            </div>
                            <div className='flex flex-row border border-[#1d3a76] h-auto w-full rounded-md overflow-hidden'>
                                <Image
                                    src={listing_3}
                                    alt='property owner'
                                    className='h-[100%] w-[60%]'
                                />
                                <div className='w-[40%] flex flex-col justify-center items-center gap-[2px]'>
                                    <p className='text-[#1d3a76] font-bold text-[6px] xs:text-[7px] 2xl:text-[10px] 3xl:text-[12px] 4xl:text-[14px]'>₹ 1.9 Cr</p>
                                    <p className='text-[#1d3a76] font-bold text-[6px] xs:text-[7px] 2xl:text-[10px] 3xl:text-[12px] 4xl:text-[14px]'>3 BHK</p>
                                    <p className='text-[#1d3a76] font-bold text-[6px] xs:text-[7px] 2xl:text-[10px] 3xl:text-[12px] 4xl:text-[14px]'>1915 sq.ft</p>
                                </div>
                            </div>
                            <Link href="/listings" className='text-[#00609E] text-[10px] xs:text-[12px] 2xl:text-[16px] 3xl:text-[18px] 4xl:text-[20px] text-center font-semibold'>See all Properties</Link>
                        </div>
                    </div>
                </div>
            </div>
            <Modal
                open={modal}
                onClose={closeModal}
                size="md"
                zIndex={9999}
            >
                <div className='grid grid-cols-2'>
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