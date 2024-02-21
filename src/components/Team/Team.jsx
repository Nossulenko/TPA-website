import React, { useState, useEffect, useContext } from "react";
import TextContext from "../../TextContext";
import Image from "next/image";
import EastIcon from "@mui/icons-material/East";

const textBlocks = [
  {
    id: "01",
    image: "/images/team.png",
    name: "Alain De Keyser1",
    designation: "Managing Partner & Strategy Designer",
    about:
      "With extensive expertise in Product Management, Startups, and Design Thinking, has played a vital role in creating innovative solutions for the banking industry and beyond. He's a dance enthusiast, often found enjoying Salsa, Bachata, Merengue and Kizomba.",
  },
  {
    id: "02",
    image: "/images/team.png",
    name: "Alain De Keyser2",
    designation: "Managing Partner & Strategy Designer",
    about:
      "With extensive expertise in Product Management, Startups, and Design Thinking, has played a vital role in creating innovative solutions for the banking industry and beyond. He's a dance enthusiast, often found enjoying Salsa, Bachata, Merengue and Kizomba.",
  },
  {
    id: "03",
    image: "/images/team.png",
    name: "Alain De Keyser3",
    designation: "Managing Partner & Strategy Designer",
    about:
      "With extensive expertise in Product Management, Startups, and Design Thinking, has played a vital role in creating innovative solutions for the banking industry and beyond. He's a dance enthusiast, often found enjoying Salsa, Bachata, Merengue and Kizomba.",
  },
];

const Team = ({ teamData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { myText, sectionNo, setSectionNo, theme } = useContext(TextContext);
  const [windowWidth, setWindowWidth] = useState(process.browser ? window.innerWidth : null);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleItems = windowWidth > 640 ? 3 : 1;

  const beginningIndex = visibleItems * Math.floor(currentIndex / visibleItems);
  const endIndex = beginningIndex + visibleItems;

  const handlePrev = () =>
    setCurrentIndex((currentIndex - visibleItems + textBlocks.length) % textBlocks.length);
  const handleNext = () => setCurrentIndex((currentIndex + visibleItems) % textBlocks.length);
  console.log("teamData rec in team", teamData);
  return (
    <>
      <div className="sm:h-screen relative w-full overflow-y-auto">
        <div className="h-[60vh] sm:h-[60vh] m-6">
          <div
            className="font-space-grotesk text-6xl sm:text-9xl font-medium leading-9 sm:leading-93 break-words text-yellow"
            style={{ color: theme ? theme.textColor : "#FECF4F" }}
          >
            Core team
          </div>
          <div className="sm:flex flex-col justify-start sm:flex-row mx-12 sm:mx-24 lg:mx-24 py-20 sm:py-0">
            {textBlocks.slice(beginningIndex, endIndex).map((item) => (
              <div key={item.id} className="sm:w-1/3 my-8 sm:my-16 sm:mx-0">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={200}
                  height={200}
                  className={`rounded-full sm:mx-auto sm:ml-4 my-4 p-1`}
                  style={{ backgroundColor: theme ? theme.background : "#ECEBE9" }}
                />
                <div className="text-left my-16 sm:my-0">
                  <div className=" sm:w-96 text-black text-4xl sm:text-3xl break-words">
                    {item.name}
                  </div>
                  <div className="my-1 sm:my-0 sm:w-66 text-black text-xl break-words">
                    {item.designation}
                  </div>
                  <div className="sm:hidden my-6 sm:my-0 sm:w-66 text-black text-xl break-words">
                    {item.about}
                  </div>
                </div>
              </div>
            ))}

            {/* <button onClick={handlePrev}>Previous</button>
            <button onClick={handleNext}>Next</button> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
