import React from "react";
import { SECTION_HEIGHT } from "../../constants/ScreenUtils";
import IntroText from "./IntroText";
const Hero = () => {
  return (
    <div
      style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
      className="relative w-full pb-16"
    >
      <IntroText />
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-linear-to-b from-surface/0 to-surface" />
    </div>
  );
};

export default Hero;
