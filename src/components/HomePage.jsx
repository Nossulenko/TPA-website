import React, { useState, useEffect, useContext } from "react";
import ElevatingIdea from "./ElevatingIdea/index";
import WhatWeDo from "./WhatWeDo/index";
import HowWeOperate from "./HowWeOperate/index";
import HowToOperate from "./HowToOperate/index";
import Services from "./Services/index";
import Articles from "./Articles/index";
import LetsTalk from "./LetsTalk/index";
import Team from "./Team/index";
import About from "./AboutPTA/index";
import { Roboto, Space_Grotesk } from "next/font/google";
import { Link, animateScroll as scroll } from "react-scroll";
import VerticalDotNavigation from "./VerticalDotNavigation";

const HomePage = () => {
  return (
    <div>
      {/* <VerticalDotNavigation sectionNo={1} />z */}

      <Link to="elevatingIdea" smooth duration={500}>
        <ElevatingIdea />
      </Link>
      <Link to="whatWeDo" smooth duration={500}>
        <WhatWeDo />
      </Link>
      <Link to="howWeOperate" smooth duration={500}>
        <HowWeOperate />
      </Link>
      <Link to="howToOperate" smooth duration={500}>
        <HowToOperate />
      </Link>
      <Link to="services" smooth duration={500}>
        <Services />
      </Link>
      <Link to="articles" smooth duration={500}>
        <Articles />
      </Link>
      <Link to="about" smooth duration={500}>
        <About />
      </Link>
      <Link to="team" smooth duration={500}>
        <Team />
      </Link>
      <Link to="letsTalk" smooth duration={500}>
        <LetsTalk />
      </Link>
    </div>
  );
};

export default HomePage;
