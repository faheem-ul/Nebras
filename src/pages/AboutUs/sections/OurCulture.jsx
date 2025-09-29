import React from 'react'
import Text from '@/components/ui/Text';

import ourCulture1 from '@/assets/about/our-culture-1.jpg';
import ourCulture2 from '@/assets/about/our-culture-2.jpg';
import ourCulture3 from '@/assets/about/our-culture-3.jpg';
import ourCulture4 from '@/assets/about/our-culture-4.jpg';

const OurCulture = () => {
    const cultureData = [
        {
            title: "EMPLOYEE EMPOWERMENT",
            description: "We empower our employees to take ownership of their work, make decisions, and contribute to the company’s success.",
            image: ourCulture1
        },
        {
            title: "CONTINUOUS LEARNING",
            description: "We empower our employees to take ownership of their work, make decisions, and contribute to the company’s success.",
            image: ourCulture2
        },
        {
            title: "WORK-LIFE BALANCE",
            description: "We promote a healthy work-life balance and support employee well-being.",
            image: ourCulture3
        },
        {
            title: "DIVERSITY AND INCLUSION",
            description: "We celebrate diversity and create an inclusive environment where everyone feels valued and respected.",
            image: ourCulture4
        },
    ];
    return (
        <section className="bg-white mb-[42px] md:mb-[64px] mt-[59px] md:mt-[91px] max-w-[1312px] w-full mx-auto px-5 md:px-0">
            {/* Section Title */}
            <div data-aos="fade-up" data-aos-delay="400">
                <Text as="h1" className="text-center text-[30px] md:text-[55px] leading-[42px] md:leading-[42px] mb-[43px] md:mb-[48px]">
                    Our Culture
                </Text>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[42px] md:gap-[28px]" data-aos="fade-up" data-aos-delay="500">
                {cultureData.map((item, index) => (
                    <div
                        key={index}
                        className="w-fulloverflow-hidden"
                    >
                        {/* Image */}
                        <div className="overflow-hidden">
                            <img
                                className="w-full h-[262px] object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                                src={item.image}
                                alt={item.title}
                            />
                        </div>

                        {/* Text Content */}
                        <div className="pt-[33px] md:pt-[42px]">
                            <Text className="text-[18px] md:text-[18px] font-semibold leading-[18px] md:leading-[18px] text-center">
                                {item.title}
                            </Text>
                            <Text className="text-[14px] md:text-[14px] leading-[22px] md:leading-[22px]  mt-[19px] text-center">
                                {item.description}
                            </Text>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default OurCulture