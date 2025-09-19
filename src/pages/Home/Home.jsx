import Hero from "./sections/Hero";

import WhatWeDo from "./sections/WhatWeDo";
import OurProjects from "./sections/OurProjects";
import Insights from "./sections/Insights";
import ImageMarquee from "./sections/Marquee";

// import something from "public/vite.svg";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhatWeDo />
      <OurProjects />
      <Insights />
      <ImageMarquee />
    </main>
  );
}
