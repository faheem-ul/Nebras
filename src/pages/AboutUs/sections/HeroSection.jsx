import React from "react";

import heroBg from "../../../assets/about/hero-bg.jpg";
import Text from "../../../components/ui/Text";

const HeroSection = () => {
    return (
        <div className="relative w-full pt-[216px] md:pt-[216px] bg-[#393C3D]">
            {/* Main Content */}
            <div className="relative flex flex-col md:flex-row items-start justify-between max-w-[1440px] mx-auto min-h-[400px] md:min-h-[611px]">

                {/* Left Section (Text) */}
                <div className="px-5 md:pl-[88px]">
                    <Text className="text-sm md:text-[18px] text-white mt-6 md:mt-[61px]">
                        HOME / WHO WE ARE
                    </Text>
                    <Text
                        as="h1"
                        className="text-white text-3xl md:text-6xl mt-10 md:mt-[116px]"
                    >
                        <span className="text-outline-white">Who</span>
                        <br /> we are
                    </Text>
                </div>

                {/* Right Section (Image) */}
                <div className="w-full md:w-auto mt-8 md:mt-0">
                    <img
                        src={heroBg}
                        alt="Team Collaboration"
                        className="w-full h-auto md:h-full object-cover"
                    />
                </div>

                {/* Bottom Description */}
                <div className="bg-[#016938] text-white py-6 md:py-[36.75px] px-5 md:pl-[88px] md:pr-[102px] max-w-full md:max-w-[982px] relative md:absolute md:bottom-0 left-0">
                    <Text className="text-sm leading-6 md:text-[18px] md:leading-[27px]">
                        Consolidated Consultants Group (CCG) is a pioneering architectural and
                        engineering consultancy firm that provides a comprehensive range of
                        services in the fields of design, management and specialized studies.
                    </Text>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
