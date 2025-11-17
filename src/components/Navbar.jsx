import React from "react";
import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

import { useLanguage } from "@/context/LanguageContext";

// Import all logo variations
import greenLogo from "@/assets/navbar/lobo-green.png";
import whiteLogo from "@/assets/navbar/lobo-white.png";
// import blackLogo from "@/assets/navbar/lobo-black.png";
// Mobile Menu Icon
import HamburgerIcon from "@/assets/navbar/hamburger-icon.svg";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [logo, setLogo] = useState(greenLogo);

  const { lang, toggleLanguage } = useLanguage();
  const isArabic = lang === "ar";

  // Handle logo depending on route
  useEffect(() => {
    if (
      location.pathname === "/about-us" ||
      location.pathname === "/contact-us" ||
      location.pathname.startsWith("/our-projects/")

    ) {
      setLogo(greenLogo);
    } else if (location.pathname === "/insights") {
      setLogo(greenLogo);
    } else {
      setLogo(greenLogo);
    }
  }, [location.pathname]);

  // Lock/unlock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const handleClose = () => setIsOpen(false);

  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-transparent pt-[34.7px] md:pt-[44px] pb-[33px] bg-[linear-gradient(180deg,_#FFFFFF_0%,_rgba(255,255,255,0)_120.06%)]">
      {/* Desktop Menu */}
      <div className="max-w-[1312px] mx-auto px-5 flex items-center justify-between">
        {/* Left - Dynamic Logo */}
        <Link to='/' data-aos="fade-right" data-aos-delay="100">
          <img
            src={logo}
            alt="Logo"
            className="h-auto w-[77px] md:w-[166px] cursor-pointer"
          />
        </Link>

        {/* Right - Nav Links (Desktop) */}
        <div
          className={` hidden md:flex items-center justify-end gap-[55px] flex-wrap text-black ${isArabic ? "font-zarid text-[24px]" : "text-[20px] font-ubuntu font-bold"} `}
        >

          <button
            onClick={() => toggleLanguage(lang === "en" ? "ar" : "en")}
            className=" font-normal  leading-none hover:text-[#016938] cursor-pointer"
          >
            {lang === "en" ? "العربية" : "English"}
          </button>

          <NavLink
            to="/"
            className={({ isActive }) => `   leading-none hover:text-[#016938]  ${isActive ? "text-[#016938]" : ""}`}
            data-aos="fade-right" data-aos-delay="300"
          >
            {isArabic ? "الرئيسية" : "Home"}
          </NavLink>
          <NavLink
            to="/our-projects"
            className={({ isActive }) => `   leading-none hover:text-[#016938] ${isActive ? "text-[#016938]" : ""}`}
            data-aos="fade-right" data-aos-delay="400"
          >
            {isArabic ? "مشاريعنا" : "Our Projects"}
          </NavLink>
          <NavLink
            to="about-us"
            className={({ isActive }) => `   leading-none hover:text-[#016938] ${isActive ? "text-[#016938]" : ""}`}
            data-aos="fade-right" data-aos-delay="500"
          >
            {isArabic ? "من نحن" : "About Us"}
          </NavLink>
          <NavLink
            to="latest-news"
            className={({ isActive }) => `   leading-none hover:text-[#016938] ${isActive ? "text-[#016938]" : ""}`}
            data-aos="fade-right" data-aos-delay="600"
          >
            {isArabic ? "آخر الأخبار" : "Latest News"}
          </NavLink>

          <NavLink
            to="contact-us"
            className="ml-3 px-[15px] py-[14px] bg-green text-white cursor-pointer    leading-none min-w-[150px] text-center"
            data-aos="fade-right" data-aos-delay="700"
          >
            {isArabic ? "اتصل بنا" : "Contact Us"}
          </NavLink>
        </div>

        {/* Mobile Hamburger */}
        {!isOpen && (
          <button
            className={`md:hidden text-[26px] z-50 
              ${location.pathname === "/" ||
                location.pathname === "/about-us" ||
                location.pathname === "/contact-us" ||
                location.pathname.startsWith("/our-projects/")
                ? "text-white"
                : "text-black"
              }`}
            onClick={() => setIsOpen(true)}
          >
            <FiMenu />
          </button>
        )}

        {/* Mobile Close */}
        {/* {isOpen && (
          <button
            className="md:hidden text-[26px] z-50 text-white"
            onClick={() => setIsOpen(false)}
          >
            <FiX />
          </button>
        )} */}
      </div>

      {/* Mobile Menu */}
      <div
        className={`px-[22px] fixed top-0 left-0 w-full h-full bg-[#393C3D] text-white flex flex-col transition-transform duration-500 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        {/* Header: Logo + Close */}
        <div className="flex items-center justify-between w-full pt-[36px] pb-[39px]">
          <img src={whiteLogo} alt="Logo" className="h-auto w-[77px]" />
          <button onClick={handleClose} className="text-[26px]">
            <FiX />
          </button>
        </div>

        {/* Menu Content */}
        <div className="flex flex-col items-center justify-center flex-1 w-full">
          {/* Language Toggle */}
          <button
            onClick={() => {
              toggleLanguage(lang === "en" ? "ar" : "en");
              handleClose();
            }}
            className=" text-xl hover:text-[#016938] mb-[12px]"
          >
            {isArabic ? "English" : "العربية"}
          </button>

          {/* Divider */}
          <hr className="w-full border-t border-white/30" />

          {/* Menu Links */}
          <nav className="flex flex-col items-center w-full">
            {[
              { to: "/", label: isArabic ? "الرئيسية" : "Home" },
              { to: "/our-projects", label: isArabic ? "مشاريعنا" : "Our Projects" },
              { to: "/about-us", label: isArabic ? "من نحن" : "About Us" },
              { to: "/latest-news", label: isArabic ? "آخر الأخبار" : "Latest News" },
              { to: "/contact-us", label: isArabic ? "اتصل بنا" : "Contact Us" },
            ].map((item, idx) => (
              <React.Fragment key={item.to}>
                <Link
                  onClick={handleClose}
                  to={item.to}
                  className="block py-[17.6px] w-full text-center text-[16px] font-kosans leading-none hover:text-[#016938] "
                >
                  {item.label}
                </Link>
                {idx < 4 && <hr className="w-full border-t border-white/30" />}
              </React.Fragment>
            ))}
          </nav>
        </div>
      </div>


    </nav>
  );
};

export default Navbar;
