import { useLanguage } from "@/context/LanguageContext";
import Text from '@/components/ui/Text'
import userIcon from "@/assets/contact/user-icon.svg"
import mailIcon from "@/assets/contact/mail-icon.svg"

const ContactForm = () => {
    const { lang } = useLanguage(); // 'en' or 'ar'
    const isArabic = lang === "ar";

    return (
        <div className="bg-white pt-[29px] md:pt-[100px]  flex justify-center items-center">
            <div className="w-full max-w-[1312px] px-5">
                {/* Heading */}
                <div data-aos="fade-up" data-aos-delay="400">
                    <Text className="max-w-[299px] md:max-w-full mx-auto text-center text-[24px] leading-[30px] md:text-[40px] md:leading-[32px]"
                        dir={lang === 'ar' ? 'rtl' : 'ltr'}>
                        {isArabic ? 'نحن هناك، أينما احتجت إلينا' : 'We Are There, Wherever You Need Us.'}
                    </Text>
                </div>

                {/* Form */}
                <form data-aos="fade" data-aos-delay="500">
                    <div className="bg-[#52555A]/10 py-[28.37px] md:py-[44px] px-[12.74px] md:px-[36px] mt-[19px] md:mt-[45px]"

                        dir={lang === 'ar' ? 'rtl' : 'ltr'}>
                        <Text className="text-[14px] leading-[24px] mb-[15.67px] md:mb-[55px]" dir={isArabic ? "rtl" : "ltr"}>
                            {isArabic
                                ? "هل لديك أي استفسار؟ يسعدنا الإجابة"
                                : "Have any questions? We're happy to answer."}
                        </Text>
                        <div className="flex flex-col space-y-[15.67px] md:space-y-[26px]">

                            {/* Name & Email Row */}
                            <div className="flex flex-col md:flex-row gap-[15.67px] md:gap-[35px]">
                                {/* Name */}
                                <div className="flex items-center  bg-white px-[21px] py-[18px] flex-1">
                                    <img
                                        src={userIcon}
                                        alt=""
                                        className={`w-[19px] ${isArabic ? "ml-3" : "mr-3"}`}
                                    />
                                    <input
                                        type="text"
                                        placeholder={isArabic ? "الاسم" : "Name"}
                                        className="flex-1 outline-none bg-transparent text-[16px] font-kosans placeholder:text-black/20 "
                                    />
                                </div>

                                {/* Email */}
                                <div className="flex items-center  bg-white px-[21px] py-[18px]  flex-1">
                                    <img
                                        src={mailIcon}
                                        alt=""
                                        className={`w-[24px] ${isArabic ? "ml-3" : "mr-3"}`}
                                    />
                                    <input
                                        type="email"
                                        placeholder={isArabic ? "البريد الإلكتروني" : "E-mail"}
                                        className="flex-1 outline-none bg-transparent text-[16px] font-kosans placeholder:text-black/20 "
                                    />
                                </div>
                            </div>

                            {/* Message */}
                            <textarea
                                placeholder={isArabic ? "رسالتك" : "Your Message"}
                                // rows={6}
                                className="w-full bg-white py-[17px] px-[22px] text-[16px] font-kosans placeholder:text-black/20  resize-none outline-none h-[234px] "
                            ></textarea>
                        </div>
                    </div>
                    {/* Submit Button */}
                    <div className="flex justify-center mt-[29px] md:mt-[46.85px]">
                        <button
                            type="submit"
                            className="bg-[#016938]  text-white md:px-[40px] px-[24.5px] py-[13.5px] md:py-[18px] text-[16px] md:text-[18px]  leading-none uppercase font-kosans cursor-pointer"
                        >
                            {isArabic ? "إرسال الرسالة" : "Send Message"}
                        </button>
                    </div>
                </form>

                {/* Horizontal Line */}
                <hr class="border-t-[0.5px] border-black mt-[39px] md:mt-[41.7px]" />

            </div>
        </div>
    );
};

export default ContactForm;
