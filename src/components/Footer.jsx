import logo from "../assets/footer/footerLogo.png";

import facebook from "../assets/footer/facebook.png";
import instagram from "../assets/footer/instagram.png";
import twitter from "../assets/footer/twitter.png";
import youtube from "../assets/footer/youtube.png";

const Footer = () => {
  return (
    <footer className="w-full bg-[#393C3D] text-white">
      <div
        className="
      max-w-[1312px] mx-auto px-5 
      pt-10 pb-10 
      md:pt-[76px] md:pb-[50px] 
      flex flex-col md:flex-row justify-between 
      gap-10 md:gap-[30px] flex-wrap
    "
      >
        {/* Left Section */}
        <div className="w-full max-w-[258px]">
          <img
            src={logo}
            alt="Logo"
            className="w-[160px] md:w-[208px] h-auto mb-6 md:mb-[38px]"
          />
          <ul className="font-kosans text-sm md:text-[16px] leading-[22px] md:leading-[24px]">
            <li className="mb-4 md:mb-[21px]">
              <a href="mailto:hello@gmail.com" className="hover:underline">
                hello@gmail.com
              </a>
            </li>
            <li className="mb-5 md:mb-[24px] text-base md:text-[18px]">
              <a href="tel:+1123456789" className="hover:underline">
                (+1) 123456789
              </a>
            </li>
            <li className="text-sm md:text-[16px]">
              Pavilion, 2 Marina Boulevard, <br />
              San Francisco, United States
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="w-full max-w-[258px]">
          <h3 className="font-kosans text-lg md:text-[20px] leading-none mb-6 md:mb-[47px]">
            QUICK LINKS
          </h3>
          <ul className="space-y-4 md:space-y-[27px] font-kosans text-base md:text-[18px]">
            <li><a href="#">What we do</a></li>
            <li><a href="#">Our projects</a></li>
            <li><a href="#">Who we are</a></li>
            <li><a href="#">Jafar Tukan Atelier</a></li>
            <li><a href="#">Involvement</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">Join us</a></li>
          </ul>
        </div>

        {/* Utility Pages */}
        <div className="w-full max-w-[258px]">
          <h3 className="font-kosans text-lg md:text-[20px] leading-none mb-6 md:mb-[47px]">
            UTILITY PAGES
          </h3>
          <ul className="space-y-4 md:space-y-[27px] font-kosans text-base md:text-[18px]">
            <li>
              <a href="#">
                CCg & Hudson <br />
                Meridian
              </a>
            </li>
            <li>
              <a href="#">
                Invitation to a <br />
                Meeting
              </a>
            </li>
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="w-full max-w-[388px]">
          <h3 className="font-kosans text-lg md:text-[20px] leading-none mb-6 md:mb-[47px]">
            Subscribe Newsletter
          </h3>

          <div className="relative mb-6 md:mb-[37px]">
            <input
              type="email"
              placeholder="ENTER YOUR EMAIL"
              className="
            w-full pl-4 pr-4 py-3 
            md:pl-[28px] md:pr-[140px] md:py-[23px] 
            rounded-full text-black bg-white outline-none 
            placeholder:text-sm md:placeholder:text-[15px] 
            placeholder-[#DDDDDD] font-kosans text-sm md:text-[15px] leading-[22px] md:leading-[24px]
          "
            />
            <button
              className="
            mt-2 relative 
            md:mt-0 md:absolute md:top-1/2 md:-translate-y-1/2 md:right-[19.8px] 
            px-5 py-3 md:px-[20px] md:py-[17.5px] 
            bg-green text-white rounded-full 
            font-kosans text-sm md:text-[14px] leading-none cursor-pointer
          "
            >
              Subscribe
            </button>
          </div>

          <div className="flex gap-4">
            {[facebook, instagram, youtube, twitter]
              .map((icon, idx) => (
                <a href="#" key={idx}
                  className="bg-white rounded-full p-2 flex items-center justify-center w-[40px] h-[40px]" >
                  <img src={icon} alt="social" className="h-20px w-20px" />
                </a>
              ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/50">
        <p className="text-center py-5 text-xs md:text-sm font-kosans md:text-[16px] md:leading-[18px]">
          © 2025 Nebras Consult, All rights reserved.
        </p>
      </div>
    </footer>

  );
};

export default Footer;
