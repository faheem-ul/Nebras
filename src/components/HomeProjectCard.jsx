import { Link } from "react-router-dom";

import { useLanguage } from "@/context/LanguageContext";
import Text from "./ui/Text";

function resolveLocalizedValue(value, lang) {
  if (value == null) return "";
  if (typeof value === "string") return value;
  if (typeof value === "object") {
    return value[lang] ?? value.en ?? Object.values(value)[0] ?? "";
  }
  return String(value);
}

function HomeProjectCard({
  title,
  location,
  image,
  href = "#",
  isFeatured = false,
  delay = 400,
}) {
  const { lang } = useLanguage();
  const isArabic = lang === "ar";

  const displayTitle = resolveLocalizedValue(title, lang);
  const displayLocation = resolveLocalizedValue(location, lang);

  const cardBase =
    "relative flex flex-col border overflow-hidden transition-all duration-300";
  const cardState = isFeatured
    ? "bg-green border-green shadow-[0px_12px_35px_rgba(1,105,56,0.35)]"
    : "bg-[#2F3132] border-[#4B4D4E]";


  const arrowBase =
    "flex h-12 w-12 items-center justify-center rounded-full border transition-colors duration-300";
  const arrowState = isFeatured
    ? "bg-black/25 text-white border-none"
    : "border-[#0E5833] text-white bg-[#016938] group-hover:bg-white group-hover:text-green group-hover:border-white";

  const dividerState = isFeatured
    ? "bg-white"
    : "bg-white";

  return (
    <Link
      to={href}
      className="group block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <article
        dir={isArabic ? "rtl" : "ltr"}
        className={`${cardBase} ${cardState} w-full md:max-w-[407px] h-full text-white`}
      >
        <div className="flex h-full md:min-h-[487px]  flex-col justify-between gap-y-[8px] md:gap-6 px-[32px] pt-[42px] pb-[40px] md:px-[43px] md:pt-[50px] md:pb-[48px]">
          <header className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <Text
                className={`text-lg  ${isArabic ? "font-zarid md:text-[30px] md:leading-[30px]" : "font-ubuntu md:text-[26px] md:leading-[30px]"} `}
              >
                {displayTitle}
              </Text>
            </div>

            <span className={` ${arrowBase} ${arrowState}`} aria-hidden>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              >
                <path
                  d="M5 13L13 5M13 5H6M13 5V12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </header>
          <div>
            {displayLocation && (
              <Text
                className={` text-sm  ${isArabic ? "font-zarid md:text-[25px] md:leading-[30px]" : "font-ubuntu font-light md:text-[20px] md:leading-[43px]"} `}
              >
                ({displayLocation})
              </Text>

            )}
            <span className={`block h-px w-full mt-[8px] mb-[32px] ${dividerState}`} />

            {image && (
              <div className="mt-auto overflow-hidden shadow-[0px_8px_20px_rgba(0,0,0,0.25)]">
                <img
                  src={image}
                  alt={displayTitle}
                  className="h-[243px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            )}
          </div>
        </div>
      </article>
    </Link>
  );
}

export default HomeProjectCard;
