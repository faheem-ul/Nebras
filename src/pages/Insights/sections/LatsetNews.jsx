import React from 'react'

import Text from '@/components/ui/Text'

import latestNews from '@/assets/insights/latest-news.jpg'

export const LatsetNews = () => {
    return (
        <section className="w-full bg-white pt-[254px] pb-[50px]">

            {/* Heading */}
            <div className='max-w-[821px] mx-auto'>
                {/* Heading */}
                <Text className="text-center md:text-[40px] md:leading-none font-logirent">
                    latest news & guides
                </Text>
            </div>

            {/* News */}
            <div className="flex flex-col md:flex-row items-center justify-between max-w-[1312px] w-full mx-auto gap-[38px] px-5 mt-[23px]">
                {/* Image Column */}
                <div className="w-full md:max-w-[522px] flex-shrink-0">
                    <img
                        src={latestNews}
                        alt="mission.jpg"
                        className="w-full h-auto object-cover "
                    />
                </div>

                {/* Text Column */}
                <div className="flex-1">
                    {/* Title */}
                    <Text className="mb-4 md:text-[24px] md:leading-[28px]">
                        The Future of AI in Business: Trends and Predictions
                    </Text>
                    {/* Description */}
                    <Text className="leading-[28px] md:text-[18px] text-[#61758A] mb-3">
                        Explore the transformative impact of artificial intelligence on various industries, including finance, healthcare, and retail. This article delves into the latest AI trends, offering insights into how businesses can leverage AI to enhance efficiency, improve customer experiences, and drive innovation.
                    </Text>
                    {/* Meta */}
                    <Text className="md:leading-[24px] md:text-[16px] text-[#61758A]">
                        By Alex Turner | Published on July 26, 2024
                    </Text>
                </div>
            </div>

        </section >
    )
}
