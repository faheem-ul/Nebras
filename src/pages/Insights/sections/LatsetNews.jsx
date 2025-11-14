import React from 'react'

import { useLanguage } from "@/context/LanguageContext";
import Text from '@/components/ui/Text'
import latestNews from '@/assets/insights/latest-news.jpg'

export const LatsetNews = () => {
    const { lang } = useLanguage();
    const isArabic = lang === "ar";

    return (
        <section className="w-full bg-white pt-[133px] md:pt-[216px] pb-[36px] md:pb-[38px]">

            {/* Heading */}
            <div className="max-w-[821px] mx-auto px-5" data-aos="fade" data-aos-delay="100">
                <Text className={`max-w-[254px] mx-auto  md:max-w-full text-center text-[30px] leading-none  md:text-[40px]  ${isArabic ? "md:text-[50px] md:leading-[100%] font-arabic" : "font-logirent   "
                                }`}>
                    {isArabic ? "آخر الأخبار" : "Latest News"}
                </Text>
            </div>

            {/* News */}
            <div className="flex flex-col md:flex-row items-center justify-between max-w-[1312px] w-full mx-auto gap-[20px] md:gap-[38px] px-5 mt-[12px] md:mt-[53px]">

                {/* Image Column */}
                <div className="w-full md:max-w-[522px] flex-shrink-0 overflow-hidden" data-aos="fade-right" data-aos-delay="400">
                    <img
                        src={latestNews}
                        alt="Latest News"
                        className="w-full h-auto object-cover transform transition duration-300 ease-in-out hover:scale-108"
                    />
                </div>

                {/* Text Column */}
                <div className="flex-1" dir={isArabic ? 'rtl' : 'ltr'}>
                    {/* Title */}
                    <div data-aos="fade-up" data-aos-delay="400">
                        <Text className={` md:mb-[16px] text-[16px] leading-[28px] sm:text-[18px]  md:max-w-[628px] w-full ${
                                    isArabic ? "md:text-[45px] md:leading-[32px] font-arabic" : "md:text-[26px] md:leading-[28px] font-bold "
                                }`} >
                            {isArabic ? <>مستقبل الذكاء الاصطناعي في الأعمال:<br/> الاتجاهات والتوقعات</>: <>The Future of AI in Business:<br/> Trends and Predictions </>}

                        </Text>
                    </div>

                    {/* Description */}
                    <div data-aos="fade-up" data-aos-delay="400">
                        <Text className={`text-sm leading-6   mb-[20px] md:max-w-[721px] w-full 
                        ${
                                    isArabic ? "md:text-[24px] md:leading-[30px] font-zarid" : "md:text-[18px] md:leading-[28px] "
                                }`} >
                                    
                            {isArabic
                                ? "استكشف التأثير التحويلي للذكاء الاصطناعي على مختلف الصناعات، بما في ذلك التمويل والرعاية الصحية وتجارة التجزئة. يتعمق هذا المقال في أحدث اتجاهات الذكاء الاصطناعي، مقدّمًا رؤى حول كيفية تمكّن الشركات من الاستفادة من الذكاء الاصطناعي لتعزيز الكفاءة، وتحسين تجارب العملاء، ودفع عجلة الابتكار."
                                : "Explore the transformative impact of artificial intelligence on various industries, including finance, healthcare, and retail. This article delves into the latest AI trends, offering insights into how businesses can leverage AI to enhance efficiency, improve customer experiences, and drive innovation."
                            }
                        </Text>

                        {/* Meta */}
                        <Text className={ `text-[14px] leading-[24px]   ${
                                    isArabic ? "md:text-[20px] md:leading-[24px] font-zarid" : "md:text-[16px] md:leading-[24px] font-bold"
                                }`} >
                                     {isArabic ? <>بقلم أليكس تيرنر | نُشر في ٢٦ يوليو ٢٠٢٤</>: <> By Alex Turner | Published on July 26, 2024</>}
                           
                        </Text>
                    </div>
                </div>
            </div>
        </section>
    )
}
