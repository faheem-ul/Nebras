import { useNavigate } from "react-router-dom";

import { useLanguage } from "@/context/LanguageContext";
import Text from "@/components/ui/Text";
import HomeProjectCard from "@/components/HomeProjectCard";

const OurProjects = () => {
  const { lang } = useLanguage();
  const isArabic = lang === "ar";

  const navigate = useNavigate();

  const cards = [
    {
      title: {
        en: "Planning & Urban Heritage",
        ar: "التخطيط والتراث العمراني",
      },
      location: {
        en: "Saudi Arabia",
        ar: "المملكة العربية السعودية",
      },
      image: "/our-projects/project-8/image-1.jpg",
      href: "/our-projects/planning-urban-heritage",
    },
    {
      title: {
        en: "Infrastructure",
        ar: "البنية التحتية",
      },
      location: {
        en: "Saudi Arabia",
        ar: "المملكة العربية السعودية",
      },
      image: "/our-projects/project-6/image-1.jpg",
      href: "/our-projects/infrastructure-saudi-arabia",
    },
    {
      title: {
        en: "Infrastructure",
        ar: "البنية التحتية",
      },
      location: {
        en: "Jordan",
        ar: "الأردن",
      },
      image: "/our-projects/project-1/image-1.jpg",
      href: "/our-projects/infrastructure-jordan",
    },
  ];

  const featuredIndex = 1;

  return (
    <section className="w-full bg-[#393C3D] pt-[38px] pb-[42px] md:pt-[105px] md:pb-[95px]">
      <div
        className="max-w-[1312px] w-full mx-auto px-5"
        dir={isArabic ? "rtl" : "ltr"}
      >
        {/* Section header */}
        <div className="flex flex-col gap-6 sm:flex-row sm:justify-between sm:items-center mb-[40px] md:mb-[70px]">
          <div data-aos="fade-right" data-aos-delay="300">
            <Text as="h1" className="text-white leading-[66px]">
              {isArabic ? (
                <>مشاريعنا</>
              ) : (
                <>
                  <span className="text-outline-white">Our</span> Projects
                </>
              )}
            </Text>
          </div>
          <div data-aos="fade-left" data-aos-delay="300">
            <button
              onClick={() => navigate("/our-projects")}
              className="hidden md:inline-flex items-center justify-center gap-2 text-[18px] md:text-[20px] lg:text-[24px] px-[24px] py-[14px] bg-green text-white font-kosans leading-none cursor-pointer transition-transform duration-200 hover:scale-[1.02]"
            >
              {isArabic ? "عرض الكل" : "See All"}
            </button>
          </div>
        </div>

        {/* Project cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[22px] lg:gap-[32px]" data-aos="fade-up" data-aos-delay="350">
          {cards.map((card, index) => (
            <HomeProjectCard
              key={`${card.href}-${index}`}
              title={card.title}
              location={card.location}
              image={card.image}
              href={card.href}
              isFeatured={index === featuredIndex}
              delay={400 + index * 100}
            />
          ))}
        </div>

        <div className="mt-[40px] md:mt-[64px] flex justify-center md:hidden">
          <button
            onClick={() => navigate("/our-projects")}
            className="text-[18px] md:text-[24px] px-[18px] py-[14px] bg-green text-white font-kosans leading-none cursor-pointer"
          >
            {isArabic ? "عرض الكل" : "See All"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurProjects;

