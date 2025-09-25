import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

// Import all logo variations
import greenLogo from "../assets/navbar/lobo-green.png";
import whiteLogo from "../assets/navbar/lobo-white.png";
import blackLogo from "../assets/navbar/lobo-black.png";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [logo, setLogo] = useState(greenLogo);

  // Handle logo depending on route
  useEffect(() => {
    if (
      location.pathname === "/about-us" ||
      location.pathname === "/contact-us" ||
      location.pathname.startsWith("/our-projects/")

    ) {
      setLogo(whiteLogo);
    } else if (location.pathname === "/insights") {
      setLogo(blackLogo);
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
    <nav className="absolute top-0 left-0 w-full z-50 bg-transparent pt-[70px] md:pt-[97px] pb-[37px]">
      <div className="max-w-[1312px] mx-auto px-5 flex items-center justify-between">
        {/* Left - Dynamic Logo */}
        <Link to='/' data-aos="fade-right" data-aos-delay="100">
          <img
            src={logo}
            alt="Logo"
            className="h-auto w-[120px] md:w-[166px] cursor-pointer"
          />
        </Link>


        {/* Right - Nav Links (Desktop) */}
        <div
          className={`hidden md:flex items-center justify-end gap-[43px] flex-wrap ${location.pathname === "/our-projects" ||
            location.pathname === "/insights"
            ? "text-black"
            : "text-white"
            }`}>

          <NavLink
            to=""
            className="font-logirent font-normal text-lg leading-none hover:text-[#016938] "
            data-aos="fade-right" data-aos-delay="200"
          >
            العربية
          </NavLink>
          <NavLink
            to="/"
            className={({ isActive }) => `font-logirent font-normal text-lg leading-none hover:text-[#016938] ${isActive ? "text-[#016938]" : ""}`}
            data-aos="fade-right" data-aos-delay="300"
          >
            Home
          </NavLink>
          <NavLink
            to="/our-projects"
            className={({ isActive }) => `font-logirent font-normal text-lg leading-none hover:text-[#016938] ${isActive ? "text-[#016938]" : ""}`}
            data-aos="fade-right" data-aos-delay="400"
          >
            Our Projects
          </NavLink>
          <NavLink
            to="about-us"
            className={({ isActive }) => `font-logirent font-normal text-lg leading-none hover:text-[#016938] ${isActive ? "text-[#016938]" : ""}`}
            data-aos="fade-right" data-aos-delay="500"
          >
            About Us
          </NavLink>
          <NavLink
            to="insights"
            className={({ isActive }) => `font-logirent font-normal text-lg leading-none hover:text-[#016938] ${isActive ? "text-[#016938]" : ""}`}
            data-aos="fade-right" data-aos-delay="600"
          >
            Insights
          </NavLink>

          <NavLink
            to="contact-us"
            className="ml-3 pl-[15px] pr-[15px] pt-[14px] pb-[14px] bg-green text-white cursor-pointer font-logirent font-normal text-lg leading-none"
            data-aos="fade-right" data-aos-delay="700"
          >
            Contact Us
          </NavLink>
        </div>

        {/* Mobile Hamburger */}
        {!isOpen && (
          <button
            className={`md:hidden text-3xl z-50 ${location.pathname === "/about-us" ||
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
        {isOpen && (
          <button
            className="md:hidden text-3xl z-50 text-black"
            onClick={() => setIsOpen(false)}
          >
            <FiX />
          </button>
        )}
      </div>

      {/* Fullscreen Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-white flex flex-col items-center justify-center gap-8 transition-transform duration-500 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        {/* Force green logo inside menu */}
        <img src={greenLogo} alt="Logo" className="h-auto w-[140px] mb-8" />

        <Link
          onClick={handleClose}
          to=""
          className="font-logirent text-2xl leading-none hover:text-[#016938]"
        >
          العربية
        </Link>
        <Link
          onClick={handleClose}
          to="/"
          className="font-logirent text-2xl leading-none hover:text-[#016938]"
        >
          Home
        </Link>
        <Link
          onClick={handleClose}
          to="/our-projects"
          className="font-logirent text-2xl leading-none hover:text-[#016938]"
        >
          Our Projects
        </Link>
        <Link
          onClick={handleClose}
          to="about-us"
          className="font-logirent text-2xl leading-none hover:text-[#016938]"
        >
          About Us
        </Link>
        <Link
          onClick={handleClose}
          to="insights"
          className="font-logirent text-2xl leading-none hover:text-[#016938]"
        >
          Insights
        </Link>

        <Link
          onClick={handleClose}
          to="contact-us"
          className="mt-6 px-6 py-3 bg-green text-white rounded-md font-logirent text-xl leading-none"
        >
          Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
