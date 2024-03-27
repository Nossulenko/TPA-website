import React, { useState, useEffect, useContext } from "react";
import ElevatingIdea from "../ElevatingIdea/ElevatingIdea";
import Services from "./Services";
import Services2 from "./Services2";
import ElevatingIdea2 from ".";
import TextContext from "../../TextContext";
import VerticalDotNavigation from "../VerticalDotNavigation";

const Index = ({ servicesData }) => {
  const { myText, sectionNo, setSectionNo, theme } = useContext(TextContext);
  const [activeDot, setActiveDot] = useState(0);
  const [randomArray, setRandomArray] = useState([]);
  const ServicesComponents = [Services, Services, Services, Services];

  useEffect(() => {
    const getRandomArray = () => {
      const array = Array.from({ length: ServicesComponents.length }).map(() =>
        Math.floor(Math.random() * 100)
      );
      setRandomArray(array);
    };

    getRandomArray();
  }, []);

  const ActiveServicesComponent = ServicesComponents[activeDot];
  return (
    <div
      id="services"
      className={`relative overflow-hidden`}
      style={{ backgroundColor: theme ? theme.background : "#ECEBE9" }}
    >
      <div
        className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden w-screen whitespace-nowrap text-transparent text-12xl leading-none bg-clip-text bg-transparent stroke-text border-yellow k:mb-96 "
        style={{
          borderColor: theme ? theme.textColor : "#FECF4F",
          WebkitTextStroke: "1px " + (theme ? theme.lightBackground : "#fada82"),
        }}
      >
        {myText.substring(1, 20)}
      </div>
      <ActiveServicesComponent servicesData={servicesData} />
      {/* <div className="sm:flex-1">
        {" "}
        <div className="sm:flex relative z-10 items-center justify-start w-full">
          <div className="hidden sm:block space-y-1 m-6">
            <div className="flex items-center space-x-2">
            </div>

          </div>
          <div className="sm:flex-1">
            <ActiveServicesComponent servicesData={servicesData} />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Index;
