import React from 'react'

import Text from '@/components/ui/Text'
import latestNews from '@/assets/insights/latest-news.jpg'

export const LatsetNews = () => {
    return (
        <section className="w-full bg-white pt-[254px] pb-10 md:pb-[50px]">

            {/* Heading */}
            <div className="max-w-[821px] mx-auto px-5" data-aos="fade" data-aos-delay="100">
                <Text className="text-center text-2xl md:text-[40px] md:leading-none font-logirent">
                    latest news & guides
                </Text>
            </div>

            {/* News */}
            <div className="flex flex-col md:flex-row items-center justify-between max-w-[1312px] w-full mx-auto gap-8 md:gap-[38px] px-5 mt-6 md:mt-[23px]">

                {/* Image Column */}
                <div className="w-full md:max-w-[522px] flex-shrink-0 overflow-hidden" data-aos="fade-right" data-aos-delay="400">
                    <img
                        src={latestNews}
                        alt="Latest News"
                        className="w-full h-auto object-cover transform transition duration-300 ease-in-out hover:scale-108"
                    />
                </div>

                {/* Text Column */}
                <div className="flex-1">
                    {/* Title */}
                    <div data-aos="fade-up" data-aos-delay="400">
                        <Text className="mb-3 md:mb-[16px] text-lg leading-6 md:text-[24px] md:leading-[28px] md:max-w-[628px] w-full">
                            The Future of AI in Business: Trends and Predictions
                        </Text>
                    </div>

                    {/* Description */}
                    <div data-aos="fade-up" data-aos-delay="400">
                        <Text className="text-sm leading-6 md:text-[18px] md:leading-[28px] text-[#61758A] mb-3 md:max-w-[641px] w-full">
                            Explore the transformative impact of artificial intelligence on various industries,
                            including finance, healthcare, and retail. This article delves into the latest AI
                            trends, offering insights into how businesses can leverage AI to enhance efficiency,
                            improve customer experiences, and drive innovation.
                        </Text>

                        {/* Meta */}
                        <Text className="text-xs leading-5 md:text-[16px] md:leading-[24px] text-[#61758A]">
                            By Alex Turner | Published on July 26, 2024
                        </Text>
                    </div>
                </div>
            </div>
        </section>
    )
}
