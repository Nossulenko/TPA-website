import React, { useState, useEffect, useContext } from "react";
import LetsTalk from "./LetsTalk";
import LetsTalk2 from "./LetsTalk2";
import TextContext from "../../TextContext";

const Index = () => {
  const bgText = useContext(TextContext);
  const [activeDot, setActiveDot] = useState(0);
  const [randomArray, setRandomArray] = useState([]);
  const ElevatingIdeaComponents = [LetsTalk, LetsTalk2];

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
      <div className="absolute inset-0 z-0 flex items-center justify-center text-9xl opacity-10 tracking-widest">
        {bgText}
      </div>
      <div>{<ActiveElevatingIdeaComponent />}</div>
      <div className="relative z-10 flex items-center justify-start h-full m-6">
   
        <div className="space-y-1">
            
          {randomArray.map((num, index) => (
            <div key={index} className="flex items-center space-x-2">
              <span
                className={`block w-2 h-2 rounded-full ${
                  activeDot === index
                    ? "bg-yellow-500 border border-yellow-500 p-1"
                    : " border border-gray-200 bg-transparent p-1"
                }`}
                onClick={() => setActiveDot(index)}
              />
            </div>
          ))}


        </div>
     
      </div>
    </div>
  );
};

export default Index;
