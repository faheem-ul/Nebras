import React from 'react'

import { useLanguage } from "@/context/LanguageContext";
import Text from '@/components/ui/Text'

const ArticleCard = ({ image, title, description }) => {
    const { lang } = useLanguage();
    const isArabic = lang === "ar";

    return (
        <div className="w-full max-w-[390px] bg-white overflow-hidden"
            dir={isArabic ? 'rtl' : 'ltr'}>
            <div className='overflow-hidden'>
                <img
                    className="w-full md:h-[218px] sm:h-[218px] h-[180px] object-cover transform transition duration-300 ease-in-out hover:scale-108"
                    src={image}
                    alt="Article"
                />
            </div>

            <div className="pt-[19px]">
                <Text className="text-[14px] md:text-[16px] leading-[21px] md:leading-[24px]">
                    {title}
                </Text>
                <Text className="text-[13px] md:text-[14px] leading-[20px] md:leading-[21px] text-[#61758A] mt-3">
                    {description}
                </Text>
            </div>
        </div>
    )
}

export default ArticleCard
