import { Link } from "react-router-dom";

import Text from "@/components/ui/Text";
import { useLanguage } from "@/context/LanguageContext";

function ProjectCard({ project }) {
    const { lang } = useLanguage(); // 'en' or 'ar'

    return (
        <Link
            to={`/our-projects/${project.slug}`} className="w-full max-w-full md:max-w-[297px]">
            <div dir={lang === 'ar' ? 'rtl' : 'ltr'} className={`project-card  transition-all duration-300 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
                <div className="h-[300px] overflow-hidden">
                    <img
                        src={project.card.thumbnail}
                        alt={project.title[lang]}
                        className="w-full h-full object-cover object-center transform transition duration-300  ease-in-out hover:scale-110"
                    />
                </div>
                <ul className="text-[14px] md:text-[16px] mt-[14px] font-kosans">
                    <li>
                        {project.details.locations[lang].map((location, idx, arr) => (
                            <span key={idx}>
                                {location}
                                {idx !== arr.length - 1 ? ', ' : ''}
                            </span>
                        ))}
                    </li>
                </ul>
                <Text className="text-[16px] md:text-[18px] mt-[6px]">
                    {project.title[lang]}
                </Text>
            </div>
        </Link>
    );
}

export default ProjectCard;
