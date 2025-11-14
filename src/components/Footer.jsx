import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// import { FaLinkedinIn } from "react-icons/fa";

import { useLanguage } from "@/context/LanguageContext";
import logo from "@/assets/footer/footerLogo.png";

import linkedinIcon from "@/assets/footer/in.svg";
import facebookIcon from "@/assets/footer/fb.svg";
import instagramIcon from "@/assets/footer/insta.svg";
import youtubeIcon from "@/assets/footer/yt.svg";
import twitterIcon from "@/assets/footer/tweeter.svg";
import mailIcon from "@/assets/footer/mail.svg";
import phoneIcon from "@/assets/footer/phone.svg";
import locationIcon from "@/assets/footer/location.svg";

import Text from "./ui/Text";

/* ---------- Variants ---------- */
const footerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
};
const columnVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};
const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.48, ease: "easeOut" } },
};

const Footer = () => {
  const { lang } = useLanguage();
  const isArabic = lang === "ar";

  // Labels for EN & AR
  const labels = {
    en: {
      quickLinks: "QUICK LINKS",
      newsletter: "Subscribe Newsletter",
      placeholder: "Enter your email",
      subscribe: "Subscribe",
      rights: "NEBRAS CONSULT, ALL RIGHTS RESERVED. © 2025",
      quickLinksList: [
        { label: "Home", path: "/" },
        { label: "Our Projects", path: "/our-projects" },
        { label: "About Us", path: "/about-us" },
        { label: "Insights", path: "/insights" },
        { label: "Contact Us", path: "/contact-us" },
      ],
      contacts: {
        email: "info@nebrasconsult.com",
        saudiPhone: "+966 50 609 1166",
        jordanPhone: "+962 7 7605 5626",
        saudiAddress: "Riyadh, Saudi Arabia",
        jordanAddress: "Amman, Jordan",
      },
    },
    ar: {
      quickLinks: "روابط سريعة",
      newsletter: "اشترك في النشرة الإخبارية",
      placeholder: "أدخل بريدك الإلكتروني",
      subscribe: "اشترك",
      rights:
        " نبراس كونسلت للاستشارات الهندسية والتقنية، جميع الحقوق محفوظة © 2025 ",
      quickLinksList: [
        { label: "الرئيسية", path: "/" },
        { label: "مشاريعنا", path: "/our-projects" },
        { label: "من نحن", path: "/about-us" },
        { label: "رؤى", path: "/insights" },
        { label: "اتصل بنا", path: "/contact-us" },
      ],
      contacts: {
        email: "info@nebrasconsult.com",
        saudiPhone: "+۹۶۶ - ۵۰ - ۶۰۹ - ۱۱۶۶",
        jordanPhone: "++۹۶۲ - ۷ - ۷۶۰۵ - ۵۶۲۶",
        saudiAddress: "الرياض، المملكة العربية السعودية",
        jordanAddress: "عمان، الأردن",
      },
    },
  };


  const t = labels[lang];

  const contactItems = [
    {
      key: "email",
      icon: mailIcon,
      href: "mailto:info@nebrasconsult.com",
      label: t.contacts.email,
    },
    {
      key: "phone-saudi",
      icon: phoneIcon,
      href: "tel:+966506091166",
      label: t.contacts.saudiPhone,
    },
    {
      key: "phone-jordan",
      icon: phoneIcon,
      href: "tel:+962776055626",
      label: t.contacts.jordanPhone,
    },
    {
      key: "address-saudi",
      icon: locationIcon,
      label: t.contacts.saudiAddress,
    },
    {
      key: "address-jordan",
      icon: locationIcon,
      label: t.contacts.jordanAddress,
    },
  ];



  const socialMediaItems = [
    {
      name: "LinkedIn",
      icon: linkedinIcon,
      url: "https://www.linkedin.com/company/nebrasconsult/",
    },
    {
      name: "Facebook",
      icon: facebookIcon,
      url: "https://www.facebook.com/your-page-slug", // ⬅️ replace with real URL
    },
    {
      name: "Instagram",
      icon: instagramIcon,
      url: "https://www.instagram.com/your-handle", // ⬅️ replace
    },
    {
      name: "YouTube",
      icon: youtubeIcon,
      url: "https://www.youtube.com/@your-channel", // ⬅️ replace
    },
    {
      name: "Twitter",
      icon: twitterIcon,
      url: "https://x.com/your-handle", // ⬅️ replace
    },
  ];

  return (
    <motion.footer
      className={`w-full bg-[#0C6039] text-white overflow-hidden ${isArabic ? "font-zarid" : "font-ubuntu"} "
        }`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.12 }}
    >
      <motion.div
        className="max-w-[1312px] mx-auto px-5 pt-10 pb-[30px] md:pt-[76px] md:pb-[50px] flex flex-col md:flex-row justify-between gap-y-10 md:gap-y-0 md:gap-x-[30px] flex-wrap"
        variants={footerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.12 }}
        dir={isArabic ? 'rtl' : 'ltr'}
      >
        {/* Left Column */}
        <motion.div className="w-full md:w-[calc(33.333%-20px)]" variants={columnVariants}>
          <div className="flex flex-row items-center justify-between mb-[33px] md:mb-[38px] " >
            <Link to="/">
              <motion.img
                src={logo}
                alt="Logo"
                className="w-[100px] sm:w-[160px] md:w-[208px] h-auto "
                variants={itemVariants}
              />
            </Link>

            <motion.div className=" gap-4 hidden  md:mt-[37px]" variants={columnVariants}>

              {socialMediaItems.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}

                  variants={itemVariants}
                >
                  <img src={linkedinIcon} alt="LinkedIn" className="w-full h-full" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          <motion.ul
            className={`text-sm leading-[22px] md:leading-[24px] space-y-4 ${lang === "ar" ? "md:text-[20px]" : "md:text-[18px]"
              }`}
            variants={columnVariants}
            dir={isArabic ? 'rtl' : 'ltr'}
          >
            {contactItems.map((item) => (
              <motion.li key={item.key} variants={itemVariants}>
                <div
                  className={`flex items-center gap-3 ${isArabic ? " text-right" : "text-left"
                    }`}
                >
                  {/* Icon in white circle */}
                  <span className="w-[28px] h-[28px]  flex items-center justify-center">
                    <img src={item.icon} alt="" className="w-full h-full" />
                  </span>

                  {/* Text (link if href exists) */}
                  {item.href ? (
                    <a href={item.href} className="hover:underline">
                      {item.label}
                    </a>
                  ) : (
                    <span>{item.label}</span>
                  )}
                </div>
              </motion.li>
            ))}
          </motion.ul>

        </motion.div>

        {/* Quick Links */}
        <motion.div className="w-full  md:w-[calc(33.333%-20px)]" variants={columnVariants}>
          <motion.h3
            className={` text-[16px] sm:text-[18px]  font-bold uppercase md:text-[20px] leading-none mb-6 md:mb-[47px]
              ${lang === "ar" ? "md:text-[34px]" : "md:text-[20px]"} `}
            variants={itemVariants}
          >
            {t.quickLinks}
          </motion.h3>

          <motion.ul
            className={`space-y-4 md:space-y-[27px]  text-[14px]    ${lang === "ar" ? "md:text-[26px]" : "md:text-[18px]"} `}
            variants={columnVariants}
          >
            {t.quickLinksList.map((item) => (
              <motion.li key={item.label} variants={itemVariants}>
                <Link to={item.path} className="underline">
                  {item.label}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Newsletter */}
        <motion.div className="w-full md:w-[calc(33.333%-20px)]" variants={columnVariants}>
          <motion.h3
            className={`text-[16px] sm:text-[18px] font-bold uppercase md:text-[20px] leading-none mb-[18px] sm:mb-6 md:mb-[47px] 
                ${lang === "ar" ? "md:text-[34px]" : "md:text-[20px]"}
                `}
            variants={itemVariants}
          >
            {t.newsletter}
          </motion.h3>

          <motion.div
            className="relative"
            variants={columnVariants}
            dir={lang === "ar" ? "rtl" : "ltr"}
          >
            <motion.input
              type="email"
              placeholder={t.placeholder}
              className={`w-full py-3 md:py-[23px] rounded-full text-black bg-white outline-none
      placeholder:text-sm md:placeholder:text-[15px] placeholder-[#DDDDDD]
      text-sm md:text-[15px] leading-[22px] md:leading-[24px]
      ${lang === "ar"
                  ? "text-right pr-4 md:pr-[28px] md:pl-[140px]"  // button on left → padding left
                  : "text-left pl-4 md:pl-[28px] md:pr-[140px]"   // button on right → padding right
                }`}
              variants={itemVariants}
            />

            <motion.button
              className={`mt-2 relative uppercase md:mt-0 md:absolute font-bold
      md:top-1/2 md:-translate-y-1/2 px-5 py-3 md:px-[20px] md:py-[17.5px]
      bg-green text-white rounded-full text-sm md:text-[14px] leading-none cursor-pointer
      ${lang === "ar" ? "md:left-[19.8px]" : "md:right-[19.8px]"}`}
              variants={itemVariants}
            >
              {t.subscribe}
            </motion.button>
          </motion.div>


          <motion.div className="gap-4  flex-wrap mt-[24px]  flex md:mt-[37px]" variants={columnVariants}>
            {socialMediaItems.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="bg-white rounded-full shrink-0  flex  items-center justify-center w-[42px] h-[42px]"
                variants={itemVariants}
              >
                <img
                  src={social.icon}
                  alt={social.name}
                  className="w-full h-full"
                />
              </motion.a>
            ))}
          </motion.div>


        </motion.div>
      </motion.div>

      {/* Bottom Bar */}
      <div className="border-t border-white/50">
        <Text className="text-center  py-[12.6px] md:py-5 text-[14px] md:text-[14px]   leading-[18px] md:leading-[18px]">
          {t.rights}
        </Text>
      </div>
    </motion.footer>
  );
};

export default Footer;
