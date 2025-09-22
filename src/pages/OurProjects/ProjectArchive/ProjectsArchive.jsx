import { useState } from "react";

import Text from "@/components/ui/Text"
import filterIcon from "@/assets/our-projects/filter-icon.svg"
import leftIcon from "@/assets/our-projects/pag-left-icon.svg"
import rightIcon from "@/assets/our-projects/pag-right-icon.svg"
import closeIcon from "@/assets/our-projects/close-icon.svg"

import projectsData from "../../../data/projects.json";
import ProjectCard from "../../../components/ProjectCard";

function ProjectsArchive() {
    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const projectsPerPage = 9;

    // filter state
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [selectedFilter, setSelectedFilter] = useState("all");

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
        <section className="w-full bg-whites pt-[165px] md:pt-[214px] pb-[64px]">

            <hr className="border-t border-[#000000]/20 pt-[123px]" />

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

                    <div className="relative w-full md:w-auto inline-flex justify-center">
                        {/* Filter Button */}
                        <button
                            className="flex items-center gap-[11px] cursor-pointer"
                            onClick={() => setIsFilterOpen((prev) => !prev)}
                        >
                            <img src={filterIcon} />
                            <Text className="text-[16px] md:text-[16px]">Filter</Text>
                        </button>
                        {/* Filter Box */}
                        {isFilterOpen && (
                            <div className="absolute right-0 top-full mt-3 z-40 w-full max-w-[100vw] sm:w-[390px] bg-[#9EE7B8] overflow-hidden">

                                {/* Close Button */}
                                <button
                                    onClick={() => setIsFilterOpen(false)}
                                    className="cursor-pointer ml-auto block mr-[28px] mt-[24px]"
                                >
                                    <img src={closeIcon} className="w-4 h-4" />
                                </button>

                                <div className="flex items-center justify-between pt-[16px] pb-[19px] pl-[24px]">
                                    <button
                                        onClick={() => setSelectedFilter("all")}
                                        className="flex items-center gap-4 text-[16px] font-kosans cursor-pointer"
                                    >
                                        <span
                                            className={`w-2 h-2 rounded-full ${selectedFilter === "all"
                                                ? "bg-black"
                                                : "bg-transparent"
                                                }`}
                                        />
                                        <span>All Projects</span>
                                    </button>
                                </div>

                                <hr class="border-t-[0.5px] border-black" />

                                {/* Sector */}
                                <div className="flex items-center justify-between py-[19px] pl-[24px]">
                                    <button
                                        onClick={() => setSelectedFilter("sector")}
                                        className="flex items-center gap-4 text-[16px] font-kosans cursor-pointer"
                                    >
                                        <span
                                            className={`w-2 h-2 rounded-full ${selectedFilter === "sector"
                                                ? "bg-black"
                                                : "bg-transparent"
                                                }`}
                                        />
                                        <span>Sector</span>
                                    </button>
                                </div>

                                <hr class="border-t-[0.5px] border-black" />

                                {/* Locations */}
                                <div className="flex items-center justify-between pt-[19px] pb-[25px] pl-[24px]">
                                    <button
                                        onClick={() => setSelectedFilter("location")}
                                        className="flex items-center gap-4 text-[16px] font-kosans cursor-pointer"
                                    >
                                        <span
                                            className={`w-2 h-2 rounded-full ${selectedFilter === "location"
                                                ? "bg-black"
                                                : "bg-transparent"
                                                }`}
                                        />
                                        <span>Locations</span>
                                    </button>
                                </div>
                            </div>
                        )}

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
