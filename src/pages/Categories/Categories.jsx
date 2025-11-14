

import { useMemo } from "react";
import { useParams } from "react-router-dom";

import projectsData from "@/data/projects.json";

import { useLanguage } from "@/context/LanguageContext";
import Text from "@/components/ui/Text";
import ProjectCard from "@/components/ProjectCard";

// Small helper to make string comparisons accent/case insensitive.
const normalize = (value) =>
  value?.toString().trim().toLowerCase().normalize("NFKD") || "";

// Converts `slug-value` back to readable text.
const deslugify = (slug = "") =>
  decodeURIComponent(slug).replace(/-/g, " ").trim();

// Mapping between the slugs we use in URLs and the actual sector names
// stored inside `projects.json`. This keeps slugs nice and short.
const SECTOR_LOOKUP = {
  "planning-urban-heritage": {
    search: ["urban planning & architectural heritage"],
    display: {
      en: "Planning & Urban Heritage",
      ar: "مشاريع  التراث  العمراني",
    },
  },
  infrastructure: {
    search: ["infrastructure"],
    display: {
      en: "Infrastructure",
      ar: "مشاريع  الطرق  والمرور ",
    },
  },
};

// Same idea for locations. We can list multiple variants (KSA / Saudi Arabia).
const LOCATION_LOOKUP = {
  "saudi-arabia": {
    search: ["saudi arabia", "ksa"],
    display: {
      en: "Saudi Arabia",
      ar: "السعودية",
    },
  },
  jordan: {
    search: ["jordan"],
    display: {
      en: "Jordan",
      ar: "الأردن",
    },
  },
};

function Categories() {
  const { lang } = useLanguage();
  const isArabic = lang === "ar";
  const { sectorSlug = "", locationSlug = "" } = useParams();

  // Fallback to the raw slug if someone enters an unsupported value.
  const sectorConfig = SECTOR_LOOKUP[sectorSlug] ?? {
    search: [deslugify(sectorSlug)],
    display: { en: deslugify(sectorSlug), ar: deslugify(sectorSlug) },
  };

  const locationConfig = LOCATION_LOOKUP[locationSlug] ?? {
    search: [deslugify(locationSlug)],
    display: { en: deslugify(locationSlug), ar: deslugify(locationSlug) },
  };

  const sectorTargets = sectorConfig.search
    .map((value) => normalize(value))
    .filter(Boolean);
  const locationTargets = locationConfig.search
    .map((value) => normalize(value))
    .filter(Boolean);

  // Build a memoized list so we only re-run the filter when params change.
  const filteredProjects = useMemo(() => {
    return projectsData.projects.filter((project) => {
      const sectors =
        project.details?.sector?.en?.map((item) => normalize(item)) ?? [];
      const locations =
        project.details?.locations?.en?.map((item) => normalize(item)) ?? [];

      const matchesSector = sectorTargets.length
        ? sectors.some((sector) =>
            sectorTargets.some((target) => sector.includes(target))
          )
        : true;

      const matchesLocation = locationTargets.length
        ? locations.some((loc) =>
            locationTargets.some((target) => loc.includes(target))
          )
        : true;

      return matchesSector && matchesLocation;
    });
  }, [sectorTargets, locationTargets]);

  // Simple heading string for both languages (e.g. "Infrastructure · Jordan").
  const headingTitle = isArabic
    ? sectorConfig.display.ar || "القطاع"
    : sectorConfig.display.en || "Category";
    
  const headingSubtitle = isArabic
    ? locationConfig.display.ar || ""
    : locationConfig.display.en || "";

  return (
    <section className="w-full bg-white pt-[140px] md:pt-[220px] pb-[80px]">
      <div
        className="max-w-[1312px] w-full mx-auto px-5"
        dir={isArabic ? "rtl" : "ltr"}
      >
        <header className="mb-10 md:mb-[60px] text-center">
          <div data-aos="fade-up" data-aos-delay="300">
            <Text
              as="h1"
              className={`text-black  ${
                isArabic ? "font-arabic" : "font-logirent"
              }`}
            >
              {headingTitle}
            </Text>
            {headingSubtitle && (
              <Text className={`text-base  ${ isArabic ? "font-arabic md:text-[50px]  mt-1" : " mt-3 md:text-[40px]"} `}>
                ({headingSubtitle})
              </Text>
            )}
          </div>
        </header>

        {filteredProjects.length === 0 ? (
          <div className="text-center text-black/60" data-aos="fade-up" data-aos-delay="500">
            {isArabic
              ? "لا توجد مشاريع مطابقة للمعايير المحددة."
              : "No projects match the selected criteria."}
          </div>
        ) : (
          <div className="flex flex-wrap gap-x-[27px] gap-y-[30px] justify-center md:justify-start" data-aos="fade-up" data-aos-delay="500">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Categories;
