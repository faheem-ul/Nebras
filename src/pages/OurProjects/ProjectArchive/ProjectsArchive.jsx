import { useState } from "react";

import Text from "@/components/ui/Text"
import filterIcon from "@/assets/our-projects/filter-icon.svg"
import closeIcon from "@/assets/our-projects/close-icon.svg"

import projectsData from "../../../data/projects.json";
import ProjectCard from "../../../components/ProjectCard";

function ProjectsArchive() {
    // filter state
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [selectedFilter, setSelectedFilter] = useState("all");

    // Visible Projects State
    const projectsPerPage = 8;
    const [visibleCount, setVisibleCount] = useState(projectsPerPage);

    const currentProjects = projectsData.projects.slice(0, visibleCount);

    return (
        <section className="w-full bg-whites pt-[165px] md:pt-[214px] pb-[64px]">

            <hr className="border-t border-[#000000]/20 pt-[123px]" />

            <div className="max-w-[1312px] w-full mx-auto px-4">

                {/* Hero Section */}
                <div className="flex flex-col gap-6 sm:flex-row sm:justify-between items-center mb-[85px]">
                    {/* Title*/}
                    <div data-aos="fade-right" data-aos-delay="400">
                        <Text
                            as="h1"
                            className="text-center"
                        >
                            <span className="text-outline-black">Our</span> projects
                        </Text>
                    </div>

                    <div className="relative w-full md:w-auto inline-flex justify-center">
                        {/* Filter Button */}
                        <div data-aos="fade-left" data-aos-delay="400">
                            <button
                                className="flex items-center gap-[11px] cursor-pointer"
                                onClick={() => setIsFilterOpen((prev) => !prev)}
                            >
                                <img src={filterIcon} />
                                <Text className="text-[16px] md:text-[16px]">Filter</Text>
                            </button>
                        </div>
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
                <div className="flex flex-col md:flex-row flex-wrap gap-x-[27px] gap-y-[27px]" data-aos="fade-up" data-aos-delay="400">
                    {currentProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>

                {visibleCount < projectsData.projects.length && (
                    <div className="flex justify-center mt-[77px]">
                        <button
                            onClick={() => setVisibleCount((prev) => prev + projectsPerPage)}
                            className="px-6 py-3 text-[18px]  md:px-[36px] md:py-[33.5px] bg-green text-white font-kosans md:text-[24px] leading-none cursor-pointer "
                        >
                            View More
                        </button>
                    </div>
                )}

            </div>
        </section>
    );
}

export default ProjectsArchive;
