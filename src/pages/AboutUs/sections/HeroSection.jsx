import React from "react";

import heroBg from '../../../assets/about/hero-bg.jpg'
import Text from "../../../components/ui/Text";
const HeroSection = () => {
    return (
        <div className="relative w-full pt-[216px] bg-[#393C3D] ">

            {/* Main Content */}
            <div className="relative flex items-start  justify-between max-w-[1440px] mx-auto min-h-[611px]">
                {/* Left Section (Text) */}
                <div className="pl-[68px]">
                    <Text className="text-[18px] text-white mt-[61px]">HOME / WHO WE ARE</Text>
                    <Text as="h1" className="text-white   mt-[116px]"><span className="text-outline-white">Who</span><br />  we are</Text>
                </div>

                {/* Right Section (Image) */}
                <div>
                    <img
                        src={heroBg}
                        alt="Team Collaboration"
                        className="w-full h-full object-cover"
                    />
                </div>
                {/* Bottom Description 1312 */}
                <div className="bg-[#016938] text-white py-[36.75px] pl-[67.6px] pr-[102px]  max-w-[982px] absolute bottom-0 left-0">
                    <Text className="md:text-[18px] md:leading-[27px]">
                        Consolidated Consultants Group (CCG) is a pioneering architectural and
                        engineering consultancy firm that provides a comprehensive range of services in
                        the fields of design, management and specialized studies.
                    </Text>
                </div>
            </div>


        </div>
    );
};

export default HeroSection;
