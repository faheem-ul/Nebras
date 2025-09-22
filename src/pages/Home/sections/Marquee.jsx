
import Marquee from "react-fast-marquee";

import img1 from "../../../assets/marquee/marquee1.png";
import img2 from "../../../assets/marquee/marquee2.png";
import img3 from "../../../assets/marquee/marquee3.png";


const ImageMarquee = () => {
    const images = [img1, img2, img3];

    const repeatedImages = Array(10).fill(images).flat();

    return (
        <section className="w-full bg-white pb-[99px]">
            <Marquee
                speed={50}
                gradient={false}
                pauseOnHover={true}
                className="gap-8"
            >
                {repeatedImages.map((img, i) => (
                    <div key={i} className="mx-6">
                        <img
                            src={img}
                            alt={`marquee-${i}`}
                            className="w-[200px] sm:w-[250px] h-auto object-contain"
                        />
                    </div>
                ))}
            </Marquee>
        </section>
    );
};


export default ImageMarquee;
