// import whatWeDoImage from "../../../assets/home/what we do.png";
import whatWeDoImage from "../../../assets/home/what-we-do.png";
import Text from "../../../components/ui/Text";

export default function WhatWeDo() {
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

        <div className="flex flex-col md:flex-row gap-[70px]">
          {/* Image */}
          <div className=" overflow-hidden hidden md:block">
            <img
              src={whatWeDoImage}
              alt="What we do"
              className="w-full object-cover h-full relative top-[31px]"
            />
          </div>

          {/* Text content */}
          <div className="pb-[85px] w-full md:max-w-[786px]" data-aos="fade-up" data-aos-delay="400">
            <Text className="mb-[35px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Text>
            <Text className="mb-[35px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Text>
            <Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Text>
          </div>
        </div>
      </div>
    </section>
  );
}
