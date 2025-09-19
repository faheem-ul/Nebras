import { useParams } from "react-router-dom";

import projectsData from "../../../data/projects.json";
import Text from '@/components/ui/Text'
import ProjectSlider from "./ProjectSlider";

function ProjectSingle() {
    const { slug } = useParams();
    const project = projectsData.projects.find((p) => p.slug === slug);

    if (!project) {
        return <h2 className="text-center text-white text-2xl">Project not found</h2>;
    }

    return (
        <>
            <section className="relative w-full min-h-[500px]  md:min-h-[759px] bg-white ">
                {/* Hero Image */}
                <img
                    src={project.heroImage}
                    alt={project.title}
                    className="absolute inset-0  w-full h-full object-cover"
                />
                {/*Project Title */}
                <div className="relative flex flex-col  min-h-[500px] md:min-h-[827px] max-w-[1312px] mx-auto pt-[250px] md:pt-[368px] px-5">
                    <Text as="h1" className="text-white max-w-[333px] w-full">{project.title}</Text>
                </div>
            </section >

            {/* Project Description */}
            <section className="w-full bg-white">
                <div className="max-w-[1312px] w-full mx-auto px-5 md:pt-[95px] mt-[60px] mb-[70px] md:pb-[109px]">
                    <Text
                        as="h1"
                        className=" mb-[40px]"
                    >
                        <span className="text-outline-black">project</span> description
                    </Text>
                    <div className="mb-8">
                        {project.description.map((para, idx) => (
                            <Text key={idx} className="mb-7">{para}</Text>
                        ))}
                    </div>
                </div>
            </section>


            {/* Project Details */}
            <section className="max-w-[1312px] w-full mx-auto px-5 mb-[60px] md:mb-[98px]">
                <div className="flex flex-col md:flex-row justify-between flex-wrap gap-8 md:gap-12">
                    {/* Sector */}
                    <div className="w-full md:max-w-[165px]">
                        <Text className="font-logirent text-[22px] md:text-[34px] mb-[24px] md:mb-[42px]">
                            Sector
                        </Text>
                        <ul className="text-[14px] md:text-[18px] font-kosans">
                            {project.details.sector.map((sector, idx) => (
                                <li key={idx} className="mb-[18px] md:mb-[27px]">
                                    {sector}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Location */}
                    <div className="w-full md:max-w-[179px]">
                        <Text className="font-logirent text-[22px] md:text-[34px] mb-[24px] md:mb-[42px]">
                            Location
                        </Text>
                        <Text className="text-[14px] md:text-[18px]">
                            {project.details.location}
                        </Text>
                    </div>

                    {/* Clients */}
                    <div className="w-full md:max-w-[203px]">
                        <Text className="font-logirent text-[22px] md:text-[34px] mb-[24px] md:mb-[42px]">
                            Clients
                        </Text>
                        <ul className="text-[14px] md:text-[18px] font-kosans">
                            {project.details.clients.map((client, idx) => (
                                <li key={idx} className="mb-[18px] md:mb-[27px]">
                                    {client}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Period Of Services */}
                    <div className="w-full md:max-w-[382px]">
                        <Text className="font-logirent text-[22px] md:text-[34px] mb-[24px] md:mb-[42px]">
                            Period of Services
                        </Text>
                        <Text className="text-[14px] md:text-[18px]">
                            {project.details.periodsOfServices}
                        </Text>
                    </div>
                </div>
            </section>


            {/* Project Slider */}
            <ProjectSlider images={project.sliderImages} />
        </>

    );
}

export default ProjectSingle;
