'use client';
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Propertycard from './Propertycarouselcard';
import slideflowbtm1 from '@/public/assets/slideflowbtm1.png';
import slideflowbtm2 from '@/public/assets/slideflowbtm2.png';
import slideflowbtm3 from '@/public/assets/slideflowbtm3.png';
import slideflowbtm4 from '@/public/assets/slideflowbtm4.png';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import Image from 'next/image';

function Property() {
    const swiperRef = useRef(null);

    const property = [
        {
            propertyType: '4bhk apartment',
            price: '₹10.k/sq.ft',
            facing: 'East Facing',
            possession: 'Possession Starts DEC, 2025',
            image: slideflowbtm1,
        },
        {
            propertyType: '3bhk villa',
            price: '₹12.k/sq.ft',
            facing: 'North Facing',
            possession: 'Possession Starts JAN, 2024',
            image: slideflowbtm2,
        },
        {
            propertyType: '2bhk flat',
            price: '₹8.k/sq.ft',
            facing: 'West Facing',
            possession: 'Possession Starts JUN, 2026',
            image: slideflowbtm3,
        },
        {
            propertyType: 'Luxury penthouse',
            price: '₹15.k/sq.ft',
            facing: 'South Facing',
            possession: 'Possession Starts SEP, 2025',
            image: slideflowbtm4,
        },
    ];

    return (
        <div className="relative w-full">
            {/* Swiper Slider */}
            <div>
                <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={10}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    className="w-full h-full"
                >
                    {property.length > 0 ? (
                        property.map((item, index) => (
                            <SwiperSlide key={index}>
                                <Propertycard
                                    propertytype={item.propertyType}
                                    price={item.price}
                                    facing={item.facing}
                                    possession={item.possession}
                                    image={item.image}
                                />
                            </SwiperSlide>
                        ))
                    ) : (
                        <p>No data</p>
                    )}
                </Swiper>
            </div>

            {/* Image Thumbnails with Buttons */}
            <div className="relative flex items-center justify-center w-full pt-4 ">
                <button
                    onClick={() => swiperRef.current?.slidePrev()}
                    className="absolute left-0 z-10 transform bg-[#1D3A76] rounded-full focus:outline-none p-[4px]"
                    aria-label="Previous slide"
                >
                    <IconChevronLeft className="h-4 w-4 text-white" />
                </button>
                <div className='flex space-x-4'>
                    <Image
                        src={slideflowbtm1}
                        alt="slideflowbtm1"
                        className="h-24 w-fit object-cover rounded-sm"
                    />
                    <Image
                        src={slideflowbtm2}
                        alt="slideflowbtm2"
                        className="h-24 w-fit object-cover rounded-sm"
                    />
                    <Image
                        src={slideflowbtm3}
                        alt="slideflowbtm3"
                        className="h-24 w-fit object-cover rounded-sm"
                    />
                    <Image
                        src={slideflowbtm4}
                        alt="slideflowbtm4"
                        className="h-24 w-fit object-cover rounded-sm"
                    />
                </div>
                <button
                    onClick={() => swiperRef.current?.slideNext()}
                    className="absolute right-0 z-10 transform bg-[#1D3A76] rounded-full p-[4px] focus:outline-none"
                    aria-label="Next slide"
                >
                    <IconChevronRight className="h-4 w-4 text-white" />
                </button>
            </div>
        </div>
    );
}

export default Property;
