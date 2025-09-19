import React from 'react'

import Text from '@/components/ui/Text'

import ArticleCard from '@/components/ArticleCard'
import article1Img from "@/assets/insights/industry-edu/industry-post-1.jpg"
import article2Img from "@/assets/insights/industry-edu/industry-post-2.jpg"
import article3Img from "@/assets/insights/industry-edu/industry-post-3.jpg"

const IndustryEduPost = () => {
    const articles = [
        {
            image: article1Img,
            title: "The Ethics of AI: Navigating the Moral Landscape",
            description: "Explore the ethical considerations surrounding the development and deployment of artificial intelligence."
        },
        {
            image: article2Img,
            title: "The Future of Work: Predictions and Challenges",
            description: "Gain insights into the future of work, including remote work trends and the evolving job market."
        },
        {
            image: article3Img,
            title: "The Impact of Social Media on Society",
            description: "Analyze the societal effects of social media, both positive and negative."
        }
    ];
    return (
        <section className="max-w-[1312px] w-full mx-auto px-5 pb-[60px]">
            <div className='max-w-[821px] mx-auto'>
                {/* Heading */}
                <Text className="text-center md:text-[40px] md:leading-none font-logirent">
                    Listicles or how-to content
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

export default IndustryEduPost