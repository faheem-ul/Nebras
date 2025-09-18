
import whatWeDoImage from "../../../assets/home/what we do.png";
import Text from "../../../components/ui/Text";

export default function WhatWeDo() {
  return (
    <section className="w-full bg-white px-6 py-16">
      <div className="max-w-[1312px] w-full mx-auto flex flex-col gap-4">

        {/* Title */}
        <Text
          as="h2"
          className="text-[36px] md:text-[65px] font-logirent leading-tight"
        >
          <span className="text-outline-black">What</span> We Do
        </Text>

        <div className="grid md:grid-cols-2 gap-10 items-start">

          {/* Image */}
          <div>
            <img
              src={whatWeDoImage}
              alt="What we do"
              className="w-full object-cover"
            />
          </div>

          {/* Text content */}
          <div>
            <Text className="max-w-[770px] mb-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Text>
            <Text className="max-w-[770px] mb-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book.
            </Text>
            <Text className="max-w-[770px] mb-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book.
            </Text>
          </div>
        </div>
      </div>
    </section>
  );
}
