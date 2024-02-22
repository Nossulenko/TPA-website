import React, { useState, useEffect, useContext } from "react";
import ElevatingIdea from "../ElevatingIdea/ElevatingIdea";
import HowToOperate from "./HowToOperate";
import HowToOperate2 from "./HowToOperate2";
import ElevatingIdea2 from ".";
import TextContext from "../../TextContext";
import VerticalDotNavigation from "../VerticalDotNavigation";

const Index = ({ howToOperateData }) => {
  const { myText, sectionNo, setSectionNo, theme } = useContext(TextContext);
  const [activeDot, setActiveDot] = useState(0);
  const [randomArray, setRandomArray] = useState([]);
  const HowToOperateComponents = [HowToOperate, HowToOperate, HowToOperate, HowToOperate];

  useEffect(() => {
    const getRandomArray = () => {
      const array = Array.from({ length: HowToOperateComponents.length }).map(() =>
        Math.floor(Math.random() * 100)
      );
      setRandomArray(array);
    };

    getRandomArray();
  }, []);

  const ActiveHowToOperateComponent = HowToOperateComponents[activeDot];
  return (
    <div id="howToOperate" className="relative overflow-hidden">
      <div
        className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden w-screen whitespace-nowrap text-transparent text-12xl leading-none bg-clip-text bg-transparent stroke-text border-yellow"
        style={{
          borderColor: theme ? theme.textColor : "#FECF4F",
          WebkitTextStroke: "1px " + (theme ? theme.lightBackground : "#fada82"),
        }}
      >
        {myText.substring(1, 7)}
      </div>
      <div className="sm:flex-1">
        {" "}
        <div className="sm:flex relative z-10 items-center justify-start w-full">
          <div className="hidden sm:block space-y-1 m-6">
            <div className="flex items-center space-x-2">
              <VerticalDotNavigation sectionNo={sectionNo} setSectionNo={setSectionNo} />
            </div>
            {/* {randomArray.map((num, index) => (
              <div key={index} className="flex items-center space-x-2">
                <span
                  className={`block w-2 h-2 rounded-full ${
                    activeDot === index
                      ? "bg-yellow border border-yellow-500 p-2"
                      : " border border-gray-200 bg-transparent p-2"
                  }`}
                  onClick={() => setActiveDot(index)}
                />
              </div>
            ))} */}
          </div>
          <div className="sm:flex-1">
            <ActiveHowToOperateComponent howToOperateData={howToOperateData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
