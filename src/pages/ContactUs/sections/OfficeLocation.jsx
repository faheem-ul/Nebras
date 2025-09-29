// import { FaPhone, FaMapMarkerAlt, FaBookmark } from "react-icons/fa";
import Text from "@/components/ui/Text";

import locationNameIcon from '@/assets/contact/location-name.svg'
import phoneIcon from '@/assets/contact/phone-icon.svg'
import locationIcon from '@/assets/contact/location-icon.svg'

const locations = [
    {
        city: "Riyadh",
        phone: "+966506091166",
        address: "Mousa Bin Nusayr Street, Al Olaya, Riyadh 12241",
        mapUrl: "",
    },
    {
        city: "Jordan",
        phone: "+962776055626",
        address: "Mousa Bin Nusayr Street, Al Olaya, Riyadh 12241",
        mapUrl: "",
    },
];

const OfficeLocation = () => {
    return (
        <section className="bg-white pt-[53px] pb-[70px] max-w-[1312px] w-full mx-auto px-5">
            {/* Section Title */}
            <div data-aos="fade-up" data-aos-delay="400">
                <Text as="h1" className="text-center mb-[41px]">
                    Office Location
                </Text>
            </div>

            {/* Cards Grid */}
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-[25px]" data-aos="fade" data-aos-delay="500">
                {locations.map((loc, idx) => (
                    <div
                        key={idx}
                        className="border-[5px] border-[#52555A]/10 py-[30px] px-[26px] bg-white "
                    >
                        {/* Header */}
                        <div className="flex items-center gap-[18px] mb-[28.8px]">
                            <img src={locationNameIcon} alt="" className="w-[19px]" />
                            <Text className="md:text-[24px] ">{loc.city}</Text>
                        </div>

                        {/* Phone */}
                        <div className="flex items-start gap-[14.8px] mb-5">
                            <img src={phoneIcon} alt="" className="w-25px" />
                            <div>
                                <Text className="md:text-[16px]">Phone</Text>
                                <Text className="md:text-[14px] text-black/20">{loc.phone}</Text>
                            </div>
                        </div>

                        {/* Location */}
                        <div className="flex items-start gap-3 mb-6">
                            <img src={locationIcon} alt="" className="w-25px" />
                            <div>
                                <Text className="md:text-[16px]">Location</Text>
                                <Text className="md:text-[14px] text-black/20">
                                    {loc.address}
                                </Text>
                            </div>
                        </div>

                        {/* Button */}
                        <a
                            href={loc.mapUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-[#016938] hover:bg-green-900 text-white text-[16px] font-kosans uppercase px-4 py-2"
                        >
                            View on Google Maps
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default OfficeLocation;
