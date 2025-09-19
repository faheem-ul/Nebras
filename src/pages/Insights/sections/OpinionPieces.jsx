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
        <section className="max-w-[1312px] w-full mx-auto px-5 pb-[60px]">
            <div className='max-w-[821px] mx-auto'>
                {/* Heading */}
                <Text className="text-center md:text-[40px] md:leading-none font-logirent">
                    opinion pieces
                </Text>
            </div>
            <div className="flex flex-wrap justify-between gap-[45px] mt-[25px]">
                {articles.map((article, index) => (
                    <ArticleCard
                        key={index} // Use the index or a unique id from the JSON if available
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