import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/footer/footerLogo.png";

import facebook from "../assets/footer/facebook.png";
import instagram from "../assets/footer/instagram.png";
import twitter from "../assets/footer/twitter.png";
import youtube from "../assets/footer/youtube.png";

/* ---------- Variants ---------- */
// Outer footer container: staggers columns
const footerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18, // columns animate one-after-another
    },
  },
};

// Each column: staggers its children (heading + list items)
const columnVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08, // items inside a column
    },
  },
};

// Individual item (heading / li / icon)
const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.48, ease: "easeOut" }, // smooth & relaxed
  },
};

const Footer = () => {
  const quickLinks = [
    { label: "Home", path: "/" },
    { label: "Our projects", path: "/our-projects" },
    { label: "About Us", path: "/about-us" },
    { label: "Insights", path: "/insights" },
    { label: "Contact Us", path: "/contact-us" },
  ];

  // const utilityLinks = [
  //   "CCg & Hudson Meridian",
  //   "Invitation to a Meeting",
  //   "Terms of Use",
  //   "Privacy Policy",
  //   "Contact Us",
  // ];

  const contactItems = [
    {
      key: "email",
      node: (
        <a href="mailto:hello@gmail.com" className="hover:underline">
          hello@gmail.com
        </a>
      ),
    },
    {
      key: "phone",
      node: (
        <a href="tel:+1123456789" className="hover:underline">
          (+1) 123456789
        </a>
      ),
    },
    {
      key: "address",
      node: (
        <span>
          Pavilion, 2 Marina Boulevard, <br />
          San Francisco, United States
        </span>
      ),
    },
  ];

  return (
    <motion.footer
      className="w-full bg-[#393C3D] text-white overflow-hidden"
      // We still want the footer to fade in a little as a whole (optional)
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.12 }} // "amount" controls how much visible to trigger
    >
      {/* Main content wrapper - columns are children of this and will be staggered */}
      <motion.div
        className="max-w-[1312px] mx-auto px-5 pt-10 pb-10 md:pt-[76px] md:pb-[50px] flex flex-col md:flex-row justify-between gap-y-10 md:gap-y-0 md:gap-x-[30px] flex-wrap"
        variants={footerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.12 }}
      >
        {/* Left Column (contact & address) */}
        <motion.div className="w-full md:w-[calc(33.333%-20px)]" variants={columnVariants}>
          <Link to="/">
            <motion.img
              src={logo}
              alt="Logo"
              className="w-[160px] md:w-[208px] h-auto mb-6 md:mb-[38px]"
              variants={itemVariants}
            />
          </Link>

          <motion.ul
            className="font-kosans text-sm md:text-[16px] leading-[22px] md:leading-[24px] space-y-4"
            variants={columnVariants}
          >
            {contactItems.map((c, i) => (
              <motion.li key={c.key} variants={itemVariants}>
                {c.node}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Quick Links Column */}
        <motion.div className="w-full md:w-[calc(33.333%-20px)]" variants={columnVariants}>
          <motion.h3
            className="font-kosans text-lg md:text-[20px] leading-none mb-6 md:mb-[47px]"
            variants={itemVariants}
          >
            QUICK LINKS
          </motion.h3>

          <motion.ul
            className="space-y-4 md:space-y-[27px] font-kosans text-base md:text-[18px]"
            variants={columnVariants}
          >
            {quickLinks.map((item, i) => (
              <motion.li key={item.label} variants={itemVariants}>
                <Link to={item.path} className="hover:underline">{item.label}</Link>
              </motion.li>
            ))}

          </motion.ul>
        </motion.div>

        {/* Newsletter Column */}
        <motion.div className="w-full md:w-[calc(33.333%-20px)]" variants={columnVariants}>
          <motion.h3
            className="font-kosans text-lg md:text-[20px] leading-none mb-6 md:mb-[47px]"
            variants={itemVariants}
          >
            Subscribe Newsletter
          </motion.h3>

          <motion.div
            className="relative mb-6 md:mb-[37px]"
            variants={columnVariants}
          >
            <motion.input
              type="email"
              placeholder="ENTER YOUR EMAIL"
              className="w-full pl-4 pr-4 py-3 md:pl-[28px] md:pr-[140px] md:py-[23px] rounded-full text-black bg-white outline-none placeholder:text-sm md:placeholder:text-[15px] placeholder-[#DDDDDD] font-kosans text-sm md:text-[15px] leading-[22px] md:leading-[24px]"
              variants={itemVariants}
            />
            <motion.button
              className="mt-2 relative md:mt-0 md:absolute md:top-1/2 md:-translate-y-1/2 md:right-[19.8px] px-5 py-3 md:px-[20px] md:py-[17.5px] bg-green text-white rounded-full font-kosans text-sm md:text-[14px] leading-none cursor-pointer"
              variants={itemVariants}
            >
              Subscribe
            </motion.button>
          </motion.div>

          {/* Social icons - small stagger inside column */}
          <motion.div className="flex gap-4" variants={columnVariants}>
            {[facebook, instagram, youtube, twitter].map((icon, idx) => (
              <motion.a
                key={idx}
                href="#"
                className="bg-white rounded-full p-2 flex items-center justify-center w-[40px] h-[40px]"
                variants={itemVariants}
              >
                <img src={icon} alt="social" className="h-20px w-20px" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom Bar - static (no animation) */}
      <div className="border-t border-white/50">
        <p className="text-center py-5 text-xs md:text-sm font-kosans md:text-[16px] md:leading-[18px]">
          © 2025 Nebras Consult, All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
