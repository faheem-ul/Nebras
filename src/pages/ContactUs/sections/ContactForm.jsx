import Text from '@/components/ui/Text'

import userIcon from "@/assets/contact/user-icon.svg"
import mailIcon from "@/assets/contact/mail-icon.svg"

const ContactForm = () => {
    return (
        <div className="bg-white pt-[100px] pb-[42px] flex justify-center items-center">
            <div className="w-full max-w-[1312px] px-5">
                {/* Heading */}
                <Text className="text-center md:text-[40px] md:leading-[32px]">
                    We Are There, Wherever You Need Us.
                </Text>

                {/* Form Container */}
                <div className="bg-[#52555A]/10 py-[44px] px-[36px] mt-[45px]">
                    <Text className="mb-[55px]">
                        Have any questions? We're happy to answer.
                    </Text>
                    <form className="flex flex-col space-y-[26px]">
                        {/* Name & Email Row */}
                        <div className="flex flex-col md:flex-row gap-[35px]">
                            {/* Name */}
                            <div className="flex items-center  bg-white px-[21px] py-[18px] flex-1">
                                <img src={userIcon} alt="" className='w-[19px] mr-3' />
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="flex-1 outline-none bg-transparent text-[16px] font-kosans placeholder:text-black/20 "
                                />
                            </div>

                            {/* Email */}
                            <div className="flex items-center  bg-white px-[21px] py-[18px]  flex-1">
                                <img src={mailIcon} alt="" className='w-[24px] mr-3' />
                                <input
                                    type="email"
                                    placeholder="E-mail"
                                    className="flex-1 outline-none bg-transparent text-[16px] font-kosans placeholder:text-black/20 "
                                />
                            </div>
                        </div>

                        {/* Message */}
                        <textarea
                            placeholder="Your Message"
                            // rows={6}
                            className="w-full bg-white py-[17px] px-[22px] text-[16px] font-kosans placeholder:text-black/20  resize-none outline-none h-[234px] "
                        ></textarea>

                        {/* Submit Button */}
                        <div className="flex justify-center">
                            <button
                                type="submit"
                                className="bg-[#016938]  text-white px-[40px] py-[18px] text-[18px] mt-[20px] leading-none uppercase font-kosans"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
