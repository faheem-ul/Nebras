import React from 'react'

import { useLanguage } from "@/context/LanguageContext";
import Text from "@/components/ui/Text";
import driveInovation from '@/assets/about/drive-inovation.svg'
import envirStewardship from '@/assets/about/envir-stewardship.svg'
import clientSuccess from '@/assets/about/client-success.svg'

const OurGoals = () => {
    const { lang } = useLanguage(); // 'en' or 'ar'
    const isArabic = lang === 'ar';

    const values = [
        {
            title: isArabic ? "تعزيز الابتكار" : "DRIVING INNOVATION",
            description: isArabic
                ? "تطوير حلول متطورة لمستقبل مستدام."
                : "DEVELOPING CUTTING-EDGE SOLUTIONS FOR A SUSTAINABLE FUTURE.",
            icon: driveInovation
        },
        {
            title: isArabic ? "الحفاظ على البيئة" : "ENVIRONMENTAL STEWARDSHIP",
            description: isArabic
                ? "الحد من تأثيرنا البيئي من خلال الممارسات المستدامة."
                : "REDUCING OUR ENVIRONMENTAL IMPACT THROUGH SUSTAINABLE PRACTICES.",
            icon: envirStewardship
        },
        {
            title: isArabic ? "نجاح العميل" : "CLIENT SUCCESS",
            description: isArabic
                ? "تقديم قيمة استثنائية وتجاوز توقعات العميل."
                : "DELIVERING EXCEPTIONAL VALUE AND EXCEEDING CLIENT EXPECTATIONS.",
            icon: clientSuccess
        },
    ];


    return (
        <section className="bg-white mt-[34px] md:mt-[117px] max-w-[1312px] w-full mx-auto px-5 md:px-0">
            {/* Section Title */}
            <div data-aos="fade-up" data-aos-delay="400">
                <Text as="h1" className="text-center text-[30px] md:text-[55px] leading-[42px] md:leading-[42px] mb-[22px] md:mb-[48px]">
                    {isArabic ? 'أهدافنا' : 'our Goals'}
                </Text>
            </div>

            {/* Cards */}
            <div className="mx-auto flex flex-col md:flex-row gap-[18px]" data-aos="fade-up" data-aos-delay="500" dir={isArabic ? 'rtl' : 'ltr'}>
                {values.map((item, idx) => (
                    <div key={idx} className={`flex-1 bg-white  pt-[39.7px] pb-[29px] md:pb-[45px] px-[21.5px] ${isArabic ? 'text-right' : 'text-left'}`}
                        style={{ boxShadow: '0px 4px 20px 0px #0000001A' }}>
                        <div className="mb-4 flex justify-start">
                            <img src={item.icon} className='w-auto max-h-[42px] md:max-h-[51px] mb-[91px] md:mb-[76px]' />
                        </div>
                        <Text className=" mb-[9px]">{item.title}</Text>
                        <Text className="text-[15px] leading-[26px] md:text-[18px] md:leading-[26px]">{item.description}</Text>
                    </div>
                ))}
            </div>

        </section >
    )
}

export default OurGoals