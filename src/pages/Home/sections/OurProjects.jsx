import { useNavigate } from "react-router-dom";

import Text from "../../../components/ui/Text";

import projectsData from "@/data/projects.json";
import ProjectCard from "@/components/ProjectCard";

const OurProjects = () => {
  const navigate = useNavigate();

  const currentProjects = projectsData.projects.slice(0, 8);

  return (
    <section className="w-full bg-[#393C3D] pt-[105px] pb-[95px]">
      <div className="max-w-[1312px] w-full mx-auto px-5">
        {/* Section header */}
        <div className="flex flex-col gap-6 sm:flex-row sm:justify-between sm:items-center mb-[110px]">
          <div data-aos="fade-right" data-aos-delay="400">
            <Text as="h1" className="text-white">
              <span className="text-outline-white">Our</span> Projects
            </Text>
          </div>
          <div
            data-aos="fade-left"
            data-aos-delay="400"
            className="w-full md:w-[169px]"
          >
            <button
              onClick={() => navigate("/our-projects")}
              className="px-6 py-3 text-[18px]  md:px-[36px] md:py-[33.5px] bg-green text-white font-kosans md:text-[24px] leading-none cursor-pointer w-full md:w-[169px]"
            >
              See All
            </button>
          </div>
        </div>

        {/* Project cards */}
        <div
          className="flex flex-col md:flex-row flex-wrap  gap-x-[27px] gap-y-[27px] text-white"
          data-aos="fade"
          data-aos-delay="400"
        >
          {currentProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProjects;
