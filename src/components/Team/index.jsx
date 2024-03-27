import React, { useState, useEffect, useContext } from "react";
import Team from "./Team";
import Team2 from "./Team2";
import Image from "next/image";
import TextContext from "../../TextContext";
import VerticalDotNavigation from "../VerticalDotNavigation";

const Index = ({ teamData }) => {
  const { myText, sectionNo, setSectionNo, theme } = useContext(TextContext);
  const [activeDot, setActiveDot] = useState(0);
  const [randomArray, setRandomArray] = useState([]);
  const ElevatingIdeaComponents = [Team, Team, Team, Team];

  useEffect(() => {
    const getRandomArray = () => {
      const array = Array.from({ length: ElevatingIdeaComponents.length }).map(() =>
        Math.floor(Math.random() * 100)
      );
      setRandomArray(array);
    };

    getRandomArray();
  }, []);

  const ActiveElevatingIdeaComponent = ElevatingIdeaComponents[activeDot];
  return (
    <div id="team" className="relative sm:overflow-hidden my-16 sm:my-10">
      <div
        className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden w-screen whitespace-nowrap text-transparent text-12xl leading-none bg-clip-text bg-transparent stroke-text border-yellow k:mb-64 2k:mb-[25rem] 2k8:mb-[60rem]"
        style={{
          borderColor: theme ? theme.textColor : "#FECF4F",
          WebkitTextStroke: "1px " + (theme ? theme.lightBackground : "#fada82"),
        }}
      >
        {myText.substring(0, 20)}
      </div>
      <ActiveElevatingIdeaComponent teamData={teamData} />
      {/* <div className="">
        {" "}

          <div className="">
            <ActiveElevatingIdeaComponent teamData={teamData} />
          </div>

      </div> */}
    </div>
  );
};

export default Index;
