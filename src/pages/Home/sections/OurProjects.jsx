import { useNavigate } from "react-router-dom";

import { useLanguage } from "@/context/LanguageContext";
import Text from "@/components/ui/Text";
import projectsData from "@/data/projects.json";
import ProjectCard from "@/components/ProjectCard";

const OurProjects = () => {
  const { lang } = useLanguage();
  const isArabic = lang === "ar";

  const navigate = useNavigate();

  const currentProjects = projectsData.projects.slice(0, 8);

  return (
    <section className="w-full bg-[#393C3D] pt-[38px] pb-[42px] md:pt-[105px] md:pb-[95px]">
      <div className="max-w-[1312px] w-full mx-auto px-5">
        {/* Section header */}
        <div className="flex flex-col gap-6 sm:flex-row sm:justify-between sm:items-center mb-[13px] md:mb-[110px]">
          <div data-aos="fade-right" data-aos-delay="400">
            <Text as="h1" className={`text-white leading-[66px] md:text-left ${isArabic ? 'text-right' : ''}`} dir={isArabic ? 'rtl' : 'ltr'}>
              {isArabic ? (
                <>
                  مشاريعنا
                </>
              ) : (
                <>
                  <span className="text-outline-white">Our</span> Projects
                </>
              )}
            </Text>
          </div>
          <div
            data-aos="fade-left"
            data-aos-delay="400"
            className="w-full md:w-[169px]"
          >
            <button
              onClick={() => navigate("/our-projects")}
              className="text-[18px] ml-auto md:text-[24px] px-[15px] py-[14px] md:px-[15px] md:py-[14px] bg-green text-white font-kosans  leading-none cursor-pointer hidden md:block"
            >
              {isArabic ? 'عرض الكل' : 'See All'}
            </button>
          </div>
        </div>

        {/* Project cards */}
        <div
          className="flex flex-col md:flex-row flex-wrap  gap-x-[27px] gap-y-[30px] text-white"
          data-aos="fade"
          data-aos-delay="400"
        >
          {currentProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <button
          onClick={() => navigate("/our-projects")}
          className="mt-[30px] mx-auto text-[18px] md:text-[24px] px-[15px] py-[14px] md:px-[15px] md:py-[14px] bg-green text-white font-kosans  leading-none cursor-pointer block md:hidden"
        >
          {isArabic ? 'عرض الكل' : 'See All'}
        </button>
      </div>
    </section>
  );
};

export default OurProjects;
