// TPA-Website/src/components/ElevatingIdea/ElevatingIdea.jsx
import React, { useContext } from "react";
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
  const { image } = elevatingIdeaData;
  // console.log("elevating image.asset._ref", image.asset._ref);
  console.log("image", image);
  return (
    <div className="relative w-full">
      <div className="sm:h-[80vh] m-6 sm:flex items-center justify-center">
        <div className="w-full sm:w-[60%]">
          <div className="text-6xl sm:text-8xl font-medium leading-none uppercase break-words">
            {elevatingIdeaData.heading}
          </div>
          {elevatingIdeaData.image && elevatingIdeaData.image.asset && (
            <div className="flex justify-center my-8  sm:hidden ">
              <img
                src={urlFor(elevatingIdeaData.image.asset._ref)}
                alt={elevatingIdeaData.image.alt || "elevating"}
                width={elevatingIdeaData.image.width / 2 || "300"}
                height={elevatingIdeaData.image.height / 2 || "300"}
                layout="responsive"
              />
            </div>
          )}
          <div className="text-2xl sm:text-4xl font-normal leading-none my-6 whitespace-normal">
            {elevatingIdeaData.subHeading}
          </div>
          {/* <div className="hidden absolute bottom-0 right-0 -mb-12">
            <img
              src={image && image.asset && urlFor(image.asset._ref)}
              alt={elevatingIdeaData.image.alt || "elevating"}
              width={elevatingIdeaData.image.width || "400"}
              height={elevatingIdeaData.image.height || "400"}
              layout="responsive"
            />
            <div className="w-2/3 mx-16 text-4xl font-medium">
              Transcending Boundaries with Tailored Sustainable Innovation
            </div>
            <div className="my-16 mx-8 sm:m-16 flex justify-start items-center space-x-6 absolute -bottom-40">
              <div className="w-fit pb-2 relative bg-gradient-radial shadow-2xl cursor-pointer">
                <div
                  className="shadow-custom bg-yellow rounded-full p-1 border-yellow border-solid"
                  style={{
                    backgroundColor: theme ? theme.textColor : "#FECF4F",
                    borderColor: theme ? theme.textColor : "#FECF4F",
                    boxShadow: `0px 0px 4px 4px ${
                      theme ? theme.lightBackground : "rgba(255, 207, 79, 0.8)"
                    }`,
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
          </div> */}
          <div className="flex justify-start items-center space-x-6  bottom-0">
            {" "}
            <div className="w-fit pb-2 relative bg-gradient-radial shadow-2xl cursor-pointer">
              <div
                className="shadow-custom bg-yellow rounded-full p-1 border-yellow border-solid"
                style={{
                  backgroundColor: theme ? theme.textColor : "#FECF4F",
                  borderColor: theme ? theme.textColor : "#FECF4F",
                  boxShadow: `0px 0px 4px 4px ${
                    theme ? theme.lightBackground : "rgba(255, 207, 79, 0.8)"
                  }`,
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
        <div className="sm:w-[40%]">
          {elevatingIdeaData.image && elevatingIdeaData.image.asset && (
            <div className="sm:h-[80vh] hidden sm:block ">
              <img
                src={urlFor(elevatingIdeaData.image.asset._ref)}
                alt={elevatingIdeaData.image.alt || "elevating"}
                width={elevatingIdeaData.image.width || "400"}
                height={elevatingIdeaData.image.height || "400"}
                layout="responsive"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ElevatingIdea;
