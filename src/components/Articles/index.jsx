import React, { useState, useEffect, useContext } from "react";
import ElevatingIdea from "../ElevatingIdea/ElevatingIdea";
import Articles from "./Articles";
import Articles2 from "./Articles2";
import ElevatingIdea2 from ".";
import TextContext from "../../TextContext";
import VerticalDotNavigation from "../VerticalDotNavigation";

const Index = ({ articlesData }) => {
  const { myText, sectionNo, setSectionNo, theme } = useContext(TextContext);
  const [activeDot, setActiveDot] = useState(0);
  const [randomArray, setRandomArray] = useState([]);
  const ArticlesComponents = [Articles, Articles, Articles, Articles];

  useEffect(() => {
    const getRandomArray = () => {
      const array = Array.from({ length: ArticlesComponents.length }).map(() =>
        Math.floor(Math.random() * 100)
      );
      setRandomArray(array);
    };

    getRandomArray();
  }, []);

  const ActiveArticlesComponent = ArticlesComponents[activeDot];
  return (
    <div id="articles" className="relative overflow-hidden lg:pl-12">
      <div
        className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden w-screen whitespace-nowrap text-transparent text-12xl leading-none bg-clip-text bg-transparent stroke-text border-yellow k:mb-64 2k:mb-[25rem] 5k:mb-[60rem]"
        style={{
          borderColor: theme ? theme.textColor : "#FECF4F",
          WebkitTextStroke: "1px " + (theme ? theme.lightBackground : "#fada82"),
        }}
      >
        {myText.substring(10, 40)}
      </div>
      <ActiveArticlesComponent articlesData={articlesData} />
      {/* <div className="sm:flex-1">
        {" "}
        <div className="sm:flex relative z-10 items-center justify-start w-full">
          <div className="hidden sm:block space-y-1 m-6">
            <div className="flex items-center space-x-2"> */}
      {/* <VerticalDotNavigation sectionNo={sectionNo} setSectionNo={setSectionNo} /> */}
      {/* </div> */}
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
      {/* </div>
          <div className="sm:flex-1">
            <ActiveArticlesComponent articlesData={articlesData} />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Index;
