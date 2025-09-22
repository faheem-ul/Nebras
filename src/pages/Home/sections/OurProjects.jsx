import { useNavigate } from "react-router-dom";

import Text from "../../../components/ui/Text";

import projectsData from "@/data/projects.json"
import ProjectCard from "@/components/ProjectCard";

const OurProjects = () => {
  const navigate = useNavigate();

  const currentProjects = projectsData.projects.slice(0, 6);


  return (
    <section className="w-full bg-[#393C3D] pt-[105px] pb-[95px]">
      <div className="max-w-[1312px] w-full mx-auto px-5">
        {/* Section header */}
        <div className="flex flex-col gap-6 sm:flex-row sm:justify-between sm:items-center mb-[110px]">
          <Text as="h1" className="text-white">
            <span className="text-outline-white">Our</span> Projects
          </Text>
          <button
            onClick={() => navigate("/our-projects")}
            className="px-6 py-3 text-[18px]  md:px-[36px] md:py-[33.5px] bg-green text-white font-kosans md:text-[24px] leading-none cursor-pointer">
            See All
          </button>
        </div>

        {/* Project cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[27px] gap-y-[50px] text-white">
          {currentProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default OurProjects;
