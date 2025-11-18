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
            title: isArabic ? "ابتكار القيادة" : "Driving Innovation",
            description: isArabic
                ? "تطوير حلول متطورة لمستقبل مستدام."
                : "Developing cutting-edge solutions for a sustainable future.",
            icon: driveInovation
        },
        {
            title: isArabic ? "الاستدامة" : "Environmental Stewardship",
            description: isArabic
                ? "الحد من تأثيرنا البيئي من خلال الممارسات المستدامة."
                : "Reducing our environmental impact through sustainable practices.",
            icon: envirStewardship
        },
        {
            title: isArabic ? "نجاح العميل" : "Client Success",
            description: isArabic
                ? "تقديم قيمة استثنائية وتجاوز توقعات العملاء."
                : "Delivering exceptional value and exceeding client expectations.",
            icon: clientSuccess
        },
    ];


    return (
        <section className="bg-white mt-[34px] md:mt-[71px] max-w-[1312px] w-full mx-auto px-5 md:px-0">
            {/* Section Title */}
            <div data-aos="fade-up" data-aos-delay="400">
                <Text as="h1" className={`text-center text-[30px] md:text-[55px] leading-[42px] md:leading-[42px] mb-[22px] md:mb-[48px] ${isArabic ? 'md:text-[75px]' : ''}`}>
                    {isArabic ? 'أهدافنا' : 'our Goals'}
                </Text>
            </div>

            {/* Cards */}
            <div className="mx-auto flex flex-col md:flex-row gap-[32px]" data-aos="fade-up" data-aos-delay="500" dir={isArabic ? 'rtl' : 'ltr'}>
                {values.map((item, idx) => (
                    <div key={idx} className={`flex-1 bg-[#f7f7f7]  pt-[39.7px] pb-[29px] md:pb-[45px] px-[21.5px] text-center`}
                        style={{ boxShadow: '0px 4px 20px 0px #0000001A' }}>
                        <div className="flex justify-center mb-[31px]">
                            <img src={item.icon} className='w-auto max-h-[42px] md:max-h-[60px] ' />
                        </div>
                        <Text className={` capitalize ${isArabic ? 'md:text-[45px] md:leading-[42px] font-arabic' : 'md:text-[24px] md:leading-[42px] font-bold'}`}>{item.title} </Text>
                        <Text className={`mx-auto  text-[15px] leading-[26px] ${isArabic ? 'md:text-[26px] md:leading-[30px] mt-[9px]' : ' max-w-[296px] font-ubuntu md:text-[18px] md:leading-[26px]'} `} >{item.description}</Text>

                    </div>
                ))}
            </div>

        </section >
    )
}

export default OurGoals