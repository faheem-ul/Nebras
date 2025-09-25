import React from "react";

import heroBg from '../../../assets/contact/hero-bg.jpg'
import Text from "../../../components/ui/Text";
const HeroSection = () => {
    return (
        <div className="relative w-full min-h-[827px] bg-[#393C3D] overflow-hidden ">

            {/* BG Image */}
            <img
                src={heroBg}
                alt="bg_image"
                className="absolute inset-0 w-full h-full object-cover bg-slow-zoom"
            />

            {/* Main Content */}
            <div className="relative flex flex-col  min-h-[827px] max-w-[1312px] mx-auto pt-[377px] px-5">
                <div data-aos="fade-right" data-aos-delay="400">
                    <Text as="h1" className="text-white mb-[20px] ">Contact <span className="text-outline-white">Us</span></Text>
                </div>
                <div className="w-[145px] h-px bg-white" data-aos="fade-right" data-aos-delay="500" />
                <div data-aos="fade-up" data-aos-delay="400">
                    <Text className="max-w-[648px] text-[16px] md:text-[18px] md:leading-[32px] text-white mt-[61px]">Reach out to Us for inquiries, partnerships, or more information
                        about our services. We're here to assist you
                        with any questions and look forward to connecting with
                        you.
                    </Text>
                </div>
            </div>


        </div>
    );
};

export default HeroSection;
