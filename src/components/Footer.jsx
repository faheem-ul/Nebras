import logo from "../assets/footer/footerLogo.png";

import facebook from "../assets/footer/facebook.png";
import instagram from "../assets/footer/instagram.png";
import twitter from "../assets/footer/twitter.png";
import youtube from "../assets/footer/youtube.png";

const Footer = () => {
  return (
    <footer className="w-full bg-[#393C3D] text-white">
      <div className="max-w-[1312px] mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <img src={logo} alt="Logo" className="h-12 w-auto mb-6" />
          <ul className="space-y-3 font-kosans text-[16px] leading-[24px]">
            <li>hello@gmail.com</li>
            <li>(+1) 123456789</li>
            <li>
              Pavilion, 2 Marina Boulevard, <br />
              San Francisco, United States
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-kosans text-[20px] mb-6">QUICK LINKS</h3>
          <ul className="space-y-3 font-kosans text-[18px]">
            <li>
              <a href="#">What we do</a>
            </li>
            <li>
              <a href="#">Our projects</a>
            </li>
            <li>
              <a href="#">Who we are</a>
            </li>
            <li>
              <a href="#">Jafar Tukan Atelier</a>
            </li>
            <li>
              <a href="#">Involvement</a>
            </li>
            <li>
              <a href="#">News</a>
            </li>
            <li>
              <a href="#">Join us</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-kosans text-[20px] mb-6">UTILITY PAGES</h3>
          <ul className="space-y-3 font-kosans font-normal text-[18px]">
            <li>
              <a href="#">CCg & Hudson <br />Meridian</a>
            </li>
            <li>
              <a href="#">Invitation to a <br />Meeting</a>
            </li>
            <li>
              <a href="#">Terms of Use</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-kosans text-[20px] mb-6">Subscribe Newslatter</h3>

          <div className="relative md:w-[330px] w-full mb-6">
            <input
              type="email"
              placeholder="ENTER YOUR EMAIL"
              className="w-full pl-4 pr-[120px] py-3 rounded-full text-black bg-white outline-none placeholder-[#DDDDDD]-400 font-kosans text-[16px]"
            />
            <button className="absolute top-1 right-1 bottom-1 px-6 bg-green text-white rounded-full font-kosans text-[14px] cursor-pointer">
              SUBSCRIBE
            </button>
          </div>

          <div className="flex gap-4">
            {[facebook, instagram, youtube, twitter].map((icon, idx) => (
              <a
                href="#"
                key={idx}
                className="bg-white rounded-full p-2 flex items-center justify-center w-[40px] h-[40px]"
              >
                <img src={icon} alt="social" className="h-20px w-20px" />
              </a>
            ))}
          </div>
        </div>
      </div>


      <div className="border-t border-white-600">
        <p className="text-center py-6 text-sm font-kosans text-[16px]">
          © 2025 Nebras Consult, All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
