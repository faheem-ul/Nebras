import heroBg from "../../../assets/home/hero-bg.jpg";
import img1 from "../../../assets/home/engineering.png";
import img2 from "../../../assets/home/planning.png";
import img3 from "../../../assets/home/consulting.png";
import Text from "../../../components/ui/Text";

const Hero = () => {
  return (
    <section className="w-full bg-white overflow-hidden">

      {/* Big Hero Background */}
      <div className="relative w-full h-[600px] sm:h-[750px] md:h-[800px] overflow-hidden">
        {/* Zooming Background Layer */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-slow-zoom"
          style={{ backgroundImage: `url(${heroBg})` }}
        ></div>

        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black/30 "></div>

        <div className="relative  max-w-[1312px] mx-auto px-5 h-full flex pt-[353px]">
          {/* Welcome Message */}
          <Text as="h1" className="text-white ">
            Welcome <br /> Message
          </Text>
        </div>
      </div>

      {/* 3 Images Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-0">
        {/* Engineering */}
        <div className="relative group overflow-hidden">
          <img
            src={img1}
            alt="Engineering"
            className="w-full h-full object-cover transform origin-center transition duration-300 ease-in-out group-hover:scale-108"
          />
          {/* Black Overlay */}
          <div className="absolute inset-0 bg-black/30"></div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center  z-10">
            <Text className="text-white text-[20px] sm:text-[28px] md:text-[40px] font-logirent group-hover:hidden">
              Engineering
            </Text>
            <button className="hidden  group-hover:inline-block w-[220px] sm:w-[280px] md:w-[412px] bg-[#393C3D] text-white font-kosans text-[16px] sm:text-[20px] md:text-[28px] py-2 cursor-pointer">
              Engineering
            </button>
          </div>
        </div>

        {/* Planning */}
        <div className="relative group overflow-hidden">
          <img
            src={img2}
            alt="Planning"
            className="w-full h-full object-cover transform origin-center transition duration-300 ease-in-out group-hover:scale-108"
          />
          {/* Black Overlay */}
          <div className="absolute inset-0 bg-black/30"></div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center  z-10">
            <Text className="text-white text-[20px] sm:text-[28px] md:text-[40px] font-logirent group-hover:hidden">
              Planning
            </Text>
            <button className="hidden group-hover:inline-block w-[220px] sm:w-[280px] md:w-[412px] bg-[#393C3D] text-white font-kosans text-[16px] sm:text-[20px] md:text-[28px] py-2 cursor-pointer">
              Planning
            </button>
          </div>
        </div>

        {/* Consulting */}
        <div className="relative group overflow-hidden">
          <img
            src={img3}
            alt="Consulting"
            className="w-full h-full object-cover transform origin-center transition duration-300 ease-in-out group-hover:scale-108"
          />
          {/* Black Overlay */}
          <div className="absolute inset-0 bg-black/30"></div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center  z-10">
            <Text className="text-white text-[20px] sm:text-[28px] md:text-[40px] font-logirent group-hover:hidden">
              Consulting
            </Text>
            <button className="hidden group-hover:inline-block w-[220px] sm:w-[280px] md:w-[412px] bg-[#393C3D] text-white font-kosans text-[16px] sm:text-[20px] md:text-[28px] py-2 cursor-pointer">
              Consulting
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
