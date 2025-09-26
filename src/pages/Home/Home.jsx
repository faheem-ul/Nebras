import Hero from "./sections/Hero";

import WhatWeDo from "./sections/WhatWeDo";
import OurProjects from "./sections/OurProjects";
// import Insights from "./sections/Insights";
import ImageMarquee from "./sections/Marquee";

export default function Home() {
  return (
    <>
      <Hero />
      <WhatWeDo />
      <OurProjects />
      {/* <Insights /> */}
      <ImageMarquee />
    </>
  );
}
