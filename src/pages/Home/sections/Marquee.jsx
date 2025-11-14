import Marquee from "react-fast-marquee";

import clientLogo1 from "@/assets/home/clients-logo/client-logo-(1).png";
import clientLogo2 from "@/assets/home/clients-logo/client-logo-(2).png";
import clientLogo3 from "@/assets/home/clients-logo/client-logo-(3).png";
import clientLogo4 from "@/assets/home/clients-logo/client-logo-(4).png";
import clientLogo5 from "@/assets/home/clients-logo/client-logo-(5).png";
import clientLogo6 from "@/assets/home/clients-logo/client-logo-(6).png";
import clientLogo7 from "@/assets/home/clients-logo/client-logo-(7).png";
import clientLogo8 from "@/assets/home/clients-logo/client-logo-(8).png";
import clientLogo9 from "@/assets/home/clients-logo/client-logo-(9).png";
import clientLogo10 from "@/assets/home/clients-logo/client-logo-(10).png";
import clientLogo11 from "@/assets/home/clients-logo/client-logo-(11).png";
import clientLogo12 from "@/assets/home/clients-logo/client-logo-(12).png";
import clientLogo13 from "@/assets/home/clients-logo/client-logo-(13).png";
import clientLogo14 from "@/assets/home/clients-logo/client-logo-(14).png";
import clientLogo15 from "@/assets/home/clients-logo/client-logo-(15).png";
import clientLogo16 from "@/assets/home/clients-logo/client-logo-(16).png";
import clientLogo17 from "@/assets/home/clients-logo/client-logo-(17).png";
import clientLogo18 from "@/assets/home/clients-logo/client-logo-(18).png";
import clientLogo19 from "@/assets/home/clients-logo/client-logo-(19).png";
import clientLogo20 from "@/assets/home/clients-logo/client-logo-(20).png";
import clientLogo21 from "@/assets/home/clients-logo/client-logo-(21).png";
import clientLogo22 from "@/assets/home/clients-logo/client-logo-(22).png";


const ImageMarquee = () => {
    const images = [clientLogo1, clientLogo2, clientLogo3, clientLogo4, clientLogo5, clientLogo6, clientLogo7, clientLogo8, clientLogo9,
        clientLogo10, clientLogo11, clientLogo12, clientLogo13, clientLogo14, clientLogo15, clientLogo16, clientLogo17, clientLogo18,
        clientLogo19, clientLogo20, clientLogo21, clientLogo22
    ];

    const repeatedImages = Array(10).fill(images).flat();

    return (
        <section className="w-full bg-white py-[40px] md:pt-[73px] md:pb-[43px]">
            <Marquee
                speed={50}
                gradient={false}
                pauseOnHover={true}
                className="gap-8 md:gap-[82px]"
            >
                {repeatedImages.map((img, i) => (
                    <div key={i} className="mx-6">
                        <img
                            src={img}
                            alt={`marquee-${i}`}
                            className="w-full max-h-[50px] md:max-h-[78px]   object-contain"
                        />
                    </div>
                ))}
            </Marquee>
        </section>
    );
};


export default ImageMarquee;
