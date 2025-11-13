import { useState } from "react";
import { LuChevronDown, LuChevronUp } from "react-icons/lu";

import projectsData from "@/data/projects.json";

import { useLanguage } from "@/context/LanguageContext";
import Text from "@/components/ui/Text"
import ProjectCard from "@/components/ProjectCard";
import closeIcon from "@/assets/our-projects/close-icon.svg"
import filterIcon from "@/assets/our-projects/filter-icon.svg"

function ProjectsArchive() {
    const { lang } = useLanguage();
    const isArabic = lang === "ar";

    // Filter state
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    // const [selectedFilter, setSelectedFilter] = useState("all");

    const [selectedCountry, setSelectedCountry] = useState("");
    const [selectedCity, setSelectedCity] = useState("");
    const [selectedSector, setSelectedSector] = useState("");

    const [openDropdown, setOpenDropdown] = useState(null); // "country" | "city" | "sector"

    // Visible Projects State
    const projectsPerPage = 8;
    const [visibleCount, setVisibleCount] = useState(projectsPerPage);

    // ----- Handlers that CLEAR other filters -----
    const handleSelectCountry = (country) => {
        setSelectedCountry(country);
        setSelectedCity("");      // clear other filters
        setSelectedSector("");
        // setOpenDropdown(null);
        setVisibleCount(projectsPerPage);
        // setIsFilterOpen(false);   // close filter box (optional)
    };

    const handleSelectCity = (city) => {
        setSelectedCity(city);
        setSelectedCountry("");   // clear other filters
        setSelectedSector("");
        // setOpenDropdown(null);
        setVisibleCount(projectsPerPage);
        // setIsFilterOpen(false);
    };

    const handleSelectSector = (sector) => {
        setSelectedSector(sector);
        setSelectedCountry("");
        setSelectedCity("");
        // setOpenDropdown(null);
        setVisibleCount(projectsPerPage);
        // setIsFilterOpen(false);
    };

    const handleClearAll = () => {
        setSelectedCountry("");
        setSelectedCity("");
        setSelectedSector("");
        setOpenDropdown(null);
        setVisibleCount(projectsPerPage);
        // setIsFilterOpen(false);
    };

    // ----- Filter: ALWAYS start from the full dataset -----
    let filteredProjects = projectsData.projects;

    if (selectedSector) {
        const sel = selectedSector.toLowerCase();
        filteredProjects = projectsData.projects.filter((p) =>
            (p.details?.sector?.en || []).some((s) => s.toLowerCase().includes(sel))
        );
    } else if (selectedCountry) {
        const sel = selectedCountry.toLowerCase();
        filteredProjects = projectsData.projects.filter((p) =>
            (p.details?.locations?.en || []).some((l) => l.toLowerCase().includes(sel))
        );
    } else if (selectedCity) {
        const sel = selectedCity.toLowerCase();
        filteredProjects = projectsData.projects.filter((p) =>
            (p.details?.locations?.en || []).some((l) => l.toLowerCase().includes(sel))
        );
    }
    // else: no selected filter -> keep all projects

    const currentProjects = filteredProjects.slice(0, visibleCount);


    return (
        <section className="w-full bg-whites  pt-[127px] md:pt-[214px] pb-[64px]">

            <hr className="border-t border-[#000000]/20 pt-[123px] hidden md:block" />

            <div className="max-w-[1312px] w-full mx-auto px-4">

                {/* Hero Section */}
                <div className="flex gap-6 flex-row justify-between items-center mb-[26px]  md:mb-[85px]" 
                dir={isArabic ? 'rtl' : 'ltr'}
                >
                    {/* Title*/}
                    <div data-aos="fade-right" data-aos-delay="400">
                        <Text as="h1">
                            {isArabic ? (
                                <>
                                    مشاريعنا
                                </>
                            ) : (
                                <>
                                    <span className="text-outline-black">Our</span> Projects
                                </>
                            )}
                        </Text>
                    </div>

                    <div className="relative inline-flex justify-center">
                        {/* Filter Button */}
                        {/* <div data-aos="fade-left" data-aos-delay="400" >
                            <button
                                className="flex items-center justify-end gap-[11px] cursor-pointer"
                                onClick={() => setIsFilterOpen((prev) => !prev)}
                            >
                                <img src={filterIcon} className="w-[22px] h-auto md-w-[34px]]" />
                                <Text className={`text-[16px]  md:block hidden ${isArabic ? "md:text-[28px]" : "md:text-[16px] uppercase font-bold"}`} >
                                    {isArabic ? "تصفية" : "Filter"}
                                </Text>
                            </button>
                        </div> */}
                        <div data-aos="fade-left" data-aos-delay="400">
                            <button
                                onClick={() => setIsFilterOpen((prev) => !prev)}
                                className={`flex items-center gap-[11px] cursor-pointer justify-end ${
                                isArabic ? "flex-row-reverse" : ""
                                }`}
                            >
                                <img
                                src={filterIcon}
                                className="w-[22px] h-auto md:w-[34px]"
                                alt=""
                                />
                                <Text
                                className={`hidden md:block text-[16px] ${
                                    isArabic ? "md:text-[28px]" : "md:text-[16px] uppercase font-bold"
                                }`}
                                >
                                {isArabic ? "تصفية" : "Filter"}
                                </Text>
                            </button>
                            </div>


                        {/* Filter Box */}
                        {isFilterOpen && (
                            <div className="absolute right-[8px] md:right-0 top-full mt-[4px] md:mt-3 z-40 w-[185px] max-w-[100vw] md:w-[390px] bg-[#9EE7B8] overflow-hidden">
                                <button
                                    onClick={() => setIsFilterOpen(false)}

                                    className={`cursor-pointer block mt-[11px] md:mt-[24px] ml-auto mr-[13px] 
                                    `}

                                >
                                    <img src={closeIcon} className="w-[8.5px] h-[7.9px] md:w-4 md:h-4" />
                                </button>

                                {/* 🟩 Label maps */}
                                {(() => {
                                    var countryLabels = {
                                        KSA: isArabic ? "السعودية" : "KSA",
                                        Jordan: isArabic ? "الأردن" : "Jordan",
                                    };

                                    var cityLabels = {
                                        Riyadh: isArabic ? "الرياض" : "Riyadh",
                                        Amman: isArabic ? "عمّان" : "Amman",
                                        Irbid: isArabic ? "إربد / مادبا / الزرقاء / السلط" : "Irbid / Madaba / Al Zarqa / Al Salt",
                                        Ajloun: isArabic ? "عجلون" : "Ajloun",
                                        "Wadi Mousa - Petra": isArabic ? "وادي موسى - البترا" : "Wadi Mousa - Petra",
                                    };


                                    var sectorLabels = {
                                        Infrastructure: isArabic ? "البنية التحتية" : "Infrastructure",
                                        "Urban planning & architectural heritage": isArabic
                                            ? "التخطيط الحضري والتراث المعماري"
                                            : "Urban planning & architectural heritage",
                                    };

                                    return (
                                        <>
                                            {/* All Projects */}
                                            <div className="px-[14.5px] md:px-[24px] py-[12px] md:py-[19px]">
                                                <button
                                                    onClick={handleClearAll}
                                                    className="text-[12px] md:text-[16px] font-kosans flex items-center gap-2 cursor-pointer"
                                                >
                                                    {/* <span className="w-2 h-2 rounded-full bg-black"></span> */}
                                                    {isArabic ? "جميع المشاريع" : "All Projects"}
                                                </button>
                                            </div>

                                            <hr className="border-t border-black/50" />

                                            {/* COUNTRY */}
                                            <div className="px-[14.5px] md:px-[24px] py-[12px] md:py-[19px]">
                                                <button
                                                    onClick={() =>
                                                        setOpenDropdown(openDropdown === "country" ? null : "country")
                                                    }
                                                    className="cursor-pointer flex justify-between items-center w-full text-[12px] md:text-[16px] font-kosans"
                                                >
                                                    <span>{isArabic ? "الدولة" : "Country"}</span>
                                                    <span>{openDropdown === "country" ? (
                                                        <LuChevronUp className="text-[16px] md:text-[18px]" />
                                                    ) : (
                                                        <LuChevronDown className="text-[16px] md:text-[18px]" />
                                                    )}</span>
                                                </button>
                                                {openDropdown === "country" && (
                                                    <div className="pl-4 mt-2 flex flex-col gap-1">
                                                        {Object.keys(countryLabels).map((country) => (
                                                            <button
                                                                key={country}
                                                                onClick={() => handleSelectCountry(country)}
                                                                className={`cursor-pointer text-[12px] md:text-[14px]  text-left ${selectedCountry === country ? "font-bold underline" : ""
                                                                    }`}
                                                            >
                                                                {countryLabels[country]}
                                                            </button>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>

                                            <hr className="border-t border-black/50" />

                                            {/* CITY */}
                                            <div className="px-[14.5px] md:px-[24px] py-[12px] md:py-[19px]">
                                                <button
                                                    onClick={() =>
                                                        setOpenDropdown(openDropdown === "city" ? null : "city")
                                                    }
                                                    className="cursor-pointer flex justify-between items-center w-full text-[12px] md:text-[16px] font-kosans"
                                                >
                                                    <span>{isArabic ? "المدينة" : "Location"}</span>
                                                    <span>{openDropdown === "city" ? (
                                                        <LuChevronUp className="text-[16px] md:text-[18px]" />
                                                    ) : (
                                                        <LuChevronDown className="text-[16px] md:text-[18px]" />
                                                    )}</span>
                                                </button>
                                                {openDropdown === "city" && (
                                                    <div className="pl-4 mt-2 flex flex-col gap-1">
                                                        {Object.keys(cityLabels).map((city) => (
                                                            <button
                                                                key={city}
                                                                onClick={() => handleSelectCity(city)}
                                                                className={`cursor-pointer text-[12px] md:text-[14px] text-left ${selectedCity === city ? "font-bold underline" : ""
                                                                    }`}
                                                            >
                                                                {cityLabels[city]}
                                                            </button>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>

                                            <hr className="border-t border-black/50" />

                                            {/* SECTOR */}
                                            <div className="px-[14.5px] md:px-[24px] py-[12px] md:py-[19px]">
                                                <button
                                                    onClick={() =>
                                                        setOpenDropdown(openDropdown === "sector" ? null : "sector")
                                                    }
                                                    className="cursor-pointer flex justify-between items-center w-full text-[12px] md:text-[16px] font-kosans"
                                                >
                                                    <span>{isArabic ? "القطاع" : "Sector"}</span>
                                                    <span>{openDropdown === "sector" ? (
                                                        <LuChevronUp className="text-[16px] md:text-[18px]" />
                                                    ) : (
                                                        <LuChevronDown className="text-[16px] md:text-[18px]" />
                                                    )}</span>
                                                </button>
                                                {openDropdown === "sector" && (
                                                    <div className="pl-4 mt-2 flex flex-col gap-1">
                                                        {Object.keys(sectorLabels).map((sector) => (
                                                            <button
                                                                key={sector}
                                                                onClick={() => handleSelectSector(sector)}
                                                                className={`cursor-pointer  text-[12px] md:text-[14px] text-left ${selectedSector === sector ? "font-bold underline" : ""
                                                                    }`}
                                                            >
                                                                {sectorLabels[sector]}
                                                            </button>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        </>
                                    );
                                })()}
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
                    <div className="flex justify-center mt-[45px] md:mt-[64px]">
                        <button
                            onClick={() => setVisibleCount((prev) => prev + projectsPerPage)}
                            className={`mx-auto md:w-[149px] text-[18px] md:text-[24px] px-[15px] py-[14px] md:px-[15px] md:py-[14px] bg-green text-white   leading-none cursor-pointer ${isArabic ? "font-zarid" : ""}`}
                        >
                            {isArabic ? "عرض المزيد" : "View More"}
                        </button>
                    </div>
                )}

            </div>
        </section >
    );
}

export default ProjectsArchive;
