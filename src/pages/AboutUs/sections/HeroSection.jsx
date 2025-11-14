import React from "react";

import { useLanguage } from "@/context/LanguageContext";
import Text from "@/components/ui/Text";
import heroBg from "@/assets/about/hero-img.jpg";

const HeroSection = () => {
    const { lang } = useLanguage(); // 'en' or 'ar'
    const isArabic = lang === "ar";

    return (
        <div className="relative w-full min-h-[440px]  md:min-h-[827px] bg-[#393C3D] overflow-hidden ">

            {/* BG Image */}
            <img
                src={heroBg}
                alt="bg_image"
                className="absolute inset-0 w-full h-full object-cover bg-slow-zoom"
            />

 {/* Black Overlay */}
 <div className="absolute inset-0 bg-black/50 "></div>

            {/* Main Content */}
            <div className="relative flex flex-col min-h-[440px]   md:min-h-[827px] max-w-[1312px] mx-auto pb-[102px] pt-[178px] md:pt-[377px] px-5" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
                <div data-aos="fade-right" data-aos-delay="400">
                    <Text as="h1" className={`text-white mb-[14.8px] md:mb-[14px] leading-none  ${isArabic ? "md:text-[85px]" : "md:text-[65px" }`}>
                        {isArabic ? "من نحن" : "Who We Are"}
                    </Text>
                </div>
                <div data-aos="fade-up" data-aos-delay="400">
                    <Text className={`text-[14px] leading-[25px] md:text-[18px] md:leading-[27px] text-white ${isArabic ? "md:text-[36px] md:leading-[39px] max-w-[898px] font-arabic " : "max-w-[665px] md:text-[18px] md:leading-[27px]" }`}>
                        {isArabic
                            ? "تأسست شركة نبراس تهامة للاستشارات الهندسية والفنية في قلب مدينة عمان بالأردن، وقد نجحت في ترسيخ مكانتها كمزود رائد للاستشارات الهندسية وخدمات التخطيط الحضري."
                            : "Established in the heart of Amman, Jordan, Nebras Tihamah Engineering and Technical Consultancy has carved a niche for itself as a leading provider of engineering consultancy and urban planning services."
                        }
                    </Text>
                </div>
            </div>


        </div>
    );
};

export default HeroSection;
