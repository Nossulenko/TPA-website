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
import client from "../lib/sanity";

const HomePage = () => {
  const [sectionNo, setSectionNo] = useState(1);
  const [posts, setPosts] = useState([]);
  const [theme, setTheme] = useState({});
  const [elevatingIdeaData, setElevatingIdeaData] = useState([]);
  const [whatWeDoData, setWhatWeDoData] = useState([]);
  const [howWeOperate, setHowWeOperate] = useState([]);
  const [letsTalkData, setLetsTalkData] = useState([]);
  const [teamData, setTeamData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          postsResult,
          themeResult,
          elevatingIdeaResult,
          whatWeDoResult,
          howWeOperate,
          letsTalk,
          team,
        ] = await Promise.all([
          client.fetch('*[_type == "movie"]'),
          client.fetch('*[_type == "theme"]'),
          client.fetch('*[_type == "elevating"]'),
          client.fetch('*[_type == "whatWeDo"]'),
          client.fetch('*[_type == "howWeOperate"]'),
          client.fetch('*[_type == "letsTalk"]'),
          client.fetch('*[_type == "team"]'),
        ]);

        setPosts(postsResult);
        setTheme(themeResult[0]);
        setElevatingIdeaData(elevatingIdeaResult[0]);
        setWhatWeDoData(whatWeDoResult[0]);
        setHowWeOperate(howWeOperate[0]);
        setLetsTalkData(letsTalk[0]);
        setTeamData(team[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  // useEffect(() => {
  //   if (letsTalkData && letsTalkData.officeLocations && letsTalkData.officeLocations[0]) {
  //     console.log("letsTalkData received59", letsTalkData.officeLocations[0]);
  //   }
  // }, [letsTalkData]);
  // console.log("letsTalkData receved", letsTalkData.officeLocations);
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
        <Team teamData={teamData} />
      </Link>
      <Link to="letsTalk" smooth duration={500}>
        <LetsTalk letsTalkData={letsTalkData} />
      </Link>
    </div>
  );
};

export default HomePage;
