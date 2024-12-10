'use client';
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import property from '@/public/assets/property_image.png';
function Propertiesgallery({ propertyGallery }) {
    const swiperRef = useRef(null);
    return (
        < div className=' flex flex-col space-y-6'>
            <div className=" relative ">
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
                    className="w-full h-full"
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                >
                    {propertyGallery.length > 0 ? (
                        propertyGallery.map((item, index) => (
                            <SwiperSlide key={index}>
                                <Image
                                    src={item}
                                    alt={"property"}
                                    height={150}
                                    width={150}
                                    className="object-cover rounded-lg w-full"
                                />
                            </SwiperSlide>
                        ))
                    ) : (
                        <Image
                            src={property}
                            alt={"property"}
                            height={150}
                            width={150}
                            className="object-cover w-full rounded-lg"
                        />
                    )}
                </Swiper>
            </div>
        </div>
    );
}



export default Propertiesgallery