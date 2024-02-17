import React, { useState, useEffect, useContext } from "react";
import ElevatingIdea from "./ElevatingIdea";
import ElevatingIdea2 from "./ElevatingIdea2";
import TextContext from "../../TextContext";

const Index = () => {
  const bgText = useContext(TextContext);
  const [activeDot, setActiveDot] = useState(0);
  const [randomArray, setRandomArray] = useState([]);
  const ElevatingIdeaComponents = [ElevatingIdea, ElevatingIdea2];

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
    <div className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden w-screen whitespace-nowrap text-transparent text-12xl leading-none bg-clip-text bg-transparent stroke-text border-yellow">
        {bgText.substring(0, 7)}
      </div>

      <div className="hidden sm:flex relative z-10 items-center justify-start h-full m-6">
        <div className="space-y-1">
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
        <div>{<ActiveElevatingIdeaComponent />}</div>
      </div>
    </div>
  );
};

export default Index;
