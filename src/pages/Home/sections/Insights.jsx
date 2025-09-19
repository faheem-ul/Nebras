import insight from "../../../assets/home/insight-image.png";
import Text from "../../../components/ui/Text";

const Insights = () => {
    return (
        <section className="w-full bg-white pt-[105px] pb-[95px]">
            <div className="max-w-[1312px] w-full mx-auto px-4">

                {/* Section header */}
                <div className="flex flex-col gap-6 sm:flex-row sm:justify-between sm:items-center mb-[52px]">
                    <Text className="font-logirent text-[32px] sm:text-[50px] lg:text-[65px] leading-tight text-outline-black">
                        Insights
                    </Text>
                    <button className="px-6 py-3 bg-green text-white font-kosans font-normal text-lg sm:text-xl lg:text-2xl">
                        See All
                    </button>
                </div>

                {/* Horizontal scroll cards */}
                <div className="overflow-x-auto mt-6 scrollbar-thick scrollbar-thumb-[#016938] scrollbar-track-gray-300">
                    <div className="flex gap-[27px] w-max pb-[72px]">
                        {[...Array(6)].map((_, i) => (
                            <div key={i} className="flex-shrink-0 w-[418px]">
                                <img
                                    src={insight}
                                    alt={`Insight ${i + 1}`}
                                    className="w-full h-auto object-cover"
                                />
                                <Text className="text-black font-kosans md:text-[14px] sm:text-[16px] font-normal mt-[20px]">
                                    05/08/2025 9:56:09 AM
                                </Text>
                                <Text className="text-black font-kosans md:text-[16px] sm:text-[18px] font-normal mt-[14px]">
                                    “Happy International Women’s Day”
                                </Text>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Custom scrollbar styling */}
            <style jsx>{`
        /* Make scrollbar thicker for all browsers */
        .scrollbar-thick::-webkit-scrollbar {
          height: 6.5px; /* thickness of horizontal scrollbar */
        }
        .scrollbar-thick::-webkit-scrollbar-track {
          background: #e5e7eb; 
        }
        .scrollbar-thick::-webkit-scrollbar-thumb {
          background-color: #016938; /* green thumb */
        }
      `}</style>
        </section>
    );
};

export default Insights;
