import React from "react";

import { useLanguage } from "@/context/LanguageContext";
import Text from "@/components/ui/Text";
import heroBg from "@/assets/contact/hero-bg.jpg";

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

            {/* Main Content */}
            <div className="relative flex flex-col min-h-[440px]   md:min-h-[827px] max-w-[1312px] mx-auto pb-[102px] pt-[178px] md:pt-[377px] px-5" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
                <div data-aos="fade-right" data-aos-delay="400">
                    <Text as="h1" className="text-white mb-[14.8px] md:mb-[20px] leading-none">
                        {isArabic ? "اتصل" : "Contact"}{" "}
                        <span className="text-outline-white">
                            {isArabic ? "بنا" : "Us"}
                        </span>
                    </Text>
                </div>
                <div className="w-[145px] h-px bg-white" data-aos="fade-right" data-aos-delay="500" />
                <div data-aos="fade-up" data-aos-delay="400">
                    <Text className="max-w-[648px] text-[14px] leading-[25px] md:text-[18px] md:leading-[32px] text-white mt-[14px] md:mt-[61px]">
                        {isArabic
                            ? "في شركة نبراس للاستشارات، نحن لا نقدم الحلول فحسب، بل نبني شراكات. نعمل جنباً إلى جنب مع عملائنا لفهم أهدافهم وتقديم خدمات هندسية واستشارية تُحدث أثراً حقيقياً."
                            : "At Nebras Consult, we don’t just provide solutions, we build partnerships. We work closely with our clients to understand their goals and deliver engineering and consulting services that make a real impact."
                        }
                    </Text>
                </div>
            </div>


        </div>
    );
};

export default HeroSection;
