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
      en: { title: "Urban Planning & Urban Design", desc: "Crafting functional, aesthetically appealing, and sustainable urban environments." },
      ar: { title: "التخطيط الحضري والتصميم العمراني", desc: "إعداد بيئات حضرية عملية وجذابة وجمالية ومستدامة." }
    },
    {
      en: { title: "Urban Heritage", desc: "Preserving and revitalizing historical and cultural assets." },
      ar: { title: "التراث الحضري", desc: "الحفاظ على الأصول التاريخية والثقافية وإحياؤها." }
    },
    {
      en: { title: "Project Management", desc: "Ensuring projects are delivered efficiently, on time, and within budget." },
      ar: { title: "إدارة المشاريع", desc: "ضمان تنفيذ المشاريع بكفاءة وفي الوقت المحدد وضمن الميزانية." }
    },
    {
      en: { title: "Engineering Design & Review", desc: "Providing innovative and technically sound design solutions." },
      ar: { title: "التصميم الهندسي والمراجعة", desc: "تقديم حلول تصميم مبتكرة ومبنية على أسس تقنية سليمة." }
    },
    {
      en: { title: "Infrastructure Engineering", desc: "Developing roads, bridges, tunnels, and other critical infrastructure." },
      ar: { title: "الهندسة التحتية", desc: "تطوير الطرق والجسور والأنفاق وغيرها من البنية التحتية الحيوية." }
    },
    {
      en: { title: "Transportation & Traffic Studies", desc: "Optimizing mobility, enhancing safety, and managing traffic." },
      ar: { title: "النقل ودراسات المرور", desc: "تحسين التنقل، تعزيز السلامة، وإدارة حركة المرور." }
    },
    {
      en: { title: "Quantity Surveying & Field Surveys", desc: "Conducting detailed technical and socio-economic surveys." },
      ar: { title: "الكيل والمسوح الميدانية", desc: "إجراء مسوح تقنية واجتماعية واقتصادية مفصلة." }
    },
    {
      en: { title: "Laser Scanning", desc: "Leveraging technology for precise measurements and analysis." },
      ar: { title: "المسح بالليزر", desc: "استخدام التكنولوجيا للحصول على قياسات دقيقة وتحليلات." }
    },
    {
      en: { title: "Administrative Consulting & Governance", desc: "Supporting compliance, strategy, and organizational excellence." },
      ar: { title: "الاستشارات الإدارية والحوكمة", desc: "دعم الامتثال، الاستراتيجيات، والتميز المؤسسي." }
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
            <Text className="mb-[12px] md:mb-[35px]">
              {isArabic
                ? "تأسست نبراس للاستشارات في قلب عمّان، الأردن، وهي شركة رائدة في مجال الاستشارات الهندسية والفنية مكرسة لبناء مجتمعات مستدامة في جميع أنحاء المنطقة العربية. مع سنوات من الخبرة في البنية التحتية والتخطيط الحضري والتراث المعماري، نقدم حلولاً مبتكرة وموثوقة ومستدامة تلبي احتياجات العصر الحديث."
                : "Established in the heart of Amman, Jordan, Nebras Consult is a leading engineering and technical consultancy dedicated to shaping sustainable communities across the Arab region. With years of experience in infrastructure, urban planning, and architectural heritage, we deliver innovative, reliable, and sustainable solutions that address the needs of the modern era."}
            </Text>
            <Text>
              {isArabic
                ? "مسترشدين بقيمنا في الابتكار والنزاهة والتميز والاستدامة والتعاون، يعمل فريقنا الماهر من المهندسين والمستشارين بشكل وثيق مع العملاء والشركاء لتحويل التحديات المعقدة إلى نتائج عملية وفعالة. في نبراس للاستشارات، نحن لا نقدم الاستشارات فحسب، بل نبني حلولًا دائمة تخدم المجتمعات والأجيال القادمة."
                : "Guided by our values of Innovation, Integrity, Excellence, Sustainability, and Collaboration, our highly skilled team of engineers and consultants works closely with clients and partners to transform complex challenges into practical, impactful results. At Nebras Consult, we don’t just consult, we build lasting solutions that serve communities and future generations."}
            </Text>

            {/* Expandable Section */}
            {showMore && (
              <div className="mt-[12px] md:mt-6 space-y-6">
                <Text>
                  {isArabic
                    ? "في نبراس للاستشارات، نقدم خدمات هندسية واستشارية شاملة تغطي دورة حياة المشروع كاملة، من التخطيط المفاهيمي إلى التنفيذ والتقييم. خبرتنا متجذرة في فهم عميق للمناظر الثقافية والبيئية والتقنية في المنطقة."
                    : "At Nebras Consult, we provide comprehensive engineering and consulting services that span the full project lifecycle, from conceptual planning to execution and evaluation. Our expertise is rooted in a deep understanding of the region’s cultural, environmental, and technical landscape."}
                </Text>

                <Text className="font-semibold font-logirent">
                  {isArabic ? "تشمل خدماتنا الأساسية:" : "Our Core Services Include:"}
                </Text>

                <ul className="space-y-5">
                  {services.map((service, index) => (
                    <li key={index} className="flex flex-col ">
                      {/* Heading with icon */}
                      <div className="flex items-center gap-2">
                        <FaChevronRight className={`w-4 h-4 text-[#016938] ${isArabic ? "transform rotate-180" : ""}`} />
                        <Text>{isArabic ? service.ar.title : service.en.title}</Text>
                      </div>
                      {/* Description */}
                      <Text className="ml-6 md:text-[20px] ">
                        {isArabic ? service.ar.desc : service.en.desc}
                      </Text>
                    </li>
                  ))}
                </ul>

                <Text>
                  {isArabic
                    ? "من خلال عملنا، تسعى نبراس للاستشارات إلى تقديم حلول مستدامة ومبتكرة وعملية تدفع إلى نجاح العملاء، وتعزز المجتمعات، وتحافظ على البيئة."
                    : "Through our work, Nebras Consult strives to deliver sustainable, innovative, and practical solutions that drive client success, enhance communities, and safeguard the environment."}
                </Text>
              </div>
            )}

            {/* Read More/Less Button */}
            <button
              onClick={() => setShowMore(!showMore)}
              className={` mt-6 w-[120px] h-[46px] md:w-[164px] md:h-[50px] text-[18px] px-[15px] py-[14px] md:px-[15px] md:py-[14px] bg-green text-white md:text-[24px] leading-none cursor-pointer ${isArabic ? "font-zarid" : "font-ubuntu"}`}
            >
              {showMore ? (isArabic ? "إقرأ أقل" : "Read Less") : (isArabic ? "المزيد" : "Read More")}
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}
