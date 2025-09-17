


import whatWeDoImage from "../../../assets/home/what we do.png";

export default function WhatWeDo() {
  return (
    <section className="w-full bg-white px-6 py-16">
      <div className="max-w-[1220px] w-full mx-auto flex flex-col gap-4">
        
        <h2 className="text-[36px] md:text-[65px] font-logirent leading-tight">
          What We Do
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-start">
    
          <div>
            <img
              src={whatWeDoImage}
              alt="What we do"
              className="w-full object-cover"
            />
          </div>

      
          <div>
            <p className="max-w-[770px] text-[18px] md:text-[24px] font-kosans mb-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <p className="max-w-[770px] text-[18px] md:text-[24px] font-kosans mb-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book.
            </p>
            <p className="max-w-[770px] text-[18px] md:text-[24px] font-kosans mb-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
