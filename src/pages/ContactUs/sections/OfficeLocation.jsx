import { useLanguage } from "@/context/LanguageContext";
import Text from "@/components/ui/Text";

// import locationNameIcon from '@/assets/contact/location-name.svg'
import phoneIcon from '@/assets/contact/phone-icon.svg'
import locationIcon from '@/assets/contact/location-icon.svg'
import ksaFlagIcon from '@/assets/contact/ksa-flag.svg'
import jordanFlagIcon from '@/assets/contact/jordan-flag.svg'

const locations = [
  {
    flag: ksaFlagIcon,
    city: { en: "KSA", ar: "المملكة العربية السعودية" },
    phone: {
      en: "+966 50 609 1166",
      ar: "+966 50 609 1166",
    },
    address: {
      en: "Riyadh, Saudia Arabia",
      ar: "الرياض، السعودية",
    },
    mapUrl: "",
  },
  {
    flag: jordanFlagIcon,
    city: { en: "Jordan", ar: "المملكة الأردنية الهاشمية" },
    phone: {
      en: "+962 7 7605 5626",
      ar: "+962 7 7605 5626",
    },
    address: {
      en: "Amman, Jordan",
      ar: "عمان، المملكة الأردنية الهاشمية  ",
    },
    mapUrl: "",
  },
];

const OfficeLocation = () => {
  const { lang } = useLanguage(); // 'en' or 'ar'
  const isArabic = lang === "ar";

  return (
    <section className="bg-white py-[29.74px] md:pt-[53px] md:pb-[60px] max-w-[1312px] w-full mx-auto px-5">
      {/* Section Title */}
      <div data-aos="fade-up" data-aos-delay="400">
        <Text as="h1" className="text-center mb-[29.74px] md:mb-[41px]" dir={isArabic ? "rtl" : "ltr"}>
          {isArabic ? "فروعنا" : "Office Location"}
        </Text>
      </div>

      {/* Cards Grid */}
      <div className=" flex flex-wrap flex-col md:flex-row  justify-center gap-[32px]" data-aos="fade" data-aos-delay="500" dir={isArabic ? "rtl" : "ltr"}>
        {locations.map((loc, idx) => (
          <div
            key={idx}
            className="md:w-[415px] py-[30px] px-[26px] bg-black/5"
          >
            {/* Header: flag + city */}
            <div className="flex items-center gap-[12px] mb-[27px] md:mb-[28.8px]">
              <img src={loc.flag} alt="" className="w-[28px]" />
              <Text className={`text-[24px] leading-none md:text-[26px]
         ${isArabic ? "font-arabic" : " font-bold"}`} >
                {isArabic ? loc.city.ar : loc.city.en}</Text>

            </div>

            {/* Phone */}
            <div className="flex items-center gap-[14.8px] mb-[16px] md:mb-5" >
              <img src={phoneIcon} alt="" className="w-[25px]" />
              <div dir={isArabic ? "ltr" : "ltr"}>
                <Text className={`text-[14px] leading-none  text-black 
          ${isArabic ? "font-zarid md:text-[20px] " : "md:text-[18px] font-medium "}`}  >
                  {isArabic ? loc.phone.ar : loc.phone.en}
                </Text>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-3 mb-[26px] md:mb-6">
              <img src={locationIcon} alt="" className="w-[25px]" />
              <div>
                <Text className={`text-[14px] leading-none  text-black 
          ${isArabic ? "font-zarid md:text-[20px]" : "md:text-[18px] font-medium"}`} >
                  {isArabic ? loc.address.ar : loc.address.en}
                </Text>
              </div>
            </div>

            {/* Button */}
            <a
              href={loc.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center w-[223px] h-[40px] bg-[#016938] hover:bg-green-900 text-white text-[12px] leading-none  px-[17px] py-[9px] md:px-4 md:py-2
      ${isArabic ? "font-zarid md:text-[22px]" : "md:text-[16px] font-bold"}`} >
              {isArabic ? "عرض على خرائط" : "View on Google Maps"}
            </a>
          </div>
        ))}

      </div>
    </section>
  );
};

export default OfficeLocation;
