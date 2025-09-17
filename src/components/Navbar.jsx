

import { useState } from "react";
import logo from "../assets/NavLogo.png"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md pt-[97px] pb-[37px]">
      <div className="max-w-[1220px] mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Left - Logo */}
        <img src={logo} alt="Logo" className="h-10 w-auto cursor-pointer" />

        {/* Right - Nav Links (Desktop) */}
        <div className="hidden md:flex items-center gap-8">
            <a href="#" className="font-logirent font-normal text-lg leading-none hover:text-green-600">العربية</a>
          <a href="#" className="font-logirent font-normal text-lg leading-none  hover:text-green-600">Home</a>
          <a href="#" className="font-logirent font-normal text-lg leading-none  hover:text-green-600">Our Projects</a>
          <a href="#" className="font-logirent font-normal text-lg leading-none hover:text-green-600">About Us</a>
          <a href="#" className="font-logirent font-normal text-lg leading-none  hover:text-green-600">Insights</a>
          
          
         <button className="ml-6 pl-[15px] pr-[15px] pt-[14px] pb-[14px] bg-green text-white cursor-pointer font-logirent font-normal text-lg leading-none">
            Contact Us
          </button>
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
        <div className="md:hidden bg-white px-4 pb-6 flex flex-col gap-4">
            <a href="#" className="font-logirent font-normal text-lg leading-none text-gray-800 hover:text-green-600">العربية</a>
          <a href="#" className="font-logirent font-normal text-lg leading-none text-gray-800 hover:text-green-600">Home</a>
          <a href="#" className="font-logirent font-normal text-lg leading-none text-gray-800 hover:text-green-600">Our Projects</a>
          <a href="#" className="font-logirent font-normal text-lg leading-none text-gray-800 hover:text-green-600">About Us</a>
          <a href="#" className="font-logirent font-normal text-lg leading-none text-gray-800 hover:text-green-600">Insights</a>
          

          <button className="mt-4 px-6 py-2 bg-green text-white rounded-md font-logirent font-normal text-lg leading-none">
            Contact Us
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
