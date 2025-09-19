import { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../assets/nebras-lobo-green.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-transparent pt-[70px] md:pt-[97px] pb-[37px]">
      <div className="max-w-[1312px] mx-auto px-5  flex items-center justify-between">
        {/* Left - Logo */}
        <Link to="/">
          {" "}
          <img
            src={logo}
            alt="Logo"
            className="h-auto w-[120px] md:w-[166px] cursor-pointer"
          />
        </Link>

        {/* Right - Nav Links (Desktop) */}
        <div className="hidden md:flex items-center justify-end gap-8 flex-wrap">
          <Link
            to=""
            className="font-logirent font-normal text-lg leading-none hover:text-green-600"
          >
            العربية
          </Link>
          <Link
            to="/"
            className="font-logirent font-normal text-lg leading-none  hover:text-green-600"
          >
            Home
          </Link>
          <Link
            to="our-projects"
            className="font-logirent font-normal text-lg leading-none  hover:text-green-600"
          >
            Our Projects
          </Link>
          <Link
            to="about-us"
            className="font-logirent font-normal text-lg leading-none hover:text-green-600"
          >
            About Us
          </Link>
          <Link
            to="insights"
            className="font-logirent font-normal text-lg leading-none  hover:text-green-600"
          >
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
          className="md:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}

      {isOpen && (
        <div className="md:hidden bg-white pt-[20px] px-4 pb-6 flex flex-col gap-4 items-center">
          <Link
            to=""
            className="font-logirent font-normal text-lg leading-none hover:text-green-600"
          >
            العربية
          </Link>
          <Link
            to="/"
            className="font-logirent font-normal text-lg leading-none  hover:text-green-600"
          >
            Home
          </Link>
          <Link
            to=""
            className="font-logirent font-normal text-lg leading-none  hover:text-green-600"
          >
            Our Projects
          </Link>
          <Link
            to="about-us"
            className="font-logirent font-normal text-lg leading-none hover:text-green-600"
          >
            About Us
          </Link>
          <Link
            to=""
            className="font-logirent font-normal text-lg leading-none  hover:text-green-600"
          >
            Insights
          </Link>

          <button className="mt-4 px-6 py-2 bg-green text-white rounded-md font-logirent font-normal text-lg leading-none">
            Contact Us
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
