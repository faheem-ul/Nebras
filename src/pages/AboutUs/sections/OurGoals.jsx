import React from 'react'

import Text from "@/components/ui/Text";
import driveInovation from '@/assets/about/drive-inovation.svg'
import envirStewardship from '@/assets/about/envir-stewardship.svg'
import clientSuccess from '@/assets/about/client-success.svg'

const OurGoals = () => {

    const values = [
        {
            title: "DRIVING INNOVATION",
            description: "DEVELOPING CUTTING-EDGE SOLUTIONS FOR A SUSTAINABLE FUTURE.",
            icon: driveInovation
        },
        {
            title: "ENVIRONMENTAL STEWARDSHIP",
            description: "REDUCING OUR ENVIRONMENTAL IMPACT THROUGH SUSTAINABLE PRACTICES.",
            icon: envirStewardship
        },
        {
            title: "CLIENT SUCCESS",
            description: "DELIVERING EXCEPTIONAL VALUE AND EXCEEDING CLIENT EXPECTATIONS.",
            icon: clientSuccess
        },
    ];


    return (
        <section className="bg-white mt-[34px] md:mt-[117px] max-w-[1312px] w-full mx-auto px-5 md:px-0">
            {/* Section Title */}
            <div data-aos="fade-up" data-aos-delay="400">
                <Text as="h1" className="text-center text-[30px] md:text-[55px] leading-[42px] md:leading-[42px] mb-[22px] md:mb-[48px]">
                    our Goals
                </Text>
            </div>

            {/* Cards */}
            <div className="mx-auto flex flex-col md:flex-row gap-[18px]" data-aos="fade-up" data-aos-delay="500">
                {values.map((item, idx) => (
                    <div key={idx} className="flex-1 bg-white  pt-[39.7px] pb-[29px] md:pb-[45px] px-[21.5px]" style={{ boxShadow: '0px 4px 20px 0px #0000001A' }}>
                        <div className="mb-4 flex justify-start">
                            <img src={item.icon} className='w-auto max-h-[42px] md:max-h-[51px] mb-[91px] md:mb-[76px]' />
                        </div>
                        <Text className=" mb-[9px]">{item.title}</Text>
                        <Text className="text-[15px] leading-[26px] md:text-[18px] md:leading-[26px]">{item.description}</Text>
                    </div>
                ))}
            </div>

        </section >
    )
}

export default OurGoals