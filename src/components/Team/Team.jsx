import React, { useState, useEffect, useContext } from "react";
import TextContext from "../../TextContext";
import Image from "next/image";
import EastIcon from "@mui/icons-material/East";
import imageUrlBuilder from "@sanity/image-url";
import sanityClient from "../../lib/sanity";
import getImageUrl from "../../lib/sanity";
import { useSwipeable } from "react-swipeable";

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

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
  return builder.image(source);
}

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

  const textBlocks1 = teamData && teamData.members ? teamData.members : [];

  const textBlocks = textBlocks1.map((block) => {
    const imageUrl = urlFor(block.image.asset).url();
    return {
      image: imageUrl,
      name: block.name,
      designation: block.designation,
      about: block.about,
    };
  });

  // Swipe Handlers
  const handlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrev(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });
  return (
    <>
      <div className="sm:h-screen relative w-full overflow-hidden sm:mx-10" {...handlers}>
        <div className=" sm:h-[80vh] m-6">
          <div
            className="font-space-grotesk text-6xl sm:text-9xl font-medium leading-9 sm:leading-93 break-words text-yellow  2xl:ml-16"
            style={{ color: theme ? theme.textColor : "#FECF4F" }}
          >
            Core team
          </div>
          <div className="sm:h-[70vh] sm:flex sm:justify-center sm:items-center sm:mx-24 lg:mx-24 sm:py-0">
            {textBlocks &&
              textBlocks.slice(beginningIndex, endIndex).map((item, index) => (
                <div key={index} className="sm:w-1/3 my-8 sm:my-16 sm:mx-0 2xl:ml-28">
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
                      {item && item.name}
                    </div>
                    <div className="my-1 sm:my-0 sm:w-64 text-black text-xl break-words">
                      {item.designation}
                    </div>
                    <div className="sm:hidden my-6 sm:my-0 sm:w-66 text-black text-xl break-words">
                      {item.about}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className=" sm:hidden flex flex-row sm:flex-col justify-center sm:space-y-1 space-x-2 space-y-1 mx-6">
          {textBlocks.map((num, index) => (
            <div key={index} className="flex items-center justify-center space-x-2">
              <span
                className={`block w-2 h-2 rounded-full ${
                  currentIndex === index
                    ? "bg-yellow border border-yellow-500 p-2"
                    : " border border-gray-200 bg-transparent p-2"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Team;
