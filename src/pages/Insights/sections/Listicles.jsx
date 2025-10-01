import React from 'react'

import { useLanguage } from "@/context/LanguageContext";
import Text from '@/components/ui/Text'
import ArticleCard from '@/components/ArticleCard'
import article1Img from "@/assets/insights/listicles/listicles-1.jpg"
import article2Img from "@/assets/insights/listicles/listicles-2.jpg"
import article3Img from "@/assets/insights/listicles/listicles-3.jpg"

const Listicles = () => {
    const { lang } = useLanguage();
    const isArabic = lang === "ar";

    const articles = [
        {
            image: article1Img,
            title: isArabic
                ? "دليل خطوة بخطوة لإعداد مكتب منزلي"
                : "Step-by-Step Guide to Setting Up a Home Office",
            description: isArabic
                ? "عزّز إنتاجيتك مع دليلنا لإنشاء بيئة عمل منزلية مريحة وفعّالة."
                : "Maximize your productivity with our guide to creating an efficient and comfortable home office setup."
        },
        {
            image: article2Img,
            title: isArabic
                ? "كيفية تحسين موقعك الإلكتروني للأجهزة المحمولة"
                : "How to Optimize Your Website for Mobile Devices",
            description: isArabic
                ? "تأكّد من أن موقعك متوافق مع الهواتف المحمولة باستخدام تقنيات التحسين الأساسية هذه."
                : "Ensure your website is mobile-friendly with these essential optimization techniques."
        },
        {
            image: article3Img,
            title: isArabic
                ? "إنشاء محتوى جذاب: دليل للمبتدئين"
                : "Creating Engaging Content: A Guide for Beginners",
            description: isArabic
                ? "تعلّم أساسيات إنشاء المحتوى لجذب جمهورك والحفاظ عليه."
                : "Learn the basics of content creation to attract and retain your audience."
        }
    ];

    return (
        <section className="max-w-[1312px] w-full mx-auto px-5  pb-[34px] md:pb-[60px]">
            <div className='max-w-[287px] md:max-w-[821px] mx-auto' data-aos="fade" data-aos-delay="400">
                {/* Heading */}
                <Text className=" text-center text-[24px] md:text-[40px] leading-snug font-logirent">
                    {isArabic ? "قوائم إرشادية أو محتوى كيف-تفعل" : "Listicles or how-to content"}
                </Text>
            </div>

            {/* Responsive Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[16px] md:gap-[45px] mt-[25px]" data-aos="fade-up" data-aos-delay="400">
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
