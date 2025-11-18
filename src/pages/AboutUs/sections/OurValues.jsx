import React from 'react';

import { useLanguage } from "@/context/LanguageContext";
import Text from '@/components/ui/Text';
// Import images
// import quoteIcon from '@/assets/about/quote-icon.svg';
import bg from '@/assets/about/value-card-bg.png';
import inovation from '@/assets/about/inovation.jpg';
import integrity from '@/assets/about/integrity.png';
import excelence from '@/assets/about/excelence.png';
import collaboration from '@/assets/about/collaboration.png';
import sustainability from '@/assets/about/sustainability.png';

const OurValues = () => {
    const { lang } = useLanguage(); // 'en' or 'ar'
    const isArabic = lang === 'ar';

    const values = [
        {
            title: isArabic ? 'الابتكار' : 'INNOVATION',
            description: isArabic
                ? 'نحن نقدر الإبداع والتقنيات الجديدة لتعزيز النمو المستدام.'
                : 'We value creativity and new technologies to promote sustainable growth.',
            hoverBg: inovation
        },
        {
            title: isArabic ? 'النزاهة' : 'INTEGRITY',
            description: isArabic
                ? 'نتمسك بأعلى معايير الأخلاق والشفافية والمساءلة في جميع مشاريعنا.'
                : 'We uphold the highest standards of ethics, transparency, and accountability.',
            hoverBg: integrity
        },
        {
            title: isArabic ? 'التميز' : 'EXCELLENCE',
            description: isArabic
                ? 'نسعى للتميز في كل ما نقوم به، بتقديم جودة وخدمة استثنائيتين.'
                : 'We strive for excellence in everything we do, delivering high quality and service.',
            hoverBg: excelence
        },
        {
            title: isArabic ? 'الاستدامة' : 'SUSTAINABILITY',
            description: isArabic
                ? 'نحن ملتزمون بالريادة البيئية والمسؤولية الاجتماعية في مشاريعنا وعملياتنا.'
                : 'We are committed to environmental and social responsibility.',
            hoverBg: sustainability
        },
        {
            title: isArabic ? 'التعاون' : 'COLLABORATION',
            description: isArabic
                ? 'نحن نعزز بيئة عمل تعاونية شاملة حيث يتم تقدير واحترام وجهات النظر المختلفة.'
                : 'We foster a collaborative and inclusive environment that values all voices.',
            hoverBg: collaboration
        }
    ];

    return (
        <section className="bg-white mt-[42.6px] pb-[30px] md:pb-[60px] md:mt-[87.73px] max-w-[1312px] w-full mx-auto px-5 md:px-0">
            {/* Section Title */}
            <div data-aos="fade-up" data-aos-delay="400">
                <Text as="h1" className={`text-center text-[30px] md:text-[55px] leading-[42px] md:leading-[42px] mb-[22px] md:mb-[48px] ${isArabic ? 'md:text-[75px]' : ''}`}>
                    {isArabic ? 'قيمنا' : 'Our Values'}
                </Text>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[19.6px] md:gap-[23.94px] place-items-center" data-aos="fade-up" data-aos-delay="500" >
                {values.map((item, index) => (
                    <div
                        key={index}
                        className="group relative w-full h-[456px] md:h-[532px] overflow-hidden text-white cursor-pointer"
                    >
                        {/* Default Background Image */}
                        <img
                            src={bg}
                            alt="default bg"
                            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
                        />

                        {/* Hover Background Image */}
                        <img
                            src={item.hoverBg}
                            alt="hover bg"
                            className="absolute inset-0 w-full h-full object-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        />

                        {/* Gradient Overlay (on hover) */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none">
                            <div
                                className="w-full h-full"
                                style={{
                                    background: 'linear-gradient(180deg, rgba(1, 105, 56, 0) -27.39%, #016938 100%)'
                                }}
                            />
                        </div>

                        {/* Content */}
                        <div className={`relative z-20 pt-[75.7px] md:pt-[90px] pb-[27.44px] md:pb-[42px] pl-[27px] pr-[14.6px] md:px-[35px] flex flex-col justify-between h-full ${isArabic ? 'text-right' : 'text-left'} `}>
                            <div>
                                {/* <img
                                    src={quoteIcon} className='w-[40px] h-[31.9px] mb-[15.6px]'
                                /> */}
                                <Text className={`text-[18px] leading-[42px] ${isArabic ? 'md:text-[50px] md:leading-[42px] font-arabic' : 'md:text-[30px] md:leading-[42px] font-bold'}`}>{item.title}</Text>
                            </div>
                            <div>
                                <Text className={` md:text-[18px] text-[16px] md:leading-[24px] ${isArabic ? 'md:text-[30px] md:leading-[30px]' : ''}`}  >{item.description}</Text>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default OurValues;
