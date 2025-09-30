import React from 'react'

import { useLanguage } from "@/context/LanguageContext";
import Text from '@/components/ui/Text'

import mission from '@/assets/about/mission.jpg'
import vission from '@/assets/about/vission.jpg'

const MissionVission = () => {
    const { lang } = useLanguage(); // 'en' or 'ar'
    const isArabic = lang === 'ar';

    return (
        <section className="w-full bg-white pt-10 md:pt-[70px]" >

            {/* Info */}
            <div className="max-w-[991px]  mx-auto px-5" data-aos="fade-up" data-aos-delay="400" dir={isArabic ? 'rtl' : 'ltr'}>
                {/* <Text className="text-base leading-6 md:text-[24px] md:leading-[42px] text-left md:text-center "> */}
                <Text className={`md:text-center ${isArabic ? 'text-right' : 'text-left'}`}>
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

            {/* Our Mission */}
            <div className="flex flex-col md:flex-row items-center justify-between max-w-[1312px] w-full mx-auto mt-10 md:mt-[107px] gap-8 px-5">
                {/* Image Column */}
                <div className="w-full md:max-w-[600px] flex-shrink-0 overflow-hidden"
                    data-aos="fade-up" data-aos-delay="400"
                >
                    <img
                        src={mission}
                        alt="Mission"
                        className="w-full md:h-[580px] object-cover transform transition duration-300 ease-in-out hover:scale-108"
                    />
                </div>

                {/* Text Column */}
                <div className="max-w-[676px] w-full" data-aos="fade-up" data-aos-delay="400" dir={isArabic ? 'rtl' : 'ltr'}>
                    {/* <Text className="text-base leading-6 md:text-[24px] md:leading-[42px]"> */}
                    <Text>
                        {isArabic
                            ? 'تتميز نبراس كونسلت برؤية مستقبلية واضحة ورسالة سامية تتمثل في المساهمة في بناء مجتمعات مستدامة من خلال تقديم خدمات استشارية متكاملة تلبي احتياجات العصر.'
                            : ' Nebras Consult is guided by a clear vision and a noble mission: to contribute to the building of sustainable communities by providing integrated consultancy services that meet the needs of the modern era.'
                        }

                    </Text>
                    <br />
                    {/* <Text className="text-base leading-6 md:text-[24px] md:leading-[42px]"> */}
                    <Text className={isArabic ? 'text-right' : 'text-left'} >
                        {isArabic
                            ? 'أن تكون شركتنا في مقدمة الشركات المتخصصة في مجال الاستشارات الهندسية على المستوى الإقليمي. وسنعمل بمسؤولية تجاه ذلك من خلال تقديم حلولاً مبتكرة وموثوقة تُسهم في تحسين البيئة وبناء المجتمعات.'
                            : 'Our company aspires to be a regional leader in engineering consulting, committed to delivering innovative and reliable solutions that contribute to environmental improvement and community development.'
                        }
                    </Text>

                    <button
                        className="mx-auto text-[18px] md:text-[24px] px-[15px] py-[14px] md:px-[15px] md:py-[14px] mt-[24px]
                         bg-green text-white font-kosans  leading-none cursor-pointer "
                    >
                        {isArabic ? 'اقرأ المزيد' : 'Read More'}
                    </button>
                </div>
            </div>

            {/* Our Vision */}
            <div className="flex flex-col md:flex-row-reverse items-center justify-between max-w-[1312px] w-full mx-auto mt-10 md:mt-[70px] gap-8 px-5">
                {/* Image Column */}
                <div className="w-full md:max-w-[600px] flex-shrink-0 overflow-hidden" data-aos="fade-up" data-aos-delay="400">
                    <img
                        src={vission}
                        alt="Vision"
                        className="w-full md:h-[580px] object-cover transform transition duration-300 ease-in-out hover:scale-108"
                    />
                </div>

                {/* Text Column */}
                <div className="max-w-[676px] w-full" data-aos="fade-up" data-aos-delay="400" dir={isArabic ? 'rtl' : 'ltr'}>
                    {/* <Text className="text-base leading-6 md:text-[24px] md:leading-[42px]"> */}
                    <Text>
                        {isArabic
                            ? 'نحن نسعى لتقديم حلول مبتكرة ومستدامة تلبي احتياجات عملائنا المتطورة. نؤمن بأن الابتكار المستمر هو مفتاح النجاح، لذلك نعمل دائماً لتطوير حلول فريدة من نوعها تتناسب مع طبيعة كل مشروع. كما نولي أهمية كبيرة للاستدامة، حيث نعمل على دمج الممارسات المستدامة في جميع جوانب عملنا.'
                            : 'We strive to provide innovative and sustainable solutions that meet our clients evolving needs. We believe that continuous innovation is the key to success, and therefore we develop unique solutions tailored to the specific requirements of each project. We also place great emphasis on sustainability, integrating sustainable practices into all aspects of our business.'
                        }
                    </Text>

                    <button
                        className="mx-auto text-[18px] md:text-[24px] px-[15px] py-[14px] md:px-[15px] md:py-[14px] mt-[24px]
                         bg-green text-white font-kosans  leading-none cursor-pointer "
                    >
                        {isArabic ? 'اقرأ المزيد' : 'Read More'}
                    </button>
                </div>
            </div>

        </section>
    )
}

export default MissionVission
