import React, { useState, useEffect, useContext } from "react";
import LetsTalk from "./LetsTalk";
import LetsTalk2 from "./LetsTalk2";
import TextContext from "../../TextContext";
import VerticalDotNavigation from "../VerticalDotNavigation";

const Index = ({ letsTalkData }) => {
  const { myText, sectionNo, setSectionNo, theme } = useContext(TextContext);
  const [activeDot, setActiveDot] = useState(0);
  const [randomArray, setRandomArray] = useState([]);
  const ElevatingIdeaComponents = [LetsTalk, LetsTalk, LetsTalk, LetsTalk];

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
    <div id="letsTalk" className="lg:pl-12 relative sm:overflow-hidden">
      <div
        className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden w-screen whitespace-nowrap text-transparent text-12xl leading-none bg-clip-text bg-transparent stroke-text "
        style={{
          borderColor: theme ? theme.textColor : "#FECF4F",
          WebkitTextStroke: "1px " + (theme ? theme.lightBackground : "#fada82"),
        }}
      >
        {myText.substring(0, 30)}
      </div>
      <ActiveElevatingIdeaComponent letsTalkData={letsTalkData} />
      {/* <div className="flex-1">
        {" "}
        <div className="flex relative z-10 items-center justify-start w-full">
          <div className="hidden sm:block space-y-1 m-6">
            <div className="flex items-center space-x-2">
            
            </div>
        
          </div>
          <div className="flex-1">
            <ActiveElevatingIdeaComponent letsTalkData={letsTalkData} />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Index;
