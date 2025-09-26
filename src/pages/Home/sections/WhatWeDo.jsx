import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";

import whatWeDoImage from "../../../assets/home/what-we-do.png";
import Text from "../../../components/ui/Text";

export default function WhatWeDo() {
  // Read More Content State
  const [showMore, setShowMore] = useState(false);

  const services = [
    {
      title: "Urban Planning & Urban Design",
      desc: "Crafting functional, aesthetically appealing, and sustainable urban environments.",
    },
    {
      title: "Urban Heritage",
      desc: "Preserving and revitalizing historical and cultural assets.",
    },
    {
      title: "Project Management",
      desc: "Ensuring projects are delivered efficiently, on time, and within budget.",
    },
    {
      title: "Engineering Design & Review",
      desc: "Providing innovative and technically sound design solutions.",
    },
    {
      title: "Infrastructure Engineering",
      desc: "Developing roads, bridges, tunnels, and other critical infrastructure.",
    },
    {
      title: "Transportation & Traffic Studies",
      desc: "Optimizing mobility, enhancing safety, and managing traffic.",
    },
    {
      title: "Quantity Surveying & Field Surveys",
      desc: "Conducting detailed technical and socio-economic surveys.",
    },
    {
      title: "Laser Scanning",
      desc: "Leveraging technology for precise measurements and analysis.",
    },
    {
      title: "Administrative Consulting & Governance",
      desc: "Supporting compliance, strategy, and organizational excellence.",
    },
  ];

  return (
    <section className="w-full bg-white pt-[58px] ">
      <div className="relative max-w-[1312px] px-5 w-full mx-auto">

        {/* Title */}
        <div data-aos="fade-right" data-aos-delay="400">
          <Text
            as="h2"
            className="text-[36px] md:text-[65px] font-logirent leading-tight mb-[30px] md:mb-0"
          >
            <span className="text-outline-black">What</span> We Do
          </Text>
        </div>

        <div className="relative flex flex-col md:flex-row gap-[70px]">
          {/* Image */}
          <div className="relative overflow-hidden hidden md:block">
            <div className="relative">
              <img
                src={whatWeDoImage}
                alt="What we do"
                className="w-full h-[804px] object-cover"
              />
            </div>

          </div>

          {/* Text content */}
          <div className="pb-[85px] w-full md:max-w-[786px]" data-aos="fade-up" data-aos-delay="400">
            <Text className="mb-[35px]">
              Established in the heart of Amman, Jordan, Nebras Consult is a leading engineering and technical consultancy dedicated to shaping sustainable communities across the Arab region. With Years of experience in infrastructure, urban planning, and architectural heritage,
              we deliver innovative, reliable, and sustainable solutions that address the needs of the modern era.
            </Text>
            <Text>
              Guided by our values of Innovation, Integrity, Excellence, Sustainability, and Collaboration, our highly
              skilled team of engineers and consultants works closely with clients and partners to transform complex challenges into practical, impactful results. At Nebras Consult, we don’t just consult, we build lasting solutions that serve communities and future generations.
            </Text>

            {/* Expandable Section */}
            {showMore && (
              <div className="mt-6 space-y-6">
                <Text>
                  At Nebras Consult, we provide comprehensive engineering and
                  consulting services that span the full project lifecycle, from
                  conceptual planning to execution and evaluation. Our expertise
                  is rooted in a deep understanding of the region’s cultural,
                  environmental, and technical landscape.
                </Text>

                <Text className="font-semibold font-logirent">
                  Our Core Services Include:
                </Text>

                <ul className="space-y-5">
                  {services.map((service, index) => (
                    <li key={index} className="flex flex-col ">
                      {/* Heading with icon */}
                      <div className="flex items-center gap-2">
                        <FaChevronRight className="w-4 h-4 text-[#016938]" />
                        <Text className="">
                          {service.title}
                        </Text>
                      </div>
                      {/* Description */}
                      <Text className="ml-6 md:text-[20px] ">
                        {service.desc}
                      </Text>
                    </li>
                  ))}
                </ul>

                <Text>
                  Through our work, Nebras Consult strives to deliver
                  sustainable, innovative, and practical solutions that drive
                  client success, enhance communities, and safeguard the
                  environment.
                </Text>
              </div>
            )}

            {/* Read More/Less Button */}
            <button
              onClick={() => setShowMore(!showMore)}
              className="mt-6 px-6 py-3 text-[18px]  md:px-[36px] md:py-[33.5px] bg-green text-white font-kosans md:text-[24px] leading-none cursor-pointer"
            >
              {showMore ? "Read Less" : "Read More"}
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}
