
import insight from "../../../assets/home/insight-image.png";
import Text from "../../../components/ui/Text";

const Insights = () => {
    return (
        <section className="w-full bg-white pt-[105px] pb-[75px]">
            <div className="max-w-[1312px] w-full mx-auto px-4">

                {/* Section header */}
                <div className="flex flex-col gap-6 sm:flex-row sm:justify-between sm:items-center mb-[52px]">
                    <Text className="font-logirent text-[32px] sm:text-[50px] lg:text-[65px] leading-tight text-outline-black">
                        Insights
                    </Text>
                    <button className="px-6 py-3 bg-green text-white font-kosans font-normal text-lg sm:text-xl lg:text-2xl cursor-pointer">
                        See All
                    </button>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[27px] gap-y-[64px] mb-[60px]">
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className="flex flex-col">
                            <img src={insight} alt="Insight" className="w-full max-w-[418px] object-cover" />

                            <Text className="text-black font-kosans md:text-[14px] sm:text-[16px] font-normal mt-[20px]">
                                05/08/2025  9:56:09 AM
                            </Text>

                            <Text className="text-black font-kosans md:text-[16px] sm:text-[18px] font-normal mt-[14px]">
                                “Happy International Women’s Day”
                            </Text>
                        </div>
                    ))}
                </div>

                {/* Decorative bar */}
                <div className="w-full h-[7px] bg-gray-300 relative">
                    <div className="absolute top-0 left-0 h-full w-1/2 bg-green"></div>
                </div>
            </div>
        </section>
    );
};

export default Insights;



