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

      <div className="relative w-full h-[600px] sm:h-[750px] md:h-[800px] overflow-hidden">

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

        <div className="relative  max-w-[1312px] mx-auto px-5 h-full flex flex-col pt-[250px] md:pt-[353px]" dir={isArabic ? 'rtl' : 'ltr'}>
          {/* Welcome Message */}
          <div className="max-w-[900px]">
            <div data-aos="fade-up" data-aos-delay="400">
              <Text as="h1" className="text-white mb-[20px]">
                {isArabic
                  ? "نبراس كونسلت – حلول هندسية"
                  : "Nebras Consult – Engineering solutions"}
              </Text>
            </div>
            <div data-aos="fade-up" data-aos-delay="500">
              <Text className="text-white">
                {isArabic
                  ? "خبرة استشارية. نحول التحديات إلى فرص بدقة وابتكار."
                  : "Consulting expertise. Transforming challenges into opportunities with precision and innovation."}
              </Text>
            </div>
          </div>
        </div>

      </div>

      {/* 3 Images Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-0">
        {/* Engineering */}
        <div className="relative group overflow-hidden " data-aos="fade" data-aos-delay="400">
          <img
            src={img1}
            alt="Engineering"
            className="w-full h-full object-cover transform origin-center transition duration-300 ease-in-out group-hover:scale-108"
          />
          {/* Black Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center  z-10">
            <Text className="text-white text-[20px] sm:text-[28px] md:text-[40px] font-logirent group-hover:hidden">
              {isArabic ? "الهندسة" : "Engineering"}
            </Text>
            <button className="hidden  group-hover:inline-block w-[220px] sm:w-[280px] md:w-[412px] bg-[#393C3D] text-white font-kosans text-[16px] sm:text-[20px] md:text-[28px] py-2 cursor-pointer">
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

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center  z-10">
            <Text className="text-white text-[20px] sm:text-[28px] md:text-[40px] font-logirent group-hover:hidden">
              {isArabic ? "التخطيط" : "Planning"}
            </Text>
            <button className="hidden group-hover:inline-block w-[220px] sm:w-[280px] md:w-[412px] bg-[#393C3D] text-white font-kosans text-[16px] sm:text-[20px] md:text-[28px] py-2 cursor-pointer">
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

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center  z-10">
            <Text className="text-white text-[20px] sm:text-[28px] md:text-[40px] font-logirent group-hover:hidden">
              {isArabic ? "الاستشارات" : "Consulting"}
            </Text>
            <button className="hidden group-hover:inline-block w-[220px] sm:w-[280px] md:w-[412px] bg-[#393C3D] text-white font-kosans text-[16px] sm:text-[20px] md:text-[28px] py-2 cursor-pointer">
              {isArabic ? "الاستشارات" : "Consulting"}
            </button>
          </div>
        </div>
      </div>
    </section >
  );
};

export default Hero;
