'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { IconArrowLeft, IconArrowRight, IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import Checkoutpropertywrappercard from './shared/Checkoutpropertywrappercard';

import apartment from '@/public/assets/apartment.jpg';
import apartment1 from '@/public/assets/apartment1.jpg';
import apartment2 from '@/public/assets/apartment2.jpg';
import apartment3 from '@/public/assets/apartment3.jpg';
import apartment4 from '@/public/assets/apartment4.jpg';
import listingApi from '../api/listingApi';
import { Modal } from '@nayeshdaggula/tailify';
import { useUserDetails } from '../zustand/useUserDetails';
import Errorpanel from '../shared/Errorpanel';

function Checkoutpropertywrapper() {
    const userInfo = useUserDetails((state) => state.userInfo)
    const user_id = userInfo?.user_id;
    const access_token = useUserDetails(state => state.access_token);
    const swiperRef = useRef(null);

    const property = [
        {
            id: 1,
            image: apartment,
            land: '1 BHK Studio in Madhapur, Hyderabad',
            cost: '₹2000k',
            area: '1200 sq.yards',
        },
        {
            id: 2,
            image: apartment1,
            land: '3 BHK Villa in Jubilee Hills, Hyderabad',
            cost: '₹8000k',
            area: '2500 sq.yards',
        },
        {
            id: 3,
            image: apartment2,
            land: '1 BHK Studio in Gachibowli, Hyderabad',
            cost: '₹1500k',
            area: '1000 sq.yards',
        },
        {
            id: 4,
            image: apartment3,
            land: '4 BHK Independent House in Kukatpally, Hyderabad',
            cost: '₹5000k',
            area: '2000 sq.yards',
        },
        {
            id: 5,
            image: apartment4,
            land: '3 BHK Luxury Apartment in Hi-Tech City, Hyderabad',
            cost: '₹6000k',
            area: '1800 sq.yards',
        },
    ];

    const [isLoadingEffect, setIsLoadingEffect] = useState(false);
    const [errorMessages, setErrorMessages] = useState('');
    const [errorModalOpen, setErrorModalOpen] = useState(false);
    const closeErrorModal = () => {
        setErrorModalOpen(false);
    }
    const [propertyList, setPropertyList] = useState([]);
    async function getPropertyList() {
        listingApi.get('/getpropertydetails', {
            params: {
                user_id: user_id,
            },
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${access_token}`
            },
        })
            .then((response) => {
                setIsLoadingEffect(false);
                let data = response.data
                if (data.status === 'error') {
                    let finalresponse = {
                        'message': data.message,
                    }
                    setErrorMessages(finalresponse);
                    setErrorModalOpen(true);
                    return false;
                }
                setPropertyList(data?.propertiesData || []);
            }
            )
            .catch((error) => {
                setIsLoadingEffect(false);
                let finalresponse = {
                    'message': error.message,
                }
                console.log('error', error)
                setErrorMessages(finalresponse);
                setErrorModalOpen(true);
            });
    }

    // useEffect(() => {
    //     getPropertyList();
    // }, [])

    return (
        <>
            <div className="bg-[#FFFFFF] rounded-md mt-12 pt-4 pb-6 px-6">
                {/* Header Section */}
                <div className="flex flex-row justify-between items-center">
                    <p className="text-[#1D3A76] text-[16px] font-[700]">Checkout your property</p>
                    <button
                        className=" flex items-center justify-center gap-2 text-[#287DB0] border-[1.5px] border-[#287DB0] px-3 py-[1.5px] rounded-l-full rounded-r-full text-[11px] font-bold"
                        aria-label="View all properties"
                    >
                        View All <IconArrowRight color='#287DB0' className='h-6 w-4' />
                    </button>
                </div>

                {/* Swiper Section */}
                <div className="relative">
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={30} // Adjust spacing dynamically
                        slidesPerView={1} // Adjust slides dynamically
                        loop={true}
                        className="w-full h-full" // Adjust Swiper to fit parent container
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                    >
                        {property.length !== 0 ? (
                            property.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <Checkoutpropertywrappercard
                                        image={item.image}
                                        land={item.land}
                                        cost={item.cost}
                                        area={item.area}
                                    />
                                </SwiperSlide>
                            ))
                        ) : (
                            <p>No properties available</p> // Fallback message
                        )}
                    </Swiper>

                    {/* Custom Navigation Buttons */}
                    <button
                        onClick={() => swiperRef.current?.slidePrev()}
                        className="absolute top-[100px] -left-2 z-10 transform -translate-y-1/2 bg-[#1D3A76] rounded-full p-1 focus:outline-none"
                        aria-label="Previous slide"
                    >
                        <IconChevronLeft className="h-3 w-3 text-[#ffffff]" />
                    </button>

                    <button
                        onClick={() => swiperRef.current?.slideNext()}
                        className="absolute top-[100px] -right-2 z-10 transform -translate-y-1/2 bg-[#1D3A76] rounded-full p-1 focus:outline-none"
                        aria-label="Next slide"
                    >
                        <IconChevronRight className="h-3 w-3 text-[#ffffff]" />
                    </button>
                </div>
            </div>

            {errorModalOpen &&
                <Modal
                    open={errorModalOpen}
                    onClose={closeErrorModal}
                    size="md"
                    zIndex={9999}
                >
                    <Errorpanel
                        errorMessages={errorMessages}
                        close={closeErrorModal}
                    />
                </Modal>
            }
        </>

    );
}

export default Checkoutpropertywrapper;
