

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

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
    if (location.pathname === "/about-us" || location.pathname === "/contact-us") {
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
        <img
          src={logo}
          alt="Logo"
          className="h-auto w-[120px] md:w-[166px] cursor-pointer"
        />

        {/* Right - Nav Links (Desktop) */}
        <div className="hidden md:flex items-center justify-end gap-8 flex-wrap">
          <Link to="" className="font-logirent font-normal text-lg leading-none hover:text-green-600">
            العربية
          </Link>
          <Link to="/" className="font-logirent font-normal text-lg leading-none hover:text-green-600">
            Home
          </Link>
          <Link to="" className="font-logirent font-normal text-lg leading-none hover:text-green-600">
            Our Projects
          </Link>
          <Link to="about-us" className="font-logirent font-normal text-lg leading-none hover:text-green-600">
            About Us
          </Link>
          <Link to="insights" className="font-logirent font-normal text-lg leading-none hover:text-green-600">
            Insights
          </Link>

          <Link
            to="contact-us"
            className="ml-6 pl-[15px] pr-[15px] pt-[14px] pb-[14px] bg-green text-white cursor-pointer font-logirent font-normal text-lg leading-none"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className={`md:hidden text-3xl z-50 ${
            location.pathname === "/about-us" || location.pathname === "/contact-us"
              ? "text-white"
              : "text-black"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Fullscreen Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-white flex flex-col items-center justify-center gap-8 transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Force green logo inside menu */}
        <img src={greenLogo} alt="Logo" className="h-auto w-[140px] mb-8" />

        <Link onClick={handleClose} to="" className="font-logirent text-2xl leading-none hover:text-green-600">
          العربية
        </Link>
        <Link onClick={handleClose} to="/" className="font-logirent text-2xl leading-none hover:text-green-600">
          Home
        </Link>
        <Link onClick={handleClose} to="" className="font-logirent text-2xl leading-none hover:text-green-600">
          Our Projects
        </Link>
        <Link onClick={handleClose} to="about-us" className="font-logirent text-2xl leading-none hover:text-green-600">
          About Us
        </Link>
        <Link onClick={handleClose} to="insights" className="font-logirent text-2xl leading-none hover:text-green-600">
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
