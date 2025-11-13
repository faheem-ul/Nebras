import React from 'react'

import { useLanguage } from "@/context/LanguageContext";
import Text from '@/components/ui/Text'

import mission from '@/assets/about/mission.png'
import vission from '@/assets/about/vission.png'

const MissionVission = () => {
    const { lang } = useLanguage(); // 'en' or 'ar'
    const isArabic = lang === 'ar';

    return (
        <section className="w-full  " >

            {/* Info */}
            <div className='bg-[#f7f7f7] py-[20px] md:py-[70px]'>
            <div className="max-w-[991px]  mx-auto px-5" data-aos="fade-up" data-aos-delay="400" dir={isArabic ? 'rtl' : 'ltr'}>
                {/* <Text className="text-base leading-6 md:text-[24px] md:leading-[42px] text-left md:text-center "> */}
                <Text className={` md:text-center ${isArabic ? 'text-right md:text-[30px] md:leading-[46px]' : 'text-left md:text-[24px] md:leading-[40px]'}`}>
                    {isArabic
                        ? <>
                            بدأت مسيرتنا بتقديم حلول مبتكرة في مجال البنية التحتية والتراث العمراني، مستندين إلى فهم عميق للتراث الثقافي والطبيعي للمنطقة. ومنذ ذلك الحين، توسعنا لتشمل خدماتنا مجالات الاستشارات الهندسية والتقنية وإدارة المشاريع.
                            <br /> <br />
                            بفضل خبراتنا المتراكمة وفريقنا المتخصص من المهندسين والاستشاريين ذوي الخبرة الواسعة، تمكنا من تحقيق نجاحات بارزة في العديد من المشاريع الحيوية في المنطقة العربية، مما أكسبنا ثقة عملائنا وشركائنا.
                        </>
                        : <>
                            Our journey began with a focus on delivering innovative solutions in infrastructure and architectural heritage, rooted in a deep understanding of the region's cultural and natural heritage. Since then, we have expanded our services to encompass engineering consultancy, project management and technical consultancy.
                            <br /> <br />
                            With our accumulated expertise and a highly skilled team of engineers and consultants, we have achieved remarkable success in numerous vital projects across the Arab region, earning the trust of our clients and partners.
                        </>
                    }

                </Text>
            </div>
            </div>

        
             {/* Mission + Vision grid */}
      <div className="max-w-[1312px] w-full mx-auto px-5 mt-[32px] md:mt-[78px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-[27px] md:gap-y-[0px] ">
          {/* Top-left: Mission image */}
          <div
            className="w-full overflow-hidden h-full"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <img
              src={mission}
              alt="Mission"
              className="block w-full h-full object-cover transform transition duration-300 ease-in-out hover:scale-108"
            />
          </div>

          {/* Top-right: Mission text */}
          <div
            className="w-full h-full flex flex-col  justify-start md:pl-[40px]"
            data-aos="fade-up"
            data-aos-delay="400"
            dir={isArabic ? "rtl" : "ltr"}
          >
           
 {/* Text Column */}
 <Text className={`text-[14px] leading-[25px] mb-[20px] ${isArabic ? "md:text-[55px] md:leading-[42px] font-arabic " : " md:text-[36px] md:leading-[42px] font-bold" }`}>
                        {isArabic
                            ? "مهمة"
                            : "Mission"
                               }
                    </Text>
                    {/* <Text className="text-base leading-6 md:text-[24px] md:leading-[42px]"> */}
                    <Text className={`mb-[24px] md:mb-[78px] text-[14px] leading-[25px] ${isArabic ? "md:text-[30px] md:leading-[40px] font-zarid " : " md:text-[24px] md:leading-[39px] " }`}>
                        {isArabic
                            ? 'تتميز نبراس كونسلت برؤية مستقبلية واضحة ورسالة سامية تتمثل في المساهمة في بناء مجتمعات مستدامة من خلال تقديم خدمات استشارية متكاملة تلبي احتياجات العصر.'
                            : ' Nebras Consult is guided by a clear vision and a noble mission: to contribute to the building of sustainable communities by providing integrated consultancy services that meet the needs of the modern era.'
                        }

                    </Text>

                    <Text className={`text-[14px] leading-[25px] mb-[20px] ${isArabic ? "md:text-[55px] md:leading-[42px] font-arabic " : " md:text-[36px] md:leading-[42px] font-bold" }`}>
                        {isArabic
                            ? "بيان رؤية الشركة"
                            : "Company Vision Statement"
                               }
                    </Text>
                    {/* <Text className="text-base leading-6 md:text-[24px] md:leading-[42px]"> */}
                    <Text className={` text-[14px] leading-[25px] ${isArabic ? "md:text-[30px] md:leading-[40px] font-zarid " : " md:text-[24px] md:leading-[39px] " }`}>
                        {isArabic
                            ? 'أن تكون شركتنا في مقدمة الشركات المتخصصة في مجال الاستشارات الهندسية على المستوى الإقليمي. وسنعمل بمسؤولية تجاه ذلك من خلال تقديم حلولاً مبتكرة وموثوقة تُسهم في تحسين البيئة وبناء المجتمعات.'
                            : 'Our company aspires to be a regional leader in engineering consulting, committed to delivering innovative and reliable solutions that contribute to environmental improvement and community development.'
                        }
                    </Text>
           
          </div>

          {/* Bottom-left: Vision text */}
          <div
            className="w-full h-full flex flex-col justify-center md:pr-[40px] mt-[22px] md:mt-0"
            data-aos="fade-up"
            data-aos-delay="400"
            dir={isArabic ? "rtl" : "ltr"}
          >
             <Text className={`text-[14px] leading-[25px] mb-[20px] ${isArabic ? "md:text-[55px] md:leading-[42px] font-arabic " : " md:text-[36px] md:leading-[42px] font-bold" }`}>
                        {isArabic
                            ? "حلول مبتكرة ومستدامة"
                            : "Innovative and Sustainable Solutions"
                               }
                    </Text>
                    {/* <Text className="text-base leading-6 md:text-[24px] md:leading-[42px]"> */}
                    <Text className={` text-[14px] leading-[25px] ${isArabic ? "md:text-[30px] md:leading-[40px] font-zarid " : " md:text-[24px] md:leading-[39px] " }`}>
                        {isArabic
                            ? 'نحن نسعى لتقديم حلول مبتكرة ومستدامة تلبي احتياجات عملائنا المتطورة. نؤمن بأن الابتكار المستمر هو مفتاح النجاح، لذلك نعمل دائماً لتطوير حلول فريدة من نوعها تتناسب مع طبيعة كل مشروع. كما نولي أهمية كبيرة للاستدامة، حيث نعمل على دمج الممارسات المستدامة في جميع جوانب عملنا.'
                            : 'We strive to provide innovative and sustainable solutions that meet our clients evolving needs. We believe that continuous innovation is the key to success, and therefore we develop unique solutions tailored to the specific requirements of each project. We also place great emphasis on sustainability, integrating sustainable practices into all aspects of our business.'
                        }
                    </Text>
          </div>

          {/* Bottom-right: Vision image */}
          <div
            className="w-full overflow-hidden h-full nd:mt-[-20px]"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <img
              src={vission}
              alt="Vision"
              className="block w-full h-full object-cover transform transition duration-300 ease-in-out hover:scale-108"
            />
          </div>
        </div>
        </div>

        </section>
    )
}

export default MissionVission
