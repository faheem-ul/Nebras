import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaLinkedinIn } from "react-icons/fa";

import { useLanguage } from "@/context/LanguageContext";
import logo from "@/assets/footer/footerLogo.png";

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

  // Labels for EN & AR
  const labels = {
    en: {
      quickLinks: "QUICK LINKS",
      newsletter: "Subscribe Newsletter",
      placeholder: "ENTER YOUR EMAIL",
      subscribe: "Subscribe",
      rights: "© 2025 Nebras Consult, All rights reserved.",
      quickLinksList: [
        { label: "Home", path: "/" },
        { label: "Our Projects", path: "/our-projects" },
        { label: "About Us", path: "/about-us" },
        { label: "Insights", path: "/insights" },
        { label: "Contact Us", path: "/contact-us" },
      ],
      contacts: {
        email: "info@nebrasconsult.com",
        saudi: "Saudi Office Contact No.: +966 50 609 1166",
        jordan: "Jordan Office Contact No.: +962 7 7605 5626",
        address: "Pavilion, 2 Marina Boulevard, San Francisco, United States",
      },
    },
    ar: {
      quickLinks: "روابط سريعة",
      newsletter: "اشترك في النشرة الإخبارية",
      placeholder: "أدخل بريدك الإلكتروني",
      subscribe: "اشترك",
      rights: "© 2025 نيبراس للاستشارات، جميع الحقوق محفوظة.",
      quickLinksList: [
        { label: "الرئيسية", path: "/" },
        { label: "مشاريعنا", path: "/our-projects" },
        { label: "من نحن", path: "/about-us" },
        { label: "رؤى", path: "/insights" },
        { label: "اتصل بنا", path: "/contact-us" },
      ],
      contacts: {
        email: "info@nebrasconsult.com",
        saudi: "مكتب السعودية: +966 50 609 1166",
        jordan: "مكتب الأردن: +962 7 7605 5626",
        address: "الجناح، 2 مارينا بوليفارد، سان فرانسيسكو، الولايات المتحدة",
      },
    },
  };

  const t = labels[lang];

  const contactItems = [
    {
      key: "email",
      node: (
        <a href="mailto:info@nebrasconsult.com" className="hover:underline">
          {t.contacts.email}
        </a>
      ),
    },
    {
      key: "phone-saudi",
      node: (
        <a href="tel:+966506091166" className="hover:underline">
          {t.contacts.saudi}
        </a>
      ),
    },
    {
      key: "phone-jordan",
      node: (
        <a href="tel:+962776055626" className="hover:underline">
          {t.contacts.jordan}
        </a>
      ),
    },
    {
      key: "address",
      node: <span>{t.contacts.address}</span>,
    },
  ];

  const socialMediaItems = [
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn size={20} color="#393C3D" />,
      url: "https://www.linkedin.com/company/nebrasconsult/",
    },
  ];

  return (
    <motion.footer
      className={`w-full bg-[#393C3D] text-white overflow-hidden "
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
      >
        {/* Left Column */}
        <motion.div className="w-full md:w-[calc(33.333%-20px)]" variants={columnVariants}>
          <div className="flex flex-row items-center justify-between mb-[33px] md:mb-[38px]">
            <Link to="/">
              <motion.img
                src={logo}
                alt="Logo"
                className="w-[100px] sm:w-[160px] md:w-[208px] h-auto "
                variants={itemVariants}
              />
            </Link>

            <motion.div className=" gap-4 md:hidden flex md:mt-[37px]" variants={columnVariants}>
              {socialMediaItems.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="bg-white rounded-full p-2 flex items-center justify-center w-[30px] h-[30px]"
                  variants={itemVariants}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </div>

          <motion.ul
            className="font-kosans text-sm md:text-[16px] leading-[22px] md:leading-[24px] space-y-4"
            variants={columnVariants}
          >
            {contactItems.map((c) => (
              <motion.li key={c.key} variants={itemVariants}>
                {c.node}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Quick Links */}
        <motion.div className="w-full md:w-[calc(33.333%-20px)]" variants={columnVariants}>
          <motion.h3
            className="font-kosans text-[16px] sm:text-[18px]  md:text-[20px] leading-none mb-6 md:mb-[47px]"
            variants={itemVariants}
          >
            {t.quickLinks}
          </motion.h3>

          <motion.ul
            className="space-y-4 md:space-y-[27px] font-kosans text-[14px] md:text-[18px]"
            variants={columnVariants}
          >
            {t.quickLinksList.map((item) => (
              <motion.li key={item.label} variants={itemVariants}>
                <Link to={item.path} className="hover:underline">
                  {item.label}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Newsletter */}
        <motion.div className="w-full md:w-[calc(33.333%-20px)]" variants={columnVariants}>
          <motion.h3
            className="font-kosans  text-[16px] sm:text-[18px] md:text-[20px] leading-none mb-[18px] sm:mb-6 md:mb-[47px]"
            variants={itemVariants}
          >
            {t.newsletter}
          </motion.h3>

          <motion.div className="relative" variants={columnVariants}>
            <motion.input
              type="email"
              placeholder={t.placeholder}
              className={`w-full pl-4 pr-4 py-3 md:pl-[28px] md:pr-[140px] md:py-[23px] rounded-full text-black bg-white outline-none placeholder:text-sm md:placeholder:text-[15px] placeholder-[#DDDDDD] font-kosans text-sm md:text-[15px] leading-[22px] md:leading-[24px] ${lang === "ar" ? "text-right" : "text-left"
                }`}
              variants={itemVariants}
            />
            <motion.button
              className="mt-2 relative md:mt-0 md:absolute md:top-1/2 md:-translate-y-1/2 md:right-[19.8px] px-5 py-3 md:px-[20px] md:py-[17.5px] bg-green text-white rounded-full font-kosans text-sm md:text-[14px] leading-none cursor-pointer"
              variants={itemVariants}
            >
              {t.subscribe}
            </motion.button>
          </motion.div>

          <motion.div className=" gap-4 hidden md:flex md:mt-[37px]" variants={columnVariants}>
            {socialMediaItems.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="bg-white rounded-full p-2 flex items-center justify-center w-[40px] h-[40px]"
                variants={itemVariants}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>

        </motion.div>
      </motion.div>

      {/* Bottom Bar */}
      <div className="border-t border-white/50">
        <p className="text-center pt-[15.6px] pb-[24.6px] md:py-5 text-[14px] md:text-[16px] font-kosans  leading-[18px] md:leading-[18px]">
          {t.rights}
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
