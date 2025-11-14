import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { useLanguage } from "@/context/LanguageContext";
import heroBg1 from "@/assets/home/hero-slider/hero-slider-1.jpeg";
import heroBg2 from "@/assets/home/hero-slider/hero-slider-2.jpeg";
import heroBg3 from "@/assets/home/hero-slider/hero-slider-3.jpeg";
import heroBg4 from "@/assets/home/hero-slider/hero-slider-4.jpeg";
import heroBg5 from "@/assets/home/hero-slider/hero-slider-5.jpeg";
import heroBg6 from "@/assets/home/hero-slider/hero-slider-6.jpeg";
import img1 from "@/assets/home/engineering.png";
import img2 from "@/assets/home/planning.png";
import img3 from "@/assets/home/consulting.png";
import Text from "@/components/ui/Text";

const Hero = () => {
  const { lang } = useLanguage();
  const isArabic = lang === "ar";

  const heroImages = [heroBg1, heroBg2, heroBg3, heroBg4, heroBg5, heroBg6];
  // Slider Current Image State
  const [currentImage, setCurrentImage] = useState(0);

  // Change image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section className="w-full bg-white overflow-hidden">

      <div className="relative w-full h-[432px] sm:h-[555px] md:h-[800px] overflow-hidden">

        {/* Zooming Background Layer */}
        <AnimatePresence>
          <motion.div
            key={heroImages[currentImage]}
            className="absolute inset-0 bg-cover bg-center bg-slow-zoom"
            style={{ backgroundImage: `url(${heroImages[currentImage]})` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />
        </AnimatePresence>

        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black/40 "></div>

        <div className="relative  max-w-[1312px] mx-auto px-5 h-full flex flex-col md:justify-start justify-center pt-[145px] sm:pt-[250px] md:pt-[353px]" dir={isArabic ? 'rtl' : 'ltr'}>
          {/* Welcome Message */}
          <div className="max-w-[592px]">
            <div data-aos="fade-up" data-aos-delay="400">
              <Text
                as="h1"
                className={`text-white md:leading-[100%]   `} >
                {/* Top line: NEBRAS CONSULT */}
                {isArabic ? "نبراس كونسلت" : "Nebras Consult"}
              </Text>

              {/* Green bar: ENGINEERING SOLUTIONS */}
              <Text as="h1"
                className={`text-white inline-flex items-center bg-[#016938] md:mb-[18px] mb-[12px] min-h-[40px] md:h-[69px]  px-4 md:px-9 shadow-[0px_4px_6px_0px_#00000080]
 ${isArabic ? "md:text-[48px] text-[22px] " : " text-[18px] md:text-[40px]"}`}
              >
                <span className="block">
                  {isArabic
                    ? "للاستشارات الهندسية والتقنية"
                    : "Engineering solutions"}
                </span>
              </Text>
            </div>
            <div data-aos="fade-up" data-aos-delay="500">
              <Text className={`text-white leading-[24px] md:leading-[32px] ${isArabic ? "font-arabic md:text-[50px] md:leading-[66px] " : ""} `}
              >
                {isArabic
                  ? "خبرات هندسية رائدة وحلول استشارية متكاملة."
                  : "Consulting expertise. Transforming challenges into opportunities with precision and innovation."}
              </Text>
            </div>
          </div>
        </div>

      </div>

      {/* 3 Images Row */}
      <div className="grid grid-cols-3 gap-0">
        {/* Engineering */}
        <div className="relative group overflow-hidden " data-aos="fade" data-aos-delay="400">
          <img
            src={img1}
            alt="Engineering"
            className="w-full h-full object-cover transform origin-center transition duration-300 ease-in-out group-hover:scale-108"
          />
          {/* Black Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          <div className="absolute bottom-[4.7px] md:bottom-6 left-1/2 -translate-x-1/2 text-center  z-10">
            <Text className={`text-white text-[15px] leading-none  sm:text-[28px] font-bold  md:text-[40px]  group-hover:hidden ${isArabic ? "md:text-[55px]" : "md:text-[40px]"}`}>
              {isArabic ? "الهندسة" : "Engineering"}
            </Text>
            <button className="hidden  group-hover:inline-block w-[220px] sm:w-[280px] md:w-[412px] bg-[#393C3D] text-white font-bold text-[15px] leading-none sm:text-[20px] md:text-[28px] py-2 cursor-pointer">
              {isArabic ? "الهندسة" : "Engineering"}
            </button>
          </div>
        </div>

        {/* Planning */}
        <div className="relative group overflow-hidden" data-aos="fade" data-aos-delay="500">
          <img
            src={img2}
            alt="Planning"
            className="w-full h-full object-cover transform origin-center transition duration-300 ease-in-out group-hover:scale-108"
          />
          {/* Black Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          <div className="absolute bottom-[4.7px] md:bottom-6 left-1/2 -translate-x-1/2 text-center  z-10">
            <Text className={`text-white text-[15px] leading-none  sm:text-[28px] font-bold  md:text-[40px]  group-hover:hidden ${isArabic ? "md:text-[55px]" : "md:text-[40px]"}`}>
              {isArabic ? "التخطيط" : "Planning"}
            </Text>
            <button className="hidden group-hover:inline-block w-[220px] sm:w-[280px] md:w-[412px] bg-[#393C3D] text-white font-bold text-[15px] leading-none  sm:text-[20px] md:text-[28px] py-2 cursor-pointer">
              {isArabic ? "التخطيط" : "Planning"}
            </button>
          </div>
        </div>

        {/* Consulting */}
        <div className="relative group overflow-hidden" data-aos="fade" data-aos-delay="600">
          <img
            src={img3}
            alt="Consulting"
            className="w-full h-full object-cover transform origin-center transition duration-300 ease-in-out group-hover:scale-108"
          />
          {/* Black Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          <div className="absolute bottom-[4.7px] md:bottom-6 left-1/2 -translate-x-1/2 text-center  z-10">
            <Text className={`text-white text-[15px] leading-none  sm:text-[28px] font-bold  md:text-[40px]  group-hover:hidden ${isArabic ? "md:text-[55px]" : "md:text-[40px]"}`}>
              {isArabic ? "الاستشارات" : "Consulting"}
            </Text>
            <button className="hidden group-hover:inline-block w-[220px] sm:w-[280px] md:w-[412px] bg-[#393C3D] text-white font-bold text-[15px] leading-none  sm:text-[20px] md:text-[28px] py-2 cursor-pointer">
              {isArabic ? "الاستشارات" : "Consulting"}
            </button>
          </div>
        </div>
      </div>
    </section >
  );
};

export default Hero;
