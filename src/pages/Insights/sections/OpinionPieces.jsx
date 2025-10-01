import React from 'react'

import { useLanguage } from "@/context/LanguageContext";
import Text from '@/components/ui/Text'
import ArticleCard from '@/components/ArticleCard'

import article1Img from "@/assets/insights/opnion/opinion-1.jpg"
import article2Img from "@/assets/insights/opnion/opinion-2.jpg"
import article3Img from "@/assets/insights/opnion/opinion-3.jpg"

const OpinionPieces = () => {
    const { lang } = useLanguage();
    const isArabic = lang === "ar";

    const articles = [
        {
            image: article1Img,
            title: isArabic
                ? "٥ نصائح أساسية لإدارة فعّالة للفرق عن بُعد"
                : "5 Essential Tips for Effective Remote Team Management",
            description: isArabic
                ? "تعرّف على كيفية تحسين التعاون والإنتاجية في الفرق البعيدة باستخدام هذه الاستراتيجيات العملية."
                : "Learn how to optimize remote team collaboration and productivity with these actionable strategies."
        },
        {
            image: article2Img,
            title: isArabic
                ? "دليل شامل للأمن السيبراني للشركات الصغيرة"
                : "A Comprehensive Guide to Cybersecurity for Small Businesses",
            description: isArabic
                ? "احمِ عملك من التهديدات الإلكترونية من خلال هذا الدليل المفصل الذي يغطي التدابير الأمنية الأساسية."
                : "Protect your business from cyber threats with this detailed guide covering essential security measures."
        },
        {
            image: article3Img,
            title: isArabic
                ? "صعود تقنية البلوك تشين: تطبيقات تتجاوز العملات الرقمية"
                : "The Rise of Blockchain Technology: Applications Beyond Cryptocurrency",
            description: isArabic
                ? "اكتشف إمكانات تقنية البلوك تشين في مختلف القطاعات، من إدارة سلاسل التوريد إلى الهوية الرقمية."
                : "Discover the potential of blockchain technology in various sectors, from supply chain management to digital identity."
        }
    ];

    return (
        <section className="max-w-[1312px] w-full mx-auto px-5 pb-[36px] md:pb-[60px]">
            {/* Heading */}
            <div className="max-w-[821px] mx-auto" data-aos="fade" data-aos-delay="400">
                <Text className="text-center text-[30px] leading-none md:text-[40px] md:leading-none font-logirent">
                    {isArabic ? "مقالات الرأي" : "opinion pieces"}
                </Text>
            </div>

            {/* Articles */}
            <div className="flex flex-col md:flex-row md:flex-wrap justify-between gap-[16px] md:gap-[45px] mt-6 md:mt-[25px]"
                data-aos="fade-up" data-aos-delay="400"
            >
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
