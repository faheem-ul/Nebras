import { Link } from "react-router-dom";

import Text from "@/components/ui/Text";

function ProjectCard({ project }) {
    return (
        <Link
            to={`/our-projects/${project.slug}`}>
            <div className="project-card ">
                <div className="h-full overflow-hidden">
                    <img
                        src={project.card.thumbnail}
                        alt={project.title}
                        className="w-full h-auto transform transition duration-300 ease-in-out hover:scale-108"
                    />
                </div>
                <Text className="text-[16px] md:text-[16px] mt-[26px]">
                    {project.card.location}
                </Text>
                <Text className="text-[18px] md:text-[18px] mt-[22px]">
                    {project.title}
                </Text>
            </div>
        </Link>
    );
}

export default ProjectCard;
