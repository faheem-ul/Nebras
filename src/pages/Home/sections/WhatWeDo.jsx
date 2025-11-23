import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";

import { useLanguage } from "@/context/LanguageContext";
import Text from "@/components/ui/Text";
import whatWeDoImage from "@/assets/home/what-we-do.png";

export default function WhatWeDo() {
  // Read More Content State
  const [showMore, setShowMore] = useState(false);

  const { lang } = useLanguage();
  const isArabic = lang === "ar";

  const services = [
    {
      en: { title: "- Urban Planning & Urban Design: Crafting functional, aesthetically appealing, and sustainable urban environments." },
      ar: { title: "–  التخطيط والتصميم الحضري: تطوير مخططات شمولية متكاملة تعزز جودة الحياة وتدعم التنمية المستدامة." }
    },
    {
      en: { title: "- Urban Heritage: Preserving and revitalizing historical and cultural assets." },
      ar: { title: "–  التراث العمراني: اكتشاف وتسجيل وتوثيق الأصول التاريخية والثقافية." }
    },
    {
      en: { title: "- Project Management: Ensuring projects are delivered efficiently, on time, and within budget." },
      ar: { title: "–  إدارة المشاريع: ضمان تنفيذ المشاريع بكفاءة، ضمن الوقت والميزانية المحددين" }
    },
    {
      en: { title: "- Engineering Design & Review: Providing innovative and technically sound design solutions." },
      ar: { title: "–  التصاميم الهندسية: تقديم حلول تصميمية مبتكرة ومبنية على أسس فنية." }
    },
    {
      en: { title: "- Infrastructure Engineering: Developing roads, bridges, tunnels, and other critical infrastructure." },
      ar: { title: "–  هندسة البنية التحتية: تطوير الطرق والجسور والأنفاق وشبكات تصريف مياه الأمطار والبنى التحتية الأخرى." }
    },
    {
      en: { title: "- Transportation & Traffic Studies: Optimizing mobility, enhancing safety, and managing traffic." },
      ar: { title: "–  دراسات النقل والمرور: تحسين أداء شبكات الطرق، رفع مستوى السلامة المرورية، إدارة الازدحام بفعالية." }
    },
    {
      en: { title: "- Quantity Surveying & Field Surveys: Conducting detailed technical and socio-economic surveys." },
      ar: { title: "–  حساب الكميات والمسوحات الميدانية: إعداد دراسات فنية واجتماعية واقتصادية دقيقة." }
    },
    {
      en: { title: "- Laser Scanning: Leveraging technology for precise measurements and analysis." },
      ar: { title: "–  المسح بالليزر: توظيف أحدث التقنيات للحصول على رفع مساحي دقيق." }
    },
    {
      en: { title: "- Administrative Consulting & Governance: Supporting compliance, strategy, and organizational excellence." },
      ar: { title: "–  الاستشارات الإدارية والحوكمة: دعم الالتزام المؤسسي والاستراتيجيات والتميز التنظيمي." }
    },
  ];

  return (
    <section className="w-full bg-white pt-[48px] md:pt-[93px] ">
      <div className="relative max-w-[1312px] px-5 w-full mx-auto">

        {/* Title */}
        <div data-aos="fade-right" data-aos-delay="400" dir={isArabic ? 'rtl' : 'ltr'}>
          <Text
            as="h1"
            className={` mb-[15px] md:mb-0  `}
          >
            {isArabic ? (
              <>
                <span className="text-outline-black">ماذا</span> نفعل
              </>
            ) : (
              <>
                <span className="text-outline-black">What</span> We Do
              </>
            )}
          </Text>
        </div>

        <div className="relative flex flex-col md:flex-row gap-[70px]">
          {/* Image */}
          <div className="relative overflow-hidden hidden md:block">
            <div className="relative">
              <img
                src={whatWeDoImage}
                alt="What we do"
                className="w-full h-[578px] object-cover"
              />
            </div>

          </div>

          {/* Text content */}
          <div className="pb-[48px] md:pb-[85px] w-full md:max-w-[786px]" data-aos="fade-up" data-aos-delay="400"
            dir={isArabic ? 'rtl' : 'ltr'}
          >
            <Text className={` ${isArabic ? "" : "mb-[12px]"
              }`}>
              {isArabic
                ? "في نبراس كونسلت، نقدم خدمات هندسية واستشارية متكاملة تشمل جميع مراحل دورة حياة المشروع، من التخطيط الأولي إلى التصميم والتنفيذ."
                : "Established in the heart of Amman, Jordan, Nebras Consult is a leading engineering and technical consultancy dedicated to shaping sustainable communities across the Arab region. With years of experience in infrastructure, urban planning, and architectural heritage, we deliver innovative, reliable, and sustainable solutions that address the needs of the modern era."}
            </Text>
            <Text>
              {isArabic
                ? "وتستند خبراتنا إلى فهم عميق للجوانب الثقافية والبيئية والفنية في المنطقة."
                : "Guided by our values of Innovation, Integrity, Excellence, Sustainability, and Collaboration, our highly skilled team of engineers and consultants works closely with clients and partners to transform complex challenges into practical, impactful results. At Nebras Consult, we don’t just consult, we build lasting solutions that serve communities and future generations."}
            </Text>

            {/* Expandable Section */}
            {showMore && (
              <div className="mt-[12px] md:mt-7 space-y-2">
                <Text>
                  {isArabic
                    ? ""
                    : "At Nebras Consult, we provide comprehensive engineering and consulting services that span the full project lifecycle, from conceptual planning to execution and evaluation. Our expertise is rooted in a deep understanding of the region’s cultural, environmental, and technical landscape."}
                </Text>

                <Text className={`font-semibold  ${isArabic ? " font-zarid text-[36px] leading-[45px]" : "font-ubuntu"
                  }`}>
                  {isArabic ? "تشمل خدماتنا الأساسية:" : "Our Core Services Include:"}
                </Text>

                <ul className="space-y-2">
                  {services.map((service, index) => (
                    <li key={index} className="flex flex-col ">
                      {/* Heading with icon */}
                      <div className="flex items-center gap-2">
                        {/* <FaChevronRight className={`w-4 h-4 text-[#016938] ${isArabic ? "transform rotate-180" : ""}`} /> */}
                        <Text>{isArabic ? service.ar.title : service.en.title}</Text>
                      </div>
                      {/* Description */}
                      <Text className="ml-6 md:text-[20px] ">
                        {isArabic ? service.ar.desc : service.en.desc}
                      </Text>
                    </li>
                  ))}
                </ul>

                <Text className="text-center">
                  {isArabic
                    ? "من خلال أعمالنا، نسعى في نبراس كونسلت إلى تقديم حلول مستدامة ومبتكرة وعملية تُسهم في نجاح عملائنا، وتعزيز المجتمعات."
                    : "Through our work, Nebras Consult strives to deliver sustainable, innovative, and practical solutions that drive client success, enhance communities, and safeguard the environment."}
                </Text>
              </div>
            )}

            {/* Read More/Less Button */}
            <button
              onClick={() => setShowMore(!showMore)}
              className={` mt-6 w-[120px] h-[46px] md:w-[164px] md:h-[50px] text-[18px] px-[15px] py-[14px] md:px-[15px] md:py-[14px] bg-green hover:bg-green-900 text-white md:text-[24px] leading-none cursor-pointer ${isArabic ? "font-zarid" : "font-ubuntu"}`}
            >
              {showMore ? (isArabic ? "إقرأ أقل" : "Read Less") : (isArabic ? "المزيد" : "Read More")}
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}
