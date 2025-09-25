import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import rightIcon from "@/assets/our-projects/nav-right.svg"
import leftIcon from "@/assets/our-projects/nav-left.svg"

const ProjectSlider = ({ images = [] }) => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    if (!images.length) return null;

    return (
        <section className="relative max-w-[1312px] w-full mx-auto px-5 pb-[80px] md:p-0 mb-[109px]">
            {/* Desktop Navigation Buttons  */}
            <div className="flex justify-center md:justify-end md:mb-[40px] gap-5 md:gap-3 
                absolute bottom-0 left-1/2 -translate-x-1/2 w-full 
                md:relative md:left-0 md:translate-x-0">
                <button
                    ref={prevRef}
                    className="bg-[#393C3D] rounded-full cursor-pointer w-[40px] h-[40px] md:w-[58px] md:h-[58px] flex items-center justify-center"
                >
                    <img src={leftIcon} className='w-[12px]' />
                </button>
                <button
                    ref={nextRef}
                    className="bg-[#393C3D] rounded-full cursor-pointer w-[40px] h-[40px] md:w-[58px] md:h-[58px] flex items-center justify-center"
                >
                    <img src={rightIcon} className='w-[12px]' />
                </button>
            </div>

            {/* Swiper */}
            <Swiper
                modules={[Navigation]}
                spaceBetween={40}
                loop={true}
                onInit={(swiper) => {
                    // Connect custom buttons to Swiper
                    if (swiper.params.navigation) {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                        swiper.navigation.init();
                        swiper.navigation.update();
                    }
                }}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                }}
            >
                {images.map((img, idx) => (
                    <SwiperSlide key={idx}>
                        <div className="overflow-hidden">
                            <img
                                src={img}
                                alt={`Slide ${idx + 1}`}
                                className="max-w-[636px] w-full h-auto object-cover transform transition duration-300 ease-in-out hover:scale-108"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Mobile Navigation Buttons  */}
            {/* <div className="flex justify-center mt-[30px] gap-3 md:hidden">
                <button
                    ref={prevRef}
                    className="bg-[#393C3D] rounded-full cursor-pointer w-[40px] h-[40px]  flex items-center justify-center"
                >
                    <img src={leftIcon} className='w-[12px]' />
                </button>
                <button
                    ref={nextRef}
                    className="bg-[#393C3D] rounded-full cursor-pointer w-[40px] h-[40px] md:w-[58px] md:h-[58px] flex items-center justify-center"
                >
                    <img src={rightIcon} className='w-[12px]' />
                </button>
            </div> */}
        </section>
    );
};

export default ProjectSlider;
