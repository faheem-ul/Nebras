import { useLanguage } from "@/context/LanguageContext";
import Text from '@/components/ui/Text'
import userIcon from "@/assets/contact/user-icon.svg"
import mailIcon from "@/assets/contact/mail-icon.svg"

const ContactForm = () => {
    const { lang } = useLanguage(); // 'en' or 'ar'
    const isArabic = lang === "ar";

    return (
        <div className="bg-white pt-[100px] pb-[42px] flex justify-center items-center">
            <div className="w-full max-w-[1312px] px-5">
                {/* Heading */}
                <div data-aos="fade-up" data-aos-delay="400">
                    <Text className="text-center md:text-[40px] md:leading-[32px]"
                        dir={lang === 'ar' ? 'rtl' : 'ltr'}>
                        {isArabic ? 'نحن هناك، أينما احتجت إلينا' : 'We Are There, Wherever You Need Us.'}
                    </Text>
                </div>

                {/* Form Container */}
                <div className="bg-[#52555A]/10 py-[44px] px-[36px] mt-[45px]"
                    data-aos="fade"
                    data-aos-delay="500"
                    dir={lang === 'ar' ? 'rtl' : 'ltr'}>
                    <Text className="mb-[55px]" dir={isArabic ? "rtl" : "ltr"}>
                        {isArabic
                            ? "هل لديك أي استفسار؟ يسعدنا الإجابة"
                            : "Have any questions? We're happy to answer."}
                    </Text>
                    <form className="flex flex-col space-y-[26px]">
                        {/* Name & Email Row */}
                        <div className="flex flex-col md:flex-row gap-[35px]">
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

                        {/* Submit Button */}
                        <div className="flex justify-center">
                            <button
                                type="submit"
                                className="bg-[#016938]  text-white px-[40px] py-[18px] text-[18px] mt-[20px] leading-none uppercase font-kosans"
                            >
                                {isArabic ? "إرسال الرسالة" : "Send Message"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
