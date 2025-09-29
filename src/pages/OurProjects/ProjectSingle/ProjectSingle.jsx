import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { useLanguage } from "@/context/LanguageContext";
import Text from '@/components/ui/Text'

import projectsData from "../../../data/projects.json";
import ProjectSlider from "./ProjectSlider";

function ProjectSingle() {
    const { slug } = useParams();
    const project = projectsData.projects.find((p) => p.slug === slug);

    const { lang } = useLanguage(); // 'en' or 'ar'

    if (!project) {
        return <h2 className="text-center text-white text-2xl">Project not found</h2>;
    }

    // Slider Current Image State
    const [currentImage, setCurrentImage] = useState(0);

    // Change image every 5 seconds
    useEffect(() => {
        if (!project.heroImages || project.heroImages.length === 0) return;

        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % project.heroImages.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [project.heroImages.length]);

    return (
        <>
            <section className="relative w-full min-h-[500px]  md:min-h-[759px] bg-white overflow-hidden">
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
                <div className="absolute inset-0 bg-black/30 "></div>

                {/*Project Title */}
                <div dir={lang === 'ar' ? 'rtl' : 'ltr'} className={`transition-all duration-300 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
                    <div className="relative flex flex-col  min-h-[500px] md:min-h-[827px] max-w-[1312px] mx-auto pb-[30px] pt-[250px] md:pt-[368px] px-5"
                        data-aos="fade-up" data-aos-delay="400">
                        <Text as="h1" className="text-white max-w-[900px] w-full"> {project.title[lang]}
                        </Text>
                    </div>
                </div>
            </section >

            {/* Project Description */}
            <section dir={lang === 'ar' ? 'rtl' : 'ltr'} className={`w-full bg-white transition-all duration-300 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
                <div className="max-w-[1312px] w-full mx-auto px-5 md:pt-[95px] mt-[60px] mb-[70px] md:pb-[109px]">
                    <div data-aos="fade-up" data-aos-delay="400">
                        <Text as="h1" className=" mb-[40px]">
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
                    <div className="mb-8" data-aos="fade" data-aos-delay="400">
                        {project.description[lang].map((para, idx) => (
                            <Text key={idx} className="mb-7">{para}</Text>
                        ))}
                    </div>
                </div>
            </section>


            {/* Project Details */}
            <section dir={lang === 'ar' ? 'rtl' : 'ltr'}
                className={`max-w-[1312px] w-full mx-auto px-5 mb-[60px] md:mb-[98px] transition-all duration-300 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
                <div className="flex flex-col md:flex-row justify-between flex-wrap gap-8 md:gap-12">
                    {/* Sector */}
                    <div className="w-full md:max-w-[165px]" data-aos="fade-up" data-aos-delay="100">
                        <Text className="font-logirent text-[22px] md:text-[34px] mb-[24px] md:mb-[42px]">
                            {lang === 'ar' ? 'القطاع' : 'Sector'}
                        </Text>
                        <ul className="text-[14px] md:text-[18px] font-kosans">
                            {project.details.sector[lang]?.map((sector, idx) => (
                                <li key={idx} className="mb-[18px] md:mb-[27px]">
                                    {sector}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Location */}
                    <div className="w-full md:max-w-[179px]" data-aos="fade-up" data-aos-delay="200">
                        <Text className="font-logirent text-[22px] md:text-[34px] mb-[24px] md:mb-[42px]">
                            {lang === 'ar' ? 'الموقع' : 'Location'}
                        </Text>
                        <Text className="text-[14px] md:text-[18px]">
                            {project.details.location[lang]}
                        </Text>
                    </div>

                    {/* Clients */}
                    <div className="w-full md:max-w-[203px]" data-aos="fade-up" data-aos-delay="300">
                        <Text className="font-logirent text-[22px] md:text-[34px] mb-[24px] md:mb-[42px]">
                            {lang === 'ar' ? 'الجهات المستفيدة' : 'Clients'}
                        </Text>
                        <ul className="text-[14px] md:text-[18px] font-kosans">
                            {project.details.clients[lang].map((client, idx) => (
                                <li key={idx} className="mb-[18px] md:mb-[27px]">
                                    {client}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Period Of Services */}
                    <div className="w-full md:max-w-[382px]" data-aos="fade-up" data-aos-delay="400">
                        <Text className="font-logirent text-[22px] md:text-[34px] mb-[24px] md:mb-[42px]">
                            {lang === 'ar' ? 'مدة الخدمة' : 'Period of Services'}
                        </Text>
                        <Text className="text-[14px] md:text-[18px]">
                            {project.details.periodsOfServices}
                        </Text>
                    </div>
                </div>
            </section>


            {/* Project Slider */}
            <ProjectSlider images={project.sliderImages} />
        </>

    );
}

export default ProjectSingle;
