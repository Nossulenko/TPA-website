// TPA-Website/src/components/ElevatingIdea/ElevatingIdea.jsx
import React, { useContext, useState, useEffect } from "react";
import Link from "next/link";
import TextContext from "../../TextContext";
import Image from "next/image";
import EastIcon from "@mui/icons-material/East";
import imageUrlBuilder from "@sanity/image-url";
import sanityClient from "../../lib/sanity";
import SquareLoader from "react-spinners/SquareLoader";

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
  return builder.image(source);
}

const ElevatingIdea = ({ elevatingIdeaData, loading }) => {
  const { myText, sectionNo, setSectionNo, theme, color } = useContext(TextContext);
  const [rightSpace, setRightSpace] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const hoverStyle = {
    boxShadow: `0px 0px 4px 4px ${theme ? theme.lightBackground : "rgba(255, 207, 79, 0.8)"}`,
  };
  const { image } = elevatingIdeaData;
  useEffect(() => {
    if (elevatingIdeaData?.image?.width < 300) {
      setRightSpace(70);
    } else if (elevatingIdeaData?.image?.width < 600) {
      setRightSpace(20);
    } else {
      setRightSpace(0);
    }
  }, [elevatingIdeaData]);
  // console.log("elevating image.asset._ref", image.asset._ref);
  return (
    <div className="sm:flex items-center justify-center sm:h-[90vh]">
      {" "}
      <div className=" w-full sm:flex items-center justify-around">
        <div className="h-[80vh] sm:h-[80vh] sm:w-2/3 2xl:h-auto m-6">
          <div className=" text-6xl sm:text-8xl font-medium leading-93 uppercase break-words">
            {elevatingIdeaData.heading}
          </div>
          <div className="sm:w-4/5 hidden sm:block  text-4xl font-normal leading-127.5 my-6">
            {elevatingIdeaData.subHeading}
          </div>
          <div className="sm:hidden relative bottom-0 right-0 -mb-12">
            <div className="flex items-center justify-center">
              <img
                src={image && image.asset && urlFor(image.asset._ref)}
                alt={elevatingIdeaData.image.alt || "elevating"}
                width={elevatingIdeaData.image.width / 2 || "300"}
                height={elevatingIdeaData.image.height / 2 || "300"}
                layout="responsive"
              />
            </div>
            <div className=" my-8 sm:my-0 sm:mx-16 text-3xl sm:text-4xl font-medium">
              {elevatingIdeaData.subHeading}
            </div>
            <div className=" sm:m-16 flex justify-start items-center space-x-4 xs:space-x-6 absolute">
              <div className="w-fit pb-2 relative shadow-2xl cursor-pointer">
                <div
                  className=" rounded-full p-1 border-solid"
                  onMouseOver={() => setIsHovered(true)}
                  onMouseOut={() => setIsHovered(false)}
                  style={{
                    ...(isHovered ? hoverStyle : {}),
                    backgroundColor: theme ? theme.textColor : "#FECF4F",
                    borderColor: theme ? theme.textColor : "#FECF4F",
                  }}
                >
                  <EastIcon />
                </div>
              </div>

              {elevatingIdeaData.link && (
                <Link href={elevatingIdeaData.link}>
                  <div className="text-black text-center font-space-grotesk text-22 font-medium underline">
                    {elevatingIdeaData.linkText}
                  </div>
                </Link>
              )}
            </div>
          </div>
          <div className="hidden sm:flex w-1/3 justify-start items-center space-x-6 sm:mt-20">
            {" "}
            <div className="w-fit pb-2 relative  shadow-2xl cursor-pointer">
              <div
                className=" rounded-full p-1  border-solid"
                onMouseOver={() => setIsHovered(true)}
                onMouseOut={() => setIsHovered(false)}
                style={{
                  ...(isHovered ? hoverStyle : {}),
                  backgroundColor: theme ? theme.textColor : "#FECF4F",
                  borderColor: theme ? theme.textColor : "#FECF4F",
                }}
              >
                <EastIcon />
              </div>
            </div>
            {elevatingIdeaData.link && (
              <Link href={elevatingIdeaData.link.current}>
                <div className="text-black text-center font-space-grotesk text-22 font-medium underline">
                  {elevatingIdeaData.linkText}
                </div>
              </Link>
            )}
          </div>
        </div>
        <div
          className={`sm:h-[80vh] 2xl:h-auto hidden sm:block right-0 `}
          style={{ right: `${rightSpace}px` }}
        >
          <img
            src={image && image.asset && urlFor(image.asset._ref)}
            alt={elevatingIdeaData.image.alt || "elevating"}
            width={elevatingIdeaData.image.width || "400"}
            height={elevatingIdeaData.image.height || "400"}
            layout="responsive"
          />
        </div>
      </div>
    </div>
  );
};

export default ElevatingIdea;
