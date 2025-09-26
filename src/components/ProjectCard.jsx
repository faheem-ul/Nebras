import { Link } from "react-router-dom";

import Text from "@/components/ui/Text";

function ProjectCard({ project }) {
    return (
        <Link
            to={`/our-projects/${project.slug}`} className="w-full max-w-full md:max-w-[297px]">
            <div className="project-card ">
                <div className="h-[300px] overflow-hidden">
                    <img
                        src={project.card.thumbnail}
                        alt={project.title}
                        className="w-full h-full object-cover object-center transform transition duration-300  ease-in-out hover:scale-110"
                    />
                </div>
                <Text className="text-[16px] md:text-[16px] mt-[14px]">
                    {project.card.location}
                </Text>
                <Text className="text-[18px] md:text-[18px] mt-[6px]">
                    {project.title}
                </Text>
            </div>
        </Link>
    );
}

export default ProjectCard;
