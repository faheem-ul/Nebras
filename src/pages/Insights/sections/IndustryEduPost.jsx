import React from 'react'

import { useLanguage } from "@/context/LanguageContext";
import Text from '@/components/ui/Text'
import ArticleCard from '@/components/ArticleCard'

import article1Img from "@/assets/insights/industry-edu/industry-post-1.jpg"
import article2Img from "@/assets/insights/industry-edu/industry-post-2.jpg"
import article3Img from "@/assets/insights/industry-edu/industry-post-3.jpg"

const IndustryEduPost = () => {
    const { lang } = useLanguage();
    const isArabic = lang === "ar";

    const articles = [
        {
            image: article1Img,
            title: isArabic
                ? "أخلاقيات الذكاء الاصطناعي: استكشاف المشهد الأخلاقي"
                : "The Ethics of AI: Navigating the Moral Landscape",
            description: isArabic
                ? "استكشف الاعتبارات الأخلاقية المرتبطة بتطوير ونشر الذكاء الاصطناعي."
                : "Explore the ethical considerations surrounding the development and deployment of artificial intelligence."
        },
        {
            image: article2Img,
            title: isArabic
                ? "مستقبل العمل: التوقعات والتحديات"
                : "The Future of Work: Predictions and Challenges",
            description: isArabic
                ? "اكتسب رؤى حول مستقبل العمل، بما في ذلك اتجاهات العمل عن بُعد وتطور سوق العمل."
                : "Gain insights into the future of work, including remote work trends and the evolving job market."
        },
        {
            image: article3Img,
            title: isArabic
                ? "تأثير وسائل التواصل الاجتماعي على المجتمع"
                : "The Impact of Social Media on Society",
            description: isArabic
                ? "حلّل التأثيرات الاجتماعية لوسائل التواصل الاجتماعي، سواء الإيجابية أو السلبية."
                : "Analyze the societal effects of social media, both positive and negative."
        }
    ];

    return (
        <section className="max-w-[1312px] w-full mx-auto px-5 pb-[60px]">
            <div className="max-w-full mx-auto" data-aos="fade" data-aos-delay="400">
                {/* Heading */}
                <Text className="text-center text-[24px] md:text-[40px] leading-none font-logirent">
                    {isArabic ? "رؤى صناعية ومقالات تعليمية" : "Industry insights and educational posts"}
                </Text>
            </div>

            {/* Responsive Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-[45px] mt-[25px]" data-aos="fade-up" data-aos-delay="400">
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

export default IndustryEduPost
