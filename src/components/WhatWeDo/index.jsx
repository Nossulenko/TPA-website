import React, { useState, useEffect, useContext } from "react";
import ElevatingIdea from "../ElevatingIdea/ElevatingIdea";
import WhatweDo from "./WhatweDo";
import WhatweDo2 from "./WhatweDo2";
import ElevatingIdea2 from ".";
import TextContext from "../../TextContext";

const Index = () => {
  const bgText = useContext(TextContext);
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
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden w-screen whitespace-nowrap text-transparent text-12xl leading-none bg-clip-text bg-transparent stroke-text border-yellow">
        {bgText.substring(7, 11)}
      </div>
      <div className="sm:flex-1">
        {" "}
        <div className="sm:flex relative z-10 items-center justify-start w-full">
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
          <div className="sm:flex-1">
            <ActiveWhatweDoComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
