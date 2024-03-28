import React, { useState, useEffect, useContext } from "react";
import ElevatingIdea from "../ElevatingIdea/ElevatingIdea";
import WhatweDo from "./WhatweDo";
import WhatweDo2 from "./WhatweDo2";
import ElevatingIdea2 from ".";
import TextContext from "../../TextContext";
import VerticalDotNavigation from "../VerticalDotNavigation";

const Index = ({ whatWeDoData }) => {
  const { myText, sectionNo, setSectionNo, theme } = useContext(TextContext);
  const [activeDot, setActiveDot] = useState(0);
  const [randomArray, setRandomArray] = useState([]);
  const WhatweDoComponents = [WhatweDo, WhatweDo, WhatweDo, WhatweDo];

  useEffect(() => {
    const getRandomArray = () => {
      const array = Array.from({ length: WhatweDoComponents.length }).map(() =>
        Math.floor(Math.random() * 100)
      );
      setRandomArray(array);
    };

    getRandomArray();
  }, []);

  const ActiveWhatweDoComponent = WhatweDoComponents[activeDot];
  return (
    <div id="whatWeDo" className="relative overflow-hidden mt-96 xs:mt-0 lg:pl-12">
      <div
        className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden w-screen whitespace-nowrap text-transparent text-12xl leading-none bg-clip-text bg-transparent stroke-text border-yellow k:mb-64 2k:mb-[25rem] 2k2:mb-[44rem] 5k:mb-[60rem] 2k5:mb-[76rem] 2k7:mb-[100rem]"
        style={{
          borderColor: theme ? theme.textColor : "#FECF4F",
          WebkitTextStroke: "1px " + (theme ? theme.lightBackground : "#fada82"),
        }}
      >
        {myText.substring(7)}
      </div>
      <ActiveWhatweDoComponent whatWeDoData={whatWeDoData} />
      {/* <div className="sm:flex-1">
        {" "}
        <div className="sm:flex relative z-10 items-center justify-start w-full">
          <div className="hidden sm:block space-y-1 m-6">
            <div className="flex items-center space-x-2">

            </div>

          </div>
          <div className="sm:flex-1">
            <ActiveWhatweDoComponent whatWeDoData={whatWeDoData} />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Index;
