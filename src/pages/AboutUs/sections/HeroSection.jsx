import React from "react";

import { useLanguage } from "@/context/LanguageContext";
import Text from "@/components/ui/Text";
import heroBg from "@/assets/about/hero-bg.jpg";

const HeroSection = () => {
    const { lang } = useLanguage(); // 'en' or 'ar'
    const isArabic = lang === 'ar';

    return (
        <section className="relative w-full pt-[216px] md:pt-[216px] bg-[#393C3D]">

            {/* Main Content */}
            <div className="relative flex flex-col md:flex-row md:items-start justify-between max-w-[1440px] mx-auto min-h-[400px] md:min-h-[611px]" >
                {/* Left Section (Text) */}
                <div className={`px-5 md:pl-[88px] transition-all duration-300 ${isArabic ? 'text-right' : 'text-left'}`} >
                    <div data-aos="fade-right" data-aos-delay="400">
                        <Text className="text-sm md:text-[18px] text-white mt-6 md:mt-[61px]">
                            {isArabic ? 'الرئيسية / من نحن' : 'HOME / WHO WE ARE'}
                        </Text>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="400">
                        <Text
                            as="h1"
                            className="text-white text-3xl md:text-6xl mt-10 md:mt-[116px]"
                        >
                            <span className="text-outline-white">{isArabic ? 'من' : 'Who'}</span>
                            <br />
                            {isArabic ? 'نحن' : 'we are'}
                        </Text>
                    </div>
                </div>

                {/* Right Section (Image) */}
                <div className="w-full md:w-auto mt-8 md:mt-0 overflow-hidden" data-aos="fade" data-aos-delay="400">
                    <img
                        src={heroBg}
                        alt="Team Collaboration"
                        className="w-full h-auto md:h-full object-cover transform transition duration-300 ease-in-out hover:scale-103"
                    />
                </div>
            </div>

            {/* Bottom Description */}
            <div
                className={`bg-[#016938] text-white py-6 md:py-[36.75px] px-5 md:pl-[88px] md:pr-[102px] max-w-full md:max-w-[982px] relative md:absolute md:bottom-0 left-0 ${isArabic ? 'text-right' : 'text-left'}`}
                dir={isArabic ? 'rtl' : 'ltr'}
                data-aos="fade"
                data-aos-delay="100"
            >
                <Text className="text-sm leading-6 md:text-[18px] md:leading-[27px]">
                    {isArabic ? 'تأسست شركة نبراس كونسلت للاستشارات الهندسية والتقنية في قلب العاصمة الأردنية عمان، وقد حفرت لنفسها مكانة رائدة في مجال الاستشارات الهندسية والتخطيط الحضري.' :
                        'Established in the heart of Amman, Jordan, Nebras Tihamah Engineering and Technical Consultancy has carved a niche for itself as a leading provider of engineering consultancy and urban planning services.'}
                </Text>
            </div>

        </section>
    );
};

export default HeroSection;
