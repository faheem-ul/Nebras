
import project from "../../../assets/home/project.png";
import Text from "../../../components/ui/Text";

const OurProjects = () => {
  return (
    <section className="w-full bg-[#393C3D] pt-[105px] pb-[95px]">
      <div className="max-w-[1312px] w-full mx-auto px-4">

        {/* Section header */}
        <div className="flex flex-col gap-6 sm:flex-row sm:justify-between sm:items-center mb-[64px]">
          <Text className="font-logirent text-[40px] sm:text-[50px] lg:text-[65px] leading-tight text-white">
            <span className="text-outline-white">Our</span> Projects
          </Text>
          <button className="px-6 py-3 bg-green text-white font-kosans font-normal text-lg sm:text-xl lg:text-2xl">
            See All
          </button>
        </div>

        {/* Project cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[27px] gap-y-[64px]">
          {[...Array(6)].map((_, i) => (
            <div key={i}>
              <img src={project} alt="Project" className="w-full" />

              <Text className="text-white font-kosans text-[16px] font-normal mt-[26px]">
                UAE - ABU DHABI
              </Text>

              <Text className="text-white font-kosans text-[18px] font-normal mt-[20px]">
                AMAAR GROUP TOWER
              </Text>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProjects;
