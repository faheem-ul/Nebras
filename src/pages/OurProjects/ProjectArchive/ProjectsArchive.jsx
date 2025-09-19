import { useState } from "react";

import Text from "@/components/ui/Text"
import filterIcon from "@/assets/our-projects/filter-icon.svg"
import leftIcon from "@/assets/our-projects/pag-left-icon.svg"
import rightIcon from "@/assets/our-projects/pag-right-icon.svg"

import projectsData from "../../../data/projects.json";
import ProjectCard from "../../../components/ProjectCard";

function ProjectsArchive() {
    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const projectsPerPage = 9;

    // Calculate page data
    const totalProjects = projectsData.projects.length;
    const totalPages = Math.ceil(totalProjects / projectsPerPage);

    const startIdx = (currentPage - 1) * projectsPerPage;
    const currentProjects = projectsData.projects.slice(
        startIdx,
        startIdx + projectsPerPage
    );

    // Handle page change
    const goToPage = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };
    return (
        <section className="w-full bg-white pt-[238px] md:pt-[338px] pb-[64px]">
            <div className="max-w-[1312px] w-full mx-auto px-4">

                {/* Hero Section */}
                <div className="flex flex-col gap-6 sm:flex-row sm:justify-between items-center mb-[85px]">
                    {/* Title*/}
                    <Text
                        as="h1"
                        className="text-center"
                    >
                        <span className="text-outline-black">Our</span> projects
                    </Text>
                    {/* Filter Button */}
                    <div className="flex gap-[11px]">
                        <img src={filterIcon} />
                        <Text className="text-[16px] md:text-[16px]">Filter</Text>
                    </div>
                </div>

                {/* Our Projects Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[27px] gap-y-[50px]">
                    {currentProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>

                {/* Pagination Controls */}
                <div className="flex justify-center gap-4 md:gap-[48px] mt-8 md:mt-[64px] flex-wrap">
                    {/* Prev Button */}
                    <button
                        onClick={() => goToPage(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="w-[32px] h-[32px] md:w-auto md:h-auto disabled:opacity-50 cursor-pointer flex items-center justify-center"
                    >
                        <img src={leftIcon} className="w-3 md:w-full" alt="Prev" />
                    </button>

                    {/* Page Numbers */}
                    {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i + 1}
                            onClick={() => goToPage(i + 1)}
                            className={`text-[14px] md:text-[18px] font-kosans w-[28px] h-[28px] md:w-[36px] md:h-[36px] flex items-center justify-center  cursor-pointer ${currentPage === i + 1 ? "bg-black text-white" : ""
                                }`}
                        >
                            {i + 1}
                        </button>
                    ))}

                    {/* Next Button */}
                    <button
                        onClick={() => goToPage(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="w-[32px] h-[32px] md:w-auto md:h-auto disabled:opacity-50 cursor-pointer flex items-center justify-center"
                    >
                        <img src={rightIcon} className="w-3 md:w-full" alt="Next" />
                    </button>
                </div>

            </div>
        </section>
    );
}

export default ProjectsArchive;
