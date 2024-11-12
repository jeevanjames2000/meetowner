import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function Checkoutpropertywrapper() {
    return (
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
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Checkoutpropertywrapper;
