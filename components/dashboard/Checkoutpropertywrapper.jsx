'use client'
import React from 'react';
import { useRef } from 'react';
// import Loginwrapper from '../login/Loginwrapper';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

import Image from 'next/image'
import apartment from '@/public/assets/apartment.jpg'
import apartment1 from '@/public/assets/apartment1.jpg'
import apartment2 from '@/public/assets/apartment2.jpg'
import apartment3 from '@/public/assets/apartment3.jpg'
import apartment4 from '@/public/assets/apartment4.jpg'
import { Icon123, IconNumber123 } from '@tabler/icons-react';

function Checkoutpropertywrapper() {
    const swiperRef = useRef(null)

    const slides = [
        { src: apartment, alt: "banner" },
        { src: apartment1, alt: "banner" },
        { src: apartment2, alt: "banner" },
        { src: apartment3, alt: "banner" },
        { src: apartment4, alt: "apartment4" },
    ]
    return (
        <>
            <div className='bg-white rounded-sm mt-4 p-4'>
                <div className='flex flex-row justify-between items-center'>
                    <p className='text-[#1D3A76] text-sm font-semibold'>Checkout your property</p>
                    <button
                        className='text-[#287DB0] border-[2px] border-[#287DB0] px-4 py-1 rounded-md text-[12px] font-semibold'
                        aria-label="View all properties"
                    >
                        View All
                    </button>
                </div>
                <div className="relative w-[400PX] h-48">
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={50}
                        slidesPerView={1}
                        className="w-full h-full"
                        loop={true}
                        onSwiper={(swiper) => {
                            swiperRef.current = swiper
                            console.log(swiper)
                        }}
                        onSlideChange={() => console.log('slide change')}
                    >
                        {slides.map((slide, index) => (
                            <SwiperSlide key={index} className="w-72 h-96">
                                <Image
                                    src={slide.src}
                                    alt={slide.alt}
                                    className="w-full h-full object-cover"
                                    layout="fill"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <button
                        onClick={() => swiperRef.current?.slidePrev()}
                        className="absolute top-1/2 left-4 z-10 transform -translate-y-1/2 bg-white/80 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary border border-gray-300"
                        aria-label="Previous slide"
                    >
                        <Icon123 className="h-6 w-6 text-gray-800" />
                    </button>

                    <button
                        onClick={() => swiperRef.current?.slideNext()}
                        className="absolute top-1/2 right-4 z-10 transform -translate-y-1/2 bg-white/80 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary border border-gray-300"
                        aria-label="Next slide"
                    >
                        <IconNumber123 className="h-6 w-6 text-gray-800" />
                    </button>
                </div>
            </div>
        </>
    );
}

export default Checkoutpropertywrapper;
