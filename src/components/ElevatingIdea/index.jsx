// TPA-Website/src/components/ElevatingIdea/index.jsx
import React, { useState, useEffect, useContext } from "react";
import ElevatingIdea from "./ElevatingIdea";
import ElevatingIdea2 from "./ElevatingIdea2";
import TextContext from "../../TextContext";
import { Link } from "react-scroll";
import VerticalDotNavigation from "../VerticalDotNavigation";

const Index = ({ elevatingIdeaData, loading }) => {
  const { myText, sectionNo, setSectionNo, theme } = useContext(TextContext);
  const [activeDot, setActiveDot] = useState(0);
  const [randomArray, setRandomArray] = useState([]);
  const ElevatingIdeaComponents = [ElevatingIdea, ElevatingIdea, ElevatingIdea, ElevatingIdea];

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
    <div
      id="elevatingIdea"
      className="relative h-screen sm:overflow-hidden w-full max-w-full pr-0 sm:pr-6"
    >
      <div
        className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden w-screen whitespace-nowrap text-transparent text-12xl leading-none bg-clip-text bg-transparent stroke-text border-yellow"
        style={{
          borderColor: theme ? theme.textColor : "#FECF4F",
          WebkitTextStroke: "1px " + (theme ? theme.lightBackground : "#fada82"),
        }}
      >
        {myText.substring(0, 7)}
      </div>
      <div className="flex-1">
        {" "}
        <div className="flex relative z-10 items-center justify-start w-full max-w-full">
          <div className="hidden sm:block space-y-1 m-6">
            <div className="flex items-center space-x-2">
              <VerticalDotNavigation sectionNo={sectionNo} setSectionNo={setSectionNo} />
            </div>
          </div>
          <div className="flex-1 w-full">
            <ActiveElevatingIdeaComponent elevatingIdeaData={elevatingIdeaData} loading={loading} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
