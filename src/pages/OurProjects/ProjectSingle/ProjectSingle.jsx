import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { useLanguage } from "@/context/LanguageContext";
import Text from '@/components/ui/Text'

import projectsData from "../../../data/projects.json";
import ProjectSlider from "./ProjectSlider";

function ProjectSingle() {
    const { slug } = useParams();
    const { lang } = useLanguage(); // 'en' or 'ar'
    const isArabic = lang === "ar";

    const project = projectsData.projects.find((p) => p.slug === slug);

    // Slider Current Image State
    const [currentImage, setCurrentImage] = useState(0);

    // Change image every 5 seconds
    useEffect(() => {
        if (!project.heroImages || project.heroImages.length === 0) return;

        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % project.heroImages.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [project.heroImages]);

    if (!project) {
        return <h2 className="text-center text-white text-2xl">Project not found</h2>;
    }

    return (
        <>
            <section className="relative w-full min-h-[466px] sm:min-h-[500px]  md:min-h-[759px] bg-white overflow-hidden">
                {/* Hero Image */}

                <AnimatePresence>
                    <motion.img
                        key={project.heroImages[currentImage]}
                        src={project.heroImages[currentImage]}
                        alt={typeof project.title === "object" ? project.title[lang] : project.title}

                        className="absolute inset-0 w-full h-full object-cover bg-slow-zoom"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                    />
                </AnimatePresence>

                {/* Black Overlay */}
                <div className="absolute inset-0 bg-black/40 "></div>

                {/*Project Title */}
                <div dir={lang === 'ar' ? 'rtl' : 'ltr'} className={`transition-all duration-300 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
                    <div className="relative flex flex-col  max-w-[1312px] mx-auto pb-[101px] md:pb-[30px] pt-[165px] sm:pt-[250px] md:pt-[368px] px-5"
                        data-aos="fade-up" data-aos-delay="400">
                        <Text className={`text-white max-w-[708px] w-full md:!leading-[60px] ${isArabic ? "font-arabic  leading-[42px] text-[32px] md:text-[55px]" : "leading-[30px] text-[28px]  md:text-[50px] font-ubuntu font-bold"}`}>
                            {project.title[lang]}
                        </Text>
                    </div>
                </div>
            </section >

            {/* Project Details */}
            <div className="bg-[#f7f7f7]">
                <section dir={lang === 'ar' ? 'rtl' : 'ltr'}
                    className={` max-w-[1312px] w-full mx-auto px-5  md:py-[70px] py-[27.6px]  transition-all duration-300 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
                    {/* <div className="flex flex-col md:flex-row justify-between flex-wrap gap-8 md:gap-12"> */}
                    <div className="flex flex-wrap gap-y-[40px] gap-x-6  md:gap-12 justify-between ">
                        {/* Sector */}
                        <div className="w-[calc(50%-12px)] min-w-[182px] md:max-w-[165px]" data-aos="fade-up" data-aos-delay="100">
                            <Text className={` text-[30px] leading-none  mb-[27px] md:mb-[42px]  ${isArabic ? "font-arabic md:text-[50px]" : "md:text-[34px] font-bold"}`}>
                                {lang === 'ar' ? 'القطاع' : 'Sector'}
                            </Text>
                            <ul className="text-[16px]  md:text-[18px] ">
                                {project.details.sector[lang]?.map((sector, idx) => (
                                    <li key={idx} className={`mb-[16px] md:mb-[27px]  ${isArabic ? "font-zarid md:text-[28px]" : "md:text-[18px] font-medium"}`}>
                                        {sector}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Location */}
                        <div className="w-[calc(50%-12px)] min-w-[182px] md:max-w-[179px]" data-aos="fade-up" data-aos-delay="200">
                            <Text className={` text-[30px] leading-none ] mb-[24px] md:mb-[42px  ${isArabic ? "font-arabic md:text-[50px]" : "md:text-[34px] font-bold"}`}>
                                {lang === 'ar' ? 'الموقع' : 'Location'}
                            </Text>
                            <ul className="text-[16px] md:text-[18px] ">
                                {project.details.locations[lang].map((location, idx) => (
                                    <li key={idx} className={`mb-[16px] md:mb-[27px]  max-w-[182px] ${isArabic ? "font-zarid md:text-[28px]" : "md:text-[18px] font-medium"}`}>
                                        {location}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Clients */}
                        <div className="w-[calc(50%-12px)] min-w-[183px] md:max-w-[183px]" data-aos="fade-up" data-aos-delay="300">
                            <Text className={` text-[30px] leading-none ] mb-[24px] md:mb-[42px  ${isArabic ? "font-arabic md:text-[50px]" : "md:text-[34px] font-bold"}`}>
                                {lang === 'ar' ? 'صاحب العمل' : 'Clients'}
                            </Text>
                            <ul className="text-[16px] md:text-[18px] ">
                                {project.details.clients[lang].map((client, idx) => (
                                    <li key={idx} className={`mb-[16px] md:mb-[27px]  max-w-[182px] ${isArabic ? "font-zarid md:text-[28px]" : "md:text-[18px] font-medium"}`}>
                                        {client}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Period Of Services */}
                        <div className="w-[calc(50%-12px)] min-w-[182px]  md:max-w-[382px]" data-aos="fade-up" data-aos-delay="400">
                            <Text className={` text-[30px] leading-none ] mb-[24px] md:mb-[42px  ${isArabic ? "font-arabic md:text-[50px]" : "md:text-[34px] font-bold"}`}>
                                {lang === 'ar' ? 'مدة المشروع' : 'Period of Services'}
                            </Text>

                            <Text className={`mb-[16px] md:mb-[27px]   ${isArabic ? "font-zarid md:text-[28px]" : "md:text-[18px] font-medium"}`}>
                                {project.details.periodsOfServices[lang]}
                            </Text>
                        </div>
                    </div>
                </section>
            </div>

            {/* Project Description */}
            <section dir={lang === 'ar' ? 'rtl' : 'ltr'} className={`w-full bg-white transition-all duration-300 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
                <div className="max-w-[1312px] w-full mx-auto px-5 md:mt-[48px] mt-[60px] md:mb-[25px] ">
                    <div data-aos="fade-up" data-aos-delay="400">
                        <Text as="h1" className="mb-[13px]  md:mb-[40px]">
                            {lang === 'ar' ? (
                                <>
                                    <span className="text-outline-black">وصف</span> المشروع
                                </>
                            ) : (
                                <>
                                    <span className="text-outline-black">project</span> description
                                </>
                            )}
                        </Text>

                    </div>
                    <div className="mb-[33px] md:mb-8" data-aos="fade" data-aos-delay="400">
                        {project.description[lang].map((para, idx) => (
                            <Text key={idx} className={`leading-[38px] mb-[11.8px] md:mb-7 ${isArabic ? "md:text-[36px]" : "md:text-[24px]"}`}>{para}</Text>
                        ))}
                    </div>
                </div>
            </section>

            {/* Project Slider */}
            <ProjectSlider images={project.sliderImages} />
        </>

    );
}

export default ProjectSingle;
