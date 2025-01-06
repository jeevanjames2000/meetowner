'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { IconArrowLeft, IconArrowRight, IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import Checkoutpropertywrappercard from './shared/Checkoutpropertywrappercard';
import listingApi from '../api/listingApi';
import { useUserDetails } from '../zustand/useUserDetails';
import Link from 'next/link';

function Checkoutpropertywrapper() {
    const userInfo = useUserDetails((state) => state.userInfo)
    const user_id = userInfo?.user_id;
    const access_token = useUserDetails(state => state.access_token);
    const swiperRef = useRef(null);

    const [errorModalOpen, setErrorModalOpen] = useState(false);
    const closeErrorModal = () => setErrorModalOpen(false);
    const [errorMessages, setErrorMessages] = useState('');
    const [isLoadingEffect, setIsLoadingEffect] = useState(false);

    const [propertyList, setPropertyList] = useState([]);
    async function getPropertyList() {
        listingApi.get('getpropertydetails', {
            params: {
                user_id: user_id,
            },
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${access_token}`
            },
        })
            .then((response) => {
                let data = response.data
                if (data.status === 'error') {
                    let finalresponse = {
                        'message': data.message,
                    }
                    console.log('error', finalresponse)
                    return false;
                }
                setPropertyList(data?.propertiesData || []);
            }
            )
            .catch((error) => {
                let finalresponse = {
                    'message': error.message,
                }
                console.log('error', finalresponse)
            });
    }

    useEffect(() => {
        getPropertyList();
    }, [user_id])

    return (
        <>
            <div className="bg-[#FFFFFF] rounded-md mt-12 pt-4 pb-6 px-6">
                {/* Header Section */}
                <div className="flex flex-row justify-between items-center">
                    <p className="text-[#1D3A76] text-[14px] xs:text-[16px] 2xl:text-[20px] 3xl:text-[22px] 4xl:text[24px] font-[700]">Checkout your property</p>
                    <Link href="/listings"
                        className=" flex items-center justify-center gap-2 text-[#287DB0] border-[1.5px] border-[#287DB0] px-3 py-[1.5px] rounded-l-full rounded-r-full text-[10px] xs:text-[11px] 2xl:text-[16px] 3xl:text-[18px] 4xl:text-[20px] font-bold"
                        aria-label="View all properties"
                    >
                        View All <IconArrowRight color='#287DB0' className='h-5 w-3 xs:h-6 xs:w-4 2xl:w-5 2xl:h-7 3xl:w-6 3xl:h-8 4xl:w-7 4xl:h-9' />
                    </Link>
                </div>

                {/* Swiper Section */}
                <div className="relative">
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{
                            delay: 3000, // Delay between slides (in milliseconds)
                            disableOnInteraction: false, // Continue autoplay after user interaction
                        }}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        className="w-full h-full"
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                    >
                        {propertyList.length !== 0 ? (
                            propertyList.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <Checkoutpropertywrappercard
                                        image={item.image}
                                        bhk={item.bhk}
                                        property_subtype={item.property_subtype}
                                        google_address={item.google_address}
                                        monthly_rent={item.monthly_rent}
                                        property_cost={item.property_cost}
                                        property_for={item.property_for}
                                        area_units={item.area_units}
                                        builtup_area={item.builtup_area}
                                        carpet_area={item.carpet_area}
                                        length_area={item.length_area}
                                        width_area={item.width_area}
                                    />
                                </SwiperSlide>
                            ))
                        ) : (
                            <p className="text-[16px] 2xl:text[20px] 3xl:text-[22px] 4xl:text-[24px] text-center">No properties available</p> // Fallback message
                        )}
                    </Swiper>

                    {/* Custom Navigation Buttons */}
                    <button
                        onClick={() => swiperRef.current?.slidePrev()}
                        className="absolute top-[50%] -left-2 2xl:-left-[1%] z-10 transform -translate-y-1/2 bg-[#1D3A76] rounded-full p-1 focus:outline-none"
                        aria-label="Previous slide"
                    >
                        <IconChevronLeft className="h-3 w-3 2xl:h-4 3xl:h-5 4xl:h-6 2xl:w-4 3xl:w-5 4xl:w-6 text-[#ffffff]" />
                    </button>

                    <button
                        onClick={() => swiperRef.current?.slideNext()}
                        className="absolute top-[50%] -right-2 2xl:-right-[1%] z-10 transform -translate-y-1/2 bg-[#1D3A76] rounded-full p-1 focus:outline-none"
                        aria-label="Next slide"
                    >
                        <IconChevronRight className="h-3 w-3 2xl:h-4 3xl:h-5 4xl:h-6 2xl:w-4 3xl:w-5 4xl:w-6 text-[#ffffff]" />
                    </button>
                </div>
            </div>
        </>

    );
}

export default Checkoutpropertywrapper;
