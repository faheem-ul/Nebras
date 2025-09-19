import React from 'react'

import Text from '@/components/ui/Text'
import ArticleCard from '@/components/ArticleCard'

import article1Img from "@/assets/insights/opnion/opinion-1.jpg"
import article2Img from "@/assets/insights/opnion/opinion-2.jpg"
import article3Img from "@/assets/insights/opnion/opinion-3.jpg"

const OpinionPieces = () => {
    const articles = [
        {
            image: article1Img,
            title: "5 Essential Tips for Effective Remote Team Management",
            description: "Learn how to optimize remote team collaboration and productivity with these actionable strategies."
        },
        {
            image: article2Img,
            title: "A Comprehensive Guide to Cybersecurity for Small Businesses",
            description: "Protect your business from cyber threats with this detailed guide covering essential security measures."
        },
        {
            image: article3Img,
            title: "The Rise of Blockchain Technology: Applications Beyond Cryptocurrency",
            description: "Discover the potential of blockchain technology in various sectors, from supply chain management to digital identity."
        }
    ];

    return (
        <section className="max-w-[1312px] w-full mx-auto px-5 pb-10 md:pb-[60px]">
            {/* Heading */}
            <div className="max-w-[821px] mx-auto">
                <Text className="text-center text-2xl md:text-[40px] md:leading-none font-logirent">
                    opinion pieces
                </Text>
            </div>

            {/* Articles */}
            <div className="flex flex-col md:flex-row md:flex-wrap justify-between gap-6 md:gap-[45px] mt-6 md:mt-[25px]">
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

export default OpinionPieces
