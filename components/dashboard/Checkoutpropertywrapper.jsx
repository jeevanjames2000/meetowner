'use client';

import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { IconArrowLeft, IconArrowRight, IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import Checkoutpropertywrappercard from './shared/Checkoutpropertywrappercard';

// Import Images
import apartment from '@/public/assets/apartment.jpg';
import apartment1 from '@/public/assets/apartment1.jpg';
import apartment2 from '@/public/assets/apartment2.jpg';
import apartment3 from '@/public/assets/apartment3.jpg';
import apartment4 from '@/public/assets/apartment4.jpg';

function Checkoutpropertywrapper() {
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

    return (
        <div className="bg-white rounded-[10px] mt-4 p-4 ">
            {/* Header Section */}
            <div className="flex flex-row justify-between items-center">
                <p className="text-[#1D3A76] text-sm font-semibold">Checkout your property</p>
                <button
                    className="text-[#287DB0] border-[2px] border-[#287DB0] px-4 py-1 rounded-md text-[12px] font-semibold"
                    aria-label="View all properties"
                >
                    View All
                </button>
            </div>

            {/* Swiper Section */}
            <div className="relative">
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={50}
                    slidesPerView={1}
                    loop={true}
                    className="w-[800px] h-full"
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    // onSlideChange={() => console.log('Slide changed')}
                    // navigation
                >
                    {property.map((item, index) => (
                        <SwiperSlide key={index}>
                            <Checkoutpropertywrappercard
                                image={item.image}
                                land={item.land}
                                cost={item.cost}
                                area={item.area}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom Navigation Buttons */}
                <button
                    onClick={() => swiperRef.current?.slidePrev()}
                    className="absolute top-28 -left-2.5 z-10 transform -translate-y-1/2 bg-[#1D3A76] rounded-full p-1 focus:outline-none border border-gray-300"
                    aria-label="Previous slide"
                >
                    <IconChevronLeft className="h-3 w-3 text-[#ffffff]" />
                </button>

                <button
                    onClick={() => swiperRef.current?.slideNext()}
                    className="absolute top-28 -right-2.5 z-10 transform -translate-y-1/2 bg-[#1D3A76] rounded-full p-1 focus:outline-none border border-gray-300"
                    aria-label="Next slide"
                >
                    <IconChevronRight className="h-3 w-3 text-[#ffffff]" />
                </button>
            </div>
        </div>
    );
}

export default Checkoutpropertywrapper;
