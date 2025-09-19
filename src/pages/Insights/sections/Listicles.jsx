import React from 'react'
import Text from '@/components/ui/Text'
import ArticleCard from '@/components/ArticleCard'

import article1Img from "@/assets/insights/listicles/listicles-1.jpg"
import article2Img from "@/assets/insights/listicles/listicles-2.jpg"
import article3Img from "@/assets/insights/listicles/listicles-3.jpg"

const Listicles = () => {
    const articles = [
        {
            image: article1Img,
            title: "Step-by-Step Guide to Setting Up a Home Office",
            description: "Maximize your productivity with our guide to creating an efficient and comfortable home office setup."
        },
        {
            image: article2Img,
            title: "How to Optimize Your Website for Mobile Devices",
            description: "Ensure your website is mobile-friendly with these essential optimization techniques."
        },
        {
            image: article3Img,
            title: "Creating Engaging Content: A Guide for Beginners",
            description: "Learn the basics of content creation to attract and retain your audience."
        }
    ];

    return (
        <section className="max-w-[1312px] w-full mx-auto px-5 pb-[60px]">
            <div className='max-w-[821px] mx-auto'>
                {/* Heading */}
                <Text className="text-center text-[24px] md:text-[40px] leading-snug font-logirent">
                    Listicles or how-to content
                </Text>
            </div>

            {/* Responsive Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-[45px] mt-[25px]">
                {articles.map((article, index) => (
                    <ArticleCard
                        key={index}
                        image={article.image}
                        title={article.title}
                        description={article.description}
                    />
                ))}
            </div>
        </section>
    )
}

export default Listicles
