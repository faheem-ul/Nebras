import heroBg from "../../../assets/home/hero-bg.jpg";
import img1 from "../../../assets/home/engineering.png";
import img2 from "../../../assets/home/planning.png";
import img3 from "../../../assets/home/consulting.png";
import Text from "../../../components/ui/Text";

const Hero = () => {
  return (
    <section className="w-full bg-white">

      {/* Big Hero Background */}
      <div
        className="relative w-full h-[600px] sm:h-[750px] md:h-[800px] bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black/30 "></div>

        <div className="relative  max-w-[1312px] mx-auto px-4 h-full flex items-center">
          {/* Welcome Message */}
          <Text className="text-white font-logirent text-[32px] sm:text-[48px] md:text-[65px] leading-tight">
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
            className="w-full h-full object-cover"
          />
          {/* Black Overlay */}
          <div className="absolute inset-0 bg-black/30"></div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center  z-10">
            <Text className="text-white text-[20px] sm:text-[28px] md:text-[40px] font-logirent group-hover:hidden">
              Engineering
            </Text>
            <button className="hidden group-hover:inline-block w-[220px] sm:w-[280px] md:w-[412px] bg-[#393C3D] text-white font-kosans text-[16px] sm:text-[20px] md:text-[28px] py-2 cursor-pointer">
              Discover
            </button>
          </div>
        </div>

        {/* Planning */}
        <div className="relative group overflow-hidden">
          <img
            src={img2}
            alt="Planning"
            className="w-full h-full object-cover"
          />
          {/* Black Overlay */}
          <div className="absolute inset-0 bg-black/30"></div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center  z-10">
            <Text className="text-white text-[20px] sm:text-[28px] md:text-[40px] font-logirent group-hover:hidden">
              Planning
            </Text>
            <button className="hidden group-hover:inline-block w-[220px] sm:w-[280px] md:w-[412px] bg-[#393C3D] text-white font-kosans text-[16px] sm:text-[20px] md:text-[28px] py-2 cursor-pointer">
              Discover
            </button>
          </div>
        </div>

        {/* Consulting */}
        <div className="relative group overflow-hidden">
          <img
            src={img3}
            alt="Consulting"
            className="w-full h-full object-cover"
          />
          {/* Black Overlay */}
          <div className="absolute inset-0 bg-black/30"></div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center  z-10">
            <Text className="text-white text-[20px] sm:text-[28px] md:text-[40px] font-logirent group-hover:hidden">
              Consulting
            </Text>
            <button className="hidden group-hover:inline-block w-[220px] sm:w-[280px] md:w-[412px] bg-[#393C3D] text-white font-kosans text-[16px] sm:text-[20px] md:text-[28px] py-2 cursor-pointer">
              Discover
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
