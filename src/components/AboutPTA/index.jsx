import React, { useState, useEffect, useContext } from "react";
import AboutPTA from "./AboutPTA";
import AboutPTA2 from "./AboutPTA2";
import TextContext from "../../TextContext";

const Index = () => {
  const bgText = useContext(TextContext);
  const [activeDot, setActiveDot] = useState(0);
  const [randomArray, setRandomArray] = useState([]);
  const AboutPTAComponents = [AboutPTA, AboutPTA, AboutPTA, AboutPTA];

  useEffect(() => {
    const getRandomArray = () => {
      const array = Array.from({ length: AboutPTAComponents.length }).map(() =>
        Math.floor(Math.random() * 100)
      );
      setRandomArray(array);
    };

    getRandomArray();
  }, []);

  const ActiveAboutPTAComponents = AboutPTAComponents[activeDot];
  return (
    <div className="relative h-screen overflow-hidden bg-grey1">
      <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden w-screen whitespace-nowrap text-transparent text-12xl leading-none bg-clip-text bg-transparent stroke-text border-yellow">
        {bgText.substring(0, 7)}
      </div>
      <div className="flex-1">
        {" "}
        <div className="flex relative z-10 items-center justify-start w-full">
          <div className="hidden sm:block space-y-1 m-6">
            {randomArray.map((num, index) => (
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
            ))}
          </div>
          <div className="flex-1">
            <ActiveAboutPTAComponents />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
